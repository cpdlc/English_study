# 외워야 할 표현 모음

채점할 때마다 `CLAUDE.md` §6-5 규칙에 따라 "내 표현 → 고친 표현" 형식으로 이어서 추가한다.
이미 있는 패턴이면 표는 그대로 두고 **사례 칸에 세트 번호만 덧붙인다.**

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
| `request to direct lake side airport` | `Request direct to Lakeside Airport.` | REQUEST 뒤에는 명사구가 바로 온다. `request to ~` 는 동사구 형태가 된다 | EPTA_01 P2B-Q6 (재응시) |
| `there was a mistakes about setting altimeter request new altimeter` | `We had 18,000 set in the altitude window by mistake. Now climbing back to flight level 200.` | `altimeter`(고도계 기압)와 `altitude window`(고도 선택창)는 다른 것. 틀린 건 고도값 | EPTA_01 P1B-Q5 (재응시) |
| `negative due to aircraft` | `Negative. Runway 14 is too short for us — our braking will be degraded.` | 거부 방향은 맞았으나 사유가 전달되지 않는다. 사유는 "활주로가 짧다" | EPTA_01 P2B-Q5 (재응시) |
| `there is large debris in runway` | `we saw a large piece of rubber debris on taxiway Mike` | 파편은 **유도로**에 있었다. 활주로라고 하면 관제사가 활주로를 폐쇄한다 | EPTA_01 P1B-Q2 (재응시) |
| `after checklist the issues has been solved` | `After the checklist the system was still lost, so we had to extend the gear by the alternate system.` | 유압은 해결되지 않았다. "해결됐다"고 하면 사건의 심각도가 사라진다 | EPTA_01 P2C-Q1 (재응시) |
| `I don't have any experience similar like this` (예시 요구에 대한 답) | `I don't have experience of a change exactly like this, but for example, if we were given a new runway at five miles, I would go around.` | `Give an example.` 는 경험이 없으면 **가정 예시**로 답한다. 경험 없음으로 닫으면 질문을 비운 것 | EPTA_01 P2A-Q11 (재응시) |
| `they treat us like as a making safety more` | `he put safety first` | 문장이 성립하지 않는다. 짧고 맞는 문장이 길고 깨진 문장보다 낫다 | EPTA_01 P2C-Q2 (재응시) |

| `climb through fl250` (실제 2,500 feet) | `Climbing through 2,500 feet.` | **네 자리 피트와 FL 은 만 피트 이상 차이.** 피트는 `2500`, FL 은 `FL250` 으로 모양을 다르게 적는다 | EPTA_02 P2A-Q9 |
| `maintain 14000` (지시는 4,000) | `maintain 4,000` | 같은 뿌리의 자릿수 오류. 앞에 숫자가 더 붙지 않았는지 다시 본다 | EPTA_02 P1A-Q4 |
| `Negative maintain speed 290` (실제 270) | `Negative, maintaining 270 knots due to buffet margin.` | NEGATIVE 다음은 반드시 **실제 값**. 값이 없으면 "290 이 아니다" 에서 끝난다 | EPTA_02 P1B-Q3 |
| `decent 4000 cross qualit` (교차 불가 상황) | `Descend to 4,000. Unable to cross QUILL at 4,000 — that would exceed our descent rate. Request descent now.` | `readback of what you can accept` = **할 수 있는 것만** 복창. 못 하는 것까지 복창하면 약속이 된다 | EPTA_02 P1B-Q4 |
| `quawk 3027` (3207 을 잘못 넣은 상태) | `Correction — we had 3207 set by mistake. Now squawking 3027.` | 정정 문항은 **무엇을 잘못했고 어떻게 바꿨는지**까지 | EPTA_02 P1B-Q5 |
| `roger request intersection runway` | `Before I can accept — request the runway distance available from Foxtrot.` | 교차점 출발은 **수락 전에 잔여 거리 확인**. `can you work with that?` 에 roger 는 답이 아니다 | EPTA_02 P2A-Q6 |
| `roger , request landing` (full readback + intentions 요구) | `Heading 240, maintain 8,000, HL123. Our intention is to continue for the ILS runway 27 using your groundspeed.` | ROGER 는 복창을 대신할 수 없다. `request landing` 은 의도가 아니다 | EPTA_02 P2B-Q4 |
| `unable to speed up 250 due to performance` | `Unable 250 knots — our airspeed indications are unreliable, so we cannot set a speed accurately.` | 사유는 **그 사건에 맞게**. 성능 문제로 들으면 관제사가 다른 판단을 한다 | EPTA_02 P2B-Q5 |
| `such as heigh indication ... ask the exact height` | `our airspeed indications ... ask for the groundspeed` | 이 사건은 **속도** 문제였다. 핵심 단어를 틀리면 리포팅 전체가 어긋난다 | EPTA_02 P2C-Q2 |
| `I think we handled it well` (관제사를 묻는 질문) | `I think the controller handled it well.` | Task C Q2 의 주어는 **관제사**. 2세트 연속 `we` 로 시작 | EPTA_02 P2C-Q2 |
| (3세트 연속 무응답) | `One thing that could have been handled differently is that he could have told us earlier …` | Task C Q2 **후반부**. 이 틀로 한 문장만 붙이면 된다 | EPTA_01·02 P2C-Q2 |
| (3세트 연속 무응답) | `For example, on a wet runway at high take-off weight, 2,150 metres would not be enough for us.` | Follow-up 의 `Give an example.` — 경험이 없으면 **가정 예시**로 | EPTA_01·02 Follow-up |

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
