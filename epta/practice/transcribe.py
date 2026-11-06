# -*- coding: utf-8 -*-
"""서버에 저장된 녹음을 **로컬 faster-whisper** 로 전사한다.

2026-11-03 에 Google STT(v1 `latest_long`) 에서 교체했다. 교체 이유 :

- **구글이 채점을 틀리게 만들었다.** EPTA_10 P1A-Q3 를 `Time to fly level 3300 ...
  until later` 로 받아써서 "FL330 을 네 자리로 말했다"·"`until level` 을 `later` 로
  말했다"고 지적했는데, 실제 발화는 `Climb to flight level three three zero ... until
  level` 로 완전 정답이었다(⚠️ → ✅). P1B-Q3 의 `Gangneung Control` 도 `Control` 로
  잘려 기관명 누락으로 오판했다.
- **길이 제한이 사라진다.** 구글 inline recognize 는 60초까지만 받아서 90초 문항
  (Follow-up·Task C)이 늘 실패했고, 그 때문에 55초 FLAC 조각내기 + `submit.js` 의
  `patch` 우회로가 필요했다. 로컬은 통째로 전사한다.
- 비용·네트워크·API 키가 필요 없다.

**모델은 `large-v3-turbo` 를 쓴다.** large-v3 보다 빠른 것 외에, 이 용도에서 더 중요한
차이가 있다 — **turbo 는 숫자를 말한 대로 적는다**(`three three zero`). large-v3 는
`330` 으로 정규화해서, 자릿수를 어떻게 끊어 말했는지가 채점 대상인 이 시험에서 증거를
지운다. 반대로 turbo 는 `--language en` 을 줘도 한국 지명을 한글로 적는 약점이 있어
(`강릉 컨트롤`), **한글이 섞인 문항만 자동으로 large-v3 로 교차 확인**한다.

`--initial_prompt` 에는 **일반 항공 교신 용어만** 넣는다. 세트의 지명·숫자를 넣으면
인식기가 정답 쪽으로 끌려가서, 응시자가 말하지 않은 것을 말했다고 적을 수 있다 —
채점 근거가 오염되므로 넣지 않는다.

    python practice/transcribe.py EPTA_10 --all           # 녹음이 있는 전 문항 (채점 전 기본)
    python practice/transcribe.py EPTA_10                 # 서버 전사가 실패·빈 문항만
    python practice/transcribe.py EPTA_10 P2C-Q1 P2C-Q2   # 지정 문항만
    python practice/transcribe.py EPTA_10 --push          # 전사 없이 md 의 전사본만 서버로
    python practice/transcribe.py EPTA_10 --all --cross   # 전 문항을 두 모델로 교차 확인
    python practice/transcribe.py EPTA_10 --all --keep    # 변환한 wav 를 남긴다 (직접 듣기용)

결과는 `practice/results/<SET>.md` 의 '음성 전사본' 칸에 채워 넣고, 같은 내용을 서버
기록에도 올려 폰의 '내 답안 보기' 가 같은 글을 보게 한다. 교차 확인한 문항은
`practice/results/<SET>_cross.md` 에 두 모델의 결과를 나란히 남긴다.
"""
import json
import os
import re
import subprocess
import sys
import tempfile
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RESULTS = ROOT / "practice" / "results"

MODEL = "large-v3-turbo"
CROSS_MODEL = "large-v3"

# PotPlayer 가 받아 둔 엔진·모델을 그대로 쓴다. .env 로 덮어쓸 수 있다.
APPDATA = Path(os.environ.get("APPDATA", Path.home() / "AppData/Roaming"))
WHISPER_EXE = APPDATA / "PotPlayer64/Engine/Faster-Whisper-XXL/faster-whisper-xxl.exe"
WHISPER_MODELS = APPDATA / "PotPlayer64/Model"

PROMPT = (
    "Air traffic control radiotelephony. Readback, cleared for takeoff, cleared to land, "
    "cleared for the ILS approach, flight level, squawk, altimeter, heading, knots, "
    "feet per minute, taxi, holding point, runway, affirm, negative, unable, request, "
    "maintain, descend, climb, contact tower, Hotel Lima one two three."
)

HANGUL = re.compile(r"[가-힣]")
STAMP = re.compile(r"^\s*\[[\d:.]+\s*-->\s*[\d:.]+\]\s*")
RUN = 6                         # 같은 낱말이 이만큼 연달아 나오면 환각 루프로 본다


def collapse(text):
    """Whisper 의 반복 루프를 잘라낸다.

    긴 녹음 끝에서 같은 낱말을 수십 번 되풀이하는 것은 Whisper 의 알려진 실패이고
    (EPTA_10 P2A-Q11 은 `we,` 가 100회 이어졌다), 그대로 두면 응답 단어 수가 부풀려져
    Fluency 채점이 틀어진다. 말이 끊긴 지점에서 자르고 표시만 남긴다.
    """
    words = text.split()
    key = lambda w: re.sub(r"[^\w]", "", w).lower()
    run, i = 1, 1
    while i < len(words):
        if key(words[i]) and key(words[i]) == key(words[i - 1]):
            run += 1
            if run >= RUN:
                cut = i - run + 1
                return " ".join(words[:cut]).rstrip(" ,.") + " …(이후 같은 말 반복)"
        else:
            run = 1
        i += 1
    return text


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
    return v


def engine(cfg):
    """실행파일·모델 폴더를 확정한다. .env 의 WHISPER_EXE / WHISPER_MODELS 가 우선."""
    exe = Path(cfg.get("WHISPER_EXE") or WHISPER_EXE)
    models = Path(cfg.get("WHISPER_MODELS") or WHISPER_MODELS)
    if not exe.exists():
        sys.exit(
            f"faster-whisper 실행파일이 없습니다: {exe}\n"
            f".env 에 WHISPER_EXE=<경로> 를 넣어 지정하세요."
        )
    if not models.exists():
        sys.exit(f"모델 폴더가 없습니다: {models}\n.env 에 WHISPER_MODELS=<경로> 로 지정하세요.")
    return exe, models


def fetch_audio(cfg, blob_path, out):
    """비공개 Blob 에서 녹음을 내려받는다."""
    url = cfg["EPTA_URL"].rstrip("/") + "/api/audio?path=" + urllib.parse.quote(blob_path)
    req = urllib.request.Request(url, headers={"x-epta-token": cfg["EPTA_TOKEN"]})
    with urllib.request.urlopen(req, timeout=120) as r:
        out.write_bytes(r.read())


def to_wav(src, dst):
    """MediaRecorder 의 webm 은 길이·타임스탬프 정보가 없다. 통째로 디코드해 둔다.

    whisper 자체도 ffmpeg 로 읽지만, `+genpts` 없이는 이 webm 들의 길이를 잘못 잡아
    뒤쪽이 잘린다. 먼저 제대로 된 wav 로 만들어 넘긴다.
    """
    subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
         "-fflags", "+genpts", "-i", str(src),
         "-ac", "1", "-ar", "16000", "-c:a", "pcm_s16le", str(dst)],
        check=True,
    )


def whisper(exe, models, model, wav, workdir):
    """faster-whisper-xxl 로 전사하고 타임스탬프를 벗겨 한 줄로 돌려준다.

    무음 녹음에서 말을 지어내면 채점이 그대로 오염되므로 VAD 와 환각 억제를 켠다.
    EPTA_09 P2A-Q11(1.8초·평균 -38dB)로 확인했을 때 두 모델 모두 빈 결과를 냈다.
    """
    out = workdir / model
    out.mkdir(parents=True, exist_ok=True)
    # check=True 를 쓰지 않는다 — faster-whisper-xxl 1.1.1 은 전사에 성공해도 종료코드
    # 9 를 내는 경우가 있다(긴 파일에서 자주). 성공 여부는 결과 파일로 판단한다.
    done = subprocess.run(
        [str(exe),
         "--model", model, "--model_dir", str(models),
         "--language", "en", "-f", "txt", "--output_dir", str(out),
         "--beam_size", "5", "--temperature", "0",
         "--vad_filter", "true", "--vad_method", "silero_v5_fw",
         "--hallucination_silence_threshold", "2",
         "--initial_prompt", PROMPT,
         str(wav)],
        capture_output=True, text=True, errors="replace",
    )
    txt = out / (wav.stem + ".txt")
    if not txt.exists():
        tail = ((done.stderr or "") + (done.stdout or ""))[-300:].replace("\n", " ")
        raise RuntimeError(f"전사 결과 파일이 없습니다 (exit {done.returncode}): {tail}")
    lines = [STAMP.sub("", ln).strip() for ln in txt.read_text(encoding="utf-8").splitlines()]
    return collapse(" ".join(ln for ln in lines if ln).strip())


def push_transcript(cfg, blob_path, text):
    """고친 전사본을 서버 기록에도 덮어쓴다 — 폰의 '내 답안 보기' 가 같은 걸 보게."""
    parts = Path(blob_path).as_posix().split("/")      # r/<set>/<session>/<qid>.webm
    if len(parts) != 4:
        raise RuntimeError(f"녹음 경로를 알아볼 수 없습니다: {blob_path}")
    body = json.dumps({
        "patch": True,
        "set": parts[1],
        "session": parts[2],
        "qid": Path(parts[3]).stem,
        "transcript": text,
    }).encode()
    req = urllib.request.Request(
        cfg["EPTA_URL"].rstrip("/") + "/api/submit",
        data=body,
        headers={"content-type": "application/json", "x-epta-token": cfg["EPTA_TOKEN"]},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        json.load(r)


def transcribe(cfg, exe, models, blob_path, model, cross, keepdir):
    """(주 전사본, 교차 전사본 또는 None) 을 돌려준다."""
    with tempfile.TemporaryDirectory() as td:
        work = Path(td)
        src = work / ("rec" + Path(blob_path).suffix)
        fetch_audio(cfg, blob_path, src)
        wav = work / (Path(blob_path).stem + ".wav")
        to_wav(src, wav)

        text = whisper(exe, models, model, wav, work)
        # turbo 는 한국 지명을 한글로 적는다. 그때만 영어가 안정적인 모델로 다시 본다.
        other = None
        if cross or HANGUL.search(text):
            other = whisper(exe, models, CROSS_MODEL, wav, work)

        if keepdir:
            keepdir.mkdir(parents=True, exist_ok=True)
            (keepdir / wav.name).write_bytes(wav.read_bytes())
    return text, other


# ── results md 파싱/갱신 ────────────────────────────────────
BLOCK = re.compile(
    r"\*\*(?P<qid>P\d[ABC]-Q\d+)\*\*\n"
    r"타이핑 답안 : (?P<typed>.*)\n"
    r"음성 전사본 : (?P<voice>.*)\n"
    r"(?P<rest>(?:⚠️ 전사 오류 : .*\n)?(?:녹음 : (?P<rec>\S+)\n)?)"
)


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    set_name = sys.argv[1].upper()
    picked = [a for a in sys.argv[2:] if not a.startswith("--")]
    do_all = "--all" in sys.argv
    cross = "--cross" in sys.argv
    model = MODEL
    if "--model" in sys.argv:
        model = sys.argv[sys.argv.index("--model") + 1]

    md_path = RESULTS / f"{set_name}.md"
    if not md_path.exists():
        sys.exit(f"{md_path} 가 없습니다. 먼저 `python practice/pull.py {set_name}` 을 돌리세요.")
    md = md_path.read_text(encoding="utf-8")
    cfg = env()

    if "--push" in sys.argv:
        sent = 0
        for m in BLOCK.finditer(md):
            rec, voice = (m["rec"] or "").strip(), m["voice"].strip()
            if not rec or voice in ("(없음)", ""):
                continue
            if picked and m["qid"] not in picked:
                continue
            try:
                push_transcript(cfg, rec, voice)
            except Exception as e:
                print(f"  ✗ {m['qid']} — 서버 반영 실패: {e}")
                continue
            sent += 1
            print(f"  ↑ {m['qid']} — {len(voice.split())}단어")
        print(f"서버 반영 완료 — {sent}문항")
        return

    exe, models = engine(cfg)
    keepdir = (RESULTS / f"{set_name}_audio") if "--keep" in sys.argv else None

    targets = []
    for m in BLOCK.finditer(md):
        rec = (m["rec"] or "").strip()
        if not rec:
            continue
        failed = "전사 오류" in m["rest"] or m["voice"].strip() in ("(없음)", "")
        want = (m["qid"] in picked) if picked else (True if do_all else failed)
        if want:
            targets.append((m["qid"], rec))

    if not targets:
        print("전사할 녹음이 없습니다.")
        return

    print(f"{set_name} — 녹음 {len(targets)}개 전사 (모델 {model})")
    done, crossed, silent = {}, {}, []
    for qid, rec in targets:
        try:
            text, other = transcribe(cfg, exe, models, rec, model, cross, keepdir)
        except subprocess.CalledProcessError as e:
            tail = (e.stderr or "")[-200:].replace("\n", " ")
            print(f"  ✗ {qid} — 변환/전사 실패: {tail}")
            continue
        except urllib.error.HTTPError as e:
            print(f"  ✗ {qid} — HTTP {e.code} {e.read().decode('utf-8', 'replace')[:160]}")
            continue
        except Exception as e:
            print(f"  ✗ {qid} — {e}")
            continue

        if other is not None:
            crossed[qid] = (text, other)

        if not text:
            # 말이 없는 것도 사실이다 — 무응답으로 기록해야 채점이 맞는다.
            silent.append(qid)
            print(f"  ⚠ {qid} — 인식된 말이 없습니다 (무음/무응답)")
            continue

        done[qid] = text
        try:
            push_transcript(cfg, rec, text)
            mark = "↑"
        except Exception as e:
            mark = f"(서버 반영 실패: {e})"
        flag = " ⚑교차" if qid in crossed else ""
        print(f"  ✓ {qid} — {len(text.split())}단어{flag} {mark}")

    if crossed:
        lines = [f"# {set_name} 교차 확인 ({model} ↔ {CROSS_MODEL})", "",
                 "turbo 가 한글로 적은 문항, 또는 `--cross` 로 지정한 문항이다.",
                 "**숫자를 말한 대로 적는 쪽은 turbo** 이므로 주 전사본은 turbo 를 쓰고,",
                 "지명·고유명사가 의심스러울 때 아래를 참고한다.", ""]
        for qid, (a, b) in crossed.items():
            lines += [f"**{qid}**", f"- {model} : {a}", f"- {CROSS_MODEL} : {b}", ""]
        out = RESULTS / f"{set_name}_cross.md"
        out.write_text("\n".join(lines), encoding="utf-8")
        print(f"교차 확인 {len(crossed)}문항 → {out}")

    if silent:
        print(f"무음 {len(silent)}문항 : {', '.join(silent)} — 채점에서 무응답(Level 1) 처리")

    if not done:
        return

    def swap(m):
        if m["qid"] not in done:
            return m[0]
        body = re.sub(r"⚠️ 전사 오류 : .*\n", "", m["rest"])
        return (f"**{m['qid']}**\n타이핑 답안 : {m['typed']}\n"
                f"음성 전사본 : {done[m['qid']]}\n{body}")

    md_path.write_text(BLOCK.sub(swap, md), encoding="utf-8")
    print(f"{md_path} 갱신 완료 — {len(done)}문항")


if __name__ == "__main__":
    main()
