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
