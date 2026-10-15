"""
배포 서버에 저장된 응시 결과를 내려받아 채점용 md 로 만든다.

    python practice/pull.py EPTA_01            # 최신 세션
    python practice/pull.py EPTA_01 --all      # 모든 세션

- epta/.env 의 EPTA_URL(배포 주소) 과 EPTA_TOKEN(비밀키) 을 읽는다.
- practice/results/<SET>.md 에 문항별 "타이핑 답안 / 음성 전사본" 을 쓴다.
  채점은 이 파일을 근거로 sets/<SET>_feedback.md 를 만드는 식으로 이어진다.
"""

import json
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "practice" / "results"


def env():
    values = {}
    path = ROOT / ".env"
    if not path.exists():
        sys.exit(f"{path} 가 없습니다. EPTA_URL 과 EPTA_TOKEN 을 넣어주세요.")
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            values[k.strip()] = v.strip()
    for key in ("EPTA_URL", "EPTA_TOKEN"):
        if not values.get(key):
            sys.exit(f".env 에 {key} 가 없습니다.")
    return values


def fetch(base, token, name):
    url = f"{base.rstrip('/')}/api/results?set={name}"
    req = urllib.request.Request(url, headers={"x-epta-token": token})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        sys.exit(f"{e.code} {e.reason} — {e.read().decode('utf-8', 'replace')[:300]}")
    except urllib.error.URLError as e:
        sys.exit(f"서버에 연결할 수 없습니다: {e.reason}")


def block(rec):
    qid = rec.get("qid", "?")
    typed = (rec.get("answer") or "").strip()
    heard = (rec.get("transcript") or "").strip()
    err = rec.get("sttError")

    lines = [f"**{qid}**"]
    lines.append(f"타이핑 답안 : {typed or '(없음)'}")
    lines.append(f"음성 전사본 : {heard or '(없음)'}")
    if err:
        lines.append(f"⚠️ 전사 오류 : {err}")
    if rec.get("audioPath"):
        lines.append(f"녹음 : {rec['audioPath']}")
    lines.append("")
    lines.append("---")
    lines.append("")
    return "\n".join(lines)


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not args:
        sys.exit("사용법: python practice/pull.py EPTA_01 [--all]")
    name = args[0]
    every = "--all" in sys.argv

    cfg = env()
    data = fetch(cfg["EPTA_URL"], cfg["EPTA_TOKEN"], name)
    sessions = data.get("sessions") or []
    if not sessions:
        sys.exit(f"{name} 에 저장된 응시 기록이 없습니다.")
    if not every:
        sessions = sessions[:1]

    out = [f"# {name} 응시 기록 (서버에서 내려받음)", ""]
    for s in sessions:
        answered = sum(1 for r in s["answers"] if (r.get("answer") or r.get("transcript")))
        out.append(f"## 세션 {s['session']} — {answered}/{len(s['answers'])} 문항 응답")
        out.append("")
        out.extend(block(r) for r in s["answers"])

    OUT.mkdir(parents=True, exist_ok=True)
    dest = OUT / f"{name}.md"
    dest.write_text("\n".join(out), encoding="utf-8")
    print(f"{dest}  ({len(sessions)} 세션, {sum(len(s['answers']) for s in sessions)} 문항)")


if __name__ == "__main__":
    main()
