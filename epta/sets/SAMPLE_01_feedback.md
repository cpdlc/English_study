# SAMPLE_01 채점 결과 — 2026-10-28 (공식 샘플세트 Ⅰ / 실제 출제 음성 test01, 직접 녹음)

32/32 응답. **이번은 처음으로 실제로 말해서 푼 기록**이라, 지금까지의 타이핑 세트와는
드러나는 것이 다르다.

| | EPTA_04 | EPTA_05 | EPTA_06 | **SAMPLE_01 (음성)** |
|---|---|---|---|---|
| ✅ | 10 | 13 | 11 | **15 (역대 최다)** |
| ⚠️ | 13 | 11 | 14 | **16** |
| ❌ | 9 | 4 | 7 | **1 (역대 최소)** |
| 무응답 | 0 | 3 | 0 | **0** |
| 최종 | Level 3 | Level 2 | Level 2 | **Level 3** |

**❌ 가 1개뿐이다.** 특히 **9요소 클리어런스(P2A-Q3)를 거의 완전히 받아냈고**, Part Ⅱ Task B
의 위치보고·5요소 복창·갱신+요청이 모두 성립했다. 지금까지 창작 세트에서 반복 지적한
"지시문 뒷부분 누락"도 이번에는 눈에 띄게 줄었다.

대신 **음성으로 풀었기 때문에 새로 보이는 것이 있다** — 아래 "발음 소견"을 먼저 읽어 두길
권한다. 자기 음성인식(ASR) 결과가 일관되게 다른 단어로 바뀐 지점들이 있다.

---

## ⚠️ 발음 소견 (등급 계산에서는 제외 — 아래 §등급 표 참조)

`CLAUDE.md` §6-2 에 따라 Pronunciation 은 **"평가 보류"** 로 두고 최종 등급 계산에서 뺐다.
소리를 직접 들을 수는 없기 때문이다. 다만 **당신이 올린 SRT 는 당신 음성을 영어 ASR 이
받아쓴 결과**이므로, 같은 단어가 반복해서 다른 단어로 인식된 지점은 **간접적이지만 실제
신호**다. ASR 성능·마이크·배경음도 원인이 될 수 있으니 참고로만 읽으면 된다.

| 내가 말한 것 | ASR 이 들은 것 | 횟수 | 메모 |
|---|---|---|---|
| **Hotel Lima** | `hotel amount` | **30회 이상 (전 문항)** | 가장 많이 반복됐다. `Lima` 의 장모음 **LEE-mah** 가 흐려지는 것으로 보인다 |
| **request** | `recast` | **5회** | P2B-Q3·Q4·Q5, P2C-Q1 ×2. 어미 `-quest` 의 /st/ 가 떨어진다 |
| **ILS** | `IRS` | 4회 | **L↔R.** 한국어 화자에게 가장 흔한 지점이고, ILS/IRS 는 둘 다 실재하는 장비라 혼동되면 위험하다 |
| **wingtip clearance** | `winter clearance` | 3회 | P2A-Q12, 그리고 Follow-up 2회 |
| **moderate turbulence** | `modern stumplers` | 1회 | 두 단어가 동시에 무너졌다 |
| **instruments** | `interrupt` | 1회 | |
| **ATLAS** | `at loss` | 1회 | 웨이포인트명은 음절을 끊어 읽는 편이 안전하다 |
| **Sovereign** | `server` | 1회 | |
| **runway** | `roommate` | 1회 | |
| **as filed** | `as fly` | 1회 | |
| **start-up** | `starter` | 1회 | |
| **RNAV** | `RLAB` / `RNA` | 2회 | 역시 L↔R |

**우선순위는 두 개다.** ① **`Hotel Lima`** — 매 교신의 첫 단어이고, 관제사가 콜사인을 못
알아들으면 그 뒤를 아무리 잘 말해도 자기 호출이 아닌 줄 안다. ② **`request`** — 이 시험에서
가장 많이 쓰는 동사다. 두 단어만 또박또박 집중해도 인식률이 크게 달라질 것이다.

**아래 문항별 채점에서는 ASR 오인으로 판단되는 것을 전부 감점하지 않았다**
(`CLAUDE.md` §6-1-1). 단어 자체를 잘못 고른 경우만 감점했다.

---

## Part Ⅰ TASK A

**P1A-Q1** ✅
문제 : ATC : HL123, clear direct ATLAS.
내 답안 : Clear, direct, at loss, hotel amount 123.
** 정답 : Clear direct ATLAS, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음 (`at loss` 는 ATLAS 의 ASR 오인으로 보고 감점하지 않았습니다)
- 코멘트 : 짧은 지시를 그대로 받았습니다. 웨이포인트명은 **음절을 끊어서** 읽으면(`AT-LAS`) 관제사도 ASR 도 놓치지 않습니다.

---

**P1A-Q2** ⚠️
문제 : ATC : HL123, stop climb at flight level 260 due to traffic.
내 답안 : Step, climb, flight level 260 due to traffic, hotel amount 123.
** 정답 : Stop climb at flight level 260, HL123.
- 누락된 필수 readback 요소 : 없음. 고도 FL260 정확
- 표준교신용어 오류 : **`step climb` 인지 `stop climb` 인지 구분되지 않습니다.** 두 표현은 전혀 다른 지시입니다 — `stop climb` 은 "상승을 거기서 멈춰라", `step climb` 은 "단계적으로 더 올라가라"입니다. 반대 방향이라 오탈자 예외로 넘길 수 없습니다
- 코멘트 : `due to traffic` 은 복창 불필요한 부가정보지만 넣어도 감점되지 않습니다. 실제로 `stop` 이라고 말했다면 이 문항은 ✅ 입니다 — 다만 **ASR 이 `step` 으로 들었다는 것 자체가 /p/ 가 /t/ 로 들릴 만큼 흐렸다는 신호**이므로 ⚠️ 로 두었습니다. 관제사가 이걸 거꾸로 들으면 상승 금지 지시가 상승 허가로 뒤집힙니다.

---

**P1A-Q3** ✅
문제 : ATC : HL123, caution wake turbulence, runway 32 cleared for takeoff.
내 답안 : Roger, clear for take-off runway 32, hotel amount 123.
** 정답 : Runway 32 cleared for takeoff, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음. `Roger` 뒤에 내용이 다 있으므로 단독 오용이 아닙니다 — 다만 불필요합니다
- 코멘트 : **`caution wake turbulence` 를 복창에서 제외한 판단이 정확합니다.** 이것이 이 세트의 "복창 필수요소만 받고 부가정보는 빼는" 문항이었고, 창작 세트 네 번에 걸쳐 안정적이던 판단이 여기서도 유지됐습니다.

---

**P1A-Q4** ✅
문제 : ATC : HL123, start up and pushback approved, long pushback, tail east until abeam gate 34.
내 답안 : Starter approved, long pushback, tail east until abeam, gate 34, hotel amount 123.
** 정답 : Start up and pushback approved, long pushback, tail east until abeam gate 34, HL123.
- 누락된 필수 readback 요소 : 없음 — **네 요소(승인·long pushback·tail east·abeam gate 34) 전부**
- 표준교신용어 오류 : 없음 (`starter` 는 `start-up` 의 ASR 오인)
- 코멘트 : 지상 지시 중 가장 요소가 많은 문항인데 **푸시백 방향(tail east)과 기준점(abeam gate 34)을 둘 다** 받았습니다. EPTA_06 P2A-Q2 에서 `face south` 를 빠뜨렸던 바로 그 항목입니다 — 여기서는 됐습니다.

---

## Part Ⅰ TASK B

**P1B-Q1** ✅
문제 : During your takeoff roll, you noticed bird activity at the end of the runway. Make a report after airborne to ATC.
ATC : HL123, go ahead.
내 답안 : Control, hotel amount 123. Be advised, birds on the runway. Correction, birds on the end of the runway, hotel amount 123.
** 교정 답안 : HL123, be advised — during our takeoff roll we saw bird activity at the end of the runway.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **스스로 `Correction` 을 쓰고 정정했습니다.** "활주로에 조류"에서 "활주로 **끝**에 조류"로 바로잡은 것인데, 위치가 달라지면 관제사의 조치(활주로 폐쇄 vs 끝단 경고)가 달라지므로 의미 있는 정정입니다. 실제 교신에서 가장 권장되는 습관이고, 이 시험에서 가점 요소입니다. 더 붙일 것이 있다면 **언제 봤는지**(`during our takeoff roll`) — 지금 보인다는 뜻으로 오해될 수 있습니다.

---

**P1B-Q2** ❌
문제 : While maintaining flight level 310, you are at Mach 0.81, from previous ATC instructions. You are also approaching the boundary of the FIR. Now ATC contacts you. Respond accordingly.
ATC : HL123, descend and maintain flight level 220. Contact Tokyo Control on 121.65. Report speed.
내 답안 : Descend and maintain, flight level 290. Contact Tokyo Control, 121.65. Speed, Mach 81, hotel amount 123.
** 정답 : Descend and maintain flight level 220, contact Tokyo Control on 121.65, speed Mach decimal 81, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **지시 고도를 FL220 이 아니라 FL290 으로** 복창했습니다. **고도는 필수 복창 7항목**입니다
- 코멘트 : 주파수 121.65 와 속도 Mach 0.81 은 정확합니다 — 세 요소 중 둘은 받았습니다. 그런데 **틀린 하나가 고도**입니다. FL290 으로 복창하면 관제사가 정정해 주지 않는 한 7,000 피트 차이로 내려가고, 다른 항공기와의 수직 분리가 깨집니다. 이 세트에서 유일한 ❌ 이고, 이유는 **값 하나**입니다. 220 과 290 은 음성으로도 비슷하지 않으니, **받아 적을 때 숫자를 먼저 쓰고 복창 직전에 그것만 한 번 더 보는** 습관이 필요합니다.

---

**P1B-Q3** ⚠️
문제 : You are cruising at flight level 210. You have encountered moderate turbulence for 3 minutes with an altitude gain of around 200 feet. Now ATC contacts you. Respond accordingly.
ATC : HL123, request flight condition.
내 답안 : 3-minute, modern stumplers at flight level 210, hotel amount 123.
** 교정 답안 : HL123, we have had moderate turbulence for 3 minutes at flight level 210, with an altitude gain of about 200 feet.
- 누락된 필수 readback 요소 : **고도 변화 약 200피트** — 지문이 준 세 값(난류 등급·지속 3분·고도 변화 200피트) 중 하나가 빠졌습니다
- 표준교신용어 오류 : 없음 (`modern stumplers` 는 `moderate turbulence` 의 ASR 오인)
- 코멘트 : 난류 등급과 지속 시간, 고도는 담았습니다. 빠진 **200피트가 이 보고에서 가장 쓸모 있는 값**입니다 — 관제사는 고도 변화량으로 난류의 실제 세기를 판단하고 다른 항공기에 전달합니다. 그리고 동사가 없어 문장이 명사 나열로 끝났습니다 : `we have had moderate turbulence for 3 minutes` 처럼 **경험을 서술하는 동사**를 앞에 세우세요.

---

**P1B-Q4** ⚠️
문제 : After becoming airborne, you contact Departure Control. ATC gives you climbing restrictions to cross Johnson VOR, but you cannot comply due to performance reasons. Acknowledge and respond accordingly.
ATC : HL123, climb and maintain flight level 210. Cross Johnson VOR at or above flight level 150. If unable, maintain flight level 130 until Johnson VOR.
내 답안 : Unable to climb and maintain, flight level 210 due to aircraft performance. Request, climb, climb to flight level 130 until Johnson VOR, hotel amount 123.
** 교정 답안 : HL123, climbing to flight level 210. Unable to cross Johnson VOR at or above flight level 150 due to aircraft performance — we will maintain flight level 130 until Johnson VOR.
- 누락된 필수 readback 요소 : **상승 지시 FL210 자체의 복창**
- 표준교신용어 오류 : **못 하는 대상을 잘못 지목했습니다.** 할 수 없는 것은 **FL210 상승**이 아니라 **Johnson VOR 을 FL150 이상으로 통과하는 것**입니다. FL210 까지는 올라갈 수 있고, 다만 VOR 전에 FL150 에 도달하지 못하는 것입니다. 그리고 ATC 가 이미 `if unable, maintain FL130 until Johnson VOR` 로 **대안을 줬으므로** 그것은 요청(`request`)이 아니라 **수락**해야 합니다
- 코멘트 : `unable` + 사유(`due to aircraft performance`)를 쓴 것과 FL130·Johnson VOR 을 짚은 것은 정확합니다 — **골격은 맞습니다.** 이 문항은 `exam-spec.md` §2-3 에 나오는 **"ATC 가 먼저 contingency 를 주는 유형"**이고, 조종사가 스스로 대안을 요청하는 "unable + request" 유형과 다릅니다. ATC 가 `if unable, (대안)` 을 말해 주면 **그 대안을 그대로 복창하는 것이 답**입니다. 지금처럼 `request` 를 붙이면 관제사는 "방금 내가 준 걸 왜 다시 요청하지?"가 됩니다.

---

**P1B-Q5** ⚠️
문제 : ATC instructs you to make a 10-degree right turn for traffic separation. You misunderstood the instruction and made a 10-degree left turn. Now ATC contacts you. Respond accordingly.
ATC : HL123, confirm maintaining 10 degrees to the right of your route?
내 답안 : We set 10 degree left by mistake. Turning right, 10 degree, hotel amount 123.
** 정답 : Negative, HL123 — we turned 10 degrees left by mistake. Now turning right 10 degrees.
- 누락된 필수 readback 요소 : **`NEGATIVE`**
- 표준교신용어 오류 : **`confirm ~?` 질문에는 AFFIRM 또는 NEGATIVE 가 첫 단어로 와야 합니다** (`atc-terminology.md` §11). 지금은 설명부터 시작합니다
- 코멘트 : **정정 3단 구조(틀린 값 → 실수 인정 → 지금 하는 조치)가 완전합니다.** 창작 세트 다섯 번에 걸쳐 완성해 온 구조가 여기서도 나왔습니다. 빠진 것은 **첫 단어 하나**입니다. 관제사는 분리를 계산하는 중이라 `NEGATIVE` 를 먼저 들어야 "지금 오른쪽이 아니구나"를 즉시 알 수 있습니다. 설명부터 들으면 끝까지 듣고 나서야 판단이 섭니다. 이 문항은 `Negative` 네 글자만 앞에 붙이면 ✅ 입니다.

---

**P1B-Q6** ⚠️
문제 : During an en-route phase of the flight, you are instructed to pass FRISO at 0100 Zulu, but the flight computer shows that, even at maximum speed, the aircraft will not cross FRISO until 0103 Zulu. Now ATC contacts you. Respond accordingly.
ATC : HL123, cross FRISO at or before 0100 Zulu.
내 답안 : Unable to arrive at Frizzle 0100 Zulu, even if we speed up the max speed, it will arrive at 0100 Zulu. Hotel amount 123.
** 교정 답안 : Unable to cross FRISO at 0100 Zulu, HL123 — even at maximum speed our estimate is 0103 Zulu. Request a later time or direct routing.
- 누락된 필수 readback 요소 : **① 실제 예상 시각 0103 ② 대안 요청**
- 표준교신용어 오류 : 없음
- 코멘트 : **`unable` + 사유 구조가 정확하고 `even if we speed up the max speed` 로 최대 속도까지 썼다는 것까지 전달했습니다.** 그런데 **마지막 숫자가 0103 이 아니라 0100 으로 나왔습니다.** 그러면 문장이 "0100 에 못 간다, 최대로 가도 0100 에 도착한다"가 되어 **스스로 모순**이 됩니다 — 관제사는 "그럼 되는 거 아닌가?"로 듣습니다. 이 문항의 전부가 **0103 이라는 세 글자**입니다. 그리고 못 하겠다고만 하면 관제사가 다음 수를 못 내므로 `request a later time` 같은 대안이 한 토막 붙어야 완성됩니다.

---

## Part Ⅱ TASK A

**P2A-Q1** ⚠️
문제 : ☞ Contact Clearance Control and make a request.
(Initial Situation : You are ready for clearance to Smith Airport. You may need to inquire about additional information.)
내 답안 : Hotel amount 123. Smith ground, hotel amount 123. Request clearance to Smith airport.
** 교정 답안 : Smith Clearance, HL123 at gate Alpha 89, request clearance to Smith Airport.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **기관 호출이 `Smith Ground` 입니다** — 지시문은 `Contact Clearance Control` 입니다. 클리어런스를 받는 곳(Clearance Delivery)과 지상 유도를 주는 곳(Ground)은 다른 주파수입니다
- 코멘트 : 요청 자체(`request clearance to Smith Airport`)는 **REQUEST + 명사구**로 정확합니다 — 창작 세트에서 네 번 반복 지적한 항목인데 여기서는 맞았습니다. 틀린 것은 **누구를 부르는가**입니다. 지시문이 기관명을 직접 알려줬으니, **지시문의 기관명을 그대로 첫 단어로 쓰는 것**을 규칙으로 잡으세요. 콜사인을 두 번 말한 것도 정리하면 좋습니다.

---

**P2A-Q2** ✅
문제 : ☞ Listen to the controller's message. Advise that you are ready.
ATC : HL123, for route revision. Advise when you're ready to copy.
내 답안 : Ready to copy, hotel amount 123.
** 정답 : Ready to copy, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **`Ready to copy` 는 이 상황의 정확한 표준 표현입니다.** 짧고 정확합니다 — 20~30초 문항에서 길게 말하는 것이 항상 나은 게 아니라는 좋은 예입니다.

---

**P2A-Q3** ✅
문제 : ☞ Listen to the controller and give a full readback.
ATC : HL123, cleared to Smith Airport, HAPIE 3 departure. Expect fly runway heading until the Smith 1.5 DME, and then a right turn heading 100 to HAPIE, then as filed. Maintain 5,000. Expect flight level 350, 10 minutes after departure. Squawk 1766.
내 답안 : Clear to Smith airport. Happy 3 departure. Expect, flight runway heading until 1.5 DME. Then right turn 100 happy. As fly. maintain 5000. Expect, flight level 350. 10 minutes after departure. Squawk 1766, hotel amount 123.
** 정답 : Cleared to Smith Airport, HAPIE 3 departure, fly runway heading until the Smith 1.5 DME, then right turn heading 100 to HAPIE, then as filed, maintain 5,000, expect flight level 350 10 minutes after departure, squawk 1766, HL123.
- 누락된 필수 readback 요소 : 없음 — **아홉 요소 전부 받았습니다**
- 표준교신용어 오류 : `Clear` → `Cleared`. `as fly` → `as filed`(ASR 오인으로 보고 감점하지 않았습니다). `Smith 1.5 DME` 에서 `Smith` 가 빠졌습니다(경미)
- 코멘트 : **이 세트에서, 그리고 지금까지 푼 일곱 세트 전체에서 가장 잘한 문항입니다.** 목적지·SID·초기 기수·DME 전환점·우선회 기수 100·HAPIE·as filed·5,000·FL350·10분 후·squawk 1766 — **열한 개 토막을 순서대로** 받아냈습니다. 창작 세트에서 다룬 가장 긴 클리어런스가 5요소였는데, 실제 샘플세트의 9요소를 이렇게 받을 수 있다는 것은 **받아적기 능력 자체는 Level 4 이상**이라는 뜻입니다. 고칠 것은 `Cleared` 한 단어입니다.

---

**P2A-Q4** ✅
문제 : ☞ Listen to the controller's message. Respond accordingly, and inquire how long it will take.
ATC : HL123, readback is correct. Hold for release.
내 답안 : Hold for release. And how long it will take hotel amount 123?
** 교정 답안 : Holding for release, HL123. How long will that take?
- 누락된 필수 readback 요소 : 없음 — **복창 + 문의 두 기능 모두**
- 표준교신용어 오류 : 없음. 문법 : `how long it will take` → **`how long will it take?`**(의문문 어순)
- 코멘트 : **`inquire` 지시를 수행했습니다.** EPTA_05 에서 세 번 다 못 했고 EPTA_06 에서 겨우 해낸 항목인데, 여기서는 자연스럽게 나왔습니다. 고칠 것은 어순 하나입니다 — 의문문에서는 **조동사가 주어 앞으로** 옵니다. 지금 형태는 간접의문문(`I wonder how long it will take`)의 어순이라, 단독으로 쓰면 질문으로 들리지 않을 수 있습니다.

---

**P2A-Q5** ⚠️
문제 : ☞ Contact Apron and request pushback and startup.
(Situation Update : You are ready for pushback and startup. You are at gate Alpha 89.)
내 답안 : Ground, hotel amount 123. Request pushback and start up at gate alpha 890, hotel amount 123.
** 정답 : Apron, HL123 at gate Alpha 89, request pushback and startup.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **① 기관 호출이 `Ground` 입니다** — 지시문은 `Contact Apron` 입니다(Q1 과 같은 유형의 반복). **② 게이트가 Alpha 89 인데 `alpha 890`** 으로 말했습니다
- 코멘트 : 요청 내용은 정확합니다. 두 가지가 어긋났고 **둘 다 지문에 적혀 있던 값**입니다. 게이트 번호는 지상 조업·견인이 어디로 가야 하는지를 정하므로 자릿수가 중요합니다 — `89` 와 `890` 은 다른 주기장입니다. **지시문의 기관명과 지문의 숫자, 이 두 개만 복창 직전에 확인**하면 이 문항은 ✅ 였습니다.

---

**P2A-Q6** ⚠️
문제 : ☞ Listen to the controller's response and give a full readback.
ATC : HL123, cleared pushback and startup. And once the tug crew gets you established on lane Alpha, if they can just pull you forward so I can push behind you at gate 87, I'd appreciate it.
내 답안 : Roger, clear pushback and start up route at gate 87, hotel amount 123.
** 교정 답안 : Cleared pushback and startup, HL123. And once we are established on lane Alpha we will have the tug pull us forward so you can push the aircraft at gate 87.
- 누락된 필수 readback 요소 : **관제사가 부탁한 내용에 대한 동의** — lane Alpha 에 정렬된 뒤 **앞으로 더 끌어달라**는 요청입니다
- 표준교신용어 오류 : `clear` → `cleared`
- 코멘트 : 푸시백·시동 허가는 받았습니다. 그런데 이 턴의 핵심은 뒤쪽 30단어, **비표준 구어체로 들어온 부탁**입니다 — `if they can just pull you forward so I can push behind you at gate 87, I'd appreciate it`. 답안의 `start up route at gate 87` 은 그 내용을 전달하지 못합니다. 관제사는 **gate 87 항공기를 밀어낼 공간이 생기는지**를 알아야 다음 푸시백을 승인할 수 있습니다. `exam-spec.md` §4-5 에 정리한 대로 **실제 출제 ATC 는 이렇게 말하고, 그것을 알아듣는지가 Comprehension 평가 지점**입니다. `we will pull forward on lane Alpha` 한 토막만 있으면 됩니다.

---

**P2A-Q7** ✅
문제 : ☞ Contact Apron, report the problem, and request what you need.
(Situation Update : You are still on the apron and realize that you have too much fuel. You will need to burn some off, or possibly defuel if able.)
내 답안 : Ground, hotel amount 123. Ground, hotel amount 123. We have too much fuel. So, request holding spot to burn some up or defuel if able.
** 교정 답안 : Apron, HL123 — we have too much fuel on board. Request a holding spot to burn some off, or defueling if that is available.
- 누락된 필수 readback 요소 : 없음 — **문제 보고 + 요청 + 대안 두 가지 전부**
- 표준교신용어 오류 : 기관 호출 `Ground`(→ Apron). `burn some up` → `burn some off`
- 코멘트 : **세 기능을 다 수행했고, 대안을 두 개 제시한 것이 특히 좋습니다**(`holding spot to burn off` 또는 `defuel if able`). 관제사가 바로 선택할 수 있는 형태입니다 — 창작 세트에서 "unable + 사유 + 대안" 3단을 연습한 것이 여기서 응용됐습니다. `request a holding spot` 도 REQUEST + 명사구로 정확합니다. 콜사인을 두 번 말한 것만 정리하면 됩니다.

---

**P2A-Q8** ✅
문제 : ☞ Listen to the controller's message and respond accordingly.
ATC : HL123, roger. How long will that take? *(자막 손상 구간 — exam-spec §4-3 복원)*
내 답안 : If defueling, I think it takes about 30 minutes, hotel amount 123.
** 교정 답안 : HL123, if we defuel it will take about 30 minutes.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **조건을 붙여 답한 것이 적절합니다** — 소모냐 디퓨얼링이냐에 따라 시간이 달라지는데, `if defueling` 으로 전제를 밝히고 숫자를 줬습니다. 관제사가 그 전제를 보고 판단할 수 있습니다. (이 문항의 ATC 대사는 자막이 손상돼 복원한 것이므로, 원문과 조금 다를 수 있습니다.)

---

**P2A-Q9** ⚠️
문제 : ☞ Listen to the controller's message and respond accordingly.
ATC : HL123, defueling is not available here, and we are looking at about a 30-minute hold for you. *(자막 손상 구간 — exam-spec §4-3 복원)*
내 답안 : Request hold due to 30 minutes hold. Unexpected delay.
** 교정 답안 : Roger, HL123 — we will take the 30-minute hold and burn the fuel off. We will advise our company of the delay.
- 누락된 필수 readback 요소 : **콜사인**
- 표준교신용어 오류 : `request hold due to 30 minutes hold` — **문장이 자기를 가리킵니다.** 관제사가 이미 30분 홀드를 통보했으므로 요청할 것이 아니라 **수락**해야 합니다(P1B-Q4 와 같은 유형의 반복)
- 코멘트 : `unexpected delay` 로 상황을 한 단어로 짚은 것은 괜찮습니다. 문제는 **관제사가 준 것을 다시 요청하는 형태**가 이 세트에서 두 번(P1B-Q4, 여기) 나왔다는 것입니다. 구분 기준은 간단합니다 — **관제사가 이미 말한 것이면 복창/수락, 관제사가 모르는 것이면 요청**입니다. 그리고 콜사인은 모든 송신에 들어가야 합니다.

---

**P2A-Q10** ✅
문제 : ☞ Contact Ground and request to taxi.
(Situation Update : You have burnt off your extra fuel and are now holding short of Golf with information Alpha.)
내 답안 : Ground, hotel amount 123. Hold short of golf with information alpha. Request taxi to runway.
** 정답 : Ground, HL123, holding short of Golf with information Alpha, request taxi.
- 누락된 필수 readback 요소 : 없음 — **기관·위치·정보문자·요청 네 요소 전부**
- 표준교신용어 오류 : `Hold short` → `holding short`(현재 상태 보고이므로 진행형). `request taxi to runway` — 아직 활주로를 모르므로 `request taxi` 로 끝내는 편이 정확합니다
- 코멘트 : **ATIS 정보문자를 함께 준 것이 정확합니다.** 지상 교신에서 위치 + 정보문자는 관제사가 중복 설명을 생략할 수 있게 해 주는 요소이고, 이번 세트 P2B-Q1 에서도 같은 판단이 나왔습니다. 이 문항은 기관 호출도 맞았습니다(지시문이 `Contact Ground` 였습니다).

---

**P2A-Q11** ✅
문제 : ☞ Listen to the controller's response and give a full readback.
Ground : HL123, Ground, runway 13 left, taxi left on Golf, cross runway 22 right, follow the Gulfstream passing left to right.
내 답안 : Runway 13 left. Runway 13 left. Turn left on golf. Cross runway 22 right. Follow golf stream. Pass to right. Hotel amount 123.
** 정답 : Runway 13 left, taxi left on Golf, cross runway 22 right, follow the Gulfstream passing left to right, HL123.
- 누락된 필수 readback 요소 : 없음 — **사용활주로·유도로·활주로 횡단·추종 대상 전부**
- 표준교신용어 오류 : `Turn left on golf` → `taxi left on Golf`(경미). `Pass to right` 는 `passing left to right` 의 일부만 받았습니다
- 코멘트 : **활주로 횡단 허가(`cross runway 22 right`)를 정확히 복창했습니다** — 활주로 관련 지시는 필수 복창 7항목 중 가장 무거운 항목입니다. 추종 대상(Gulfstream)도 받았습니다. EPTA_06 P1A-Q1 에서 `the Dash 8` 을 빠뜨렸던 항목이 여기서는 됐습니다. 활주로를 두 번 말한 것은 확인 습관으로 보이는데, 실제 교신에서는 한 번으로 충분합니다.

---

**P2A-Q12** ⚠️
문제 : ☞ Listen to the controller's message. Respond accordingly and request assistance.
Ground : HL123, it appears the Gulfstream blew a tire. Are you able to continue straight on Golf 2, then left on Hotel?
내 답안 : I'm not sure we can get the winter clearance on golf too. So, request hold. Request hold for the golf stream pass. Hotel amount 123.
** 교정 답안 : Negative, HL123 — we are not sure of our wingtip clearance on Golf 2. Request a marshaller or a wing walker to guide us past the Gulfstream.
- 누락된 필수 readback 요소 : **① `NEGATIVE` ② 지시문이 요구한 `assistance` 요청**
- 표준교신용어 오류 : **`are you able ~?` 에는 AFFIRM/NEGATIVE** 가 첫 단어로 와야 합니다. `I'm not sure` 는 표준 응답이 아닙니다(P1B-Q5 와 같은 유형의 반복)
- 코멘트 : **걱정한 내용이 정확합니다** — Golf 2 에서 **윙팁 간격**(wingtip clearance)이 확보되는지가 실제로 이 상황의 쟁점입니다. 상황 파악은 됐습니다. 두 가지가 어긋났습니다. ① 첫 단어 — `confirm`/`are you able` 질문에 AFFIRM/NEGATIVE 를 빼먹은 것이 이 세트에서 두 번입니다. ② **지시문이 `request assistance` 라고 명시했는데 `request hold` 를 했습니다.** 홀드는 멈추는 것이고, assistance 는 **마셜러·윙워커 같은 사람을 보내 달라**는 것입니다. 멈춰 있어도 윙팁 간격은 확인되지 않습니다 — 누군가 봐 줘야 지나갈 수 있습니다.

---

**P2A-Q13** ⚠️ (90초 Follow-up)
문제 : You have just finished Task A, as the pilot of Hotel Lima one two three. In this situation, what problem did you discover while on the ramp, and how did you resolve that problem?
내 답안 : First, I think there are a few situations about the... there are a lot of fuel. So, we have to defuel on the runway. Because our company always check the time and make the fuel appropriately to go to the destination. Second, on the spot golf, there are some unexpected accidents will happen if the winter clearance is not... Sorry. Correction. There will be a winter clearance... Cannot be winter clearance on the golf. So, I think at the time, I will ask the controller to deroute another taxiway. I think it takes some fuel, but all we have to do is to make the safe for our passenger and our company.
** 교정 답안 : First, we had too much fuel on board, so we had to defuel on the ramp — or burn it off, because defueling was not available there. Our company plans the fuel for the destination, so carrying extra put us over our limit for departure. Second, on taxiway Golf there was a risk of an accident because we could not be sure of our wingtip clearance past the Gulfstream that had blown a tire. So at that point I asked the controller to re-route us onto another taxiway. That costs some fuel and some time, but all we have to do is keep our passengers and the aircraft safe.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **두 문제를 `First` / `Second` 로 나눠 구조를 잡은 것이 좋습니다** — 90초 자유응답에서 가장 쓸모 있는 틀이고, EPTA_06 Follow-up 의 나열식 답변보다 분명히 낫습니다. 그리고 **스스로 `Sorry. Correction.` 하고 고쳤습니다** — 구술시험에서 감점 요소가 아니라 오히려 정상적인 화법입니다.
  고칠 것은 **사실 하나**입니다 : `we have to defuel on the runway` — 디퓨얼링은 **활주로가 아니라 램프(주기장)에서** 합니다. 그리고 이 상황에서는 디퓨얼링이 불가해서 **연료를 소모**한 것이 실제 해결이었습니다. 질문이 `how did you resolve that problem` 이므로 **30분 홀드로 연료를 소모했다**가 핵심 답입니다.
  문법 교정 : `there are a lot of fuel` → `we had too much fuel`, `there are some unexpected accidents will happen` → `there was a risk of an accident`(동사가 두 개 겹쳤습니다), `deroute another taxiway` → `re-route us onto another taxiway`, `to make the safe for ~` → `to keep ~ safe`.

---

## Part Ⅱ TASK B

**P2B-Q1** ✅
문제 : ☞ Contact Public Approach and report your position.
(Initial Situation : descending through flight level 180 to 11,000, approaching Public Airport, ATIS information Oscar)
내 답안 : Public approach. Hotel amount 123. Descending through flight level 180 to 11000. Information Oscar.
** 정답 : Public Approach, HL123, descending through flight level 180 for 11,000, information Oscar.
- 누락된 필수 readback 요소 : 없음 — **기관·통과고도·목표고도·ATIS 네 요소 전부**
- 표준교신용어 오류 : `to 11000` → `for 11,000`(경미)
- 코멘트 : **최초 컨택의 표준형을 완전히 갖췄습니다.** FL180(FL 단위)과 11,000(피트 단위)을 섞지 않은 것, ATIS 정보문자를 붙인 것 모두 정확합니다. 창작 세트 네 번 연속 안정적이던 항목이 실제 세트에서도 그대로 나왔습니다.

---

**P2B-Q2** ✅
문제 : ☞ Listen to the controller's response and respond accordingly.
Approach : HL123, Public Approach, good afternoon. Descend and maintain 6,000, reduce speed to 210 and expect Dixie 1 arrival runway 23 transition, followed by ILS 23.
내 답안 : Descent and maintain 6000. Reduce speed to 210. Expect Dixie 1. Arrival roommate 23. Transition followed by IRS 23. Hotel amount 123.
** 정답 : Descend and maintain 6,000, reduce speed to 210, expect Dixie 1 arrival runway 23 transition, followed by ILS 23, HL123.
- 누락된 필수 readback 요소 : 없음 — **다섯 요소 전부**
- 표준교신용어 오류 : `Descent`(명사) → `Descend`(동사). `roommate`·`IRS` 는 ASR 오인으로 보고 감점하지 않았습니다
- 코멘트 : **고도·속도·도착절차·활주로·접근방식 다섯 요소를 전부 받았습니다.** 창작 세트 세 번 연속 성공한 유형이 실제 세트에서도 유지됩니다. 다만 **`ILS` 가 `IRS` 로 인식된 것은 눈여겨보세요** — ILS(계기착륙장치)와 IRS(관성항법장치)는 둘 다 실재하는 장비이고, 관제사가 거꾸로 들으면 접근 방식이 달라집니다. 이 세트에서 네 번 반복됐습니다.

---

**P2B-Q3** ⚠️
문제 : ☞ Respond accordingly, stating you're levelling off at 4,000. Inform them of your situation and request vectors for holding.
Approach : HL123, turn right heading 190, descend and maintain 4,000 to intercept the runway 23 localizer.
내 답안 : Turn right. Heading 190. Descent and maintain 4000. Intercept runway 23. Localizer. After maintain 4000. Recast holding due to loss of intersection display.
** 교정 답안 : Turn right heading 190, descend and maintain 4,000 to intercept the runway 23 localizer, HL123. We are levelling off at 4,000 — we have lost a lot of our instrument displays. Request vectors for holding.
- 누락된 필수 readback 요소 : **① `levelling off at 4,000` 상태 보고 ② `vectors`**
- 표준교신용어 오류 : `Descent` → `Descend`. 콜사인 누락. `recast` 는 `request` 의 ASR 오인으로 보고 감점하지 않았습니다
- 코멘트 : **세 기능 중 둘을 수행했습니다** — 복창은 완전하고, 상황(계기 표시 상실)과 홀딩 요청도 담았습니다. 빠진 둘은 지시문이 **글자로 지정한 표현**입니다. ① `stating you're levelling off at 4,000` — 답안의 `After maintain 4000` 은 이 상태 보고가 되지 못합니다. `maintain` 은 지시를 복창하는 동사이고, 지금 필요한 것은 **현재 하고 있는 일을 보고하는 동사**(`levelling off at 4,000`)입니다. 창작 세트에서 반복 지적한 바로 그 구분입니다. ② `vectors` — 홀딩만 요청하면 관제사는 어디서 돌지 정해 줘야 하는지 모릅니다. `request vectors for holding` 이 한 덩어리입니다.

---

**P2B-Q4** ⚠️
문제 : ☞ Respond and give a full readback, and request weather information for Sovereign and Independent airports. You prefer VMC conditions.
Approach : HL123, roger. Fly heading 270, maintain 4,000, and say intentions.
내 답안 : Roger. Heading 270. Maintain 4000. Recast weather. Weather above server airport and independent airport. Now we are VMC condition. Hotel amount 123.
** 교정 답안 : Heading 270, maintain 4,000, HL123. Our intention is to hold while we work the checklist, and then make an approach in VMC. Request the weather for Sovereign and Independent — we would prefer VMC conditions.
- 누락된 필수 readback 요소 : **intentions** — 관제사가 `say intentions` 라고 명시했습니다
- 표준교신용어 오류 : `Now we are VMC condition` — 지문은 **"VMC 를 선호한다"**(`You prefer VMC conditions`)인데, 답안은 "지금 우리가 VMC 다"가 됐습니다. 사실이 아니고 요청의 근거도 되지 못합니다
- 코멘트 : **기상 요청은 정확하게 했습니다** — 두 공항 이름을 모두 짚었고, 이것이 지시문의 주 요구였습니다. 두 가지가 남습니다. ① **`say intentions` 에 intentions 가 없습니다.** 창작 세트에서 다섯 세트 연속 실패하다 EPTA_06 에서 겨우 구문을 쓴 항목인데, 실제 세트에서 다시 빠졌습니다 — **관제사가 `say intentions` 라고 말하면 `our intention is to ~` 를 반드시 한 토막 넣으세요.** ② `prefer` 와 `are` 의 차이 — 선호를 말해야 관제사가 그에 맞는 공항을 골라 줍니다.

---

**P2B-Q5** ✅
문제 : ☞ Request vectors to Independent Airport for a visual approach.
Approach : HL123, Sovereign weather, wind 350 at 6, visibility 1 mile with ceiling 3,000 overcast, temperature 10, dewpoint 9. Independent looks better — wind 170 at 5, visibility 10, ceiling 2,200 broken, temperature 16, dewpoint 12.
내 답안 : Recast inbound for independent airport. For visual approach. Hotel amount 123.
** 교정 답안 : Request vectors to Independent Airport for a visual approach, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `inbound` → **`vectors`**. 지시문이 `request vectors` 라고 지정했고, vectors 는 "기수를 유도해 달라"는 구체적 요청입니다
- 코멘트 : **공항 선택과 접근 방식을 정확히 전달했습니다.** 그리고 **판단이 맞았습니다** — Independent 는 시정 10마일·운고 2,200 broken 이라 시각접근이 가능하고, Sovereign 은 시정 1마일·운고 3,000 overcast 로 불가입니다. 관제사가 준 기상 두 벌을 비교해서 고른 것이고, **창작 세트 EPTA_06 에서 두 번 실패한 "받은 정보를 결정에 쓰기"가 여기서는 됐습니다.** 요청 대상을 `vectors` 로 바꾸면 완전합니다.

---

**P2B-Q6** ✅
문제 : ☞ Contact Approach Control to give them an update of your situation, and request ILS 23 at Public Airport.
(Situation Update : you get some instruments back that will allow you to shoot the ILS approach at Public Airport)
내 답안 : Approach hotel amount 123. We get some interrupt back. That allows to IRS approach at public airport. So request IRS approach to 23. Public airport.
** 교정 답안 : Approach, HL123 — we have got some of our instruments back, and that allows us to fly the ILS approach at Public Airport. Request the ILS runway 23 at Public.
- 누락된 필수 readback 요소 : 없음 — **기관 호출 + 상황 갱신 + 요청 세 기능 전부**
- 표준교신용어 오류 : 없음 (`interrupt`·`IRS` 는 ASR 오인). 문법 : `We get some interrupt back` → `we have got some of our instruments back`(현재완료), `That allows to ~` → `that allows us to ~`
- 코멘트 : **세 기능을 순서대로 다 했습니다.** 특히 **갱신 → 그래서 무엇이 가능해졌는지 → 요청** 이라는 인과 순서가 잡혀 있습니다. 관제사는 "왜 갑자기 Public 으로 돌아가겠다는지"를 바로 이해할 수 있습니다 — EPTA_05·06 에서 갱신을 빠뜨려 지적한 항목인데 여기서는 됐습니다.

---

**P2B-Q7** ⚠️
문제 : ☞ Respond and give a full readback. Advise approach to stand by for further information.
Approach : HL123, roger. You're cleared to Public Airport. Turn right heading 140 and maintain 4,000. And let me know if anything changes.
내 답안 : Clear to public airport. Turn right. Heading 140. Maintain 4000. Hotel amount 123.
** 교정 답안 : Cleared to Public Airport, turn right heading 140, maintain 4,000, HL123. Stand by for further information — we will let you know if anything changes.
- 누락된 필수 readback 요소 : **`stand by for further information`** — 지시문의 뒷부분입니다
- 표준교신용어 오류 : `Clear` → `Cleared`(이 세트에서 세 번째)
- 코멘트 : **복창은 완전합니다** — 목적지·선회방향·기수 140·고도 4,000 네 요소 전부. 빠진 것은 지시문이 지정한 마지막 한 토막입니다. 관제사도 `let me know if anything changes` 로 후속 연락을 요청했으므로, `stand by for further information` 은 **그 요청에 대한 답**입니다. 이것이 없으면 관제사는 계기 상태가 또 바뀔 수 있다는 것을 모른 채 접근을 진행시킵니다. **복합 지시의 마지막 토막이 빠지는 것이 이 세트에서 세 번**(P2A-Q12, P2B-Q3, 여기)입니다.

---

## Part Ⅱ TASK C

**P2C-Q1** ⚠️ (90초)
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
내 답안 : In the approach phase. Approach phase. Application time. In the approach phase. We got lots of instruments display. So we cannot do any IRS approach or RLAB or RNA approach. So we have... All we have to do is just to... The visual approach. So we asked the two airports about their weather report. Uh... I think... The two airports... Both... Both are not for visual approach. But... The better... We choose the better... Airport. Uh... And we... Recast holding for checklists. After checklists. First we... Get... Gained... Uh... Correction. We fixed the display. So... After that... We recast the public airport. Then... Uh... We can land... Uh... The same... What... We did before.
** 교정 답안 : In the approach phase we lost a lot of our instrument displays, so we could not fly the ILS approach or the RNAV approach. All we could do was a visual approach. So we asked about the weather at the two airports. Sovereign was not suitable for a visual approach — one mile visibility with a 3,000 foot overcast — but Independent was better, with 10 miles visibility and 2,200 broken, so we chose Independent. We also requested holding so we could work the checklist. After the checklist we got some of the displays back, so we requested Public Airport again, and then we could land using the ILS as we had planned before.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **사건의 원인이 정확하고**(계기 표시 다수 상실) **전개를 거의 다 담았습니다** — 접근 불가 → 시각접근으로 전환 → 두 공항 기상 조회 → 더 나은 공항 선택 → 홀딩·체크리스트 → 계기 회복 → Public 복귀. **비행 단계도 `approach phase` 로 맞게 짚었습니다.** 그리고 자유응답 중에 `Correction` 으로 스스로 고쳤습니다.
  두 가지가 문제입니다. ① **사실 오류** : `Both are not for visual approach` — **틀렸습니다.** Independent 는 시정 10마일·운고 2,200 broken 으로 시각접근에 적합했고, 그래서 당신이 Independent 를 골랐습니다. 바로 다음 문장에서 "더 나은 공항을 골랐다"고 하니 **자기 설명끼리 모순**됩니다. ② **`We got lots of instruments display`** — `lost` 가 빠져 "계기를 많이 얻었다"가 됐습니다. 사건의 원인이 반대로 전달되는 한 단어입니다.
  그리고 **끊김이 매우 많습니다** — `Uh`, 한 단어씩 끊어지는 구간이 전체의 절반 가까이입니다. 내용은 알고 있는데 문장으로 묶이지 않는 상태입니다. §등급의 Fluency 항목이 Level 3 에 머문 주된 이유입니다.

---

**P2C-Q2** ⚠️ (90초)
문제 : How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
내 답안 : Uh... I think it handled well... Well, as soon as we noticed that the display out, we informed the controller our situation and they... and we asked to hold at 4,000. Right after that, they gave us the priority and holding at 4,000. And deviation to other heading. Also, when we asked the other airport... sorry. The controller gave us two options and we asked. Then the controller gave us the information about the weather. So, we can choose the right airport right after informing us. One thing that we have been handled differently is... that the controller may not ask, just gave us the right airport.
** 교정 답안 : I think the controller handled it well. As soon as we noticed the displays were out, we informed him of our situation and asked to hold at 4,000. Right after that he gave us priority, the holding at 4,000 and a deviation onto another heading. Also, when we asked about the other airports, he gave us the weather for both, so we could choose the right airport as soon as he had told us. One thing that could have been handled differently is that the controller could have simply given us the better airport instead of asking — Independent was clearly the only one with weather good enough for a visual approach, and that would have saved us time while we were still flying with most of our displays out.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **이번 세트에서 가장 좋은 자유응답이고, 두 가지가 처음으로 동시에 됐습니다.** ① **평가 대상이 관제사입니다** — `the controller gave us two options`, `the controller gave us the information about the weather` 처럼 관제사의 행동을 중심으로 서술했습니다. 창작 세트 네 번 연속 조종사부터 평가해 지적한 항목입니다. ② **`One thing that ... handled differently is ~` 로 후반부에 답했고, 제안이 구체적입니다** — "관제사가 묻지 말고 바로 맞는 공항을 줬어야 한다". 계기를 잃은 상태에서 선택지를 받아 판단하는 것 자체가 부담이라는 점을 짚은 것이고, 조종사 관점으로 타당합니다.
  남은 것 : **근거 숫자가 없습니다.** 시정 1마일 vs 10마일, 운고 3,000 overcast vs 2,200 broken 중 하나만 들면 "Independent 가 분명히 나았다"는 주장이 사실에 묶입니다. 그리고 `I think it handled well` → **`I think the controller handled it well`**(주어가 빠져 수동처럼 들립니다), `we have been handled differently` → `could have been handled differently`.

---

## ICAO 6개 항목 등급

| 항목 | 등급 | 근거 |
|---|---|---|
| Pronunciation | **평가 보류** | `CLAUDE.md` §6-2 에 따라 등급 계산에서 제외했습니다 — 소리를 직접 들을 수 없기 때문입니다. **다만 이번은 처음으로 간접 근거가 있습니다** : 위 §발음 소견의 ASR 오인 패턴, 특히 **`Hotel Lima`→`hotel amount`(30회 이상)**, **`request`→`recast`(5회)**, **`ILS`→`IRS`(4회, L↔R)**. ASR 성능 탓일 수도 있으니 단정하지 않지만, **이 항목이 실제로 채점된다면 지금 가장 손을 봐야 할 곳일 가능성이 높습니다.** |
| Structure | **Level 3** | 복창 문항의 구조는 안정적입니다(9요소 클리어런스 포함). 자유응답에서는 깨집니다 — `there are some unexpected accidents will happen`(동사 중복), `We got lots of instruments display`(`lost` 누락), `That allows to ~`, `we have been handled differently`, `how long it will take?`(의문문 어순). `Clear`/`Cleared` 3회, `Descent`/`Descend` 2회. |
| Vocabulary | **Level 3** | 좋은 쪽 : `be advised`, `Correction`, `Ready to copy`, `Hold for release`, `holding spot`, `defuel`, `information Oscar`, `as filed`, `abeam`. 부족한 쪽 : **`vectors`**(P2B-Q3·Q5 두 번 빠짐), **`assistance`**(P2A-Q12 에서 `hold` 로 대체), **`levelling off`**(P2B-Q3), **`intention`**(P2B-Q4), `stand by for further information`(P2B-Q7). **필요한 단어를 몰라서 비슷한 말로 대체하는 지점이 다섯 군데**입니다. |
| Fluency | **Level 3** | 32문항 전부 응답하고 Task C·Follow-up 모두 분량을 채웠습니다. 다만 **끊김이 많습니다** — Task C Q1 은 `Uh` 와 한 단어 조각이 절반 가까이이고, Task C Q2 직전에는 **약 70초간 `Uh` 만 이어지는 구간**(32:57~34:07)이 있습니다. 샘플세트 요령 표의 `'약간의' 준비시간은 용인됨` 범위를 넘습니다. Part Ⅰ·Ⅱ 롤플레이는 매끄러운 편이라 Level 2 로 내리지는 않았습니다. |
| Comprehension | **Level 3** | 강점이 분명합니다 — **9요소 클리어런스 완전 수신**, 5요소 복창, 활주로 횡단 허가, 푸시백 방향·기준점, 그리고 **기상 두 벌을 비교해 옳은 공항을 고른 것**(P2B-Q5). EPTA_06 에서 Level 2 를 준 "받은 정보를 결정에 못 씀"이 여기서는 됐습니다. 감점 요인 : **FL220→FL290**(유일한 ❌), 0103→0100, gate 89→890, Johnson VOR contingency 의 대상 오인, **구어체 ATC 30단어 부탁 미이해**(P2A-Q6), Task C 의 `both are not for visual approach` 모순. |
| Interactions | **Level 3** | 좋은 쪽 : `inquire` 수행(P2A-Q4), 자가 정정 2회(`Correction`), 발신 턴 6개 중 요청 내용은 모두 적절, 대안을 두 개 제시(P2A-Q7). 부족한 쪽 : **`confirm`/`are you able` 질문에 AFFIRM/NEGATIVE 누락 2회**(P1B-Q5, P2A-Q12), **기관 호출 오류 2회**(Clearance→Ground, Apron→Ground), **관제사가 이미 준 것을 다시 요청 2회**(P1B-Q4, P2A-Q9), 복합 지시의 마지막 토막 누락 3회, intentions 누락 1회. |

### 최종 등급 : **Level 3 (불합격, 합격선 Level 4)**

EPTA_05·06 의 Level 2 에서 **한 단계 올랐습니다.** 그리고 올라간 이유가 분명합니다 —
**❌ 가 1개뿐**이고, 그 1개도 값 하나(FL220→FL290) 때문입니다.

Level 4 를 막은 것은 **하나의 큰 결함이 아니라 같은 종류의 작은 누락이 반복된 것**입니다 :
- 복합 지시의 **마지막 토막**이 3회 누락 (`request assistance` / `vectors` / `stand by`)
- `confirm`·`are you able` 질문의 **첫 단어** 2회 누락 (AFFIRM/NEGATIVE)
- **기관 호출** 2회 오류 (지시문이 기관명을 알려줬는데 다른 기관을 불렀습니다)
- 관제사가 **이미 준 것을 다시 요청** 2회

전부 "한 단어" 또는 "한 토막" 수준이고, 내용을 몰라서 생긴 것이 아닙니다.
**지금 실력에서 Level 4 까지의 거리는 생각보다 가깝습니다.**

---

## 태스크별 총평

**Part Ⅰ Task A** — 네 문항 중 셋이 완전합니다. **`caution wake turbulence` 를 제외한 판단**(Q3)과 **푸시백 방향·기준점을 다 받은 것**(Q4)이 좋습니다. Q4 는 EPTA_06 에서 `face south` 를 빠뜨렸던 바로 그 항목인데 여기서는 됐습니다. 남은 하나는 `stop climb` / `step climb` 구분 — 발음 문제이면서 동시에 뜻이 반대로 뒤집히는 지점입니다.

**Part Ⅰ Task B** — 여섯 문항 중 하나가 완전, 넷이 부분, 하나가 실패입니다. 구조는 거의 다 잡혀 있습니다 — Q1 자가 정정, Q4·Q6 의 `unable` + 사유, Q5 의 정정 3단. **부족한 것이 전부 "마지막 한 조각"**입니다 : Q3 의 200피트, Q5 의 `Negative`, Q6 의 0103. Q2 만 성격이 다릅니다 — **고도 값을 틀린 것**이고, 이 파트에서 유일하게 위험한 오류입니다.

**Part Ⅱ Task A** — 열세 문항 중 여섯이 완전합니다. **Q3 의 9요소 클리어런스가 이 세트의 최고점**이고, Q7 의 문제 보고 + 대안 두 개, Q10·Q11 의 지상 교신도 완전합니다. 실패 없이 ⚠️ 만 여섯인데, 그 여섯의 성격이 둘로 갈립니다 — **기관 호출**(Q1 Clearance→Ground, Q5 Apron→Ground)과 **지시문/관제사 요청의 마지막 부분**(Q6 구어체 부탁, Q9 수락 vs 요청, Q12 assistance). 지시문이 기관명을 적어 줬는데 다른 기관을 부른 것이 두 번이라, **지시문의 기관명을 첫 단어로 그대로 쓰는 규칙**을 만들면 두 문항이 바로 해결됩니다.

**Part Ⅱ Task B** — 일곱 문항 중 넷이 완전합니다. **Q1 의 최초 컨택, Q2 의 5요소 복창, Q6 의 갱신+요청**이 모두 성립하고, 특히 **Q5 에서 기상 두 벌을 비교해 Independent 를 고른 것**이 좋습니다. EPTA_06 에서 "물어본 답을 결정에 못 쓴다"고 최우선 지적한 항목이 실제 세트에서는 됐습니다. ⚠️ 셋은 모두 **지시문이 글자로 지정한 표현을 쓰지 않은 것**입니다 — `levelling off at 4,000`, `vectors`, `intentions`, `stand by for further information`.

**Part Ⅱ Task C** — Q1 은 원인과 전개를 거의 다 담았지만 **끊김이 심하고**(`Uh` 와 한 단어 조각이 절반 가까이) `both are not for visual approach` 로 자기 선택과 모순됩니다. Q2 는 **지금까지 쓴 Task C Q2 중 가장 좋습니다** — 처음으로 **주어가 관제사**이고, `One thing that ... handled differently is ~` 로 후반부에 답했고, 제안("묻지 말고 바로 맞는 공항을 줬어야 한다")이 구체적이고 타당합니다. 숫자 근거만 하나 붙으면 Level 4 수준의 답변입니다.

---

## 다음 학습 과제

### 반복되는 약점 3개

1. **복합 지시의 마지막 토막 (이번 세트 3회 + 창작 세트 5세트 연속)** — `request assistance`(P2A-Q12 → `hold` 로 대체), `request vectors for holding`(P2B-Q3 → `vectors` 누락), `stand by for further information`(P2B-Q7 → 누락). **지시문에서 쉼표와 `and` 를 세어 기능 개수를 먼저 적고, 답에 그만큼 토막이 있는지 확인**하세요. 이 세 문항은 전부 **한 토막만 붙이면 ✅** 였습니다.

2. **`confirm` · `are you able` 질문의 첫 단어 (2회)** — P1B-Q5 는 설명부터, P2A-Q12 는 `I'm not sure` 로 시작했습니다. **이 두 질문 형태를 들으면 입에서 나와야 하는 첫 소리는 `AFFIRM` 또는 `NEGATIVE` 입니다.** 관제사는 분리를 계산하는 중이라 결론을 먼저 들어야 합니다. 창작 세트 P1B-Q3 의 `Confirm maintaining ~?` 함정형은 네 세트 연속 맞히고 있으니, **`are you able ~?` 와 평서문형 `confirm ~?` 으로 범위를 넓히는 연습**이 필요합니다.

3. **관제사가 이미 준 것을 다시 요청 (2회)** — P1B-Q4 는 ATC 가 `if unable, maintain FL130 until Johnson VOR` 로 대안을 줬는데 그것을 `request` 했고, P2A-Q9 는 30분 홀드를 통보받고 `request hold` 했습니다. 구분 기준은 하나입니다 — **관제사가 이미 말한 것이면 복창/수락, 관제사가 모르는 것이면 요청.**

### 외워야 할 표현 5개

| 영어 | 뜻 | 쓰는 상황 |
|---|---|---|
| `Negative, HL123 — we turned 10 degrees left by mistake. Now turning right 10 degrees.` | 아닙니다, 10도 좌선회를 실수로 했습니다. 지금 10도 우선회 중입니다 | **`confirm ~?` 의 첫 단어는 NEGATIVE.** 설명은 그 뒤에 |
| `Request a marshaller to guide us past the Gulfstream.` | 걸프스트림을 지나가도록 마셜러를 요청합니다 | `request assistance` = **사람을 보내 달라**는 것. 멈추는 것(`hold`)이 아니다 |
| `We are levelling off at 4,000. Request vectors for holding.` | 4,000피트에서 수평비행 중입니다. 홀딩을 위한 벡터를 요청합니다 | `maintain`(지시 복창)과 `levelling off`(현재 상태 보고)를 구분 |
| `Stand by for further information.` | 추가 정보는 잠시 후에 알려 드리겠습니다 | 상황이 더 바뀔 수 있을 때. 관제사가 `let me know if anything changes` 라고 하면 이것으로 답한다 |
| `Unable to cross FRISO at 0100 Zulu — even at maximum speed our estimate is 0103. Request a later time.` | 0100Z 에 FRISO 통과 불가 — 최대 속도로도 예상이 0103 입니다. 늦은 시각을 요청합니다 | **실제 값(0103)을 말하지 않으면 모순된 문장이 된다** |

### 발음 — 이번에만 추가하는 과제

소리 내어 푼 기록이므로 한 항목 더 둡니다. **`Hotel Lima` 와 `request` 두 단어만 집중 연습하세요.**
전자는 매 교신의 첫 단어이고(30회 이상 `hotel amount` 로 인식됐습니다), 후자는 이 시험에서 가장
많이 쓰는 동사입니다(5회 `recast` 로 인식됐습니다). 그리고 **L↔R** — `ILS`→`IRS` 4회,
`RNAV`→`RLAB` 2회. 다음에 녹음하실 때 이 세 가지가 어떻게 인식되는지 보면 개선 여부를 바로
확인할 수 있습니다.
