# -*- coding: utf-8 -*-
"""EPTA 연습 서버 — Vercel 없이 이 PC 에서 돌린다.

    python practice/serve.py                 # http://127.0.0.1:8000
    python practice/serve.py --port 9000
    python practice/serve.py --host 0.0.0.0  # 같은 와이파이의 폰에서 접속 (PIN 필수)

**왜 로컬인가** — Vercel Blob 의 Advanced Operations 무료 한도(월 2,000회)가 소진되어
스토어가 정지됐고, 답안 하나당 `put` 이 두 번이라 세트 한 번에 64회를 쓴다. 전사는 이미
`transcribe.py` 로 로컬로 옮겼으므로 **서버가 하는 일은 파일 저장뿐**이다. 그 일에
클라우드 한도를 쓸 이유가 없다.

Vercel 의 API 다섯 개를 같은 모양으로 구현하므로 **풀이 화면·답안 보기 페이지와
pull.py · push.py · transcribe.py · backup.py 를 한 줄도 고치지 않는다.**

    POST /api/login      { pin }                → { token }
    POST /api/submit     { set, session, qid, answer, audio(base64), ... }
    GET  /api/results    ?set=&session=
    GET  /api/audio      ?path=r/<SET>/<세션>/<문항>.webm
    GET  /api/feedback   ?set=        POST /api/feedback

저장 위치 — Blob 의 경로 모양을 그대로 쓴다. `audioPath` 값이 같아야 기존 스크립트가 통한다.

    practice/local/r/<SET>/<세션>/<문항>.json   답안·전사본
    practice/local/r/<SET>/<세션>/<문항>.webm   녹음
    practice/local/f/<SET>.json                 채점 결과

정적 파일은 `web/` 를 그대로 내보낸다 — 세트 추가는 전처럼 `python practice/build.py
EPTA_XX` 면 되고, **배포(`vercel deploy`)는 더 이상 필요 없다.**

★ 폰에서 **녹음**하려면 https 가 필요하다. 브라우저는 보안 컨텍스트(https 또는 localhost)
  가 아니면 마이크를 막는다. `http://192.168.x.x:8000` 으로 들어가면 화면은 보이고 답안
  보기도 되지만 **마이크가 잡히지 않는다.** 폰 녹음이 필요하면 터널을 쓴다 :

      cloudflared tunnel --url http://127.0.0.1:8000

  진짜 https 주소가 나오고 **데이터는 이 PC 에만 쌓인다.** PC 에서 풀 때는
  `http://127.0.0.1:8000` 이 localhost 라 그냥 마이크가 된다.
"""
import argparse
import base64
import json
import mimetypes
import re
import sys
import threading
import time
import urllib.parse
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WEB = ROOT / "web"
STORE = ROOT / "practice" / "local"

SAFE = re.compile(r"[^A-Za-z0-9_-]")
AUDIO_PATH = re.compile(r"^r/[A-Za-z0-9_-]+/[A-Za-z0-9_-]+/[A-Za-z0-9_-]+\.(webm|ogg|m4a)$")

mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("audio/mpeg", ".mp3")
mimetypes.add_type("image/svg+xml", ".svg")

# 비밀번호 무차별 대입 방어. {IP: (실패횟수, 잠금해제시각)}
FAILS = {}
LOCK = threading.Lock()
MAX_FAILS = 10
LOCKOUT = 600          # 초


def dotenv():
    path = ROOT / ".env"
    v = {}
    if path.exists():
        for line in path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, val = line.split("=", 1)
                v[k.strip()] = val.strip()
    return v


def safe(s, n=64):
    return SAFE.sub("", str(s or ""))[:n]


def ext_for(mime=""):
    mime = mime or ""
    if "ogg" in mime:
        return ".ogg"
    if "mp4" in mime or "aac" in mime:
        return ".m4a"
    return ".webm"


class Handler(BaseHTTPRequestHandler):
    server_version = "EPTA-local"
    cfg = {}

    # ── 공통 ────────────────────────────────────────────
    def log_message(self, fmt, *args):
        # 녹음 업로드마다 한 줄씩 남겨 진행이 보이게 하되, 정적 파일은 조용히.
        if "/api/" in (self.path or ""):
            sys.stderr.write(f"  {self.command} {self.path.split('?')[0]}  {args[1] if len(args) > 1 else ''}\n")

    def send_json(self, code, obj):
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("content-type", "application/json; charset=utf-8")
        self.send_header("content-length", str(len(body)))
        self.send_header("cache-control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def body_json(self):
        n = int(self.headers.get("content-length") or 0)
        if n <= 0:
            return {}
        try:
            return json.loads(self.rfile.read(n).decode("utf-8"))
        except Exception:
            return {}

    def authed(self):
        want = self.cfg.get("EPTA_TOKEN")
        if not want:
            return True                      # 토큰을 안 쓰는 설정이면 통과
        return self.headers.get("x-epta-token") == want

    def need_auth(self):
        if self.authed():
            return False
        self.send_json(401, {"error": "unauthorized"})
        return True

    def query(self):
        return urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)

    def q1(self, name, default=""):
        return (self.query().get(name) or [default])[0]

    # ── 라우팅 ──────────────────────────────────────────
    def do_POST(self):
        path = urllib.parse.urlparse(self.path).path
        if path == "/api/login":
            return self.api_login()
        if self.need_auth():
            return
        if path == "/api/submit":
            return self.api_submit()
        if path == "/api/feedback":
            return self.api_feedback_post()
        self.send_json(404, {"error": "없는 경로"})

    def do_GET(self):
        path = urllib.parse.urlparse(self.path).path
        if path.startswith("/api/"):
            if self.need_auth():
                return
            if path == "/api/results":
                return self.api_results()
            if path == "/api/audio":
                return self.api_audio()
            if path == "/api/feedback":
                return self.api_feedback_get()
            return self.send_json(404, {"error": "없는 경로"})
        return self.static(path)

    # ── /api/login ──────────────────────────────────────
    def api_login(self):
        want = self.cfg.get("EPTA_PIN")
        token = self.cfg.get("EPTA_TOKEN", "")
        if not want:
            # PIN 을 설정하지 않았으면 잠그지 않는다 (localhost 전용 모드).
            return self.send_json(200, {"token": token})

        # 네 자리는 금방 다 돌려볼 수 있다. cloudflared 터널로 공개되면 더더욱
        # 그렇다(지연이 없을 때 초당 12회 — 1만 가지를 14분에 다 돈다).
        # 틀릴 때마다 1초씩 늦추고, 10회를 넘기면 10분 잠근다.
        #
        # ★ 잠금 확인은 반드시 PIN 대조보다 **먼저** 한다. 맞는 PIN 을 먼저 통과시키면
        #   공격자는 429 를 받으면서도 계속 돌리다가 맞는 순간 들어온다 — 잠금이
        #   아무 일도 하지 않게 된다.
        ip = self.client_address[0]
        with LOCK:
            n, until = FAILS.get(ip, (0, 0.0))
            now = time.time()
            if now < until:
                return self.send_json(429, {
                    "error": f"시도가 너무 많습니다. {int(until - now)}초 뒤에 다시 하세요."})

        if str(self.body_json().get("pin", "")).strip() == str(want):
            with LOCK:
                FAILS.pop(ip, None)
            return self.send_json(200, {"token": token})

        with LOCK:
            n, _ = FAILS.get(ip, (0, 0.0))
            n += 1
            FAILS[ip] = (n, time.time() + LOCKOUT if n >= MAX_FAILS else 0.0)
        if n >= MAX_FAILS:
            sys.stderr.write(f"  ! {ip} 비밀번호 {n}회 실패 — {LOCKOUT // 60}분 잠급니다\n")
            return self.send_json(429, {
                "error": f"시도가 너무 많습니다. {LOCKOUT // 60}분 뒤에 다시 하세요."})
        time.sleep(1)
        return self.send_json(401, {"error": "비밀번호가 맞지 않습니다"})

    # ── /api/submit ─────────────────────────────────────
    def api_submit(self):
        b = self.body_json()
        s, sess, qid = safe(b.get("set")), safe(b.get("session")), safe(b.get("qid"))
        if not (s and sess and qid):
            return self.send_json(400, {"error": "set, session, qid 필요"})

        d = STORE / "r" / s / sess
        d.mkdir(parents=True, exist_ok=True)
        rec_path = d / f"{qid}.json"

        # patch — 녹음은 두고 전사본만 고친다 (transcribe.py 가 쓴다).
        if b.get("patch"):
            if not rec_path.exists():
                return self.send_json(404, {"error": "그 문항의 기록이 없습니다"})
            rec = json.loads(rec_path.read_text(encoding="utf-8"))
            rec["transcript"] = str(b.get("transcript") or "")
            rec["sttError"] = None
            rec["patchedAt"] = datetime.now(timezone.utc).isoformat(timespec="seconds")
            rec_path.write_text(json.dumps(rec, ensure_ascii=False, indent=2), encoding="utf-8")
            return self.send_json(200, {"ok": True, "patched": f"{s}/{sess}/{qid}"})

        audio_path = None
        if b.get("audio"):
            name = qid + ext_for(b.get("mime"))
            try:
                (d / name).write_bytes(base64.b64decode(b["audio"]))
                audio_path = f"r/{s}/{sess}/{name}"
            except Exception as e:
                return self.send_json(500, {"error": f"녹음 저장 실패: {e}"})

        # 이미 있던 기록의 녹음·전사본은 지우지 않는다 (글자만 다시 보내는 경우가 있다).
        old = {}
        if rec_path.exists():
            try:
                old = json.loads(rec_path.read_text(encoding="utf-8"))
            except Exception:
                old = {}

        rec = {
            "set": s, "session": sess, "qid": qid,
            "answer": str(b.get("answer") or ""),
            # 서버 전사는 하지 않는다 — transcribe.py 가 로컬 whisper 로 채운다.
            "transcript": old.get("transcript", ""),
            "sttError": None,
            "audioPath": audio_path or old.get("audioPath"),
            "seconds": b.get("seconds"),
            "at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        }
        rec_path.write_text(json.dumps(rec, ensure_ascii=False, indent=2), encoding="utf-8")
        size = f" · 녹음 {len(b['audio']) * 3 // 4 // 1024} KB" if b.get("audio") else ""
        sys.stderr.write(f"    저장 {s}/{sess}/{qid}{size}\n")
        return self.send_json(200, {"ok": True, "transcript": "", "sttError": None})

    # ── /api/results ────────────────────────────────────
    def api_results(self):
        s = safe(self.q1("set"))
        if not s:
            return self.send_json(400, {"error": "set 파라미터 필요"})
        sess = safe(self.q1("session"))

        base = STORE / "r" / s
        dirs = [base / sess] if sess else sorted([p for p in base.glob("*") if p.is_dir()])
        sessions = []
        for d in dirs:
            if not d.is_dir():
                continue
            answers = []
            for f in sorted(d.glob("*.json")):
                try:
                    answers.append(json.loads(f.read_text(encoding="utf-8")))
                except Exception as e:
                    answers.append({"qid": f.stem, "error": str(e)})
            if not answers:
                continue
            answers.sort(key=lambda r: natural(str(r.get("qid") or "")))
            sessions.append({"session": d.name, "answers": answers})
        sessions.sort(key=lambda x: x["session"], reverse=True)
        return self.send_json(200, {"set": s, "sessions": sessions})

    # ── /api/audio ──────────────────────────────────────
    def api_audio(self):
        path = self.q1("path")
        if not AUDIO_PATH.match(path):
            return self.send_json(400, {"error": "허용되지 않는 경로"})
        f = STORE / path
        if not f.exists():
            return self.send_json(404, {"error": "녹음을 찾을 수 없습니다"})
        data = f.read_bytes()
        kind = {"m4a": "audio/mp4", "ogg": "audio/ogg"}.get(f.suffix[1:], "audio/webm")
        self.send_response(200)
        self.send_header("content-type", kind)
        self.send_header("content-length", str(len(data)))
        self.send_header("cache-control", "private, max-age=3600")
        self.end_headers()
        self.wfile.write(data)

    # ── /api/feedback ───────────────────────────────────
    def api_feedback_get(self):
        s = safe(self.q1("set"))
        if not s:
            return self.send_json(400, {"error": "set 파라미터 필요"})
        f = STORE / "f" / f"{s}.json"
        if not f.exists():
            return self.send_json(200, {"set": s, "items": None})
        return self.send_json(200, json.loads(f.read_text(encoding="utf-8")))

    def api_feedback_post(self):
        b = self.body_json()
        s = safe(b.get("set"))
        items = b.get("items") or {}
        if not s:
            return self.send_json(400, {"error": "set 필요"})
        if not isinstance(items, dict) or not items:
            return self.send_json(400, {"error": "items 가 비어 있습니다"})
        rec = {
            "set": s,
            "level": str(b.get("level") or ""),
            "summary": str(b.get("summary") or ""),
            "gradedAt": datetime.now().strftime("%Y-%m-%d"),
            "items": items,
        }
        d = STORE / "f"
        d.mkdir(parents=True, exist_ok=True)
        (d / f"{s}.json").write_text(json.dumps(rec, ensure_ascii=False, indent=2), encoding="utf-8")
        return self.send_json(200, {"ok": True, "count": len(items)})

    # ── 정적 파일 (web/) ────────────────────────────────
    def static(self, path):
        rel = urllib.parse.unquote(path).lstrip("/")
        if rel.endswith("/") or rel == "":
            rel += "index.html"
        target = (WEB / rel).resolve()
        if WEB.resolve() not in target.parents and target != WEB.resolve():
            return self.send_json(403, {"error": "허용되지 않는 경로"})
        if target.is_dir():
            target = target / "index.html"
        if not target.exists():
            self.send_response(404)
            self.send_header("content-type", "text/plain; charset=utf-8")
            self.end_headers()
            self.wfile.write(f"없는 파일: {rel}".encode("utf-8"))
            return
        data = target.read_bytes()
        kind = mimetypes.guess_type(target.name)[0] or "application/octet-stream"
        if kind.startswith("text/") or kind.endswith(("json", "javascript")):
            kind += "; charset=utf-8"
        self.send_response(200)
        self.send_header("content-type", kind)
        self.send_header("content-length", str(len(data)))
        # 세트를 다시 빌드하면 바로 반영되게 html/json 은 캐시하지 않는다.
        self.send_header("cache-control",
                         "no-store" if target.suffix in (".html", ".json") else "max-age=3600")
        self.end_headers()
        self.wfile.write(data)


def natural(s):
    return [int(t) if t.isdigit() else t for t in re.split(r"(\d+)", s)]


def main():
    ap = argparse.ArgumentParser(description="EPTA 연습 로컬 서버")
    ap.add_argument("--host", default="127.0.0.1",
                    help="0.0.0.0 으로 주면 같은 와이파이의 다른 기기에서 접속 가능")
    ap.add_argument("--port", type=int, default=8000)
    ap.add_argument("--pin", help=".env 의 EPTA_PIN 대신 쓸 비밀번호")
    args = ap.parse_args()

    cfg = dotenv()
    if args.pin:
        cfg["EPTA_PIN"] = args.pin
    cfg.setdefault("EPTA_TOKEN", "local")
    Handler.cfg = cfg

    if not WEB.exists():
        sys.exit(f"{WEB} 가 없습니다. 먼저 `python practice/build.py EPTA_XX` 를 돌리세요.")

    # 외부에 열면서 비밀번호가 없으면 막는다.
    if args.host != "127.0.0.1" and not cfg.get("EPTA_PIN"):
        sys.exit("--host 를 열려면 비밀번호가 필요합니다. .env 에 EPTA_PIN 을 넣거나 --pin 0328 을 주세요.")

    STORE.mkdir(parents=True, exist_ok=True)
    sets = sorted(p.name for p in (WEB / "s").glob("*") if p.is_dir())
    shown = args.host if args.host != "0.0.0.0" else "<이 PC 의 IP>"

    print(f"EPTA 연습 서버 — http://{shown}:{args.port}")
    print(f"  정적 파일 : {WEB}")
    print(f"  저장 위치 : {STORE}")
    print(f"  세트 {len(sets)}개 : {', '.join(sets)}")
    print(f"  비밀번호  : {'설정됨' if cfg.get('EPTA_PIN') else '없음 (잠그지 않음)'}")
    if args.host == "0.0.0.0":
        print("\n  ★ 폰에서 http 로 들어오면 마이크가 막힙니다(보안 컨텍스트 아님).")
        print("    녹음까지 하려면 :  cloudflared tunnel --url http://127.0.0.1:%d" % args.port)
    print("\n  멈추려면 Ctrl+C\n")

    try:
        ThreadingHTTPServer((args.host, args.port), Handler).serve_forever()
    except KeyboardInterrupt:
        print("\n서버를 멈췄습니다.")


if __name__ == "__main__":
    main()
