# 외워야 할 표현 모음

채점할 때마다 `CLAUDE.md` §6-5 규칙에 따라 "내 표현 → 고친 표현" 형식으로 이어서 추가한다.
이미 있는 패턴이면 표는 그대로 두고 **사례 칸에 세트 번호만 덧붙인다.**

> 90초 자유응답(Follow-up · Task C Q1/Q2)의 **문장 뼈대와 빈칸 후보**는
> [`templates-90s.md`](templates-90s.md) 에 따로 정리돼 있다.

## 1. 내 표현 → 고친 표현

| 내가 쓴 표현 | 고친 표현 | 왜 | 나온 세트 |
|---|---|---|---|
| `affirmative 170knots` (실제 150kt) | `Negative, maintaining 150 knots due to tailwind.` | `confirm ~?` 는 현재 상태를 묻는 것. 다르면 NEGATIVE + 실제 상태 + 사유. `affirmative` 는 비표준(ICAO 는 AFFIRM) | EPTA_01 P1B-Q4 |
| `unable to climb fl350 due to ,request fl300` | `Unable flight level 350 due to towering cumulus. Request heading deviation right of track.` | `due to` 뒤 사유 칸이 비었다. unable 은 **사유 + 대안**까지 세 토막 | EPTA_01 P1B-Q3 |
| `roger short approach able` | `Affirm, able to accept a short approach.` | `are you able ~?` 는 AFFIRM/NEGATIVE 를 **문장 맨 앞**에. roger 로 시작하면 가능 여부가 전달되지 않는다 | EPTA_01 P2A-Q7 |
| ~~`rogoer`~~ → `negative` **해결(10-13)**. Can you work with that? 에 대한 답 | `Negative. Runway 14 is too short for us. Request the longest runway available.` | ROGER 단독은 AFFIRM/NEGATIVE 를 대체할 수 없다. 이 경우 관제사는 **수락한 것으로 이해한다** | EPTA_01 P2B-Q5 |
| ~~`whatever`~~ → 명확한 결정 **해결(10-13)**. 관제사가 선택을 요구 | `We will hold for runway 09 — request an estimate of how long until it is clear.` | 결정은 기장의 책임. 판단이 안 서면 `standby` 로 시간을 벌고 결정해서 통보 | EPTA_01 P2B-Q6 |
| `decent to 11000` (통과고도 누락) | `Descending through flight level 150 for 11,000.` | 위치보고는 **through(통과) + for(목표)** 두 값 | EPTA_01 P2A-Q4 |
| `ready` (say your intentions 에 대한 답) | `Our intention is to continue for the ILS runway 09, and we will need the longest runway available.` | "준비됐다" 가 아니라 "무엇을 할 생각인가" 를 묻는 것 | EPTA_01 P2B-Q4 |
| `we have b low indication` | `We have a hydraulic system B low pressure indication.` | 계통 이름을 밝혀야 심각도가 전달된다 | EPTA_01 P2B-Q3 |
| `clear for take off` / `clear to land` | `cleared for takeoff` / `cleared to land` | 허가를 받았음을 복창하므로 과거분사 | EPTA_01 P1A-Q2, P2A-Q10 |
| `later use alternate system so we can extend` | `later we used the alternate system, so we could extend` | 과거 사건 서술은 과거시제로 일치 | EPTA_01 P2C-Q1 |
| `handled by good pilot ... there's no alternation to treat` | `the controller handled it well ... it could have been handled differently` | 질문 대상은 관제사. `alternation` 은 그 뜻으로 쓰지 않는다 | EPTA_01 P2C-Q2 |
| `controller, hl123` (기관 호출) | `Clearwater Approach, HL123` | `controller` 는 호출부호가 아니다 | EPTA_01 P2B-Q3 |

| `affirmative 170knots but Request reduce speed 150 due to tailwind` | `Negative, maintaining 150 knots due to tailwind on final.` | 150kt 와 사유를 덧붙인 건 진전이나 **첫 단어가 AFFIRM 이면 관제사는 170kt 로 계산한다.** 허가를 구하는 게 아니라 현재 상태를 통보하는 상황 | EPTA_01 P1B-Q4 (재응시) |
| ~~`runway09 app`~~ → `cleared for the RNAV runway 27 approach` **해결(10-15)** | `Cleared for the ILS runway 09 approach` | 접근 **허가**는 `cleared for` 가 있어야 허가 확인이 된다. `expect` 로 바꾸면 허가를 못 받은 것이 된다 | EPTA_01 P2B-Q8·P2A-Q8 (재응시) |
| `we fixed landing gear manually and it function well` | `We extended the landing gear by the alternate system — it indicates down and locked.` | `fixed`(수리) 가 아니다. 대체 시스템으로 내렸다고 해야 소방대·견인이 준비된다 | EPTA_01 P2B-Q7 (재응시) |
| `request to direct lake side airport` | `Request direct to Lakeside Airport.` | REQUEST 뒤에는 명사구가 바로 온다. `request to ~` 는 동사구 형태가 된다 | EPTA_01 P2B-Q6 (재응시) · 06 P1B-Q1·Q4·Q6 |
| `there was a mistakes about setting altimeter request new altimeter` | `We had 18,000 set in the altitude window by mistake. Now climbing back to flight level 200.` | `altimeter`(고도계 기압)와 `altitude window`(고도 선택창)는 다른 것. 틀린 건 고도값 | EPTA_01 P1B-Q5 (재응시) · 06 P1B-Q5 |
| `negative due to aircraft` | `Negative. Runway 14 is too short for us — our braking will be degraded.` | 거부 방향은 맞았으나 사유가 전달되지 않는다. 사유는 "활주로가 짧다" | EPTA_01 P2B-Q5 (재응시) |
| `there is large debris in runway` | `we saw a large piece of rubber debris on taxiway Mike` | 파편은 **유도로**에 있었다. 활주로라고 하면 관제사가 활주로를 폐쇄한다 | EPTA_01 P1B-Q2 (재응시) |
| `after checklist the issues has been solved` | `After the checklist the system was still lost, so we had to extend the gear by the alternate system.` | 유압은 해결되지 않았다. "해결됐다"고 하면 사건의 심각도가 사라진다 | EPTA_01 P2C-Q1 (재응시) |
| `I don't have any experience similar like this` (예시 요구에 대한 답) | `I don't have experience of a change exactly like this, but for example, if we were given a new runway at five miles, I would go around.` | `Give an example.` 는 경험이 없으면 **가정 예시**로 답한다. 경험 없음으로 닫으면 질문을 비운 것 | EPTA_01 P2A-Q11 (재응시) |
| `they treat us like as a making safety more` | `he put safety first` | 문장이 성립하지 않는다. 짧고 맞는 문장이 길고 깨진 문장보다 낫다 | EPTA_01 P2C-Q2 (재응시) |

| `climb through fl250` (실제 2,500 feet) | `Climbing through 2,500 feet.` | **네 자리 피트와 FL 은 만 피트 이상 차이.** 피트는 `2500`, FL 은 `FL250` 으로 모양을 다르게 적는다 | EPTA_02 P2A-Q9 |
| `maintain 14000` (지시는 4,000) | `maintain 4,000` | 같은 뿌리의 자릿수 오류. 앞에 숫자가 더 붙지 않았는지 다시 본다 | EPTA_02 P1A-Q4 |
| ~~`Negative maintain speed 290`~~ → `.74` 로 **해결(10-19)**. 실제 270 | `Negative, maintaining 270 knots due to buffet margin.` | NEGATIVE 다음은 반드시 **실제 값**. 값이 없으면 "290 이 아니다" 에서 끝난다 | EPTA_02 P1B-Q3 |
| `decent 4000 cross qualit` (교차 불가 상황) | `Descend to 4,000. Unable to cross QUILL at 4,000 — that would exceed our descent rate. Request descent now.` | `readback of what you can accept` = **할 수 있는 것만** 복창. 못 하는 것까지 복창하면 약속이 된다 | EPTA_02 P1B-Q4 |
| ~~`quawk 3027`~~ → 정정 3단 **해결(10-19)**. 3207 을 잘못 넣은 상태 | `Correction — we had 3207 set by mistake. Now squawking 3027.` | 정정 문항은 **무엇을 잘못했고 어떻게 바꿨는지**까지 | EPTA_02 P1B-Q5 |
| `roger request intersection runway` | `Before I can accept — request the runway distance available from Foxtrot.` | 교차점 출발은 **수락 전에 잔여 거리 확인**. `can you work with that?` 에 roger 는 답이 아니다 | EPTA_02 P2A-Q6 |
| `roger , request landing` (full readback + intentions 요구) | `Heading 240, maintain 8,000, HL123. Our intention is to continue for the ILS runway 27 using your groundspeed.` | ROGER 는 복창을 대신할 수 없다. `request landing` 은 의도가 아니다 | EPTA_02 P2B-Q4 |
| `unable to speed up 250 due to performance` | `Unable 250 knots — our airspeed indications are unreliable, so we cannot set a speed accurately.` | 사유는 **그 사건에 맞게**. 성능 문제로 들으면 관제사가 다른 판단을 한다 | EPTA_02 P2B-Q5 |
| `such as heigh indication ... ask the exact height` | `our airspeed indications ... ask for the groundspeed` | 이 사건은 **속도** 문제였다. 핵심 단어를 틀리면 리포팅 전체가 어긋난다 | EPTA_02 · 05 · 06 P2C-Q2 (→ S01 에서 해결) |
| `I think we handled it well` (관제사를 묻는 질문) | `I think the controller handled it well.` | Task C Q2 의 주어는 **관제사**. 2세트 연속 `we` 로 시작 | EPTA_02 · 05 · 06 P2C-Q2 (→ S01 에서 해결) |
| (3세트 연속 무응답) | `One thing that could have been handled differently is that he could have told us earlier …` | Task C Q2 **후반부**. 이 틀로 한 문장만 붙이면 된다 | EPTA_01·02 P2C-Q2 |
| (3세트 연속 무응답) | `For example, on a wet runway at high take-off weight, 2,150 metres would not be enough for us.` | Follow-up 의 `Give an example.` — 경험이 없으면 **가정 예시**로 | EPTA_01·02 Follow-up · 06 P2A-Q11 · 07 P2A-Q11 |

| ~~`expect ils runway 36`~~ → 3/3 복창 **해결(10-21)** | `Cleared for the ILS runway 36 approach.` | **3세트 연속 누락.** `cleared for` 가 있어야 허가를 받았다는 확인이 된다 | EPTA_03 P2A-Q8 · P2B-Q8 |
| `mayday mayday mayday hl123 …` | `Mayday, mayday, mayday, Sejong Control, HL123, engine number one fire, engine shut down.` | MAYDAY×3 다음은 **기관명 → 콜사인 → 사건** 순 (`atc-terminology.md` §8-1) | EPTA_03 P2B-Q3 |
| `turn off the engine` | `engine shut down` | 엔진 정지의 표준 표현 | EPTA_03 P2B-Q3 |
| `we have 2hurs fuel on board` (실제 2시간 50분 + 164명) | `Fuel endurance two hours 50 minutes, 164 souls on board.` | 두 가지를 물으면 **둘 다**. 숫자는 분 단위까지 | EPTA_03 P2B-Q5 |
| `deagu is available` | `We will divert to Daegu — with one engine out we want the calm wind and the longer runway.` | `is available` 은 의도가 아니다. **가겠다 + 이유** | EPTA_03 P2B-Q6 |
| `contineue and request reduce speed 190` | `Before we decide — request the runway length available and how recent that report is.` | 지시문이 "결정 전에 물어보라"고 할 때. **3세트 연속 못 함** | EPTA_03 P2A-Q7 · 05 P2A-Q6 |
| ~~`cleared direct topla …`~~ → unable 3단 **해결(10-21)** | `Unable direct TOPLA — we are not RNP 1 capable. Request to remain on the airway.` | **할 수 있는 것만 복창.** 못 하는 것까지 복창하면 수락이 된다 | EPTA_03 P1B-Q4 |
| ~~`decent fl130`~~ → 피트↔FL 3/3 **해결(10-21)** | `descend to 13,000 feet` | 13,000 피트와 FL130 은 **기압 설정이 다른 별개 고도** | EPTA_03 P2A-Q4 |
| `maintaining 9000` (실제는 통과 상승 중) | `climbing through 9,000 feet for flight level 180` | `maintaining` 은 유지, `climbing through` 는 통과. 상태 동사를 구분 | EPTA_03 P1B-Q1 |
| `before reaching` (지시는 report reaching) | `wilco report reaching` | "도달하면 보고하라" 를 "도달 전에" 로 바꾸면 뜻이 달라진다 | EPTA_03 P1B-Q2 |
| `during approach phase` (실제는 이륙 후 상승 중) | `during the climb out, passing flight level 150` | Task C 는 **비행 단계부터** 정확히 | EPTA_03 P2C-Q1 |

| `both are not available request divert` (필요 2,400m / RWY08 2,300m / RWY26 3,000m) | `We need 2,400 metres, so runway 08 at 2,300 is not enough — request runway 26.` | **받아적은 숫자를 비교해 말하기.** 3,000 > 2,400 이므로 26 은 충분하다 | EPTA_04 P2B-Q6 · 05 P1B-Q1 · 06 P2B-Q4·Q7 |
| `we want to land on runway 08` (바람이 바뀌어 26 의 배풍이 사라진 뒤) | `The tailwind on 26 has gone — we will take runway 26, because we need 2,400 metres and 08 is only 2,300.` | Situation Update 가 답을 알려주고 있었다 | EPTA_04 P2B-Q7 |
| `red wood is profitable for our aircraft` | `Redwood is suitable for us — it is only 60 miles and the runway is 2,600 metres.` | `profitable`(수익성) ≠ `suitable`(적합). 그리고 **이유를 붙인다** | EPTA_04 P2A-Q4 |
| `we will let you know as complete as possible` (say your intentions 에 대한 답) | `Our intention is to land with flaps 15 — we will need the longest runway available.` | "나중에 말하겠다" 는 intentions 가 아니다. **4세트 연속 회피** | EPTA_04 · 05 P2B-Q4 · 06 P2B-Q5(구문 사용) · S01 P2B-Q4 · 07 P2B-Q6(재발) |
| `request fire service follow in` (two things 질문) | `Affirm we expect to be able to vacate at the end, and request the fire service to follow us in.` | 관제사가 `two things` 라고 하면 **둘 다** | EPTA_04 · 05 P2B-Q9 · 06 P2B-Q6 |
| `we have 1hr 20min` (endurance + 가능 선회수 질문) | `Endurance one hour 20 minutes. Our alternate needs 40 minutes, so we can take about 10 more turns.` | 여유 40분 ÷ 1회전 4분 = 10회전. **계산해서 답하기** | EPTA_04 P1B-Q1 |
| `we set another squawk by mistake` | `We had 2064 set by mistake. Now squawking 2046.` | **틀린 값을 말해야** 관제사가 화면과 대조할 수 있다 | EPTA_04 P1B-Q5 |
| `we will stop at the end of the runway and request stand ambulance` (inquire where 질문) | `Where will the ambulance meet us — at the end of the runway or on the stand?` | `inquire` 는 **물음표로 끝나는 문장** | EPTA_04 P2A-Q10 · 05 P2A-Q2·Q9 |
| `flap cannot retract more than 15 degree` | `the flaps jammed at 15 and would not extend any further` | `retract`=올리다, `extend`=내리다. 뜻이 반대 | EPTA_04 P2C-Q1 |
| `stand brake equipment on the runway` | `request the fire service standing by` | 무슨 장비인지 전달되지 않는다 | EPTA_04 P2B-Q7 |
| (Part ⅡB 리포팅에 `ambulance` 등장) | — | **다른 파트 내용 혼입.** Task B 는 그 파트만의 전개를 메모한다 | EPTA_04 P2C-Q1·Q2 |

| `cross toren 11000 hl123` (43마일 필요 / 40마일 남음) | `Unable to cross TORIN at 11,000 — we have 40 miles to run and we need 43 miles for that descent. Request descent now.` | **두 숫자를 나란히 말하는 것이 곧 사유다.** 못 할 것을 복창하면 약속이 된다 | EPTA_05 P1B-Q1 |
| `maintain fl350` (지문은 FL340) / `decending 18000` (지문은 1,800 feet) | `level at flight level 340` / `passing 1,800 feet` | 네 자리 피트는 `1800` 으로 적고 **자릿수를 한 번 더** 본다. 1,800 과 18,000 은 접근 단계가 다르다 | EPTA_05 P2A-Q1 · Q8 |
| `180passengers and 9crews` (지문은 186명) | `186 passengers and 9 crew, 195 souls on board` | 탑승 인원은 소방·구조 규모를 정하는 값. 두 항목을 다 말한 것은 진전 | EPTA_05 P2B-Q5 |
| `reqeust branten landing distance length available` (기수 기어 문제) | `Request the weather at Brampton and whether their fire service is available.` | 묻는 동작은 나왔으나 **물은 내용이 상황의 변수가 아니다.** 기어 문제는 활주로 길이로 해결되지 않는다 | EPTA_05 P2B-Q6 |
| `request visual approach to asford airport` (ILS 15 복귀 맥락) | `We will land at Ashford — request the ILS runway 15 with the fire service standing by.` | 시각접근을 요청할 이유가 없다. 그리고 **결정의 근거(저속통과 결과·잔여 연료)를 먼저** | EPTA_05 P2B-Q7 |
| `follow ahead and hold short of delta` | `Follow the Dash 8 ahead, hold short of Delta.` | follow 지시는 **대상 명사**가 핵심. 앞에 여러 대가 있으면 엉뚱한 기체를 따라간다 | EPTA_05 P1A-Q1 |
| `we have 50 min fuel on board so request reduce holding time to 10` | `We have 50 minutes of fuel and our alternate needs 30, so 20 minutes of holding would leave us no reserve. Request holding reduced to 10 minutes.` | 요청은 됐지만 **근거가 없어** 관제사가 받아들일 이유가 없다. 50 − 20 = 30 = 대체 소요 → 예비 0 | EPTA_05 P1B-Q6 |
| `make the aircraft extract the gear` | `we extended the gear` | `extract`=추출, `extend`=내리다. EPTA_04 `retract`/`extend` 혼동의 연장 | EPTA_05 P2C-Q1 |
| `the nose gear seems to strange that the indication indicate something problem` | `the nose gear indication showed unsafe` | 긴 문장을 만들려다 깨졌다. **짧고 맞는 문장**이 낫다 | EPTA_05 P2C-Q1 |
| `they inform their situation to controller is the best thing what they do` | `he gave us holding so we could work the checklist` | 문장이 성립하지 않고, 주어도 관제사가 아니다 | EPTA_05 P2C-Q2 |
| `because it takes 35min , it is not enoguh` (연료 70분, 대체 35분) | `Brampton was 35 minutes away, and with 70 minutes of fuel that was possible but it would have left us thin.` | **숫자를 근거로 든 것은 진전.** 단 70 > 35 이므로 "불가능"이 아니라 "여유가 얇아진다" | EPTA_05 P2C-Q2 |
| `braking equipment in the runway` | `the fire service standing by` | EPTA_04 `stand brake equipment` 와 **같은 표현이 재발.** 무슨 장비인지 전달되지 않는다 | EPTA_04 · 05 P2C-Q2 |
| (30초 문항 2개 + 90초 Follow-up 무응답) | `Holding 10 minutes would put us at 2302 and our curfew is 2300.` | **침묵이 가장 낮은 점수다.** 완전하지 않아도 한 문장은 말한다 — 이 한 줄로 절반 이상을 받는다 | EPTA_05 P2A-Q3 · Q6 · Q10 |

| `um , then is there any change of runway , i would take runway 24` (배풍 7kt / 한계 10kt) | `7 knots of tailwind is inside our limit of 10, so we will take runway 06. The 9-minute taxi also keeps us inside our slot.` | **물어서 받은 값을 한계와 비교해 결론까지 말한다.** 직전 문항에서 "28분은 안 된다"고 계산해 놓고 28분 활주로를 고른 것은 자기 계산과 모순 | EPTA_06 P2A-Q5 |
| `we may choose the near one` (Daleford 안개 800m·ILS 없음을 들은 직후) | `With Daleford at 800 metres and no ILS we will go to Westmoor — request the ILS runway 33 and an ambulance on arrival.` | 관제사가 준 기상 정보가 **선택을 바꾸는 근거**다. 받고도 안 바꾸면 물어본 의미가 없다 | EPTA_06 P2B-Q8 |
| `so request decent to 10000 immediately` (긴급강하 상황) | `We are starting an emergency descent now. Request descent to 10,000 feet.` | **`emergency descent` 가 있어야** 관제사가 아래 항공기를 치운다. 없으면 통상 강하로 처리된다 | EPTA_06 P2B-Q3 · P2C-Q1 |
| `descend 10000 , then request hold ... at safety area` (MSA 11,500 통보 직후) | `We need 10,000 feet and your minimum safe altitude is 11,500, so we cannot level off there. Request a heading clear of the high ground.` | **두 숫자의 모순을 그대로 말하는 것**이 문제 지적. 그리고 여압 상실 중 `hold` 는 가장 나쁜 선택 | EPTA_06 P2B-Q4 |
| `present altitude 10000` (rate of descent 질문) | `Our rate of descent is about 4,000 feet per minute.` | `altitude`(고도)와 `rate of descent`(강하율)는 다른 질문. 관제사는 강하율로 분리를 계산한다 | EPTA_06 P2B-Q6 |
| `passing 3000` (지문은 passing 1,800 climbing to 3,000) | `passing 1,800 feet climbing to 3,000` | `passing X for Y` = **X 는 지금 지나는 고도, Y 는 가는 곳.** 직전 문항에서 둘 다 정확히 복창했는데 스스로 보고할 때 뒤집었다 | EPTA_06 P2A-Q9 |
| `taxi to runway26` (지시는 runway 06) | `taxi to runway 06` | **사용활주로는 필수 복창 7항목.** 직전 턴의 24 와 섞여 26 이 됐다 — 활주로가 바뀌면 새 번호를 따로 적는다 | EPTA_06 P2A-Q6 |
| `we had hold 10min already` (실제 25분 대기, 10분은 관제사 예상치) | `We have been waiting 25 minutes and we were told to expect 10. Our duty time requires us airborne by 1430, it is now 1410, and the taxi takes 12 minutes. Request priority for departure.` | 두 숫자를 뒤집으면 **문제가 성립하지 않는다**(10분 대기는 정상) | EPTA_06 P1B-Q6 |
| `experdite climb fl180` | `Expedite climb until passing flight level 180` | **조건절 `until passing` 이 복창 대상.** 없으면 "FL180까지"인지 "FL180을 통과"인지 모른다 | EPTA_06 P1A-Q3 |
| `cleared to take off` | `cleared for takeoff` | `takeoff` 는 **이륙 허가에만** 쓰는 한 단어. 그 밖에는 `departure` | EPTA_06 P2A-Q8 |
| `110 miles from eastvale airport` (Eastvale 은 관제기관, 목적지는 Westmoor) | `110 miles from Westmoor` | **기관명과 공항명을 구분**해 적는다. 상대의 이름을 목적지로 쓰면 자기 쪽으로 오는 줄 안다 | EPTA_06 P2B-Q1 |
| `push back approved , hold at gate4` (`face south` + `give me a call when you're moving`) | `Pushback approved, face south — we will hold until the A220 is clear, and we will call you when we are moving.` | **푸시백 방향은 필수 복창**(뒤쪽 충돌). 구어체로 요청한 후속 행동에는 `wilco` 로라도 답한다 | EPTA_06 P2A-Q2 |
| `request decrease speed` (12마일 남음 / 18마일 필요) | `Request vectors for a longer final.` | 부족한 것이 **거리**면 속도를 줄여도 활주로는 가까워진다. 요청 대상을 맞춘다 | EPTA_06 P1B-Q4 |
| `we had set altimeter fl220` | `we had flight level 220 set in the altitude window` | **`altimeter` 재발.** 고도계 기압(29.92)과 고도 선택창은 다른 것 | EPTA_01 · 06 P1B-Q5 |
| `safety area` / `to release our issues` | `clear of the high ground` / `to work the problem` | 표준 용어가 아니어서 관제사에게 전달되지 않는다 | EPTA_06 P2B-Q4·Q5 |

### 1-1. 공식 샘플세트 Ⅰ(SAMPLE_01) — 음성 응시 교정 사례

| 내 표현 | 고친 표현 | 왜 | 사례 |
|---|---|---|---|
| `We set 10 degree left by mistake. Turning right 10 degree.` (`confirm ~?` 질문) | `Negative, HL123 — we turned 10 degrees left by mistake. Now turning right 10 degrees.` | 정정 3단은 완전했다. **첫 단어 `Negative` 하나**가 빠졌다 — 관제사는 결론을 먼저 들어야 분리를 계산한다 | S01 P1B-Q5 |
| `I'm not sure we can get the wingtip clearance on Golf 2. So request hold.` (`are you able ~?` + `request assistance`) | `Negative, HL123 — we are not sure of our wingtip clearance on Golf 2. Request a marshaller to guide us past the Gulfstream.` | `request assistance` = **사람을 보내 달라**는 것. 멈춰 있어도 윙팁 간격은 확인되지 않는다 | S01 P2A-Q12 |
| `Request climb to flight level 130 until Johnson VOR` (ATC 가 `if unable, maintain FL130 until Johnson VOR` 로 대안을 준 뒤) | `Unable to cross Johnson VOR at or above flight level 150 due to performance — we will maintain flight level 130 until Johnson VOR.` | **관제사가 이미 말한 것은 복창/수락, 모르는 것은 요청.** 그리고 못 하는 대상은 FL210 상승이 아니라 FL150 교차제한 | S01 P1B-Q4 |
| `Request hold due to 30 minutes hold.` (30분 홀드를 통보받은 뒤) | `Roger, HL123 — we will take the 30-minute hold and burn the fuel off.` | 같은 뿌리의 반복. 통보에는 수락으로 답한다 | S01 P2A-Q9 |
| `even if we speed up the max speed, it will arrive at 0100 Zulu` (실제 0103) | `even at maximum speed our estimate is 0103 Zulu. Request a later time.` | **실제 값을 말하지 않으면 "못 간다"와 "0100 에 간다"가 모순**된다 | S01 P1B-Q6 |
| `After maintain 4000` (`stating you're levelling off at 4,000` 요구) | `We are levelling off at 4,000.` | `maintain` 은 지시 복창 동사, `levelling off` 는 **현재 상태 보고 동사** | S01 P2B-Q3 |
| `Recast holding` / `Recast inbound for Independent` | `Request vectors for holding` / `Request vectors to Independent Airport` | **`vectors`** 가 있어야 관제사가 기수를 유도한다. 두 문항에서 빠졌다 | S01 P2B-Q3 · Q5 |
| (누락) | `Stand by for further information.` | 관제사가 `let me know if anything changes` 라고 하면 이것으로 답한다 | S01 P2B-Q7 |
| `Smith ground` / `Ground` (지시문은 Clearance Control / Apron) | `Smith Clearance` / `Apron` | **지시문이 알려준 기관명을 첫 단어로 그대로 쓴다.** 클리어런스·Apron·Ground 는 다른 주파수 | S01 P2A-Q1 · Q5 |
| `start up route at gate 87` (구어체 30단어 부탁) | `we will pull forward on lane Alpha so you can push the aircraft at gate 87` | 실제 출제 ATC 는 이렇게 말하고, **알아듣는지가 Comprehension 평가 지점**이다 | S01 P2A-Q6 |
| `Descend and maintain flight level 290` (지시는 FL220) | `Descend and maintain flight level 220` | **고도는 필수 복창 7항목.** 7,000피트 차이면 수직 분리가 깨진다 | S01 P1B-Q2 |
| `3-minute, modern stumplers at flight level 210` | `We have had moderate turbulence for 3 minutes at flight level 210, with an altitude gain of about 200 feet.` | **고도 변화 200피트**가 이 보고에서 가장 쓸모 있는 값. 그리고 명사 나열 대신 동사를 세운다 | S01 P1B-Q3 |
| `We got lots of instruments display` | `We lost a lot of our instrument displays` | `lost` 한 단어가 빠져 **사건 원인이 반대로** 전달됐다 | S01 P2C-Q1 |
| `Both are not for visual approach` (Independent 는 시정 10마일·운고 2,200) | `Sovereign was not suitable, but Independent was better — 10 miles visibility and 2,200 broken, so we chose Independent.` | 바로 다음 문장에서 "더 나은 공항을 골랐다"고 하니 **자기 설명끼리 모순** | S01 P2C-Q1 |
| `I think it handled well` | `I think the controller handled it well` | 주어가 빠져 수동처럼 들린다. (단 **이 문항은 평가 대상이 처음으로 관제사였다** — 4세트 연속 지적 해결) | S01 P2C-Q2 |
| `how long it will take?` | `how long will it take?` | 의문문은 **조동사가 주어 앞으로.** 지금 형태는 간접의문문 어순 | S01 P2A-Q4 |
| `we have to defuel on the runway` | `we had to defuel on the ramp — or burn it off, because defueling was not available` | 디퓨얼링은 **램프**에서 한다. 그리고 실제 해결은 30분 홀드로 **연료를 소모**한 것 | S01 P2A-Q13 |

| `we cannot use the 32r runway due to aircraft performance we need at least 2900m` (가용 3,200m) | `3,200 metres is enough — we need 2,900. We will take runway 32R.` | **부등호 방향.** 3,200 > 2,900 이므로 쓸 수 있다. 값은 정확히 기억했는데 비교가 뒤집혔다 | EPTA_07 P2A-Q4 |
| `climb to fl380 , maintain fl340 until simun` | `Unable flight level 380 due to weight. Maintaining flight level 340 until SIMUN.` | 두 고도를 동시에 복창하면 **모순된 교신**이 된다. ATC 가 준 대안을 받되 **`unable` 선언이 먼저** | EPTA_07 P1B-Q5 |
| `negative turn left heading 290 by mistake , now turning right heading 310` (기상 회피로 290 유지 중) | `Negative, maintaining heading 290 to stay clear of a build-up.` | 실수가 아니라 **의도한 회피**다. 310 으로 돌아가면 뇌우로 들어간다 — 상황을 먼저 읽는다 | EPTA_07 P1B-Q2 |
| `turn right heading 240` (지시는 zero tree zero = 030) | `turn right heading 030` | **기수는 필수 복창 7항목.** 030 과 240 은 거의 정반대 방향 | EPTA_07 P2B-Q6 |
| `cross tamna at or above 10000` (앞의 `descend to FL240` 누락) | `Descend to flight level 240, cross TAMNA at or above 10,000.` | 지시가 두 토막이면 **왼쪽 끝부터** 읽는다. 까다로운 쪽을 맞히고 쉬운 쪽을 흘렸다 | EPTA_07 P1A-Q3 |
| `line up and wait runway 32r` (조건 `behind the departing Cessna Citation` 누락) | `Behind the departing Cessna Citation, line up and wait runway 32R.` | **조건을 문장 맨 앞에.** 빠지면 즉시 진입이 되어 활주로 침입으로 이어진다 | EPTA_07 P2A-Q6 |
| `cleared to ruwnay 32r` | `Cleared for takeoff runway 32R` | `takeoff` 는 **이륙 허가에만** 쓰는 한 단어. `cleared to runway` 는 "활주로까지 가도 좋다" | EPTA_07 P2A-Q7 · S01 P2A-Q8 |
| `request climb to 2 level above us due to turbulence` | `Request two levels higher — the preceding aircraft reports smooth air there.` | REQUEST 뒤는 명사구. 그리고 **왜 하필 두 레벨 위인지**(선행기 보고)가 근거다 | EPTA_07 P1B-Q4 |
| `we got discharge on the display` (연기 경고가 꺼진 것을 알리는 자리) | `The smoke warning went out about tree minutes after we discharged the bottles.` | 갱신의 핵심은 **경고 소멸**이다. 소화병 방출은 이미 앞 턴에서 한 일 | EPTA_07 P2B-Q8 |
| `we noticed cargo smoke ... request priority` (MAYDAY 선언) | `Mayday, mayday, mayday, Cheongju Approach, HL123, cargo smoke warning in the aft hold. We have discharged the fire bottles.` | 선언 순서는 **MAYDAY×3 → 기관명 → 콜사인 → 사건**. 소화병 방출은 **60분을 벌었다**는 뜻이라 반드시 전달 | EPTA_07 P2B-Q3 |
| `we notice that warning sign` (Task C 사건 설명) | `we got a cargo smoke warning for the aft hold` | **사건의 이름**이 없으면 무슨 일이 있었는지 전달되지 않는다. Ⅱ-B 시작 때 메모 맨 위에 사건명을 적어 둔다 | EPTA_07 P2C-Q1 · 06 P2C-Q1 |
| `give another option to profit for our aircraft` | `offer an option that was actually suitable for us` | `profit`(수익) ≠ `suitable`(적합). **EPTA_04 에서 지적한 단어가 재발** | EPTA_04 P2A-Q4 · 07 P2C-Q2 |
| `the aircraft is unservisable , we have to use the longest runway` (고장난 것은 앞의 A350) | `the A350 ahead of us was unserviceable, so taking 32R also put us first for departure` | 고장난 주체를 혼동하면 결론이 뒤집힌다 | EPTA_07 P2A-Q11 |
| `it helped us something to find` / `all the atc did is perfect` | `it helped us work out where we could go` / `everything the controller did was good` | 문장이 성립하지 않는다. **짧고 맞는 문장**이 낫다 | EPTA_07 P2C-Q2 |

## 2. 실제 출제 음성에서 확인된 핵심 표현

`reference/exam-spec.md` §5-3 에서 옮긴 것. 아직 채점 사례는 없지만 미리 외워 둘 것.

| 표현 | 뜻 | 쓰는 상황 |
|---|---|---|
| request vectors for troubleshooting | 문제 파악을 위한 벡터 요청 | 기체 이상 발생 후 시간이 필요할 때 |
| maintain present heading and altitude for troubleshooting | 문제 파악 위해 현 기수·고도 유지 | 같은 상황에서 ATC 지시를 보류시킬 때 |
| say the nature of the emergency | 비상의 성격을 말하라 | 관제사가 조종사에게 묻는 말 |
| souls on board | 탑승 총인원 | fuel 과 함께 보고 |
| clear of traffic | 트래픽 회피 완료 | TCAS 회피 종료 보고 |
| stand by for further information | 추가 정보는 잠시 후에 | 당장 답할 수 없을 때 |
| request towing assistance | 견인 지원 요청 | 착륙 후 자력 이동 불가 시 |
| offset (거리) right/left to avoid weather | 기상 회피를 위해 ~마일 측면 이탈 | 편차 요청 |
| unable due to performance, request (대안) | 성능상 불가, 대안 요청 | **unable 은 반드시 사유 + 대안 3단 구조** |
