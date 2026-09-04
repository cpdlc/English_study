# 사용된 시나리오 목록

새 세트를 만들기 전 이 파일과 `sets/` 폴더를 먼저 읽고, 아래 시나리오와 겹치지 않는
새 상황을 창작한다. 새 세트를 완성할 때마다 이 파일 하단 "생성된 세트" 표에 한 줄씩 추가한다.

CLAUDE.md 규칙 1에 의해 아래 샘플 3세트의 시나리오는 **재사용 금지**:
과다 연료/디퓨얼링, 계기 상실, 스로틀 고착, TCAS RA, 웨이포인트 DVETO(철자 확인),
yaw 조종 곤란.

---

## 샘플세트 Ⅰ

### Part Ⅰ Task A (readback 소재)
1. Cleared direct ATLAS (직항 클리어런스)
2. Stop climb at FL260 due to traffic
3. Caution wake turbulence, runway 32, cleared for takeoff
4. Start up/pushback approved, long pushback, tail east, until abeam gate 34

### Part Ⅰ Task B (상황 소재)
1. Cleared for takeoff runway 09, behind landing traffic
2. Descend FL290, approaching FIR boundary, contact Tokyo control 121.65
3. Cruising FL210, moderate turbulence, ATC requests flight condition
4. Climb restriction to cross Johnson VOR — unable due to performance
5. 10도 우선회 지시를 좌선회로 착각 → 정정("my mistake")
6. FRISO 웨이포인트 통과시각(0100Z) 요구 — 최대속도로도 0103Z 도착, unable

### Part Ⅱ Task A — 목적지: Smith Airport / 3단계: Clearance, Apron, Taxi
- Initial: Clearance delivery 요청 → route revision copy 준비 → full clearance readback
  (Smith 1.5 DME, HAPIE, 5000ft, FL350, squawk 1766) → hold for release
- Situation Update 1: Gate Alpha 89에서 pushback/startup 요청 → **연료 과다 → burn off
  또는 defuel 필요** → ground ops에 defueling time 문의 → defueling 불가, 30분 홀딩 필요
- Situation Update 2: Golf 유도로 홀딩쇼트, taxi 요청 → Gulfstream 타이어 펑크로 **wingtip
  clearance 불확실 → 현재 위치 홀드**
- Follow-up: 램프에서 발견한 문제와 해결 방법(연료 과다/디퓨얼링 사건)

### Part Ⅱ Task B — Cheong-Ju 공항 접근 중 계기 이상 (단일 사건)
- Initial: FL180→11000 하강 중, ATIS Oscar, Approach 접촉
- DIXIE ONE arrival, ILS 24L 예상 readback
- **계기 다수 상실(lost a lot of instruments)** → 4000ft level off, radar vectors 요청
- Incheon/Gimpo 기상 요청(VMC 선호) → Incheon 저시정, Gimpo 양호 → Gimpo visual 벡터 요청
- 계기 일부 회복 → Cheong-Ju ILS 24L로 복귀 요청 → 승인, standby 안내

### Part Ⅱ Task C
- Task B의 ATC 대사 5줄(Approach 교신, 계기 이상 벡터, 기상, 클리어런스) 재청취 → 사건 설명 +
  관제사 대응 평가

---

## 샘플세트 Ⅱ

### Part Ⅰ Task A
1. Start up and pushback approved, pushback tail east
2. Backtrack approved, runway 16, vacate via Delta two
3. Runway change to runway 35, continue approach and circle north
4. Climb FL310 on current heading, reduce speed 20kt when level

### Part Ⅰ Task B
1. Holding instructions over Doosan VOR, EFC 20
2. SID changed to HIPPO 1 departure (ground relays from delivery)
3. 저시정 절차 중 red stop light가 계속 켜져있음 → 정지 유지
4. 웨이포인트 SYT(Sierra Yankee Tango) 부근 CB 확인 → direct 지시 거부
5. 짙은 안개로 착륙 후 taxiway lead light 미확인 → 활주로 상 정지
6. 기상 회피로 우측 20마일 편차 중 10마일 추가 편차 요청

### Part Ⅱ Task A — 목적지: Paramount Airport / 3단계: Clearance, Apron, Taxi (명목상, 실제는 비상 전환)
- Initial: en-route, FL230 descend
- Situation Update: **스로틀(우측 엔진) 고착 — 움직이지 않음(Not Working)**, 정상보다 빠른 속도로
  비행 예정 통보 → Paramount로 회항/우선권 요청 → 원인 불명(기계적 링키지/잼 추정, 경고 메시지
  없음) 보고
- Situation Update 2: 비상선포 후 Paramount Approach로 핸드오프, FL230→13,000ft 하강 보고 →
  RNAV 30 안내받고 **ILS 27(활주로가 더 긴)** 요청
- Situation Update 3: FL180 부근에서 **스로틀 정상 복구 → Mayday 취소** → ILS 27 유지 요청
- Follow-up: 특정 접근방식을 요청한 이유 / 기계적 문제 트러블슈팅 경험

### Part Ⅱ Task B — 순항 중 TCAS RA (단일 사건)
- Initial: 13,000→FL200 상승 중 Control 초기 교신
- 좌선회 070, traffic 11시 방향 10마일 MD80 하강 중 → 고도 확인 요청 → traffic in sight
- FL200 레벨오프 중 TCAS 어드바이저리, 트래픽이 FL210에서 안 멈출 것 같음 → **하강 요청 →
  TCAS RA 통보** → 관제사 사과(트래픽은 FL210 레벨오프 예정이었음) → 트래픽 FL200까지 하강,
  clear of traffic 보고 → 착륙 후 연락 방법(direct line) 문의

### Part Ⅱ Task C
- Task B의 ATC 대사 5줄(TCAS RA 관련 교신) 재청취 → 사건 설명 + 관제사 대응 평가

---

## 샘플세트 Ⅲ

### Part Ⅰ Task A
1. Taxi to runway 34L via Bravo/Tango/Charlie, hold short of 34L
2. Climb FL350, expedite climb until passing FL280
3. Winds 220/10, cleared for takeoff runway 24 (바람 정보는 복창 불필요 예시)
4. Cleared to Robinson, HULKK3 departure, JULIA transition, FL380, RWY24, squawk 3675

### Part Ⅰ Task B
1. FL150 통과 시 Smith control 129.1로 주파수 변경
2. Departure에서 JFK1 departure, climb via SID
3. 헤딩 090 지시를 다른 헤딩으로 착각 → confirm 받고 정정
4. 최종접근 210kt 유지 지시 — 성능상 190kt로 감속 요청(unable)
5. 이륙허가 후 활주로 횡단하는 항공기 목격 → 이륙허가 취소/재확인 요청
6. 300kt en-route 분리 유지 지시 중 난기류 → 280kt 감속 요청

### Part Ⅱ Task A — 목적지 접근 중 / 3단계: Approach, Landing, Taxi
- Initial: 6000→3000ft descent, Approach 접촉
- Altimeter 3033, ATIS Quebec, 최대 전진속도 200kt 확인
- **웨이포인트 DVETO 철자 확인 요청**(approach plate에서 못 찾음 — 접근차트 SVG 대신 FAA 공개
  차트 활용 예시) → 확인 후 readback
- RNAV visual 13R 승인, Tower 118.3로 전환
- ASALT 상공 통과 보고, Tower 착륙허가 수신 + TCAS 상 선행 트래픽 확인
- 착륙 후 Taxiway Victor 이탈, Bravo 홀딩쇼트 → Gate B6, 3분 후 게이트 가능 통보
- Follow-up: 접근 중 웨이포인트 관련 확인 요청을 한 이유 / 본인 경험상 얼마나 흔한지

### Part Ⅱ Task B — 이륙 직후 yaw 조종 곤란 (단일 사건)
- Initial: 25L 홀딩쇼트에서 이륙허가
- 상승 중 **비상선포 — yaw 조종 곤란** → 좌측 다운윈드로 25L 회항, departure 접촉
- Departure에 비상 성격 설명(yaw problem) → 의도(직진 비행 후 감속하며 설정 테스트) 진술
- 설정 테스트 완료 → Approach 접촉, 접근 재개 의도 전달 → heading 160, 3000ft, ILS 25L 승인
- **fuel 3시간 / SOB 175명** 보고
- Follow-up 없음(Task B는 Follow-up 없음, Task C로 바로 연결)

### Part Ⅱ Task C
- Task B의 ATC 대사 7줄 재청취 → 사건 설명 + 관제사 대응 평가

---

## 생성된 세트 (앞으로 이 프로젝트에서 만든 세트 누적 기록)

| 날짜 | 세트 폴더 | Part ⅡA 시나리오 요지 | Part ⅡB 사건 요지 |
|---|---|---|---|
| 2026-08-18 | sets/EPTA_01.md | Baxter Airport 착륙 (Cruise/Descent/Approach). ATIS 갱신으로 활주로 변경(25R), 착륙 후 배정 게이트(Charlie 4)가 타 항공기 정비 지연으로 점유되어 재배정(Charlie 7) | Coral City Airport 착륙 직전 **좌측 메인기어 unsafe(적색) 표시** — go-around → departure에 비상상황 보고·의도 진술 → alternate 방식으로 수동 전개했으나 여전히 unsafe → fuel/SOB 보고 → tower low pass로 육안 확인 → 착륙 |
| 2026-08-19 | sets/EPTA_02.md | Westgate Airport 출발 (Clearance/Taxi/Departure). SID가 소음절감 절차로 변경(MOXIE2→MOXIE3), 유도로 Charlie 폐쇄로 Delta 우회, 후방 광동체기의 expedite 압박 대응 | 순항 중 **cabin altitude 경고 — 여압 상실** — 비상선포·긴급강하 요청 → intentions 진술(10,000ft 강하 유지) → 10,000ft 레벨오프 후 fuel 문제로 최인접 공항(Fenwick) 회항 결정 → fuel/SOB 보고 → 착륙 |
| 2026-08-20 | sets/EPTA_03.md | Cedar Airport 출발 (Clearance/Push-back/Taxi). Delivery가 "Report ready for push-back" 요구, Ramp에 pushback/taxi 요청, 지상 이동 중 Korean Air B747에 give way + hold position due to traffic, line up and wait 후 이륙 | 순항 중 **조종실 연기(smoke/haze) 감지** — MAYDAY 7단계 선언 → Fairview Airport로 벡터·긴급강하 → intentions 진술(체크리스트+예방착륙) → 연기 해소 후에도 예방적 회항 유지 → 위치보고+fuel/SOB(2h45m/116명) → Tower "Continue Approach"(착륙허가 아님) 함정 → 착륙 |
| 2026-08-21 | sets/EPTA_04.md | Fernbrook Airport 도착 (Approach/Landing/Taxi). Approach·Tower·Ground 순차 핸드오프, 접근 중 speed 감속 2회+트래픽 congestion으로 활주로 변경(14→22), 착륙 후 인접 게이트 pushback으로 hold position | Meridian Airport 접근 중 **홀딩 연장으로 인한 연료 부족** — holding 지시 복창(EFC 포함) → Minimum Fuel 선언 → 추가 홀딩 요구받자 Emergency로 격상(MAYDAY) → intentions+위치+fuel/SOB(18min/143명) 보고 → 착륙 |
| 2026-08-22 | sets/EPTA_05.md | ⚠️**예외(재사용)** — 사용자 제공 실제 EPTA 샘플 녹음본(샘플세트Ⅰ)을 그대로 재현. Smith Airport 클리어런스/Apron/Taxi. **과다 연료/디퓨얼링**(Gate 89), Gulfstream 타이어 펑크로 wingtip clearance 홀드 | ⚠️**예외(재사용)** — Public Airport 접근 중 **계기 다수 상실** → vectors for troubleshooting → Sovereign/Independent 기상 비교 → 계기 일부 회복, ILS 23 복귀 |

### 2026-08-18 세트 상세 (향후 중복 방지용)
- Part ⅠA: 지상 pushback/taxi(Golf 경유), 이륙 시 wake turbulence 캐션(복창 불필요 유형),
  상승 중 SID/cross fix/direct/FL/speed 5요소 지시, 접근 중 활주로 변경(19)+circle south
- Part ⅠB: Baxter Approach 핸드오프, 상승 중 경미한 착빙(icing) 보고, IMC로 visual approach
  unable, 속도 지시 오인 정정, 뇌우 회피 15마일 편차 요청, 콜사인 혼동으로 지시 확인 요청
- Part ⅡA: Baxter Airport, 3단계(Cruise/Descent/Approach), ATIS 갱신에 따른 활주로 변경
  (25R), 착륙 후 배정 게이트 점유(타 항공기 정비 지연)로 인한 게이트 재배정
- Part ⅡB: Coral City Airport, 착륙 직전 좌측 메인기어 unsafe 표시 → go-around → alternate
  extension 시도에도 unsafe 지속 → tower low pass 육안 확인 후 착륙 (fuel 2h30m/SOB 142)

### 2026-08-19 세트 상세 (향후 중복 방지용)
- Part ⅠA: 지상 pushback(face south), 이륙 시 wake turbulence+traffic 정보 캐션(복창 불필요
  유형), 상승 중 heading/climb via SID/cross fix/contact freq 5요소 지시, 접근 중 short
  approach+circle to land
- Part ⅠB: 램프 컨택 단순 수용, 순항 중 chop 보고(Informing), 성능상 상승고도 unable+대안 요청,
  스쿼크 오기 정정(NEGATIVE+정정), 지상지연 프로그램 출발예정시각 요청(REQUEST+명사 패턴),
  리루트 고도제한 확인(Clarifying/verify)
- Part ⅡA: Westgate Airport 목적 출발, 3단계(Clearance/Taxi/Departure). SID 소음절감 변경
  (MOXIE2→MOXIE3), 유도로 Charlie 공사 폐쇄→Delta 우회, 후방 광동체기 expedite 압박, tower
  line-up-and-wait 후 이륙허가
- Part ⅡB: 순항 중 cabin altitude 경고(여압 상실) → 비상선포+긴급강하 요청 → intentions 진술
  → 10,000ft 레벨오프, 무상해 확인 → 연료 소모 우려로 최인접 공항(Fenwick) 회항 결정 → fuel
  3시간/SOB 128 보고 → ILS 진입 후 착륙

### 2026-08-20 세트 상세 (향후 중복 방지용)
- Part ⅠA: 지상 give-way 지시 포함 taxi, 이륙 시 wake turbulence+traffic type 캐션(복창
  불필요 유형)+line up and wait, 상승 중 heading/climb via SID/cross fix/speed/contact freq
  5요소 지시, 접근 중 활주로 변경+RNAV 예상
- Part ⅠB: 섹터 전환 주파수변경 단순 수용, autopilot 일시 이탈 후 정상화 보고(Informing),
  난기류 중 감속지시 unable+대안 요청(3세트 연속 타깃), 고도버스트(6000→5000) 정정(방향확인),
  direct routing 요청(REQUEST+명사), "Continue Approach≠착륙허가" 확인(Clarifying)
- Part ⅡA: Cedar Airport 출발, 3단계(Clearance/Push-back/Taxi). Delivery "Report ready for
  push-back" 요구, Ramp에 pushback/start-up 요청, 지상이동 중 Korean Air B747에 give way +
  hold position due to traffic, tower line-up-and-wait 후 이륙허가(바람정보 복창불필요)
- Part ⅡB: 순항 중 조종실 연기(smoke/haze) 감지 → MAYDAY 7단계 비상선언+긴급강하·회항 요청
  → intentions 진술(체크리스트+예방착륙) → 연기 해소 후에도 예방적 회항 유지, 12,000ft
  레벨오프 → 위치보고+intentions 재진술 → fuel 2h45m/SOB 116 보고 → Fairview Tower
  "Continue Approach"(착륙허가 아님) 함정 → 착륙

### 2026-08-22 세트 상세 — ⚠️ 예외: 실제 샘플 녹음본 재현 (향후 이 세트 자체를 다시 재사용하지 않기 위한 기록)
- **이 세트는 CLAUDE.md 규칙 1의 "샘플 시나리오 재사용 금지"를 사용자의 명시적 1회성 지시
  ("epta05는 내가 준 오디오파일로 그대로 만들어봐 새로 만들지말고")에 따라 예외 처리한 것.**
  EPTA_06부터는 다시 원래 규칙(신규 시나리오 창작, 샘플 재사용 금지)으로 복귀한다. 즉 위
  "샘플세트 Ⅰ" 항목의 재사용 금지 소재(과다연료/디퓨얼링, 계기 상실)는 **여전히 금지 목록에
  남아있다** — EPTA_05가 예외로 한 번 썼다고 해제된 것이 아니다.
- 내용은 PDF 샘플세트Ⅰ의 정확한 문구 + 사용자 제공 실제 음성 대본(SRT)에서 확인된 세부 차이를
  결합해 재구성함:
  - Part ⅠA 4문항: PDF와 100% 동일(ATLAS direct/FL260 stop climb/wake turbulence RWY32/
    pushback gate 34)
  - Part ⅠB: 음성 대본의 실제 순서·내용 반영 — PDF의 원래 Q1(이륙허가+선행트래픽)은 빼고
    **이륙활주 중 조류 활동 → 이륙 후 보고**로 교체, Q2에 "report speed"(Mach 0.81) 추가,
    Q4에 "if unable, maintain FL130 until Johnson VOR" contingency 추가
  - Part ⅡA: PDF와 동일한 Smith Airport/Gate 89 디퓨얼링/Gulfstream wingtip 시퀀스
  - Part ⅡB: 지명을 음성 대본 기준으로 교체(Cheong-Ju→**Public Airport**, Incheon/Gimpo→
    **Sovereign/Independent**, 활주로 24L→**23**), "request vectors for troubleshooting"은
    PDF 문구 유지(음성은 ASR 오류로 "holding"처럼 들림 — 판단상 PDF 채택)

### 2026-08-21 세트 상세 (향후 중복 방지용)
- Part ⅠA: 지상 hold-short 포함 taxi, 이륙 시 wind+gust 정보 캐션(복창 불필요 유형), 상승 중
  climb via SID/cross fix/direct/speed/contact freq 5요소 지시, 접근 중 ILS 예상+circle to
  land(바람 사유)
- Part ⅠB: 섹터 전환 주파수변경 단순 수용, 조류 충돌 의심 후 정상 비행 지속 보고(Informing),
  크로싱 제한고도 unable+대안 요청(4세트 연속 타깃), 유도로 오진입(Alpha→Bravo) 정정,
  목적지 기상 요청(REQUEST+명사), 미확인 픽스(NUKEM) 경로 포함 여부 확인(Clarifying/verify)
- Part ⅡA: Fernbrook Airport 도착, 3단계(Approach/Landing/Taxi). Approach 첫 컨택 위치보고
  (descending through 200 for 11,000 — 정상 예시 제공), 스피드 감속 2회(210→180kt), 트래픽
  congestion으로 활주로 변경(14→22, heading/고도 포함 5요소), Tower/Ground 순차 정확 호출
  테스트, 인접 게이트 pushback으로 hold position
- Part ⅡB: Meridian Airport 접근 중 홀딩 지시(DELTA NOVEMBER 픽스, EFC 포함 전체 순서) →
  연료 재계산 후 **Minimum Fuel** 선언(25분 잔여) → 관제사가 10분 추가 홀딩 요구 → 연료가
  안전 여유 이하로 떨어질 상황 → **Emergency로 격상**(MAYDAY, emergency fuel) → 벡터·
  intentions·위치+fuel/SOB(18min/143명) 보고 → ILS 클리어런스+Tower 이관 → 비상 착륙
