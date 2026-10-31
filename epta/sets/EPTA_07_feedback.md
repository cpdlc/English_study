# EPTA_07 채점 결과 — 2026-10-30 (세션 20261029-122555)

32/32 전부 응답. 무응답 0.

| | EPTA_05 | EPTA_06 | SAMPLE_01 | **EPTA_07** |
|---|---|---|---|---|
| ✅ | 13 | 11 | 15 | **14** |
| ⚠️ | 11 | 14 | 16 | **12** |
| ❌ | 4 | 7 | 1 | **6** |
| 무응답 | 3 | 0 | 0 | **0** |
| 최종 | Level 2 | Level 2 | Level 3 | **Level 2** |

**이번 세트에서 해결된 것이 많다.** 기관 호출 5/5 정확, `confirm`·`are you able` 질문의
첫 단어 `Negative` 2/2, "결정 전에 묻기" 3문항 전부 수행, REQUEST + 명사구, Task C Q2 의
평가 대상이 관제사, 위치보고 값 정확 — 전부 직전 두 세트에서 최우선으로 지적한 항목이다.

**그런데 같은 구조의 두 문항에서 하나는 맞고 하나는 틀렸다.** 아래 §P2A-Q4 와 §P2B-Q5 를
나란히 보면 이번 세트의 진단이 거기 다 있다.

---

## Part Ⅰ TASK A

**P1A-Q1** ✅
문제 : Ground : HL123, hold short of runway tree four, traffic landing.
내 답안 : hold short of runway 34 hl123
** 정답 : Hold short of runway 34, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **교통정보를 복창에서 제외한 판단이 정확합니다.** 다섯 세트 연속 안정적인 항목입니다.

---

**P1A-Q2** ⚠️
문제 : Tower : HL123, after departure climb to flight level tree tree zero, report passing 5,000 feet.
내 답안 : climb to fl330 report passing 5000 hl123
** 정답 : After departure climb to flight level 330, report passing 5,000 feet, HL123.
- 누락된 필수 readback 요소 : **`after departure`** — 시점 조건
- 표준교신용어 오류 : 없음
- 코멘트 : 고도 FL330 과 보고 고도 5,000 은 둘 다 정확합니다. 빠진 것은 **조건**입니다. 이 문항에서는 뜻이 크게 달라지지 않지만, 같은 세트 P1A-Q3 의 `at or above` 처럼 **조건절 자체가 복창 대상**이라는 점은 같습니다. SAMPLE_01 P1A-Q3 에서 `until passing` 을 빠뜨린 것과 같은 유형입니다.

---

**P1A-Q3** ❌
문제 : 🖥 [ TAMNA ]
Center : HL123, descend to flight level two four zero, cross TAMNA at or above one zero thousand.
내 답안 : cross tamna at or above 10000 hl123
** 정답 : Descend to flight level 240, cross TAMNA at or above 10,000, HL123.
- 누락된 필수 readback 요소 : **`descend to flight level 240` — 강하 지시 전체**
- 표준교신용어 오류 : **고도는 필수 복창 7항목**입니다(`atc-terminology.md` §2)
- 코멘트 : 교차제한(`cross TAMNA at or above 10,000`)은 정확히 받았습니다 — 까다로운 쪽을 맞혔습니다. 그런데 **앞의 강하 지시를 통째로 빠뜨렸습니다.** 관제사는 이 기체가 FL240 으로 내려온다는 확인을 받지 못합니다. 지시가 두 토막일 때 **뒤쪽만 받고 앞쪽을 흘리는** 양상인데, 메모를 왼쪽부터 순서대로 적고 복창할 때 **왼쪽 끝부터** 읽으면 막을 수 있습니다.

---

**P1A-Q4** ✅
문제 : Approach : HL123, turn left heading tree one zero, cleared for the ILS runway tree four approach.
내 답안 : turn left heading 310 , cleared for ils runway 34 approach hl123
** 정답 : Turn left heading 310, cleared for the ILS runway 34 approach, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **선회 방향 + 기수 + 접근 허가 전부.** 접근 허가 복창은 **네 세트 연속 유지**이고, 선회 방향(`left`)을 함께 넣은 것도 정확합니다.

---

## Part Ⅰ TASK B

**P1B-Q1** ⚠️
문제 : Your required landing distance today is 2,900 metres. Runway one six is 2,400 metres long and the surface is wet. Listen to the controller, respond with a reason, and tell him what you need instead.
Approach : HL123, are you able to accept runway one six?
내 답안 : negative we need at least 2900m landing distance hl123
** 교정 답안 : Negative, HL123 — we need 2,900 metres and runway one six is only 2,400, and it is wet. Request a longer runway.
- 누락된 필수 readback 요소 : **① 대안 요청**(지시문의 `tell him what you need instead`) ② 2,400 과의 비교
- 표준교신용어 오류 : 없음
- 코멘트 : **`are you able ~?` 에 `Negative` 로 시작했습니다.** SAMPLE_01 에서 두 번(P1B-Q5, P2A-Q12) 첫 단어를 빠뜨려 지적한 항목인데 해결됐습니다. 사유도 정확합니다. 빠진 것은 **지시문의 뒷부분**입니다 — 못 받겠다고만 하면 관제사가 다음 수를 못 냅니다. `Request a longer runway` 한 토막이면 됩니다. 그리고 "2,900 이 필요하다"보다 **"2,900 이 필요한데 1 6 은 2,400 뿐이다"** 가 관제사에게는 훨씬 빠른 정보입니다.

---

**P1B-Q2** ❌
문제 : Center cleared you to fly heading tree one zero. You had to turn left to heading two niner zero to stay clear of a build-up, and you are still on that heading. Now ATC contacts you. Respond accordingly.
Center : HL123, confirm maintaining heading tree one zero?
내 답안 : negative turn left heading 290 by mistake , now turning right heading 310 hl123
** 정답 : Negative, HL123, maintaining heading 290 to stay clear of a build-up. Request to continue on this heading until clear.
- 누락된 필수 readback 요소 : **사유(뇌우 회피)**
- 표준교신용어 오류 : `NEGATIVE` 는 정확합니다
- 코멘트 : **첫 단어는 맞았는데 상황을 반대로 읽었습니다.** 지문은 "**build-up 을 피하려고** 290 으로 돌았고 **아직 그 기수에 있다**"입니다. 실수가 아니라 **의도한 회피**입니다. 답안은 "실수로 돌았고 지금 310 으로 돌아간다"가 되어, **뇌우 속으로 다시 들어가겠다**고 말한 셈이 됐습니다.
  `Confirm maintaining ~?` 함정형의 정답 구조는 **NEGATIVE + 실제 상태 + 사유**입니다. 네 세트 연속 맞히던 패턴인데, 이번에는 "실제 상태"를 "실수"로 바꾸면서 무너졌습니다. **왜 그 상태가 됐는지(사유)를 지문에서 먼저 찾는 것**이 이 유형의 핵심입니다.

---

**P1B-Q3** ✅
문제 : During your takeoff roll you saw a maintenance vehicle moving towards the runway from taxiway Juliet. You were too busy to report it then. Departure now calls you. Acknowledge the instruction, and report what you saw.
Departure : HL123, Gimpo Departure, radar contact, climb to flight level one five zero.
내 답안 : climb to fl150 hl123 , and be advised we noticed that maintanence veihcle is going runway from taxiway J
** 교정 답안 : Climbing to flight level 150, HL123. And be advised, during our takeoff roll we saw a maintenance vehicle moving towards the runway from taxiway Juliet.
- 누락된 필수 readback 요소 : 없음. 보고에서 **언제 봤는지**가 빠졌습니다
- 표준교신용어 오류 : 없음. `be advised` 가 적절합니다. 시제 `is going` → `was moving`
- 코멘트 : **복합 지시 두 부분을 모두 수행했고 위치(taxiway Juliet)까지 정확합니다.** 시차형 보고는 세 세트 연속 안정적입니다. 한 가지만 — `is going` 으로 쓰면 **지금 들어가고 있다**는 뜻이 되어 관제사가 즉시 활주로를 닫을 수 있습니다. `during our takeoff roll we saw` 로 **시점을 먼저** 밝히세요.

---

**P1B-Q4** ⚠️
문제 : You have been in continuous light to moderate turbulence for the last 20 minutes. A preceding aircraft has reported smooth air two levels above you. Contact Jeju Control. Make a request with a reason.
내 답안 : jeju control hl123 , request climb to 2 level above us due to turbulence
** 교정 답안 : Jeju Control, HL123, request two levels higher — we have had continuous turbulence for the last 20 minutes and the preceding aircraft reports smooth air there.
- 누락된 필수 readback 요소 : **사유의 핵심(선행기가 두 레벨 위에서 평온을 보고했다)**
- 표준교신용어 오류 : `request climb to ~` — **REQUEST 뒤에는 명사구**가 옵니다(`request two levels higher` / `request flight level XXX`)
- 코멘트 : **기관 호출이 정확하고** 요청과 사유가 둘 다 있습니다. 두 가지만 고치면 됩니다. ① `request` 뒤의 동사구 — 같은 세트 P1B-Q6 에서는 `request runway in use and wind check` 로 정확하게 쓰셨습니다. **아는데 문장이 길어지면 흐트러집니다.** ② 사유가 "난류 때문"에서 멈췄습니다. **왜 하필 두 레벨 위인지**가 빠지면 관제사는 근거 없는 요청으로 받습니다 — 선행기 보고가 그 근거입니다.

---

**P1B-Q5** ❌
문제 : 🖥 [ SIMUN ]
At your present weight you cannot reach flight level tree eight zero. Listen to the controller and respond accordingly.
Center : HL123, climb to flight level tree eight zero. If unable, maintain flight level tree four zero until SIMUN.
내 답안 : climb to fl380 , maintain fl340 until simun hl123
** 정답 : Unable flight level 380 due to weight, HL123. Maintaining flight level 340 until SIMUN.
- 누락된 필수 readback 요소 : **`unable` 선언과 사유(중량)**
- 표준교신용어 오류 : **두 고도를 동시에 복창해 모순된 교신이 됐습니다** — "FL380 으로 올라간다"와 "FL340 을 유지한다"를 같이 말하면 관제사는 어느 쪽인지 모릅니다
- 코멘트 : **대안(FL340 until SIMUN)을 복창한 것은 진전입니다** — SAMPLE_01 P1B-Q4 에서는 ATC 가 준 대안을 `request` 로 되돌려 지적했는데, 이번엔 그 대안을 받았습니다. 남은 것은 **"못 한다"는 선언 하나**입니다.
  이 유형의 구조는 고정입니다 : **`Unable (못 하는 것) due to (사유). (ATC 가 준 대안)을 그대로.`** ATC 가 `if unable, (대안)` 을 먼저 준 문항에서는 **대안을 요청하지 말고 수락**하되, 수락하기 전에 **unable 을 반드시 말해야** 합니다. 지문이 "현재 중량으로는 FL380 에 도달할 수 없다"고 사유까지 줬습니다.

---

**P1B-Q6** ✅
문제 : 🖥 [ Cheongju Approach / runway in use / wind check ]
Your arrival information says runway tree four is in use at Cheongju. On the way in you have watched the wind back round to the south, and you think the runway may have changed. Contact Cheongju Approach. Ask what you need to know, and make a request.
내 답안 : Chengju Approach hl123 , request runway in use and wind check
** 정답 : Cheongju Approach, HL123, request the runway in use and a wind check.
- 누락된 필수 readback 요소 : 없음 — **기관 호출 + 묻기 + 요청 세 기능 전부**
- 표준교신용어 오류 : 없음
- 코멘트 : **이 세트에서 가장 깔끔한 Ⅰ-B 응답입니다.** `request runway in use and wind check` 는 **REQUEST + 명사구 두 개**를 정확히 썼습니다 — EPTA_06 에서 네 번 동사구를 붙여 최다 반복 오류로 지적한 항목입니다. 발신형에서 기관 호출도 정확합니다. 짧고 필요한 것만 담았습니다.

---

## Part Ⅱ TASK A

**P2A-Q1** ✅
문제 : 🖥 [ Gimpo Ground / information Delta ]
☞ Contact Gimpo Ground and request taxi.
내 답안 : gimpo ground hl123 , request taxi with information delta
** 정답 : Gimpo Ground, HL123, request taxi, information Delta.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : 기관명·요청·정보문자 모두 정확합니다. `request taxi` 도 명사구입니다.

---

**P2A-Q2** ⚠️
문제 : ☞ Listen to the ground controller, give a full readback, and acknowledge the delay.
Ground : HL123, Gimpo Ground, taxi to runway tree four via Papa and Golf, hold short of Golf tree. There's an A350 unserviceable at the holding point ahead of you, so it may be a while — I'll keep you posted.
내 답안 : roger taxi to runway 34 via papa gold and hold short of golf 3 hl123
** 교정 답안 : Taxi to runway 34 via Papa and Golf, hold short of Golf 3, HL123. Roger the delay — we will wait for your call.
- 누락된 필수 readback 요소 : **지연에 대한 응대** — 지시문의 `acknowledge the delay`
- 표준교신용어 오류 : 없음 (`gold` 는 Golf 의 오탈자로 보고 감점하지 않았습니다)
- 코멘트 : 유도 지시는 완전히 받았습니다(활주로·유도로 두 개·hold short 지점). 빠진 것은 **구어체로 들어온 뒷부분**입니다 — `it may be a while, I'll keep you posted`. `roger` 를 맨 앞에 붙이긴 했지만 그건 유도 지시를 받았다는 뜻으로 읽힙니다. **지연을 알아들었다는 신호**가 따로 있어야 관제사가 다시 설명하지 않습니다. SAMPLE_01 P2A-Q6 에서 구어체 부탁을 놓친 것과 같은 유형입니다.

---

**P2A-Q3** ✅
문제 : 🖥 [ runway tree two right / takeoff distance available ]
☞ Listen to the ground controller and respond accordingly. Tell him what you need to know before you decide.
Ground : HL123, I can offer you runway tree two right instead — you'd go via Hotel and be number one. Do what you need to do.
내 답안 : before deciding , can i know the runway 32 available distance hl123
** 교정 답안 : HL123 — before we decide, request the takeoff distance available on runway 32R.
- 누락된 필수 readback 요소 : 없음. 활주로는 `32R`(우측 지정)까지 말하면 더 정확합니다
- 표준교신용어 오류 : `can i know ~` → `request ~`(표준). 다만 뜻은 명확하게 전달됩니다
- 코멘트 : **물어야 할 값을 정확히 골랐습니다.** 이 상황에서 필요한 정보는 이륙가용거리 하나이고, 그걸 바로 짚었습니다. "결정 전에 묻기"는 EPTA_02~05 에서 **네 세트 연속 실패**하다 EPTA_06 에서 해결됐고, 이번에 **세 문항 전부 수행**했습니다(여기, Q9, P2B-Q4). 완전히 자리잡았습니다.

---

**P2A-Q4** ❌
문제 : ☞ Listen to the ground controller, then state your decision with a reason.
Ground : HL123, runway tree two right has tree,200 metres available, and the surface is dry.
(Initial Situation : Your required takeoff distance today is 2,900 metres.)
내 답안 : we cannot use the 32r runway due to aircraft performance we need at least 2900m hl123
** 정답 : HL123, 3,200 metres is enough — we need 2,900. We will take runway 32R.
- 누락된 필수 readback 요소 : 해당 없음
- 표준교신용어 오류 : 사유가 사실과 다릅니다 — 성능 문제가 아닙니다
- 코멘트 : **이번 세트에서 가장 중요한 오류이고, 바로 앞 문항에서 본인이 물어서 받은 답을 쓰지 않았습니다.**
  Q3 에서 "이륙가용거리를 알려달라"고 물었고, 관제사가 **3,200 미터**라고 답했습니다. 필요한 거리는 **2,900 미터**입니다. **3,200 > 2,900 이므로 쓸 수 있습니다.** 게다가 노면은 건조하고, 32R 로 가면 Hotel 경유에 **1번 순서**입니다. 원래 활주로 34 는 고장난 A350 뒤에서 기다려야 합니다.
  그런데 답안은 거부했고, 이유로 든 "2,900m 가 필요하다"는 **거부의 근거가 아니라 수락의 근거**입니다. 숫자를 정확히 기억하고 계셨는데 **비교 방향이 뒤집혔습니다.**
  **§P2B-Q5 와 나란히 보세요.** 거기서는 2,500 < 2,900 을 정확히 판단해 Yangyang 을 거부하셨습니다. 같은 구조인데 하나는 맞고 하나는 틀렸습니다 — 두 문항 모두 **"거부"** 를 택했다는 공통점이 있습니다. 비교를 한 것이 아니라 거부가 기본값이었을 가능성이 있습니다. 숫자를 들으면 **`받은 값 / 내 한계` 를 두 줄로 적고 부등호를 그린 다음** 입을 떼세요.

---

**P2A-Q5** ✅
문제 : ☞ Listen to the ground controller and give a full readback.
Ground : HL123, taxi to runway tree two right via Hotel, hold short of Hotel two, contact Gimpo Tower on 118.1.
내 답안 : taxi to ruwnay 32r via h hold short of h2 , contact gimpo tower 118.1 hl123
** 정답 : Taxi to runway 32R via Hotel, hold short of Hotel 2, contact Gimpo Tower on 118.1, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **활주로·유도로·hold short 지점·기관·주파수 118.1 전부 정확합니다.** 주파수는 **세 세트 연속** 정확합니다. (앞 문항에서 32R 을 거부해 놓고 여기서 32R 로 유도받은 모순은 Q4 에서 이미 감점했습니다.)

---

**P2A-Q6** ⚠️
문제 : ☞ Listen to the tower and give a full readback.
Tower : HL123, Gimpo Tower, behind the departing Cessna Citation, line up and wait runway tree two right.
내 답안 : line up and wait runway 32r hl123
** 정답 : Behind the departing Cessna Citation, line up and wait runway 32R, HL123.
- 누락된 필수 readback 요소 : **조건 `behind the departing Cessna Citation`**
- 표준교신용어 오류 : 없음
- 코멘트 : `line up and wait` 와 활주로는 정확합니다. 그런데 **조건이 빠지면 지금 바로 진입하겠다는 뜻**이 됩니다. 조건부 진입 지시에서 조건을 빠뜨리는 것은 **활주로 침입으로 직결되는 누락**이라, ICAO 는 조건부 허가의 조건을 반드시 복창하도록 요구합니다. `behind the ~` 로 시작해서 **조건을 문장 맨 앞에** 두세요 — 그래야 관제사가 조건을 제대로 받았는지 바로 확인할 수 있습니다.

---

**P2A-Q7** ⚠️
문제 : ☞ Listen to the tower and give a full readback.
Tower : HL123, cleared for takeoff runway tree two right, climb to 4,000 feet, report passing 2,500 feet.
내 답안 : cleared to ruwnay 32r cimb to 4000 report passing 2500 hl123
** 정답 : Cleared for takeoff runway 32R, climb to 4,000 feet, report passing 2,500 feet, HL123.
- 누락된 필수 readback 요소 : **`for takeoff`**
- 표준교신용어 오류 : **`cleared to runway 32R`** 는 "활주로까지 가도 좋다"로 읽힙니다. **`cleared for takeoff`** 는 이륙 허가입니다 — 전혀 다른 허가이고, 활주로 관련 지시 중 가장 무거운 항목입니다
- 코멘트 : **네 자리 피트 두 개(4,000 과 2,500)를 둘 다 정확히** 받았습니다 — EPTA_06 에서 드릴로 넣어 해결한 항목이 유지됩니다. 틀린 것은 **두 단어**입니다. `takeoff` 는 **이륙 허가에만 쓰는 한 단어**이고, 그 밖의 맥락에서는 `departure` 를 씁니다. SAMPLE_01 P2A-Q8 에서 `cleared to take off` 로 썼던 것의 연장입니다.

---

**P2A-Q8** ✅
문제 : ☞ Contact Gimpo Departure, report your passing altitude and request further climb.
(Situation Update : You are airborne and passing 2,500 feet, climbing to 4,000 feet.)
내 답안 : gimpo departure hl123 climb to 4000 passing through 2500 and request further climb
** 정답 : Gimpo Departure, HL123, passing 2,500 feet for 4,000, request further climb.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `climb to 4000` 은 **지시를 복창하는 동사**입니다. 위치보고는 `passing X for Y` 로 고정하세요
- 코멘트 : **값이 정확합니다.** EPTA_06 P2A-Q9 에서 `passing 1,800` 을 `passing 3000` 으로 뒤집어 ❌ 를 준 바로 그 유형이고, 이번에는 통과고도와 목표고도를 제자리에 넣었습니다. **"스스로 보고할 때 값이 틀린다"는 최우선 약점이 해결됐습니다.** 남은 것은 어순 하나 — `passing 2,500 for 4,000` 이 표준형입니다.

---

**P2A-Q9** ❌
문제 : 🖥 [ direct SIMUN ]
☞ Listen to the controller, give your full readback, then tell him what you need to know before you accept.
Departure : HL123, radar contact, climb to flight level two tree zero. I can give you direct SIMUN if you want it — it'll cut the corner off your route. Up to you.
내 답안 : before deciding , we need terrain height limitaion during direct simun hl123
** 정답 : Climb to flight level 230, HL123. Before we accept — how many track miles does direct SIMUN save, and what is the weather on that routing?
- 누락된 필수 readback 요소 : **`climb to flight level 230`** — 지시문 앞부분의 full readback 이 통째로 없습니다. 고도는 필수 복창 항목입니다
- 표준교신용어 오류 : 없음
- 코멘트 : **묻는 동작은 했지만 두 가지가 어긋났습니다.** ① **복창을 빠뜨렸습니다** — 지시문이 `give your full readback, then tell him...` 으로 순서까지 적어 줬습니다. 묻는 데 집중하다 앞을 놓친 형태입니다. ② **물은 내용이 이 상황의 변수가 아닙니다** — FL230 순항에서 지형 고도는 판단 요소가 아닙니다. 직항을 받을지 결정하려면 **얼마나 단축되는지**와 **그 경로의 기상**을 알아야 하고, 실제로 관제사가 다음 턴에서 그 두 가지를 줬습니다(40마일 단축 / 중등도 난류).
  P2A-Q3 와 P2B-Q4 에서는 물어야 할 값을 정확히 고르셨습니다. **세 번 중 두 번은 정확합니다.**

---

**P2A-Q10** ⚠️
문제 : ☞ Listen to the controller, state your decision with a reason, and make any request you need.
Departure : HL123, direct SIMUN saves you about 40 track miles, but it takes you through an area of moderate turbulence at your level.
내 답안 : if able request vector to simun to avoid moderate turbulence hl123
** 교정 답안 : HL123, we will take direct SIMUN for the 40 miles, but request a higher level to stay out of the moderate turbulence.
- 누락된 필수 readback 요소 : **① 결정 ② 이유** — 지시문의 `state your decision with a reason`
- 표준교신용어 오류 : `request vector to ~` 는 명사구로 정확합니다
- 코멘트 : 난류를 피하려는 의도는 읽힙니다. 그런데 **결정이 분명하지 않고, 요청이 상황과 어긋납니다** — SIMUN 으로 직항하면 **그 난류 구역을 지나갑니다.** "SIMUN 으로 벡터를 달라"면서 "난류를 피하겠다"는 것은 서로 충돌합니다.
  이 문항은 답이 하나가 아닙니다. **수락**(40마일을 얻고, 대신 고도를 바꿔 난류를 피함)도 **거부**(항로 유지)도 정답이 될 수 있습니다. 평가하는 것은 **어느 쪽을 골랐는지와 그 이유를 말했는지**입니다. 지금은 둘 다 없습니다.

---

**P2A-Q11** ⚠️ (90초 Follow-up)
문제 : Follow up question. In this situation, Ground offered you a different runway while an aircraft ahead of you was unserviceable. What did you need to know before you accepted it, and why? In your role as a pilot, how do you decide whether a runway change is worth taking? Give an example of a runway change you would turn down.
내 답안 : As a pilot , runway distance is the most important factor to decide whether to use or not , if the runway is short , it has many dangerous factors in some area , in this case , the aircraft is unservisable , we have to use the longest runway so all we have to do is just turn down and use the original one
** 교정 답안 : In this situation, what I needed to know was the takeoff distance available on runway 32R, because our required takeoff distance that day was 2,900 metres. Ground told me it was 3,200 metres and dry, which was enough, so I accepted the change — and it also put us first for departure instead of waiting behind the unserviceable A350. In my role as a pilot, runway distance is the most important factor in deciding whether a runway change is worth taking. If the runway is short, a wet surface or a tailwind can take away what little margin is left. For example, I would turn down a runway change that saved me time but left me with less than my required distance — say a 2,400 metre runway when I need 2,900. Saving ten minutes is never worth starting a takeoff you cannot stop.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **②(조종사로서의 판단 기준)에는 답했습니다** — "활주로 길이가 가장 중요한 요소"는 정확하고, 이 문항의 핵심을 짚은 것입니다. 그런데 세 부분 중 하나만 답했습니다.
  ① **`In this situation, ... what did you need to know before you accepted it`** 에 대한 답이 없습니다. "가용 이륙거리를 알아야 했다, 필요한 2,900 미터와 비교해야 하니까"가 답입니다.
  ③ **`Give an example.` 이 또 없습니다** — 응답한 세트 기준 **여섯 세트 연속**입니다. 경험이 없어도 `For example, I would turn down ~` 가정형으로 답하면 됩니다.
  그리고 **상황을 잘못 읽으셨습니다** : `the aircraft is unservisable` — 고장난 것은 **앞의 A350** 이지 우리 기체가 아닙니다. 그래서 `we have to use the longest runway so all we have to do is just turn down and use the original one` 이 성립하지 않습니다. 원래 활주로 34 를 쓰려면 **그 고장난 기체 뒤에서 기다려야** 하고, 32R 은 3,200 미터로 충분했습니다.
  문법 교정 : `it has many dangerous factors in some area`(뜻이 전달되지 않음) → `a wet surface or a tailwind can take away what little margin is left`, `all we have to do is just turn down`(공허한 마무리) → 구체적 예시로 교체.

---

## Part Ⅱ TASK B

**P2B-Q1** ✅
문제 : ☞ Contact Cheongju Approach and report your position.
(Initial Situation : descending through flight level one eight zero for one one thousand, inbound to Cheongju Airport, information Hotel)
내 답안 : chengju approach hl123, decending through fl180 to 110000 information H request inbound for cheongju airport
** 정답 : Cheongju Approach, HL123, descending through flight level 180 for 11,000, information Hotel.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `110000` 은 11,000 의 오타로 보입니다(존재하지 않는 고도). `request inbound for ~` 는 위치보고에 불필요합니다
- 코멘트 : **기관·통과고도·ATIS 정보문자까지 최초 컨택의 표준형을 갖췄습니다.** FL180(FL 단위)과 11,000(피트 단위)을 구분한 것도 정확합니다 — 네 세트 연속 안정적입니다. 끝에 붙인 요청은 빼세요. 관제사는 이미 이 기체가 Cheongju 로 오는 것을 알고 있고, 위치보고는 **위치만** 담는 것이 빠릅니다.

---

**P2B-Q2** ✅
문제 : 🖥 [ TAMNA ONE arrival / ILS runway tree four ]
☞ Listen to the controller and give a full readback.
Approach : HL123, Cheongju Approach, descend to 9,000 feet, reduce speed to two one zero knots, expect the TAMNA ONE arrival, ILS runway tree four, Cheongju altimeter two niner niner two.
내 답안 : descnet 9000 , reduce speed 210 , expect tamna 1 arrival ils runway 34 altimeter 2992 hl123
** 정답 : Descend to 9,000 feet, reduce speed to 210 knots, expect the TAMNA ONE arrival, ILS runway 34, altimeter 29.92, HL123.
- 누락된 필수 readback 요소 : 없음 — **다섯 요소 전부**
- 표준교신용어 오류 : 없음 (`descnet` 는 오탈자)
- 코멘트 : **고도·속도·도착절차·활주로·고도계 다섯 요소를 전부 받았습니다. 네 세트 연속**입니다. 긴 지시를 받아 적는 능력은 안정적으로 Level 4 수준입니다.

---

**P2B-Q3** ⚠️
문제 : ☞ Declare an emergency, inform the controller of your situation, and request priority for landing.
(Situation Update : Passing 12,000 feet you get a CARGO SMOKE warning for the aft hold. You have discharged the fire bottles and the suppressant will last about 60 minutes. The cabin is clear and the passengers are not affected.)
내 답안 : mayday mayday mayday hl123 , we noticed cargo smoke after hold in display request priority for landing cheng ju airport
** 교정 답안 : Mayday, mayday, mayday, Cheongju Approach, HL123, cargo smoke warning in the aft hold. We have discharged the fire bottles. Request priority for landing at Cheongju.
- 누락된 필수 readback 요소 : **① 기관명 ② 소화병을 방출했다는 조치 보고**
- 표준교신용어 오류 : 비상선언 순서는 **MAYDAY×3 → 기관명 → 콜사인 → 사건**입니다(`atc-terminology.md` §8-1). 기관명이 빠졌습니다
- 코멘트 : **MAYDAY×3 · 콜사인 · 사건 · 요청이 다 있습니다.** 이 프로젝트에서 두 번째 비상선언인데 EPTA_03 때보다 분명히 정돈됐습니다.
  빠진 것 중 중요한 것은 **소화병 방출**입니다. 이것은 단순한 부가정보가 아닙니다 — 소화제가 들어갔다는 것은 **약 60분의 시간이 확보됐다**는 뜻이고, 관제사와 소방대의 대응 속도를 결정합니다. 방출 사실을 말하지 않으면 관제사는 불이 번지는 중으로 판단합니다. Situation Update 가 준 세 가지(경고·방출·60분) 중 **하나만 전달**됐습니다.

---

**P2B-Q4** ✅
문제 : 🖥 [ Yangyang / landing distance available ]
☞ Listen to the controller. Tell him what you need to know before you decide.
Approach : HL123, roger. Cheongju is two five minutes from you. Yangyang is only one two minutes if you want to go there instead. What would you like?
내 답안 : we need landing distance available about yangyang airport , we need at least 2900m runway distance hl123
** 정답 : HL123 — before we decide, request the landing distance available at Yangyang. We need 2,900 metres.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **이번 세트에서 가장 잘한 문항입니다.** 물어야 할 값(Yangyang 착륙가용거리)을 정확히 골랐고, **자기 요건(2,900 미터)을 함께 말했습니다.** 그러면 관제사가 숫자를 듣고 **바로 판단해서** 답할 수 있습니다 — 실제로 다음 턴에서 "Yangyang 2,500, Cheongju 3,600" 이라는 답이 돌아왔습니다. 한 번의 교신으로 필요한 것을 다 받아낸 형태이고, 30초 안에 처리해야 하는 상황에서 가장 효율적인 질문입니다.

---

**P2B-Q5** ✅
문제 : ☞ Listen to the controller, then state your decision with a reason.
Approach : HL123, Yangyang has 2,500 metres available. Cheongju has tree,600.
내 답안 : request prority landing for cheong ju , it is fit for our aircraft landing performance hl123
** 교정 답안 : HL123, Yangyang at 2,500 metres is not enough — we need 2,900. We will continue to Cheongju with 3,600. Request priority for landing.
- 누락된 필수 readback 요소 : **숫자 근거** (2,500 vs 필요 2,900)
- 표준교신용어 오류 : 없음
- 코멘트 : **판단이 정확합니다.** 2,500 미터는 필요한 2,900 미터에 못 미치고, Cheongju 의 3,600 미터는 충분합니다. **가까운 공항(12분)의 유혹을 뿌리치고 길이를 기준으로 결정**하셨습니다 — EPTA_06 P2B-Q8 에서는 관제사가 "그 공항은 안 된다"고 말해 준 직후에도 가까운 쪽을 고르셔서 ❌ 를 드렸던 항목입니다. **해결됐습니다.**
  **다만 §P2A-Q4 와 반드시 같이 보세요.** 거기서는 3,200 ≥ 2,900 인데 거부하셨습니다. 두 문항 모두 결론이 **"거부"** 였다는 점이 걸립니다. 숫자를 비교한 결과가 아니라 **거부가 기본 선택**이었을 수 있습니다. 이유를 말할 때 **숫자 두 개를 나란히** 넣으면(`2,500 is not enough — we need 2,900`) 스스로도 비교를 한 번 더 하게 됩니다.

---

**P2B-Q6** ❌
문제 : ☞ Listen to the controller, give a full readback and say your intentions.
Approach : HL123, roger, turn right heading zero tree zero for vectors to the ILS, descend to 5,000 feet. Say your intentions.
내 답안 : turn right heading 240 , expect vector to ils descend 5000 , request priority for landing hl 123
** 정답 : Turn right heading 030 for vectors to the ILS, descend to 5,000 feet, HL123. Our intention is to land at Cheongju off the ILS runway 34, with the fire service standing by.
- 누락된 필수 readback 요소 : **intentions**
- 표준교신용어 오류 : **기수를 030 이 아니라 240 으로** 복창했습니다. **기수는 필수 복창 7항목**이고, 030 과 240 은 거의 정반대 방향입니다
- 코멘트 : 고도 5,000 과 벡터 목적은 정확합니다. 두 가지가 문제입니다.
  ① **기수 값** — `zero tree zero`(030)를 240 으로 받았습니다. 비상 중에 반대 방향으로 돌면 접근 진입이 어긋나고 연료·시간이 더 듭니다. `tree`(=3)가 들어간 숫자였다는 점도 보세요 — test04 계열 표기에서 숫자를 놓친 유일한 지점입니다.
  ② **intentions 가 없습니다.** `request priority for landing` 은 **요청**이지 의도 진술이 아닙니다. 관제사가 `Say your intentions` 라고 **명시해서 물었습니다.** EPTA_06 P2B-Q5 에서 `our intention is to ~` 구문을 처음 쓰셔서 해결로 기록했는데, 이번에 다시 빠졌습니다. **앞으로 무엇을 할 것인지**(어디에 어떤 접근으로 내리고 무엇이 필요한지)를 한 문장으로 말하는 자리입니다.

---

**P2B-Q7** ✅ (출제 결함 있음 — 아래 코멘트 참조)
문제 : ☞ Listen to the controller and provide both pieces of information.
Approach : HL123, two things — say your fuel endurance and the number of persons on board.
내 답안 : we have 1hr fuel on board ,and 134 souls on board hl123
** 정답 (예시 — 값은 이 시점에 주어지지 않았음) : HL123, fuel endurance 1 hour 25 minutes, 180 persons on board.
- 누락된 필수 readback 요소 : 없음 — **두 항목 모두 답했습니다**
- 표준교신용어 오류 : 없음. 연료는 시간 단위, SOB 는 사람 수로 정확히 구분했습니다
- 코멘트 : **구조는 완전합니다.** EPTA_04·05 에서 두 세트 연속 하나만 답했던 항목이고, 이번에도 두 토막을 다 만드셨습니다.
  **값은 감점하지 않았습니다 — 제 출제 결함입니다.** 연료 1시간 25분과 인원 180명을 주는 `Situation Update` 를 **이 문항 다음에** 배치해서, 답할 시점에는 아직 숫자가 주어지지 않은 상태였습니다. CLAUDE.md §6-1 의 "문제에 수치가 주어지지 않아 응시자가 지어내야 하는 항목은 값 자체를 채점 기준으로 삼지 않는다"에 해당합니다. 다음 세트에서는 fuel/SOB 를 묻기 **전에** 값을 주겠습니다.
  참고로 **P2B-Q8 에서는 1시간 25분·180명을 정확히** 말씀하셨습니다.

---

**P2B-Q8** ⚠️
문제 : ☞ Listen to the controller, give him an update, answer his question, and say what you will need on arrival.
Approach : HL123, the fire service wants to know — do you intend to evacuate on the runway, or will you taxi clear?
(Situation Update : The smoke warning went out about tree minutes after you discharged the bottles. You have 1 hour 25 minutes of fuel, and 172 passengers and 8 crew on board.)
내 답안 : we want taxi clear and we got discharge on the display we have 1hr 25min and 180 souls on board hl123
** 교정 답안 : HL123, the smoke warning went out about tree minutes after we discharged the bottles. We have 1 hour 25 minutes of fuel and 180 persons on board. We will taxi clear — request the fire service to meet us on the runway.
- 누락된 필수 readback 요소 : **① 갱신의 핵심(연기 경고가 꺼졌다) ② 도착 시 필요한 것**
- 표준교신용어 오류 : `we got discharge on the display` 는 **소화병을 방출했다**는 뜻으로 읽힙니다 — 그건 Q3 에서 이미 한 일입니다
- 코멘트 : **질문에 정확히 답했고**(taxi clear), **연료와 인원도 정확합니다**(1시간 25분 / 180명).
  빠진 것이 두 가지입니다. ① 이 턴의 갱신 내용은 **연기 경고가 소멸했다**는 것입니다. 그게 사건이 진정됐다는 신호이고, 소방대의 대기 수준을 결정합니다. ② **`say what you will need on arrival`** — 지시문의 마지막 토막입니다. 화물칸 화재 후 착륙이면 **소방대가 활주로에서 맞아 주기를** 요청해야 합니다. `taxi clear` 하겠다고만 하면 관제사는 지원이 필요 없다는 뜻으로 받을 수 있습니다.
  **복합 지시의 마지막 토막이 빠지는 것은 이 세트에서 네 번째**입니다(P1B-Q1, P2A-Q2, P2A-Q10, 여기).

---

**P2B-Q9** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, descend to 2,500 feet until established, cleared for the ILS runway tree four approach, contact Cheongju Tower on 119.2.
내 답안 : descend 2500 until established cleared ils ruwnay 34 approach contact cheongjus tower 119.2 hl123
** 정답 : Descend to 2,500 feet until established, cleared for the ILS runway 34 approach, contact Cheongju Tower on 119.2, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **고도 · until established · 접근 허가 · 기관 · 주파수 119.2 전부 정확합니다.** 접근 허가 복창은 **네 세트 연속**, 주파수는 이 세트에서 **2/2**(118.1, 119.2)입니다. 최종 클리어런스를 완전히 받는 것은 이제 흔들리지 않습니다.

---

## Part Ⅱ TASK C

**P2C-Q1** ⚠️ (90초)
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
내 답안 : During approach phase , we notice that warning sign , so we request priority to landing , there are 2 options , one is yangyang and the other one is cheong ju , but we cannot accept the yangyang due to landing distance which is short and we cannot use . at the final the warning sign is relased , we can land cheong jus safely
** 교정 답안 : During the approach we got a cargo smoke warning for the aft hold, so we discharged the fire bottles, declared a mayday and requested priority for landing. The controller gave us two options, one was Yangyang and the other was Cheongju, but we could not accept Yangyang because its landing distance was 2,500 metres and we needed 2,900, so it was too short for us. In the end the warning went out about tree minutes after we discharged the bottles, and we landed at Cheongju safely off the ILS.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **전개가 정확하고 판단 근거까지 담겼습니다** — 두 선택지, Yangyang 거부 사유(착륙거리 부족), 경고 소멸, Cheongju 착륙. 특히 **"착륙거리가 짧아서 쓸 수 없었다"** 는 숫자 비교의 결론을 서술에 넣은 것인데, 이것이 이 사건의 핵심 판단입니다.
  빠진 것은 **사건의 이름과 조치**입니다. ① `that warning sign` 만으로는 **무슨 경고인지** 알 수 없습니다 — `cargo smoke warning` 이라는 단어가 한 번도 안 나옵니다. "사건의 성격을 설명하라"는 질문인데 사건명이 없습니다. ② **MAYDAY 선포**와 **소화병 방출**이 빠졌습니다. 이 둘은 이 사건을 다른 사건과 구별 짓는 조치입니다. EPTA_06 에서도 `emergency descent` 라는 단어를 못 써서 같은 지적을 드렸습니다 — **사건을 부르는 이름을 메모에 먼저 적어 두세요.**
  문법 교정 : `we notice` → `we got`(과거), `the warning sign is relased` → `the warning went out`, `we can land` → `we landed`.

---

**P2C-Q2** ⚠️ (90초)
문제 : How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
내 답안 : I think the atc handled it well , as soon as we notice the situation , the atc not only accept our recommendation , but also gave us another option , although the yangyang is short so we cannot use , it helped us something to find , the one thing that can be handled differently is that the atc can know the aircraft type and get know the performance , and give another option to profit for our aircraft , other than that all the atc did is perfect
** 교정 답안 : I think the controller handled it well. As soon as we reported the situation he not only accepted our request for priority, but also gave us another option. Although Yangyang was too short for us to use, offering it still helped us work out where we could go. One thing that could have been handled differently is that the controller could have checked our aircraft type and its performance first, and then offered an option that was actually suitable for us — Yangyang was only 2,500 metres when we needed 2,900, so it was never a real choice. Other than that, everything the controller did was good.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **두 가지가 동시에 됐습니다.** ① **첫 문장의 평가 대상이 관제사입니다** — `I think the atc handled it well`. EPTA_02·05·06 에서 네 세트 연속 조종사부터 평가해 지적했던 항목이고, SAMPLE_01 에 이어 두 세트 연속 해결입니다. ② **`the one thing that can be handled differently is ~` 로 질문 후반부에 답했습니다** — 다섯 세트 연속입니다.
  **지적 내용도 타당합니다** — "관제사가 기종과 성능을 먼저 알고 우리 기체에 맞는 선택지를 줬어야 한다". 실제로 Yangyang 2,500 미터는 이 기체에 애초에 불가능한 선택지였습니다. 조종사 관점에서 나올 수 있는 정확한 문제제기입니다.
  남은 것 두 가지. ① **숫자 근거가 없습니다** — `2,500 when we needed 2,900` 한 토막만 들어가면 의견이 사실에 묶입니다. ② **`profit for our aircraft`** — `profit`(수익)이 아니라 **`suitable`**(적합) 입니다. EPTA_04 P2A-Q4 에서 `red wood is profitable for our aircraft` 로 똑같이 쓰셔서 지적한 단어가 **재발**했습니다.
  문법 교정 : `we notice` → `we reported`(과거), `it helped us something to find` → `it helped us work out where we could go`, `all the atc did is perfect` → `everything the controller did was good`.

---

## ICAO 6개 항목 등급

| 항목 | 등급 | EPTA_06 | 근거 |
|---|---|---|---|
| Pronunciation | **평가 보류** | 보류 | 텍스트 답안이라 판단 근거가 없습니다. 등급 계산에서 제외합니다. (음성으로 푸신 SAMPLE_01 의 발음 소견은 `progress/log.md` 참조) |
| Structure | **Level 3** | 3 | 복창 문항의 구조는 안정적입니다. 자유응답에서 길어지면 깨집니다 — `it has many dangerous factors in some area`, `it helped us something to find`, `all the atc did is perfect`. 시제 혼용이 Task C 양쪽에 걸쳐 반복됩니다(`we notice` ← 과거). |
| Vocabulary | **Level 3** | 3 | `be advised`, `until established`, `souls on board`, `hold short`, MAYDAY×3 은 정확합니다. 반면 **`profit`(←suitable) 재발**(EPTA_04 와 동일), **`cleared to runway`**(←cleared for takeoff), Task C 에서 **`cargo smoke`** 라는 사건명을 끝내 못 썼고, intentions 를 말할 어휘가 나오지 않았습니다. |
| Fluency | **Level 3** | 3 | **32/32 응답, 무응답 0.** Task C 두 문항과 Follow-up 모두 분량을 채웠습니다. 두 세트 연속 무응답이 없습니다. |
| **Comprehension** | **Level 2** | 2 | **이번 등급을 정한 항목이고, 두 세트 연속 Level 2 입니다.** 들은 것을 반대로 쓰거나 값을 바꾼 사례 **6건** : ① **P2A-Q4 — 3,200 ≥ 2,900 인데 거부**(본인이 물어서 받은 값) ② **P1B-Q2 — 기상 회피를 "실수"로 읽고 뇌우 쪽으로 돌아가겠다고 함** ③ **P2B-Q6 — heading 030 을 240 으로**(거의 정반대) ④ **P1A-Q3 — 강하 지시 통째 누락** ⑤ **P1B-Q5 — unable 없이 FL380 상승과 FL340 유지를 동시에 복창**(모순) ⑥ **P2A-Q11 — 고장난 것이 앞의 A350 인데 자기 기체로 오독**. 여기에 P2A-Q9 의 "물은 내용이 상황과 어긋남"이 더해집니다. **반면 P2B-Q4→Q5 쌍은 정확히 해냈습니다** — 물어서 받은 2,500 을 자기 요건 2,900 과 비교해 Yangyang 을 거부했습니다. |
| Interactions | **Level 3** | 3 | 무응답 0, **"결정 전에 묻기" 3문항 전부 수행**(P2A-Q3·Q9, P2B-Q4 — 그중 둘은 물은 내용까지 정확), **`Negative` 첫 단어 2/2**(P1B-Q1·Q2), **기관 호출 5/5 정확**(P1B-Q4·Q6, P2A-Q1·Q8, P2B-Q1), **REQUEST + 명사구**(P1B-Q6), MAYDAY 구조, Task C Q2 주어 해결. 반면 **intentions 누락**(P2B-Q6), **복합 지시의 마지막 토막 4건**(P1B-Q1 대안·P2A-Q2 지연확인·P2A-Q10 이유·P2B-Q8 도착요청), `Give an example` 미수행. |

### 최종 등급 : **Level 2 (불합격)** — EPTA_06 과 동일

**답한 문항의 질은 분명히 올랐습니다.** ✅ 14개로 창작 세트 중 최다이고, 직전 두 세트의
최우선 약점이 여럿 해결됐습니다 :

- **기관 호출 5/5 정확** (EPTA_06 은 3건 오류)
- **`confirm` · `are you able` 질문의 첫 단어 `Negative` 2/2** (SAMPLE_01 은 2회 누락)
- **"결정 전에 묻기" 3문항 전부 수행**, 그중 둘은 물은 내용까지 정확
- **REQUEST + 명사구** (EPTA_06 은 4회 동사구)
- **위치보고 값 정확** (EPTA_06 은 `passing 1,800` 을 3000 으로)
- **Task C Q2 의 평가 대상이 관제사** (네 세트 연속 지적 항목, 두 세트 연속 해결)
- **5요소 복창 4세트 연속 · 접근 허가 4세트 연속 · 주파수 2/2**
- **P2B-Q4→Q5 — 최우선 약점이던 "물어본 답을 결정에 쓰기"를 처음으로 완주**

**그런데 Comprehension 이 두 세트 연속 Level 2 입니다.** 그리고 이번에는 원인이 더
구체적으로 보입니다.

---

## ★ 이번 세트의 핵심 진단 — 비교를 한 것인가, 거부가 기본값이었나

같은 구조의 두 문항이 **정반대 결과**를 냈습니다.

| | P2A-Q4 | P2B-Q5 |
|---|---|---|
| 내 요건 | 이륙 2,900 m | 착륙 2,900 m |
| 관제사가 준 값 | **3,200 m** (충분) | **2,500 m** (부족) |
| 올바른 판단 | **수락** | **거부** |
| 내 결정 | **거부** ❌ | **거부** ✅ |

**두 문항 모두 "거부"를 선택했습니다.** 한쪽은 맞았지만, 맞은 이유가 비교였는지 아니면
거부가 기본 선택이었는지는 이 결과만으로 구분되지 않습니다. 그리고 틀린 쪽(P2A-Q4)에서는
**숫자를 정확히 기억하고 계셨습니다** — `we need at least 2900m` 라고 말씀하셨으니 값은
잡고 있었고, **부등호 방향만 뒤집혔습니다.**

같은 양상이 P1B-Q1 에도 있습니다. 2,400 vs 2,900 은 정확히 거부하셨지만, 거기서도
**"2,400 뿐이다"** 라는 비교는 말하지 않고 **"2,900 이 필요하다"** 까지만 말했습니다.
즉 **자기 요건은 항상 말하는데, 받은 값과 나란히 놓는 단계가 빠집니다.**

**처방은 한 가지입니다.** 관제사가 숫자를 주면 말하기 전에 종이에 두 줄을 적고 부등호를
그으세요.

    받은 값   3,200
    내 한계   2,900      →  3,200 > 2,900  →  OK

그리고 **말할 때 그 두 숫자를 모두 입에 올리세요.** `3,200 is enough — we need 2,900`
처럼요. 숫자 두 개를 소리 내는 순간 스스로도 비교를 한 번 더 하게 되고, 관제사도 근거를
받습니다. 이번 세트에서 제대로 된 유일한 사례가 P2B-Q4 입니다 — 거기서는 질문에 자기
요건(2,900)을 함께 실어 보내셨고, 그래서 그다음 판단이 흔들리지 않았습니다.

---

## 태스크별 총평

**Part Ⅰ Task A** — 네 문항 중 둘이 완전합니다. **접근 허가 복창과 선회 방향**(Q4), **교통정보 제외**(Q1)는 안정적입니다. 나머지 둘은 **지시의 일부를 흘린 것**입니다 — Q2 는 `after departure`, Q3 는 **강하 지시 전체**. 특히 Q3 는 까다로운 교차제한은 맞히고 쉬운 강하 지시를 놓쳤습니다. 지시가 두 토막일 때 **뒤쪽에 집중하다 앞쪽을 흘리는** 양상이 보입니다.

**Part Ⅰ Task B** — 여섯 문항 중 둘이 완전, 둘이 부분, 둘이 실패입니다. **Q6 이 이 세트 최고의 Ⅰ-B 응답**입니다(기관 호출 + 두 가지 질문 + REQUEST 명사구). Q1 의 `Negative` 첫 단어도 해결된 항목입니다. 실패한 둘은 성격이 다릅니다 — **Q2 는 상황 오독**(기상 회피를 실수로 읽음), **Q5 는 `unable` 누락**(대안은 받았는데 선언이 빠져 모순된 교신이 됨). Q5 는 SAMPLE_01 에서 지적한 유형의 **절반이 해결된** 상태입니다.

**Part Ⅱ Task A** — 열한 문항 중 다섯이 완전, 둘이 실패입니다. **Q3 에서 물어야 할 값을 정확히 고르고, Q8 에서 위치보고 값을 정확히 보고한 것**이 성과입니다. 그런데 **Q3 에서 물은 답을 Q4 에서 뒤집었습니다** — 이 세트 최대 오류이고, EPTA_06 P2A-Q4→Q5 와 **정확히 같은 구조의 반복**입니다. Q9 는 복창을 빠뜨리고 물은 내용도 어긋났으며, Q10 은 결정과 이유가 둘 다 없습니다. **Ⅱ-A 후반부(Q9·Q10·Q11)가 이 세트에서 가장 약한 구간**입니다.

**Part Ⅱ Task B** — 아홉 문항 중 다섯이 완전하고 실패가 하나뿐입니다. **이 세트에서 가장 좋은 파트**입니다. 최초 컨택(Q1), 5요소 복창(Q2), **Q4→Q5 의 묻기-결정 쌍**, 최종 클리어런스(Q9)가 모두 성립했습니다. MAYDAY 구조도 정돈됐습니다. 실패한 Q6 은 **기수 030→240** 과 **intentions 누락**이 겹친 것인데, intentions 는 EPTA_06 에서 해결로 기록했다가 **되돌아온** 항목입니다. Q3·Q8 에서는 Situation Update 가 준 정보 중 **일부만 전달**하는 양상이 반복됩니다(소화병 방출 / 경고 소멸).

**Part Ⅱ Task C** — 두 문항 모두 분량을 채웠고 **Q2 가 특히 좋습니다**. 처음으로 **주어가 관제사이면서 동시에** 지적이 구체적이고 타당합니다("기종과 성능을 먼저 확인했어야 한다"). Q1 은 전개와 판단 근거를 담았지만 **사건의 이름(`cargo smoke`)과 핵심 조치(MAYDAY·소화병 방출)가 없습니다** — EPTA_06 에서 `emergency descent` 를 못 쓴 것과 같은 유형입니다.

---

## 다음 학습 과제

### 반복되는 약점 3개

1. **부등호 방향 (최우선, 두 세트 연속)** — 숫자는 정확히 기억하는데 **받은 값과 자기 한계를 나란히 놓는 단계**가 빠집니다. P2A-Q4 는 3,200 ≥ 2,900 인데 거부, P1B-Q1 은 거부는 맞았지만 비교를 말하지 않았습니다. **관제사가 숫자를 주면 `받은 값 / 내 한계` 두 줄을 적고 부등호를 긋고, 말할 때 두 숫자를 모두 입에 올리세요.** P2B-Q4 가 올바른 본보기입니다.

2. **복합 지시의 마지막 토막 (여섯 세트 연속, 이번 4건)** — P1B-Q1 대안 요청, P2A-Q2 지연 확인, P2A-Q10 이유, P2B-Q8 도착 시 필요한 것. 전부 **한 토막만 붙이면 ✅** 였던 문항입니다. 지시문에서 쉼표와 `and` 를 세어 **기능 개수를 먼저 적고**, 답에 그만큼 토막이 있는지 확인하세요. `Give an example.` 은 응답한 세트 기준 **여섯 세트 연속** 미수행입니다.

3. **사건의 이름과 핵심 조치 (두 세트 연속)** — Task C Q1 에서 `cargo smoke` 라는 단어가 한 번도 안 나왔고, MAYDAY 선포와 소화병 방출도 빠졌습니다. EPTA_06 에서는 `emergency descent` 가 없었습니다. **Part Ⅱ B 가 시작될 때 사건 이름을 메모 맨 위에 한 줄로 적어 두고**, 조치를 할 때마다 그 아래 한 단어씩 붙이세요. Task C 는 그 메모를 읽는 문항입니다.

### 외워야 할 표현 5개

| 영어 | 뜻 | 쓰는 상황 |
|---|---|---|
| `3,200 metres is enough — we need 2,900. We will take runway 32R.` | 3,200미터면 충분합니다 — 2,900이 필요합니다. 32R 로 하겠습니다 | **두 숫자를 모두 말하고 결론까지.** 이번 세트 최우선 |
| `Unable flight level 380 due to weight. Maintaining flight level 340 until SIMUN.` | 중량 때문에 FL380 불가. SIMUN 까지 FL340 유지하겠습니다 | ATC 가 `if unable, (대안)` 을 주면 **unable 선언 + 그 대안 수락** |
| `Negative, maintaining heading 290 to stay clear of a build-up.` | 아닙니다, 뇌우를 피하려고 290 유지 중입니다 | `Confirm maintaining ~?` 에는 **NEGATIVE + 실제 상태 + 사유** |
| `Our intention is to land at Cheongju off the ILS runway 34, with the fire service standing by.` | ILS 34 로 Cheongju 에 착륙할 계획이며 소방대 대기를 요청합니다 | `Say your intentions` 에는 **앞으로 할 일**. 요청이 아님 |
| `Behind the departing Cessna Citation, line up and wait runway 32R.` | 출발하는 Cessna Citation 뒤에, 32R 활주로 진입 대기 | **조건을 문장 맨 앞에.** 빠지면 즉시 진입이 된다 |
