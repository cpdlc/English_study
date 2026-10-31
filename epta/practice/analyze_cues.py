# -*- coding: utf-8 -*-
"""자막 타임코드가 이 음성 파일과 맞는지 확인하고, ATC 대사만의 발화 속도를 잰다.

자막 길이 ≈ 음성 길이면 그 자막은 이 파일에서 뽑은 것이므로,
큐(cue)별 타임코드로 '누가 몇 초 동안 몇 단어를 말했는지' 를 직접 계산할 수 있다.
"""
import re
import subprocess
from pathlib import Path

ROOT = Path(r"C:\homework\Eng\epta")
AUDIO = ROOT / "reference" / "audio"
TR = ROOT / "reference" / "transcripts"
PAIRS = [("sample1.m4a", "test01.txt"), ("sample2.m4a", "test02.txt"),
         ("sample3.m4a", "test03.txt"), ("smaple4.m4a", "test04.txt")]

CUE = re.compile(r"(\d\d):(\d\d):(\d\d),(\d\d\d) --> (\d\d):(\d\d):(\d\d),(\d\d\d)")
CALLSIGN = re.compile(r"^(Hotel Lima|HL)\s?1", re.I)
DIRECTIONS = re.compile(r"directions on the screen", re.I)


def secs(h, m, s, ms):
    return int(h) * 3600 + int(m) * 60 + int(s) + int(ms) / 1000


def parse_srt(p):
    cues, t = [], p.read_text(encoding="utf-8", errors="replace")
    blocks = re.split(r"\n\s*\n", t)
    for b in blocks:
        m = CUE.search(b)
        if not m:
            continue
        start = secs(*m.groups()[:4])
        end = secs(*m.groups()[4:])
        text = " ".join(l.strip() for l in b.splitlines()
                        if l.strip() and not l.strip().isdigit() and "-->" not in l)
        if text:
            cues.append({"start": start, "end": end, "text": text})
    return cues


def duration(p):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                        "-of", "csv=p=0", str(p)], capture_output=True, text=True)
    return float(r.stdout.strip())


def silences(p, db=-35, gap=12.0):
    r = subprocess.run(["ffmpeg", "-hide_banner", "-nostats", "-i", str(p),
                        "-af", f"silencedetect=noise={db}dB:d={gap}", "-f", "null", "-"],
                       capture_output=True, text=True, encoding="utf-8", errors="replace")
    out, cur = [], None
    for m in re.finditer(r"silence_(start|end):\s*(-?[\d.]+)", r.stderr):
        if m.group(1) == "start":
            cur = float(m.group(2))
        elif cur is not None:
            out.append((cur, float(m.group(2))))
            cur = None
    return out


for af, tf in PAIRS:
    ap, tp = AUDIO / af, TR / tf
    cues = parse_srt(tp)
    dur = duration(ap)
    last = cues[-1]["end"] if cues else 0

    print("=" * 72)
    print(f"{af}  ↔  {tf}")
    print("=" * 72)
    print(f"  음성 {dur:.0f}초 / 자막 마지막 큐 {last:.0f}초  → 차이 {dur-last:+.0f}초"
          f"  {'(같은 파일로 봄)' if abs(dur-last) < 90 else '(※ 다른 파일일 수 있음)'}")

    # ── ATC 대사만의 속도 ──
    atc = [c for c in cues if CALLSIGN.match(c["text"])]
    nar = [c for c in cues if not CALLSIGN.match(c["text"])]

    def wpm(group):
        w = sum(len(c["text"].split()) for c in group)
        t = sum(c["end"] - c["start"] for c in group)
        return (w, t, w / t * 60 if t else 0)

    aw, at, ar = wpm(atc)
    nw, nt, nr = wpm(nar)
    print(f"  ATC 대사      {len(atc):3d}큐  {aw:5d}단어 / {at:6.0f}초  →  **{ar:5.0f} WPM**")
    print(f"  내레이션 등   {len(nar):3d}큐  {nw:5d}단어 / {nt:6.0f}초  →    {nr:5.0f} WPM")

    # ── 12초 넘는 무음이 무엇 뒤에 오는가 ──
    print(f"  12초 넘는 무음 — 바로 앞에 무엇이 있었나")
    for s, e in silences(ap):
        before = [c for c in cues if c["end"] <= s + 1.5]
        tag = before[-1]["text"][:52] if before else "(없음)"
        kind = "Directions" if before and DIRECTIONS.search(before[-1]["text"]) else \
               "Record/응답" if before and re.search(r"Record your|answer the question", before[-1]["text"], re.I) else \
               "기타"
        print(f"    {s/60:5.1f}분  {e-s:5.1f}초  [{kind:10}] {tag}")
    print()
