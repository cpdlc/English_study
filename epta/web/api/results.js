import { list, get } from '@vercel/blob';

/*
 * GET /api/results?set=EPTA_01[&session=...]
 *   헤더 : x-epta-token
 *
 * 저장된 답안·전사본을 모아서 돌려준다. session 을 빼면 그 세트의 모든 응시
 * 세션을 최신순으로 준다. practice/pull.py 가 이걸 받아 채점용 md 를 만든다.
 */

export default async function handler(req, res) {
  if (!process.env.EPTA_TOKEN || req.headers['x-epta-token'] !== process.env.EPTA_TOKEN)
    return res.status(401).json({ error: 'unauthorized' });

  const set = String(req.query.set ?? '').replace(/[^A-Za-z0-9_-]/g, '');
  if (!set) return res.status(400).json({ error: 'set 파라미터 필요' });
  const session = String(req.query.session ?? '').replace(/[^A-Za-z0-9_-]/g, '');

  const prefix = session ? `r/${set}/${session}/` : `r/${set}/`;

  try {
    const { blobs } = await list({ prefix, limit: 1000 });
    const jsons = blobs.filter((b) => b.pathname.endsWith('.json'));

    const records = await Promise.all(
      jsons.map(async (b) => {
        try {
          const r = await get(b.pathname, { access: 'private' });
          if (!r) return { qid: b.pathname, error: 'not found' };
          return JSON.parse(await new Response(r.stream).text());
        } catch (e) {
          return { qid: b.pathname, error: e.message };
        }
      }),
    );

    const sessions = {};
    for (const rec of records) {
      const key = rec.session ?? 'unknown';
      (sessions[key] ??= []).push(rec);
    }
    for (const list_ of Object.values(sessions)) {
      list_.sort((a, b) => String(a.qid).localeCompare(String(b.qid), 'en', { numeric: true }));
    }

    const order = Object.keys(sessions).sort().reverse();
    return res.status(200).json({ set, sessions: order.map((s) => ({ session: s, answers: sessions[s] })) });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
