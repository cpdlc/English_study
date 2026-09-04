# EPTA_05 채점 결과 — 2026-09-02

> 채점 기준: `reference/atc-terminology.md` §11 체크리스트, `reference/exam-spec.md`,
> CLAUDE.md §6 전체 적용. EPTA_05는 실제 샘플 녹음본을 재현한 세트이지만 채점 기준 자체는
> 다른 세트와 동일하게 적용한다(예외 없음).

---

## Part Ⅰ Task A. Readback and Hearback

**P1A-Q1** ✅
문제 : ATC : HL123, cleared direct ATLAS.
내 답안 : CLEARED TO DIRECT ATLOS HL123
** 정답 : Cleared direct ATLAS, HL123.
- 표준교신용어 오류 : 없음. "ATLOS"는 ATLAS의 발음상 문제없는 오탈자로 감점하지 않음(CLAUDE.md §6-1-1).
- 코멘트 : "cleared **to** direct"는 원문엔 없는 "to"가 붙었지만 의미가 바뀌지 않으므로 감점하지 않음.

---

**P1A-Q2** ❌
문제 : ATC : HL123, stop climb at flight level 260 due to traffic.
내 답안 : STOP CLIMB AT FL230 HL123
** 정답 : Stop climb at flight level 260, HL123.
- 누락된 필수 readback 요소 : 고도(§2 필수 복창 항목) 값 자체가 틀림 — FL260을 FL230으로 복창.
- 표준교신용어 오류 : 이건 표기 방식이 아니라 **값 자체가 틀린 경우**이므로 CLAUDE.md §6-1-1의
  숫자 표기 예외에 해당하지 않고 그대로 감점한다.
- 코멘트 : 지시받은 고도와 다른 고도를 복창하는 건 실제 운항에서 가장 위험한 유형의 실수다.

---

**P1A-Q3** ✅
문제 : ATC : HL123, caution wake turbulence, runway three two, cleared for takeoff.
내 답안 : CLEARED FOR TAKE OFF RUNWAY32 HL123
** 정답 : Cleared for takeoff, runway three two, HL123.
- 표준교신용어 오류 : 없음.
- 코멘트 : wake turbulence 캐션은 필수 복창 항목이 아니므로 뺀 것은 정상.

---

**P1A-Q4** ✅
문제 : ATC : HL123, start up and pushback approved, long pushback, tail east, until abeam gate 34.
내 답안 : START UP APPROVED LONG PUSH BACK TAIL EAST UNTIL ABEAM GATE34 HL123
** 정답 : Start up and pushback approved, long pushback, tail east, until abeam gate 34, HL123.
- 표준교신용어 오류 : 없음.
- 코멘트 : 5요소 이상 긴 지시를 빠짐없이 정확히 복창함 — 이번 세트에서 가장 깔끔한 답.

---

## Part Ⅰ Task B. Checking, Clarifying, Confirming, Informing

**P1B-Q1** ❌
문제 : During your takeoff roll, you notice bird activity at the end of the runway. Make a report after becoming airborne to ATC.
ATC : HL123, go ahead.
내 답안 : UNABLE TO GO AHEAD DUE TO BIRD CAN I MAKE ORDER HL123
** 교정 답안 : HL123, be advised, we observed bird activity at the departure end of the runway during our takeoff roll.
- 표준교신용어 오류 : "unable"은 관제사가 무언가를 지시했는데 그것을 이행할 수 없을 때 쓰는
  표현이다. 여기서 ATC의 "go ahead"는 지시가 아니라 "말씀하세요"라는 응답 허가이므로 "unable"을
  쓸 이유가 없다. "can i make order"도 뜻이 통하지 않는다(order = 주문/명령이지 보고가 아님).
- 코멘트 : 이 문항은 "지금 목격한 것을 이륙 후 시점에 보고"하는 시차형 Informing인데, 실제
  보고 내용(조류 활동 목격) 자체가 문장에 들어가지 않았다 — 기능 자체를 수행하지 못함.

---

**P1B-Q2** ⚠️
문제 : While maintaining flight level 310, you are at Mach 0.81 from previous ATC instructions. You are also approaching the boundary of the FIR. Now ATC contacts you. Respond accordingly.
ATC : HL123, descend and maintain flight level 290, contact Tokyo control on 121.65, report speed.
내 답안 : DECSEND AND MAINTAIN FL290, SPEED M .81 CON TACK TOKYO CONTROL 121.25 HL123
** 교정 답안 : Descend and maintain FL290, speed Mach point eight one, contact Tokyo control 121.65, HL123.
- 표준교신용어 오류 : 주파수 값 오류(121.65 → 121.25로 복창) — 자릿수가 실제로 다르므로
  오탈자가 아니라 값 오류로 감점.
- 코멘트 : **"report speed"에 실제 속도(M.81)로 정확히 응답한 건 잘함** — 이번 세트에서 새로
  도입된 "복창+부가정보" 패턴을 제대로 수행한 유일한 사례. 주파수 숫자만 정확히 확인하는 습관이
  필요하다.

---

**P1B-Q3** ⚠️
문제 : You are cruising at flight level 210. You have encountered moderate turbulence for 3 minutes with an altitude gain of around 200 feet. Now ATC contacts you. Respond accordingly.
ATC : HL123, request flight condition.
내 답안 : MODERATE TURBULENCE 3MIN AT FL210 HL123
** 교정 답안 : Moderate turbulence for 3 minutes, with an altitude gain of about 200 feet, at flight level 210, HL123.
- 표준교신용어 오류 : 없음.
- 코멘트 : 상황설명에 이미 주어진 "altitude gain of around 200 feet"가 답변에서 빠졌다 — flight
  condition 보고에서 고도 변화량은 핵심 정보이므로 반드시 포함해야 한다.

---

**P1B-Q4** ❌
문제 : After becoming airborne, you contact departure control. ATC gives you climbing restrictions to cross Johnson VOR, but you cannot comply due to performance reasons. Acknowledge and respond accordingly.
ATC : HL123, climb and maintain flight level 210, cross Johnson VOR at or above flight level 150. If unable, maintain flight level 130 until Johnson VOR.
내 답안 : CLIMB FL210 AND CROSS VOR ABOVE FL130 HL123
** 교정 답안 : Unable to cross Johnson VOR at or above flight level 150 due to performance, will maintain flight level 130 until Johnson VOR, HL123.
- 누락된 필수 readback 요소 : "unable" 표명 자체가 빠졌고, 크로싱 제한고도(FL150)와 대안고도
  (FL130)를 혼동해서 "cross VOR above FL130"이라고 복창함 — 실제로는 FL150을 못 넘겨서 FL130에
  머물러야 하는 상황인데, 반대로 FL130 이상으로 크로싱하겠다는 뜻이 되어버림.
- 표준교신용어 오류 : ATC가 먼저 준 contingency("if unable, maintain FL130 until Johnson VOR")는
  문구 그대로 복창해야 하는데 그러지 않고 자기 나름대로 재구성하다가 숫자를 뒤섞음.
- 코멘트 : **"unable+대안" 3단 구조가 이 프로젝트에서 5세트 연속 지적된 최우선 약점**인데,
  이번엔 아예 unable을 빠뜨리고 고도값까지 혼동해 가장 심하게 틀렸다.

---

**P1B-Q5** ⚠️
문제 : ATC instructs you to make a ten degree right turn for traffic separation. You misunderstood the instruction and made a ten degree left turn. Now ATC contacts you. Respond accordingly.
ATC : HL123, confirm maintaining 10 degrees to the right of your route?
내 답안 : MY MISTAKE RIGHT TURN 10 DEGREE , HL123
** 교정 답안 : Negative, that was my mistake, correcting now, turning right 10 degrees, HL123.
- 표준교신용어 오류 : "confirm ~?"에는 AFFIRM/NEGATIVE로 먼저 답해야 하는데 그 부분이 통째로
  빠짐 (atc-terminology.md §11 체크리스트 1순위 항목).
- 코멘트 : 지금 우측이 아니라 좌측으로 돌고 있으므로 답은 NEGATIVE여야 한다. "my mistake, right
  turn 10 degree" 자체는 정정 내용으로는 맞지만, 질문에 직접 답하지 않은 상태로 넘어갔다.

---

**P1B-Q6** ⚠️
문제 : During an en-route phase of the flight, you are instructed to pass FRISO at 0100Z. But the flight computer shows that, even at maximum speed, the aircraft will not cross FRISO until 0103Z. Now ATC contacts you. Respond accordingly.
ATC : HL123, cross FRISO at or before 0100Z.
🖥 [ FRISO ]
내 답안 : Unable to cross freezle until 0100z request cross at 0103z due to restriction hl123
** 교정 답안 : Unable to cross FRISO at or before 0100Z due to maximum speed limitation, request cross FRISO at 0103Z, HL123.
- 표준교신용어 오류 : 사유로 쓴 "due to restriction"은 상황과 안 맞는 표현이다 — "제한이
  있어서"라는 동어반복일 뿐 실제 이유(최대속도로도 못 맞춤)를 설명하지 못한다. `progress/
  expressions.md` 1-6에 EPTA_03·04에서 이미 지적된 것과 똑같은 실수가 이번이 세 번째로 반복됨.
- 코멘트 : **"unable + 대안 요청" 구조 자체는 이번에 처음으로 3단 전부 갖췄다** (unable → due to
  → request 0103Z) — P1B-Q4에서 무너진 것과 대조적으로 여기서는 형태를 지켰다는 점은 긍정적.
  다만 이유 단어 선택이 계속 부정확한 게 문제. "freezle"는 FRISO의 발음상 오탈자로 간주해
  감점하지 않음.

---

## Part Ⅱ Task A. Role-play & Follow-up

**P2A-Q1** ⚠️
문제 : ☞ Contact Clearance Delivery and make a request.
내 답안 : Control hl123 request clearance to smith airport
** 교정 답안 : Smith Delivery, HL123, request clearance to Smith Airport.
- 표준교신용어 오류 : 지시문이 명확히 "Clearance Delivery"에 연락하라고 했는데 "Control"이라는
  존재하지 않는 기관명을 씀 — EPTA_02·03에서 반복됐다가 EPTA_04에서 해결로 판단했던 "엉뚱한
  관제기관 호출"이 다시 나타남.
- 코멘트 : 콜사인 위치(기관명+콜사인을 앞에 두는 첫 교신 관례)는 잘 지켰다.

---

**P2A-Q2** ✅
문제 : ☞ Listen to the controller's message, advise that you are ready.
ATC : HL123, for route revision, advise when you're ready to copy.
내 답안 : ready to copy hl123
** 정답 : Ready to copy, HL123.
- 코멘트 : 정확함.

---

**P2A-Q3** ❌
문제 : ☞ Listen to the controller and give a full readback.
ATC : HL123, cleared to Smith airport, after airborne fly runway heading until the Smith 1.5 DME and then a right turn direct HAPIE then as filed, maintain 5 thousand, expect FL 350 10 minutes after departure, squawk 1766.
내 답안 : cleared to smith airport maintain runway heading until 5dem then turn right hd122 then as file fl250 squawk 1766 hl123
** 정답 : Cleared to Smith Airport, after airborne fly runway heading until Smith one point five DME, then right turn direct HAPIE, then as filed, maintain five thousand, expect flight level three five zero ten minutes after departure, squawk one seven six six, HL123.
- 누락된 필수 readback 요소 :
  - DME 값 오류: "1.5 DME"를 "5 DME"로 복창.
  - **웨이포인트 HAPIE(비행로 허가의 일부, §2 필수 항목)가 통째로 빠지고, 대신 존재하지 않는
    "heading 122"를 지어냄** — direct-to-fix 지시를 헤딩 지시로 완전히 바꿔버림.
  - 고도(§2 필수 항목) 오류: "maintain 5 thousand"가 빠지고 원문에 없는 "FL250"을 복창함.
    "expect FL350 10 minutes after departure"도 통째로 누락.
- 코멘트 : 이번 세트에서 가장 심각한 readback 실패. 5개 이상 요소가 있는 긴 클리어런스에서
  경로(HAPIE)와 고도(5,000/FL350) 정보가 실제와 다른 내용으로 대체됐다 — 실제 비행이라면
  완전히 다른 경로·고도로 비행하게 되는 심각한 오류.

---

**P2A-Q4** ⚠️
문제 : ☞ Listen to the controller's message, respond accordingly and inquire how long it will take.
ATC : HL123, read back is correct, hold for release.
내 답안 : hold for relase hl123
** 교정 답안 : Hold for release, HL123. Request expected release time.
- 코멘트 : readback 자체는 맞지만, 지시문이 명시적으로 요구한 **"얼마나 걸릴지 문의하라"**는
  부분이 완전히 빠졌다. 복창만 하고 요청받은 질문을 안 한 유형(§6-1 채점 형식 참고).

---

**P2A-Q5** ✅
문제 : ☞ Listen to the controller and give a full readback.
ATC : Contact Apron and request pushback and start up.
내 답안 : appron hl123 at gate89 request start up and push back
** 정답 : Apron, HL123, at gate 89, request pushback and start up.
- 코멘트 : 새 기관 첫 교신 관례(기관명+콜사인 앞) 정확히 지킴. "appron"은 발음상 문제없는
  오탈자로 감점하지 않음.

---

**P2A-Q6** ⚠️
문제 : ☞ Listen to controller's response and give a full readback.
Apron : HL123, pushback and startup approved. And pushback lane Alpha then pull forward clear gate 87.
내 답안 : startup and push back approved hl123
** 교정 답안 : Pushback and startup approved, pushback lane Alpha, then pull forward clear of gate 87, HL123.
- 코멘트 : 지시문이 "full readback"을 명시했는데 pushback lane Alpha·pull forward clear gate
  87 같은 실제 이동 경로 정보가 빠졌다. Give-way류처럼 필수 복창 목록 항목은 아니지만, 이 턴은
  '전체 복창'이 직접 지시된 문항이므로 누락은 지시 미이행으로 감점.

---

**P2A-Q7** ❌
문제 : ☞ Inform the controller of the situation and inquire about a holding spot to assess the problem.
내 답안 : request holding at gate89 and request defuel hl123
** 교정 답안 : HL123, we have too much fuel on board, may need to burn some off or defuel — request a spot to hold and assess the situation.
- 코멘트 : 지시문의 첫 부분(상황을 알리는 Informing)이 완전히 빠졌다 — "연료가 너무 많다"는
  사실 자체를 말하지 않고 바로 "request holding"·"request defuel"로 건너뜀. 또한 이미 게이트
  89에 있는 상태이므로 "holding at gate89"는 지시문이 요구한 "홀딩 스팟"(별도 대기 장소) 요청과
  맞지 않는다.

---

**P2A-Q8** ⚠️
문제 : ☞ Listen to the controller's response and state your intentions.
🖥 [ Contact / ground ops / defueling time ]
Apron : Roger, HL123, how long do you think that will take?
내 답안 : it will takes 20min hl123
** 교정 답안 : We will contact ground ops for a defueling time and advise you, HL123.
- 표준교신용어 오류 : 문법 오류 "it will **takes**" → "it will **take**"(will 뒤 동사원형).
- 코멘트 : 텍스트 클루가 "Contact / ground ops / defueling time"으로 명확히 답변 구조를
  지정했는데, 그 구조를 따르지 않고 근거 없는 구체적 시간(20분)을 바로 제시했다. 클루가 있는
  문항은 클루의 요소를 답에 반영해야 한다.

---

**P2A-Q9** ❌
문제 : ☞ Contact Apron and inform them that de-fueling cannot be done, a 30 minute hold is needed.
내 답안 : hold for defuleing 30min hl123
** 교정 답안 : Apron, HL123, unable to defuel, will need a 30 minute hold.
- 표준교신용어 오류 : 새 교신 시작인데 기관명(Apron) 호출이 빠짐.
- 코멘트 : "hold for defueling 30min"은 "디퓨얼링을 위해 30분 홀딩한다"로 읽혀서, 지시문이
  요구한 "디퓨얼링이 **불가능**하니 대신 30분 홀딩이 필요하다"는 의미와 정반대로 전달될 수
  있다. "unable to defuel"처럼 명시적으로 불가 사실을 먼저 말해야 한다.

---

**P2A-Q10** ✅
문제 : ☞ Contact ground and request to taxi.
내 답안 : ground hl123 request taxi hold at g information a
** 정답 : Ground, HL123, holding short of Golf with information Alpha, request taxi.
- 코멘트 : 필요한 요소(기관명·콜사인·위치·정보문자·요청)는 다 들어있음. "request taxi"를
  위치정보보다 먼저 말한 어순만 다를 뿐 내용은 정확.

---

**P2A-Q11** ❌
문제 : ☞ Listen to the controller's response and give a full readback.
Ground : HL123, Ground, runway 13L, taxi left on Golf, cross Runway 22R, follow the Gulfstream passing left to right.
내 답안 : taxi golf taxi 22r then passing left to right hl123
** 정답 : Runway one three left, taxi left on Golf, cross Runway two two right, follow the Gulfstream passing left to right, HL123.
- 누락된 필수 readback 요소 :
  - **사용 활주로(runway 13L, §2 필수 항목)가 통째로 빠짐.**
  - **활주로 횡단 지시(cross Runway 22R, §2 필수 항목 "활주로 관련 지시: 횡단")를 "taxi 22r"로
    잘못 복창** — "taxi on"과 "cross"는 완전히 다른 동작이다(유도로처럼 활주로 위를 계속
    이동하는 것 vs 활주로를 가로질러 건너는 것).
  - "follow the Gulfstream" 부분에서 대상 항공기 언급이 빠지고 "passing left to right"만 남음.
- 코멘트 : 활주로 횡단 지시를 잘못된 동사로 복창하는 건 실제로는 관제사가 즉시 정정해야 하는
  안전 이슈다.

---

**P2A-Q12** ❌
문제 : ☞ Listen to the controller's message, respond accordingly.
🖥 [ unsure of wingtip clearance / hold position ]
Ground : HL123, it appears the Gulfstream blew a tire, are you able to continue straight on Golf 2 then left on Hotel?
내 답안 : roger , taxi to g2 hl123
** 교정 답안 : Negative, unsure of wingtip clearance, request to hold position, HL123.
- 코멘트 : **텍스트 클루가 정확히 "wingtip clearance가 불확실하니 현재 위치에서 대기 요청"이라고
  지정했는데, 실제 답은 정반대로 "roger, taxi to g2"(계속 진행하겠다)로 답함.** 타이어가 터진
  항공기 옆을 날개 간격이 불확실한 채로 그대로 지나가겠다는 뜻이 되어, 이번 세트에서 가장 심각한
  안전 관련 comprehension 오류.

---

**P2A-Q13 (Follow-up)** 무응답 → Level 1
문제 : You have just finished Task A, as the pilot of Hotel Lima one two three. In this situation, what problem did you discover while on the ramp and how did you resolve that problem?
내 답안 : (무응답 — "???????????")
- 코멘트 : CLAUDE.md 규칙에 따라 무응답은 Level 1 처리.

---

## Part Ⅱ Task B. Extended Role-play

**P2B-Q1** ❌
문제 : ☞ Contact Public Approach and report your position.
내 답안 : descend fl180 information o hl123
** 교정 답안 : Public Approach, HL123, descending through flight level 180 for 11,000, with information Oscar.
- 표준교신용어 오류 : 새 기관과의 첫 교신인데 기관명("Public Approach")이 문장 맨 앞에 없음
  (§10 콜사인 위치 관례 위반).
- 코멘트 : 위치보고 형식도 목표고도("for 11,000")가 빠져서 "descend FL180"만으로는 지금
  어디로 향하는 중인지 불완전하게 전달된다.

---

**P2B-Q2** ❌
문제 : ☞ Listen to the controller's response, and respond accordingly.
Approach : HL123, Public Approach, good afternoon. Descend and maintain 6000, reduce speed to 210 and expect DIXIE ONE arrival Runway 23 transition followed by ILS 23.
🖥 [ Dixie One Arrival / ILS runway 23 ]
내 답안 : descend and maintain 6000, decrease speed 210 expect runway32 ils runway 32 hl123
** 정답 : Descend and maintain 6000, reduce speed to 210, expect DIXIE ONE arrival Runway two three transition followed by ILS two three, HL123.
- 누락된 필수 readback 요소 : **활주로 번호(§2 필수 항목)를 23이 아니라 32로 복창** — 값 자체가
  틀렸고, 텍스트 클루에 "ILS runway 23"이라고 명시되어 있었는데도 틀림. **DIXIE ONE arrival
  이름도 통째로 빠짐** — 역시 클루에 명시돼 있었다.
- 코멘트 : "decrease"는 표준용어 "reduce"와 다른 단어이지만 뜻은 통하므로 큰 감점 요소는
  아니고 참고만. 활주로 번호 오류가 이 문항의 핵심 실수.

---

**P2B-Q3** ❌
문제 : Approach : HL123, turn right heading 190, descend and maintain 4000 to intercept the Runway 23 localizer.
☞ Respond accordingly; stating you're leveling off at 4,000, inform them of your situation and request vectors for troubleshooting.
내 답안 : maintain 4000, turn right 190 but we have lost display so request holding hl123
** 교정 답안 : Turn right heading 190, maintain 4000 — leveling off at 4,000, be advised we've lost a lot of our instrument displays, request vectors for troubleshooting, HL123.
- 표준교신용어 오류 : 지시문이 명시적으로 요구한 "leveling off at 4,000"이라는 상태보고
  동사 대신 지시 복창 동사 "maintain 4000"만 씀. **요청 내용도 "request holding"으로 써서
  지시문이 요구한 "request vectors for troubleshooting"과 다르다** — holding과 troubleshooting
  vector는 목적이 전혀 다른 요청.
- 코멘트 : "we have lost display"로 상황은 전달했으나, 정작 요청 내용이 틀려서 관제사가 엉뚱한
  조치(홀딩)를 제공하게 될 수 있다.

---

**P2B-Q4** ❌
문제 : Approach : HL123, roger, fly heading 270, maintain 4000 and say intentions?
☞ Respond, give a full readback and request weather information for Sovereign and Independent Airports. You prefer VMC conditions.
🖥 [ Sovereign Airport / Independent Airport ]
내 답안 : maintain fl270 and maintain 4000, request weather at airport our flight condition is vmc hl123
** 교정 답안 : Fly heading 270, maintain 4000, HL123. Intentions — request weather for Sovereign and Independent Airports, we prefer VMC conditions.
- 표준교신용어 오류 : **"fly heading 270"(기수 지시)을 "maintain FL270"(고도 지시)으로 복창** —
  헤딩과 비행고도(FL)를 혼동함. 헤딩·고도 둘 다 §2 필수 복창 항목이라 이런 종류의 혼동은
  중대한 오류.
- 코멘트 : 공항 이름(Sovereign/Independent)이 클루에 명시돼 있었는데 둘 다 빠지고 "airport"로만
  뭉뚱그림. "our flight condition is vmc"는 현재 기상이 VMC라는 잘못된 주장처럼 읽히는데,
  실제로는 "우리는 VMC를 선호한다"는 희망사항이어야 한다.

---

**P2B-Q5** ⚠️
문제 : Approach : HL123, Sovereign weather, wind 350 at 6, visibility 1 mile with ceiling 300 overcast, temperature 10, dew point 9. Independent looks better, wind 170 at 5, visibility 10, ceiling 2200 broken, temperature 16, dew point 12.
☞ Request vectors to Independent Airport for a visual approach.
내 답안 : request vector to airport to provisual hl123
** 교정 답안 : Request vectors to Independent Airport for a visual approach, HL123.
- 코멘트 : 두 공항 기상을 비교한 뒤 더 나은 쪽(Independent)을 선택하는 문항인데, 공항 이름이
  빠져서 "어느 공항으로"인지 전달되지 않는다 — 이 문항의 핵심은 이름을 정확히 짚는 것.
  "to provisual"은 "for a visual approach"의 발음상 오탈자로 보고 그 자체는 감점하지 않음.

---

**P2B-Q6** ❌
문제 : ☞ Contact approach control to give them an update of your situation and request ILS 23 at Public Airport.
내 답안 : we go back again can ils approach request ils approach hl123
** 교정 답안 : Public Approach, HL123, we have some instrument displays back, request to return for the ILS runway 23 approach at Public Airport.
- 코멘트 : 상황이 바뀐 핵심 이유("계기 일부 회복")가 답변에 없어서 관제사 입장에서 왜 갑자기
  ILS를 다시 요청하는지 알 수 없다. 공항명·활주로 번호도 구체적으로 언급되지 않았고, 문장
  구조가 무너져 있다("can ils approach"는 문법적으로 성립하지 않음).

---

**P2B-Q7** ⚠️
문제 : Approach : HL123, roger, you're cleared to Public Airport, turn right heading 140 and maintain 4000, and let me know if anything changes.
☞ Respond and give a full readback. Advise Approach to stand by for further information.
내 답안 : ils approach approved right turn hl140 maintain 4000, ill let you know if something happen hl123
** 교정 답안 : Cleared to Public Airport, turn right heading 140, maintain 4000, HL123. Will let you know if anything changes.
- 누락된 필수 readback 요소 : 관제사가 실제로 발부한 "cleared to Public Airport"(비행로 허가,
  §2 필수 항목)가 "ils approach approved"라는 실제로 안 나온 문구로 대체됨.
- 코멘트 : heading 140·maintain 4000은 정확히 복창함. "if something happen"은 문법상
  "anything changes"가 자연스럽다(작은 문법 오류).

---

## Part Ⅱ Task C. Reporting about Task B

**P2C-Q1** 무응답 → Level 1
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
내 답안 : (무응답 — "error"로만 기록됨)
- 코멘트 : 답이 기록되지 않아 무응답으로 처리한다. 참고로 이 세트의 Task B 사건(계기 다수 상실 →
  벡터 요청 → 두 공항 기상 비교 → 계기 일부 회복 후 Public Airport ILS 23으로 복귀)을 요약하는
  문항이므로, 다음에 다시 풀 때는 "우리가 무엇을 잃었고(계기), 무엇을 요청했고(vectors), 어떻게
  해결됐는지(계기 회복 후 원래 공항으로 복귀)" 세 단계를 순서대로 말하는 연습이 필요하다.

---

**P2C-Q2** 무응답 → Level 1
문제 : How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
내 답안 : "6 re 210 ex dis arri runway23 e ils 23 23" (Task B 재청취 내용을 옮겨 적은 메모로 보이며, Q2가 요구하는 의견 진술이 아님)
- 코멘트 : 이 텍스트는 질문에 대한 답이 아니라 ATC 대사를 듣고 남긴 메모("6[천], reduce
  210, expect DIXIE arrival runway23, ILS 23, 23")로 보인다. Q2는 "관제사 대응이 적절했는가,
  아쉬운 점이 있는가"에 대한 조종사 관점의 의견을 요구하므로, 실질적으로 무응답과 동일하게
  처리한다.

---

## ICAO 6개 항목 등급

| 항목 | 등급 | 근거 |
|---|---|---|
| Pronunciation | 평가 보류 | 텍스트 기반 채점 한계로 판단 불가 (CLAUDE.md §6-1-1) |
| Structure | Level 2 | "it will takes", "can ils approach", "ill let you know if something happen" 등 기본 문형이 반복적으로 무너짐. 특히 자유응답 다수가 완전한 문장을 이루지 못함. |
| Vocabulary | Level 2 | 헤딩/고도 혼동(fly heading 270 → maintain FL270), taxi/cross 혼동(runway crossing), "due to restriction" 반복(3세트째), unable의 오용(P1B-Q1) 등 개념 자체가 다른 단어를 반복 사용. |
| Fluency | Level 2 | 다수 응답이 접속사·구조 없이 단어가 나열되는 형태(P2A-Q9, P2B-Q6 등)로, 완결된 발화 흐름을 갖추지 못함. |
| Comprehension | Level 1 | **P2A-Q12(윙팁 간격 불확실 → 홀드 요청 지시를 정반대인 "계속 진행"으로 답함)**은 안전과 직결된 심각한 이해 실패다. 여기에 활주로 번호 오독(32 vs 23, 2회), 헤딩/고도 혼동, "vectors for troubleshooting"을 "holding"으로 잘못 이해, Task C 두 문항 모두 질문 의도와 무관한 답 등 지시·교신 내용을 정확히 이해하지 못한 사례가 세트 전반에 반복됨. |
| Interactions | Level 2 | 지시문이 명시적으로 요구한 후속 동작(P2A-Q4 "얼마나 걸릴지 문의", P2A-Q7 상황 설명, P2B-Q4 공항명 언급 등)을 여러 차례 빠뜨려, 관제사와의 교신이 요구사항에 맞게 완결되지 않음. |

**최종 등급 : Level 1 (불합격)** — 6개 항목 중 최저값 기준. 5개 세트 중 가장 낮은 등급이며,
특히 Comprehension이 Level 4에 크게 못 미친다.

---

## 태스크별 총평

**Part Ⅰ A** : 4문항 중 3문항은 정확했으나(Q1·Q3·Q4), Q2에서 고도 값 자체를 틀렸다(FL260→
FL230). 기본 readback 틀은 잡혀 있지만 숫자 하나를 놓치면 전체 지시가 무의미해진다는 걸
보여주는 사례.

**Part Ⅰ B** : 이번 세트에서 새로 표준화된 "복창+부가정보"(report speed) 패턴은 Q2에서 성공적으로
수행했고(속도값 Mach 0.81 정확히 언급), "unable+대안" 3단 구조도 Q6에서 처음으로 형태를 완성해
5세트 만에 처음 진전이 보였다. 그러나 정작 ATC가 먼저 준 contingency(Q4, "if unable, maintain
FL130 until Johnson VOR")는 숫자를 뒤섞으며 완전히 무너졌고, Q1의 시차형 Informing은 "unable"을
엉뚱하게 써서 기능 자체를 수행하지 못했다. Q5는 CONFIRM 질문에 AFFIRM/NEGATIVE로 답하는 원칙을
빠뜨렸다.

**Part Ⅱ A** : 클리어런스 readback(Q3)에서 웨이포인트(HAPIE)와 고도(5,000/FL350)가 완전히 다른
값으로 대체된 것이 가장 심각한 문제였다. 활주로 횡단 지시(Q11)도 "cross"를 "taxi"로 잘못 복창해
활주로 진입 관련 지시가 부정확하게 전달됐다. 무엇보다 **Q12에서 윙팁 간격이 불확실하다는 클루를
무시하고 정반대로 "roger, taxi to g2"라고 답한 것**이 이 세트 전체에서 가장 위험한 오류다.
Informing이 필요한 상황(Q7, Q9)에서도 문제 상황을 먼저 알리지 않고 바로 요청으로 건너뛰는
패턴이 반복됐다.

**Part Ⅱ B** : 첫 교신에서 기관명을 빠뜨리는 실수(Q1)로 시작해, 활주로 번호를 두 번이나 틀리게
복창하고(Q2), 헤딩과 고도를 혼동하고(Q4), 요청 내용을 다른 것으로 잘못 전달하는(Q3, "holding"
vs "troubleshooting") 등 comprehension 문제가 이 태스크에 집중됐다. 상황 업데이트(계기 일부
회복)를 알리는 Q6도 핵심 정보 없이 진행돼, 관제사 입장에서 맥락을 파악하기 어려운 교신이 됐다.

**Part Ⅱ C** : 두 문항 모두 실질적인 응답이 없었다(Q1 기록 오류, Q2는 질문과 무관한 메모).
Task B의 사건 전개를 plain English로 요약·평가하는 능력은 이번 세트로는 판단할 수 없다.

---

## 다음 학습 과제

**반복되는 약점 3개**
1. **지시 내용을 반대로 이해하고 답하는 comprehension 오류** — P2A-Q12(홀드 요청을 진행으로
   답함), P1B-Q4(unable 상황에서 오히려 복종하듯 답함)처럼, 상황을 정반대로 이해한 채 답하는
   패턴이 이번 세트에서 두드러졌다. 답하기 전에 "지금 관제사가 나에게 원하는 게 진행인가
   대기인가/거부인가"를 한 번 더 확인하는 습관이 필요하다.
2. **헤딩(heading)과 고도(FL/altitude)를 혼동** — P2B-Q4에서 "fly heading 270"을 "maintain
   FL270"으로 복창함. 둘 다 §2 필수 복창 항목이므로 반드시 구분해서 들어야 한다.
3. **Informing 없이 바로 Request로 건너뛰는 습관** — P2A-Q7, P2A-Q9, P2B-Q6에서 상황을 먼저
   알리지 않고 요청부터 하거나, 상태 변화를 설명하지 않은 채 새 요청만 함. "상황 설명 →
   요청/의도"의 두 단계를 항상 함께 말해야 한다.

**외워야 할 표현 5개**
1. **"unable to [지시] due to [정확한 사유], request [대안]"** — 6세트 연속 지적되는 이 프로젝트
   최우선 표현. (한국어: ~할 수 없다 due to ~, 대신 ~를 요청한다)
2. **"leveling off at [고도]"** (지시 복창이 아니라 현재 상태를 보고할 때) — "maintain [고도]"와
   구분할 것. (한국어: [고도]에서 수평비행 중이다)
3. **"be advised, [상태/상황]"** — 관제사에게 새로운 상황을 알릴 때 문장 앞에 붙이는 표준 도입구.
   (한국어: 알려드립니다, ~)
4. **"unsure of wingtip clearance, request to hold position"** — 지상에서 간격이 불확실할 때
   임의로 진행하지 말고 대기를 요청하는 표현. (한국어: 날개 간격이 불확실하다, 현재 위치에서
   대기를 요청한다)
5. **"cross Runway [번호]"** (taxi on과 구분) — 활주로를 가로질러 건너는 지시. (한국어: 활주로를
   횡단하라/횡단하겠다 — 유도로처럼 그 위를 계속 이동하는 것과 다름)

---
