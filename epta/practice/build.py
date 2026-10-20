"""
EPTA 세트 md → 음성(mp3) + 배포용 풀이 HTML.

    python practice/build.py EPTA_01

- sets/<SET>.md 에서 상황설명·ATC 교신·지시문(☞)을 뽑아 Google Cloud TTS 로 mp3 를 만든다.
- 같은 목소리·같은 문장은 파일 이름(해시)이 같아서 다시 돌려도 새로 만들지 않는다 (요금 안 나감).
- 결과를 web/ 아래에 둔다 — Vercel 로 그대로 배포된다.
      web/audio/<SET>/*.mp3      음성
      web/s/<SET>/index.html     풀이 화면
      web/index.html             세트 목록 (자동 갱신)
- **모범답안은 HTML 에 절대 넣지 않는다.** 배포 주소가 공개이기 때문이다
  (CLAUDE.md §1 규칙 3). 채점은 sets/<SET>_feedback.md 에서만 한다.
- 문항별로 음성인식 정확도를 올릴 용어 힌트(hints)를 뽑아 HTML 에 함께 넣는다.
- API 키는 epta/.env 의 API_KEY 를 읽는다. HTML 에는 들어가지 않는다.
"""

import base64
import hashlib
import json
import re
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import requests

import pages

ROOT = Path(__file__).resolve().parent.parent          # C:\homework\Eng\epta
SETS = ROOT / "sets"
OUT = ROOT / "practice"                                # template.html 위치
WEB = ROOT / "web"                                     # 배포 루트

TTS_URL = "https://texttospeech.googleapis.com/v1/text:synthesize"

# 관제사 / 상황설명·지시문 목소리 (Chirp 3 HD)
VOICES = {
    "atc": "en-US-Chirp3-HD-Charon",
    "narrator": "en-US-Chirp3-HD-Kore",
}

SPEAKER = re.compile(
    r"^(ATC|Center|Approach|Apron|Ground|Tower|Departure|Delivery|Clearance|Radar|Control)\s*:\s*(.*)$")
Q_HEADER = re.compile(r"^\*\*(P\d[ABC]-Q\d+)\*\*\s*🎙\s*(\d+)초\s*(.*)$")
IMAGE = re.compile(r"!\[[^\]]*\]\(([^)]+)\)")
SCREEN = re.compile(r"^🖥\s*\[(.*)\]\s*$")
DING = "🔔(dingdong)"


# ───────────────────────── 발음 정리 ─────────────────────────

DIGIT = {"0": "zero", "1": "one", "2": "two", "3": "three", "4": "four",
         "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "niner"}
SIDE = {"L": " left", "R": " right", "C": " center", "": ""}

# test04 계열 세트는 숫자 3 을 "tree" 로 발음한다. main() 이 md 를 보고 켠다.
TREE_STYLE = False
_T = "\x01"                                   # tree 자리를 잠시 표시해 두는 문자


def spell(digits):
    return " ".join(DIGIT[c] for c in digits)


def speech(text):
    """화면용 문장 → TTS 에 넣을 문장. 숫자를 교신식으로 풀어 쓴다."""
    t = text.replace("**", "")
    for mark in ("🎙", "🖥", "☞", DING, "🔔"):
        t = t.replace(mark, "")
    t = re.sub(r"^(Initial Situation|Situation Update|Flight Paths)\s+", r"\1. ", t)

    # tree 를 숫자 3 으로 되돌린다. `2 tree 0` 처럼 흩어진 자릿수는 한 덩어리로 합쳐야
    # 아래 숫자 규칙들이 걸린다 (`flight level tree 50` → `flight level 350`).
    t = re.sub(r"\btree\b", _T, t, flags=re.I)

    def _merge(m):
        s = m.group(0)
        return s.replace(" ", "").replace(_T, "3") if _T in s else s

    t = re.sub(r"[\d" + _T + r"]+(?: +[\d" + _T + r"]+)*", _merge, t)
    t = t.replace(_T, "3")

    t = re.sub(r"\bHL\s?123\b", "Hotel Lima one two three", t, flags=re.I)
    t = re.sub(r"\bFL\s?(\d{2,3})\b", lambda m: "flight level " + spell(m[1]), t)
    t = re.sub(r"\bflight level (\d{2,3})\b", lambda m: "flight level " + spell(m[1]), t, flags=re.I)
    t = re.sub(r"\bMach 0?\.(\d+)", lambda m: "Mach point " + spell(m[1]), t)
    t = re.sub(r"\b(\d+)\.(\d+)\b", lambda m: spell(m[1]) + " decimal " + spell(m[2]), t)
    t = re.sub(r"\b(\d{4})Z\b", lambda m: spell(m[1]) + " zulu", t)
    t = re.sub(r"\b(runway|RWY|ILS)\s?(\d{1,2})(?:\s?([LRC]))?\b",
               lambda m: ("runway" if m[1].upper() == "RWY" else m[1]) + " " + spell(m[2]) + SIDE[m[3] or ""],
               t, flags=re.I)
    t = re.sub(r"\b(heading|squawk)\s(\d{3,4})\b", lambda m: m[1] + " " + spell(m[2]), t, flags=re.I)
    t = re.sub(r"\bwind (\d{3}) at\b", lambda m: "wind " + spell(m[1]) + " at", t, flags=re.I)
    t = re.sub(r"\b(speed(?: to)?|reduce to)\s(\d{3})\b", lambda m: m[1] + " " + spell(m[2]), t, flags=re.I)
    t = re.sub(r"\b(\d{3}) (knots|kts)\b", lambda m: spell(m[1]) + " knots", t, flags=re.I)
    t = re.sub(r"\b(\d{1,2}),?000\b", lambda m: spell(m[1]) + " thousand", t)
    t = re.sub(r"\b(\d{1,2}) thousand\b", lambda m: spell(m[1]) + " thousand", t)
    t = re.sub(r"\b(\d{1,2}),?(\d)00\b", lambda m: spell(m[1]) + " thousand " + spell(m[2]) + " hundred", t)
    t = re.sub(r"\b([1-9])00\b", lambda m: spell(m[1]) + " hundred", t)

    if TREE_STYLE:
        t = re.sub(r"\bthree\b", "tree", t, flags=re.I)

    return re.sub(r"\s+", " ", t).strip()


# ───────────────────────── md 해석 ─────────────────────────

def paragraphs(lines):
    """빈 줄로 문단을 나누되, 화자·☞·🖥·그림 줄은 항상 새 문단으로 시작한다."""
    paras, cur = [], []
    starts_new = lambda s: (SPEAKER.match(s) or s.startswith(("☞", "🖥", "![", "Initial Situation",
                                                               "Situation Update", "Flight Paths")))
    for raw in lines:
        s = raw.strip()
        if not s:
            if cur:
                paras.append(cur)
            cur = []
            continue
        if starts_new(s) and cur:
            paras.append(cur)
            cur = []
        cur.append(s)
    if cur:
        paras.append(cur)
    return paras


def segments(lines):
    """문단 → 재생/표시 단위. say(목소리), screen(🖥), image, chime."""
    out = []
    for para in paras_clean(paragraphs(lines)):
        first = para[0]
        text = " ".join(para)

        if SCREEN.match(first):
            out.append({"type": "screen", "text": SCREEN.match(first)[1].strip()})
            continue
        img = IMAGE.search(text)
        if img:
            out.append({"type": "image", "src": "../sets/" + img[1]})
            continue

        ding = DING in text
        text = text.replace(DING, "").strip()
        m = SPEAKER.match(text)
        if m:
            out.append({"type": "say", "voice": "atc", "label": m[1], "text": m[2].strip()})
        elif text:
            kind = "instruction" if text.startswith("☞") else "narration"
            out.append({"type": "say", "voice": "narrator", "kind": kind,
                        "text": text.lstrip("☞").strip()})
        if ding:
            out.append({"type": "chime"})
    return out


def paras_clean(paras):
    # "(Q8)" 처럼 그림 앞에 붙은 번호만 있는 줄은 버리고, 그 뒤 그림은 살린다.
    result = []
    for p in paras:
        p = [s for s in p if not re.fullmatch(r"\(Q\d+\)", s)]
        p = [IMAGE.search(s)[0] if IMAGE.search(s) else s for s in p]
        if p:
            result.append(p)
    return result


def parse_set(md):
    lines = md.splitlines()
    title = next((l[2:].strip() for l in lines if l.startswith("# ")), "")

    sections, sec = [], None
    for line in lines:
        if line.startswith("## "):
            sec = {"title": line[3:].strip(), "lines": []}
            sections.append(sec)
        elif sec is not None:
            sec["lines"].append(line)

    for sec in sections:
        body = sec.pop("lines")
        heads = [i for i, l in enumerate(body) if Q_HEADER.match(l.strip())]

        # 섹션 머리: Directions 는 화면에만, 요령 표 뒤의 상황설명부터 읽는다.
        intro = body[:heads[0]] if heads else body
        sec["directions"] = directions(intro)
        table_end = max((i for i, l in enumerate(intro) if l.startswith("|")), default=-1)
        pre = intro[table_end + 1:]

        sec["questions"] = []
        for n, h in enumerate(heads):
            m = Q_HEADER.match(body[h].strip())
            end = heads[n + 1] if n + 1 < len(heads) else len(body)
            chunk = body[h + 1:end]

            ans = next((i for i, l in enumerate(chunk) if l.strip() == "[정답]"), len(chunk))
            sep = next((i for i, l in enumerate(chunk) if l.strip() == "---" and i > ans), len(chunk))

            sec["questions"].append({
                "id": m[1],
                "seconds": int(m[2]),
                "note": m[3].strip(),
                "pre": segments(pre),
                "body": segments(chunk[:ans]),
            })
            pre = chunk[sep + 1:]   # 다음 문항 앞 Situation Update 등
    return {"title": title, "sections": sections}


def directions(intro):
    out, on = [], False
    for l in intro:
        s = l.strip()
        if s.startswith("✅ Directions"):
            on = True
            s = s.split(":", 1)[1].strip()
        elif s.startswith("✅"):
            on = False
        if on and s:
            out.append(s)
    return " ".join(out)


# ───────────────────────── 음성인식 용어 힌트 ─────────────────────────

# 어느 문항에나 나올 수 있는 표준 교신 어휘. 서버 STT 의 speechContexts 로 넘어간다.
BASE_HINTS = [
    "Hotel Lima one two three", "affirm", "negative", "unable", "wilco", "roger",
    "say again", "standby", "request", "readback", "squawk", "flight level",
    "heading", "altimeter", "knots", "Mach", "runway", "taxiway", "holding point",
    "hold short", "line up and wait", "cleared for takeoff", "cleared to land",
    "go around", "vectors", "troubleshooting", "souls on board", "minimum fuel",
    "mayday", "pan pan", "PIREP", "turbulence", "icing", "wake turbulence",
    "QNH", "ILS", "RNAV", "SID", "transition", "intercept", "localizer",
    "established", "expedite", "backtrack", "pushback", "start up", "deviation",
    "offset", "intentions", "descend", "climb", "maintain", "contact", "report",
    "due to performance", "due to weather", "clear of traffic", "in sight",
]

ICAO = ("Alpha Bravo Charlie Delta Echo Foxtrot Golf Hotel India Juliett Kilo Lima "
        "Mike November Oscar Papa Quebec Romeo Sierra Tango Uniform Victor Whiskey "
        "Xray Yankee Zulu").split()

STOP = {"The", "You", "Your", "Now", "ATC", "If", "And", "But", "A", "An", "In",
        "On", "At", "To", "Of", "It", "This", "That", "While", "After", "Before",
        "During", "There", "They", "We", "Listen", "Contact", "Respond", "Make",
        "Say", "Give", "Report", "Acknowledge", "Record", "Explain", "Request",
        "Advise", "Inform", "Inquire", "Hotel", "Lima"}


def hints_for(q):
    """문항 안에 실제로 나온 고유명사 + 표준 어휘를 합쳐 힌트 목록을 만든다."""
    text = " ".join(s.get("text", "") for s in q["pre"] + q["body"])
    found = []
    for w in re.findall(r"\b[A-Z][A-Za-z]{2,}\b", text):
        if w not in STOP and w not in found:
            found.append(w)
    for w in ICAO:
        if w.lower() in text.lower() and w not in found:
            found.append(w)
    return found + BASE_HINTS


# ───────────────────────── TTS ─────────────────────────

def load_key():
    env = ROOT / ".env"
    for line in env.read_text(encoding="utf-8").splitlines():
        k, _, v = line.partition("=")
        if k.strip().upper() == "API_KEY":
            return v.strip().strip('"').strip("'")
    raise SystemExit(".env 에 API_KEY 가 없습니다.")


def synthesize(key, voice, text, path):
    body = {
        "input": {"text": text},
        "voice": {"languageCode": "en-US", "name": voice},
        "audioConfig": {"audioEncoding": "MP3"},
    }
    r = requests.post(TTS_URL, json=body, headers={"X-Goog-Api-Key": key}, timeout=60)
    if r.status_code != 200:
        raise RuntimeError(f"TTS 실패 {r.status_code}: {r.text[:500]}")
    path.write_bytes(base64.b64decode(r.json()["audioContent"]))


def attach_audio(data, set_name):
    key = load_key()
    audio_dir = WEB / "audio" / set_name
    audio_dir.mkdir(parents=True, exist_ok=True)

    jobs, script = [], []
    for sec in data["sections"]:
        for q in sec["questions"]:
            for seg in q["pre"] + q["body"]:
                if seg["type"] != "say":
                    continue
                voice = VOICES[seg["voice"]]
                said = speech(seg["text"])
                name = hashlib.sha1(f"{voice}|{said}".encode()).hexdigest()[:16] + ".mp3"
                seg["src"] = f"/audio/{set_name}/{name}"
                script.append(f"[{q['id']}] {seg['voice']:8} {said}")
                if not (audio_dir / name).exists():
                    jobs.append((voice, said, audio_dir / name))

    unique = {j[2]: j for j in jobs}.values()
    chars = sum(len(j[1]) for j in unique)
    print(f"새로 만들 음성 {len(unique)}개 ({chars}자), 기존 재사용 {len(script) - len(jobs)}개")

    with ThreadPoolExecutor(max_workers=4) as pool:
        list(pool.map(lambda j: synthesize(key, *j), unique))

    (audio_dir / "_script.txt").write_text("\n".join(script), encoding="utf-8")


# ───────────────────────── main ─────────────────────────

def main():
    if len(sys.argv) < 2:
        raise SystemExit("사용법: python practice/build.py EPTA_05")
    set_name = sys.argv[1].upper()

    md_path = SETS / f"{set_name}.md"
    md = md_path.read_text(encoding="utf-8")

    # 세트가 tree 표기를 쓰면 TTS 도 3 을 "tree" 로 발음하게 한다 (test04 계열)
    global TREE_STYLE
    TREE_STYLE = bool(re.search(r"\btree\b", md, re.I))
    if TREE_STYLE:
        print("test04 계열 — 숫자 3 을 'tree' 로 발음합니다")

    data = parse_set(md)
    data["set"] = set_name
    data["raw"] = md

    # 모범답안은 공개 주소에 올라가므로 절대 넣지 않는다 (CLAUDE.md §1 규칙 3)
    data["answers"] = {}

    attach_audio(data, set_name)

    for sec in data["sections"]:
        for q in sec["questions"]:
            q["hints"] = hints_for(q)

    template = (OUT / "template.html").read_text(encoding="utf-8")
    payload = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")
    html = template.replace("__TITLE__", set_name).replace("__DATA__", payload)

    out = WEB / "s" / set_name / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html, encoding="utf-8")

    # 문항 이미지(SVG)를 풀이 화면 옆으로 복사한다 — md 의 images/… 경로가 그대로 맞는다
    src_img = SETS / "images"
    if src_img.exists():
        dst_img = out.parent / "images"
        dst_img.mkdir(exist_ok=True)
        for f in src_img.glob(f"{set_name}_*.svg"):
            dst_img.joinpath(f.name).write_bytes(f.read_bytes())

    # '내 답안 보기' 화면이 문제 본문·음성을 가져갈 수 있게 따로 내보낸다 (정답 없음)
    qdir = WEB / "q"
    qdir.mkdir(parents=True, exist_ok=True)
    # 복습 화면에서는 말미 지시문("Record your full readback." 등)을 뺀다 —
    # 문항마다 똑같아서 읽을 거리만 늘고, 다시 들을 이유도 없다.
    # 풀이 화면(/s/)에는 그대로 남는다 (실제 시험이 읽어주는 문구이므로).
    CUES = ("Record your full readback.", "Record your response.")

    def visible(segs):
        return [s for s in segs if (s.get("text") or "").strip() not in CUES]

    brief = {
        "set": set_name,
        "sections": [
            {
                "title": sec["title"],
                "questions": [
                    {"id": q["id"], "seconds": q["seconds"], "note": q["note"],
                     "pre": visible(q["pre"]), "body": visible(q["body"])}
                    for q in sec["questions"]
                ],
            }
            for sec in data["sections"]
        ],
    }
    (qdir / f"{set_name}.json").write_text(
        json.dumps(brief, ensure_ascii=False), encoding="utf-8")

    sets = write_index()

    total = sum(len(s["questions"]) for s in data["sections"])
    print(f"{out} 생성 — {len(data['sections'])}개 파트, {total}문항")
    print(f"목록 갱신 — Test 1~{len(sets)} ({', '.join(sets)})")
    print("배포: npx vercel deploy --prod web")


def write_index():
    """web/index.html 과 web/r/index.html 을 다시 쓴다 — 목록은 늘 최신으로."""
    root = WEB / "s"
    sets = sorted(d.name for d in root.iterdir() if (d / "index.html").exists()) if root.exists() else []

    cards = "\n".join(pages.card(n, s) for n, s in enumerate(sets, 1)) \
        or '    <p class="empty">아직 세트가 없습니다.</p>'

    (WEB / "index.html").write_text(pages.index_html(cards), encoding="utf-8")

    rdir = WEB / "r"
    rdir.mkdir(parents=True, exist_ok=True)
    (rdir / "index.html").write_text(pages.result_html(), encoding="utf-8")

    return sets


if __name__ == "__main__":
    main()
