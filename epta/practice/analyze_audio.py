"""실제 출제 녹음(mp3/wav)을 재서 발화 속도와 응답 허용시간을 뽑는다.

    python practice/analyze_audio.py reference/audio/test01.mp3
    python practice/analyze_audio.py reference/audio          # 폴더 전체

소리를 듣는 것이 아니라 **측정**한다. 뽑아내는 값은 세 가지다.

  1. 발화 속도 (WPM)   같은 이름의 자막이 reference/transcripts/ 에 있으면
                       총 단어 수 ÷ 실제 말한 시간 으로 계산한다.
                       → build.py 의 TTS speakingRate 를 여기에 맞춘다.
  2. 응답 허용시간     무음 구간의 길이 분포. 20·30·90초 근처에 뭉치면
                       그게 실제 시험이 주는 시간이다.
                       → exam-spec.md §10 의 "자막으로는 알 수 없다" 를 교정한다.
  3. 기본 정보         길이·샘플레이트·채널·비트레이트.

무음 판정 기준은 -35 dB / 0.6초 이상이 기본값이고, `--db`, `--gap` 으로 바꿀 수 있다.
"""

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TRANSCRIPTS = ROOT / "reference" / "transcripts"
EXTS = {".mp3", ".wav", ".m4a", ".ogg", ".flac", ".webm"}


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8",
                          errors="replace")


def probe(path):
    r = run(["ffprobe", "-v", "error", "-show_format", "-show_streams",
             "-of", "json", str(path)])
    if r.returncode != 0:
        sys.exit(f"ffprobe 실패: {r.stderr[:300]}")
    d = json.loads(r.stdout)
    a = next((s for s in d["streams"] if s.get("codec_type") == "audio"), {})
    return {
        "seconds": float(d["format"].get("duration", 0)),
        "codec": a.get("codec_name", "?"),
        "rate": int(a.get("sample_rate", 0) or 0),
        "channels": a.get("channels", 0),
        "kbps": round(int(d["format"].get("bit_rate", 0) or 0) / 1000),
    }


def silences(path, db, gap):
    """무음 구간 [(start, end)] 을 돌려준다."""
    r = run(["ffmpeg", "-hide_banner", "-nostats", "-i", str(path),
             "-af", f"silencedetect=noise={db}dB:d={gap}", "-f", "null", "-"])
    out, cur, log = [], None, r.stderr
    for m in re.finditer(r"silence_(start|end):\s*(-?[\d.]+)", log):
        kind, val = m.group(1), float(m.group(2))
        if kind == "start":
            cur = val
        elif cur is not None:
            out.append((cur, val))
            cur = None
    return out


def transcript_for(stem):
    """자막 파일을 찾는다. 이름이 같지 않아도 끝 숫자로 매칭한다
    (sample1 / smaple4 → test01 / test04)."""
    p = TRANSCRIPTS / f"{stem}.txt"
    if p.exists():
        return p
    m = re.search(r"(\d+)\s*$", stem)
    if m:
        p = TRANSCRIPTS / f"test{int(m.group(1)):02d}.txt"
        if p.exists():
            return p
    return None


def words_of(stem):
    """짝이 되는 자막의 발화 단어 수 (SRT 번호·타임코드 제외)."""
    p = transcript_for(stem)
    if p is None:
        return None
    n = 0
    for line in p.read_text(encoding="utf-8", errors="replace").splitlines():
        s = line.strip()
        if not s or s.isdigit() or "-->" in s:
            continue
        n += len(s.split())
    return n


def buckets(gaps):
    """무음 길이를 구간별로 센다 — 20·30·90초 근처에 뭉치는지 보려는 것."""
    edges = [(0, 3), (3, 8), (8, 15), (15, 25), (25, 40), (40, 70), (70, 120), (120, 1e9)]
    rows = []
    for lo, hi in edges:
        hits = [g for g in gaps if lo <= g < hi]
        if hits:
            label = f"{lo}~{hi}s" if hi < 1e9 else f"{lo}s+"
            rows.append((label, len(hits), sum(hits) / len(hits)))
    return rows


def analyze(path, db, gap):
    info = probe(path)
    sil = silences(path, db, gap)
    total = info["seconds"]
    quiet = sum(e - s for s, e in sil)
    speech = max(total - quiet, 0.001)
    gaps = sorted(e - s for s, e in sil)

    print("=" * 70)
    print(f"{path.name}")
    print("=" * 70)
    print(f"  길이 {total/60:.1f}분 ({total:.0f}초) · {info['codec']} · "
          f"{info['rate']} Hz · {info['channels']}ch · {info['kbps']} kbps")
    print(f"  말한 시간 {speech/60:.1f}분 ({speech/total*100:.0f}%) · "
          f"무음 {quiet/60:.1f}분 ({quiet/total*100:.0f}%) · 무음 구간 {len(sil)}개")

    n = words_of(path.stem)
    if n:
        print()
        print(f"  [발화 속도] 자막 {n:,}단어 ÷ 말한 시간 {speech:.0f}초")
        print(f"              = **{n/speech*60:.0f} WPM**")
        print(f"              (영어 교신 통상 90~120 WPM, 일반 대화 140~160 WPM)")
    else:
        print(f"\n  [발화 속도] reference/transcripts/{path.stem}.txt 가 없어 계산 못 함")

    if gaps:
        print()
        print("  [무음 구간 분포] — 응답 허용시간이 뭉치는 곳을 본다")
        for label, cnt, avg in buckets(gaps):
            bar = "█" * min(cnt, 40)
            print(f"    {label:>9}  {cnt:3d}개  평균 {avg:5.1f}초  {bar}")
        print(f"    가장 긴 5개 : {[round(g, 1) for g in gaps[-5:]]}")
    print()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("target", help="파일 또는 폴더")
    ap.add_argument("--db", type=int, default=-35, help="무음 판정 기준 dB (기본 -35)")
    ap.add_argument("--gap", type=float, default=0.6, help="무음 최소 길이 초 (기본 0.6)")
    args = ap.parse_args()

    t = Path(args.target)
    if not t.is_absolute():
        t = ROOT / t
    if not t.exists():
        sys.exit(f"{t} 가 없습니다.")

    files = sorted(f for f in t.iterdir() if f.suffix.lower() in EXTS) if t.is_dir() else [t]
    if not files:
        sys.exit(f"{t} 에 오디오 파일이 없습니다. ({', '.join(sorted(EXTS))})")

    for f in files:
        analyze(f, args.db, args.gap)


if __name__ == "__main__":
    main()
