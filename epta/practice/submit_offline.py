# -*- coding: utf-8 -*-
"""웹앱이 아닌 곳에서 녹음한 답안을 서버에 올린다.

실제 출제 음성을 직접 틀어놓고 말한 뒤 SRT 로 받아쓴 경우처럼, 풀이 화면을 거치지
않은 답안을 `내 답안 보기` 화면에 넣기 위한 스크립트다.

    python practice/submit_offline.py <SET> <answers.json> [session]

`answers.json` 은 `{"P1A-Q1": "...", "P1A-Q2": "...", ...}` 형태.
session 을 생략하면 오늘 날짜로 `YYYYMMDD-120000` 을 쓴다.

녹음 파일은 올리지 않는다 — 텍스트만 넣으므로 `/api/submit` 의 STT 는 타지 않는다.
"""
import json
import sys
import time
import urllib.error
import urllib.request
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def env():
    path = ROOT / ".env"
    if not path.exists():
        sys.exit(f"{path} 가 없습니다.")
    values = {}
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            values[k.strip()] = v.strip()
    for key in ("EPTA_URL", "EPTA_TOKEN"):
        if not values.get(key):
            sys.exit(f".env 에 {key} 가 없습니다.")
    return values


def post(cfg, payload):
    req = urllib.request.Request(
        cfg["EPTA_URL"].rstrip("/") + "/api/submit",
        data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
        headers={"content-type": "application/json", "x-epta-token": cfg["EPTA_TOKEN"]},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def main():
    if len(sys.argv) < 3:
        raise SystemExit(__doc__)
    set_name = sys.argv[1].upper()
    answers = json.loads(Path(sys.argv[2]).read_text(encoding="utf-8"))
    session = sys.argv[3] if len(sys.argv) > 3 else f"{date.today():%Y%m%d}-120000"

    cfg = env()
    ok = 0
    for qid, answer in answers.items():
        body = {"set": set_name, "session": session, "qid": qid,
                "answer": answer, "seconds": 0}
        for attempt in range(3):
            try:
                post(cfg, body)
                ok += 1
                break
            except urllib.error.HTTPError as e:
                if attempt == 2:
                    print(f"  ✗ {qid} — HTTP {e.code} {e.read().decode('utf-8', 'replace')[:120]}")
                else:
                    time.sleep(1.5)
            except Exception as e:                      # 네트워크 흔들림
                if attempt == 2:
                    print(f"  ✗ {qid} — {e}")
                else:
                    time.sleep(1.5)

    print(f"{set_name} 답안 전송 — {ok}/{len(answers)}문항 (세션 {session})")


if __name__ == "__main__":
    main()
