# EPTA_08 채점 결과 — 2026-11-01 (세션 20261101-124730, **음성 응시**)

32/32 전부 응답. 무응답 0.

**90초 문항 3개(P2A-Q11 · P2C-Q1 · P2C-Q2)는 서버 전사가 실패했지만 녹음은 남아 있었다.**
`practice/transcribe.py` 를 새로 만들어 ffmpeg 로 55초씩 쪼개 다시 전사했고, **세 문항 모두
살려서 정상 채점**했다. 무응답으로 처리하지 않았다.

| | EPTA_06 | SAMPLE_01 | EPTA_07 | **EPTA_08** |
|---|---|---|---|---|
| ✅ | 11 | 15 | 14 | **11** |
| ⚠️ | 14 | 16 | 12 | **17** |
| ❌ | 7 | 1 | 6 | **4** |
| 무응답 | 0 | 0 | 0 | **0** |
| 최종 | Level 2 | Level 3 | Level 2 | **Level 2** |

**템플릿을 만든 효과가 두 군데에서 분명히 보인다** — P2C-Q2 의 `one thing that could have
been handled differently is` 가 **일곱 세트 만에 처음으로 정확한 문구**로 나왔고, P2B-Q3 에서
**사건 이름과 조치를 처음으로 다 말했다.**

**그런데 이번 세트의 주제였던 "부등호 방향"은 4문항 중 1개만 성공했다.** 아래 §요약을 보라.

---

## ⚠️ 발음 소견 (등급 계산에서는 제외)

`CLAUDE.md` §6-2 에 따라 Pronunciation 은 **"평가 보류"** 로 두고 최종 등급 계산에서 뺐다.
소리를 직접 들을 수 없기 때문이다. 다만 이번도 음성 응시라 **ASR 이 같은 단어를 반복해서
다르게 들은 지점**이 간접 근거로 남는다.

| 의도한 단어 | ASR 인식 | 횟수 | 메모 |
|---|---|---|---|
| **Hotel Lima** | `hotel in my` · `10 Lima` | **10회 이상** | SAMPLE_01 에서는 `hotel amount` 였다. **두 번째 세트 연속 최다 오인** |
| **request** | `Recast` · `recast` | **3회** | SAMPLE_01 에서 5회. **같은 단어가 또** |
| **thrust** | `stress` · `Trust` | 2회 | P2B-Q3·Q7 |
| **flight level** | `fly like a` · `flat level` | 2회 | |
| **cleared** | `clear items` · `Clear to end the loan` | 3회 | |
| **give way** | `giveaway` | 1회 | |
| **flock of birds** | `flower birds` · `flower burst` | 2회 | |
| **fuel** | `Fail` · `field` | 2회 | |
| 고유명사 | Marchfield→`Marfield`/`much fuel`/`Munchie`, Fenwick→`Family`, DORLIN→`dolin`/`orli`/`your lien`, BARSO→`Versa`/`ba or so`, WYNTA→`Wyda` | 다수 | |

**SAMPLE_01 에서 최우선으로 짚은 두 단어가 그대로 돌아왔다** — `Hotel Lima` 와 `request`.
매 교신의 첫 단어와 가장 많이 쓰는 동사다. **이 둘만 또박또박 해도 인식률이 크게 달라진다.**

아래 채점에서 **ASR 오인으로 판단되는 것은 전부 감점하지 않았다**(`CLAUDE.md` §6-1-1).
단어 자체를 잘못 고른 경우만 감점했다.

---

## Part Ⅰ TASK A

**P1A-Q1** ✅
문제 : Ground : HL123, taxi straight ahead, caution jet blast.
내 답안 : Texture straight or has Hotel Lima, one, two, three.
** 정답 : Taxi straight ahead, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음 (`Texture straight or has` 는 `taxi straight ahead` 의 ASR 오인)
- 코멘트 : **`caution jet blast` 를 복창에서 제외한 판단이 정확합니다.** 여섯 세트 연속 안정적인 항목입니다. 다만 ASR 이 `taxi` 를 `Texture` 로 들었다는 것은 첫 음절이 뭉개졌다는 신호입니다 — 짧은 문항일수록 또박또박 끊어 주세요.

---

**P1A-Q2** ⚠️
문제 : Delivery : HL123, cleared to Oakport via the KEVNA TWO departure, BARSO transition, climb to 5,000 feet, squawk 3471.
내 답안 : Clear to airport K and EO Versa transition client 5,000 Squad 3471 Hotel. Lima one, two, three.
** 정답 : Cleared to Oakport via the KEVNA TWO departure, BARSO transition, climb to 5,000 feet, squawk 3471, HL123.
- 누락된 필수 readback 요소 : **`departure`** — SID 이름 뒤의 절차 종류가 빠졌습니다
- 표준교신용어 오류 : `Clear` → **`Cleared`**. 이 세트에서 세 번 나왔고, 다섯 세트째 반복됩니다
- 코멘트 : **5요소 구조를 모두 받았고 숫자 두 개(5,000 과 3471)가 정확합니다.** 이 세트에서 가장 긴 지시(16단어)인데 숫자는 하나도 놓치지 않았습니다. 흐려진 것은 **고유명사**입니다 — `Oakport`→`airport`, `KEVNA TWO departure`→`K and EO`. 목적지와 SID 이름은 비행로 허가의 핵심이라 관제사가 그것으로 경로를 확인합니다. **화면에 안 뜨는 고유명사는 음절을 끊어 받아 적으세요**(`KEV-NA`).

---

**P1A-Q3** ✅
문제 : 🖥 [ WYNTA ]
Center : HL123, climb to flight level 310, cross WYNTA at 220 knots or less.
내 답안 : Climb to fly like a 310 cross Wyda at 220. Not or less hotel in my 123.
** 정답 : Climb to flight level 310, cross WYNTA at 220 knots or less, HL123.
- 누락된 필수 readback 요소 : 없음 — **두 토막 모두**
- 표준교신용어 오류 : 없음 (ASR 오인)
- 코멘트 : **지시가 두 토막일 때 앞쪽을 흘리던 문제가 해결됐습니다.** EPTA_07 P1A-Q3 에서는 까다로운 교차제한만 맞히고 강하 지시를 통째로 빠뜨려 ❌ 였는데, 이번에는 상승 지시와 교차제한을 둘 다 받았고 `at 220 knots or less` 의 **조건까지** 담았습니다.

---

**P1A-Q4** ✅
문제 : Approach : HL123, descend to 3,000 feet until established, cleared for the ILS runway 15 approach.
내 답안 : He says, 3000 until East published clear items, Runway, 15 approach Hotel. Lima, one, two, three.
** 정답 : Descend to 3,000 feet until established, cleared for the ILS runway 15 approach, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음 (`He says`→descend, `East published`→established, `clear items`→cleared ILS 는 ASR 오인)
- 코멘트 : **고도 + `until established` 조건 + 접근 허가 세 요소 전부.** 접근 허가 복창은 **다섯 세트 연속 유지**입니다. 조건부 지시의 조건을 빠뜨리지 않은 것도 이번 세트에서 두 번째입니다(Q3 과 함께).

---

## Part Ⅰ TASK B

**P1B-Q1** ⚠️
문제 : Your required takeoff distance today is 2,100 metres. Ground has told you that an intersection departure from Golf 4 leaves 2,400 metres available. Listen to the controller, respond with a reason, and tell him what distance you need.
Ground : HL123, are you able to accept an intersection departure from Golf 4?
내 답안 : Affirmative um access intersection departure a goal for hotel Lima, one, two, three.
** 교정 답안 : Affirm, HL123 — we need 2,100 metres and Golf 4 gives us 2,400, so we can accept the intersection departure from Golf 4.
- 누락된 필수 readback 요소 : **① 사유 ② 필요 거리 2,100 — 지시문이 요구한 두 가지 전부**
- 표준교신용어 오류 : `Affirmative` → **`AFFIRM`**(ICAO 표준). 뜻은 통하지만 표준어는 `AFFIRM` 입니다
- 코멘트 : **판단이 정확합니다.** 2,400 미터는 필요한 2,100 미터보다 길므로 수락이 맞고, **`AFFIRM` 으로 시작한 것도 맞습니다** — 지금까지 `are you able ~?` 에는 NEGATIVE 만 연습하셨는데 긍정이 정답인 경우도 표준어로 열었습니다.
  **그런데 숫자를 하나도 말하지 않았습니다.** 이번 세트의 주제가 바로 이것이고, 지시문에 `tell him what distance you need` 라고 적어 뒀습니다. `we need 2,100 and Golf 4 gives us 2,400` 한 토막이 붙어야 **왜 수락할 수 있는지**가 관제사에게 전달됩니다. 지금은 "된다"만 말한 것이라, 맞게 판단했다는 근거가 답에 남지 않습니다.

---

**P1B-Q2** ⚠️
문제 : Approach first told you to maintain 7,000 feet. A few minutes later the same controller cleared you down to 5,000 feet, and you are level at 5,000 now. Now ATC contacts you. Respond accordingly.
Approach : HL123, confirm maintaining 7,000 feet?
내 답안 : Negative laboring at 5,000 feet Hotel. Lima one, two, three.
** 정답 : Negative, HL123, level at 5,000 feet — you cleared us down to 5,000 a few minutes ago.
- 누락된 필수 readback 요소 : **사유** — 관제사 본인이 5,000 으로 내려줬다는 사실
- 표준교신용어 오류 : 없음 (`laboring` 은 `level at` / `levelling` 의 ASR 오인)
- 코멘트 : **NEGATIVE + 실제 값 두 토막이 정확합니다.** `Confirm maintaining ~?` 함정형은 다섯 세트 연속 첫 단어를 맞히고 있습니다.
  이 문항이 지금까지와 다른 점은 **틀린 쪽이 관제사**라는 것입니다. 관제사가 자기가 준 허가를 잊은 상황이라, `you cleared us down to 5,000` 한 토막이 있어야 관제사가 **자기 기록을 다시 봅니다.** 그게 없으면 관제사는 조종사가 멋대로 내려온 줄 알고 되묻습니다.

---

**P1B-Q3** ❌
문제 : While in the cruise you saw what looked like a drone, about 2 miles away at your ten o'clock and slightly below. You were dealing with a level change and did not report it. Now ATC contacts you. Acknowledge the instruction, and report what you saw.
Center : HL123, Fenwick Control, radar contact, maintain flight level 330.
내 답안 : oh, Recast label down due to drone from two miles, 10 Lima. One, two, three.
** 교정 답안 : Maintain flight level 330, HL123. And be advised, in the cruise we saw what looked like a drone about 2 miles away at our ten o'clock, slightly below.
- 누락된 필수 readback 요소 : **`maintain flight level 330`** — 지시문 앞부분(`Acknowledge the instruction`)이 통째로 없습니다. 고도는 필수 복창 항목입니다
- 표준교신용어 오류 : **보고해야 할 자리에서 요청을 했습니다.** `Recast label down due to drone`(= request level down due to drone)은 "드론 때문에 고도를 낮춰 달라"는 뜻입니다. 지시문은 `report what you saw` 입니다
- 코멘트 : 드론·2마일·10시 방향은 들어 있습니다 — **본 것은 정확히 기억하셨습니다.** 그런데 그것을 **요청으로 바꿔 말했습니다.** 이미 지나간 일(순항 중에 봤고 지금은 보고만 하는 것)인데 지금 고도를 바꿔 달라고 하면 관제사는 **현재 위협이 있는 줄 알고** 주변 항공기를 움직입니다.
  시차형 보고의 틀은 고정입니다 : **`(복창). And be advised, (언제) we saw (무엇) (어디서).`** 세 세트 연속 잘 쓰시던 `be advised` 가 이번에 빠졌습니다.

---

**P1B-Q4** ⚠️
문제 : Your RNAV equipment is inoperative today and the aircraft is dispatched under the minimum equipment list. Listen to the controller, respond with a reason, and tell him what you need instead.
Approach : HL123, expect the RNAV runway 15 approach.
내 답안 : Unable to use rnav approach 15 due to. Minimum equipment to operation in our aircraft Hotel. Lima, one, two, three.
** 교정 답안 : Unable the RNAV runway 15 approach, HL123 — our RNAV is inoperative under the minimum equipment list. Request the ILS runway 15.
- 누락된 필수 readback 요소 : **대안 요청** — 지시문의 `tell him what you need instead`
- 표준교신용어 오류 : 없음
- 코멘트 : **`unable` + 사유 두 토막이 정확합니다.** MEL 을 근거로 든 것도 적절합니다 — 장비 결함을 이유로 접근 방식을 거부하는 전형적인 상황입니다.
  빠진 것은 **마지막 한 토막**입니다. 못 하겠다고만 하면 관제사는 다음 수를 못 냅니다. 같은 활주로의 ILS 는 쓸 수 있으므로 `Request the ILS runway 15` 한 마디면 그대로 진행됩니다. **복합 지시의 마지막 토막이 빠지는 것은 이 세트에서 일곱 번째**입니다.

---

**P1B-Q5** ✅
문제 : Approach told you to contact the next controller on 128.3. You set 128.5 by mistake and heard nothing, so you have come back to the previous frequency. Now ATC contacts you. Respond accordingly.
Approach : HL123, I have been calling you. Say the frequency you were given.
내 답안 : Oh, we receive 1 to 8.3 but we set 128.5 by mistake or setting one to eight. Contact 128.3 Hotel. Lima one, two
** 정답 : HL123, we were given 128.3. Correction — we had 128.5 set by mistake. Now going to 128.3.
- 누락된 필수 readback 요소 : 없음 — **질문에 먼저 답했고, 틀린 값과 정정 조치가 다 있습니다**
- 표준교신용어 오류 : 없음
- 코멘트 : **정정 3단이 완전하고, 순서까지 맞습니다.** 관제사가 "받은 주파수를 말하라"고 물었으므로 **받은 값(128.3)을 먼저** 말하고, 그다음 틀린 값(128.5)과 조치를 붙였습니다. SAMPLE_01 P1B-Q5 에서는 질문에 답하기 전에 변명부터 나와 지적했던 항목인데, 이번에는 순서가 정확합니다. 이 세트에서 가장 깔끔한 Ⅰ-B 응답입니다.

---

**P1B-Q6** ❌
문제 : 🖥 [ Marchfield Approach / WYNTA / expected further clearance ]
You are holding at WYNTA. You have 1 hour 10 minutes of fuel on board and your alternate needs 25 minutes from here. Approach has just given you an expected further clearance time of 20 minutes. Contact Marchfield Approach. Tell him whether you can accept that, and say what your limit is.
내 답안 : Marfield approach Hotel Lima, 123 Crossing wynta. Request expected further clearance.
** 교정 답안 : Marchfield Approach, HL123 holding at WYNTA — we can accept the 20-minute delay. We have 1 hour 10 minutes of fuel and our alternate needs 25, so we can hold for up to 45 minutes.
- 누락된 필수 readback 요소 : **① 수락 여부 ② 내 한계 — 지시문이 요구한 두 가지 전부**
- 표준교신용어 오류 : **이미 받은 것을 다시 요청했습니다.** 지문에 `Approach has just given you an expected further clearance time of 20 minutes` 라고 적혀 있는데 `Request expected further clearance` 라고 했습니다
- 코멘트 : **이번 세트에서 가장 아까운 문항입니다.** 기관 호출과 위치(WYNTA 홀딩)는 정확했는데, **지시문이 요구한 두 가지를 둘 다 하지 않았습니다.**
  이 문항은 **뺄셈 하나**가 전부였습니다 : 연료 1시간 10분 − 대체 25분 = **홀딩 가능 45분**. EFC 20분은 그 안에 들어가므로 **수락할 수 있습니다.** `we can accept the 20-minute delay, and our limit is 45 minutes` 한 문장이면 끝났습니다.
  그리고 **관제사가 이미 준 것을 다시 요청하는 것**은 SAMPLE_01 에서 두 번, EPTA_07 에서 한 번 지적한 유형입니다. 구분 기준은 하나입니다 — **지문이나 관제사가 이미 말했으면 그걸 쓰고, 모르는 것만 요청합니다.**

---

## Part Ⅱ TASK A

**P2A-Q1** ⚠️
문제 : ☞ Contact Fenwick Control, report your position and request descent.
(Initial Situation : level at flight level 290 and 90 miles from DORLIN, inbound to Marchfield Airport, 1 hour 5 minutes of fuel)
내 답안 : Family control Hotel, Lima 1, 2 3 level and flat level 290. Miles from dolin. request inbound, for Munchie airport. Hotel Lima.
** 정답 : Fenwick Control, HL123, level at flight level 290, 90 miles from DORLIN, request descent.
- 누락된 필수 readback 요소 : **① 거리 숫자 90 ② 강하 요청**
- 표준교신용어 오류 : `request inbound for ~` 는 요청이 아닙니다. 지시문은 `request descent` 입니다
- 코멘트 : 기관 호출과 **`level at flight level 290`** 이 정확합니다 — 상태 보고 동사(`level at`)를 쓰는 것은 세 세트 연속 안정적입니다.
  두 가지가 빠졌습니다. ① `Miles from dolin` 에서 **숫자 90 이 사라졌습니다.** 거리 없는 "~마일"은 정보가 되지 않습니다(같은 누락이 P2B-Q1 에서도 반복됩니다). ② **요청이 강하가 아닙니다.** `request inbound` 는 "들어가겠다"는 뜻이고, 관제사는 이미 알고 있습니다. 이 턴에서 필요한 것은 **`request descent`** 입니다.

---

**P2A-Q2** ✅
문제 : 🖥 [ DORLIN ONE arrival / ILS runway 15 ]
☞ Listen to the controller and give a full readback.
Center : HL123, Fenwick Control, descend to flight level 190, reduce speed to 280 knots, expect the DORLIN ONE arrival, ILS runway 15, Marchfield altimeter 30.12.
내 답안 : A decent flight level one lighter, zero reduce speed 280. Expect D or l, i n one arrival is 15 art meters 3012 Hotel. Lima one two, three,
** 정답 : Descend to flight level 190, reduce speed to 280 knots, expect the DORLIN ONE arrival, ILS runway 15, altimeter 30.12, HL123.
- 누락된 필수 readback 요소 : 없음 — **다섯 요소 전부**
- 표준교신용어 오류 : 없음 (ASR 오인)
- 코멘트 : **고도 · 속도 · 도착절차 · 활주로 · 고도계 다섯 요소를 전부 받았습니다. 다섯 세트 연속**입니다. 고도계 30.12 까지 정확합니다. 긴 지시를 받아 적는 능력은 안정적으로 Level 4 수준입니다.

---

**P2A-Q3** ⚠️
문제 : 🖥 [ DORLIN / Oakport ]
☞ Listen to the controller and respond accordingly. Tell him what you need to know before you decide.
Approach : HL123, Marchfield Approach, they're clearing snow off runway 15 — it'll be about 15 minutes. You can hold at DORLIN or go to Oakport, it's 30 minutes from you. Up to you.
내 답안 : oh, before decide, can we get the Oakport available distance, Runway hotel in my one, two, three.
** 교정 답안 : HL123 — before we decide, how long after the snow clearing until we would be on the ground?
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **묻는 동작은 정확합니다** — `before decide` 로 열었고, "결정 전에 묻기"는 세 세트 연속 수행 중입니다.
  그런데 **물은 내용이 이 상황의 변수가 아닙니다.** Oakport 의 활주로 길이는 여기서 판단 요소가 아닙니다 — 정상 운항이고 착륙거리 문제가 없습니다. 비교해야 하는 것은 **시간**입니다 : 제설 15분 + 그 뒤 접근 시간 vs Oakport 30분, 그리고 내 연료 1시간 5분.
  EPTA_07 P2B-Q4 에서 활주로 길이를 물은 것이 정답이었던 상황(화물칸 연기 + 착륙거리 2,900m 필요)과 **혼동하신 것으로 보입니다.** 무엇을 물을지는 **지문이 어떤 숫자를 줬는지**로 정해집니다 — 이 문항의 지문은 연료와 시간만 줬습니다.

---

**P2A-Q4** ⚠️
문제 : ☞ Listen to the controller, state your decision with a reason, and tell him how much fuel you have.
Approach : HL123, once they're done it'll be about 10 more minutes to touchdown from the hold.
내 답안 : now we have only one our field so if we do hold we will I'm not sure we use whether use the alternate or reserved, so We will go to the original airport. Hotel Lima, one, two, three.
** 교정 답안 : HL123, we will take the hold at DORLIN — 15 minutes plus 10 to touchdown is 25 minutes, and we have 1 hour 5 minutes of fuel, so that is well inside our reserve.
- 누락된 필수 readback 요소 : **비교 자체** (25분 소요 vs 65분 연료)
- 표준교신용어 오류 : 없음 (`our field` 는 `our fuel` 의 ASR 오인)
- 코멘트 : **결론은 맞습니다** — 홀딩하고 원래 공항으로 가는 것이 정답이고, 연료를 언급하신 것도 지시문을 따른 것입니다.
  **그런데 이유가 거꾸로입니다.** `we have only one hour fuel so if we do hold I'm not sure we use the alternate or reserve` — "1시간밖에 없어서 홀딩하면 예비연료를 쓸지 모르겠다"는 뜻입니다. 실제로는 **15 + 10 = 25분**이고 연료는 **65분**이므로 **넉넉합니다.** 불안해할 상황이 아닙니다.
  즉 **맞는 결정을 틀린 근거로 내렸습니다.** 숫자를 비교했다면 `25 minutes against 65 minutes of fuel` 이라는 확신이 나왔을 것입니다. 지금 형태로는 관제사가 "이 사람 연료가 빠듯한가?" 하고 되묻게 됩니다.

---

**P2A-Q5** ⚠️
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, roger, hold at DORLIN, right turns, maintain flight level 190, expect further clearance at one five.
내 답안 : Hold that the orli and maintain one. Nine flight level 190 expect. On Runway, 15 Hotel, Lima one. Correction holds at your lien, right? Tone of that. One. 1900 expect one five Hotel Lima. One, two, three.
** 정답 : Holding at DORLIN, right turns, maintain flight level 190, expect further clearance at one five, HL123.
- 누락된 필수 readback 요소 : 없음 (정정 후에는 홀딩 지점·선회 방향·고도·EFC 가 다 들어갔습니다)
- 표준교신용어 오류 : 없음
- 코멘트 : **스스로 `Correction` 하고 고친 것은 좋은 습관입니다** — 구술시험에서 감점 요소가 아닙니다. 다만 **고치기 전에 `expect on runway 15` 라고 잘못 말씀하셨습니다.** `expect further clearance at one five`(= 15분에 추가 허가 예정)를 **"활주로 15"** 로 들으신 것입니다. 둘은 전혀 다릅니다.
  `expect further clearance at ______` 는 **시각**이 옵니다. 홀딩 지시 뒤에 나오는 고정 표현이니 통째로 외워 두세요. 그리고 한 문항에서 정정이 두 번 나오면 30초를 거의 다 쓰게 됩니다 — **받아 적은 메모를 왼쪽부터 한 번에 읽는 편**이 빠릅니다.

---

**P2A-Q6** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, runway 15 is open, descend to 5,000 feet, turn left heading 120 for vectors to the ILS.
내 답안 : Roger 1575000 left, turn heading to correction left hand heading 120 for Vector IRS Hotel. Lima, one, two, three,
** 정답 : Runway 15 is open, descend to 5,000 feet, turn left heading 120 for vectors to the ILS, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음 (`IRS`→ILS 는 ASR 오인이지만 §발음 소견 참조)
- 코멘트 : 활주로 재개·고도 5,000·좌선회 기수 120·ILS 벡터가 다 들어갔습니다. 여기서도 **`correction` 으로 기수를 고쳤습니다** — 처음에 `turn heading to` 라고 하다가 `left hand heading 120` 으로 바로잡았습니다. 값은 맞았으니 ✅ 입니다.

---

**P2A-Q7** ⚠️
문제 : ☞ Contact Marchfield Tower, report your position and intention.
(Situation Update : You are established on the ILS for runway 15 and passing 2,200 feet.)
내 답안 : here, much fuel Tower Hotel, Lima 1-2-3 established on the localizer for 15 passing 2,200
** 정답 : Marchfield Tower, HL123, established on the ILS runway 15, passing 2,200 feet, request landing.
- 누락된 필수 readback 요소 : **의도** — 지시문의 `and intention`
- 표준교신용어 오류 : 없음
- 코멘트 : **위치보고가 정확합니다** — 기관 호출, `established on the localizer for 15`, **통과고도 2,200 까지.** EPTA_05 에서 1,800피트를 18000 으로 쓰고 EPTA_07 에서 `passing 3000` 으로 뒤집었던 항목인데, 이번에는 네 자리 피트를 제자리에 넣었습니다.
  빠진 것은 **의도 한 마디**입니다. 타워에 처음 부를 때는 `request landing` 이 붙어야 타워가 착륙 허가를 준비합니다. 지시문에 `and intention` 이라고 적혀 있었습니다.

---

**P2A-Q8** ⚠️
문제 : ☞ Listen to the tower, give a full readback, and tell him whether you can do that.
Tower : HL123, Marchfield Tower, wind 150 at 12, runway 15, cleared to land. Vacate via Delta if you can, the A319 behind you is tight.
내 답안 : Clear to end the loan. Ray 15 VR Delta, if able Hotel Lima one, two, three.
** 교정 답안 : Cleared to land runway 15, HL123, and we can vacate via Delta.
- 누락된 필수 readback 요소 : **가능 여부에 대한 답** — 지시문의 `tell him whether you can do that`
- 표준교신용어 오류 : `Clear` → **`Cleared`**(세 번째)
- 코멘트 : 착륙 허가와 활주로, Delta 이탈이 들어갔고 **바람은 복창에서 제외**했습니다 — 정확한 판단입니다.
  `if able` 로 끝낸 것이 문제입니다. 그건 **관제사가 한 말을 그대로 되돌려준 것**이지 답이 아닙니다. 타워는 뒤의 A319 간격 때문에 **Delta 로 빠질 수 있는지**를 알아야 다음 항공기를 착륙시킵니다. `we can vacate via Delta` 또는 `negative, we will need the end of the runway` 중 하나를 **분명히** 말해야 합니다.

---

**P2A-Q9** ✅
문제 : 🖥 [ stand 24 / Delta / Mike ]
☞ Listen to the ground controller and give a full readback.
Ground : HL123, Marchfield Ground, taxi to stand 24 via Delta and Mike, give way to the King Air coming out of stand 22.
내 답안 : Text to stand 24 via, Delta M, Mike giveaway, King Air Hotel, Lima one, two, three.
** 정답 : Taxi to stand 24 via Delta and Mike, give way to the King Air, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음 (`giveaway`→give way 는 ASR 오인)
- 코멘트 : **주기장 번호 · 유도로 두 개 · give way 대상 전부.** EPTA_06 P1A-Q1 에서 `the Dash 8` 을 빠뜨렸던 "따라갈/양보할 대상" 누락이 여기서는 없습니다 — King Air 를 명시했습니다.

---

**P2A-Q10** ⚠️
문제 : ☞ Listen to the ground controller, state your decision with a reason, and make any request you need.
Ground : HL123, I'm sorry about that — stand 24 is still occupied. I can give you stand 31, but it's a long taxi, another 8 minutes. What would you like?
내 답안 : Hold that. Stand 24 Hotel. Lima, one, two, three.
** 교정 답안 : HL123, we will hold for stand 24 rather than take the long taxi — 8 extra minutes of taxi costs us more fuel than waiting here. Request a holding point clear of the traffic behind us.
- 누락된 필수 readback 요소 : **① 이유 ② 요청 — 지시문이 요구한 두 가지**
- 표준교신용어 오류 : 없음
- 코멘트 : **결정은 분명합니다**(stand 24 를 기다리겠다). 이 문항은 어느 쪽을 골라도 정답이 될 수 있고, 평가하는 것은 **이유를 댔는지**입니다.
  지금 답은 **다섯 단어**로 끝났습니다. 30초 문항에서 결정만 던지면 관제사는 "왜?"와 "그동안 어디서 기다릴 건데?"를 다시 물어야 합니다. 지상에서 기다리겠다고 하면 **어디서 기다릴지**가 바로 따라오는 질문이라, 그것까지 말하는 것이 `make any request you need` 의 뜻입니다.

---

**P2A-Q11** ⚠️ (90초 Follow-up)
문제 : In this situation, Approach offered you a hold at DORLIN or a diversion to Oakport while they cleared the snow. What did you need to know before you decided, and why? In your role as a pilot, how do you decide whether to hold or divert? Give an example of a situation where you would divert straight away rather than hold.
내 답안 : Here. As a pilot. we have to calculate whether to go or not, it depends our Fail. If, if it takes a little rather than go to the original airport, I will choose. I will decide the divert to another airport, but if not, I will hold and wait for the open Runway. There are many cases for in my to choose to go or divert, but First. Oh or we have to do choose the first is the original airport because we have to land and take a one more time if we go to another Airport. And second, it is our 0.1 with our passenger. So as a pilot, we have to do the original one first.
** 교정 답안 : In this situation, what I needed to know was how long it would take from the end of the snow clearing until we were on the ground, because that was the number I had to compare with my fuel. The controller told me it was about 10 more minutes, so with 15 minutes of clearing that was 25 minutes in total, and I had 1 hour 5 minutes of fuel, so holding was comfortable. In my role as a pilot, I decide this by comparing the total delay with my fuel above reserve. I prefer the original airport, because a diversion means landing, re-planning and taking off again, and that costs our passengers far more time than holding does. For example, I would divert straight away if the delay was open-ended with no expected further clearance time, or if the weather at the destination was already at minimums — in that case waiting only burns the fuel I would need to go somewhere else.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **②(조종사로서의 판단 기준)에는 답했습니다.** "연료에 따라 계산한다", "회항하면 다시 착륙하고 다시 이륙해야 하니 원래 공항을 우선한다" — 뒤쪽 근거는 실무적으로 타당하고 구체적입니다.
  그런데 세 부분 중 하나만 답했습니다. ① **`what did you need to know before you decided` 에 대한 답이 없습니다.** "제설이 끝난 뒤 착륙까지 얼마나 걸리는지"가 답이고, 그 숫자를 연료와 비교해야 하니까 물어야 했던 것입니다. ③ **`Give an example.` 이 또 없습니다** — **일곱 세트 연속**입니다.
  교정은 **당신이 쓴 논리(연료로 계산한다 → 회항은 다시 이륙해야 하므로 원래 공항 우선)를 그대로 살려서** 앞에 ①의 답과 숫자를 붙이고 뒤에 ③ 예시를 붙인 것입니다. 문법 교정 : `it depends our fuel` → `it depends on my fuel`, `we have to do choose the first is the original airport` → `I prefer the original airport`, `take a one more time` → `take off again`, `it is our 0.1 with our passenger`(뜻 불명) → `it costs our passengers far more time`.
  **`progress/templates-90s.md` 의 Follow-up 뼈대를 그대로 따라가면 세 부분이 자동으로 채워집니다.**

---

## Part Ⅱ TASK B

**P2B-Q1** ⚠️
문제 : ☞ Contact Oakport Approach and report your position.
(Initial Situation : level at flight level 240 and 80 miles from BARSO, inbound to Oakport Airport, information Romeo)
내 답안 : Oka approach Hotel, Lima 1, 2 3 level 5 leveling at flight. Level 240, a mile from Versa information, Romeo recast inbound for oakport. Airport hotel Lima. One, two, three.
** 정답 : Oakport Approach, HL123, level at flight level 240, 80 miles from BARSO, information Romeo.
- 누락된 필수 readback 요소 : **거리 숫자 80**
- 표준교신용어 오류 : `recast inbound for ~`(= request inbound)는 위치보고에 불필요합니다
- 코멘트 : 기관 호출, **`leveling at flight level 240`**, 정보문자 Romeo 가 정확합니다. 상태 보고 동사도 맞습니다.
  **P2A-Q1 과 똑같은 누락이 반복됐습니다** — `a mile from Versa` 에서 숫자 80 이 사라졌습니다. 거리는 관제사가 강하 계획을 세우는 값이라, 숫자가 없으면 "~마일"은 아무 정보도 아닙니다. **Initial Situation 의 숫자를 메모 맨 위에 적어 두고 그대로 읽으세요.**

---

**P2B-Q2** ⚠️
문제 : 🖥 [ BARSO ONE arrival / ILS runway 27 ]
☞ Listen to the controller and give a full readback.
Approach : HL123, Oakport Approach, descend to 10,000 feet, reduce speed to 250 knots, expect the BARSO ONE arrival, ILS runway 27, Oakport altimeter 29.88.
내 답안 : Decent 1000 reduce speed. 250 expects ba or so on arrival ILS Runway 27, RT 290. 88 Hotel Lima 123.
** 정답 : Descend to 10,000 feet, reduce speed to 250 knots, expect the BARSO ONE arrival, ILS runway 27, altimeter 29.88, HL123.
- 누락된 필수 readback 요소 : 없음 — 다섯 요소 구조는 다 있습니다
- 표준교신용어 오류 : **`Decent 1000`** — 10,000 피트를 1,000 으로 말씀하신 것으로 들립니다. 고도는 필수 복창 항목이고 1,000 과 10,000 은 9,000피트 차이입니다
- 코멘트 : 속도 250·BARSO ONE arrival·ILS 27·고도계 29.88 은 전부 정확합니다. **고도 하나만 자릿수가 흔들렸습니다.**
  이것이 ASR 오인인지 실제 발화인지는 녹음을 들어야 확실하지만, 같은 세트 P2B-Q3 에서 **15,000 을 `1,500` 으로** 말씀하신 것과 묶어 보면 **만 단위 고도에서 자릿수가 빠지는 양상**으로 보입니다. `one zero thousand` 처럼 **자릿수를 하나씩 끊어** 말하면 사라집니다.

---

**P2B-Q3** ✅
문제 : ☞ Inform the controller of your situation, tell him what you have done about it, and request priority for landing.
(Situation Update : Passing 15,000 feet you fly through a flock of birds. Engine number 2 starts vibrating heavily. You have reduced thrust on that engine and the vibration has settled, but you must keep the speed at 230 knots or less. There is no fire and the engine is still running.)
내 답안 : oh, Approach hotel in my 123 passing 1,500 feet. We? We saw flower birds and I think the birds is in the engine, so there's a vibration. So we reduce the stress. So request priority for Landing Hotel.
** 교정 답안 : Approach, HL123, passing 15,000 feet we flew through a flock of birds and engine number 2 is vibrating. We have reduced thrust on that engine and the vibration has settled. Request priority for landing.
- 누락된 필수 readback 요소 : 없음 — **세 기능 전부 수행했습니다**
- 표준교신용어 오류 : **고도 `passing 1,500 feet`** — 실제는 15,000 입니다. 그리고 **어느 엔진인지**(number 2)가 빠졌습니다
- 코멘트 : **이번 세트에서 가장 중요한 성과입니다.**
  **사건의 이름과 조치를 처음으로 다 말했습니다** — 조류 충돌, 엔진 진동, **추력 감소**(`we reduce the stress` = reduced thrust), 그리고 우선 착륙 요청. EPTA_06 에서는 `emergency descent` 가, EPTA_07 에서는 `cargo smoke` 와 소화병 방출이 끝내 안 나와 두 세트 연속 지적했던 항목입니다. 이번에 지시문에 `tell him what you have done about it` 을 넣었고, 그대로 수행하셨습니다.
  고칠 것 두 가지 : ① **고도 자릿수**(15,000 → 1,500) ② **엔진 번호** — 쌍발기에서 어느 쪽인지는 소방대 배치와 지상 조치가 달라지는 값입니다. `engine number 2` 한 마디를 붙이세요.

---

**P2B-Q4** ❌
문제 : ☞ Listen to the controller, respond with a reason, and tell him both speeds.
Approach : HL123, roger. For spacing with the traffic ahead I need 210 knots or less. Can you do that?
(Situation Update : you must keep the speed at 230 knots or less)
내 답안 : Um, negative. Oh, we have to maintain sorry, we have to use the two, three zero not or less due to our aircraft performance hotel in my 123,
** 정답 : Affirm, HL123 — our limit is 230 knots or less, and 210 is inside that, so we can accept 210 knots.
- 누락된 필수 readback 요소 : **두 속도의 비교**
- 표준교신용어 오류 : **`NEGATIVE` 가 틀렸습니다.** 제한이 **230노트 이하**이고 관제사가 요구한 것은 **210노트 이하**입니다. **210 < 230 이므로 할 수 있습니다**
- 코멘트 : **이번 세트의 핵심 문항이고, 부등호 방향이 또 뒤집혔습니다.**
  당신이 말한 `we have to use 230 knots or less` 는 **정확한 제한**입니다. 숫자는 맞게 기억하고 계셨습니다. 그런데 그 제한을 **거부의 근거**로 쓰셨습니다. "230 이하만 가능하다"는 "210 은 안 된다"가 아니라 **"210 은 된다"** 는 뜻입니다. 210 은 230 보다 느리니까요.
  EPTA_07 P2A-Q4 에서 **3,200 ≥ 2,900 인데 거부**하신 것과 **똑같은 구조**입니다. 그때도 `we need at least 2900m` 라고 값은 정확히 말씀하셨습니다.
  **진단이 분명해졌습니다 — 값은 기억하는데, "내 한계보다 작으면 가능"이라는 방향을 판단할 때 반대로 갑니다.** `progress/templates-90s.md` 부록의 고정 동작을 쓰세요 :

  ```
  받은 값   210
  내 한계   230      →   210 < 230   →   OK, 수락
  ```

---

**P2B-Q5** ✅
문제 : ☞ Listen to the controller, give a full readback and say your intentions.
Approach : HL123, thank you. Turn left heading 300 for vectors to the ILS, descend to 6,000 feet. Say your intentions.
내 답안 : Ah, left on heading 3004 Vector ILS, decent 6000. Our intention is to land as soon as possible hotel in my 123.
** 정답 : Turn left heading 300 for vectors to the ILS, descend to 6,000 feet, HL123. Our intention is to continue for the ILS runway 27 and land at Oakport with the fire service standing by.
- 누락된 필수 readback 요소 : 없음 — 복창과 intentions 둘 다 있습니다
- 표준교신용어 오류 : 없음
- 코멘트 : **`Our intention is to ~` 구문을 썼습니다.** EPTA_06 에서 처음 쓰고 EPTA_07 에서 다시 빠졌던 항목인데, 이번에 돌아왔습니다. 좌선회 기수 300 과 고도 6,000 도 정확합니다.
  내용만 조금 더 채우면 완전합니다. `land as soon as possible` 은 방향은 맞지만 **관제사가 준비할 것이 없습니다.** intentions 는 "앞으로 내가 무엇을 할 것인가"이므로 **어느 접근으로, 어디에, 무엇이 필요한지**가 들어가면 관제사가 소방대와 순서를 미리 잡습니다.

---

**P2B-Q6** ❌
문제 : ☞ Listen to the controller and provide both pieces of information.
Approach : HL123, two things — do you want the fire service, and will you need to shut that engine down before landing?
내 답안 : Mmm. I think the fire Services because there's no fire in the Engine Hotel Lima. One, two, three.
** 정답 : HL123, affirm, we would like the fire service standing by as a precaution. And negative, we do not need to shut the engine down — it is still running at reduced thrust.
- 누락된 필수 readback 요소 : **두 번째 질문(엔진 정지 여부)에 대한 답 전체**
- 표준교신용어 오류 : **사유가 모순됩니다.** `I think the fire Services because there's no fire in the engine` — 불이 없는데 소방대를 원한다는 것이 되어, 관제사는 원한다는 뜻인지 아닌지 알 수 없습니다
- 코멘트 : **`two things` 라고 세어 준 질문에 한 토막만 답했습니다.** EPTA_04·05 에서 두 세트 연속 지적했고 EPTA_06·07 에서 해결됐던 항목이 다시 돌아왔습니다.
  첫 질문도 전달이 안 됩니다. **소방대를 원하는 이유는 "불이 없어서"가 아니라 "엔진이 손상됐으니 예방 차원"** 입니다. `as a precaution` 한 마디면 됩니다. 그리고 두 번째 질문의 답은 지문에 그대로 있습니다 — **"화재 없음, 엔진은 계속 운전 중"** 이므로 정지할 필요가 없습니다.
  **관제사가 `two things` 라고 말하면 답에 토막이 두 개 있는지 세어 보세요.**

---

**P2B-Q7** ✅
문제 : ☞ Listen to the controller, then state your decision with a reason.
Approach : HL123, the wind has backed — runway 09 now has a 10 knot headwind instead of a tailwind on 27. Do you want to change?
(Situation Update : The vibration has dropped further and engine number 2 is now running normally at reduced thrust.)
내 답안 : Mmm negative. Now, the vibration get normal and so, we can land as we had planned Hotel Lima, one, two, three,
** 정답 : Negative, HL123 — the vibration has settled and the engine is running normally, so we are happy to land on runway 27 as planned.
- 누락된 필수 readback 요소 : 없음 — **결정 + 이유 두 토막**
- 표준교신용어 오류 : 없음
- 코멘트 : **`Negative` + 이유가 정확합니다.** 진동이 회복됐으니 재배치 없이 원래 계획대로 간다는 판단은 타당합니다.
  **다만 이 문항은 제 출제 결함이 있습니다** — 여기서 27 을 유지하겠다고 답했는데 다음 문항(Q9)의 관제사 대사가 **ILS 09 허가**입니다. 선택을 물어 놓고 다른 활주로를 준 셈이라 앞뒤가 맞지 않습니다. 그 때문에 Task C 에서 혼란이 생긴 부분은 감점하지 않았습니다. 다음 세트에서는 선택 결과가 뒤 문항에 반영되도록 만들겠습니다.

---

**P2B-Q8** ⚠️
문제 : ☞ Contact the controller, give him an update on the engine, and say what you will need on arrival.
내 답안 : Mmm. Approach Hotel. Lima. One, two, three. We have some a normal issues about engine before, so request. Fire Services. Follow Follow by. Runway Hotel. Lima one, two, three.
** 교정 답안 : Approach, HL123 — the vibration has dropped and engine number 2 is now running normally at reduced thrust. Request the fire service to follow us on the runway.
- 누락된 필수 readback 요소 : **갱신의 핵심** — 진동이 가라앉아 엔진이 정상 작동 중이라는 것
- 표준교신용어 오류 : 없음
- 코멘트 : **요청은 정확합니다** — 소방대가 활주로에서 따라오도록. 화물칸·엔진 손상 후 착륙에서 표준적인 요청입니다.
  갱신이 전달되지 않습니다. `we have some abnormal issues about engine before` 는 "전에 문제가 있었다"로 읽히는데, **관제사가 알아야 하는 것은 "지금 어떤가"** 입니다. 진동이 가라앉았다는 사실이 소방대의 대기 수준과 착륙 순서를 정합니다. **EPTA_07 P2B-Q8 에서도 같은 지적**(연기 경고 소멸을 전달 못 함)을 드렸습니다 — **Situation Update 가 준 것 중 "달라진 것"을 먼저 말하세요.**

---

**P2B-Q9** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, descend to 2,000 feet until established, cleared for the ILS runway 09 approach, contact Oakport Tower on 120.9.
내 답안 : Descend 2000 feet until the established clear items. 099 approach contact. Oak airport. Tower 1209.99 Hotel. Lima one, two, three.
** 정답 : Descend to 2,000 feet until established, cleared for the ILS runway 09 approach, contact Oakport Tower on 120.9, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음 (`clear items`→cleared ILS, `1209.99`→120.9 는 ASR 오인으로 보고 감점하지 않았습니다)
- 코멘트 : **고도 2,000 · until established · 접근 허가 · 활주로 09 · 기관 · 주파수 전부.** 접근 허가 복창은 **다섯 세트 연속**이고, 최종 클리어런스를 완전히 받는 것은 이제 흔들리지 않습니다.

---

## Part Ⅱ TASK C

**P2C-Q1** ⚠️ (90초)
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
내 답안 : in the correction during approach phase, we We worked approach and checklist. that what we, what we, what we planned, but in the in the passing 2,200, or we We crashed our our engine crash with the flower burst. So there is a vibration and some trust. So we reduced Trust so, we Informed the controller. And they gave us hold. So we ran the checklist And they. Was some options to. Correction. They ask us to choose to shut down or fire services. So anything else we anyway, we landed the airport. As we plant.
** 교정 답안 : During the approach, passing 15,000 feet, we flew through a flock of birds and engine number 2 started vibrating. We reduced thrust on that engine and the vibration settled, but we had to keep the speed at 230 knots or less. We informed the controller and requested priority for landing. He gave us a speed for spacing and a vector for the ILS. He also asked us whether we wanted the fire service and whether we would need to shut the engine down. Then the vibration dropped further and the engine ran normally at reduced thrust. In the end we landed at Oakport off the ILS as we had planned.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **사건 이름과 조치가 들어 있습니다** — 조류 충돌(`flower burst` = flock of birds), 엔진 충돌, 진동, **추력 감소**, 관제사 통보, 체크리스트. EPTA_06·07 두 세트 연속 사건명이 없었던 것에 비하면 분명한 개선이고, 비행 단계도 `approach phase` 로 맞습니다.
  **문제는 다른 파트 내용이 섞인 것입니다.** ① `passing 2,200` — 2,200피트는 **Part Ⅱ A 의 착륙 직전 고도**입니다. 이 사건은 **15,000피트**에서 일어났습니다. ② `they gave us hold` — **Part Ⅱ B 에 홀딩은 없었습니다.** 홀딩은 Part Ⅱ A 의 제설 대기였습니다. **EPTA_04 에서 지적한 "Task C 에 다른 파트 혼입"의 재발**입니다.
  **Part Ⅱ B 가 시작되면 메모를 새 줄에서 시작하세요.** Task C 는 Part Ⅱ B 만의 메모를 읽는 문항입니다.
  그리고 **끊김이 매우 심합니다** — `we We worked`, `what we, what we, what we planned`, `in the in the passing`. 내용은 알고 계신데 문장으로 묶이지 않습니다. `progress/templates-90s.md` 의 7문장 뼈대를 쓰면 이 끊김이 줄어듭니다.

---

**P2C-Q2** ⚠️ (90초)
문제 : How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
내 답안 : Mmm as a pilot. Mmm, I think it was handled it. The controller, handled it. Well, First. As soon as we informed the controller, They gave us our priority and they go, they gave us two options. also, we can choose many options and oh, they asked us to reduce speed, we we accepted but one thing that or he could have been handled differently is not ask fire services or shut down. I think he, He just gave us that there is a fire service in the runway. and, Also, he don't need to ask choose Runway. Because we can land 09 error which have the hard wind. Hmm. Other than that, I think everything has been handled it. Well,
** 교정 답안 : I think the controller handled it well. As soon as we informed him, he gave us priority and offered us options, and he asked us to reduce speed for spacing. One thing that could have been handled differently is that he did not need to ask us about the fire service or about shutting the engine down — in an engine problem I think he could simply have had the fire service in position and told us so, instead of asking us to decide while we were flying a damaged engine. Also, he did not need to ask us to choose a runway, because runway 09 had a 10 knot headwind and 27 had a tailwind, so 09 was clearly the better one. Other than that, I think everything was handled well.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **이번 세트에서 가장 좋은 응답이고, 세 가지가 동시에 됐습니다.**
  ① **평가 대상이 관제사입니다** — 처음에 `it was handled it` 으로 시작했다가 **스스로 `The controller, handled it well` 로 고쳤습니다.** 다섯 세트 연속 지적하던 자리입니다.
  ② **`one thing that ... could have been handled differently is ~` 가 일곱 세트 만에 정확한 문구로 나왔습니다.** 지금까지 `we have been handled differently` / `can be handled differently` / `I want to handle different` 로 매번 달랐는데, 이번엔 맞습니다. **템플릿을 보신 효과로 보입니다.**
  ③ **`Other than that` 도 정확합니다** — EPTA_07 에서 `other that` 으로 틀렸던 것입니다.
  **지적 내용도 둘 다 타당합니다.** "엔진 문제 중에 소방대와 엔진 정지를 조종사에게 물어 결정을 떠넘기지 말고 그냥 배치했어야 한다"는 실무적으로 정확한 문제제기입니다. 그리고 "활주로를 고르라고 물을 필요 없이 정풍인 09 를 줬으면 됐다"는 **제 출제 결함을 정확히 짚은 것**입니다(§P2B-Q7 참조).
  남은 것 : ① **숫자 근거** — `09 had a 10 knot headwind and 27 had a tailwind` 한 토막을 넣으면 의견이 사실에 묶입니다. ② **`we accepted`** 는 사실과 다릅니다 — 210노트를 실제로는 거부하셨습니다(P2B-Q4). ③ `he don't need` → `he did not need`, `has been handled it` → `was handled`.

---

## ICAO 6개 항목 등급

| 항목 | 등급 | EPTA_07 | 근거 |
|---|---|---|---|
| Pronunciation | **평가 보류** | 보류 | 등급 계산에서 제외. 다만 §발음 소견대로 **`Hotel Lima`(10회+)와 `request`(3회)가 SAMPLE_01 에 이어 또** 다르게 인식됐습니다. 실제로 채점되는 항목이라면 지금 가장 손봐야 할 곳입니다. |
| Structure | **Level 3** | 3 | 복창 문항은 안정적입니다. 자유응답에서 길어지면 깨집니다 — `it depends our Fail`, `we have to do choose the first is the original airport`, `it is our 0.1 with our passenger`, `anything else we anyway`. 시제 혼용(`he don't need`, `has been handled it`). |
| Vocabulary | **Level 3** | 3 | `until established`, `Our intention is to`, `be advised`, `Other than that`, `give way`, MEL 설명이 정확합니다. 반면 **`request`→`recast` 가 세 번**(SAMPLE_01 에서 5회), `Affirmative`(←AFFIRM), `Clear`(←Cleared) 세 번, `as a precaution` 같은 한 마디가 없어 의도가 모순되게 전달된 곳(P2B-Q6). |
| Fluency | **Level 3** | 3 | 32/32 응답하고 90초 세 문항 모두 분량을 채웠습니다. **다만 Level 2 에 가깝습니다** — 거의 모든 문항이 `Mmm` · `oh` · `Ah` · `Um` 으로 시작하고, Task C Q1 은 `we We worked` · `what we, what we, what we planned` 처럼 같은 말을 세 번씩 반복합니다. 한 문항에서 `Correction` 이 두 번 나온 곳도 있습니다(P2A-Q5). 분량을 채웠다는 점만으로 3 을 유지했습니다. |
| **Comprehension** | **Level 2** | 2 | **두 세트 연속이고, 이번에도 등급을 정한 항목입니다.** ① **P2B-Q4 — 210 ≤ 230 인데 NEGATIVE**(EPTA_07 P2A-Q4 와 동일 구조) ② **P1B-Q6 — 지시문 두 요구를 다 놓치고 이미 받은 EFC 를 다시 요청** ③ **P1B-Q3 — 보고하라는 자리에서 고도 변경을 요청** ④ **P2B-Q6 — 불이 없는데 소방대를 원한다며 모순된 사유, 두 질문 중 하나만** ⑤ P2B-Q3 의 15,000→1,500, P2B-Q2 의 10,000→1,000 ⑥ P2A-Q3 — 물은 내용이 상황의 변수가 아님 ⑦ P2A-Q1·P2B-Q1 — 거리 숫자 90·80 누락 ⑧ P2C-Q1 — Part Ⅱ A 의 2,200피트와 홀딩이 Part Ⅱ B 리포팅에 혼입 ⑨ P2A-Q4 — 결론은 맞으나 근거가 거꾸로. |
| Interactions | **Level 3** | 3 | **`one thing that could have been handled differently` 정확**(7세트 만에), **Task C Q2 주어가 관제사**, **사건명+조치 3기능 수행**(P2B-Q3), **intentions 구문**(P2B-Q5), **정정 3단 + 순서까지 정확**(P1B-Q5), 자가 `Correction` 3회, `AFFIRM` 사용. 반면 **지시문 마지막 토막 누락 7건**(P1B-Q1 사유·거리, P1B-Q4 대안, P2A-Q7 의도, P2A-Q8 가능여부, P2A-Q10 이유·요청, P2B-Q6 둘째 질문, P2B-Q8 갱신), `Give an example` **7세트 연속** 미수행. |

### 최종 등급 : **Level 2 (불합격)** — 세 세트 연속

---

## ★ 이번 세트의 요약 — "수락" 4문항 중 1개 반

이번 세트는 **받은 값이 충분해서 '수락'이 정답인 비교**를 네 개 넣은 세트였습니다.
EPTA_07 에서 두 비교 문항 모두 '거부'를 택하셔서, 거부가 기본값이 된 것인지 확인하려는
의도였습니다.

| 문항 | 내 한계 | 받은 값 | 정답 | 내 답 |
|---|---|---|---|---|
| Ⅰ-B Q1 | 필요 2,100 m | 2,400 m | 수락 | **수락 ✓** (숫자 없음) |
| Ⅰ-B Q6 | 홀딩 가능 45분 | EFC 20분 | 수락 | **지시문 미수행 ❌** |
| Ⅱ-A Q4 | 연료 65분 | 소요 25분 | 수락 | **수락 ✓** (근거 거꾸로) |
| Ⅱ-B Q4 | 제한 230 kt | 요구 210 kt | 수락 | **거부 ❌** |

**거부가 기본값은 아니었습니다** — 두 문항에서 수락을 고르셨습니다. 그런데 **네 문항 중
단 한 곳에서도 두 숫자를 나란히 말하지 않았습니다.** Ⅰ-B Q1 은 숫자가 아예 없고, Ⅱ-A Q4 는
"1시간밖에 없어서 불안하다"로 뒤집혔고, Ⅱ-B Q4 는 정확한 제한(230)을 말하면서 그것을 거부의
근거로 썼습니다.

**즉 값은 기억하는데, 두 값을 나란히 놓는 동작이 아직 없습니다.** 지시문에 `tell him both
speeds` · `tell him what distance you need` 라고 명시해도 나오지 않았습니다.

이제 **종이에 쓰는 것 말고 입으로 말하는 연습**이 필요합니다.

```
관제사가 숫자를 주면 →  "______ is enough — we need ______."
                        "______ is inside our limit of ______."
                        "______ is not enough — we need ______."
```

이 세 문장 중 하나를 **반사적으로** 꺼내면 비교가 자동으로 됩니다.

---

## 태스크별 총평

**Part Ⅰ Task A** — 네 문항 중 셋이 완전합니다. **Q3 의 두 토막 지시**(상승 + 교차제한)와 **Q4 의 조건 + 접근 허가**가 모두 성립했고, 이는 EPTA_07 에서 "앞쪽을 흘린다"고 지적한 항목이 해결된 것입니다. Q2 는 5요소 구조와 숫자 둘을 다 받았으나 **고유명사가 흐려졌습니다**(Oakport, KEVNA TWO departure). 숫자는 잡히고 **이름이 남은** 단계입니다.

**Part Ⅰ Task B** — 여섯 문항 중 하나가 완전, 셋이 부분, 둘이 실패입니다. **Q5 의 정정 3단은 순서까지 정확**해 이 세트 최고의 Ⅰ-B 응답입니다. 반면 **Q3 는 보고를 요청으로 바꿨고, Q6 는 지시문 두 요구를 다 놓쳤습니다.** Q1·Q4 는 공통적으로 **마지막 토막**이 빠졌습니다(필요 거리 / 대안 요청). 이 파트의 실패는 전부 **"지시문이 뭘 요구했는지"** 에서 나왔습니다.

**Part Ⅱ Task A** — 열한 문항 중 셋이 완전하고 실패는 없습니다. **Q2 의 5요소, Q7 의 위치보고(2,200피트 정확), Q9 의 지상 복창**이 안정적입니다. 그런데 ⚠️ 가 일곱 개이고 성격이 하나로 모입니다 — **결정은 하는데 이유·요청·의도가 빠집니다**(Q7 의도, Q8 가능여부, Q10 이유·요청). Q10 은 답이 다섯 단어였습니다. **30초를 다 쓰지 않는 것이 손해**입니다.

**Part Ⅱ Task B** — 아홉 문항 중 넷이 완전, 둘이 실패입니다. **Q3 이 이 세트의 성과**입니다 — 사건명·조치·요청 세 기능을 처음으로 다 말했습니다. Q5 의 intentions, Q7 의 결정+이유, Q9 의 최종 클리어런스도 성립했습니다. 실패한 둘은 **Q4(부등호 반대)와 Q6(두 질문 중 하나만)** 이고, 둘 다 **답이 지문에 그대로 있었던** 문항입니다.

**Part Ⅱ Task C** — **Q2 가 역대 최고**입니다. 주어·핵심 문구·마무리가 모두 정확하고 지적 내용이 타당합니다. Q1 은 사건명과 조치를 담았다는 점에서 개선이지만 **Part Ⅱ A 의 고도와 홀딩이 섞였고** 끊김이 심합니다. 두 문항 모두 **숫자 근거가 하나도 없습니다.**

---

## 다음 학습 과제

### 반복되는 약점 3개

1. **두 숫자를 나란히 말하기 (최우선, 세 세트 연속)** — 이번 세트 네 문항 중 한 곳도 하지 않았습니다. 종이에 적는 것만으로는 부족하고, **입에서 바로 나오는 문장**이 필요합니다 : `______ is enough — we need ______.` / `______ is inside our limit of ______.` / `______ is not enough — we need ______.` 세 개를 외워 두세요.

2. **지시문의 마지막 토막 (일곱 세트 연속, 이번 7건)** — P1B-Q1 사유·거리, P1B-Q4 대안, P2A-Q7 의도, P2A-Q8 가능 여부, P2A-Q10 이유·요청, P2B-Q6 둘째 질문, P2B-Q8 갱신. 전부 **한 토막만 붙이면 ✅** 였습니다. `progress/templates-90s.md` 부록의 **"지시문 단어 → 반드시 들어갈 토막"** 대응표를 보고 푸세요. `Give an example` 은 **일곱 세트 연속** 미수행입니다.

3. **만 단위 고도의 자릿수 (신규)** — P2B-Q2 의 10,000→1,000, P2B-Q3 의 15,000→1,500. 네 자리 피트(2,200·5,000)는 이제 정확한데 **다섯 자리에서 0 이 하나 빠집니다.** `one zero thousand` · `one five thousand` 처럼 **자릿수를 끊어** 말하면 사라집니다. 그리고 거리 숫자(90마일·80마일)가 두 번 통째로 빠졌습니다 — **Initial Situation 의 숫자를 메모 맨 위에 적어 두세요.**

### 외워야 할 표현 5개

| 영어 | 뜻 | 쓰는 상황 |
|---|---|---|
| `210 is inside our limit of 230, so we can accept it.` | 210은 우리 제한 230 안이므로 수락할 수 있습니다 | **받은 값 < 내 한계 → 수락.** 이번 세트 최우선 |
| `We can accept the 20-minute delay — our limit is 45 minutes.` | 20분 지연은 수락 가능합니다, 우리 한계는 45분입니다 | 수락 + 한계를 함께. 연료 − 대체 소요 = 홀딩 가능 시간 |
| `And be advised, in the cruise we saw a drone about 2 miles at our ten o'clock.` | 참고로, 순항 중 10시 방향 2마일에 드론을 봤습니다 | **보고**이지 요청이 아니다. `be advised` 로 연다 |
| `Affirm, we would like the fire service standing by as a precaution.` | 네, 예방 차원에서 소방대 대기를 요청합니다 | `as a precaution` 이 있어야 이유가 성립한다 |
| `Engine number 2 is now running normally at reduced thrust.` | 2번 엔진은 추력을 줄인 상태에서 정상 작동 중입니다 | 갱신은 **"지금 어떤가"**. 엔진 번호를 반드시 |

### 발음 — 이번에도 같은 두 단어

**`Hotel Lima` 와 `request`.** SAMPLE_01 에서 최우선으로 짚었고 이번에도 그대로입니다.
전자는 10회 이상 `hotel in my` 로, 후자는 3회 `recast` 로 인식됐습니다. 다음에 녹음하실 때
이 둘이 어떻게 인식되는지만 보시면 개선 여부가 바로 보입니다.
