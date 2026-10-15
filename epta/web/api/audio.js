import { get } from '@vercel/blob';

/*
 * GET /api/audio?path=r/EPTA_01/<세션>/<문항>.webm
 *   헤더 x-epta-token 필요.
 *
 * 비공개 Blob 에 있는 내 녹음을 꺼내 준다. '내 답안 보기' 화면에서 다시 들을 때 쓴다.
 * r/ 로 시작하는 응시 녹음만 내보낸다 — 다른 경로는 거부한다.
 */

export default async function handler(req, res) {
  if (!process.env.EPTA_TOKEN || req.headers['x-epta-token'] !== process.env.EPTA_TOKEN)
    return res.status(401).json({ error: 'unauthorized' });

  const path = String(req.query.path ?? '');
  if (!/^r\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+\.(webm|ogg|m4a)$/.test(path))
    return res.status(400).json({ error: '허용되지 않는 경로' });

  try {
    const r = await get(path, { access: 'private' });
    if (!r) return res.status(404).json({ error: '녹음을 찾을 수 없습니다' });

    const type = r.headers?.get?.('content-type')
      || (path.endsWith('.m4a') ? 'audio/mp4' : path.endsWith('.ogg') ? 'audio/ogg' : 'audio/webm');
    res.setHeader('content-type', type);
    res.setHeader('cache-control', 'private, max-age=3600');
    res.status(200).send(Buffer.from(await new Response(r.stream).arrayBuffer()));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
