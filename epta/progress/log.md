# 학습 진행 로그

세트를 채점할 때마다 `CLAUDE.md` §6-5 규칙에 따라 아래 표에 한 줄씩 추가한다.
(빈칸으로 남은 문항은 무응답=Level 1로 처리된 결과도 그대로 기록한다.)

| 날짜 | 세트 | 최종등급(Level) | 약점 태그 | 사용한 시나리오 |
|---|---|---|---|---|
| 2026-08-18 | EPTA_01 | Level 2 (불합격) | 기능오수행(clarify·position report·intentions), 사실관계 반전(SOB=lb, low pass 요청주체), 답변미완성, "clear"/"cleared" 혼동 | Baxter Airport 게이트 지연(ⅡA) / Coral City 좌측기어 unsafe(ⅡB) |
| 2026-08-19 | EPTA_02 | Level 4 (합격) | unable 뒤 대안 누락 반복, 신규 컨택 시 이전정보 반복(position/intentions), 엉뚱한 기관 호출 | Westgate Airport 출발(SID변경/유도로폐쇄/후방압박, ⅡA) / 순항 중 cabin pressurization 상실 → Fenwick 회항(ⅡB) |
| 2026-08-20 | EPTA_03 | Level 3 (불합격, EPTA_02 대비 하락) | unable 뒤 대안 누락(3세트째), position report 반복(같은 세트에서 2회), 엉뚱한 기관 호출(2세트째), 숫자 값 오류(신규, FL240→FL250), MAYDAY 사유 오전달(신규) | Cedar Airport 출발(Push-back/give-way/hold position, ⅡA) / 순항 중 조종실 연기 → Fairview 회항, "Continue Approach" 함정 통과(ⅡB) |
| 2026-08-21 | EPTA_04 | Level 3 (불합격, EPTA_03과 동일) | unable 뒤 대안 누락(4세트째), position report 일관성 부족(같은 세트에서 성공 3회+실패 1회), Informing 문항 통째로 누락(신규), Task C 사실 왜곡(신규) — 단, 엉뚱한 기관 호출은 이번엔 0회로 해결 | Fernbrook Airport 도착(Approach/Landing/Taxi, 활주로변경, ⅡA) / Meridian Airport 접근 중 Minimum Fuel→Emergency Fuel 격상(ⅡB) |

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
- **Unable + reason 뒤에 대안(request) 누락** : "unable due to ~"까지만 말하고 대안을 안 붙임. (EPTA_01 P1B-Q3 → EPTA_02 P1B-Q3 → EPTA_03 P1B-Q3 → EPTA_04 P1B-Q3, **4세트 연속 반복, 전혀 개선 없음**. "due to restriction"이라는 부정확한 사유 단어도 EPTA_03·04에서 똑같이 반복.)
- **"report your position" 형식이 상황마다 일관되게 안 나옴** : 표준형("descending through X for Y" / "level at X")을 아는 것은 확인됐지만(EPTA_04 P2A-Q1, P2B-Q7, P2B-Q9 성공), 같은 세트 안에서도 다른 턴(P2A-Q5)에서는 여전히 이전 클리어런스를 반복함 — "알지만 매번 적용은 못 하는" 단계.

### 해결됨 (EPTA_04에서 확인)
- ~~엉뚱한 관제기관 호출~~ → EPTA_04에서 Approach/Tower/Ground/Fernbrook Tower 전부 정확히 호출, 2세트 연속(EPTA_02·03) 문제가 이번엔 0회. **해결로 판단, 계속 관찰.**
- ~~MAYDAY 선언에서 사유를 부정확하게 전달~~ → EPTA_04 P2B-Q4에서 "due to emergency fuel"로 정확하고 구체적으로 전달, 해결.
- ~~"clear" vs "cleared" 혼동~~ : EPTA_01 이후 EPTA_02·03·04 모두 재발 없음 — 해결로 최종 판단.

### 신규 (EPTA_04에서 처음 발견)
- **Informing 문항에서 요구된 상태 보고 자체를 안 함** : "say your status"에 실제 상태(조류충돌 의심 등) 없이 향후 계획만 답함. (EPTA_04 P1B-Q2)
- **Task C 요약에서 사건 단순화 + 사실 왜곡** : 핵심 단계(Minimum Fuel 선언, 추가 홀딩 요구)가 빠지고, "push back"처럼 전혀 다른 뜻의 단어를 씀. Q2에서는 시나리오에 없었던 내용(대체 공항 안내)을 지어냄. (EPTA_04 P2C-Q1, Q2)
- **MAYDAY 뒤 관제기관명 누락** : MAYDAY×3 다음에 바로 콜사인으로 넘어가고 기관명을 빠뜨림. (EPTA_04 P2B-Q4) — EPTA_02·03에서는 이 부분이 문제 없었는데 이번에 새로 나타남, 계속 관찰 필요.

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

- **"unable [지시] due to [정확한 사유], request [대안]"** — unable만 말하고 끝내지 않는 3단 구조 (EPTA_01·02·03·04 **4세트 연속** 감점 — 이 프로젝트에서 가장 오래, 가장 안 고쳐지는 약점)
- **"level at [고도]" / "descending/leaving through [현재고도] for [목표고도]"** — position report 표준 형식. EPTA_04에서 3/4 성공률로 개선됐으나 아직 일관성 부족.
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
