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
| 2026-11-02 | sets/EPTA_09.md | 기본(test01~03) | Weyland 출발 (Taxi/Departure/Climb, 3단계). **유도로 Bravo 폐쇄로 Golf·Lima 우회(8분 추가)** → 지상도에서 자기 위치 보고 → 이륙 후 **12,000ft 통과에서 연료 불균형 경고(우 900kg 초과) → 크로스피드 개방 + FL250 제한 25분, 계획 순항 FL370** → 관제사가 FL370 지시 → unable + 두 고도 → **관제사가 되물음(`say again — what level can you accept, and how long do you need?`)** → FL250 소요 2시간 45분 vs 탑재 3시간 10분 비교해 **Ferndale 계속(수락)**, Crestview 거부 | Norgate 접근 중 14,000ft 통과에서 **좌익 연료 누출** (선포 없음, 크로스피드 차단, 잔여 55분, 필요 착륙거리 2,200m) → 우선 착륙 요청 → **vectors 20분 수락(55 vs 20)** → **관제사가 되물음(`how many minutes of fuel do you have, and how many do you need?`)** → intentions → 소방대·화재 여부 두 질문 → 누출 정지(회복, 45분) + 관제사 변심 → **RWY03 2,000m < 필요 2,200m 이므로 거부하고 RWY21 6분 대기** → ILS 21 |
| 2026-11-02 | sets/EPTA_10.md | **test04 계열** | Gwangju 출발 (Flight Paths 박스 없음, `tree` 전편). **견인 중인 Boeing 767 이 유도로 Sierra 를 막아 대기** → 지상도에서 자기 위치 보고 → **Kilo 경유 Delta one 우회(5분, 활주로 2,400m) vs Sierra 8분 대기, 필요 이륙거리 2,600m → 거부** → **7턴 뒤 관제사가 슬롯시각을 되물음**(`I've lost your slot time — say it again`) 0640Z vs 현재 0637Z → 수락 | Yeosu 접근 중 one two thousand 통과에서 **BRAKE SYSTEM 1 FAULT + ANTI-SKID INOP** (선포 없음, 대체계통 정상이나 성능 저하, 필요 착륙거리 1,900 → tree,100m) → 우선 착륙 요청 → **Yeosu 2,800m < 필요 3,100m 이므로 거부하고 Sacheon 18분 선택** → intentions → 소방대·연기 여부 두 질문 → **4턴 뒤 되묻기**(`say again the landing distance you need, and ~ how many minutes`) → 제동 회복(2,300m) + 관제사 변심 → **Yeosu 9분으로 복귀(수락)** → ILS 17 |

| 2026-11-03 | sets/EPTA_11.md | 기본(test01~03) | Thatcham 도착 (Descent/Approach/Taxi 3단계). **활주로 27 공사로 threshold 변위 → 가용 착륙거리 1,900m, 필요 1,750m → 수락**(가용량을 먼저 묻고 판단), 선행 **Embraer 175 go-around** 로 시퀀스 재편, **8턴 뒤 관제사가 필요 착륙거리를 되물음**, 착륙 후 **stand 12 가 A340 기술결함으로 점유 → stand 20(8분 추가) 판단**, 지상도에서 자기 위치 보고 | Stapleton 이륙 후 one three thousand 통과에서 **후방 갤리 전기 화재로 객실 연기** — 갤리 전원 차단했으나 연기 지속, 화재 경고 없음 → **이 프로젝트 세 번째 MAYDAY 선포 + fuel endurance(1시간 50분)/persons on board(147) 보고** → **Stapleton 2,400m·15분 vs Brindle 3,000m·9분 — 활주로는 둘 다 충분하므로 '시간'으로 판단해 Brindle 수락** → intentions → 소방대·연기 여부 두 질문 → **8턴 뒤 fuel/SOB 되묻기** → 연기 정지(회복, 원인은 갤리 오븐) → **비상 유지 여부 판단** → ILS 14 |

### 2026-11-03 WEAK_01 (약점 집중 세트 — 실전 모의세트 아님)

실패율 상위 다섯 유형만 모은 드릴 세트다. 문항 수·파트 구성이 실제 시험과 다르므로
`check.py` 의 21개 항목 대상이 아니다(적용되는 항목만 따로 확인했다).
**단, 고유명사는 실전 세트와 겹치지 않게 관리한다.**

- **고유명사** (앞으로 재사용 금지) : 공항 Rothbury · Caldon · Penhale · Minsterly /
  웨이포인트 VARDO · KELSO · OBREN · TAMLYN / 절차 KELSO TWO arrival /
  기관 Rothbury Approach/Tower/Ground/Delivery · Caldon Control · Caldon Tower ·
  Minsterly Departure / 타 항공기 Airbus A321(stand 28 연료 누출)
- **겨냥한 약점** : A 복창+α(88%) · B 판단+이유(74%, 최저↔최대 함정 2문항) ·
  C 값 유지(되묻기 2회 — Initial 값과 중간 값을 각각 되물음) · D 발신(64%, REQUEST+명사구) ·
  E 90초(100%, Follow-up 3부 2문항 + Task C 고정문구 2문항)
- **제외한 유형** : 순수 복창(Ⅰ-A), 5요소 긴 클리어런스, 접근 허가 복창, 조건절 유지,
  주파수 — 각각 2~8세트 연속 정확했다.
- **2026-11-04 수정** : "답하려면 앞선 교신이 필요한데 그게 없다"는 지적을 받아 고쳤다.
  빠뜨린 유형이 뒤 문항의 전제일 때는 **그 교신을 지문에 적어 넣는다**(P1A-Q6·Q7·Q8,
  P1B-Q5, P2B-Q5). C 파트는 속도 지시 턴(180 요구 / 210 한계)과 **Caldon Approach
  핸드오프**(126.35)를 넣어 8턴 → 9턴, 세트 32 → 33문항. 핸드오프 덕에 되묻기가
  "새 관제사는 앞 교신을 못 들었다"로 정당해졌고, Follow-up P2C-Q2 의 "In this
  situation" 이 가리킬 자리가 생겼다 — 그 전에는 롤플레이에 속도 지시가 아예 없었다.
  **드릴 세트를 만들 때의 규칙으로 남긴다 : 유형을 빼더라도 답의 근거는 빼지 않는다.**
- **비상 선포 없음** (MAYDAY 는 4세트에 1번, EPTA_11 에서 세 번째를 썼다)

### 2026-11-05 WEAK_02 (약점 집중 세트 — 실전 모의세트 아님)

WEAK_01 과 같은 다섯 유형을 **겹치지 않는 새 문항**으로 다시 냈다. 39문항. 실전 세트가 아니므로
`check.py` 21개 항목 대상이 아니다(적용되는 항목만 따로 확인했다).

- **고유명사** (앞으로 재사용 금지) : 공항 Alderton · Wexcombe · Pembury · Dunmere /
  웨이포인트 LIDRO · GOSMA · PERNO · ZENTA · MAVIK · ROLDA /
  절차 PERNO ONE arrival · GOSMA TWO departure · LIDRO ONE departure /
  기관 Stanmore Control · Alderton Approach/Ground/Tower/Delivery · Wexcombe Approach/Tower ·
  Pembury Approach / 타 항공기 Airbus A380
- **C 파트 사건** : Alderton 접근 중 one two thousand 통과에서 **WING ANTI-ICE FAULT(좌측 날개)
  + 착빙 진행** → freezing level 7,000 아래 6,000 으로 강하 요청 → 최저속도 180→200 ·
  필요 착륙거리 2,200→2,700 → **Alderton 2,500 거부, Wexcombe 3,000(12분) 선택** →
  **"얼음 없어졌죠?"에 NEGATIVE**(상태가 안 끝난 함정) + 소방대 → Wexcombe Approach 핸드오프 →
  **220kt 수락(최저 200)** → 되묻기 2회(Initial 값 연료·인원 / 바뀐 값 최저속도 + 안 바뀐 값 인원)
  → 얼음 소멸(회복)·고장 지속 → ILS 12. **비상 선포 없음.**
- **그 밖의 소재** : 지연 15분 뒤 go-around 로 지연 증가 · 객실 정리 중 강하율 1,500 한계 ·
  교차점 Mike three 대신 full length · 착륙 활주 중 잔디밭의 개 · 승무원 화상 · 미탑승 승객 수하물
  하기 12분 vs 스탠드 inbound 10분 · 800ft windshear go-around · 배풍 한계 15 수락 ·
  최저 180 에 210 수락 · 정비기록 제한 230 에 260 거부 · 최저 RVR 550 vs 450/800 ·
  EAT 1125Z 홀딩 수락(20 ≤ 35분) · 비가 그쳤는지 묻는 함정 · 연료 소모로 FL370 요청 ·
  상승구배 미달로 SID 변경 요청 · 속도 280 오선택 정정 · 안개 예보로 기상 요청 · 레이저 조사 보고 ·
  엔진 오일 감소로 스탠드 복귀.
- **겨냥한 약점** : `progress/log.md` 최우선 항목 — 값 유지, 최저·최대 **수락** 판단(WEAK_01 은
  거부뿐이었다), 끝나지 않은 상태를 끝났냐고 묻는 질문, `with a reason`, `cleared`.
- **근거 문항 규칙 (WEAK_01 규칙을 강화, 사용자 요청)** : WEAK_01 은 앞선 교신을 지문에 적어
  주었다. **이제 답에 꼭 필요한 앞 교신은 지문 설명이 아니라 실제 문항으로 넣는다** — 듣고 복창하거나
  직접 발신한 값을 다음 문항에서 쓴다. 필요 없는 유형은 넣지 않는다. WEAK_02 의 근거 문항 :
  P1A-Q1 · Q6 · Q8 · Q10, P1B-Q5, P2B-Q3 (C 파트 전체는 원래 이어진다).

### 2026-11-06 WEAK_03 (약점 집중 세트 — 실전 모의세트 아님)

39문항. WEAK_02 채점(2026-11-05)에서 나온 **최우선 약점 세 개**를 겨냥했다. 실전 세트가
아니므로 `check.py` 21개 항목 대상이 아니다(적용되는 항목만 따로 확인했다).

- **고유명사** (앞으로 재사용 금지) : 공항 Kinloch · Ravenglass · Barnsdale · Haverly /
  웨이포인트 BRAXO · HOLNE · CASTO · TURLO /
  절차 BRAXO ONE arrival · HOLNE TWO departure · CASTO THREE departure /
  기관 Marlow Control · Kinloch Approach/Ground/Delivery · Ravenglass Approach/Tower ·
  Barnsdale Tower / 타 항공기 Airbus A330 · Boeing 787
- **C 파트 사건** : Kinloch 접근 중 one three thousand 통과에서 **STABILIZER TRIM JAM —
  트림 고착으로 플랩이 one five 로 제한** → 접근속도 상승 → **필요 착륙거리 2,000→2,900 ·
  최대속도 250→190**(상한이 시나리오 도중에 생긴다) → 활주로 끝 공사로 **Kinloch 2,700 거부,
  Ravenglass 3,200(13분) 선택** → 되묻기 2회(Initial 연료·인원 157 / 바뀐 필요거리 + 안 바뀐
  인원) → Ravenglass Approach 핸드오프 → **210kt 거부(상한 190)** → **"트림 풀렸죠?"에
  NEGATIVE**(끝나지 않은 상태) → ILS 22. **비상 선포 없음.**
- **그 밖의 소재** : 터뷸런스 침투속도 270 상한에 310 요구 · 좌측 주기어 브레이크 과열로
  이륙허가 거부 2분 · 난동 승객 3명 제압 후 경찰 요청(터미널 격리 여부 두 질문) ·
  at or below FL150 제한을 못 맞춰 현재고도 되묻기 · 회사 최저 RVR 600 vs 500 으로 15분 체공 ·
  최대 접근속도 160 에 180 거부 · 최대 배풍 10 에 8 수락 · 최단 활주로 2,600 에 2,300 거부 ·
  필요 2,100 에 2,300 수락(11분 단축) · **Mach .78 이상 요구 vs 최대 Mach .76**(하한 요구 ↔
  상한 보유, confirm 질문) · 슬러시 활주로 최대 측풍 15 에 20 거부 · 뇌졸중 의심 환자(양쪽
  거리 충족 → 시간으로 판단) · 2번 탱크 급유 지연으로 direct 요청 · SID 항로상 뇌우로 SID
  변경 · 엔진 카울 패널 미잠금으로 스탠드 복귀 · 기상레이더 고장으로 벡터 요청 ·
  착륙 후 러더 페달 진동(타이어 의심)으로 정지 요청 · 산불 연기 목격 보고(요청 없음)
- **겨냥한 약점** : ① **상한↔하한 뒤집기**(4세트 연속 1위) — B 파트 8문항을 거부 4·수락 3·
  어휘 1 로 양방향 배치, `below our minimum` ↔ `above our limit` 을 한 섹션에서 대비시킴
  ② **복합 지시 기능 누락**(11세트 연속) — A 파트 10문항 전부 기능 2~3개
  ③ **지문 값을 지어내 바꿈** — 근거 문항 4쌍(Q1→Q2 squawk·level, Q4→Q5, Q6→Q7, Q8→Q9)
  ④ `cleared` ← `clear`(6세트째) — A-Q5 가 cleared for takeoff 복창
  ⑤ `Give an example.`(10세트 연속 미수행) — E-Q1·Q2 둘 다 그 문장으로 닫음
- **WEAK_02 결함 수정 반영** : 입으로 불러야 하는 **기관명은 전부 🖥 클루로 띄웠다**(WEAK_02 는
  Pembury·Wexcombe·Alderton 에 클루가 없어 전부 틀렸다). 기관이 바뀔 때는 **핸드오프 문항을
  넣었다**. 이미 교신 중인 상대에게는 `Contact` 가 아니라 **`You are already with Ground.`**
  로 적는다(P2B-Q4).

### 2026-11-06 WEAK_04 (약점 집중 세트 — **test04 계열**)

38문항. WEAK_03 과 같은 약점을 **`tree` = 3 · 한국 지명**으로 다시 냈다. 직전 계열 세트는
EPTA_10(2026-11-02)이고 그 뒤 EPTA_11 · WEAK_01 · WEAK_02 가 모두 기본 계열이었으므로
차례가 됐다. 숫자 발음이 바뀌면 받아적기가 무너지는지 보는 것이 추가 목적이다.

- **고유명사** (앞으로 재사용 금지) : 공항 Ulsan · Pohang · Wonju · Jeju /
  웨이포인트 TOBRA · NASIK · YUDAM · GWANO · SEORA /
  절차 TOBRA ONE arrival · NASIK TWO departure /
  기관 Daejeon Control · Ulsan Approach/Tower/Ground/Delivery · Pohang Approach ·
  Wonju(교체공항으로만) / 타 항공기 Boeing 737-800
- **C 파트 사건** : Pohang 접근 중 one two thousand 통과에서 **GEN 1 FAULT + APU 불가 →
  단일 발전기** → **오토랜드 상실로 최저시정 1,200m 필요**(하한이 도중에 생긴다) +
  **배터리 tree zero 분 제한**(시간 상한) → **Pohang 시정 900 거부, Ulsan 4,000(15분) 선택** →
  되묻기 **3회**(연료·인원 → 바뀐 시정 + 안 바뀐 인원 → 연료·인원 다시) → Ulsan Approach
  핸드오프 → **tree zero 마일 다운윈드 거부**(배터리 30분·체공 10분 상한) →
  **"오토랜드 복구됐죠?"에 NEGATIVE** + 비상 선포 여부 → ILS tree six. **비상 선포 없음.**
- **그 밖의 소재** : placard 로 1만피트 이하 250 상한인데 290 요구 · 승객이 수하물칸 열어
  이륙허가 거부 1분 · 객실 창 내측 유리 균열(외측 정상, 여압 유지) → 1만피트 강하 요청 ·
  비상 선포 거부 + 인원 182 두 질문 · **at or above FL150 과 230 이하를 한 지시에**(하한·상한
  동시, confirm 질문) · 최단 활주로 2,600 에 2,400 거부 · 최대 배풍 10 에 15 거부 ·
  **required ↔ available 을 관제사가 묻는 문항**(B-Q3) · short approach 14분 단축 수락 ·
  EFC zero tree four five 홀딩 수락(20 + 40 ≤ 80) · 승무원 근무시간 55분 남아 짧은 쪽 선택 ·
  온도 상승으로 FL330 요청 · SID 뇌우로 straight-out + direct 요청 · 도어 슬라이드 결함으로
  정비 요청 · **고도계 수치가 ATIS 와 불일치 → 확인 요청**(필수 복창 항목 확인) ·
  착륙 후 노즈기어 타이어 이상음으로 견인 요청 · **무인기 근접 목격 보고**(요청 없음)
- **계열 요소** : `tree` 를 ATC 대사·지문 전편에 일관되게 씀(flight level tree tree zero,
  runway tree four, heading tree five zero, two tree zero knots, zero tree four five).
  **주파수는 말하는 대로 적었다**(`one two one decimal tree five`) — `121.tree5` 로 적으면
  TTS 가 읽지 못한다. 지시문은 기능 2~3개를 한 문장에 넣었다.
- **겨냥한 약점** : WEAK_03 과 같은 다섯 개 + **숫자 발음이 바뀔 때의 받아적기**.
  되묻기를 3회로 늘려, 같은 값(인원 1tree2)을 세 번 중 두 번 물었다.

### 2026-11-03 EPTA_11 상세 (향후 중복 방지용)

- **계열** : **기본(test01~03)**. `three`, 가상 영어권 지명, **Flight Paths 박스 3단계**,
  Ⅰ-B 발신형 **1문항**(Q3). 기본 계열은 발신형이 거의 없으므로 2문항은 과했다 —
  처음에 Q6 도 발신형으로 냈다가 응답형으로 고쳤다. 직전 test04 계열은 EPTA_10 이었다
  (03 → 07 → 10).
  **다음 test04 계열은 EPTA_13~14 쯤.**
- **★ MAYDAY 선포 + fuel endurance / persons on board 보고** — 이 프로젝트 **세 번째**
  (EPTA_03 · 07 에 이어). 간격 4세트. **다음 MAYDAY 슬롯은 EPTA_15 쯤.**
- **Task A 는 전부 정상 운항** — Task A 내 비정상은 EPTA_09 에서 썼다(4세트에 1번).
- **Ⅰ-A 에 5요소 클리어런스를 넣지 않았다**(2세트에 1회 — EPTA_10 에 있었다).
- **고유명사** (앞으로 재사용 금지) : 공항 Ellesmere · Thatcham · Stapleton · Brindle /
  웨이포인트 ZORIN · TREBO / 절차 TREBO ONE arrival / 기관 Hartwell Control ·
  Ellesmere Ground/Approach/Departure · Thatcham Approach/Tower/Ground ·
  Stapleton Departure/Approach · Brindle Tower / 타 항공기 Airbus A340 · Embraer 175
- **Part ⅠA** : `cross runway two seven, report vacated`(**6단어** — 호흡용, 복창+보고 약속) /
  **조건부** `after passing ZORIN` + 고도 + 속도(16단어, 🖥 클루) /
  **다섯 자리 고도 + 조건** `one five thousand feet, expedite until passing one two
  thousand`(12단어 — 15,000 과 12,000 대조) / **접근 허가** `cleared for the ILS runway one
  four approach` + 속도 제한(16단어) — 단어수 6·16·12·16, 평균 12.5
- **Part ⅠB** : ① `Confirm maintaining visual separation with the Airbus A340?` 함정 —
  선행기가 구름에 들어가 시야를 놓침 (07 heading · 08 고도 · 09 속도 · 10 runway heading
  에 이은 **다섯 번째 변형**, **visual separation** 은 첫 출제)
  ② 플랩 전개 상태 최저속도 210kt vs 지시 180kt → **unable + 두 값 + 대안**(숫자 비교, **거부**)
  ③ **발신형** — FL330 중등도 난류, 선행기가 FL310 에서 양호 → 요청 + 사유 + **조건 문의**
  (🖥 기능 나열 클루, **뒷토막이 질문**)
  ④ 푸시백 중 본 **주기장 연료 유출** → 유도 지시 복창 + 시차 보고(시차형)
  ⑤ 현재 기수 270 인데 `turn left heading two seven zero` → 360도 선회가 되므로 **confirm**
  (Clarifying, 신규 유형)
  ⑥ **발신형** — 8,000 허가인데 6,000 을 세팅해 6,000 에서 레벨오프 → 상태 보고 + 요청
  (Correcting, 🖥 클루)
- **Part ⅡA** : 10턴 + Follow-up. 발신 턴 1개(Q1), 복합 지시 7턴,
  **구어체 ATC 4턴**(`they've displaced the threshold, so you won't have the full length
  today` / `Your call.` / `I'll have to slot you back in behind him` / `I've lost sight of
  you behind the hangar — whereabouts are you now?`).
  이미지 Thatcham 지상도(Kilo·Juliet·격납고·stand 12 의 A340·stand 20). 🖥 클루 3개.
  Situation Update 2회. Follow-up 3부 + `Give an example of a figure you have had to
  re-check because something changed at short notice.`
- **Part ⅡB** : 10턴. 이미지 객실 평면도(후방 갤리 연기 · 갤리 전원 ISOLATED · 화재경고 NONE).
  ATC 대사 **8줄** → Task C 재사용. 🖥 클루 2개. 회복 1회(연기 정지, 원인 갤리 오븐) +
  **비상 유지/취소 판단**(test03 의 비상 취소 판단과 같은 계열).
- **🖥 클루 총 8개** — 숫자는 한 건도 띄우지 않았다. Ⅰ-A 1 / Ⅰ-B 2 / Ⅱ-A 3 / Ⅱ-B 2 / Task C 0.
- **겨냥한 약점** (EPTA_10 재채점 결과, Level 2 — Interactions 가 등급을 결정) :
  ① **지시문 마지막 토막 미수행(9세트 연속, 10 에서 6건)** → log 의 처방대로
  **뒷토막을 '질문'으로만** 구성했다 : Ⅰ-B Q3 `inquire about the conditions`,
  Ⅱ-A Q3 `inquire about the landing distance available`, Ⅱ-A Q5 `inquire how long`,
  Ⅱ-A Q9 `inquire how long`, Ⅰ-B Q1·Q6 `make a request`. **묻지 않으면 턴이 성립하지 않는다.**
  ② **문장 틀은 맞는데 숫자가 틀림(신규 최우선)** → log 의 처방대로 **자릿수만 다른 두 값**을
  한 사건에 넣었다 : Ⅱ-B 연료 **one hour five zero minutes(1시간 50분)** vs 소요
  **one five minutes(15분)** — EPTA_09 의 55분→15분 오류와 같은 구조. 그리고 Ⅰ-A Q3 에
  **one five thousand vs one two thousand**.
  ③ **안전 질문에 '필요 없다'(2세트 연속·중대)** → **세 번째로 같은 구조를 냈다** :
  Ⅱ-B Q7 `is the smoke still in the cabin, and do you want the fire service to meet you on
  the runway?` 그리고 Q9 에서 **비상 취소 여부**로 한 번 더 물어 같은 판단을 두 번 시험한다.
  ④ **Ⅰ-B 가 최대 실점 구역(10 에서 0/6)** → 발신형 2문항 유지 + 클루 띠 유지,
  confirm형 2문항(함정 ①·clarifying ⑤), unable 3단 1문항, correcting 1문항.
  ⑤ **`clear`(←cleared) 5세트째** → 허가 복창을 4곳에 배치(Ⅰ-A Q4 · Ⅱ-A Q6 · Ⅱ-A Q7
  `cleared to land` · Ⅱ-B Q10).
  ⑥ **되묻기 간격을 더 벌렸다** : Ⅱ-A 필요 착륙거리 1,750m 는 **Initial 에서 주고 Q8 에서
  되물음(8턴 뒤)**, Ⅱ-B fuel/SOB 는 **Initial 에서 주고 Q8 에서 되물음(8턴 뒤)**.
  EPTA_10 은 7턴·4턴·3턴이었다.

### 2026-11-02 EPTA_10 상세 (향후 중복 방지용)

- **계열** : **test04 계열**. `tree` 전편, 한국 배경, **Flight Paths 박스 없음**,
  Ⅰ-B 발신형 2문항, 지시문 2~3기능. 직전 test04 계열은 EPTA_07 이었다
  (03 → 07 → 10). **다음 test04 계열은 EPTA_13~14 쯤.**
- **선포 없음, fuel/SOB 보고 없음** — MAYDAY 는 EPTA_03·07 에 있었고 간격이 4세트이므로
  **다음 MAYDAY 슬롯은 EPTA_11**. 실제 test04 도 낙뢰 피격에 선포가 없었다.
- **Task A 는 전부 정상 운항** — Task A 내 비정상은 EPTA_09 에서 썼다(4세트에 1번).
- **Ⅰ-A 에 5요소 클리어런스를 넣었다**(2세트에 1회 — 08 에 있었고 09 에는 없었다).
- **고유명사** (앞으로 재사용 금지) : 공항 Gwangju · Ulsan · Pohang · Yeosu · Sacheon /
  웨이포인트 MIRYA · HARAN · NAKDO · SOBAEK / 절차 MIRYA TWO departure · HARAN transition ·
  NAKDO TWO departure · SOBAEK ONE arrival / 기관 Gangneung Control ·
  Gwangju Delivery/Ground/Tower/Departure · Yeosu Approach/Tower / 타 항공기 Boeing 767 · A320
- **Part ⅠA** : `squawk 4162, ident`(**3단어** — 실제 최단과 같은 호흡용) /
  **5요소 클리어런스**(목적지·SID·transition·고도·**출발활주로** 17단어, 🖥 클루) /
  **조건부** `maintain two eight zero knots until level`(14단어) /
  **접근 허가 + braking action reported good**(복창 불필요 부가정보, 16단어) —
  단어수 3·17·14·16, 평균 12.5
- **Part ⅠB** : ① `Confirm maintaining runway heading?` 함정 — 실제로는 build-up 회피로
  heading 040 (07 heading · 08 고도 · 09 속도 에 이은 네 번째 변형, **runway heading** 은 첫 출제)
  ② 측풍한계 25kt vs 보고된 측풍 18kt → **AFFIRM + 두 값**(숫자 비교 ①, **수락**)
  ③ **발신형** — FL160 착빙 → 고도변경 요청 + 현재고도(🖥 기능 나열 클루)
  ④ 유도 중 본 **활주로/유도로 이물질(rubber)** → 이륙허가 복창 + 시차 보고(시차형)
  ⑤ 강하율 한계 1,500ft/min vs 요구 2,500ft/min → **unable + 두 값 + 대안**(숫자 비교 ②, **거부**)
  ⑥ **발신형** — ATIS 활주로 one niner vs 앞 항공기가 받은 zero one → confirm
  (`Make a confirmation and clarify your intention.` **고정구 사전 문구 그대로** —
  EPTA_09 의 조어 `say what you have` 를 쓰지 않았다)
- **Part ⅡA** : 10턴 + Follow-up. 발신 턴 2개(Q1·Q10), 복합 지시 6턴,
  **구어체 ATC 4턴**(`I'll keep you posted` / `are you holding short of Sierra now, or are
  you still back on Mike?` / `Up to you.` / `I've lost your slot time — say it again for me`).
  이미지 Gwangju 지상도(Mike·Sierra·Kilo·Delta one/two·견인 중인 767). 🖥 클루 3개.
  Situation Update 3회. Follow-up 3부 + `Give an example of a figure you have had to ask a
  controller to repeat.`
- **Part ⅡB** : 9턴. 이미지 제동계통 패널(BRAKE SYS 1 FAULT / ANTI-SKID INOP /
  ALTN BRAKE NORMAL·DEGRADED / LDG DIST REQ 3,100 M / NO SMOKE). ATC 대사 **7줄** → Task C 재사용.
  🖥 클루 2개. 회복 1회(제동 회복 2,300m) + 관제사 변심(Yeosu 로 되돌림).
- **🖥 클루 총 7개** — 숫자는 한 건도 띄우지 않았다. Ⅰ-A 1 / Ⅰ-B 1 / Ⅱ-A 3 / Ⅱ-B 2 / Task C 0.
- **겨냥한 약점** (EPTA_09 채점 결과, Level 2) :
  **받아적은 값을 끝까지 들고 가지 못함(신규 최우선)** — EPTA_09 의 되묻기 턴은 통했지만
  Situation Update 직후였다. 이번에는 **값과 되묻기 사이를 벌렸다** :
  Ⅱ-A 슬롯시각 0640Z 는 **Initial Situation 에서 주고 Q8 에서 되물음(7턴 뒤)**,
  Ⅱ-B 필요 착륙거리 tree,100m 는 **Q3 에서 주고 Q7 에서 되물음(4턴 뒤)**,
  소요 18분은 **Q4 에서 주고 Q7 에서 되물음(3턴 뒤)**.
  비교는 **수락 3 · 거부 3**(수락 Ⅰ-B Q2 18≤25 · Ⅱ-A Q8 0637+3=0640 · Ⅱ-B Q8 2,300≤2,800 /
  거부 Ⅰ-B Q5 1,500<2,500 · Ⅱ-A Q5 2,400<2,600 · Ⅱ-B Q4 2,800<3,100),
  **30초·90초를 쓰게 하기**(Q8·Q6·Q7 을 "두 가지를 다 말해야 성립"하는 턴으로,
  Follow-up 은 3부 + 예시 요구),
  **지시문 마지막 토막이 내 쪽 숫자**(Ⅰ-B Q2 한계·Q3 현재고도·Q5 가능 강하율,
  Ⅱ-A Q5 `the figure you need`, Ⅱ-B Q4 `the distance you need`),
  **조건절**(Ⅰ-A Q3 `until level`, Ⅱ-A Q6 `when ready`, Q7 `behind the landing A320`
  — 09 에서 `before` 로 뒤집은 항목, Ⅱ-B Q9 `until established`),
  **사실 질문 오독 + 안전 판단 재출제**(Ⅱ-B Q6 `is there any smoke or burning smell ~, and
  do you want them standing by?` — 09 에서 소방대를 거부했던 바로 그 구조. 정답은
  NEGATIVE + **AFFIRM + as a precaution**),
  **접근 허가의 접근 방식**(Ⅰ-A Q4 · Ⅱ-B Q9 둘 다 `cleared for the ILS runway ~ approach`
  — 09 에서 ILS 를 빠뜨렸다),
  **사건의 이름**(Ⅱ-B Q3 `name the fault` 를 지시문에 명시),
  **위치보고**(Ⅱ-A Q4 이미지, Ⅱ-B Q1 `70 miles from SOBAEK` — 값이 지문·그림에 있음),
  `Give an example`(Follow-up — **9세트 연속** 미수행 중)

### 2026-11-02 EPTA_09 상세 (향후 중복 방지용)

- **계열** : 기본(test01~03). `three` 표기. EPTA_07 이 test04 계열이었고 08·09 가 기본이므로
  **다음 EPTA_10 또는 11 을 test04 계열로** 낸다.
- **선포 없음, fuel/SOB 보고 없음** — EPTA_07 에서 MAYDAY 를 했으므로 "4세트에 1번" 비율 유지.
  Ⅱ-B Q5 에서 관제사가 연료 잔량을 묻지만 이는 **숫자 비교 되묻기**이지 fuel endurance 보고가
  아니다.
- **Task A 안에 비정상을 넣었다** — "4세트에 1번" 규칙. 직전은 EPTA_04(승객 응급환자)로
  04→05·06·07·08 네 세트를 건너뛰었다. 이번엔 **연료 불균형 → 고도 제한**(선포 없음).
- **5요소 클리어런스는 Ⅰ-A 에 넣지 않았다**(EPTA_08 에 있었으므로 "2세트에 1회").
  대신 **Ⅱ-A Q2 에 5요소**를 배치했다 — 실제 test01 Ⅱ-A 도 긴 클리어런스를 준다.
- **고유명사** (앞으로 재사용 금지) : 공항 Weyland · Ferndale · Norgate · Crestview /
  웨이포인트 TULAN · BRIMO · ORVIL · SAVIK / 절차 TULAN TWO departure · BRIMO transition ·
  ORVIL ONE arrival / 기관 Ridgeway Control · Weyland Delivery/Ground/Tower/Departure ·
  Norgate Approach/Tower / 타 항공기 Boeing 777
- **Part ⅠA** : `line up and wait` + **복창 불필요 부가정보** `number two for departure`
  (10단어, 호흡용) / **조건부** `after departure` + 좌선회 heading + **다섯 자리 11,000ft** +
  주파수 125.75(14단어) / **거리 조건** `when 30 miles from BRIMO` + **다섯 자리 10,000ft** +
  속도(14단어, 🖥 클루) / **접근 허가** + `report established`(13단어) —
  단어수 10·14·14·13, 평균 12.8
- **Part ⅠB** : ① **시정 8,000m vs 회사 최저 5,000m → `are you able ~?` 에 AFFIRM**
  (숫자 비교 ①, **'수락'이 정답**) ② `Confirm maintaining 250 knots?` 함정
  (**관제사 본인이 속도제한을 해제했고 실제 300kt** — 신규 변형, 08 의 고도판을 속도로 바꿈)
  ③ 강하 중 **windshear 조우** → 나중에 보고(시차형, 복합. **EPTA_08 에서 보고를 요청으로
  바꾼 항목 재출제**) ④ **고도계 29.78 을 29.87 로 오설정** 정정(주파수·squawk 을 이미 썼으므로
  고도계로 교체. ATC 가 `say your altitude` 로 물어 정정을 강제) ⑤ **난류 침투속도 280kt
  vs 증속 지시 320kt → unable + 두 속도**(숫자 비교 ②, **'거부'가 정답**)
  ⑥ **발신형** — 차트 10,000ft vs 브리핑시트 18,000ft **전이고도 불일치** → confirm
  (필수 복창 7항목 중 전이고도는 이 프로젝트 첫 출제, 🖥 기능 나열 클루)
- **Part ⅡA** : 10턴 + Follow-up. Flight Paths **3단계**(Taxi/Departure/Climb).
  발신 턴 2개(Q1·Q6), 복합 지시 6턴, **구어체 ATC 3턴**
  (`Sorry about that` / `are you on Golf now, or have you already turned onto Lima?` /
  `I'll leave that with you`). 이미지 Weyland 지상도(Bravo 폐쇄·Golf·Lima·C2·Gate C4).
  🖥 클루 4개. Follow-up 3부 + `Give an example of a situation where you would divert
  rather than continue.`
- **Part ⅡB** : 9턴. 이미지 연료 패널(LEFT 900 / RIGHT 2,100 / CROSSFEED CLOSED /
  TOTAL 3,000 KG · 55분 · 2,200m). ATC 대사 **7줄** → Task C 재사용. 🖥 클루 2개.
  회복 1회(누출 정지 45분) + 관제사 변심(선행기 go-around 로 RWY21 6분 폐쇄).
- **🖥 클루 총 8개** — 숫자는 한 건도 띄우지 않았다(`exam-spec.md` §11-3).
  Ⅰ-A 1 / Ⅰ-B 1 / Ⅱ-A 4 / Ⅱ-B 2 / Task C 0.
- **겨냥한 약점** (EPTA_08 채점 결과, Level 2) :
  **두 숫자를 나란히 '말하기'(3세트 연속 최우선)** — EPTA_08 에서 지시문 명시만으로는
  안 된다는 것이 확인됐으므로 이번에는 **ATC 가 되묻는 턴을 두 개 신설**했다
  (Ⅱ-A Q8 `say again — what level can you accept, and how long do you need?`,
  Ⅱ-B Q5 `say again — how many minutes of fuel do you have, and how many do you need?`).
  **두 값을 말하지 않으면 그 턴 자체가 성립하지 않는다.** 비교 문항은 **수락 3 · 거부 3 으로
  균형**을 맞췄다(08 은 수락만 4개였다) : 수락 Ⅰ-B Q1(8,000 ≥ 5,000) · Ⅱ-A Q9(2:45 ≤ 3:10) ·
  Ⅱ-B Q4(20분 ≤ 55분), 거부 Ⅰ-B Q5(320 > 280) · Ⅱ-A Q7(FL370 > FL250) ·
  Ⅱ-B Q8(2,000m < 2,200m),
  **다섯 자리 고도 자릿수**(Ⅰ-A Q2 11,000 · Q3 10,000, Ⅱ-A Situation Update 12,000,
  Ⅱ-B Q2 10,000 · Situation Update 14,000 — 08 에서 10,000→1,000, 15,000→1,500 이었다),
  **거리 숫자**(Ⅰ-A Q3 `30 miles`, Ⅱ-B Initial `70 miles` — 08 에서 90·80마일 통째 누락),
  **보고와 요청을 바꿔 말함**(Ⅰ-B Q3 windshear 시차형 — 08 신규 약점),
  **두 질문 중 하나만**(Ⅱ-B Q7 소방대 + 화재 여부, **답이 지문에 미리 있음**),
  **지시문 마지막 토막**(7세트 연속 — Ⅰ-B Q1·Q5, Ⅱ-A Q3·Q4·Q7·Q9, Ⅱ-B Q3·Q4·Q8 에 명시),
  **조건부 지시의 조건**(Ⅰ-A Q2 `after departure`, Q3 `when 30 miles from BRIMO`,
  Q4 `report established`, Ⅱ-A Q5 `behind the departing Boeing 777` — 07 에서 누락한 항목),
  **위치보고**(Ⅱ-A Q4 이미지에서 읽어 보고, Q6 `passing 3,000 feet for 7,000`,
  Ⅱ-B Q1 `70 miles from ORVIL` — 셋 다 값이 지문·그림에 있음),
  **전이고도**(Ⅰ-B Q6 — 필수 복창 7항목 중 유일하게 미출제였던 항목),
  **intentions**(Ⅱ-B Q6), 접근 허가 유지 확인(Ⅰ-A Q4, Ⅱ-B Q9),
  주파수(Ⅰ-A Q2 125.75, Ⅱ-A Q10 133.45, Ⅱ-B Q9 118.35),
  `Give an example`(Follow-up — 7세트 연속 미수행)

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
