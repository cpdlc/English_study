"""채점 결과(sets/<SET>_feedback.md)를 서버에 올려 폰에서 볼 수 있게 한다.

    python practice/push.py EPTA_01

- `EPTA_XX_feedback.md` 를 파싱해 문항별 `정답/교정 답안`·판정(✅⚠️❌)·지적사항을 뽑는다.
- 최종 등급(6개 항목 중 최저값)도 찾아 함께 올린다.
- epta/.env 의 EPTA_URL · EPTA_TOKEN 을 쓴다.
- 올린 결과는 `/r/?set=EPTA_01` 화면의 "정답 / 교정 답안" 칸에 나타난다.

모범답안은 배포 HTML 에 들어가지 않는다(CLAUDE.md §1 규칙 3). 비밀키를 가진 사람만
서버에서 받아 볼 수 있다.
"""

import json
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SETS = ROOT / "sets"

QID = re.compile(r"^\*\*(P\d[ABC]-Q\d+)\*\*\s*(.*)$")
MODEL = re.compile(r"^\*\*\s*(정답|교정 답안|정답/교정 답안)\s*:\s*(.*)$")
LEVEL = re.compile(r"최종\s*등급.*?(Level\s*\d)", re.I)


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
            sys.exit(f".env 에 {key} 가 없습니다. (배포 후 EPTA_URL 을 채워주세요)")
    return values


def parse(md):
    """feedback md → {qid: {verdict, model, notes[]}} 와 최종 등급."""
    items, cur = {}, None
    for raw in md.splitlines():
        line = raw.strip()

        m = QID.match(line)
        if m:
            cur = m[1]
            verdict = next((c for c in "✅⚠️❌" if c in m[2]), "")
            items[cur] = {"verdict": verdict, "model": "", "notes": []}
            continue

        if not cur:
            continue

        m = MODEL.match(line)
        if m:
            if not items[cur]["model"]:
                items[cur]["model"] = m[2].strip()
            continue

        if line.startswith("- ") and items[cur]["model"]:
            items[cur]["notes"].append(line[2:].strip())
        elif line.startswith("## "):
            cur = None                      # 문항 구간이 끝났다

    level = ""
    m = LEVEL.search(md)
    if m:
        level = m[1].replace("  ", " ")
    return items, level


def post(cfg, payload):
    url = cfg["EPTA_URL"].rstrip("/") + "/api/feedback"
    req = urllib.request.Request(
        url,
        data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
        headers={"content-type": "application/json", "x-epta-token": cfg["EPTA_TOKEN"]},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        sys.exit(f"{e.code} {e.reason} — {e.read().decode('utf-8', 'replace')[:300]}")
    except urllib.error.URLError as e:
        sys.exit(f"서버에 연결할 수 없습니다: {e.reason}")


def main():
    if len(sys.argv) < 2:
        sys.exit("사용법: python practice/push.py EPTA_01")
    name = sys.argv[1].upper()

    path = SETS / f"{name}_feedback.md"
    if not path.exists():
        sys.exit(f"{path} 가 없습니다. 먼저 채점을 해야 합니다.")

    items, level = parse(path.read_text(encoding="utf-8"))
    if not items:
        sys.exit("문항을 하나도 못 읽었습니다. feedback 형식을 확인하세요 (CLAUDE.md §6-1)")

    graded = sum(1 for v in items.values() if v["model"])
    out = post(env(), {"set": name, "level": level, "items": items})
    print(f"{name} 채점 결과 전송 — {out.get('count', 0)}문항 "
          f"(모범답안 {graded}개, 최종 {level or '미확인'})")


if __name__ == "__main__":
    main()
