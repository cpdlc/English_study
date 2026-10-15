# EPTA 시험 스펙 — 실제 출제 음성 4세트 분석 기반

## 0. 출처와 신뢰도

이 문서는 **실제 EPTA 출제 음성 4세트를 녹음해 자동 음성인식(ASR)으로 받아쓴 자막 4개**
(`reference/transcripts/test01~04.txt`)를 전수 대조해 다시 쓴 것이다.

| 자막 | 정체 | 소재 |
|---|---|---|
| test01 | 공식 샘플세트 **Ⅰ** 의 실제 음성 | Smith Airport / Public Airport |
| test02 | 공식 샘플세트 **Ⅱ** 의 실제 음성 | Paramount Airport / TCAS |
| test03 | 공식 샘플세트 **Ⅲ** 의 실제 음성 | DVETO·ASALT 접근 / yaw 조종 곤란 |
| test04 | **`세트샘플.pdf` 에 없는 신규 세트** | Incheon·Seoul Radio / 낙뢰 피격 |

**신뢰 순위** : 실제 음성 자막 > `세트샘플.pdf` > 추론. PDF 와 음성이 다르면 **음성을 따른다**
(차이 목록은 §9).

### 0-1. ASR 한계 — 이것만은 믿지 말 것

- **고유명사 철자** : `Frizzo`=FRISO, `Happy`=HAPIE, `Doosan`=DOOSAN, `DeVito` 및
  `Delta Victo Echo Tango Oscar`=DVETO, `golf stream`=Gulfstream, `soles`=souls,
  `OSCA`=Oscar, `Hulk 3`·`Thames`·`Robinson`·`Cosmo` 는 철자 미확인
- **숫자 일부** : test01 Ⅰ-B Q2 는 음성상 `flight level 220`, PDF 는 FL290. test01 Ⅱ-B 의
  `ceiling 3000` 은 같은 세트 Task C 에서 `ceiling 300` 으로 나옴 → **300 이 맞다**
- **문장 중복·탈락** : test01 94~101행, test03 48~50행, test04 48·50~53행은 ASR 오류로 같은
  문장이 반복되거나 깨졌다. 그 구간은 복원 불가로 처리
- **응답시간은 자막 타임코드로 판단하지 말 것** → §10

---

## 1. 전체 구성 — 4세트 대조표

| | test01 | test02 | test03 | test04 |
|---|---|---|---|---|
| Ⅰ-A 문항수 | 4 | 4 | 4 | 4 |
| Ⅰ-B 문항수 | 6 | 6 | 6 | 6 |
| Ⅱ-A 턴수 | 12 | 8 | 10 | 8 |
| Ⅱ-A Flight Paths | 3단계 | **2단계** | 3단계 | **박스 없음** |
| Ⅱ-A Situation Update | 3회 | 3회 | 2회 | 1회 |
| Ⅱ-A 비상 발생 | 없음 | **있음(비상선포)** | 없음 | 없음 |
| Ⅱ-A Follow-up | 1문항 2부 | 1문항 2부 | 1문항 3부 | 1문항 3부 |
| Ⅱ-B 턴수 | 7 | 7 | 9 | 9 |
| Ⅱ-B MAYDAY 선포 | 없음 | 없음 | **있음** | 없음 |
| Ⅱ-B fuel/SOB | 없음 | 없음 | **있음** | 없음 |
| Ⅱ-B ATC 대사수 | 5 | 5 | 7 | 8 |
| Ⅱ-C 문항수 | 2 | 2 | 2 | 2 |

**고정된 것** — Ⅰ-A 4문항 · Ⅰ-B 6문항 · Ⅱ-C 2문항 · Ⅱ-C 질문 문구 · 태스크 진입 멘트 ·
문항 말미 지시문(`Record your full readback.` / `Record your response.`)

**변하는 것** — Ⅱ-A·Ⅱ-B 턴수(7~12), Flight Paths 단계수와 유무, Situation Update 횟수,
Task A 비상 유무, Task B 의 MAYDAY·fuel/SOB 유무

**태스크 진입 멘트(고정)** — `Task A. Read the directions on the screen to proceed.` /
`Part 1 Task B. Read the directions on the screen to proceed.` / 이하 Part 2 Task A·B·C 동일.
문항 시작 전 번호를 읽는다 — test01·02·04 는 `1. 2. 3. 4.`, test03 은 `One. Two. Three. Four.`

---

## 2. Part Ⅰ Task A — Readback and Hearback

문항 끝 지시문은 전 세트 예외 없이 **`Record your full readback.`**

### 2-1. 4세트 16문항 원문

**test01**
1. `Hotel Lima 123, cleared direct ATLAS.`
2. `Hotel Lima 123, stop climb at flight level 260 due to traffic.`
3. `Hotel Lima 123, caution wake turbulence, runway 32, cleared for takeoff.`
4. `Hotel Lima 123, start up and pushback approved, long pushback, tail east, until abeam gate 34.`

**test02**
1. `Hotel Lima 123, start up and pushback approved, pushback tail east.`
2. `Hotel Lima 123, backtrack approved, backtrack runway 16, vacate via Delta 2.`
3. `Hotel Lima 123, runway change in progress to runway 35, continue approach and circle left, circle north for runway 35.`
4. `Hotel Lima 123, climb to flight level 310 on current heading and reduce speed 20 knots when level.`

**test03**
1. `Hotel Lima 123, taxi to runway 34L via Bravo, Tango, Charlie, hold short of runway 34L.`
2. `Hotel Lima 123, climb and maintain flight level 350, expedite climb until passing flight level 280.`
3. `Hotel Lima 123, winds 220 at 10, cleared for takeoff runway 24.`
4. `Hotel Lima 123, good morning, cleared to Robinson, HULK THREE departure, JULIA transition, flight level 380, departure runway 24, squawk 3675.`

**test04**
1. `Hotel Lima 123, descend and maintain flight level 160, report reaching.`
2. `Hotel Lima 123, Tower, after departure fly heading 260, maintain 6,000 feet, cleared for takeoff runway 22.`
3. `Hotel Lima 123, Tower, hold for another 3 minutes due to wake turbulence.`
4. `Hotel Lima 123, Departure, continue on THAMES TWO THREE departure, after reaching THAMES proceed on course.`

### 2-2. 추출된 패턴

**비행단계 분포 — "4단계 각 1개"는 사실이 아니다**

| | Q1 | Q2 | Q3 | Q4 |
|---|---|---|---|---|
| test01 | 순항 | 상승 | 이륙 | 지상 |
| test02 | 지상 | 지상 | 접근 | 상승 |
| test03 | 지상 | 상승 | 이륙 | 클리어런스 |
| test04 | 강하 | 이륙 | 지상 | 출발 |

지상이 2개(test02), 순항·상승이 2개(test01)인 세트가 실제로 있다. **"서로 다른 4단계"를
강제하지 말고 지상·공중을 섞되 같은 단계 중복도 허용**한다.

**요소 수** — 5요소 이상 긴 클리어런스는 **4세트 중 test03-Q4 하나뿐**. 나머지는 2~4요소.
→ `매 세트 5요소 이상 1문항`은 과도한 규칙. **2세트에 1회** 정도로 완화.

**복창 불필요 정보가 섞인 문항** — test03-Q3 `winds 220 at 10`, test01-Q3 `caution wake
turbulence`, test01-Q2 `due to traffic`, test04-Q3 `due to wake turbulence`.
**4세트 모두 1문항 이상 포함** → 매 세트 필수로 유지.

**조건부·시점 지정 지시** — `expedite climb until passing FL280`(test03),
`reduce speed 20 knots when level`(test02), `after departure fly heading 260`(test04),
`after reaching THAMES proceed on course`(test04). **세트당 1~2문항.**

**부가 보고 요청** — test04-Q1 `report reaching` (복창 + 향후 보고 약속).

**비표준에 가까운 실무 표현도 그대로 나온다** — `stop climb at FL260`(test01),
`backtrack approved`(test02), `runway change in progress`(test02),
`hold for another 3 minutes`(test04).

**관제기관명을 지시 안에 넣는 세트가 있다** — test04 는 Q2·Q3 에 `Tower`, Q4 에 `Departure`
를 콜사인 직후에 붙인다. 다른 3세트는 안 붙인다. 세트별 스타일 차이로 둘 다 허용.

### 2-2-1. ★ 실측 분량 — 출제 시 반드시 맞출 것

16문항의 콜사인을 뺀 단어 수를 세어본 결과다.

| 세트 | Q1 | Q2 | Q3 | Q4 | 최단 | 최장 |
|---|---|---|---|---|---|---|
| test01 | 3 | 9 | 8 | 13 | **3** | 13 |
| test02 | 8 | 9 | 17 | 15 | **8** | 17 |
| test03 | 13 | 13 | 9 | **18** | 9 | **18** |
| test04 | 8 | 14 | 10 | 13 | **8** | 14 |

**전체 범위 3~18단어, 평균 11.2, 중간값 13.** 18단어를 넘는 문항은 하나도 없다.

- **상한 18단어.** 넘기면 20초 안에 복창이 불가능해진다.
- **매 세트 10단어 이하 1문항** — 네 세트 모두 최단이 3·8·9·8단어다. 쉬운 문항으로
  호흡을 잡아주는 구조이므로, 이게 없으면 실제보다 어려운 세트가 된다.
- 4문항 **평균 11~13단어**.
- 긴 클리어런스도 **요소 5~6개 / 18단어 이내**(최장 사례 test03-Q4 = 18단어·6요소).

Part Ⅱ 는 기준이 다르다 — 구어체 때문에 실제도 30단어대까지 가지만, 응답시간 30초를
감안해 **40단어를 넘기지 않는다**.

### 2-3. 출제 규칙 (개정)

- 4문항, 각각 `Record your full readback.`
- 지상 1~2 / 이륙·출발 1 / 상승·강하·순항 1~2 / 접근·착륙 0~1 범위에서 배치, 중복 허용
- **매 세트 1문항 이상** : 복창 불필요 정보(바람 · wake turbulence · `due to ~`)가 섞인 문항
- **매 세트 1~2문항** : 조건부·시점 지정(`until passing ~`, `when level`, `after ~`)
- **2세트에 1회** : 5요소 이상 긴 클리어런스(목적지·SID·transition·FL·활주로·squawk)
- **가끔** : `report reaching` 처럼 복창 + 향후 보고 약속을 함께 요구하는 부가 요청

---

## 3. Part Ⅰ Task B — Checking, Clarifying, Confirming, Informing

문항 끝 지시문은 전 세트 예외 없이 **`Record your response.`**

### 3-1. ★ 가장 큰 발견 — ATC 대사가 없는 문항이 있다

기존 스펙은 `① 상황설명 → ② ATC 한 줄 → ③ 응답` 3단 고정이었다. **틀렸다.**

- **test04-Q2** — 상황설명만 주고 `Contact approach. Make a confirmation and clarify your
  intention.` ATC 대사 없음, 조종사가 먼저 발신
- **test04-Q5** — 상황설명만 주고 `Contact controller. Report your status and make a
  request.` ATC 대사 없음

Task B 문항은 **두 형태**가 있다.
- **(가) 응답형** — 상황설명 → ATC 대사 → 응답 (대다수)
- **(나) 발신형** — 상황설명 → (ATC 대사 없음) → 조종사가 먼저 호출

출제 시 **6문항 중 0~2문항을 발신형**으로 둔다.

### 3-2. 4세트 24문항 전수 기능 분류

| 기능 | 해당 문항 | 합 |
|---|---|---|
| **Unable + reason (+대안)** | 01-Q4, 01-Q6, 02-Q3, 02-Q5, 03-Q5, 03-Q6, 04-Q1, 04-Q3 | **8** |
| Requesting | 02-Q4, 02-Q6, 03-Q4, 04-Q4 | 4 |
| Acknowledging / Readback | 02-Q1, 02-Q2, 03-Q1, 03-Q2 | 4 |
| Informing (상태·기상 보고) | 01-Q1, 01-Q3, 04-Q5 | 3 |
| Correcting own mistake | 01-Q5, 03-Q3 | 2 |
| Clarifying (confirm · say again) | 04-Q2, 04-Q6 | 2 |

**Unable 계열이 전체의 1/3(8/24), 세트당 평균 2문항.** 기존 규칙은 6기능을 "골고루"라고만
했는데 실제 분포는 Unable 쪽으로 확실히 치우쳐 있다 → **세트당 Unable+reason 2문항**을
기본값으로 삼는다.

### 3-3. ★ `Confirm maintaining ~?` 패턴 — 거의 매 세트 출제

| 세트 | ATC 대사 | 함정 |
|---|---|---|
| test01-Q5 | `Confirm maintaining 10 degrees to the right of your route.` | 실제로는 좌로 틀었다 → **NEGATIVE + 정정** |
| test03-Q3 | `Confirm maintaining heading 090.` | 다른 heading 으로 틀었다 → **NEGATIVE + 정정** |
| test03-Q6 | `Confirm maintaining 300 knots.` | 300kt 에서 난기류 → **AFFIRM/NEGATIVE + unable + 대안** |

4세트 중 3세트, 총 3문항. **매 세트 1문항은 이 패턴으로 낸다.**
핵심 — `confirm` 질문에 `yes/no` 가 아니라 **AFFIRM / NEGATIVE** 로 답하고, NEGATIVE 면
반드시 **실제 상태 + 정정 조치 또는 대안**을 붙인다.

### 3-4. 4세트 24문항 상황 소재

**test01** ① 이륙활주 중 조류 활동 목격 → 이륙 후 보고(ATC `Go ahead.`) ② FL310 Mach 0.81,
FIR 경계 접근 → `descend FL220, contact Tokyo on 121.65, report speed` ③ FL210 순항 중
moderate turbulence 3분·200ft 고도변화 → ATC `Request flight condition.` ④ 성능상 교차제한
불가 → ATC 가 먼저 `If unable, maintain FL130 until Johnson VOR` 대안 제시 ⑤ 10도 우선회를
좌선회로 오인 → `Confirm maintaining 10 degrees to the right` ⑥ FRISO 0100Z 통과 지시,
최대속도로도 0103Z → `Cross FRISO at or before 0100Z.`

**test02** ① 홀딩 지시 `Hold over DOOSAN VOR as published, expect further clearance at 20.`
② 택싱 중 ground 가 delivery 메시지 중계 `Your SID has been changed to HIPPO ONE departure,
rest of the clearance unchanged.` ③ 저시정 절차, RWY09 택싱 중 **적색 정지등이 계속 켜져 있음**
→ ATC `Taxi to the holding point runway 09, follow the green light.` ④ direct 지시받은 SYT
주변에 CB → `Proceed direct to Sierra Yankee Tango.` ⑤ 짙은 안개 착륙 후 유도로 유도등이 안
보여 활주로에 정지 → `Vacate right at the next available taxiway.` ⑥ 20마일 우편차 중 10마일
추가 필요 → ATC `Say your request.`

**test03** ① 상승 중 주파수 변경 fix 접근 → `When passing FL150, contact Smith Control on
129.1.` ② 이륙 후 departure 컨택 → `Follow JFK ONE departure, climb via SID.` ③ heading 090
지시를 다른 heading 으로 잘못 선회 → `Confirm maintaining heading 090.` ④ final approach
course 상에서 성능상 20kt 감속 필요 → `Maintain 210 knots until established on the final.`
⑤ RWY19 line up + 이륙허가, 그런데 **다른 항공기가 이륙 활주로를 횡단 중** →
`Cleared for takeoff runway one niner.` ⑥ 300kt 유지 지시받았으나 300kt 에서 난기류 →
`Confirm maintaining 300 knots.`

**test04** ① FL290 순항, 성능상 1시간 후 FL310 가능 → `Can you accept FL310 as final? If
unable now, when can you accept FL310?` ② CB 로 좌선회 heading 060 요청·승인, 부기장은 ATC 가
우선회를 말한 것 같다고 함 → **ATC 대사 없음**, `Make a confirmation and clarify your
intention.` ③ FL370 상승 + Mach .80 증속 지시, 성능상 Mach .78 유지 희망 → `Continue climb
to FL370 and increase speed to Mach .80 for sequence.` ④ 저시정 ILS RWY34L 접근 중 localizer
신호 과도 흔들림 → `Tower, cleared to land runway 34L.` ⑤ FL380 severe turbulence, 저고도
난기류 PIREP 원함 → **ATC 대사 없음**, `Report your status and make a request.`
⑥ Seoul Radio 기상정보 수신 중 **전송 끊김** → `Seoul Radio, Incheon Airport weather
information, wind 300 at 5 knots, visibility 5 kilometres with haze, clouds...` (끊김)

### 3-5. 지시문 고정구 사전 (Task B)

ASR 원문 그대로. 출제 시 이 문구들을 돌려 쓴다.

```
Now ATC contacts you. Respond accordingly.
Acknowledge and respond accordingly.
Acknowledge and say your intentions accordingly.
Say your intentions.
Say your request to ATC.          /  Now make a request to ATC.
Make a report after airborne to ATC.
Respond accordingly with a reason.
Contact approach. Make a confirmation and clarify your intention.
Contact controller. Report your status and make a request.
Listen to the controller, make a readback, and a request with a reason.
Listen to the controller. Explain your situation and request to go around for stable approach.
Listen to the transmission, and make a request with a reason.
```

★ **test04 의 지시문은 2~3개 기능을 한 번에 요구한다** — `make a readback, and a request with
a reason` / `Report your status and make a request` / `Explain your situation and request to
go around`. **6문항 중 2문항 이상을 이런 복합 지시**로 낸다.

### 3-6. 출제 규칙 (개정)

- 6문항, 각각 `Record your response.`
- 기능 배분 기본값 — **Unable+reason 2 / Requesting 1 / Informing 1 / Clarifying 1 /
  Correcting 또는 Acknowledging 1**
- **매 세트 1문항** — `Confirm maintaining ~?` 함정형
- **0~2문항** — ATC 대사 없는 발신형
- **2문항 이상** — 복합 지시(2개 기능 동시 요구)
- 텍스트 클루(`🖥`)는 화면 요소라 음성 자막에 안 나타난다 — PDF 기준대로 1~2문항에 유지

---

## 4. Part Ⅱ Task A — Role-play & Follow-up

### 4-1. Flight Paths 박스 — 3단계 고정이 아니다

| 세트 | 단계 |
|---|---|
| test01 | `three flight stages. Clearance, Apron, and Taxi.` |
| test02 | `two flight stages, en route and approach.` ← **2단계** |
| test03 | `three flight stages. Approach, Landing, and Taxi.` |
| test04 | **Flight Paths 박스 자체가 없다** — `Initial situation` 으로 바로 시작 |

고정 문구 : `In this scenario, you'll be the pilot flying Hotel Lima 123, which goes through
[two/three] flight stages. [단계명 나열].`

→ **2단계도 3단계도 가능하고, 아예 생략하는 세트도 있다.**

### 4-2. ★ Task A 에 비상이 들어가는 세트가 있다

**test02 Task A** — 강하 중 **스로틀 고착**(부기장과 함께 밀어도 안 움직임) → 현 고도 유지 +
troubleshoot 시간 요청 → divert 요청 → `Do you need any assistance?` → Situation Update 에서
**`You have declared an emergency and have been handed off to Paramount Approach Control.`**
→ Paramount Approach 컨택, 고도 보고 → ILS 27R 요청 → **27R ILS 고장, 짧은 27L 만 가용** →
`Say your intentions.`

기존 규칙 `비상 선포는 Task A 에 넣지 않는다` 는 **실제와 다르다.**
→ **4세트 중 1세트는 Task A 에 비정상·비상을 넣는다.** 나머지 3세트는 경미한 변경 수준
(게이트·디퓨얼링·윙팁 클리어런스 / 웨이포인트 확인·게이트 문의 / B747 이상 발견·PIREP).

### 4-3. 4세트 Task A 전개

**test01** (Clearance·Apron·Taxi, 12턴) Clearance Control 에 요청 → route revision 준비 →
클리어런스 full readback(HAPIE·FL350·squawk 1766) → `hold for release` + 소요시간 문의 →
Gate Alpha 89 pushback 요청 → pushback 복창 → **연료 과다 → 디퓨얼링/소모 필요** → 소요시간
답변 → 디퓨얼링 불가, 30분 홀드 → golf 홀드 숏에서 taxi 요청 → taxi 복창(RWY13L, cross 22R,
Gulfstream 추종) → **Gulfstream 타이어 펑크, 우회 가능한지 질문** → 응답 + **assistance 요청**

**test02** (en route·approach, 8턴) Center 복창 `descend to FL230` → **스로틀 고착** 상황 설명
+ 현 고도 유지·troubleshoot 시간 요청 → divert 요청 → `Do you need any assistance?` 정보 제공
→ **비상 선포 후** Paramount Approach 컨택·고도 보고 → readback + ILS 27R 요청 →
`Paramount altimeter 29.83` → **27R ILS 고장, 27L 만 가용** → intentions

**test03** (Approach·Landing·Taxi, 10턴) Approach 컨택 + 통과고도 보고 →
`Altimeter 3033, Quebec now current, watch your maximum forward speed` 복창 →
**DVETO 를 차트에서 못 찾음 → 웨이포인트 확인 요청** → ATC 가 `the very first fix outside of
ASALT, Delta Victor Echo Tango Oscar, nobody seems to find it` → 찾았다는 뜻 전달 + 복창 →
`cleared for RNAV Visual 13R, contact tower 118.3` 복창 → **ASALT 상공 3,000ft** 에서 tower
컨택·위치·의도 보고 → `winds 110 at 26 gust 35, cleared to land runway 13R` 복창 + **TCAS
트래픽 문의** → taxiway Victor 로 이탈, Bravo 홀드 숏 → ground 에 현 위치 통보 →
`What gate are you going to?` → **Gate B6** → `Any idea when you are going in?`

**test04** (Flight Paths 없음, 8턴) delivery 에 ATC 클리어런스 요청 → apron pushback/start up
승인 `facing north` → `runway 33L, taxi via Romeo, 207 then Alpha, follow Boeing 747 on your
left` 복창 + **어느 항공기를 따라가야 하는지 문의** → 택싱 중 **앞의 B747 에서 이상 발견** →
ground 에 상황 설명 → `Roger, thank you for your information. Revise taxi instruction, taxi
via Bravo then Golf, you are number one.` 복창 → departure 최초 컨택 → `climb to FL270,
reduce and maintain speed 210 knots until reaching 10,000 feet for spacing` → **negative +
사유** → 10,000→13,000ft 통과 중 moderate turbulence → **PIREP 제공 + 경로상 PIREP 문의** →
`previous aircraft offset 30 miles right to avoid weather. Say your intention?` → **앞 항공기와
같은 요청**

### 4-4. ★ Follow-up 질문 — 2~3부 구성이 고정 패턴이다

| 세트 | 질문 |
|---|---|
| test01 | `You have just finished Task A as the pilot of Hotel Lima 123. In this situation, what problem did you discover while on the ramp and how did you resolve that problem?` |
| test02 | `... In this situation, why did you request a specific approach from ATC? In your role as a pilot, how do you troubleshoot or try to solve a mechanical problem with the aircraft?` |
| test03 | `... In this situation, why did you ask ATC for clarification about the waypoint during your approach? From your own experiences, how common is it for you to ask for this type of clarification? Give an example.` |
| test04 | `Follow up question. In this situation, why did you give a PIREP to ATC? How can a PIREP benefit other aircraft? Give an example.` |

**고정 패턴 — ① 롤플레이에서 왜 그렇게 했는가 → ② 일반적으로/경험상 어떤가 → ③ `Give an
example.`**

- `In this situation, ...` 로 1부를 연다 (4세트 전부)
- 2부는 `In your role as a pilot, ...` / `From your own experiences, ...` /
  `How can ~ benefit ...` 처럼 **롤플레이 밖의 일반 지식·경험**으로 넘어간다
- **`Give an example.` 가 4세트 중 2세트에 명시**된다 → 예시를 못 들면 Level 5~6 이 안 나온다
- 전치구 `You have just finished Task A as the pilot of Hotel Lima 123.` 는 test01·02·03 에
  있고 **test04 는 `Follow up question.` 만** — 필수가 아니다

기존 규칙은 "경험·의견형 질문"만 요구했고 **2~3부 구성과 `Give an example.` 요구가 빠져
있었다.** 앞으로는 반드시 3부 구조로 낸다.

### 4-5. ★ ATC 대사에 비표준 구어체가 상당히 섞인다

Comprehension 평가의 핵심이다. 기존에 만든 세트들은 ATC 대사가 너무 교과서적이었다.

```
test01  Cleared pushback and startup. And once the tug crew gets you established on lane
        Alpha, if they can just pull you forward so I can push behind you at gate 87,
        I'd appreciate it.
test02  Roger. Do what you need to do.
        Roger. The traffic is supposed to be leveling off at flight level 210.
        I'm sorry about that.
        Give me a call when you get on the ground so that we can get some information
        from you and we will figure out what happened.
test03  It's the very first fix outside of ASALT. Delta Victor Echo Tango Oscar.
        Nobody seems to find it.
        Any idea when you are going in?
        Let me know fuel and souls on board, so I can advise tower.
        Watch your maximum forward speed.
test04  Roger. Thank you for your information. Revise taxi instruction.
        I cannot give you that heading anymore. Turn right heading 340 immediately.
        If able, right turn to heading 340.
        And I will deliver your message to the tower.
```

→ **세트당 2~3턴은 이런 구어체 ATC 대사**를 넣는다.

### 4-6. 턴 지시문 고정구 사전 (Task A)

```
Contact Clearance Control and make a request.
Contact delivery. Request ATC clearance.
Listen to the controller's message. Advise that you are ready.
Listen to the controller and give a full readback.
Listen to the center controller's message and give a full readback.
Listen to the controller's message. Respond accordingly. And inquire how long it will take.
Contact Apron and request pushback and startup.
Listen to the apron. Respond properly. And inquire which aircraft you need to follow.
Contact ground and request to taxi.
Contact ground. Explain the situation to ATC.
Listen to the ground. And give a readback.
Listen to the controller's message. Respond accordingly and request assistance.
Contact Approach Control and report your passing altitude.
Contact Paramount Approach accordingly and report your altitude.
Listen to the controller's response and question. Give a full readback. Acknowledge positively.
Listen to the controller's message, then request a verification of the waypoint you're cleared direct to.
Respond, implying you have found the fix, and give a full readback.
Contact tower control and report your position and intention.
Listen to tower and give your full readback. Then, inquire about the traffic on your TCAS screen.
Contact ground and inform them of your current location.
Listen to the controller's response, and notify them. Gate B6.
Listen to ground and respond accordingly.
Contact the controller explaining the situation and advise you need to maintain current
  altitude and some time to troubleshoot.
Listen to the controller's response and request divert.
Listen to the controller's question and provide the requested information.
Listen to the controller's response. Give a readback and request ILS approach runway 27R.
Make an initial contact with departure control. Listen to the departure and respond
  negatively with a reason.
Contact departure. Give a PIREP and inquire if there is any PIREP on your route.
Listen to departure. Make the same request as the previous aircraft.
```

**복합 지시 비율이 높다** — `respond accordingly and inquire ~`, `give a full readback then
inquire ~`, `respond negatively with a reason`, `report your position and intention`.
세트당 **절반 이상의 턴을 복합 지시**로 낸다.

**음성으로 클루를 주는 경우도 있다** — test03 `Listen to the controller's response, and
notify them. Gate B6.` (화면 클루가 아니라 지시문에 값을 박아준다)

### 4-7. 출제 규칙 (개정)

- 7~12턴 + Follow-up 1문항
- Flight Paths 박스는 **2단계 또는 3단계, 혹은 생략**
- Situation Update 1~3회
- **4세트에 1번은 Task A 에 비정상·비상**을 넣는다(스로틀 고착처럼 Task A 안에서 비상 선포까지)
- 세트당 2~3턴은 **구어체 ATC 대사**
- 턴 지시문 절반 이상을 **복합 지시**로
- Follow-up 은 **① 롤플레이 회상 → ② 일반 경험·지식 → ③ `Give an example.`** 3부 구조
- `report your position` 류를 낼 때는 그 직전에 구체적 위치·고도를 먼저 준다
  (test03 `You are now over ASALT intersection at 3,000 feet.` 가 모범)

---

## 5. Part Ⅱ Task B — Extended Role-play : Single Incident/Emergency

### 5-1. 4세트 사건 전개

**test01** (7턴) Public Airport 접근, FL180→11,000, ATIS Oscar → 위치보고 → `descend 6,000,
reduce speed 210, expect DIXIE ONE arrival runway 23 transition followed by ILS 23` →
**계기 디스플레이 다수 상실** → `turn right heading 190, descend 4,000 to intercept the
runway 23 localizer` 에 대해 4,000 레벨오프 통보 + 상황 알림 + **vectors 요청** →
`fly heading 270, maintain 4,000 and say intentions` → 복창 + **Sovereign·Independent 기상
요청(VMC 선호)** → 기상 비교 후 **Independent 로 vectors + visual approach 요청** → 계기 일부
회복 → Public Airport ILS 23 재요청 → `cleared to Public Airport, turn right heading 140,
maintain 4,000, let me know if anything changes` 복창 + stand by 통보

**test02** (7턴) 13,000→FL200 상승, Center 핸드오프 → 위치보고 → `turn left heading 070,
traffic 11 o'clock and a mile, MD-80 descending` → `Do you have the traffic in sight? They
are at FL230 descending.` 긍정 응답 → FL200 레벨오프 시 **TCAS advisory, 상대기가 FL210 에서
멈출 것 같지 않음** → Center 통보 → `Roger. Do what you need to do.` → 관제사 사과
`The traffic is supposed to be leveling off at FL210. I'm sorry about that.` → **상대기가
FL200 까지 내려왔고 지금은 clear of traffic** 통보 → `Give me a call when you get on the
ground...` **비상선포 없음**

**test03** (9턴) RWY25L 홀드 숏 → `wind calm, runway 25L, cleared for takeoff` →
**이륙 후 상승 중 yaw 조종 곤란 → 비상 선포** → `contact departure. Good day.` →
**비상 선포 + 공항 복귀 vectors 요청** → `make a left downwind for runway 25L and contact
departure` → departure `radar contact. Say the nature of the emergency.` → yaw 조종 곤란
진술 + **vectors to troubleshoot 요청** → `say your intentions` → approach configuration
테스트 필요 + 방법 진술 → 회사 승인 후 복귀 → approach 컨택, 상황·의도 → `turn right heading
160, maintain 3,000 until established, cleared for ILS 25L` → **`Let me know fuel and souls
on board, so I can advise tower.`**

**test04** (9턴) Smith Approach 강하 → `descend to 5,000 feet, expect radar vector to COSMO`
→ ND 에 weather echo → **heading 210 우선회 요청** → `position 20 miles from COSMO, direct to
COSMO, cleared for RNAV runway 21 approach` → 편차가 부족해 더 큰 편차 필요 →
`heading 210 is approved. When clear, direct to COSMO.` → 선회 중 **낙뢰 피격 — 전면
윈드실드 손상 + FMC 전부 blinking** → 현 heading·고도 유지 + troubleshooting 요청 →
`Understood your situation. If able, right turn to heading 340.` → **negative + 사유** →
FMC 복구, 선회 가능 → `I cannot give you that heading anymore. Turn right heading 340
immediately.` → 긍정 응답 + 현 상태 통보 → **윈드실드 손상으로 auto landing RWY21 → ILS
접근 필요 + 착륙 후 towing assistance 요청** → `turn left heading 090, descend to 4,000, this
will be radar vector to final approach course of RNAV approach runway 21` →
`I will vector you to ILS final approach course runway 21. And I will deliver your message
to the tower. Continue descend to 2,500 feet.`

### 5-2. ★ MAYDAY·fuel/SOB 는 매 세트가 아니다

| | MAYDAY/비상선포 | fuel + souls on board | intentions 진술 |
|---|---|---|---|
| test01 | 없음 (계기 상실인데도) | 없음 | 있음 |
| test02 | 없음 (TCAS 만) | 없음 | 없음 |
| test03 | **있음** | **있음** | 있음 |
| test04 | 없음 (낙뢰인데도) | 없음 | 있음 |

기존 규칙 `최소 1턴은 fuel/SOB` 는 **실제는 4세트 중 1세트**. 기존에 만든 세트들은 매번
MAYDAY + fuel/SOB 를 넣어 **과대 적용**했다.

→ **MAYDAY·fuel/SOB 는 4세트에 1번.** 나머지는 비상 선포 없이 "상황 보고 + 의도 전달 +
관제 협조"로 끌고 간다. **intentions 진술은 4세트 중 3세트** → 사실상 필수.

### 5-3. Task B 공통 전개 골격

```
정상 교신 1~2턴
  → 사건 발생 (Situation Update 또는 지문)
  → 상황 보고 + 현재 조치(고도·헤딩 유지 등) + 시간·vectors 요청
  → ATC 가 대안·질문 제시 ("say intentions" / "do you need assistance" / "if able ~")
  → 조종사 intentions 진술
  → 상황 변화 (회복 / 악화 / 관제사 변심)
  → 접근 방식 결정 + 필요한 지원 요청
  → 최종 클리어런스 복창
```

**자주 나오는 핵심 표현**
- `request vectors for troubleshooting` / `request vectors to troubleshoot` (test01·test03)
- `say the nature of the emergency` (test03)
- `maintain present heading and altitude for troubleshooting` (test04)
- `request towing assistance` / `auto landing` (test04)
- `clear of traffic` (test02)
- `let me know fuel and souls on board` (test03)
- `stand by for further information` (test01)

### 5-4. 출제 규칙 (개정)

- 7~12턴, **단일** 사건
- MAYDAY 선포와 fuel/SOB 보고는 **4세트에 1번**. 나머지는 비상 선포 없이 전개
- **intentions 진술은 거의 매 세트** 포함
- 사건 중간에 **회복 또는 관제사 변심**을 한 번 넣는다 (test01 계기 회복, test04 FMC 회복 +
  `I cannot give you that heading anymore`)
- 이 세트의 **ATC 대사 5~8줄은 Task C 에서 그대로 재사용**되므로 정확히 기록

---

## 6. Part Ⅱ Task C — Reporting about Task B

### 6-1. 구조 (4세트 100% 동일)

```
Now listen to the controller's radio telephony messages.
  → Task B 의 ATC 대사만 순서대로 (조종사 대사 없음)
Now answer the questions.
  → Question 1 / Question 2
```

### 6-2. 질문 문구 (고정)

```
Question 1.  What happened to your aircraft, Hotel Lima 123? Explain the nature of the incident.
Question 2.  How do you think the incident was handled by the air traffic controller?
             Do you feel the situation could have been handled differently?
             Make a comment from a pilot's point of view.
```

- 4세트 전부 이 두 문항. test01 자막이 Q2 를 `Question 2 ... Question 3 ...` 로 쪼갠 것은
  ASR 오류이고 실제로는 2문항이다
- Task B ATC 대사를 **거의 그대로** 재사용한다. test02 는 Task C 에서 `I'm sorry about that.`
  한 문장이 빠졌으나 그 외에는 동일 → **원칙은 100% 동일 재사용**

---

## 7. 숫자·호출 관례 (실제 음성 확인)

- 고도 : `flight level 260` → "flight level two six zero" · `6,000 feet` → "six thousand feet"
- 활주로 : `runway 32` → "runway three two" · `34L` → "three four left" ·
  `one niner`(test03 Q5 는 음성에서 실제로 "one niner")
- 주파수 : `121.65` → "one two one decimal six five" · `129.1` → "one two niner decimal one" ·
  `118.3` → "one one eight decimal three"
- squawk : `1766` → "one seven six six" · `3675` → "three six seven five"
- 고도계 : `29.83` → "two niner decimal eight three" · `3033` → "three zero three three"
- 바람 : `winds 220 at 10` · `winds 110 at 26 gust 35` · `wind calm`
- 시각 : `0100Z` → "zero one zero zero Zulu"
- 속도 : `210 knots` · `Mach .80` → "Mach decimal eight zero" / "Mach eight zero"
- 게이트·유도로 : `Gate Alpha 89` · `Gate B6`(= Bravo six) · `Delta 2` · `Golf 2` ·
  `taxiway Victor` · `Romeo 207 then Alpha`
- **★ `tree` = 3** : test04 는 전편에서 `flight level tree 70`, `runway tree 4L`,
  `wind tree 00`, `heading tree 40`, `runway tree tree left` 로 발음한다. ICAO 권고 발음을
  그대로 쓰는 세트가 실제로 존재한다 → 출제 시 그렇게 표기해도 되고, 채점 시 `tree`/`three`
  둘 다 정답으로 본다

---

## 8. 가상 지명 목록 (실제 사용 확인)

공항 — Smith · Public · Sovereign · Independent · Paramount · Robinson · Incheon
웨이포인트·VOR — ATLAS · HAPIE · FRISO · Johnson VOR · DOOSAN VOR · Sierra Yankee Tango ·
DVETO · ASALT · COSMO · THAMES
SID·절차 — HULK THREE departure / JULIA transition · HIPPO ONE departure · JFK ONE departure ·
DIXIE ONE arrival · THAMES TWO THREE departure · RNAV Visual 13R
기관 — Clearance Control · Delivery · Apron · Ground · Tower · Departure · Center ·
Smith Control · Tokyo Control · Public Approach · Paramount Approach · Smith Approach ·
Seoul Radio
타 항공기 — Gulfstream · Boeing 747 · Boeing 757 · MD-80

→ 새 세트는 **이 이름들을 재사용하지 말고** 같은 결의 새 이름을 만든다.

---

## 9. PDF·기존 스펙과 어긋난 점 (정정 목록)

| 항목 | 기존(PDF·구 스펙) | 실제 음성 | 조치 |
|---|---|---|---|
| Task A 비행단계 | 4문항 서로 다른 4단계 필수 | 같은 단계 중복 있음 | 규칙 완화 |
| Task A 긴 지시 | 매 세트 5요소 이상 1문항 | 4세트 중 1문항 | 2세트에 1회 |
| Task B 구조 | 상황설명 → ATC → 응답 3단 고정 | **ATC 대사 없는 발신형 존재** | 유형 추가 |
| Task B 기능 | 6기능 골고루 | **Unable 계열이 1/3** | 배분 변경 |
| Task B confirm | 언급 없음 | **`Confirm maintaining ~?` 3회** | 매 세트 1문항 |
| Ⅱ-A Flight Paths | 3단계 고정 | 2단계·생략도 있음 | 규칙 완화 |
| Ⅱ-A 비상 | 비상 금지 | **test02 는 비상 선포까지** | 4세트에 1번 허용 |
| Ⅱ-A Follow-up | 경험·의견형 1문항 | **2~3부 + `Give an example.`** | 3부 구조 필수 |
| Ⅱ-B MAYDAY | 사실상 매 세트 | 4세트 중 1세트 | 4세트에 1번 |
| Ⅱ-B fuel/SOB | 최소 1턴 필수 | 4세트 중 1세트 | 4세트에 1번 |
| ATC 문체 | 표준교신용어 중심 | **구어체 상당히 섞임** | 세트당 2~3턴 |
| test01 Ⅰ-B Q2 고도 | FL290 | FL220 | 음성 채택 |
| test01 Ⅱ-A Q1 기관 | Clearance Delivery | Clearance Control | 둘 다 허용 |
| test01 Ⅱ-A Q12 지시 | respond accordingly | **+ request assistance** | 음성 채택 |
| test01 Ⅱ-A Q3 경로 | right turn direct HAPIE | **right turn heading 100 to HAPIE** | 음성 채택 |
| test01 Ⅱ-B Q3 요청 | vectors for troubleshooting | 음성은 `vectors for holding` | 판단 보류 |

---

## 10. 응답시간 — 자막 타임코드로 판단하지 말 것

자막의 무음 구간은 **응시자(사용자)가 녹음하려고 문항을 일부러 건너뛴 결과**이므로 길이가
제각각이다. 시험 소프트웨어가 정한 응답 허용시간이 아니다.

- Task A 문항 사이 : 6.5초 / 13.6초 / 7.3초 / 6.6초 (test01)
- Task A 턴 사이 : 6.8초 ~ 36.4초 (test01)
- Task C Q1 뒤 : 37.0 ~ 38.3초 (test02·03·04)

→ **응답시간은 `세트샘플.pdf` 의 공식 표기를 따른다** : Ⅰ-A 20초 · Ⅰ-B 20초 ·
Ⅱ-A 30초(Follow-up 90초) · Ⅱ-B 30초 · Ⅱ-C 90초.
자막에서 얻을 수 있는 신뢰 정보는 **문항 순서와 발화 내용**이다.
