# -*- coding: utf-8 -*-
"""서버에 있는 응시 기록·녹음을 로컬로 내려받아 백업한다.

    python practice/backup.py              # 전 세트 (.env 의 EPTA_URL)
    python practice/backup.py EPTA_09 EPTA_10
    python practice/backup.py --check       # 내려받지 않고 현황만
    python practice/backup.py --url https://epta-indol.vercel.app   # 옛 서버에서 건지기

**왜 필요한가** — 녹음(webm)은 서버 Blob 에만 있고 로컬 사본이 없었다. 2026-11-03 에
Vercel Blob 스토어가 Advanced Operations 한도 소진으로 **정지**되어 읽기까지 403 이 되자,
약 80 MB 의 녹음 전체에 손이 닿지 않게 됐다. 그 녹음은 채점을 뒤집는 근거다 — EPTA_10 은
구글 전사를 믿고 채점했다가 재전사로 다섯 문항을 바로잡았고, 그게 가능했던 이유는 음성이
남아 있었기 때문이다. 다시는 서버 한 곳에만 두지 않는다.

저장 위치 :

    practice/recordings/<SET>/<세션>/<문항>.webm     녹음 원본
    practice/recordings/<SET>/<세션>/<문항>.json     답안·전사본 기록
    practice/recordings/manifest.json                크기·시각 목록 (누락 점검용)

이미 받아 둔 파일은 건너뛰므로 **몇 번 돌려도 안전**하다. 읽기는 Vercel 의 Simple
Operations·Data Transfer 로 집계되어 한도가 넉넉하다(정지를 일으킨 Advanced 와 다르다).
"""
import json
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "practice" / "recordings"
MANIFEST = OUT / "manifest.json"

SUSPENDED = "has been suspended"
FORBIDDEN = "403 Forbidden"


def env():
    path = ROOT / ".env"
    if not path.exists():
        sys.exit(f"{path} 가 없습니다.")
    v = {}
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, val = line.split("=", 1)
            v[k.strip()] = val.strip()
    for key in ("EPTA_URL", "EPTA_TOKEN"):
        if not v.get(key):
            sys.exit(f".env 에 {key} 가 없습니다.")
    # --url 로 옛 Vercel 배포를 가리킬 수 있다. 로컬 서버로 전환한 뒤에도
    # 거기 남은 녹음을 건지려면 이 경로가 필요하다.
    for i, a in enumerate(sys.argv):
        if a == "--url" and i + 1 < len(sys.argv):
            v["EPTA_URL"] = sys.argv[i + 1]
        elif a == "--vercel":
            if not v.get("EPTA_URL_VERCEL"):
                sys.exit(".env 에 EPTA_URL_VERCEL 이 없습니다.")
            v["EPTA_URL"] = v["EPTA_URL_VERCEL"]
    return v


def known_sets():
    """로컬에 흔적이 있는 세트 이름을 모은다 — sets/ 와 web/s/ 양쪽을 본다."""
    names = set()
    for p in (ROOT / "sets").glob("*.md"):
        stem = p.stem
        if stem.endswith("_feedback") or stem.endswith("_retry"):
            stem = stem.rsplit("_", 1)[0]
        names.add(stem)
    for p in (ROOT / "web" / "s").glob("*/"):
        names.add(p.name)
    return sorted(n for n in names if n and n[0].isalpha())


def api(cfg, path, raw=False):
    req = urllib.request.Request(
        cfg["EPTA_URL"].rstrip("/") + path,
        headers={"x-epta-token": cfg["EPTA_TOKEN"]},
    )
    with urllib.request.urlopen(req, timeout=300) as r:
        data = r.read()
    return data if raw else json.loads(data)


def fatal_store_error(text):
    """스토어 정지·권한 문제인지 가려낸다 — 그 경우 더 돌려봐야 의미가 없다."""
    return SUSPENDED in text or FORBIDDEN in text


def main():
    argv = sys.argv[1:]
    skip = {argv[i + 1] for i, a in enumerate(argv) if a == "--url" and i + 1 < len(argv)}
    args = [a for a in argv if not a.startswith("--") and a not in skip]
    check_only = "--check" in sys.argv
    cfg = env()
    targets = [a.upper() for a in args] or known_sets()

    OUT.mkdir(parents=True, exist_ok=True)
    manifest = {}
    if MANIFEST.exists():
        try:
            manifest = json.loads(MANIFEST.read_text(encoding="utf-8")).get("files", {})
        except Exception:
            manifest = {}

    print(f"서버 : {cfg['EPTA_URL']}")
    print(f"백업 대상 {len(targets)}세트 : {', '.join(targets)}")
    if check_only:
        print("(--check : 내려받지 않고 현황만 봅니다)")

    got = skipped = failed = 0
    total_bytes = 0
    blocked = False

    for name in targets:
        try:
            data = api(cfg, f"/api/results?set={urllib.parse.quote(name)}")
        except urllib.error.HTTPError as e:
            body = e.read().decode("utf-8", "replace")
            print(f"\n[{name}] 목록 실패 — HTTP {e.code} {body[:120]}")
            if fatal_store_error(body):
                blocked = True
                break
            continue
        except Exception as e:
            print(f"\n[{name}] 목록 실패 — {e}")
            continue

        sessions = data.get("sessions") or []
        items = [(s.get("session") or "unknown", rec)
                 for s in sessions for rec in (s.get("answers") or [])]
        if not items:
            print(f"\n[{name}] 기록 없음 — 건너뜁니다")
            continue

        # 기록을 못 읽는 상태면 error 필드만 돌아온다. 그때는 정지 여부를 알린다.
        errs = [rec.get("error", "") for _, rec in items if rec.get("error")]
        if errs and len(errs) == len(items):
            print(f"\n[{name}] 기록을 읽을 수 없습니다 — {errs[0][:90]}")
            if any(fatal_store_error(e) for e in errs):
                blocked = True
                break
            continue

        print(f"\n[{name}] {len(items)}문항")
        for session, rec in items:
            qid = str(rec.get("qid") or "").replace("/", "_") or "unknown"
            d = OUT / name / session
            d.mkdir(parents=True, exist_ok=True)

            # 1) 답안·전사본 기록은 작으니 항상 최신으로 덮어쓴다.
            if not check_only and not rec.get("error"):
                (d / f"{qid}.json").write_text(
                    json.dumps(rec, ensure_ascii=False, indent=2), encoding="utf-8")

            # 2) 녹음은 용량이 크므로 이미 있으면 건너뛴다.
            blob = rec.get("audioPath")
            if not blob:
                continue
            dst = d / Path(blob).name
            if dst.exists() and dst.stat().st_size > 1024:
                skipped += 1
                total_bytes += dst.stat().st_size
                manifest[blob] = {"size": dst.stat().st_size, "local": str(dst.relative_to(OUT))}
                continue
            if check_only:
                print(f"  · {qid} — 받아야 함")
                continue

            try:
                audio = api(cfg, "/api/audio?path=" + urllib.parse.quote(blob), raw=True)
            except urllib.error.HTTPError as e:
                body = e.read().decode("utf-8", "replace")
                print(f"  ✗ {qid} — HTTP {e.code} {body[:90]}")
                failed += 1
                if fatal_store_error(body):
                    blocked = True
                    break
                continue
            except Exception as e:
                print(f"  ✗ {qid} — {e}")
                failed += 1
                continue

            dst.write_bytes(audio)
            got += 1
            total_bytes += len(audio)
            manifest[blob] = {"size": len(audio), "local": str(dst.relative_to(OUT))}
            print(f"  ✓ {qid} — {len(audio)/1024:.0f} KB")

        if blocked:
            break

    if not check_only:
        MANIFEST.write_text(json.dumps(
            {"at": datetime.now().isoformat(timespec="seconds"), "files": manifest},
            ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"\n내려받음 {got} · 이미 있음 {skipped} · 실패 {failed}"
          f" · 로컬 총 {total_bytes/1024/1024:.1f} MB")
    print(f"저장 위치 : {OUT}")

    if blocked:
        print("\n★ Blob 스토어가 정지된 상태입니다 (Advanced Operations 한도 소진).")
        print("  Vercel → Storage 에서 스토어를 다시 열거나 결제 주기가 초기화된 뒤")
        print("  `python practice/backup.py` 를 다시 돌리세요. 받은 것은 건너뛰므로")
        print("  처음부터 다시 받지 않습니다.")
        sys.exit(2)


if __name__ == "__main__":
    main()
