# 학습 진행 로그

세트를 채점할 때마다 `CLAUDE.md` §6-5 규칙에 따라 아래 표에 한 줄씩 추가한다.
(빈칸으로 남은 문항은 무응답=Level 1로 처리된 결과도 그대로 기록한다.)

| 날짜 | 세트 | 최종등급(Level) | 약점 태그 | 사용한 시나리오 |
|---|---|---|---|---|
| 2026-08-18 | EPTA_01 | Level 2 (불합격) | 기능오수행(clarify·position report·intentions), 사실관계 반전(SOB=lb, low pass 요청주체), 답변미완성, "clear"/"cleared" 혼동 | Baxter Airport 게이트 지연(ⅡA) / Coral City 좌측기어 unsafe(ⅡB) |
| 2026-08-19 | EPTA_02 | Level 4 (합격) | unable 뒤 대안 누락 반복, 신규 컨택 시 이전정보 반복(position/intentions), 엉뚱한 기관 호출 | Westgate Airport 출발(SID변경/유도로폐쇄/후방압박, ⅡA) / 순항 중 cabin pressurization 상실 → Fenwick 회항(ⅡB) |
| 2026-08-20 | EPTA_03 | Level 3 (불합격, EPTA_02 대비 하락) | unable 뒤 대안 누락(3세트째), position report 반복(같은 세트에서 2회), 엉뚱한 기관 호출(2세트째), 숫자 값 오류(신규, FL240→FL250), MAYDAY 사유 오전달(신규) | Cedar Airport 출발(Push-back/give-way/hold position, ⅡA) / 순항 중 조종실 연기 → Fairview 회항, "Continue Approach" 함정 통과(ⅡB) |
| 2026-08-21 | EPTA_04 | Level 3 (불합격, EPTA_03과 동일) | unable 뒤 대안 누락(4세트째), position report 일관성 부족(같은 세트에서 성공 3회+실패 1회), Informing 문항 통째로 누락(신규), Task C 사실 왜곡(신규) — 단, 엉뚱한 기관 호출은 이번엔 0회로 해결 | Fernbrook Airport 도착(Approach/Landing/Taxi, 활주로변경, ⅡA) / Meridian Airport 접근 중 Minimum Fuel→Emergency Fuel 격상(ⅡB) |
| 2026-09-02 | EPTA_05 ⚠️(예외: 실제 샘플 녹음본 재현) | **Level 1 (불합격, 5세트 중 최저)** | 지시를 반대로 이해(신규·최중대: 윙팁 클리어런스 불확실→홀드 요청을 "roger, taxi to g2"로 답함), 헤딩/고도 혼동(신규), 클리어런스 readback 중 웨이포인트·고도값을 다른 값으로 대체(신규), Informing 없이 Request로 직행(신규), 엉뚱한 관제기관 호출 재발("Control", EPTA_04에서 해결로 봤으나 재발), Task C 무응답 — 단, unable+대안 3단 구조는 P1B-Q6에서 5세트 만에 처음 형태 완성(사유단어는 여전히 부정확), report-speed 부가정보 요청도 정확히 수행(신규 패턴 성공 사례) | Smith Airport 클리어런스/디퓨얼링/윙팁클리어런스(ⅡA, 예외 재사용) / Public Airport 계기 다수 상실(ⅡB, 예외 재사용) |

---

## 채점 기준 정책 (2026-08-18부터 적용)
이 시험은 원래 구술시험이므로 텍스트 표기 방식은 감점하지 않는다: ① ICAO 알파벳 한 글자 축약
(G=Golf 등), ② 발음상 문제없는 오탈자(baxtar→Baxter 등), ③ **숫자를 아라비아 숫자로 쓴 것**
(27→"two seven" 등). "clear"/"cleared"처럼 아예 다른 단어를 쓴 경우와 숫자 값 자체가 틀린 경우는
계속 감점. Pronunciation 항목은 텍스트로 판단할 근거가 없어 "평가 보류"로 처리하고 등급 계산에서
제외한다. (자세한 내용은 CLAUDE.md §6-1-1)

## 약점 태그 누적 메모

### 해결됨 (EPTA_02에서 확인)
- ~~Clarifying 기능을 readback으로 대체~~ → EPTA_02 P1B-Q6에서 정확히 수행, 해결.
- ~~intentions 진술을 애매한 질문으로 대체~~ → EPTA_02 P2B-Q4에서 정확히 수행, 해결.
- ~~SOB(탑승인원)를 중량으로 오인~~ → EPTA_02 P2B-Q6에서 정확히 "128 souls on board", 해결.
- ~~correcting mistake 방향 반전~~ → EPTA_02 P1B-Q4에서 정확한 방향으로 정정, 해결.
- ~~자유응답 문항 미완성(문장 중간 끊김)~~ → EPTA_02 P2C-Q2는 끝까지 완성함, 해결. (다만 질문의 절반만 다루는 문제는 남음)

### 아직 남은 약점 (EPTA_04까지 계속 반복 — 최우선 개선 대상)
- **Unable + reason 뒤에 대안(request) 누락** : "unable due to ~"까지만 말하고 대안을 안 붙임. (EPTA_01 P1B-Q3 → EPTA_02 P1B-Q3 → EPTA_03 P1B-Q3 → EPTA_04 P1B-Q3, 4세트 연속 반복. **EPTA_05 P1B-Q6에서 처음으로 3단 구조(unable→due to→request 대안)를 완성** — 단 "due to restriction"이라는 부정확한 사유 단어는 3세트째(03·04·05) 반복 중이고, 같은 세트 P1B-Q4에서는 오히려 unable 자체를 빠뜨림 — 완전히 해결된 건 아니고 "아는데 매번 적용은 못 하는" 단계로 재분류.)
- **"report your position" 형식이 상황마다 일관되게 안 나옴** : 표준형("descending through X for Y" / "level at X")을 아는 것은 확인됐지만(EPTA_04 P2A-Q1, P2B-Q7, P2B-Q9 성공), 같은 세트 안에서도 다른 턴(P2A-Q5)에서는 여전히 이전 클리어런스를 반복함 — "알지만 매번 적용은 못 하는" 단계. EPTA_05 P2B-Q1에서도 목표고도("for 11,000")를 빠뜨림, 계속 관찰.

### 해결 → 재발 (EPTA_04에서 해결로 봤으나 EPTA_05에서 다시 나타남)
- **엉뚱한 관제기관 호출** → EPTA_02·03 2세트 연속 문제였다가 EPTA_04에서 0회로 해결 판단. **EPTA_05 P2A-Q1에서 "Clearance Delivery" 대신 "Control"로 호출하며 재발** — "해결"로 확정 짓기엔 이르다, 계속 관찰 필요.

### 해결됨 (EPTA_04에서 확인, EPTA_05에서도 유지)
- ~~MAYDAY 선언에서 사유를 부정확하게 전달~~ → EPTA_04 P2B-Q4에서 "due to emergency fuel"로 정확하고 구체적으로 전달, 해결. (EPTA_05엔 MAYDAY 상황 없어 재검증 보류)
- ~~"clear" vs "cleared" 혼동~~ : EPTA_01 이후 EPTA_02·03·04·05 모두 재발 없음 — 해결로 최종 판단.

### 신규 (EPTA_04에서 처음 발견)
- **Informing 문항에서 요구된 상태 보고 자체를 안 함** : "say your status"에 실제 상태(조류충돌 의심 등) 없이 향후 계획만 답함. (EPTA_04 P1B-Q2) — **EPTA_05에서도 같은 유형 반복**: P2A-Q7·Q9, P2B-Q6에서 상황을 알리지 않고 바로 요청/응답으로 건너뜀. 4세트 연속은 아니지만 EPTA_04→05 연속 재발이라 "패턴"으로 격상, 최우선 관찰 대상에 추가.
- **Task C 요약에서 사건 단순화 + 사실 왜곡** : 핵심 단계가 빠지거나 엉뚱한 단어를 씀. (EPTA_04 P2C-Q1, Q2) — **EPTA_05에서는 아예 무응답/무관한 메모로 후퇴** (Q1 기록 오류, Q2는 ATC 대사 메모를 옮겨적음, 질문에 답하지 않음). 개선이 아니라 악화.
- **MAYDAY 뒤 관제기관명 누락** : MAYDAY×3 다음에 바로 콜사인으로 넘어가고 기관명을 빠뜨림. (EPTA_04 P2B-Q4) — EPTA_05엔 MAYDAY 상황 없어 재검증 보류.

### 신규 (EPTA_05에서 처음 발견)
- **지시를 반대로 이해하고 답하는 comprehension 오류 (최중대)** : P2A-Q12에서 "윙팁 클리어런스 불확실하니 현재 위치 대기 요청"이라는 클루를 무시하고 "roger, taxi to g2"(계속 진행)로 정반대 답변. 안전과 직결되는 가장 심각한 유형의 오류로, 다음 세트에서도 이런 "지시 방향 반전" 패턴이 있는지 최우선으로 확인할 것.
- **헤딩(heading)과 고도(FL/altitude) 혼동** : P2B-Q4에서 "fly heading 270"을 "maintain FL270"으로 복창. 둘 다 §2 필수 복창 항목이라 중대한 오류.
- **클리어런스 readback 중 실제 값을 다른 값으로 "지어내서" 대체** : P2A-Q3에서 웨이포인트 HAPIE 대신 존재하지 않는 "heading 122"를, 고도 5,000/FL350 대신 존재하지 않는 "FL250"을 복창. 지금까지의 "누락"형 오류와 달리 "다른 내용으로 대체"하는 새로운 유형.

### 이전 세트에서 발견 후 해결됨
- **숫자 값 자체를 잘못 복창** : EPTA_03 P2A-Q2에서 발견 → EPTA_04에는 유사 사례 없음, 재검증 보류.
- **REQUEST 뒤 전치사구 오용** : EPTA_02 P2B-Q5에서 발견 → EPTA_03에서 해결 확인했으나, **EPTA_04 P2B-Q6에서 "request land"로 유사 오류 재발**("request+동사" 패턴) — 완전히 해결된 건 아님, 계속 관찰.
- **turn 지시 어순 도치** : EPTA_02 P1A-Q3에서 발견 → EPTA_03·04 모두 해당 유형 문항 없어 재검증 보류.

### 채점 기준 정정 (2026-08-19)
EPTA_02 최초 채점에서 P2A-Q3·P2B-Q1을 "ROGER를 full readback 요구 문항에 씀"이라는 이유로
감점했으나, 실제 샘플(샘플Ⅰ "Roger hold for release, HL123.", 샘플Ⅱ "HL123, roger, change SID
HIPPO 1 Departure.")에 ROGER + 실제 지시 내용을 함께 말하는 동일 패턴이 있어 **정정함(⚠️→✅)**.
ROGER 금지 규칙은 "ROGER가 내용 없이 복창을 단독으로 대체할 때"만 적용되고, 실제 값을 같이
말하면 문제없다 — `reference/exam-spec.md` §9-2에도 이 예외를 반영해둘 것.

## 외워야 할 표현 누적 목록

전체 목록·표는 `progress/expressions.md`로 이관됨. 여기는 최우선 항목만 압축 표시.

- **"unable [지시] due to [정확한 사유], request [대안]"** — unable만 말하고 끝내지 않는 3단 구조 (EPTA_01~04 **4세트 연속** 감점 → EPTA_05 P1B-Q6에서 처음 형태 완성, 그러나 같은 세트 P1B-Q4에서 unable 자체를 빠뜨림 — 이 프로젝트에서 가장 오래, 가장 안 고쳐지는 약점)
- **"level at [고도]" / "descending/leaving through [현재고도] for [목표고도]"** — position report 표준 형식. EPTA_04에서 3/4 성공률로 개선됐으나 EPTA_05 P2B-Q1에서 목표고도 누락, 아직 일관성 부족.
- **지시를 반대로 이해하고 답하지 않기** — EPTA_05 P2A-Q12(홀드 요청을 "taxi to g2"로 답함)에서 처음 확인된 최중대 신규 약점. 다음 세트 최우선 관찰 대상.
- **헤딩(heading) vs 고도(altitude/FL) 구분** — EPTA_05 P2B-Q4("fly heading 270"→"maintain FL270") 신규.
- "cleared for takeoff" (o) vs "clear for takeoff" (x) — EPTA_01 이후 재발 없음, 해결.
- "Souls on board (SOB)" — 탑승 인원수, 중량과 혼동 금지 — EPTA_02·03·04 모두 정확, 해결.
- "We are going around" — go-around는 통보(inform), 요청 아님 — EPTA_01 이후 재발 없음.
- "confirm ~ ?" → AFFIRM/NEGATIVE — EPTA_01 이후 재발 없음, 해결.
- "Mayday, Mayday, Mayday, (관제기관명), (콜사인), (정확한 비상 사유)" — 사유 전달은 EPTA_04에서 확실히 해결됐으나, **관제기관명 위치**는 EPTA_04에서 새로 빠짐 — 계속 관찰.
- REQUEST + 명사(구) — "request land"(x, EPTA_04 재발) / "request landing"·"landing"(o) — 완전히 해결된 게 아니라 계속 나올 수 있음.
- ROGER는 **내용 없이 단독으로** 쓸 때만 문제 — 값과 함께면 정상 (EPTA_02에서 정정 확인).
- "Continue Approach" ≠ "Cleared to Land" — EPTA_03에서 확인, 계속 유지.
- **"push back"(지상조업 용어) ≠ "hold"(홀딩하다)** — 완전히 다른 뜻이니 혼동 금지 (EPTA_04 신규).
- **엉뚱한 관제기관 호출** — EPTA_02·03 2세트 연속 문제였다가 EPTA_04에서 해결(0회). 계속 관찰.
