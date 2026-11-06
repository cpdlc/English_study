# -*- coding: utf-8 -*-
"""로컬에 남은 기록으로 서버 저장소를 되살린다 — backup.py 의 반대 방향.

    python practice/restore.py              # 전 세트
    python practice/restore.py EPTA_10
    python practice/restore.py --dry         # 쓰지 않고 무엇이 들어갈지만 본다

`practice/results/<SET>.md`(답안·전사본·녹음 경로)와 `practice/recordings/`(backup.py 가
받아 둔 녹음)를 읽어 `practice/local/` 아래에 서버가 읽는 모양으로 다시 깐다. 채점 결과는
건드리지 않는다 — 그건 `python practice/push.py <SET>` 이 한다.

Vercel Blob 에서 로컬 서버(`practice/serve.py`)로 옮길 때 과거 기록을 가져오는 용도이고,
저장소가 깨졌을 때 복구용으로도 쓴다. 이미 있는 파일은 덮어쓰지 않으므로 여러 번 돌려도
안전하다(`--force` 로 덮어쓸 수 있다).

답안 원문 자체는 `sets/<SET>_feedback.md` 의 `내 답안 :` 줄에도 남아 있고 그쪽은 git 에
커밋된다. 여기서 쓰는 `practice/results/` 는 git 제외이므로, 둘 다 없어지면 복구할 수 없다.
"""
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RESULTS = ROOT / "practice" / "results"
RECORDINGS = ROOT / "practice" / "recordings"
STORE = ROOT / "practice" / "local"

SESSION = re.compile(r"^##\s*세션\s+(\S+)", re.M)
BLOCK = re.compile(
    r"\*\*(?P<qid>P\d[ABC]-Q\d+)\*\*\n"
    r"타이핑 답안 : (?P<typed>.*)\n"
    r"음성 전사본 : (?P<voice>.*)\n"
    r"(?P<rest>(?:⚠️ 전사 오류 : .*\n)?(?:녹음 : (?P<rec>\S+)\n)?)"
)
NONE = {"(없음)", ""}

# 되살릴 때의 2순위 — 채점 파일. `practice/results/` 는 git 제외라 사라질 수 있지만
# `sets/<SET>_feedback.md` 는 커밋되므로, md 가 없는 세트는 여기서 답안을 꺼낸다.
# `내 답안` 은 한 줄만 잡는다 — `.` 에 줄바꿈을 허용한 채 욕심내면 파일 끝까지 삼킨다.
FB_BLOCK = re.compile(r"^\*\*(?P<qid>P\d[ABC]-Q\d+)\*\*.*?^내 답안 : (?P<mine>[^\n]*)",
                      re.M | re.S)


def parse_feedback(md):
    """채점 파일 → 레코드. 녹음 경로는 없으므로 '내 답안'만 되살린다."""
    recs = []
    for m in FB_BLOCK.finditer(md):
        mine = m["mine"].strip()
        if mine.startswith("(무응답"):
            mine = ""
        recs.append({"qid": m["qid"], "answer": mine, "transcript": "", "audioPath": None})
    return recs


def parse(md):
    """md → [(세션, [레코드...])]. 세션 머리글로 본문을 나눈 뒤 블록을 읽는다."""
    marks = [(m.group(1), m.start()) for m in SESSION.finditer(md)]
    if not marks:
        return []
    out = []
    for i, (name, start) in enumerate(marks):
        end = marks[i + 1][1] if i + 1 < len(marks) else len(md)
        recs = []
        for m in BLOCK.finditer(md[start:end]):
            typed = m["typed"].strip()
            voice = m["voice"].strip()
            recs.append({
                "qid": m["qid"],
                "answer": "" if typed in NONE else typed,
                "transcript": "" if voice in NONE else voice,
                "audioPath": (m["rec"] or "").strip() or None,
            })
        if recs:
            out.append((name, recs))
    return out


def main():
    argv = sys.argv[1:]
    dry = "--dry" in argv
    force = "--force" in argv
    picked = [a.upper() for a in argv if not a.startswith("--")]

    files = sorted(RESULTS.glob("*.md"))
    files = [f for f in files if not f.stem.endswith("_cross")]
    have = {f.stem.upper() for f in files}

    # results md 가 없는 세트는 채점 파일에서 답안만이라도 되살린다.
    fallback = []
    for fb in sorted((ROOT / "sets").glob("*_feedback.md")):
        name = fb.stem[: -len("_feedback")]
        if name.upper() not in have:
            fallback.append((name, fb))

    if picked:
        files = [f for f in files if f.stem.upper() in picked]
        fallback = [(n, f) for n, f in fallback if n.upper() in picked]
    if not files and not fallback:
        sys.exit(f"{RESULTS} 에도 sets/ 에도 읽을 기록이 없습니다.")

    wrote = kept = audio = missing = 0
    for f in files:
        name = f.stem
        sessions = parse(f.read_text(encoding="utf-8"))
        if not sessions:
            print(f"[{name}] 세션 머리글을 찾지 못했습니다 — 건너뜁니다")
            continue
        for session, recs in sessions:
            d = STORE / "r" / name / session
            if not dry:
                d.mkdir(parents=True, exist_ok=True)
            n_a = 0
            for rec in recs:
                dst = d / f"{rec['qid']}.json"
                if dst.exists() and not force:
                    kept += 1
                else:
                    full = {
                        "set": name, "session": session, "qid": rec["qid"],
                        "answer": rec["answer"], "transcript": rec["transcript"],
                        "sttError": None, "audioPath": rec["audioPath"],
                        "seconds": None,
                        "at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
                        "restoredFrom": str(f.relative_to(ROOT)),
                    }
                    if not dry:
                        dst.write_text(json.dumps(full, ensure_ascii=False, indent=2),
                                       encoding="utf-8")
                    wrote += 1

                # 녹음이 백업돼 있으면 같이 깐다. 없으면 '내 녹음 듣기'만 비는 것이고
                # 답안·채점은 정상으로 보인다.
                blob = rec["audioPath"]
                if not blob:
                    continue
                src = RECORDINGS / name / session / Path(blob).name
                out = STORE / blob
                if out.exists():
                    audio += 1
                    n_a += 1
                elif src.exists():
                    if not dry:
                        out.parent.mkdir(parents=True, exist_ok=True)
                        out.write_bytes(src.read_bytes())
                    audio += 1
                    n_a += 1
                else:
                    missing += 1
            print(f"[{name}] 세션 {session} — 문항 {len(recs)} · 녹음 {n_a}/{len(recs)}")

    for name, fb in fallback:
        recs = parse_feedback(fb.read_text(encoding="utf-8"))
        if not recs:
            print(f"[{name}] 채점 파일에서 답안을 찾지 못했습니다 — 건너뜁니다")
            continue
        session = "restored"
        d = STORE / "r" / name / session
        if not dry:
            d.mkdir(parents=True, exist_ok=True)
        for rec in recs:
            dst = d / f"{rec['qid']}.json"
            if dst.exists() and not force:
                kept += 1
                continue
            full = {
                "set": name, "session": session, "qid": rec["qid"],
                "answer": rec["answer"], "transcript": "", "sttError": None,
                "audioPath": None, "seconds": None,
                "at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
                "restoredFrom": str(fb.relative_to(ROOT)),
            }
            if not dry:
                dst.write_text(json.dumps(full, ensure_ascii=False, indent=2), encoding="utf-8")
            wrote += 1
        print(f"[{name}] 채점 파일에서 복원 — 문항 {len(recs)} (녹음 없음)")

    print(f"\n기록 {wrote}개 기록{'(예정)' if dry else ' 생성'} · 이미 있어 유지 {kept}"
          f" · 녹음 {audio} · 녹음 없음 {missing}")
    print(f"저장 위치 : {STORE}")
    if missing:
        print(f"\n녹음 {missing}개는 로컬에 없습니다 — 옛 서버에서 건질 수 있습니다 :")
        print("    python practice/backup.py --vercel    (스토어가 열린 뒤)")
        print("    python practice/restore.py --force    (받은 뒤 다시 깐다)")
    print("\n채점 결과는 따로 올립니다 :  python practice/push.py <SET>")


if __name__ == "__main__":
    main()
