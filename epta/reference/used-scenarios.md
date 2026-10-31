# 사용된 시나리오 목록 — 재사용 금지

새 세트를 만들기 전 **반드시 이 문서를 먼저 읽는다.** 아래 소재는 실제 출제 음성 4세트에서
이미 쓰인 것이므로 그대로 재사용하지 않는다. 같은 **기능**(unable+reason, clarifying 등)은
계속 반복해도 되지만, **상황 설정·공항명·웨이포인트명·사건 내용**은 새로 만든다.

---

## A. 실제 출제 음성 4세트 (= 절대 재사용 금지)

출처 : `reference/transcripts/test01~04.txt` · 상세 분석 : `reference/exam-spec.md`

| | Ⅱ-A 시나리오 | Ⅱ-B 사건 |
|---|---|---|
| test01 (샘플Ⅰ) | Smith Airport 클리어런스·Apron·Taxi — **연료 과다 → 디퓨얼링/소모**, Gulfstream 타이어 펑크로 윙팁 클리어런스 | Public Airport 접근 중 **계기 디스플레이 다수 상실** → vectors → Sovereign/Independent 기상 비교 → 계기 회복 후 ILS 23 복귀 |
| test02 (샘플Ⅱ) | Paramount Airport en route·approach — **스로틀 고착**(Task A 안에서 비상 선포) → divert → 27R ILS 고장, 27L 만 가용 | 상승 중 **TCAS advisory** — MD-80 이 FL210 에 멈추지 않음 → 회피 → clear of traffic (비상 선포 없음) |
| test03 (샘플Ⅲ) | Approach·Landing·Taxi — **DVETO 를 차트에서 못 찾아 웨이포인트 확인 요청**, ASALT 3,000ft 위치보고, gust 35 착륙, Gate B6 문의 | 이륙 직후 **yaw 조종 곤란 → 비상 선포** → left downwind → approach configuration 테스트 → ILS 25L, fuel/souls on board |
| test04 (신규) | Incheon 출발 — pushback facing north, Romeo 207 Alpha 로 택싱, **앞선 B747 의 이상 발견 → 정보 제공 → revise taxi**, moderate turbulence **PIREP** + 앞 항공기 30마일 offset 요청 | Smith Approach 강하 중 **낙뢰 피격 — 전면 윈드실드 손상 + FMC 전부 blinking** → 현 heading/고도 유지 → FMC 회복 → 윈드실드 손상으로 **auto landing + towing assistance** 요청 |

### Part Ⅰ Task A 에서 이미 쓴 소재

- cleared direct (웨이포인트) · stop climb at FL (due to traffic)
- caution wake turbulence + cleared for takeoff · winds ~ at ~ + cleared for takeoff
- start up and pushback approved (long pushback / tail east / until abeam gate)
- backtrack approved + vacate via
- runway change in progress + continue approach and circle (방향)
- climb to FL on current heading + reduce speed ~ knots when level
- taxi to runway via (유도로 3개) + hold short of
- climb and maintain FL + expedite climb until passing FL
- 6요소 클리어런스 (cleared to 공항 / SID / transition / FL / departure runway / squawk)
- descend and maintain FL + report reaching
- after departure fly heading + maintain ~ feet + cleared for takeoff
- hold for another ~ minutes due to wake turbulence
- continue on (SID) + after reaching (fix) proceed on course

### Part Ⅰ Task B 에서 이미 쓴 상황

- 이륙활주 중 조류 활동 목격 → 이륙 후 보고
- FIR 경계 접근 + descend/contact + report speed
- moderate turbulence 3분·200ft → request flight condition
- 성능상 교차제한 불가 + ATC 가 먼저 `if unable, maintain ~ until ~` 제시
- 10도 우선회를 좌선회로 오인 → confirm maintaining
- 최대속도로도 통과시각 못 맞춤 (cross at or before)
- 홀딩 지시 (hold over VOR as published, EFC)
- ground 가 delivery 의 SID 변경 메시지 중계
- 저시정 절차 중 적색 정지등이 꺼지지 않음
- direct 지시받은 웨이포인트 주변에 CB
- 짙은 안개 착륙 후 유도등이 안 보여 활주로에 정지
- 기상 편차 20마일 중 10마일 추가 요청
- 통과고도 기준 주파수 변경 (when passing FL ~, contact ~)
- follow SID + climb via SID
- heading 지시를 다른 heading 으로 잘못 선회 → confirm maintaining heading
- final established 까지 속도 유지 지시 vs 성능상 감속 필요
- line up·이륙허가 받았는데 다른 항공기가 활주로 횡단 중
- 지시 속도에서 난기류 → confirm maintaining ~ knots
- `can you accept FL ~ as final? if unable now, when can you accept?`
- 좌/우 선회 지시를 부기장과 다르게 이해 → 확인 요청 (ATC 대사 없는 발신형)
- Mach 증속 지시 vs 성능상 현 Mach 유지 희망
- ILS 접근 중 localizer 신호 흔들림 → go-around 요청
- severe turbulence + 저고도 PIREP 요청 (ATC 대사 없는 발신형)
- Seoul Radio 기상 전송이 중간에 끊김 → 특정 항목 이후 재송신 요청

### Part Ⅱ 에서 이미 쓴 사건

디퓨얼링 / 연료 과다 · 계기 디스플레이 상실 · 스로틀 고착 · TCAS RA/advisory ·
yaw 조종 곤란 · 낙뢰 피격(윈드실드 + FMC) · 웨이포인트 차트 미발견 · B747 외부 이상 발견 ·
타이어 펑크 항공기로 인한 윙팁 클리어런스 · ILS 고장으로 짧은 활주로 전환

### 이미 쓴 고유명사 (새 세트에서 쓰지 말 것)

**공항** Smith · Public · Sovereign · Independent · Paramount · Robinson · Incheon
**웨이포인트·VOR** ATLAS · HAPIE · FRISO · Johnson VOR · DOOSAN VOR · Sierra Yankee Tango ·
DVETO · ASALT · COSMO · THAMES
**SID·절차** HULK THREE / JULIA transition · HIPPO ONE · JFK ONE · DIXIE ONE arrival ·
THAMES TWO THREE · RNAV Visual 13R
**기관** Smith Control · Tokyo Control · Public Approach · Paramount Approach ·
Smith Approach · Seoul Radio
**타 항공기** Gulfstream · Boeing 747 · Boeing 757 · MD-80

---

## B. 생성한 세트 기록

새 세트를 만들 때마다 아래 표에 한 줄씩 추가하고, 그 아래에 Part 별 상세를 적는다.

| 날짜 | 세트 | 계열 | Ⅱ-A 시나리오 | Ⅱ-B 사건 |
|---|---|---|---|---|
| 2026-10-01 | sets/EPTA_01.md | 기본(test01~03) | Lakeside Airport 도착 (Cruise/Descent/Approach). ATIS 미수신으로 착륙정보 요청, 측풍 증가로 **활주로 09→14 변경 + RNAV 접근**, 시퀀스 지연·short approach 제안, 선행 Embraer 활주로 이탈 지연 | Clearwater Airport 접근 중 **유압 B 계통 저압** (비상 선포 없음) → 체크리스트 시간 요청 → intentions → **관제사 변심: RWY09 폐쇄, 2,400m RWY14 만 제시** → 대안 협의(Lakeside 회항 vs 10분 대기) → 대체 기어 전개·소방대 standby·towing 요청 → ILS 09 |
| 2026-10-14 | sets/EPTA_02.md | 기본(test01~03) | Fairmont 출발 (Clearance/Taxi/Departure). **결빙으로 제빙(de-icing) 필요 + 출발 슬롯 지연**, 선행 CRJ 지연으로 **Foxtrot 교차점 출발(intersection departure)** 수락, SELDO 교차고도 확인 요청 | Thornbury Airport 접근 중 **속도계 불일치(unreliable airspeed)** — 기장/부기장/예비계기 3개가 전부 다름 (비상선포 없음) → 레이더 groundspeed 요청 → 증속 unable → 계기 회복하되 수동접근·autoland 불가 → **관제사 변심: ILS 27 글라이드패스 교정작업으로 RNAV 27 만 가능** → 착륙 |
| 2026-10-16 | sets/EPTA_03.md | **test04 계열** | Muan 도착 (Flight Paths 박스 없음). **군 훈련공역 활성화로 KARBU 경유 우회 → 연료 빠듯 → 직항 요청**, 선행 A321 의 **braking action medium** 보고와 우천 활주로, Daegu 로의 전환 제안 | Gimhae 이륙 후 상승 중 **ENGINE 1 FIRE → 엔진 정지·소화 → 단발 운항** — **이 프로젝트 첫 MAYDAY 선포 + fuel endurance / souls on board 보고** → Gimhae 측풍 20kt vs Daegu 장거리 활주로 선택 → ILS 복귀 → **비상 취소 여부 판단** |
| 2026-10-20 | sets/EPTA_04.md | 기본(test01~03) | Everett→Halston 순항 중 **승객 응급환자 발생 → Redwood 로 회항 결정 → 우선 착륙·구급차 요청** (선포 없음. Task A 안에서 비정상이 전개되는 test02 식 구성) | Halston 접근 중 **플랩이 15 에서 고착** — 접근속도 165kt, 착륙거리 2,400m 필요 (선포 없음) → 체크리스트 시간 요청 → **관제사 변심: RWY08 은 2,300m 로 빠듯, RWY26 은 3,000m 지만 15kt 배풍** → 바람이 바뀌어 RWY26 으로 결정 → ILS 26 |
| 2026-10-22 | sets/EPTA_05.md | 기본(test01~03) | Larkin 도착 (Descent/Approach/Taxi). **야간 소음규제(2300 커퓨) vs 도착예정 2252 — 10분 홀딩을 받으면 2302 로 초과** → 직항·우선권 협의, 선행 Dash 8 감속으로 커퓨 재검토, 착륙 후 **유도로 Golf 폐쇄로 Kilo 우회** | Ashford 접근 중 **기수 착륙장치 UNSAFE** (recycle·대체전개 모두 무효, 선포 없음) → VESPA 홀딩·체크리스트 → **fuel endurance / persons on board 보고** → **저속통과 10분 + 재접근 15분 vs 대체 Brampton 35분 vs 잔여연료 70분 비교 판단** → 저속통과 결과 양호 → ILS 15, 소방대 대기 |
| 2026-10-27 | sets/EPTA_06.md | 기본(test01~03) | Arlen 출발 (Taxi/Departure, 2단계). **흐름제어 슬롯 1340 vs 현재 1318 + 유도로 Alpha 혼잡으로 RWY24 까지 28분 → 1346 으로 초과** → RWY06(9분 유도, 배풍) 제안 → ATIS 25분 경과·배풍한계 10kt 이므로 **현재 바람 확인 후 결정**(실제 7kt) → 조건부 line up and wait → 이륙 후 슬롯이 1352 로 재조정 | Westmoor 접근 전 FL330 순항 중 **CABIN ALTITUDE 경고 — 여압 상실 → 긴급강하** (선포 없음) → **10,000ft 필요 vs 항로 MSA 11,500ft 충돌** → 우선회로 고지대 회피 → 강하율·의료필요 두 가지 질문 → **Westmoor 20분 vs Daleford 11분 비교 판단** → Daleford 안개 800m·ILS 없음으로 Westmoor 확정, 여압 안정 → ILS 33 |
| 2026-10-29 | sets/EPTA_07.md | **test04 계열** | Gimpo 출발 (Flight Paths 박스 없음, `tree`=3 전편). **유도 중 선행 A350 이 홀딩포인트에서 고장 → RWY34 대신 RWY32R 제안 → 이륙거리 가용량을 묻고 3,200m vs 필요 2,900m 비교해 수락** → 조건부 line up and wait → 이륙 후 **direct SIMUN 제안 → 단축 40마일 vs 중등도 난류를 묻고 판단** | Cheongju 접근 중 **후방 화물칸 CARGO SMOKE 경고 → 소화병 방출, 소화제 60분** (**이 프로젝트 두 번째 MAYDAY 선포 + fuel/SOB 보고**) → **Yangyang 12분 vs Cheongju 25분 비교 전에 활주로 길이를 묻고, Yangyang 2,500m < 필요 2,900m 이므로 Cheongju 선택** → intentions → 연기 경고 소멸(회복) → 활주로 탈출 여부 답변 → ILS 34, 소방대 대기 |
| 2026-10-31 | sets/EPTA_08.md | 기본(test01~03) | Marchfield 도착 (Descent/Approach 2단계). **활주로 15 제설로 일시 폐쇄 → 홀딩 15분 + 접근 10분 = 25분 vs 대체 Oakport 30분, 잔여 연료 1시간 5분 → 홀딩 '수락'이 정답** → 제설 완료 후 ILS 복귀 → 착륙 후 **stand 24 점유로 stand 31(8분 추가) 제안** | Oakport 접근 중 15,000ft 통과에서 **조류 충돌 → 엔진 2 심한 진동**(화재 없음, 추력 감소로 계속 운전, 속도 230kt 이하 제한) → 우선 착륙 요청 → **관제사가 210kt 요구, 제한 230kt 이므로 '수락'이 정답** → intentions → 소방대·엔진 정지 여부 두 질문 → 진동 안정 + 바람 변화로 **RWY09 전환 판단** → ILS 09 |

### 2026-10-31 EPTA_08 상세 (향후 중복 방지용)

- **계열** : 기본(test01~03). `three` 표기. EPTA_07 이 test04 계열이었으므로 복귀.
  **선포 없음, fuel/SOB 보고 없음** — EPTA_07 에서 MAYDAY 를 소화했으므로 "4세트에 1번"
  비율을 지킨다.
- **고유명사** (앞으로 재사용 금지) : 공항 Marchfield · Oakport /
  웨이포인트 KEVNA · WYNTA · DORLIN · BARSO / 절차 KEVNA TWO departure · BARSO transition ·
  DORLIN ONE arrival · BARSO ONE arrival /
  기관 Fenwick Control · Marchfield Approach/Tower/Ground · Oakport Approach/Tower ·
  Delivery / 타 항공기 A319 · King Air
- **Part ⅠA** : 지상 taxi straight ahead + caution jet blast(6단어, 호흡용·복창불필요) /
  **5요소 클리어런스**(목적지·SID·transition·고도·squawk 3471, 16단어 — 2세트에 1회 규칙,
  EPTA_07 에는 없었다) / **두 토막 지시** `climb to FL310` + `cross WYNTA at 220 or less`
  (12단어, 🖥 클루) / **접근 허가** + `until established`(13단어) —
  단어수 6·16·12·13, 평균 11.8
- **Part ⅠB** : ① **필요 2,100m vs 교차점 출발 2,400m → `are you able ~?` 에 AFFIRM**
  (숫자 비교 ①, **'수락'이 정답**) ② `Confirm maintaining 7,000 feet?` 함정
  (**관제사 본인이 5,000 으로 내려줬던 상황** — 신규 변형) ③ 순항 중 드론 목격 → 나중에
  보고(시차형, 복합) ④ **RNAV 장비 MEL 비작동** → unable + 사유 + ILS 요청
  ⑤ **주파수 128.3 을 128.5 로 잘못 세팅** 정정(squawk 정정을 두 번 썼으므로 주파수로 교체)
  ⑥ **발신형** — 홀딩 중 EFC 20분 vs 연료 1:10 − 대체 25분 = 홀딩 가능 45분 →
  **'수락' + 한계 제시**(숫자 비교 ②, 뺄셈 필요, 🖥 기능 나열 클루)
- **Part ⅡA** : 10턴 + Follow-up. Flight Paths **2단계**(Descent/Approach).
  발신 턴 2개(Q1·Q7), 복합 지시 6턴, **구어체 ATC 3턴**
  (`Up to you` / `the A319 behind you is tight` / `I'm sorry about that`).
  이미지 Marchfield 지상도(stand 24 점유·stand 31·King Air). 🖥 클루 4개.
  Follow-up 3부 + `Give an example of a situation where you would divert straight away
  rather than hold.`
- **Part ⅡB** : 9턴. 이미지 엔진 지시계(ENG 2 VIB 4.1 · N1 52% · REDUCED).
  ATC 대사 **6줄** → Task C 재사용. 🖥 클루 1개. 회복 1회(진동 안정 + 바람 변화).
- **🖥 클루 총 6개** — 숫자는 한 건도 띄우지 않았다(`exam-spec.md` §11-3).
  Ⅰ-A 1 / Ⅰ-B 1 / Ⅱ-A 4 / Ⅱ-B 1 / Task C 0.
- **겨냥한 약점** (EPTA_07 채점 결과, Level 2) :
  **부등호 방향**(신규 최우선 — EPTA_07 은 3,200 ≥ 2,900 인데 거부했고, 비교 문항 두 개
  모두 '거부'를 택했다. 그래서 **이번 세트는 '수락'이 정답인 비교를 3개** 넣었다 :
  Ⅰ-B Q1(2,400 ≥ 2,100), Ⅰ-B Q6(여유 45분 ≥ EFC 20분), Ⅱ-A Q4(소요 25분 ≤ 연료 65분),
  Ⅱ-B Q4(요구 210kt ≤ 제한 230kt). 그리고 **지시문에 두 숫자를 모두 말하도록 명시**
  (`tell him what distance you need` / `tell him how much fuel you have` /
  `tell him both speeds` / `say what your limit is`)),
  **복합 지시 마지막 토막**(6세트 연속 — Ⅱ-A Q4·Q8·Q10, Ⅱ-B Q3·Q4·Q8 에 토막을 명시),
  **사건의 이름과 핵심 조치**(Ⅱ-B Q3 `tell him what you have done about it` —
  조류 충돌·추력 감소를 말하게 유도. EPTA_06·07 에서 Task C 에 사건명이 없었다),
  **intentions**(Ⅱ-B Q5 — EPTA_06 해결 후 EPTA_07 재발),
  **지시가 두 토막일 때 앞쪽 흘림**(Ⅰ-A Q3·Q4 두 토막, Ⅱ-A Q2·Q6 복창 + 다음 기능),
  **조건부 지시의 조건**(Ⅰ-A Q3 `at 220 knots or less`, Ⅰ-A Q4 `until established`),
  **AFFIRM 으로 답해야 하는 문항**(Ⅰ-B Q1, Ⅱ-B Q4 — 지금까지 NEGATIVE 만 연습했다),
  **위치보고 네 자리 피트**(Ⅱ-A Q7 `passing 2,200 feet`),
  주파수(Ⅱ-B Q9 120.9), 접근 허가 유지 확인(Ⅰ-A Q4, Ⅱ-B Q9),
  두 질문에 둘 다(Ⅱ-B Q6 — 소방대 + 엔진 정지 여부, **답이 지문에 미리 주어져 있음**.
  EPTA_07 P2B-Q7 에서 값을 뒤늦게 준 출제 결함을 바로잡았다),
  `Give an example`(Follow-up — 6세트 연속 미수행)

### 2026-10-29 EPTA_07 상세 (향후 중복 방지용)

- **계열** : **test04 계열** (EPTA_04·05·06 세 세트 연속 기본 계열이었으므로 복귀).
  `tree`=3 전편 일관, **한국 배경**(Gimpo·Cheongju·Yangyang·Jeju Control),
  Flight Paths 박스 생략, Ⅰ-B 발신형 **2문항**, 지시문 2~3기능.
  → 다음 2~3세트는 다시 기본 계열로.
- **MAYDAY 선포 + fuel/SOB 보고를 넣었다** — EPTA_03 이후 04·05·06 세 세트를 건너뛰었으므로
  "4세트에 1번" 비율을 충족한다. 화물칸 연기는 실제로 MAYDAY 급 사건이다.
- **고유명사** (앞으로 재사용 금지) : 공항 Gimpo · Cheongju · Yangyang /
  웨이포인트 TAMNA · SIMUN / 절차 TAMNA ONE arrival /
  기관 Jeju Control · Gimpo Ground · Gimpo Tower · Gimpo Departure · Cheongju Approach ·
  Cheongju Tower / 타 항공기 A350 · Cessna Citation
- **Part ⅠA** : 지상 hold short + traffic(8단어, 호흡용·복창불필요) /
  조건부 `after departure` + **네 자리 피트 5,000**(13단어) /
  교차제한 `cross TAMNA at or above one zero thousand`(15단어, 🖥 클루) /
  **접근 허가** + 선회(14단어) — 단어수 8·13·15·14, 평균 12.5.
  **5요소 클리어런스는 넣지 않았다**(EPTA_06 에서 냈고 "2세트에 1회" 규칙).
- **Part ⅠB** : ① **필요 2,900m vs RWY16 2,400m 비교** → `are you able ~?` 에 NEGATIVE+사유+대안
  ② `Confirm maintaining heading tree one zero?` 함정(실제 290, 기상회피)
  ③ 이륙 중 정비차량 목격 → 나중에 보고(시차형, 복합)
  ④ **발신형** — 난류 20분 + 선행기가 상층 양호 보고 → REQUEST + 명사구 + 이유
  ⑤ **contingency 수락형**(ATC 가 `if unable, maintain FL tree four zero until SIMUN` 를
  먼저 줌 → 요청이 아니라 수락. SAMPLE_01 P1B-Q4 에서 실패한 유형 재출제, 🖥 클루)
  ⑥ **발신형** — 바람이 남풍으로 바뀜 → 사용활주로를 묻고 요청(🖥 기능 나열 클루)
- **Part ⅡA** : 10턴 + Follow-up. **Flight Paths 박스 없음**.
  발신 턴 2개(Q1·Q8), 복합 지시 6턴, **구어체 ATC 3턴**
  (`I'll keep you posted` / `Do what you need to do` / `Up to you`).
  이미지 Gimpo 지상도(A350 고장·RWY34 vs RWY32R). 🖥 클루 3개.
  Follow-up 3부 + `Give an example of a runway change you would turn down.`
- **Part ⅡB** : 9턴. 이미지 화재방호 패널(CARGO SMOKE·소화병 방출·소화제 60분).
  ATC 대사 **7줄** → Task C 재사용. 🖥 클루 2개. 회복(연기 경고 소멸) 1회.
- **🖥 클루 총 8개** — 실제 샘플세트Ⅰ(7개, 22%)에 맞췄다. **숫자는 한 건도 띄우지 않았다**
  (`exam-spec.md` §11-3 규칙). Ⅰ-A 1 / Ⅰ-B 2 / Ⅱ-A 3 / Ⅱ-B 2 / Task C 0.
- **겨냥한 약점** (EPTA_06·SAMPLE_01 채점 결과) :
  **물어본 답을 결정에 쓰기**(신규 최우선 — **묻는 턴 → 결정 턴 쌍을 4개** 배치 :
  Ⅱ-A Q3→Q4, Ⅱ-A Q9→Q10, Ⅱ-B Q4→Q5, Ⅰ-B Q6. EPTA_06 은 두 쌍 모두 답을 받고도
  반대로 결정했다),
  **스스로 보고할 때 값이 틀림**(Ⅱ-A Q8 `passing 2,500 for 4,000` 고정형, Ⅱ-B Q1 위치보고 —
  둘 다 지문에 값을 명시),
  **AFFIRM/NEGATIVE 첫 단어**(Ⅰ-B Q1 `are you able ~?`, Ⅰ-B Q2 `confirm ~?` — SAMPLE_01
  에서 2회 누락),
  **관제사가 이미 준 것을 다시 요청**(Ⅰ-B Q5 contingency 수락형 — SAMPLE_01 에서 2회 실패),
  **지시문 뒷부분 / `with a reason`**(Ⅱ-A Q4·Q10, Ⅱ-B Q5 에 명시),
  **REQUEST + 명사구**(Ⅰ-B Q4·Q6 — EPTA_06 에서 4회 동사구),
  **기관 호출**(발신 턴 Ⅰ-B Q4·Q6, Ⅱ-A Q1·Q8, Ⅱ-B Q1 — Ⅱ-A Q1 은 클루에 기관명 명시),
  **Ⅱ-B 에서도 숫자 비교**(Q4·Q5 — EPTA_06 은 Ⅱ-B 두 문항 다 실패),
  **사건 성격을 정하는 단어**(Ⅱ-B Q3 `declare an emergency` 를 지시문에 명시),
  **두 질문에 둘 다**(Ⅱ-B Q7 fuel/SOB, Q8 evacuate 여부),
  **intentions**(Ⅱ-B Q6), 접근 허가 유지 확인(Ⅰ-A Q4, Ⅱ-B Q9),
  주파수(Ⅱ-A Q5 118.1, Ⅱ-B Q9 119.2),
  `Give an example`(Follow-up — 응답 세트 기준 5세트 연속 미수행)

### 2026-10-27 EPTA_06 상세 (향후 중복 방지용)

- **계열** : 기본(test01~03). `three` 표기. EPTA_03 이 test04 계열이었고 04·05 가 기본이므로
  **다음 세트(EPTA_07)는 test04 계열로 낸다** — 그때면 04·05·06 세 세트 연속 기본이 된다.
  **선포(MAYDAY/PAN PAN) 없음, fuel endurance / souls on board 보고도 없음** — EPTA_03 에서
  선포, EPTA_05 에서 fuel/SOB 를 소화했으므로 "4세트에 1번" 비율을 지켰다. Part ⅡB 의
  두 가지 질문은 **강하율 + 의료 필요 여부**로 바꿔 같은 약점(두 질문에 둘 다)을
  다른 소재로 재출제했다.
- **고유명사** (앞으로 재사용 금지) : 공항 Arlen · Kingsbury · Westmoor · Daleford /
  웨이포인트 SONTEL · RIKAS · MAGRU / 절차 SONTEL TWO departure · RIKAS transition ·
  MAGRU ONE arrival / 기관 Eastvale Control · Arlen Ground · Arlen Tower · Arlen Departure ·
  Westmoor Tower / 타 항공기 A220 · Saab 340
- **Part ⅠA** : 지상 hold position + traffic(7단어, 호흡용·복창불필요) /
  **5요소 클리어런스**(목적지·SID·transition·고도·squawk 4703, 16단어 — 2세트에 1회 규칙) /
  조건부 `expedite climb until passing FL180`(13단어) /
  **접근 허가 + report established**(13단어) — 단어수 7·16·13·13, 평균 12.2
- **Part ⅠB** : ① **현재 1352 + MAGRU 18분 → 1410 vs 요구 1405 비교** → unable+사유+요청
  (숫자 비교 ①, 🖥 클루) ② 이륙 직후 조류 떼 목격 → 나중에 보고(시차형, 복합)
  ③ `Confirm maintaining 210 knots?` 함정(실제 180, 난류, 🖥 클루)
  ④ **12마일 남음 vs 18마일 필요** → short approach unable+사유+대안(`are you able ~?`)
  ⑤ **FL200 허가를 FL220 으로 잘못 세팅** 정정 3단(squawk 뒤집기를 FL 뒤집기로 교체)
  ⑥ **발신형** — 승무원 근무시간 1430 vs 현재 1410 vs 유도 12분 → 문제 지적 + 우선권 요청
- **Part ⅡA** : 10턴 + Follow-up. Flight Paths **2단계**(Taxi/Departure).
  발신 턴 3개(Q1·Q3·Q9), 복합 지시 5턴, **구어체 ATC 3턴**
  (`give me a call when you're moving` / `Do what you need to do` / `I'm sorry about that`).
  이미지 Arlen 지상도(Alpha 혼잡·RWY24 vs RWY06). Follow-up 3부 +
  `Give an example of a time pressure you would refuse to accept, no matter what it cost
  the schedule.`
- **Part ⅡB** : 9턴. 이미지 여압 패널(CABIN ALTITUDE 경고·10,200ft·DIFF PRESS 0.2).
  ATC 대사 **7줄** → Task C 재사용. 회복/변심 2중
  (Daleford 기상 불가 + 여압 안정)
- **겨냥한 약점** (EPTA_05 채점 결과, 최종 Level 2) :
  **무응답 방지**(Ⅱ-A 10턴 중 복창만으로 답이 되는 턴을 Q6·Q7·Q8 에 연속 배치해
  중반에 흐름이 끊기지 않게 함 — EPTA_05 는 Ⅱ-A Q3·Q6·Q10 을 비웠다),
  **`inquire` 지시**(Ⅱ-A Q4 `what you need to know before you decide`,
  Ⅱ-A Q10 `inquire what that means for your arrival`, Ⅱ-B Q7 — 3문항.
  **Q4 는 물어야 할 값을 지문에 명시**: ATIS 25분 경과·배풍한계 10kt),
  **두 숫자 비교**(Ⅰ-B Q1·Q4·Q6, Ⅱ-A Q3·Q5, Ⅱ-B Q4·Q7 — 7문항, 2세트 연속 최우선),
  **intentions**(Ⅱ-B Q5 — 5세트 연속 실패, `Say your intentions` 를 ATC 대사 끝에 명시),
  **네 자리 피트 자릿수**(Ⅰ-A Q4 2,500 / Ⅱ-A Q8 3,000 과 1,800 동시 / Ⅱ-B Q9 3,000 —
  EPTA_05 는 1,800ft 를 18000 으로 썼다),
  **두 가지 질문에 둘 다**(Ⅱ-B Q6 `two things` — 2세트 연속 실패),
  **기관 호출**(발신 턴 Ⅰ-B Q6, Ⅱ-A Q1·Q3·Q9, Ⅱ-B Q1·Q3 — EPTA_05 는 이름은 맞췄으나
  2문항에서 호출 자체를 생략했다),
  **접근 허가 복창 유지 확인**(Ⅰ-A Q4, Ⅱ-B Q9),
  **주파수**(Ⅱ-A Q6 118.35, Ⅱ-B Q9 120.55),
  `Give an example`(Follow-up — EPTA_05 는 Follow-up 자체가 무응답이라 확인 불가였다)

### 2026-10-22 EPTA_05 상세 (향후 중복 방지용)

- **계열** : 기본(test01~03). 선포(MAYDAY/PAN PAN) **없음**.
  단 **fuel endurance / persons on board 보고는 재출제** — EPTA_03 에서 souls on board 를
  빠뜨리고 EPTA_04 에서 인원을 178→70 으로 틀려 **2세트 연속 실패**한 항목이라, 빈도 규칙
  (4세트에 1번)보다 약점 재연습을 우선했다. 선포 자체는 넣지 않아 "비상이 흔하지 않게"
  라는 규칙의 취지는 유지.
- **고유명사** (앞으로 재사용 금지) : 공항 Ashford · Brampton · Carlow · Larkin /
  웨이포인트 DELMA · TORIN · VESPA · NUBIS / 절차 DELMA ONE departure · TORIN TWO arrival ·
  VESPA ONE arrival / 기관 Southgate Control · Ashford Approach · Larkin Approach ·
  Larkin Tower · Carlow Ground / 타 항공기 Dash 8
- **Part ⅠA** : 지상 follow + hold short(9단어, 호흡용) / 이륙 + **4,000 과 2,000 두 피트
  고도**(섞기 쉬움) / 강하 + **접근 허가** + caution birds(복창불필요) / 4요소 클리어런스 +
  **squawk 6170**(6107·6710 으로 뒤집기 쉬움) — 단어수 9·13·16·14, 평균 13.0
- **Part ⅠB** : ① **강하 소요 43마일 vs 남은 40마일 비교** → unable+사유+요청(숫자 비교 ①)
  ② 접근등 소등 목격 → 착륙 후 보고(시차형, 복합) ③ `Confirm maintaining 2,500 feet?` 함정
  (실제 3,000, 지형경고) ④ 야간 visual approach 불가 → 사유+대안(`are you able ~?` 유형)
  ⑤ **squawk 6170 을 6107 로 뒤집어 입력** 정정(EPTA_04 에서 '틀린 값을 말하지 않은' 것 재출제)
  ⑥ **연료 50분 vs 대체 30분 vs 홀딩 20분 = 예비 0 비교** → 발신형, 문제 지적+요청
  (숫자 비교 ②, Minimum Fuel 개념)
- **Part ⅡA** : 9턴+Follow-up. 발신 턴 4개, 복합 지시 6턴, 구어체 ATC 1턴(커퓨 제안).
  이미지 공항 지상도(Golf 폐쇄·Kilo 우회). Follow-up 3부 +
  `Give an example of a flight where you would turn back or divert rather than press on.`
- **Part ⅡB** : 9턴. 이미지 기어 표시등. ATC 대사 6줄 → Task C 재사용
- **겨냥한 약점** (EPTA_04 채점 결과) :
  **받아적은 숫자 비교**(Ⅰ-B Q1·Q6, Ⅱ-A Q2·Q3, Ⅱ-B Q6 — 5문항, 최우선 신규 약점),
  **"결정 전에 묻기"**(Ⅱ-A Q6, Ⅱ-B Q6 — 3세트 연속 실패),
  **"이유 대기"**(Ⅱ-A Q3, Ⅱ-B Q6·Q7 — 4세트 연속 실패),
  **intentions**(Ⅱ-B Q4 — 4세트 연속 실패),
  **두 가지 질문에 둘 다**(Ⅱ-B Q5·Q9),
  기관 호출(발신 턴 6개 — `controller` 오류 3세트 연속),
  접근 허가 복창 유지 확인(Ⅰ-A Q3, Ⅱ-A Q7, Ⅱ-B Q8),
  `Give an example`(5세트 연속 무응답 — 조건을 더 구체화)

### 2026-10-20 EPTA_04 상세 (향후 중복 방지용)

- **계열** : 기본(test01~03). EPTA_03 이 test04 계열이었으므로 복귀.
  **선포 없음** (MAYDAY·fuel/SOB 는 EPTA_03 에서 소화 — 4세트에 1번 비율 충족).
  단 **Task A 안에서 비정상이 전개되는 test02 식 구성**을 처음 적용 (4세트에 1번 규칙).
- **고유명사** (앞으로 재사용 금지) : 공항 Everett · Halston · Redwood /
  웨이포인트 CANTO · MERIS · OBLIN · ZAVER / 절차 CANTO TWO departure · MERIS ONE arrival /
  기관 Northfield Control · Halston Approach · Halston Tower · Redwood Approach ·
  Redwood Tower · Everett Ground/Tower/Delivery / 타 항공기 Boeing 787 · ATR 72
- **Part ⅠA** : 지상 give way(8단어, 호흡용) / 이륙 immediate takeoff + **report passing
  3,000 feet**(트래픽 복창불필요) / **접근 허가 `cleared for the RNAV runway 26 approach`**
  + 주파수 / 4요소 클리어런스 + **squawk 2046** — 단어수 8·16·16·14, 평균 13.5
- **Part ⅠB** : ① 홀딩 중 **endurance 와 추가 선회 가능 횟수, 두 가지 질문에 답하기**
  ② 야간 접근 중 **레이저 피격 → 착륙 후 보고**(시차형, 복합) ③ `Confirm maintaining
  heading 070?` 함정(실제 090, 기상회피) ④ ZAVER 직항에 뇌우선 → 사유+대안(복합 3기능)
  ⑤ **squawk 2046 을 2064 로 뒤집어 입력** 정정 ⑥ MERIS 교차제한 11,000ft 와 FL120 불일치
  확인+요청(발신형, 복합)
- **Part ⅡA** : 10턴+Follow-up. Flight Paths 3단계(Climb/Cruise/Diversion).
  발신 턴 4개, 복합 지시 6턴. 이미지 회항 선택 지도. Follow-up 3부 +
  `Give an example of a case where you would keep going instead.`(예시 요구를 더 구체화)
- **Part ⅡB** : 9턴. 이미지 플랩 지시계. ATC 대사 6줄 → Task C 재사용
- **겨냥한 약점** (EPTA_03 채점 결과) :
  **접근 허가 복창**(Ⅰ-A Q3, Ⅱ-A Q8, Ⅱ-B Q8 — 3문항에 배치, 3세트 연속 실패 항목),
  **"결정 전에 묻기"·"이유 대기"**(Ⅱ-A Q4, Ⅱ-B Q6·Q7 — 지시문에 명시),
  **두 가지 질문에 둘 다 답하기**(Ⅰ-B Q1, Ⅱ-A Q9, Ⅱ-B Q5·Q9 — 4문항),
  피트↔FL 섞기(전편), 숫자 뒤집기(Ⅰ-B Q5 squawk 2046/2064),
  `Give an example`(Follow-up 에 조건까지 붙여 명시)

### 2026-10-16 EPTA_03 상세 (향후 중복 방지용)

- **계열** : **test04 계열** (EPTA_01·02 는 기본 계열). `tree`=3 전편 일관, 한국 배경,
  Flight Paths 박스 생략, Ⅰ-B 발신형 2문항, 지시문 2~3기능.
  → 다음 2~3세트는 다시 기본 계열로.
- **고유명사** (앞으로 재사용 금지) : 공항 Gimhae · Muan · Daegu /
  웨이포인트 PALDA · NOSOK · KARBU · TOPLA / 절차 PALDA ONE departure · NOSOK TWO arrival /
  기관 Sejong Control · Muan Approach · Muan Tower · Gimhae Approach/Tower/Ground/Delivery /
  타 항공기 Airbus A321
- **Part ⅠA** : 지상 taxi(9단어, 호흡용) / 이륙 straight ahead **2,000 feet** + 이륙허가
  (wind calm 복창불필요) / 상승 **FL tree 50** + 주파수 / 4요소 클리어런스 **5,000 feet** +
  squawk — 단어수 9·16·12·14, 평균 12.8
- **Part ⅠB** : ① **발신형** 호출+현재고도(9,000 feet→FL180)+cleared level 확인(복합 3기능)
  ② PALDA 난기류 **시차형 보고**(복합 2기능) ③ `Confirm maintaining Mach .78?` 함정
  (실제 .74) ④ **RNP 1 미충족**으로 direct 불가 → 복창가능분+unable+사유(복합 3기능)
  ⑤ heading 2 tree 0 을 **2 0 tree 로 뒤집어** 선회 → 정정 ⑥ **발신형** 연료상태 보고 +
  직항 요청(복합 2기능)
- **Part ⅡA** : 9턴+Follow-up. 발신 턴 4개, 복합 지시 5턴. 이미지 항로도(훈련공역·우회).
  Follow-up 3부 + `Give an example.`
- **Part ⅡB** : 9턴. **MAYDAY + fuel endurance/souls on board (프로젝트 첫 출제)**.
  이미지 엔진 계기. ATC 대사 6줄 → Task C 재사용
- **겨냥한 약점** (EPTA_02 채점 결과) : **피트↔FL 혼동**(Ⅰ-A Q2·Q3·Q4, Ⅰ-B Q1,
  Ⅱ-A Q4·Q5, Ⅱ-B 전체에 두 단위를 섞어 배치), NEGATIVE 뒤 실제 값(Ⅰ-B Q3, 클루에 값 명시),
  "물어보라/요청하라" 미수행(Ⅱ-A Q2·Q3·Q7·Q9, Ⅱ-B Q7), 기관 호출(발신 턴 6개),
  숫자 뒤집기(Ⅰ-B Q5 — squawk 3027→3207 과 같은 유형), `Give an example.`(Follow-up 명시)

### 2026-10-14 EPTA_02 상세 (향후 중복 방지용)

- **고유명사** (앞으로 재사용 금지) : 공항 Fairmont · Kingsley · Thornbury · Ravenna /
  웨이포인트 BRAVA · SELDO · QUILL · NAVIO / 절차 BRAVA TWO departure · NAVIO ONE departure ·
  SELDO transition · RNAV runway 27 / 기관 Westlake Control · Kingsley Approach ·
  Thornbury Approach · Thornbury Tower · Fairmont Delivery/Ground/Tower/Departure /
  타 항공기 Bombardier CRJ · Cessna Caravan · Boeing 737
- **Part ⅠA** : 지상 hold short(7단어, 호흡용) / 이륙 after departure heading + 이륙허가
  (트래픽 정보 복창불필요) / 강하 + 속도 + **주파수** / 5요소 클리어런스 + **squawk**
  — 단어수 7·16·15·16, 평균 13.5
- **Part ⅠB** : ① 전이고도+QNH 수용 **+ 현재고도 보고**(복합) ② 접근 중 **드론 목격 →
  착륙 후 보고**(시차형 Informing, 복합) ③ `Confirm maintaining 290 knots?` 함정
  (실제 270, buffet margin) ④ QUILL 교차고도 강하율 초과 → **복창 + unable + 사유**(복합)
  ⑤ **squawk 3027 을 3207 로 오입력** 정정 ⑥ SELDO 웨이포인트 확인 + 교차고도 요청
  (발신형, 복합)
- **Part ⅡA** : 10턴+Follow-up. 발신 턴 3개(Delivery·Ground·Departure — 기관 호출 타깃),
  복합 지시 6턴, 구어체 ATC 2턴(CRJ 서류문제·교차점 제안). 이미지 공항 지상도(Foxtrot 교차점
  잔여거리). Follow-up 3부(교차점 출발 전 확인사항 → 언제 거부하는가 → Give an example)
- **Part ⅡB** : 9턴. MAYDAY·fuel/SOB **없음**. 이미지 속도계 3개 불일치.
  ATC 대사 6줄 → Task C 재사용
- **겨냥한 약점** (EPTA_01 채점 결과) : 복합 지시 뒷부분(Ⅰ-B 4문항 + Ⅱ 6턴),
  기관 호출(발신 턴 5개), 주파수·squawk 정확도(5문항), 접근 허가 복창(P2B-Q8),
  `confirm ~?` 함정(P1B-Q3), 통과고도 위치보고(P2A-Q9·P2B-Q1), unable 3단 구조(P1B-Q3·Q4)

### 2026-10-01 EPTA_01 상세 (향후 중복 방지용)

- **고유명사** (앞으로 재사용 금지) : 공항 Bridgeport · Lakeside · Clearwater /
  웨이포인트 TOPAZ · MARLO · VANDO / 절차 ORCHID TWO departure · TOPAZ ONE arrival ·
  MARLO transition / 기관 Granite Control · Harbor Approach · Lakeside Tower ·
  Clearwater Approach · Bridgeport Ground/Tower/Delivery/Departure /
  타 항공기 Airbus A330 · Embraer 190
- **Part ⅠA** : 지상 taxi+give way(부가정보 "running late for his slot" 복창 불필요) /
  immediate takeoff+no delay(트래픽 6마일 복창 불필요) / 강하+cross at or below+report
  leaving(조건부·부가 보고 요청) / 5요소 클리어런스(목적지·SID·고도·freq·squawk, 16단어)
- **Part ⅠB** : ① 활주로 변경+고도계 Acknowledging ② 택싱 중 유도로 고무 파편 목격 →
  이륙 후 보고(시차형 Informing, 복합 지시) ③ 적란운 상단 초과로 상승 unable
  ④ `Confirm maintaining 170 knots?` 함정(배풍으로 150kt) ⑤ 고도창 오설정(FL200→18,000)
  정정 ⑥ VANDO 웨이포인트 확인(발신형, Clarifying+Requesting 복합)
- **Part ⅡA** : 10턴+Follow-up. 구어체 ATC 3턴(활주로 변경 사과, short approach 제안,
  tower "keep your speed up"). 이미지 ND(선행 E190 3NM). Follow-up 3부 구조
  (늦은 활주로 변경 대응 → 경험상 언제가 너무 늦은가 → Give an example)
- **Part ⅡB** : 9턴. MAYDAY·fuel/SOB **없음**(4세트에 1번 규칙). 이미지 유압 패널.
  ATC 대사 6줄 → Task C 재사용
