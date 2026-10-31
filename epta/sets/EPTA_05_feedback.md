# EPTA_05 채점 결과 — 2026-10-27 (세션 20261023-115523)

28/31 응답. **P2A-Q3 · P2A-Q6 · P2A-Q10 세 문항이 `x` 로 비어 있어 무응답 처리(Level 1)한다.**

| | EPTA_01 1차 | 재응시 | EPTA_02 | EPTA_03 | EPTA_04 | **EPTA_05** |
|---|---|---|---|---|---|---|
| ✅ | 1 | 6 | 11 | 11 | 10 | **13 (최다)** |
| ⚠️ | 15 | 20 | 16 | 13 | 13 | 11 |
| ❌ | 16 | 6 | 5 | 7 | 9 | 4 |
| 무응답 | 1 | 0 | 0 | 0 | 0 | **3** |
| 최종 | Level 1 | Level 2 | Level 3 | Level 3 | Level 3 | **Level 2 ↓** |

**답한 문항의 품질은 역대 최고다(✅ 13개). 그런데 최종 등급은 떨어졌다.** 비운 세 문항이
원인이고, 그중 둘은 이 세트가 겨냥한 최우선 약점 문항이었다.

---

## Part Ⅰ TASK A

**P1A-Q1** ⚠️
문제 : Ground : HL123, follow the Dash 8 ahead, hold short of Delta.
내 답안 : follow ahead and hold short of delta hl123
** 정답 : Follow the Dash 8 ahead, hold short of Delta, HL123.
- 누락된 필수 readback 요소 : **따라갈 항공기 `the Dash 8`**
- 표준교신용어 오류 : 없음
- 코멘트 : `hold short of Delta` 는 정확합니다. 그런데 `follow ahead` 만으로는 **무엇을 따라가는지**가 없습니다. follow 지시는 지상 충돌을 막는 지시라 대상이 핵심입니다 — 앞에 여러 대가 있으면 엉뚱한 기체를 따라갑니다.

---

**P1A-Q2** ✅
문제 : Tower : HL123, cleared for takeoff runway 22, climb to 4,000 feet, report passing 2,000 feet.
내 답안 : cleared taked off runway 22 climb to 4000 report passing 2000feet hl123
** 정답 : Cleared for takeoff runway 22, climb to 4,000 feet, report passing 2,000 feet, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음 (`taked off` 는 오탈자로 보고 감점하지 않았습니다)
- 코멘트 : **두 개의 네 자리 피트 고도(4,000 과 2,000)를 둘 다 정확히** 받았습니다. EPTA_04 에서 `report passing 3,000` 을 8,000 으로 틀린 바로 그 유형입니다.

---

**P1A-Q3** ✅
문제 : Approach : HL123, descend to 3,000 feet, cleared for the ILS runway 09 approach, caution birds near the threshold.
내 답안 : descend 3000 , cleared ils runway 09 , roger hl123
** 정답 : Descend to 3,000 feet, cleared for the ILS runway 09 approach, HL123.
- 누락된 필수 readback 요소 : 없음 (`caution birds` 는 복창 불필요 — 제외한 판단 정확)
- 표준교신용어 오류 : 없음. `roger` 뒤가 아니라 앞에 내용이 다 있으므로 단독 오용이 아닙니다 — 다만 불필요합니다
- 코멘트 : **접근 허가를 복창했습니다.** `approach` 단어가 빠졌지만 `cleared ILS runway 09` 로 허가 복창은 성립합니다.

---

**P1A-Q4** ✅
문제 : Delivery : HL123, cleared to Larkin Airport via the DELMA ONE departure, maintain 5,000 feet, squawk 6170.
내 답안 : cleared lark delma 1departure maintain 5000 squawk 6170 hl123
** 정답 : Cleared to Larkin Airport via the DELMA ONE departure, maintain 5,000 feet, squawk 6170, HL123.
- 누락된 필수 readback 요소 : 없음 (`via`·`Airport` 누락은 경미)
- 표준교신용어 오류 : 없음
- 코멘트 : **squawk 6170 을 정확히 복창했습니다.** 6107·6710 으로 뒤집기 쉬운 값을 함정으로 넣은 것인데(같은 세트 P1B-Q5 가 그 상황을 다룹니다) 통과했습니다.

---

## Part Ⅰ TASK B

**P1B-Q1** ❌
문제 : You are at flight level 240 and you have 40 miles left to run to TORIN. To get down from flight level 240 to 11,000 feet you need 43 miles at your present speed. Listen to the controller, respond with a reason, and tell him what you need.
Center : HL123, cross TORIN at 11,000 feet.
내 답안 : cross toren 11000 hl123
** 교정 답안 : Unable to cross TORIN at 11,000, HL123 — we have 40 miles to run and we need 43 miles for that descent. Request descent now, or a speed reduction.
- 누락된 필수 readback 요소 : **unable · 사유 · 요청 — 지시문이 요구한 세 가지 전부**
- 표준교신용어 오류 : **할 수 없는 것을 그대로 복창했습니다.** 이대로면 관제사는 TORIN 을 11,000 으로 통과하겠다는 약속을 받은 것이 되고, 실제로는 못 지킵니다.
- 코멘트 : 지문이 **43마일 필요 / 40마일 남음** 이라고 두 숫자를 나란히 줬습니다. 43 > 40 이라는 한 줄의 비교만 하면 답이 나오는 문항이었습니다. **EPTA_04 에서 최우선으로 지적한 "받아적은 숫자를 비교하지 않는다" 가 그대로 반복됐습니다.**

---

**P1B-Q2** ⚠️
문제 : On final into Carlow you noticed that about four of the approach lights on the left side were out. You were too busy to report it then. You have now landed and the ground controller calls you. Acknowledge the taxi instruction, and report what you saw.
Ground : HL123, Carlow Ground, taxi to stand 7 via Golf and Hotel.
내 답안 : taxi to stand 7 via golf hl123 and be advised 4 light on the left side down
** 교정 답안 : Taxi to stand 7 via Golf and Hotel, HL123. And be advised, on final we noticed about four approach lights out on the left side.
- 누락된 필수 readback 요소 : **유도로 `Hotel`** — Golf 만 복창했습니다
- 표준교신용어 오류 : 없음
- 코멘트 : **복합 지시 두 부분을 모두 수행했고, 등화 개수와 위치까지 정확히** 보고했습니다. `be advised` 로 보고를 연 것도 적절합니다. 고칠 것은 ① 유도로 하나 ② `4 light` 가 어떤 등화인지(approach lights) 밝히는 것입니다.

---

**P1B-Q3** ✅
문제 : Approach instructed you to maintain 2,500 feet until established. You levelled at 2,500 but then got a terrain caution, so you climbed to 3,000 feet and you are there now. Now ATC contacts you. Respond accordingly.
Approach : HL123, confirm maintaining 2,500 feet?
🖥 [ 3,000 feet / terrain caution ]
내 답안 : negative maintain 3000feet due to terrain caution hl123
** 정답 : Negative, maintaining 3,000 feet due to terrain caution, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `maintain` → `maintaining` (현재 상태 보고이므로 진행형)
- 코멘트 : **NEGATIVE + 실제 값 + 사유 세 토막이 다 있습니다. 세 세트 연속 유지**입니다 — 이 패턴은 완전히 몸에 붙었다고 봅니다.

---

**P1B-Q4** ✅
문제 : The controller offers you a visual approach to save time. The field is in sight, but it is a dark night with no horizon and you are not familiar with the terrain east of the airport. Listen to the controller, respond with a reason, and tell him what you can accept instead.
Approach : HL123, are you able to accept a visual approach?
내 답안 : unable , we are not familiar with this airport , reqeust vector to final hl123
** 정답 : Negative, HL123 — it is a dark night with no horizon and we are not familiar with the terrain east of the field. Request vectors for the ILS.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `are you able ~?` 는 **AFFIRM/NEGATIVE** 질문입니다. `unable` 도 뜻은 통하지만 첫 단어는 `Negative` 가 표준입니다.
- 코멘트 : **unable + 사유 + 대안 세 토막을 갖췄고 `request vectors` 로 대안이 구체적**입니다. 다만 사유가 절반입니다 — 지문의 핵심은 "어두운 밤, 수평선 없음"인데 `not familiar with this airport` 만 썼습니다. 야간 시각참조 부재가 시각접근을 거부하는 본질적 이유입니다.

---

**P1B-Q5** ✅
문제 : Delivery gave you squawk 6170 before departure. You set 6107 in the transponder by mistake and it has been running that way since take-off. Now ATC contacts you. Respond accordingly.
Center : HL123, verify your squawk.
내 답안 : we had set 6107 by mistake now squawking 6170 hl123
** 정답 : HL123, correction — we had 6107 set by mistake. Now squawking 6170.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **잘못 넣은 값 6107 을 말했습니다.** EPTA_04 에서 `we set another squawk by mistake` 로 뭉개 관제사가 화면과 대조할 수 없었던 문항입니다 — **해결**.

---

**P1B-Q6** ⚠️
문제 : You have 50 minutes of fuel on board. Your alternate needs 30 minutes from here, and the controller has just given you 20 minutes of holding. That would leave you with no reserve at all. Contact Southgate Control. Point out the problem, and request what you need.
🖥 [ 50 on board / alternate 30 / holding 20 ]
내 답안 : we have 50 min fuel on board so request reduce holding time to 10 hl123
** 교정 답안 : Southgate Control, HL123, we have 50 minutes of fuel on board and our alternate needs 30, so 20 minutes of holding would leave us no reserve. Request holding reduced to 10 minutes, or priority for the approach.
- 누락된 필수 readback 요소 : **① 기관 호출 `Southgate Control` ② 문제의 근거(대체공항 30분 때문에 예비가 0 이 된다)**
- 표준교신용어 오류 : 없음
- 코멘트 : **비교를 일부 해냈습니다** — 홀딩을 20분에서 10분으로 줄여달라는 요청은 계산의 결과입니다. 그런데 **왜 20분이 안 되는지**를 말하지 않아 관제사는 근거 없는 요청으로 받습니다. 50 − 20 = 30 이고 대체공항이 30분이면 예비가 0 이라는 한 문장이 있어야 요청이 성립합니다. 조종사가 먼저 부르는 문항인데 기관 호출도 빠졌습니다.

---

## Part Ⅱ TASK A

**P2A-Q1** ❌
문제 : ☞ Contact Southgate Control, report your position and request descent.
(Initial Situation : level at flight level 340 and 120 miles from TORIN)
내 답안 : southgate control hl123 , maintain fl350 , request descend to larken airport
** 정답 : Southgate Control, HL123, level at flight level 340, 120 miles from TORIN, request descent.
- 누락된 필수 readback 요소 : **위치(TORIN 까지 120마일)**
- 표준교신용어 오류 : **고도를 FL340 이 아니라 FL350 으로** 말했습니다. 값 오류입니다. `maintain` → `level at` (상태 보고 동사)
- 코멘트 : 기관 호출과 요청은 정확합니다. 그런데 **자기 고도를 틀리게 보고하면** 관제사의 분리 계산이 어긋납니다. 지문 첫 줄에 FL340 이 적혀 있었습니다.

---

**P2A-Q2** ⚠️
문제 : ☞ Listen to the controller, give a full readback, and inquire what that will do to your arrival time.
Center : HL123, Southgate Control, descend to flight level 240, expect 10 minutes of holding at TORIN for the arrival sequence.
내 답안 : descent fl240 , expect 10min holding hl123
** 교정 답안 : Descend to flight level 240, expect 10 minutes of holding at TORIN, HL123. What will that do to our arrival time? We have a curfew at 2300.
- 누락된 필수 readback 요소 : **도착시각 문의** — 지시문의 뒷부분입니다
- 표준교신용어 오류 : 없음
- 코멘트 : 복창은 정확합니다. 그런데 이 문항은 **커퓨 2300 에 도착예정 2252 인 상황에서 10분 홀딩을 통보받은 것**입니다. 물어야 할 이유가 지문에 깔려 있었고 지시문도 `inquire` 라고 적혀 있었습니다.

---

**P2A-Q3** ❌ (무응답)
문제 : ☞ Tell the controller what the problem is with the holding, and request what you need, with a reason.
내 답안 : (무응답 — `x`)
** 정답 (참고용. 채점은 무응답 Level 1 유지) : Southgate Control, HL123 — 10 minutes of holding would put us at 2302, and Larkin takes no landings after 2300. Request direct TORIN with no holding, or priority for the approach.
- 코멘트 : **Level 1.** 이 문항이 이번 세트의 **최우선 타깃**이었습니다 — 도착예정 2252 + 홀딩 10분 = 2302 이고 커퓨가 2300 이므로 2분 초과입니다. 세 숫자를 비교하면 답이 나오고, 그 비교를 말하는 것이 곧 "이유"였습니다. 비우면 그 연습이 통째로 사라집니다.
- 뼈대 : `(기관) + (콜사인) + 홀딩하면 몇 시가 된다 + 커퓨는 몇 시다 + 그래서 못 내린다` → `request (대안 1), or (대안 2)`. **숫자 두 개(2302 / 2300)를 나란히 말하는 것이 곧 사유**입니다. 대안은 둘 다 댈 필요는 없고 하나면 됩니다.

---

**P2A-Q4** ✅
문제 : ☞ Contact Larkin Approach and report your passing altitude.
(Situation Update : descending through flight level 180 for 11,000 feet)
내 답안 : larkin approach hl123 , decending through fl180 t o 11000
** 정답 : Larkin Approach, HL123, descending through flight level 180 for 11,000 feet.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **기관 호출 + FL 통과고도 + 피트 목표고도.** 두 단위를 정확히 구분했습니다 — 세 세트 연속 안정적입니다.

---

**P2A-Q5** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, Larkin Approach, good evening, descend to 4,000 feet, reduce speed to 200 knots, expect the TORIN TWO arrival, ILS runway 09, Larkin altimeter 30.04.
내 답안 : descent 4000 reduce speed 200 expect toin 2 arrival ils runway 09 altimeter 3004 hl123
** 정답 : Descend to 4,000 feet, reduce speed to 200 knots, expect the TORIN TWO arrival, ILS runway 09, altimeter 30.04, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **다섯 요소 전부 정확합니다.** 네 세트 연속으로 이 유형을 잡고 있습니다.

---

**P2A-Q6** ❌ (무응답)
문제 : ☞ Listen to the controller and respond accordingly. Tell him what you need to know before you answer.
Approach : HL123, I have a Dash 8 ahead of you doing 160 knots on final, so I may have to slow you down a lot. If that puts you past the curfew, tell me now and I will give you priority.
내 답안 : (무응답 — `x`)
** 정답 (참고용. 채점은 무응답 Level 1 유지) : HL123 — before I answer, how many minutes would that slowdown cost us? Our estimate is 2251 and the curfew is 2300, so we have about nine minutes in hand. If the delay is more than that, we will need your priority.
- 뼈대 : `before I answer / before we decide, + (물어야 할 값)?` → 그다음 `우리 숫자는 이렇다` → `그보다 크면 (요청)`. **물어야 할 값은 "감속하면 몇 분 늦어지는가" 하나**입니다. 관제사가 이미 `tell me now and I will give you priority` 로 답을 깔아줬으니, 물어보고 숫자를 비교해 말하면 끝입니다.
- 코멘트 : **Level 1.** **"결정 전에 묻기" 는 EPTA_02·03·04 에서 세 세트 연속 실패한 항목**이고, 이번에 그것을 겨냥해 넣은 문항입니다. 게다가 관제사가 `tell me now and I will give you priority` 로 **먼저 길을 열어줬습니다** — 감속하면 몇 분 늦어지는지만 물으면 우선권을 받을 수 있었습니다. 가장 아까운 한 문항입니다.

---

**P2A-Q7** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, cleared for the ILS runway 09 approach, maintain 180 knots to 4 miles, contact Larkin Tower on 119.45.
내 답안 : cleared ils runway 09 approach maintain speed 180knots contact lanken tower 119.45 hl123
** 정답 : Cleared for the ILS runway 09 approach, maintain 180 knots to 4 miles, contact Larkin Tower on 119.45, HL123.
- 누락된 필수 readback 요소 : `to 4 miles` 범위 (경미)
- 표준교신용어 오류 : 없음
- 코멘트 : **접근 허가 + 속도 + 기관명 + 주파수 119.45 전부 정확합니다.** 주파수는 네 세트 중 세 번 틀렸던 항목인데 이번엔 맞았습니다.

---

**P2A-Q8** ❌
문제 : ☞ Contact Larkin Tower, report your position and intention.
(Situation Update : You are established on the ILS for runway 09 and passing 1,800 feet.)
내 답안 : larkin tower hl123 decending 18000 ,
** 정답 : Larkin Tower, HL123, established on the ILS runway 09, passing 1,800 feet, request landing.
- 누락된 필수 readback 요소 : **① 위치(ILS 09 안착) ② 의도(착륙 요청)**
- 표준교신용어 오류 : **1,800 피트를 18000 으로** 말했습니다. 0 하나가 붙어 **1,800 과 18,000** 이 됩니다 — 착륙 직전과 순항 강하의 차이입니다.
- 코멘트 : 기관 호출은 했습니다. 그런데 P1A-Q2 에서 2,000 피트를 정확히 받은 같은 세트에서 이 값을 놓쳤습니다. 네 자리 피트는 `1800` 처럼 **쉼표 없이 네 자리로 적고 자릿수를 한 번 더 확인**하세요.

---

**P2A-Q9** ⚠️
문제 : ☞ Listen to the tower and give a full readback. Then inquire how long that taxi will take.
Tower : HL123, Larkin Tower, runway 09, cleared to land. After landing, taxiway Golf is closed for works, so expect a long taxi via Kilo.
내 답안 : cleared toi land runway 09 , after land taxi via kilo hl123
** 교정 답안 : Cleared to land runway 09, HL123, and after landing we will taxi via Kilo. How long will that taxi take?
- 누락된 필수 readback 요소 : **지상 이동 소요시간 문의** — 지시문의 뒷부분
- 표준교신용어 오류 : 없음 (`toi` 는 오탈자)
- 코멘트 : 착륙 허가와 우회 경로는 정확히 복창했고 바람도 제외했습니다. 문의가 빠졌습니다 — 커퓨가 걸린 상황이라 지상 이동이 길어지는 것도 운항에 영향을 줍니다. **이 세트에서 `inquire` 지시가 세 번(P2A-Q2·Q6·Q9) 나왔고 세 번 다 하지 않았습니다.**

---

**P2A-Q10** ❌ (무응답, 90초 Follow-up)
문제 : In this situation, the controller told you to expect 10 minutes of holding when your estimate was already 2252. What was the problem with that, and what did you say to him? In your role as a pilot, how do you handle an airport curfew when you are running late? Give an example of a flight where you would turn back or divert rather than press on.
내 답안 : (무응답 — `x`)
** 정답 (참고용. 채점은 무응답 Level 1 유지) — 세 부분을 순서대로 :
  ① **롤플레이에서 왜 그랬는지** : "The problem was that my estimate for Larkin was already 2252, and the curfew closes the airport at 2300. Ten minutes of holding would have put me at 2302, so I would have arrived two minutes after the airport closed and I would not have been allowed to land. So I told the controller that the holding would take us past the curfew, and I requested direct TORIN with no holding, or priority for the approach."
  ② **조종사로서 일반적으로 어떻게 하는지** : "In my role as a pilot, when I am running late towards a curfew, the first thing I do is work out the latest time I can still accept a delay and land. Then I give ATC that number early, before the delay happens, because once I am in the hold it is too late to negotiate. At the same time I check my fuel and my alternate, so if the curfew cannot be met I already know where I am going instead of deciding under pressure."
  ③ **예시로 닫기** : "For example, on a night flight to an airport with a 2300 curfew, if I were given twenty minutes of holding and my fuel allowed only ten, I would not press on hoping the curfew would be waived. I would divert to my alternate while I still had the fuel for a full approach there. Pressing on in that situation turns a scheduling problem into a fuel emergency, and that is never worth it."
- 뼈대 : `The problem was that ...` → `In my role as a pilot, ...` → `For example, ...`. **이 세 문두만 외워 두면 90초가 채워집니다.** ①은 문제에 나온 숫자(2252 / 10분 / 2300)를 그대로 쓰면 되고, ③은 경험이 없어도 **가정 예시(`if I were ...`)로 답해도 정답**입니다.
- 코멘트 : **Level 1.** 90초 자유응답은 Fluency·Structure·Vocabulary 를 한꺼번에 보는 문항이고 배점이 가장 큽니다. EPTA_01 1차 이후 처음 나온 Follow-up 무응답입니다. 할 말이 떠오르지 않아도 "홀딩 10분이면 2302 가 되어 커퓨를 넘는다" 한 문장만 말하면 0 은 면합니다. **침묵이 가장 낮은 점수입니다.**

---

## Part Ⅱ TASK B

**P2B-Q1** ✅
문제 : ☞ Contact Ashford Approach and report your position.
(Initial Situation : descending through flight level 140 for 8,000 feet, information Mike)
내 답안 : ashforad approach hl123  , descending through fl140 to 8000 inbound for asford airport
** 정답 : Ashford Approach, HL123, descending through flight level 140 for 8,000 feet, information Mike.
- 누락된 필수 readback 요소 : ATIS Mike (있으면 좋지만 필수는 아닙니다)
- 표준교신용어 오류 : `to` → `for` (경미)
- 코멘트 : 기관 호출과 두 고도값이 정확합니다.

---

**P2B-Q2** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, Ashford Approach, descend and maintain 8,000 feet, reduce speed to 210 knots, expect the VESPA ONE arrival, ILS runway 15, Ashford altimeter 29.76.
내 답안 : descend and maintain 8000 reduce speed 210 expect vespo 1 arrival ils runway 15 altimeter 2976 hl123
** 정답 : Descend and maintain 8,000 feet, reduce speed to 210 knots, expect the VESPA ONE arrival, ILS runway 15, altimeter 29.76, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **다섯 요소 전부 정확.** 한 세트에서 이 유형을 두 번(P2A-Q5, P2B-Q2) 완전히 잡았습니다.

---

**P2B-Q3** ✅
문제 : ☞ Inform the controller of your situation, state that you are maintaining 8,000 feet, and request holding while you work the checklist.
내 답안 : asford approach hl123  maintin 8000, we have problem on the nose gear indication , request holding to work checklist
** 정답 : Ashford Approach, HL123, we have a nose gear unsafe indication. Maintaining 8,000 feet, request holding while we work the checklist.
- 누락된 필수 readback 요소 : 없음 — **세 가지 요구를 모두 수행했습니다**
- 표준교신용어 오류 : `maintain` → `maintaining` (경미)
- 코멘트 : **기관 호출을 했습니다.** `controller` 를 호출부호로 쓰던 오류가 EPTA_02·03·04 세 세트 연속이었는데 **이번에 해결**됐습니다. 상황·고도·요청 세 요소가 다 있습니다.

---

**P2B-Q4** ⚠️
문제 : ☞ Listen to the controller, give a full readback and say your intentions.
Approach : HL123, roger, hold at VESPA, left turns, maintain 8,000 feet. Say your intentions when you are ready.
내 답안 : hodling at vespa left turn maintain 8000 , hl123
** 교정 답안 : Holding at VESPA, left turns, maintain 8,000 feet, HL123. Our intention is to work the checklist, then request a low pass for a visual check of the nose gear before we commit to landing.
- 누락된 필수 readback 요소 : **intentions**
- 표준교신용어 오류 : 없음
- 코멘트 : 복창은 정확합니다(홀딩 지점·선회 방향·고도). 그런데 **intentions 가 다섯 세트 연속 빠졌습니다** — EPTA_01 `ready` → 02 `report ready` → 03 `direct kimhae airport` → 04 "나중에 말하겠다" → 05 아예 없음. 관제사가 `Say your intentions when you are ready` 라고 명시한 문항입니다.

---

**P2B-Q5** ⚠️
문제 : ☞ Listen to the controller and provide both pieces of information.
Approach : HL123, say your fuel endurance and the number of persons on board.
(Situation Update : one hour 10 minutes of fuel, 186 passengers and 9 crew)
내 답안 : we have 1hr 10min fuel on board and 180passengers and 9crews souls on board hl123
** 정답 : HL123, fuel endurance one hour 10 minutes, 186 passengers and 9 crew, 195 souls on board.
- 누락된 필수 readback 요소 : 없음 — **두 가지를 다 답했습니다**
- 표준교신용어 오류 : **승객이 186 이 아니라 180 입니다** (승무원 9 는 정확)
- 코멘트 : **구조는 해결됐습니다.** EPTA_03 에서 souls on board 를 통째로 빠뜨리고 EPTA_04 에서 178→70 으로 틀려 두 세트 연속 실패한 항목인데, 이번엔 두 항목을 다 말했고 연료도 분 단위까지 정확합니다. 남은 것은 숫자 하나입니다 — 탑승 인원은 소방·구조 규모를 정하는 값이라 정확해야 합니다.

---

**P2B-Q6** ❌
문제 : ☞ Listen to the controller. Tell him what you need to know before you decide, then state your intentions with a reason.
Approach : HL123, a low pass for a visual check will take about 10 minutes, and the re-approach another 15. Brampton is 35 minutes from here. What would you like to do?
내 답안 : reqeust branten landing distance length available  hl123
** 교정 답안 : HL123, before we decide — request the weather at Brampton and whether their fire service is available. We have 70 minutes of fuel, so the low pass and re-approach at 25 minutes total is well inside that, and we would rather confirm the gear here than divert. Request the low pass.
- 누락된 필수 readback 요소 : **의도 진술과 이유 — 지시문의 뒷부분 전부**
- 표준교신용어 오류 : 없음
- 코멘트 : **묻는 동작 자체는 나왔습니다** — 세 세트 연속 못 했던 것이라 그 부분은 진전입니다. 그런데 **물은 내용이 이 상황의 변수가 아닙니다.** 기수 기어 문제에서 Brampton 의 활주로 길이는 판단 요소가 아닙니다(기어가 안 내려가면 길이로 해결되지 않습니다). 필요한 정보는 Brampton 의 기상이나 소방대 가용 여부입니다. 그리고 **잔여 70분 vs 저속통과+재접근 25분 vs 대체 35분** 이라는 세 숫자가 주어졌는데 비교가 없고 결정도 없습니다.

---

**P2B-Q7** ⚠️
문제 : ☞ Contact approach, give them an update, state your decision, and say what you will need on landing.
(Situation Update : 저속통과 결과 기수 기어가 내려가 있는 것으로 보이고, 잔여 연료 55분)
내 답안 : request visual approach to asford airport and request emergency equipment standing by on the runway hl123
** 교정 답안 : Ashford Approach, HL123. The tower reports the nose gear looks down and in place after the low pass, and we now have 55 minutes of fuel. We will land at Ashford — request the ILS runway 15 with the fire service standing by.
- 누락된 필수 readback 요소 : **① 기관 호출 ② 상황 갱신(저속통과 결과와 잔여 연료)**
- 표준교신용어 오류 : **`visual approach` 는 이 상황에 맞지 않습니다.** 원래 ILS 15 로 복귀하는 맥락이고, 시각접근을 요청할 이유가 없습니다.
- 코멘트 : 결정(Ashford 착륙)과 소방대 요청은 적절합니다. 빠진 것은 **갱신**입니다 — 저속통과에서 기어가 내려간 것으로 보인다는 사실이 바로 착륙을 결정한 근거인데, 그걸 말하지 않으면 관제사는 왜 갑자기 착륙하겠다는지 모릅니다.

---

**P2B-Q8** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, roger, turn left heading 180, descend to 2,500 feet until established, cleared for the ILS runway 15 approach, the fire service is in position.
내 답안 : leftrun 180 decent 2500 until established cleared ils runway 15 hl123
** 정답 : Turn left heading 180, descend to 2,500 feet until established, cleared for the ILS runway 15 approach, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음 (`leftrun` 은 `left turn` 오탈자)
- 코멘트 : **선회 방향·기수·고도·established·접근 허가 전부.** EPTA_04 에서 이 유형에서 선회 방향을 빠뜨렸는데 이번엔 넣었고, 접근 허가도 유지했습니다. **접근 허가 복창은 두 세트 연속 안정적입니다.**

---

**P2B-Q9** ⚠️
문제 : ☞ Listen to the controller and provide both pieces of information.
Approach : HL123, the tower is asking two things — will you be stopping on the runway, and do you want the fire service alongside or following you?
내 답안 : we want the fireservices follwing our aircraft hl123
** 정답 : HL123, we do not expect to stop on the runway, and we would like the fire service following us.
- 누락된 필수 readback 요소 : **활주로 정지 여부 — 두 질문 중 하나**
- 표준교신용어 오류 : 없음
- 코멘트 : 소방대 쪽은 "following" 으로 분명히 답했습니다. 그런데 **활주로에 정지할지 여부를 빠뜨렸습니다** — EPTA_04 P2B-Q9 와 똑같은 실패입니다. 그 답에 따라 타워가 후속 항공기를 언제 접근시킬지가 달라집니다. 관제사가 `two things` 라고 세어줬습니다.

---

## Part Ⅱ TASK C

**P2C-Q1** ⚠️ (90초)
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
내 답안 : During the approach phase , we are ready for landing so make the aircraft extract the gear , but the nose gear seems to strange that the indication indicate something problem , so we inform the controller our situation , and request holding , also we inform our fuel and sob , the atc inform us some options , about landing another airport and visual check in origianl airport , we choose the visual check , after that we decided to land the original airport and use the ils appraoch also the fire services follwed as soon as landing
** 교정 답안 : During the approach we were getting ready for landing, so we extended the gear, but the nose gear indication showed unsafe. We recycled the gear and used the alternate system and it still showed unsafe. We informed the controller of our situation and requested holding, and we also passed our fuel endurance and souls on board. The controller gave us some options — landing at another airport, or a low pass for a visual check at the original airport. We chose the visual check, and after that we decided to land at the original airport using the ILS, with the fire service following us after landing.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **전개를 거의 다 담았습니다** — 기어 전개, 표시 이상, 상황 통보, 홀딩 요청, 연료·SOB 보고, 두 선택지, 저속통과 선택, ILS 착륙, 소방대. 그리고 **EPTA_04 에서 다른 파트(구급차)를 섞어 넣었던 문제가 이번엔 없습니다.** 비행 단계도 `approach phase` 로 맞게 썼습니다(EPTA_03 에서는 상승 중을 접근 중으로 틀렸습니다). 빠진 것은 **재순환·대체 전개를 시도했는데도 안 됐다는 조치**입니다 — 그게 사건의 심각도를 정합니다. 문법 교정 : `extract the gear` → `extended the gear`(extract 는 추출), `seems to strange that the indication indicate something problem` → `the nose gear indication showed unsafe`, `we are ready` → `we were getting ready`(시제), `the atc inform us` → `the controller gave us`.

---

**P2C-Q2** ⚠️ (90초)
문제 : How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
내 답안 : I think this happen handled well , as pilot , they did the checklist routinely , and as soon as they know the problem emerged at the nose gear , they inform their situation to controller is the best thing what they do , and controller gave them 2 options to visual check and divert to another airport , one thing that i want to handle different is that don''t give the option which go another airport , because it takes 35min , it is not enoguh , so the controller have to handle at the first airport and they have to positioning not only the fire services but also the braking equipment in the runway . other that all the things handled well her name is Jeff pushing all that we should get it
** 교정 답안 : I think the controller handled it well. As soon as we told him the nose gear indication was unsafe, he gave us holding at VESPA so we could work the checklist, and then he laid out both options — a low pass for a visual check, or a diversion to Brampton — and let us choose. One thing that could have been handled differently is the diversion option: Brampton was 35 minutes away, and with 70 minutes of fuel that was possible but it would have left us thin, so I would rather he had offered the low pass first. He could also have had the fire service in position earlier instead of waiting for us to ask.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **`one thing that i want to handle different is …` 로 질문 후반부에 답했습니다 — 세 세트 연속**입니다. 그리고 **숫자를 근거로 들었습니다**(`because it takes 35min`) — 이번 세트가 겨냥한 "숫자로 판단하기" 가 여기서는 나왔습니다. 다만 **판단이 틀렸습니다** : 연료 70분에 대체 35분이면 불가능하지 않습니다. "충분하지 않다"가 아니라 "여유가 얇아진다"가 맞습니다. 그리고 첫 문장이 `I think this happen handled well` 로 시작해 곧바로 `as pilot, they did…` 로 **조종사를 평가**합니다 — 질문은 관제사를 묻습니다(**세 세트 연속 같은 패턴**). 마지막 `her name is Jeff pushing all that we should get it` 은 문맥과 무관한 문장입니다 — 입력 사고로 보고 채점에서 제외했습니다. 문법 교정 : `they inform their situation to controller is the best thing what they do` → 문장이 성립하지 않습니다, `braking equipment` → 무슨 장비인지 전달되지 않습니다.

---

## ICAO 6개 항목 등급

| 항목 | 등급 | EPTA_04 | 근거 |
|---|---|---|---|
| Pronunciation | **평가 보류** | 보류 | 텍스트 답안이라 판단 근거가 없습니다. 등급 계산에서 제외합니다. |
| Structure | **Level 3** | 3 | 답한 문항의 복창은 안정적입니다. 자유응답에서는 문장이 길어지면 깨집니다 — `seems to strange that the indication indicate something problem`, `they inform their situation to controller is the best thing what they do`. 시제 혼용(`we are ready` ← 과거)도 남습니다. |
| Vocabulary | **Level 3** | 3 | `terrain caution`, `endurance`, `souls on board`, `established` 는 정확하게 씁니다. 그러나 **단어를 틀려 뜻이 바뀐 사례가 세 건** : `extract the gear`(← extended), `visual approach`(상황 부적합), `braking equipment`(불명). |
| Fluency | **Level 3** | 3 | Task C 두 문항은 분량을 채웠습니다. 다만 30초 문항 두 개와 **90초 Follow-up 을 비웠습니다.** |
| Comprehension | **Level 3** | 3 | 복창 정확도는 이번이 가장 좋습니다 — 5요소 완전 2회, 접근 허가 3/3, squawk 함정 통과, 피트↔FL 3/3, 두 개의 네 자리 피트 고도 동시 정확. 반면 값 오류가 남습니다 : FL340→350, **1,800ft→18000**, 186명→180명. 그리고 **숫자 비교 실패가 핵심** — P1B-Q1 에서 43>40 을 비교하지 않고 그대로 복창, P2B-Q6 에서 상황과 무관한 정보를 요청, Task C Q2 에서 70분 대 35분을 "부족"으로 오판. |
| **Interactions** | **Level 2 ↓** | 3 | **무응답 3건(P2A-Q3·Q6·Q10)** 이 결정적입니다. 그중 둘은 지시문에 해야 할 일이 그대로 적힌 문항이었고, 하나는 배점이 가장 큰 90초 Follow-up 입니다. 여기에 `inquire` 지시 **세 번 전부 미수행**(P2A-Q2·Q6·Q9), intentions **다섯 세트 연속 누락**(P2B-Q4), 두 질문 중 하나만 답(P2B-Q9)이 겹칩니다. 개선된 부분도 분명합니다 — 기관 호출의 `controller` 오류 해결, fuel/SOB 두 항목 모두 응답, "결정 전에 묻기" 동작 자체는 처음 나왔습니다. 그러나 **교신을 아예 하지 않은 문항이 셋인 것**은 Level 3 의 "예상 밖 전개에서도 교신을 유지한다" 에 미달합니다. |

### 최종 등급 : **Level 2 (불합격)** — EPTA_02~04 Level 3 에서 **하락**

**답한 문항만 보면 역대 최고입니다.** ✅ 13개로 가장 많고, ❌ 4개로 가장 적습니다.
5요소 복창을 두 번 완전히 잡고, 접근 허가·squawk 함정·피트↔FL·NEGATIVE 3단·unable 3단·
squawk 정정·fuel/SOB·기관 호출이 모두 됐습니다. 지난 네 세트에서 지적한 것들이 상당히
정리됐습니다.

**그런데 세 문항을 비웠고, 그중 둘이 이 세트가 겨냥한 최우선 약점 문항이었습니다.**
P2A-Q3(커퓨 숫자 비교)과 P2A-Q6(결정 전에 묻기)은 네 세트에 걸쳐 반복 지적한 항목을
연습하기 위해 넣은 것이고, P2A-Q10 은 배점이 가장 큰 90초 문항입니다. 등급 계산에서
무응답은 Level 1 이고 최종 등급은 6항목 최저값이므로, 잘한 28문항이 비운 3문항을
덮지 못합니다.

---

## 태스크별 총평

**Part Ⅰ Task A** — 네 문항 중 셋이 완전합니다. **네 자리 피트 고도 두 개(4,000·2,000)를 한 문항에서 둘 다 정확히** 받았고, **squawk 6170 뒤집기 함정**도 통과했고, **접근 허가**도 복창했습니다. EPTA_04 에서 지적한 세 가지가 한꺼번에 잡혔습니다. 남은 것은 Q1 의 `the Dash 8` — 숫자는 챙기고 **대상 명사를 빠뜨리는** 양상이 EPTA_03 Q2 의 `straight ahead` 누락과 같습니다.

**Part Ⅰ Task B** — 여섯 문항 중 넷이 완전하고 둘이 부분입니다. Q3(confirm 3단)·Q4(unable 3단)·Q5(squawk 정정)는 지난 세트들에서 하나씩 완성한 구조가 **모두 유지**됐습니다. 문제는 Q1 입니다 — **43마일 필요 / 40마일 남음** 이라는 두 숫자를 나란히 주고 비교만 하면 되는 문항에서 그대로 복창했습니다. Q6 은 비교를 일부 해냈지만(홀딩 20→10분) 근거를 말하지 않아 요청이 성립하지 않습니다.

**Part Ⅱ Task A** — 열 문항 중 셋을 비웠고, 답한 일곱 중 넷이 완전합니다. 복창 문항(Q5·Q7)과 위치보고(Q4)는 정확합니다. 그런데 **`inquire` 가 들어간 세 문항(Q2·Q6·Q9)에서 세 번 다 묻지 않았습니다** — Q6 은 아예 비웠고, Q2·Q9 는 복창만 했습니다. Q8 의 1,800ft→18000 은 같은 세트 P1A-Q2 에서 2,000ft 를 정확히 받은 것과 대비됩니다.

**Part Ⅱ Task B** — 아홉 문항 중 넷이 완전하고 ❌가 하나입니다. **Q3 에서 기관 호출을 해냈고** (세 세트 연속 `controller` 오류 해결), **Q5 에서 fuel 과 SOB 를 둘 다 답했고**(두 세트 연속 실패 해결), **Q8 에서 접근 허가와 선회 방향을 둘 다 넣었습니다.** 반면 Q6 은 묻는 동작은 나왔으나 물은 내용이 상황과 무관했고 결정·이유가 없었습니다. Q4 의 intentions 누락은 **다섯 세트 연속**입니다.

**Part Ⅱ Task C** — 이번이 가장 좋습니다. Q1 은 원인·전개·결정을 순서대로 담았고 **다른 파트 내용을 섞지 않았습니다**(EPTA_04 에서 구급차를 섞었던 문제). Q2 는 질문 후반부에 답했고 **숫자를 근거로 들었습니다** — 비록 70분 대 35분 판단이 틀렸지만, 숫자로 논증하려는 시도 자체는 이 세트에서 처음입니다. 남은 것은 첫 문장의 주어(관제사가 아니라 조종사를 평가)와 문장이 길어질 때의 붕괴입니다.

---

## 다음 학습 과제

### 반복되는 약점 3개

1. **비우지 않는다 (최우선)** — 비운 세 문항이 혼자서 등급을 한 단계 내렸습니다. 28문항을 잘 풀어도 3문항을 비우면 최저값 규칙 때문에 덮이지 않습니다. 실제 시험에서도 무응답은 가장 낮은 점수입니다. **답이 완전하지 않아도 한 문장은 말하세요** — P2A-Q3 은 "홀딩 10분이면 2302 가 되어 커퓨 2300 을 넘습니다" 한 문장으로 절반 이상을 받습니다.

2. **`inquire` / "결정 전에 묻기" (네 세트 연속)** — 이번 세트에서 `inquire` 가 세 번 나왔고 세 번 다 하지 않았습니다. P2A-Q6 은 관제사가 `tell me now and I will give you priority` 로 먼저 길을 열어줬는데도 비웠습니다. **지시문에 `inquire`·`what you need to know`·`how long` 이 보이면 답에 물음표가 하나 있어야 합니다.**

3. **두 숫자를 비교해서 말하기 (두 세트 연속)** — P1B-Q1 은 43 > 40, P2B-Q6 은 70 vs 25 vs 35, Task C Q2 는 70 vs 35. 숫자는 정확히 받아적습니다. **받아적은 다음 한 줄로 비교하는 단계**가 비어 있습니다. `필요 43 / 남은 40 → 부족` 처럼 종이에 비교를 적으세요.

### 외워야 할 표현 5개

| 영어 | 뜻 | 쓰는 상황 |
|---|---|---|
| `Unable to cross TORIN at 11,000 — we have 40 miles to run and we need 43.` | TORIN 을 11,000 으로 통과 불가 — 40마일 남았는데 43마일이 필요합니다 | **두 숫자를 나란히 말하는 것이 곧 사유다** |
| `How long will that taxi take?` / `What will that do to our arrival time?` | 그 지상 이동은 얼마나 걸립니까 / 도착시각에 어떤 영향이 있습니까 | `inquire` 지시. **네 세트 연속 못 한 것** |
| `Our intention is to work the checklist, then request a low pass before we commit to landing.` | 체크리스트를 하고, 착륙을 확정하기 전에 저속 통과를 요청할 생각입니다 | `Say your intentions`. **다섯 세트 연속 누락** |
| `We do not expect to stop on the runway, and we would like the fire service following us.` | 활주로에 정지하지 않을 것이고, 소방대는 뒤따라와 주십시오 | `two things` 질문에는 **둘 다** |
| `Passing 1,800 feet.` | 1,800피트 통과 중 | 네 자리 피트는 `1800` 으로 적고 **자릿수를 한 번 더 확인** |
