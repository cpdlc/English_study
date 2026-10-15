# CLAUDE.md — EPTA 항공영어구술능력시험(조종사용) 연습 프로젝트

## 0. 목적
EPTA 실전 모의 세트를 생성하고, 사용자가 푼 답을 채점·피드백한다.

기준 자료는 **신뢰 순위**가 있다. 위쪽이 이긴다.

1. **`reference/transcripts/test01~04.txt`** — 실제 EPTA 출제 음성 4세트를 녹음해 받아쓴
   자막. 형식·문항 분포·지시문 문구·ATC 문체의 **최종 기준**. test01~03 은 공식 샘플
   Ⅰ·Ⅱ·Ⅲ 의 실제 음성이고, **test04 는 `세트샘플.pdf` 에 없는 신규 세트**다.
2. `세트샘플.pdf` (한국교통안전공단 공식 샘플세트 Ⅰ·Ⅱ·Ⅲ) — 안내문·요령 표·응답시간 등
   음성에서 알 수 없는 **화면 요소**의 기준
3. `관제용어정리.pdf` (서울지방항공청 관제통신국 관제과) — **관제용어·표현** 기준

이것들을 분석해 정리한 결과가 `reference/exam-spec.md`(형식·분포·고정구),
`reference/atc-terminology.md`(용어 — §12 가 실제 음성 수집분),
`reference/used-scenarios.md`(재사용 금지 소재)에 들어 있다.
**세트를 만들 때도, 채점할 때도 이 세 문서를 먼저 읽고 그 기준을 따른다.**
원본을 매번 다시 읽을 필요는 없지만, 애매하거나 새로운 상황이면 자막·PDF 를 다시 확인한다.

PDF 와 음성이 어긋나는 지점은 `exam-spec.md` §9 에 정리돼 있다 — **그때는 음성을 따른다.**

---

## 1. 절대 규칙 (위반 금지)

1. **형식·분량·난이도·문체는 실제 출제 음성 4세트를 그대로** 따른다 (`reference/exam-spec.md`).
   단, **시나리오 내용은 매번 새로 창작**한다. 실제 4세트에 나온 상황·공항명·웨이포인트명은
   재사용하지 않는다 — 금지 목록 전체는 `reference/used-scenarios.md` §A 에 있고, **세트를
   만들기 전 반드시 그 문서를 먼저 읽는다.** (과다연료/디퓨얼링, 계기 다수 상실, 스로틀 고착,
   TCAS advisory, DVETO 웨이포인트 미발견, yaw 조종 곤란, 낙뢰 피격/윈드실드+FMC,
   B747 외부 이상 발견 등)
2. 응시자 콜사인은 **항상 HL123**.
3. `sets/EPTA_XX.md`에는 **정답·모범답안·힌트를 절대 포함하지 않는다.** 대신 모든 문항 아래에 `[정답]` 기입란을 비워 두어 사용자가 직접 채워 넣게 한다. 모범답안은 미리 별도 파일로 저장해두지 않고, 사용자가 채점을 요청했을 때 `EPTA_XX_feedback.md`를 만들면서 그 안에만 쓴다. 문제를 만들 때 채팅 응답으로도 정답을 미리 말하지 않는다.
4. 교신은 **ICAO 표준교신용어(Doc 9432 / PANS-ATM Doc 4444)** 기준. 숫자는 샘플과 동일한 관례로 표기한다.
   - FL260 → `FL two six zero`, RWY 32 → `runway three two`, 09 → `zero niner`
   - 주파수: `121.65` = "one two one decimal six five"
   - 게이트/유도로 문자: `Gate Bravo 6`, `taxiway Golf 2`
   - **`tree` = 3** : 실제 출제 음성 한 세트(test04)는 전편에서 `flight level tree 70`,
     `runway tree 4L`, `heading tree 40` 처럼 ICAO 권고 발음을 그대로 쓴다. 출제 시 그렇게
     표기해도 되고, **채점 시 `tree`/`three` 는 둘 다 정답**으로 본다.
   - **표준 필수어·관제용어는 `reference/atc-terminology.md`를 최우선 기준으로 따른다**
     (`reference/exam-spec.md` §8·§9는 그 요약/보조). 특히: "confirm ~?"에는 yes/no가 아니라
     **AFFIRM/NEGATIVE**로 답한다. ROGER는 CONFIRM·READ BACK 요구나 AFFIRM/NEGATIVE로
     답해야 하는 질문에 내용 없이 단독으로 쓸 수 없다(내용과 함께면 정상). 정보를 원할 때는
     **REQUEST + 명사(구)** 패턴("request expected delay" 등, REQUEST 뒤에 동사구를 붙이지
     않음). **REPORT**는 관제사가 조종사에게 정보를 요구할 때 쓴다. `atc-terminology.md` §2의
     **필수 복창(readback) 7항목**(비행로 허가/활주로 관련 지시/사용활주로·고도계·squawk·
     고도·기수·속도·전이고도)은 절대 빠뜨리면 안 된다. 문제를 만들 때도, 채점할 때도 이 기준을
     적용한다.
5. **Part 2 Task C는 Task B의 ATC 교신을 그대로 재사용**한다. 따라서 세트는 반드시 **통째로 한 번에** 생성한다. 파트 단위로 쪼개서 만들지 않는다.
6. 안내문·시험 요령 표 등 한국어 부분은 샘플의 문구를 유지하고, 문제 본문(Directions, 상황설명, ATC 대사)은 **영어**로 쓴다.
7. 새 세트를 만들기 전 **순서대로 네 문서를 먼저 읽는다.**
   ① `reference/exam-spec.md` — 형식·문항 분포·지시문 고정구
   ② `reference/used-scenarios.md` — 재사용 금지 소재와 고유명사
   ③ `progress/log.md` — 누적 약점·최근 등급 → **최소 2문항 이상 최우선 약점을 겨냥**
   ④ `progress/expressions.md` — 반복 지적된 표현 상세
   기존 `sets/` 폴더도 확인해 다음 세트 번호를 정한다. 문항에 쓸 관제용어가 애매하면
   `reference/atc-terminology.md`(특히 실제 음성에서 수집한 §12)를 먼저 확인하고, 거기에도
   없으면 원본 `관제용어정리.pdf` 나 음성 자막 `reference/transcripts/` 를 다시 찾아본다.

---

## 2. 시험 구조 (이 구성을 반드시 유지)

| 파트 | 태스크 | 구성 | 응답시간 | 평가 성격 |
|---|---|---|---|---|
| Part Ⅰ | A. Readback and Hearback | 4문항 | 20초 | 표준교신용어 readback |
| Part Ⅰ | B. Checking, Clarifying, Confirming, Informing | 6문항 | 20초 | 상황정보 → ATC 교신 → 응대 |
| Part Ⅱ | A. Role-play & Follow-up | 7~12턴 + Follow-up 1~2문항 | 30초 / Follow-up 90초 | 정상 비행 + 경미한 변경 |
| Part Ⅱ | B. Extended Role-play | 7~12턴 | 30초 | 비정상/비상 **단일** 사건 |
| Part Ⅱ | C. Reporting about Task B | 2문항 | 90초 | Task B 리포팅 (plain English) |

---

## 3. 태스크별 출제 세칙

**모든 세칙은 `reference/exam-spec.md` 의 4세트 전수 분석을 근거로 한다.** 실제 출제 음성
4세트(test01~04)를 대조해 얻은 분포이므로, 애매하면 그 문서의 해당 절을 먼저 확인한다.
문항 말미 지시문은 고정이다 — Task A 는 `Record your full readback.`, Task B 는
`Record your response.`

### 세트 스타일 — 4세트에 1번은 test04 계열로

실제 출제 음성 4세트 중 **test04 는 나머지 3세트와 결이 뚜렷하게 다르다.** 공식 EPTA 문제로
실제 출제된 것이므로 배제하지 말고, **4세트에 1번 정도** 이 스타일로 낸다.

| | test01~03 계열 (기본) | **test04 계열 (4세트에 1번)** |
|---|---|---|
| 숫자 발음 | `three` | **`tree` = 3** 을 전편에 일관되게 |
| 배경 | 가상 영어권 지명 | **한국 배경 혼용** (Incheon, Seoul Radio 등 실제 지명 가능) |
| 지시문 | 기능 1~2개 | **기능 2~3개를 한 문장에** (`make a readback, and a request with a reason`) |
| Ⅰ-B 발신형 | 거의 없음 | **ATC 대사 없는 문항 2개** |
| Flight Paths | 2~3단계 박스 | **박스 생략** |
| 소재 | 일반 항로·접근 | **PIREP, offset, 선행기 이상 발견** 등 실무형 |

이 스타일로 낼 때도 **문항 수·응답시간·Task C 문구는 똑같이 고정**이다. 바뀌는 것은 위 표의
항목뿐이다. 어느 계열로 낼지는 `reference/used-scenarios.md` §B 의 기록을 보고 결정한다 —
직전 3세트가 모두 기본 계열이었으면 다음은 test04 계열로 낸다.

### Part Ⅰ Task A (4문항)
- ATC 한 줄 지시 → 응시자가 full readback.
- **★ 분량 상한 (실측 기준, 반드시 지킨다)** — 실제 출제 4세트 16문항을 세어본 결과
  **콜사인을 뺀 ATC 지시는 3~18단어, 평균 11.2단어**다. 따라서:
  - **18단어를 넘기지 않는다.** 20초 안에 복창할 수 없는 양이 된다.
  - **4문항 중 1문항은 10단어 이하로 짧게** 만든다. 실제 세트의 최단은 3·8·9·8단어로,
    매 세트 호흡을 잡아주는 쉬운 문항이 하나씩 있다. 이게 없으면 처음부터 끝까지
    전력이 되어 실제보다 어려운 세트가 된다.
  - 4문항 평균을 **11~13단어**에 맞춘다.
  - 긴 클리어런스 문항도 **요소 5~6개 / 18단어 이내**로 끝낸다 (실제 최장은 test03-Q4 의
    18단어·6요소). 요소를 8개까지 넣으면 30단어를 넘겨 실제와 전혀 달라진다.
  - 세트를 만든 뒤 반드시 단어 수를 세어 확인한다.
- 비행단계는 지상 1~2 / 이륙·출발 1 / 상승·강하·순항 1~2 / 접근·착륙 0~1 범위에서 배치한다.
  **"서로 다른 4단계"를 강제하지 않는다** — 실제로 지상 2문항, 상승 2문항인 세트가 있다.
- **매 세트 1문항 이상** : readback 필수요소만 복창하고 부가정보는 빼야 하는 문항
  (`winds 220 at 10, cleared for takeoff runway 24` / `caution wake turbulence` / `due to ~`)
- **매 세트 1~2문항** : 조건부·시점 지정 지시
  (`expedite climb until passing FL280`, `reduce speed 20 knots when level`,
  `after departure fly heading 260`, `after reaching THAMES proceed on course`)
- **2세트에 1회** : 5요소 이상 긴 클리어런스(목적지·SID·transition·FL·활주로·squawk).
  매 세트 넣지 않는다 — 실제로는 4세트 중 1문항뿐이었다.
- **가끔** : `report reaching` 처럼 복창 + 향후 보고 약속을 함께 요구하는 부가 요청,
  또는 ATC 가 먼저 `if unable, maintain (대안) until (지점)` contingency 를 주는 문항.
  후자는 조종사가 스스로 대안을 요청하는 "unable+request" 유형과 다르니 혼동하지 말 것.

### Part Ⅰ Task B (6문항)
문항은 **두 형태**가 있다. 하나로 고정하지 않는다.
- **(가) 응답형** : ① 영어 상황설명(2~3문장) → ② ATC 한 줄 교신 → ③ 응시자 응답
- **(나) 발신형** : ① 상황설명 → **ATC 대사 없이** → ② 조종사가 먼저 호출
  (`Contact approach. Make a confirmation and clarify your intention.`)
  → **6문항 중 0~2문항**을 발신형으로 둔다.

기능 배분 기본값 (실제 4세트 24문항 분포 반영 — Unable 계열이 전체의 1/3) :
- **Unable + reason (+대안) 2문항** ← 가장 많이 나오는 기능
- **Requesting 1문항** (REQUEST + 명사구)
- **Informing 1문항** (기상·상태 보고). 2세트에 한 번 이상은 "지금 목격한 것을 나중 시점에
  보고"하는 시차형으로 만든다.
- **Clarifying 1문항** (confirm / say again / verify)
- **Correcting own mistake 또는 Acknowledging 1문항**

추가 필수 사항 :
- **매 세트 1문항은 `Confirm maintaining ~?` 함정형**으로 낸다. 실제 상태가 질문과 다르거나
  유지 불가인 상황을 깔고, 정답은 **NEGATIVE + 실제 상태 + 정정/대안**이 되게 한다.
  (4세트 중 3세트에 등장한 핵심 패턴)
- **2문항 이상은 복합 지시**로 낸다 — 한 지시문이 2~3개 기능을 동시에 요구하는 형태.
  (`make a readback, and a request with a reason` / `Report your status and make a request`
  / `Explain your situation and request to go around`)
- 1~2문항은 `🖥 [ ... ]` 텍스트 클루를 준다.
- 지시문은 `reference/exam-spec.md` §3-5 의 고정구 사전에서 골라 쓴다.

### Part Ⅱ Task A (7~12턴 + Follow-up)
- `Flight Paths` 박스는 **2단계 또는 3단계로 예고하거나, 아예 생략한다.** 3단계 고정이 아니다.
  고정 문구 : `In this scenario, you'll be the pilot flying Hotel Lima 123, which goes
  through [two/three] flight stages. [단계명 나열].`
- `Initial Situation` → 턴 진행 → `Situation Update` 를 **1~3회** 넣는다.
- 난이도 : 기본은 **정상 운항 중 경미한 변경·불편** 수준(게이트 점유, 지상조업 지연, ATIS
  변경, SID 변경, 유도로 폐쇄, 후방 항공기 압박, 활주로 변경, 웨이포인트 확인 요청).
  단 **4세트에 1번은 Task A 에도 비정상·비상을 넣는다** — 실제 test02 는 Task A 안에서
  스로틀 고착 → troubleshoot 시간 요청 → divert → **비상 선포 → approach 핸드오프**까지 갔다.
- 각 턴은 `☞ 지시문` 한 줄로 응시자가 무엇을 말해야 하는지 알려준다. **절반 이상의 턴을
  복합 지시**로 쓴다 (`respond accordingly and inquire how long it will take`,
  `give your full readback. Then, inquire about the traffic on your TCAS screen`,
  `respond negatively with a reason`). 지시문은 `exam-spec.md` §4-6 사전에서 고른다.
- **세트당 2~3턴은 ATC 가 비표준 구어체로 말하게 한다.** 실제 출제 음성의 ATC 는
  `Do what you need to do.` / `Any idea when you are going in?` / `I'm sorry about that.` /
  `once the tug crew gets you established on lane Alpha, if they can just pull you forward
  so I can push behind you at gate 87, I'd appreciate it.` 처럼 말한다. 교과서적 대사만
  쓰면 Comprehension 을 평가할 수 없다. (`atc-terminology.md` §12-2)
- 이미지가 필요한 턴에는 `(Qn)` 표기 후 SVG 를 삽입한다. 세트당 이미지 1~2개.
- **`report your position` 류 지시를 낼 때는 그 직전에 반드시 구체적 위치·고도·거리를
  `Situation Update` 나 지문에 먼저 준다.** (모범 예 : `You are now over ASALT intersection
  at 3,000 feet.`) 위치를 안 준 채 던지면 응시자가 근거 없이 답해야 하는 결함 문항이 된다.
  채점 시 정답 형태도 이 관례를 따른다 — 픽스가 없으면 **`descending through X for Y`**,
  픽스가 주어졌으면 **`over [픽스] at [고도]`**. 거리 기반("활주로까지 몇 마일")은 실제
  4세트에서 조종사 위치보고로 한 번도 안 나왔다.
- **Follow-up 질문은 반드시 2~3부 구조로 낸다.**
  ① `In this situation, ...` 로 롤플레이에서 왜 그렇게 했는지 묻고
  ② `In your role as a pilot, ...` / `From your own experiences, ...` / `How can ~ benefit
  other aircraft?` 로 일반 경험·지식으로 넘어가고
  ③ 가능하면 **`Give an example.`** 로 닫는다.
  전치구 `You have just finished Task A, as the pilot of Hotel Lima one two three.` 는
  붙여도 되고(test01·02·03) `Follow up question.` 만 써도 된다(test04).

### Part Ⅱ Task B (7~12턴)
- **단일** 비정상/비상 사건. 사건을 두 개 섞지 않는다.
- 전개 : 정상 교신 1~2턴 → 사건 발생 → 상황 보고 + 현재 조치 + 시간·vectors 요청 → ATC 가
  대안·질문 제시 → intentions 진술 → **상황 변화(회복 또는 관제사 변심)** → 접근 방식 결정 +
  필요한 지원 요청 → 최종 클리어런스 복창.
- **intentions 진술은 거의 매 세트 포함**한다 (4세트 중 3세트).
- **MAYDAY/PAN-PAN 선포와 fuel/SOB 보고는 4세트에 1번만 넣는다.** 실제 4세트 중 비상 선포와
  fuel/souls on board 가 나온 것은 test03 하나뿐이다 — 계기 다수 상실(test01)도, 낙뢰
  피격(test04)도 비상 선포 없이 전개했다. 매 세트 MAYDAY 를 넣는 것은 실제와 다르다.
- 사건 중간에 **회복 또는 관제사 변심**을 한 번 넣는다
  (test01 계기 일부 회복 / test04 FMC 회복 + `I cannot give you that heading anymore`).
- plain English 비중을 Task A 보다 높게 잡는다.
- **분량** : Part Ⅱ 의 ATC 대사는 Task A(Ⅰ-A)보다 길어도 된다 — 실제 출제 음성도 구어체로
  30단어대까지 간다(test01 의 pushback 안내, test02 의 `give me a call when you get on the
  ground…`). 다만 **40단어를 넘기지 않는다.** 응답시간이 30초라 그 이상은 받아 적을 수 없다.
- **여기 나오는 ATC 대사 5~8줄은 Task C 에서 그대로 다시 쓰이므로 정확히 기록해 둔다.**

### Part Ⅱ Task C (2문항)
- `☞ Now listen to the controller's radiotelephony messages.` 아래에 Task B 의 ATC 대사만
  순서대로 나열한다. (조종사 대사는 넣지 않는다)
- Q1 : `What happened to your aircraft (HL123)? Explain the nature of the incident.`
- Q2 : `How do you think the incident was handled by the air traffic controller? Do you feel
  the situation could have been handled differently? Make a comment from a pilot's point of
  view.`
- 이 두 문항은 문구를 고정한다. 4세트 전부 동일했다.

---

## 3-1. 세트를 만든 뒤 반드시 검사한다 (필수)

세트를 만들거나 고친 직후 **`python practice/check.py EPTA_XX`** 를 돌린다.
자막 4세트에서 실측한 기준으로 21개 항목을 기계가 대조한다 — 문항 수·응답시간·문항 ID 중복·
정답 유출·Task A 단어수(상한 18, 10단어 이하 1문항, 평균 10~14)·Part 2 ATC 40단어 상한·
금지 고유명사·Task C 가 Task B 대사를 그대로 담았는지·말미 지시문·`Confirm maintaining` 함정형·
발신형 개수·Follow-up 구조·Task C 고정 문구.

**✗ 가 하나라도 나오면 사용자에게 세트를 주지 않는다.** 고치고 다시 돌려 전부 ✓ 가 된 뒤에
빌드·배포한다. 검사기가 틀렸다고 판단되면 검사기를 고치되, 기준 자체를 느슨하게 바꾸지 않는다.

---

## 4. 텍스트 클루 · 이미지 규칙

**텍스트 클루** (화면에 뜨는 힌트) 표기:

    🖥 [ request reduce speed 280 knots ]

**이미지**: 사진은 생성할 수 없으므로 **SVG로 직접 그린다.**
`sets/images/EPTA_XX_qN.svg`로 저장하고 `EPTA_XX.md`에 `![](images/EPTA_XX_qN.svg)`로 삽입한다.
(세트 번호를 파일명에 넣어 여러 세트의 이미지가 한 폴더에서 섞이지 않게 한다.)
- 실제 시험은 **15초** 동안만 보여주므로, 요소를 최소화하고 라벨을 크게 쓴다.
- 자주 쓰는 유형: 공항 지상도(게이트·유도로·자기 위치 화살표), 조종실 부품 상태(정상/고장 라벨), 고도 프로파일(현재 FL → 목표 고도 화살표), ND/TCAS 화면(트래픽 심볼 + 상대고도).
- 이미지에 답을 직접 써주지 않는다. 상태만 보여준다.

**예외 — 접근 차트**: 접근 차트가 필요한 문항은 SVG로 그리지 말고 FAA 공개 차트(무료 공개)를 웹에서 받아 `images/`에 저장한 뒤, 해당 웨이포인트 위치만 빨간 원과 확대 콜아웃으로 표시해서 쓴다. 샘플세트Ⅲ의 "Simplified Approach Chart (Not for Navigation or Altitudes)" 형식을 따르고, 같은 주의 문구를 상단에 넣는다. 개인 연습 용도로만 사용한다.

---

## 4-1. 답안 기입란 형식 (필수)

모든 문항은 반드시 아래 형식으로 끝난다. `[정답]` 아래는 **빈 줄 2개**로 두고, 어떤 힌트도 넣지 않는다.

    **P1A-Q1** 🎙 20초
    ATC : HL123, cleared direct ATLAS.

    Record your full readback.

    [정답]


    ---

**★ 문항 말미 지시문은 반드시 넣는다.** 자막 4세트 모두 예외 없이 ATC 지시 뒤에 이 문구를
읽어준다 — Part Ⅰ A 는 `Record your full readback.`, Part Ⅰ B 는 `Record your response.`
음성으로도 나와야 실제와 같은 연습이 되므로 md 에 한 줄로 써 둔다 (내레이터 목소리로 TTS 됨).
Part Ⅱ 는 `☞ 지시문` 이 그 역할을 하므로 따로 넣지 않는다.

- Part Ⅱ Task A·B의 롤플레이 턴도 동일하게 `[정답]` 란을 넣는다. (30초 표기)
- Part Ⅱ Task A Follow-up과 Task C는 90초 문항이므로 `[정답]` 아래 빈 줄을 4개 둔다.
- 각 문항 끝에 `---` 구분선을 넣어 문항 경계를 명확히 한다.
- 문항 번호는 파트별로 유일하게 매긴다: `P1A-Q1`, `P1B-Q3`, `P2A-Q7`, `P2B-Q4`, `P2C-Q1`. 채점 시 이 ID로 대조한다.

---

## 5. 파일 구조

    세트샘플.pdf
    관제용어정리.pdf
    CLAUDE.md
    reference/
      transcripts/           ← 실제 출제 음성 4세트 자막 (최우선 기준)
        test01.txt ~ test04.txt
      exam-spec.md           ← 시험 형식·분포·지시문 고정구 (자막 4세트 전수 분석)
      atc-terminology.md     ← 관제용어·표현 (§12 = 실제 음성 수집분)
      used-scenarios.md      ← 재사용 금지 소재·고유명사
      note-taking.md         ← 받아적기·복창 기법 (기호·CRAFT·한장요약)
    sets/
      EPTA_01.md            ← 문제 + [정답] 빈칸. 사용자가 여기에 직접 작성
      EPTA_01_feedback.md   ← 채점 요청 시에만 생성. 문항별 "내 답안 ** 정답/교정 답안" + 등급
      EPTA_02.md
      EPTA_02_feedback.md
      images/
        EPTA_01_q1.svg
        EPTA_02_q1.svg
    practice/
      build.py              ← md → mp3 + 배포용 HTML (web/ 아래로 출력)
      pages.py              ← 세트 목록·내 답안 보기 페이지 틀
      pull.py               ← 서버에 저장된 응답 내려받기 (채점 입력)
      push.py               ← 채점 결과 올리기 (폰에서 정답 확인)
      template.html         ← 풀이 화면 틀 (음성 인식·타이머·서버 전송)
      results/              ← pull.py 가 내려받은 응답 기록
    web/                    ← Vercel 배포 루트
      index.html            ← 세트 목록 (Test 1, Test 2 … 자동 갱신)
      r/index.html          ← 내 답안 보기
      s/EPTA_01/index.html  ← 풀이 화면
      audio/EPTA_01/*.mp3   ← TTS 음성
      api/submit.js         ← 문항별 응답 저장
      api/results.js        ← 응답 조회
      api/feedback.js       ← 채점 결과 저장·조회
    progress/
      log.md                ← 누적 성적·약점·사용한 시나리오 목록
      expressions.md         ← 외워야 할 표현 모음 (plain English 문법 패턴 + ATC 표준교신용어)

날짜 폴더를 만들지 않는다. 세트 번호는 `EPTA_01`, `EPTA_02`, ... 순서로 두 자리 일련번호를 매긴다.
새 세트를 만들기 전 `sets/` 폴더를 확인해 다음 번호를 정한다.
`problem-blank.md`, `answer.md` 같은 별도 백업/정답 파일은 만들지 않는다 — 모범답안은
채점 시점에 `EPTA_XX_feedback.md` 안에만 등장한다. 재응시하고 싶다는 요청을 받으면 그때
`EPTA_XX.md`의 `[정답]`란만 비운 새 파일(예: `EPTA_01_retry.md`)을 그 자리에서 만들어준다.

`EPTA_XX.md` 상단에는 항상 다음을 넣는다.
- 세트 번호와 날짜
- `안내` 박스 (메모 가능 / 문항당 1회 Say again)
- 각 파트 시작마다 Directions + 시험[응답] 요령 표

---

## 6. 채점 규칙

사용자가 "채점해줘"라고 요청하면, `EPTA_XX.md`의 `[정답]` 란을 읽어 `EPTA_XX_feedback.md`를
새로 만들고 다음 순서로 채점한다. 빈칸으로 남은 문항은 **무응답으로 처리하고 Level 1**을 준다.
넘어가지 않는다. **채점 시작 전 `reference/atc-terminology.md` §11 체크리스트를 훑어보고,
표준교신용어 판단은 그 문서를 1차 근거로 삼는다.**

### 6-1. 문항별 채점 — 필수 출력 형식
`EPTA_XX_feedback.md`의 각 문항은 반드시 아래 형식을 따른다. 문제(ATC 대사·상황설명·지시문)를
먼저 보여주고, 사용자가 쓴 답을 그대로 인용한 뒤, 그 옆에 `**`로 정답(readback 문항) 또는 교정
답안(자유응답 문항)을 붙여서 "문제 → 내 답안 → 정답"이 한 화면에서 바로 비교되게 한다.

    **P1A-Q1** ✅/⚠️/❌
    문제 : ATC : HL123, cleared direct ATLAS.
    내 답안 : (사용자가 [정답]에 쓴 원문 그대로)
    ** 정답/교정 답안 : (정답 또는 자연스럽게 고친 문장)
    - 누락된 필수 readback 요소 : ...
    - 표준교신용어 오류 : (예: "roger" 남용 — ROGER가 내용 없이 단독으로 CONFIRM/READ BACK을
      대체한 경우만 오류. "Roger, (실제 지시 내용)"처럼 값을 같이 말하면 정상. "yes/no"를
      AFFIRM/NEGATIVE 대신 쓴 경우, "unable" 누락, REQUEST 뒤에 명사가 아닌 동사구를 붙인 경우,
      콜사인 위치 오류, 숫자 발음 표기 오류 — 상세 기준은 `reference/atc-terminology.md`
      §11 채점 체크리스트 및 §2 필수 복창 항목)
    - 코멘트 : 불필요하게 길거나 짧은 응답 등 추가 지적

    ---

- "문제" 란에는 `EPTA_XX.md`에 있던 것을 그대로 옮긴다: Part Ⅰ B는 상황설명+ATC 대사, Part Ⅱ A/B
  롤플레이 턴은 `☞ 지시문`+ATC/Ground/Tower 대사(+🖥 클루), Follow-up과 Task C는 질문 문구
  자체. 절대 요약하거나 생략하지 않는다.

- readback류 문항(Part Ⅰ A/B, Part Ⅱ A/B 롤플레이)은 "정답"이 명확하므로 모범 readback을 적는다.
- **자유응답·plain English 문항(Follow-up, Task C, 그리고 Informing/Requesting/Unable/
  Correcting/Clarifying처럼 정해진 문구가 없는 롤플레이 응답 포함)의 "교정 답안"은 완전히 새로운
  문장으로 바꿔 쓰지 않는다.** 사용자가 원래 쓴 문장을 최대한 그대로 살리면서 ① 문법 오류를
  고치고 ② 빠진 내용(요구되는 정보·기능)을 최소한으로 보충하는 방식으로만 수정한다. 목적은
  "이렇게 쓰면 더 낫다"가 아니라 "내가 쓴 문장의 어디가 왜 틀렸는지" 사용자가 바로 보고 외울 수
  있게 하는 것 — 문장 구조·어휘 선택을 다른 스타일로 통째로 갈아엎지 않는다. 코멘트에는 정확히
  무엇을 고쳤는지(문법 vs 누락 내용) 구분해서 설명한다.
- **위치·거리·시간처럼 문제에 구체적 수치가 주어지지 않아 응시자가 그럴듯하게 지어내야 하는
  항목**은, "정답/교정 답안" 앞에 `(예시 — 값은 정해진 정답이 없음)`이라고 명시하고, 그 값 자체가
  아니라 "새 정보를 담은 문장을 구성했는지"만 채점 기준으로 삼는다. 이런 문항을 만들 때는
  가능하면 애초에 Situation Update로 구체적 값을 미리 줘서 이런 모호함이 생기지 않게 한다.
  - 값을 지어낼 때는 `descending through 6,000 for 4,000`처럼 **그럴듯한 숫자를 직접 채워
    넣는다** — `[position/distance info]`같이 빈 대괄호를 답으로 남겨두지 않는다.
  - **지문에 이미 고도·위치가 나와 있다면(예: "leveling off at 12,000ft") 그 값을 지어낼
    필요 없이 그대로 쓴다.** 이때 흔한 실수는 그 값을 "maintain 12,000"처럼 지시 복창
    동사로 말하는 것 — "**level at** 12,000" / "**leveling off at** 12,000"처럼 **현재
    상태를 보고하는 동사**로 바꿔야 위치보고가 된다. 위치를 몰라서 헤매는 게 아니라 동사
    선택이 문제인 경우가 많으니, 채점 코멘트에서 이 둘을 구분해서 짚어준다.
- 빈칸으로 남은 문항도 형식을 유지하되 `내 답안 : (무응답)`으로 표시하고 Level 1 처리한다.

### 6-1-1. 채점 시 감점하지 않는 것 (원래 구술시험이라는 점 반영)
이 시험은 원래 **말하기(구술)** 시험이고 사용자는 텍스트로 답을 입력한다. 따라서 아래는
표준교신용어 오류로 채점하지 않는다 (실제로 소리 내어 말할 때는 문제가 없다고 간주):
- **ICAO 알파벳을 한 글자로 줄여 쓴 경우** (예: `G` = Golf, `A B` = Alpha, Bravo). 실제 발화
  시에는 전체 단어로 발음한다고 가정한다.
- **철자가 틀렸어도 소리 내어 읽으면 의도한 단어와 같게 들리는 오탈자** (예: `baxtar`→Baxter,
  `decend`→descend, `reday`→ready, `runwy`→runway, `trobleshooting`→troubleshooting). 빠른
  타이핑 과정에서 생긴 오탈자로 보고 넘어간다.
- 같은 논리로, heading/altitude 등 표준 용어를 `hd`처럼 명백히 줄여 쓴 경우도 감점하지 않는다.
- **숫자를 아라비아 숫자로 쓴 경우** (예: `27`, `250`, `119.7`, `fl240`)도 감점하지 않는다.
  사용자가 실제로 말할 때는 자릿수별로 정확히 발음한다("two seven", "two five zero", "FL two
  four zero")고 간주한다. 숫자 **값 자체가 틀린 경우**(예: 지시받은 것과 다른 고도·속도를 씀)는
  당연히 그대로 감점한다 — 감점하지 않는 것은 "표기 방식"이지 "값의 정확성"이 아니다.

또한 **단어 자체가 다른 경우**(예: "clear" vs "cleared", "reduce" vs "increase", 시제 오류)는
오탈자·표기 방식이 아니라 실제 표준교신용어·문법·의미 오류이므로 위 예외에 해당하지 않고 그대로
감점한다.

**Pronunciation 채점에 대한 주의**: 위 조정으로 텍스트 답안에서 발음을 판단할 근거(숫자·알파벳
표기 관례)가 사실상 사라졌다. 따라서 Pronunciation 항목은 §6-2의 원칙대로 기본적으로
**"평가 보류"**로 처리하고, 등급 계산(최저값)에서는 제외한다. 다만 실제로 잘못된 단어를 쓴 경우
(예: 다른 단어로 대체, 존재하지 않는 표현)는 Vocabulary/Structure 쪽에서 감점한다.

### 6-2. ICAO 6개 항목 등급 (각 Level 1~6, 합격선 Level 4)

| 항목 | 등급 | 근거 |
|---|---|---|
| Pronunciation | | 텍스트 기반이므로 숫자·알파벳 표기 관례로만 판단, 판단 불가 시 "평가 보류" |
| Structure | | |
| Vocabulary | | |
| Fluency | | |
| Comprehension | | |
| Interactions | | |

- **최종 등급 = 6개 항목 중 최저값**. 이 규칙을 임의로 완화하지 않는다.
- Level 4 미만인 항목은 왜 4에 못 미치는지 명확히 쓴다.

### 6-3. 태스크별 총평
Part Ⅰ A/B, Part Ⅱ A/B/C 각각 한 문단.

### 6-4. 다음 학습 과제
- 반복되는 약점 3개
- 외워야 할 표현 5개 (영어 원문 + 한국어 뜻)

### 6-5. 로그 갱신
`progress/log.md`에 날짜·최종등급·약점 태그·사용한 시나리오를 한 줄 추가한다. 이번 채점에서
새로 나온 문법·표현 교정 사례(§6-4의 "외워야 할 표현" 포함)는 `progress/expressions.md`에도
"내 표현 → 고친 표현" 형식으로 이어서 추가한다 — 이미 있는 패턴이면 표는 그대로 두고 사례
칸에 세트 번호만 덧붙인다.

### 6-5-1. 채점 결과를 폰으로 올리기
`EPTA_XX_feedback.md` 를 쓴 뒤 **`python practice/push.py EPTA_XX`** 를 돌린다. 문항별
판정(✅⚠️❌)·정답/교정 답안·지적사항과 최종 등급이 서버에 올라가고, 배포 페이지의
**내 답안 보기**(`/r/?set=EPTA_XX`) 화면에서 "내 답안 ↔ 정답" 이 나란히 보인다.
모범답안은 배포 HTML 에 들어가지 않으므로 비밀키(`#k=...`)를 가진 사람만 볼 수 있다.

### 6-6. 파일 보호
채점 중 `EPTA_XX.md`를 **절대 덮어쓰거나 정리하지 않는다.** 사용자의 답안이 들어 있다.
채점 결과는 반드시 별도 파일 `EPTA_XX_feedback.md`에 쓴다. 재응시를 원하면 그때 요청받아
`[정답]`란만 비운 새 파일을 만들어준다(§5 참고).

---

## 7. 채점 톤
- **냉정하게 채점한다.** "잘하셨어요" 같은 상투적 칭찬을 붙이지 않는다.
- 애매하면 낮은 등급을 준다. 실제 시험은 관대하지 않다.
- 다만 지적은 항상 "무엇을 어떻게 고칠지"까지 포함한다.
- 잘한 부분은 근거와 함께 한 줄로만 언급한다.
