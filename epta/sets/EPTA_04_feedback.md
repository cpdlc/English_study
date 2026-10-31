# EPTA_04 채점 결과 — 2026-10-21 (세션 20261021-113815)

32/32 응답, 무응답 없음.

| | EPTA_01 1차 | 재응시 | EPTA_02 | EPTA_03 | **EPTA_04** |
|---|---|---|---|---|---|
| ✅ | 1 | 6 | 11 | 11 | **10** |
| ⚠️ | 15 | 20 | 16 | 13 | 13 |
| ❌ | 16 | 6 | 5 | 7 | **9** |
| 최종 | Level 1 | Level 2 | Level 3 | Level 3 | **Level 3 (유지)** |

---

## Part Ⅰ TASK A

**P1A-Q1** ✅
문제 : Ground : HL123, give way to the Boeing 787 on Charlie.
내 답안 : give way to the b787 on charlie hl123
** 정답 : Give way to the Boeing 787 on Charlie, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : 완전합니다.

---

**P1A-Q2** ❌
문제 : Tower : HL123, traffic is an ATR on final, cleared for immediate takeoff runway 08, report passing 3,000 feet.
내 답안 : cleared immediate take off runway 08 report passing 8000 ft hl123
** 정답 : Cleared for immediate takeoff runway 08, report passing 3,000 feet, HL123.
- 누락된 필수 readback 요소 : 없음 (트래픽 정보는 복창 불필요 — 제외 정확)
- 표준교신용어 오류 : **`report passing 3,000 feet` 를 `8000 ft` 로 복창했습니다.** 값 오류입니다. 관제사는 3,000 피트에서 보고를 기다리는데 보고가 오지 않습니다.
- 코멘트 : `cleared` 는 정확히 썼습니다(`for` 만 빠짐). 숫자 하나가 전체를 무효로 만든 경우입니다.

---

**P1A-Q3** ⚠️
문제 : Approach : HL123, descend to 4,000 feet, cleared for the RNAV runway 26 approach, contact Halston Tower on 120.35.
내 답안 : decent 4000 cleared rnav 26 approach contact 120.35 hl123
** 정답 : Descend to 4,000 feet, cleared for the RNAV runway 26 approach, contact Halston Tower on 120.35, HL123.
- 누락된 필수 readback 요소 : **이관 기관명 `Halston Tower`** — 주파수만 복창했습니다
- 표준교신용어 오류 : `cleared rnav 26 approach` 에서 `for the` 가 빠졌지만 `cleared` 와 `approach` 가 있어 허가 복창으로 성립합니다
- 코멘트 : **접근 허가를 복창했습니다.** 세 세트 연속 `expect` 로 바꾸거나 빠뜨렸던 항목인데, 이번 세트에서는 세 문항(P1A-Q3, P2A-Q8, P2B-Q8) 모두에서 `cleared` 를 넣었습니다. 남은 것은 기관명입니다 — EPTA_02·03 에서도 같은 자리에서 빠졌습니다.

---

**P1A-Q4** ✅
문제 : Delivery : HL123, cleared to Halston Airport via the CANTO TWO departure, maintain 6,000 feet, squawk 2046.
내 답안 : cleared hoston airport cando 2 departure mainatin 6000 squawk 2046 hl123
** 정답 : Cleared to Halston Airport via the CANTO TWO departure, maintain 6,000 feet, squawk 2046, HL123.
- 누락된 필수 readback 요소 : 없음 (`via` 누락은 경미)
- 표준교신용어 오류 : 없음
- 코멘트 : **squawk 2046 을 정확히 복창했습니다.** 이 값은 2064 로 뒤집기 쉬운 함정이었고(같은 세트 P1B-Q5 가 그 상황을 다룹니다), 통과했습니다. 목적지·SID·고도도 다 있습니다.

---

## Part Ⅰ TASK B

**P1B-Q1** ❌
문제 : You are holding over OBLIN while the controller sorts out the arrival sequence. You have one hour 20 minutes of fuel on board, and your alternate needs 40 minutes. Now ATC contacts you. Provide both pieces of information.
Center : HL123, say your endurance, and how many more turns in the hold you can take.
내 답안 : request inbound holdon airport we have 1hr 20min hl123
** 정답 : HL123, endurance one hour 20 minutes. Our alternate needs 40 minutes, so we can take about 10 more turns in the hold.
- 누락된 필수 readback 요소 : **추가 선회 가능 횟수 — 두 질문 중 하나를 답하지 않았습니다**
- 표준교신용어 오류 : `request inbound holdon airport` 는 묻지 않은 내용입니다.
- 코멘트 : 관제사가 **두 가지**를 물었고 지시문에도 `Provide both pieces of information` 이라고 적혀 있었습니다. 연료 1시간 20분에서 대체공항 40분을 빼면 여유가 40분이므로, 1회전 4분 기준 10회전 정도를 말해주면 관제사가 시퀀스를 짭니다. **그 계산이 이 문항의 핵심**이었습니다.

---

**P1B-Q2** ⚠️
문제 : On final into Everett last night you were hit by a green laser from the left of the approach path, at about 600 feet. You were too busy to report it then. You have now landed and the ground controller calls you. Acknowledge the taxi instruction, and report what happened on the approach.
Ground : HL123, Everett Ground, taxi to stand 24 via Bravo.
내 답안 : taxi to satand 24 via b hl123 be advied  , we saw green raiser on the final left path at 6000ft
** 교정 답안 : Taxi to stand 24 via Bravo, HL123. And be advised, on final we were hit by a green laser from the left of the approach path, at about 600 feet.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **고도를 600 피트가 아니라 6000 피트로** 말했습니다 (0 하나 추가). 접근 중 600 피트와 6,000 피트는 전혀 다른 상황이고, 레이저 보고에서 고도는 발사 지점을 특정하는 핵심 정보입니다.
- 코멘트 : **복창과 보고 두 부분을 모두 수행했고 `be advised` 로 보고를 연 것도 적절합니다.** 고친 것은 고도 값과 어순입니다.

---

**P1B-Q3** ✅
문제 : Approach instructed you to maintain heading 070. A build-up appeared ahead, so you turned 20 degrees right to avoid it and you are now steady on heading 090. Now ATC contacts you. Respond accordingly.
Approach : HL123, confirm maintaining heading 070?
🖥 [ heading 090 / weather avoidance ]
내 답안 : negative maintaining heading 090 due to weather avoidance hl123
** 정답 : Negative, maintaining heading 090 due to weather avoidance, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **완전합니다.** NEGATIVE + 실제 값 + 사유 세 토막이 다 있습니다. EPTA_03 에서 처음 완성한 구조가 이번에도 유지됐습니다 — **2세트 연속**.

---

**P1B-Q4** ✅
문제 : The controller has cleared you direct ZAVER. Your weather radar shows a line of storms sitting right on that track, with tops above your level, and you can only take that routing after you are past the line. Listen to the controller, respond with a reason, and tell him what you can accept instead.
Center : HL123, cleared direct ZAVER.
내 답안 : unable to direct saver due to weather , request ravar vector to saver to avoid weather hl123
** 정답 : Unable direct ZAVER due to a line of storms on that track, HL123. Request radar vectors around the weather, then direct ZAVER once we are past the line.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **unable + 사유 + 대안 세 토막이 완성됐습니다.** EPTA_02 P1B-Q4(강하율), EPTA_03 P1B-Q4(RNP) 에서 **2세트 연속 실패했던 유형**입니다 — 둘 다 "할 수 없는 것을 그대로 복창"했는데, 이번에는 `unable` 로 시작하고 레이더 벡터라는 구체적 대안까지 냈습니다.

---

**P1B-Q5** ⚠️
문제 : Delivery gave you squawk 2046 before departure. You set 2064 in the transponder by mistake and it has been running that way since take-off. Now ATC contacts you. Respond accordingly.
Center : HL123, verify your squawk.
내 답안 : we set another squawk by miske squawking 2046 hl123
** 교정 답안 : HL123, correction — we had 2064 set by mistake. Now squawking 2046.
- 누락된 필수 readback 요소 : **잘못 넣은 값 2064**
- 표준교신용어 오류 : 없음
- 코멘트 : 오류 사실과 정정 조치는 있습니다. 다만 `another squawk` 로 뭉갰습니다 — 관제사 화면에는 **2064** 가 떠 있고, 그 값을 확인해주지 않으면 "내가 보고 있는 게 당신인가"를 대조할 수 없습니다. 틀린 값을 말하는 것이 정정의 절반입니다.

---

**P1B-Q6** ❌
문제 : Your arrival chart shows a crossing restriction of 11,000 feet at MERIS, but the controller has cleared you to descend to flight level 120, which leaves you above that restriction. You are 30 miles from MERIS. Contact Halston Approach. Point out the difference, and request the descent you need.
🖥 [ MERIS 11,000 feet ]
내 답안 : controller Verify level restriction at Meris 11000feet
** 교정 답안 : Halston Approach, HL123, our chart shows a crossing restriction of 11,000 feet at MERIS, but we are cleared to flight level 120. Request descent to 11,000 feet to make the restriction.
- 누락된 필수 readback 요소 : **① 콜사인 HL123 ② 강하 요청**
- 표준교신용어 오류 : **`controller` 는 호출부호가 아닙니다.** EPTA_02 P2B-Q3, EPTA_03 에 이어 **3세트 연속 재발**이고, 이번 세트에서만 세 번(P1B-Q6, P2A-Q3, P2B-Q3) 나왔습니다. `Halston Approach` 로 불러야 합니다.
- 코멘트 : 제한 고도를 지적한 것은 맞습니다. 그런데 **조종사가 먼저 발신하는 문항에서 콜사인이 빠진 것**은 이번에 처음 나왔습니다 — 기관명도 틀리고 콜사인도 없으면 누가 누구에게 하는 말인지 성립하지 않습니다. 지시문 뒷부분(`request the descent you need`)도 빠졌습니다.

---

## Part Ⅱ TASK A

**P2A-Q1** ✅
문제 : ☞ Contact Northfield Control and report your position.
(Initial Situation : climbing through 12,000 feet for flight level 330)
내 답안 : Norfiled control hl123 , climb throught 12000 to fl330 depart at averen and inbout for hosten
** 정답 : Northfield Control, HL123, climbing through 12,000 feet for flight level 330.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `climb` → `climbing` (경미)
- 코멘트 : **기관 호출 + 피트 통과고도 + FL 목표고도.** 두 단위를 정확히 구분했습니다. 출발지·목적지를 덧붙인 것은 무해합니다.

---

**P2A-Q2** ✅
문제 : ☞ Listen to the controller and give a full readback.
Center : HL123, Northfield Control, radar contact, climb and maintain flight level 330, after CANTO cleared direct MERIS.
내 답안 : climb and maintain fl330 , after cando direct meris hl123
** 정답 : Climb and maintain flight level 330, after CANTO cleared direct MERIS, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `cleared` 누락 (경미)
- 코멘트 : 고도와 조건부 경로를 다 잡았습니다.

---

**P2A-Q3** ⚠️
문제 : ☞ Inform the controller of the situation, state that you are considering a diversion, and request the weather at the nearest suitable airport.
내 답안 : controller hl123 , we have collapsed passenger in board , request divert to  nearest suitable airport
** 교정 답안 : Northfield Control, HL123, we have a passenger who has collapsed and a doctor is attending. We are considering a diversion. Request the weather at the nearest suitable airport.
- 누락된 필수 readback 요소 : **기상 요청** — 지시문은 `request **the weather** at the nearest suitable airport` 입니다
- 표준교신용어 오류 : **`controller` 기관명 오류** (이번 세트 두 번째)
- 코멘트 : 상황 통보와 회항 고려는 전달됐습니다. 그런데 **요청 대상이 바뀌었습니다** — 기상을 달라고 해야 하는데 회항 허가를 요청했습니다. 바로 다음 문항에서 관제사가 기상을 주는 구조였으므로, 여기서 기상을 요청해야 대화가 이어집니다.

---

**P2A-Q4** ❌
문제 : ☞ Listen to the controller, give a readback of the weather, and state your intentions with a reason.
Center : HL123, roger, the nearest suitable is Redwood, 60 miles south-east, wind 240 at 8, visibility 10 kilometres, runway 26 is 2,600 metres. Halston is 140 miles ahead. Say your intentions.
내 답안 : red wood is profitable for our aircraft request inbound for redwood hl123
** 교정 답안 : Redwood, wind 240 at 8, visibility 10 kilometres, runway 26 is 2,600 metres, HL123. We will divert to Redwood — it is only 60 miles and the doctor wants the passenger on the ground within the hour. Request descent and direct Redwood.
- 누락된 필수 readback 요소 : **기상 복창 전부** — 바람·시정·활주로 길이 어느 것도 없습니다. 지시문이 `give a readback of the weather` 라고 명시했습니다.
- 표준교신용어 오류 : **`profitable` 은 "수익성 있는"** 이라는 뜻입니다. 여기서 쓸 단어는 `suitable` 입니다.
- 코멘트 : 의도(Redwood 로 간다)는 전달됐지만 **이유가 없습니다.** 지시문에 `with a reason` 이 적혀 있었습니다. 60마일로 가깝다, 활주로가 2,600m 로 충분하다, 기상이 양호하다, 의사가 1시간 내 착륙을 요구한다 — 근거가 넷이나 주어져 있었는데 하나도 쓰지 않았습니다. **"이유 대기"는 네 세트 연속 미해결입니다.**

---

**P2A-Q5** ⚠️
문제 : ☞ Contact Northfield Control, request descent and direct Redwood, and request priority handling with an ambulance on arrival.
내 답안 : Northfield control hl123 , doctor said the passenger have to go ground , so request decend and direct to airport and request stand by the embulence on the runway
** 교정 답안 : Northfield Control, HL123, the doctor says the passenger must be on the ground within the hour. Request descent and direct Redwood, and request priority handling with an ambulance on arrival.
- 누락된 필수 readback 요소 : **① 공항 이름 Redwood**(`direct to airport` 로만) **② `priority handling`**
- 표준교신용어 오류 : `have to go ground` → `must be on the ground` (문법)
- 코멘트 : **기관 호출 + 강하·직항 요청 + 구급차 요청** 세 요소가 들어갔습니다. 사유(의사 소견)를 밝혀 우선권의 근거도 전달됐습니다. 다만 `direct to airport` 는 관제사가 어느 공항인지 다시 물어야 합니다 — 직전 교신에서 Redwood 가 나왔더라도 **요청에는 지명을 넣어야** 합니다.

---

**P2A-Q6** ❌
문제 : ☞ Listen to the controller and give a full readback.
Center : HL123, roger, descend to flight level 180, direct Redwood, contact Redwood Approach on 126.9. Your ambulance request is passed on.
내 답안 : decend fl190 direct redwood ,contact redwood 126.9 hl123
** 정답 : Descend to flight level 180, direct Redwood, contact Redwood Approach on 126.9, HL123.
- 누락된 필수 readback 요소 : 없음 (`Approach` 누락은 경미)
- 표준교신용어 오류 : **강하 고도를 FL180 이 아니라 FL190 으로 복창했습니다.** 값 오류입니다.
- 코멘트 : 직항·주파수는 정확합니다. 고도만 한 자리 틀렸는데, 지정고도는 필수 복창 항목이라 이 하나로 문항이 무효가 됩니다.

---

**P2A-Q7** ⚠️
문제 : ☞ Contact Redwood Approach and report your passing altitude.
(Situation Update : descending through flight level 190 for 11,000 feet. There are 178 passengers and 8 crew on board.)
내 답안 : redwood approach hl123 decent throught fl190 to 11000 70 passengers and 9 crews souls on board
** 정답 : Redwood Approach, HL123, descending through flight level 190 for 11,000 feet.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **탑승 인원을 묻지 않았는데 말했고, 그 값도 틀렸습니다** — 지문은 178 승객 + 8 승무원인데 `70 passengers and 9 crews` 로 답했습니다.
- 코멘트 : **기관 호출 + 통과고도 + 목표고도는 정확합니다** — 피트와 FL 을 구분했습니다. 문제는 **인원을 여기서 미리 말한 것**입니다. 인원은 P2A-Q9 에서 관제사가 묻는 항목이었고, 묻지 않은 정보를 먼저 말하면 교신이 길어집니다. 더 큰 문제는 지문에 적힌 숫자를 **둘 다 틀린 것**입니다.

---

**P2A-Q8** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, Redwood Approach, descend to 3,000 feet, reduce speed to 180 knots, cleared for the ILS runway 26 approach, report established.
내 답안 : decend 3000 reduce spped 180 cleared is runway 26 approach report establisehd hl123
** 정답 : Descend to 3,000 feet, reduce speed to 180 knots, cleared for the ILS runway 26 approach, wilco report established, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음 (`is` 는 `ILS` 오탈자로 보고 감점하지 않았습니다)
- 코멘트 : **고도·속도·접근 허가·report established 네 요소 전부.** 접근 허가 복창의 두 번째 성공입니다.

---

**P2A-Q9** ⚠️
문제 : ☞ Listen to the controller and provide both pieces of information.
Approach : HL123, two things — how many people are on board, and do you need the ambulance at the gate or on the runway?
내 답안 : 70passendgers and 8 crews souls on board , request stand ambulence on runwya hl123
** 정답 : HL123, 178 passengers and 8 crew, 186 souls on board. Request the ambulance on the runway.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **승객 수가 178 이 아니라 70 입니다** (승무원 8 은 정확)
- 코멘트 : **두 가지를 다 답했습니다** — 이번 세트의 "두 질문" 문항 네 개 중 이것과 P2B-Q5 두 개에서 둘 다 답했습니다. 다만 숫자가 틀렸습니다. 탑승 인원은 소방·구조 규모를 정하는 값이라 **틀린 숫자가 빈 숫자보다 위험합니다.**

---

**P2A-Q10** ⚠️
문제 : ☞ Listen to the tower and give a full readback. Then inquire where the ambulance will meet you.
Tower : HL123, Redwood Tower, wind 250 at 10, runway 26, cleared to land, the ambulance is standing by.
내 답안 : cleared to land runway 26 hl123 , we will stop at the end of the runway and request stand ambulence on the end of runway
** 교정 답안 : Cleared to land runway 26, HL123. Where will the ambulance meet us — at the end of the runway or on the stand?
- 누락된 필수 readback 요소 : 없음 (바람 제외 정확)
- 표준교신용어 오류 : 없음
- 코멘트 : **문의를 요청으로 바꿨습니다.** 지시문은 `inquire **where** the ambulance will meet you` — 구급차가 **어디서** 기다리는지 물어보라는 것인데, 스스로 위치를 지정해 요청했습니다. 관제사는 이미 `the ambulance is standing by` 라고 알려줬으므로, 남은 것은 위치 확인입니다. **물음표로 끝나는 문장이 필요했습니다.**

---

**P2A-Q11** ⚠️ (90초 Follow-up)
문제 : In this situation, you chose to divert to Redwood instead of continuing to Halston. What did you weigh up before you made that choice? In your role as a pilot, how do you decide whether a sick passenger is a reason to divert? Give an example of a case where you would keep going instead.
내 답안 : as pilot , always keep in mind the passengers safety , it is important as the aircraft important , and the doctor informed that the sick passenger have to go ground and take a rest , so we have to divert suitable airport , and make the ambulence standing on the runway to take him as soon as possible after land.
** 교정 답안 : Before I made that choice I weighed up the distance — Redwood was 60 miles while Halston was 140 — the runway length, the weather, and above all the doctor's opinion that the passenger needed to be on the ground within the hour. As a pilot, passenger safety is as important as the aircraft itself, so I rely on the doctor's assessment of how urgent it is. For example, if the doctor told me the passenger was stable and comfortable, and the destination was only 20 minutes further with better medical facilities, I would keep going to Halston instead of diverting.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : ②(판단 기준 — 의사 소견에 의존)는 답했습니다. 빠진 것은 ① **무엇을 저울질했는가** — 거리 60마일 대 140마일, 활주로 길이, 기상 같은 비교 요소가 하나도 없습니다. 지문과 ATC 대사에 숫자가 다 주어져 있었습니다. 그리고 ③ **`Give an example of a case where you would keep going instead.` — 5세트 연속 예시를 들지 않았습니다.** 이번에는 "계속 가는 경우"라고 조건까지 붙였는데도 비었습니다. 문법 교정 : `it is important as the aircraft important` → `it is as important as the aircraft itself`, `have to go ground and take a rest` → `needed to be on the ground`, `divert suitable airport` → `divert to a suitable airport`.

---

## Part Ⅱ TASK B

**P2B-Q1** ✅
문제 : ☞ Contact Halston Approach and report your position.
(Initial Situation : descending through flight level 160 for 9,000 feet, information Bravo)
내 답안 : halston approach hl123, decending through fl160 to 9000 , inbound for hoston airport information bravo
** 정답 : Halston Approach, HL123, descending through flight level 160 for 9,000 feet, information Bravo.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `to` → `for` (경미)
- 코멘트 : **기관 호출 + 통과고도 + 목표고도 + ATIS.** 네 세트에 걸쳐 가장 안정된 문항 유형이 됐습니다.

---

**P2B-Q2** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, Halston Approach, good evening, descend and maintain 9,000 feet, reduce speed to 220 knots, expect the MERIS ONE arrival, ILS runway 08, Halston altimeter 29.88.
내 답안 : decent and maintain 9000 , reduce speed 220 expect merson 1 arrival ils runway 08 altimeter 2988 hl123
** 정답 : Descend and maintain 9,000 feet, reduce speed to 220 knots, expect the MERIS ONE arrival, ILS runway 08, altimeter 29.88, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **다섯 요소 전부 정확합니다.** 네 세트 연속으로 이 유형(가장 긴 접근 복창)을 잡고 있습니다 — 안정된 강점입니다.

---

**P2B-Q3** ⚠️
문제 : ☞ Inform the controller of your situation, state that you are maintaining 9,000 feet, and request time to work the checklist.
(Situation Update : 플랩이 15 에서 고착, 접근속도 165kt, 착륙거리 2,400m 필요)
내 답안 : controller hl123 , maintian 9000feet ,  our flaps cannot bend over 15 degree , and we need 2400meter runway , so request holding to work checklist
** 교정 답안 : Halston Approach, HL123, our flaps are jammed at 15 and will not move any further. We need 2,400 metres of landing distance. Maintaining 9,000 feet, request time to work the checklist.
- 누락된 필수 readback 요소 : **기관 호출**
- 표준교신용어 오류 : **`controller` 기관명 오류** (이번 세트 세 번째). `cannot bend over 15 degree` → `are jammed at 15` (표현은 부정확하지만 뜻은 전달됩니다)
- 코멘트 : **세 가지 요구를 모두 수행했습니다** — 상황·고도 유지·체크리스트 시간 요청. 게다가 필요한 착륙거리까지 미리 밝히고 `request holding` 으로 구체화했습니다. **기관 호출만 고치면 완전한 답입니다.**

---

**P2B-Q4** ⚠️
문제 : ☞ Listen to the controller, give a full readback and say your intentions.
Approach : HL123, roger, fly heading 120 and maintain 9,000 feet, that will keep you clear of the arrivals. Say your intentions when you are ready.
내 답안 : heading 120 maintain 9000 , we will let you know as complete as possible hl123
** 교정 답안 : Heading 120, maintain 9,000 feet, HL123. Our intention is to land with flaps 15 — we will need the longest runway available, and we will report when the checklist is complete.
- 누락된 필수 readback 요소 : 없음 — 기수와 고도 둘 다 정확
- 표준교신용어 오류 : 없음
- 코멘트 : **intentions 가 없습니다.** `we will let you know` 는 "나중에 말하겠다"는 뜻이고, 관제사는 `Say your intentions when you are ready` 로 **지금** 말하라고 했습니다. 이 문항 유형(복창 + intentions)에서 intentions 가 비는 것은 EPTA_01·02·03 에 이어 **네 세트 연속**입니다.

---

**P2B-Q5** ✅
문제 : ☞ Listen to the controller and provide both pieces of information.
Approach : HL123, two questions — what is your approach speed with flaps 15, and how much landing distance do you need?
내 답안 : approach spped 165knots and we need 2400meter landing distance hl123
** 정답 : HL123, approach speed 165 knots, and we need 2,400 metres of landing distance.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **두 가지를 다 정확히 답했습니다.** 값도 둘 다 맞습니다.

---

**P2B-Q6** ❌
문제 : ☞ Listen to the controller. Tell him what you need to know before you decide, then state your intentions with a reason.
Approach : HL123, runway 08 is 2,300 metres, so that is tight for you. Runway 26 is 3,000 metres but you would have a 15 knot tailwind. Which do you want?
내 답안 : both are not available request divert to suitable airport hl123
** 교정 답안 : HL123, before we decide — request the current wind on runway 26. We need 2,400 metres, so runway 08 at 2,300 is not enough; if the tailwind on 26 is within our limit we will take runway 26 for the extra length.
- 누락된 필수 readback 요소 : **① 결정 전에 알아야 할 것 ② 이유**
- 표준교신용어 오류 : **판단이 사실과 다릅니다.** 바로 앞 문항에서 본인이 "2,400m 가 필요하다"고 답했고, 관제사는 **RWY26 이 3,000m** 라고 말했습니다. 3,000 은 2,400 보다 크므로 RWY26 은 **길이 면에서 충분합니다.** `both are not available` 은 성립하지 않습니다.
- 코멘트 : 이번 세트에서 가장 무거운 오류입니다. **네 세트 연속으로 "결정 전에 묻기"를 못 했고**, 이번에는 거기에 **숫자 비교 실패**가 겹쳤습니다. 2,300 < 2,400 < 3,000 이라는 비교만 하면 답이 나오는 문항이었고, 남은 변수는 배풍 하나였습니다 — 그게 바로 "결정 전에 물어야 할 것" 이었습니다.

---

**P2B-Q7** ❌
문제 : ☞ Contact approach, give them an update, state your decision, and say what you will need on landing.
(Situation Update : 바람이 080/06 으로 바뀌어 RWY26 의 배풍이 사라졌고, 체크리스트를 마쳤다)
내 답안 : approach hl123 , request wind on the runway 08 , if the wind is calm to land possible , we want to land on ruwnay 08 , if able , stand brake equipment on the runway
** 교정 답안 : Halston Approach, HL123. The checklist is complete. We see the wind is now 080 at 6, so the tailwind on runway 26 has gone — we will take runway 26, because we need 2,400 metres and runway 08 is only 2,300. Request the fire service standing by.
- 누락된 필수 readback 요소 : **① 상황 갱신(체크리스트 완료) ② 올바른 결정**
- 표준교신용어 오류 : `stand brake equipment` 는 무슨 장비인지 전달되지 않습니다 — `the fire service standing by` 입니다.
- 코멘트 : **바람을 물은 것은 한 템포 늦은 진전입니다**(앞 문항에서 해야 했던 동작이 여기서 나왔습니다). 그러나 **결정이 반대입니다.** Situation Update 가 "바람이 바뀌어 **RWY26 의 배풍이 사라졌다**"고 알려줬는데, 길이가 부족한 **RWY08** 을 고르겠다고 했습니다. 2,300m 활주로에 2,400m 가 필요한 항공기를 넣는 결정입니다. 상황 갱신이 답을 알려주고 있었습니다.

---

**P2B-Q8** ❌
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, roger, turn right heading 350, descend to 2,500 feet until established, cleared for the ILS runway 26 approach, contact Halston Tower on 120.35.
내 답안 : turn left d 350 decend 2500ft untile establed cleard ils 26 app , contact hoston tower 120.5 hl123
** 정답 : Turn right heading 350, descend to 2,500 feet until established, cleared for the ILS runway 26 approach, contact Halston Tower on 120.35, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **① 선회 방향을 `right` 가 아니라 `left` 로 복창했습니다 — 반대 방향입니다.** ② **주파수를 120.35 가 아니라 120.5 로** 복창했습니다.
- 코멘트 : **접근 허가(`cleard ils 26 app`)를 복창한 것은 세 번째 성공**이고, 고도와 established 도 정확합니다. 그런데 **선회 방향 반대**는 지시와 다르게 기동하는 결과가 됩니다 — 접근 허가를 챙기면서 방향을 놓쳤습니다. 주파수는 네 세트 중 세 번째 오류입니다(118.5/119.75 → 118.1 정확 → 120.5).

---

**P2B-Q9** ❌
문제 : ☞ Listen to the controller and provide both pieces of information.
Approach : HL123, the tower is asking two things — will you be able to vacate at the end, and do you want the fire service to follow you in?
내 답안 : request fire service follow in hl123
** 정답 : HL123, affirm we expect to be able to vacate at the end, and request the fire service to follow us in.
- 누락된 필수 readback 요소 : **활주로 이탈 가능 여부 — 두 질문 중 하나를 답하지 않았습니다**
- 표준교신용어 오류 : 없음
- 코멘트 : 소방대 요청은 적절합니다. 그런데 관제사가 **`two things`** 라고 말하고 지시문에도 `provide both pieces of information` 이라고 적혀 있었습니다. 활주로 이탈 가능 여부는 **후속 항공기를 언제 접근시킬지**를 결정하는 정보입니다. 이번 세트의 "두 질문" 문항 네 개 중 **둘(P1B-Q1, P2B-Q9)에서 절반만** 답했습니다.

---

## Part Ⅱ TASK C

**P2C-Q1** ⚠️ (90초)
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
내 답안 : the aircraft flap cannot retract more than 15 degree, so it cannot reduce spped what the landing speed have to , so the pilot want the longer runway than the originla one , appreciate for controller ,gave the weather information update and gave some options to some airport , but the wind come normal , so the aircraft go to the 08 runway and request stand by the ambulece on the runway
** 교정 답안 : On the approach into Halston our flaps jammed at 15 and would not extend any further, so we could not slow down to the normal landing speed. Our approach speed was 165 knots and we needed 2,400 metres of landing distance, which is more than the original runway 08 could give us at 2,300 metres. The controller offered us runway 26 at 3,000 metres, but with a 15 knot tailwind. Then the wind changed to 080 at 6, so the tailwind had gone and we took runway 26, with the fire service standing by.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **원인과 결과의 연결은 정확합니다** — 플랩 고착 때문에 속도를 못 줄여 긴 활주로가 필요하다는 인과를 제대로 썼습니다. 그런데 **사실 두 가지가 틀렸습니다.** ① `the aircraft go to the 08 runway` — 08 은 2,300m 로 부족하고, Situation Update 는 26 의 배풍이 사라졌다고 알려줬습니다. ② **`ambulance` 가 등장합니다** — 구급차는 **Part Ⅱ A 의 응급환자 이야기**이고, 이 사건과는 무관합니다. **두 파트를 섞은 것은 이번에 처음 나온 오류**입니다. 단어 교정 : `retract`(올리다) → `extend`(내리다), `appreciate for controller` → `the controller`, `the wind come normal` → `the wind changed`.

---

**P2C-Q2** ⚠️ (90초)
문제 : How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
내 답안 : I think it was handled well , as soon as the pilot knew that the flap didn't work well , they request time to checklist to controller , also the controller gave them time to make them vector to other route , and the controller gave them some options to divert to another airport which have long landing distances and good weather , even thought they are far , after checklist , the ruway 08 weather is come back , so they tried to land , and the controller make the ambulecne on the runway is what the best do . the one thing that he can do different is that even the runway is enough , the controller have to make the aircraft go the longer runway to not make any happening even the aircraft can use the runway . anyway i think it was handled well
** 교정 답안 : I think the controller handled it well. As soon as we told him the flaps were jammed, he gave us a heading away from the arrivals and time to run the checklist, which was what we needed most. He also laid out both runway options honestly — runway 08 at 2,300 metres and runway 26 at 3,000 with a tailwind — and let us choose, instead of deciding for us. One thing that could have been handled differently is that he could have offered the longer runway first, rather than starting with the runway that was already too short for us. That would have saved us a decision at a busy time.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **`the one thing that he can do different is …` 로 질문 후반부에 답했습니다 — 2세트 연속**입니다. 그리고 관제사를 주어로 평가했습니다(`the controller gave them time`, `the controller gave them some options`) — 세 세트 연속 `we` 로 시작하던 것이 개선됐습니다. 제안 내용(활주로가 충분해도 더 긴 쪽을 쓰게 하는 편이 안전하다)도 의미가 있습니다. 남은 문제는 **사실 오류**입니다 : `divert to another airport` — 관제사가 제시한 것은 **같은 공항의 다른 활주로**였고, 다른 공항 회항은 본인이 P2B-Q6 에서 꺼낸 것입니다. 그리고 **`ambulance` 가 또 나왔습니다**(Part Ⅱ A 혼입). 문장이 길어지면서 깨지는 곳도 많습니다 — `the controller have to make the aircraft go the longer runway to not make any happening` 은 뜻이 전달되지 않습니다.

---

## ICAO 6개 항목 등급

| 항목 | 등급 | EPTA_03 | 근거 |
|---|---|---|---|
| Pronunciation | **평가 보류** | 보류 | 텍스트 답안이라 판단 근거가 없습니다. 등급 계산에서 제외합니다. |
| Structure | **Level 3** | 3 | 복문을 꾸준히 쓰고 자유응답 분량도 유지됩니다. 다만 길어지면 문장이 깨집니다 — `cannot reduce spped what the landing speed have to`, `the controller have to make the aircraft go the longer runway to not make any happening`, `it is important as the aircraft important`. 교신 응답에서도 `we will let you know as complete as possible` 처럼 뜻이 흐려집니다. |
| Vocabulary | **Level 3** | 3 | `approach speed`, `landing distance`, `endurance`, `weather avoidance` 등은 맥락에 맞게 씁니다. 그러나 **핵심 단어 오류가 네 건** : `profitable`(←suitable), `retract`(←extend), `stand brake equipment`(←fire service), `cannot bend over 15 degree`(←jammed at). |
| Fluency | **Level 3** | 3 | 90초 문항 둘과 Follow-up 모두 분량을 채웠습니다. 다만 30초 문항에 `request fire service follow in hl123`, `both are not available request divert…` 처럼 정보가 모자란 응답이 남아 있습니다. |
| Comprehension | **Level 3** | 3 | 복창 정확도는 올랐습니다 — 접근 허가 **3/3**, 피트↔FL **3/3**, squawk 함정 통과, confirm 함정 통과, 긴 접근 복창 5요소 완전. 그러나 **값 오류가 여섯 건**(3,000→8,000ft / 600→6,000ft / FL180→FL190 / 178→70명 / 120.35→120.5 / right→left)이고, 여기에 **숫자 비교 실패가 새로 더해졌습니다** — 2,400m 가 필요한데 3,000m 활주로를 "불가"로 판단(P2B-Q6)하고 2,300m 를 선택(P2B-Q7)했습니다. |
| Interactions | **Level 3** | 3 | 복합 지시를 온전히 수행한 것이 네 건(P1B-Q2·Q4, P2B-Q3·Q5), 기관 호출 네 건. 그런데 **뒷부분이 빈 문항이 아홉 건**(P1B-Q1·Q5·Q6, P2A-Q3·Q4·Q10, P2B-Q4·Q6·Q9) 으로 EPTA_03(4건)보다 늘었습니다. `controller` 기관명 오류가 **세 번**, "결정 전에 묻기"는 **네 세트 연속** 실패입니다. 예상 밖 전개에서 교신 자체는 유지하지만(회항 요청, 바람 문의) 적절성이 떨어집니다. |

### 최종 등급 : **Level 3 (불합격) — EPTA_03 과 동일, 유지**

여섯 항목이 모두 Level 3 으로, 두 세트 연속 같은 자리입니다. 합격선 Level 4 까지 1단계.

**다만 EPTA_03 과 같은 Level 3 안에서 내용은 갈렸습니다.** 복창 정확도는 뚜렷하게 올랐고
(접근 허가 3/3, 피트↔FL 3/3, 긴 복창 5요소), 반대로 **지시문의 뒷부분을 빠뜨린 문항이
4건에서 9건으로 늘었습니다.** 받아적고 되읽는 능력은 Level 4 에 가까워졌지만, **요구된
행위를 끝까지 수행하는 쪽이 발목을 잡고 있습니다.**

---

## 태스크별 총평

**Part Ⅰ Task A** — 네 문항 중 둘이 완전하고, Q3 는 기관명만, Q2 는 값만 틀렸습니다. **접근 허가를 Task A 에서부터 복창했고 squawk 뒤집기 함정도 통과했습니다** — 두 항목 모두 지난 세트들의 약점이었습니다. 남은 것은 `report passing 3,000 feet` 를 8,000 으로 바꾼 값 오류 하나입니다.

**Part Ⅰ Task B** — Q3(confirm 함정)와 Q4(unable 3단)가 완전합니다. 특히 **Q4 는 EPTA_02·03 에서 2세트 연속 "할 수 없는 것을 그대로 복창"했던 유형**인데, 이번에 `unable` + 사유 + 레이더 벡터 대안으로 완성했습니다. 반면 Q1 과 Q6 는 지시문의 절반만 수행했고, Q6 에서는 **기관명이 `controller` 이고 콜사인마저 빠졌습니다** — 발신 문항에서 처음 나온 누락입니다.

**Part Ⅱ Task A** — 복창 문항(Q2·Q8)과 위치보고(Q1·Q7)는 정확합니다. 문제는 **요청·문의 쪽입니다** — Q3 는 기상 대신 회항을 요청했고, Q4 는 기상 복창과 이유를 둘 다 비웠고, Q10 은 문의를 요청으로 바꿨습니다. Q7·Q9 에서 **탑승 인원을 178 이 아니라 70 으로** 두 번 반복해 틀린 것도 눈에 띕니다 — 지문에 적힌 숫자입니다.

**Part Ⅱ Task B** — Q1·Q2·Q5 는 완전하고, Q3 는 세 가지 요구를 다 수행했습니다(기관명만 제외). 그런데 **Q6~Q9 에서 연속으로 무너졌습니다.** Q6 는 3,000m 활주로를 "불가"로 판단했고, Q7 은 2,400m 가 필요한데 2,300m 를 선택했고, Q8 은 선회 방향을 반대로, Q9 는 두 질문 중 하나만 답했습니다. **숫자를 받아적는 것은 되는데, 받아적은 숫자를 서로 비교해 판단하는 단계에서 막힙니다.**

**Part Ⅱ Task C** — 플랩 고착이라는 원인과 "속도를 못 줄여 긴 활주로가 필요하다"는 인과를 정확히 썼습니다. Q2 는 **관제사를 주어로 평가하고 질문 후반부까지 답해** 두 항목이 개선됐습니다. 그러나 **Part Ⅱ A 의 구급차가 두 문항 모두에 등장했습니다** — 다른 파트의 내용이 섞여 들어온 것은 이번에 처음이고, Task B 를 풀면서 그 파트만의 전개를 메모하지 않으면 생기는 일입니다.

---

## 다음 학습 과제

### 반복되는 약점 3개

1. **받아적은 숫자를 비교하지 않는다 (신규·최우선)** — P2B-Q5 에서 본인이 "2,400m 필요"라고 답했는데, P2B-Q6 에서 3,000m 활주로를 "불가"로, P2B-Q7 에서 2,300m 를 "가능"으로 판단했습니다. **숫자를 적는 것과 그 숫자로 판단하는 것은 다른 일입니다.** 활주로 길이·필요 거리·바람은 적은 뒤에 **한 줄로 비교**하는 습관이 필요합니다 — `필요 2,400 / RWY08 2,300 ✗ / RWY26 3,000 ✓` 처럼.

2. **지시문의 뒷부분을 빠뜨린다 (네 세트 연속, 이번에 9건)** — 특히 **"결정 전에 묻기"는 EPTA_02·03·04 세 세트 연속** 실패이고, **"이유 대기"도 네 세트 연속**입니다(P2A-Q4 는 근거가 넷이나 주어졌는데 하나도 쓰지 않았습니다). 복창은 Level 4 수준에 다가가는데 이쪽이 등급을 붙잡고 있습니다.

3. **`controller` 를 기관명으로 쓴다 (세 세트 연속, 이번에 3회)** — P1B-Q6, P2A-Q3, P2B-Q3. 조종사가 먼저 발신할 때는 예외 없이 **`[기관명] + HL123`** 으로 시작합니다. P2A-Q1·Q5·Q7, P2B-Q1 에서는 정확히 했으므로 **알고 있는데 상황이 복잡해지면 빠집니다.**

### 외워야 할 표현 5개

| 영어 | 뜻 | 쓰는 상황 |
|---|---|---|
| `We need 2,400 metres, so runway 08 at 2,300 is not enough — request runway 26.` | 2,400m 가 필요하므로 2,300m 인 08 은 부족합니다 — 26 을 요청합니다 | **숫자를 비교해 말하기.** 이번 세트에서 가장 크게 잃은 지점 |
| `Before we decide — request the current wind on runway 26.` | 결정 전에 — 26 활주로의 현재 바람을 요청합니다 | **세 세트 연속 못 한 것.** 선택지를 받으면 먼저 묻는다 |
| `We will divert to Redwood — it is only 60 miles and the doctor wants the passenger on the ground within the hour.` | Redwood 로 가겠습니다 — 60마일로 가깝고 의사가 1시간 내 착륙을 원합니다 | **의도 + 이유.** 네 세트 연속 이유가 빠졌다 |
| `Affirm we expect to be able to vacate at the end, and request the fire service to follow us in.` | 끝에서 이탈 가능할 것으로 봅니다, 그리고 소방대 추적을 요청합니다 | 관제사가 `two things` 라고 하면 **둘 다** |
| `Halston Approach, HL123, …` | (기관명) + (콜사인) | `controller` 는 호출부호가 아니다. **세 세트 연속 재발** |
