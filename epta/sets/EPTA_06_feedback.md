# EPTA_06 채점 결과 — 2026-10-28 (세션 20261027-144521)

**32/32 전부 응답. 무응답 0.** EPTA_05 의 최우선 약점이던 "비우기"가 해결됐다.

| | EPTA_02 | EPTA_03 | EPTA_04 | EPTA_05 | **EPTA_06** |
|---|---|---|---|---|---|
| ✅ | 11 | 11 | 10 | 13 | **11** |
| ⚠️ | 16 | 13 | 13 | 11 | **14** |
| ❌ | 5 | 7 | 9 | 4 | **7** |
| 무응답 | 0 | 0 | 0 | 3 | **0** |
| 최종 | Level 3 | Level 3 | Level 3 | Level 2 | **Level 2 (유지)** |

**최우선 약점 세 개가 동시에 해결됐다** — 무응답 0, `intention is to ~` 구문 사용(6세트 만에
처음), "결정 전에 묻기" 3문항 전부 수행(4세트 연속 실패 항목).

**그런데 Comprehension 이 Level 2 로 내려갔다.** 들은 내용을 **반대로 해석하거나 값을 바꾼
사례가 7건**이고, 그중 셋은 관제사가 준 정보를 정반대로 활용했다. EPTA_05 는 값 오류가 3건
이었는데, 성격이 "자릿수 실수"에서 **"의미 반전"**으로 나빠졌다.

솔직한 진단은 이렇다 — **답을 쓰기 시작하니 내용 오류가 드러났다.** 비운 문항은 틀릴 기회도
없었다. 등급은 같지만 상태는 다르고, 다음 과제도 완전히 달라진다.

---

## Part Ⅰ TASK A

**P1A-Q1** ✅
문제 : Ground : HL123, hold position, traffic crossing right to left.
내 답안 : hold position hl123
** 정답 : Holding position, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **교통정보를 복창에서 제외한 판단이 정확합니다.** 핵심 동작(hold position)만 짧게 받았습니다. 네 세트 연속 이 판단은 안정적입니다.

---

**P1A-Q2** ⚠️
문제 : Delivery : HL123, cleared to Kingsbury via the SONTEL TWO departure, RIKAS transition, climb to 6,000 feet, squawk 4703.
내 답안 : clear to kings airport via SONTEN 2 departure raken transition climb to 6000 squawk 4703 hl123
** 정답 : Cleared to Kingsbury via the SONTEL TWO departure, RIKAS transition, climb to 6,000 feet, squawk 4703, HL123.
- 누락된 필수 readback 요소 : 없음 — **5요소(목적지·SID·transition·고도·squawk) 구조를 모두 잡았습니다**
- 표준교신용어 오류 : `clear` → `cleared` (CLAUDE.md §6-1-1 에서 오탈자 예외에 해당하지 않는 항목입니다. 네 세트째 반복됩니다). 웨이포인트명 **`SONTEN`→SONTEL, `raken`→RIKAS** — 소리 내어 읽어도 다른 단어가 되므로 오탈자로 보지 않았습니다
- 코멘트 : 이 세트에서 가장 긴 지시(16단어)인데 **squawk 4703 과 6,000 피트를 둘 다 정확히** 받았습니다. 숫자는 잡고 **고유명사가 흐려지는** 양상입니다. SID 명과 transition 명은 비행로 허가의 일부라 필수 복창 항목이고, 관제사가 이름으로 경로를 확인하므로 음절 단위로 받아 적으세요.

---

**P1A-Q3** ⚠️
문제 : Center : HL123, expedite climb until passing flight level 180, then climb to flight level 310.
내 답안 : experdite climb fl180 then climb fl310 hl123
** 정답 : Expedite climb until passing flight level 180, then climb to flight level 310, HL123.
- 누락된 필수 readback 요소 : **`until passing`**
- 표준교신용어 오류 : 없음 (`experdite` 는 오탈자)
- 코멘트 : 두 고도값(FL180·FL310)은 정확합니다. 빠진 것은 **조건**입니다. `expedite climb FL180` 은 "FL180 까지 신속 상승"인지 "FL180 을 신속히 통과"인지 구분되지 않습니다. `until passing` 이 있어야 **어디까지 신속 상승이 유효한지**가 정해집니다. 조건부 지시는 조건 자체가 복창 대상입니다.

---

**P1A-Q4** ✅
문제 : Approach : HL123, descend to 2,500 feet, cleared for the ILS runway 33 approach, report established.
내 답안 : descent 2500 feet cleared ils runway 33 approach report established hl123
** 정답 : Descend to 2,500 feet, cleared for the ILS runway 33 approach, report established, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `descent`(명사) → `descend`(동사). 경미하나 반복됩니다
- 코멘트 : **접근 허가 + 고도 + 향후 보고 약속 세 요소 전부.** 접근 허가 복창은 **세 세트 연속 유지**입니다 — EPTA_01~03 에서 세 세트 연속 실패했던 항목이 완전히 자리잡았습니다.

---

## Part Ⅰ TASK B

**P1B-Q1** ✅
문제 : The time is now 1352. At your present speed MAGRU is 18 minutes ahead of you. Listen to the controller, respond with a reason, and tell him what you need.
🖥 [ time now 1352 / MAGRU 18 minutes ahead ]
Center : HL123, cross MAGRU at 1405.
내 답안 : unable to cross magru at 1405 , it takes 18min to corss magru then request increase speed hl123
** 교정 답안 : Unable to cross MAGRU at 1405, HL123 — at present speed MAGRU is 18 minutes ahead, so our estimate is 1410. Request higher speed.
- 누락된 필수 readback 요소 : 없음 — **unable + 사유 + 요청 세 토막이 다 있습니다**
- 표준교신용어 오류 : `request increase speed` — **REQUEST 뒤에는 명사구**가 옵니다(`request higher speed` / `request a speed increase`). `increase speed` 는 동사구입니다
- 코멘트 : **숫자 비교를 해냈습니다.** 2세트 연속 최우선 약점이었던 항목입니다 — EPTA_05 P1B-Q1 에서는 똑같은 구조(43마일 필요 / 40마일 남음)를 그대로 복창해 못 할 것을 수락했는데, 이번에는 못 한다고 말하고 사유로 숫자를 댔습니다. 한 가지만 더 하면 완전합니다 : **계산 결과(1410)를 말하는 것**. "18분 걸린다"까지만 말하면 관제사가 1352 에 더해봐야 합니다. `so our estimate is 1410` 한 토막이 붙으면 관제사는 바로 판단할 수 있습니다.

---

**P1B-Q2** ✅
문제 : Just after departure from Arlen you saw a flock of large birds at about 2,000 feet, just north of the runway. You were busy with the climb checks and did not report it. Departure now calls you. Acknowledge the instruction, and report what you saw.
Departure : HL123, Arlen Departure, radar contact, climb to flight level 190.
내 답안 : climb to fl190 hl123 , and be advised we notices flock of birds at 2000
** 교정 답안 : Climbing to flight level 190, HL123. And be advised, just after departure we saw a flock of large birds at about 2,000 feet, just north of the runway.
- 누락된 필수 readback 요소 : 없음. 보고에서 **위치(활주로 북쪽)** 가 빠졌습니다
- 표준교신용어 오류 : 없음. `be advised` 로 보고를 연 것이 적절합니다
- 코멘트 : **복합 지시 두 부분을 모두 수행했습니다.** 고도 FL190 과 조류 고도 2,000 피트를 섞지 않은 것도 정확합니다. 다만 조류 보고는 **위치가 핵심**입니다 — 관제사는 그 정보로 다른 항공기에 경고를 주고 공항에 조류 퇴치를 요청하므로, 어느 방향 몇 피트인지가 함께 가야 쓸 수 있는 정보가 됩니다.

---

**P1B-Q3** ✅
문제 : Approach told you to maintain 210 knots. Moderate turbulence has forced you to slow to 180 knots and you are staying at that speed. Now ATC contacts you. Respond accordingly.
🖥 [ 180 knots / moderate turbulence ]
Approach : HL123, confirm maintaining 210 knots?
내 답안 : negative maintain speed 180knots due to moderate turbulence hl123
** 정답 : Negative, maintaining 180 knots due to moderate turbulence, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `maintain` → `maintaining` (현재 상태 보고이므로 진행형)
- 코멘트 : **NEGATIVE + 실제 값 + 사유 세 토막. 네 세트 연속 유지**입니다. 이 패턴은 더 지적할 것이 없습니다.

---

**P1B-Q4** ⚠️
문제 : You are 12 miles from the field, but you are high and fast and you need about 18 miles of track to get down and configure for landing. Listen to the controller, respond with a reason, and tell him what you need instead.
Approach : HL123, are you able to accept a short approach to runway 33?
내 답안 : negative we are too fast to short approach , request decrease speed hl123
** 교정 답안 : Negative, HL123 — we are high and fast and we need about 18 miles of track. Request vectors for a longer final.
- 누락된 필수 readback 요소 : **① 사유의 절반(고도가 높다) ② 숫자 비교(12마일 남음 vs 18마일 필요)**
- 표준교신용어 오류 : `request decrease speed` — **REQUEST 뒤 동사구**(이 세트 두 번째). 그리고 **요청 대상이 틀렸습니다** — 속도를 줄이는 것은 조종사가 하는 일이고, 관제사에게 요청할 것은 **track miles**(vectors)입니다
- 코멘트 : **`are you able ~?` 에 `Negative` 로 답한 것은 개선입니다** — EPTA_05 P1B-Q4 에서는 `unable` 로 시작해 지적했던 항목입니다. 남은 문제는 **대안이 상황을 해결하지 못한다**는 것입니다. 12마일밖에 없는데 18마일이 필요하면 부족한 것은 **거리**입니다. 속도를 줄여도 활주로가 가까워지는 것은 막을 수 없습니다. 지문이 두 숫자를 나란히 줬으니 `we need about 18 miles and we only have 12` 를 말하면 사유와 요청이 한 번에 성립합니다.

---

**P1B-Q5** ⚠️
문제 : Center cleared you to climb to flight level 200. You set flight level 220 in the altitude window by mistake and you are now climbing through flight level 205. Now ATC contacts you. Respond accordingly.
Center : HL123, I show you climbing above flight level 200 — say your cleared level.
내 답안 : we had set altimeter fl220 by mistake decending fl200 hl123
** 교정 답안 : HL123, we were cleared to flight level 200. Correction — we had flight level 220 set in the altitude window by mistake. Now descending back to flight level 200.
- 누락된 필수 readback 요소 : **질문에 대한 직접 답** — `say your cleared level` 은 "허가받은 고도를 말하라"입니다. `we were cleared to flight level 200` 이 먼저 나와야 합니다
- 표준교신용어 오류 : **`altimeter` 오용 재발.** `altimeter` 는 **고도계 기압 설정**(29.92 같은 값)이고, FL220 을 넣은 곳은 **altitude window**(고도 선택창)입니다. EPTA_01 재응시에서 똑같은 혼동을 지적했던 항목입니다
- 코멘트 : **틀린 값(FL220)과 정정 조치(FL200 으로 강하)를 둘 다 말했습니다** — 정정 3단 구조는 EPTA_05 에서 완성한 뒤 유지되고 있습니다. 이번에 빠진 것은 **관제사가 물은 것에 먼저 답하는 것**입니다. 관제사는 레이더에 FL205 가 보여서 "너는 어디까지 허가받았나"를 확인하는 중입니다. 그 답(FL200)이 나오기 전에 변명이 먼저 나오면 관제사는 한 번 더 물어야 합니다.

---

**P1B-Q6** ❌
문제 : You are number four for departure at Arlen. Ground told you to expect 10 minutes, but it has now been 25. Your crew duty time requires you to be airborne by 1430, it is now 1410, and the taxi to the runway takes 12 minutes. Contact Arlen Ground. Point out the problem and request what you need.
내 답안 : ground hl123 , we had hold 10min , already but we didn't receive any clearance request for departure
** 교정 답안 : Arlen Ground, HL123 — we have been waiting 25 minutes and we were told to expect 10. Our crew duty time requires us to be airborne by 1430, it is now 1410, and the taxi takes 12 minutes. Request priority for departure.
- 누락된 필수 readback 요소 : **근무시간 1430 · 현재 1410 · 유도 12분 — 문제의 근거 세 숫자 전부**
- 표준교신용어 오류 : 기관 호출이 `ground` 뿐입니다 → `Arlen Ground`. `request for departure` — REQUEST 뒤 전치사구(이 세트 세 번째)
- 코멘트 : **두 숫자를 뒤집었습니다.** 실제로 기다린 시간은 **25분**이고 10분은 관제사가 예상한다고 말한 시간인데, 답안은 "10분 기다렸다"가 됐습니다. 그러면 문제가 성립하지 않습니다 — 10분 기다린 것은 정상입니다. 그리고 **이 문항의 전부인 근무시간 계산이 통째로 없습니다.** 1430 − 1410 = 20분이 남았고 유도에 12분이 걸리니 **8분 안에 출발해야** 합니다. 그 한 줄이 "왜 우선권을 달라는지"를 만듭니다. 요청도 `request priority for departure` 처럼 **무엇을 달라는지** 명시해야 합니다.

---

## Part Ⅱ TASK A

**P2A-Q1** ✅
문제 : ☞ Contact Arlen Ground, request pushback and give your information letter.
(Initial Situation : Gate Bravo 4 at Arlen Airport, information Quebec, runway 24 in use, slot 1340, time now 1318)
내 답안 : arlen ground hl123 , request pushback at gate 4 with information Q
** 정답 : Arlen Ground, HL123, Gate Bravo 4, request pushback, information Quebec.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음 (`Q` = Quebec 은 §6-1-1 에 따라 감점하지 않았습니다)
- 코멘트 : **기관명·게이트·요청·정보문자 네 요소 전부.** `request pushback` 은 REQUEST + 명사구로 정확합니다 — 같은 세트의 Q1·Q4·Q6 에서 동사구를 붙인 것과 비교하면, **알고 있는데 복잡한 문항에서 흐트러지는** 양상입니다.

---

**P2A-Q2** ⚠️
문제 : ☞ Listen to the ground controller, give a full readback, and tell him what you will do.
Ground : HL123, Arlen Ground, pushback approved, face south. There's an A220 pushing at Bravo 2 right now, so hold where you are until he's clear — give me a call when you're moving.
내 답안 : push back approved , hold at gate4 hl123
** 교정 답안 : Pushback approved, face south, HL123 — we will hold until the A220 at Bravo 2 is clear, and we will call you when we are moving.
- 누락된 필수 readback 요소 : **① `face south`(푸시백 방향) ② `give me a call when you're moving` 에 대한 응대**
- 표준교신용어 오류 : 없음
- 코멘트 : 푸시백 승인과 대기는 받았습니다. **푸시백 방향은 반드시 복창해야 합니다** — 기수를 어디로 돌리느냐가 뒤쪽 항공기와의 충돌 여부를 정합니다. 그리고 이 턴은 **구어체 ATC 를 이해했는지 보는 턴**이었습니다(`give me a call when you're moving`). 관제사가 요청한 후속 행동에 `we will call you when we are moving` 또는 `wilco` 로 답하지 않으면, 관제사는 호출을 기다리는지 아닌지 알 수 없습니다. 지시문의 `tell him what you will do` 가 그것을 가리켰습니다.

---

**P2A-Q3** ✅
문제 : ☞ Contact Arlen Ground. Point out the problem with that taxi time, and request what you need.
(Situation Update : taxiway Alpha is congested and the taxi to runway 24 will take 28 minutes. The time is now 1318 and your slot is 1340.)
🖥 공항 지상도 (Alpha 혼잡 · RWY24 vs RWY06)
내 답안 : we have about 22 min slot time , so we cannot wait for 28min , reqeust taxi as soon as possible hl123
** 교정 답안 : Arlen Ground, HL123 — our slot is 1340 and it is now 1318, so we only have 22 minutes, and a 28-minute taxi would put us past it. Request a shorter routing or an earlier departure.
- 누락된 필수 readback 요소 : **기관 호출 `Arlen Ground`** — 조종사가 먼저 부르는 턴입니다
- 표준교신용어 오류 : 없음
- 코멘트 : **1340 − 1318 = 22분을 직접 계산해서 28분과 비교했습니다.** 이번 세트에서 가장 잘한 문항입니다. EPTA_04·05 에서 두 세트 연속 최우선이던 "받아적은 숫자를 비교하지 않는다"가 여기서는 완전히 해결됐습니다 — 주어진 숫자를 그대로 읽은 것이 아니라 **뺄셈을 해서 새로운 숫자를 만들어** 말했습니다. 남은 것은 기관 호출 하나입니다. 발신 턴에서 호출을 생략하는 것은 EPTA_05 에서도 2건 있었습니다.

---

**P2A-Q4** ✅
문제 : ☞ Listen to the ground controller and respond accordingly. Tell him what you need to know before you decide. (Your information Quebec is 25 minutes old, and your tailwind limit is 10 knots.)
Ground : HL123, I can give you runway 06 instead — that's about a 9-minute taxi from where you are. Runway 06 has a tailwind though. Do what you need to do.
내 답안 : Our information is out of date , so request latest information and weather report hl123
** 교정 답안 : HL123 — before we decide, request the current wind. Our information Quebec is 25 minutes old and our tailwind limit is 10 knots.
- 누락된 필수 readback 요소 : **배풍한계 10kt** — 왜 바람을 알아야 하는지를 정하는 값입니다
- 표준교신용어 오류 : 없음. `request latest information` 은 REQUEST + 명사구로 정확합니다
- 코멘트 : **"결정 전에 묻기"를 처음으로 정상 수행했습니다.** EPTA_02·03·04·05 에서 **네 세트 연속 실패**한 항목입니다 — 지금까지는 묻지 않고 바로 결정하거나(02·03·04), 상황과 무관한 것을 묻거나(05), 비웠습니다(05). 이번에는 **묻는 동작 + 묻는 이유**가 다 있습니다. 더 정확하게 하려면 필요한 값 하나(**현재 바람**)로 좁히고, 배풍한계 10kt 를 함께 말하면 관제사가 "7kt 다"라고 답할 때 바로 판단이 끝납니다.

---

**P2A-Q5** ❌
문제 : ☞ Listen to the ground controller, then state your decision with a reason.
Ground : HL123, the current wind is 190 at 8 knots, so that's about 7 knots of tailwind on runway 06.
내 답안 : um , then is there any change of runway , i would take runway 24 hl123
** 교정 답안 : HL123 — 7 knots of tailwind is inside our limit of 10, so we will take runway 06. The 9-minute taxi also keeps us inside our slot.
- 누락된 필수 readback 요소 : **① 결정의 이유 ② 7kt 와 10kt 비교**
- 표준교신용어 오류 : 없음
- 코멘트 : **이 세트에서 가장 중요한 오류입니다. 바로 전 문항에서 자기가 물어서 받은 답을 쓰지 않았습니다.**
  Q4 에서 "배풍을 알아야 한다"고 물었고, 관제사가 **7kt** 라고 답했습니다. 한계는 **10kt** 입니다. 7 < 10 이므로 **활주로 06 을 받을 수 있습니다.** 그런데 답안은 RWY24 를 택했습니다.
  그리고 **Q3 에서 본인이 "28분은 안 된다"고 말했습니다.** RWY24 가 바로 그 28분짜리 활주로입니다. 즉 **자기가 22분밖에 없다고 계산해 놓고, 28분이 걸리는 활주로를 선택**한 것입니다. 숫자 비교(Q3)와 정보 수집(Q4)은 성공했는데 **그 결과를 결론에 연결하지 못했습니다.**
  `um` 과 `is there any change of runway` 는 응답이 아닙니다 — 관제사가 이미 선택지를 제시했고 바람까지 줬으므로, 이 턴에 필요한 것은 되묻기가 아니라 **결정**입니다.

---

**P2A-Q6** ❌
문제 : ☞ Listen to the ground controller and give a full readback.
Ground : HL123, taxi to runway 06 via Charlie and Foxtrot, hold short of Foxtrot 1, and contact Arlen Tower on 118.35.
내 답안 : taxi to runway26 via c f holdshort foxtrot1 contact airlon tower 118.35 hl123
** 정답 : Taxi to runway 06 via Charlie and Foxtrot, hold short of Foxtrot 1, contact Arlen Tower on 118.35, HL123.
- 누락된 필수 readback 요소 : 없음 — 구조는 전부 받았습니다
- 표준교신용어 오류 : **활주로를 06 이 아니라 26 으로** 복창했습니다. **사용활주로는 필수 복창 7항목**(`atc-terminology.md` §2)이고, 이 공항에는 26 이라는 활주로가 아예 없습니다(06/24)
- 코멘트 : 유도로 경로·hold short 지점·기관명·**주파수 118.35** 가 모두 정확합니다. 주파수는 EPTA_05 에 이어 두 세트 연속 정확합니다. 틀린 것은 활주로 번호 하나인데, 그 하나가 **잘못된 활주로로 유도되는** 결과를 만듭니다. 바로 전 문항(Q5)에서 24 를 말했기 때문에 머릿속에 24 가 남아 **06 과 24 가 섞여 26 이 된** 것으로 보입니다. 활주로가 바뀌는 상황에서는 **새 활주로 번호를 따로 적어 두고** 복창 전에 그것만 확인하세요.

---

**P2A-Q7** ❌
문제 : ☞ Listen to the tower and give a full readback.
Tower : HL123, Arlen Tower, number two, after the Saab 340 on short final, line up and wait runway 06.
내 답안 : listen to the Tower and give a full read back Hotel Lima 1 2 3 cleared for takeoff Runway 06 climb to 3,000 ft report passing $1,800 ft
** 정답 : Number two, after the Saab 340 on short final, line up and wait runway 06, HL123.
- 누락된 필수 readback 요소 : **이 문항의 내용 전부** — `number two` · `after the Saab 340` · `line up and wait`
- 표준교신용어 오류 : **`line up and wait`(활주로 진입 후 대기)를 `cleared for takeoff`(이륙 허가)로 바꿔 말했습니다**
- 코멘트 : 지시문 문구(`listen to the Tower and give a full read back`)가 답안에 들어가 있고 내용이 **다음 문항(Q8)의 이륙 허가**이므로, 음성인식이나 입력 사고로 보입니다. 다만 결과적으로 나온 교신은 **허가받지 않은 이륙을 복창한 것**이 됩니다. `line up and wait` 와 `cleared for takeoff` 의 혼동은 **활주로 침입·허가 없는 이륙**으로 이어지는 가장 위험한 혼동이라, 사고였다 해도 그대로 감점했습니다. 녹음 후 답안 칸을 한 번 확인하세요 — 같은 사고가 다시 나면 실제 시험에서는 확인할 기회가 없습니다.

---

**P2A-Q8** ✅
문제 : ☞ Listen to the tower and give a full readback.
Tower : HL123, cleared for takeoff runway 06, climb to 3,000 feet, report passing 1,800 feet.
내 답안 : cleared to take off runway 06 climb to 3000 report passing 1800feet hl123
** 정답 : Cleared for takeoff runway 06, climb to 3,000 feet, report passing 1,800 feet, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : `cleared to take off` → **`cleared for takeoff`**. `takeoff` 는 이륙 허가에만 쓰는 한 단어이고, 그 밖에서는 `departure` 를 씁니다
- 코멘트 : **네 자리 피트 두 개(3,000 과 1,800)를 둘 다 정확히 받았습니다.** EPTA_05 P2A-Q8 에서 1,800 피트를 18000 으로 쓴 것이 최우선 약점이었고, 이번 세트에 그 드릴로 넣은 문항입니다 — **해결**. 활주로 06 도 여기서는 정확합니다(Q6 에서는 26 이었습니다).

---

**P2A-Q9** ❌
문제 : ☞ Contact Arlen Departure, report your passing altitude and request further climb.
(Situation Update : You are airborne and passing 1,800 feet, climbing to 3,000 feet.)
내 답안 : arlen departure hl123 , passing 3000 , request climb to fl180
** 정답 : Arlen Departure, HL123, passing 1,800 feet climbing to 3,000, request further climb.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **통과고도를 1,800 이 아니라 3000 으로** 보고했습니다. 3,000 은 **아직 도달하지 않은 목표고도**입니다. 그리고 `request climb to fl180` 의 FL180 은 **지문에 없는 값**입니다 — 지시문은 `request further climb` 입니다
- 코멘트 : 기관 호출은 정확합니다. 문제는 **바로 전 문항(Q8)에서 1,800 과 3,000 을 정확히 복창했는데 여기서 뒤집었다**는 것입니다. 복창할 때는 맞히고 **스스로 보고할 때 틀리는** 패턴입니다. 위치보고에서 `passing X for Y` 는 **X = 지금 지나는 고도, Y = 가는 곳**으로 고정입니다. 그리고 지시문에 없는 고도를 지어내지 마세요 — `request further climb` 는 "더 올라가게 해달라"이고, 얼마나 올려줄지는 관제사가 정합니다.

---

**P2A-Q10** ⚠️
문제 : ☞ Listen to the controller, give a full readback, and inquire what that means for your arrival.
Departure : HL123, Arlen Departure, radar contact, climb to flight level 190, direct SONTEL when able. And by the way, Kingsbury have just moved your slot to 1352 — I'm sorry about that.
내 답안 : climb to fl190 direct sontel when able is there any problem about slot hl123
** 교정 답안 : Climb to flight level 190, direct SONTEL when able, HL123. What does the new slot of 1352 mean for our arrival time?
- 누락된 필수 readback 요소 : 없음 — **FL190 과 `direct SONTEL when able` 둘 다 정확합니다**
- 표준교신용어 오류 : 없음. 문법 : `is there any problem about slot` → `what does that mean for our arrival?`
- 코멘트 : **`inquire` 지시를 수행했습니다.** EPTA_05 에서 `inquire` 가 세 번 나와 **세 번 다 하지 않았던** 항목입니다 — 이번에는 물음표가 있습니다. 다만 **묻는 방향이 반대**입니다. 슬롯이 1352 로 늦춰진 것은 관제사가 이미 통보했으므로, "슬롯에 문제가 있나요?"는 들은 정보를 되묻는 것입니다. 지시문이 요구한 것은 **그 변경이 도착시각에 어떤 의미인지**입니다. 이미 받은 정보와 아직 모르는 정보를 구분하세요.

---

**P2A-Q11** ⚠️ (90초 Follow-up)
문제 : In this situation, Ground offered you runway 06 with a tailwind when your slot was about to expire. What did you need to know before you accepted it, and why? In your role as a pilot, how do you decide whether to take a runway that saves time but has a tailwind? Give an example of a time pressure you would refuse to accept, no matter what it cost the schedule.
내 답안 : in this situation , if there is a tailwind , first ask to about change of runway , but if there's no change about that , request long distance to take off , and the slot is not enough , then tell the controller our situation , and request to take off as soon as possible , all we have to do is just request and do right away
** 교정 답안 : In this situation, what I needed to know first was the current wind, because my information was 25 minutes old and my tailwind limit is 10 knots. The controller told me it was 7 knots of tailwind, which was inside my limit, so I could accept runway 06. If the tailwind had been more than 10 knots, I would have asked for a change of runway, and if there was no change available, I would have told the controller our slot situation and requested priority for departure. In my role as a pilot, I decide this by comparing two numbers — how much time the shorter taxi saves, and my aircraft's tailwind limit. The limit always wins, because the limit is a performance figure and the slot is only a schedule. For example, I would refuse a time pressure that asked me to depart with a tailwind above my limit, or to skip a de-icing check to make a slot. Missing a slot costs the company money, but an overrun costs the aircraft.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **응답했습니다** — EPTA_05 에서 Follow-up 을 비운 것 대비 큰 개선이고, 세 문장 이상을 이어 말했습니다. 그런데 **세 부분 중 ①의 핵심이 어긋났습니다** : 질문은 "**무엇을 알아야 했는가**"(= 현재 바람과 자기 배풍한계)인데, 답은 "활주로를 바꿔달라고 한다"는 **행동**입니다. 배풍한계라는 개념이 한 번도 나오지 않았습니다 — 그게 이 문항 전체의 축입니다. ②의 일반 판단 기준도 없습니다. ③ **`Give an example.` 은 또 응답하지 않았습니다** — 응답한 세트 기준 **다섯 세트 연속**입니다.
  교정은 **당신이 쓴 흐름(배풍 → 활주로 변경 요청 → 안 되면 관제사에게 상황 설명 → 우선권 요청)을 그대로 살려** 그 앞에 ①의 답(현재 바람·10kt 한계)을 붙이고 뒤에 ③ 예시를 붙인 것입니다. 문법 교정 : `ask to about` → `asked for`, `request to take off`(REQUEST 뒤 동사구) → `requested priority for departure`, `request long distance to take off`(뜻 불명) → 삭제, `all we have to do is just request and do right away`(결론이 공허함) → 삭제.

---

## Part Ⅱ TASK B

**P2B-Q1** ⚠️
문제 : ☞ Contact Eastvale Control and report your position.
(Initial Situation : level at flight level 330 and 110 miles from Westmoor Airport, 1 hour 40 minutes of fuel on board)
내 답안 : eastvale control hl123 , level at fl330 110 miles from eastvale airport
** 정답 : Eastvale Control, HL123, level at flight level 330, 110 miles from Westmoor.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : **`from eastvale airport`** — Eastvale 은 **관제기관**(Eastvale Control)이고, 110마일은 **Westmoor** 까지의 거리입니다. 기관명을 목적지로 썼습니다
- 코멘트 : **`level at flight level 330` — 상태 보고 동사가 정확합니다.** `maintain`(지시 복창 동사)을 쓰던 반복 지적 항목이 해결됐습니다. 고도와 거리도 맞습니다. 틀린 것은 **지명 하나**인데, 교신 상대의 이름을 목적지로 쓰면 관제사는 자기 쪽으로 오는 줄 압니다. 기관명과 공항명을 받아 적을 때 구분해 두세요.

---

**P2B-Q2** ✅
문제 : ☞ Listen to the controller and give a full readback.
Center : HL123, Eastvale Control, descend to flight level 240, reduce speed to 280 knots, expect the MAGRU ONE arrival, ILS runway 33, Westmoor altimeter 29.92.
내 답안 : descend fl240 , reduce speed 280 expect magru 1 arrival ils runway 33 approach altimeter 2992 hl123
** 정답 : Descend to flight level 240, reduce speed to 280 knots, expect the MAGRU ONE arrival, ILS runway 33, altimeter 29.92, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **다섯 요소 전부 정확합니다.** 고도·속도·절차명·활주로·고도계 — **세 세트 연속**으로 이 유형을 완전히 잡고 있습니다. 긴 지시를 받아 적는 능력 자체는 Level 4 수준입니다.

---

**P2B-Q3** ⚠️
문제 : ☞ Inform the controller of your situation, tell him you are starting an emergency descent, and request a lower level.
(Situation Update : Passing flight level 280 you get a CABIN ALTITUDE warning. The cabin altitude is climbing through 10,000 feet and the oxygen masks are on. You must get the aircraft down to 10,000 feet. You are descending at about 4,000 feet per minute. 154 passengers and 6 crew, two passengers feeling unwell.)
🖥 여압 패널 (CABIN ALTITUDE 경고 · 10,200 ft · DIFF PRESS 0.2)
내 답안 : arrival hl123 , we got cabin altitude warning sign on our indication , so request decent to 10000 immediately
** 교정 답안 : Eastvale Control, HL123, we have a cabin altitude warning and we are losing pressurization. We are starting an emergency descent now. Request descent to 10,000 feet.
- 누락된 필수 readback 요소 : **`emergency descent` 선언** — 지시문이 요구한 세 기능 중 하나입니다
- 표준교신용어 오류 : **기관 호출 `arrival`** — 교신 상대는 **Eastvale Control** 입니다. `arrival` 은 기관명이 아닙니다(EPTA_02·03·04 의 `controller` 오류와 같은 유형의 재발)
- 코멘트 : 상황 설명과 강하 요청은 명확합니다. 빠진 것이 **가장 중요한 한 마디**입니다 — `we are starting an emergency descent`. 긴급강하는 **분당 수천 피트로 다른 항공기의 고도를 가로지르며 내려가는 기동**이라, 관제사가 그 말을 들어야 주변 항공기를 치웁니다. `request descent to 10,000` 만 들으면 관제사는 통상 강하로 처리하고 순서를 기다리게 합니다. 지시문에 세 기능이 적혀 있을 때는 **답에 세 토막이 있는지 세어 보세요.**

---

**P2B-Q4** ❌
문제 : ☞ Listen to the controller, give a full readback, tell him what the problem is, and request what you need.
Center : HL123, roger, descend at your discretion. Be advised the minimum safe altitude on your present track is 11,500 feet for the next 30 miles.
내 답안 : descend 10000 hl123 , then request hold before reaching next waypoint at safety area
** 교정 답안 : Descend at your discretion, HL123 — but we need 10,000 feet and your minimum safe altitude is 11,500, so we cannot level off there with the cabin where it is. Request a heading clear of the high ground so we can continue down to 10,000.
- 누락된 필수 readback 요소 : **① 문제 지적(10,000 필요 vs MSA 11,500 충돌) ② 적절한 요청**
- 표준교신용어 오류 : `safety area` 는 표준 용어가 아닙니다. `before reaching next waypoint at safety area` 는 문장이 성립하지 않습니다
- 코멘트 : **이번 세트의 두 번째 숫자 비교 문항이고, 여기서는 비교하지 않았습니다.** 관제사가 **11,500 피트**라는 숫자를 줬고 당신은 **10,000 피트**가 필요합니다. 1,500 피트 차이가 이 문항 전체입니다 — 지형 때문에 11,500 아래로 못 내려가는데 객실고도 때문에 10,000 까지 내려가야 하는, **서로 모순되는 두 요구**입니다. 그 모순을 말하는 것이 `tell him what the problem is` 였습니다.
  그리고 **요청이 상황을 악화시킵니다.** 여압을 잃은 상태에서 `request hold` 는 산소를 쓰면서 제자리를 도는 것입니다. 필요한 것은 **고지대를 벗어나는 기수**이고, 실제로 관제사가 다음 턴에서 그것을 줬습니다(heading 290). 같은 세트 P2A-Q3 에서는 숫자 비교를 해냈는데 여기서는 못 했습니다 — **Part Ⅱ B 처럼 사건이 돌아가는 중에는 계산이 멈추는** 양상입니다.

---

**P2B-Q5** ⚠️
문제 : ☞ Listen to the controller, give a full readback and say your intentions.
Center : HL123, turn right heading 290, that will take you clear of the high ground in 15 miles, descend to 10,000 feet. Say your intentions.
내 답안 : turn right heading 290 , hl123, our intension is to work checklist and vector to safety area to release our issues
** 교정 답안 : Turn right heading 290, descend to 10,000 feet, HL123. Our intention is to level at 10,000, complete the checklist, and then continue to Westmoor for the ILS.
- 누락된 필수 readback 요소 : **`descend to 10,000 feet`** — 고도는 필수 복창 7항목입니다
- 표준교신용어 오류 : `safety area` 비표준, `to release our issues` 어색
- 코멘트 : **`our intention is to ~` 구문을 썼습니다. 여섯 세트 만에 처음입니다.** EPTA_01 `ready` → 02 `report ready` → 03 `direct kimhae airport` → 04 "나중에 말하겠다" → 05 아예 없음 → **06 구문 사용**. 다섯 세트 연속 최우선이었던 약점이 해결됐습니다.
  남은 것은 두 가지입니다. ① **고도 복창 누락** — 선회방향과 기수는 받았는데 `descend to 10,000` 이 빠졌습니다. ② **의도의 내용** — "체크리스트를 하고 안전지역으로 벡터"라고 했는데, 벡터는 관제사가 방금 줬습니다. intentions 는 **앞으로 내가 할 일**이므로 `level at 10,000 → 체크리스트 → Westmoor 로 접근` 처럼 **목적지까지의 계획**이 들어가야 관제사가 그에 맞춰 준비합니다. 구문은 잡았으니 이제 내용만 채우면 됩니다.

---

**P2B-Q6** ⚠️
문제 : ☞ Listen to the controller and provide both pieces of information.
Center : HL123, two things — say your present rate of descent, and tell me whether anyone on board needs medical attention.
내 답안 : present altitude 10000 and we have 2 people who feel sick hl123
** 정답 : HL123, our rate of descent is about 4,000 feet per minute, and two passengers are feeling unwell but nobody needs urgent treatment.
- 누락된 필수 readback 요소 : **강하율(rate of descent)** — 묻은 것은 **강하율**인데 **고도**를 답했습니다
- 표준교신용어 오류 : 없음
- 코멘트 : **두 항목에 모두 답하려 한 구조는 맞습니다** — EPTA_04·05 에서 두 세트 연속 하나만 답했던 항목이고, 이번에는 두 토막을 만들었습니다. 틀린 것은 **첫 질문을 잘못 읽은 것**입니다. `rate of descent` 는 "분당 몇 피트로 내려가는가"이고 지문에 **4,000 feet per minute** 라고 적혀 있었습니다. 긴급강하 중에 관제사가 강하율을 묻는 이유는 **아래 항공기를 언제까지 치워야 하는지 계산하기 위해서**입니다 — 고도를 알려줘도 그 계산이 안 됩니다. `altitude`(고도)와 `rate of descent`(강하율)를 구분해 두세요.

---

**P2B-Q7** ⚠️
문제 : ☞ Listen to the controller. Tell him what you need to know before you decide, then state your decision with a reason.
Center : HL123, Westmoor is 70 miles ahead, about 20 minutes at your level. Daleford is 35 miles behind you, about 11 minutes. What would you like to do?
내 답안 : hl123 , before decide can i get the weather each airport , and whether they standing the ambulence service on runway , i would rather the near airport
** 교정 답안 : HL123 — before we decide, request the weather at both airports and whether they have an ambulance standing by. We would rather go to the nearer airport, Daleford at 11 minutes rather than Westmoor at 20, because we want to be on the ground quickly with a pressurization problem.
- 누락된 필수 readback 요소 : **① 결정의 이유 ② 20분 vs 11분 비교**
- 표준교신용어 오류 : 없음. 문법 : `can i get the weather each airport` → `the weather at both airports`, `whether they standing` → `whether they have ... standing by`, `i would rather the near airport` → `we would rather go to the nearer airport`
- 코멘트 : **묻는 내용이 정확합니다.** 양쪽 공항의 기상과 의료 지원 가용 여부 — 이 상황에서 결정에 실제로 필요한 두 가지입니다. EPTA_05 P2B-Q6 에서는 묻기는 했으나 **상황과 무관한 것**(기어 문제에 활주로 길이)을 물어 지적했는데, 이번에는 제대로 골랐습니다. **두 세트 연속 "결정 전에 묻기" 수행이고, 내용까지 맞은 것은 처음입니다.**
  빠진 것은 **지시문의 뒷부분**입니다 — `with a reason`. 가까운 쪽을 고른 이유(여압 문제라 빨리 내려야 한다)를 말하지 않으면 관제사는 단순한 선호로 받습니다. 그리고 관제사가 **20분 / 11분** 두 숫자를 줬는데 둘 다 쓰지 않았습니다. `11 minutes rather than 20` 한 토막이 곧 이유가 됩니다.

---

**P2B-Q8** ❌
문제 : ☞ Contact the controller, give him an update, state your decision, and say what you will need on arrival.
Center : HL123, I have Daleford weather for you — the visibility there is 800 metres in fog and they have no ILS. Westmoor is clear. I'd go to Westmoor if I were you.
(Situation Update : You are now level at 10,000 feet. The cabin altitude has stopped climbing and the passengers are off oxygen. You have 1 hour 15 minutes of fuel on board.)
내 답안 : maintain 10000 , we have the cabin altitude safe , we have only 1hr min of fuel , so we may choose the near one hl123
** 교정 답안 : HL123, we are level at 10,000, the cabin altitude has stabilized and the passengers are off oxygen. We have 1 hour 15 minutes of fuel. With Daleford at 800 metres and no ILS we will go to Westmoor — request the ILS runway 33 and an ambulance on arrival for two passengers.
- 누락된 필수 readback 요소 : **도착 시 필요한 것(ILS 와 구급차) — 지시문의 마지막 부분**
- 표준교신용어 오류 : `maintain 10000` → `level at 10,000`(상태 보고). `only 1hr min of fuel` 는 **1시간 15분**의 입력 오류이고, 1시간 15분은 "only" 가 아닙니다 — 20분 거리인 Westmoor 에 충분합니다
- 코멘트 : **갱신은 했습니다**(10,000 안착, 객실고도 안정) — EPTA_05 P2B-Q7 에서 갱신을 빠뜨린 것 대비 개선입니다. 그런데 **결정이 반대입니다.**
  관제사가 방금 **Daleford 는 안개 800미터이고 ILS 가 없다**고 말했습니다. 여압 문제로 계기 접근이 필요한 상황에서 그 공항은 **내릴 수 없는 곳**입니다. 그런데 `we may choose the near one`(= Daleford)으로 답했습니다. 관제사는 `I'd go to Westmoor if I were you` 로 결론까지 말해줬습니다.
  이것은 Q5 와 같은 유형입니다 — **관제사가 결정에 필요한 정보를 줬는데, 그 정보를 결정에 반영하지 않았습니다.** Q7 에서 "기상을 알려달라"고 물은 것은 당신이었습니다. 받은 답이 "그 공항은 안 된다"였으니, Q8 은 **선택을 바꾸는 턴**이었습니다. 연료 판단도 어긋났습니다 — 1시간 15분으로 20분 거리를 가는 데 "연료가 부족하다"는 근거는 성립하지 않습니다.

---

**P2B-Q9** ✅
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, descend to 3,000 feet until established, cleared for the ILS runway 33 approach, contact Westmoor Tower on 120.55.
내 답안 : descend 3000 until established cleared ils runway 33 approach contact wesmo tower 120.55 hl123
** 정답 : Descend to 3,000 feet until established, cleared for the ILS runway 33 approach, contact Westmoor Tower on 120.55, HL123.
- 누락된 필수 readback 요소 : 없음
- 표준교신용어 오류 : 없음
- 코멘트 : **고도 3,000 · until established · 접근 허가 · 기관 · 주파수 120.55 전부 정확합니다.** 접근 허가 복창은 **세 세트 연속 유지**, 주파수는 이 세트에서 **2/2 정확**(118.35, 120.55)입니다. 최종 클리어런스를 완전히 받는 것은 안정됐습니다.

---

## Part Ⅱ TASK C

**P2C-Q1** ⚠️ (90초)
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
내 답안 : During arrival phase , first our aircraft triped the same as what it did before , but there was a warning sign of cabin pressure , so we had to decrease the altitude , so we request to decrease, but there was a high terrain in the route , so request to vector to escape the terrain , we got the vector and after checklist , we get safety situation , and we have one hour fuel on board , so we have to divert the near airport
** 교정 답안 : During the arrival phase our aircraft was flying normally at first, but then we got a cabin pressure warning, so we had to descend. We requested a descent and started an emergency descent, but there was high terrain on the route, so we requested a vector to get clear of the terrain. We got the vector, and after the checklist the cabin altitude stabilized. We had one hour 15 minutes of fuel on board. Daleford, the nearer airport, was down to 800 metres in fog with no ILS, so we continued to Westmoor and landed there.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **사건의 원인이 정확하고**(여압 경고), **고지대 충돌까지 담았습니다** — Q4 에서는 말하지 못했던 MSA 문제를 리포팅에서는 언급했습니다. 즉 **상황은 이해하고 있었고 교신에서 말하지 못한 것**입니다. 전개 순서(경고 → 강하 요청 → 고지대 → 벡터 → 체크리스트 → 안정 → 연료)도 맞습니다.
  두 가지가 문제입니다. ① **결말이 사실과 다릅니다** — `we have to divert the near airport` 라고 했는데, 가까운 공항(Daleford)은 안개로 불가였고 **원래 목적지 Westmoor 에 착륙**했습니다. 회항하지 않았습니다. ② **`emergency descent` 라는 말이 없습니다** — 이 사건의 성격을 정하는 단어입니다. "고도를 낮췄다"와 "긴급강하를 했다"는 전혀 다른 보고입니다.
  문법 교정 : `triped the same as what it did before`(뜻 불명) → `was flying normally at first`, `we request to decrease`(시제) → `we requested a descent`, `we get safety situation` → `the cabin altitude stabilized`, `divert the near airport` → `divert to`.

---

**P2C-Q2** ⚠️ (90초)
문제 : How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
내 답안 : as a pilot , I think it was handled well , as they found that the warning about the sign , they started the checklist and request decrease, also the controller informed them there is a terrain at the level which they want . so they gave the vector to escape . also the controller gave them 2 options about the airport . one thing that could have been handled differently is that the controller gave 1 option which is near airport with the weather to save the time to choose . and if the pilot choose the aiport then controller relay their situation to arrival and tower then ask to stand the ambulence or emergency equipment on the runway . other that everything had been handled well
** 교정 답안 : As a pilot, I think the controller handled it well. As soon as we reported the cabin altitude warning he let us descend at our discretion, and he told us there was terrain at the level we wanted, then he gave us a vector to get clear of it. He also gave us two options for the airport. One thing that could have been handled differently is that he could have given us one option with the weather included, to save us time choosing — for example, telling us straight away that Daleford was 800 metres in fog with no ILS. And once we had chosen the airport, the controller could have relayed our situation to approach and tower and asked for an ambulance or the emergency equipment on the runway, instead of waiting for us to request it. Other than that, everything was handled well.
- 누락된 필수 readback 요소 : 해당 없음 (자유응답)
- 표준교신용어 오류 : 해당 없음
- 코멘트 : **이번 세트에서 가장 좋은 자유응답입니다.** `one thing that could have been handled differently is ~` 로 질문 후반부에 답했고(**네 세트 연속**), **지적 내용이 구체적이고 타당합니다** — "기상 정보를 선택지와 함께 줬어야 선택 시간을 줄일 수 있었다"는 지적은 정확합니다. 실제로 관제사는 Daleford 기상을 Q8 에서야 줬고, 그 때문에 Q7 에서 근거 없이 결정해야 했습니다. "조종사가 공항을 고르면 관제사가 approach·tower 에 상황을 전달하고 구급차를 대기시켜야 한다"도 실무적으로 맞는 제안입니다.
  남은 두 가지. ① **평가 대상이 또 조종사부터 시작합니다** — `as they found that the warning..., they started the checklist` 의 `they` 는 조종사입니다. 질문은 **관제사**를 묻습니다(**네 세트 연속 같은 패턴**). 분량의 대부분이 관제사 평가라 EPTA_05 보다는 나아졌지만, 첫 문장부터 `the controller` 로 시작하세요. ② **숫자 근거가 없습니다** — 800미터, 11분, 20분 중 하나라도 들면 의견이 사실에 묶입니다.
  문법 교정 : `as they found that the warning about the sign`(문장 미성립) → `as soon as we reported the cabin altitude warning`, `request decrease` → `let us descend`, `there is a terrain at the level which they want`(시제·관계절) → `there was terrain at the level we wanted`, `ask to stand the ambulence` → `asked for an ambulance`, `other that` → `other than that`.

---

## ICAO 6개 항목 등급

| 항목 | 등급 | EPTA_05 | 근거 |
|---|---|---|---|
| Pronunciation | **평가 보류** | 보류 | 텍스트 답안이라 판단 근거가 없습니다. 등급 계산에서 제외합니다. |
| Structure | **Level 3** | 3 | 복창 문항의 문장 구조는 안정적입니다. 자유응답에서 길어지면 깨집니다 — `triped the same as what it did before`, `request hold before reaching next waypoint at safety area`, `can i get the weather each airport`, `as they found that the warning about the sign`. **REQUEST 뒤에 동사구를 붙인 것이 4회**(increase speed / decrease speed / for departure / to take off)로 이 세트의 최다 반복 오류입니다. |
| Vocabulary | **Level 3** | 3 | `be advised`, `established`, `level at`, `until established`, `intention`, `endurance` 는 정확합니다. 반면 **`altimeter`(←altitude window) 재발**, `safety area`(비표준), `arrival`·`ground` 를 기관명으로, `release our issues`, `cleared to take off`(←cleared for takeoff). `emergency descent`·`rate of descent` 를 쓰지 못한 것도 어휘 문제입니다. |
| Fluency | **Level 3** | 3 | **32/32 응답, 무응답 0.** Task C 두 문항 모두 분량을 채웠고 Follow-up 도 세 문장 이상 이어 말했습니다. EPTA_05 의 Level 3 과 같은 등급이지만 내용은 분명히 나아졌습니다. 남은 것은 `um` 같은 주저와 `all we have to do is just request and do right away` 처럼 공허하게 닫는 습관입니다. |
| **Comprehension** | **Level 2 ↓** | 3 | **이번 등급을 정한 항목입니다. 들은 내용을 반대로 쓰거나 값을 바꾼 사례 7건** : ① P2A-Q5 — 7kt < 10kt 한계인데 RWY24 선택(본인이 Q3 에서 28분 불가라고 계산한 활주로) ② P2A-Q6 — 활주로 06 을 26 으로 ③ P2A-Q9 — `passing 1,800` 을 `passing 3000` 으로 ④ P2B-Q6 — `rate of descent` 질문에 고도로 답 ⑤ P2B-Q8 — Daleford 가 안개 800m·ILS 없음인데 "가까운 쪽" 선택 ⑥ P2C-Q1 — 회항했다고 보고(실제는 목적지 착륙) ⑦ P1B-Q6 — 25분 대기와 10분 예상을 뒤집음. **이 중 ①⑤는 관제사가 결정에 필요한 정보를 주고 결론까지 암시했는데도 정반대로 갔습니다.** EPTA_05 는 값 오류 3건이었는데 7건으로 늘었고, 성격이 "자릿수 실수"에서 **"의미 반전"**으로 나빠졌습니다. 복창 정확도(5요소 2회 완전, 접근 허가 3/3, 주파수 2/2, 네 자리 피트 해결)는 Level 4 급인데, **들은 것을 판단에 쓰는 단계**가 Level 2 입니다. |
| Interactions | **Level 3** | 2 | **EPTA_05 에서 유일하게 2 였던 항목이 3 으로 올랐습니다.** 근거 : 무응답 0(세 문항을 비웠던 것 해결), `our intention is to ~` 사용(**6세트 만에**), "결정 전에 묻기"·`inquire` **3문항 전부 수행**(P2A-Q4·Q10, P2B-Q7 — 4세트 연속 실패 항목), 두 질문에 두 토막 모두 생성, Task C Q2 의 지적이 구체적. 반면 **기관 호출 문제 3건**(P1B-Q6 `ground`, P2A-Q3 누락, P2B-Q3 `arrival`)과 **지시문 뒷부분 누락 4건**(P2A-Q2 후속 행동, P2A-Q5 이유, P2B-Q7 이유, P2B-Q8 요청), `Give an example` 미수행이 남아 Level 4 에는 미달합니다. |

### 최종 등급 : **Level 2 (불합격)** — EPTA_05 와 동일하나, 내용은 다릅니다

**EPTA_05 의 Level 2 는 "세 문항을 비워서" 나온 것이고, EPTA_06 의 Level 2 는 "다 풀었는데
들은 것을 반대로 써서" 나온 것입니다.** 같은 등급이지만 상태가 다릅니다.

이번에 해결된 것 :
- **무응답 0** (EPTA_05 의 최우선 약점)
- **`our intention is to ~`** — 다섯 세트 연속 실패하다 처음 사용
- **"결정 전에 묻기" / `inquire`** — 네 세트 연속 실패하다 3문항 전부 수행, 묻는 내용까지 적절(P2B-Q7)
- **네 자리 피트** — P2A-Q8 에서 3,000 과 1,800 동시 정확
- **숫자 비교** — P1B-Q1 과 P2A-Q3 에서 성공(P2A-Q3 은 직접 뺄셈까지)

새로 드러난 것 :
- **받은 정보를 결론에 연결하지 못한다** (P2A-Q4 에서 묻고 → Q5 에서 무시 / P2B-Q7 에서 묻고
  → Q8 에서 무시). **물어보는 것은 해결됐는데, 답을 듣고 판단을 바꾸는 것이 안 됩니다.**
- **자기가 방금 한 계산과 모순되는 결정** (Q3 에서 28분 불가 → Q5 에서 28분 활주로 선택)

---

## 태스크별 총평

**Part Ⅰ Task A** — 네 문항 중 둘이 완전하고 둘이 부분입니다. 가장 긴 지시(16단어, 5요소)에서 **squawk 4703 과 6,000 피트를 둘 다 받았고 접근 허가도 복창**했습니다. 숫자는 확실히 잡히고 있습니다. 부분 감점 두 건은 성격이 다릅니다 — Q2 는 **고유명사가 흐려진 것**(SONTEL→SONTEN, RIKAS→raken), Q3 은 **조건절이 빠진 것**(`until passing`). 숫자 다음으로 받아 적을 것이 **이름과 조건**입니다.

**Part Ⅰ Task B** — 여섯 문항 중 셋이 완전, 둘이 부분, 하나가 실패입니다. **Q1 에서 숫자 비교를 해냈고**(2세트 연속 최우선 약점), Q3 의 confirm 3단은 네 세트 연속 유지, Q4 의 `Negative` 선택도 개선입니다. 실패한 Q6 은 **두 숫자를 뒤집고**(25분 대기를 10분으로) **근무시간 계산을 통째로 빠뜨렸습니다** — 발신형 문항에서 기관 호출과 근거 숫자가 함께 빠지는 양상입니다. `request` 뒤에 동사구를 붙인 것이 이 파트에서만 3회입니다.

**Part Ⅱ Task A** — 열한 문항 중 넷이 완전, 넷이 실패입니다. 이 세트에서 가장 성적이 나쁜 파트이고, 동시에 **가장 잘한 문항(Q3)과 가장 나쁜 문항(Q5)이 같이 있습니다.** Q3 에서 1340 − 1318 = 22분을 계산해 28분과 비교했는데, **두 턴 뒤 Q5 에서 그 28분 활주로를 선택**했습니다. Q4 에서 바람을 물어 7kt 를 받았는데 10kt 한계와 비교하지 않았습니다. Q6 의 활주로 26, Q9 의 `passing 3000` 은 값 오류이고, Q7 은 입력 사고로 `line up and wait` 가 `cleared for takeoff` 로 바뀌었습니다. **정보 수집은 되는데 그 정보로 결정하는 단계가 끊깁니다.**

**Part Ⅱ Task B** — 아홉 문항 중 셋이 완전, 둘이 실패입니다. 복창 문항(Q2 5요소, Q9 최종 클리어런스)은 완벽하고, **Q5 에서 intentions 구문을 쓰고 Q7 에서 적절한 질문을 던진 것**이 이 세트의 성과입니다. 실패한 둘은 모두 **판단 문항**입니다 — Q4 는 10,000 과 11,500 의 모순을 말하지 않고 홀딩(여압 상실 중에 가장 나쁜 선택)을 요청했고, Q8 은 Daleford 가 불가라고 들은 직후 Daleford 를 골랐습니다. Q3 의 `emergency descent` 누락도 같은 뿌리입니다 — 사건의 심각도를 관제사에게 전달하는 단어를 쓰지 않았습니다.

**Part Ⅱ Task C** — 두 문항 모두 분량을 채웠고 **Q2 는 역대 최고**입니다. Q1 은 원인과 고지대 충돌까지 정확히 담았습니다 — 이는 **상황은 이해했는데 교신에서 말하지 못했다**는 증거이고, Comprehension 보다 **실시간 처리**의 문제임을 보여줍니다. 결말을 "회항했다"로 잘못 쓴 것과 `emergency descent` 가 없는 것이 남습니다. Q2 는 관제사 평가가 구체적이고 제안이 실무적이지만, **첫 문장의 평가 대상이 또 조종사**입니다(네 세트 연속).

---

## 다음 학습 과제

### 반복되는 약점 3개

1. **물어본 답을 결정에 쓰기 (신규·최우선)** — 이번 세트의 진짜 문제입니다. P2A-Q4 에서 바람을 물어 **7kt** 를 받고도 Q5 에서 한계 10kt 와 비교하지 않았고, P2B-Q7 에서 기상을 물어 **"Daleford 는 800m·ILS 없음"**을 받고도 Q8 에서 Daleford 를 골랐습니다. **묻는 것은 해결됐습니다. 이제 받은 답으로 판단을 바꾸는 연습이 필요합니다.** 방법은 하나입니다 — 관제사의 답을 들으면 종이에 **`받은 값 vs 내 한계`** 를 두 줄로 적고, 어느 쪽이 큰지 보고 나서 입을 떼세요. `7 / 10 → OK` 처럼.

2. **스스로 보고할 때 값이 틀린다** — 복창은 정확한데(5요소 2회, 주파수 2/2, 네 자리 피트 해결) **내가 먼저 말하는 문항에서 값이 바뀝니다** : P2A-Q9 `passing 1,800`→3000, P2A-Q6 활주로 06→26, P1B-Q6 25분→10분, P2B-Q1 Westmoor→Eastvale, P2B-Q6 강하율→고도. **받아 적은 메모를 보지 않고 기억으로 말하고 있다**는 신호입니다. 위치보고는 `passing X for Y`(X=지금, Y=목표) 형태를 고정하세요.

3. **지시문 뒷부분 (5세트 연속)** — P2A-Q2 후속 행동, P2A-Q5 이유, P2B-Q7 이유, P2B-Q8 도착 시 필요한 것. 이번에는 **`with a reason` 이 두 번 빠졌습니다.** 지시문에서 쉼표와 `and` 를 세어 **기능 개수를 먼저 적고**, 답에 그만큼 토막이 있는지 확인하세요. `Give an example.` 은 응답한 세트 기준 **다섯 세트 연속** 미수행입니다.

### 외워야 할 표현 5개

| 영어 | 뜻 | 쓰는 상황 |
|---|---|---|
| `7 knots of tailwind is inside our limit of 10, so we will take runway 06.` | 배풍 7노트는 한계 10노트 이내이므로 활주로 06 을 받겠습니다 | **받은 값 vs 내 한계를 나란히 말하고 결론을 낸다.** 이번 세트 최우선 |
| `We are starting an emergency descent now.` | 지금 긴급강하를 시작합니다 | 여압 상실·급강하. 이 말이 있어야 관제사가 아래 항공기를 치운다 |
| `We need 10,000 feet and your minimum safe altitude is 11,500, so we cannot level off there.` | 10,000 이 필요한데 최저안전고도가 11,500 이라 거기서 멈출 수 없습니다 | **두 숫자의 모순을 그대로 말하는 것**이 문제 지적 |
| `Our rate of descent is about 4,000 feet per minute.` | 강하율은 분당 약 4,000 피트입니다 | `altitude`(고도)와 `rate of descent`(강하율)는 다른 질문 |
| `Request priority for departure.` / `Request vectors for a longer final.` | 출발 우선권을 요청합니다 / 긴 최종접근을 위한 벡터를 요청합니다 | **REQUEST 뒤는 명사구.** `request to take off` / `request increase speed` 는 틀림 (이 세트 4회) |
