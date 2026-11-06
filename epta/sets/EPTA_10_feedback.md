# EPTA_10 채점 결과 — 2026-11-03

응시 : 2026-11-02 21:03 세션 (음성 응시, 32/32 응답 — **무응답 0**)
전사 : **faster-whisper large-v3-turbo (로컬)** 로 32문항 전수 재전사

> **★ 재채점 (2026-11-03)** — 최초 채점은 Google STT(`latest_long`) 전사를 근거로 했는데,
> 그 전사가 **실제 발화를 다섯 군데에서 잘못 받아썼다.** 로컬 whisper 로 전수 재전사해
> 판정을 고쳤다. **⚠️/❌ 였던 다섯 문항이 ✅ 가 됐다** — P1A-Q3 · P1A-Q4 · P2A-Q1 ·
> **P2A-Q9** · **P2B-Q2**. 특히 P2A-Q9 의 `cleared for takeoff` 와 P2B-Q2 의
> `altimeter 2994` 는 **필수 복창 항목을 빠뜨렸다고 지적했던 것인데, 실제로는 정확히
> 복창했다.** 각 문항의 "재채점 메모" 에 무엇을 철회했는지 적어 두었다.
> 최종 등급은 **Level 2 로 변동 없다** — 등급을 결정한 Interactions 의 근거(지시문 마지막
> 토막 미수행 6건)는 전사 오류와 무관하게 그대로다.

```
✅ 15   ⚠️ 10   ❌ 7
```

---

## Part Ⅰ TASK A. Readback and Hearback

**P1A-Q1** ✅
문제 : Delivery : HL123, squawk 4162, ident.
내 답안 : Squawk four one six two identify, Hotel Lima one two three.
** 정답 : Squawk 4162, ident. Hotel Lima one two three.
- 표준교신용어 오류 : `identify` → **`ident`**. ident 는 그 자체로 명령어이고 동사 변화를 주지
  않는다. 의미는 전달되므로 경미.
- 코멘트 : squawk 값 정확, **네 자리를 하나씩 끊어**(`four one six two`) 말했다. 콜사인 위치도
  정확. 3단어 지시를 20초 안에 깔끔히 닫았다.

---

**P1A-Q2** ✅
문제 : 🖥 [ MIRYA TWO departure, HARAN ]
Delivery : HL123, cleared to Pohang via MIRYA TWO departure, HARAN transition, climb to
5,000 feet, departure runway tree four.
내 답안 : Clear to Poang via Maria to departure, Heron transition, climb five thousand, runway three four, Hotel Lima one two three.
** 정답 : Cleared to Pohang via MIRYA TWO departure, HARAN transition, climb to 5,000 feet,
departure runway tree four. Hotel Lima one two three.
- 표준교신용어 오류 : `Clear to` → **`Cleared to`**. 허가를 받았음을 복창하는 것이므로 과거분사.
  **이 오류는 EPTA_01 부터 다섯 세트째 반복**이고 이번 세트에서 4회
  (P1A-Q2 · P1A-Q4 · P1B-Q4 · P2A-Q2) 나왔다. 반면 P2A-Q9 · P2B-Q9 에서는 `cleared` 로
  정확히 말했으므로 **아는데 흘리는 것**이다.
- 코멘트 : **5요소(목적지·SID·transition·고도·활주로) 전부 정확. 7세트 연속 성공.** 이 세트의
  가장 긴 문항을 요소 누락 없이 닫았다.

---

**P1A-Q3** ✅
문제 : Center : HL123, climb to flight level tree tree zero, maintain two eight zero knots
until level.
내 답안 : Climb to flight level three three zero, maintain two eight zero knots until level, Hotel Lima one two three.
** 정답 : Climb to flight level tree tree zero, maintain two eight zero knots until level.
Hotel Lima one two three.
- 코멘트 : **완전 정답이다.** 고도·속도·조건 세 요소 전부 정확하고, **숫자를 자릿수별로
  끊어**(`three three zero` · `two eight zero`) 말했다. `until level` 조건절도 살렸다 —
  조건절 누락은 EPTA_07·09 에서 반복 지적된 항목인데 이 세트에서는 네 곳 모두 정확하다.
- 재채점 메모 : **⚠️ → ✅.** 구글 STT 가 `Time to fly level 3300 ... until later` 로 받아써서
  "FL330 을 네 자리로 말했다"·"`until level` 을 `later` 로 말했다"고 지적했는데 **둘 다
  전사기 오류**였다. 두 지적 모두 철회하고 "FL 세 자리 끊어 읽기" 과제도 취소한다.

---

**P1A-Q4** ✅
문제 : Approach : HL123, descend to 2,500 feet, cleared for the ILS runway one niner
approach, braking action reported good.
내 답안 : Roger, braking action is good. Descend 2500, clear ILS runway, one niner approach, Hotel Lima one two three.
** 정답 : Descend to 2,500 feet, cleared for the ILS runway one niner approach. Hotel Lima
one two three.
- 표준교신용어 오류 : `clear` → **`cleared for the`**. 접근 허가는 `cleared for` 가 있어야
  허가 확인이 된다 (이번 세트 2회째).
- 코멘트 : **강하고도 2,500 · `ILS` · 활주로 `one niner` 세 요소 전부 정확하다.** 접근 방식
  `ILS` 는 EPTA_09 에서 빠뜨렸던 항목인데 복귀했다. `braking action` 은 복창 불필요 정보인데
  먼저 말하는 데 시간을 썼다 — 필수요소를 먼저 닫고 남으면 붙인다.
- 재채점 메모 : **⚠️ → ✅.** 구글이 `Clear Iration Runway. 190 approach` 로 받아써서
  "활주로를 `190` 으로 말했다 — `one niner` 가 아니다"라고 지적했는데, **실제로는
  `one niner` 를 정확히 말했다.** 그 지적을 철회한다. 남은 것은 `clear`/`cleared` 하나뿐이고
  이는 P1A-Q2 와 같은 항목이므로 판정을 맞춘다.

---

## Part Ⅰ TASK B. Checking, Clarifying, Confirming, Informing

**P1B-Q1** ❌
문제 : After departure Tower cleared you to fly runway heading. At 2,000 feet you had to
turn right to zero four zero to stay clear of a build-up, and you are still on that
heading. You have not been able to tell anyone yet. Listen to the controller and respond
accordingly with a reason.
Departure : HL123, confirm maintaining runway heading?
내 답안 : Affirm, maintain runway heading, negative, Hotel Lima one two three, turn right, heading zero nine zero, Hotel Lima one two three.
** 정답 : Negative, HL123. We turned right heading zero four zero at 2,000 feet to stay
clear of a build-up, and we are still on zero four zero. Request to maintain this heading
until clear of the weather.
- 표준교신용어 오류 (중대) : **`Affirm` 으로 시작했다가 그 뒤에 `negative` 를 붙였다.**
  한 응답 안에 긍정과 부정이 같이 있으면 관제사는 어느 쪽인지 알 수 없고, 먼저 들은
  `Affirm, maintain runway heading` 으로 처리한다. `confirm ~?` 응답의 첫 단어는 예외 없이
  AFFIRM/NEGATIVE 하나이고, **실제 상태가 다르면 NEGATIVE 하나만** 쓴다.
- 값 오류 : 기수가 **040 인데 090 으로 말했다.** 지문에 두 번 나온 값이다.
- 지시문 미수행 : `with a reason` — **build-up(적란운) 회피라는 사유가 없다.** 사유가 없으면
  관제사는 조종사가 지시를 어긴 것으로만 본다.
- 코멘트 : 세 가지(첫 단어·실제 값·사유)가 모두 비었다. `Confirm maintaining ~?` 함정형은
  네 세트 중 세 세트에 나오는 핵심 패턴이다.
- 재채점 메모 : 구글은 앞부분을 `Mmm.` 으로 흘렸는데 재전사에서 **`Affirm` 이 드러났다** —
  지적이 약해지는 게 아니라 **더 무거워졌다.**

---

**P1B-Q2** ⚠️
문제 : Your crosswind limit on a wet runway is two five knots, and the runway is wet
today. Listen to the tower, respond accordingly, and tell him your limit.
Tower : HL123, crosswind on runway one four is one eight knots. Are you able to accept
runway one four?
내 답안 : Roger(?), we can accept runway one four. Our limit is crosswind two five knots, so we can accept land.
** 정답 : Affirm, HL123. We can accept runway one four — our wet runway crosswind limit is
two five knots and the crosswind is one eight knots.
- 표준교신용어 오류 : `are you able ~?` 의 첫 단어는 **`AFFIRM`** 이다. 첫 낱말이 두 전사기
  모두에서 `Roger`/`Rather` 로 잡혔고 **어느 쪽도 `Affirm` 이 아니다**(같은 녹음의 P1B-Q1·
  P2B-Q8 에서는 `Affirm` 이 또렷이 잡혔으므로, 여기서 안 나온 것은 실제로 안 말한 것이다).
  EPTA_07 에서 `Negative` 2/2 로 해결했던 항목의 **후퇴**다.
- 문법 : `so we can accept land` → **`so we can accept runway one four`** 또는
  `so we are able to land`. accept 의 목적어가 빠지고 land 가 명사 자리에 들어갔다.
- 코멘트 : **판단 방향이 정확하고(18 < 25) 자기 한계값 25kt 를 말했다.** EPTA_08 의 최우선
  약점("두 숫자를 나란히 말하지 않는다")이 여기서 해결된 네 문항 중 하나다. 다만 받은 값
  18kt 까지 같이 말하면 "비교했다"는 것이 완전히 전달된다.

---

**P1B-Q3** ❌
문제 : 🖥 [ Gangneung Control / request with a reason / present level ]
You have been in light icing at flight level one six zero for the last one five minutes
and your anti-ice has been on the whole time. A level change would take you out of it.
Contact Gangneung Control. Make a request with a reason, and tell him your present level.
내 답안 : Gangneung Control, Hotel Lima one two three. Request present level.
** 정답 (예시 — 목표 고도는 정해진 정답이 없음) : Gangneung Control, HL123, maintaining
flight level one six zero. Request descent due to light icing — we have been in it for one
five minutes with anti-ice on.
- 지시문 미수행 : **세 요구 중 둘이 비었다.** ① 기관 호출 `Gangneung Control` 은 **정확하다**
  ② `request with a reason` — 요청 행위(강하 요청)도 사유(icing)도 없다 ③ `tell him your
  present level` — **FL160 은 지문에 주어진 값인데** 말하지 않았다.
- 표준교신용어 오류 : **`Request present level` 은 "내 현재 고도를 알려달라"는 뜻이 된다.**
  present level 은 요청 대상이 아니라 **보고 대상**이다. `REQUEST + 명사구` 패턴은 맞게 썼지만
  그 명사구에 들어갈 것은 `descent to flight level one four zero` 다.
- 코멘트 : **이 세트에서 가장 심각한 문항이다.** 20초가 주어졌는데 10단어로 끝냈고, 화면에
  해야 할 세 가지가 슬래시로 나뉘어 떠 있었다. 발신형(ATC 대사 없음) 문항에서 무엇을 말할지
  화면이 알려주는 것이 바로 그 클루 띠의 용도다 — 클루를 읽고 **칸마다 한 문장씩** 만든다.
- 재채점 메모 : 구글이 `Control Hotel Lima 123` 으로 잘라 "기관명이 `Control` 뿐"이라고
  지적했는데 **실제로는 `Gangneung Control` 을 정확히 불렀다.** 그 지적을 철회한다.
- **★ 출제 쪽 결함 (2026-11-03 정정)** : 이 문항은 **결함 문항이었다.** 실제 출제 4세트는
  예외 없이 상황설명 끝에 **의도 문장**을 넣는다 — test04-Q5 `You want to have PIREP,
  including turbulence information at lower altitude.` / test04-Q2 `You are unsure about
  clearance.` 그런데 이 문항은 `A level change would take you out of it` 로 **암시만 하고
  "무엇을 요청하라"를 말하지 않았고, 목표 고도도 주지 않았다.** 그래서 최초 모범답안의
  `flight level one four zero` 는 **제가 채점 시점에 지어낸 값**이다. 지문에 없는 값으로
  감점한 셈이므로 그 부분을 철회하고, 모범답안도 `Request descent` 로 고쳤다.
  클루 `🖥 [ ... / request with a reason / present level ]` 도 **지시문 문구를 되풀이한
  것**이어서 아무 정보를 주지 않았다 — 실제 7건의 클루 칸은 전부 내용어였다
  (`possibility of defuel & duration` 등). `reference/exam-spec.md` §3-1-1 · §11-3 에
  규칙으로 적어 두었고 EPTA_11 의 같은 유형 세 문항을 고쳤다.
- **그래도 ❌ 는 유지한다** — 지문에 **주어진** 값(FL160)과 사유(착빙)를 말하지 않았고,
  `Request present level` 은 "내 고도를 알려달라"는 뜻이 되는 실제 용어 오류다. 목표 고도를
  몰라도 **`Request descent due to light icing. Maintaining flight level one six zero.`**
  는 지문만으로 충분히 쓸 수 있었다.

---

**P1B-Q4** ⚠️
문제 : While you were taxiing you saw a large piece of rubber lying on taxiway Sierra, but
you were busy with the checklist and did not report it. Tower now calls you. Give a full
readback, and report what you saw.
Tower : HL123, cleared for takeoff runway tree four, wind tree 50 at 6.
내 답안 : Clear for takeoff, runway three four, and be advised, while taxiing with a piece of line on Sierra.
** 정답 : Cleared for takeoff runway tree four, HL123. Be advised, while taxiing we saw a
large piece of rubber on taxiway Sierra.
- 표준교신용어 오류 : `Clear for` → **`Cleared for takeoff`** (이번 세트 3회째).
- 코멘트 : ① **두 기능 모두 수행했다** — 복창 + 목격 보고. **시차형**(아까 본 것을 지금
  보고하기) 문항에서 보고가 나온 것은 진전이다. ② **`be advised` 를 정확히 썼다** — 정보를
  밀어 넣을 때의 표준 도입구다. EPTA_09 에서 처음 쓴 표현이 자리를 잡았다. ③ 파편이 활주로가
  아니라 **유도로 Sierra** 에 있다고 정확히 말했다 — EPTA_01 에서 활주로라고 해 관제사가
  활주로를 닫게 만든 오류의 해결. ④ 물체를 `a piece of line` 이라고 했는데 실제는 **rubber**
  다(두 전사기가 일치). 무엇인지가 조치를 결정하므로 물체명은 정확히. ⑤ `while taxiing with
  a piece of line` 은 동사가 빠졌다 — `we saw` 를 넣어야 문장이 선다. ⑥ 바람을 복창에서
  제외한 것은 정확한 판단이다.
- 재채점 메모 : 구글이 `and be able to buy it` 으로 받아써서 "뜻이 잡히지 않는다 — 말이
  꼬이면 끊고 다시 시작하라"고 지적했는데, **실제 발화는 표준구 `be advised` 였다.** 그 지적을
  철회하고 강점으로 바꿔 적는다.

---

**P1B-Q5** ❌
문제 : You are heavy today. The best rate of descent you can give without exceeding your
speed limit is 1,500 feet per minute. Listen to the controller, respond with a reason, and
tell him what you can do.
Approach : HL123, I need 2,500 feet per minute or better for descending traffic. Can you
do that?
내 답안 : Unable to descend 250 feet per minute due to weight. Our limit is 150 per minute.
** 정답 : Negative, unable 2,500 feet per minute due to our weight. The best we can give is
1,500 feet per minute.
- 값 오류 2건 (두 전사기 일치) : ① 관제사가 요구한 값은 **2,500** 인데 `250` ② 자기 능력치는
  **1,500** 인데 `150`. **150 fpm 과 1,500 fpm 은 열 배 차이**이고, 150 fpm 으로는 강하가
  사실상 불가능하다. 이 자릿수 오류는 EPTA_08(10,000→1,000 · 15,000→1,500)에 이어 **재발**이다.
- 표준교신용어 오류 : `unable to descend 250 feet per minute` — 강하율은 `descend`(고도 이동)
  가 아니라 **`unable 2,500 feet per minute`** 으로 수치만 받는다.
- 코멘트 : **구조는 완성됐다** — unable + 사유(due to weight) + 대안(our limit is ~) 세 토막이
  순서까지 맞다. EPTA_01 부터 추적한 "unable 3단" 패턴이 몸에 붙었다는 뜻이다. 그런데 그 틀에
  **들어간 두 숫자가 모두 틀려서** 관제사에게 전달되는 정보는 거짓이 된다. 틀을 외운 다음
  단계는 받아적은 값을 그 틀에 옮기는 것이다.

---

**P1B-Q6** ❌
문제 : The arrival information you have says runway one niner is in use. The approach
controller has just cleared the aircraft ahead of you for an approach to runway zero one,
and you heard it on the frequency. You are not sure which runway you will get. Contact
approach. Make a confirmation and clarify your intention.
내 답안 : Arrival, Hotel Lima one two three, we heard one niner runway in use, but ATC told us in use runway zero one.
** 정답 : Approach, HL123. Confirm landing runway one niner? Our arrival information says
runway one niner, but we heard the aircraft ahead cleared for runway zero one. We are
planning for runway one niner.
- 지시문 미수행 : ① `Make a confirmation` — **`Confirm ~?` 질문 형태가 없다.** 사실을 늘어놓는
  것은 confirmation 이 아니다. 관제사가 답할 수 있는 **질문 한 줄**을 던져야 한다.
  ② `clarify your intention` — 어느 활주로를 준비하고 있는지 말하지 않았다.
- 표준교신용어 오류 : 기관 호출을 `Arrival` 로 했다. 지시문은 **approach** 를 지정했다.
- 코멘트 : **두 활주로(19 와 01)의 불일치를 정확하고 알아듣게 전달했다** — 상황 이해는 됐다.
  그러나 질문도 의도도 없어 관제사가 할 수 있는 일이 없다. 이 유형은
  **`Confirm + 명사구?` 한 줄 → 근거 한 줄 → 내 계획 한 줄** 세 문장으로 고정해 두면
  20초에 들어간다.
- 재채점 메모 : 구글 전사(`Know we heard one-nighter running in use but at least told us he
  news running 0`)로는 "어느 정보가 어느 출처인지 뒤섞였다"고 읽혔는데, 실제 발화는 정연했다.
  그 지적은 철회한다. 두 요구 미수행은 그대로이므로 **❌ 유지.**

---

## Part Ⅱ TASK A. Role-play & Follow-up

**P2A-Q1** ✅
문제 : 🖥 [ Gwangju Delivery / information Hotel ]
☞ Contact Gwangju Delivery, request your ATC clearance, and advise that you are ready to
start.
내 답안 : Gwangju Delivery, Hotel Lima one two three, request, request ATC clearance and we will advise you we are ready to start.
** 정답 : Gwangju Delivery, HL123, information Hotel. Request ATC clearance to Ulsan, and
we are ready to start.
- 코멘트 : **지시문 세 요구를 모두 수행했다** — ① 기관 호출 `Gwangju Delivery` **정확**(지명
  포함) ② `Request ATC clearance` — REQUEST + 명사구 정확(EPTA_06 에서 동사구 4회였던 항목)
  ③ 시동 준비 통보.
- 문법 : `we will advise you we are ready to start` 는 "알려드리겠다"와 "준비됐다"가 섞여
  모순이다 — **`we are ready to start`** 로 단정한다.
- 코멘트 : 화면 클루의 `information Hotel` 을 말하지 않았다. ATIS 문자를 같이 주면 관제사가
  최신 정보 수신 여부를 확인할 필요가 없어진다 — 지시문 요구는 아니므로 감점하지 않되
  습관으로 붙일 것.
- 재채점 메모 : **⚠️ → ✅.** 구글이 `Delivery Hotel Lima` 로 받아써서 "기관명이 `Delivery`
  뿐"이라고 지적했는데 **`Gwangju Delivery` 를 정확히 불렀다.** 그 지적이 ⚠️ 의 유일한
  근거였으므로 판정을 고친다.

---

**P2A-Q2** ✅
문제 : 🖥 [ NAKDO TWO departure ]
☞ Listen to the delivery controller and give a full readback.
Delivery : HL123, Gwangju Delivery, cleared to Ulsan as filed, NAKDO TWO departure, climb
to 5,000 feet, squawk 2607. Start up approved.
내 답안 : Clear to Ulsan as filed, NAKDO TWO departure, climb 5000 squawk 2607, start approved, Hotel Lima one two three.
** 정답 : Cleared to Ulsan as filed, NAKDO TWO departure, climb to 5,000 feet, squawk 2607,
start up approved. Hotel Lima one two three.
- 표준교신용어 오류 : `Clear to` → **`Cleared to`** (이번 세트 4회째).
- 코멘트 : **5요소(목적지·SID·고도·squawk·start up) 전부 정확 — 7세트 연속.** squawk 2607 도
  맞았다. 이 세트에서 가장 안정적인 영역이다.
- 발음 관찰 : 목적지가 turbo 에서 `Osan`, 구글에서 `usan` 으로 잡혔다. **Ulsan(울산)과
  Osan(오산)은 다른 공항**이므로 `Ul-` 의 l 을 분명히 낼 것.

---

**P2A-Q3** ⚠️
문제 : ☞ Listen to the ground controller, give a full readback, and inquire how long it
will take.
Ground : HL123, Gwangju Ground, taxi to holding point Delta two via Mike and Sierra.
There's a Boeing 767 under tow crossing Sierra ahead of you, so you may be stopped for a
few minutes — I'll keep you posted.
내 답안 : Roger, we will expect to wait for Boeing 767 and hold point Delta two via Mike and Sierra, Hotel Lima one two three.
** 정답 : Taxi to holding point Delta two via Mike and Sierra, HL123. Request an estimate
of how long we will be held for the Boeing 767.
- 지시문 미수행 : `inquire how long it will take` — **묻지 않았다.** `we will expect to wait` 는
  수락이지 질문이 아니다. **지시문 마지막 토막 누락이 이 세트에서 6건** 나왔고 그 첫 번째다.
- 코멘트 : 복창 자체는 정확하다 — holding point Delta two, via Mike and Sierra 세 요소 모두.
  구어체 `I'll keep you posted` 와 견인기 상황도 올바르게 이해했다. 빠진 것은 질문 한 줄
  뿐이다 — `Request an estimate of the delay.` 또는 `How long do you expect?` 를 복창 뒤에
  붙이는 습관을 만들 것.

---

**P2A-Q4** ❌
문제 : [Situation Update] You have stopped on Mike, just short of Sierra. The Boeing 767
under tow is still on Sierra in front of you.
🖥 [ Mike / Sierra / Delta two ]
☞ Listen to the ground controller, respond accordingly, and report your position.
Ground : HL123, are you holding short of Sierra now, or are you still back on Mike?
내 답안 : Negative. We are continue to taxi on Mike. Hotel Lima one two three.
** 정답 : HL123, we are stopped on Mike, holding short of Sierra.
- 상황 오독 (두 전사기 일치) : 지문은 **"정지해 있다"**(You have stopped on Mike)인데
  **"계속 활주 중"**이라고 답했다. 관제사는 이 답을 듣고 기체가 움직이는 중으로 판단한다 —
  견인기가 앞에 있는 상황에서 위험한 오보다.
- 표준교신용어 오류 : `Negative` 가 부적절하다. 이 질문은 **"A 냐 B 냐"**(선택 질문)이고
  yes/no 질문이 아니다. 선택 질문에는 **둘 중 하나를 골라 말한다.**
- 코멘트 : 위치보고 자체도 반쪽이다 — `on Mike` 는 맞지만 관제사가 알고 싶은 핵심인
  **holding short of Sierra** 가 빠졌다. 그림과 화면 클루가 Mike / Sierra / Delta two 세 지점을
  다 띄워 줬다. 지상 위치보고는 **"지금 어디에 있고 무엇 앞에서 멈췄는지"** 두 조각이다.

---

**P2A-Q5** ✅
문제 : ☞ Listen to the ground controller, state your decision with a reason, and tell him
the figure you need.
Ground : HL123, I can send you round via Kilo to Delta one and you'd be moving in about
five minutes, but you'd only have 2,400 metres from there. Or you wait eight minutes for
Sierra. Up to you.
내 답안 : Unable to use 2400 meter runway, our limit is, correction, we need 2600 meter, so we will expect to wait a minute, Hotel Lima one two three.
** 정답 : Unable 2,400 metres — we need 2,600 metres for takeoff today. We will wait the
eight minutes for Sierra and Delta two. HL123.
- 코멘트 : **이 세트에서 가장 잘한 문항이다.** ① 판단 방향 정확(2,400 < 2,600 → 거부)
  ② **두 숫자를 나란히 말했다**(2,400 과 2,600) ③ 필요한 값을 명시 ④ `correction` 으로 스스로
  고쳤다. EPTA_07 의 부등호 뒤집힘·EPTA_08 의 "수락인데 거부" 를 지나 **2세트 연속 비교 판단이
  정확**하다. 숫자가 머리에 들어와 비교까지 된다는 증거.
- 코멘트 : 다만 대기 시간이 `a minute` 으로 나왔다 — 관제사가 말한 값은 **eight minutes** 다.
  수락한 쪽의 조건도 숫자로 되돌려주면 완전해진다.

---

**P2A-Q6** ✅
문제 : ☞ Listen to the ground controller and give a full readback.
Ground : HL123, the tow is clear. Taxi to holding point Delta two via Sierra, contact
Gwangju Tower on 122.2 when ready.
내 답안 : Hold point Delta two via Sierra, contact Gwangju Tower one two two point two, when ready, Hotel Lima one two three.
** 정답 : Taxi to holding point Delta two via Sierra, contact Gwangju Tower 122.2 when
ready. Hotel Lima one two three.
- 코멘트 : **4요소 전부 정확 — holding point·경로·주파수·조건.** 특히 ① **주파수를 자릿수별로
  끊어**(`one two two point two`) 정확히 말했다(EPTA_09 3/3 에 이어 유지) ② 기관명 `Gwangju
  Tower` 를 지명까지 붙여 복창 ③ **`when ready` 조건절 포함** — 조건절 누락은 EPTA_07·09 에서
  반복 지적된 항목인데 이번 세트에서는 네 곳 모두 살렸다(`until level`·`when ready`·`behind
  the landing A320`·`until established`).

---

**P2A-Q7** ✅
문제 : ☞ Listen to the tower and give a full readback.
Tower : HL123, Gwangju Tower, behind the landing A320, line up and wait runway tree four.
내 답안 : Behind landing A320, line up and wait, runway three four, Hotel Lima one two three.
** 정답 : Behind the landing A320, line up and wait runway tree four, behind. Hotel Lima one
two three.
- 코멘트 : **조건부 지시의 조건을 정확히 살렸다** — `Behind the landing A320`. EPTA_07
  P2A-Q6 에서 `behind the departing ~` 을 통째로 빠뜨렸던 유형이고, 기종 A320 까지 맞았다.
  `line up and wait` 과 활주로 34 도 정확.
- 코멘트 : ICAO 관례상 조건부 지시 복창은 조건을 **앞뒤로 두 번** 말한다 —
  `Behind the landing A320, line up and wait runway tree four, **behind**`. 뒤쪽 `behind` 가
  빠졌지만 조건 자체가 전달되므로 감점하지 않는다.
- 재채점 메모 : 구글이 `Beyond The Landing` 으로 받아써서 "`behind` 와 `beyond` 는 뜻이
  다르다"고 지적했는데, **실제로는 `Behind` 를 정확히 말했다.** 그 지적을 철회한다.

---

**P2A-Q8** ⚠️
문제 : [Situation Update] It is now 0637Z and you are number one at holding point Delta
two.
☞ Listen to the tower and provide both pieces of information.
Tower : HL123, I've lost your slot time — say it again for me, and tell me whether you can
be airborne in the next tree minutes.
내 답안 : Our slot time is zero six zero six and request immediate takeoff, Hotel Lima one two three.
** 정답 : HL123, our slot time is 0640 Zulu. Affirm, we can be airborne in the next tree
minutes — we are ready now.
- 값 오류 (확정) : 슬롯시각은 **0640Z** 인데 **`zero six zero six`(0606)** 라고 말했다. 끊어
  읽는 방식은 정확했고 **세 번째 자리를 4 대신 0** 으로 말했다. Initial Situation 에 나온
  값이고, 7턴 뒤에 되물었을 때 꺼낸 값이 틀렸다 — **발음이 아니라 메모 유지 문제**다.
- 지시문 미수행 : 두 번째 질문(`whether you can be airborne in the next tree minutes`)에
  **AFFIRM/NEGATIVE 가 없다.** `request immediate takeoff` 는 요청이지 답이 아니다 — 관제사는
  "3분 안에 뜰 수 있나"의 답을 아직 못 받았다.
- 코멘트 : **이 문항은 이번 세트의 핵심 장치였다** — 슬롯시각을 Initial Situation 에서 주고
  **7턴 뒤에** 되물었다. 되묻자마자 그 값을 꺼내려 한 동작 자체는 EPTA_09 의 되묻기 성공을
  이은 것이다. 남은 과제는 꺼낸 값이 정확한지와, 질문이 둘일 때 **둘 다** 닫는 것이다.

---

**P2A-Q9** ✅
문제 : ☞ Listen to the tower and give a full readback.
Tower : HL123, cleared for takeoff runway tree four, after departure climb to 5,000 feet,
report passing tree thousand.
내 답안 : Cleared for takeoff, runway three four, after departure, climb to five thousand, report passing three thousand, Hotel Lima one two three.
** 정답 : Cleared for takeoff runway tree four, after departure climb to 5,000 feet, wilco
report passing tree thousand. Hotel Lima one two three.
- 코멘트 : **4요소 전부 정확한 완전 정답이다** — `cleared for takeoff`(과거분사까지 정확) ·
  활주로 34 · 상승 5,000 · 3,000 통과 보고. 이륙 허가는 §2 필수 복창 7항목 중 가장 무거운
  항목이고, 이 문항과 P2B-Q9 에서 `cleared` 를 정확히 썼다.
- 재채점 메모 : **❌ → ✅.** 구글이 `Runway 34 after departure, climbed to 5000 ...` 로
  받아써서 **"이륙 허가 문구를 통째로 빠뜨렸다 — 필수 복창 중 가장 무거운 항목"** 이라고
  지적했는데, **실제로는 `Cleared for takeoff` 를 먼저 또렷이 말했다.** 지적 전체를 철회한다.
  "허가 문구를 첫 단어로 고정하라"는 과제도 취소한다 — 이미 하고 있다.

---

**P2A-Q10** ✅
문제 : [Situation Update] You are airborne and passing tree thousand feet, climbing to
5,000 feet.
☞ Contact Gwangju Departure, report your passing altitude, and request further climb.
내 답안 : Gwangju Departure, Hotel Lima one two three. Climb passing, correction, climb through 3,000 to 5,000, request further climb.
** 정답 : Gwangju Departure, HL123, climbing through tree thousand for 5,000 feet. Request
further climb.
- 코멘트 : **지시문 세 요구를 모두 수행했다.** ① 기관 호출 `Gwangju Departure` **정확**
  ② **위치보고 표준형 완성** — `climb through 3,000 to 5,000` 두 값을 담았다. EPTA_01 에서
  통과고도를 두 번 연속 빠뜨린 유형이고 **2세트 연속 정확**하다 ③ **`request further
  climb` — REQUEST + 명사구 정확** ④ `Correction` 으로 스스로 고쳤다(이번 세트 2회).
- 표준교신용어 오류 : `to 5,000` 보다 **`for 5,000`** 이 관례다(through = 통과, for = 목표).
  경미.
- 재채점 메모 : 구글이 `Departure Hotel Lima` / `requests for the climb` 로 받아써서
  "기관명이 `Departure` 뿐"·"REQUEST 뒤에 전치사를 붙였다" 두 가지를 지적했는데, **실제로는
  `Gwangju Departure` 와 `request further climb` 로 둘 다 정확했다.** 두 지적 모두 철회한다.

---

**P2A-Q11** ❌
문제 : Follow up question.
In this situation, Ground offered you a shorter taxi route that would have left you with
less runway. What did you compare before you answered, and why? In your role as a pilot,
how do you keep track of the figures you need — slot times, runway lengths, fuel — while
you are busy on the ground? Give an example of a figure you have had to ask a controller
to repeat.
내 답안 : As a pilot, while in the airport, we have to, we have to attend, attention on slot time, learning length, and fuel, because slot time, we have to, get, get out of the way, before slot time, and we have to, attention to runway length, because, our limitation is, needed for the longer runway, as we plan, and, we have to attend, to fuel, because, on the taxiway, if we stand, it takes some fuel, so, we cannot use, during, during flight, we have to, we, we, we, we need to use the fuel, so, all we have to do is, to checklist all the time, in the, our airport.
** 교정 답안 : In this situation, I compared the runway length available from Delta one,
2,400 metres, with the takeoff distance we needed today, 2,600 metres. Delta one was
2,400 metres, so it was too short for us even though it was faster, and that is why I
chose to wait eight minutes for Sierra.
As a pilot, we have to **pay attention to** the slot time, the runway length, and the
fuel. **For the slot time**, we have to get out before it expires. **For the runway
length**, our takeoff distance required may be longer than what is available. **For the
fuel**, if we stand on the taxiway it burns fuel we cannot use in flight. **I write these
three figures on my notepad before start-up and cross them off as they change.**
For example, I once had to ask a controller to repeat a **squawk code**, because the
first two digits were masked by another transmission.
- 지시문 미수행 : 3부 중 **①과 ③이 비었다.** ① `What did you compare before you answered,
  and why?` — 2,400m 과 2,600m 을 비교했다는 말이 한 번도 안 나온다. 바로 앞 P2A-Q5 에서
  **본인이 정확히 비교해 답했던 내용**이다. ③ `Give an example.` — **9세트 연속 미수행.**
- 문법 : `attend attention on` → **`pay attention to`**(두 전사기 일치, 3회 반복).
  `we have to attend to fuel` → `we have to pay attention to the fuel`. 명사 `attention` 과
  동사 `attend` 가 섞였다. `to checklist all the time` → **`to check them all the time`**
  (checklist 는 명사).
- 코멘트 : ② 만 답했는데 그 내용도 "왜 중요한가"에 머물렀고 질문인 **"어떻게 관리하는가"**
  (메모·브리핑 카드·체크리스트)에 답하지 않았다. 다만 **111단어로 분량은 채웠다** —
  EPTA_09 에서 이 자리가 무응답이었으므로 그 자체는 개선이다. 90초 문항은
  `templates-90s.md` 의 뼈대대로 **질문의 토막 수만큼 문단을 나눠** 말할 것. 이 문항은
  "비교한 것 → 관리 방법 → 예시" 세 문단이었다.
- 코멘트 : 녹음 뒷부분에서 같은 낱말을 길게 되풀이한 구간이 있다 — 말이 막혔을 때
  `we, we, we` 로 버티는 대신 **짧은 문장으로 끊어 내는 것**이 Fluency 에 유리하다.

---

## Part Ⅱ TASK B. Extended Role-play

**P2B-Q1** ⚠️
문제 : [Initial Situation] You are the pilot of HL123, descending through flight level one
niner zero for one one thousand, 70 miles from SOBAEK, inbound to Yeosu Airport. You have
information Kilo. Your required landing distance today is 1,900 metres.
☞ Contact Yeosu Approach and report your position and level.
내 답안 : Yeosu Approach, Hotel Lima one two three, descending through flight level one nine zero to one one thousand, seven miles from SOBAEK, inbound for Yeosu Airport, information Kilo.
** 정답 : Yeosu Approach, HL123, descending through flight level one niner zero for one one
thousand, 70 miles from SOBAEK, inbound Yeosu, information Kilo.
- 값 오류 (두 전사기 일치) : **70 마일인데 `seven miles` 로 말했다.** EPTA_09 에서 똑같이
  70마일→7마일 이었던 오류의 **재발**이다. 70마일과 7마일은 접근 단계가 완전히 다르다 —
  관제사의 강하 계획이 무너진다. 거리는 두 자리 이상이면 **`seven zero miles`** 로 끊어 말해
  7 과 구분할 것.
- 코멘트 : **기관 호출 `Yeosu Approach` 정확**(지시문 지정 기관과 일치, 2세트 연속 유지).
  **통과고도 FL190 + 목표고도 11,000 두 값을 자릿수별로 끊어 말하고**, information Kilo 까지
  담은 완전한 위치보고다. 형식은 완성됐고 숫자 하나가 틀렸다.
- 표준교신용어 오류 : `through FL190 **to** 11,000` → **`for` one one thousand**. 목표고도는
  for 로 받는다. 경미.

---

**P2B-Q2** ✅
문제 : 🖥 [ SOBAEK ONE arrival ]
☞ Listen to the controller and give a full readback.
Approach : HL123, Yeosu Approach, descend to 9,000 feet, reduce speed to two five zero
knots, expect the SOBAEK ONE arrival, ILS runway one seven, Yeosu altimeter two niner
niner four.
내 답안 : Descend 9000, reduce speed 250, SOBAEK ONE arrival, ILS runway one seven, altimeter 2994, Hotel Lima one two three.
** 정답 : Descend to 9,000 feet, reduce speed two five zero knots, expect the SOBAEK ONE
arrival, ILS runway one seven, Yeosu altimeter two niner niner four. Hotel Lima one two
three.
- 코멘트 : **5요소 전부 정확한 완전 복창이다** — 강하 9,000 · 감속 250 · SOBAEK ONE arrival ·
  ILS runway 17 · **고도계 2994**. 고도계는 §2 필수 복창 7항목이고 EPTA_09 에서 29.92 를
  확정하지 못했던 자리인데, 이번엔 다섯 요소 중 **마지막에 온 것까지** 잡았다.
  **5요소 복창은 이 세트에서 세 번째(P1A-Q2 · P2A-Q2 · 여기)이고 7세트 연속 유지**다.
- 재채점 메모 : **⚠️ → ✅.** 구글이 `This in 9000 900,000 reduced speed, 250. As will be e,
  a k. One arrival, Iris, Romney 1 7 7.` 로 받아써서 **"고도계 2994 가 빠졌다 — 필수 복창
  항목"** 이라고 지적했는데, **실제로는 정확히 복창했다.** 지적을 철회하고, 거기서 끌어낸
  "긴 지시의 끝이 사각지대"라는 진단도 취소한다.

---

**P2B-Q3** ⚠️
문제 : [Situation Update] Passing one two thousand feet you get a BRAKE SYSTEM 1 FAULT
with ANTI-SKID INOP. The alternate brake system is working but your braking is degraded —
your required landing distance is now tree,100 metres. There is no smoke and nothing else
is affected.
☞ Report your situation to the controller, name the fault, say what it means for your
landing, and request priority.
내 답안 : Departure, Hotel Lima one two three, passing one two thousand, our brake system one is failed, and anti-brake normally degraded, and anti-skid is inoperative, so we need three thousand one hundred meter landing distance required, and there is no smoke.
** 정답 : Yeosu Approach, HL123, passing one two thousand. We have a BRAKE SYSTEM 1 FAULT
with ANTI-SKID INOP. The alternate brake system is working but our braking is degraded, so
our required landing distance is now tree,100 metres instead of 1,900. No smoke and nothing
else is affected. Request priority handling.
- 표준교신용어 오류 : 기관명이 **`Departure`** 다 — 지금 교신 상대는 **Yeosu Approach** 이고
  강하 중이다. 기관 호출 오류는 EPTA_01·04·06 에서 지적된 항목이고, 상황이 복잡해지는
  구간에서 먼저 무너지는 패턴이 그대로 반복됐다. **이 세트에서 기관 호출이 틀린 곳은 여기
  하나**이고 나머지 다섯 곳(Gwangju Delivery·Gwangju Departure·Gangneung Control·Gwangju
  Tower·Yeosu Approach)은 전부 정확했다.
- 지시문 미수행 : `request priority` — **요청이 없다.** 네 요구 중 세 개만 수행.
- 코멘트 : **사건 보고 자체는 정확하다** — ① 계통명(brake system one is failed) ②
  **`anti-skid is inoperative`**(용어 정확) ③ 대체 계통 상태 ④ 필요 착륙거리 **3,100m 값
  정확, 자릿수까지 끊어 말함** ⑤ 연기 없음까지 자발적으로 보고했다. EPTA_06·07 에서 연속
  실패하고 EPTA_08 에서 처음 성공한 "사건명+조치+요청" 패턴이 **요청만 빼고 유지**됐다.
- 문법 : `anti-brake normally degraded` → **`the alternate brake system is normal but
  degraded`**. 그림의 `ALTN BRAKE — NORMAL · DEGRADED` 를 그대로 읽은 것으로 보이는데,
  문장으로 만들어야 뜻이 선다.
- 재채점 메모 : 구글이 `anti-skid is in operating` 으로 받아써서 "`inoperative`(작동 불가)와
  `in operation`(작동 중)은 정반대"라고 지적했는데, **실제로는 `inoperative` 를 정확히
  말했다.** 그 지적을 철회한다.

---

**P2B-Q4** ✅
문제 : 🖥 [ Yeosu / Sacheon / landing distance available ]
☞ Listen to the controller, state your decision with a reason, and tell him the distance
you need.
Approach : HL123, roger. Yeosu runway one seven has 2,800 metres available. Sacheon is one
eight minutes away and has tree,200 metres. What would you like?
내 답안 : We need 3100 meter, so we will, we will take Sacheon airport, even though it takes more one minute, Hotel Lima one two three.
** 정답 : We need tree,100 metres, and Yeosu has only 2,800. Request diversion to Sacheon —
tree,200 metres is enough for us, even though it is one eight minutes away. HL123.
- 코멘트 : **판단·근거·숫자 세 가지 모두 정확하다.** 2,800 < 3,100 ≤ 3,200 이라는 비교를
  옳게 수행하고 필요 거리 3,100m 을 명시했다. **부등호 방향이 2세트 연속 정확**하다 —
  EPTA_07 의 뒤집힘과 EPTA_08 의 "수락인데 거부"가 해결된 상태로 유지되고 있다.
- 값 오류 : `takes more one minute` — 사천까지는 **one eight(18)분** 이다(두 전사기 일치).
  1분과 18분은 연료·소방대 준비에 전혀 다른 계획을 만든다. 거부한 쪽(2,800)의 값은 말하지
  않았으니, 수락한 쪽의 조건값(18분)만큼은 정확히 돌려줄 것.
- 코멘트 : `we will take Sacheon airport` 보다 **`Request diversion to Sacheon`** 이 표준이다.

---

**P2B-Q5** ✅
문제 : ☞ Listen to the controller, give a full readback and say your intentions.
Approach : HL123, roger, turn left heading one zero zero, descend to 6,000 feet, vectors
for Sacheon. Say your intentions.
내 답안 : Left on heading one zero zero, descend six thousand, vector to Sacheon. Our intention is to priority landing and fire services standing by on the runway. Hotel Lima one two three.
** 정답 : Turn left heading one zero zero, descend to 6,000 feet, vectors for Sacheon.
Our intention is **to make a priority landing** at Sacheon, and we will need the fire
services standing by on the runway. HL123.
- 코멘트 : **복창 3요소(기수 100·강하 6,000·vectors for Sacheon) 전부 정확 + intentions +
  지원 요청까지 한 문항에서 완주했다.** ① `Our intention is to ~` 는 **4세트 연속 유지**
  (EPTA_06 에서 여섯 세트 만에 처음 쓴 구문) ② intentions 누락은 EPTA_07 에서 재발했던
  항목인데 이번엔 지시받자마자 나왔다 ③ 묻지 않은 **소방대 대기를 스스로 요청**한 것은 기장
  판단으로서 옳다 — 다만 두 턴 뒤 P2B-Q6 에서 그 요청을 뒤집는다(아래).
- 문법 : `Our intention is to priority landing` → **`to make a priority landing`**.
  `intention is to` 뒤에는 동사원형이 온다.

---

**P2B-Q6** ❌
문제 : ☞ Listen to the controller and answer both of his questions.
Approach : HL123, two things for the fire service — is there any smoke or burning smell
from the wheels, and do you want them standing by when you land?
내 답안 : Negative, Hotel Lima one two three. There's nothing smoke and we will not expect stand on runway. We will continue to vacate the runway, Hotel Lima one two three.
** 정답 : Negative, HL123, no smoke and no burning smell from the wheels. **Affirm**, we
**do** want the fire service standing by when we land — our braking is degraded, so we may
need a long landing roll and we may be slow to vacate.
- 판단 오류 (중대, 두 전사기 일치) : 두 번째 질문에 **소방대 대기를 거부했다.** BRAKE
  SYSTEM 1 FAULT + ANTI-SKID INOP 로 제동이 저하된 상태에서 소방대 대기는 **거절할 사안이
  아니다.** 제동 저하는 활주로 이탈·브레이크 과열·타이어 손상으로 이어질 수 있고, 소방대는
  대기해도 비용이 들지 않는다.
- **더 무거운 점 : 두 턴 전 P2B-Q5 에서 본인이 `fire services standing by on the runway` 를
  요청했다.** 관제사가 그걸 확인해 주는 질문에 거부로 답해, 한 사건 안에서 자기 요청을
  뒤집었다. 관제사는 어느 쪽을 준비해야 할지 알 수 없다.
- **이 오류는 EPTA_09 P2B-Q7 에서 "연료 누출 중 소방대 거부"로 이미 지적된 것이고, 이번
  세트는 같은 구조를 의도적으로 다시 냈는데 똑같이 거부했다.** 사실 질문(연기 유무)과 필요
  질문(소방대 대기)이 한 문장에 붙으면, 앞의 `negative` 가 뒤까지 끌려간다. **질문이 둘이면
  답도 둘이고, 두 답의 방향이 반대일 수 있다** 는 것을 먼저 의식해야 한다.
- 코멘트 : ① **두 질문 모두에 답한 것 자체는 진전**이다 — "두 질문 중 하나만 답함"은
  EPTA_04·05·08 에서 반복 지적된 항목이다 ② 사실 질문(연기 없음)은 정확 ③ `We will continue
  to vacate the runway` 는 본인이 보고한 제동 저하와 모순된다 — 제동이 나쁘면 이탈이 늦어질
  수 있다고 말하는 것이 맞다 ④ `we will not expect stand on runway` 는 문장이 성립하지
  않는다 — `we do not need them standing by` 로 말해야 뜻이 전달된다(다만 답 자체가 틀렸다)
  ⑤ `There's nothing smoke` → **`There is no smoke`**.

---

**P2B-Q7** ⚠️
문제 : ☞ Listen to the controller and provide both pieces of information.
Approach : HL123, Sacheon wants it for the fire brief — say again the landing distance you
need, and say again how many minutes you need before you are on the ground.
내 답안 : Rather(?), before braking function, we need 1,600, but now we required 3,100 meter, Hotel Lima one two three.
** 정답 : HL123, we need tree,100 metres landing distance — 1,900 metres before the brake
malfunction. And we need one eight minutes before we are on the ground.
- 코멘트 : **핵심 값 3,100m 을 네 턴 전(P2B-Q3)에서 그대로 들고 왔다.** 이번 세트가 겨냥한
  최우선 약점("받아적은 값을 끝까지 들고 가지 못한다")에 대한 **성공 사례**다. 묻지 않은
  "고장 전 값"까지 대조해 말하려 한 것도 좋은 동작이다.
- 값 오류 : 고장 전 필요 착륙거리는 **1,900m** 인데 `1,600` 으로 말했다(두 전사기 일치).
  Initial Situation 과 그림(NORMAL LDG DIST 1,900 M)에 두 번 나온 값이다.
- 지시문 미수행 : **두 번째 질문(몇 분 필요한가)에 답하지 않았다.** 18분이라는 값은 바로 앞
  P2B-Q4 에서 본인이 들은 것이다. 소방대 브리핑용으로 요청한 것이므로 시간이 없으면 상대는
  준비를 못 한다. 이 세트의 "두 질문 중 하나만" 패턴 2회째(P2A-Q8 과 동일).
- 문법 : `before braking function` → **`before the brake malfunction`**. `function` 은
  "작동"이므로 뜻이 반대가 된다.

---

**P2B-Q8** ⚠️
문제 : [Situation Update] The brake fault has cleared. The alternate system is giving you
normal braking and your required landing distance is back to 2,300 metres.
☞ Listen to the controller, give him an update, state your decision with a reason, and say
what you will need on the runway.
Approach : HL123, if your braking is back I can turn you round for Yeosu runway one seven
— 2,800 metres, and you'd be on the ground in niner minutes instead of one eight. Do you
want it?
내 답안 : Affirm, we use alternate system and system backed up. So we will continue to Yeosu approach. Now we need only 2,300 meters. So Yeosu is acceptable for us, Hotel Lima one two three.
** 정답 : **Affirm**, HL123. The alternate system is giving us normal braking now and our
required landing distance is back to 2,300 metres, so Yeosu runway one seven with 2,800
metres **is suitable** for us. Request Yeosu runway one seven. **We would still like the
fire service standing by on the runway.**
- 코멘트 : **판단·근거·새 값 세 가지가 정확하다.** ① 첫 단어 **`Affirm`** ② 상태 업데이트
  (대체 계통으로 제동 회복) ③ **새 필요 거리 2,300m 정확** ④ 2,300 ≤ 2,800 비교 옳음
  ⑤ **`acceptable` 어휘 정확**. **수락 판단이 3문항 연속 정확**하다(P2A-Q5 거부 ·
  P2B-Q4 거부 · 여기 수락 — 방향이 기본값으로 굳지 않고 값에 따라 갈렸다).
- 지시문 미수행 : `say what you will need on the runway` — **마지막 토막이 비었다.** 제동이
  회복됐어도 소방대 대기는 유지를 요청하는 것이 맞다. 이 세트 6건째다.
- 문법 : `we use alternate system and system backed up` → **`we are using the alternate
  system and the braking is back to normal`**(시제·관사). `we will continue to Yeosu
  approach` → **`we will continue to Yeosu`**(approach 는 기관명이라 뜻이 섞인다).

---

**P2B-Q9** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, turn right heading two two zero, descend to 2,500 feet until
established, cleared for the ILS runway one seven approach, contact Yeosu Tower on 118.7.
내 답안 : Turn right heading two two zero, descend two thousand five hundred feet until established, cleared ILS runway one seven approach, contact Yeosu Tower one one eight point seven, Hotel Lima one two three.
** 정답 : Turn right heading two two zero, descend to 2,500 feet until established, cleared
for the ILS runway one seven approach, contact Yeosu Tower 118.7. Hotel Lima one two three.
- 코멘트 : **5요소 전부 정확 — 기수 220 · 강하 2,500 · `until established` 조건절 ·
  `cleared ILS runway one seven approach` · 주파수 118.7.** ① **접근 허가 복창 2/2**
  (EPTA_09 에서 `ILS` 를 빠뜨렸던 항목) ② `cleared` 를 **과거분사로 정확히** 썼다 ③ 조건절
  `until established` ④ **주파수 2/2 정확**, 자릿수별로 끊어 말함 ⑤ 기관명 `Yeosu Tower`.
  **이 세트에서 가장 완전한 복창이다.**
- 표준교신용어 오류 : `cleared ILS` → **`cleared for the ILS`**. 전치사가 빠졌을 뿐 허가
  문구 자체는 있으므로 경미.

---

## Part Ⅱ TASK C. Reporting about Task B

**P2C-Q1** ⚠️
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
내 답안 : During approach phase, we flew as we planned in the first step, but few minutes after we have the braking system function on the display. So we advise that our system is inoperative and we only, we can only use the landing distance upper 3,100. So the ATC inform us another airport. So on the divert, we use the alternate system and the function, the function is come back and there's no smoke. And we continue to just approach, just airport again. So we can land as we planned.
** 교정 답안 : During **the descent** we **were flying** as we planned at first, but a few
minutes after that we **got a BRAKE SYSTEM 1 FAULT with ANTI-SKID INOP** on the display.
So we **advised the controller** that the system **was inoperative** and that our required
landing distance **was now tree,100 metres instead of 1,900**. The ATC **offered us**
another airport, **Sacheon, with tree,200 metres, one eight minutes away, because Yeosu
had only 2,800** — so we **decided to divert**. We **were using** the alternate brake
system, and **then the fault cleared** — the braking **came back** to normal **and our
required distance went back to 2,300 metres**. There **was** no smoke, so we **continued
to Yeosu** again and **landed on the ILS runway one seven** as we planned.
- 코멘트 : **전개 순서가 처음으로 정확하다.** 정상 강하 → 제동 계통 고장 → 보고 → 관제사가
  대안 제시 → 회항 결정 → 회복 → 원래 공항 복귀 → 착륙. EPTA_09 에서 전개 오독 3건 + 다른
  파트 혼입이었던 자리다. 필요 착륙거리 **3,100m 값도 정확**하고, **`inoperative` ·
  `alternate system` 용어도 정확**하다. 95단어로 분량 충족.
- 누락된 내용 : ① **사건명에 `anti-skid` 가 없다** — 제동 저하의 원인이다. P2B-Q3 에서는
  정확히 말했는데 리포팅에서 빠졌다 ② 회항 대상 공항명(Sacheon)과 비교 숫자(2,800 vs 3,200)가
  없다 ③ 회복 후 **2,300m** 로 돌아왔다는 핵심 수치가 없다 ④ ILS runway 17 이라는 결말이
  없다. Task C Q1 은 **"사건 + 숫자 + 결정 + 결말"** 네 토막이고, 지금은 사건과 결정만 있다.
- 문법 : 시제가 현재·과거로 섞인다(`we have the braking system ...`, `the function is come
  back`). **과거 사건 서술은 전부 과거시제**로 일치시킨다. `the braking system function` →
  `a brake system fault`(function 은 "작동"이라 뜻이 반대), `the landing distance upper
  3,100` → `a required landing distance of tree,100 metres`.

---

**P2C-Q2** ⚠️
문제 : How do you think the incident was handled by the air traffic controller? Do you
feel the situation could have been handled differently? Make a comment from a pilot's
point of view.
내 답안 : I think the ATC handled it well. First, when we informed our situation about the braking system, the ATC informed us some options and gave us detailed information about the landing distance and the fire services. We are really appreciate for it. Also, the ATC gave us the expected waiting minute. Also, it helps us to run checklists. Fortunately, we used the alternate system and the system is come back. So we can continue to use approach as we planned. But one thing that we could have been handled different is to not to ask prepare for the fire services, they can rely to tower. Other than everything has...
** 교정 답안 : I think the ATC handled it well. First, when we informed **him** of our
situation about the braking system, the ATC **gave** us some options and detailed
information about the landing **distances available** and the fire services. We **were**
really **grateful** for **that**. Also, the ATC gave us the expected **flight time to
Sacheon, one eight minutes**, **which helped us run our checklists and decide**.
Fortunately, we **were using** the alternate system and the braking **came back**, so we
**were able to continue to Yeosu** as we planned. But **one thing that could have been
handled differently is that** **he could have asked us earlier whether our braking would
recover, before vectoring us away from Yeosu — we flew towards Sacheon before he turned us
back.** Other than that, everything **was** handled well.
- 코멘트 : **구조는 완성형이다.** ① **평가 대상이 관제사 — 4세트 연속 유지** ② 근거 두 개
  (대안 제시 · 거리와 소방대 정보) ③ **`one thing that ... could have been handled
  differently` 문구 2세트 연속** ④ `Other than that` 정확 ⑤ **`run checklists` 어휘 정확**
  ⑥ 109단어로 분량 충족. 이 문항은 EPTA_08 이후 가장 안정적인 영역이 됐다.
- 내용 오류 : **"소방대 준비를 묻지 말았어야 한다"는 제안은 틀렸다.** 관제사가 제동 저하
  기체에 소방대 대기를 확인한 것은 표준 절차이고 칭찬할 일이다. P2B-Q6 의 오판이 Task C 까지
  일관되게 따라왔다. 개선 제안은 **"더 일찍 물었어야 했다"·"회복 가능성을 확인하고 벡터를
  줬어야 했다"** 처럼 **타이밍이나 정보 교환 순서**를 지적하는 쪽이 안전하다.
- 문법 : `we could have been handled` → **`it could have been handled`**(주어는 상황)
  또는 `he could have ~`. `handled different` → **`differently`**. `we are really
  appreciate for it` → **`we were really grateful for that`**(appreciate 는 "we appreciated
  it" 또는 "we were grateful"). `they can rely to tower` → `he could have left it to the
  Tower`. `continue to use approach` → `continue to Yeosu`.

---

## 태스크별 총평

### Part Ⅰ Task A (✅4 ⚠️0 ❌0)
**네 문항 전부 통과했다 — 이 세트에서 가장 강한 영역이다.** 5요소 클리어런스를 요소 누락 없이
닫았고(7세트 연속), squawk·활주로·강하고도·ILS·조건절이 모두 정확했다. 숫자는 네 문항 모두
**자릿수별로 끊어** 말했다(`four one six two` · `three three zero` · `two eight zero`).
남은 문제는 하나로 좁혀진다 — **`clear` vs `cleared`**. 다섯 세트째이고 이번 세트에 4회다.
그런데 P2A-Q9 · P2B-Q9 에서는 `cleared` 를 정확히 썼으므로 **모르는 것이 아니라 흘리는
것**이다. 허가 문구를 첫 단어로 발음할 때 어미까지 붙이는 연습만 남았다.

### Part Ⅰ Task B (✅0 ⚠️2 ❌4)
**여섯 문항 중 넷이 실패한, 이번 세트의 최대 실점 구역이다.** Task A 는 4/4 인데 Task B 는
0/6 이다 — **들은 것을 되돌려주는 것은 완성됐고, 스스로 말을 만들어야 하는 순간 무너진다.**
P1B-Q3 은 화면에 해야 할 세 가지가 떠 있는데 10단어로 끝냈고, `Request present level` 로
요청과 보고의 방향을 뒤집었다. P1B-Q1 은 `confirm ~?` 함정형에서 **`Affirm` 과 `negative` 를
한 응답에 같이 넣었고**(관제사는 먼저 들은 Affirm 으로 처리한다) 기수도 040 을 090 으로
말했으며 사유도 없었다. P1B-Q5 는 unable 3단 구조를 완성했는데 그 틀에 넣은 두 숫자가 모두
틀렸다(2,500→250, 1,500→150). P1B-Q6 은 불일치 상황을 정확히 설명했지만 `Confirm ~?` 질문과
의도 진술이 없었다. 반면 P1B-Q2 는 판단과 한계값이 정확했고, P1B-Q4 는 두 기능을 다 하면서
**표준구 `be advised`** 를 썼다. **되는 문항과 안 되는 문항의 차이는 "문장 틀이 머리에
있는지"** 다. 발신형·confirm형·unable형 세 틀을 20초 안에 나오도록 입으로 굳혀야 한다.

### Part Ⅱ Task A (✅7 ⚠️2 ❌2)
**복창·기관 호출·숫자 비교는 확실히 됐고, 지시문의 뒷부분과 상황 추적에서 실점했다.**
P2A-Q5 는 이 세트 최고 문항이다 — 2,400 과 2,600 을 나란히 말하고 판단 근거까지 밝혔다.
P2A-Q6·Q7·Q9 는 조건절(`when ready`, `behind the landing A320`)과 이륙 허가를 정확히 복창했고
주파수도 맞았다. P2A-Q1·Q10 은 **기관명을 지명까지 붙여 호출**하고 위치보고 표준형
(through/for)을 2세트 연속 맞췄다. 실점은 두 곳이다. P2A-Q4 는 **지문이 "정지해 있다"고
했는데 "계속 활주 중"이라고 답해 상황을 거꾸로 전달**했고, 선택 질문에 `Negative` 로 답했다.
P2A-Q3 는 복창은 완벽했지만 `inquire` 를 하지 않았다. 슬롯시각 되묻기(Q8)는 값을 꺼내려는
동작은 나왔으나 0640 을 0606 으로 말하고 두 번째 질문을 비웠다.

### Part Ⅱ Task B (✅4 ⚠️4 ❌1)
**사건 처리의 뼈대는 섰다.** 계통명을 정확히 불렀고(`brake system one is failed` ·
`anti-skid is inoperative`), 필요 착륙거리 3,100m 를 정확히 말했고, **그 값을 네 턴 뒤
되묻기에서 그대로 꺼냈다** — 이번 세트가 겨냥한 최우선 약점의 성공 사례다. `Our intention is
to ~` 4세트 연속, 수락·거부 판단 3문항 연속 정확, **접근 허가·고도계·주파수 전부 정확**,
P2B-Q9 는 5요소 완전 복창이다. 문제는 **안전 판단 하나와 마지막 토막 세 개**다. P2B-Q6 에서
제동 저하 상태로 **소방대 대기를 거부했고** — 두 턴 전 P2B-Q5 에서 본인이 요청한 것을
뒤집었다 — 이는 EPTA_09 의 동일 오류 재발이다. P2B-Q3 는 priority 요청, P2B-Q7 은 소요 시간,
P2B-Q8 은 활주로에서 필요한 것, 세 문항 모두 **지시문의 마지막 요구만** 비었다. 기관 호출도
P2B-Q3 에서 `Departure` 로 틀렸다(강하 중, 상대는 Approach) — 이 세트에서 유일한 기관명
오류다.

### Part Ⅱ Task C (⚠️2)
**이 영역은 세 세트에 걸쳐 분명히 올라왔다.** Q1 의 전개 순서가 처음으로 정확했고(EPTA_09 는
오독 3건), 다른 파트 혼입도 없었다. Q2 는 평가 대상이 관제사(4세트 연속), 고정 문구
`one thing that ... could have been handled differently`(2세트 연속), `Other than that`,
그리고 두 문항 모두 95~109단어로 분량 충족. 남은 과제는 두 가지다. 첫째 **숫자와 결말이
빠진다** — Q1 에 2,800/3,200/2,300 과 "ILS runway 17 로 착륙"이 없어 사건의 규모가 전달되지
않고, `anti-skid` 도 빠졌다(P2B-Q3 에서는 말했다). 둘째 **개선 제안의 내용** — "소방대를
묻지 말았어야 했다"는 제안은 안전 판단이 거꾸로다. 타이밍·정보 순서를 지적하는 쪽으로
고정할 것.

---

## ICAO 6개 항목 등급

| 항목 | 등급 | 근거 |
|---|---|---|
| Pronunciation | **평가 보류** | 텍스트/ASR 기반이라 직접 판단 불가(CLAUDE.md §6-2). 등급 계산에서 제외. **최초 채점에서 발음 근거로 삼았던 항목 대부분이 구글 전사기의 오인이었다**(아래 관찰 항목 참조) |
| Structure | **Level 3** | 복창 문장의 구조는 통제된다. 그러나 자유응답에서 기본 구조가 반복해 무너진다 — `attend attention on`(3회), `the function is come back`, `we could have been handled different`, `we are continue to taxi`, `so we can accept land`, `we are really appreciate for it`, `There's nothing smoke`, `while taxiing with a piece of line`(동사 없음). 시제가 현재·과거로 섞여(P2C-Q1) 사건 서술의 시점이 흐려진다. 뜻이 전달되는 경우가 많지만 방해가 잦아 Level 4 에 못 미친다 |
| Vocabulary | **Level 3** | 사건·절차 어휘는 정확하다 — `be advised`, `inoperative`, `alternate system`, `acceptable`, `established`, `altimeter`, `run checklists`, `brake system one`, `landing distance required`, `intentions`, `holding point`, `line up and wait`. 그러나 익숙한 틀을 벗어나면 돌려 말하지 못하고 단어 선택이 틀린다 — `attend attention`, `braking function`(←malfunction, 뜻 반대), `they can rely to tower`, `expected waiting minute`, `landing distance upper 3,100`, `we will not expect stand on runway`, `a piece of line`(←rubber). 한계 상황에서 바꿔 말하기(paraphrase)가 안 되는 것이 Level 4 와의 차이 |
| Fluency | **Level 3** | **32문항 전부 응답(무응답 0)**, 90초 세 문항 모두 95~111단어로 분량 충족 — EPTA_09 의 Follow-up 무응답이 해결됐다. 다만 `we have to We have to`·`request, request`·`we will, we will`·`just approach, just approach` 처럼 같은 말을 되풀이하며 문장을 찾고, P2A-Q11 뒷부분에는 같은 낱말을 길게 되풀이한 구간이 있다. 자유응답에서 발화가 토막나 자연스러운 흐름에 못 미친다 |
| Comprehension | **Level 3** | 구어체 ATC(`I'll keep you posted`, `Up to you`, `I've lost your slot time`, `two things for the fire service`)를 정확히 이해했고, 5요소 지시를 세 번 완전히 받아냈다. 그러나 **P2A-Q4 에서 지문의 "정지 상태"를 "활주 중"으로 거꾸로** 읽었고, **P1B-Q3 는 지시문 세 요구 중 둘을 오독**했으며(`request present level`), 값 오류 6건(040→090, 70마일→7마일, 1,500→150, 2,500→250, 1,900→1,600, 슬롯 0640→0606)이 났다. 핵심 정보를 놓치는 빈도가 Level 4 에 미달 |
| Interactions | **Level 2** | **지시문이 요구한 행위의 뒷부분을 돌려주지 않는 패턴이 네 파트 전부에서 6건** 나왔다 — P2A-Q3 `inquire how long`, P2A-Q8 두 번째 질문, P2B-Q3 `request priority`, P2B-Q7 소요 시간, P2B-Q8 활주로에서 필요한 것, P2A-Q11 3부 중 2부. 여기에 **P1B-Q3 는 20초에 10단어로 세 요구 중 둘이 비었고**, P1B-Q6 은 `Confirm ~?` 질문 자체가 없어 상대가 답할 수 없었다. **P1B-Q1 은 한 응답에 `Affirm` 과 `negative` 를 같이 넣어 가능 여부를 전달하지 못했고**, **P2B-Q6 에서는 두 턴 전 자기가 요청한 소방대 대기를 거부**해 응답이 상황과 모순됐다(EPTA_09 동일 오류 재발). 주고받기가 단순 복창에서는 성립하지만 요구가 둘 이상이면 절반만 돌아오므로 Level 3 에 미달 |

### 최종 등급 : **Level 2** (불합격, 5세트 연속)

**재전사 후에도 등급이 바뀌지 않은 이유** — ✅ 가 10개에서 15개로 늘었지만, 올라간 다섯
문항은 전부 **복창 정확도**(Task A·Ⅱ-A·Ⅱ-B 의 readback) 영역이다. 등급을 결정한
**Interactions 의 근거 6건은 전사 오류와 무관하게 그대로**다 — 묻지 않고, 두 번째 질문에
답하지 않고, 요청하지 않은 것은 녹음에 없는 것이 사실이다.

**Level 4 에 못 미치는 이유**

- **Interactions (2)** — 상대가 요구한 것의 절반만 돌려주는 것이 이 세트의 지배적 패턴이다.
  복창은 이제 7세트 연속 안정적이고 이번엔 Task A 4/4 인데, `and` / `then` 뒤에 붙은
  요구(묻기·요청하기·두 번째 질문)가 계속 빠진다. 실제 시험에서 이 항목은 "관제사가 필요한
  것을 받았는가"로 평가되므로 복창 정확도로 보상되지 않는다. 등급을 결정한 항목이다.
- **Comprehension (3)** — 상황 지문을 반대로 읽은 사례(P2A-Q4)와 지시문 요구를 오독한
  사례(P1B-Q3)가 각 1건씩 있고, 받아적은 값이 틀린 것이 6건이다.
- **Structure / Vocabulary / Fluency (각 3)** — 복창 구간은 Level 4 수준이지만 plain English
  구간에서 구조가 무너지고 바꿔 말하기가 안 된다. Part Ⅱ 는 plain English 비중이 높아
  이 격차가 그대로 드러난다.

---

## 다음 학습 과제

### 반복되는 약점 3개

1. **지시문의 마지막 토막을 돌려주지 않는다 (9세트 연속, 이번 6건)** — `inquire how long`,
   `request priority`, 두 번째 질문 2건, `say what you will need`, Follow-up 3부 중 2부.
   **이 하나가 Interactions 를 Level 2 로 묶어 등급을 결정했다.**
   **대책** : 지시문을 들으면서 `and`/`then` 을 **세로줄로 쪼개 번호를 매긴다.** ①복창
   ②묻기 처럼. 그리고 **번호를 다 지웠는지 확인한 뒤 송신을 끝낸다.** 복창만 하고 끝내려는
   순간이 바로 토막이 빠지는 순간이다.

2. **문장 틀은 있는데 그 안의 숫자가 틀린다 (신규 양상)** — P1B-Q5 가 전형이다 :
   unable + 사유 + 대안 3단 구조를 정확히 쓰면서 두 숫자(2,500→250, 1,500→150)가 모두
   틀렸다. P2B-Q1 70마일→7마일, P2B-Q7 1,900→1,600, P1B-Q1 040→090, P2A-Q8 슬롯시각
   0640→0606 도 같은 뿌리다. **끊어 읽는 방식은 전부 정확했으므로 문제는 발음이 아니라
   메모 유지**다. **대책** : 받아적을 때 **단위를 숫자에 붙여 적는다**
   (`1500fpm`, `70NM`, `0640Z`, `H040`). 단위가 없으면 150 과 1,500 이 구분되지 않는다.

3. **안전 질문에 "필요 없다"로 답한다 (2세트 연속, 중대)** — EPTA_09 연료 누출 중 소방대
   거부, 이번 제동 저하 중 소방대 거부. 게다가 **두 턴 전 자기가 요청한 것을 뒤집었고**,
   Task C 에서는 "관제사가 소방대를 묻지 말았어야 했다"고까지 말했다. **대책** :
   **비정상 상황에서 지원 제안은 기본적으로 받는다.** `do you want them standing by?` 의
   기본 답은 **`Affirm`** 이고, 거절은 기체가 완전히 정상으로 돌아왔을 때만 한다.
   연기·냄새를 묻는 **사실 질문**과 대기를 묻는 **필요 질문**은 한 문장에 붙어 있어도
   답의 방향이 반대일 수 있다.

### 외워야 할 표현 5개

| 영어 | 한국어 뜻 | 쓸 자리 |
|---|---|---|
| **Negative, HL123. We turned right heading zero four zero to stay clear of a build-up.** | 아니다. 적란운을 피하려고 우선회해 040 으로 갔다. | `confirm ~?` 함정형 — **첫 단어 NEGATIVE 하나 → 실제 값 → 사유**. Affirm 과 섞어 쓰지 않는다 |
| **Request descent to flight level one four zero due to light icing. Maintaining flight level one six zero.** | 경미한 착빙 때문에 FL140 으로 강하를 요청한다. 현재 FL160 유지 중. | 발신형 요청 — **REQUEST + 명사구 + due to 사유 + 현재 상태**. present level 은 요청 대상이 아니라 보고 대상 |
| **Confirm landing runway one niner? We are planning for runway one niner.** | 착륙 활주로 19 확인 요청. 우리는 19 를 준비하고 있다. | `Make a confirmation and clarify your intention.` — **질문 한 줄 + 내 계획 한 줄** |
| **Affirm, we do want the fire service standing by — our braking is degraded.** | 그렇다, 소방대 대기를 원한다. 제동이 저하돼 있다. | 지원 제안에 대한 답. **Affirm 이 기본값** |
| **Request an estimate of how long we will be held.** | 얼마나 대기할지 예상 시간을 알려달라. | `inquire how long it will take` — 복창 뒤에 **질문 한 줄**을 붙이는 습관 |

### 발음 관찰 항목 — 대부분 철회

**최초 채점에서 발음 근거로 올렸던 항목 대부분이 구글 전사기의 오인이었다.** 로컬 whisper
재전사에서 같은 녹음이 정확히 받아써졌으므로 아래를 **철회**한다 :

| 철회한 항목 | 구글 전사 | 실제 발화 (whisper) |
|---|---|---|
| ILS → `Iration`/`Iris`/`items` (L↔R) | `Clear Iration Runway` | **`clear ILS runway`** |
| runway → `roommate`/`wrong way` | `weight roommate 34` | **`wait, runway three four`** |
| established → `Easter list` | `until Easter list` | **`until established`** |
| suitable → `a set of verb` | `is a set of verb for us` | **`is acceptable for us`** |
| contact → `contagious` | `contagious Tower` | **`contact Yeosu Tower`** |

남는 관찰 항목은 **두 개뿐**이다.

| 의도한 단어 | 전사 결과 | 메모 |
|---|---|---|
| **Ulsan (울산)** | turbo `Osan` · 구글 `usan` | **Osan(오산)은 다른 공항이다.** `Ul-` 의 l 을 분명히 낼 것 |
| **Hotel Lima** | 구글 `telemo`/`Tell them I want to three` · whisper 전 문항 정확 | whisper 가 32문항 전부 정확히 잡았으므로 **발음 문제로 보기 어렵다.** SAMPLE_01 의 `hotel amount` 30회+ 도 인식기 쪽 문제였을 가능성이 높다 |

**다음 세트부터는 로컬 whisper 전사만 발음 근거로 쓴다.**
