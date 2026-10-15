# EPTA_02 채점 결과 — 2026-10-15 (세션 20261014-215141)

32/32 응답, 무응답 없음. EPTA_01(재응시) 대비 변화를 함께 적었다.

| | EPTA_01 1차 | EPTA_01 재응시 | **EPTA_02** |
|---|---|---|---|
| ✅ | 1 | 6 | **11** |
| ⚠️ | 15 | 20 | 16 |
| ❌ | 16 | 6 | **5** |
| 최종 | Level 1 | Level 2 | **Level 3** |

---

## Part Ⅰ TASK A

**P1A-Q1** ✅
문제 : Ground : HL123, Fairmont Ground, hold short of runway 09.
내 답안 : Holding short of runway09 hl123
** 정답 : Holding short of runway 09, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : 활주로 번호까지 정확합니다. EPTA_01 Q1 에서는 `hold short of runway` 로 번호를 빠뜨렸는데 이번엔 잡았습니다.

---

**P1A-Q2** ✅
문제 : Tower : HL123, after departure fly heading 350, cleared for takeoff runway 09, traffic is a Cessna on base.
내 답안 : after departurn heading 350 cleared for take off runway 09 hl123
** 정답 : After departure fly heading 350, cleared for takeoff runway 09, HL123.
- 누락된 필수 readback 요소 : 없음 (트래픽 정보는 복창 불필요 — 제외한 판단 정확)
- 표준교신용어 오류 : 없음
- 코멘트 : **`cleared` 를 정확히 썼습니다.** EPTA_01 에서 `clear`/`cleared` 혼동이 세 번 반복됐던 항목입니다 — 이 문항에서는 해결됐습니다. `fly` 가 빠진 것은 경미합니다. `departurn` 오탈자는 감점하지 않았습니다.

---

**P1A-Q3** ⚠️
문제 : Center : HL123, descend to flight level 180, reduce speed to 250 knots, contact Kingsley Approach on 127.85.
내 답안 : decent fl180 reduce speed 250 knots contack 127.85 hl123
** 정답 : Descend to flight level 180, reduce speed to 250 knots, contact Kingsley Approach on 127.85, HL123.
- 누락된 필수 readback 요소 : **이관 기관명 `Kingsley Approach`** — 주파수만 복창했습니다
- 표준교신용어 오류 : 없음
- 코멘트 : **주파수 127.85 를 정확히 복창했습니다.** EPTA_01 에서 주파수를 두 번 연속 틀렸던(118.5 / 119.75) 항목이라 이건 분명한 개선입니다. 남은 것은 기관명입니다 — 주파수만 복창하면 어느 기관으로 가는지 확인되지 않습니다.

---

**P1A-Q4** ❌
문제 : Delivery : HL123, cleared to Ravenna Airport via the NAVIO ONE departure, maintain 4,000, departure frequency 121.9, squawk 5146.
내 답안 : clear avia airport navia 1 departure maintain 14000 departure frequency 121.9 quawk 5146 hl123
** 정답 : Cleared to Ravenna Airport via the NAVIO ONE departure, maintain 4,000, departure frequency 121.9, squawk 5146, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **초기고도를 4,000 이 아니라 14000 으로 복창했습니다** (값 오류). 목적지를 `Ravenna` 가 아니라 `avia` 로, SID 를 `NAVIO ONE` 이 아니라 `navia 1` 로 들었습니다 — 두 고유명사가 서로 섞인 것으로 보입니다. `clear` → `cleared`.
- 코멘트 : **주파수 121.9 와 squawk 5146 을 둘 다 맞췄습니다** — EPTA_01 에서 "하나 맞추면 하나 틀린다"던 항목이라 이건 개선입니다. 그런데 이번에는 **고도**가 틀렸습니다. 4,000 과 14,000 은 만 피트 차이입니다. `maintain 4,000` 처럼 네 자리 고도는 `=4000` 으로 적고, 앞에 숫자가 더 붙지 않았는지 한 번 더 보세요.

---

## Part Ⅰ TASK B

**P1B-Q1** ✅
문제 : You are descending into Kingsley and you are now passing flight level 120. The transition level is below you, so a new pressure setting is coming. Now ATC contacts you. Acknowledge the instruction and report your present altitude.
Approach : HL123, Kingsley Approach, descend to 6,000, QNH 1008, transition level 70.
내 답안 : decending through fl120 to 6000 qnh 1008 transition level 70 hl123
** 정답 : Descending through flight level 120 for 6,000, QNH 1008, transition level 70, HL123.
- 누락된 필수 readback 요소 : 없음 — 고도·QNH·전이고도 **세 가지 필수 복창 항목을 전부** 잡았습니다
- 표준교신용어 오류 : `to 6000` → `for 6,000` (경미)
- 코멘트 : **복합 지시의 두 부분을 모두 수행했습니다** — 복창과 현재고도 보고. 이게 EPTA_01 에서 2세트 연속 최우선 약점이었던 항목입니다. 이번 세트의 가장 중요한 성과 중 하나입니다.

---

**P1B-Q2** ⚠️
문제 : On short final into Fairmont you saw a small drone hovering about two hundred feet above the ground, just left of the runway threshold. You were too busy to report it then. You have now landed and the ground controller calls you. Acknowledge the taxi instruction and report what you saw during the approach.
Ground : HL123, Fairmont Ground, taxi to the gate via Charlie.
내 답안 : taxi via gate c , ground we saw a drawn hl123
** 교정 답안 : Taxi to the gate via Charlie, HL123. And be advised, on short final we saw a small drone about two hundred feet, just left of the runway 09 threshold.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `taxi via gate c` → `taxi to the gate via Charlie` (어순)
- 코멘트 : **드론 보고를 했습니다** — 복합 지시 두 부분 수행. 다만 **위치와 고도가 없습니다.** 지문은 "약 200피트, 활주로 threshold 좌측" 이라고 줬는데 `we saw a drawn` 뿐입니다. 관제사는 이 보고로 활주로 폐쇄 여부와 통보 범위를 정하는데, 위치가 없으면 아무 조치도 못 합니다. 고친 것은 위치·고도·시점 보충입니다.

---

**P1B-Q3** ⚠️
문제 : Centre instructed you to maintain 290 knots for separation. At your present weight and altitude 290 knots leaves you no buffet margin, so you reduced to 270 knots and you are flying at 270 now. Now ATC contacts you. Respond accordingly.
Center : HL123, confirm maintaining 290 knots?
🖥 [ 270 knots / buffet margin ]
내 답안 : Negative maintain speed 290 due to buffet margin hl123
** 정답 : Negative, maintaining 270 knots due to buffet margin, HL123.
- 누락된 필수 readback 요소 : **실제 속도 270 knots**
- 표준교신용어 오류 : **`Negative` 라고 해놓고 290 을 말했습니다** — 앞뒤가 모순입니다. 관제사는 "290 이 아니다"까지는 알지만 그럼 몇 노트인지 모릅니다.
- 코멘트 : **첫 단어를 `Negative` 로 쓴 것은 해결입니다.** EPTA_01 에서 1차·재응시 모두 `affirmative` 로 시작해 정반대 답을 했던 항목입니다. 남은 것은 **그 뒤에 실제 값을 넣는 것**입니다 — 화면 클루에 `270 knots` 가 떠 있었습니다. NEGATIVE 다음은 반드시 "그럼 실제로는 무엇인가" 입니다.

---

**P1B-Q4** ❌
문제 : You are being vectored for the approach and you are twelve miles from QUILL at 9,000 feet. Your descent calculation shows that you cannot lose that much height before QUILL without exceeding your descent rate limits. Listen to the controller, make a readback of what you can accept, and a request with a reason.
Approach : HL123, descend to 4,000, cross QUILL at 4,000.
내 답안 : decent 4000 cross qualit hl123
** 교정 답안 : Descend to 4,000, HL123. Unable to cross QUILL at 4,000 — we are twelve miles out at 9,000 and that would exceed our descent rate. Request descent now, or a wider vector to lose the height.
- 누락된 필수 readback 요소 : **unable · 사유 · 요청 전부**
- 표준교신용어 오류 : 없음
- 코멘트 : **지시문을 정반대로 수행했습니다.** `make a readback of what you can accept` 는 "할 수 있는 것만 복창하라"는 뜻인데, 할 수 없는 교차 제약까지 복창했습니다. 이대로면 관제사는 QUILL 을 4,000 으로 통과하겠다고 약속받은 것이 되고, 실제로는 못 지킵니다. 받아들일 수 있는 부분(강하 4,000)만 복창하고 나머지는 unable 로 돌려야 합니다.

---

**P1B-Q5** ⚠️
문제 : Delivery gave you squawk 3027 before departure. You set 3207 in the transponder by mistake and it has been running that way since take-off. Now ATC contacts you. Respond accordingly.
Center : HL123, verify your squawk.
내 답안 : quawk 3027 hl123
** 교정 답안 : HL123, correction — we had 3207 set by mistake. Now squawking 3027.
- 누락된 필수 readback 요소 : **오설정 사실과 정정 조치**
- 표준교신용어 오류 : 없음
- 코멘트 : **squawk 값 3027 은 정확합니다.** 그러나 이 문항은 자기 오류 정정 문항입니다. 지금 트랜스폰더에는 3207 이 들어가 있으므로, "3027 입니다"라고만 하면 관제사 화면의 3207 과 맞지 않아 되묻게 됩니다. **무엇을 잘못 넣었고 지금 어떻게 바꿨는지**를 말해야 정정이 됩니다.

---

**P1B-Q6** ⚠️
문제 : Your clearance includes the SELDO transition. Your flight management computer holds two points called SELDO and you are not sure which one is on your route, and the crossing altitude on your chart does not match the one in the computer. You are level at flight level 310. Contact Westlake Control. Verify which waypoint is on your route, and request the crossing altitude.
🖥 [ SELDO ]
내 답안 : western control hl123 , we can see same seldo 2 waypoint , verify which right waypoint height
** 교정 답안 : Westlake Control, HL123, we have two points called SELDO in the computer. Request verification of which one is on our route, and request the crossing altitude.
- 누락된 필수 readback 요소 : 해당 없음 (발신 문항)
- 표준교신용어 오류 : **기관명을 `Westlake` 가 아니라 `western` 으로** 불렀습니다.
- 코멘트 : **기관 호출을 했습니다** — EPTA_01 에서 신규 약점으로 잡혔던 항목이라 호출 자체는 개선입니다. 이름이 틀린 것은 별개 문제입니다. 문법 교정 : `we can see same seldo 2 waypoint` → `we have two points called SELDO`, `verify which right waypoint height` → 문장이 성립하지 않습니다. 내용 보충은 교차고도를 **요청**으로 명확히 분리한 것입니다.

---

## Part Ⅱ TASK A

**P2A-Q1** ✅
문제 : ☞ Contact Fairmont Delivery and request your clearance.
내 답안 : Fairmont Delivery hl123 request clearance
** 정답 : Fairmont Delivery, HL123, request clearance to Kingsley.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : 기관·콜사인·요청이 순서대로 들어갔습니다. 목적지까지 붙이면 더 좋지만 이대로도 충분합니다.

---

**P2A-Q2** ⚠️
문제 : ☞ Listen to the controller and give a full readback.
Delivery : HL123, cleared to Kingsley Airport via the BRAVA TWO departure, SELDO transition, climb and maintain 7,000, departure frequency 126.4, squawk 3027.
내 답안 : Clear to kings airport via B 2 deperture climb and maintain 7000 frequency 126.4 squawk 3027 hl123
** 정답 : Cleared to Kingsley Airport via the BRAVA TWO departure, SELDO transition, climb and maintain 7,000, departure frequency 126.4, squawk 3027, HL123.
- 누락된 필수 readback 요소 : **`SELDO transition`** — 비행로 허가의 한 요소입니다
- 표준교신용어 오류 : `Clear` → `Cleared`. SID 이름을 `BRAVA` 가 아니라 `B` 로 줄였습니다 — 유도로 문자 축약은 감점하지 않지만 **SID 이름은 고유명사라 줄이면 다른 절차가 됩니다.**
- 코멘트 : **고도 7,000 · 주파수 126.4 · squawk 3027 세 개를 동시에 맞췄습니다.** EPTA_01 에서 가장 반복적으로 틀리던 조합이라 이건 분명한 개선입니다.

---

**P2A-Q3** ⚠️
문제 : ☞ Listen to the controller's message, respond accordingly and advise what you need before departure.
Delivery : HL123, readback is correct, your slot time is 0845, and the ground crew reports light frost on the upper wing surfaces.
🖥 [ de-icing required ]
내 답안 : request de icing hl123
** 교정 답안 : Roger, slot time 0845, HL123. We will need de-icing before departure — request de-icing.
- 누락된 필수 readback 요소 : **슬롯 시각 0845 수신 확인**
- 표준교신용어 오류 : 없음
- 코멘트 : **제빙 요청은 했습니다** — 지시문 뒷부분 수행. 이번엔 **앞부분(`respond accordingly`)이 빠졌습니다.** 슬롯 시각은 출발 시각을 좌우하는 정보라 받았다는 확인이 필요합니다. EPTA_01 에서는 뒷부분을 빠뜨렸는데, 이번엔 반대가 됐습니다 — **둘 다 해야 합니다.**

---

**P2A-Q4** ✅
문제 : ☞ Contact Fairmont Ground, request taxi and inquire about your new slot time.
내 답안 : fairmon ground hl123 request taxi and new slot time
** 정답 : Fairmont Ground, HL123, de-icing complete, request taxi. Request also our new slot time.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **기관 호출 + 요청 + 문의, 세 가지가 모두 있습니다.** 복합 지시를 온전히 수행한 사례입니다. `fairmon` 오탈자는 감점하지 않았습니다.

---

**P2A-Q5** ✅
문제 : ☞ Listen to the controller and give a full readback.
Ground : HL123, runway 09, taxi via Delta and Foxtrot, hold short of runway 14, give way to the Bombardier CRJ on Foxtrot.
내 답안 : runway 09 taxi via delta foxtrot holding short of runway 14 give way to drzfoxtrot hl123
** 정답 : Runway 09, taxi via Delta and Foxtrot, hold short of runway 14, give way to the CRJ on Foxtrot, HL123.
- 누락된 필수 readback 요소 : 없음 — 사용활주로·유도로·hold short·give way 네 요소 전부
- 표준교신용어 오류 : 없음
- 코멘트 : `drzfoxtrot` 는 양보 대상(CRJ)이 빠지고 오타가 겹친 것으로 보입니다. 유도로 지시 중 가장 긴 문항이었는데 구조는 다 잡았습니다.

---

**P2A-Q6** ❌
문제 : ☞ Listen to the controller's question and respond accordingly. Tell him what you need to know before you can answer.
Ground : HL123, the CRJ ahead of you is going to be a while sorting out a paperwork problem. If you can take an intersection departure from Foxtrot I can get you out ahead of him — can you work with that?
내 답안 : roger request intersection runway hl123
** 교정 답안 : HL123, before I can accept — request the runway distance available from Foxtrot. If it is enough for our weight we can take the intersection departure.
- 누락된 필수 readback 요소 : **답하기 전에 알아야 할 것(Foxtrot 에서의 잔여 활주거리)을 묻지 않았습니다**
- 표준교신용어 오류 : **`can you work with that?` 은 AFFIRM/NEGATIVE 질문인데 `roger` 로 답했습니다.** ROGER 는 "들었다"일 뿐이라 수락 여부가 전달되지 않습니다. `request intersection runway` 도 표현이 정확하지 않습니다 — `intersection departure from Foxtrot` 입니다.
- 코멘트 : 지시문이 `Tell him what you need to know before you can answer` 로 **무엇을 해야 하는지 그대로 적혀 있었습니다.** 교차점 출발은 활주거리가 짧아지므로, 수락하기 전에 남은 거리를 확인하는 것이 안전상 당연한 절차입니다. 확인 없이 수락하면 성능 계산 없이 짧은 활주로에서 이륙하는 셈이 됩니다.

---

**P2A-Q7** ✅
문제 : ☞ Listen to the tower and give a full readback.
Tower : HL123, Fairmont Tower, wind 080 at 11, line up and wait runway 09 at Foxtrot, number one.
내 답안 : line up and wati runway 09 foxtrot i'm number 1 hl123
** 정답 : Line up and wait runway 09 at Foxtrot, HL123.
- 누락된 필수 readback 요소 : 없음 (바람은 복창 불필요 — 제외한 판단 정확)
- 표준교신용어 오류 : 없음
- 코멘트 : `i'm number 1` 은 불필요하지만 해롭지는 않습니다. `wati` 오탈자는 감점하지 않았습니다.

---

**P2A-Q8** ⚠️
문제 : ☞ Listen to the tower and give a full readback. Then advise that you are ready for an immediate departure.
Tower : HL123, traffic is a Cessna Caravan on a three mile final, cleared for immediate takeoff runway 09 at Foxtrot, no delay.
내 답안 : clear for take off runway 09 foxtrot no delay hl123
** 교정 답안 : Cleared for immediate takeoff runway 09 at Foxtrot, no delay, HL123. We are ready for an immediate departure.
- 누락된 필수 readback 요소 : 없음 (트래픽 정보는 복창 불필요 — 제외 정확)
- 표준교신용어 오류 : **`clear` → `cleared`.** P1A-Q2 에서는 맞게 썼는데 여기서는 틀렸습니다 — 같은 세트 안에서 갈립니다.
- 코멘트 : **지시문 뒷부분(`advise that you are ready`)이 빠졌습니다.** `no delay` 로 이륙하려면 준비됐다는 통보가 필요합니다.

---

**P2A-Q9** ❌
문제 : ☞ Contact Fairmont Departure and report your passing altitude.
(Situation Update : You are airborne and climbing through 2,500 feet on the BRAVA TWO departure.)
내 답안 : climb through fl250 hl123
** 정답 : Fairmont Departure, HL123, climbing through 2,500 feet.
- 누락된 필수 readback 요소 : **기관 호출 `Fairmont Departure`**
- 표준교신용어 오류 : **`2,500 feet` 를 `FL250` 으로 썼습니다.** 2,500피트와 FL250(25,000피트)은 **만 피트 이상 차이** 나는 완전히 다른 고도입니다. 이륙 직후 2,500피트에 있는 항공기가 FL250 을 통과한다고 보고하면 관제사는 전혀 다른 항공기를 찾게 됩니다.
- 코멘트 : 이번 세트에서 가장 심각한 오류입니다. **네 자리 피트 고도와 FL 은 표기부터 다릅니다** — `2,500 ft` 는 `2500` 또는 `2.5` 로, `FL250` 은 `250` 으로 적어 구분하세요. P2B-Q1 에서는 `fl200` 을 정확히 썼으므로 구분을 아는데, 숫자만 보고 FL 을 붙인 것으로 보입니다.

---

**P2A-Q10** ✅
문제 : ☞ Listen to the controller and give a full readback. Then request the information you are missing.
Departure : HL123, Fairmont Departure, radar contact, climb and maintain flight level 190, cleared direct SELDO.
🖥 [ SELDO crossing altitude not on the chart ]
내 답안 : climb and maintain fl190 , direct seldo , request crossing altitude at seldo hl123
** 정답 : Climb and maintain flight level 190, cleared direct SELDO, HL123. Request the SELDO crossing altitude — it is not on our chart.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `cleared direct` 에서 `cleared` 가 빠졌습니다 (경미)
- 코멘트 : **복창과 요청을 둘 다 했습니다.** 복합 지시 수행 성공 사례입니다. 이번 세트에서 복합 지시를 온전히 해낸 것이 네 문항(P1B-Q1, P1B-Q2, P2A-Q4, P2A-Q10)인데, EPTA_01 에서는 사실상 없었습니다.

---

**P2A-Q11** ⚠️ (90초 Follow-up)
문제 : You have just finished Task A, as the pilot of Hotel Lima one two three. In this situation, you accepted an intersection departure instead of waiting for the full runway. What did you have to check before you accepted it, and why did you ask the controller what you asked? In your role as a pilot, when would you refuse an intersection departure? Give an example.
내 답안 : When we get a chance to short roll take off , then we have to check the aircraft performance which can airborn even if the runway is short , and if the performance is low or unsatified we have to refuse until the all the runway is clear , all we have to do is make aircraft safe
** 교정 답안 : When we are offered an intersection departure, we have to check the aircraft performance to see whether we can get airborne with the shorter distance. That is why I asked the controller for the runway distance available from Foxtrot — without that number I cannot run the calculation. If the performance is not satisfactory, we have to refuse and wait until the full runway is available. For example, on a wet runway at high take-off weight, 2,150 metres would not be enough for us, so I would tell the controller we need the full length even if it means waiting behind the CRJ.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **세 부분 중 두 부분을 다뤘습니다** — 확인사항(성능)과 거부 조건. EPTA_01 Follow-up 이 세 부분 중 하나였던 것에 비해 진전입니다. 남은 것은 ① `why did you ask the controller what you asked` — 관제사에게 무엇을 왜 물었는지(실제로 P2A-Q6 에서 묻지 않았으므로 여기서도 비었습니다) ② **`Give an example.`** — 3세트 연속 예시를 들지 않았습니다. 문법 교정 : `short roll take off` → `intersection departure`, `which can airborn` → `whether we can get airborne`, `unsatified` → `not satisfactory`, `until the all the runway` → `until the full runway`.

---

## Part Ⅱ TASK B

**P2B-Q1** ✅
문제 : ☞ Contact Thornbury Approach and report your position.
(Initial Situation : descending through flight level 200 for 8,000, inbound to Thornbury Airport, information Kilo)
내 답안 : Thornbury approach hl123 decending through fl200 to 8000
** 정답 : Thornbury Approach, HL123, descending through flight level 200 for 8,000, information Kilo.
- 누락된 필수 readback 요소 : 없음 (ATIS Kilo 는 있으면 좋지만 필수는 아닙니다)
- 표준교신용어 오류 : `to 8000` → `for 8,000` (경미)
- 코멘트 : **기관 호출 + 통과고도 + 목표고도가 전부 들어갔습니다.** EPTA_01 재응시에서 이 문항 유형의 기관 호출이 빠졌던 것이 해결됐고, 통과고도도 정확합니다. 같은 세트의 P2A-Q9 에서는 둘 다 틀렸으므로, **아는데 매번 적용하지는 못하는** 상태입니다.

---

**P2B-Q2** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, Thornbury Approach, good morning, descend and maintain 8,000, reduce speed to 230 knots, expect the ILS runway 27, Thornbury altimeter 30.12.
내 답안 : decent and maintain 8000 reduce speed 230 expect ils runway 27 altimeter 3012 hl123
** 정답 : Descend and maintain 8,000, reduce speed to 230 knots, expect the ILS runway 27, altimeter 30.12, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **네 요소 전부 정확합니다** — 고도·속도·접근·고도계. 고도계는 EPTA_01 에서 세 번 빠뜨렸던 항목입니다.

---

**P2B-Q3** ⚠️
문제 : ☞ Inform the controller of your situation, state that you are maintaining 8,000, and request a groundspeed readout from his radar.
(Situation Update : 기장·부기장 속도계가 20노트 차이, 예비계기도 둘 중 어느 것과도 일치하지 않음)
내 답안 : controller hl123 we have different speed at indication each , so request ground spped in radar
** 교정 답안 : Thornbury Approach, HL123, our airspeed indications disagree — the captain's, the first officer's and the standby all read differently. Maintaining 8,000. Request a groundspeed readout from your radar.
- 누락된 필수 readback 요소 : **① 기관 호출 ② `maintaining 8,000`**
- 표준교신용어 오류 : **`controller` 는 호출부호가 아닙니다.** EPTA_01 P2B-Q3 에서 **똑같이** 지적된 오류입니다. `Thornbury Approach` 로 불러야 합니다.
- 코멘트 : 세 가지 요구 중 두 가지(상황·groundspeed 요청)를 했습니다. 문법 교정 : `different speed at indication each` → `our airspeed indications disagree`. 상황 설명이 모호한 것도 문제입니다 — "셋이 서로 다르다"는 사실이 전달돼야 관제사가 사태의 성격을 압니다.

---

**P2B-Q4** ❌
문제 : ☞ Listen to the controller's response, give a full readback and say your intentions.
Approach : HL123, roger, I show your groundspeed 290, fly heading 240 and maintain 8,000, and say your intentions.
내 답안 : roger , request landing hl123
** 교정 답안 : Heading 240, maintain 8,000, HL123. We are running the unreliable airspeed checklist. Our intention is to continue for the ILS runway 27 using your groundspeed, and we will need you to keep passing us the groundspeed.
- 누락된 필수 readback 요소 : **기수 240 과 고도 8,000 — 둘 다 필수 복창 항목인데 통째로 빠졌습니다**
- 표준교신용어 오류 : **`roger` 로 full readback 요구를 대체했습니다.** ROGER 는 복창을 대신할 수 없습니다.
- 코멘트 : 이번 세트에서 가장 많이 잃은 문항입니다. 지시문이 `give a full readback and say your intentions` 로 두 가지를 명시했는데 **둘 다 하지 않았습니다.** `request landing` 은 의도가 아닙니다 — 착륙하려는 것은 관제사도 압니다. 의도는 "지금 무엇을 하고 있고, 앞으로 어떻게 할 것이며, 무엇이 필요한가" 입니다.

---

**P2B-Q5** ⚠️
문제 : ☞ Listen to the controller and respond negatively with a reason. Request what you need instead.
Approach : HL123, I have a Boeing 737 closing from behind — are you able to give me 250 knots or better? If not I will have to turn you off.
내 답안 : negative unable to speed up 250 due to performance hl123
** 교정 답안 : Negative, HL123. Unable 250 knots — our airspeed indications are unreliable, so we cannot set a speed accurately. Request you vector us out of the sequence, or give us the groundspeed you need.
- 누락된 필수 readback 요소 : **요청(request)** — 지시문의 두 번째 부분
- 표준교신용어 오류 : **사유가 틀렸습니다.** `due to performance` 는 기체 성능이 모자란다는 뜻인데, 실제 이유는 **속도계를 믿을 수 없어 속도를 정확히 맞출 수 없다**는 것입니다. 성능 문제로 들으면 관제사는 다른 판단을 합니다.
- 코멘트 : `negative` + `unable` 로 거부 방향은 정확히 잡았습니다. 남은 것은 ① 사유를 이 사건에 맞게 말하는 것 ② 대안 요청입니다. 관제사가 `If not I will have to turn you off` 라고 했으므로, 그 조치를 수락하거나 다른 안을 내는 것이 자연스러운 응답입니다.

---

**P2B-Q6** ⚠️
문제 : ☞ Contact approach, give them an update of your situation and state what you will need for the approach.
(Situation Update : 체크리스트 완료, 기장 계기는 groundspeed 와 일치, 그러나 수동 접근만 가능하고 autoland 불가)
내 답안 : we cannot use autoland due to aircraft something happen , so request radar vector to airport hl123
** 교정 답안 : Thornbury Approach, HL123. The checklist is complete and the captain's indications now agree with your groundspeed, but we will have to fly the approach manually and we cannot use autoland. Request radar vectors to the final approach course, and continue to pass us your groundspeed.
- 누락된 필수 readback 요소 : **① 기관 호출 ② 계기가 회복됐다는 핵심 갱신**
- 표준교신용어 오류 : `due to aircraft something happen` 은 사유가 전달되지 않습니다.
- 코멘트 : autoland 불가는 맞게 전달했지만, **상황이 좋아졌다는 사실(기장 계기가 groundspeed 와 일치)** 이 빠졌습니다. 그게 빠지면 관제사는 여전히 속도 정보가 없는 항공기로 취급합니다. 그리고 `what you will need for the approach` 에 대해 vector 만 요청했는데, 이 상황에서 실제로 필요한 것은 **groundspeed 를 계속 받는 것**입니다.

---

**P2B-Q7** ⚠️
문제 : ☞ Listen to the controller and respond accordingly.
Approach : HL123, I have to change your approach. The ILS 27 glide path is out for calibration, so the best I can do is the RNAV 27. Weather is fine, ceiling 4,000 broken.
내 답안 : roger request rnav runway27 approach hl123
** 정답 : Roger, we accept the RNAV runway 27 approach, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `request` 가 어색합니다 — 관제사가 이미 RNAV 27 을 제시했으므로 **요청이 아니라 수락**입니다.
- 코멘트 : 접근 방식 변경을 받아들인 것은 맞습니다. `roger` 뒤에 내용이 따라오므로 ROGER 단독 오용은 아닙니다.

---

**P2B-Q8** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, roger, turn right heading 300, descend and maintain 3,000 until established, cleared for the RNAV runway 27 approach, contact Thornbury Tower on 118.1.
내 답안 : trun right hd 300 decend 3000 until established cleared rnav runway 27 contact tower 118.1 hl123
** 정답 : Turn right heading 300, descend and maintain 3,000 until established, cleared for the RNAV runway 27 approach, contact Thornbury Tower on 118.1, HL123.
- 누락된 필수 readback 요소 : 없음 — 선회방향·기수·고도·established·**접근 허가**·주파수 전부
- 표준교신용어 오류 : 없음. `hd`·`trun`·`decend` 는 감점하지 않았습니다
- 코멘트 : **이번 세트 최고의 성과입니다.** EPTA_01 에서 1차·재응시 모두 빠뜨렸던 **접근 허가(`cleared`)** 를 복창했고, 두 번 연속 틀렸던 **주파수(118.1)** 도 정확합니다. 선회 방향도 들어갔습니다. 가장 요소가 많은 복창 문항에서 전부 잡았습니다.

---

**P2B-Q9** ⚠️
문제 : ☞ Listen to the controller's question and provide the requested information.
Approach : HL123, the tower wants to know whether you need the emergency services out, or whether a normal landing is fine.
내 답안 : roger request emergency equipment standing by runway to tow off hl123
** 교정 답안 : HL123, request the emergency services standing by as a precaution — we will be flying the approach manually. We expect a normal landing and we can vacate the runway ourselves.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **`to tow off` 는 이 상황과 무관합니다.** 견인은 기체가 자력으로 움직일 수 없을 때 필요한데, 속도계 문제는 지상 이동에 영향이 없습니다. EPTA_01 의 유압 사건(견인 필요)과 섞인 것으로 보입니다.
- 코멘트 : 소방대 대기를 요청한 선택 자체는 타당합니다. 다만 관제사는 둘 중 하나를 물었으므로 **어느 쪽인지 분명히** 답하고, 필요하면 사유를 붙이면 됩니다.

---

## Part Ⅱ TASK C

**P2C-Q1** ⚠️ (90초)
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
내 답안 : we had situation as same as what we had before decent , at decent section , we have malfuction about autolanding , and there was a difference between first officer and captain's indication speed, so we request about the information and make it match with controller and each pilots , and we are not sure that the landing work properly so we request to stand emergency kit on the runway
** 교정 답안 : During the descent into Thornbury we had a problem with our airspeed indications — the captain's, the first officer's and the standby all read differently, about twenty knots apart. So we asked the controller for a groundspeed readout from his radar and flew with that. We could not accept the speed he needed for the traffic behind us, because we could not set a speed accurately. After the checklist the captain's indications agreed again, but we had to fly manually and we could not use autoland. The controller also had to change us from the ILS 27 to the RNAV 27, because the glide path was out for calibration, and we landed with the emergency services standing by.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **속도계 불일치를 원인으로 짚은 것은 정확합니다.** 그런데 **순서가 뒤집혔습니다** — `malfunction about autolanding` 을 먼저 말했는데, autoland 불가는 속도계 문제의 *결과*입니다. 그리고 **ILS 27 → RNAV 27 변경이 통째로 빠졌습니다.** 이건 이 사건의 큰 축 하나입니다. 예비계기도 달랐다는 점, 737 때문에 증속을 거절한 것도 없습니다. 문법 교정 : `as same as` → `the same as`, `at decent section` → `during the descent`, `we have malfuction` → `we had a malfunction`, `indication speed` → `airspeed indications`, `request about the information` → `asked for the groundspeed`, `the landing work properly` → `the landing would be normal`.

---

**P2C-Q2** ⚠️ (90초)
문제 : How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
내 답안 : I think we handled it well , in the first section that we know we have something work bad , such as heigh indication , so all we have to do is just ask the exact height, and we lost the autolanding system at moment , also we cannot use ils approach , it make us little bit embarrase , but controller gave us another option as rnav , and there was a time to checklist to landing by rnav approach , thanks to controller , we can land well , so I think it handled well rather than i expected
** 교정 답안 : I think the controller handled it well. When our airspeed indications went bad, he gave us the groundspeed from his radar straight away, which was exactly what we needed. He also gave us another option when the ILS was not available — the RNAV 27 — and he gave us time to run the checklist before the approach. Thanks to the controller we could land safely. One thing that could have been handled differently is that he could have told us about the ILS glide path being out for calibration earlier, because we had already set up for the ILS and we had to change everything late in the approach.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : 중간에 `controller gave us another option as rnav`, `thanks to controller` 로 관제사를 평가했으므로 EPTA_01 처럼 대상을 완전히 오독하지는 않았습니다. 다만 **첫 문장이 또 `I think we handled it well`** 입니다 — 질문은 관제사를 묻습니다. 더 큰 문제는 **사건의 핵심 단어를 틀린 것**입니다 : `heigh indication`, `just ask the exact height` — 이 사건은 **속도(speed)** 문제였지 고도가 아닙니다. 그리고 **`could have been handled differently` 에 3세트 연속 답하지 않았습니다.** 문법 교정 : `something work bad` → `something going wrong`, `at moment` → `at that moment`, `make us little bit embarrase` → `it made things difficult`, `there was a time to checklist to landing` → `he gave us time to run the checklist`, `we can land well` → `we could land safely`.

---

## ICAO 6개 항목 등급

| 항목 | 등급 | EPTA_01 재응시 | 근거 |
|---|---|---|---|
| Pronunciation | **평가 보류** | 보류 | 텍스트 답안이라 판단 근거가 없습니다. 등급 계산에서 제외합니다. |
| Structure | **Level 3** | 3 | 복문을 꾸준히 시도하고 의미가 대체로 전달됩니다. 다만 오류가 남습니다 — `as same as`, `at decent section`, `something work bad`, `which can airborn`, `unsatified`, `different speed at indication each`, `due to aircraft something happen`. 자유응답이 길어진 만큼 문장 연결이 끊기는 곳도 늘었습니다. |
| Vocabulary | **Level 3** | 3 | `buffet margin`, `transition level`, `QNH`, `groundspeed`, `autoland` 등 기술 어휘를 맥락에 맞게 썼습니다. 그러나 **핵심 단어를 틀려 뜻이 바뀐 사례가 세 건** : `height`(←speed, P2C-Q2), `due to performance`(←계기 불신뢰, P2B-Q5), `to tow off`(무관, P2B-Q9). `clear`/`cleared` 는 한 번 맞고 한 번 틀렸습니다. |
| Fluency | **Level 3** | 3 | 90초 문항 두 개와 Follow-up 모두 분량을 확보했습니다. 다만 30초 문항에서 `quawk 3027 hl123`, `roger , request landing hl123` 처럼 지나치게 짧은 응답이 남아 있습니다. |
| Comprehension | **Level 3** | 3 | 복창 정확도는 올랐습니다 — P2B-Q2 4요소, P2B-Q8 6요소를 전부 잡았습니다. 그러나 **값·단어를 다른 것으로 바꾸는 패턴이 계속됩니다** : **2,500 feet → FL250**(가장 심각), 4,000 → 14000, Ravenna → avia, Westlake → western, speed → height. 지시문 자체를 반대로 읽은 경우도 둘(P1B-Q4, P2A-Q6) 있습니다. |
| **Interactions** | **Level 3** | **2** | **복합 지시를 온전히 수행한 문항이 네 개**(P1B-Q1, P1B-Q2, P2A-Q4, P2A-Q10) 생겼습니다 — EPTA_01 에서는 사실상 없었습니다. **기관 호출도 네 번**(P2A-Q1, P2A-Q4, P2B-Q1, P1B-Q6) 했습니다. 다만 뒷부분을 빠뜨린 문항이 아직 여섯(P1B-Q4·Q5, P2A-Q3·Q8, P2B-Q5·Q6) 이고, P2B-Q4 에서는 복창 요구를 `roger` 로 대체했습니다. 예상 밖 전개(P2A-Q6 교차점 제안, P2B-Q4 intentions)에서 실패하는 것이 Level 3 의 특성에 해당합니다. |

### 최종 등급 : **Level 3 (불합격)** — EPTA_01 Level 2 → **+1**

6개 항목 중 최저값입니다. 합격선 Level 4 까지 **1단계** 남았습니다.
2세트 연속으로 한 단계씩 올랐고(1 → 2 → 3), 이번에는 **Interactions 가 최저값에서 벗어나
여섯 항목이 모두 Level 3 으로 평평해졌습니다.** 특정 항목이 끌어내리는 단계는 지났습니다.

---

## 태스크별 총평

**Part Ⅰ Task A** — 네 문항 중 둘이 완전하고(Q1·Q2), Q3 는 기관명만, Q4 는 고도값만 틀렸습니다. 특히 **주파수를 세 번 다 맞춘 것**(127.85 / 121.9 / 126.4)이 눈에 띕니다 — EPTA_01 에서 두 번 연속 틀리던 항목입니다. `clear`/`cleared` 도 Q2 에서는 맞게 썼습니다. 남은 문제는 **고도 자릿수**입니다. Q4 의 4,000 → 14000 과 P2A-Q9 의 2,500ft → FL250 은 같은 뿌리입니다.

**Part Ⅰ Task B** — Q1 이 이 파트의 성과입니다. 복창 세 요소와 현재고도 보고를 모두 해냈습니다. Q3 에서 **`Negative` 로 시작한 것**도 2세트 연속 실패하던 항목이라 중요한 진전입니다 — 다만 그 뒤에 실제 값 270 을 넣지 않아 "290 이 아니다"에서 멈췄습니다. Q4 는 지시문을 정반대로 수행했고, Q5 는 정정 없이 값만 말했습니다. **지시문이 요구하는 "기능"을 한 번 더 읽는 습관**이 필요합니다.

**Part Ⅱ Task A** — 열 턴 중 다섯이 완전합니다(Q1·Q4·Q5·Q7·Q10). 기관 호출이 필요한 세 턴 중 둘을 해냈고, 복합 지시도 둘을 온전히 수행했습니다. 실패한 둘은 성격이 다릅니다 — Q6 는 **지시문이 "물어보라"고 명시했는데 묻지 않고 `roger` 로 수락**했고, Q9 는 **고도를 FL 로 잘못 올려** 썼습니다. Q6 는 안전 판단의 문제이고(활주거리 확인 없이 교차점 출발 수락), Q9 는 받아적기의 문제입니다.

**Part Ⅱ Task B** — Q8 이 이 세트 전체의 최고점입니다. 선회방향·기수·고도·established·**접근 허가**·주파수 여섯 요소를 전부 복창했습니다. 접근 허가와 주파수는 EPTA_01 에서 반복해 틀리던 바로 그 항목입니다. 반면 Q4 는 최저점입니다 — 복창도 intentions 도 없이 `roger, request landing` 으로 끝냈습니다. **상황이 복잡해지는 구간(Q3~Q6)에서 기관 호출이 빠지고 응답이 얕아지는** 양상은 EPTA_01 과 같습니다.

**Part Ⅱ Task C** — 두 문항 모두 분량을 확보했고 사건의 원인(속도계 불일치)을 짚었습니다. 그러나 **Q1 은 ILS→RNAV 변경이 통째로 빠졌고 원인·결과 순서가 뒤집혔으며, Q2 는 speed 를 height 로 잘못 기억했습니다.** Task B 를 풀면서 **ATC 대사와 전개 순서를 메모**하지 않으면 90초를 채워도 내용이 어긋납니다. 그리고 Q2 의 `could have been handled differently` 는 **3세트 연속** 답하지 않았습니다.

---

## 다음 학습 과제

### 반복되는 약점 3개

1. **고도 자릿수 — 피트와 FL 을 섞는다 (신규, 최우선)** — `2,500 feet` → `FL250`(만 피트 이상 차이), `maintain 4,000` → `14000`. 둘 다 안전과 직결되는 값입니다. **네 자리 피트는 `2500`, FL 은 `FL250` 으로 모양을 다르게 적으세요.** P2B-Q1 에서는 `fl200` 을 정확히 썼으므로 구분을 모르는 것이 아니라 받아적는 방식이 없는 것입니다.

2. **NEGATIVE 뒤에 실제 값을 넣지 않는다 (진전 중)** — `Negative maintain speed 290`(실제 270). 첫 단어를 고친 것은 큰 성과이지만, **NEGATIVE 다음은 반드시 "그럼 실제로는 무엇인가"** 입니다. 화면 클루에 값이 떠 있었습니다. `Negative, maintaining 270 knots due to buffet margin` 한 문장을 통째로 외우세요.

3. **지시문이 "물어보라"고 할 때 묻지 않는다 (3세트 연속)** — P2A-Q6 `Tell him what you need to know`, P1B-Q4 `a request with a reason`, P2B-Q5 `Request what you need instead`, P2A-Q8 `advise that you are ready`. 복합 지시 수행이 네 건으로 늘었지만 여섯 건은 여전히 뒷부분이 비었습니다. **말하기 전에 지시문의 `and`/`then` 뒤를 손으로 짚고, 말한 뒤 지우세요.**

### 외워야 할 표현 5개

| 영어 | 뜻 | 쓰는 상황 |
|---|---|---|
| `Negative, maintaining 270 knots due to buffet margin.` | 아닙니다, buffet margin 때문에 270노트 유지 중입니다 | `confirm ~?` — **NEGATIVE + 실제 값 + 사유**. 값이 빠지면 절반만 전달된다 |
| `Climbing through 2,500 feet.` | 2,500피트 통과 상승 중 | 네 자리 피트는 `feet` 를 붙여 말한다. `FL250` 과 혼동하면 만 피트가 어긋난다 |
| `Before I can accept — request the runway distance available from Foxtrot.` | 수락 전에 Foxtrot 잔여 활주거리를 요청합니다 | 교차점 출발 제안을 받았을 때. **수락 전에 확인**하는 것이 절차 |
| `Unable 250 knots — our airspeed indications are unreliable.` | 250노트 불가 — 속도계를 신뢰할 수 없습니다 | 사유는 그 사건에 맞게. `due to performance` 는 다른 뜻이 된다 |
| `One thing that could have been handled differently is …` | 다르게 처리할 수 있었던 한 가지는 … | Task C Q2 후반부. **3세트 연속 비운 부분** — 이 틀로 한 문장만 붙이면 된다 |
