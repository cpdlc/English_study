"""채점 결과(sets/<SET>_feedback.md)를 서버에 올려 폰에서 볼 수 있게 한다.

    python practice/push.py EPTA_01
    python practice/push.py --static        # Vercel 배포용으로 구워 넣기만 한다

- `EPTA_XX_feedback.md` 를 파싱해 문항별 `정답/교정 답안`·판정(✅⚠️❌)·지적사항을 뽑는다.
- 최종 등급(6개 항목 중 최저값)도 찾아 함께 올린다.
- epta/.env 의 EPTA_URL · EPTA_TOKEN 을 쓴다.
- 올린 결과는 `/r/?set=EPTA_01` 화면의 "정답 / 교정 답안" 칸에 나타난다.

모범답안은 배포 HTML 에 들어가지 않는다(CLAUDE.md §1 규칙 3). 비밀키를 가진 사람만
서버에서 받아 볼 수 있다.

`--static` 은 Blob 없이 Vercel 에서 쓰기 위한 것이다. 모든 `sets/*_feedback.md` 를
`web/api/_lib/answers.js` 로 구워 `/api/feedback` 함수가 읽게 한다. `api/` 아래에서
밑줄로 시작하는 경로는 Vercel 이 함수로도, 정적 파일로도 내보내지 않으므로 **주소로는
닿을 수 없고** 토큰을 통과한 함수만 읽는다. Blob 작업 횟수를 쓰지 않는다.
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
# 키워드 뒤에 `(참고용 ...)` 같은 괄호 주석이 붙어도 읽는다.
MODEL = re.compile(
    r"^\*\*\s*(정답|교정 답안|정답/교정 답안|참고 답안)\s*(?:\([^)]*\))?\s*[:\u2014-]\s*(.*)$"
)
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
    items, cur, in_model = {}, None, False
    for raw in md.splitlines():
        line = raw.strip()

        m = QID.match(line)
        if m:
            cur = m[1]
            verdict = next((c for c in "✅⚠️❌" if c in m[2]), "")
            items[cur] = {"verdict": verdict, "model": "", "notes": []}
            in_model = False
            continue

        if not cur:
            continue

        m = MODEL.match(line)
        if m:
            if not items[cur]["model"]:
                items[cur]["model"] = m[2].strip()
                in_model = True
            continue

        # 정답이 여러 줄로 이어지는 경우를 이어 붙인다 (3부 모범답안 등).
        if in_model and line and not line.startswith(("- ", "**", "---", "## ")):
            items[cur]["model"] = (items[cur]["model"] + "\n" + line).strip()
            continue
        in_model = False

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


def bake():
    """모든 sets/*_feedback.md → web/api/_lib/answers.js (Vercel 배포용)."""
    out = ROOT / "web" / "api" / "_lib" / "answers.js"
    out.parent.mkdir(parents=True, exist_ok=True)

    records = {}
    for path in sorted(SETS.glob("*_feedback.md")):
        name = path.name[: -len("_feedback.md")]
        items, level = parse(path.read_text(encoding="utf-8"))
        if not items:
            print(f"  건너뜀 {name} — 문항을 못 읽었습니다")
            continue
        records[name] = {
            "set": name,
            "level": level,
            "summary": "",
            "gradedAt": path.stat().st_mtime.__trunc__(),
            "items": items,
        }
        print(f"  {name} — {len(items)}문항 (모범답안 "
              f"{sum(1 for v in items.values() if v['model'])}개)")

    import datetime
    for rec in records.values():
        rec["gradedAt"] = datetime.date.fromtimestamp(rec["gradedAt"]).isoformat()

    body = json.dumps(records, ensure_ascii=False, indent=2)
    header = (
        "// 자동 생성 — practice/push.py --static 이 쓴다. 직접 고치지 않는다.\n"
        "// api/_lib 는 Vercel 이 함수로도 정적 파일로도 내보내지 않는다.\n"
        "// 토큰을 통과한 /api/feedback 함수만 읽는다 (CLAUDE.md §1 규칙 3).\n"
    )
    out.write_text(header + f"export default {body};\n", encoding="utf-8")
    print(f"{out.relative_to(ROOT)} — {len(records)}개 세트, "
          f"{out.stat().st_size // 1024} KB")
    print("배포: cd web && vercel deploy --prod")


def main():
    args = [a for a in sys.argv[1:]]
    static = "--static" in args
    args = [a for a in args if not a.startswith("--")]

    if static and not args:
        bake()
        return
    if not args:
        sys.exit("사용법: python practice/push.py EPTA_01 [--static]")
    name = args[0].upper()

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

    if static:
        bake()


if __name__ == "__main__":
    main()
