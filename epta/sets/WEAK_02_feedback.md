# WEAK_02 채점 — 2026-11-05

**최종 등급 : Level 2 (불합격)**

✅ 6 · ⚠️ 9 · ❌ 20 · 무응답 4 (P2C-Q1~Q4)

응시 : 세션 20261105-161451, **39문항 중 35문항**. 섹션 E(90초 4문항)는 응시하지 않았다.

**채점 근거는 타이핑 답안이다.** 35문항 전부에 타이핑 답안이 있고 서버 전사본은 없다.
녹음 27개는 §6-0 대로 로컬 whisper(large-v3-turbo)로 전수 재전사했는데 **27개 전부 무음**
이었다 — 마이크가 소리를 담지 못했다. 따라서 §6-0 의 "빈 결과는 무응답이므로 Level 1" 규칙은
여기 적용하지 않는다. 그 규칙은 음성으로만 응시한 세트를 위한 것이고, 이 세션은 **35문항 전부에
타이핑 답안이 있다.** 타이핑한 글이 답안이므로 그것을 그대로 채점했다(§6-1).
텍스트 답안이므로 Pronunciation 은 평가 보류다.

---

## 세트 결함 — "약점 D 가 이상하다"에 대한 답

지적이 **부분적으로 맞다.** 섹션 D 에 실제 결함이 셋 있다. 다만 D 에서 틀린 7문항 중
**4문항은 세트 탓이 아니다** — 지문에 필요한 것이 다 있었다. 구분해서 적는다.

### 세트가 잘못한 것

**① 기관명에 🖥 클루가 없다 (가장 큰 결함).**
발신 문항은 **기관명을 입으로 불러야** 하는데, 철자를 모르면 부를 수 없다. 실제로 전부 틀렸다.

| 불러야 했던 기관 | 쓴 것 | 클루 |
|---|---|---|
| **Pembury** Approach (P2B-Q6, P1A-Q10) | `tenbury` | 없음 |
| **Wexcombe** Approach (P1A-Q6·Q7) | `wexco` | 없음 |
| **Alderton** Ground (P1A-Q8) | `adulton` | 없음 |
| **Stanmore** Control (P2B-Q4) | `stanmore approach` | Q1 에만 있음 |

`CLAUDE.md` §4-1-1 은 **"철자를 모르면 복창할 수 없는 고유명사"는 화면에 띄운다**고 못 박았다.
Stanmore(D-Q1)·Alderton Delivery(D-Q2)·Dunmere(D-Q5)에는 클루를 줬는데 Pembury(D-Q6)에는
안 줬다. 같은 섹션 안에서 기준이 갈렸다 — 세트의 잘못이다.

**② P2B-Q4 는 기관이 말없이 바뀐다.**
P2B-Q3 의 속도 지시는 `Center :` 가 줬는데, P2B-Q4 는 `Contact Stanmore Control` 이라고 한다.
핸드오프가 없으니 같은 기관인지 다른 기관인지 알 수 없다. 게다가 **이미 교신 중인 상대에게
`Contact`** 라고 하는 것도 틀렸다 — 그 자리는 `Report to the controller` 여야 한다.
`stanmore approach` 라고 쓴 것은 이 혼선의 결과다. WEAK_01 에서 고친 것과 같은 종류의 결함이다.

**③ P2B-Q7 은 받는 쪽이 애매하다.**
활주로 앞에 대기 중이면 Tower 와 교신하는 것이 맞지만, **스탠드로 돌아가는 것은 Ground 의
일**이다. 지문이 "지금 누구 주파수에 있는지"를 말해주지 않은 채 `Contact Alderton Tower` 를
지정했다. `ground` 라고 부른 것은 **변호 가능한 답**이다 — 이 문항에서는 감점하지 않았다.

### 세트 탓이 아닌 것 — 지문에 다 있었다

- **P2B-Q1** : `You are level at flight level three three zero ... You want flight level three
  seven zero.` → FL370 요청. 그런데 **도착 공항 최초 호출**("request inbound for stanmore
  airport information d")로 답했다. 지문을 읽지 않고 섹션 A 의 발신 문항 패턴을 그대로 가져왔다.
- **P2B-Q2** : 원하는 것은 **LIDRO ONE 하나**다. 클루에 두 절차가 같이 떠 있다고 둘 다 말하면
  안 된다. 그리고 `departure` 를 `arrival` 이라고 했다.
- **P2B-Q5** : 원하는 것은 **Dunmere 의 최신 기상**이다. `request direct dunmere` 는 다른 요청이다.
- **P2B-Q4** : 허가받은 속도는 **250**인데 260을 요청했다.

**결론 : 클루 네 곳을 추가하고 Q4 의 기관 문제를 고치면 섹션 D 는 정상이다.** 나머지는
지문을 끝까지 읽지 않은 쪽이다 — 발신 문항은 ATC 대사가 없으므로 **지문이 유일한 근거**다.

---

## 약점 A. 복창 + α — 11문항

**P1A-Q1** ✅
문제 : 🖥 [ LIDRO ] / Approach : HL123, cleared direct LIDRO, descend to 9,000 feet, expect one five minutes of delay. / Record your full readback.
내 답안 : celared direct lidro descendt 9000 expect 15min delay hl123
** 정답 : HL123, cleared direct LIDRO, descend to 9,000 feet, expect one five minutes of delay.
- 세 요소 전부 복창했다. 이 문항은 흠이 없다.
- 오탈자(`celared`·`descendt`)는 소리 내면 같으므로 감점하지 않았다(§6-1-1).

---

**P1A-Q2** ❌
문제 : You are now on the way to LIDRO. You want to know how much delay to expect now. / Approach : HL123, descend to 7,000 feet. The aircraft ahead has just gone around, so your delay will be longer. / Give a full readback, tell him what you were told earlier, and inquire how long the delay will be now.
내 답안 : descend 7000 hl123 , and how long will it to wait
** 교정 답안 : HL123, descend to 7,000 feet. Earlier we were told to expect one five minutes of delay — request our revised delay now.
- **누락된 기능 : "tell him what you were told earlier".** Q1 에서 들은 **one five minutes** 를 말해야 했다. 이 세트가 Q1 → Q2 로 이은 이유가 바로 그것인데, 적어 둔 값을 한 문항 뒤에서 쓰지 못했다.
- 표준교신용어 오류 : `how long will it to wait` 는 문장이 아니다. 정보를 원할 때는 **REQUEST + 명사구** — `request our revised delay` / `request the expected delay now`.
- 복창(7,000)은 맞다.

---

**P1A-Q3** ⚠️
문제 : Your cabin crew are still securing the cabin. For the next three minutes the highest rate of descent you can accept is 1,500 feet per minute. / Center : HL123, descend to flight level two four zero, two five hundred feet per minute or greater. / Give a full readback, and tell him what you can do instead.
내 답안 : descend fl240 and unable to increase 2500ft or greater , our litmit is 1500ft / min , so request 1500ft per min
** 교정 답안 : HL123, descend to flight level two four zero. Unable two five hundred feet per minute or greater — for the next three minutes our maximum rate is 1,500 feet per minute. Request 1,500 feet per minute.
- 세 기능(복창·불가·대안)을 다 했다. 이 섹션에서 드문 완주다.
- 표준교신용어 오류 : `unable to increase 2500ft` — 강하율이므로 `increase` 가 아니다. **`Unable (값)`** 으로 값을 바로 붙인다.
- 누락 : **`for the next three minutes`**. 3분 뒤에는 2,500 도 가능하므로, 시한을 말하면 관제사가 다시 쓸 수 있다.
- 코멘트 : **콜사인이 없다.** 복창에는 반드시 콜사인을 붙인다.

---

**P1A-Q4** ⚠️
문제 : Your performance figures today are for the full length of runway zero nine, so you cannot depart from Mike three. You want to go to holding point Mike one. / Ground : HL123, taxi to holding point Mike three via Tango, hold short of runway zero nine. / Give a full readback, and make a request with a reason.
내 답안 : taxi to hold point m3 via tango , hold short of runway 09 hl123 , and request taxi to m1 , our take off runway limit is require to take off at m1
** 교정 답안 : HL123, taxi to holding point Mike three via Tango, hold short of runway zero niner. Request holding point Mike one — our performance today requires the full length of runway zero niner.
- 복창은 완벽하다. **`hold short of runway zero nine` 을 빠뜨리지 않았다** — 활주로 관련 지시라 필수인데 매번 빠지던 자리다.
- 문법 오류 : `our take off runway limit is require to take off at m1` 은 뜻이 서지 않는다. 이유는 **"오늘 성능 자료가 09 전장 기준이다"** 다. 요청의 이유는 **요청 내용을 되풀이하는 것이 아니라 그 바깥의 사실**이어야 한다.

---

**P1A-Q5** ✅
문제 : During your landing roll you saw a large dog on the grass beside taxiway Delta. You were busy and you have not reported it. You want the controller to know. / Ground : HL123, taxi to stand two two via Kilo, give way to the Airbus A380 on your left. / Give a full readback, and report what you saw.
내 답안 : taxi to stand 22 via k , and give way to A 380 hl123 and be advise during landing roll, we saw large dog on gass at taxiway D
** 정답 : HL123, taxi to stand two two via Kilo, give way to the Airbus A380 on our left. Be advised, during our landing roll we saw a large dog on the grass beside taxiway Delta.
- 복창 세 요소 + 시차형 보고를 **언제·어디서까지** 담았다. 이 유형의 모범이다.
- 사소한 것 : `be advise` → `be advised`.

---

**P1A-Q6** ⚠️
문제 : You are level at flight level one six zero, 40 miles from Wexcombe. A cabin crew member has a serious burn on one hand from the galley oven. You want the controller to know about it. Contact Wexcombe Approach. / Report your status.
내 답안 : wexco approach hl123 , level at fl160 40 miles of wexco and be advised we have serious burn on 1 hand on aircraft , reqeust priority landing
** 교정 답안 : Wexcombe Approach, HL123, level at flight level one six zero, 40 miles from Wexcombe. Be advised, we have a cabin crew member with a serious burn to one hand from the galley oven.
- 기관·고도·위치를 순서대로 깔았다. 틀이 맞다.
- 누락된 정보 : **누가 다쳤는지.** `serious burn on 1 hand on aircraft` 로는 승객인지 승무원인지 알 수 없다. **승무원**이면 객실 서비스·탈출 지원 인원이 줄어드는 문제라 관제사·공항의 대응이 달라진다. 사람을 먼저 말한다 — `a cabin crew member with ~`.
- 코멘트 : `request priority landing` 은 **다음 문항(Q7)의 몫**이다. 여기 지시문은 `Report your status` 하나였다. 틀린 말은 아니나 Q7 에서 할 말을 미리 써 버렸다.
- 기관명이 `wexco` 로 잘렸다 — 위 세트 결함 ①.

---

**P1A-Q7** ❌
문제 : You want to land at Wexcombe on the next available runway, with a medical team at the stand. / Approach : HL123, roger, turn left heading one three zero, descend to 6,000 feet, vectors for Wexcombe. Say your intentions. / Give a full readback, and say your intentions.
내 답안 : left turn heading 130 , descent 6000 vectors to wexco , hl123 , our intention is medical team standing by
** 교정 답안 : HL123, turn left heading one three zero, descend to 6,000 feet. Our intentions are to land at Wexcombe on the next available runway, and we request a medical team at the stand.
- **누락된 기능 : 가장 중요한 의도.** 원한 것은 두 가지(**다음 가능한 활주로에 착륙** + 스탠드에 의료진)인데 두 번째만 말했다. 어디에 어떻게 내릴지가 intentions 의 본체다.
- 문법 오류 : `our intention is medical team standing by` — 명사구를 그냥 이어 붙였다. **의도는 `Our intentions are to + 동사`**, **지원 요청은 `we request + 명사구`** 로 나눠 말한다.
- 복창(기수·고도)은 맞다. `vectors for Wexcombe` 는 복창 의무가 없다.

---

**P1A-Q8** ✅
문제 : You are at stand one eight at Alderton, ready to push back. You want pushback and start-up. Contact Alderton Ground. / Make a request.
내 답안 : adulton ground hl123 at stand 18 request push back and start up
** 정답 : Alderton Ground, HL123, at stand one eight, request pushback and start-up.
- 20초 발신 문항의 정답 형태다. 기관 → 콜사인 → 위치 → REQUEST + 명사구. 더 넣을 것도 뺄 것도 없다.
- 기관명이 `adulton` 으로 흐려졌다 — 세트 결함 ①.

---

**P1A-Q9** ❌
문제 : Just after your call, dispatch tells you that a passenger has not boarded and that their bags must be offloaded. It will take one two minutes. / Ground : HL123, hold position. Report when you are ready. I have an inbound for your stand in about one zero minutes. / Give a full readback, acknowledge his situation, and tell him how long you need with a reason.
내 답안 : hold position hl123 , and we require 12min due to not borded passenger to wait
** 교정 답안 : HL123, holding position, wilco, we will report when we are ready. Understood you have an inbound for our stand in one zero minutes. We need one two minutes — a passenger has not boarded and his bags must be offloaded.
- **누락된 기능 둘 중 하나 : 그의 사정 인지.** 그는 **10분 뒤 들어오는 항공기**가 있다고 말했다. 그걸 못 들었다는 듯이 "12분 필요하다"만 하면, 관제사는 내가 10분을 넘긴다는 사실을 아는지 모르는지 알 수 없다. **내 12분이 그의 10분보다 길다는 것을 내가 알고 있음**을 보여야 한다.
- 표준교신용어 오류 : `Report when you are ready` 에 대한 응답은 **WILCO** 다. 아무 말도 안 하면 "보고하겠다"는 약속이 빠진다.
- 이유가 절반이다 : 수하물 하기(offload)가 12분의 실제 이유다. `not borded passenger to wait` 는 문장이 서지 않는다.

---

**P1A-Q10** ❌
문제 : You were on the ILS runway one eight at Pembury. At 800 feet you lost one five knots in windshear and you went around. You are now passing 2,000 feet. Contact Pembury Approach. / Report your status.
내 답안 : tenbury approach hl123 passing 2000ft on ils runway 18 , we lost 800feet and 15knots by windshear during approach
** 교정 답안 : Pembury Approach, HL123, going around from the ILS runway one eight, now passing 2,000 feet. We lost one five knots of airspeed in windshear at 800 feet.
- **누락된 정보 : 복행(go-around)했다는 사실.** 상태 보고의 핵심이다. `passing 2000ft on ils runway 18` 은 **아직 접근 중**이라는 뜻으로 읽힌다 — 관제사는 복행기를 분리해야 하므로 이 한마디가 없으면 보고가 성립하지 않는다.
- 숫자 오류 : `we lost 800feet and 15knots` — 잃은 것은 **속도 15노트**이고, 800피트는 **그 일이 일어난 고도**다. 두 숫자의 역할을 섞었다. `lost one five knots at 800 feet`.
- 기관명 `tenbury` — 세트 결함 ①.

---

**P1A-Q11** ❌
문제 : You want to hold for two zero minutes until the weather has passed. / Approach : HL123, roger, climb to 4,000 feet, turn right heading three six zero. Two things — how much airspeed did you lose, and do you want another approach, or do you want to hold? / Give a full readback, and answer both of his questions.
내 답안 : climb 4000 , turn right heading 360 hl123 , and we loose 15knots and we require hold about 10min more
** 교정 답안 : HL123, climb to 4,000 feet, turn right heading three six zero. We lost one five knots. We would like to hold — request two zero minutes in the hold until the weather has passed.
- **숫자 오류 : `about 10min` → 지문은 `two zero minutes` 다.** 지문에 적힌 값을 지어내 바꿨다. 이 세트가 겨냥한 "값 유지"의 실패다.
- 복창 두 요소는 맞고, 두 질문에 다 답한 것도 맞다. 선택 질문에 `AFFIRM/NEGATIVE` 를 쓰지 않은 것도 맞다.
- 사소한 것 : `we loose` → `we lost`(과거). `about` 은 쓰지 않는다 — 관제사는 숫자로 체공을 배분한다.

---

## 약점 B. 판단 + 이유 — 7문항

**P1B-Q1** ⚠️
문제 : Your maximum tailwind for landing is one five knots. You want the shorter routing if you can accept it. / Approach : HL123, runway zero nine is available with a one zero knot tailwind, and it saves you one two minutes. Can you accept?
내 답안 : affirm hl123, our tailwind limit is 15knots and runway 09 tailwind now is 10knots so request landing runway 09 and we can accept 12min delay
** 교정 답안 : Affirm, HL123. Our maximum tailwind for landing is one five knots and runway zero niner has one zero knots, so we can accept it. Request runway zero niner — it saves us one two minutes.
- 판단·근거·두 숫자가 다 있다. 이 섹션에서 가장 잘 쓴 답이다. `AFFIRM` 으로 연 것도 맞다(가부 질문).
- 오독 : **`12min delay` 가 아니다.** 관제사는 "**1 2 분을 절약한다**(saves you)"고 했다. 지연이 아니라 단축이다. 반대로 읽었다.

---

**P1B-Q2** ⚠️
문제 : You are heavy today. With the flaps you have out, the slowest speed you can hold is one eight zero knots. / Approach : HL123, reduce speed to two one zero knots until one two miles. Can you do that?
내 답안 : affirm hl123 , reduce speed 210knots until 12mins, our slowest speed is 180knots and we can accep reduce speed 210knots
** 교정 답안 : Affirm, HL123, reduce speed to two one zero knots until one two miles. Our slowest speed today is one eight zero knots, so two one zero knots is acceptable.
- 판단이 맞다 — 210 은 하한 180 보다 빠르므로 수락. **Q3 와 짝으로 낸 문항인데 이쪽은 맞혔다.**
- 단위 오류 : **`until 12mins` → `until one two miles`.** 거리를 시간으로 바꿔 들었다. 복창에서 단위가 바뀌면 다른 지시가 된다.
- 코멘트 : 마지막 절이 앞을 되풀이한다. `so two one zero knots is acceptable` 로 한 번만 닫는다.

---

**P1B-Q3** ❌
문제 : 🖥 [ MAVIK ] / A dispatch restriction in your technical log today limits you to two three zero knots or less. You can give the controller two three zero knots until MAVIK. / Center : HL123, maintain two six zero knots or greater until MAVIK for spacing. Can you do that?
내 답안 : affrim hl123 speed 260knots or greater until mavik our lowest speed is 180knots
** 교정 답안 : Negative, HL123. Unable two six zero knots or greater — a dispatch restriction in our technical log limits us to two three zero knots or less. We can give you two three zero knots until MAVIK.
- **치명적 오류 : `AFFIRM` 이 아니라 `NEGATIVE` 다.** 오늘의 제한은 **최대 230**이고 관제사는 **260 이상**을 요구했다. 수락할 수 없다.
- **최저 ↔ 최대를 뒤집었다.** 게다가 `our lowest speed is 180knots` 는 **Q2 의 값**을 그대로 끌어왔다. 이 문항의 제한은 하한이 아니라 **상한 230**이다. 두 문항을 나란히 낸 이유가 이 구분이다.
- 누락 : 줄 수 있는 값(**230**)을 주지 않았다. 거부만 하면 관제사는 분리를 다시 짜야 한다.
- **이 유형이 누적 최다 실점이다.** `max` 인지 `min` 인지를 숫자 옆에 적어 두는 것으로만 막을 수 있다.

---

**P1B-Q4** ❌
문제 : 🖥 [ Pembury / Dunmere ] / Your minimum RVR for this approach is 550 metres. You have enough fuel for either airport. You want to land at the first airport you can legally land at. / Approach : HL123, Pembury RVR runway one eight is 450 metres and dropping. Dunmere RVR is 800 metres, one six minutes away. Say your intentions.
내 답안 : hl123 our intention is to land dunmere , pembury runway 18 is over our limit
** 교정 답안 : HL123, our intentions are to land at Dunmere. Our minimum RVR for this approach is 550 metres and Pembury runway one eight is 450 metres, which is below our minimum. Dunmere at 800 metres is above it, and we accept the one six minutes.
- 결론(Dunmere)은 맞다. 그러나 **이유가 거꾸로다.**
- **어휘 오류 : `over our limit` → 반대말이다.** RVR 450 은 최저 550 **미만**이다. `below our minimum` 이라고 해야 한다. `over the limit` 은 "한계를 초과했다"는 뜻이어서, 측풍·무게처럼 **상한**이 있는 값에 쓴다. RVR·활주로 거리는 **하한**이므로 `below minimum` 이다. 이 구분이 Q3 의 실수와 같은 뿌리다.
- 누락 : **두 숫자(450 · 550).** 섹션 Directions 가 `give the controller both figures` 라고 했다.

---

**P1B-Q5** ❌
문제 : 🖥 [ ZENTA ] / Approach : HL123, hold at ZENTA, left turns, maintain 8,000 feet, expect approach clearance at 1125Z. / Record your full readback.
내 답안 : hold at zenta left turn maintain 8000 expoect approach clearanc 1145z hl123
** 정답 : HL123, hold at ZENTA, left turns, maintain 8,000 feet, expect approach clearance at 1125Z.
- **숫자 오류 : `1145z` → `1125Z`.** 네 요소 중 셋은 정확한데 시각 하나가 20분 틀렸다.
- 이 값이 **다음 문항의 계산 근거**다. Q6 에서 "1105Z 현재"와 비교해 지연이 20분인지 40분인지가 갈린다. 복창의 숫자 하나가 다음 판단을 무너뜨린 전형적인 사례다.
- 체공 복창 네 요소(픽스·선회 방향·고도·EAT)는 전부 필수다. 구조는 맞게 잡았다.

---

**P1B-Q6** ❌
문제 : It is now 1105Z and you are holding at ZENTA. Your fuel endurance is one hour one zero minutes and your diversion to Dunmere needs three five minutes. You would rather stay if your fuel allows it. / Approach : HL123, are you able to accept that delay, or do you want to divert now?
내 답안 : we can accept divert it takes only 5min , and our endurace is 1hr 10min and we can reserve enough
** 교정 답안 : HL123, we are able to accept the delay. It is now 1105Z and our approach clearance is expected at 1125Z, so that is two zero minutes. Our fuel endurance is one hour one zero minutes and our diversion to Dunmere needs three five minutes, so we can hold and still divert if we have to.
- **판단이 지문과 반대다.** 지문은 `You would rather stay if your fuel allows it` 이고, 연료는 **허용한다** — 지연 20분 + 교체 35분 = 55분 < 1시간 10분. 그러므로 **체공 수락**이다.
- **숫자를 지어냈다 : `it takes only 5min`.** 5분은 어디에도 없다. 지연은 20분(1125Z − 1105Z), 교체는 35분이다. 값이 없을 때 지어내지 말고 **지문에 있는 두 숫자를 계산**한다.
- 선택 질문이므로 `AFFIRM/NEGATIVE` 대신 **어느 쪽인지**를 말해야 한다 — 그건 맞게 했다.
- Q5 의 1145Z 오류가 여기까지 번졌다. 다만 1145Z 로 계산해도(40분 + 35분 = 75분 > 70분) **거부**가 되므로 결론은 달라졌겠지만, 답안의 `5min` 은 두 계산 어느 쪽과도 맞지 않는다.

---

**P1B-Q7** ❌
문제 : You are at 9,000 feet, still in heavy rain and moderate turbulence. You want to stay on heading one four zero for five more miles to get out of it. / Approach : HL123, the last cell cleared the field one zero minutes ago, so you should be clear of the weather now? / Respond accordingly and make a request with a reason.
내 답안 : we are in heavy rain and moderate turbulence so request heading 140 and request divert hl123
** 교정 답안 : Negative, HL123. We are still in heavy rain and moderate turbulence at 9,000 feet. Request to maintain heading one four zero for five more miles to get clear of it.
- **누락 : `NEGATIVE`.** 관제사는 "날씨를 벗어났겠지요?"라고 **확인을 요구**했고 사실은 아니다. 첫 단어가 NEGATIVE 여야 그가 자기 그림이 틀렸음을 안다.
- **지어낸 요청 : `request divert`.** 지문에 교체공항은 한 마디도 없다. 원한 것은 **현 기수로 5마일 더**다. 요청을 지어내면 관제사는 전혀 다른 조정을 시작한다.
- 누락 : **`for five more miles`** — 목표값. 기수만 요청하면 언제까지인지 모른다.
- 잘한 것 : 관제사의 추정을 실제 기상으로 정정한 것.

---

## 약점 C. 값 유지 — 10턴

**P2A-Q1** ❌
문제 : [Initial Situation] level at flight level two one zero, 60 miles from PERNO, inbound Alderton. Fuel endurance two hours three five minutes, one six three persons on board, required landing distance 2,200 metres, slowest speed one eight zero knots. / ☞ Contact Alderton Approach, report your position and level, and request descent.
내 답안 : alderton approahc hl123 , level at fl210 60jmiles from pernoum request inbound alderton airport
** 교정 답안 : Alderton Approach, HL123, level at flight level two one zero, 60 miles from PERNO, inbound Alderton. Request descent.
- **누락된 기능 : `request descent`.** 지시문이 세 가지(기관 호출·위치와 고도·강하 요청)를 명시했는데 세 번째를 `request inbound alderton airport` 로 바꿨다. 그건 요청이 아니라 목적지 통보다.
- 고도·위치는 맞다. `level at` 으로 현재 상태를 말한 것도 맞다.
- `pernoum` — PERNO. 이 문항에는 클루가 없었다.

---

**P2A-Q2** ✅
문제 : 🖥 [ PERNO ONE arrival ] / ☞ Listen to the controller, give a full readback, and inquire about the freezing level. / Approach : HL123, Alderton Approach, descend to one one thousand, expect the PERNO ONE arrival, ILS runway two seven. Be advised, icing reported in cloud on the arrival.
내 답안 : descent 110000 expect perno 1 arrival ils runway 27 , hl123 and request frezzing level
** 정답 : HL123, descend to one one thousand, expect the PERNO ONE arrival, ILS runway two seven. Request the freezing level.
- 필수 복창 세 요소(고도·arrival·활주로)를 다 담고, `icing reported` 는 정보라서 복창하지 않았다 — 판단이 정확하다.
- `request frezzing level` 이 **REQUEST + 명사구**로 맞다.
- `110000` 은 0 을 하나 더 친 오타로 보고 넘겼다. 다만 숫자는 **값이 틀리면 그대로 감점**이므로, 11,000 은 `one one thousand` 으로 적는 습관을 들이는 편이 안전하다.

---

**P2A-Q3** ❌
문제 : ☞ Listen to the controller, give a full readback, and tell him what you can do instead. / Approach : HL123, the freezing level is 7,000 feet. Reduce speed to one six zero knots until one zero miles.
내 답안 : roger 7000 reduce spped 160 until 10miles hl123
** 교정 답안 : HL123, freezing level 7,000 feet. Unable one six zero knots — at today's weight the slowest speed we can hold is one eight zero knots. We can maintain one eight zero knots until one zero miles.
- **누락된 기능 전체 : "tell him what you can do instead".** Initial Situation 이 **최저속도 180**을 줬고 관제사는 **160**을 요구했다. 받을 수 없는 지시인데 `roger` 로 수락했다.
- 표준교신용어 오류 : **불가한 지시에 `ROGER` 를 쓸 수 없다.** 내용 없이 단독으로 쓰면 "알아들었고 하겠다"로 읽힌다.
- **P1B-Q3 와 똑같은 실패**다. 한 세트 안에서 최저속도 함정을 세 번(Q2 수락·Q3 거부·여기) 냈는데, 거부해야 하는 두 곳을 다 놓쳤다.

---

**P2A-Q4** ⚠️
문제 : [Situation Update] Passing 12,000 feet you get a WING ANTI-ICE FAULT caption for the left wing, and ice is building on that wing. You want to descend to 6,000 feet to get below the freezing level. Your slowest speed is now two zero zero knots and your required landing distance is now 2,700 metres. / ☞ Report your problem to the controller, tell him what has changed, and make a request with a reason.
내 답안 : approach hl123 , we have left wing icing , and request descent 6000 due to frezzing and our slowest speed limit changedd to 200 knots and we require 2700meters landing distance available
** 교정 답안 : Approach, HL123, we have a WING ANTI-ICE FAULT caption for the left wing and ice is building on that wing. Two things have changed — our slowest speed is now two zero zero knots and our required landing distance is now 2,700 metres. Request descent to 6,000 feet to get below the freezing level.
- **세 기능을 다 했고, 바뀐 값 두 개를 다 말했다.** 이 세트가 겨냥한 핵심을 이 문항에서는 해냈다. 가장 잘한 답이다.
- 누락된 정보 : **고장 이름.** `left wing icing` 은 증상이고, 실제는 **WING ANTI-ICE FAULT** 다. 착빙은 결과이고 원인은 방빙 계통 고장이다 — 관제사·공항이 대비할 내용이 달라진다.
- 어휘 오류 : `we require 2700meters landing distance available` — `required landing distance` 와 `landing distance available` 은 **다른 두 값**이다. 내 쪽 값은 **required** 다. (Q5 에서 이 혼동이 그대로 드러난다.)
- 코멘트 : 요청을 가운데 끼워 넣어 "바뀐 값"이 뒤로 밀렸다. **문제 → 바뀐 값 → 요청** 순서로 끊는 편이 듣기 쉽다.

---

**P2A-Q5** ⚠️
문제 : 🖥 [ Alderton / Wexcombe ] / ☞ Listen to the controller, give a full readback, and state your decision with a reason. / Approach : HL123, roger, descend to 6,000 feet. Alderton runway two seven gives you 2,500 metres. Wexcombe has 3,000 metres and it's one two minutes away. What would you like?
내 답안 : descent 6000 hl123 , and our available distance is 2700m so request wexcombe , we can accept 12min delay
** 교정 답안 : HL123, descend to 6,000 feet. We now require 2,700 metres and Alderton runway two seven gives us only 2,500, so request Wexcombe — 3,000 metres is sufficient and we accept the one two minutes.
- 판단이 맞다 — 2,500 < 2,700 이므로 Alderton 은 못 쓴다. **갱신된 값 2,700 으로 비교**한 것이 이 세트의 목표였고 그걸 했다.
- 어휘 오류 : **`our available distance is 2700m`** — 2,700 은 내가 **필요한(required)** 거리다. `available` 은 활주로가 **주는** 거리(2,500 · 3,000)다. 두 낱말을 바꿔 쓰면 뜻이 정반대가 되어, 관제사는 "2,700 이 있으니 괜찮다"로 들을 수 있다.
- 누락 : **거부하는 쪽의 숫자(2,500).** 두 숫자를 나란히 말해야 이유가 성립한다.

---

**P2A-Q6** ❌
문제 : [Situation Update] You are now level at 6,000 feet, below the freezing level. There is still ice on the left wing. You want the fire service standing by as a precaution. / ☞ Listen to the controller and answer both of his questions. / Approach : HL123, you're below the freezing level now, so I take it the ice has gone. Is that right, and do you want the fire service standing by?
내 답안 : afirm hl123, we are level at 6000 below frezzing level , but the icing is still on the left wing , so request fire services standing by
** 교정 답안 : Negative, HL123. We are level at 6,000 feet below the freezing level, but there is still ice on the left wing. And affirm, we would like the fire service standing by as a precaution.
- **표준교신용어 오류 : 첫 단어가 `AFFIRM` 이 아니라 `NEGATIVE` 다.** 그가 물은 것은 "얼음이 없어졌지요, 맞습니까?"이고 **사실이 아니다**. 바로 뒤에 `but the icing is still on the left wing` 으로 내용을 정정한 것은 맞지만, **첫 단어가 뜻을 반대로 못 박아 버린다.** 무선에서는 첫 단어가 판단의 기준이다.
- 질문이 두 개(얼음 상태 / 소방대)인데 둘 다 답한 것은 맞다. 두 번째에는 `affirm` 을 붙여 구분한다.
- 이 세트에서 **AFFIRM/NEGATIVE 를 뒤집은 것이 세 번**(P1B-Q3 · P1B-Q7 · 여기)이다.

---

**P2A-Q7** ❌
문제 : ☞ Listen to the controller and provide the requested information. / Approach : HL123, understood. Wexcombe's asking for your fuel endurance and how many people you've got on board.
내 답안 : our endurance is 2hr 35min and 136 souls on board hl123
** 정답 : HL123, our fuel endurance is two hours three five minutes and one six three persons on board.
- **숫자 오류 : `136` → `163`.** Initial Situation 의 값은 **one six three** 다. 세 자리를 뒤집어 말했다.
- 연료(2시간 35분)는 여섯 턴을 건너 정확히 가져왔다. **같은 지문의 두 숫자 중 하나만 살아남았다** — 적어 두는 것은 됐고, **적어 둔 것을 읽는 단계**에서 틀렸다는 뜻이다.
- 숫자를 `163` 처럼 붙여 적지 말고 **`1-6-3`** 으로 끊어 적어 두면 읽을 때 뒤집히지 않는다.

---

**P2A-Q8** ✅
문제 : ☞ Listen to the controller, give a full readback, and tell him whether you can do that with a reason. / Approach : HL123, turn right heading three zero zero, descend to 4,000 feet, reduce speed to two two zero knots. Can you do that speed? Contact Wexcombe Approach on 126.85.
내 답안 : affirm hl123 , turn right heading 300 descent 4000 reduce speed 220 our slowest acceptable speed is 200 , then contact wexcon approahc 126.85
** 정답 : Affirm, HL123, turn right heading three zero zero, descend to 4,000 feet, reduce speed to two two zero knots — our slowest acceptable speed is two zero zero knots, so we can do that. Contact Wexcombe Approach on 126.85.
- **이 세트의 최고 답안이다.** 필수 복창 네 요소(기수·고도·속도·**주파수**)를 다 담고, 가부 질문에 `AFFIRM` 으로 열고, 이유로 **갱신된 최저속도 200**을 댔다.
- 220 ≥ 200 이므로 수락이 맞다. Q3 에서 놓친 판단을 여기서는 정확히 했다.
- 다른 문항도 이 형태로 쓰면 된다 : **판정어 → 복창 → 이유(숫자) → 주파수.**

---

**P2A-Q9** ❌
문제 : ☞ You are now with a new controller who has none of your figures. Listen to him and answer both of his questions. / Approach : HL123, Wexcombe Approach, radar contact. I've got nothing on you yet — say your slowest speed and the number of persons on board.
내 답안 : wexcon approach hl123, our slowest speed is 200 nots and 136 souls on board
** 정답 : Wexcombe Approach, HL123, our slowest speed is two zero zero knots and we have one six three persons on board.
- 최저속도를 **갱신값 200**으로 말했다 — 180(초기값)이 아니라 200 을 고른 것이 정확하다. 바뀐 값을 바꿔 말하는 것은 됐다.
- **숫자 오류 : `136` → `163`.** Q7 의 오류를 **그대로 두 번째로 반복**했다. 처음 틀린 값이 메모에 그대로 남아 두 번 나갔다는 뜻이다 — 새 관제사는 이제 틀린 인원으로 브리핑한다.
- 되묻기 자체에 짜증을 내지 않고 그냥 다시 준 것은 맞다.

---

**P2A-Q10** ❌
문제 : [Situation Update] The ice has now gone from the left wing. The fault remains, so your figures do not change. / ☞ Listen to the controller, give a full readback, and tell him about the ice and the fault. / Approach : HL123, turn left heading zero niner zero, descend to 3,000 feet until established, cleared for the ILS runway one two approach, contact Wexcombe Tower on 118.75.
내 답안 : left tun heading 090 descent 3000 until established cleared ils runway 12 approach , and the ice is gone contact westron tower 118.75
** 교정 답안 : HL123, turn left heading zero niner zero, descend to 3,000 feet until established, cleared for the ILS runway one two approach, contact Wexcombe Tower on 118.75. The ice has now gone from the left wing, but the anti-ice fault remains, so our figures are unchanged.
- **복창이 완벽하다.** 기수·고도·**`until established`**·접근 허가·주파수 다섯 요소를 하나도 빠뜨리지 않았다. 조건절을 지운 적이 없다.
- **누락된 기능 : "and the fault".** 지시문이 **얼음과 고장 둘 다**를 요구했다. 얼음만 말하면 관제사는 "정상으로 돌아왔다"로 듣는다. **고장은 남아 있고 그래서 숫자(최저속도 200·필요거리 2,700)가 그대로**라는 것이 Tower 가 알아야 할 내용이다.
- 코멘트 : **콜사인이 없다.** 그리고 `the ice is gone` 을 주파수 변경 사이에 끼워 넣어, 복창과 보고의 경계가 사라졌다. 복창을 끝까지 하고 그 뒤에 보고를 붙인다.

---

## 약점 D. 발신 — 7문항

**P2B-Q1** ❌
문제 : 🖥 [ Stanmore Control ] / You are level at flight level three three zero. You are burning more fuel than planned at this level. You want flight level three seven zero. Contact Stanmore Control. / Make a request with a reason.
내 답안 : stanmore approach hl123 , level at fl300 , 60minles from stanmore request inbount for stanmore airport information d
** 교정 답안 : Stanmore Control, HL123, level at flight level three three zero. Request flight level three seven zero — we are burning more fuel than planned at this level.
- **문항을 완전히 다르게 읽었다.** 지문은 순항 중 **고도 변경 요청**이고, 답안은 **도착 공항 최초 호출**이다. 요청(FL370)도 이유(연료)도 없다.
- 지어낸 정보 : `60 miles from stanmore`, `information d`. Stanmore 는 공항이 아니라 **관제기관(Control)** 이다. `Control` 은 항로, `Approach` 는 공항 접근, `Ground/Tower` 는 공항 지상·관제탑이다 — 기관 이름의 꼬리말이 내가 어디에 있는지를 말해 준다.
- 숫자 오류 : `fl300` → **FL330**.
- 20초 문항이다. **기관 → 콜사인 → 현재 고도 → REQUEST + 명사구 + 이유** 한 문장으로 끝낸다.

---

**P2B-Q2** ❌
문제 : 🖥 [ Alderton Delivery / GOSMA TWO / LIDRO ONE ] / At today's weight you cannot meet the climb gradient on the GOSMA TWO departure. You want the LIDRO ONE departure instead. Contact Alderton Delivery. / Report your situation and make a request.
내 답안 : alderton delivery hl123, request gosma 2 lidro 1 arrival
** 교정 답안 : Alderton Delivery, HL123. At today's weight we cannot meet the climb gradient on the GOSMA TWO departure. Request the LIDRO ONE departure instead.
- **클루를 그대로 읽었다.** 화면의 세 칸은 **철자를 알려주는 것**이고, 그중 무엇을 원하는지는 지문이 정한다 — 원하는 것은 **LIDRO ONE 하나**다. 둘을 같이 말하면 관제사는 무엇을 줘야 할지 모른다.
- 어휘 오류 : **`arrival` → `departure`.** GOSMA TWO·LIDRO ONE 은 출발 절차다. 출발·도착을 바꿔 말하면 다른 절차를 받는다.
- **누락된 기능 : `Report your situation`.** 상승구배를 못 맞춘다는 이유가 없으면 관제사는 왜 바꾸려는지 모른다.

---

**P2B-Q3** ✅
문제 : 🖥 [ ROLDA ] / Center : HL123, reduce speed to two five zero knots until ROLDA. / Record your full readback.
내 답안 : reduce speed 250 until rolda hl123
** 정답 : HL123, reduce speed to two five zero knots until ROLDA.
- 정확하다. 속도와 조건(until ROLDA)을 다 담았다.
- 이 문항은 **다음 문항의 전제**로 넣은 것이다. 여기서 들은 **250** 을 Q4 에서 써야 했다.

---

**P2B-Q4** ❌
문제 : Two minutes later you see that you selected the wrong speed by mistake. You are at two eight zero knots and nobody has said anything to you. You are reducing now. Contact Stanmore Control. / Report your status and say your intentions.
내 답안 : stanmore approach hl123 , we have had set 280 knots by mistake request reduce speed 260knots
** 교정 답안 : Stanmore Control, HL123, correction — we set two eight zero knots in error. We were cleared two five zero knots until ROLDA and we are reducing to two five zero now.
- **숫자 오류 : `260` → `250`.** 바로 앞 문항에서 정확히 복창한 값을 두 문항 뒤에 바꿔 말했다. **적어 두고 쓰라고 이어 놓은 두 문항인데, 그 사이에서 값이 변했다.**
- 표준교신용어 오류 : **이미 받은 허가를 `request` 하지 않는다.** 250 은 이미 허가받은 값이므로 `we are reducing to two five zero now` — **지금 하고 있는 조치**를 보고한다.
- 정정은 **3단**이다 : 현재 상태(280) → 받은 허가(250) → 조치(지금 줄이는 중). 가운데가 빠졌다.
- 기관명을 `approach` 로 바꿔 불렀다 — 다만 이 문항은 **세트 쪽 결함**(Center ↔ Stanmore Control)이 겹쳐 있으므로 기관명은 감점하지 않았다.

---

**P2B-Q5** ❌
문제 : 🖥 [ Dunmere ] / Fog is forecast at Dunmere, your destination. You want the latest Dunmere weather before you start your descent. Contact Stanmore Control. / Make a request with a reason.
내 답안 : request dirct dunmere hl123
** 교정 답안 : Stanmore Control, HL123. Request the latest Dunmere weather — fog is forecast at our destination and we would like it before we start our descent.
- **다른 것을 요청했다.** 원한 것은 **기상**이고, `request direct dunmere` 는 **직항 경로**다. 클루의 `Dunmere` 는 철자를 준 것이고, 무엇을 요청할지는 지문에 적혀 있었다.
- 누락 : 기관 호출, 이유(안개 예보), 시점(강하 시작 전). 전체가 다섯 낱말이라 20초 중 3초밖에 쓰지 않았다.
- `request the latest Dunmere weather` — REQUEST + 명사구. 정보를 원할 때의 정해진 형태다.

---

**P2B-Q6** ⚠️
문제 : One minute ago, passing 5,000 feet, about five miles south of the field, a green laser from the ground lit up your cockpit. You want the controller to know about it. Contact Pembury Approach. / Make a report.
내 답안 : tenbury approach hl123 , 1min ago during passing 5000 , we had have raizer on cockpick from 5miles from south of fied
** 교정 답안 : Pembury Approach, HL123. Be advised, one minute ago, passing 5,000 feet about five miles south of the field, a green laser from the ground lit up our cockpit.
- **내용은 다 담았다** — 언제(1분 전)·고도(5,000)·위치(남쪽 5마일)·무슨 일(레이저). 시차형 보고의 네 요소를 갖췄다.
- 문법 오류 : `we had have raizer` — 시제가 겹쳤다. `a green laser lit up our cockpit` 처럼 **과거 단문**으로 쓴다.
- 누락 : **`green`.** 레이저 보고에서 색은 경찰이 발사 지점을 찾는 단서라 실제로 필수 항목이다.
- 기관명 `tenbury` — 세트 결함 ①(클루 없음). 감점하지 않았다.

---

**P2B-Q7** ⚠️
문제 : You are holding short of runway zero nine at Alderton. The oil quantity on engine number two is dropping. You want to go back to the stand. Contact Alderton Tower. / Report your status and make a request.
내 답안 : ground hl123 holding short of 09 and our no2 oil is drop , so request taxi back to stand
** 교정 답안 : Alderton Tower, HL123, holding short of runway zero niner. The oil quantity on engine number two is dropping. Request taxi back to the stand.
- 두 기능(상태 보고·요청)을 다 했고 순서도 맞다.
- 문법 오류 : `our no2 oil is drop` → `the oil quantity on engine number two is dropping`. **무엇이** 떨어지는지(quantity)와 **진행 중**임(-ing)을 살린다.
- 기관 : 지문은 Tower 를 지정했지만 **스탠드 복귀는 Ground 의 일**이라 `ground` 도 변호 가능하다 — 세트 결함 ③으로 보고 감점하지 않았다. 다만 공항명(`Alderton`)은 붙여야 한다.

---

## 약점 E. 90초 자유응답 — 4문항 전부 무응답 (각 Level 1)

**P2C-Q1** ❌ 무응답
문제 : Follow up question. In this situation, you told the controller about the fault and what had changed. Which figures changed, and why did he need to know them? In your role as a pilot, how do you make sure you use the latest figure and not the old one? Give an example.
내 답안 : (무응답)
** 참고 답안 : In that situation two figures changed when we got the WING ANTI-ICE FAULT caption. The slowest speed we could hold went up from one eight zero knots to two zero zero knots, and the landing distance we required went up from 2,200 metres to 2,700 metres. He needed both of them because they were the two numbers he was working with. He had already asked us for one six zero knots, which we could no longer accept, and he was about to offer us a runway with 2,500 metres, which was now too short. If I had not given him the new figures he would have planned the approach around numbers that no longer existed.
In my role as a pilot, the way I make sure I use the latest figure is that I never erase the old one. I cross it out and write the new one beside it, with the time next to it, so the page shows me that the figure moved and which way. I keep the performance figures in one box on the right of the page — fuel endurance, persons on board, required landing distance, minimum speed — so there is only one place to look, and when the controller asks I read from that box instead of from memory.
An example is the landing distance on this flight. I had 2,200 metres written down from the start, and it became 2,700 metres passing twelve thousand feet. Because the old figure was crossed out and not rubbed out, when the controller offered me Alderton with 2,500 metres I could see at once that it was five hundred short, and I asked for Wexcombe instead.
- 무응답이므로 Level 1 이다. 90초 문항은 **11세트 연속 가장 큰 실점 구간**이고, 이번에도 네 문항을 전부 비웠다.
- 3부 구조를 지킨다 : ① 바뀐 값과 그가 그것을 왜 필요했는지 ② 최신 값을 쓰는 내 방법 ③ 예시 하나.
- ① 에서 **두 값과 그 전후**(180→200, 2,200→2,700)를 숫자로 말한다. "값이 바뀌었다"로 뭉개면 답이 아니다.

---

**P2C-Q2** ❌ 무응답
문제 : Follow up question. In this situation, the controller thought the ice had gone, but it had not. Why was it important to correct him straight away? From your own experiences, how do you report a problem that is still going on? Give an example.
내 답안 : (무응답)
** 참고 답안 : It was important to correct him straight away because he was about to stop treating us as an aircraft with a problem. He said he took it that the ice had gone, and if I had answered affirm he would have cancelled the fire service, given us a normal approach and put traffic behind us. The ice was still on the left wing, so our minimum speed and our landing distance were still the degraded ones. One word from me would have left him with the wrong picture at the point where he was making those decisions, and a wrong picture is worse than no picture.
From my own experience, the way I report a problem that is still going on is to say three things in the same transmission: what the condition is now, what has not changed, and what I still need. I begin with negative or with the present tense so he hears straight away that it is not over — "negative, we still have ice on the left wing" — and then I repeat the figures that are still degraded, because he may have written down the old ones. I avoid saying it is under control or we are managing it, because that sounds like the problem has finished when it has not.
An example is this flight. We were below the freezing level and he assumed the ice had gone. I answered negative, told him the ice was still on the left wing, repeated that our minimum speed was two zero zero knots and our required landing distance 2,700 metres, and asked for the fire service to stand by as a precaution. He kept us on the longer runway at Wexcombe, which he would not have done if I had agreed with him.
- 질문이 세 부분이다 : 왜 즉시 정정해야 하는가 / 진행 중인 문제를 보고하는 내 방법 / 예시.
- 첫 부분은 **관제사가 그 믿음으로 무엇을 할 뻔했는지**로 답한다(소방대 취소·정상 접근·후속기 투입). 그게 "왜 중요한가"의 답이다.
- 이 문항은 **P2A-Q6 에서 `AFFIRM` 으로 답한 것**을 되묻는 자리다. 롤플레이에서 틀린 것을 Follow-up 에서 한 번 더 묻는 구조이므로, 두 곳이 같이 틀리면 실점이 두 배가 된다.

---

**P2C-Q3** ❌ 무응답
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
내 답안 : (무응답)
** 참고 답안 : We were HL123, level at flight level two one zero, 60 miles from PERNO and inbound to Alderton. Our fuel endurance was two hours three five minutes, we had one six three persons on board, our required landing distance was 2,200 metres and the slowest speed we could hold was one eight zero knots.
On the descent the controller told us the freezing level was 7,000 feet and asked us to reduce to one six zero knots, which was below our minimum, so we gave him one eight zero knots instead. Then, passing twelve thousand feet, we got a WING ANTI-ICE FAULT caption for the left wing and ice began to build on that wing. The nature of the incident was a loss of ice protection on one wing, and the consequence was a performance problem rather than a handling problem: our slowest speed went up to two zero zero knots and the landing distance we required went up to 2,700 metres.
That made our destination unusable. Alderton runway two seven gave us 2,500 metres, two hundred less than we needed, so we asked for Wexcombe, which had 3,000 metres and was one two minutes away. We also asked for descent to 6,000 feet to get below the freezing level, and the controller gave it.
Below the freezing level the controller assumed the ice had gone. It had not, so we corrected him and asked for the fire service to stand by. We passed our fuel and persons on board for Wexcombe, were handed to Wexcombe Approach, who had none of our figures and asked for our minimum speed and persons on board again, and were then vectored onto the ILS for runway one two. By that point the ice had cleared, but the fault remained, so our figures did not change. We did not declare an emergency, because the aircraft was controllable and we had the fuel and a long enough runway.
- 시간 순서로 말한다 : 초기 상태 → 속도 거절 → 고장 → 바뀐 값 → 공항 변경 → 얼음 정정 → 핸드오프 → 착륙 → 비상 선포를 안 한 이유.
- **숫자를 넣어야 들은 증거가 된다** : 180 · 160 · 200 · 2,200 · 2,700 · 2,500 · 3,000 · 163.
- `the nature of the incident` 을 한 문장으로 못 박는다 — "한쪽 날개의 방빙 상실, 조종 문제가 아니라 성능 문제".

---

**P2C-Q4** ❌ 무응답
문제 : How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
내 답안 : (무응답)
** 참고 답안 : On the whole I think he handled it well. When I told him about the fault and the two figures that had changed, he gave me descent to 6,000 feet at once, and then he gave me the landing distance available at both airports and the time to the second one, instead of telling me where to go. That is the right division of work, because the landing performance is mine to calculate and only I know what the aircraft needs. He also accepted the speed I offered him without arguing, which matters when a figure is a hard limit and not a preference.
There are two things I would have done differently. The first is the assumption about the ice. He told me the ice had gone rather than asking me what the ice was doing, and if I had been slow or busy I might have agreed with him. A question is safer than an assumption when the answer changes what he does next. The second is the handover. Wexcombe Approach had none of my figures, so I had to say my minimum speed and the number of persons on board a second time while I was being vectored and descending, which is our highest workload. Those numbers had already been passed once and should have gone across in the coordination.
From a pilot's point of view, what helped most was that he never pressed me for a decision, and what I would ask for next time is the runway condition and braking action at Wexcombe, not only the distance available. With ice on a wing and a longer landing distance required, the distance alone does not tell me whether I can stop.
- **칭찬 → 개선점 → 조종사 관점** 세 부분이다. "잘했다"로만 끝내면 둘째·셋째를 버린 것이다.
- 개선점은 **구체적 행동**으로 말한다. 이 세트에서는 **얼음을 단정한 것**과 **핸드오프 때 수치가 넘어가지 않은 것** 두 곳이 할 말이 가장 많다.
- 관제사를 비난하지 않는다. 역할 분담(정보는 관제사, 판단은 조종사)의 언어로 말한다.

---

## ICAO 6개 항목 등급

| 항목 | 등급 | 근거 |
|---|---|---|
| Pronunciation | **평가 보류** | 텍스트 답안. 등급 계산에서 제외(§6-1-1) |
| Structure | **2** | 뜻이 서지 않는 문장이 반복된다 — `how long will it to wait`, `our take off runway limit is require to take off at m1`, `our intention is medical team standing by`, `we had have raizer`, `our no2 oil is drop`. 시제(`we loose`·`had have`)와 명사구 연결이 무너진다 |
| Vocabulary | **2** | 반대말을 쓴 것이 네 번 : `over our limit`(실제는 below minimum) · `available distance`(실제는 required) · `12min delay`(실제는 saves) · `arrival`(실제는 departure). 단어 하나가 뜻을 뒤집었다 |
| Fluency | **2** | 20초 문항에 다섯 낱말로 끝낸 답(P2B-Q5)과, 30초 문항에서 기능 하나만 하고 멈춘 답이 섞여 있다. 90초 문항 4개는 전부 비었다 |
| Comprehension | **2** | 관제사가 말한 것을 다르게 들었다 : `one two miles`→12분, `1125Z`→1145Z, `saves you`→지연, `Stanmore Control`→공항 접근관제, `FL330`→FL300 |
| Interactions | **2** | AFFIRM/NEGATIVE 를 뒤집은 것이 세 번(P1B-Q3·P1B-Q7·P2A-Q6), 묻지 않은 것을 요청한 것이 두 번(P1B-Q7 divert·P2B-Q5 direct), 복합 지시에서 기능을 빠뜨린 것이 일곱 번 |

**최종 등급 = 6개 항목 중 최저값 = Level 2.** 실전 세트 EPTA_06~11 이 연속 Level 2 였고,
드릴 세트에서도 같은 벽에 걸렸다.

---

## 태스크별 총평

**약점 A (복창 + α) — 11문항 중 ✅3 / ⚠️3 / ❌5.**
**복창 자체는 거의 다 맞는다.** 활주로 관련 지시(`hold short of runway zero nine`), 조건절
(`until established`), 주파수, 다섯 요소 접근 허가를 하나도 빠뜨리지 않았다. 무너지는 것은
**언제나 α 쪽**이다 — Q2 는 앞에서 들은 값을 안 말했고, Q7 은 의도의 본체를 빼먹었고, Q9 는
세 기능 중 하나 반만 했고, Q10 은 복행했다는 사실 자체가 없고, Q11 은 20분을 10분으로 바꿨다.
**지시문이 요구하는 기능 수를 손가락으로 세고 시작하는 것**이 이 섹션의 유일한 대책이다.

**약점 B (판단 + 이유) — 7문항 중 ⚠️2 / ❌5.**
수락해야 하는 문항(Q1·Q2)은 맞혔고 **거부해야 하는 문항은 전부 틀렸다.** Q3 은 상한 230 을
하한처럼 읽어 AFFIRM 했고, Q4 는 `below minimum` 을 `over our limit` 으로 뒤집었고, Q6 은
연료가 허용하는데 divert 를 골랐고, Q7 은 NEGATIVE 없이 묻지도 않은 divert 를 요청했다.
**숫자를 들을 때 `max` / `min` 을 숫자 옆에 적지 않는 것이 뿌리다.** 230 이 아니라 `max 230`,
550 이 아니라 `min 550` 으로 적어야 판단이 뒤집히지 않는다.

**약점 C (값 유지) — 10턴 중 ✅2 / ⚠️2 / ❌6.**
**바뀐 값을 바꿔 말하는 것은 성공했다** — Q4 에서 두 값(200·2,700)을 다 보고했고, Q5 에서
2,700 으로 비교했고, Q9 에서 180 이 아니라 200 을 말했다. 이것이 WEAK_01 에서 겨냥한 약점이고
개선됐다. 반면 **안 바뀐 값이 틀렸다** — 인원 163 을 Q7·Q9 에서 두 번 `136` 으로 말했다.
메모는 됐고 **읽는 단계에서 뒤집혔다.** 세 자리 숫자는 `1-6-3` 으로 끊어 적는다.
그리고 Q3 에서 최저속도 함정을 또 놓쳤다(B-Q3 과 동일).

**약점 D (발신) — 7문항 중 ✅1 / ⚠️2 / ❌4.**
세트 결함 셋(클루 없음·기관 불일치·수신자 애매)을 감점에서 빼고도 네 문항이 틀렸다.
공통점은 **지문을 끝까지 읽지 않은 것**이다. 발신 문항은 ATC 대사가 없으므로 **지문이 유일한
근거**인데, Q1 은 요청 자체를 다른 것으로 바꿨고, Q2 는 클루를 읽었고, Q5 는 기상 대신 직항을
요청했다. 20초는 **기관 → 콜사인 → 현재 상태 → REQUEST + 명사구 + 이유** 한 문장에 충분하다.

**약점 E (90초) — 4문항 전부 무응답.**
**11세트 연속 이 구간을 비우거나 무너진다.** 이번에는 아예 응시하지 않았다. 다음 세트에서는
다른 무엇을 포기하더라도 90초 네 문항을 먼저 채우는 편이 등급에 유리하다 — 최종 등급이 최저값
규칙이라, 자유응답을 비우는 동안은 Fluency·Interactions 가 올라갈 길이 없다.

---

## 다음 학습 과제

### 반복되는 약점 3개

1. **상한·하한을 뒤집는다 (최우선, 4세트 연속).**
   P1B-Q3(max 230 을 하한처럼), P1B-Q4(`over our limit` ↔ below minimum), P2A-Q3(min 180 무시),
   WEAK_01 P1B-Q2 와 EPTA_11 P1B-Q2 도 같은 구조였다. 숫자를 적을 때 **낱말을 같이** 적는다.

2. **복합 지시에서 기능 하나를 버린다 (7회).**
   P1A-Q2(앞 값), P1A-Q7(착륙 의도), P1A-Q9(그의 사정·WILCO), P1A-Q10(복행 사실),
   P2A-Q1(강하 요청), P2A-Q10(고장), P2B-Q2(상황 보고). 지시문의 동사(`tell`·`inquire`·
   `acknowledge`·`report`·`request`)를 **세어 두고** 하나씩 지운다.

3. **지문에 있는 값을 지어내 바꾼다.**
   `two zero minutes`→10분(P1A-Q11), `163`→136(P2A-Q7·Q9), `250`→260(P2B-Q4),
   `FL330`→FL300(P2B-Q1), `1125Z`→1145Z(P1B-Q5), 그리고 어디에도 없는 `5min`(P1B-Q6).
   **값이 떠오르지 않으면 지어내지 말고 Say again 을 쓴다** — 문항당 한 번 쓸 수 있다.

### 외워야 할 표현 5개

| 영어 | 한국어 뜻 | 쓰는 자리 |
|---|---|---|
| `Unable (값) — our maximum is (값)` | (값) 불가 — 우리 최대치는 (값)이다 | 상한을 넘는 지시를 거부할 때. `over our limit` 대신 |
| `(값) is below our minimum` | (값)은 우리 최저치 미만이다 | RVR·활주로 거리처럼 **하한**이 있는 값. `over our limit` 은 틀렸다 |
| `required landing distance` ↔ `landing distance available` | 필요 착륙거리 ↔ 사용 가능 착륙거리 | 내 쪽 값은 required, 활주로가 주는 값은 available |
| `Earlier we were told to expect (값)` | 앞서 (값)으로 예상한다고 들었다 | 이전 교신의 값을 근거로 되물을 때 |
| `correction — we set (값) in error, we were cleared (값), now (조치)` | 정정 — (값)을 잘못 설정했고, 허가는 (값)이었으며, 지금 (조치) 중이다 | 자기 실수를 정정하는 3단 |
