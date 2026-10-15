/*
 * POST /api/login   { pin: "0328" }  →  { token: "..." }
 *
 * 비밀번호는 서버 환경변수(EPTA_PIN)에만 있고, 페이지 소스에는 들어가지 않는다.
 * 맞으면 실제 API 키(EPTA_TOKEN)를 내려주고, 브라우저가 그것을 보관한다.
 * 그래서 주소에 #k=… 를 붙일 필요가 없다.
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const want = String(process.env.EPTA_PIN ?? '');
  if (!want) return res.status(500).json({ error: '서버에 EPTA_PIN 이 설정되지 않았습니다' });
  if (!process.env.EPTA_TOKEN) return res.status(500).json({ error: '서버에 EPTA_TOKEN 이 없습니다' });

  const pin = String(req.body?.pin ?? '').trim();
  if (pin !== want) {
    // 네 자리는 금방 다 돌려볼 수 있으므로 한 번 틀릴 때마다 1초씩 늦춘다
    await new Promise((r) => setTimeout(r, 1000));
    return res.status(401).json({ error: '비밀번호가 맞지 않습니다' });
  }

  return res.status(200).json({ token: process.env.EPTA_TOKEN });
}
