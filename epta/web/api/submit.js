import { put } from '@vercel/blob';

/*
 * POST /api/submit
 *   헤더 : x-epta-token
 *   본문 : { set, session, qid, answer, seconds, audio(base64), mime, hints[] }
 *
 * 녹음을 Blob 에 저장하고 Google Speech-to-Text 로 전사해서, 답안·전사본을
 * r/<set>/<session>/<qid>.json 으로 남긴다. 전사본은 응답으로도 돌려주므로
 * 폰 화면에서 자기 발화가 어떻게 인식됐는지 바로 확인할 수 있다.
 */

const SYNC = 'https://speech.googleapis.com/v1/speech:recognize';
const ASYNC = 'https://speech.googleapis.com/v1/speech:longrunningrecognize';
const OPS = 'https://speech.googleapis.com/v1/operations';

const safe = (s) => String(s ?? '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 64);

function encodingFor(mime = '') {
  if (mime.includes('ogg')) return 'OGG_OPUS';
  if (mime.includes('webm')) return 'WEBM_OPUS';
  return 'ENCODING_UNSPECIFIED';   // iOS 의 mp4/aac — 헤더에서 추정시킨다
}

function extFor(mime = '') {
  if (mime.includes('ogg')) return '.ogg';
  if (mime.includes('webm')) return '.webm';
  if (mime.includes('mp4') || mime.includes('aac')) return '.m4a';
  return '.bin';
}

async function gtts(url, body) {
  const r = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  const j = await r.json();
  if (!r.ok) throw new Error(j?.error?.message || `STT ${r.status}`);
  return j;
}

function joinResults(results = []) {
  return results
    .map((r) => r.alternatives?.[0]?.transcript?.trim())
    .filter(Boolean)
    .join(' ')
    .trim();
}

async function recognize({ content, mime, hints, seconds }) {
  const key = process.env.GOOGLE_API_KEY;
  if (!key) throw new Error('GOOGLE_API_KEY 환경변수가 없습니다');

  const config = {
    encoding: encodingFor(mime),
    sampleRateHertz: 48000,
    languageCode: 'en-US',
    model: 'latest_long',
    enableAutomaticPunctuation: true,
    maxAlternatives: 1,
  };
  if (hints?.length) config.speechContexts = [{ phrases: hints.slice(0, 500), boost: 15 }];

  // 동기 recognize 는 60초까지만 받는다. 90초 문항은 비동기로 돌리고 폴링한다.
  if ((seconds ?? 0) <= 55) {
    const j = await gtts(`${SYNC}?key=${key}`, { config, audio: { content } });
    return joinResults(j.results);
  }

  const op = await gtts(`${ASYNC}?key=${key}`, { config, audio: { content } });
  if (!op.name) throw new Error('longrunningrecognize 가 operation 이름을 주지 않았습니다');

  for (let i = 0; i < 25; i++) {
    await new Promise((f) => setTimeout(f, 2000));
    const r = await fetch(`${OPS}/${op.name}?key=${key}`);
    const j = await r.json();
    if (j.error) throw new Error(j.error.message);
    if (j.done) return joinResults(j.response?.results);
  }
  throw new Error('전사 시간 초과 — 녹음은 저장됐으니 pull 단계에서 다시 돌리세요');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  if (!process.env.EPTA_TOKEN || req.headers['x-epta-token'] !== process.env.EPTA_TOKEN)
    return res.status(401).json({ error: 'unauthorized' });

  const { set, session, qid, answer = '', audio, mime = 'audio/webm', hints = [], seconds } =
    req.body ?? {};
  if (!set || !session || !qid) return res.status(400).json({ error: 'set, session, qid 필요' });

  const base = `r/${safe(set)}/${safe(session)}/${safe(qid)}`;
  const common = { access: 'private', addRandomSuffix: false, allowOverwrite: true };

  let transcript = '';
  let sttError = null;
  let audioPath = null;

  if (audio) {
    try {
      const blob = await put(base + extFor(mime), Buffer.from(audio, 'base64'), {
        ...common,
        contentType: mime,
      });
      audioPath = blob.pathname;
    } catch (e) {
      sttError = `녹음 저장 실패: ${e.message}`;
    }
    try {
      transcript = await recognize({ content: audio, mime, hints, seconds });
    } catch (e) {
      sttError = [sttError, `전사 실패: ${e.message}`].filter(Boolean).join(' / ');
    }
  }

  const record = {
    set, session, qid,
    answer: String(answer),
    transcript,
    sttError,
    audioPath,
    seconds: seconds ?? null,
    at: new Date().toISOString(),
  };

  try {
    await put(base + '.json', JSON.stringify(record, null, 2), {
      ...common,
      contentType: 'application/json',
    });
  } catch (e) {
    return res.status(500).json({ error: `결과 저장 실패: ${e.message}`, transcript, sttError });
  }

  return res.status(200).json({ ok: true, transcript, sttError });
}
