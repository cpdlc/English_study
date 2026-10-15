"""세트가 실제 출제 기준(reference/transcripts/test01~04)에 맞는지 기계로 검사한다.

    python practice/check.py EPTA_01

세트를 만들거나 고친 뒤 **반드시** 돌린다. 하나라도 ✗ 가 나오면 고치고 다시 돌린다.
기준 수치는 자막 4세트를 실제로 세어 얻은 것이고 `reference/exam-spec.md` §2-2-1 과 같다.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SETS = ROOT / "sets"
REF = ROOT / "reference"

# ── 자막 4세트 Task A 실측값 (exam-spec.md §2-2-1) ─────────────────────
REAL_TASKA = [[3, 9, 8, 13], [8, 9, 17, 15], [13, 13, 9, 18], [8, 14, 10, 13]]
FLAT = [w for s in REAL_TASKA for w in s]
A_MAX, A_MIN = max(FLAT), min(FLAT)                       # 18, 3
A_AVG = sum(FLAT) / len(FLAT)                             # 11.2
P2_MAX = 40                                               # Part 2 구어체 상한

SPEAKER = re.compile(
    r"^(ATC|Center|Approach|Apron|Ground|Tower|Departure|Delivery|Clearance|Radar)\s*:\s*(.*)$")
QHEAD = re.compile(r"^\*\*(P\d[ABC]-Q\d+)\*\*\s*🎙\s*(\d+)초")
CUES = ("Record your full readback.", "Record your response.")
CALLSIGN = re.compile(r"^(?:Hotel Lima (?:123|one two three)|HL123)\s*,?\s*", re.I)

PARTS = ["Part Ⅰ TASK A", "Part Ⅰ TASK B", "Part Ⅱ TASK A", "Part Ⅱ TASK B", "Part Ⅱ TASK C"]
KEYS = ["1A", "1B", "2A", "2B", "2C"]

ok, bad, warn = [], [], []


def good(msg):
    ok.append(msg)


def fail(msg):
    bad.append(msg)


def note(msg):
    warn.append(msg)


def words(line):
    return len(CALLSIGN.sub("", line.strip()).split())


# ── 세트 읽기 ─────────────────────────────────────────────────────────
def split_parts(md):
    out, rest = {}, md
    for i, head in enumerate(PARTS):
        marker = "## " + head
        if marker not in rest:
            out[KEYS[i]] = ""
            continue
        rest = rest.split(marker, 1)[1]
        nxt = "## " + PARTS[i + 1] if i + 1 < len(PARTS) else None
        out[KEYS[i]] = rest.split(nxt, 1)[0] if nxt and nxt in rest else rest
    return out


def questions(body):
    """[{id, seconds, atc:[...], text:[...], answer_lines:[...]}]"""
    out, cur = [], None
    for raw in body.splitlines():
        s = raw.strip()
        m = QHEAD.match(s)
        if m:
            cur = {"id": m[1], "seconds": int(m[2]), "atc": [], "text": [],
                   "answer": [], "in_answer": False}
            out.append(cur)
            continue
        if cur is None:
            continue
        if s == "[정답]":
            cur["in_answer"] = True
            continue
        if s == "---":
            cur = None                     # 문항 끝 — 뒤의 Situation Update 가 섞이지 않게
            continue
        if cur["in_answer"]:
            if s:
                cur["answer"].append(s)
            continue
        m = SPEAKER.match(s)
        if m:
            cur["atc"].append(m[2])
        elif (cur["atc"] and s and s not in CUES
              and not s.startswith(("☞", "🖥", "(Q", "!", "**"))):
            cur["atc"][-1] += " " + s          # 줄바꿈으로 끊긴 ATC 대사 이어붙이기
        elif s:
            cur["text"].append(s)
    return out


def forbidden_names():
    txt = (REF / "used-scenarios.md").read_text(encoding="utf-8")
    if "이미 쓴 고유명사" not in txt:
        return []
    block = txt.split("이미 쓴 고유명사")[1].split("\n---")[0]
    names = []
    for chunk in re.findall(r"\*\*[^*]+\*\*([^\n]*(?:\n(?!\*\*|###|\|)[^\n]*)*)", block):
        for n in re.split(r"[·/]", chunk):
            n = n.strip().strip(".").strip()
            if n and 2 < len(n) < 40 and not n.startswith("("):
                names.append(n)
    return names


# ── 검사 ──────────────────────────────────────────────────────────────
def check(name):
    path = SETS / f"{name}.md"
    if not path.exists():
        sys.exit(f"{path} 가 없습니다.")
    md = path.read_text(encoding="utf-8")
    parts = split_parts(md)
    qs = {k: questions(v) for k, v in parts.items()}

    # A. 구성
    want = {"1A": (4, 4), "1B": (6, 6), "2A": (8, 13), "2B": (7, 12), "2C": (2, 2)}
    for k, (lo, hi) in want.items():
        n = len(qs[k])
        label = {"1A": "Ⅰ-A", "1B": "Ⅰ-B", "2A": "Ⅱ-A", "2B": "Ⅱ-B", "2C": "Ⅱ-C"}[k]
        if lo <= n <= hi:
            good(f"{label} 문항 수 {n} (기준 {lo}~{hi})")
        else:
            fail(f"{label} 문항 수 {n} — 기준 {lo}~{hi}")

    # B. 응답시간
    for k, sec in [("1A", 20), ("1B", 20), ("2B", 30), ("2C", 90)]:
        wrong = [q["id"] for q in qs[k] if q["seconds"] != sec]
        if wrong:
            fail(f"{k} 응답시간이 {sec}초가 아닌 문항: {wrong}")
    if qs["2A"]:
        roles = [q["seconds"] for q in qs["2A"]]
        if roles[-1] != 90:
            fail("Ⅱ-A 마지막 문항(Follow-up)이 90초가 아닙니다")
        if any(s != 30 for s in roles[:-1]):
            fail(f"Ⅱ-A 롤플레이 턴에 30초가 아닌 것이 있습니다: {roles[:-1]}")
        if roles[-1] == 90 and all(s == 30 for s in roles[:-1]):
            good(f"Ⅱ-A 30초 × {len(roles)-1}턴 + Follow-up 90초")

    # C. 문항 ID
    ids = [q["id"] for part in qs.values() for q in part]
    dup = {i for i in ids if ids.count(i) > 1}
    if dup:
        fail(f"문항 ID 중복: {sorted(dup)}")
    else:
        good(f"문항 ID {len(ids)}개 모두 유일")

    # D. 정답 유출
    leaked = [q["id"] for part in qs.values() for q in part if q["answer"]]
    if leaked:
        fail(f"[정답] 란에 내용이 들어 있습니다 (정답 유출): {leaked}")
    else:
        good(f"[정답] 란 {len(ids)}개 모두 비어 있음")

    # E. Task A 분량 — 가장 중요
    aw = [words(" ".join(q["atc"])) for q in qs["1A"]]
    if aw:
        over = [(q["id"], w) for q, w in zip(qs["1A"], aw) if w > A_MAX]
        if over:
            fail(f"Ⅰ-A 가 {A_MAX}단어를 넘습니다: {over}  (실제 최장 {A_MAX})")
        else:
            good(f"Ⅰ-A 최장 {max(aw)}단어 ≤ {A_MAX}")
        if min(aw) > 10:
            fail(f"Ⅰ-A 에 10단어 이하 짧은 문항이 없습니다 (최단 {min(aw)}) — "
                 f"실제는 세트마다 {A_MIN}~10단어 문항이 하나씩 있습니다")
        else:
            good(f"Ⅰ-A 최단 {min(aw)}단어 ≤ 10 (호흡 잡는 문항 있음)")
        avg = sum(aw) / len(aw)
        if 10.0 <= avg <= 14.0:
            good(f"Ⅰ-A 평균 {avg:.1f}단어 (실제 {A_AVG:.1f})")
        else:
            fail(f"Ⅰ-A 평균 {avg:.1f}단어 — 실제는 {A_AVG:.1f}, 10~14 범위로 맞추세요")
        print(f"   Ⅰ-A 단어수 {aw}")

    # F. Part 2 분량
    for k in ("2A", "2B"):
        over = [(q["id"], words(a)) for q in qs[k] for a in q["atc"] if words(a) > P2_MAX]
        if over:
            fail(f"{k} ATC 대사가 {P2_MAX}단어를 넘습니다: {over}")
    if not any(words(a) > P2_MAX for k in ("2A", "2B") for q in qs[k] for a in q["atc"]):
        good(f"Ⅱ-A·Ⅱ-B ATC 대사 모두 {P2_MAX}단어 이내")

    # G. 콜사인
    others = set(re.findall(r"\b(?!HL123\b)(?:[A-Z]{2,3}\s?\d{2,4})\b", md)) - {"ILS", "RNAV"}
    others = {o for o in others if not re.match(r"^(FL|RWY)", o)}
    if others:
        note(f"HL123 외의 호출부호처럼 보이는 문자열: {sorted(others)} — 기종·편명이면 괜찮습니다")
    if "HL123" in md:
        good("응시자 콜사인 HL123 사용")

    # H. 금지 고유명사
    hits = sorted({n for n in forbidden_names() if re.search(rf"\b{re.escape(n)}\b", md)})
    if hits:
        fail(f"재사용 금지 고유명사가 쓰였습니다: {hits}")
    else:
        good("금지 고유명사 없음")

    # I. Task C 가 Task B 대사를 그대로 쓰는지
    bl = [a.strip() for q in qs["2B"] for a in q["atc"]]
    cbody = parts["2C"]
    missing = [a[:40] for a in bl if CALLSIGN.sub("", a)[:30] not in re.sub(r"\s+", " ", cbody)]
    if bl and not missing:
        good(f"Ⅱ-C 가 Ⅱ-B ATC 대사 {len(bl)}줄을 모두 담고 있음")
    elif bl:
        fail(f"Ⅱ-C 에 빠진 Ⅱ-B 대사: {missing}")

    # J. Ⅰ-A·Ⅰ-B 말미 지시문
    for k, phrase in [("1A", "Record your full readback."), ("1B", "Record your response.")]:
        n = parts[k].count(phrase)
        if n == len(qs[k]):
            good(f"{k} 전 문항에 '{phrase}' 있음")
        else:
            fail(f"{k} 의 '{phrase}' 가 {n}/{len(qs[k])} 문항 — 실제 시험은 매 문항 뒤에 나옵니다")

    # K. Ⅰ-B 필수 패턴
    allb = " ".join(a for q in qs["1B"] for a in q["atc"])
    if re.search(r"confirm maintaining", allb, re.I):
        good("Ⅰ-B 에 'Confirm maintaining ~?' 함정형 있음")
    else:
        fail("Ⅰ-B 에 'Confirm maintaining ~?' 함정형이 없습니다 (매 세트 1문항)")
    sendout = [q["id"] for q in qs["1B"] if not q["atc"]]
    if len(sendout) <= 2:
        good(f"Ⅰ-B 발신형(ATC 대사 없음) {len(sendout)}문항 (기준 0~2)")
    else:
        fail(f"Ⅰ-B 발신형이 {len(sendout)}문항 — 기준 0~2")

    # L. Follow-up
    if qs["2A"]:
        fu = " ".join(qs["2A"][-1]["text"])
        if "In this situation" in fu:
            good("Follow-up 이 'In this situation' 으로 시작")
        else:
            fail("Follow-up 에 'In this situation' 이 없습니다")
        if "Give an example" in fu or "example" in fu:
            good("Follow-up 에 예시 요구 있음")
        else:
            note("Follow-up 에 'Give an example.' 가 없습니다 (실제 4세트 중 2세트에 있음)")

    # M. Task C 고정 문구
    flat2c = re.sub(r"\s+", " ", parts["2C"])
    for phrase in ["What happened to your aircraft",
                   "How do you think the incident was handled",
                   "Make a comment from a pilot's point of view"]:
        if phrase not in flat2c:
            fail(f"Ⅱ-C 고정 문구 누락: '{phrase}'")

    # ── 결과 ──
    print()
    for m in ok:
        print(f"  ✓ {m}")
    for m in warn:
        print(f"  ! {m}")
    for m in bad:
        print(f"  ✗ {m}")
    print()
    print(f"{name} — 통과 {len(ok)} / 주의 {len(warn)} / 실패 {len(bad)}")
    return 1 if bad else 0


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit("사용법: python practice/check.py EPTA_01")
    sys.exit(check(sys.argv[1].upper()))
