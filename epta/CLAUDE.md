# CLAUDE.md — EPTA 항공영어구술능력시험(조종사용) 연습 프로젝트

## 0. 목적
매일 EPTA 실전 모의 세트를 1개씩 생성하고, 사용자가 푼 답을 채점·피드백한다.
기준 자료는 두 가지다:
- `세트샘플.pdf` (한국교통안전공단 공식 샘플세트 Ⅰ·Ⅱ·Ⅲ) — 시험의 **형식·구조·템플릿** 기준
- `관제용어정리.pdf` (서울지방항공청 관제통신국 관제과) — 실제 **관제용어·표현** 기준

이 두 PDF를 분석해서 정리한 결과가 각각 `reference/exam-spec.md`(형식)와
`reference/atc-terminology.md`(용어)에 들어 있다. **세트를 만들 때도, 채점할 때도 이 두
문서를 먼저 읽고 그 기준을 따른다** — PDF를 매번 다시 읽을 필요 없이 이 정리본을 우선
참고하되, 애매하거나 새로운 상황이 나오면 원본 PDF를 다시 확인한다.

---

## 1. 절대 규칙 (위반 금지)

1. `세트샘플.pdf`의 **형식·분량·난이도·문체를 그대로** 따른다. 단, **시나리오 내용은 매번 새로 창작**한다. 샘플 3세트에 나온 상황(과다 연료/디퓨얼링, 계기 상실, 스로틀 고착, TCAS RA, 웨이포인트 DVETO, yaw 조종 곤란)은 재사용하지 않는다.
2. 응시자 콜사인은 **항상 HL123**.
3. `sets/EPTA_XX.md`에는 **정답·모범답안·힌트를 절대 포함하지 않는다.** 대신 모든 문항 아래에 `[정답]` 기입란을 비워 두어 사용자가 직접 채워 넣게 한다. 모범답안은 미리 별도 파일로 저장해두지 않고, 사용자가 채점을 요청했을 때 `EPTA_XX_feedback.md`를 만들면서 그 안에만 쓴다. 문제를 만들 때 채팅 응답으로도 정답을 미리 말하지 않는다.
4. 교신은 **ICAO 표준교신용어(Doc 9432 / PANS-ATM Doc 4444)** 기준. 숫자는 샘플과 동일한 관례로 표기한다.
   - FL260 → `FL two six zero`, RWY 32 → `runway three two`, 09 → `zero niner`
   - 주파수: `121.65` = "one two one decimal six five"
   - 게이트/유도로 문자: `Gate Bravo 6`, `taxiway Golf 2`
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
7. 이미 만든 세트와 시나리오가 겹치지 않도록, 새 세트를 만들기 전 `progress/log.md`(누적 약점·최근 등급)와 `progress/expressions.md`(반복 지적된 표현 상세)를 읽고 최소 2문항 이상 최우선 약점을 겨냥한다. 기존 `sets/` 폴더도 먼저 읽는다. 문항에 쓸 관제용어가 애매하면 `reference/atc-terminology.md`를 먼저 확인하고, 거기에도 없으면 원본 `관제용어정리.pdf`나 `세트샘플.pdf`를 다시 찾아본다.

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

**`sets/EPTA_05.md`는 실제 EPTA 샘플 녹음본을 그대로 재현한 세트로, 아래 세칙에 반영된 신규
패턴(bundled request-in-readback, ATC-supplied contingency, 시차형 Informing 등)의 실제 출제
사례다. 시나리오 자체는 재사용 금지 목록에 남아있지만(`reference/used-scenarios.md` 참고),
문항 스타일·패턴의 기준으로 앞으로 계속 참고한다.** 자세한 분석은 `reference/exam-spec.md` §10.

### Part Ⅰ Task A (4문항)
- ATC 한 줄 지시 → 응시자가 full readback.
- 4문항은 서로 다른 비행 단계에서 뽑는다: 지상(pushback/taxi/backtrack), 이륙(clearance/wake turbulence), 상승·순항(FL 지정, speed, direct), 접근·착륙(runway change, circling).
- 최소 1문항은 **readback 필수요소만 복창하고 부가정보는 빼야 하는 문제**로 만든다.
  (예: "winds 220 at 10, cleared for takeoff runway 24" → 바람은 복창 불필요)
- 최소 1문항은 요소가 5개 이상인 긴 지시(SID/transition/squawk/FL 등)로 만든다.
- **(표준 반영, EPTA_05 실제 샘플 음성 확인, 2026-08-21/22)** 아래 두 패턴은 이제 "가끔"이 아니라
  **매 세트 Task A 4문항 중 최소 1문항에 반드시 포함**한다 (둘 다 넣어도 되고, 세트마다 번갈아도 됨):
  - ATC 지시 끝에 **"report speed"/"report ready" 같은 짧은 요청을 덧붙여, 복창과 함께 그
    정보까지 한 응답에 담아야 하는 문항**. 정답에는 복창 + 요청받은 정보(예: 현재 속도)가
    둘 다 있어야 한다.
  - climb/cross 제약에 **"if unable, maintain (대안고도) until (지점)"처럼 관제사가 먼저
    contingency를 주는 문항**. 이때는 그 contingency 문구까지 통째로 복창해야 한다 —
    "unable+request" 문항(부가정보 없이 조종사가 스스로 대안을 요청)과는 다른 유형이니
    혼동하지 말 것.

### Part Ⅰ Task B (6문항)
각 문항 = ① 영어 상황설명(2~3문장) → ② ATC 한 줄 교신 → ③ 응시자 응답.
6문항 안에 다음 기능이 골고루 들어가야 한다.
- **Acknowledging**: 지시를 그대로 수용
- **Informing**: 기상/상태 보고 (turbulence, icing, flight condition). **(표준 반영, EPTA_05 실제
  샘플 음성 확인, 2026-08-21/22)** 2세트에 한 번 이상은 이 Informing 문항을 **"지금 목격한 것을
  나중 시점에 보고"하는 시차형**으로 만든다 (예: "이륙 활주 중 조류 활동을 목격 → 이륙 후 ATC에
  보고").
- **Unable + reason**: 성능·기상·장비 사유로 거부
- **Correcting own mistake**: 자신의 오류 정정 ("my mistake, now turning...")
- **Requesting**: 편차·속도·고도 변경 요청
- **Clarifying**: confirm / say again / verify
- 1~2문항은 `🖥 [ ... ]` 텍스트 클루를 준다.

### Part Ⅱ Task A (7~12턴 + Follow-up)
- 서두에 `Flight Paths` 박스로 3개 비행 단계를 예고한다. (예: Clearance / Apron / Taxi, 또는 Approach / Landing / Taxi, 또는 Cruise / Descent / Approach)
- `Initial Situation` → 턴 진행 → `Situation Update` → 턴 진행 → `Situation Update` 형태로 2~3회 상황 전환.
- **정상 운항 중 경미한 변경/불편** 수준을 유지한다. 비상 선포는 Task A에 넣지 않는다.
  (적합 예: 게이트 점유, 지상조업 지연, ATIS 변경, SID 변경, 유도로 폐쇄, 후방 항공기 압박, 활주로 변경)
- 각 턴은 `☞ 지시문` 한 줄로 응시자가 무엇을 말해야 하는지 알려준다.
- 이미지가 필요한 턴에는 `(Qn)` 표기 후 SVG를 삽입한다. 세트당 이미지 1~2개.
- **"report your position" 류 지시를 낼 때는 그 직전에 반드시 구체적 위치·고도·거리(픽스명, 마일, 고도 등)를 `Situation Update`나 지문에 먼저 준다.** (샘플 예: "You are now over ASALT intersection at 3,000ft." 처럼) 위치를 안 준 채 "report your position"만 던지면 응시자가 근거 없이 답해야 하는 결함 있는 문항이 된다.
  채점 시 정답 형태도 이 관례를 따른다: 픽스가 없으면 **"descending/leaving through X for Y"**(고도
  통과 중), 픽스가 주어졌으면 **"over [픽스] at [고도]"** — 샘플 Ⅰ·Ⅱ·Ⅲ 전체에서 "활주로까지 몇
  마일" 같은 거리 기반 위치 표현은 한 번도 안 나온다.
- 마지막 Follow-up 질문은 반드시 `You have just finished Task A, as the pilot of Hotel Lima one two three.`로 시작하고, 롤플레이에서 겪은 문제에 대한 **경험·의견형** 질문을 던진다.

### Part Ⅱ Task B (7~12턴)
- **단일** 비정상/비상 사건. 사건을 두 개 섞지 않는다.
- 전개: 정상 교신 → 사건 발생 → 상황 보고/의도 전달 → 관제 협조 → 해결 또는 착륙 준비.
- 최소 1턴은 fuel/SOB, 최소 1턴은 intentions 진술을 포함한다.
- plain English 비중을 Task A보다 높게 잡는다.
- **여기 나오는 ATC 대사 5~7줄은 Task C에서 그대로 다시 쓰이므로 정확히 기록해 둔다.**

### Part Ⅱ Task C (2문항)
- `☞ Now listen to the controller's radiotelephony messages.` 아래에 Task B의 ATC 대사만 순서대로 나열한다. (조종사 대사는 넣지 않는다)
- Q1: `What happened to your aircraft (HL123)? Explain the nature of the incident.`
- Q2: `How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.`
- 이 두 문항은 문구를 고정한다.

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

    [정답]


    ---

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
      exam-spec.md           ← 시험 형식·구조·템플릿 (세트샘플.pdf 기반)
      atc-terminology.md     ← 관제용어·표현 (관제용어정리.pdf + 세트샘플.pdf + 웹조사 기반)
      used-scenarios.md
    sets/
      EPTA_01.md            ← 문제 + [정답] 빈칸. 사용자가 여기에 직접 작성
      EPTA_01_feedback.md   ← 채점 요청 시에만 생성. 문항별 "내 답안 ** 정답/교정 답안" + 등급
      EPTA_02.md
      EPTA_02_feedback.md
      images/
        EPTA_01_q1.svg
        EPTA_02_q1.svg
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
