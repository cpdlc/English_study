# EPTA_03 채점 결과 — 2026-10-19 (세션 20261018-122153)

31/31 응답, 무응답 없음. 이 세트는 **test04 계열(`tree`=3, 한국 배경, 복합 지시 강화) + 이
프로젝트 첫 MAYDAY** 라 앞 두 세트보다 조건이 무거웠다.

| | EPTA_01 1차 | EPTA_01 재응시 | EPTA_02 | **EPTA_03** |
|---|---|---|---|---|
| ✅ | 1 | 6 | 11 | **11** |
| ⚠️ | 15 | 20 | 16 | 13 |
| ❌ | 16 | 6 | 5 | **7** |
| 최종 | Level 1 | Level 2 | Level 3 | **Level 3 (유지)** |

---

## Part Ⅰ TASK A

**P1A-Q1** ✅
문제 : Ground : HL123, taxi to holding point runway tree 6 via Alpha.
내 답안 : Taxi to holding point runway 36 via a hl123
** 정답 : Taxi to holding point runway 36 via Alpha, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **`tree 6` 을 runway 36 으로 정확히 해석했습니다.** 처음 접하는 표기인데 이 세트 전체에서 `tree` 를 한 번도 틀리지 않았습니다. `via a` 의 한 글자 축약은 감점하지 않았습니다.

---

**P1A-Q2** ⚠️
문제 : Tower : HL123, after departure climb straight ahead to 2,000 feet, cleared for takeoff runway tree 6, wind calm.
내 답안 : after airborn climb to 2000 , cleared for take off runway 36 hl123
** 정답 : After departure climb straight ahead to 2,000 feet, cleared for takeoff runway 36, HL123.
- 누락된 필수 readback 요소 : **`straight ahead`** — 이륙 후 어느 방향으로 상승하는지를 정하는 지시입니다. 빠지면 선회해도 되는 것으로 읽힙니다.
- 표준교신용어 오류 : `after airborn` → `after departure` (지시받은 표현을 그대로)
- 코멘트 : **`2,000` 을 피트로 정확히 받았고**(FL 로 바꾸지 않았습니다), `cleared for takeoff` 도 정확합니다. `wind calm` 을 복창에서 뺀 판단도 맞습니다.

---

**P1A-Q3** ✅
문제 : Center : HL123, climb and maintain flight level tree 50, contact Sejong Control on 128.25.
내 답안 : climb and maintain fl350 contact sejeong control 128.25 hl123
** 정답 : Climb and maintain flight level 350, contact Sejong Control on 128.25, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **기관명과 주파수를 둘 다 복창했습니다.** EPTA_02 의 같은 유형 문항에서 기관명이 빠졌던 것이 고쳐졌습니다. `tree 50` → FL350 해석도 정확합니다.

---

**P1A-Q4** ⚠️
문제 : Delivery : HL123, cleared to Muan Airport via the PALDA ONE departure, maintain 5,000 feet, squawk 5721.
내 답안 : clear to muan airport pade 1 departure 5000feet squawk 5721 hl123
** 정답 : Cleared to Muan Airport via the PALDA ONE departure, maintain 5,000 feet, squawk 5721, HL123.
- 누락된 필수 readback 요소 : **`maintain`** — 고도 숫자만 있고 지시 동사가 없습니다. 유지인지 상승인지 확인되지 않습니다.
- 표준교신용어 오류 : SID 를 `PALDA ONE` 이 아니라 `pade 1` 로 들었습니다. `clear` → `cleared`.
- 코멘트 : 목적지·고도(5,000 피트)·squawk 는 정확합니다. `clear`/`cleared` 는 이번 세트에서 Q2 는 맞고 Q4 는 틀렸습니다 — 세트마다 반씩 갈리는 패턴이 세 세트째입니다.

---

## Part Ⅰ TASK B

**P1B-Q1** ⚠️
문제 : You have just been handed over to Sejong Control while climbing out. You are passing 9,000 feet for flight level 180, and you are not sure whether your cleared level has been changed. Contact Sejong Control, report your present altitude, and confirm your cleared level.
내 답안 : sejong control hl123 maintaining 9000 verify climb to fl180
** 교정 답안 : Sejong Control, HL123, climbing through 9,000 feet for flight level 180. Request you verify our cleared level.
- 누락된 필수 readback 요소 : 해당 없음 (발신 문항)
- 표준교신용어 오류 : **`maintaining 9000` 은 사실과 다릅니다.** 지문은 "passing 9,000 feet **for** flight level 180" — 9,000 을 유지 중이 아니라 통과하며 상승 중입니다. `maintaining` 이라고 하면 관제사는 9,000 에 머무는 것으로 압니다.
- 코멘트 : **기관 호출을 했고, 피트와 FL 을 둘 다 언급했습니다** — 두 단위를 섞은 문항인데 구분해서 썼습니다. `verify` 로 확인 기능도 수행했습니다. 고칠 것은 **상태 동사 하나**입니다.

---

**P1B-Q2** ⚠️
문제 : While crossing PALDA you encountered moderate turbulence for about two minutes at flight level tree 50. You changed frequency before you could report it, so the new controller does not know about it yet. Acknowledge the instruction, and report the turbulence you encountered.
Center : HL123, Sejong Control, descend to flight level 2 tree 0, report reaching.
내 답안 : decent fl230 before reaching hl123 , be advised we experienced turbulence 2min before palda
** 교정 답안 : Descend to flight level 230, wilco report reaching, HL123. And be advised, we experienced moderate turbulence for about two minutes crossing PALDA at flight level 350.
- 누락된 필수 readback 요소 : **난기류를 겪은 고도(FL350)** — 난기류 보고에서 고도는 핵심 정보입니다. 뒤따르는 항공기가 그 고도를 피할지 판단하는 근거입니다.
- 표준교신용어 오류 : **`report reaching` 을 `before reaching` 으로 바꿨습니다.** "도달하면 보고하라"가 "도달 전에"가 되어 뜻이 달라집니다.
- 코멘트 : **복합 지시의 두 부분을 모두 수행했습니다** — 복창과 난기류 보고. `be advised` 로 보고를 연 것도 적절합니다. 고친 것은 ① `before reaching` → `wilco report reaching` ② 고도 보충입니다.

---

**P1B-Q3** ✅
문제 : Centre instructed you to maintain Mach decimal 7 8 for separation. You have been in light turbulence and you reduced to Mach decimal 7 4, and you are flying at decimal 7 4 now. Now ATC contacts you. Respond accordingly.
Center : HL123, confirm maintaining Mach decimal 7 8?
🖥 [ Mach .74 / turbulence ]
내 답안 : negative mainting .74 now due to turbulence hl123
** 정답 : Negative, maintaining Mach decimal 7 4 due to turbulence, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **세 세트 만에 완성됐습니다.** EPTA_01 1차·재응시는 `affirmative` 로 정반대, EPTA_02 는 `Negative` 로 시작했지만 값을 290(실제 270)으로 틀렸습니다. 이번에는 **NEGATIVE + 실제 값 + 사유** 세 토막이 다 있습니다.

---

**P1B-Q4** ❌
문제 : The routing direct to TOPLA requires RNP 1. Your number two navigation receiver is inoperative today, so you are not RNP 1 capable. Listen to the controller, make a readback of what you can accept, and a request with a reason.
Center : HL123, cleared direct TOPLA.
내 답안 : cleared direct topla hl123 , we cannot use rnp1 approach
** 교정 답안 : Unable direct TOPLA, HL123 — our number two navigation receiver is inoperative, so we are not RNP 1 capable. Request to remain on the airway, or radar vectors.
- 누락된 필수 readback 요소 : **`unable` 과 대안 요청**
- 표준교신용어 오류 : **할 수 없는 것을 그대로 복창했습니다.** `cleared direct TOPLA` 를 복창하면 그 경로를 수락한 것이 되는데, 실제로는 장비 때문에 비행할 수 없습니다. `rnp1 approach` 는 접근 방식이 아니라 **항로 항법 요건**이므로 단어도 맞지 않습니다.
- 코멘트 : **EPTA_02 P1B-Q4 와 똑같은 실패입니다.** 지시문의 `make a readback of what you can accept` 는 "받아들일 수 있는 것만 복창하라"는 뜻입니다. 사유를 밝힌 것(`we cannot use rnp1`)은 절반의 성과지만, 앞에 `unable` 이 없고 뒤에 대안이 없어 관제사가 무엇을 해줘야 할지 알 수 없습니다.

---

**P1B-Q5** ✅
문제 : Centre instructed you to turn left heading 2 tree 0. You read the number the wrong way round and you are now steady on heading 2 0 tree. Now ATC contacts you. Respond accordingly.
Center : HL123, say your heading.
내 답안 : hd203 , we had set 203 by mistake left heading 230 hl123
** 정답 : Heading 203, HL123. Correction — we had 203 set by mistake, now turning left to heading 230.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음 (`hd` 축약은 감점하지 않습니다)
- 코멘트 : **현재 상태 → 오류 사실 → 정정 조치, 세 토막이 다 있습니다.** EPTA_01·02 의 같은 유형 문항에서 2세트 연속 "값만 말하고 정정을 안 하던" 것이 고쳐졌습니다.

---

**P1B-Q6** ✅
문제 : Your diversion around a closed area has used more fuel than you planned. You now have one hour forty minutes of fuel on board, and your alternate needs one hour ten. You are level at flight level tree 50 approaching NOSOK. Contact Sejong Control. Report your fuel state, and request a more direct routing.
🖥 [ 1 hour 40 minutes / request direct ]
내 답안 : sejong control hl123 , we have 1 hour 40 min on board , at fl350 , so request direct nosok , no delay
** 정답 : Sejong Control, HL123, level at flight level 350, fuel on board one hour 40 minutes. Request direct NOSOK.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `no delay` 는 관제사가 조종사에게 쓰는 말입니다. 조종사 쪽에서는 불필요합니다.
- 코멘트 : **기관 호출 + 연료 보고 + 직항 요청, 세 요소를 모두 담았습니다.** 발신형 복합 문항을 온전히 수행한 사례입니다.

---

## Part Ⅱ TASK A

**P2A-Q1** ⚠️
문제 : ☞ Contact Sejong Control and report your position.
(Initial Situation : level at flight level tree 50 and approaching PALDA, en route to Muan Airport)
내 답안 : sejong control hl123 maintingin fl350 direct palda muan airport
** 정답 : Sejong Control, HL123, level at flight level 350 approaching PALDA, inbound Muan.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **`direct PALDA` 는 관제사가 주는 지시의 형태입니다.** 조종사 위치보고는 `approaching PALDA` 입니다.
- 코멘트 : 기관 호출과 고도는 정확합니다. `maintingin` 오탈자는 감점하지 않았습니다.

---

**P2A-Q2** ✅
문제 : ☞ Listen to the controller, give a full readback, and inquire how many extra track miles this will add.
Center : HL123, Sejong Control, the military training area west of NOSOK is active, so route direct KARBU then NOSOK, descend to flight level 2 tree 0.
내 답안 : direct calbu then nosok decent fl230 hl123 , request how many extra miles will add
** 정답 : Direct KARBU then NOSOK, descend to flight level 230, HL123. How many extra track miles will that add?
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `request how many extra miles will add` — REQUEST 뒤에는 명사구가 옵니다. 절을 붙이려면 그냥 질문문으로 묻는 편이 자연스럽습니다.
- 코멘트 : **복창과 문의를 둘 다 했습니다.** `calbu` 오탈자는 감점하지 않았습니다.

---

**P2A-Q3** ✅
문제 : ☞ Contact the controller, report your fuel state, and request direct NOSOK as soon as the area is clear.
내 답안 : sejong controll hl123 direct nosok as soon as possible , we have 1hour 45 min on board
** 정답 : Sejong Control, HL123, we have one hour 45 minutes of fuel on board. Request direct NOSOK as soon as the area is clear.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `request` 라는 단어가 빠졌습니다 — 요청임은 전달되지만 표준형은 `Request direct NOSOK` 입니다.
- 코멘트 : 기관 호출·연료·요청 세 요소를 모두 담았습니다.

---

**P2A-Q4** ❌
문제 : ☞ Listen to the controller and give a full readback.
Center : HL123, roger, expect direct NOSOK in about ten miles. Descend to 1 tree thousand feet, contact Muan Approach on 119.2.
내 답안 : direct nosok in 10min decent fl130 contact muan app 119.2 hl123
** 정답 : Expect direct NOSOK in about ten miles, descend to 13,000 feet, contact Muan Approach on 119.2, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **① `ten miles`(거리)를 `10min`(시간)으로 바꿨습니다.** ② **`1 tree thousand feet`(13,000 피트)를 `fl130` 으로 바꿨습니다.** 13,000 피트와 FL130 은 기압 설정이 다른 **별개의 고도**입니다 — 전이고도 아래는 QNH, 위는 표준기압입니다.
- 코멘트 : **이번 세트의 최우선 타깃이었던 피트↔FL 혼동이 여기서 재발했습니다.** 다만 바로 다음 문항 P2A-Q5 와 P2B-Q1·Q4 에서는 두 단위를 정확히 구분했으므로, **네 번 중 세 번은 맞췄습니다.** 구분을 모르는 것이 아니라 받아적을 때 단위를 함께 적지 않아 생기는 문제입니다.

---

**P2A-Q5** ✅
문제 : ☞ Contact Muan Approach and report your passing altitude.
(Situation Update : You are now descending through flight level 150 for 1 tree thousand feet.)
내 답안 : muan approach hl123 decending through fl150 to 13000
** 정답 : Muan Approach, HL123, descending through flight level 150 for 13,000 feet.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `to` → `for` (경미)
- 코멘트 : **기관 호출 + 통과고도 + 목표고도, 그리고 FL 과 피트를 정확히 구분했습니다.** 바로 앞 문항에서 틀린 것을 여기서는 맞췄습니다.

---

**P2A-Q6** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, Muan Approach, descend to 4,000 feet, reduce speed to 210 knots, expect the NOSOK TWO arrival, ILS runway tree 6, Muan altimeter 1012.
내 답안 : decent 4000 reduce speed 210 expect nosok 2 arrival ils runway 36 altimeter 1012 hl123
** 정답 : Descend to 4,000 feet, reduce speed to 210 knots, expect the NOSOK TWO arrival, ILS runway 36, altimeter 1012, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **다섯 요소 전부 정확합니다** — 고도·속도·절차명·활주로·고도계. 세 세트 연속으로 이 유형(가장 긴 접근 복창)을 잡고 있습니다.

---

**P2A-Q7** ❌
문제 : ☞ Listen to the controller's question and respond accordingly. Tell him what you need to know before you decide.
Approach : HL123, the Airbus A321 ahead of you reported braking action medium on runway tree 6, and it is still raining. Are you happy to continue, or do you want the longer runway at Daegu?
내 답안 : contineue and request reduce speed 190 hl123
** 교정 답안 : HL123, before we decide — request the runway length available and how recent that braking action report is. If it is still medium we are able to continue to runway 36.
- 누락된 필수 readback 요소 : **결정하기 전에 알아야 할 것을 묻지 않았습니다**
- 표준교신용어 오류 : `request reduce speed 190` 은 지시문과 무관한 요청입니다. 속도를 줄이는 것은 제동거리 판단과 직접 연결되지 않습니다.
- 코멘트 : **EPTA_02 P2A-Q6 와 똑같은 실패입니다 — 3세트 연속.** 지시문에 `Tell him what you need to know before you decide` 라고 **해야 할 일이 그대로 적혀** 있었습니다. 젖은 활주로에 medium 제동으로 내릴지 판단하려면 활주로 길이, 보고 시점, 현재 강우 강도 같은 정보가 필요합니다. 묻지 않고 `continue` 라고 답하면 근거 없이 결정한 것이 됩니다.

---

**P2A-Q8** ❌
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, roger, turn left heading 020, descend to 2,500 feet until established, cleared for the ILS runway tree 6 approach, contact Muan Tower on 118.55.
내 답안 : trun left hd202 decent 2500 until established expect ils runway 36 contact muan tower 118.55 hl123
** 정답 : Turn left heading 020, descend to 2,500 feet until established, cleared for the ILS runway 36 approach, contact Muan Tower on 118.55, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **① heading 020 을 202 로 뒤집었습니다.** ② **`cleared for` 를 `expect` 로 바꿨습니다** — 접근 **허가**를 받은 것인데 "예상"으로 복창하면 허가 확인이 되지 않습니다.
- 코멘트 : 두 오류 모두 반복입니다. 숫자 뒤집기는 **같은 세트 P1B-Q5 가 바로 그 상황을 정정하는 문항**이었는데 실제로 또 뒤집었습니다. `cleared for` → `expect` 는 EPTA_02 P2A-Q8 과 동일하고, 접근 허가 복창 누락은 **세 세트 연속**입니다. 고도·주파수·기관명은 정확했습니다.

---

**P2A-Q9** ⚠️
문제 : ☞ Contact Muan Tower, report your position, and request the latest braking action.
(Situation Update : You are established on the ILS for runway tree 6 and passing 2,000 feet.)
내 답안 : muan tower hl123 2500ft established on the final request braking action on the runway
** 정답 : Muan Tower, HL123, established on the ILS runway 36, passing 2,000 feet. Request the latest braking action.
- 누락된 필수 readback 요소 : 활주로 36 (경미)
- 표준교신용어 오류 : **고도를 2,000 이 아니라 2500 으로** 말했습니다. 지문에 `passing 2,000 feet` 로 나와 있습니다 — 바로 앞 문항의 2,500 과 섞인 것으로 보입니다.
- 코멘트 : **기관 호출 + 위치 + 요청, 세 요소를 모두 담았습니다.** 복합 지시 수행은 성공입니다. 값 하나만 앞 문항에서 끌려왔습니다.

---

**P2A-Q10** ⚠️ (90초 Follow-up)
문제 : In this situation, the controller told you the aircraft ahead had reported braking action medium on a wet runway. What did you want to know before you decided, and why did that matter to you? From your own experience, what makes you decide to divert to a longer runway instead of continuing? Give an example.
내 답안 : if airbus is on the runway longer then i expected , we have to slow down , and if the rain fall more than before , even thought the controller told that the runway braking action is medium , it does'nt work as medium as the aircraft do brake , so in this case , we have to divert where the weather is good and longer runway
** 교정 답안 : Before I decided, I wanted to know the runway length available and how recent that braking action report was, because a medium report from ten minutes ago means little if the rain has got heavier since. Even though the controller said the braking action is medium, the actual braking of my aircraft may not match that report. So in that case we have to divert to an airport with better weather and a longer runway. For example, if the rain gets heavier and the next aircraft reports braking action poor, I would not continue to a 2,000 metre wet runway with a tailwind — I would take Daegu even though it is 40 miles further.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **생각의 내용은 좋습니다** — "medium 이라고 들었어도 실제 제동은 그만큼 안 나올 수 있다"는 것은 정확한 판단이고, 질문 ②(언제 divert 하는가)에 답했습니다. 빠진 것은 ① **"무엇을 알고 싶었나"에 직접 답하지 않은 것**(실제로 P2A-Q7 에서 묻지 않았으므로 여기서도 비었습니다) ③ **`Give an example.` — 4세트 연속 예시를 들지 않았습니다.** 문법 교정 : `then i expected` → `than I expected`, `the rain fall more` → `the rain gets heavier`, `as medium as the aircraft do brake` → 문장이 성립하지 않습니다, `divert where the weather is good and longer runway` → `divert to an airport with better weather and a longer runway`.

---

## Part Ⅱ TASK B

**P2B-Q1** ✅
문제 : ☞ Contact Sejong Control and report your position.
(Initial Situation : climbing through 8,000 feet for flight level 180 after departure from Gimhae)
내 답안 : sejong controll hl123 climb throught 8000 to fl18-
** 정답 : Sejong Control, HL123, climbing through 8,000 feet for flight level 180.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `climb` → `climbing` (상태 보고), `to` → `for` (경미)
- 코멘트 : **피트와 FL 을 정확히 구분했습니다** — `8000` 과 `fl180`. 기관 호출도 있습니다. `fl18-` 은 입력이 끊긴 것으로 보고 FL180 으로 읽었습니다.

---

**P2B-Q2** ✅
문제 : ☞ Listen to the controller and give a full readback.
Center : HL123, Sejong Control, radar contact, climb and maintain flight level 2 tree 0, proceed direct TOPLA.
내 답안 : climb and maintain fl230 , direct topla hl123
** 정답 : Climb and maintain flight level 230, direct TOPLA, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : `2 tree 0` → FL230 해석 정확합니다.

---

**P2B-Q3** ⚠️
문제 : ☞ Declare an emergency, state the nature of the problem, and request a return to Gimhae.
(Situation Update : Passing flight level 150 you get an ENGINE 1 FIRE warning. You have shut the engine down and discharged the first bottle, and the warning has now gone out.)
내 답안 : mayday maydaya mayday hl123 passing fl150 1 eng fire and turn off the engine , request return to kimhae
** 교정 답안 : Mayday, mayday, mayday, Sejong Control, HL123, engine number one fire, engine shut down, passing flight level 150, request immediate return to Gimhae.
- 누락된 필수 readback 요소 : **관제기관명** — MAYDAY 3회 다음에는 `[기관명] + [콜사인]` 이 옵니다 (`atc-terminology.md` §8-1 비상 선언 7단계).
- 표준교신용어 오류 : `turn off the engine` → **`engine shut down`** 이 표준입니다.
- 코멘트 : **첫 MAYDAY 인데 구조가 거의 완성됐습니다.** MAYDAY ×3, 콜사인, 사건의 성격, 현재 위치, 요청까지 다 있습니다. 빠진 것은 기관명 하나입니다. 비상 상황에서 기관명이 빠지면 여러 항공기가 듣는 주파수에서 누구에게 하는 말인지 불분명해집니다.

---

**P2B-Q4** ⚠️
문제 : ☞ Listen to the controller, give a full readback and say your intentions.
Center : HL123, roger your mayday, turn left heading 180, descend to 1 tree thousand feet, Gimhae is at your eight o'clock and 25 miles. Say your intentions.
내 답안 : turn left 180 decent 13000 direct kimhae airport hl123
** 교정 답안 : Turn left heading 180, descend to 13,000 feet, HL123. Our intention is to return to Gimhae for an ILS approach on one engine, and we will need the emergency services standing by.
- 누락된 필수 readback 요소 : `heading` (숫자만 있습니다)
- 표준교신용어 오류 : 없음
- 코멘트 : **`1 tree thousand feet` 를 13,000 으로 정확히 받았습니다** — P2A-Q4 에서 FL130 으로 틀렸던 바로 그 표현입니다. 다만 **intentions 가 빈약합니다.** `direct kimhae airport` 는 목적지일 뿐이고, 어떤 접근을 할 것인지, 무엇이 필요한지가 없습니다. 관제사가 `Say your intentions` 라고 명시했습니다.

---

**P2B-Q5** ❌
문제 : ☞ Listen to the controller's question and provide the requested information.
Center : HL123, say fuel endurance and souls on board.
(Situation Update : You have two hours 50 minutes of fuel remaining and 164 people on board.)
내 답안 : we have 2hurs fuel on board hl123
** 정답 : HL123, fuel endurance two hours 50 minutes, 164 souls on board.
- 누락된 필수 readback 요소 : **① 연료의 분 단위(50분) ② souls on board 164 — 질문의 절반이 통째로 빠졌습니다**
- 표준교신용어 오류 : 없음
- 코멘트 : 관제사가 **두 가지**를 물었습니다. 탑승 인원은 소방·구조 규모를 정하는 숫자라 비상 상황에서 가장 중요한 정보 중 하나입니다. 연료도 "2시간"과 "2시간 50분"은 대체공항 선택을 바꿀 수 있는 차이입니다. 지문에 두 값이 다 적혀 있었습니다.

---

**P2B-Q6** ❌
문제 : ☞ Listen to the controller and state your intentions, with a reason.
Center : HL123, Gimhae is reporting a crosswind of 20 knots on runway tree 6, and Daegu is 40 miles further with calm wind and a longer runway. Which would you rather have?
내 답안 : deagu is available hl123
** 교정 답안 : HL123, we will divert to Daegu. With one engine out we want the calm wind and the longer runway, and we have the fuel for it. Request vectors to Daegu.
- 누락된 필수 readback 요소 : **사유** — 지시문에 `with a reason` 이 명시돼 있습니다
- 표준교신용어 오류 : **`is available` 은 의도 진술이 아닙니다.** "가능하다"가 아니라 "가겠다"라고 해야 관제사가 벡터를 줍니다.
- 코멘트 : 선택 자체(Daegu)는 단발 상태에서 타당합니다 — 측풍 20kt 보다 무풍에 긴 활주로가 낫습니다. 문제는 **그 판단 근거를 말하지 않은 것**입니다. 비상 상황에서 조종사의 의도와 이유는 관제사가 다음 조치를 정하는 근거입니다. EPTA_01 의 `whatever`, EPTA_02 의 짧은 응답에 이어 **"선택은 하지만 이유를 안 붙이는"** 패턴이 남아 있습니다.

---

**P2B-Q7** ⚠️
문제 : ☞ Contact approach, give them an update of your situation, and state what you will need on landing.
내 답안 : we checklist then 1 engine is working well, and stablized on the aircraft , request emergency equipment on the runway standby hl123
** 교정 답안 : Gimhae Approach, HL123. We have completed the checklist, the fire has not come back and the aircraft is stable on one engine. Request the emergency services standing by on the runway.
- 누락된 필수 readback 요소 : **기관 호출**
- 표준교신용어 오류 : `we checklist` → `we have completed the checklist`, `stablized on the aircraft` → `the aircraft is stable`, `emergency equipment` → `emergency services`(둘 다 통하지만 후자가 표준)
- 코멘트 : **소방대 대기를 요청했습니다.** EPTA_01·02 에서 2세트 연속 빠뜨렸던 `what you will need` 가 이번에 들어왔습니다. 남은 것은 기관 호출과 문장 다듬기입니다.

---

**P2B-Q8** ❌
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, Gimhae Approach, turn right heading 290, descend to 2,500 feet until established, cleared for the ILS runway tree 6 approach, the emergency services are standing by.
내 답안 : turn hd290 decent 2500 until established ils 36 approached hl123
** 정답 : Turn right heading 290, descend to 2,500 feet until established, cleared for the ILS runway 36 approach, HL123.
- 누락된 필수 readback 요소 : **① 선회 방향 `right` ② 접근 허가 `cleared for`**
- 표준교신용어 오류 : `ils 36 approached` 는 허가 복창이 아닙니다. `cleared for` 가 있어야 허가를 받았다는 확인이 됩니다.
- 코멘트 : **접근 허가 복창 누락이 세 세트 연속입니다.** EPTA_01(1차·재응시), EPTA_02 P2A-Q8, 그리고 이번 세트에서 두 번(P2A-Q8, P2B-Q8). 다만 EPTA_02 P2B-Q8 에서는 한 번 성공했으므로 "할 수 있는데 매번 하지는 못하는" 단계입니다. 선회 방향도 P2A-Q8 에서는 `left` 를 넣었는데 여기서는 빠졌습니다.

---

**P2B-Q9** ⚠️
문제 : ☞ Listen to the controller's question and respond accordingly.
Approach : HL123, do you want to cancel the emergency now that the engine is secured, or keep it active until you are on the ground?
내 답안 : active on the ground hl123
** 정답 : HL123, we will keep the emergency active until we are on the ground.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **판단은 맞습니다** — 엔진이 정지된 상태로 단발 착륙하므로 접지할 때까지 비상을 유지하는 것이 옳습니다. 다만 두 단어로는 둘 중 어느 쪽인지 관제사가 되물어야 합니다. 비상 취소 여부는 소방대 배치를 좌우하므로 **문장으로 분명히** 답해야 합니다.

---

## Part Ⅱ TASK C

**P2C-Q1** ⚠️ (90초)
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
내 답안 : during approach phase , there was a 1 engine fire and we could not use the engine , so we called emergency and request direct kimhae to controller , and they ask how many fuels on board to check , and they gave us some information about the runway wind situation that kimhae have cross wind and they gave us another option about daegu which calm but it is far , 40 miles, after checklist we get stablized with aircraft and request direct kimhae , and we requested emergency equipment standing by on the runway.
** 교정 답안 : During the climb out of Gimhae, passing flight level 150, we had an engine number one fire. We shut the engine down and discharged a bottle, and the warning went out, so we were flying on one engine. We declared a mayday and requested an immediate return to Gimhae. The controller asked for our fuel endurance and souls on board, and then told us Gimhae had a 20 knot crosswind while Daegu was 40 miles further with calm wind and a longer runway. We chose Daegu for that reason. After the checklist the aircraft was stable on one engine, and we requested the emergency services standing by on the runway.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **전개를 거의 다 담았습니다** — 비상 선포, 연료 질문, 측풍 정보, Daegu 대안, 체크리스트, 소방대 요청. EPTA_01·02 에서 전개의 큰 축이 통째로 빠지던 것에 비하면 분명한 개선입니다. 그러나 **사실 두 가지가 틀렸습니다.** ① `during approach phase` — 이 사건은 **이륙 후 상승 중**(FL150 통과)이었습니다. ② 본인은 P2B-Q6 에서 **Daegu 를 선택**했는데 여기서는 `request direct kimhae` 라고 썼습니다 — 자기 답과 모순입니다. souls on board 도 빠졌습니다. 문법 교정 : `there was a 1 engine fire` → `we had an engine number one fire`, `they ask` → `the controller asked`, `how many fuels` → `our fuel endurance`, `we get stablized with aircraft` → `the aircraft was stable`.

---

**P2C-Q2** ⚠️ (90초)
문제 : How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
내 답안 : I think we handled it well , it is rare situation that the 1 engine fire and only one engine operation, but the pilot started the checklist as know as the situation and they made the aircraft safety , also the controller gave them the runway situation updated and gave them another option even thought it is far more than the original one, also what the pilot request the emergency on the runway is the best what he did , the one thing what i want to change is that the controller make the aircraft use the original airport use more longer and standby the emergency equipment first , it may release the pilots mind , so i think all the people were handled it well
** 교정 답안 : I think the controller handled it well. He gave us the runway situation at Gimhae straight away, and he offered another option at Daegu even though it was 40 miles further, so we could choose the safer runway ourselves. He also accepted our request for the emergency services without any delay. One thing that could have been handled differently is that he could have put the emergency services on standby at both airports from the start, instead of waiting for us to ask. That would have taken one job off the crew at a busy time.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **`the one thing what i want to change is …` — 4세트 만에 질문 후반부에 답했습니다.** EPTA_01(1차·재응시)·EPTA_02 에서 `could have been handled differently` 를 계속 비웠던 항목입니다. 관제사 평가도 근거와 함께 들었습니다. 남은 것은 **첫 문장이 또 `I think we handled it well`** 이라는 점입니다 — 질문은 관제사를 묻습니다(3세트 연속). 그리고 제안 내용이 문법적으로 깨져 뜻이 잘 전달되지 않습니다 : `make the aircraft use the original airport use more longer` 는 동사가 겹쳐 성립하지 않습니다. 문법 교정 : `as know as the situation` → `as soon as he saw the situation`, `made the aircraft safety` → `kept the aircraft safe`, `what the pilot request … is the best what he did` → `asking for the emergency services was the right call`, `all the people were handled it well` → `everyone handled it well`.

---

## ICAO 6개 항목 등급

| 항목 | 등급 | EPTA_02 | 근거 |
|---|---|---|---|
| Pronunciation | **평가 보류** | 보류 | 텍스트 답안이라 판단 근거가 없습니다. 등급 계산에서 제외합니다. |
| Structure | **Level 3** | 3 | 복문을 꾸준히 쓰고 자유응답 분량도 유지됩니다. 다만 **문장이 성립하지 않는 곳이 늘었습니다** — `as medium as the aircraft do brake`, `as know as the situation`, `make the aircraft use the original airport use more longer`, `all the people were handled it well`. 교신 응답에서도 `we checklist`, `stablized on the aircraft` 처럼 동사가 빠집니다. |
| Vocabulary | **Level 3** | 3 | `fuel endurance`, `braking action`, `established`, `checklist` 등은 맥락에 맞게 씁니다. 그러나 **핵심 단어 오류가 남습니다** : `turn off the engine`(→ shut down), `is available`(의도 아님), `rnp1 approach`(항로 요건인데 접근으로), `emergency equipment`(→ emergency services). |
| Fluency | **Level 3** | 3 | 90초 문항 두 개와 Follow-up 모두 분량을 채웠습니다. 다만 30초 문항에 `deagu is available hl123`, `active on the ground hl123`, `we have 2hurs fuel on board hl123` 처럼 **정보가 모자란 짧은 응답이 세 개** 남아 있습니다. |
| Comprehension | **Level 3** | 3 | **`tree` 표기를 한 번도 틀리지 않았습니다** — 처음 접하는 표기인데 runway 36, FL350, FL230, 13,000 을 전부 정확히 해석했습니다. 그러나 값 변형이 계속됩니다 : `1 tree thousand feet`→`fl130`, `ten miles`→`10min`, `heading 020`→`202`, `2,000 feet`→`2500`, `report reaching`→`before reaching`, `cleared for`→`expect`, 2시간 50분→2시간, 상승 중→`approach phase`. |
| Interactions | **Level 3** | 3 | **기관 호출 7건 성공**(P1B-Q1·Q6, P2A-Q1·Q3·Q5·Q9, P2B-Q1), **복합 지시 6건 온전 수행**(P1B-Q2·Q6, P2A-Q2·Q3·Q9, P2B-Q7) — EPTA_02 의 4건·4건에서 늘었습니다. 다만 P2A-Q7 의 "결정 전에 묻기"가 **3세트 연속 실패**이고, P2B-Q5 는 질문의 절반만, P2B-Q6 는 사유 없이, P2B-Q9 는 두 단어로 답했습니다. |

### 최종 등급 : **Level 3 (불합격) — EPTA_02 와 동일, 유지**

세 세트 연속 올라오다가 이번에 멈췄습니다. 다만 **이 세트는 조건이 달랐습니다** — `tree` 표기,
한국 배경, 지시문 2~3기능, 그리고 처음 겪는 MAYDAY·fuel/SOB 였습니다. 새 조건에서 등급을
유지한 것이지 떨어진 것은 아닙니다. 합격선 Level 4 까지 1단계 남아 있습니다.

---

## 태스크별 총평

**Part Ⅰ Task A** — 네 문항 중 둘이 완전합니다. **`tree` 를 네 번 다 정확히 해석했고**, 주파수·squawk·기관명도 맞췄습니다. 빠진 것은 지시 동사입니다 — Q2 의 `straight ahead`, Q4 의 `maintain`. 숫자는 챙기는데 **그 숫자가 무엇을 하라는 것인지를 빠뜨리는** 양상입니다.

**Part Ⅰ Task B** — 이번 세트에서 가장 좋은 파트입니다. Q3 의 `Negative + 실제 값 + 사유` 와 Q5 의 `현재 상태 + 오류 + 정정` 은 각각 세 세트, 두 세트 만에 완성된 구조입니다. Q6 도 기관 호출·연료·요청 세 요소를 다 담았습니다. 남은 것은 Q4 — **할 수 없는 것을 그대로 복창하는** 문제가 EPTA_02 와 똑같이 반복됐습니다.

**Part Ⅱ Task A** — 기관 호출이 네 턴 모두 들어갔고 복합 지시도 네 턴을 해냈습니다. 실패한 둘은 성격이 다릅니다. Q4 는 **피트를 FL 로 바꾼 값 오류**이고, Q7 은 **지시문이 "물어보라"고 했는데 묻지 않은 것**입니다. Q8 에서는 heading 을 뒤집고 `cleared for` 를 `expect` 로 바꿨는데, 숫자 뒤집기는 바로 같은 세트 P1B-Q5 가 다루던 바로 그 실수입니다.

**Part Ⅱ Task B** — 첫 MAYDAY 를 거의 제대로 선포했습니다(기관명만 누락). 소방대 요청도 두 세트 만에 들어왔습니다. 그런데 **상황이 깊어질수록 응답이 얕아지는 패턴은 그대로입니다** — Q5 는 질문의 절반(souls on board)을 비웠고, Q6 는 사유 없이 세 단어, Q9 는 두 단어였습니다. 비상 상황일수록 관제사는 조종사의 **의도와 근거**로 움직이는데, 그 부분이 가장 짧습니다.

**Part Ⅱ Task C** — Q1 은 전개를 거의 다 담았습니다. 비상 선포·연료 질문·측풍·Daegu 대안·체크리스트·소방대까지 순서대로 나옵니다. 다만 **사건이 일어난 비행 단계를 "접근 중"으로 틀렸고**, 본인이 선택한 Daegu 가 아니라 Gimhae 로 갔다고 써서 자기 답과 어긋났습니다. Q2 는 **4세트 만에 `could have been handled differently` 에 답한 것**이 가장 큰 성과입니다.

---

## 다음 학습 과제

### 반복되는 약점 3개

1. **접근 허가를 복창하지 않는다 (3세트 연속, 최우선)** — `cleared for the ILS runway 36 approach` 를 P2A-Q8 에서는 `expect` 로 바꾸고 P2B-Q8 에서는 통째로 빠뜨렸습니다. 필수 복창 7항목 중 가장 무거운 것입니다. **`cleared for` 네 글자를 노트에 `C` 로 먼저 적고, 복창할 때 반드시 그 단어부터 말하세요.**

2. **지시문이 "물어보라 / 이유를 붙이라"고 할 때 하지 않는다 (3세트 연속)** — P2A-Q7 `Tell him what you need to know before you decide`(묻지 않음), P2B-Q6 `with a reason`(사유 없음), P1B-Q4 `a request with a reason`(요청 없음). **복합 지시 수행은 6건으로 늘었는데, 유독 "묻기"와 "이유 대기"만 빠집니다.** 지시문에서 `what you need to know`, `with a reason`, `inquire` 를 보면 **물음표나 because 가 답에 들어가야 한다**고 생각하세요.

3. **질문이 두 가지면 하나만 답한다** — P2B-Q5 `fuel endurance and souls on board` 에서 연료만(그것도 분 단위 없이), P2B-Q9 두 선택지 중 하나를 단어로만. 비상 상황의 정보는 **숫자와 단위를 끝까지** 말해야 합니다.

### 외워야 할 표현 5개

| 영어 | 뜻 | 쓰는 상황 |
|---|---|---|
| `Cleared for the ILS runway 36 approach.` | ILS 36 접근 허가 (복창) | **3세트 연속 빠뜨린 항목.** `expect` 로 바꾸면 허가를 못 받은 것이 된다 |
| `Mayday, mayday, mayday, Sejong Control, HL123, engine number one fire, engine shut down.` | 비상 선포 — MAYDAY×3 → **기관명** → 콜사인 → 사건 | 첫 MAYDAY 에서 기관명만 빠졌다 |
| `Fuel endurance two hours 50 minutes, 164 souls on board.` | 연료 2시간 50분, 탑승 164명 | 두 가지를 물으면 **둘 다**, 숫자는 단위까지 |
| `We will divert to Daegu — with one engine out we want the calm wind and the longer runway.` | 대구로 전환하겠습니다 — 단발이라 무풍·긴 활주로가 낫습니다 | `is available` 은 의도가 아니다. **가겠다 + 이유** |
| `Before we decide — request the runway length available and how recent that report is.` | 결정 전에 — 활주로 길이와 보고 시점을 요청합니다 | 지시문이 "묻기"를 요구할 때. **3세트 연속 못 한 것** |
