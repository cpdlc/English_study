# 학습 진행 로그

세트를 채점할 때마다 `CLAUDE.md` §6-5 규칙에 따라 아래 표에 한 줄씩 추가한다.
(빈칸으로 남은 문항은 무응답=Level 1로 처리된 결과도 그대로 기록한다.)

| 날짜 | 세트 | 최종등급(Level) | 약점 태그 | 사용한 시나리오 |
|---|---|---|---|---|
| 2026-08-18 | EPTA_01 | Level 2 (불합격) | 기능오수행(clarify·position report·intentions), 사실관계 반전(SOB=lb, low pass 요청주체), 답변미완성, "clear"/"cleared" 혼동 | Baxter Airport 게이트 지연(ⅡA) / Coral City 좌측기어 unsafe(ⅡB) |
| 2026-08-19 | EPTA_02 | Level 4 (합격) | unable 뒤 대안 누락 반복, 신규 컨택 시 이전정보 반복(position/intentions), 엉뚱한 기관 호출 | Westgate Airport 출발(SID변경/유도로폐쇄/후방압박, ⅡA) / 순항 중 cabin pressurization 상실 → Fenwick 회항(ⅡB) |

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

### 아직 남은 약점
- **Unable + reason 뒤에 대안(request) 누락** : "unable due to ~"까지만 말하고 대안을 안 붙임. (EPTA_01 P1B-Q3 → EPTA_02 P1B-Q3, **2세트 연속 반복**)
- **신규 컨택/상황 전환 시 이전 정보 반복** : position report나 intentions 대신 직전 클리어런스를 그대로 되풀이. (EPTA_01 P2A-Q2/P2A-Q5(설계결함 제외) → EPTA_02 P2B-Q8, 계열 반복)
- **"clear" vs "cleared" 혼동** : EPTA_01에서 발견(P1A-Q2, P2B-Q8). EPTA_02에서는 재발 안 함 — 계속 관찰 필요.

### 신규 (EPTA_02에서 처음 발견)
- **REQUEST 뒤 전치사구 오용** : "request to the airport"(x) — REQUEST는 명사(구)와 바로 결합해야 함. (EPTA_02 P2B-Q5)
- **엉뚱한 관제기관 호출** : Clearance Delivery에 컨택해야 하는데 "ground"라고 부름. (EPTA_02 P2A-Q1)
- **turn 지시 어순 도치** : "left turn heading X"(x) → "turn left heading X"(o). (EPTA_02 P1A-Q3)

### 채점 기준 정정 (2026-08-19)
EPTA_02 최초 채점에서 P2A-Q3·P2B-Q1을 "ROGER를 full readback 요구 문항에 씀"이라는 이유로
감점했으나, 실제 샘플(샘플Ⅰ "Roger hold for release, HL123.", 샘플Ⅱ "HL123, roger, change SID
HIPPO 1 Departure.")에 ROGER + 실제 지시 내용을 함께 말하는 동일 패턴이 있어 **정정함(⚠️→✅)**.
ROGER 금지 규칙은 "ROGER가 내용 없이 복창을 단독으로 대체할 때"만 적용되고, 실제 값을 같이
말하면 문제없다 — `reference/exam-spec.md` §9-2에도 이 예외를 반영해둘 것.

## 외워야 할 표현 누적 목록

- "cleared for takeoff" (o) vs "clear for takeoff" (x) — 이륙 허가 표준 표현 (EPTA_01)
- "Souls on board (SOB)" — 탑승 인원수, 중량 단위(lb/kg)와 혼동 금지 (EPTA_01, EPTA_02에서 정확히 사용 확인)
- "We are going around" — go-around는 요청(request)이 아니라 통보(inform) (EPTA_01)
- "unable [지시] due to [정확한 사유], request [대안]" — unable만 말하고 끝내지 않는 3단 구조 (EPTA_01, EPTA_02 모두 이 부분에서 감점 — 최우선 개선 대상)
- "confirm ~ ?" — 지시 복창과 진짜 확인 질문을 구분해서 쓰기 (EPTA_01)
- "Mayday, Mayday, Mayday" — 조난 선언은 3회 반복 (EPTA_02에서 정확히 사용 확인)
- REQUEST + 명사(구) 패턴 — "request to X"(x) → "request X" / "request diversion to X"(o) (EPTA_02)
- ROGER는 **내용 없이 단독으로** 쓸 때만 문제 — "Roger, [실제 지시 내용]"처럼 값을 같이 말하면 readback으로 인정됨 (EPTA_02에서 정정 확인)
