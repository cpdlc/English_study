# EPTA_03 채점 결과 — 2026-08-20

> **채점 방식 변경 (사용자 요청 반영)**: 이번부터 자유응답·plain English 문항(Follow-up, Task C,
> 그리고 Informing/Requesting/Unable/Correcting/Clarifying 등 정해진 문구가 없는 롤플레이 응답)의
> "교정 답안"은 완전히 새 문장으로 바꾸지 않고, **사용자가 쓴 원문을 최대한 그대로 살리면서
> 문법만 고치고 빠진 내용만 최소한으로 보충**했습니다. 코멘트에 "문법을 고친 부분"과 "내용을
> 보충한 부분"을 구분해서 표시합니다. (readback류 문항은 원래대로 정답을 그대로 제시합니다 —
> CLAUDE.md §6-1 갱신)

---

## Part Ⅰ Task A

**P1A-Q1** ✅ *(재채점: 최초 판정 ⚠️에서 정정 — 아래 참고)*
문제 : ATC : HL123, give way to Asiana Boeing 777 on your left, then continue taxi to holding point runway two seven.
내 답안 : give way to b777 then continue taxi to holding point runway27 hl123
** 정답(참고용, 더 자세히 쓰면 이런 형태) : Give way to Asiana Boeing 777 on your left, then continue taxi to holding point runway two seven, HL123.
- 누락된 필수 readback 요소 : 없음. "give way to (항공기)"는 ICAO Annex 11/PANS-ATM(Doc 4444)의 **필수 복창 목록에 포함되지 않는 항목**(필수 목록: 비행로 허가, 활주로 관련 지시(진입/착륙/이륙/hold short/횡단/역주행), 사용활주로·고도계·squawk·고도·기수·속도·전이고도). "Asiana"·"on your left"를 안 붙여도 감점 대상이 아님.
- 표준교신용어 오류 : 없음
- 코멘트 : **최초 채점 정정** — "누구에게, 어느 방향으로 양보하는지 반드시 포함해야 한다"고 했던 건 과한 기준이었음. `관제용어정리.pdf`의 상세한 예시는 "더 친절한 응대"의 모범일 뿐 필수 규정이 아니라서, 핵심 동작(give way, 27번 활주로 홀딩포인트로 이동)만 정확히 전달하면 충분함.

---

**P1A-Q2** ✅
문제 : ATC : HL123, caution wake turbulence, departing traffic ahead is a heavy Airbus 380, line up and wait runway two seven.
내 답안 : lineing up and wait runway27 hl123
** 정답 : Lining up and wait runway two seven, HL123.
- 누락된 필수 readback 요소 : 없음. wake turbulence 캐션과 선행기 기종 정보를 정확히 뺌 — 이 문항의 취지에 맞음.
- 표준교신용어 오류 : 없음 ("lineing" 오탈자는 감점 대상 아님)
- 코멘트 : 필수요소만 간결하게 복창한 좋은 예.

---

**P1A-Q3** ✅
문제 : ATC : HL123, climb via SID, cross WHISKEY at or above FL110, then direct XRAY, reduce speed to 240 knots, contact Center on 132.5.
내 답안 : climb via sid cross whiskey at or above fl110 then direct xray reduce spd 240 contact center 132.5 hl123
** 정답 : Climb via SID, cross WHISKEY at or above FL110, then direct XRAY, reduce speed to 240 knots, contact Center on 132.5, HL123.
- 누락된 필수 readback 요소 : 없음 — 5개 요소 전부 정확히 포함.
- 표준교신용어 오류 : 없음 ("spd" 축약, 숫자 표기 모두 감점 대상 아님)
- 코멘트 : 이번 세트에서 가장 긴 지시문을 하나도 빠뜨리지 않음.

---

**P1A-Q4** ✅
문제 : ATC : HL123, runway change, expect RNAV approach runway zero niner, continue present heading, descend to 3,000.
내 답안 : expect rnav approach runway 09 continue present heading descend to 3000 hl123
** 정답 : Runway change, expect RNAV approach runway zero niner, continue present heading, descend to 3,000, HL123.
- 누락된 필수 readback 요소 : 없음. "runway change" 자체는 도입 문구라 생략해도 무방.
- 표준교신용어 오류 : 없음
- 코멘트 : 핵심 내용을 정확히 복창함.

---

## Part Ⅰ Task B

**P1B-Q1** ✅
문제 : You are climbing through FL220 and about to cross into the next control sector's airspace. ATC gives you a routine frequency change.
ATC : HL123, contact Center now on 128.3.
내 답안 : contact center 128.3 hl123
** 정답 : Contact Center now on 128.3, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : 정확한 복창.

---

**P1B-Q2** ⚠️
문제 : A few minutes ago your autopilot briefly disconnected on its own, but you reconnected it and everything has been normal since. ATC checks in with you.
ATC : HL123, how's everything up there?
내 답안 : everything normal hl123
** 교정 답안 (문법만 최소 수정) : Everything **is** normal, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **문법 수정** — "everything normal"은 be동사가 빠진 불완전한 문장, "everything **is** normal"이 맞음. **내용 보충 제안** — 이 문항은 Informing(상태 보고) 기능을 연습하는 문항인데, "everything is normal"만으로는 방금 있었던 autopilot 일시 이탈 사실을 굳이 알릴 필요가 없다고 판단한 셈. 틀린 답은 아니지만, "Everything is normal now, we had a brief autopilot disconnect a few minutes ago but it's back and working fine."처럼 상황을 짧게 언급해주면 Informing 기능을 더 잘 보여줄 수 있음.

---

**P1B-Q3** ❌ *(3세트 연속 반복되는 약점 — 아직 해결 안 됨)*
문제 : ATC assigns you a speed reduction, but you are currently in moderate turbulence and reducing speed further would be uncomfortable and potentially risky for the aircraft.
ATC : HL123, reduce speed to 220 knots.
내 답안 : unable to reduce speed due to restrction and turbulence hl123
** 교정 답안 (문법+내용 보충) : Unable to reduce speed due to turbulence, **request maintain current speed until clear of the turbulence**, HL123.
- 누락된 필수 readback 요소 : **또 대안(request)이 빠짐.** EPTA_01 P1B-Q3, EPTA_02 P1B-Q3에 이어 **3세트 연속**으로 같은 자리에서 같은 실수.
- 표준교신용어 오류 : "due to restrction and turbulence"에서 "restriction"이라는 단어가 이 상황과 안 맞음(무슨 제한을 말하는지 불명확). 실제 사유는 난기류뿐이므로 "restriction" 부분은 빼는 게 맞음.
- 코멘트 : **문법/어휘 수정** — "restrction and" 삭제(불필요·부정확한 단어). **내용 보충** — request 절 추가. "unable due to [사유], request [대안]" 3단 구조를 이번엔 정말 외워야 함 — 세 번째다.

---

**P1B-Q4** ✅
문제 : ATC instructed you to descend and maintain 6,000, but you mistakenly continued the descent down to 5,000 before catching your error. Now ATC contacts you.
ATC : HL123, confirm maintaining 6,000?
내 답안 : my mistake climb and maintain 6000 hl123
** 정답 : My mistake, climb and maintain 6,000, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음. ("correcting own mistake" 기능은 AFFIRM/NEGATIVE 없이 바로 정정 진술로 들어가는 것이 샘플 관례)
- 코멘트 : 5,000까지 내려간 실수를 6,000으로 **올라가는(climb)** 방향으로 정확히 정정함 — 방향을 반대로 말하는 실수가 이번엔 없었음.

---

**P1B-Q5** ✅
문제 : You'd prefer a more direct routing to save time and fuel, and want to ask ATC if it's available.
ATC : HL123, say your request.
🖥 [ request direct routing ]
내 답안 : request direct route hl123
** 정답 : HL123, request direct routing.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음. "route" vs "routing" 정도의 차이는 의미상 문제없음.
- 코멘트 : REQUEST + 명사(구) 패턴을 정확히 사용함.

---

**P1B-Q6** ✅
문제 : You are on final approach and the tower gives you an instruction. You want to make sure it is not actually a landing clearance before you continue.
ATC : HL123, continue approach runway one five, traffic landing roll.
🖥 [ verify not cleared to land ]
내 답안 : continue approach runway 15 , verify cleared to land hl123
** 정답/교정 답안 (문법 최소 수정) : Continue approach runway 15, **verify we are not** cleared to land, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **문법 수정** — "verify cleared to land"는 주어가 빠져 "우리가 착륙허가를 받았는지"와 "착륙허가가 아님을 확인해달라"는 것 사이에서 뜻이 모호할 수 있음. "verify **we are not** cleared to land"라고 하면 클루("verify not cleared to land")의 의도가 명확해짐. VERIFY를 사용한 것 자체는 정확한 선택(§9 표준용어표 — "발신자에게 확인·재확인을 요청").

---

## Part Ⅱ Task A

**P2A-Q1** ❌ *(2세트 연속 반복되는 약점)*
문제 : ☞ Contact Clearance Delivery and make a request.
내 답안 : ground hl123 request ifr clearance to cedar airport
** 정답 : Delivery, HL123, request IFR clearance to Cedar Airport.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 지시문이 "Contact **Clearance Delivery**"인데 또 "ground"라고 부름. **EPTA_02의 P2A-Q1과 정확히 같은 실수 — 지난 세트 피드백에서 명시적으로 지적했는데도 이번 세트에서 다시 나옴.**
- 코멘트 : 요청 내용 자체는 정확하고 완전함. 문제는 오직 기관 이름. Delivery(클리어런스 발급) ≠ Ground(지상 이동) — 이 둘을 확실히 구분해서 외울 것.

---

**P2A-Q2** ❌
문제 : Continued…
☞ Listen to the controller and give a full readback.
Delivery : HL123, cleared to Cedar Airport, JUNIPER TWO departure, KEMBO transition, maintain 6,000, expect FL240 15 minutes after departure, squawk 5136.
내 답안 : cleared to cedar airport juiper 2 departure kembo transition maintain 6000 expect fl250 15min after departure squack 5136 hl123
** 정답 : Cleared to Cedar Airport, JUNIPER TWO departure, KEMBO transition, maintain 6,000, expect FL240 15 minutes after departure, squawk 5136, HL123.
- 누락된 필수 readback 요소 : 없음(요소 자체는 다 있음)
- 표준교신용어 오류 : **"expect FL250"이라고 복창했는데 관제사는 "expect FL240"이라고 지시함.** 이건 오탈자가 아니라 **숫자 값 자체가 틀린 readback 오류**(§6-1-1: "숫자 값 자체가 틀린 경우는 감점 대상"). 실제 관제 현장에서는 관제사가 즉시 정정해야 하는 심각한 오류.
- 코멘트 : 나머지 5개 요소는 정확함. 딱 한 자리(FL240→FL250) 숫자를 잘못 들었거나 잘못 적은 것 — 복창은 "정확히 들은 대로" 반복하는 것이 생명이라는 점을 다시 강조.

---

**P2A-Q3** ✅
문제 : Situation Update — Delivery advises that due to departure sequencing, they need to know when you are ready.
☞ Listen to the controller and respond accordingly.
Delivery : HL123, Report Ready for Push-back.
내 답안 : report ready for pushback hl123
** 정답 : Roger, Report Ready for Push-back, HL123. (관제용어정리.pdf의 동일 상황 모범답안과 같은 패턴)
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음 (앞의 "Roger"는 있어도 없어도 무방 — 핵심 내용은 정확히 복창함)
- 코멘트 : 정확한 응답.

---

**P2A-Q4** ✅
문제 : ☞ Contact Ramp control and request pushback and start-up.
내 답안 : Ramp hl123 request pushback and start up
** 정답 : Ramp, HL123, request pushback and start-up.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : 이번엔 올바른 기관(Ramp)을 정확히 불렀음 — P2A-Q1과 대조됨.

---

**P2A-Q5** ✅
문제 : Continued…
☞ Listen to the controller and give a full readback.
Ramp : HL123, pushback and start-up approved, pushback tail north, then taxi to holding point runway two seven via Alpha, Bravo.
내 답안 : pushback and startup approved pushback tail north taxi to holding point runway 27 via a b hl123
** 정답 : Pushback and start-up approved, pushback tail north, then taxi to holding point runway two seven via Alpha, Bravo, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : 완전하고 정확한 복창.

---

**P2A-Q6** ✅ *(재채점: 최초 판정 ⚠️에서 정정 — P1A-Q1과 동일한 사유)*
문제 : Situation Update — While taxiing, another aircraft is crossing your path ahead.
☞ Listen to the controller and respond accordingly.
Ground : HL123, (You are No.2) Give way to Korean Air Boeing 747 on your right side.
내 답안 : i'm no2 give way to b747 hl123
** 정답(참고용, 더 자세히 쓰면 이런 형태) : (You're) No.2, give way to Korean Air Boeing 747 on your right side, HL123.
- 누락된 필수 readback 요소 : 없음. "give way to"는 ICAO 필수 복창 목록에 없는 항목 — "Korean Air"·"on your right side"를 안 붙여도 감점 대상 아님.
- 표준교신용어 오류 : 없음
- 코멘트 : "I'm No.2"라고 상황을 이해했다는 걸 자연스럽게 표현했고, 핵심 동작(양보)도 정확히 전달함.

---

**P2A-Q7** ✅
문제 : Continued…
☞ Listen to the controller and respond accordingly.
Ground : HL123, hold position, due to traffic.
내 답안 : holding position hl123
** 정답 : Hold position, HL123. (또는 Holding position, HL123)
- 누락된 필수 readback 요소 : 없음. "due to traffic" 사유는 복창 불필요.
- 표준교신용어 오류 : 없음
- 코멘트 : 정확한 응답.

---

**P2A-Q8** ✅
문제 : ☞ Contact Tower, report holding short of runway two seven and ready for departure.
내 답안 : tower hl123 holding short of runway 27 and ready for departure
** 정답 : Tower, HL123, holding short of runway two seven, ready for departure.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : 활주로 번호까지 정확히 포함한 좋은 위치보고 — 지난 세트(EPTA_02 P2A-Q7)에서 활주로 번호를 빠뜨렸던 게 이번엔 고쳐짐.

---

**P2A-Q9** ✅
문제 : Continued…
☞ Listen to the controller and give a full readback.
Tower : HL123, runway two seven, line up and wait.
내 답안 : lineing up and wait runway27 hl123
** 정답 : Runway two seven, line up and wait. → Lining up and wait runway two seven, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : 정확한 복창.

---

**P2A-Q10** ✅
문제 : Continued…
☞ Listen to the controller and give a full readback.
Tower : HL123, wind calm, cleared for takeoff runway two seven.
내 답안 : cleared for takeoff runway 27 hl123
** 정답 : Cleared for takeoff runway two seven, HL123.
- 누락된 필수 readback 요소 : 없음. 바람 정보(calm)는 복창 불필요.
- 표준교신용어 오류 : 없음
- 코멘트 : 정확한 복창.

---

**P2A-Q11** (Follow-up) ⚠️
문제 : Follow-up question:
You have just finished Task A, as the pilot of Hotel Lima one two three.
In this situation, you had to give way to another aircraft and then hold position on the taxiway. How did you feel about this delay, and how do you usually manage this kind of unexpected waiting during taxi?
내 답안 : In this situation , usually i would follow the atc instructions , i think there would be a lot of reasons why hl123 wait , and if i have some time to prepare by delay, i can do checklist 1more time, and alway keep mindset to make flight safe.
** 교정 답안 (원문 최대한 유지, 문법만 수정 + "느낌" 부분만 최소 보충) : In this situation, I didn't mind the wait too much — I would usually just follow the ATC instructions, since I think there are a lot of reasons why we might have to wait. And if I have some extra time because of a delay like this, I can go through the checklist one more time, and always keep the mindset of making the flight safe.
- 코멘트 : **문법 수정**: "why hl123 wait" → "why we might have to wait"(3인칭 콜사인 대신 we, 시제/구조 보정), "prepare by delay" → "because of a delay like this"(뜻이 통하도록), "do checklist 1more time" → "go through the checklist one more time"(관사·표현 보정), "alway" → "always"(오탈자, 감점은 아니지만 교정), "keep mindset to make" → "keep the mindset of making"(전치사/관사). **내용 보충**: 질문 앞부분 "How did you feel about this delay?"에 대한 답이 원문엔 없어서 "I didn't mind the wait too much"만 최소한으로 추가함 — 원래 쓰신 문장·표현은 그대로 유지했습니다.

---

## Part Ⅱ Task B

**P2B-Q1** ✅
문제 : ☞ Listen to Center and give a full readback.
Center : HL123, descend and maintain FL320.
내 답안 : descend and maintain fl320 hl123
** 정답 : Descend and maintain FL320, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : 정확한 복창.

---

**P2B-Q2** ❌
문제 : Situation Update — You and your co-pilot notice smoke and a haze building up in the cockpit.
☞ Contact Center, declare an emergency using the standard distress call, state the nature of the problem, and request an immediate descent and diversion to the nearest suitable airport.
내 답안 : mayday mayday mayday request immediate descend and diversion to the nearest suiable airport due to natural problem hl123
** 교정 답안 (문법+내용 최소 수정) : Mayday Mayday Mayday, **Center**, HL123, we have **smoke in the cockpit**, request immediate descent and diversion to the nearest suitable airport.
- 누락된 필수 readback 요소 : `atc-terminology.md` §8-1의 비상선언 7단계 중 **"관제 기관명"이 빠짐** (MAYDAY×3 바로 다음엔 관제기관명 → 호출부호 순서).
- 표준교신용어 오류 : **"due to natural problem"은 실제 사유(연기/연무)를 전달하지 못하는 틀린 표현.** "natural"은 오탈자가 아니라 아예 다른(부정확한) 단어 — 감점 대상. 비상 상황의 유형·상태를 명확히 말하는 건 7단계 중 필수 항목이라 더 중요함.
- 코멘트 : **문법/어휘 수정**: "due to natural problem" → "we have smoke in the cockpit"(실제 사유를 명확히 표현). **내용 보충**: MAYDAY×3 다음에 "Center" 추가. MAYDAY 선언에서 "무슨 일이 일어났는지"를 정확히 전달하는 게 다른 무엇보다 중요한데, 이 부분이 가장 약했음.

---

**P2B-Q3** ✅
문제 : Continued…
☞ Listen to the controller's response and give a full readback.
Center : HL123, roger, descend and maintain 12,000, turn right heading 300, vectors to Fairview Airport.
내 답안 : descend and maintain 12000 turn right hd300 vector to fairview airport hl123
** 정답 : Descend and maintain 12,000, turn right heading 300, vectors to Fairview Airport, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음 ("hd" 축약은 감점 대상 아님)
- 코멘트 : 완전하고 정확한 복창.

---

**P2B-Q4** ✅
문제 : Continued…
Center : HL123, say your intentions.
☞ Respond, stating you're running the smoke/fire checklist and will divert to Fairview Airport as a precaution.
내 답안 : start running checklist and request divert to fairview airport hl123
** 교정 답안 (문법 최소 수정) : Starting the smoke/fire checklist and **we will** divert to Fairview Airport **as a precaution**, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **문법 수정**: "request divert"는 이 상황에서는 허가를 구하는 요청이라기보단 이미 진행 중인 계획을 진술하는 것이므로 "we will divert"가 더 정확함. **내용 보충**: 지시문에 있던 "as a precaution"(예방 차원이라는 이유)을 추가함. intentions 진술 자체는 잘 됨 — 지난 세트에서 개선된 부분이 계속 유지되고 있음.

---

**P2B-Q5** ❌ *(3세트째 반복되는 핵심 약점 — 이번 세트에서 두 번째로도 재발, P2B-Q8 참고)*
문제 : Situation Update — The smoke has cleared after completing the checklist, but you still intend to land at Fairview as a precaution. You are now leveling off at 12,000ft.
☞ Contact the controller, report your position, and state your intentions.
내 답안 : controller hl123 maintain 12000 and hd300 vector to fairview airport request land fairview airport
** 교정 답안 (원문 최대한 유지, "지시 복창" 동사만 "현재 상태" 동사로 교체 — 이 문항은 지문에 12,000ft가 이미 나와 있어서 숫자를 지어낼 필요조차 없었음) : **Center**, HL123, **level at** 12,000, **still on the vector to** Fairview Airport, request to land there as a precaution.
- 누락된 필수 readback 요소 : "report your position"이 요구됐는데 **또 직전 클리어런스를 그대로 반복함.** 다만 이 문항은 지문에 "leveling off at 12,000ft"라고 고도가 이미 명시돼 있었으므로, 위치를 몰라서 지어낼 필요도 없었음 — 그 고도를 "maintain"(지시받은 값을 복창) 대신 "**level at**"(지금 그 상태라는 보고)으로만 바꿔 말하면 충분했음.
- 표준교신용어 오류 : "controller"는 실제 기관명이 아님 — "Center"라고 불러야 함.
- 코멘트 : **가장 중요한 지적**: EPTA_01(P2A-Q2), EPTA_02(P2B-Q8)에 이어 세 번째로 반복되는 패턴이고, 이번 세트에서는 P2B-Q8에서도 또 나옴. 위치를 정말 모를 때는 "descending through X for Y"처럼 그럴듯한 숫자를 지어내면 되고, 이번처럼 **위치가 이미 주어져 있을 때는 그 값을 "maintain"(지시 복창)이 아니라 "level at / leveling off at"(현재 상태 보고) 동사로만 바꿔 말하면 된다** — 굳이 새 숫자를 만들어낼 필요는 없음.

---

**P2B-Q6** ✅
문제 : Continued…
Center : HL123, roger, let me know your fuel and souls on board.
☞ Provide the requested information.
🖥 [ 2 hours 45 minutes fuel remaining / 116 SOB ]
내 답안 : we have 2 hours 45min fuel on board and 116 souls on board hl123
** 정답 : We have 2 hours 45 minutes of fuel remaining and 116 souls on board, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음. "fuel on board"와 "fuel remaining"은 의미상 큰 차이 없이 허용.
- 코멘트 : SOB(탑승인원)를 정확히 "souls on board"로 표현함 — 계속 잘 유지되고 있는 부분.

---

**P2B-Q7** ✅
문제 : Continued…
☞ Listen to the controller and give a full readback.
Center : HL123, cleared direct Fairview Airport, descend and maintain 4,000, expect ILS runway two two.
내 답안 : cleared direct fairview airport descend and maintain 4000 expect ils runway 22 hl123
** 정답 : Cleared direct Fairview Airport, descend and maintain 4,000, expect ILS runway two two, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : 완전하고 정확한 복창.

---

**P2B-Q8** ❌ *(같은 세트 안에서 P2B-Q5와 동일한 실수 재발)*
문제 : ☞ Contact Fairview Tower, report your position, and advise you are declaring an emergency.
내 답안 : tower hl123 descend and maintain 4000 expect ils runway 22 , direct fairview airport declaring emergency hl123
** 교정 답안 (내용 보충 위주) : Fairview **Tower**, HL123, **descending through [현재고도] for** 4,000, for ILS runway two two, declaring an emergency.
- 누락된 필수 readback 요소 : 여기서도 "report your position"에 대해 새로운 위치 정보 없이 직전 클리어런스(descend and maintain 4000, expect ils runway 22, direct fairview airport)를 그대로 반복함. P2B-Q5와 완전히 같은 문제.
- 표준교신용어 오류 : 없음 (비상선포 "declaring emergency" 자체는 잘 포함시킴)
- 코멘트 : 비상선포는 빠뜨리지 않고 챙긴 점은 좋음. 다만 이 문항도 "위치 보고"가 핵심인데 안 됨 — 한 세트 안에서 같은 실수가 두 번 나온 건 이 패턴이 확실히 습관화됐다는 신호. `reference/atc-terminology.md` §7-1의 "호출부호, 위치, 현재고도, ATIS, 요구사항" 형식을 다음엔 그대로 따라볼 것.

---

**P2B-Q9** ✅
문제 : Continued…
☞ Listen to the controller and respond accordingly.
Tower : HL123, continue approach runway two two, traffic ahead landing roll.
내 답안 : continue approach runway 22 , looking out hl123
** 정답 : Continue approach runway two two, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : "looking out"은 원래 관제사가 교통정보를 주며 "보이면 알려달라"고 할 때 쓰는 응답(`atc-terminology.md` §6-2)인데, 여기 ATC 대사는 그런 요청이 아니라 단순히 "착륙활주 중인 트래픽이 있어서 계속 접근하라"는 설명이라 약간 안 맞는 표현. 다만 감점할 정도의 오류는 아님.
- 코멘트 : **가장 중요한 부분을 정확히 해냄** — "continue approach"를 착륙허가로 착각하지 않고, 그대로 접근을 계속한다고만 응답함. 이 세트에서 새로 테스트한 함정(Continue Approach ≠ Cleared to Land)을 정확히 통과함.

---

**P2B-Q10** ✅
문제 : Continued…
☞ Listen to the controller and give a full readback.
Tower : HL123, wind 200 at 5, cleared to land runway two two, emergency equipment standing by.
내 답안 : cleared to land runway 22 hl123
** 정답 : Cleared to land runway two two, HL123.
- 누락된 필수 readback 요소 : 없음. 바람 정보와 비상장비 대기 정보는 복창 불필요.
- 표준교신용어 오류 : 없음
- 코멘트 : 정확하고 간결한 복창.

---

## Part Ⅱ Task C

**P2C-Q1** ⚠️
문제 : ☞ Now listen to the controller's radiotelephony messages.
ATC: HL123, roger, descend and maintain 12,000, turn right heading 300, vectors to Fairview Airport.
ATC: HL123, say your intentions.
ATC: HL123, roger, let me know your fuel and souls on board.
ATC: HL123, cleared direct Fairview Airport, descend and maintain 4,000, expect ILS runway two two.
ATC: HL123, continue approach runway two two, traffic ahead landing roll.
ATC: HL123, wind 200 at 5, cleared to land runway two two, emergency equipment standing by.

What happened to your aircraft (HL123)? Explain the nature of the incident.
내 답안 : we have smoke/fire abonormal situation. so we declared emergeny and ask to land the nearest suitable airport to atc , right after asking atc gave us to vector to fairview airport and descend , Even though the situation came to normal , i wanted to go the fairview airport as soon as possible because any issues should come out, so i can land well after intructed by atc
** 교정 답안 (원문 최대한 유지, 문법 수정 + 빠진 사실 최소 보충) : We had a smoke/fire abnormal situation, so we declared an emergency and asked ATC to let us land at the nearest suitable airport. Right after that, ATC gave us vectors to Fairview Airport and had us descend. Even though the situation came back to normal, I still wanted to go to Fairview Airport as soon as possible, in case any other issues came up, **and we also reported our fuel and souls on board so ATC could pass that to the airport.** On the way in, the tower first told us to continue our approach because there was traffic ahead landing, and then cleared us to land.
- 코멘트 : **문법 수정**: "ask to land ... to atc" → "asked ATC to let us land"(어순), "gave us to vector" → "gave us vectors"(동사구), "i wanted to go the fairview airport" → "go **to** Fairview Airport"(전치사 누락), "because any issues should come out" → "in case any other issues came up"(뜻이 통하도록), "intructed" → "instructed"(오탈자, 감점 아님). **내용 보충**: 실제 Task B에서 있었던 **fuel/SOB 보고 단계**와 **"continue approach" 순간**이 요약에서 빠져 있어서 최소한으로 추가함 — 6줄의 ATC 교신 중 두 단계가 통째로 빠진 셈이라 사건 전개를 완전히 복기하지는 못함.

---

**P2C-Q2** ⚠️
문제 : (P2C-Q1과 동일한 ATC 교신 내용에 대한 질문)
How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
내 답안 : In this situation , i think atc handled very well, as soon as received emergency , atc gave the pilots to direct ,descend and vector atc did everything what they can . also pilot did smoke/fire checklist while they were going to nearest airport , so the pilot also did procedure well, so i think there are few things to do handle differently it is the best way to handle with this situation.
** 교정 답안 (원문 최대한 유지, 문법만 수정) : In this situation, I think ATC handled it very well. As soon as they received the emergency call, ATC gave us a direct routing, a descent, and vectors — ATC did everything they could. Also, the pilot completed the smoke/fire checklist while heading to the nearest airport, so the crew handled the procedure well too. So I think there is very little that could have been handled differently — it was close to the best way to handle this situation.
- 코멘트 : **문법 수정**: "as soon as received emergency" → "as soon as they received the emergency call"(주어 보충), "gave the pilots to direct ,descend and vector" → "gave us a direct routing, a descent, and vectors"(전치사·관사 정리), "did everything what they can" → "did everything they could"(관계사·시제), "pilot did ... checklist" → "the pilot **completed** the ... checklist"(관사·동사 선택), "there are few things to do handle differently" → "there is very little that could have been handled differently"(구문 정리). **내용은 그대로 유지** — "다르게 처리할 수 있었나?"라는 질문에 "거의 없다"고 답한 부분은 EPTA_01·02에서 자주 빠졌던 부분인데 이번엔 짧게라도 다뤘음(개선).

---

## ICAO 6개 항목 등급 (Level 1~6, 합격선 Level 4)

| 항목 | 등급 | 근거 |
|---|---|---|
| Pronunciation | **평가 보류** | 텍스트로 발음을 판단할 근거가 없음. 등급 계산에서 제외. |
| Structure | **Level 4** | readback 문항은 안정적. 자유응답에 관사 누락·어순 오류 등이 남아있지만("go the fairview airport", "why hl123 wait") 의미 전달에는 지장 없는 수준. |
| Vocabulary | **Level 4** | REQUEST/MAYDAY/SOB 등 표준 어휘는 대부분 정확. 다만 "due to natural problem"(P2B-Q2), "due to restriction"(P1B-Q3)처럼 상황에 안 맞는 단어를 쓴 사례가 있어 완벽하지는 않음. |
| Fluency | **Level 4** | 문장이 끊기거나 미완성으로 끝난 경우 없음. Task C 두 문항 모두 끝까지 완성함. |
| Comprehension | **Level 3** | 이번 세트에서 다시 낮아진 항목. ① Delivery를 "ground"라고 부른 실수가 **EPTA_02에 이어 재발**(P2A-Q1), ② readback 중 **숫자 값 자체를 틀림**(FL240→FL250, P2A-Q2), ③ MAYDAY 선언에서 사유를 "natural problem"으로 잘못 전달(P2B-Q2), ④ "report your position" 요구에 새 정보 없이 이전 클리어런스를 반복하는 패턴이 **같은 세트 안에서 두 번**(P2B-Q5, P2B-Q8) 나옴 — 3세트 연속 지적된 핵심 약점이 오히려 이번에 더 두드러짐. |
| Interactions | **Level 4** | "Continue Approach≠착륙허가" 함정(P2B-Q9)을 정확히 통과했고, intentions·fuel/SOB 보고도 잘 수행함. Follow-up·Task C 모두 질문의 두 부분을 다루려고 시도함(완성도는 개선 여지 있음). |

**최종 등급 = Level 3** (평가 보류인 Pronunciation을 제외한 5개 항목 중 최저값 = Comprehension 기준). **불합격선(Level 4 미만)**입니다.

EPTA_02(Level 4, 합격)에서 다시 떨어졌습니다. 문법·어휘·완결성은 계속 좋아지고 있지만, **정작
반복적으로 지적한 "위치 보고" 문제와 "기관 호출" 문제가 전혀 해결되지 않았고, 이번엔 숫자 값
오류까지 새로 나왔습니다.** 표현을 다듬는 것보다 이 두 가지(위치 보고, 정확한 기관/숫자)를
먼저 잡는 게 다음 세트의 최우선 과제입니다.

---

## 태스크별 총평

**Part Ⅰ Task A** : 4문항 전부 ✅. 5요소 긴 지시(P1A-Q3)를 정확히 처리하는 능력은 3세트째
안정적으로 유지되고 있다.

**Part Ⅰ Task B** : Correcting mistake(P1B-Q4)와 Requesting(P1B-Q5)은 정확했고, Clarifying
(P1B-Q6)도 VERIFY를 적절히 사용했다. 문제는 **Unable+reason(P1B-Q3)** — 3세트 연속으로 대안
요청을 빠뜨리는 유일한 문항이 됐다. 다음 세트에서도 계속 이 기능을 넣어서 확실히 잡을 필요가
있다.

**Part Ⅱ Task A** : 지상 절차(pushback, give-way, hold position, line up and wait) 처리는
전반적으로 안정적이었다. 다만 첫 컨택 기관을 "ground"로 잘못 부른 것(P2A-Q1)이 EPTA_02와
똑같이 재발했고, 긴 클리어런스 복창 중 고도 값(FL240→FL250)을 틀린 것(P2A-Q2)은 새로 나타난
문제다 — 둘 다 "정확히 듣고 정확히 부르기"라는 기본기의 문제.

**Part Ⅱ Task B** : MAYDAY 선언(P2B-Q2)의 형식은 얼추 맞았지만 정작 "무슨 일이 일어났는지"를
잘못 전달했고, intentions·fuel/SOB는 훌륭했다. 이 세트의 핵심 시험 포인트였던 "Continue
Approach는 착륙허가가 아니다"(P2B-Q9)는 정확히 통과했다. 그러나 **같은 세트 안에서 위치 보고
문항 두 개(P2B-Q5, P2B-Q8) 모두 이전 클리어런스를 반복하는 데 그쳐**, 이 프로젝트 전체에서
가장 끈질기게 남아있는 약점임이 다시 확인됐다.

**Part Ⅱ Task C** : 두 문항 모두 끝까지 완성했고 문법도 크게 문제없었다. Q1은 사건의 큰 흐름은
맞았지만 fuel/SOB 단계와 "continue approach" 순간이 요약에서 빠졌다. Q2는 "다르게 처리할 수
있었나"라는 질문에 짧게라도 답했다는 점에서 이전 세트들보다 나아졌다.

---

## 다음 학습 과제

**반복되는 약점 3개**
1. **"report your position" 상황에서 이전 클리어런스를 반복하는 습관** — EPTA_01부터 매 세트
   나오고 있고, 이번 세트에서는 한 세트 안에서 두 번(P2B-Q5, P2B-Q8) 나왔다. 다음엔 무조건
   "descending/leaving through X for Y" 또는 "level at X" 형태로 **새 정보**를 말할 것.
2. **Unable + reason 뒤 대안(request) 누락** — 3세트 연속(P1B-Q3). "unable due to [사유],
   request [대안]" 3단 구조를 통째로 외워서 쓸 것.
3. **관제기관 이름을 정확히 구분해서 부르기** — Delivery/Ground/Ramp/Tower/Center는 각자
   역할이 다르다. 지시문에 적힌 기관명을 그대로 쓸 것 (P2A-Q1에서 두 세트 연속 실수).

**외워야 할 표현 5개**
1. "unable [지시] due to [정확한 사유], request [대안]" — 3세트째 감점 중인 최우선 표현.
2. "descending/leaving through [현재고도] for [목표고도]" — 위치 보고 표준 형식.
3. MAYDAY 7단계: MAYDAY×3 → **관제기관명** → 호출부호 → **비상 유형(정확한 사유)** → 의도 →
   (위치/고도) → (인원/연료). "due to natural problem" 같은 모호한 표현 대신 "smoke in the
   cockpit"처럼 구체적으로 말할 것.
4. "Continue Approach" ≠ "Cleared to Land" — 착륙허가가 아니라 접근을 계속하라는 뜻(정확히
   구분해서 응대함, 계속 유지할 것).
5. 숫자는 **들은 그대로** 복창하기 — FL240을 FL250으로 잘못 옮기는 것처럼 값 자체가 틀리면
   표기 방식과 무관하게 감점.

---

## 로그 갱신 완료
`progress/log.md`에 이번 채점 결과를 반영했습니다.
