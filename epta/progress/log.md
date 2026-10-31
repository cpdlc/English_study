# 학습 진행 로그

세트를 채점할 때마다 `CLAUDE.md` §6-5 규칙에 따라 아래 표에 한 줄씩 추가한다.
(빈칸으로 남은 문항은 무응답 = Level 1 로 처리한 결과도 그대로 기록한다.)

| 날짜 | 세트 | 최종등급(Level) | 약점 태그 | 사용한 시나리오 |
|---|---|---|---|---|
| 2026-10-08 | EPTA_01 | **Level 1 (불합격)** | 지시문 요구 행위 미수행(6회+실질 무응답 2회), 들은 값을 다른 값으로 대체(6건), confirm/able 질문에 AFFIRM·NEGATIVE 미사용(3회), 90초 Follow-up 무응답, 복합 지시의 뒷부분 생략, Task C 사건 원인 오인(유압→기어) 및 질문 대상 오독 | Lakeside 도착(Cruise/Descent/Approach, 활주로 09→14 변경) / Clearwater 접근 중 유압 B 저압(비상선포 없음, 관제사 변심) |
| 2026-10-13 | EPTA_01 **재응시** | **Level 2** (1차 Level 1 → +1) | 복합 지시 뒷부분 누락(8건, 2세트 연속 최우선), 기관 호출 누락(신규 4건), 값을 하나 맞추면 다른 하나를 틀림(Task A 4문항 전부), 주파수 2회 연속 오류, `confirm ~?` 에 AFFIRM 유지(미해결), 접근 허가 복창 누락 반복, Task C 질문 후반부 미응답 반복 | 동일 (EPTA_01 재응시) |
| 2026-10-15 | EPTA_02 | **Level 3** (EPTA_02 +1, 1→2→3) | 고도 자릿수 혼동(신규 최우선: 2,500ft→FL250, 4,000→14000), NEGATIVE 뒤 실제 값 누락, 지시문의 '물어보라' 미수행(6건, 3세트 연속), `controller` 를 기관명으로 사용(반복), Task C 에서 ILS→RNAV 전개 누락 및 speed→height 오인, `could have been handled differently` 3세트 연속 무응답 — 단 주파수 3회 모두 정확·접근허가 복창 성공·복합지시 4건 성공 | Fairmont 출발(제빙·슬롯지연·교차점 출발) / Thornbury 접근 중 속도계 불일치(비상선포 없음) |
| 2026-10-19 | EPTA_03 (test04 계열 + 첫 MAYDAY) | **Level 3 (유지)** | 접근 허가 복창 누락 3세트 연속(P2A-Q8 `expect` 로 대체, P2B-Q8 통째 누락), 지시문의 '물어보라/이유 대기' 미수행 3세트 연속(P2A-Q7, P2B-Q6, P1B-Q4), 질문이 둘이면 하나만 답함(P2B-Q5 souls on board 누락), 피트→FL 변환 재발(P2A-Q4, 단 4회 중 3회는 정확), heading 020→202 뒤집기, Task C 비행단계 오인(상승중→approach) 및 자기 선택과 모순 — 단 `tree` 4회 전부 정확 해석, confirm 3단 완성, 정정 3단 완성, MAYDAY 거의 완성, `could have been handled differently` 4세트 만에 응답 | Muan 도착(훈련공역 우회·braking action) / Gimhae 이륙 후 ENGINE 1 FIRE, MAYDAY·fuel/SOB |
| 2026-10-21 | EPTA_04 | **Level 3 (유지)** | **받아적은 숫자를 비교하지 않음(신규 최우선: 2,400m 필요인데 3,000m 를 '불가', 2,300m 를 '가능'으로 판단)**, 지시문 뒷부분 누락 9건(EPTA_03 4건에서 증가), '결정 전에 묻기' 3세트 연속·'이유 대기' 4세트 연속 실패, `controller` 기관명 3회(3세트 연속), 값 오류 6건(3,000→8,000ft·600→6,000ft·FL180→FL190·178→70명·120.35→120.5·right→left), Task C 에 다른 파트 내용 혼입(신규), `Give an example` 5세트 연속 무응답 — 단 **접근 허가 복창 3/3 성공(3세트 연속 실패 항목 해결)**, 피트↔FL 3/3, unable 3단 완성, confirm 3단 2세트 연속 유지, squawk 뒤집기 함정 통과 | Everett→Halston 중 승객 응급환자 → Redwood 회항 / Halston 접근 중 플랩 15 고착 |
| 2026-10-27 | EPTA_05 | **Level 2 (불합격, EPTA_02~04 Level 3 에서 ↓)** | **무응답 3문항(신규 최우선: P2A-Q3 커퓨 숫자비교, P2A-Q6 결정 전에 묻기, P2A-Q10 90초 Follow-up) — 이 셋이 혼자 등급을 한 단계 내렸다**, `inquire` 지시 3문항 전부 미수행(P2A-Q2·Q6·Q9), 숫자 비교 2세트 연속 실패(P1B-Q1 43>40 비교 없이 복창, P2B-Q6 상황과 무관한 정보 요청, Task C 70분 대 35분을 '부족'으로 오판), intentions 5세트 연속 누락(P2B-Q4), 값 오류 3건(FL340→350, 1,800ft→18000, 186명→180), 두 질문 중 하나만 답(P2B-Q9, EPTA_04 와 동일), Task C Q2 주어가 관제사가 아닌 조종사(3세트 연속) — 단 **✅ 13개로 역대 최다·❌ 4개로 역대 최소**, 기관 호출 `controller` 오류 해결(3세트 연속 항목), fuel/SOB 두 항목 모두 응답(2세트 연속 실패 해결), squawk 정정에 틀린 값 명시(해결), 5요소 복창 2회 완전, 접근 허가 3/3 유지, Task C 에 다른 파트 혼입 없음(해결) | Larkin 도착(커퓨 2300·홀딩·선행 Dash 8 감속) / Ashford 접근 중 기수 기어 unsafe → 저속통과 후 ILS 착륙(비상선포 없음) |
| 2026-10-28 | EPTA_06 | **Level 2 (불합격, 유지)** | **받은 정보를 결정에 쓰지 못함(신규 최우선: P2A-Q4 에서 배풍 7kt 를 물어 받고도 Q5 에서 한계 10kt 와 비교 안 하고 RWY24 선택 — 본인이 Q3 에서 28분 불가라 계산한 활주로 / P2B-Q7 에서 기상을 물어 'Daleford 800m·ILS 없음'을 받고도 Q8 에서 Daleford 선택)**, 의미 반전·값 오류 7건(RWY06→26, passing 1,800→3000, rate of descent→고도, 25분↔10분 뒤집기, Westmoor→Eastvale, Task C 결말을 회항으로), 스스로 보고할 때 값이 틀림(복창은 정확), REQUEST 뒤 동사구 4회, 기관 호출 문제 3건(`ground`·누락·`arrival`), 지시문 뒷부분 4건(`with a reason` 2회), `Give an example` 미수행(응답 세트 기준 5세트 연속), `altimeter`(←altitude window) 재발, Task C Q2 첫 평가 대상이 또 조종사(4세트 연속) — 단 **무응답 0(EPTA_05 최우선 해결)**, **`our intention is to ~` 6세트 만에 사용**, **'결정 전에 묻기'/`inquire` 3문항 전부 수행(4세트 연속 실패 해결, P2B-Q7 은 묻는 내용까지 적절)**, **네 자리 피트 3,000+1,800 동시 정확(해결)**, 숫자 비교 2문항 성공(P2A-Q3 은 직접 뺄셈), 5요소 복창 2회 완전, 접근 허가 3/3, 주파수 2/2 | Arlen 출발(슬롯 1340 vs 유도 28분 → RWY06 배풍 판단) / Westmoor 접근 전 여압 상실 → 긴급강하, MSA 11,500 충돌, Daleford 안개로 목적지 착륙 |
| 2026-10-28 | **SAMPLE_01** (공식 샘플세트 Ⅰ = 실제 출제 음성 test01, **직접 녹음·음성 응시**) | **Level 3 ↑** (EPTA_05·06 Level 2 에서 상승) | **복합 지시의 마지막 토막 누락 3회**(`request assistance`→`hold` 로 대체, `request vectors for holding`→vectors 누락, `stand by for further information` 누락), **`confirm`/`are you able` 질문의 첫 단어 AFFIRM·NEGATIVE 누락 2회**(P1B-Q5 설명부터, P2A-Q12 `I'm not sure`), **관제사가 이미 준 것을 다시 요청 2회**(P1B-Q4 contingency 를 request, P2A-Q9 통보받은 홀드를 request), **기관 호출 오류 2회**(지시문이 Clearance·Apron 을 지정했는데 둘 다 Ground 로 호출), 값 오류 3건(**FL220→FL290 — 유일한 ❌**, 0103→0100, gate 89→890), 구어체 ATC 30단어 부탁 미이해(P2A-Q6), intentions 누락(P2B-Q4, `say intentions` 명시됨), Task C Q1 `both are not for visual approach` 자기 선택과 모순 + 끊김 심함, **Task C Q2 직전 약 70초간 `Uh` 만 이어짐** — 단 **✅ 15개·❌ 1개로 양쪽 모두 역대 최고**, **9요소 클리어런스 완전 수신(P2A-Q3, 역대 최고점)**, **기상 두 벌 비교해 옳은 공항 선택(P2B-Q5 — EPTA_06 최우선 약점이 여기서는 해결)**, **Task C Q2 주어가 처음으로 관제사 + 제안 구체적(4세트 연속 지적 해결)**, 자가 정정 `Correction` 2회, `inquire` 수행, 활주로 횡단 허가·푸시백 방향·기준점 복창 | 공식 샘플세트 Ⅰ (Smith 출발 Clearance/Apron/Taxi, 연료 과다·Gulfstream 타이어 펑크 / Public 접근 중 계기 표시 다수 상실) |
| 2026-10-30 | EPTA_07 (test04 계열 + 두 번째 MAYDAY) | **Level 2 (유지)** | **부등호 방향이 뒤집힘(신규 최우선: P2A-Q4 에서 가용 3,200m ≥ 필요 2,900m 인데 거부 — 바로 앞 Q3 에서 본인이 물어서 받은 값이다. 같은 구조의 P2B-Q5 에서는 2,500 < 2,900 을 정확히 판단해 거부 → 두 문항 모두 '거부'를 택해, 비교한 것인지 거부가 기본값인지 구분 안 됨)**, 상황 오독(P1B-Q2 기상회피를 '실수'로 읽고 뇌우 쪽으로 복귀하겠다고 함), heading 030→240(P2B-Q6), 강하 지시 통째 누락(P1A-Q3), `unable` 없이 두 고도를 동시 복창해 모순(P1B-Q5), Follow-up 에서 고장난 A350 을 자기 기체로 오독(P2A-Q11), intentions 누락(P2B-Q6 — EPTA_06 해결 후 재발), 복합 지시 마지막 토막 4건(P1B-Q1 대안·P2A-Q2 지연확인·P2A-Q10 이유·P2B-Q8 도착요청), `cleared to runway`(←cleared for takeoff), 조건 누락(P2A-Q6 `behind the departing ~`), Task C 에 사건명 `cargo smoke`·MAYDAY·소화병 방출 누락, `profit`(←suitable) 재발, `Give an example` 6세트 연속 미수행 — 단 **✅ 14개로 창작 세트 최다**, **기관 호출 5/5 정확(EPTA_06 3건 오류 해결)**, **`Negative` 첫 단어 2/2(SAMPLE_01 2회 누락 해결)**, **'결정 전에 묻기' 3문항 전부 수행(둘은 물은 내용까지 정확)**, **P2B-Q4→Q5 묻기-결정 쌍 완주(최우선 약점 처음 성공)**, **REQUEST+명사구(EPTA_06 4회 동사구 해결)**, **위치보고 값 정확(EPTA_06 실패 항목)**, **Task C Q2 주어 관제사 2세트 연속**, 5요소 복창·접근 허가 4세트 연속, 주파수 2/2, MAYDAY 구조 정돈 | Gimpo 출발(선행 A350 고장 → RWY32R 전환 판단, direct SIMUN) / Cheongju 접근 중 후방 화물칸 CARGO SMOKE → MAYDAY, Yangyang 2,500m 거부하고 Cheongju 착륙 |

---

## 채점 기준 정책

`CLAUDE.md` §6-1-1 참조. 이 시험은 원래 구술시험이므로 아래 텍스트 표기 방식은 감점하지 않는다.
① ICAO 알파벳 한 글자 축약(G=Golf 등) ② 발음상 문제없는 오탈자 ③ 숫자를 아라비아 숫자로 쓴 것.
단어 자체가 다른 경우("clear" vs "cleared")와 숫자 **값**이 틀린 경우는 그대로 감점한다.
Pronunciation 항목은 텍스트로 판단할 근거가 없어 "평가 보류"로 처리하고 등급 계산에서 제외한다.

실제 출제 음성에서 `tree`(=3) 발음을 쓰는 세트가 확인되었으므로(`exam-spec.md` §7),
`tree`/`three` 는 둘 다 정답으로 본다.

---

## 발음 소견 (2026-10-28, SAMPLE_01 음성 응시에서 처음 확보)

`CLAUDE.md` §6-2 에 따라 Pronunciation 은 계속 **"평가 보류"**(등급 계산 제외)로 둔다 —
소리를 직접 들을 수 없기 때문이다. 다만 SAMPLE_01 은 **본인 음성을 영어 ASR 이 받아쓴
SRT** 가 있어, 같은 단어가 반복해 다른 단어로 인식된 지점이 **간접 근거**로 남는다.
ASR 성능·마이크도 원인일 수 있으니 단정하지 않고 관찰 항목으로 둔다.

| 의도한 단어 | ASR 인식 | 횟수 | 메모 |
|---|---|---|---|
| **Hotel Lima** | `hotel amount` | **30회+ (전 문항)** | 매 교신의 첫 단어. 최우선 |
| **request** | `recast` | **5회** | 이 시험에서 가장 많이 쓰는 동사. 어미 /st/ 탈락 |
| **ILS** | `IRS` | 4회 | **L↔R.** 둘 다 실재 장비라 뒤집히면 위험 |
| **wingtip clearance** | `winter clearance` | 3회 | |
| **RNAV** | `RLAB` / `RNA` | 2회 | 역시 L↔R |
| moderate turbulence / instruments / ATLAS / Sovereign / runway / as filed / start-up | modern stumplers / interrupt / at loss / server / roommate / as fly / starter | 각 1회 | |

**`stop climb` vs `step climb`(P1A-Q2)은 발음 문제가 곧 의미 반전으로 이어진 사례**다 —
/p/ 가 /t/ 로 들려 "상승 정지"가 "단계 상승"이 됐다. 다음 녹음에서 `Hotel Lima` ·
`request` · `ILS` 세 개의 인식 결과를 보면 개선 여부를 바로 확인할 수 있다.

---

## 약점 태그 누적 메모

### 해결됨 (EPTA_07 2026-10-30 에서 확인)

- ~~기관 호출 오류·생략 (EPTA_06 3건, 성격을 바꿔가며 계속되던 항목)~~ → **5/5 전부 정확**
  (P1B-Q4 `jeju control`, P1B-Q6 `Cheongju Approach`, P2A-Q1 `gimpo ground`,
  P2A-Q8 `gimpo departure`, P2B-Q1 `chengju approach`). 발신 턴에서 호출을 빠뜨린 곳도 없다.
- ~~`confirm` · `are you able` 질문의 첫 단어 누락 (SAMPLE_01 2회)~~ →
  **P1B-Q1 · P1B-Q2 둘 다 `negative` 로 시작.** (단 Q2 는 그 뒤 내용이 틀렸다)
- ~~REQUEST 뒤에 동사구 (EPTA_06 4회, 최다 반복 오류)~~ → P1B-Q6 `request runway in use and
  wind check`, P2A-Q1 `request taxi` 등 대부분 명사구. **1회만 남았다**(P1B-Q4
  `request climb to ~`).
- ~~스스로 보고할 때 값이 틀림 (EPTA_06 신규 최우선)~~ → **P2A-Q8 에서 통과고도 2,500 과
  목표 4,000 을 정확히** 보고. EPTA_06 에서 `passing 1,800`→`passing 3000` 으로 ❌ 였던 유형.
- ~~Task C Q2 의 첫 평가 대상이 조종사 (4세트 연속)~~ → `I think the atc handled it well` —
  **SAMPLE_01 에 이어 2세트 연속 해결.** 지적 내용도 구체적·타당(기종·성능 확인 후 선택지 제시).
- ~~"결정 전에 묻기" (EPTA_02~05 네 세트 연속 실패)~~ → **3문항 전부 수행**
  (P2A-Q3, P2A-Q9, P2B-Q4). 그중 **P2A-Q3·P2B-Q4 는 물은 내용까지 정확**하고,
  **P2B-Q4 는 자기 요건(2,900m)을 질문에 함께 실어** 한 번의 교신으로 판단 재료를 다 받아냈다.
- **P2B-Q4 → Q5 : 최우선 약점 "물어본 답을 결정에 쓰기"를 처음으로 완주했다.**
  물어서 받은 2,500m 를 자기 요건 2,900m 와 비교해 Yangyang 을 거부하고 Cheongju 를 선택.
  EPTA_06 에서는 같은 구조의 두 쌍을 모두 반대로 판단했다.
- **5요소 긴 복창 → 4세트 연속** (P2B-Q2).
- **접근 허가 복창 → 4세트 연속** (P1A-Q4, P2B-Q9).
- **주파수 → 3세트 연속 전부 정확** (118.1, 119.2).
- **네 자리 피트 → 유지** (P2A-Q7 의 4,000 과 2,500).
- **무응답 0 → 2세트 연속.**
- **MAYDAY 구조 정돈** (P2B-Q3 : ×3 + 콜사인 + 사건 + 요청. 기관명만 누락).

### 해결됨 (EPTA_06 2026-10-28 에서 확인)

- ~~무응답 (EPTA_05 최우선 — 3문항을 비워 등급이 내려갔던 항목)~~ → **32/32 전부 응답.**
  90초 Follow-up 과 Task C 두 문항도 분량을 채웠다. 해결.
- ~~intentions 를 말하지 않음 (5세트 연속)~~ → P2B-Q5 `our intension is to work checklist
  and vector to ...` — **`our intention is to ~` 구문을 처음 사용.** 내용(벡터는 이미 받은
  것)은 더 다듬어야 하지만 구문 자체는 자리잡았다.
- ~~"결정 전에 묻기" / `inquire` (4세트 연속)~~ → **P2A-Q4 · P2A-Q10 · P2B-Q7 세 문항 전부
  수행.** 특히 **P2B-Q7 은 묻는 내용까지 적절**(양쪽 공항 기상 + 의료 지원) — EPTA_05 에서
  상황과 무관한 것을 물어 지적했던 항목이다. 해결.
- ~~네 자리 피트 자릿수 (EPTA_05 에서 1,800ft→18000)~~ → P2A-Q8 에서 **3,000 과 1,800 을
  한 지시에서 둘 다 정확히.** 해결. (단 P2A-Q9 에서 스스로 보고할 때는 틀림 — §아래 참고)
- ~~`are you able ~?` 에 `unable` 로 시작~~ → P1B-Q4 `negative ...` 로 수정됨.
- ~~`maintain` 을 상태 보고에 사용~~ → P2B-Q1 `level at fl330` 정확. (단 P2B-Q8 에서 재발)
- **접근 허가 복창 → 3세트 연속 유지** (P1A-Q4, P2B-Q9).
- **`confirm ~?` NEGATIVE 3단 → 4세트 연속 유지** (P1B-Q3).
- **5요소 긴 복창 → 3세트 연속** (P1A-Q2, P2B-Q2).
- **주파수 → 2세트 연속 전부 정확** (118.35, 120.55).
- **정정 3단 구조 → 유지** (P1B-Q5 에서 틀린 값 FL220 명시).
- **숫자 비교 → 2문항 성공** (P1B-Q1 unable+18분 사유, **P2A-Q3 은 1340−1318=22분을 직접
  계산해 28분과 비교**). EPTA_04·05 두 세트 연속 최우선이던 항목이 Part Ⅰ·Ⅱ-A 에서는 해결.
  단 **Part Ⅱ-B 에서는 여전히 안 됨**(P2B-Q4 10,000 vs 11,500, P2B-Q7 20분 vs 11분).

### 해결됨 (EPTA_05 2026-10-27 에서 확인)

- ~~`controller` 를 기관명으로 사용 (3세트 연속 항목)~~ → P2B-Q3 에서 `Ashford Approach` 로
  정확히 호출. 이 세트에서 기관 호출이 필요한 문항 중 호출을 한 곳에서는 전부 정확한 기관명을
  썼다. (단 P1B-Q6·P2B-Q7 에서는 호출 자체를 생략 — 오류의 성격이 "틀린 이름"에서
  "빠뜨림"으로 바뀌었다)
- ~~fuel endurance 와 souls on board 중 하나만 답함 (2세트 연속)~~ → P2B-Q5 에서 **두 항목
  모두 응답**, 연료는 분 단위까지 정확. (승객 수 186→180 값 오류만 남음)
- ~~squawk 정정에서 잘못 넣은 값을 말하지 않음~~ → P1B-Q5 `we had set 6107 by mistake now
  squawking 6170` — **틀린 값 + 정정 값 둘 다.** EPTA_04 `another squawk` 에서 해결.
- ~~Task C 에 다른 파트 내용 혼입 (EPTA_04 신규)~~ → P2C-Q1·Q2 모두 Part ⅡB 전개만 담았고
  비행 단계(`approach phase`)도 정확. 한 세트 만에 해결.
- ~~선회 방향 누락~~ → P2B-Q8 `left … 180` — EPTA_04 에서 `turn right`→left 로 틀린 항목.
- **접근 허가 복창 → 2세트 연속 유지** (P1A-Q3, P2A-Q7, P2B-Q8 3/3).
- **피트↔FL 구분 → 3세트 연속 유지** (P2A-Q4, P2B-Q1).
- **5요소 긴 복창 → 한 세트에서 2회 완전** (P2A-Q5, P2B-Q2).
- **`confirm ~?` NEGATIVE 3단 → 3세트 연속 유지** (P1B-Q3).
- **unable 3단 → 2세트 연속 유지** (P1B-Q4, 첫 단어만 `Negative` 로 고치면 완전).
- **주파수 정확** (P2A-Q7 119.45). 4세트 중 3번 틀렸던 항목.

### 해결됨 (EPTA_04 2026-10-21 에서 확인)

- ~~접근 허가 복창 누락 (3세트 연속 최우선이던 항목)~~ → **P1A-Q3 · P2A-Q8 · P2B-Q8
  세 문항 전부에서 `cleared … approach` 를 복창.** 해결.
- ~~unable 을 쓰지 않고 할 수 없는 것을 그대로 복창~~ → P1B-Q4 `unable to direct ZAVER due to
  weather, request radar vector` — **unable + 사유 + 대안 3단 완성.** EPTA_02·03 2세트 연속
  실패 후 해결.
- ~~피트↔FL 혼동~~ → P2A-Q1 · P2A-Q7 · P2B-Q1 **3/3 정확.** 해결.
- ~~squawk 숫자 뒤집기~~ → P1A-Q4 에서 2046 을 2064 로 뒤집지 않고 통과. (단 P1B-Q5 에서
  '잘못 넣은 값'을 말하지 않는 문제는 남음)
- `confirm ~?` NEGATIVE + 실제값 + 사유 → **2세트 연속 유지**(P1B-Q3).
- Task C Q2 가 관제사를 주어로 평가 + 질문 후반부 응답 → **2세트 연속 유지.**

### 해결됨 (EPTA_03 2026-10-19 에서 확인)

- ~~`confirm ~?` 에 NEGATIVE 만 하고 실제 값 누락~~ → P1B-Q3 `negative maintaining .74 due to
  turbulence` — **NEGATIVE + 실제 값 + 사유 3단 완성.** 세 세트 만에 해결.
- ~~자기 오류 정정에서 정정 조치 누락~~ → P1B-Q5 `hd203, we had set 203 by mistake, left
  heading 230` — **현재상태 + 오류 + 정정 3단 완성.** 두 세트 만에 해결.
- ~~Task C Q2 의 `could have been handled differently` 무응답~~ → P2C-Q2 에서 처음 응답.
  **4세트 만에 해결.**
- ~~착륙에 필요한 지원 요청 누락~~ → P2B-Q7 소방대 대기 요청. 두 세트 만에 해결.
- **신규 확인된 강점** : `tree`(=3) 표기를 **4회 전부 정확히 해석**(runway 36, FL350, FL230,
  13,000). 처음 접한 표기인데 한 번도 틀리지 않음. 기관 호출 **7건**, 복합 지시 **6건** 성공
  (EPTA_02 4·4 에서 증가).

### 해결됨 (EPTA_02 2026-10-15 에서 확인)

- ~~접근 허가 복창 누락~~ → P2B-Q8 에서 `cleared for the RNAV runway 27 approach` 복창,
  선회방향·기수·고도·established·주파수까지 6요소 전부. **해결.**
- ~~주파수 오류 2회 연속~~ → EPTA_02 에서 127.85 · 121.9 · 126.4 **3회 모두 정확.** 해결.
- ~~`confirm ~?` 에 AFFIRM 으로 시작~~ → P1B-Q3 에서 `Negative` 로 시작. **첫 단어는 해결**
  (다만 뒤에 실제 값 270 을 넣지 않아 절반만 전달 — 아래 "진전 중" 참고).
- ~~복합 지시를 하나도 온전히 수행하지 못함~~ → P1B-Q1, P1B-Q2, P2A-Q4, P2A-Q10
  **4건 온전 수행.** 기관 호출도 4건(P2A-Q1·Q4, P2B-Q1, P1B-Q6).
- ~~`clear`/`cleared` 혼동~~ → P1A-Q2 에서 정확(단 P2A-Q2·Q8 에서는 아직 `clear`) — 진행 중.

### 해결됨 (EPTA_01 재응시 2026-10-13 에서 확인)

- ~~직접 질문에 실질 무응답~~ → `rogoer`→`negative`(P2B-Q5), `whatever`→명확한 결정(P2B-Q6),
  `vacate`→문장(P2B-Q9). **해결.**
- ~~90초 Follow-up 무응답~~ → P2A-Q11 응답함. 내용은 3부 중 1부만이지만 무응답은 해소.
- ~~Task C 사건 원인 오인~~ → 유압 계통으로 정확히 짚음(1차는 기어 고장). **해결.**
- ~~Task C Q2 질문 대상 오독~~ → 관제사를 평가함(1차는 조종사). **해결.**
- ~~지시 요구 3개 중 1개만 수행(P2B-Q3)~~ → 셋 다 담음. **해결.**

### 최우선 (EPTA_08 에서 2문항 이상 겨냥)

- **부등호 방향 (신규·최우선, 두 세트 연속 Comprehension Level 2 의 핵심)** :
  숫자는 정확히 기억하는데 **받은 값과 자기 한계를 나란히 놓는 단계**가 빠진다.

  | | P2A-Q4 | P2B-Q5 |
  |---|---|---|
  | 내 요건 | 이륙 2,900 m | 착륙 2,900 m |
  | 받은 값 | **3,200 m**(충분) | **2,500 m**(부족) |
  | 올바른 판단 | 수락 | 거부 |
  | 내 결정 | **거부 ❌** | 거부 ✅ |

  **두 문항 모두 "거부"를 택했다.** 맞은 쪽이 비교의 결과인지 거부가 기본값이었는지
  구분되지 않는다. 그리고 틀린 쪽에서도 `we need at least 2900m` 라고 **값은 정확히 말했다**
  — 부등호 방향만 뒤집혔다. P1B-Q1 도 거부는 맞았지만 "2,400 뿐이다"라는 비교는 없었다.
  → 다음 세트에 **받은 값이 충분해서 '수락'이 정답인 비교 문항을 2개 이상** 배치한다
  (지금까지는 거부가 정답인 문항이 많았다). 그리고 지시문에 **두 숫자를 모두 말하라**고
  명시한다(`state your decision, and say both numbers`).
- **복합 지시의 마지막 토막 (6세트 연속, 이번 4건)** : P1B-Q1 대안 요청, P2A-Q2 지연 확인,
  P2A-Q10 이유, P2B-Q8 도착 시 필요한 것. 전부 **한 토막만 붙이면 ✅** 였다.
  `Give an example.` 은 응답한 세트 기준 **6세트 연속** 미수행.
- **사건의 이름과 핵심 조치를 Task C 에서 못 쓴다 (2세트 연속)** : EPTA_06 은
  `emergency descent`, EPTA_07 은 **`cargo smoke` · MAYDAY 선포 · 소화병 방출**이 전부 빠졌다.
  Part ⅡB 진행 중 Situation Update 가 준 정보 중 **일부만 전달**하는 양상도 같다
  (P2B-Q3 방출 누락, P2B-Q8 경고 소멸 누락).
- **intentions (해결 후 재발)** : EPTA_06 P2B-Q5 에서 `our intention is to ~` 를 처음 써서
  해결로 기록했는데, EPTA_07 P2B-Q6 에서 `request priority for landing`(요청)으로 되돌아갔다.
  관제사가 `Say your intentions` 라고 **명시해서 물은** 자리였다.
- **지시가 두 토막일 때 앞쪽을 흘린다 (신규)** : P1A-Q3 은 까다로운 교차제한을 맞히고
  **쉬운 강하 지시를 통째로** 빠뜨렸고, P2A-Q9 는 묻는 데 집중하다 **full readback 자체를**
  빠뜨렸다. 복창할 때 **메모 왼쪽 끝부터** 읽는 습관이 필요하다.
- **조건부 지시의 조건** : P2A-Q6 `behind the departing Cessna Citation` 누락(활주로 침입
  직결), P1A-Q2 `after departure` 누락. SAMPLE_01 의 `until passing` 과 같은 유형.
- **`cleared for takeoff` ↔ `cleared to runway`** : P2A-Q7. SAMPLE_01 P2A-Q8 의
  `cleared to take off` 에서 이어지는 오류.
- **어휘 재발** : `profit`(←suitable) — EPTA_04 P2A-Q4 에서 지적한 단어가 P2C-Q2 에 그대로.
- **자유응답의 시제** : Task C 양쪽에서 `we notice`(←과거), `we can land`(←landed).

### 이전 최우선 (EPTA_03 기준 — 일부 해결)

- **접근 허가를 복창하지 않는다 (3세트 연속·최우선)** : EPTA_01 1차·재응시 → EPTA_02 P2A-Q8
  (`cleared for`→`expect`) → EPTA_03 **두 번**(P2A-Q8 `expect`, P2B-Q8 통째 누락).
  EPTA_02 P2B-Q8 에서 한 번 성공했으므로 "할 수 있는데 매번 하지는 못하는" 단계.
  필수 복창 7항목 중 가장 무겁다.
- **지시문의 "물어보라 / 이유를 붙이라" 를 수행하지 않는다 (3세트 연속)** :
  P2A-Q7 `Tell him what you need to know before you decide`(묻지 않고 continue),
  P2B-Q6 `with a reason`(사유 없이 `deagu is available`),
  P1B-Q4 `a request with a reason`(요청 없음).
  **복합 지시 전체는 6건 성공으로 늘었는데 "묻기"와 "이유 대기"만 유독 빠진다.**
- **질문이 두 가지면 하나만 답한다 (신규)** : P2B-Q5 `fuel endurance and souls on board`
  → 연료만, 그것도 2시간 50분을 "2시간"으로. P2B-Q9 두 선택지에 두 단어.
  **비상 상황의 정보는 숫자와 단위를 끝까지.**
- **피트↔FL 혼동 (진전 중)** : P2A-Q4 에서 `1 tree thousand feet`→`fl130` 재발.
  다만 P2A-Q5·P2B-Q1·P2B-Q4 에서는 정확 → **4회 중 3회 성공.** 계속 관찰.
- **숫자 뒤집기 (반복)** : heading 020→202. squawk 3027→3207(EPTA_02)과 같은 유형.
  같은 세트 P1B-Q5 가 바로 그 상황을 정정하는 문항이었는데도 실제로 또 뒤집었다.
- **Task C 사실 오류 (3세트 연속, 유형만 바뀜)** : 이번엔 비행단계를 "상승 중"이 아니라
  `approach phase` 로, 그리고 본인이 P2B-Q6 에서 고른 Daegu 가 아니라 Gimhae 로 갔다고 씀
  — **자기 답과 모순.** Task B 를 풀면서 전개를 메모하는 훈련이 전제.
- **`Give an example.` 미수행 (4세트 연속)** : Follow-up 에서 예시를 한 번도 들지 않음.

### 이전 최우선 (EPTA_02 기준 — 일부 해결)

- **고도 자릿수를 섞는다 (신규·최중대)** : `2,500 feet` → **`FL250`**(P2A-Q9, 만 피트 이상 차이),
  `maintain 4,000` → **`14000`**(P1A-Q4). 같은 세트 P2B-Q1 에서는 `fl200` 을 정확히 썼으므로
  구분을 모르는 게 아니라 **받아적는 방식이 없다.** 네 자리 피트는 `2500`, FL 은 `FL250` 으로
  모양을 다르게 적는 훈련 필요. → 다음 세트에 **피트 고도와 FL 이 섞인 문항**을 배치할 것.
- **NEGATIVE 뒤에 실제 값을 넣지 않는다 (진전 중)** : `Negative maintain speed 290`(실제 270).
  첫 단어는 2세트 만에 해결됐으나 **"그럼 실제로는 무엇인가"** 가 비었다. 화면 클루에 값이
  떠 있었는데도 못 넣음.
- **지시문의 "물어보라 / 요청하라" 를 수행하지 않는다 (3세트 연속)** : P2A-Q6
  `Tell him what you need to know`(묻지 않고 roger 로 수락), P1B-Q4 `a request with a reason`,
  P2B-Q5 `Request what you need instead`, P2A-Q8 `advise that you are ready`,
  P1B-Q5 정정 누락, P2A-Q3 앞부분 누락. **4건은 성공했으나 6건은 여전히 뒷부분이 빈다.**
- **`controller` 를 기관명으로 사용 (반복)** : P2B-Q3 에서 EPTA_01 과 **똑같이** 재발.
  상황이 복잡해지는 구간에서 기관 호출이 먼저 빠진다(P2B-Q3·Q6).
- **Task C 전개 누락 + 핵심 단어 오인 (3세트 연속)** : Q1 에서 ILS→RNAV 변경이 통째로 빠지고
  원인·결과 순서가 뒤집힘. Q2 에서 **speed 를 height 로** 오인. 그리고
  **`could have been handled differently` 3세트 연속 무응답.**
  → Task B 를 풀면서 ATC 대사와 전개 순서를 메모하는 훈련이 전제.
- **`Give an example.` 미수행 (3세트 연속)** : Follow-up 에서 예시를 한 번도 들지 않음.
  경험이 없으면 가정 예시로 답하면 된다.

### 이전 최우선 (EPTA_01 기준 — 일부 해결)

- **복합 지시의 뒷부분을 빠뜨린다** : 1차 6건+무응답 2건 → **재응시 8건**
  (P1B-Q3 대안, P1B-Q6 요청, P2A-Q3 ATIS 요청, P2A-Q6 필요한 것, P2A-Q10 문의,
  P2B-Q4 intentions, P2B-Q5 요청, P2B-Q7 지원 요청). 실질 무응답은 사라졌으나
  "복창은 하고 요청·문의는 안 함" 은 그대로. **지시문의 `and`/`then` 뒤가 사각지대.**
- **기관 호출 누락 (신규, 재응시 4건)** : P2A-Q9, P2B-Q1, P2B-Q3, P2B-Q7.
  1차에서는 P2B-Q1 에 있었는데 재응시에서 빠짐. 조종사가 먼저 발신하는 턴은
  예외 없이 `[기관] + [콜사인]` 으로 시작해야 한다.
- **값을 하나 맞추면 다른 하나를 틀린다 (신규)** : Task A 4문항 전부 이 양상.
  Q1 활주로27 챙기고 유도로 Kilo→C, Q3 교차고도 맞추고 강하고도 240→250,
  Q4 squawk 맞추고 주파수 124.35→124.5. **주파수는 2회 연속 오류**(118.5 → 119.75).
- **접근 허가 복창 누락 반복** : P2B-Q8 에서 `cleared for the ILS runway 09 approach` 를
  1차·재응시 모두 빠뜨림. P2A-Q8 에서는 `cleared for` 를 `expect` 로 바꿈.
  필수 복창 중 가장 무거운 항목.
- **들은 것을 다른 내용으로 대체** : FL260→170, squawk 4512→3512, runway 09→19,
  118.75→118.5, `altimeter 29.94`→`contact .4`, `TOPAZ ONE arrival`→`cross TOPAZ`.
  누락보다 위험한 유형. 6건.
- **`confirm ~?` 에 AFFIRM/NEGATIVE 미사용 (미해결, 계속 관찰)** : 재응시에서도
  `affirmative 170knots but Request reduce speed 150` — 150kt 와 사유를 덧붙인 것은 진전이지만
  **첫 단어가 여전히 AFFIRM** 이라 관제사는 170kt 로 계산한다.
  단 `are you able ~?` 는 P2A-Q7 에서 `Affirm` 으로 **해결**(1차 `roger`),
  P2B-Q5 도 `negative` 로 **해결**(1차 `rogoer`).
- **자유응답이 질문의 후반부를 비운다 (2세트 연속)** : P2A-Q11 은 3부 중 1부만
  (롤플레이에서 한 일·기준·예시 중 가정형만), P2C-Q2 는 `could have been handled
  differently` 에 1차·재응시 모두 무응답. **분량은 해결, 질문 커버리지가 과제.**
- **핵심 단어를 틀려 뜻이 바뀐다 (신규 3건)** : `altimeter`(←altitude window),
  `fixed`(←extended by the alternate system), `due to aircraft`(사유 불명).
  `clear`/`cleared` 는 재응시에서 3회 반복.

### 확인된 강점 (유지)

- **긴 복창을 완전히 잡을 수 있다** : 재응시 P2A-Q5 에서 5요소
  (고도·속도·절차명·활주로·고도계) 전부 정확. 1차에서 활주로 오류+고도계 누락+지어내기였던
  문항. P2B-Q2 도 3요소 전부 정확(1차 `contact .4` 지어내기).
- 위치보고 표준형을 쓸 수 있다 : 두 고도값을 담는 것은 됨(P2B-Q1). 단 P2A-Q4 는
  1차·재응시 모두 통과고도 누락 → **같은 유형에서 2회 연속 실패.**
- **결정을 내릴 수 있다** : P2B-Q6 에서 두 선택지 중 하나를 고르고 그에 맞는 요청까지
  수행(1차 `whatever`).
- 복창 불필요 정보를 걸러낸다 : P1A-Q2 트래픽, P1B-Q1 disabled aircraft, P2A-Q10 바람을
  모두 복창에서 제외 — 정확한 판단.
- 고도·기수 복창은 정확 : P2B-Q4 `maintain 7000 heading 270` (둘 다 필수 복창 항목).
