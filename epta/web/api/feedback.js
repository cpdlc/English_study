import { put, get } from '@vercel/blob';

/*
 * 채점 결과 보관소.
 *   GET  /api/feedback?set=EPTA_01   → 그 세트의 채점 결과
 *   POST /api/feedback               → 채점 결과 저장 (practice/push.py 가 보낸다)
 * 둘 다 헤더 x-epta-token 필요.
 *
 * 모범답안은 공개 HTML 에 넣지 않고 여기에만 둔다. 비밀키를 가진 사람만 읽을 수 있다.
 */

const safe = (s) => String(s ?? '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 64);

export default async function handler(req, res) {
  if (!process.env.EPTA_TOKEN || req.headers['x-epta-token'] !== process.env.EPTA_TOKEN)
    return res.status(401).json({ error: 'unauthorized' });

  if (req.method === 'GET') {
    const set = safe(req.query.set);
    if (!set) return res.status(400).json({ error: 'set 파라미터 필요' });
    try {
      const r = await get(`f/${set}.json`, { access: 'private' });
      if (!r) return res.status(200).json({ set, items: null });
      return res.status(200).json(JSON.parse(await new Response(r.stream).text()));
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  if (req.method === 'POST') {
    const { set, level = '', summary = '', items = {} } = req.body ?? {};
    const name = safe(set);
    if (!name) return res.status(400).json({ error: 'set 필요' });
    if (!items || typeof items !== 'object' || !Object.keys(items).length)
      return res.status(400).json({ error: 'items 가 비어 있습니다' });

    const record = {
      set: name,
      level: String(level),
      summary: String(summary),
      gradedAt: new Date().toISOString().slice(0, 10),
      items,
    };

    try {
      await put(`f/${name}.json`, JSON.stringify(record, null, 2), {
        access: 'private',
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: 'application/json',
      });
      return res.status(200).json({ ok: true, count: Object.keys(items).length });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  return res.status(405).json({ error: 'GET 또는 POST' });
}
