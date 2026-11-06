// 자동 생성 — practice/push.py --static 이 쓴다. 직접 고치지 않는다.
// api/_lib 는 Vercel 이 함수로도 정적 파일로도 내보내지 않는다.
// 토큰을 통과한 /api/feedback 함수만 읽는다 (CLAUDE.md §1 규칙 3).
export default {
  "EPTA_01": {
    "set": "EPTA_01",
    "level": "Level 2",
    "summary": "",
    "gradedAt": "2026-10-13",
    "items": {
      "P1A-Q1": {
        "verdict": "⚠",
        "model": "Taxi via Kilo, hold short of runway 27, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **유도로를 Kilo 가 아니라 C(Charlie) 로 복창했습니다.** 알파벳 한 글자 축약은 감점하지 않지만, 그건 `K`=Kilo 일 때입니다. `C` 는 **다른 글자**이고, 지상에서 다른 유도로로 들어가는 결과가 됩니다.",
          "코멘트 : **활주로 번호 27 은 이번에 넣었습니다** (1차에서 누락). 숫자를 챙기는 대신 글자를 놓쳤습니다. 유도로는 `□` 가 아니라 글자 칸이니, `K > M` 처럼 글자를 먼저 적는 습관이 필요합니다."
        ]
      },
      "P1A-Q2": {
        "verdict": "⚠",
        "model": "Cleared for takeoff runway 27, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 (바람·트래픽은 복창 불필요 — 제외한 판단 정확)",
          "표준교신용어 오류 : **`Clear` → `Cleared`.** 1차와 **똑같은 오류**입니다. 허가를 받았음을 복창하므로 과거분사여야 합니다.",
          "코멘트 : 1차의 불필요한 `looking out` 은 사라졌습니다. `clear`/`cleared` 는 이번 세트에서 세 번(P1A-Q2, P2A-Q10, P1A-Q4 `celar`) 나왔습니다 — 단어 하나지만 반복되므로 외워 고쳐야 합니다."
        ]
      },
      "P1A-Q3": {
        "verdict": "❌",
        "model": "Descend to flight level 240, cross MARLO at or below flight level 260, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : `at` (`at or below` 는 한 덩어리)",
          "표준교신용어 오류 : **강하 지정고도를 FL240 이 아니라 FL250 으로 복창했습니다.** 값 오류입니다.",
          "코멘트 : **교차 제한고도 FL260 은 이번에 맞췄습니다** (1차에서는 170 으로 틀렸습니다). 그런데 이번엔 앞의 강하고도가 틀렸습니다. 두 숫자가 든 문항에서 **한쪽을 맞추면 다른 쪽이 틀리는** 양상입니다. `↓240   X MARLO ≤260` 처럼 덩어리로 끊어 적으면 두 숫자가 각자 칸에 들어갑니다."
        ]
      },
      "P1A-Q4": {
        "verdict": "❌",
        "model": "Cleared to Lakeside Airport via the ORCHID TWO departure, maintain 6,000, departure frequency 124.35, squawk 4512, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **SID 이름 `ORCHID`** (`via 2 dep` 로 숫자만 남았습니다)",
          "표준교신용어 오류 : **주파수를 124.35 가 아니라 124.5 로 복창했습니다** (값 오류). `maintain 6,000` 을 `climb to 6000` 으로 바꿨습니다 — 1차와 같은 오류입니다. maintain 과 climb 은 다른 지시입니다.",
          "코멘트 : **squawk 4512 는 이번에 맞췄습니다** (1차 3512). 주파수가 누락에서 오류로 바뀌었을 뿐 다섯 요소를 다 잡지는 못했습니다. `via ~ departure` 라는 틀은 잡았으니, SID 이름을 못 들었을 때 `Say again the departure` 를 쓰는 것이 다음 단계입니다."
        ]
      },
      "P1B-Q1": {
        "verdict": "✅",
        "model": "Expect ILS runway 09, altimeter 29.92, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **고도계 29.92 를 이번에 넣었습니다** (1차 누락). 필수 요소는 다 있습니다. 끝의 `runway27` 은 disabled aircraft 가 있던 활주로인데 맥락 없이 숫자만 남아, 듣는 쪽에서는 활주로 27 로 간다는 뜻으로 읽힐 수 있습니다. 전체 복창은 감점하지 않지만 **맥락 없는 숫자는 빼는 쪽이 안전합니다.**"
        ]
      },
      "P1B-Q2": {
        "verdict": "⚠",
        "model": "Climb and maintain flight level 190, HL123. And be advised, during taxi we saw a large piece of rubber debris on taxiway Mike, near the holding point.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **`climb and maintain` 으로 정확히 복창했습니다** (1차 `climb to`)",
          "표준교신용어 오류 : 없음",
          "코멘트 : **1차에서는 보고를 아예 하지 않았는데 이번에는 했습니다.** 기능 수행은 성공입니다. 다만 **위치를 틀렸습니다** — 파편은 **taxiway Mike** 에 있었는데 `in runway` 라고 보고했습니다. 활주로에 파편이 있다고 하면 관제사는 활주로를 폐쇄하고 점검차를 보냅니다. 고친 것은 ① `in runway` → `on taxiway Mike` (사실 오류) ② `during taxi` 시점 추가입니다."
        ]
      },
      "P1B-Q3": {
        "verdict": "⚠",
        "model": "Unable to climb to flight level 350 due to cumulonimbus ahead, HL123. Request heading deviation right of track to avoid, maintaining flight level 290.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (거부 문항)",
          "표준교신용어 오류 : **대안(request) 이 없습니다.** unable 은 `unable + 사유 + 대안` 세 토막입니다.",
          "코멘트 : **사유를 넣었습니다** — 1차에서는 `due to ,` 로 비어 있었습니다. 그런데 1차에 있던 `request fl300` 이 이번엔 사라졌습니다. **한쪽을 고치면 다른 쪽이 빠지는** 패턴입니다. `cumulunimbus` 오탈자는 감점하지 않았습니다. 세 토막을 손가락으로 세면서 말하는 연습이 필요합니다."
        ]
      },
      "P1B-Q4": {
        "verdict": "⚠",
        "model": "Negative, maintaining 150 knots due to tailwind on final, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음",
          "표준교신용어 오류 : **여전히 AFFIRM 으로 시작합니다.** 그리고 ICAO 표준은 `affirmative` 가 아니라 **`AFFIRM`** 입니다.",
          "코멘트 : 1차보다 나아졌습니다 — 150kt 와 배풍 사유를 덧붙였습니다. 그러나 **사실 전달이 여전히 틀렸습니다.** 지문은 \"이미 150kt 로 줄였다\"입니다. `affirmative 170knots but request reduce speed 150` 은 \"지금 170 을 유지하고 있는데 150 으로 줄여도 되냐\"는 뜻이 되어, 관제사는 아직 170 이라고 믿고 분리를 계산합니다. **지금 상태가 질문과 다르면 첫 단어가 NEGATIVE 입니다.** 허가를 구하는 게 아니라 현재 상태를 통보하는 상황입니다."
        ]
      },
      "P1B-Q5": {
        "verdict": "⚠",
        "model": "Descending through flight level 195, HL123. Correction — we had 18,000 set in the altitude window by mistake. Now climbing back to flight level 200.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (보고 문항)",
          "표준교신용어 오류 : **`altimeter`(고도계 기압)와 `altitude window`(고도 선택창)를 혼동했습니다.** 잘못 넣은 것은 고도 18,000 이고 기압 설정과는 무관합니다. `request new altimeter` 는 기압값을 다시 달라는 뜻이 되어 상황과 맞지 않습니다.",
          "코멘트 : **정정을 시도한 것은 1차 대비 개선입니다.** 다만 ① 단어를 틀려 엉뚱한 요청이 됐고 ② FL200 으로 복귀한다는 조치가 빠졌습니다. 문법 교정은 `a mistakes` → `a mistake`. 내용 보충은 `altitude window` 와 복귀 조치입니다."
        ]
      },
      "P1B-Q6": {
        "verdict": "⚠",
        "model": "Granite Control, HL123, request you verify the waypoint VANDO — we have a similar name in the computer. Request spelling of VANDO.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (발신 문항)",
          "표준교신용어 오류 : 콜사인을 앞뒤로 두 번 썼습니다.",
          "코멘트 : **기관 호출을 했습니다** — 1차에서는 없었습니다. 확인 기능과 사유도 담았습니다. 남은 것은 ① 웨이포인트를 `vendo` 로 적은 것(VANDO 와 소리가 다릅니다 — 화면 클루에 `VANDO` 가 그대로 떠 있었습니다) ② 지시문이 요구한 **구체적 요청**(철자 확인 등)입니다."
        ]
      },
      "P2A-Q1": {
        "verdict": "⚠",
        "model": "Granite Control, HL123, level at flight level 330 approaching TOPAZ, request descent.",
        "notes": [
          "누락된 필수 readback 요소 : **`request descent`** — 지시문이 요구한 요청입니다.",
          "표준교신용어 오류 : `cross topez` 는 관제사가 조종사에게 주는 지시의 형태입니다. 조종사 위치보고는 `approaching TOPAZ` 입니다.",
          "코멘트 : **`leveling off fl330` 으로 상태 동사를 썼고 TOPAZ 도 언급했습니다** — 둘 다 1차 대비 개선입니다. 문제는 **요청 대상을 바꾼 것**입니다. 강하를 요청해야 하는데 arrival information 을 요청했습니다 (그건 P2A-Q3 에서 요구된 것입니다). 지시문의 `request descent` 를 그대로 받아 적으면 섞이지 않습니다."
        ]
      },
      "P2A-Q2": {
        "verdict": "✅",
        "model": "Descend to flight level 190, cross TOPAZ at or below flight level 240, information Romeo, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `at` 누락 (`at or below`). 이 세트에서 두 번 나왔습니다.",
          "코멘트 : 고도·교차제약·ATIS 를 다 잡았습니다. `information R` 의 한 글자 축약은 감점하지 않았습니다."
        ]
      },
      "P2A-Q3": {
        "verdict": "❌",
        "model": "Descend and maintain 11,000, contact Harbor Approach on 125.4, HL123. We were unable to receive the ATIS — request landing information.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **이관 기관명 `Harbor Approach` 를 이번엔 넣었습니다** (1차에는 주파수만)",
          "표준교신용어 오류 : 없음",
          "코멘트 : **요청이 완전히 사라졌습니다.** 1차에서는 `we didn't revice atis` 라도 있었는데 이번엔 그마저 없습니다 — **이 문항은 후퇴했습니다.** 화면에 `request landing information` 이 그대로 떠 있었습니다. 복창을 정확히 하는 데 집중하다 지시문의 뒷부분을 잃은 것으로 보입니다."
        ]
      },
      "P2A-Q4": {
        "verdict": "❌",
        "model": "Harbor Approach, HL123, descending through flight level 150 for 11,000.",
        "notes": [
          "누락된 필수 readback 요소 : **통과고도 FL150** — 1차와 **똑같이** 빠졌습니다.",
          "표준교신용어 오류 : 없음",
          "코멘트 : 지시문이 `report your **passing** altitude` 이고 지문이 FL150 을 그대로 줬습니다. **`descending through X for Y`** 에서 `through` 뒤 값이 통과고도입니다. 바로 아래 P2B-Q1 에서는 두 값을 다 썼으니, 형태를 아는 것은 확인됐습니다 — **같은 유형에서 두 번 연속 빠뜨린 것이 문제입니다.**"
        ]
      },
      "P2A-Q5": {
        "verdict": "✅",
        "model": "Descend and maintain 5,000, reduce speed to 220 knots, expect the TOPAZ ONE arrival, ILS runway 09, altimeter 30.06, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **이번 응시에서 가장 큰 개선입니다.** 1차에서는 활주로를 09→19 로 틀리고, 고도계를 빠뜨리고, 지시에 없는 `cross topez` 를 지어냈습니다. 이번에는 **다섯 요소를 전부 정확히** 복창했습니다 — 고도·속도·절차명·활주로·고도계. 가장 긴 복창 문항에서 이게 됐다는 것은 받아적기 자체가 개선됐다는 뜻입니다."
        ]
      },
      "P2A-Q6": {
        "verdict": "⚠",
        "model": "Runway 14, expect the RNAV approach, HL123. Request track miles to touchdown so we can set up for the new approach.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음 (`roger` 뒤에 내용이 따라오므로 단독 오용은 아닙니다. 다만 불필요합니다)",
          "코멘트 : **`advise what you need` 를 1차와 똑같이 하지 않았습니다.** 관제사가 먼저 지연을 사과했으므로 트랙 마일이나 예상 지연을 묻는 것이 자연스러운 응답입니다. 고친 것은 요청 문장 하나 추가입니다."
        ]
      },
      "P2A-Q7": {
        "verdict": "⚠",
        "model": "Affirm, able to accept a short approach, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음",
          "표준교신용어 오류 : **`5nm of final` 은 지시에 없는 값입니다.** 관제사는 \"약 8마일 절약\"이라고 했고 5마일 얘기는 없었습니다. P2A-Q8 의 `170 knots to 5 miles` 와 섞인 것으로 보입니다.",
          "코멘트 : **`Affirm` 을 썼습니다** — 1차에서는 `roger` 였습니다. 긍정/부정을 문장 맨 앞에 두는 것이 됐습니다. 남은 것은 **없는 값을 덧붙이지 않는 것**입니다. 이 세트에서 지어내기가 1차 6건 → 이번 3건으로 줄었지만 아직 남아 있습니다."
        ]
      },
      "P2A-Q8": {
        "verdict": "❌",
        "model": "Cleared for the RNAV runway 14 approach, maintain 170 knots to 5 miles, contact Lakeside Tower on 118.75, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **① 활주로 14 ② `to 5 miles` 범위 ③ 이관 기관명**",
          "표준교신용어 오류 : **`cleared for` 를 `expect` 로 바꿨습니다.** 접근 **허가**를 받은 것인데 \"예상\"으로 복창하면 허가를 받았다는 확인이 되지 않습니다. 그리고 **주파수를 118.75 가 아니라 119.75 로** 복창했습니다 (값 오류).",
          "코멘트 : **속도 제약 170 knots 는 이번에 넣었습니다** (1차 누락). 그런데 주파수는 1차(118.5)·재응시(119.75) **두 번 연속 틀렸습니다.** 주파수는 `.` 를 먼저 그리고 숫자를 세 토막(`118 . 75`)으로 받아 적으세요. `cleared for` → `expect` 는 허가의 성격을 바꾸는 오류라 숫자 오류보다 무겁습니다."
        ]
      },
      "P2A-Q9": {
        "verdict": "⚠",
        "model": "Lakeside Tower, HL123, established on the final approach course for runway 14, passing 2,400 feet, request landing.",
        "notes": [
          "누락된 필수 readback 요소 : **① 기관 호출 `Lakeside Tower` ② 활주로 14 ③ 의도(착륙 요청)**",
          "표준교신용어 오류 : 없음",
          "코멘트 : **위치(`established on the final`)를 넣은 것은 1차 대비 개선입니다** (1차는 고도만). 다만 타워로 처음 넘어가는 교신인데 **기관 호출이 1차와 똑같이 빠졌습니다.** 새 기관에 처음 말을 걸 때는 `[기관] + [콜사인]` 이 먼저입니다. 이 세트에서 기관 호출 누락이 네 번(P2A-Q9, P2B-Q1, P2B-Q3, P2B-Q7) 나왔습니다."
        ]
      },
      "P2A-Q10": {
        "verdict": "⚠",
        "model": "Cleared to land runway 14, HL123. Confirm the Embraer ahead is still on the runway?",
        "notes": [
          "누락된 필수 readback 요소 : 없음 (바람 제외 판단 정확)",
          "표준교신용어 오류 : **`clear to land` → `cleared to land`.** 1차와 같은 오류입니다.",
          "코멘트 : **문의를 1차와 똑같이 하지 않았습니다.** `slow vacate` 는 관제사 말을 되뇐 것이고 질문이 아닙니다. 지시문이 `inquire` 였으므로 **물음표로 끝나는 문장**이 하나 필요합니다. 고친 것은 ① `clear` → `cleared` ② 되뇌기를 질문으로 교체입니다."
        ]
      },
      "P2A-Q11": {
        "verdict": "⚠",
        "model": "In this situation I had to pull up the new approach chart for runway 14 and re-check the speeds, and that is why I asked for the landing information — I needed time to set it up. I don't have experience of a change exactly like this, but if it comes up, I would ask more about the wind and the conditions at the airport, and request holding, so that I can get some time to prepare and land with a safe procedure. For me, a runway change is too late once we are inside the final approach fix, because by then we are configured and slowing down. For example, if we were given a new runway at five miles, I would go around rather than rush the setup.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **1차 무응답에서 벗어난 것이 이번 응시의 가장 큰 진전입니다.** 다만 질문은 세 부분이고 답은 한 부분만 다뤘습니다. ① **롤플레이에서 실제로 무엇을 했는지** 가 없습니다 — 가정형(`if this situation booms up`)으로 바로 넘어갔습니다. ② `how late is too late` 에 대한 답이 없습니다. ③ `Give an example` 요구를 `I don't have any experience` 로 닫아버렸습니다 — 경험이 없으면 **가정 예시**를 들면 됩니다. 문법 교정은 `similar like this` → `similar to this`, `booms up` → `comes up`, `conditions about airport` → `conditions at the airport`, `or something` 삭제(구어적 모호). 내용 보충은 ①의 실제 행동과 ②③의 기준·예시입니다."
        ]
      },
      "P2B-Q1": {
        "verdict": "⚠",
        "model": "Clearwater Approach, HL123, descending through flight level 160 for 9,000, information Delta.",
        "notes": [
          "누락된 필수 readback 요소 : **기관 호출 `Clearwater Approach`** — 1차에는 있었습니다.",
          "표준교신용어 오류 : `descending 9000 from FL160` — 전치사 방향이 반대입니다. 표준은 **`descending through flight level 160 for 9,000`** (through = 지금 통과 중, for = 가고 있는 곳).",
          "코멘트 : 1차에서 이 문항은 유일한 ✅ 였는데 **기관 호출이 빠져 하락했습니다.** 두 고도값은 이번에도 다 담았습니다. `through`/`for` 두 전치사만 자리를 잡으면 이 문항 유형은 끝납니다."
        ]
      },
      "P2B-Q2": {
        "verdict": "✅",
        "model": "Descend and maintain 7,000, expect the ILS runway 09, altimeter 29.94, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : 세 요소 전부 정확합니다. 1차에서는 고도계 `29.94` 를 `contact .4` 로 바꿔 지어냈는데, 이번에는 **고도계를 고도계로 받았습니다.** 숫자 앞의 단어를 먼저 잡는 것이 된 사례입니다."
        ]
      },
      "P2B-Q3": {
        "verdict": "⚠",
        "model": "Clearwater Approach, HL123, levelling off at 7,000. We have a problem with hydraulic system B. Request time to work the checklist.",
        "notes": [
          "누락된 필수 readback 요소 : **기관 호출**",
          "표준교신용어 오류 : `maintain 7000` 은 지시를 복창하는 동사입니다. 지시문은 \"levelling off at 7,000\" 이라는 **현재 상태 보고**를 요구했습니다 — `levelling off at 7,000` 으로 바꿔야 보고가 됩니다. `we need some time to checklist` → `request time to work the checklist` (REQUEST + 명사구).",
          "코멘트 : **1차에서는 세 요구 중 하나만 했는데 이번에는 셋을 다 담았습니다** — 고도, 유압 B 계통, 체크리스트 시간. 큰 개선입니다. `hydraulic system B` 라고 계통 이름을 밝힌 것도 1차의 `b low indication` 보다 훨씬 명확합니다. 문법 교정은 `problem about` → `problem with` 입니다."
        ]
      },
      "P2B-Q4": {
        "verdict": "⚠",
        "model": "Maintain 7,000, heading 270, HL123. We are still working the checklist and will report when ready. Our intention is to continue to Clearwater for the ILS runway 09, and we will need the longest runway available because our braking may be degraded.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — 고도와 기수 모두 정확 (둘 다 필수 복창 항목)",
          "표준교신용어 오류 : 없음",
          "코멘트 : 복창은 이번에도 정확합니다. 다만 **intentions 가 1차와 똑같이 없습니다.** `report ready` 는 \"준비되면 보고하겠다\"로, 1차의 `ready` 보다는 낫지만 여전히 **무엇을 할 생각인지**를 말하지 않았습니다. 관제사가 `say your intentions` 라고 명시했습니다. 고친 것은 의도 진술 추가입니다."
        ]
      },
      "P2B-Q5": {
        "verdict": "⚠",
        "model": "Negative, HL123. Runway 14 is too short for us — with hydraulic system B lost our braking will be degraded. Request the longest runway available, or holding until runway 09 is clear.",
        "notes": [
          "누락된 필수 readback 요소 : **요청(request)** — 지시문의 두 번째 부분입니다.",
          "표준교신용어 오류 : **사유가 틀렸습니다.** `due to aircraft` 는 \"항공기 때문에\"로 무슨 뜻인지 전달되지 않습니다. 거부 사유는 **활주로가 2,400m 로 짧아서** 입니다.",
          "코멘트 : **`negative` 를 썼습니다** — 1차에서는 `rogoer` 였고, 그건 \"짧은 활주로를 수락한다\"로 읽히는 치명적 응답이었습니다. 거부 방향을 잡은 것이 가장 큰 개선입니다. 남은 것은 **사유를 정확히 말하고 대안을 요청하는 것**입니다."
        ]
      },
      "P2B-Q6": {
        "verdict": "✅",
        "model": "HL123, Lakeside is preferable for us. Request direct to Lakeside Airport.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `request to direct` → **`request direct`** (REQUEST 뒤에는 명사구가 바로 옵니다. `to` 가 들어가면 동사구 형태가 됩니다)",
          "코멘트 : **1차의 `whatever` 에서 가장 극적으로 개선된 문항입니다.** 두 선택지 중 하나를 고르고 그에 맞는 요청까지 했습니다 — 어느 쪽을 골라도 정답이 되는 문항이었고, 고른 것이 정답입니다. `i think ~ is preferable` 은 plain English 로 자연스럽습니다."
        ]
      },
      "P2B-Q7": {
        "verdict": "⚠",
        "model": "Clearwater Approach, HL123. The checklist is complete and we extended the landing gear by the alternate system — it indicates down and locked. Request landing runway 09, with emergency services standing by, and we may need a tow off the runway.",
        "notes": [
          "누락된 필수 readback 요소 : **① 기관 호출 ② 착륙에 필요한 지원 요청**(소방대 대기·견인)",
          "표준교신용어 오류 : **`we fixed` 는 부정확합니다.** 유압을 수리한 것이 아니라 **대체 시스템으로 기어를 내린** 것입니다. `fixed` 라고 하면 관제사는 문제가 해결됐다고 판단하고 지원을 준비하지 않습니다. `it function well` → `it indicates down and locked`.",
          "코멘트 : **기어를 수동으로 내렸다는 경위를 담은 것은 1차 대비 개선입니다** (1차는 `landing gear out` 뿐). 남은 것은 ① 단어 선택(`fixed` → `extended by the alternate system`) ② 지시문이 요구한 `what you will need` — 이것이 1차와 똑같이 빠졌습니다."
        ]
      },
      "P2B-Q8": {
        "verdict": "❌",
        "model": "Left heading 090, descend and maintain 3,000 until established, cleared for the ILS runway 09 approach, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **① `until established` ② 접근 허가 `cleared for the ILS runway 09 approach`**",
          "표준교신용어 오류 : `runway09 app` 은 허가 복창이 아닙니다. `cleared for` 가 있어야 허가를 받았다는 확인이 됩니다.",
          "코멘트 : **선회 방향 `left` 를 넣은 것은 개선입니다** (1차 누락). 그런데 1차에 있던 `until established` 가 이번엔 사라지고, **접근 허가 누락은 1차와 똑같이 반복됐습니다.** 접근 허가는 필수 복창 중에서도 가장 무거운 항목입니다 — 확인되지 않으면 허가 없이 접근을 시작하는 상황이 됩니다."
        ]
      },
      "P2B-Q9": {
        "verdict": "✅",
        "model": "HL123, able to vacate the runway ourselves.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : 질문이 둘 중 하나를 고르라는 것이었고 정확히 골라 답했습니다. **1차의 `vacate` 한 단어에서 문장으로 올라왔습니다.** 문법은 `ourself` → `ourselves` 뿐입니다."
        ]
      },
      "P2C-Q1": {
        "verdict": "⚠",
        "model": "During the initial approach there were no issues, but approaching the final there was a problem with the hydraulic system B, so we had to work through the checklist. After the checklist the system was still lost, so we had to extend the landing gear by the alternate system. The controller first asked whether we wanted to go to another airport, because runway 09 had gone out of service and the only runway he could offer was too short for us. In the end runway 09 came clear, so we continued to land at the first airport with the fire service standing by.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **사건의 원인을 유압 계통으로 정확히 짚었습니다** — 1차에서는 기어 고장으로 오인했습니다. 전개(체크리스트 → 다른 공항 제안 → 원래 공항 착륙)도 담았습니다. 분량도 늘었습니다. 남은 문제는 **사실 하나가 틀렸다는 것**입니다 — `after checklist the issues has been solved` 라고 했지만 유압은 **해결되지 않았습니다.** 기어를 대체 시스템으로 내려야 했고 브레이킹도 저하된 상태로 착륙했습니다. \"해결됐다\"고 보고하면 사건의 심각도가 사라집니다. 또 관제사가 다른 공항을 제안한 **이유(활주로 09 폐쇄)** 가 빠져 전개가 끊깁니다. 문법 교정은 `problem about` → `problem with`, `we need to check checklist` → `we had to work through the checklist`, `the issues has been` → `the system was`, `controller ask` → `the controller asked`, `we keep landing` → `we continued to land`."
        ]
      },
      "P2C-Q2": {
        "verdict": "⚠",
        "model": "I think the controller handled it well. He gave us some options — to change the runway or to go to another airport — instead of deciding for us, and he gave us time to prepare and work the checklist. That really helped us and kept the aircraft safe. One thing that could have been handled differently is that he could have told us earlier how long runway 09 would be closed, because that was what we needed in order to choose between holding and diverting.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **질문 대상을 바로 읽었습니다** — 1차에서는 관제사를 물었는데 조종사를 평가했습니다. 그리고 **근거를 들었습니다** (선택지 제공, 준비 시간). 1차의 \"잘했다\" 반복에서 크게 올라왔습니다. 남은 것은 **질문 후반부** 입니다 — `could have been handled differently` 에 1차와 똑같이 답하지 않았습니다. \"잘했다\"로만 끝내면 질문의 절반을 비운 것입니다. 문법 교정은 `they treat us like as a making safety more` (문장이 성립하지 않습니다 — 삭제하거나 `he put safety first` 로), `check checklist` → `work the checklist`, `make the aircraft safety` → `kept the aircraft safe`, `better than me` 삭제(질문과 무관)."
        ]
      }
    }
  },
  "EPTA_02": {
    "set": "EPTA_02",
    "level": "Level 3",
    "summary": "",
    "gradedAt": "2026-10-15",
    "items": {
      "P1A-Q1": {
        "verdict": "✅",
        "model": "Holding short of runway 09, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : 활주로 번호까지 정확합니다. EPTA_01 Q1 에서는 `hold short of runway` 로 번호를 빠뜨렸는데 이번엔 잡았습니다."
        ]
      },
      "P1A-Q2": {
        "verdict": "✅",
        "model": "After departure fly heading 350, cleared for takeoff runway 09, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 (트래픽 정보는 복창 불필요 — 제외한 판단 정확)",
          "표준교신용어 오류 : 없음",
          "코멘트 : **`cleared` 를 정확히 썼습니다.** EPTA_01 에서 `clear`/`cleared` 혼동이 세 번 반복됐던 항목입니다 — 이 문항에서는 해결됐습니다. `fly` 가 빠진 것은 경미합니다. `departurn` 오탈자는 감점하지 않았습니다."
        ]
      },
      "P1A-Q3": {
        "verdict": "⚠",
        "model": "Descend to flight level 180, reduce speed to 250 knots, contact Kingsley Approach on 127.85, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **이관 기관명 `Kingsley Approach`** — 주파수만 복창했습니다",
          "표준교신용어 오류 : 없음",
          "코멘트 : **주파수 127.85 를 정확히 복창했습니다.** EPTA_01 에서 주파수를 두 번 연속 틀렸던(118.5 / 119.75) 항목이라 이건 분명한 개선입니다. 남은 것은 기관명입니다 — 주파수만 복창하면 어느 기관으로 가는지 확인되지 않습니다."
        ]
      },
      "P1A-Q4": {
        "verdict": "❌",
        "model": "Cleared to Ravenna Airport via the NAVIO ONE departure, maintain 4,000, departure frequency 121.9, squawk 5146, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **초기고도를 4,000 이 아니라 14000 으로 복창했습니다** (값 오류). 목적지를 `Ravenna` 가 아니라 `avia` 로, SID 를 `NAVIO ONE` 이 아니라 `navia 1` 로 들었습니다 — 두 고유명사가 서로 섞인 것으로 보입니다. `clear` → `cleared`.",
          "코멘트 : **주파수 121.9 와 squawk 5146 을 둘 다 맞췄습니다** — EPTA_01 에서 \"하나 맞추면 하나 틀린다\"던 항목이라 이건 개선입니다. 그런데 이번에는 **고도**가 틀렸습니다. 4,000 과 14,000 은 만 피트 차이입니다. `maintain 4,000` 처럼 네 자리 고도는 `=4000` 으로 적고, 앞에 숫자가 더 붙지 않았는지 한 번 더 보세요."
        ]
      },
      "P1B-Q1": {
        "verdict": "✅",
        "model": "Descending through flight level 120 for 6,000, QNH 1008, transition level 70, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — 고도·QNH·전이고도 **세 가지 필수 복창 항목을 전부** 잡았습니다",
          "표준교신용어 오류 : `to 6000` → `for 6,000` (경미)",
          "코멘트 : **복합 지시의 두 부분을 모두 수행했습니다** — 복창과 현재고도 보고. 이게 EPTA_01 에서 2세트 연속 최우선 약점이었던 항목입니다. 이번 세트의 가장 중요한 성과 중 하나입니다."
        ]
      },
      "P1B-Q2": {
        "verdict": "⚠",
        "model": "Taxi to the gate via Charlie, HL123. And be advised, on short final we saw a small drone about two hundred feet, just left of the runway 09 threshold.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `taxi via gate c` → `taxi to the gate via Charlie` (어순)",
          "코멘트 : **드론 보고를 했습니다** — 복합 지시 두 부분 수행. 다만 **위치와 고도가 없습니다.** 지문은 \"약 200피트, 활주로 threshold 좌측\" 이라고 줬는데 `we saw a drawn` 뿐입니다. 관제사는 이 보고로 활주로 폐쇄 여부와 통보 범위를 정하는데, 위치가 없으면 아무 조치도 못 합니다. 고친 것은 위치·고도·시점 보충입니다."
        ]
      },
      "P1B-Q3": {
        "verdict": "⚠",
        "model": "Negative, maintaining 270 knots due to buffet margin, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **실제 속도 270 knots**",
          "표준교신용어 오류 : **`Negative` 라고 해놓고 290 을 말했습니다** — 앞뒤가 모순입니다. 관제사는 \"290 이 아니다\"까지는 알지만 그럼 몇 노트인지 모릅니다.",
          "코멘트 : **첫 단어를 `Negative` 로 쓴 것은 해결입니다.** EPTA_01 에서 1차·재응시 모두 `affirmative` 로 시작해 정반대 답을 했던 항목입니다. 남은 것은 **그 뒤에 실제 값을 넣는 것**입니다 — 화면 클루에 `270 knots` 가 떠 있었습니다. NEGATIVE 다음은 반드시 \"그럼 실제로는 무엇인가\" 입니다."
        ]
      },
      "P1B-Q4": {
        "verdict": "❌",
        "model": "Descend to 4,000, HL123. Unable to cross QUILL at 4,000 — we are twelve miles out at 9,000 and that would exceed our descent rate. Request descent now, or a wider vector to lose the height.",
        "notes": [
          "누락된 필수 readback 요소 : **unable · 사유 · 요청 전부**",
          "표준교신용어 오류 : 없음",
          "코멘트 : **지시문을 정반대로 수행했습니다.** `make a readback of what you can accept` 는 \"할 수 있는 것만 복창하라\"는 뜻인데, 할 수 없는 교차 제약까지 복창했습니다. 이대로면 관제사는 QUILL 을 4,000 으로 통과하겠다고 약속받은 것이 되고, 실제로는 못 지킵니다. 받아들일 수 있는 부분(강하 4,000)만 복창하고 나머지는 unable 로 돌려야 합니다."
        ]
      },
      "P1B-Q5": {
        "verdict": "⚠",
        "model": "HL123, correction — we had 3207 set by mistake. Now squawking 3027.",
        "notes": [
          "누락된 필수 readback 요소 : **오설정 사실과 정정 조치**",
          "표준교신용어 오류 : 없음",
          "코멘트 : **squawk 값 3027 은 정확합니다.** 그러나 이 문항은 자기 오류 정정 문항입니다. 지금 트랜스폰더에는 3207 이 들어가 있으므로, \"3027 입니다\"라고만 하면 관제사 화면의 3207 과 맞지 않아 되묻게 됩니다. **무엇을 잘못 넣었고 지금 어떻게 바꿨는지**를 말해야 정정이 됩니다."
        ]
      },
      "P1B-Q6": {
        "verdict": "⚠",
        "model": "Westlake Control, HL123, we have two points called SELDO in the computer. Request verification of which one is on our route, and request the crossing altitude.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (발신 문항)",
          "표준교신용어 오류 : **기관명을 `Westlake` 가 아니라 `western` 으로** 불렀습니다.",
          "코멘트 : **기관 호출을 했습니다** — EPTA_01 에서 신규 약점으로 잡혔던 항목이라 호출 자체는 개선입니다. 이름이 틀린 것은 별개 문제입니다. 문법 교정 : `we can see same seldo 2 waypoint` → `we have two points called SELDO`, `verify which right waypoint height` → 문장이 성립하지 않습니다. 내용 보충은 교차고도를 **요청**으로 명확히 분리한 것입니다."
        ]
      },
      "P2A-Q1": {
        "verdict": "✅",
        "model": "Fairmont Delivery, HL123, request clearance to Kingsley.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : 기관·콜사인·요청이 순서대로 들어갔습니다. 목적지까지 붙이면 더 좋지만 이대로도 충분합니다."
        ]
      },
      "P2A-Q2": {
        "verdict": "⚠",
        "model": "Cleared to Kingsley Airport via the BRAVA TWO departure, SELDO transition, climb and maintain 7,000, departure frequency 126.4, squawk 3027, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **`SELDO transition`** — 비행로 허가의 한 요소입니다",
          "표준교신용어 오류 : `Clear` → `Cleared`. SID 이름을 `BRAVA` 가 아니라 `B` 로 줄였습니다 — 유도로 문자 축약은 감점하지 않지만 **SID 이름은 고유명사라 줄이면 다른 절차가 됩니다.**",
          "코멘트 : **고도 7,000 · 주파수 126.4 · squawk 3027 세 개를 동시에 맞췄습니다.** EPTA_01 에서 가장 반복적으로 틀리던 조합이라 이건 분명한 개선입니다."
        ]
      },
      "P2A-Q3": {
        "verdict": "⚠",
        "model": "Roger, slot time 0845, HL123. We will need de-icing before departure — request de-icing.",
        "notes": [
          "누락된 필수 readback 요소 : **슬롯 시각 0845 수신 확인**",
          "표준교신용어 오류 : 없음",
          "코멘트 : **제빙 요청은 했습니다** — 지시문 뒷부분 수행. 이번엔 **앞부분(`respond accordingly`)이 빠졌습니다.** 슬롯 시각은 출발 시각을 좌우하는 정보라 받았다는 확인이 필요합니다. EPTA_01 에서는 뒷부분을 빠뜨렸는데, 이번엔 반대가 됐습니다 — **둘 다 해야 합니다.**"
        ]
      },
      "P2A-Q4": {
        "verdict": "✅",
        "model": "Fairmont Ground, HL123, de-icing complete, request taxi. Request also our new slot time.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **기관 호출 + 요청 + 문의, 세 가지가 모두 있습니다.** 복합 지시를 온전히 수행한 사례입니다. `fairmon` 오탈자는 감점하지 않았습니다."
        ]
      },
      "P2A-Q5": {
        "verdict": "✅",
        "model": "Runway 09, taxi via Delta and Foxtrot, hold short of runway 14, give way to the CRJ on Foxtrot, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — 사용활주로·유도로·hold short·give way 네 요소 전부",
          "표준교신용어 오류 : 없음",
          "코멘트 : `drzfoxtrot` 는 양보 대상(CRJ)이 빠지고 오타가 겹친 것으로 보입니다. 유도로 지시 중 가장 긴 문항이었는데 구조는 다 잡았습니다."
        ]
      },
      "P2A-Q6": {
        "verdict": "❌",
        "model": "HL123, before I can accept — request the runway distance available from Foxtrot. If it is enough for our weight we can take the intersection departure.",
        "notes": [
          "누락된 필수 readback 요소 : **답하기 전에 알아야 할 것(Foxtrot 에서의 잔여 활주거리)을 묻지 않았습니다**",
          "표준교신용어 오류 : **`can you work with that?` 은 AFFIRM/NEGATIVE 질문인데 `roger` 로 답했습니다.** ROGER 는 \"들었다\"일 뿐이라 수락 여부가 전달되지 않습니다. `request intersection runway` 도 표현이 정확하지 않습니다 — `intersection departure from Foxtrot` 입니다.",
          "코멘트 : 지시문이 `Tell him what you need to know before you can answer` 로 **무엇을 해야 하는지 그대로 적혀 있었습니다.** 교차점 출발은 활주거리가 짧아지므로, 수락하기 전에 남은 거리를 확인하는 것이 안전상 당연한 절차입니다. 확인 없이 수락하면 성능 계산 없이 짧은 활주로에서 이륙하는 셈이 됩니다."
        ]
      },
      "P2A-Q7": {
        "verdict": "✅",
        "model": "Line up and wait runway 09 at Foxtrot, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 (바람은 복창 불필요 — 제외한 판단 정확)",
          "표준교신용어 오류 : 없음",
          "코멘트 : `i'm number 1` 은 불필요하지만 해롭지는 않습니다. `wati` 오탈자는 감점하지 않았습니다."
        ]
      },
      "P2A-Q8": {
        "verdict": "⚠",
        "model": "Cleared for immediate takeoff runway 09 at Foxtrot, no delay, HL123. We are ready for an immediate departure.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 (트래픽 정보는 복창 불필요 — 제외 정확)",
          "표준교신용어 오류 : **`clear` → `cleared`.** P1A-Q2 에서는 맞게 썼는데 여기서는 틀렸습니다 — 같은 세트 안에서 갈립니다.",
          "코멘트 : **지시문 뒷부분(`advise that you are ready`)이 빠졌습니다.** `no delay` 로 이륙하려면 준비됐다는 통보가 필요합니다."
        ]
      },
      "P2A-Q9": {
        "verdict": "❌",
        "model": "Fairmont Departure, HL123, climbing through 2,500 feet.",
        "notes": [
          "누락된 필수 readback 요소 : **기관 호출 `Fairmont Departure`**",
          "표준교신용어 오류 : **`2,500 feet` 를 `FL250` 으로 썼습니다.** 2,500피트와 FL250(25,000피트)은 **만 피트 이상 차이** 나는 완전히 다른 고도입니다. 이륙 직후 2,500피트에 있는 항공기가 FL250 을 통과한다고 보고하면 관제사는 전혀 다른 항공기를 찾게 됩니다.",
          "코멘트 : 이번 세트에서 가장 심각한 오류입니다. **네 자리 피트 고도와 FL 은 표기부터 다릅니다** — `2,500 ft` 는 `2500` 또는 `2.5` 로, `FL250` 은 `250` 으로 적어 구분하세요. P2B-Q1 에서는 `fl200` 을 정확히 썼으므로 구분을 아는데, 숫자만 보고 FL 을 붙인 것으로 보입니다."
        ]
      },
      "P2A-Q10": {
        "verdict": "✅",
        "model": "Climb and maintain flight level 190, cleared direct SELDO, HL123. Request the SELDO crossing altitude — it is not on our chart.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `cleared direct` 에서 `cleared` 가 빠졌습니다 (경미)",
          "코멘트 : **복창과 요청을 둘 다 했습니다.** 복합 지시 수행 성공 사례입니다. 이번 세트에서 복합 지시를 온전히 해낸 것이 네 문항(P1B-Q1, P1B-Q2, P2A-Q4, P2A-Q10)인데, EPTA_01 에서는 사실상 없었습니다."
        ]
      },
      "P2A-Q11": {
        "verdict": "⚠",
        "model": "When we are offered an intersection departure, we have to check the aircraft performance to see whether we can get airborne with the shorter distance. That is why I asked the controller for the runway distance available from Foxtrot — without that number I cannot run the calculation. If the performance is not satisfactory, we have to refuse and wait until the full runway is available. For example, on a wet runway at high take-off weight, 2,150 metres would not be enough for us, so I would tell the controller we need the full length even if it means waiting behind the CRJ.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **세 부분 중 두 부분을 다뤘습니다** — 확인사항(성능)과 거부 조건. EPTA_01 Follow-up 이 세 부분 중 하나였던 것에 비해 진전입니다. 남은 것은 ① `why did you ask the controller what you asked` — 관제사에게 무엇을 왜 물었는지(실제로 P2A-Q6 에서 묻지 않았으므로 여기서도 비었습니다) ② **`Give an example.`** — 3세트 연속 예시를 들지 않았습니다. 문법 교정 : `short roll take off` → `intersection departure`, `which can airborn` → `whether we can get airborne`, `unsatified` → `not satisfactory`, `until the all the runway` → `until the full runway`."
        ]
      },
      "P2B-Q1": {
        "verdict": "✅",
        "model": "Thornbury Approach, HL123, descending through flight level 200 for 8,000, information Kilo.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 (ATIS Kilo 는 있으면 좋지만 필수는 아닙니다)",
          "표준교신용어 오류 : `to 8000` → `for 8,000` (경미)",
          "코멘트 : **기관 호출 + 통과고도 + 목표고도가 전부 들어갔습니다.** EPTA_01 재응시에서 이 문항 유형의 기관 호출이 빠졌던 것이 해결됐고, 통과고도도 정확합니다. 같은 세트의 P2A-Q9 에서는 둘 다 틀렸으므로, **아는데 매번 적용하지는 못하는** 상태입니다."
        ]
      },
      "P2B-Q2": {
        "verdict": "✅",
        "model": "Descend and maintain 8,000, reduce speed to 230 knots, expect the ILS runway 27, altimeter 30.12, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **네 요소 전부 정확합니다** — 고도·속도·접근·고도계. 고도계는 EPTA_01 에서 세 번 빠뜨렸던 항목입니다."
        ]
      },
      "P2B-Q3": {
        "verdict": "⚠",
        "model": "Thornbury Approach, HL123, our airspeed indications disagree — the captain's, the first officer's and the standby all read differently. Maintaining 8,000. Request a groundspeed readout from your radar.",
        "notes": [
          "누락된 필수 readback 요소 : **① 기관 호출 ② `maintaining 8,000`**",
          "표준교신용어 오류 : **`controller` 는 호출부호가 아닙니다.** EPTA_01 P2B-Q3 에서 **똑같이** 지적된 오류입니다. `Thornbury Approach` 로 불러야 합니다.",
          "코멘트 : 세 가지 요구 중 두 가지(상황·groundspeed 요청)를 했습니다. 문법 교정 : `different speed at indication each` → `our airspeed indications disagree`. 상황 설명이 모호한 것도 문제입니다 — \"셋이 서로 다르다\"는 사실이 전달돼야 관제사가 사태의 성격을 압니다."
        ]
      },
      "P2B-Q4": {
        "verdict": "❌",
        "model": "Heading 240, maintain 8,000, HL123. We are running the unreliable airspeed checklist. Our intention is to continue for the ILS runway 27 using your groundspeed, and we will need you to keep passing us the groundspeed.",
        "notes": [
          "누락된 필수 readback 요소 : **기수 240 과 고도 8,000 — 둘 다 필수 복창 항목인데 통째로 빠졌습니다**",
          "표준교신용어 오류 : **`roger` 로 full readback 요구를 대체했습니다.** ROGER 는 복창을 대신할 수 없습니다.",
          "코멘트 : 이번 세트에서 가장 많이 잃은 문항입니다. 지시문이 `give a full readback and say your intentions` 로 두 가지를 명시했는데 **둘 다 하지 않았습니다.** `request landing` 은 의도가 아닙니다 — 착륙하려는 것은 관제사도 압니다. 의도는 \"지금 무엇을 하고 있고, 앞으로 어떻게 할 것이며, 무엇이 필요한가\" 입니다."
        ]
      },
      "P2B-Q5": {
        "verdict": "⚠",
        "model": "Negative, HL123. Unable 250 knots — our airspeed indications are unreliable, so we cannot set a speed accurately. Request you vector us out of the sequence, or give us the groundspeed you need.",
        "notes": [
          "누락된 필수 readback 요소 : **요청(request)** — 지시문의 두 번째 부분",
          "표준교신용어 오류 : **사유가 틀렸습니다.** `due to performance` 는 기체 성능이 모자란다는 뜻인데, 실제 이유는 **속도계를 믿을 수 없어 속도를 정확히 맞출 수 없다**는 것입니다. 성능 문제로 들으면 관제사는 다른 판단을 합니다.",
          "코멘트 : `negative` + `unable` 로 거부 방향은 정확히 잡았습니다. 남은 것은 ① 사유를 이 사건에 맞게 말하는 것 ② 대안 요청입니다. 관제사가 `If not I will have to turn you off` 라고 했으므로, 그 조치를 수락하거나 다른 안을 내는 것이 자연스러운 응답입니다."
        ]
      },
      "P2B-Q6": {
        "verdict": "⚠",
        "model": "Thornbury Approach, HL123. The checklist is complete and the captain's indications now agree with your groundspeed, but we will have to fly the approach manually and we cannot use autoland. Request radar vectors to the final approach course, and continue to pass us your groundspeed.",
        "notes": [
          "누락된 필수 readback 요소 : **① 기관 호출 ② 계기가 회복됐다는 핵심 갱신**",
          "표준교신용어 오류 : `due to aircraft something happen` 은 사유가 전달되지 않습니다.",
          "코멘트 : autoland 불가는 맞게 전달했지만, **상황이 좋아졌다는 사실(기장 계기가 groundspeed 와 일치)** 이 빠졌습니다. 그게 빠지면 관제사는 여전히 속도 정보가 없는 항공기로 취급합니다. 그리고 `what you will need for the approach` 에 대해 vector 만 요청했는데, 이 상황에서 실제로 필요한 것은 **groundspeed 를 계속 받는 것**입니다."
        ]
      },
      "P2B-Q7": {
        "verdict": "⚠",
        "model": "Roger, we accept the RNAV runway 27 approach, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `request` 가 어색합니다 — 관제사가 이미 RNAV 27 을 제시했으므로 **요청이 아니라 수락**입니다.",
          "코멘트 : 접근 방식 변경을 받아들인 것은 맞습니다. `roger` 뒤에 내용이 따라오므로 ROGER 단독 오용은 아닙니다."
        ]
      },
      "P2B-Q8": {
        "verdict": "✅",
        "model": "Turn right heading 300, descend and maintain 3,000 until established, cleared for the RNAV runway 27 approach, contact Thornbury Tower on 118.1, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — 선회방향·기수·고도·established·**접근 허가**·주파수 전부",
          "표준교신용어 오류 : 없음. `hd`·`trun`·`decend` 는 감점하지 않았습니다",
          "코멘트 : **이번 세트 최고의 성과입니다.** EPTA_01 에서 1차·재응시 모두 빠뜨렸던 **접근 허가(`cleared`)** 를 복창했고, 두 번 연속 틀렸던 **주파수(118.1)** 도 정확합니다. 선회 방향도 들어갔습니다. 가장 요소가 많은 복창 문항에서 전부 잡았습니다."
        ]
      },
      "P2B-Q9": {
        "verdict": "⚠",
        "model": "HL123, request the emergency services standing by as a precaution — we will be flying the approach manually. We expect a normal landing and we can vacate the runway ourselves.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **`to tow off` 는 이 상황과 무관합니다.** 견인은 기체가 자력으로 움직일 수 없을 때 필요한데, 속도계 문제는 지상 이동에 영향이 없습니다. EPTA_01 의 유압 사건(견인 필요)과 섞인 것으로 보입니다.",
          "코멘트 : 소방대 대기를 요청한 선택 자체는 타당합니다. 다만 관제사는 둘 중 하나를 물었으므로 **어느 쪽인지 분명히** 답하고, 필요하면 사유를 붙이면 됩니다."
        ]
      },
      "P2C-Q1": {
        "verdict": "⚠",
        "model": "During the descent into Thornbury we had a problem with our airspeed indications — the captain's, the first officer's and the standby all read differently, about twenty knots apart. So we asked the controller for a groundspeed readout from his radar and flew with that. We could not accept the speed he needed for the traffic behind us, because we could not set a speed accurately. After the checklist the captain's indications agreed again, but we had to fly manually and we could not use autoland. The controller also had to change us from the ILS 27 to the RNAV 27, because the glide path was out for calibration, and we landed with the emergency services standing by.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **속도계 불일치를 원인으로 짚은 것은 정확합니다.** 그런데 **순서가 뒤집혔습니다** — `malfunction about autolanding` 을 먼저 말했는데, autoland 불가는 속도계 문제의 *결과*입니다. 그리고 **ILS 27 → RNAV 27 변경이 통째로 빠졌습니다.** 이건 이 사건의 큰 축 하나입니다. 예비계기도 달랐다는 점, 737 때문에 증속을 거절한 것도 없습니다. 문법 교정 : `as same as` → `the same as`, `at decent section` → `during the descent`, `we have malfuction` → `we had a malfunction`, `indication speed` → `airspeed indications`, `request about the information` → `asked for the groundspeed`, `the landing work properly` → `the landing would be normal`."
        ]
      },
      "P2C-Q2": {
        "verdict": "⚠",
        "model": "I think the controller handled it well. When our airspeed indications went bad, he gave us the groundspeed from his radar straight away, which was exactly what we needed. He also gave us another option when the ILS was not available — the RNAV 27 — and he gave us time to run the checklist before the approach. Thanks to the controller we could land safely. One thing that could have been handled differently is that he could have told us about the ILS glide path being out for calibration earlier, because we had already set up for the ILS and we had to change everything late in the approach.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : 중간에 `controller gave us another option as rnav`, `thanks to controller` 로 관제사를 평가했으므로 EPTA_01 처럼 대상을 완전히 오독하지는 않았습니다. 다만 **첫 문장이 또 `I think we handled it well`** 입니다 — 질문은 관제사를 묻습니다. 더 큰 문제는 **사건의 핵심 단어를 틀린 것**입니다 : `heigh indication`, `just ask the exact height` — 이 사건은 **속도(speed)** 문제였지 고도가 아닙니다. 그리고 **`could have been handled differently` 에 3세트 연속 답하지 않았습니다.** 문법 교정 : `something work bad` → `something going wrong`, `at moment` → `at that moment`, `make us little bit embarrase` → `it made things difficult`, `there was a time to checklist to landing` → `he gave us time to run the checklist`, `we can land well` → `we could land safely`."
        ]
      }
    }
  },
  "EPTA_03": {
    "set": "EPTA_03",
    "level": "Level 3",
    "summary": "",
    "gradedAt": "2026-10-19",
    "items": {
      "P1A-Q1": {
        "verdict": "✅",
        "model": "Taxi to holding point runway 36 via Alpha, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **`tree 6` 을 runway 36 으로 정확히 해석했습니다.** 처음 접하는 표기인데 이 세트 전체에서 `tree` 를 한 번도 틀리지 않았습니다. `via a` 의 한 글자 축약은 감점하지 않았습니다."
        ]
      },
      "P1A-Q2": {
        "verdict": "⚠",
        "model": "After departure climb straight ahead to 2,000 feet, cleared for takeoff runway 36, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **`straight ahead`** — 이륙 후 어느 방향으로 상승하는지를 정하는 지시입니다. 빠지면 선회해도 되는 것으로 읽힙니다.",
          "표준교신용어 오류 : `after airborn` → `after departure` (지시받은 표현을 그대로)",
          "코멘트 : **`2,000` 을 피트로 정확히 받았고**(FL 로 바꾸지 않았습니다), `cleared for takeoff` 도 정확합니다. `wind calm` 을 복창에서 뺀 판단도 맞습니다."
        ]
      },
      "P1A-Q3": {
        "verdict": "✅",
        "model": "Climb and maintain flight level 350, contact Sejong Control on 128.25, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **기관명과 주파수를 둘 다 복창했습니다.** EPTA_02 의 같은 유형 문항에서 기관명이 빠졌던 것이 고쳐졌습니다. `tree 50` → FL350 해석도 정확합니다."
        ]
      },
      "P1A-Q4": {
        "verdict": "⚠",
        "model": "Cleared to Muan Airport via the PALDA ONE departure, maintain 5,000 feet, squawk 5721, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **`maintain`** — 고도 숫자만 있고 지시 동사가 없습니다. 유지인지 상승인지 확인되지 않습니다.",
          "표준교신용어 오류 : SID 를 `PALDA ONE` 이 아니라 `pade 1` 로 들었습니다. `clear` → `cleared`.",
          "코멘트 : 목적지·고도(5,000 피트)·squawk 는 정확합니다. `clear`/`cleared` 는 이번 세트에서 Q2 는 맞고 Q4 는 틀렸습니다 — 세트마다 반씩 갈리는 패턴이 세 세트째입니다."
        ]
      },
      "P1B-Q1": {
        "verdict": "⚠",
        "model": "Sejong Control, HL123, climbing through 9,000 feet for flight level 180. Request you verify our cleared level.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (발신 문항)",
          "표준교신용어 오류 : **`maintaining 9000` 은 사실과 다릅니다.** 지문은 \"passing 9,000 feet **for** flight level 180\" — 9,000 을 유지 중이 아니라 통과하며 상승 중입니다. `maintaining` 이라고 하면 관제사는 9,000 에 머무는 것으로 압니다.",
          "코멘트 : **기관 호출을 했고, 피트와 FL 을 둘 다 언급했습니다** — 두 단위를 섞은 문항인데 구분해서 썼습니다. `verify` 로 확인 기능도 수행했습니다. 고칠 것은 **상태 동사 하나**입니다."
        ]
      },
      "P1B-Q2": {
        "verdict": "⚠",
        "model": "Descend to flight level 230, wilco report reaching, HL123. And be advised, we experienced moderate turbulence for about two minutes crossing PALDA at flight level 350.",
        "notes": [
          "누락된 필수 readback 요소 : **난기류를 겪은 고도(FL350)** — 난기류 보고에서 고도는 핵심 정보입니다. 뒤따르는 항공기가 그 고도를 피할지 판단하는 근거입니다.",
          "표준교신용어 오류 : **`report reaching` 을 `before reaching` 으로 바꿨습니다.** \"도달하면 보고하라\"가 \"도달 전에\"가 되어 뜻이 달라집니다.",
          "코멘트 : **복합 지시의 두 부분을 모두 수행했습니다** — 복창과 난기류 보고. `be advised` 로 보고를 연 것도 적절합니다. 고친 것은 ① `before reaching` → `wilco report reaching` ② 고도 보충입니다."
        ]
      },
      "P1B-Q3": {
        "verdict": "✅",
        "model": "Negative, maintaining Mach decimal 7 4 due to turbulence, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **세 세트 만에 완성됐습니다.** EPTA_01 1차·재응시는 `affirmative` 로 정반대, EPTA_02 는 `Negative` 로 시작했지만 값을 290(실제 270)으로 틀렸습니다. 이번에는 **NEGATIVE + 실제 값 + 사유** 세 토막이 다 있습니다."
        ]
      },
      "P1B-Q4": {
        "verdict": "❌",
        "model": "Unable direct TOPLA, HL123 — our number two navigation receiver is inoperative, so we are not RNP 1 capable. Request to remain on the airway, or radar vectors.",
        "notes": [
          "누락된 필수 readback 요소 : **`unable` 과 대안 요청**",
          "표준교신용어 오류 : **할 수 없는 것을 그대로 복창했습니다.** `cleared direct TOPLA` 를 복창하면 그 경로를 수락한 것이 되는데, 실제로는 장비 때문에 비행할 수 없습니다. `rnp1 approach` 는 접근 방식이 아니라 **항로 항법 요건**이므로 단어도 맞지 않습니다.",
          "코멘트 : **EPTA_02 P1B-Q4 와 똑같은 실패입니다.** 지시문의 `make a readback of what you can accept` 는 \"받아들일 수 있는 것만 복창하라\"는 뜻입니다. 사유를 밝힌 것(`we cannot use rnp1`)은 절반의 성과지만, 앞에 `unable` 이 없고 뒤에 대안이 없어 관제사가 무엇을 해줘야 할지 알 수 없습니다."
        ]
      },
      "P1B-Q5": {
        "verdict": "✅",
        "model": "Heading 203, HL123. Correction — we had 203 set by mistake, now turning left to heading 230.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음 (`hd` 축약은 감점하지 않습니다)",
          "코멘트 : **현재 상태 → 오류 사실 → 정정 조치, 세 토막이 다 있습니다.** EPTA_01·02 의 같은 유형 문항에서 2세트 연속 \"값만 말하고 정정을 안 하던\" 것이 고쳐졌습니다."
        ]
      },
      "P1B-Q6": {
        "verdict": "✅",
        "model": "Sejong Control, HL123, level at flight level 350, fuel on board one hour 40 minutes. Request direct NOSOK.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `no delay` 는 관제사가 조종사에게 쓰는 말입니다. 조종사 쪽에서는 불필요합니다.",
          "코멘트 : **기관 호출 + 연료 보고 + 직항 요청, 세 요소를 모두 담았습니다.** 발신형 복합 문항을 온전히 수행한 사례입니다."
        ]
      },
      "P2A-Q1": {
        "verdict": "⚠",
        "model": "Sejong Control, HL123, level at flight level 350 approaching PALDA, inbound Muan.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **`direct PALDA` 는 관제사가 주는 지시의 형태입니다.** 조종사 위치보고는 `approaching PALDA` 입니다.",
          "코멘트 : 기관 호출과 고도는 정확합니다. `maintingin` 오탈자는 감점하지 않았습니다."
        ]
      },
      "P2A-Q2": {
        "verdict": "✅",
        "model": "Direct KARBU then NOSOK, descend to flight level 230, HL123. How many extra track miles will that add?",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `request how many extra miles will add` — REQUEST 뒤에는 명사구가 옵니다. 절을 붙이려면 그냥 질문문으로 묻는 편이 자연스럽습니다.",
          "코멘트 : **복창과 문의를 둘 다 했습니다.** `calbu` 오탈자는 감점하지 않았습니다."
        ]
      },
      "P2A-Q3": {
        "verdict": "✅",
        "model": "Sejong Control, HL123, we have one hour 45 minutes of fuel on board. Request direct NOSOK as soon as the area is clear.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `request` 라는 단어가 빠졌습니다 — 요청임은 전달되지만 표준형은 `Request direct NOSOK` 입니다.",
          "코멘트 : 기관 호출·연료·요청 세 요소를 모두 담았습니다."
        ]
      },
      "P2A-Q4": {
        "verdict": "❌",
        "model": "Expect direct NOSOK in about ten miles, descend to 13,000 feet, contact Muan Approach on 119.2, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **① `ten miles`(거리)를 `10min`(시간)으로 바꿨습니다.** ② **`1 tree thousand feet`(13,000 피트)를 `fl130` 으로 바꿨습니다.** 13,000 피트와 FL130 은 기압 설정이 다른 **별개의 고도**입니다 — 전이고도 아래는 QNH, 위는 표준기압입니다.",
          "코멘트 : **이번 세트의 최우선 타깃이었던 피트↔FL 혼동이 여기서 재발했습니다.** 다만 바로 다음 문항 P2A-Q5 와 P2B-Q1·Q4 에서는 두 단위를 정확히 구분했으므로, **네 번 중 세 번은 맞췄습니다.** 구분을 모르는 것이 아니라 받아적을 때 단위를 함께 적지 않아 생기는 문제입니다."
        ]
      },
      "P2A-Q5": {
        "verdict": "✅",
        "model": "Muan Approach, HL123, descending through flight level 150 for 13,000 feet.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `to` → `for` (경미)",
          "코멘트 : **기관 호출 + 통과고도 + 목표고도, 그리고 FL 과 피트를 정확히 구분했습니다.** 바로 앞 문항에서 틀린 것을 여기서는 맞췄습니다."
        ]
      },
      "P2A-Q6": {
        "verdict": "✅",
        "model": "Descend to 4,000 feet, reduce speed to 210 knots, expect the NOSOK TWO arrival, ILS runway 36, altimeter 1012, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **다섯 요소 전부 정확합니다** — 고도·속도·절차명·활주로·고도계. 세 세트 연속으로 이 유형(가장 긴 접근 복창)을 잡고 있습니다."
        ]
      },
      "P2A-Q7": {
        "verdict": "❌",
        "model": "HL123, before we decide — request the runway length available and how recent that braking action report is. If it is still medium we are able to continue to runway 36.",
        "notes": [
          "누락된 필수 readback 요소 : **결정하기 전에 알아야 할 것을 묻지 않았습니다**",
          "표준교신용어 오류 : `request reduce speed 190` 은 지시문과 무관한 요청입니다. 속도를 줄이는 것은 제동거리 판단과 직접 연결되지 않습니다.",
          "코멘트 : **EPTA_02 P2A-Q6 와 똑같은 실패입니다 — 3세트 연속.** 지시문에 `Tell him what you need to know before you decide` 라고 **해야 할 일이 그대로 적혀** 있었습니다. 젖은 활주로에 medium 제동으로 내릴지 판단하려면 활주로 길이, 보고 시점, 현재 강우 강도 같은 정보가 필요합니다. 묻지 않고 `continue` 라고 답하면 근거 없이 결정한 것이 됩니다."
        ]
      },
      "P2A-Q8": {
        "verdict": "❌",
        "model": "Turn left heading 020, descend to 2,500 feet until established, cleared for the ILS runway 36 approach, contact Muan Tower on 118.55, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **① heading 020 을 202 로 뒤집었습니다.** ② **`cleared for` 를 `expect` 로 바꿨습니다** — 접근 **허가**를 받은 것인데 \"예상\"으로 복창하면 허가 확인이 되지 않습니다.",
          "코멘트 : 두 오류 모두 반복입니다. 숫자 뒤집기는 **같은 세트 P1B-Q5 가 바로 그 상황을 정정하는 문항**이었는데 실제로 또 뒤집었습니다. `cleared for` → `expect` 는 EPTA_02 P2A-Q8 과 동일하고, 접근 허가 복창 누락은 **세 세트 연속**입니다. 고도·주파수·기관명은 정확했습니다."
        ]
      },
      "P2A-Q9": {
        "verdict": "⚠",
        "model": "Muan Tower, HL123, established on the ILS runway 36, passing 2,000 feet. Request the latest braking action.",
        "notes": [
          "누락된 필수 readback 요소 : 활주로 36 (경미)",
          "표준교신용어 오류 : **고도를 2,000 이 아니라 2500 으로** 말했습니다. 지문에 `passing 2,000 feet` 로 나와 있습니다 — 바로 앞 문항의 2,500 과 섞인 것으로 보입니다.",
          "코멘트 : **기관 호출 + 위치 + 요청, 세 요소를 모두 담았습니다.** 복합 지시 수행은 성공입니다. 값 하나만 앞 문항에서 끌려왔습니다."
        ]
      },
      "P2A-Q10": {
        "verdict": "⚠",
        "model": "Before I decided, I wanted to know the runway length available and how recent that braking action report was, because a medium report from ten minutes ago means little if the rain has got heavier since. Even though the controller said the braking action is medium, the actual braking of my aircraft may not match that report. So in that case we have to divert to an airport with better weather and a longer runway. For example, if the rain gets heavier and the next aircraft reports braking action poor, I would not continue to a 2,000 metre wet runway with a tailwind — I would take Daegu even though it is 40 miles further.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **생각의 내용은 좋습니다** — \"medium 이라고 들었어도 실제 제동은 그만큼 안 나올 수 있다\"는 것은 정확한 판단이고, 질문 ②(언제 divert 하는가)에 답했습니다. 빠진 것은 ① **\"무엇을 알고 싶었나\"에 직접 답하지 않은 것**(실제로 P2A-Q7 에서 묻지 않았으므로 여기서도 비었습니다) ③ **`Give an example.` — 4세트 연속 예시를 들지 않았습니다.** 문법 교정 : `then i expected` → `than I expected`, `the rain fall more` → `the rain gets heavier`, `as medium as the aircraft do brake` → 문장이 성립하지 않습니다, `divert where the weather is good and longer runway` → `divert to an airport with better weather and a longer runway`."
        ]
      },
      "P2B-Q1": {
        "verdict": "✅",
        "model": "Sejong Control, HL123, climbing through 8,000 feet for flight level 180.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `climb` → `climbing` (상태 보고), `to` → `for` (경미)",
          "코멘트 : **피트와 FL 을 정확히 구분했습니다** — `8000` 과 `fl180`. 기관 호출도 있습니다. `fl18-` 은 입력이 끊긴 것으로 보고 FL180 으로 읽었습니다."
        ]
      },
      "P2B-Q2": {
        "verdict": "✅",
        "model": "Climb and maintain flight level 230, direct TOPLA, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : `2 tree 0` → FL230 해석 정확합니다."
        ]
      },
      "P2B-Q3": {
        "verdict": "⚠",
        "model": "Mayday, mayday, mayday, Sejong Control, HL123, engine number one fire, engine shut down, passing flight level 150, request immediate return to Gimhae.",
        "notes": [
          "누락된 필수 readback 요소 : **관제기관명** — MAYDAY 3회 다음에는 `[기관명] + [콜사인]` 이 옵니다 (`atc-terminology.md` §8-1 비상 선언 7단계).",
          "표준교신용어 오류 : `turn off the engine` → **`engine shut down`** 이 표준입니다.",
          "코멘트 : **첫 MAYDAY 인데 구조가 거의 완성됐습니다.** MAYDAY ×3, 콜사인, 사건의 성격, 현재 위치, 요청까지 다 있습니다. 빠진 것은 기관명 하나입니다. 비상 상황에서 기관명이 빠지면 여러 항공기가 듣는 주파수에서 누구에게 하는 말인지 불분명해집니다."
        ]
      },
      "P2B-Q4": {
        "verdict": "⚠",
        "model": "Turn left heading 180, descend to 13,000 feet, HL123. Our intention is to return to Gimhae for an ILS approach on one engine, and we will need the emergency services standing by.",
        "notes": [
          "누락된 필수 readback 요소 : `heading` (숫자만 있습니다)",
          "표준교신용어 오류 : 없음",
          "코멘트 : **`1 tree thousand feet` 를 13,000 으로 정확히 받았습니다** — P2A-Q4 에서 FL130 으로 틀렸던 바로 그 표현입니다. 다만 **intentions 가 빈약합니다.** `direct kimhae airport` 는 목적지일 뿐이고, 어떤 접근을 할 것인지, 무엇이 필요한지가 없습니다. 관제사가 `Say your intentions` 라고 명시했습니다."
        ]
      },
      "P2B-Q5": {
        "verdict": "❌",
        "model": "HL123, fuel endurance two hours 50 minutes, 164 souls on board.",
        "notes": [
          "누락된 필수 readback 요소 : **① 연료의 분 단위(50분) ② souls on board 164 — 질문의 절반이 통째로 빠졌습니다**",
          "표준교신용어 오류 : 없음",
          "코멘트 : 관제사가 **두 가지**를 물었습니다. 탑승 인원은 소방·구조 규모를 정하는 숫자라 비상 상황에서 가장 중요한 정보 중 하나입니다. 연료도 \"2시간\"과 \"2시간 50분\"은 대체공항 선택을 바꿀 수 있는 차이입니다. 지문에 두 값이 다 적혀 있었습니다."
        ]
      },
      "P2B-Q6": {
        "verdict": "❌",
        "model": "HL123, we will divert to Daegu. With one engine out we want the calm wind and the longer runway, and we have the fuel for it. Request vectors to Daegu.",
        "notes": [
          "누락된 필수 readback 요소 : **사유** — 지시문에 `with a reason` 이 명시돼 있습니다",
          "표준교신용어 오류 : **`is available` 은 의도 진술이 아닙니다.** \"가능하다\"가 아니라 \"가겠다\"라고 해야 관제사가 벡터를 줍니다.",
          "코멘트 : 선택 자체(Daegu)는 단발 상태에서 타당합니다 — 측풍 20kt 보다 무풍에 긴 활주로가 낫습니다. 문제는 **그 판단 근거를 말하지 않은 것**입니다. 비상 상황에서 조종사의 의도와 이유는 관제사가 다음 조치를 정하는 근거입니다. EPTA_01 의 `whatever`, EPTA_02 의 짧은 응답에 이어 **\"선택은 하지만 이유를 안 붙이는\"** 패턴이 남아 있습니다."
        ]
      },
      "P2B-Q7": {
        "verdict": "⚠",
        "model": "Gimhae Approach, HL123. We have completed the checklist, the fire has not come back and the aircraft is stable on one engine. Request the emergency services standing by on the runway.",
        "notes": [
          "누락된 필수 readback 요소 : **기관 호출**",
          "표준교신용어 오류 : `we checklist` → `we have completed the checklist`, `stablized on the aircraft` → `the aircraft is stable`, `emergency equipment` → `emergency services`(둘 다 통하지만 후자가 표준)",
          "코멘트 : **소방대 대기를 요청했습니다.** EPTA_01·02 에서 2세트 연속 빠뜨렸던 `what you will need` 가 이번에 들어왔습니다. 남은 것은 기관 호출과 문장 다듬기입니다."
        ]
      },
      "P2B-Q8": {
        "verdict": "❌",
        "model": "Turn right heading 290, descend to 2,500 feet until established, cleared for the ILS runway 36 approach, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **① 선회 방향 `right` ② 접근 허가 `cleared for`**",
          "표준교신용어 오류 : `ils 36 approached` 는 허가 복창이 아닙니다. `cleared for` 가 있어야 허가를 받았다는 확인이 됩니다.",
          "코멘트 : **접근 허가 복창 누락이 세 세트 연속입니다.** EPTA_01(1차·재응시), EPTA_02 P2A-Q8, 그리고 이번 세트에서 두 번(P2A-Q8, P2B-Q8). 다만 EPTA_02 P2B-Q8 에서는 한 번 성공했으므로 \"할 수 있는데 매번 하지는 못하는\" 단계입니다. 선회 방향도 P2A-Q8 에서는 `left` 를 넣었는데 여기서는 빠졌습니다."
        ]
      },
      "P2B-Q9": {
        "verdict": "⚠",
        "model": "HL123, we will keep the emergency active until we are on the ground.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **판단은 맞습니다** — 엔진이 정지된 상태로 단발 착륙하므로 접지할 때까지 비상을 유지하는 것이 옳습니다. 다만 두 단어로는 둘 중 어느 쪽인지 관제사가 되물어야 합니다. 비상 취소 여부는 소방대 배치를 좌우하므로 **문장으로 분명히** 답해야 합니다."
        ]
      },
      "P2C-Q1": {
        "verdict": "⚠",
        "model": "During the climb out of Gimhae, passing flight level 150, we had an engine number one fire. We shut the engine down and discharged a bottle, and the warning went out, so we were flying on one engine. We declared a mayday and requested an immediate return to Gimhae. The controller asked for our fuel endurance and souls on board, and then told us Gimhae had a 20 knot crosswind while Daegu was 40 miles further with calm wind and a longer runway. We chose Daegu for that reason. After the checklist the aircraft was stable on one engine, and we requested the emergency services standing by on the runway.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **전개를 거의 다 담았습니다** — 비상 선포, 연료 질문, 측풍 정보, Daegu 대안, 체크리스트, 소방대 요청. EPTA_01·02 에서 전개의 큰 축이 통째로 빠지던 것에 비하면 분명한 개선입니다. 그러나 **사실 두 가지가 틀렸습니다.** ① `during approach phase` — 이 사건은 **이륙 후 상승 중**(FL150 통과)이었습니다. ② 본인은 P2B-Q6 에서 **Daegu 를 선택**했는데 여기서는 `request direct kimhae` 라고 썼습니다 — 자기 답과 모순입니다. souls on board 도 빠졌습니다. 문법 교정 : `there was a 1 engine fire` → `we had an engine number one fire`, `they ask` → `the controller asked`, `how many fuels` → `our fuel endurance`, `we get stablized with aircraft` → `the aircraft was stable`."
        ]
      },
      "P2C-Q2": {
        "verdict": "⚠",
        "model": "I think the controller handled it well. He gave us the runway situation at Gimhae straight away, and he offered another option at Daegu even though it was 40 miles further, so we could choose the safer runway ourselves. He also accepted our request for the emergency services without any delay. One thing that could have been handled differently is that he could have put the emergency services on standby at both airports from the start, instead of waiting for us to ask. That would have taken one job off the crew at a busy time.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **`the one thing what i want to change is …` — 4세트 만에 질문 후반부에 답했습니다.** EPTA_01(1차·재응시)·EPTA_02 에서 `could have been handled differently` 를 계속 비웠던 항목입니다. 관제사 평가도 근거와 함께 들었습니다. 남은 것은 **첫 문장이 또 `I think we handled it well`** 이라는 점입니다 — 질문은 관제사를 묻습니다(3세트 연속). 그리고 제안 내용이 문법적으로 깨져 뜻이 잘 전달되지 않습니다 : `make the aircraft use the original airport use more longer` 는 동사가 겹쳐 성립하지 않습니다. 문법 교정 : `as know as the situation` → `as soon as he saw the situation`, `made the aircraft safety` → `kept the aircraft safe`, `what the pilot request … is the best what he did` → `asking for the emergency services was the right call`, `all the people were handled it well` → `everyone handled it well`."
        ]
      }
    }
  },
  "EPTA_04": {
    "set": "EPTA_04",
    "level": "Level 3",
    "summary": "",
    "gradedAt": "2026-10-21",
    "items": {
      "P1A-Q1": {
        "verdict": "✅",
        "model": "Give way to the Boeing 787 on Charlie, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : 완전합니다."
        ]
      },
      "P1A-Q2": {
        "verdict": "❌",
        "model": "Cleared for immediate takeoff runway 08, report passing 3,000 feet, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 (트래픽 정보는 복창 불필요 — 제외 정확)",
          "표준교신용어 오류 : **`report passing 3,000 feet` 를 `8000 ft` 로 복창했습니다.** 값 오류입니다. 관제사는 3,000 피트에서 보고를 기다리는데 보고가 오지 않습니다.",
          "코멘트 : `cleared` 는 정확히 썼습니다(`for` 만 빠짐). 숫자 하나가 전체를 무효로 만든 경우입니다."
        ]
      },
      "P1A-Q3": {
        "verdict": "⚠",
        "model": "Descend to 4,000 feet, cleared for the RNAV runway 26 approach, contact Halston Tower on 120.35, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **이관 기관명 `Halston Tower`** — 주파수만 복창했습니다",
          "표준교신용어 오류 : `cleared rnav 26 approach` 에서 `for the` 가 빠졌지만 `cleared` 와 `approach` 가 있어 허가 복창으로 성립합니다",
          "코멘트 : **접근 허가를 복창했습니다.** 세 세트 연속 `expect` 로 바꾸거나 빠뜨렸던 항목인데, 이번 세트에서는 세 문항(P1A-Q3, P2A-Q8, P2B-Q8) 모두에서 `cleared` 를 넣었습니다. 남은 것은 기관명입니다 — EPTA_02·03 에서도 같은 자리에서 빠졌습니다."
        ]
      },
      "P1A-Q4": {
        "verdict": "✅",
        "model": "Cleared to Halston Airport via the CANTO TWO departure, maintain 6,000 feet, squawk 2046, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 (`via` 누락은 경미)",
          "표준교신용어 오류 : 없음",
          "코멘트 : **squawk 2046 을 정확히 복창했습니다.** 이 값은 2064 로 뒤집기 쉬운 함정이었고(같은 세트 P1B-Q5 가 그 상황을 다룹니다), 통과했습니다. 목적지·SID·고도도 다 있습니다."
        ]
      },
      "P1B-Q1": {
        "verdict": "❌",
        "model": "HL123, endurance one hour 20 minutes. Our alternate needs 40 minutes, so we can take about 10 more turns in the hold.",
        "notes": [
          "누락된 필수 readback 요소 : **추가 선회 가능 횟수 — 두 질문 중 하나를 답하지 않았습니다**",
          "표준교신용어 오류 : `request inbound holdon airport` 는 묻지 않은 내용입니다.",
          "코멘트 : 관제사가 **두 가지**를 물었고 지시문에도 `Provide both pieces of information` 이라고 적혀 있었습니다. 연료 1시간 20분에서 대체공항 40분을 빼면 여유가 40분이므로, 1회전 4분 기준 10회전 정도를 말해주면 관제사가 시퀀스를 짭니다. **그 계산이 이 문항의 핵심**이었습니다."
        ]
      },
      "P1B-Q2": {
        "verdict": "⚠",
        "model": "Taxi to stand 24 via Bravo, HL123. And be advised, on final we were hit by a green laser from the left of the approach path, at about 600 feet.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **고도를 600 피트가 아니라 6000 피트로** 말했습니다 (0 하나 추가). 접근 중 600 피트와 6,000 피트는 전혀 다른 상황이고, 레이저 보고에서 고도는 발사 지점을 특정하는 핵심 정보입니다.",
          "코멘트 : **복창과 보고 두 부분을 모두 수행했고 `be advised` 로 보고를 연 것도 적절합니다.** 고친 것은 고도 값과 어순입니다."
        ]
      },
      "P1B-Q3": {
        "verdict": "✅",
        "model": "Negative, maintaining heading 090 due to weather avoidance, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **완전합니다.** NEGATIVE + 실제 값 + 사유 세 토막이 다 있습니다. EPTA_03 에서 처음 완성한 구조가 이번에도 유지됐습니다 — **2세트 연속**."
        ]
      },
      "P1B-Q4": {
        "verdict": "✅",
        "model": "Unable direct ZAVER due to a line of storms on that track, HL123. Request radar vectors around the weather, then direct ZAVER once we are past the line.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **unable + 사유 + 대안 세 토막이 완성됐습니다.** EPTA_02 P1B-Q4(강하율), EPTA_03 P1B-Q4(RNP) 에서 **2세트 연속 실패했던 유형**입니다 — 둘 다 \"할 수 없는 것을 그대로 복창\"했는데, 이번에는 `unable` 로 시작하고 레이더 벡터라는 구체적 대안까지 냈습니다."
        ]
      },
      "P1B-Q5": {
        "verdict": "⚠",
        "model": "HL123, correction — we had 2064 set by mistake. Now squawking 2046.",
        "notes": [
          "누락된 필수 readback 요소 : **잘못 넣은 값 2064**",
          "표준교신용어 오류 : 없음",
          "코멘트 : 오류 사실과 정정 조치는 있습니다. 다만 `another squawk` 로 뭉갰습니다 — 관제사 화면에는 **2064** 가 떠 있고, 그 값을 확인해주지 않으면 \"내가 보고 있는 게 당신인가\"를 대조할 수 없습니다. 틀린 값을 말하는 것이 정정의 절반입니다."
        ]
      },
      "P1B-Q6": {
        "verdict": "❌",
        "model": "Halston Approach, HL123, our chart shows a crossing restriction of 11,000 feet at MERIS, but we are cleared to flight level 120. Request descent to 11,000 feet to make the restriction.",
        "notes": [
          "누락된 필수 readback 요소 : **① 콜사인 HL123 ② 강하 요청**",
          "표준교신용어 오류 : **`controller` 는 호출부호가 아닙니다.** EPTA_02 P2B-Q3, EPTA_03 에 이어 **3세트 연속 재발**이고, 이번 세트에서만 세 번(P1B-Q6, P2A-Q3, P2B-Q3) 나왔습니다. `Halston Approach` 로 불러야 합니다.",
          "코멘트 : 제한 고도를 지적한 것은 맞습니다. 그런데 **조종사가 먼저 발신하는 문항에서 콜사인이 빠진 것**은 이번에 처음 나왔습니다 — 기관명도 틀리고 콜사인도 없으면 누가 누구에게 하는 말인지 성립하지 않습니다. 지시문 뒷부분(`request the descent you need`)도 빠졌습니다."
        ]
      },
      "P2A-Q1": {
        "verdict": "✅",
        "model": "Northfield Control, HL123, climbing through 12,000 feet for flight level 330.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `climb` → `climbing` (경미)",
          "코멘트 : **기관 호출 + 피트 통과고도 + FL 목표고도.** 두 단위를 정확히 구분했습니다. 출발지·목적지를 덧붙인 것은 무해합니다."
        ]
      },
      "P2A-Q2": {
        "verdict": "✅",
        "model": "Climb and maintain flight level 330, after CANTO cleared direct MERIS, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `cleared` 누락 (경미)",
          "코멘트 : 고도와 조건부 경로를 다 잡았습니다."
        ]
      },
      "P2A-Q3": {
        "verdict": "⚠",
        "model": "Northfield Control, HL123, we have a passenger who has collapsed and a doctor is attending. We are considering a diversion. Request the weather at the nearest suitable airport.",
        "notes": [
          "누락된 필수 readback 요소 : **기상 요청** — 지시문은 `request **the weather** at the nearest suitable airport` 입니다",
          "표준교신용어 오류 : **`controller` 기관명 오류** (이번 세트 두 번째)",
          "코멘트 : 상황 통보와 회항 고려는 전달됐습니다. 그런데 **요청 대상이 바뀌었습니다** — 기상을 달라고 해야 하는데 회항 허가를 요청했습니다. 바로 다음 문항에서 관제사가 기상을 주는 구조였으므로, 여기서 기상을 요청해야 대화가 이어집니다."
        ]
      },
      "P2A-Q4": {
        "verdict": "❌",
        "model": "Redwood, wind 240 at 8, visibility 10 kilometres, runway 26 is 2,600 metres, HL123. We will divert to Redwood — it is only 60 miles and the doctor wants the passenger on the ground within the hour. Request descent and direct Redwood.",
        "notes": [
          "누락된 필수 readback 요소 : **기상 복창 전부** — 바람·시정·활주로 길이 어느 것도 없습니다. 지시문이 `give a readback of the weather` 라고 명시했습니다.",
          "표준교신용어 오류 : **`profitable` 은 \"수익성 있는\"** 이라는 뜻입니다. 여기서 쓸 단어는 `suitable` 입니다.",
          "코멘트 : 의도(Redwood 로 간다)는 전달됐지만 **이유가 없습니다.** 지시문에 `with a reason` 이 적혀 있었습니다. 60마일로 가깝다, 활주로가 2,600m 로 충분하다, 기상이 양호하다, 의사가 1시간 내 착륙을 요구한다 — 근거가 넷이나 주어져 있었는데 하나도 쓰지 않았습니다. **\"이유 대기\"는 네 세트 연속 미해결입니다.**"
        ]
      },
      "P2A-Q5": {
        "verdict": "⚠",
        "model": "Northfield Control, HL123, the doctor says the passenger must be on the ground within the hour. Request descent and direct Redwood, and request priority handling with an ambulance on arrival.",
        "notes": [
          "누락된 필수 readback 요소 : **① 공항 이름 Redwood**(`direct to airport` 로만) **② `priority handling`**",
          "표준교신용어 오류 : `have to go ground` → `must be on the ground` (문법)",
          "코멘트 : **기관 호출 + 강하·직항 요청 + 구급차 요청** 세 요소가 들어갔습니다. 사유(의사 소견)를 밝혀 우선권의 근거도 전달됐습니다. 다만 `direct to airport` 는 관제사가 어느 공항인지 다시 물어야 합니다 — 직전 교신에서 Redwood 가 나왔더라도 **요청에는 지명을 넣어야** 합니다."
        ]
      },
      "P2A-Q6": {
        "verdict": "❌",
        "model": "Descend to flight level 180, direct Redwood, contact Redwood Approach on 126.9, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 (`Approach` 누락은 경미)",
          "표준교신용어 오류 : **강하 고도를 FL180 이 아니라 FL190 으로 복창했습니다.** 값 오류입니다.",
          "코멘트 : 직항·주파수는 정확합니다. 고도만 한 자리 틀렸는데, 지정고도는 필수 복창 항목이라 이 하나로 문항이 무효가 됩니다."
        ]
      },
      "P2A-Q7": {
        "verdict": "⚠",
        "model": "Redwood Approach, HL123, descending through flight level 190 for 11,000 feet.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **탑승 인원을 묻지 않았는데 말했고, 그 값도 틀렸습니다** — 지문은 178 승객 + 8 승무원인데 `70 passengers and 9 crews` 로 답했습니다.",
          "코멘트 : **기관 호출 + 통과고도 + 목표고도는 정확합니다** — 피트와 FL 을 구분했습니다. 문제는 **인원을 여기서 미리 말한 것**입니다. 인원은 P2A-Q9 에서 관제사가 묻는 항목이었고, 묻지 않은 정보를 먼저 말하면 교신이 길어집니다. 더 큰 문제는 지문에 적힌 숫자를 **둘 다 틀린 것**입니다."
        ]
      },
      "P2A-Q8": {
        "verdict": "✅",
        "model": "Descend to 3,000 feet, reduce speed to 180 knots, cleared for the ILS runway 26 approach, wilco report established, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음 (`is` 는 `ILS` 오탈자로 보고 감점하지 않았습니다)",
          "코멘트 : **고도·속도·접근 허가·report established 네 요소 전부.** 접근 허가 복창의 두 번째 성공입니다."
        ]
      },
      "P2A-Q9": {
        "verdict": "⚠",
        "model": "HL123, 178 passengers and 8 crew, 186 souls on board. Request the ambulance on the runway.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **승객 수가 178 이 아니라 70 입니다** (승무원 8 은 정확)",
          "코멘트 : **두 가지를 다 답했습니다** — 이번 세트의 \"두 질문\" 문항 네 개 중 이것과 P2B-Q5 두 개에서 둘 다 답했습니다. 다만 숫자가 틀렸습니다. 탑승 인원은 소방·구조 규모를 정하는 값이라 **틀린 숫자가 빈 숫자보다 위험합니다.**"
        ]
      },
      "P2A-Q10": {
        "verdict": "⚠",
        "model": "Cleared to land runway 26, HL123. Where will the ambulance meet us — at the end of the runway or on the stand?",
        "notes": [
          "누락된 필수 readback 요소 : 없음 (바람 제외 정확)",
          "표준교신용어 오류 : 없음",
          "코멘트 : **문의를 요청으로 바꿨습니다.** 지시문은 `inquire **where** the ambulance will meet you` — 구급차가 **어디서** 기다리는지 물어보라는 것인데, 스스로 위치를 지정해 요청했습니다. 관제사는 이미 `the ambulance is standing by` 라고 알려줬으므로, 남은 것은 위치 확인입니다. **물음표로 끝나는 문장이 필요했습니다.**"
        ]
      },
      "P2A-Q11": {
        "verdict": "⚠",
        "model": "Before I made that choice I weighed up the distance — Redwood was 60 miles while Halston was 140 — the runway length, the weather, and above all the doctor's opinion that the passenger needed to be on the ground within the hour. As a pilot, passenger safety is as important as the aircraft itself, so I rely on the doctor's assessment of how urgent it is. For example, if the doctor told me the passenger was stable and comfortable, and the destination was only 20 minutes further with better medical facilities, I would keep going to Halston instead of diverting.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : ②(판단 기준 — 의사 소견에 의존)는 답했습니다. 빠진 것은 ① **무엇을 저울질했는가** — 거리 60마일 대 140마일, 활주로 길이, 기상 같은 비교 요소가 하나도 없습니다. 지문과 ATC 대사에 숫자가 다 주어져 있었습니다. 그리고 ③ **`Give an example of a case where you would keep going instead.` — 5세트 연속 예시를 들지 않았습니다.** 이번에는 \"계속 가는 경우\"라고 조건까지 붙였는데도 비었습니다. 문법 교정 : `it is important as the aircraft important` → `it is as important as the aircraft itself`, `have to go ground and take a rest` → `needed to be on the ground`, `divert suitable airport` → `divert to a suitable airport`."
        ]
      },
      "P2B-Q1": {
        "verdict": "✅",
        "model": "Halston Approach, HL123, descending through flight level 160 for 9,000 feet, information Bravo.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `to` → `for` (경미)",
          "코멘트 : **기관 호출 + 통과고도 + 목표고도 + ATIS.** 네 세트에 걸쳐 가장 안정된 문항 유형이 됐습니다."
        ]
      },
      "P2B-Q2": {
        "verdict": "✅",
        "model": "Descend and maintain 9,000 feet, reduce speed to 220 knots, expect the MERIS ONE arrival, ILS runway 08, altimeter 29.88, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **다섯 요소 전부 정확합니다.** 네 세트 연속으로 이 유형(가장 긴 접근 복창)을 잡고 있습니다 — 안정된 강점입니다."
        ]
      },
      "P2B-Q3": {
        "verdict": "⚠",
        "model": "Halston Approach, HL123, our flaps are jammed at 15 and will not move any further. We need 2,400 metres of landing distance. Maintaining 9,000 feet, request time to work the checklist.",
        "notes": [
          "누락된 필수 readback 요소 : **기관 호출**",
          "표준교신용어 오류 : **`controller` 기관명 오류** (이번 세트 세 번째). `cannot bend over 15 degree` → `are jammed at 15` (표현은 부정확하지만 뜻은 전달됩니다)",
          "코멘트 : **세 가지 요구를 모두 수행했습니다** — 상황·고도 유지·체크리스트 시간 요청. 게다가 필요한 착륙거리까지 미리 밝히고 `request holding` 으로 구체화했습니다. **기관 호출만 고치면 완전한 답입니다.**"
        ]
      },
      "P2B-Q4": {
        "verdict": "⚠",
        "model": "Heading 120, maintain 9,000 feet, HL123. Our intention is to land with flaps 15 — we will need the longest runway available, and we will report when the checklist is complete.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — 기수와 고도 둘 다 정확",
          "표준교신용어 오류 : 없음",
          "코멘트 : **intentions 가 없습니다.** `we will let you know` 는 \"나중에 말하겠다\"는 뜻이고, 관제사는 `Say your intentions when you are ready` 로 **지금** 말하라고 했습니다. 이 문항 유형(복창 + intentions)에서 intentions 가 비는 것은 EPTA_01·02·03 에 이어 **네 세트 연속**입니다."
        ]
      },
      "P2B-Q5": {
        "verdict": "✅",
        "model": "HL123, approach speed 165 knots, and we need 2,400 metres of landing distance.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **두 가지를 다 정확히 답했습니다.** 값도 둘 다 맞습니다."
        ]
      },
      "P2B-Q6": {
        "verdict": "❌",
        "model": "HL123, before we decide — request the current wind on runway 26. We need 2,400 metres, so runway 08 at 2,300 is not enough; if the tailwind on 26 is within our limit we will take runway 26 for the extra length.",
        "notes": [
          "누락된 필수 readback 요소 : **① 결정 전에 알아야 할 것 ② 이유**",
          "표준교신용어 오류 : **판단이 사실과 다릅니다.** 바로 앞 문항에서 본인이 \"2,400m 가 필요하다\"고 답했고, 관제사는 **RWY26 이 3,000m** 라고 말했습니다. 3,000 은 2,400 보다 크므로 RWY26 은 **길이 면에서 충분합니다.** `both are not available` 은 성립하지 않습니다.",
          "코멘트 : 이번 세트에서 가장 무거운 오류입니다. **네 세트 연속으로 \"결정 전에 묻기\"를 못 했고**, 이번에는 거기에 **숫자 비교 실패**가 겹쳤습니다. 2,300 < 2,400 < 3,000 이라는 비교만 하면 답이 나오는 문항이었고, 남은 변수는 배풍 하나였습니다 — 그게 바로 \"결정 전에 물어야 할 것\" 이었습니다."
        ]
      },
      "P2B-Q7": {
        "verdict": "❌",
        "model": "Halston Approach, HL123. The checklist is complete. We see the wind is now 080 at 6, so the tailwind on runway 26 has gone — we will take runway 26, because we need 2,400 metres and runway 08 is only 2,300. Request the fire service standing by.",
        "notes": [
          "누락된 필수 readback 요소 : **① 상황 갱신(체크리스트 완료) ② 올바른 결정**",
          "표준교신용어 오류 : `stand brake equipment` 는 무슨 장비인지 전달되지 않습니다 — `the fire service standing by` 입니다.",
          "코멘트 : **바람을 물은 것은 한 템포 늦은 진전입니다**(앞 문항에서 해야 했던 동작이 여기서 나왔습니다). 그러나 **결정이 반대입니다.** Situation Update 가 \"바람이 바뀌어 **RWY26 의 배풍이 사라졌다**\"고 알려줬는데, 길이가 부족한 **RWY08** 을 고르겠다고 했습니다. 2,300m 활주로에 2,400m 가 필요한 항공기를 넣는 결정입니다. 상황 갱신이 답을 알려주고 있었습니다."
        ]
      },
      "P2B-Q8": {
        "verdict": "❌",
        "model": "Turn right heading 350, descend to 2,500 feet until established, cleared for the ILS runway 26 approach, contact Halston Tower on 120.35, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **① 선회 방향을 `right` 가 아니라 `left` 로 복창했습니다 — 반대 방향입니다.** ② **주파수를 120.35 가 아니라 120.5 로** 복창했습니다.",
          "코멘트 : **접근 허가(`cleard ils 26 app`)를 복창한 것은 세 번째 성공**이고, 고도와 established 도 정확합니다. 그런데 **선회 방향 반대**는 지시와 다르게 기동하는 결과가 됩니다 — 접근 허가를 챙기면서 방향을 놓쳤습니다. 주파수는 네 세트 중 세 번째 오류입니다(118.5/119.75 → 118.1 정확 → 120.5)."
        ]
      },
      "P2B-Q9": {
        "verdict": "❌",
        "model": "HL123, affirm we expect to be able to vacate at the end, and request the fire service to follow us in.",
        "notes": [
          "누락된 필수 readback 요소 : **활주로 이탈 가능 여부 — 두 질문 중 하나를 답하지 않았습니다**",
          "표준교신용어 오류 : 없음",
          "코멘트 : 소방대 요청은 적절합니다. 그런데 관제사가 **`two things`** 라고 말하고 지시문에도 `provide both pieces of information` 이라고 적혀 있었습니다. 활주로 이탈 가능 여부는 **후속 항공기를 언제 접근시킬지**를 결정하는 정보입니다. 이번 세트의 \"두 질문\" 문항 네 개 중 **둘(P1B-Q1, P2B-Q9)에서 절반만** 답했습니다."
        ]
      },
      "P2C-Q1": {
        "verdict": "⚠",
        "model": "On the approach into Halston our flaps jammed at 15 and would not extend any further, so we could not slow down to the normal landing speed. Our approach speed was 165 knots and we needed 2,400 metres of landing distance, which is more than the original runway 08 could give us at 2,300 metres. The controller offered us runway 26 at 3,000 metres, but with a 15 knot tailwind. Then the wind changed to 080 at 6, so the tailwind had gone and we took runway 26, with the fire service standing by.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **원인과 결과의 연결은 정확합니다** — 플랩 고착 때문에 속도를 못 줄여 긴 활주로가 필요하다는 인과를 제대로 썼습니다. 그런데 **사실 두 가지가 틀렸습니다.** ① `the aircraft go to the 08 runway` — 08 은 2,300m 로 부족하고, Situation Update 는 26 의 배풍이 사라졌다고 알려줬습니다. ② **`ambulance` 가 등장합니다** — 구급차는 **Part Ⅱ A 의 응급환자 이야기**이고, 이 사건과는 무관합니다. **두 파트를 섞은 것은 이번에 처음 나온 오류**입니다. 단어 교정 : `retract`(올리다) → `extend`(내리다), `appreciate for controller` → `the controller`, `the wind come normal` → `the wind changed`."
        ]
      },
      "P2C-Q2": {
        "verdict": "⚠",
        "model": "I think the controller handled it well. As soon as we told him the flaps were jammed, he gave us a heading away from the arrivals and time to run the checklist, which was what we needed most. He also laid out both runway options honestly — runway 08 at 2,300 metres and runway 26 at 3,000 with a tailwind — and let us choose, instead of deciding for us. One thing that could have been handled differently is that he could have offered the longer runway first, rather than starting with the runway that was already too short for us. That would have saved us a decision at a busy time.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **`the one thing that he can do different is …` 로 질문 후반부에 답했습니다 — 2세트 연속**입니다. 그리고 관제사를 주어로 평가했습니다(`the controller gave them time`, `the controller gave them some options`) — 세 세트 연속 `we` 로 시작하던 것이 개선됐습니다. 제안 내용(활주로가 충분해도 더 긴 쪽을 쓰게 하는 편이 안전하다)도 의미가 있습니다. 남은 문제는 **사실 오류**입니다 : `divert to another airport` — 관제사가 제시한 것은 **같은 공항의 다른 활주로**였고, 다른 공항 회항은 본인이 P2B-Q6 에서 꺼낸 것입니다. 그리고 **`ambulance` 가 또 나왔습니다**(Part Ⅱ A 혼입). 문장이 길어지면서 깨지는 곳도 많습니다 — `the controller have to make the aircraft go the longer runway to not make any happening` 은 뜻이 전달되지 않습니다."
        ]
      }
    }
  },
  "EPTA_05": {
    "set": "EPTA_05",
    "level": "Level 2",
    "summary": "",
    "gradedAt": "2026-10-27",
    "items": {
      "P1A-Q1": {
        "verdict": "⚠",
        "model": "Follow the Dash 8 ahead, hold short of Delta, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **따라갈 항공기 `the Dash 8`**",
          "표준교신용어 오류 : 없음",
          "코멘트 : `hold short of Delta` 는 정확합니다. 그런데 `follow ahead` 만으로는 **무엇을 따라가는지**가 없습니다. follow 지시는 지상 충돌을 막는 지시라 대상이 핵심입니다 — 앞에 여러 대가 있으면 엉뚱한 기체를 따라갑니다."
        ]
      },
      "P1A-Q2": {
        "verdict": "✅",
        "model": "Cleared for takeoff runway 22, climb to 4,000 feet, report passing 2,000 feet, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음 (`taked off` 는 오탈자로 보고 감점하지 않았습니다)",
          "코멘트 : **두 개의 네 자리 피트 고도(4,000 과 2,000)를 둘 다 정확히** 받았습니다. EPTA_04 에서 `report passing 3,000` 을 8,000 으로 틀린 바로 그 유형입니다."
        ]
      },
      "P1A-Q3": {
        "verdict": "✅",
        "model": "Descend to 3,000 feet, cleared for the ILS runway 09 approach, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 (`caution birds` 는 복창 불필요 — 제외한 판단 정확)",
          "표준교신용어 오류 : 없음. `roger` 뒤가 아니라 앞에 내용이 다 있으므로 단독 오용이 아닙니다 — 다만 불필요합니다",
          "코멘트 : **접근 허가를 복창했습니다.** `approach` 단어가 빠졌지만 `cleared ILS runway 09` 로 허가 복창은 성립합니다."
        ]
      },
      "P1A-Q4": {
        "verdict": "✅",
        "model": "Cleared to Larkin Airport via the DELMA ONE departure, maintain 5,000 feet, squawk 6170, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 (`via`·`Airport` 누락은 경미)",
          "표준교신용어 오류 : 없음",
          "코멘트 : **squawk 6170 을 정확히 복창했습니다.** 6107·6710 으로 뒤집기 쉬운 값을 함정으로 넣은 것인데(같은 세트 P1B-Q5 가 그 상황을 다룹니다) 통과했습니다."
        ]
      },
      "P1B-Q1": {
        "verdict": "❌",
        "model": "Unable to cross TORIN at 11,000, HL123 — we have 40 miles to run and we need 43 miles for that descent. Request descent now, or a speed reduction.",
        "notes": [
          "누락된 필수 readback 요소 : **unable · 사유 · 요청 — 지시문이 요구한 세 가지 전부**",
          "표준교신용어 오류 : **할 수 없는 것을 그대로 복창했습니다.** 이대로면 관제사는 TORIN 을 11,000 으로 통과하겠다는 약속을 받은 것이 되고, 실제로는 못 지킵니다.",
          "코멘트 : 지문이 **43마일 필요 / 40마일 남음** 이라고 두 숫자를 나란히 줬습니다. 43 > 40 이라는 한 줄의 비교만 하면 답이 나오는 문항이었습니다. **EPTA_04 에서 최우선으로 지적한 \"받아적은 숫자를 비교하지 않는다\" 가 그대로 반복됐습니다.**"
        ]
      },
      "P1B-Q2": {
        "verdict": "⚠",
        "model": "Taxi to stand 7 via Golf and Hotel, HL123. And be advised, on final we noticed about four approach lights out on the left side.",
        "notes": [
          "누락된 필수 readback 요소 : **유도로 `Hotel`** — Golf 만 복창했습니다",
          "표준교신용어 오류 : 없음",
          "코멘트 : **복합 지시 두 부분을 모두 수행했고, 등화 개수와 위치까지 정확히** 보고했습니다. `be advised` 로 보고를 연 것도 적절합니다. 고칠 것은 ① 유도로 하나 ② `4 light` 가 어떤 등화인지(approach lights) 밝히는 것입니다."
        ]
      },
      "P1B-Q3": {
        "verdict": "✅",
        "model": "Negative, maintaining 3,000 feet due to terrain caution, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `maintain` → `maintaining` (현재 상태 보고이므로 진행형)",
          "코멘트 : **NEGATIVE + 실제 값 + 사유 세 토막이 다 있습니다. 세 세트 연속 유지**입니다 — 이 패턴은 완전히 몸에 붙었다고 봅니다."
        ]
      },
      "P1B-Q4": {
        "verdict": "✅",
        "model": "Negative, HL123 — it is a dark night with no horizon and we are not familiar with the terrain east of the field. Request vectors for the ILS.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `are you able ~?` 는 **AFFIRM/NEGATIVE** 질문입니다. `unable` 도 뜻은 통하지만 첫 단어는 `Negative` 가 표준입니다.",
          "코멘트 : **unable + 사유 + 대안 세 토막을 갖췄고 `request vectors` 로 대안이 구체적**입니다. 다만 사유가 절반입니다 — 지문의 핵심은 \"어두운 밤, 수평선 없음\"인데 `not familiar with this airport` 만 썼습니다. 야간 시각참조 부재가 시각접근을 거부하는 본질적 이유입니다."
        ]
      },
      "P1B-Q5": {
        "verdict": "✅",
        "model": "HL123, correction — we had 6107 set by mistake. Now squawking 6170.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **잘못 넣은 값 6107 을 말했습니다.** EPTA_04 에서 `we set another squawk by mistake` 로 뭉개 관제사가 화면과 대조할 수 없었던 문항입니다 — **해결**."
        ]
      },
      "P1B-Q6": {
        "verdict": "⚠",
        "model": "Southgate Control, HL123, we have 50 minutes of fuel on board and our alternate needs 30, so 20 minutes of holding would leave us no reserve. Request holding reduced to 10 minutes, or priority for the approach.",
        "notes": [
          "누락된 필수 readback 요소 : **① 기관 호출 `Southgate Control` ② 문제의 근거(대체공항 30분 때문에 예비가 0 이 된다)**",
          "표준교신용어 오류 : 없음",
          "코멘트 : **비교를 일부 해냈습니다** — 홀딩을 20분에서 10분으로 줄여달라는 요청은 계산의 결과입니다. 그런데 **왜 20분이 안 되는지**를 말하지 않아 관제사는 근거 없는 요청으로 받습니다. 50 − 20 = 30 이고 대체공항이 30분이면 예비가 0 이라는 한 문장이 있어야 요청이 성립합니다. 조종사가 먼저 부르는 문항인데 기관 호출도 빠졌습니다."
        ]
      },
      "P2A-Q1": {
        "verdict": "❌",
        "model": "Southgate Control, HL123, level at flight level 340, 120 miles from TORIN, request descent.",
        "notes": [
          "누락된 필수 readback 요소 : **위치(TORIN 까지 120마일)**",
          "표준교신용어 오류 : **고도를 FL340 이 아니라 FL350 으로** 말했습니다. 값 오류입니다. `maintain` → `level at` (상태 보고 동사)",
          "코멘트 : 기관 호출과 요청은 정확합니다. 그런데 **자기 고도를 틀리게 보고하면** 관제사의 분리 계산이 어긋납니다. 지문 첫 줄에 FL340 이 적혀 있었습니다."
        ]
      },
      "P2A-Q2": {
        "verdict": "⚠",
        "model": "Descend to flight level 240, expect 10 minutes of holding at TORIN, HL123. What will that do to our arrival time? We have a curfew at 2300.",
        "notes": [
          "누락된 필수 readback 요소 : **도착시각 문의** — 지시문의 뒷부분입니다",
          "표준교신용어 오류 : 없음",
          "코멘트 : 복창은 정확합니다. 그런데 이 문항은 **커퓨 2300 에 도착예정 2252 인 상황에서 10분 홀딩을 통보받은 것**입니다. 물어야 할 이유가 지문에 깔려 있었고 지시문도 `inquire` 라고 적혀 있었습니다."
        ]
      },
      "P2A-Q3": {
        "verdict": "❌",
        "model": "Southgate Control, HL123 — 10 minutes of holding would put us at 2302, and Larkin takes no landings after 2300. Request direct TORIN with no holding, or priority for the approach.",
        "notes": [
          "코멘트 : **Level 1.** 이 문항이 이번 세트의 **최우선 타깃**이었습니다 — 도착예정 2252 + 홀딩 10분 = 2302 이고 커퓨가 2300 이므로 2분 초과입니다. 세 숫자를 비교하면 답이 나오고, 그 비교를 말하는 것이 곧 \"이유\"였습니다. 비우면 그 연습이 통째로 사라집니다.",
          "뼈대 : `(기관) + (콜사인) + 홀딩하면 몇 시가 된다 + 커퓨는 몇 시다 + 그래서 못 내린다` → `request (대안 1), or (대안 2)`. **숫자 두 개(2302 / 2300)를 나란히 말하는 것이 곧 사유**입니다. 대안은 둘 다 댈 필요는 없고 하나면 됩니다."
        ]
      },
      "P2A-Q4": {
        "verdict": "✅",
        "model": "Larkin Approach, HL123, descending through flight level 180 for 11,000 feet.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **기관 호출 + FL 통과고도 + 피트 목표고도.** 두 단위를 정확히 구분했습니다 — 세 세트 연속 안정적입니다."
        ]
      },
      "P2A-Q5": {
        "verdict": "✅",
        "model": "Descend to 4,000 feet, reduce speed to 200 knots, expect the TORIN TWO arrival, ILS runway 09, altimeter 30.04, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **다섯 요소 전부 정확합니다.** 네 세트 연속으로 이 유형을 잡고 있습니다."
        ]
      },
      "P2A-Q6": {
        "verdict": "❌",
        "model": "HL123 — before I answer, how many minutes would that slowdown cost us? Our estimate is 2251 and the curfew is 2300, so we have about nine minutes in hand. If the delay is more than that, we will need your priority.",
        "notes": [
          "뼈대 : `before I answer / before we decide, + (물어야 할 값)?` → 그다음 `우리 숫자는 이렇다` → `그보다 크면 (요청)`. **물어야 할 값은 \"감속하면 몇 분 늦어지는가\" 하나**입니다. 관제사가 이미 `tell me now and I will give you priority` 로 답을 깔아줬으니, 물어보고 숫자를 비교해 말하면 끝입니다.",
          "코멘트 : **Level 1.** **\"결정 전에 묻기\" 는 EPTA_02·03·04 에서 세 세트 연속 실패한 항목**이고, 이번에 그것을 겨냥해 넣은 문항입니다. 게다가 관제사가 `tell me now and I will give you priority` 로 **먼저 길을 열어줬습니다** — 감속하면 몇 분 늦어지는지만 물으면 우선권을 받을 수 있었습니다. 가장 아까운 한 문항입니다."
        ]
      },
      "P2A-Q7": {
        "verdict": "✅",
        "model": "Cleared for the ILS runway 09 approach, maintain 180 knots to 4 miles, contact Larkin Tower on 119.45, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : `to 4 miles` 범위 (경미)",
          "표준교신용어 오류 : 없음",
          "코멘트 : **접근 허가 + 속도 + 기관명 + 주파수 119.45 전부 정확합니다.** 주파수는 네 세트 중 세 번 틀렸던 항목인데 이번엔 맞았습니다."
        ]
      },
      "P2A-Q8": {
        "verdict": "❌",
        "model": "Larkin Tower, HL123, established on the ILS runway 09, passing 1,800 feet, request landing.",
        "notes": [
          "누락된 필수 readback 요소 : **① 위치(ILS 09 안착) ② 의도(착륙 요청)**",
          "표준교신용어 오류 : **1,800 피트를 18000 으로** 말했습니다. 0 하나가 붙어 **1,800 과 18,000** 이 됩니다 — 착륙 직전과 순항 강하의 차이입니다.",
          "코멘트 : 기관 호출은 했습니다. 그런데 P1A-Q2 에서 2,000 피트를 정확히 받은 같은 세트에서 이 값을 놓쳤습니다. 네 자리 피트는 `1800` 처럼 **쉼표 없이 네 자리로 적고 자릿수를 한 번 더 확인**하세요."
        ]
      },
      "P2A-Q9": {
        "verdict": "⚠",
        "model": "Cleared to land runway 09, HL123, and after landing we will taxi via Kilo. How long will that taxi take?",
        "notes": [
          "누락된 필수 readback 요소 : **지상 이동 소요시간 문의** — 지시문의 뒷부분",
          "표준교신용어 오류 : 없음 (`toi` 는 오탈자)",
          "코멘트 : 착륙 허가와 우회 경로는 정확히 복창했고 바람도 제외했습니다. 문의가 빠졌습니다 — 커퓨가 걸린 상황이라 지상 이동이 길어지는 것도 운항에 영향을 줍니다. **이 세트에서 `inquire` 지시가 세 번(P2A-Q2·Q6·Q9) 나왔고 세 번 다 하지 않았습니다.**"
        ]
      },
      "P2A-Q10": {
        "verdict": "❌",
        "model": "세 부분을 순서대로 :\n① **롤플레이에서 왜 그랬는지** : \"The problem was that my estimate for Larkin was already 2252, and the curfew closes the airport at 2300. Ten minutes of holding would have put me at 2302, so I would have arrived two minutes after the airport closed and I would not have been allowed to land. So I told the controller that the holding would take us past the curfew, and I requested direct TORIN with no holding, or priority for the approach.\"\n② **조종사로서 일반적으로 어떻게 하는지** : \"In my role as a pilot, when I am running late towards a curfew, the first thing I do is work out the latest time I can still accept a delay and land. Then I give ATC that number early, before the delay happens, because once I am in the hold it is too late to negotiate. At the same time I check my fuel and my alternate, so if the curfew cannot be met I already know where I am going instead of deciding under pressure.\"\n③ **예시로 닫기** : \"For example, on a night flight to an airport with a 2300 curfew, if I were given twenty minutes of holding and my fuel allowed only ten, I would not press on hoping the curfew would be waived. I would divert to my alternate while I still had the fuel for a full approach there. Pressing on in that situation turns a scheduling problem into a fuel emergency, and that is never worth it.\"",
        "notes": [
          "뼈대 : `The problem was that ...` → `In my role as a pilot, ...` → `For example, ...`. **이 세 문두만 외워 두면 90초가 채워집니다.** ①은 문제에 나온 숫자(2252 / 10분 / 2300)를 그대로 쓰면 되고, ③은 경험이 없어도 **가정 예시(`if I were ...`)로 답해도 정답**입니다.",
          "코멘트 : **Level 1.** 90초 자유응답은 Fluency·Structure·Vocabulary 를 한꺼번에 보는 문항이고 배점이 가장 큽니다. EPTA_01 1차 이후 처음 나온 Follow-up 무응답입니다. 할 말이 떠오르지 않아도 \"홀딩 10분이면 2302 가 되어 커퓨를 넘는다\" 한 문장만 말하면 0 은 면합니다. **침묵이 가장 낮은 점수입니다.**"
        ]
      },
      "P2B-Q1": {
        "verdict": "✅",
        "model": "Ashford Approach, HL123, descending through flight level 140 for 8,000 feet, information Mike.",
        "notes": [
          "누락된 필수 readback 요소 : ATIS Mike (있으면 좋지만 필수는 아닙니다)",
          "표준교신용어 오류 : `to` → `for` (경미)",
          "코멘트 : 기관 호출과 두 고도값이 정확합니다."
        ]
      },
      "P2B-Q2": {
        "verdict": "✅",
        "model": "Descend and maintain 8,000 feet, reduce speed to 210 knots, expect the VESPA ONE arrival, ILS runway 15, altimeter 29.76, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **다섯 요소 전부 정확.** 한 세트에서 이 유형을 두 번(P2A-Q5, P2B-Q2) 완전히 잡았습니다."
        ]
      },
      "P2B-Q3": {
        "verdict": "✅",
        "model": "Ashford Approach, HL123, we have a nose gear unsafe indication. Maintaining 8,000 feet, request holding while we work the checklist.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **세 가지 요구를 모두 수행했습니다**",
          "표준교신용어 오류 : `maintain` → `maintaining` (경미)",
          "코멘트 : **기관 호출을 했습니다.** `controller` 를 호출부호로 쓰던 오류가 EPTA_02·03·04 세 세트 연속이었는데 **이번에 해결**됐습니다. 상황·고도·요청 세 요소가 다 있습니다."
        ]
      },
      "P2B-Q4": {
        "verdict": "⚠",
        "model": "Holding at VESPA, left turns, maintain 8,000 feet, HL123. Our intention is to work the checklist, then request a low pass for a visual check of the nose gear before we commit to landing.",
        "notes": [
          "누락된 필수 readback 요소 : **intentions**",
          "표준교신용어 오류 : 없음",
          "코멘트 : 복창은 정확합니다(홀딩 지점·선회 방향·고도). 그런데 **intentions 가 다섯 세트 연속 빠졌습니다** — EPTA_01 `ready` → 02 `report ready` → 03 `direct kimhae airport` → 04 \"나중에 말하겠다\" → 05 아예 없음. 관제사가 `Say your intentions when you are ready` 라고 명시한 문항입니다."
        ]
      },
      "P2B-Q5": {
        "verdict": "⚠",
        "model": "HL123, fuel endurance one hour 10 minutes, 186 passengers and 9 crew, 195 souls on board.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **두 가지를 다 답했습니다**",
          "표준교신용어 오류 : **승객이 186 이 아니라 180 입니다** (승무원 9 는 정확)",
          "코멘트 : **구조는 해결됐습니다.** EPTA_03 에서 souls on board 를 통째로 빠뜨리고 EPTA_04 에서 178→70 으로 틀려 두 세트 연속 실패한 항목인데, 이번엔 두 항목을 다 말했고 연료도 분 단위까지 정확합니다. 남은 것은 숫자 하나입니다 — 탑승 인원은 소방·구조 규모를 정하는 값이라 정확해야 합니다."
        ]
      },
      "P2B-Q6": {
        "verdict": "❌",
        "model": "HL123, before we decide — request the weather at Brampton and whether their fire service is available. We have 70 minutes of fuel, so the low pass and re-approach at 25 minutes total is well inside that, and we would rather confirm the gear here than divert. Request the low pass.",
        "notes": [
          "누락된 필수 readback 요소 : **의도 진술과 이유 — 지시문의 뒷부분 전부**",
          "표준교신용어 오류 : 없음",
          "코멘트 : **묻는 동작 자체는 나왔습니다** — 세 세트 연속 못 했던 것이라 그 부분은 진전입니다. 그런데 **물은 내용이 이 상황의 변수가 아닙니다.** 기수 기어 문제에서 Brampton 의 활주로 길이는 판단 요소가 아닙니다(기어가 안 내려가면 길이로 해결되지 않습니다). 필요한 정보는 Brampton 의 기상이나 소방대 가용 여부입니다. 그리고 **잔여 70분 vs 저속통과+재접근 25분 vs 대체 35분** 이라는 세 숫자가 주어졌는데 비교가 없고 결정도 없습니다."
        ]
      },
      "P2B-Q7": {
        "verdict": "⚠",
        "model": "Ashford Approach, HL123. The tower reports the nose gear looks down and in place after the low pass, and we now have 55 minutes of fuel. We will land at Ashford — request the ILS runway 15 with the fire service standing by.",
        "notes": [
          "누락된 필수 readback 요소 : **① 기관 호출 ② 상황 갱신(저속통과 결과와 잔여 연료)**",
          "표준교신용어 오류 : **`visual approach` 는 이 상황에 맞지 않습니다.** 원래 ILS 15 로 복귀하는 맥락이고, 시각접근을 요청할 이유가 없습니다.",
          "코멘트 : 결정(Ashford 착륙)과 소방대 요청은 적절합니다. 빠진 것은 **갱신**입니다 — 저속통과에서 기어가 내려간 것으로 보인다는 사실이 바로 착륙을 결정한 근거인데, 그걸 말하지 않으면 관제사는 왜 갑자기 착륙하겠다는지 모릅니다."
        ]
      },
      "P2B-Q8": {
        "verdict": "✅",
        "model": "Turn left heading 180, descend to 2,500 feet until established, cleared for the ILS runway 15 approach, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음 (`leftrun` 은 `left turn` 오탈자)",
          "코멘트 : **선회 방향·기수·고도·established·접근 허가 전부.** EPTA_04 에서 이 유형에서 선회 방향을 빠뜨렸는데 이번엔 넣었고, 접근 허가도 유지했습니다. **접근 허가 복창은 두 세트 연속 안정적입니다.**"
        ]
      },
      "P2B-Q9": {
        "verdict": "⚠",
        "model": "HL123, we do not expect to stop on the runway, and we would like the fire service following us.",
        "notes": [
          "누락된 필수 readback 요소 : **활주로 정지 여부 — 두 질문 중 하나**",
          "표준교신용어 오류 : 없음",
          "코멘트 : 소방대 쪽은 \"following\" 으로 분명히 답했습니다. 그런데 **활주로에 정지할지 여부를 빠뜨렸습니다** — EPTA_04 P2B-Q9 와 똑같은 실패입니다. 그 답에 따라 타워가 후속 항공기를 언제 접근시킬지가 달라집니다. 관제사가 `two things` 라고 세어줬습니다."
        ]
      },
      "P2C-Q1": {
        "verdict": "⚠",
        "model": "During the approach we were getting ready for landing, so we extended the gear, but the nose gear indication showed unsafe. We recycled the gear and used the alternate system and it still showed unsafe. We informed the controller of our situation and requested holding, and we also passed our fuel endurance and souls on board. The controller gave us some options — landing at another airport, or a low pass for a visual check at the original airport. We chose the visual check, and after that we decided to land at the original airport using the ILS, with the fire service following us after landing.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **전개를 거의 다 담았습니다** — 기어 전개, 표시 이상, 상황 통보, 홀딩 요청, 연료·SOB 보고, 두 선택지, 저속통과 선택, ILS 착륙, 소방대. 그리고 **EPTA_04 에서 다른 파트(구급차)를 섞어 넣었던 문제가 이번엔 없습니다.** 비행 단계도 `approach phase` 로 맞게 썼습니다(EPTA_03 에서는 상승 중을 접근 중으로 틀렸습니다). 빠진 것은 **재순환·대체 전개를 시도했는데도 안 됐다는 조치**입니다 — 그게 사건의 심각도를 정합니다. 문법 교정 : `extract the gear` → `extended the gear`(extract 는 추출), `seems to strange that the indication indicate something problem` → `the nose gear indication showed unsafe`, `we are ready` → `we were getting ready`(시제), `the atc inform us` → `the controller gave us`."
        ]
      },
      "P2C-Q2": {
        "verdict": "⚠",
        "model": "I think the controller handled it well. As soon as we told him the nose gear indication was unsafe, he gave us holding at VESPA so we could work the checklist, and then he laid out both options — a low pass for a visual check, or a diversion to Brampton — and let us choose. One thing that could have been handled differently is the diversion option: Brampton was 35 minutes away, and with 70 minutes of fuel that was possible but it would have left us thin, so I would rather he had offered the low pass first. He could also have had the fire service in position earlier instead of waiting for us to ask.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **`one thing that i want to handle different is …` 로 질문 후반부에 답했습니다 — 세 세트 연속**입니다. 그리고 **숫자를 근거로 들었습니다**(`because it takes 35min`) — 이번 세트가 겨냥한 \"숫자로 판단하기\" 가 여기서는 나왔습니다. 다만 **판단이 틀렸습니다** : 연료 70분에 대체 35분이면 불가능하지 않습니다. \"충분하지 않다\"가 아니라 \"여유가 얇아진다\"가 맞습니다. 그리고 첫 문장이 `I think this happen handled well` 로 시작해 곧바로 `as pilot, they did…` 로 **조종사를 평가**합니다 — 질문은 관제사를 묻습니다(**세 세트 연속 같은 패턴**). 마지막 `her name is Jeff pushing all that we should get it` 은 문맥과 무관한 문장입니다 — 입력 사고로 보고 채점에서 제외했습니다. 문법 교정 : `they inform their situation to controller is the best thing what they do` → 문장이 성립하지 않습니다, `braking equipment` → 무슨 장비인지 전달되지 않습니다."
        ]
      }
    }
  },
  "EPTA_06": {
    "set": "EPTA_06",
    "level": "Level 2",
    "summary": "",
    "gradedAt": "2026-10-28",
    "items": {
      "P1A-Q1": {
        "verdict": "✅",
        "model": "Holding position, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **교통정보를 복창에서 제외한 판단이 정확합니다.** 핵심 동작(hold position)만 짧게 받았습니다. 네 세트 연속 이 판단은 안정적입니다."
        ]
      },
      "P1A-Q2": {
        "verdict": "⚠",
        "model": "Cleared to Kingsbury via the SONTEL TWO departure, RIKAS transition, climb to 6,000 feet, squawk 4703, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **5요소(목적지·SID·transition·고도·squawk) 구조를 모두 잡았습니다**",
          "표준교신용어 오류 : `clear` → `cleared` (CLAUDE.md §6-1-1 에서 오탈자 예외에 해당하지 않는 항목입니다. 네 세트째 반복됩니다). 웨이포인트명 **`SONTEN`→SONTEL, `raken`→RIKAS** — 소리 내어 읽어도 다른 단어가 되므로 오탈자로 보지 않았습니다",
          "코멘트 : 이 세트에서 가장 긴 지시(16단어)인데 **squawk 4703 과 6,000 피트를 둘 다 정확히** 받았습니다. 숫자는 잡고 **고유명사가 흐려지는** 양상입니다. SID 명과 transition 명은 비행로 허가의 일부라 필수 복창 항목이고, 관제사가 이름으로 경로를 확인하므로 음절 단위로 받아 적으세요."
        ]
      },
      "P1A-Q3": {
        "verdict": "⚠",
        "model": "Expedite climb until passing flight level 180, then climb to flight level 310, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **`until passing`**",
          "표준교신용어 오류 : 없음 (`experdite` 는 오탈자)",
          "코멘트 : 두 고도값(FL180·FL310)은 정확합니다. 빠진 것은 **조건**입니다. `expedite climb FL180` 은 \"FL180 까지 신속 상승\"인지 \"FL180 을 신속히 통과\"인지 구분되지 않습니다. `until passing` 이 있어야 **어디까지 신속 상승이 유효한지**가 정해집니다. 조건부 지시는 조건 자체가 복창 대상입니다."
        ]
      },
      "P1A-Q4": {
        "verdict": "✅",
        "model": "Descend to 2,500 feet, cleared for the ILS runway 33 approach, report established, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `descent`(명사) → `descend`(동사). 경미하나 반복됩니다",
          "코멘트 : **접근 허가 + 고도 + 향후 보고 약속 세 요소 전부.** 접근 허가 복창은 **세 세트 연속 유지**입니다 — EPTA_01~03 에서 세 세트 연속 실패했던 항목이 완전히 자리잡았습니다."
        ]
      },
      "P1B-Q1": {
        "verdict": "✅",
        "model": "Unable to cross MAGRU at 1405, HL123 — at present speed MAGRU is 18 minutes ahead, so our estimate is 1410. Request higher speed.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **unable + 사유 + 요청 세 토막이 다 있습니다**",
          "표준교신용어 오류 : `request increase speed` — **REQUEST 뒤에는 명사구**가 옵니다(`request higher speed` / `request a speed increase`). `increase speed` 는 동사구입니다",
          "코멘트 : **숫자 비교를 해냈습니다.** 2세트 연속 최우선 약점이었던 항목입니다 — EPTA_05 P1B-Q1 에서는 똑같은 구조(43마일 필요 / 40마일 남음)를 그대로 복창해 못 할 것을 수락했는데, 이번에는 못 한다고 말하고 사유로 숫자를 댔습니다. 한 가지만 더 하면 완전합니다 : **계산 결과(1410)를 말하는 것**. \"18분 걸린다\"까지만 말하면 관제사가 1352 에 더해봐야 합니다. `so our estimate is 1410` 한 토막이 붙으면 관제사는 바로 판단할 수 있습니다."
        ]
      },
      "P1B-Q2": {
        "verdict": "✅",
        "model": "Climbing to flight level 190, HL123. And be advised, just after departure we saw a flock of large birds at about 2,000 feet, just north of the runway.",
        "notes": [
          "누락된 필수 readback 요소 : 없음. 보고에서 **위치(활주로 북쪽)** 가 빠졌습니다",
          "표준교신용어 오류 : 없음. `be advised` 로 보고를 연 것이 적절합니다",
          "코멘트 : **복합 지시 두 부분을 모두 수행했습니다.** 고도 FL190 과 조류 고도 2,000 피트를 섞지 않은 것도 정확합니다. 다만 조류 보고는 **위치가 핵심**입니다 — 관제사는 그 정보로 다른 항공기에 경고를 주고 공항에 조류 퇴치를 요청하므로, 어느 방향 몇 피트인지가 함께 가야 쓸 수 있는 정보가 됩니다."
        ]
      },
      "P1B-Q3": {
        "verdict": "✅",
        "model": "Negative, maintaining 180 knots due to moderate turbulence, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `maintain` → `maintaining` (현재 상태 보고이므로 진행형)",
          "코멘트 : **NEGATIVE + 실제 값 + 사유 세 토막. 네 세트 연속 유지**입니다. 이 패턴은 더 지적할 것이 없습니다."
        ]
      },
      "P1B-Q4": {
        "verdict": "⚠",
        "model": "Negative, HL123 — we are high and fast and we need about 18 miles of track. Request vectors for a longer final.",
        "notes": [
          "누락된 필수 readback 요소 : **① 사유의 절반(고도가 높다) ② 숫자 비교(12마일 남음 vs 18마일 필요)**",
          "표준교신용어 오류 : `request decrease speed` — **REQUEST 뒤 동사구**(이 세트 두 번째). 그리고 **요청 대상이 틀렸습니다** — 속도를 줄이는 것은 조종사가 하는 일이고, 관제사에게 요청할 것은 **track miles**(vectors)입니다",
          "코멘트 : **`are you able ~?` 에 `Negative` 로 답한 것은 개선입니다** — EPTA_05 P1B-Q4 에서는 `unable` 로 시작해 지적했던 항목입니다. 남은 문제는 **대안이 상황을 해결하지 못한다**는 것입니다. 12마일밖에 없는데 18마일이 필요하면 부족한 것은 **거리**입니다. 속도를 줄여도 활주로가 가까워지는 것은 막을 수 없습니다. 지문이 두 숫자를 나란히 줬으니 `we need about 18 miles and we only have 12` 를 말하면 사유와 요청이 한 번에 성립합니다."
        ]
      },
      "P1B-Q5": {
        "verdict": "⚠",
        "model": "HL123, we were cleared to flight level 200. Correction — we had flight level 220 set in the altitude window by mistake. Now descending back to flight level 200.",
        "notes": [
          "누락된 필수 readback 요소 : **질문에 대한 직접 답** — `say your cleared level` 은 \"허가받은 고도를 말하라\"입니다. `we were cleared to flight level 200` 이 먼저 나와야 합니다",
          "표준교신용어 오류 : **`altimeter` 오용 재발.** `altimeter` 는 **고도계 기압 설정**(29.92 같은 값)이고, FL220 을 넣은 곳은 **altitude window**(고도 선택창)입니다. EPTA_01 재응시에서 똑같은 혼동을 지적했던 항목입니다",
          "코멘트 : **틀린 값(FL220)과 정정 조치(FL200 으로 강하)를 둘 다 말했습니다** — 정정 3단 구조는 EPTA_05 에서 완성한 뒤 유지되고 있습니다. 이번에 빠진 것은 **관제사가 물은 것에 먼저 답하는 것**입니다. 관제사는 레이더에 FL205 가 보여서 \"너는 어디까지 허가받았나\"를 확인하는 중입니다. 그 답(FL200)이 나오기 전에 변명이 먼저 나오면 관제사는 한 번 더 물어야 합니다."
        ]
      },
      "P1B-Q6": {
        "verdict": "❌",
        "model": "Arlen Ground, HL123 — we have been waiting 25 minutes and we were told to expect 10. Our crew duty time requires us to be airborne by 1430, it is now 1410, and the taxi takes 12 minutes. Request priority for departure.",
        "notes": [
          "누락된 필수 readback 요소 : **근무시간 1430 · 현재 1410 · 유도 12분 — 문제의 근거 세 숫자 전부**",
          "표준교신용어 오류 : 기관 호출이 `ground` 뿐입니다 → `Arlen Ground`. `request for departure` — REQUEST 뒤 전치사구(이 세트 세 번째)",
          "코멘트 : **두 숫자를 뒤집었습니다.** 실제로 기다린 시간은 **25분**이고 10분은 관제사가 예상한다고 말한 시간인데, 답안은 \"10분 기다렸다\"가 됐습니다. 그러면 문제가 성립하지 않습니다 — 10분 기다린 것은 정상입니다. 그리고 **이 문항의 전부인 근무시간 계산이 통째로 없습니다.** 1430 − 1410 = 20분이 남았고 유도에 12분이 걸리니 **8분 안에 출발해야** 합니다. 그 한 줄이 \"왜 우선권을 달라는지\"를 만듭니다. 요청도 `request priority for departure` 처럼 **무엇을 달라는지** 명시해야 합니다."
        ]
      },
      "P2A-Q1": {
        "verdict": "✅",
        "model": "Arlen Ground, HL123, Gate Bravo 4, request pushback, information Quebec.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음 (`Q` = Quebec 은 §6-1-1 에 따라 감점하지 않았습니다)",
          "코멘트 : **기관명·게이트·요청·정보문자 네 요소 전부.** `request pushback` 은 REQUEST + 명사구로 정확합니다 — 같은 세트의 Q1·Q4·Q6 에서 동사구를 붙인 것과 비교하면, **알고 있는데 복잡한 문항에서 흐트러지는** 양상입니다."
        ]
      },
      "P2A-Q2": {
        "verdict": "⚠",
        "model": "Pushback approved, face south, HL123 — we will hold until the A220 at Bravo 2 is clear, and we will call you when we are moving.",
        "notes": [
          "누락된 필수 readback 요소 : **① `face south`(푸시백 방향) ② `give me a call when you're moving` 에 대한 응대**",
          "표준교신용어 오류 : 없음",
          "코멘트 : 푸시백 승인과 대기는 받았습니다. **푸시백 방향은 반드시 복창해야 합니다** — 기수를 어디로 돌리느냐가 뒤쪽 항공기와의 충돌 여부를 정합니다. 그리고 이 턴은 **구어체 ATC 를 이해했는지 보는 턴**이었습니다(`give me a call when you're moving`). 관제사가 요청한 후속 행동에 `we will call you when we are moving` 또는 `wilco` 로 답하지 않으면, 관제사는 호출을 기다리는지 아닌지 알 수 없습니다. 지시문의 `tell him what you will do` 가 그것을 가리켰습니다."
        ]
      },
      "P2A-Q3": {
        "verdict": "✅",
        "model": "Arlen Ground, HL123 — our slot is 1340 and it is now 1318, so we only have 22 minutes, and a 28-minute taxi would put us past it. Request a shorter routing or an earlier departure.",
        "notes": [
          "누락된 필수 readback 요소 : **기관 호출 `Arlen Ground`** — 조종사가 먼저 부르는 턴입니다",
          "표준교신용어 오류 : 없음",
          "코멘트 : **1340 − 1318 = 22분을 직접 계산해서 28분과 비교했습니다.** 이번 세트에서 가장 잘한 문항입니다. EPTA_04·05 에서 두 세트 연속 최우선이던 \"받아적은 숫자를 비교하지 않는다\"가 여기서는 완전히 해결됐습니다 — 주어진 숫자를 그대로 읽은 것이 아니라 **뺄셈을 해서 새로운 숫자를 만들어** 말했습니다. 남은 것은 기관 호출 하나입니다. 발신 턴에서 호출을 생략하는 것은 EPTA_05 에서도 2건 있었습니다."
        ]
      },
      "P2A-Q4": {
        "verdict": "✅",
        "model": "HL123 — before we decide, request the current wind. Our information Quebec is 25 minutes old and our tailwind limit is 10 knots.",
        "notes": [
          "누락된 필수 readback 요소 : **배풍한계 10kt** — 왜 바람을 알아야 하는지를 정하는 값입니다",
          "표준교신용어 오류 : 없음. `request latest information` 은 REQUEST + 명사구로 정확합니다",
          "코멘트 : **\"결정 전에 묻기\"를 처음으로 정상 수행했습니다.** EPTA_02·03·04·05 에서 **네 세트 연속 실패**한 항목입니다 — 지금까지는 묻지 않고 바로 결정하거나(02·03·04), 상황과 무관한 것을 묻거나(05), 비웠습니다(05). 이번에는 **묻는 동작 + 묻는 이유**가 다 있습니다. 더 정확하게 하려면 필요한 값 하나(**현재 바람**)로 좁히고, 배풍한계 10kt 를 함께 말하면 관제사가 \"7kt 다\"라고 답할 때 바로 판단이 끝납니다."
        ]
      },
      "P2A-Q5": {
        "verdict": "❌",
        "model": "HL123 — 7 knots of tailwind is inside our limit of 10, so we will take runway 06. The 9-minute taxi also keeps us inside our slot.",
        "notes": [
          "누락된 필수 readback 요소 : **① 결정의 이유 ② 7kt 와 10kt 비교**",
          "표준교신용어 오류 : 없음",
          "코멘트 : **이 세트에서 가장 중요한 오류입니다. 바로 전 문항에서 자기가 물어서 받은 답을 쓰지 않았습니다.**"
        ]
      },
      "P2A-Q6": {
        "verdict": "❌",
        "model": "Taxi to runway 06 via Charlie and Foxtrot, hold short of Foxtrot 1, contact Arlen Tower on 118.35, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — 구조는 전부 받았습니다",
          "표준교신용어 오류 : **활주로를 06 이 아니라 26 으로** 복창했습니다. **사용활주로는 필수 복창 7항목**(`atc-terminology.md` §2)이고, 이 공항에는 26 이라는 활주로가 아예 없습니다(06/24)",
          "코멘트 : 유도로 경로·hold short 지점·기관명·**주파수 118.35** 가 모두 정확합니다. 주파수는 EPTA_05 에 이어 두 세트 연속 정확합니다. 틀린 것은 활주로 번호 하나인데, 그 하나가 **잘못된 활주로로 유도되는** 결과를 만듭니다. 바로 전 문항(Q5)에서 24 를 말했기 때문에 머릿속에 24 가 남아 **06 과 24 가 섞여 26 이 된** 것으로 보입니다. 활주로가 바뀌는 상황에서는 **새 활주로 번호를 따로 적어 두고** 복창 전에 그것만 확인하세요."
        ]
      },
      "P2A-Q7": {
        "verdict": "❌",
        "model": "Number two, after the Saab 340 on short final, line up and wait runway 06, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **이 문항의 내용 전부** — `number two` · `after the Saab 340` · `line up and wait`",
          "표준교신용어 오류 : **`line up and wait`(활주로 진입 후 대기)를 `cleared for takeoff`(이륙 허가)로 바꿔 말했습니다**",
          "코멘트 : 지시문 문구(`listen to the Tower and give a full read back`)가 답안에 들어가 있고 내용이 **다음 문항(Q8)의 이륙 허가**이므로, 음성인식이나 입력 사고로 보입니다. 다만 결과적으로 나온 교신은 **허가받지 않은 이륙을 복창한 것**이 됩니다. `line up and wait` 와 `cleared for takeoff` 의 혼동은 **활주로 침입·허가 없는 이륙**으로 이어지는 가장 위험한 혼동이라, 사고였다 해도 그대로 감점했습니다. 녹음 후 답안 칸을 한 번 확인하세요 — 같은 사고가 다시 나면 실제 시험에서는 확인할 기회가 없습니다."
        ]
      },
      "P2A-Q8": {
        "verdict": "✅",
        "model": "Cleared for takeoff runway 06, climb to 3,000 feet, report passing 1,800 feet, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `cleared to take off` → **`cleared for takeoff`**. `takeoff` 는 이륙 허가에만 쓰는 한 단어이고, 그 밖에서는 `departure` 를 씁니다",
          "코멘트 : **네 자리 피트 두 개(3,000 과 1,800)를 둘 다 정확히 받았습니다.** EPTA_05 P2A-Q8 에서 1,800 피트를 18000 으로 쓴 것이 최우선 약점이었고, 이번 세트에 그 드릴로 넣은 문항입니다 — **해결**. 활주로 06 도 여기서는 정확합니다(Q6 에서는 26 이었습니다)."
        ]
      },
      "P2A-Q9": {
        "verdict": "❌",
        "model": "Arlen Departure, HL123, passing 1,800 feet climbing to 3,000, request further climb.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **통과고도를 1,800 이 아니라 3000 으로** 보고했습니다. 3,000 은 **아직 도달하지 않은 목표고도**입니다. 그리고 `request climb to fl180` 의 FL180 은 **지문에 없는 값**입니다 — 지시문은 `request further climb` 입니다",
          "코멘트 : 기관 호출은 정확합니다. 문제는 **바로 전 문항(Q8)에서 1,800 과 3,000 을 정확히 복창했는데 여기서 뒤집었다**는 것입니다. 복창할 때는 맞히고 **스스로 보고할 때 틀리는** 패턴입니다. 위치보고에서 `passing X for Y` 는 **X = 지금 지나는 고도, Y = 가는 곳**으로 고정입니다. 그리고 지시문에 없는 고도를 지어내지 마세요 — `request further climb` 는 \"더 올라가게 해달라\"이고, 얼마나 올려줄지는 관제사가 정합니다."
        ]
      },
      "P2A-Q10": {
        "verdict": "⚠",
        "model": "Climb to flight level 190, direct SONTEL when able, HL123. What does the new slot of 1352 mean for our arrival time?",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **FL190 과 `direct SONTEL when able` 둘 다 정확합니다**",
          "표준교신용어 오류 : 없음. 문법 : `is there any problem about slot` → `what does that mean for our arrival?`",
          "코멘트 : **`inquire` 지시를 수행했습니다.** EPTA_05 에서 `inquire` 가 세 번 나와 **세 번 다 하지 않았던** 항목입니다 — 이번에는 물음표가 있습니다. 다만 **묻는 방향이 반대**입니다. 슬롯이 1352 로 늦춰진 것은 관제사가 이미 통보했으므로, \"슬롯에 문제가 있나요?\"는 들은 정보를 되묻는 것입니다. 지시문이 요구한 것은 **그 변경이 도착시각에 어떤 의미인지**입니다. 이미 받은 정보와 아직 모르는 정보를 구분하세요."
        ]
      },
      "P2A-Q11": {
        "verdict": "⚠",
        "model": "In this situation, what I needed to know first was the current wind, because my information was 25 minutes old and my tailwind limit is 10 knots. The controller told me it was 7 knots of tailwind, which was inside my limit, so I could accept runway 06. If the tailwind had been more than 10 knots, I would have asked for a change of runway, and if there was no change available, I would have told the controller our slot situation and requested priority for departure. In my role as a pilot, I decide this by comparing two numbers — how much time the shorter taxi saves, and my aircraft's tailwind limit. The limit always wins, because the limit is a performance figure and the slot is only a schedule. For example, I would refuse a time pressure that asked me to depart with a tailwind above my limit, or to skip a de-icing check to make a slot. Missing a slot costs the company money, but an overrun costs the aircraft.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **응답했습니다** — EPTA_05 에서 Follow-up 을 비운 것 대비 큰 개선이고, 세 문장 이상을 이어 말했습니다. 그런데 **세 부분 중 ①의 핵심이 어긋났습니다** : 질문은 \"**무엇을 알아야 했는가**\"(= 현재 바람과 자기 배풍한계)인데, 답은 \"활주로를 바꿔달라고 한다\"는 **행동**입니다. 배풍한계라는 개념이 한 번도 나오지 않았습니다 — 그게 이 문항 전체의 축입니다. ②의 일반 판단 기준도 없습니다. ③ **`Give an example.` 은 또 응답하지 않았습니다** — 응답한 세트 기준 **다섯 세트 연속**입니다."
        ]
      },
      "P2B-Q1": {
        "verdict": "⚠",
        "model": "Eastvale Control, HL123, level at flight level 330, 110 miles from Westmoor.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **`from eastvale airport`** — Eastvale 은 **관제기관**(Eastvale Control)이고, 110마일은 **Westmoor** 까지의 거리입니다. 기관명을 목적지로 썼습니다",
          "코멘트 : **`level at flight level 330` — 상태 보고 동사가 정확합니다.** `maintain`(지시 복창 동사)을 쓰던 반복 지적 항목이 해결됐습니다. 고도와 거리도 맞습니다. 틀린 것은 **지명 하나**인데, 교신 상대의 이름을 목적지로 쓰면 관제사는 자기 쪽으로 오는 줄 압니다. 기관명과 공항명을 받아 적을 때 구분해 두세요."
        ]
      },
      "P2B-Q2": {
        "verdict": "✅",
        "model": "Descend to flight level 240, reduce speed to 280 knots, expect the MAGRU ONE arrival, ILS runway 33, altimeter 29.92, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **다섯 요소 전부 정확합니다.** 고도·속도·절차명·활주로·고도계 — **세 세트 연속**으로 이 유형을 완전히 잡고 있습니다. 긴 지시를 받아 적는 능력 자체는 Level 4 수준입니다."
        ]
      },
      "P2B-Q3": {
        "verdict": "⚠",
        "model": "Eastvale Control, HL123, we have a cabin altitude warning and we are losing pressurization. We are starting an emergency descent now. Request descent to 10,000 feet.",
        "notes": [
          "누락된 필수 readback 요소 : **`emergency descent` 선언** — 지시문이 요구한 세 기능 중 하나입니다",
          "표준교신용어 오류 : **기관 호출 `arrival`** — 교신 상대는 **Eastvale Control** 입니다. `arrival` 은 기관명이 아닙니다(EPTA_02·03·04 의 `controller` 오류와 같은 유형의 재발)",
          "코멘트 : 상황 설명과 강하 요청은 명확합니다. 빠진 것이 **가장 중요한 한 마디**입니다 — `we are starting an emergency descent`. 긴급강하는 **분당 수천 피트로 다른 항공기의 고도를 가로지르며 내려가는 기동**이라, 관제사가 그 말을 들어야 주변 항공기를 치웁니다. `request descent to 10,000` 만 들으면 관제사는 통상 강하로 처리하고 순서를 기다리게 합니다. 지시문에 세 기능이 적혀 있을 때는 **답에 세 토막이 있는지 세어 보세요.**"
        ]
      },
      "P2B-Q4": {
        "verdict": "❌",
        "model": "Descend at your discretion, HL123 — but we need 10,000 feet and your minimum safe altitude is 11,500, so we cannot level off there with the cabin where it is. Request a heading clear of the high ground so we can continue down to 10,000.",
        "notes": [
          "누락된 필수 readback 요소 : **① 문제 지적(10,000 필요 vs MSA 11,500 충돌) ② 적절한 요청**",
          "표준교신용어 오류 : `safety area` 는 표준 용어가 아닙니다. `before reaching next waypoint at safety area` 는 문장이 성립하지 않습니다",
          "코멘트 : **이번 세트의 두 번째 숫자 비교 문항이고, 여기서는 비교하지 않았습니다.** 관제사가 **11,500 피트**라는 숫자를 줬고 당신은 **10,000 피트**가 필요합니다. 1,500 피트 차이가 이 문항 전체입니다 — 지형 때문에 11,500 아래로 못 내려가는데 객실고도 때문에 10,000 까지 내려가야 하는, **서로 모순되는 두 요구**입니다. 그 모순을 말하는 것이 `tell him what the problem is` 였습니다."
        ]
      },
      "P2B-Q5": {
        "verdict": "⚠",
        "model": "Turn right heading 290, descend to 10,000 feet, HL123. Our intention is to level at 10,000, complete the checklist, and then continue to Westmoor for the ILS.",
        "notes": [
          "누락된 필수 readback 요소 : **`descend to 10,000 feet`** — 고도는 필수 복창 7항목입니다",
          "표준교신용어 오류 : `safety area` 비표준, `to release our issues` 어색",
          "코멘트 : **`our intention is to ~` 구문을 썼습니다. 여섯 세트 만에 처음입니다.** EPTA_01 `ready` → 02 `report ready` → 03 `direct kimhae airport` → 04 \"나중에 말하겠다\" → 05 아예 없음 → **06 구문 사용**. 다섯 세트 연속 최우선이었던 약점이 해결됐습니다."
        ]
      },
      "P2B-Q6": {
        "verdict": "⚠",
        "model": "HL123, our rate of descent is about 4,000 feet per minute, and two passengers are feeling unwell but nobody needs urgent treatment.",
        "notes": [
          "누락된 필수 readback 요소 : **강하율(rate of descent)** — 묻은 것은 **강하율**인데 **고도**를 답했습니다",
          "표준교신용어 오류 : 없음",
          "코멘트 : **두 항목에 모두 답하려 한 구조는 맞습니다** — EPTA_04·05 에서 두 세트 연속 하나만 답했던 항목이고, 이번에는 두 토막을 만들었습니다. 틀린 것은 **첫 질문을 잘못 읽은 것**입니다. `rate of descent` 는 \"분당 몇 피트로 내려가는가\"이고 지문에 **4,000 feet per minute** 라고 적혀 있었습니다. 긴급강하 중에 관제사가 강하율을 묻는 이유는 **아래 항공기를 언제까지 치워야 하는지 계산하기 위해서**입니다 — 고도를 알려줘도 그 계산이 안 됩니다. `altitude`(고도)와 `rate of descent`(강하율)를 구분해 두세요."
        ]
      },
      "P2B-Q7": {
        "verdict": "⚠",
        "model": "HL123 — before we decide, request the weather at both airports and whether they have an ambulance standing by. We would rather go to the nearer airport, Daleford at 11 minutes rather than Westmoor at 20, because we want to be on the ground quickly with a pressurization problem.",
        "notes": [
          "누락된 필수 readback 요소 : **① 결정의 이유 ② 20분 vs 11분 비교**",
          "표준교신용어 오류 : 없음. 문법 : `can i get the weather each airport` → `the weather at both airports`, `whether they standing` → `whether they have ... standing by`, `i would rather the near airport` → `we would rather go to the nearer airport`",
          "코멘트 : **묻는 내용이 정확합니다.** 양쪽 공항의 기상과 의료 지원 가용 여부 — 이 상황에서 결정에 실제로 필요한 두 가지입니다. EPTA_05 P2B-Q6 에서는 묻기는 했으나 **상황과 무관한 것**(기어 문제에 활주로 길이)을 물어 지적했는데, 이번에는 제대로 골랐습니다. **두 세트 연속 \"결정 전에 묻기\" 수행이고, 내용까지 맞은 것은 처음입니다.**"
        ]
      },
      "P2B-Q8": {
        "verdict": "❌",
        "model": "HL123, we are level at 10,000, the cabin altitude has stabilized and the passengers are off oxygen. We have 1 hour 15 minutes of fuel. With Daleford at 800 metres and no ILS we will go to Westmoor — request the ILS runway 33 and an ambulance on arrival for two passengers.",
        "notes": [
          "누락된 필수 readback 요소 : **도착 시 필요한 것(ILS 와 구급차) — 지시문의 마지막 부분**",
          "표준교신용어 오류 : `maintain 10000` → `level at 10,000`(상태 보고). `only 1hr min of fuel` 는 **1시간 15분**의 입력 오류이고, 1시간 15분은 \"only\" 가 아닙니다 — 20분 거리인 Westmoor 에 충분합니다",
          "코멘트 : **갱신은 했습니다**(10,000 안착, 객실고도 안정) — EPTA_05 P2B-Q7 에서 갱신을 빠뜨린 것 대비 개선입니다. 그런데 **결정이 반대입니다.**"
        ]
      },
      "P2B-Q9": {
        "verdict": "✅",
        "model": "Descend to 3,000 feet until established, cleared for the ILS runway 33 approach, contact Westmoor Tower on 120.55, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **고도 3,000 · until established · 접근 허가 · 기관 · 주파수 120.55 전부 정확합니다.** 접근 허가 복창은 **세 세트 연속 유지**, 주파수는 이 세트에서 **2/2 정확**(118.35, 120.55)입니다. 최종 클리어런스를 완전히 받는 것은 안정됐습니다."
        ]
      },
      "P2C-Q1": {
        "verdict": "⚠",
        "model": "During the arrival phase our aircraft was flying normally at first, but then we got a cabin pressure warning, so we had to descend. We requested a descent and started an emergency descent, but there was high terrain on the route, so we requested a vector to get clear of the terrain. We got the vector, and after the checklist the cabin altitude stabilized. We had one hour 15 minutes of fuel on board. Daleford, the nearer airport, was down to 800 metres in fog with no ILS, so we continued to Westmoor and landed there.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **사건의 원인이 정확하고**(여압 경고), **고지대 충돌까지 담았습니다** — Q4 에서는 말하지 못했던 MSA 문제를 리포팅에서는 언급했습니다. 즉 **상황은 이해하고 있었고 교신에서 말하지 못한 것**입니다. 전개 순서(경고 → 강하 요청 → 고지대 → 벡터 → 체크리스트 → 안정 → 연료)도 맞습니다."
        ]
      },
      "P2C-Q2": {
        "verdict": "⚠",
        "model": "As a pilot, I think the controller handled it well. As soon as we reported the cabin altitude warning he let us descend at our discretion, and he told us there was terrain at the level we wanted, then he gave us a vector to get clear of it. He also gave us two options for the airport. One thing that could have been handled differently is that he could have given us one option with the weather included, to save us time choosing — for example, telling us straight away that Daleford was 800 metres in fog with no ILS. And once we had chosen the airport, the controller could have relayed our situation to approach and tower and asked for an ambulance or the emergency equipment on the runway, instead of waiting for us to request it. Other than that, everything was handled well.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **이번 세트에서 가장 좋은 자유응답입니다.** `one thing that could have been handled differently is ~` 로 질문 후반부에 답했고(**네 세트 연속**), **지적 내용이 구체적이고 타당합니다** — \"기상 정보를 선택지와 함께 줬어야 선택 시간을 줄일 수 있었다\"는 지적은 정확합니다. 실제로 관제사는 Daleford 기상을 Q8 에서야 줬고, 그 때문에 Q7 에서 근거 없이 결정해야 했습니다. \"조종사가 공항을 고르면 관제사가 approach·tower 에 상황을 전달하고 구급차를 대기시켜야 한다\"도 실무적으로 맞는 제안입니다."
        ]
      }
    }
  },
  "EPTA_07": {
    "set": "EPTA_07",
    "level": "Level 2",
    "summary": "",
    "gradedAt": "2026-10-30",
    "items": {
      "P1A-Q1": {
        "verdict": "✅",
        "model": "Hold short of runway 34, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **교통정보를 복창에서 제외한 판단이 정확합니다.** 다섯 세트 연속 안정적인 항목입니다."
        ]
      },
      "P1A-Q2": {
        "verdict": "⚠",
        "model": "After departure climb to flight level 330, report passing 5,000 feet, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **`after departure`** — 시점 조건",
          "표준교신용어 오류 : 없음",
          "코멘트 : 고도 FL330 과 보고 고도 5,000 은 둘 다 정확합니다. 빠진 것은 **조건**입니다. 이 문항에서는 뜻이 크게 달라지지 않지만, 같은 세트 P1A-Q3 의 `at or above` 처럼 **조건절 자체가 복창 대상**이라는 점은 같습니다. SAMPLE_01 P1A-Q3 에서 `until passing` 을 빠뜨린 것과 같은 유형입니다."
        ]
      },
      "P1A-Q3": {
        "verdict": "❌",
        "model": "Descend to flight level 240, cross TAMNA at or above 10,000, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **`descend to flight level 240` — 강하 지시 전체**",
          "표준교신용어 오류 : **고도는 필수 복창 7항목**입니다(`atc-terminology.md` §2)",
          "코멘트 : 교차제한(`cross TAMNA at or above 10,000`)은 정확히 받았습니다 — 까다로운 쪽을 맞혔습니다. 그런데 **앞의 강하 지시를 통째로 빠뜨렸습니다.** 관제사는 이 기체가 FL240 으로 내려온다는 확인을 받지 못합니다. 지시가 두 토막일 때 **뒤쪽만 받고 앞쪽을 흘리는** 양상인데, 메모를 왼쪽부터 순서대로 적고 복창할 때 **왼쪽 끝부터** 읽으면 막을 수 있습니다."
        ]
      },
      "P1A-Q4": {
        "verdict": "✅",
        "model": "Turn left heading 310, cleared for the ILS runway 34 approach, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **선회 방향 + 기수 + 접근 허가 전부.** 접근 허가 복창은 **네 세트 연속 유지**이고, 선회 방향(`left`)을 함께 넣은 것도 정확합니다."
        ]
      },
      "P1B-Q1": {
        "verdict": "⚠",
        "model": "Negative, HL123 — we need 2,900 metres and runway one six is only 2,400, and it is wet. Request a longer runway.",
        "notes": [
          "누락된 필수 readback 요소 : **① 대안 요청**(지시문의 `tell him what you need instead`) ② 2,400 과의 비교",
          "표준교신용어 오류 : 없음",
          "코멘트 : **`are you able ~?` 에 `Negative` 로 시작했습니다.** SAMPLE_01 에서 두 번(P1B-Q5, P2A-Q12) 첫 단어를 빠뜨려 지적한 항목인데 해결됐습니다. 사유도 정확합니다. 빠진 것은 **지시문의 뒷부분**입니다 — 못 받겠다고만 하면 관제사가 다음 수를 못 냅니다. `Request a longer runway` 한 토막이면 됩니다. 그리고 \"2,900 이 필요하다\"보다 **\"2,900 이 필요한데 1 6 은 2,400 뿐이다\"** 가 관제사에게는 훨씬 빠른 정보입니다."
        ]
      },
      "P1B-Q2": {
        "verdict": "❌",
        "model": "Negative, HL123, maintaining heading 290 to stay clear of a build-up. Request to continue on this heading until clear.",
        "notes": [
          "누락된 필수 readback 요소 : **사유(뇌우 회피)**",
          "표준교신용어 오류 : `NEGATIVE` 는 정확합니다",
          "코멘트 : **첫 단어는 맞았는데 상황을 반대로 읽었습니다.** 지문은 \"**build-up 을 피하려고** 290 으로 돌았고 **아직 그 기수에 있다**\"입니다. 실수가 아니라 **의도한 회피**입니다. 답안은 \"실수로 돌았고 지금 310 으로 돌아간다\"가 되어, **뇌우 속으로 다시 들어가겠다**고 말한 셈이 됐습니다."
        ]
      },
      "P1B-Q3": {
        "verdict": "✅",
        "model": "Climbing to flight level 150, HL123. And be advised, during our takeoff roll we saw a maintenance vehicle moving towards the runway from taxiway Juliet.",
        "notes": [
          "누락된 필수 readback 요소 : 없음. 보고에서 **언제 봤는지**가 빠졌습니다",
          "표준교신용어 오류 : 없음. `be advised` 가 적절합니다. 시제 `is going` → `was moving`",
          "코멘트 : **복합 지시 두 부분을 모두 수행했고 위치(taxiway Juliet)까지 정확합니다.** 시차형 보고는 세 세트 연속 안정적입니다. 한 가지만 — `is going` 으로 쓰면 **지금 들어가고 있다**는 뜻이 되어 관제사가 즉시 활주로를 닫을 수 있습니다. `during our takeoff roll we saw` 로 **시점을 먼저** 밝히세요."
        ]
      },
      "P1B-Q4": {
        "verdict": "⚠",
        "model": "Jeju Control, HL123, request two levels higher — we have had continuous turbulence for the last 20 minutes and the preceding aircraft reports smooth air there.",
        "notes": [
          "누락된 필수 readback 요소 : **사유의 핵심(선행기가 두 레벨 위에서 평온을 보고했다)**",
          "표준교신용어 오류 : `request climb to ~` — **REQUEST 뒤에는 명사구**가 옵니다(`request two levels higher` / `request flight level XXX`)",
          "코멘트 : **기관 호출이 정확하고** 요청과 사유가 둘 다 있습니다. 두 가지만 고치면 됩니다. ① `request` 뒤의 동사구 — 같은 세트 P1B-Q6 에서는 `request runway in use and wind check` 로 정확하게 쓰셨습니다. **아는데 문장이 길어지면 흐트러집니다.** ② 사유가 \"난류 때문\"에서 멈췄습니다. **왜 하필 두 레벨 위인지**가 빠지면 관제사는 근거 없는 요청으로 받습니다 — 선행기 보고가 그 근거입니다."
        ]
      },
      "P1B-Q5": {
        "verdict": "❌",
        "model": "Unable flight level 380 due to weight, HL123. Maintaining flight level 340 until SIMUN.",
        "notes": [
          "누락된 필수 readback 요소 : **`unable` 선언과 사유(중량)**",
          "표준교신용어 오류 : **두 고도를 동시에 복창해 모순된 교신이 됐습니다** — \"FL380 으로 올라간다\"와 \"FL340 을 유지한다\"를 같이 말하면 관제사는 어느 쪽인지 모릅니다",
          "코멘트 : **대안(FL340 until SIMUN)을 복창한 것은 진전입니다** — SAMPLE_01 P1B-Q4 에서는 ATC 가 준 대안을 `request` 로 되돌려 지적했는데, 이번엔 그 대안을 받았습니다. 남은 것은 **\"못 한다\"는 선언 하나**입니다."
        ]
      },
      "P1B-Q6": {
        "verdict": "✅",
        "model": "Cheongju Approach, HL123, request the runway in use and a wind check.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **기관 호출 + 묻기 + 요청 세 기능 전부**",
          "표준교신용어 오류 : 없음",
          "코멘트 : **이 세트에서 가장 깔끔한 Ⅰ-B 응답입니다.** `request runway in use and wind check` 는 **REQUEST + 명사구 두 개**를 정확히 썼습니다 — EPTA_06 에서 네 번 동사구를 붙여 최다 반복 오류로 지적한 항목입니다. 발신형에서 기관 호출도 정확합니다. 짧고 필요한 것만 담았습니다."
        ]
      },
      "P2A-Q1": {
        "verdict": "✅",
        "model": "Gimpo Ground, HL123, request taxi, information Delta.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : 기관명·요청·정보문자 모두 정확합니다. `request taxi` 도 명사구입니다."
        ]
      },
      "P2A-Q2": {
        "verdict": "⚠",
        "model": "Taxi to runway 34 via Papa and Golf, hold short of Golf 3, HL123. Roger the delay — we will wait for your call.",
        "notes": [
          "누락된 필수 readback 요소 : **지연에 대한 응대** — 지시문의 `acknowledge the delay`",
          "표준교신용어 오류 : 없음 (`gold` 는 Golf 의 오탈자로 보고 감점하지 않았습니다)",
          "코멘트 : 유도 지시는 완전히 받았습니다(활주로·유도로 두 개·hold short 지점). 빠진 것은 **구어체로 들어온 뒷부분**입니다 — `it may be a while, I'll keep you posted`. `roger` 를 맨 앞에 붙이긴 했지만 그건 유도 지시를 받았다는 뜻으로 읽힙니다. **지연을 알아들었다는 신호**가 따로 있어야 관제사가 다시 설명하지 않습니다. SAMPLE_01 P2A-Q6 에서 구어체 부탁을 놓친 것과 같은 유형입니다."
        ]
      },
      "P2A-Q3": {
        "verdict": "✅",
        "model": "HL123 — before we decide, request the takeoff distance available on runway 32R.",
        "notes": [
          "누락된 필수 readback 요소 : 없음. 활주로는 `32R`(우측 지정)까지 말하면 더 정확합니다",
          "표준교신용어 오류 : `can i know ~` → `request ~`(표준). 다만 뜻은 명확하게 전달됩니다",
          "코멘트 : **물어야 할 값을 정확히 골랐습니다.** 이 상황에서 필요한 정보는 이륙가용거리 하나이고, 그걸 바로 짚었습니다. \"결정 전에 묻기\"는 EPTA_02~05 에서 **네 세트 연속 실패**하다 EPTA_06 에서 해결됐고, 이번에 **세 문항 전부 수행**했습니다(여기, Q9, P2B-Q4). 완전히 자리잡았습니다."
        ]
      },
      "P2A-Q4": {
        "verdict": "❌",
        "model": "HL123, 3,200 metres is enough — we need 2,900. We will take runway 32R.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음",
          "표준교신용어 오류 : 사유가 사실과 다릅니다 — 성능 문제가 아닙니다",
          "코멘트 : **이번 세트에서 가장 중요한 오류이고, 바로 앞 문항에서 본인이 물어서 받은 답을 쓰지 않았습니다.**"
        ]
      },
      "P2A-Q5": {
        "verdict": "✅",
        "model": "Taxi to runway 32R via Hotel, hold short of Hotel 2, contact Gimpo Tower on 118.1, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **활주로·유도로·hold short 지점·기관·주파수 118.1 전부 정확합니다.** 주파수는 **세 세트 연속** 정확합니다. (앞 문항에서 32R 을 거부해 놓고 여기서 32R 로 유도받은 모순은 Q4 에서 이미 감점했습니다.)"
        ]
      },
      "P2A-Q6": {
        "verdict": "⚠",
        "model": "Behind the departing Cessna Citation, line up and wait runway 32R, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **조건 `behind the departing Cessna Citation`**",
          "표준교신용어 오류 : 없음",
          "코멘트 : `line up and wait` 와 활주로는 정확합니다. 그런데 **조건이 빠지면 지금 바로 진입하겠다는 뜻**이 됩니다. 조건부 진입 지시에서 조건을 빠뜨리는 것은 **활주로 침입으로 직결되는 누락**이라, ICAO 는 조건부 허가의 조건을 반드시 복창하도록 요구합니다. `behind the ~` 로 시작해서 **조건을 문장 맨 앞에** 두세요 — 그래야 관제사가 조건을 제대로 받았는지 바로 확인할 수 있습니다."
        ]
      },
      "P2A-Q7": {
        "verdict": "⚠",
        "model": "Cleared for takeoff runway 32R, climb to 4,000 feet, report passing 2,500 feet, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **`for takeoff`**",
          "표준교신용어 오류 : **`cleared to runway 32R`** 는 \"활주로까지 가도 좋다\"로 읽힙니다. **`cleared for takeoff`** 는 이륙 허가입니다 — 전혀 다른 허가이고, 활주로 관련 지시 중 가장 무거운 항목입니다",
          "코멘트 : **네 자리 피트 두 개(4,000 과 2,500)를 둘 다 정확히** 받았습니다 — EPTA_06 에서 드릴로 넣어 해결한 항목이 유지됩니다. 틀린 것은 **두 단어**입니다. `takeoff` 는 **이륙 허가에만 쓰는 한 단어**이고, 그 밖의 맥락에서는 `departure` 를 씁니다. SAMPLE_01 P2A-Q8 에서 `cleared to take off` 로 썼던 것의 연장입니다."
        ]
      },
      "P2A-Q8": {
        "verdict": "✅",
        "model": "Gimpo Departure, HL123, passing 2,500 feet for 4,000, request further climb.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `climb to 4000` 은 **지시를 복창하는 동사**입니다. 위치보고는 `passing X for Y` 로 고정하세요",
          "코멘트 : **값이 정확합니다.** EPTA_06 P2A-Q9 에서 `passing 1,800` 을 `passing 3000` 으로 뒤집어 ❌ 를 준 바로 그 유형이고, 이번에는 통과고도와 목표고도를 제자리에 넣었습니다. **\"스스로 보고할 때 값이 틀린다\"는 최우선 약점이 해결됐습니다.** 남은 것은 어순 하나 — `passing 2,500 for 4,000` 이 표준형입니다."
        ]
      },
      "P2A-Q9": {
        "verdict": "❌",
        "model": "Climb to flight level 230, HL123. Before we accept — how many track miles does direct SIMUN save, and what is the weather on that routing?",
        "notes": [
          "누락된 필수 readback 요소 : **`climb to flight level 230`** — 지시문 앞부분의 full readback 이 통째로 없습니다. 고도는 필수 복창 항목입니다",
          "표준교신용어 오류 : 없음",
          "코멘트 : **묻는 동작은 했지만 두 가지가 어긋났습니다.** ① **복창을 빠뜨렸습니다** — 지시문이 `give your full readback, then tell him...` 으로 순서까지 적어 줬습니다. 묻는 데 집중하다 앞을 놓친 형태입니다. ② **물은 내용이 이 상황의 변수가 아닙니다** — FL230 순항에서 지형 고도는 판단 요소가 아닙니다. 직항을 받을지 결정하려면 **얼마나 단축되는지**와 **그 경로의 기상**을 알아야 하고, 실제로 관제사가 다음 턴에서 그 두 가지를 줬습니다(40마일 단축 / 중등도 난류)."
        ]
      },
      "P2A-Q10": {
        "verdict": "⚠",
        "model": "HL123, we will take direct SIMUN for the 40 miles, but request a higher level to stay out of the moderate turbulence.",
        "notes": [
          "누락된 필수 readback 요소 : **① 결정 ② 이유** — 지시문의 `state your decision with a reason`",
          "표준교신용어 오류 : `request vector to ~` 는 명사구로 정확합니다",
          "코멘트 : 난류를 피하려는 의도는 읽힙니다. 그런데 **결정이 분명하지 않고, 요청이 상황과 어긋납니다** — SIMUN 으로 직항하면 **그 난류 구역을 지나갑니다.** \"SIMUN 으로 벡터를 달라\"면서 \"난류를 피하겠다\"는 것은 서로 충돌합니다."
        ]
      },
      "P2A-Q11": {
        "verdict": "⚠",
        "model": "In this situation, what I needed to know was the takeoff distance available on runway 32R, because our required takeoff distance that day was 2,900 metres. Ground told me it was 3,200 metres and dry, which was enough, so I accepted the change — and it also put us first for departure instead of waiting behind the unserviceable A350. In my role as a pilot, runway distance is the most important factor in deciding whether a runway change is worth taking. If the runway is short, a wet surface or a tailwind can take away what little margin is left. For example, I would turn down a runway change that saved me time but left me with less than my required distance — say a 2,400 metre runway when I need 2,900. Saving ten minutes is never worth starting a takeoff you cannot stop.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **②(조종사로서의 판단 기준)에는 답했습니다** — \"활주로 길이가 가장 중요한 요소\"는 정확하고, 이 문항의 핵심을 짚은 것입니다. 그런데 세 부분 중 하나만 답했습니다."
        ]
      },
      "P2B-Q1": {
        "verdict": "✅",
        "model": "Cheongju Approach, HL123, descending through flight level 180 for 11,000, information Hotel.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `110000` 은 11,000 의 오타로 보입니다(존재하지 않는 고도). `request inbound for ~` 는 위치보고에 불필요합니다",
          "코멘트 : **기관·통과고도·ATIS 정보문자까지 최초 컨택의 표준형을 갖췄습니다.** FL180(FL 단위)과 11,000(피트 단위)을 구분한 것도 정확합니다 — 네 세트 연속 안정적입니다. 끝에 붙인 요청은 빼세요. 관제사는 이미 이 기체가 Cheongju 로 오는 것을 알고 있고, 위치보고는 **위치만** 담는 것이 빠릅니다."
        ]
      },
      "P2B-Q2": {
        "verdict": "✅",
        "model": "Descend to 9,000 feet, reduce speed to 210 knots, expect the TAMNA ONE arrival, ILS runway 34, altimeter 29.92, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **다섯 요소 전부**",
          "표준교신용어 오류 : 없음 (`descnet` 는 오탈자)",
          "코멘트 : **고도·속도·도착절차·활주로·고도계 다섯 요소를 전부 받았습니다. 네 세트 연속**입니다. 긴 지시를 받아 적는 능력은 안정적으로 Level 4 수준입니다."
        ]
      },
      "P2B-Q3": {
        "verdict": "⚠",
        "model": "Mayday, mayday, mayday, Cheongju Approach, HL123, cargo smoke warning in the aft hold. We have discharged the fire bottles. Request priority for landing at Cheongju.",
        "notes": [
          "누락된 필수 readback 요소 : **① 기관명 ② 소화병을 방출했다는 조치 보고**",
          "표준교신용어 오류 : 비상선언 순서는 **MAYDAY×3 → 기관명 → 콜사인 → 사건**입니다(`atc-terminology.md` §8-1). 기관명이 빠졌습니다",
          "코멘트 : **MAYDAY×3 · 콜사인 · 사건 · 요청이 다 있습니다.** 이 프로젝트에서 두 번째 비상선언인데 EPTA_03 때보다 분명히 정돈됐습니다."
        ]
      },
      "P2B-Q4": {
        "verdict": "✅",
        "model": "HL123 — before we decide, request the landing distance available at Yangyang. We need 2,900 metres.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **이번 세트에서 가장 잘한 문항입니다.** 물어야 할 값(Yangyang 착륙가용거리)을 정확히 골랐고, **자기 요건(2,900 미터)을 함께 말했습니다.** 그러면 관제사가 숫자를 듣고 **바로 판단해서** 답할 수 있습니다 — 실제로 다음 턴에서 \"Yangyang 2,500, Cheongju 3,600\" 이라는 답이 돌아왔습니다. 한 번의 교신으로 필요한 것을 다 받아낸 형태이고, 30초 안에 처리해야 하는 상황에서 가장 효율적인 질문입니다."
        ]
      },
      "P2B-Q5": {
        "verdict": "✅",
        "model": "HL123, Yangyang at 2,500 metres is not enough — we need 2,900. We will continue to Cheongju with 3,600. Request priority for landing.",
        "notes": [
          "누락된 필수 readback 요소 : **숫자 근거** (2,500 vs 필요 2,900)",
          "표준교신용어 오류 : 없음",
          "코멘트 : **판단이 정확합니다.** 2,500 미터는 필요한 2,900 미터에 못 미치고, Cheongju 의 3,600 미터는 충분합니다. **가까운 공항(12분)의 유혹을 뿌리치고 길이를 기준으로 결정**하셨습니다 — EPTA_06 P2B-Q8 에서는 관제사가 \"그 공항은 안 된다\"고 말해 준 직후에도 가까운 쪽을 고르셔서 ❌ 를 드렸던 항목입니다. **해결됐습니다.**"
        ]
      },
      "P2B-Q6": {
        "verdict": "❌",
        "model": "Turn right heading 030 for vectors to the ILS, descend to 5,000 feet, HL123. Our intention is to land at Cheongju off the ILS runway 34, with the fire service standing by.",
        "notes": [
          "누락된 필수 readback 요소 : **intentions**",
          "표준교신용어 오류 : **기수를 030 이 아니라 240 으로** 복창했습니다. **기수는 필수 복창 7항목**이고, 030 과 240 은 거의 정반대 방향입니다",
          "코멘트 : 고도 5,000 과 벡터 목적은 정확합니다. 두 가지가 문제입니다."
        ]
      },
      "P2B-Q7": {
        "verdict": "✅",
        "model": "HL123, fuel endurance 1 hour 25 minutes, 180 persons on board.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **두 항목 모두 답했습니다**",
          "표준교신용어 오류 : 없음. 연료는 시간 단위, SOB 는 사람 수로 정확히 구분했습니다",
          "코멘트 : **구조는 완전합니다.** EPTA_04·05 에서 두 세트 연속 하나만 답했던 항목이고, 이번에도 두 토막을 다 만드셨습니다."
        ]
      },
      "P2B-Q8": {
        "verdict": "⚠",
        "model": "HL123, the smoke warning went out about tree minutes after we discharged the bottles. We have 1 hour 25 minutes of fuel and 180 persons on board. We will taxi clear — request the fire service to meet us on the runway.",
        "notes": [
          "누락된 필수 readback 요소 : **① 갱신의 핵심(연기 경고가 꺼졌다) ② 도착 시 필요한 것**",
          "표준교신용어 오류 : `we got discharge on the display` 는 **소화병을 방출했다**는 뜻으로 읽힙니다 — 그건 Q3 에서 이미 한 일입니다",
          "코멘트 : **질문에 정확히 답했고**(taxi clear), **연료와 인원도 정확합니다**(1시간 25분 / 180명)."
        ]
      },
      "P2B-Q9": {
        "verdict": "✅",
        "model": "Descend to 2,500 feet until established, cleared for the ILS runway 34 approach, contact Cheongju Tower on 119.2, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **고도 · until established · 접근 허가 · 기관 · 주파수 119.2 전부 정확합니다.** 접근 허가 복창은 **네 세트 연속**, 주파수는 이 세트에서 **2/2**(118.1, 119.2)입니다. 최종 클리어런스를 완전히 받는 것은 이제 흔들리지 않습니다."
        ]
      },
      "P2C-Q1": {
        "verdict": "⚠",
        "model": "During the approach we got a cargo smoke warning for the aft hold, so we discharged the fire bottles, declared a mayday and requested priority for landing. The controller gave us two options, one was Yangyang and the other was Cheongju, but we could not accept Yangyang because its landing distance was 2,500 metres and we needed 2,900, so it was too short for us. In the end the warning went out about tree minutes after we discharged the bottles, and we landed at Cheongju safely off the ILS.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **전개가 정확하고 판단 근거까지 담겼습니다** — 두 선택지, Yangyang 거부 사유(착륙거리 부족), 경고 소멸, Cheongju 착륙. 특히 **\"착륙거리가 짧아서 쓸 수 없었다\"** 는 숫자 비교의 결론을 서술에 넣은 것인데, 이것이 이 사건의 핵심 판단입니다."
        ]
      },
      "P2C-Q2": {
        "verdict": "⚠",
        "model": "I think the controller handled it well. As soon as we reported the situation he not only accepted our request for priority, but also gave us another option. Although Yangyang was too short for us to use, offering it still helped us work out where we could go. One thing that could have been handled differently is that the controller could have checked our aircraft type and its performance first, and then offered an option that was actually suitable for us — Yangyang was only 2,500 metres when we needed 2,900, so it was never a real choice. Other than that, everything the controller did was good.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **두 가지가 동시에 됐습니다.** ① **첫 문장의 평가 대상이 관제사입니다** — `I think the atc handled it well`. EPTA_02·05·06 에서 네 세트 연속 조종사부터 평가해 지적했던 항목이고, SAMPLE_01 에 이어 두 세트 연속 해결입니다. ② **`the one thing that can be handled differently is ~` 로 질문 후반부에 답했습니다** — 다섯 세트 연속입니다."
        ]
      }
    }
  },
  "EPTA_08": {
    "set": "EPTA_08",
    "level": "Level 2",
    "summary": "",
    "gradedAt": "2026-11-01",
    "items": {
      "P1A-Q1": {
        "verdict": "✅",
        "model": "Taxi straight ahead, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음 (`Texture straight or has` 는 `taxi straight ahead` 의 ASR 오인)",
          "코멘트 : **`caution jet blast` 를 복창에서 제외한 판단이 정확합니다.** 여섯 세트 연속 안정적인 항목입니다. 다만 ASR 이 `taxi` 를 `Texture` 로 들었다는 것은 첫 음절이 뭉개졌다는 신호입니다 — 짧은 문항일수록 또박또박 끊어 주세요."
        ]
      },
      "P1A-Q2": {
        "verdict": "⚠",
        "model": "Cleared to Oakport via the KEVNA TWO departure, BARSO transition, climb to 5,000 feet, squawk 3471, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **`departure`** — SID 이름 뒤의 절차 종류가 빠졌습니다",
          "표준교신용어 오류 : `Clear` → **`Cleared`**. 이 세트에서 세 번 나왔고, 다섯 세트째 반복됩니다",
          "코멘트 : **5요소 구조를 모두 받았고 숫자 두 개(5,000 과 3471)가 정확합니다.** 이 세트에서 가장 긴 지시(16단어)인데 숫자는 하나도 놓치지 않았습니다. 흐려진 것은 **고유명사**입니다 — `Oakport`→`airport`, `KEVNA TWO departure`→`K and EO`. 목적지와 SID 이름은 비행로 허가의 핵심이라 관제사가 그것으로 경로를 확인합니다. **화면에 안 뜨는 고유명사는 음절을 끊어 받아 적으세요**(`KEV-NA`)."
        ]
      },
      "P1A-Q3": {
        "verdict": "✅",
        "model": "Climb to flight level 310, cross WYNTA at 220 knots or less, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **두 토막 모두**",
          "표준교신용어 오류 : 없음 (ASR 오인)",
          "코멘트 : **지시가 두 토막일 때 앞쪽을 흘리던 문제가 해결됐습니다.** EPTA_07 P1A-Q3 에서는 까다로운 교차제한만 맞히고 강하 지시를 통째로 빠뜨려 ❌ 였는데, 이번에는 상승 지시와 교차제한을 둘 다 받았고 `at 220 knots or less` 의 **조건까지** 담았습니다."
        ]
      },
      "P1A-Q4": {
        "verdict": "✅",
        "model": "Descend to 3,000 feet until established, cleared for the ILS runway 15 approach, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음 (`He says`→descend, `East published`→established, `clear items`→cleared ILS 는 ASR 오인)",
          "코멘트 : **고도 + `until established` 조건 + 접근 허가 세 요소 전부.** 접근 허가 복창은 **다섯 세트 연속 유지**입니다. 조건부 지시의 조건을 빠뜨리지 않은 것도 이번 세트에서 두 번째입니다(Q3 과 함께)."
        ]
      },
      "P1B-Q1": {
        "verdict": "⚠",
        "model": "Affirm, HL123 — we need 2,100 metres and Golf 4 gives us 2,400, so we can accept the intersection departure from Golf 4.",
        "notes": [
          "누락된 필수 readback 요소 : **① 사유 ② 필요 거리 2,100 — 지시문이 요구한 두 가지 전부**",
          "표준교신용어 오류 : `Affirmative` → **`AFFIRM`**(ICAO 표준). 뜻은 통하지만 표준어는 `AFFIRM` 입니다",
          "코멘트 : **판단이 정확합니다.** 2,400 미터는 필요한 2,100 미터보다 길므로 수락이 맞고, **`AFFIRM` 으로 시작한 것도 맞습니다** — 지금까지 `are you able ~?` 에는 NEGATIVE 만 연습하셨는데 긍정이 정답인 경우도 표준어로 열었습니다."
        ]
      },
      "P1B-Q2": {
        "verdict": "⚠",
        "model": "Negative, HL123, level at 5,000 feet — you cleared us down to 5,000 a few minutes ago.",
        "notes": [
          "누락된 필수 readback 요소 : **사유** — 관제사 본인이 5,000 으로 내려줬다는 사실",
          "표준교신용어 오류 : 없음 (`laboring` 은 `level at` / `levelling` 의 ASR 오인)",
          "코멘트 : **NEGATIVE + 실제 값 두 토막이 정확합니다.** `Confirm maintaining ~?` 함정형은 다섯 세트 연속 첫 단어를 맞히고 있습니다."
        ]
      },
      "P1B-Q3": {
        "verdict": "❌",
        "model": "Maintain flight level 330, HL123. And be advised, in the cruise we saw what looked like a drone about 2 miles away at our ten o'clock, slightly below.",
        "notes": [
          "누락된 필수 readback 요소 : **`maintain flight level 330`** — 지시문 앞부분(`Acknowledge the instruction`)이 통째로 없습니다. 고도는 필수 복창 항목입니다",
          "표준교신용어 오류 : **보고해야 할 자리에서 요청을 했습니다.** `Recast label down due to drone`(= request level down due to drone)은 \"드론 때문에 고도를 낮춰 달라\"는 뜻입니다. 지시문은 `report what you saw` 입니다",
          "코멘트 : 드론·2마일·10시 방향은 들어 있습니다 — **본 것은 정확히 기억하셨습니다.** 그런데 그것을 **요청으로 바꿔 말했습니다.** 이미 지나간 일(순항 중에 봤고 지금은 보고만 하는 것)인데 지금 고도를 바꿔 달라고 하면 관제사는 **현재 위협이 있는 줄 알고** 주변 항공기를 움직입니다."
        ]
      },
      "P1B-Q4": {
        "verdict": "⚠",
        "model": "Unable the RNAV runway 15 approach, HL123 — our RNAV is inoperative under the minimum equipment list. Request the ILS runway 15.",
        "notes": [
          "누락된 필수 readback 요소 : **대안 요청** — 지시문의 `tell him what you need instead`",
          "표준교신용어 오류 : 없음",
          "코멘트 : **`unable` + 사유 두 토막이 정확합니다.** MEL 을 근거로 든 것도 적절합니다 — 장비 결함을 이유로 접근 방식을 거부하는 전형적인 상황입니다."
        ]
      },
      "P1B-Q5": {
        "verdict": "✅",
        "model": "HL123, we were given 128.3. Correction — we had 128.5 set by mistake. Now going to 128.3.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **질문에 먼저 답했고, 틀린 값과 정정 조치가 다 있습니다**",
          "표준교신용어 오류 : 없음",
          "코멘트 : **정정 3단이 완전하고, 순서까지 맞습니다.** 관제사가 \"받은 주파수를 말하라\"고 물었으므로 **받은 값(128.3)을 먼저** 말하고, 그다음 틀린 값(128.5)과 조치를 붙였습니다. SAMPLE_01 P1B-Q5 에서는 질문에 답하기 전에 변명부터 나와 지적했던 항목인데, 이번에는 순서가 정확합니다. 이 세트에서 가장 깔끔한 Ⅰ-B 응답입니다."
        ]
      },
      "P1B-Q6": {
        "verdict": "❌",
        "model": "Marchfield Approach, HL123 holding at WYNTA — we can accept the 20-minute delay. We have 1 hour 10 minutes of fuel and our alternate needs 25, so we can hold for up to 45 minutes.",
        "notes": [
          "누락된 필수 readback 요소 : **① 수락 여부 ② 내 한계 — 지시문이 요구한 두 가지 전부**",
          "표준교신용어 오류 : **이미 받은 것을 다시 요청했습니다.** 지문에 `Approach has just given you an expected further clearance time of 20 minutes` 라고 적혀 있는데 `Request expected further clearance` 라고 했습니다",
          "코멘트 : **이번 세트에서 가장 아까운 문항입니다.** 기관 호출과 위치(WYNTA 홀딩)는 정확했는데, **지시문이 요구한 두 가지를 둘 다 하지 않았습니다.**"
        ]
      },
      "P2A-Q1": {
        "verdict": "⚠",
        "model": "Fenwick Control, HL123, level at flight level 290, 90 miles from DORLIN, request descent.",
        "notes": [
          "누락된 필수 readback 요소 : **① 거리 숫자 90 ② 강하 요청**",
          "표준교신용어 오류 : `request inbound for ~` 는 요청이 아닙니다. 지시문은 `request descent` 입니다",
          "코멘트 : 기관 호출과 **`level at flight level 290`** 이 정확합니다 — 상태 보고 동사(`level at`)를 쓰는 것은 세 세트 연속 안정적입니다."
        ]
      },
      "P2A-Q2": {
        "verdict": "✅",
        "model": "Descend to flight level 190, reduce speed to 280 knots, expect the DORLIN ONE arrival, ILS runway 15, altimeter 30.12, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **다섯 요소 전부**",
          "표준교신용어 오류 : 없음 (ASR 오인)",
          "코멘트 : **고도 · 속도 · 도착절차 · 활주로 · 고도계 다섯 요소를 전부 받았습니다. 다섯 세트 연속**입니다. 고도계 30.12 까지 정확합니다. 긴 지시를 받아 적는 능력은 안정적으로 Level 4 수준입니다."
        ]
      },
      "P2A-Q3": {
        "verdict": "⚠",
        "model": "HL123 — before we decide, how long after the snow clearing until we would be on the ground?",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **묻는 동작은 정확합니다** — `before decide` 로 열었고, \"결정 전에 묻기\"는 세 세트 연속 수행 중입니다."
        ]
      },
      "P2A-Q4": {
        "verdict": "⚠",
        "model": "HL123, we will take the hold at DORLIN — 15 minutes plus 10 to touchdown is 25 minutes, and we have 1 hour 5 minutes of fuel, so that is well inside our reserve.",
        "notes": [
          "누락된 필수 readback 요소 : **비교 자체** (25분 소요 vs 65분 연료)",
          "표준교신용어 오류 : 없음 (`our field` 는 `our fuel` 의 ASR 오인)",
          "코멘트 : **결론은 맞습니다** — 홀딩하고 원래 공항으로 가는 것이 정답이고, 연료를 언급하신 것도 지시문을 따른 것입니다."
        ]
      },
      "P2A-Q5": {
        "verdict": "⚠",
        "model": "Holding at DORLIN, right turns, maintain flight level 190, expect further clearance at one five, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 (정정 후에는 홀딩 지점·선회 방향·고도·EFC 가 다 들어갔습니다)",
          "표준교신용어 오류 : 없음",
          "코멘트 : **스스로 `Correction` 하고 고친 것은 좋은 습관입니다** — 구술시험에서 감점 요소가 아닙니다. 다만 **고치기 전에 `expect on runway 15` 라고 잘못 말씀하셨습니다.** `expect further clearance at one five`(= 15분에 추가 허가 예정)를 **\"활주로 15\"** 로 들으신 것입니다. 둘은 전혀 다릅니다."
        ]
      },
      "P2A-Q6": {
        "verdict": "✅",
        "model": "Runway 15 is open, descend to 5,000 feet, turn left heading 120 for vectors to the ILS, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음 (`IRS`→ILS 는 ASR 오인이지만 §발음 소견 참조)",
          "코멘트 : 활주로 재개·고도 5,000·좌선회 기수 120·ILS 벡터가 다 들어갔습니다. 여기서도 **`correction` 으로 기수를 고쳤습니다** — 처음에 `turn heading to` 라고 하다가 `left hand heading 120` 으로 바로잡았습니다. 값은 맞았으니 ✅ 입니다."
        ]
      },
      "P2A-Q7": {
        "verdict": "⚠",
        "model": "Marchfield Tower, HL123, established on the ILS runway 15, passing 2,200 feet, request landing.",
        "notes": [
          "누락된 필수 readback 요소 : **의도** — 지시문의 `and intention`",
          "표준교신용어 오류 : 없음",
          "코멘트 : **위치보고가 정확합니다** — 기관 호출, `established on the localizer for 15`, **통과고도 2,200 까지.** EPTA_05 에서 1,800피트를 18000 으로 쓰고 EPTA_07 에서 `passing 3000` 으로 뒤집었던 항목인데, 이번에는 네 자리 피트를 제자리에 넣었습니다."
        ]
      },
      "P2A-Q8": {
        "verdict": "⚠",
        "model": "Cleared to land runway 15, HL123, and we can vacate via Delta.",
        "notes": [
          "누락된 필수 readback 요소 : **가능 여부에 대한 답** — 지시문의 `tell him whether you can do that`",
          "표준교신용어 오류 : `Clear` → **`Cleared`**(세 번째)",
          "코멘트 : 착륙 허가와 활주로, Delta 이탈이 들어갔고 **바람은 복창에서 제외**했습니다 — 정확한 판단입니다."
        ]
      },
      "P2A-Q9": {
        "verdict": "✅",
        "model": "Taxi to stand 24 via Delta and Mike, give way to the King Air, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음 (`giveaway`→give way 는 ASR 오인)",
          "코멘트 : **주기장 번호 · 유도로 두 개 · give way 대상 전부.** EPTA_06 P1A-Q1 에서 `the Dash 8` 을 빠뜨렸던 \"따라갈/양보할 대상\" 누락이 여기서는 없습니다 — King Air 를 명시했습니다."
        ]
      },
      "P2A-Q10": {
        "verdict": "⚠",
        "model": "HL123, we will hold for stand 24 rather than take the long taxi — 8 extra minutes of taxi costs us more fuel than waiting here. Request a holding point clear of the traffic behind us.",
        "notes": [
          "누락된 필수 readback 요소 : **① 이유 ② 요청 — 지시문이 요구한 두 가지**",
          "표준교신용어 오류 : 없음",
          "코멘트 : **결정은 분명합니다**(stand 24 를 기다리겠다). 이 문항은 어느 쪽을 골라도 정답이 될 수 있고, 평가하는 것은 **이유를 댔는지**입니다."
        ]
      },
      "P2A-Q11": {
        "verdict": "⚠",
        "model": "In this situation, what I needed to know was how long it would take from the end of the snow clearing until we were on the ground, because that was the number I had to compare with my fuel. The controller told me it was about 10 more minutes, so with 15 minutes of clearing that was 25 minutes in total, and I had 1 hour 5 minutes of fuel, so holding was comfortable. In my role as a pilot, I decide this by comparing the total delay with my fuel above reserve. I prefer the original airport, because a diversion means landing, re-planning and taking off again, and that costs our passengers far more time than holding does. For example, I would divert straight away if the delay was open-ended with no expected further clearance time, or if the weather at the destination was already at minimums — in that case waiting only burns the fuel I would need to go somewhere else.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **②(조종사로서의 판단 기준)에는 답했습니다.** \"연료에 따라 계산한다\", \"회항하면 다시 착륙하고 다시 이륙해야 하니 원래 공항을 우선한다\" — 뒤쪽 근거는 실무적으로 타당하고 구체적입니다."
        ]
      },
      "P2B-Q1": {
        "verdict": "⚠",
        "model": "Oakport Approach, HL123, level at flight level 240, 80 miles from BARSO, information Romeo.",
        "notes": [
          "누락된 필수 readback 요소 : **거리 숫자 80**",
          "표준교신용어 오류 : `recast inbound for ~`(= request inbound)는 위치보고에 불필요합니다",
          "코멘트 : 기관 호출, **`leveling at flight level 240`**, 정보문자 Romeo 가 정확합니다. 상태 보고 동사도 맞습니다."
        ]
      },
      "P2B-Q2": {
        "verdict": "⚠",
        "model": "Descend to 10,000 feet, reduce speed to 250 knots, expect the BARSO ONE arrival, ILS runway 27, altimeter 29.88, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — 다섯 요소 구조는 다 있습니다",
          "표준교신용어 오류 : **`Decent 1000`** — 10,000 피트를 1,000 으로 말씀하신 것으로 들립니다. 고도는 필수 복창 항목이고 1,000 과 10,000 은 9,000피트 차이입니다",
          "코멘트 : 속도 250·BARSO ONE arrival·ILS 27·고도계 29.88 은 전부 정확합니다. **고도 하나만 자릿수가 흔들렸습니다.**"
        ]
      },
      "P2B-Q3": {
        "verdict": "✅",
        "model": "Approach, HL123, passing 15,000 feet we flew through a flock of birds and engine number 2 is vibrating. We have reduced thrust on that engine and the vibration has settled. Request priority for landing.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **세 기능 전부 수행했습니다**",
          "표준교신용어 오류 : **고도 `passing 1,500 feet`** — 실제는 15,000 입니다. 그리고 **어느 엔진인지**(number 2)가 빠졌습니다",
          "코멘트 : **이번 세트에서 가장 중요한 성과입니다.**"
        ]
      },
      "P2B-Q4": {
        "verdict": "❌",
        "model": "Affirm, HL123 — our limit is 230 knots or less, and 210 is inside that, so we can accept 210 knots.",
        "notes": [
          "누락된 필수 readback 요소 : **두 속도의 비교**",
          "표준교신용어 오류 : **`NEGATIVE` 가 틀렸습니다.** 제한이 **230노트 이하**이고 관제사가 요구한 것은 **210노트 이하**입니다. **210 < 230 이므로 할 수 있습니다**",
          "코멘트 : **이번 세트의 핵심 문항이고, 부등호 방향이 또 뒤집혔습니다.**"
        ]
      },
      "P2B-Q5": {
        "verdict": "✅",
        "model": "Turn left heading 300 for vectors to the ILS, descend to 6,000 feet, HL123. Our intention is to continue for the ILS runway 27 and land at Oakport with the fire service standing by.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — 복창과 intentions 둘 다 있습니다",
          "표준교신용어 오류 : 없음",
          "코멘트 : **`Our intention is to ~` 구문을 썼습니다.** EPTA_06 에서 처음 쓰고 EPTA_07 에서 다시 빠졌던 항목인데, 이번에 돌아왔습니다. 좌선회 기수 300 과 고도 6,000 도 정확합니다."
        ]
      },
      "P2B-Q6": {
        "verdict": "❌",
        "model": "HL123, affirm, we would like the fire service standing by as a precaution. And negative, we do not need to shut the engine down — it is still running at reduced thrust.",
        "notes": [
          "누락된 필수 readback 요소 : **두 번째 질문(엔진 정지 여부)에 대한 답 전체**",
          "표준교신용어 오류 : **사유가 모순됩니다.** `I think the fire Services because there's no fire in the engine` — 불이 없는데 소방대를 원한다는 것이 되어, 관제사는 원한다는 뜻인지 아닌지 알 수 없습니다",
          "코멘트 : **`two things` 라고 세어 준 질문에 한 토막만 답했습니다.** EPTA_04·05 에서 두 세트 연속 지적했고 EPTA_06·07 에서 해결됐던 항목이 다시 돌아왔습니다."
        ]
      },
      "P2B-Q7": {
        "verdict": "✅",
        "model": "Negative, HL123 — the vibration has settled and the engine is running normally, so we are happy to land on runway 27 as planned.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **결정 + 이유 두 토막**",
          "표준교신용어 오류 : 없음",
          "코멘트 : **`Negative` + 이유가 정확합니다.** 진동이 회복됐으니 재배치 없이 원래 계획대로 간다는 판단은 타당합니다."
        ]
      },
      "P2B-Q8": {
        "verdict": "⚠",
        "model": "Approach, HL123 — the vibration has dropped and engine number 2 is now running normally at reduced thrust. Request the fire service to follow us on the runway.",
        "notes": [
          "누락된 필수 readback 요소 : **갱신의 핵심** — 진동이 가라앉아 엔진이 정상 작동 중이라는 것",
          "표준교신용어 오류 : 없음",
          "코멘트 : **요청은 정확합니다** — 소방대가 활주로에서 따라오도록. 화물칸·엔진 손상 후 착륙에서 표준적인 요청입니다."
        ]
      },
      "P2B-Q9": {
        "verdict": "✅",
        "model": "Descend to 2,000 feet until established, cleared for the ILS runway 09 approach, contact Oakport Tower on 120.9, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음 (`clear items`→cleared ILS, `1209.99`→120.9 는 ASR 오인으로 보고 감점하지 않았습니다)",
          "코멘트 : **고도 2,000 · until established · 접근 허가 · 활주로 09 · 기관 · 주파수 전부.** 접근 허가 복창은 **다섯 세트 연속**이고, 최종 클리어런스를 완전히 받는 것은 이제 흔들리지 않습니다."
        ]
      },
      "P2C-Q1": {
        "verdict": "⚠",
        "model": "During the approach, passing 15,000 feet, we flew through a flock of birds and engine number 2 started vibrating. We reduced thrust on that engine and the vibration settled, but we had to keep the speed at 230 knots or less. We informed the controller and requested priority for landing. He gave us a speed for spacing and a vector for the ILS. He also asked us whether we wanted the fire service and whether we would need to shut the engine down. Then the vibration dropped further and the engine ran normally at reduced thrust. In the end we landed at Oakport off the ILS as we had planned.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **사건 이름과 조치가 들어 있습니다** — 조류 충돌(`flower burst` = flock of birds), 엔진 충돌, 진동, **추력 감소**, 관제사 통보, 체크리스트. EPTA_06·07 두 세트 연속 사건명이 없었던 것에 비하면 분명한 개선이고, 비행 단계도 `approach phase` 로 맞습니다."
        ]
      },
      "P2C-Q2": {
        "verdict": "⚠",
        "model": "I think the controller handled it well. As soon as we informed him, he gave us priority and offered us options, and he asked us to reduce speed for spacing. One thing that could have been handled differently is that he did not need to ask us about the fire service or about shutting the engine down — in an engine problem I think he could simply have had the fire service in position and told us so, instead of asking us to decide while we were flying a damaged engine. Also, he did not need to ask us to choose a runway, because runway 09 had a 10 knot headwind and 27 had a tailwind, so 09 was clearly the better one. Other than that, I think everything was handled well.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **이번 세트에서 가장 좋은 응답이고, 세 가지가 동시에 됐습니다.**"
        ]
      }
    }
  },
  "EPTA_09": {
    "set": "EPTA_09",
    "level": "Level 2",
    "summary": "",
    "gradedAt": "2026-11-02",
    "items": {
      "P1A-Q1": {
        "verdict": "⚠",
        "model": "Line up and wait runway 16, HL123.",
        "notes": [
          "활주로 16 정확합니다. `number two for departure` 는 교통정보라 복창 불필요이고, 복창해도",
          "전사에 `line up` 이 잡히지 않고 `By weight`(= and wait)만 남았습니다. **`line up and wait`",
          "코멘트 : `I'm Number Two` 의 `I'm` 은 비표준입니다. 복창은 지시받은 말 그대로"
        ]
      },
      "P1A-Q2": {
        "verdict": "✅",
        "model": "After departure turn left heading 130, climb to 11,000 feet, contact Departure on\n125.75, HL123.",
        "notes": [
          "**다섯 자리 고도 11,000 정확.** EPTA_08 에서 10,000→`1000`, 15,000→`1,500` 으로 0 이",
          "조건부 `after departure`, heading 130, 주파수 125.75 — 네 요소 전부 정확합니다.",
          "코멘트 : `turn` 이 `tone` 으로 전사됐습니다. 발음 항목에서 다시 다룹니다."
        ]
      },
      "P1A-Q3": {
        "verdict": "❌",
        "model": "When 30 miles from BRIMO descend to 10,000 feet, reduce speed to 250 knots, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : **`when 30 miles from BRIMO` 조건 전체.** 이 지시는 \"지금",
          "거리 숫자 `30` 도 함께 빠졌습니다 — EPTA_08 에서 90마일·80마일을 통째로 빠뜨린 것과",
          "코멘트 : `reduced` → `reduce` 또는 `reducing`. 지시를 그대로 되돌릴 때는 과거형을 쓰지"
        ]
      },
      "P1A-Q4": {
        "verdict": "⚠",
        "model": "Descend to 2,500 feet, cleared for the ILS runway 16 approach, wilco report\nestablished, HL123.",
        "notes": [
          "표준교신용어 오류 : **`Clear` → `Cleared`.** 접근 허가는 **필수 복창 중 가장 무거운",
          "`runway 160` 으로 전사됐습니다. 활주로 16 은 **`runway one six`** 이고 거기서 끊어야",
          "2,500 과 `report established` 는 정확합니다."
        ]
      },
      "P1B-Q1": {
        "verdict": "❌",
        "model": "Affirm, HL123 — the reported visibility is 8,000 metres and our company\nminimum is 5,000, and the cloud base is 4,000 feet against 2,500 required, so we can accept\nthe visual approach to runway 21.",
        "notes": [
          "표준교신용어 오류 : **`are you able ~?` 의 첫 단어는 AFFIRM**. 수락한다는 말이 문장",
          "**값의 역할이 바뀌었습니다.** `Our company restriction, visibility is 8,000 metre` —",
          "지시문이 `tell him both the reported visibility and the figure your company requires`",
          "코멘트 : 고친 것은 ① `restriction` → `minimum` ② 8,000 과 5,000 을 분리 ③ `Affirm` 을"
        ]
      },
      "P1B-Q2": {
        "verdict": "⚠",
        "model": "Negative, HL123 — we are maintaining 300 knots. You cancelled the speed\nrestriction and told us to resume normal speed. Say again if you want 250 knots.",
        "notes": [
          "**`NEGATIVE` 가 첫 단어입니다 — 해결된 항목입니다.** SAMPLE_01 에서 두 번 빠졌던",
          "**동사 선택이 틀렸습니다.** `Increase speed 300` 은 **지시를 복창하는 동사**입니다. 지금",
          "코멘트 : 고친 것은 ① 동사(`increase` → `are maintaining`) ② `After restriction, normal"
        ]
      },
      "P1B-Q3": {
        "verdict": "⚠",
        "model": "Turn right heading 240 for vectors to the ILS, HL123. And be advised,\ndescending through 7,000 feet we lost about 15 knots of airspeed very suddenly and the\naircraft sank — windshear, a few seconds only.",
        "notes": [
          "복창(heading 240)은 정확합니다.",
          "**`and be advised` 로 시작한 것은 정확한 선택입니다.** EPTA_08 P1B-Q3 에서 \"본 것을",
          "그런데 **문장이 끝나지 않았습니다.** `We saw` 에서 끊겼고, 무엇을 만났는지(**windshear**),",
          "코멘트 : 보고 틀은 **`And be advised, [어디서] we [무엇을 겪었다]`** 입니다. 복창을"
        ]
      },
      "P1B-Q4": {
        "verdict": "⚠",
        "model": "HL123, level 6,000 feet. We had set 29.87 by mistake — correction, altimeter\n29.78 now set.",
        "notes": [
          "**정정 3단이 완성됐습니다** — 틀린 값(29.87) + `Correction` + 올바른 값(29.78). EPTA_08",
          "그런데 **관제사가 물은 것은 고도입니다.** `say your altitude` 에 대한 답, 즉 **`level",
          "코멘트 : 고친 것은 ① 맨 앞에 `level 6,000 feet` 추가(누락 내용) ② `We said altitude to`"
        ]
      },
      "P1B-Q5": {
        "verdict": "✅",
        "model": "Unable to increase speed to 320 knots, HL123 — our turbulence penetration speed\nis 280 knots and we are at 280 now. Request vectors for spacing with the traffic behind.",
        "notes": [
          "**이 세트 전체에서 가장 잘된 문항입니다.** `unable` + 사유 + 대안 3단이 완성됐고,",
          "`request vectors for spacing` — **REQUEST + 명사구** 정확합니다.",
          "코멘트 : `Vector for another spacing` 을 한 번 더 반복하셨습니다. 한 번 말하면 됩니다."
        ]
      },
      "P1B-Q6": {
        "verdict": "❌",
        "model": "Weyland Departure, HL123, passing 9,000. Confirm transition altitude\none zero thousand? Our charts show one zero thousand, our briefing sheet says one eight\nthousand.",
        "notes": [
          "기관 호출은 정확합니다.",
          "**`say what you have` 를 하지 않았습니다.** 내가 가진 두 값(10,000 / 18,000)이 없으면",
          "기능도 어긋났습니다 : 지시문은 **confirmation** 인데 `Request transition altitude` 는",
          "코멘트 : 전이고도는 **필수 복창 7항목** 중 하나입니다(`atc-terminology.md` §2). 이",
          "**출제 쪽 문제 (2026-11-02 정정)** : 지시문의 `say what you have` 는 제가 만든 표현으로"
        ]
      },
      "P2A-Q1": {
        "verdict": "✅",
        "model": "Weyland Delivery, HL123, request ATC clearance.",
        "notes": [
          "기관 호출 → 콜사인 → `REQUEST + 명사구` 순서가 정확합니다."
        ]
      },
      "P2A-Q2": {
        "verdict": "✅",
        "model": "Cleared to Ferndale via the TULAN TWO departure, BRIMO transition, climb to 7,000\nfeet, squawk 2514, HL123.",
        "notes": [
          "**5요소 전부 담겼습니다** — 목적지·SID·transition·고도·squawk. 긴 클리어런스 복창은",
          "코멘트 : `BRIMO` 가 `Primo` 로 전사됐습니다. B와 P는 관제사에게 완전히 다른 웨이포인트로"
        ]
      },
      "P2A-Q3": {
        "verdict": "❌",
        "model": "Taxi to holding point Charlie 2 via Golf and Lima, HL123. Roger the 8 extra\nminutes.",
        "notes": [
          "**`Charlie 2` 를 `Charlie 4` 로 말씀하셨습니다.** 출발 게이트가 Gate Charlie 4 였기",
          "`acknowledge the delay` 는 수행하셨습니다(`expect eight more minutes`) — **지시문 마지막",
          "코멘트 : `taxi to` 동사가 빠졌습니다. 유도 지시 복창은 `Taxi to ~ via ~` 로 시작합니다."
        ]
      },
      "P2A-Q4": {
        "verdict": "⚠",
        "model": "HL123, we are on Golf now, approaching Lima, taxiing to holding point\nCharlie 2.",
        "notes": [
          "위치는 **그림과 일치합니다** — `We are on Golf` 정확합니다.",
          "표준교신용어 오류 : **`negative` 로 시작할 질문이 아닙니다.** `A 냐 B 냐`를 묻는",
          "**`say which holding point you are taxiing to` 미수행** — `Charlie 2` 가 없습니다."
        ]
      },
      "P2A-Q5": {
        "verdict": "⚠",
        "model": "Behind the departing Boeing 777, line up and wait runway 16, HL123.",
        "notes": [
          "**바람을 복창에서 뺀 것은 정확한 판단**입니다. 바람은 필수 복창 항목이 아닙니다.",
          "`line up and wait runway 16` 정확합니다.",
          "그런데 전사가 **`before Boeing`** 입니다. 지시는 **`behind`** — **뒤**입니다. `before`",
          "코멘트 : `Boeing Boeing` 으로 두 번 말하고 **기종 번호 777 은 빠졌습니다.** 선행기를"
        ]
      },
      "P2A-Q6": {
        "verdict": "✅",
        "model": "Weyland Departure, HL123, passing 3,000 feet for 7,000.",
        "notes": [
          "**두 고도를 모두 정확히** 담았습니다. 기관 호출도 있습니다. EPTA_06 에서",
          "코멘트 : `climbing through A to B` 도 통하지만 표준형은 **`passing A for B`** 입니다."
        ]
      },
      "P2A-Q7": {
        "verdict": "✅",
        "model": "Unable flight level 370, HL123. Passing 12,000 feet we got a fuel imbalance —\nthe right tank has about 900 kilos more than the left, so we have to stop the climb at\nflight level 250 for about 25 minutes while we correct it.",
        "notes": [
          "**`unable` + FL370 + FL250 — 두 고도를 나란히 말씀하셨습니다.** P1B-Q5 와 함께 **최우선",
          "코멘트 : 고친 것은 문법뿐입니다 — ① `we have to let us fly level 250` → `we have to stop"
        ]
      },
      "P2A-Q8": {
        "verdict": "✅",
        "model": "We can accept flight level 250, HL123, and we need about 25 minutes. After that we\nwill request flight level 370.",
        "notes": [
          "**두 질문에 둘 다 답했습니다.** 이 턴은 두 값을 말하지 않으면 성립하지 않게 만든",
          "뒤에 `after that we will request flight level 370` 을 덧붙인 것은 지시문에 없던",
          "코멘트 : `we may need to 25 minutes` → `we need about 25 minutes`. `need` 뒤에 `to` 를"
        ]
      },
      "P2A-Q9": {
        "verdict": "❌",
        "model": "HL123, we will continue to Ferndale. At flight level 250 it is 2 hours 45\nminutes and we have 3 hours 10 minutes of fuel on board, so we are inside our reserve. We\ndo not need Crestview.",
        "notes": [
          "**이 세트에서 가장 큰 실패입니다.** ① **`2 hours 45 minutes` 를 `45 minutes` 로",
          "지시문이 `tell him both fuel figures` 였습니다. 30초 문항에 **10단어도 쓰지 않았습니다.**",
          "코멘트 : 탑재 3시간 10분은 **Initial Situation 에 있던 값**입니다. Ⅱ-A·Ⅱ-B 는 처음"
        ]
      },
      "P2A-Q10": {
        "verdict": "✅",
        "model": "Maintain flight level 250, cleared direct BRIMO, contact Ridgeway Control on\n133.45 in 10 minutes, HL123.",
        "notes": [
          "FL250 · direct BRIMO · 133.45 · `in 10 minutes` 네 요소 전부 정확합니다. **주파수는"
        ]
      },
      "P2A-Q11": {
        "verdict": "❌",
        "model": "In this situation, I compared two numbers. At flight level 250 the flight plan gave 2 hours\n45 minutes to Ferndale, and we had 3 hours 10 minutes of fuel on board. That left about\n25 minutes over the planned burn, which is inside our final reserve, so continuing was\nsafe. Crestview was only 40 minutes away, but diverting there would have cost the\npassengers a whole day, so I kept it as a backup instead of using it.\nIn my role as a pilot, when I am held down at a lower level I always do the same three\nsteps. First I ask the controller how long the restriction will last. Second I take the new\nburn figure for that level, not the planned one. Third I subtract it from the fuel on board\nand check that what is left is more than my final reserve plus the alternate.\nFor example, if the burn at the lower level left me with less than my reserve, or if the\nweather at destination was marginal, I would divert straight away rather than continue and\narrive with nothing in hand.",
        "notes": [
          "**90초 문항 무응답은 혼자서 등급을 내립니다.** EPTA_05 에서 세 문항을 비워 Level 2 로",
          "`Give an example` 은 **8세트 연속** 미수행입니다."
        ]
      },
      "P2B-Q1": {
        "verdict": "⚠",
        "model": "Norgate Approach, HL123, level flight level 260, 70 miles from ORVIL, information\nTango.",
        "notes": [
          "기관 호출 → 콜사인 → 고도 → 거리 **구조는 정확합니다.** FL260 도 맞습니다.",
          "값 두 개가 틀렸습니다 : **`70 miles` → `7 miles`**(EPTA_08 에서는 90·80마일을 통째로",
          "코멘트 : `information Tango` 도 넣으면 관제사가 ATIS 를 다시 묻지 않습니다."
        ]
      },
      "P2B-Q2": {
        "verdict": "❌",
        "model": "Descend to 10,000 feet, reduce speed to 250 knots, expect the ORVIL ONE arrival,\nILS runway 21, Norgate altimeter 29.92, HL123.",
        "notes": [
          "**10,000 은 정확합니다** — 다섯 자리 고도 2/2 성공입니다.",
          "누락된 필수 readback 요소 : **속도 `250` 이 `509` 로 바뀌었습니다**(속도는 필수 복창),",
          "코멘트 : `or 2?` 처럼 **답 안에서 되묻지 마십시오.** 확실하지 않으면 문항당 한 번 쓸 수"
        ]
      },
      "P2B-Q3": {
        "verdict": "⚠",
        "model": "Approach, HL123, we have a fuel leak from the left wing — the left tank is\ndown to 900 kilos and the crossfeed is closed, so the leak is only taking from the left\nside. We have 55 minutes of fuel. Request priority for landing.",
        "notes": [
          "조치(`the crossfeed is closed`)와 요청(`request priority for landing`)은 정확합니다.",
          "**사건의 이름이 없습니다.** `fuel leak` 이라는 말이 한 번도 나오지 않고 증상(좌측에",
          "어휘 오류 : **`900 kilometer` → `900 kilos`**(킬로그램). 900킬로미터는 연료량이 아닙니다.",
          "`we have to hold and work at least` 는 뜻이 성립하지 않습니다. 빼는 것이 낫습니다.",
          "**잔여 55분이 없습니다** — 지문과 **그림에 두 번** 나온 값입니다."
        ]
      },
      "P2B-Q4": {
        "verdict": "❌",
        "model": "Affirm, HL123 — we have 55 minutes of fuel and you need 20 minutes, so we can\ntake that.",
        "notes": [
          "**수락 판단은 정확하고, 두 숫자를 나란히 놓는 형식도 갖췄습니다.** 그런데 **값이",
          "그 결과 **논리가 거꾸로 됩니다** : 15분 남았는데 20분 걸리는 벡터를 수락한다는 말이 되어,",
          "코멘트 : 고친 것은 **숫자 하나(15 → 55)와 첫 단어(`Affirm`)** 뿐입니다. 문장 구조"
        ]
      },
      "P2B-Q5": {
        "verdict": "❌",
        "model": "HL123, we have 55 minutes of fuel on board and we need 20 minutes to touchdown, so\nwe are inside our reserve.",
        "notes": [
          "**두 질문에 모두 답하려 한 구조는 성공입니다** — 되묻기 턴이 의도대로 작동했습니다.",
          "그런데 **값이 세 개 다 어긋납니다** : 잔여 15분(실제 55분), 예비 30분(지문에 없는 값),",
          "코멘트 : 이 문항이 이번 세트의 **진짜 발견**입니다. 두 값을 **말하는 동작은 생겼는데**,"
        ]
      },
      "P2B-Q6": {
        "verdict": "✅",
        "model": "Turn right heading 310 for vectors to the ILS, descend to 6,000 feet, HL123. Our\nintention is to land as soon as possible on runway 21.",
        "notes": [
          "heading 310 과 6,000 둘 다 정확합니다(필수 복창 2항목).",
          "**`our intention is to ~` 구문이 3세트 연속** 나왔습니다. 안정된 항목입니다.",
          "코멘트 : `our intentional needs to` → **`our intention is to`**. `intentional` 은"
        ]
      },
      "P2B-Q7": {
        "verdict": "❌",
        "model": "Affirm, HL123, we would like the fire service standing by as a precaution — we\nare still leaking fuel. And negative, there is no smoke and no fire.",
        "notes": [
          "**판단이 틀렸습니다.** 연료가 새는 항공기는 **소방대를 세워 두는 것이 정상**입니다. 불이",
          "**둘째 질문을 오독했습니다.** `is there any smoke or fire?` 는 **사실을 묻는 질문**입니다.",
          "두 질문에 둘 다 응답하려 한 **구조는 유지됐습니다**(EPTA_08 에서 하나만 답했던 항목)."
        ]
      },
      "P2B-Q8": {
        "verdict": "⚠",
        "model": "HL123, we will wait the 6 minutes for runway 21. Runway 03 is only 2,000\nmetres and we need 2,200, so we cannot use it.",
        "notes": [
          "**결정과 사유가 모두 정확합니다.** 2,200m 가 필요하다는 근거를 들어 RWY21 을 기다리기로",
          "그런데 지시문은 `tell him both distances` 였습니다 — **RWY03 의 2,000m 가 없습니다.**",
          "코멘트 : 고친 것은 **`Runway 03 is only 2,000 metres` 한 토막 추가**뿐입니다. 나머지는"
        ]
      },
      "P2B-Q9": {
        "verdict": "⚠",
        "model": "Descend to 2,000 feet until established, cleared for the ILS runway 21 approach,\ncontact Norgate Tower on 118.35, HL123.",
        "notes": [
          "주파수 118.35 정확, 활주로 21 정확, `established` 정확합니다.",
          "표준교신용어 오류 : **`clearance` → `cleared for`**, 그리고 **`ILS` 가 빠졌습니다.**",
          "`until` 이 전사에 잡히지 않았습니다. `descend to 2,000 feet **until** established` 의"
        ]
      },
      "P2C-Q1": {
        "verdict": "⚠",
        "model": "During the approach phase we had a fuel leak from the left wing. Passing\n14,000 feet the left tank quantity started dropping much faster than the right, so we\nclosed the crossfeed and we had 55 minutes of fuel left. We told Approach and requested\npriority for landing. There was one aircraft ahead of us, so the controller offered us a\nvector round behind him — 20 minutes to touchdown — and we accepted it, because 20 minutes\nwas well inside our 55. Then the aircraft ahead went around and runway 21 was blocked for\nabout 6 minutes. Runway 03 was open but only 2,000 metres, and we needed 2,200, so we could\nnot use it and we waited for runway 21. The leak stopped, we had 45 minutes left, and we\nwere cleared for the ILS runway 21 approach.",
        "notes": [
          "분량(127단어)과 시작 틀(`during the approach phase`)은 좋습니다. 사건명도 전달됐고",
          "전개를 **세 군데 바꿔 말했습니다** : ① 관제사는 **감속을 요구하지 않았습니다** — 20분",
          "값 오류 : **15분(실제 55분)**, **runway 06(실제 03)**.",
          "코멘트 : 고친 것은 ① 사건 전개를 사실대로 ② 값 두 개 ③ `we cannot upset` → `we"
        ]
      },
      "P2C-Q2": {
        "verdict": "⚠",
        "model": "I think the ATC handled it well. First, as soon as he heard about our fuel\nleak, he gave us a vector behind the traffic and asked us how long we could stay up. He also\ninformed us that runway 21 was blocked, so we could work out how long the wait would be.\nFortunately the leak stopped, so we could land as we had planned. One thing that could have\nbeen handled differently is that he could have arranged the fire service himself instead of\nasking us, because we were busy running the checklist. Other than that, everything was\nhandled well.",
        "notes": [
          "**구조는 완성됐습니다** — `I think the ATC handled it well` → 구체적 근거 셋 →",
          "문법 오류 넷 : ① **`He could have been handled differently`** → 주어가 사람이면",
          "사실 오류 : **홀딩은 없었습니다** — 벡터였습니다. Part Ⅱ-A 와 섞인 것으로 보입니다",
          "제안 내용은 좋습니다 — \"두 선택지를 묻지 말고 소방대를 타워에 직접 알려줬으면 좋았다\"는"
        ]
      }
    }
  },
  "EPTA_10": {
    "set": "EPTA_10",
    "level": "Level 2",
    "summary": "",
    "gradedAt": "2026-11-03",
    "items": {
      "P1A-Q1": {
        "verdict": "✅",
        "model": "Squawk 4162, ident. Hotel Lima one two three.",
        "notes": [
          "표준교신용어 오류 : `identify` → **`ident`**. ident 는 그 자체로 명령어이고 동사 변화를 주지",
          "코멘트 : squawk 값 정확, **네 자리를 하나씩 끊어**(`four one six two`) 말했다. 콜사인 위치도"
        ]
      },
      "P1A-Q2": {
        "verdict": "✅",
        "model": "Cleared to Pohang via MIRYA TWO departure, HARAN transition, climb to 5,000 feet,\ndeparture runway tree four. Hotel Lima one two three.",
        "notes": [
          "표준교신용어 오류 : `Clear to` → **`Cleared to`**. 허가를 받았음을 복창하는 것이므로 과거분사.",
          "코멘트 : **5요소(목적지·SID·transition·고도·활주로) 전부 정확. 7세트 연속 성공.** 이 세트의"
        ]
      },
      "P1A-Q3": {
        "verdict": "✅",
        "model": "Climb to flight level tree tree zero, maintain two eight zero knots until level.\nHotel Lima one two three.",
        "notes": [
          "코멘트 : **완전 정답이다.** 고도·속도·조건 세 요소 전부 정확하고, **숫자를 자릿수별로",
          "재채점 메모 : **⚠️ → ✅.** 구글 STT 가 `Time to fly level 3300 ... until later` 로 받아써서"
        ]
      },
      "P1A-Q4": {
        "verdict": "✅",
        "model": "Descend to 2,500 feet, cleared for the ILS runway one niner approach. Hotel Lima\none two three.",
        "notes": [
          "표준교신용어 오류 : `clear` → **`cleared for the`**. 접근 허가는 `cleared for` 가 있어야",
          "코멘트 : **강하고도 2,500 · `ILS` · 활주로 `one niner` 세 요소 전부 정확하다.** 접근 방식",
          "재채점 메모 : **⚠️ → ✅.** 구글이 `Clear Iration Runway. 190 approach` 로 받아써서"
        ]
      },
      "P1B-Q1": {
        "verdict": "❌",
        "model": "Negative, HL123. We turned right heading zero four zero at 2,000 feet to stay\nclear of a build-up, and we are still on zero four zero. Request to maintain this heading\nuntil clear of the weather.",
        "notes": [
          "표준교신용어 오류 (중대) : **`Affirm` 으로 시작했다가 그 뒤에 `negative` 를 붙였다.**",
          "값 오류 : 기수가 **040 인데 090 으로 말했다.** 지문에 두 번 나온 값이다.",
          "지시문 미수행 : `with a reason` — **build-up(적란운) 회피라는 사유가 없다.** 사유가 없으면",
          "코멘트 : 세 가지(첫 단어·실제 값·사유)가 모두 비었다. `Confirm maintaining ~?` 함정형은",
          "재채점 메모 : 구글은 앞부분을 `Mmm.` 으로 흘렸는데 재전사에서 **`Affirm` 이 드러났다** —"
        ]
      },
      "P1B-Q2": {
        "verdict": "⚠",
        "model": "Affirm, HL123. We can accept runway one four — our wet runway crosswind limit is\ntwo five knots and the crosswind is one eight knots.",
        "notes": [
          "표준교신용어 오류 : `are you able ~?` 의 첫 단어는 **`AFFIRM`** 이다. 첫 낱말이 두 전사기",
          "문법 : `so we can accept land` → **`so we can accept runway one four`** 또는",
          "코멘트 : **판단 방향이 정확하고(18 < 25) 자기 한계값 25kt 를 말했다.** EPTA_08 의 최우선"
        ]
      },
      "P1B-Q3": {
        "verdict": "❌",
        "model": "Gangneung Control, HL123, maintaining\nflight level one six zero. Request descent due to light icing — we have been in it for one\nfive minutes with anti-ice on.",
        "notes": [
          "지시문 미수행 : **세 요구 중 둘이 비었다.** ① 기관 호출 `Gangneung Control` 은 **정확하다**",
          "표준교신용어 오류 : **`Request present level` 은 \"내 현재 고도를 알려달라\"는 뜻이 된다.**",
          "코멘트 : **이 세트에서 가장 심각한 문항이다.** 20초가 주어졌는데 10단어로 끝냈고, 화면에",
          "재채점 메모 : 구글이 `Control Hotel Lima 123` 으로 잘라 \"기관명이 `Control` 뿐\"이라고",
          "**★ 출제 쪽 결함 (2026-11-03 정정)** : 이 문항은 **결함 문항이었다.** 실제 출제 4세트는",
          "**그래도 ❌ 는 유지한다** — 지문에 **주어진** 값(FL160)과 사유(착빙)를 말하지 않았고,"
        ]
      },
      "P1B-Q4": {
        "verdict": "⚠",
        "model": "Cleared for takeoff runway tree four, HL123. Be advised, while taxiing we saw a\nlarge piece of rubber on taxiway Sierra.",
        "notes": [
          "표준교신용어 오류 : `Clear for` → **`Cleared for takeoff`** (이번 세트 3회째).",
          "코멘트 : ① **두 기능 모두 수행했다** — 복창 + 목격 보고. **시차형**(아까 본 것을 지금",
          "재채점 메모 : 구글이 `and be able to buy it` 으로 받아써서 \"뜻이 잡히지 않는다 — 말이"
        ]
      },
      "P1B-Q5": {
        "verdict": "❌",
        "model": "Negative, unable 2,500 feet per minute due to our weight. The best we can give is\n1,500 feet per minute.",
        "notes": [
          "값 오류 2건 (두 전사기 일치) : ① 관제사가 요구한 값은 **2,500** 인데 `250` ② 자기 능력치는",
          "표준교신용어 오류 : `unable to descend 250 feet per minute` — 강하율은 `descend`(고도 이동)",
          "코멘트 : **구조는 완성됐다** — unable + 사유(due to weight) + 대안(our limit is ~) 세 토막이"
        ]
      },
      "P1B-Q6": {
        "verdict": "❌",
        "model": "Approach, HL123. Confirm landing runway one niner? Our arrival information says\nrunway one niner, but we heard the aircraft ahead cleared for runway zero one. We are\nplanning for runway one niner.",
        "notes": [
          "지시문 미수행 : ① `Make a confirmation` — **`Confirm ~?` 질문 형태가 없다.** 사실을 늘어놓는",
          "표준교신용어 오류 : 기관 호출을 `Arrival` 로 했다. 지시문은 **approach** 를 지정했다.",
          "코멘트 : **두 활주로(19 와 01)의 불일치를 정확하고 알아듣게 전달했다** — 상황 이해는 됐다.",
          "재채점 메모 : 구글 전사(`Know we heard one-nighter running in use but at least told us he"
        ]
      },
      "P2A-Q1": {
        "verdict": "✅",
        "model": "Gwangju Delivery, HL123, information Hotel. Request ATC clearance to Ulsan, and\nwe are ready to start.",
        "notes": [
          "코멘트 : **지시문 세 요구를 모두 수행했다** — ① 기관 호출 `Gwangju Delivery` **정확**(지명",
          "문법 : `we will advise you we are ready to start` 는 \"알려드리겠다\"와 \"준비됐다\"가 섞여",
          "코멘트 : 화면 클루의 `information Hotel` 을 말하지 않았다. ATIS 문자를 같이 주면 관제사가",
          "재채점 메모 : **⚠️ → ✅.** 구글이 `Delivery Hotel Lima` 로 받아써서 \"기관명이 `Delivery`"
        ]
      },
      "P2A-Q2": {
        "verdict": "✅",
        "model": "Cleared to Ulsan as filed, NAKDO TWO departure, climb to 5,000 feet, squawk 2607,\nstart up approved. Hotel Lima one two three.",
        "notes": [
          "표준교신용어 오류 : `Clear to` → **`Cleared to`** (이번 세트 4회째).",
          "코멘트 : **5요소(목적지·SID·고도·squawk·start up) 전부 정확 — 7세트 연속.** squawk 2607 도",
          "발음 관찰 : 목적지가 turbo 에서 `Osan`, 구글에서 `usan` 으로 잡혔다. **Ulsan(울산)과"
        ]
      },
      "P2A-Q3": {
        "verdict": "⚠",
        "model": "Taxi to holding point Delta two via Mike and Sierra, HL123. Request an estimate\nof how long we will be held for the Boeing 767.",
        "notes": [
          "지시문 미수행 : `inquire how long it will take` — **묻지 않았다.** `we will expect to wait` 는",
          "코멘트 : 복창 자체는 정확하다 — holding point Delta two, via Mike and Sierra 세 요소 모두."
        ]
      },
      "P2A-Q4": {
        "verdict": "❌",
        "model": "HL123, we are stopped on Mike, holding short of Sierra.",
        "notes": [
          "상황 오독 (두 전사기 일치) : 지문은 **\"정지해 있다\"**(You have stopped on Mike)인데",
          "표준교신용어 오류 : `Negative` 가 부적절하다. 이 질문은 **\"A 냐 B 냐\"**(선택 질문)이고",
          "코멘트 : 위치보고 자체도 반쪽이다 — `on Mike` 는 맞지만 관제사가 알고 싶은 핵심인"
        ]
      },
      "P2A-Q5": {
        "verdict": "✅",
        "model": "Unable 2,400 metres — we need 2,600 metres for takeoff today. We will wait the\neight minutes for Sierra and Delta two. HL123.",
        "notes": [
          "코멘트 : **이 세트에서 가장 잘한 문항이다.** ① 판단 방향 정확(2,400 < 2,600 → 거부)",
          "코멘트 : 다만 대기 시간이 `a minute` 으로 나왔다 — 관제사가 말한 값은 **eight minutes** 다."
        ]
      },
      "P2A-Q6": {
        "verdict": "✅",
        "model": "Taxi to holding point Delta two via Sierra, contact Gwangju Tower 122.2 when\nready. Hotel Lima one two three.",
        "notes": [
          "코멘트 : **4요소 전부 정확 — holding point·경로·주파수·조건.** 특히 ① **주파수를 자릿수별로"
        ]
      },
      "P2A-Q7": {
        "verdict": "✅",
        "model": "Behind the landing A320, line up and wait runway tree four, behind. Hotel Lima one\ntwo three.",
        "notes": [
          "코멘트 : **조건부 지시의 조건을 정확히 살렸다** — `Behind the landing A320`. EPTA_07",
          "코멘트 : ICAO 관례상 조건부 지시 복창은 조건을 **앞뒤로 두 번** 말한다 —",
          "재채점 메모 : 구글이 `Beyond The Landing` 으로 받아써서 \"`behind` 와 `beyond` 는 뜻이"
        ]
      },
      "P2A-Q8": {
        "verdict": "⚠",
        "model": "HL123, our slot time is 0640 Zulu. Affirm, we can be airborne in the next tree\nminutes — we are ready now.",
        "notes": [
          "값 오류 (확정) : 슬롯시각은 **0640Z** 인데 **`zero six zero six`(0606)** 라고 말했다. 끊어",
          "지시문 미수행 : 두 번째 질문(`whether you can be airborne in the next tree minutes`)에",
          "코멘트 : **이 문항은 이번 세트의 핵심 장치였다** — 슬롯시각을 Initial Situation 에서 주고"
        ]
      },
      "P2A-Q9": {
        "verdict": "✅",
        "model": "Cleared for takeoff runway tree four, after departure climb to 5,000 feet, wilco\nreport passing tree thousand. Hotel Lima one two three.",
        "notes": [
          "코멘트 : **4요소 전부 정확한 완전 정답이다** — `cleared for takeoff`(과거분사까지 정확) ·",
          "재채점 메모 : **❌ → ✅.** 구글이 `Runway 34 after departure, climbed to 5000 ...` 로"
        ]
      },
      "P2A-Q10": {
        "verdict": "✅",
        "model": "Gwangju Departure, HL123, climbing through tree thousand for 5,000 feet. Request\nfurther climb.",
        "notes": [
          "코멘트 : **지시문 세 요구를 모두 수행했다.** ① 기관 호출 `Gwangju Departure` **정확**",
          "표준교신용어 오류 : `to 5,000` 보다 **`for 5,000`** 이 관례다(through = 통과, for = 목표).",
          "재채점 메모 : 구글이 `Departure Hotel Lima` / `requests for the climb` 로 받아써서"
        ]
      },
      "P2A-Q11": {
        "verdict": "❌",
        "model": "In this situation, I compared the runway length available from Delta one,\n2,400 metres, with the takeoff distance we needed today, 2,600 metres. Delta one was\n2,400 metres, so it was too short for us even though it was faster, and that is why I\nchose to wait eight minutes for Sierra.\nAs a pilot, we have to **pay attention to** the slot time, the runway length, and the\nfuel. **For the slot time**, we have to get out before it expires. **For the runway\nlength**, our takeoff distance required may be longer than what is available. **For the\nfuel**, if we stand on the taxiway it burns fuel we cannot use in flight. **I write these\nthree figures on my notepad before start-up and cross them off as they change.**\nFor example, I once had to ask a controller to repeat a **squawk code**, because the\nfirst two digits were masked by another transmission.",
        "notes": [
          "지시문 미수행 : 3부 중 **①과 ③이 비었다.** ① `What did you compare before you answered,",
          "문법 : `attend attention on` → **`pay attention to`**(두 전사기 일치, 3회 반복).",
          "코멘트 : ② 만 답했는데 그 내용도 \"왜 중요한가\"에 머물렀고 질문인 **\"어떻게 관리하는가\"**",
          "코멘트 : 녹음 뒷부분에서 같은 낱말을 길게 되풀이한 구간이 있다 — 말이 막혔을 때"
        ]
      },
      "P2B-Q1": {
        "verdict": "⚠",
        "model": "Yeosu Approach, HL123, descending through flight level one niner zero for one one\nthousand, 70 miles from SOBAEK, inbound Yeosu, information Kilo.",
        "notes": [
          "값 오류 (두 전사기 일치) : **70 마일인데 `seven miles` 로 말했다.** EPTA_09 에서 똑같이",
          "코멘트 : **기관 호출 `Yeosu Approach` 정확**(지시문 지정 기관과 일치, 2세트 연속 유지).",
          "표준교신용어 오류 : `through FL190 **to** 11,000` → **`for` one one thousand**. 목표고도는"
        ]
      },
      "P2B-Q2": {
        "verdict": "✅",
        "model": "Descend to 9,000 feet, reduce speed two five zero knots, expect the SOBAEK ONE\narrival, ILS runway one seven, Yeosu altimeter two niner niner four. Hotel Lima one two\nthree.",
        "notes": [
          "코멘트 : **5요소 전부 정확한 완전 복창이다** — 강하 9,000 · 감속 250 · SOBAEK ONE arrival ·",
          "재채점 메모 : **⚠️ → ✅.** 구글이 `This in 9000 900,000 reduced speed, 250. As will be e,"
        ]
      },
      "P2B-Q3": {
        "verdict": "⚠",
        "model": "Yeosu Approach, HL123, passing one two thousand. We have a BRAKE SYSTEM 1 FAULT\nwith ANTI-SKID INOP. The alternate brake system is working but our braking is degraded, so\nour required landing distance is now tree,100 metres instead of 1,900. No smoke and nothing\nelse is affected. Request priority handling.",
        "notes": [
          "표준교신용어 오류 : 기관명이 **`Departure`** 다 — 지금 교신 상대는 **Yeosu Approach** 이고",
          "지시문 미수행 : `request priority` — **요청이 없다.** 네 요구 중 세 개만 수행.",
          "코멘트 : **사건 보고 자체는 정확하다** — ① 계통명(brake system one is failed) ②",
          "문법 : `anti-brake normally degraded` → **`the alternate brake system is normal but",
          "재채점 메모 : 구글이 `anti-skid is in operating` 으로 받아써서 \"`inoperative`(작동 불가)와"
        ]
      },
      "P2B-Q4": {
        "verdict": "✅",
        "model": "We need tree,100 metres, and Yeosu has only 2,800. Request diversion to Sacheon —\ntree,200 metres is enough for us, even though it is one eight minutes away. HL123.",
        "notes": [
          "코멘트 : **판단·근거·숫자 세 가지 모두 정확하다.** 2,800 < 3,100 ≤ 3,200 이라는 비교를",
          "값 오류 : `takes more one minute` — 사천까지는 **one eight(18)분** 이다(두 전사기 일치).",
          "코멘트 : `we will take Sacheon airport` 보다 **`Request diversion to Sacheon`** 이 표준이다."
        ]
      },
      "P2B-Q5": {
        "verdict": "✅",
        "model": "Turn left heading one zero zero, descend to 6,000 feet, vectors for Sacheon.\nOur intention is **to make a priority landing** at Sacheon, and we will need the fire\nservices standing by on the runway. HL123.",
        "notes": [
          "코멘트 : **복창 3요소(기수 100·강하 6,000·vectors for Sacheon) 전부 정확 + intentions +",
          "문법 : `Our intention is to priority landing` → **`to make a priority landing`**."
        ]
      },
      "P2B-Q6": {
        "verdict": "❌",
        "model": "Negative, HL123, no smoke and no burning smell from the wheels. **Affirm**, we",
        "notes": [
          "판단 오류 (중대, 두 전사기 일치) : 두 번째 질문에 **소방대 대기를 거부했다.** BRAKE",
          "**더 무거운 점 : 두 턴 전 P2B-Q5 에서 본인이 `fire services standing by on the runway` 를",
          "**이 오류는 EPTA_09 P2B-Q7 에서 \"연료 누출 중 소방대 거부\"로 이미 지적된 것이고, 이번",
          "코멘트 : ① **두 질문 모두에 답한 것 자체는 진전**이다 — \"두 질문 중 하나만 답함\"은"
        ]
      },
      "P2B-Q7": {
        "verdict": "⚠",
        "model": "HL123, we need tree,100 metres landing distance — 1,900 metres before the brake\nmalfunction. And we need one eight minutes before we are on the ground.",
        "notes": [
          "코멘트 : **핵심 값 3,100m 을 네 턴 전(P2B-Q3)에서 그대로 들고 왔다.** 이번 세트가 겨냥한",
          "값 오류 : 고장 전 필요 착륙거리는 **1,900m** 인데 `1,600` 으로 말했다(두 전사기 일치).",
          "지시문 미수행 : **두 번째 질문(몇 분 필요한가)에 답하지 않았다.** 18분이라는 값은 바로 앞",
          "문법 : `before braking function` → **`before the brake malfunction`**. `function` 은"
        ]
      },
      "P2B-Q8": {
        "verdict": "⚠",
        "model": "**Affirm**, HL123. The alternate system is giving us normal braking now and our\nrequired landing distance is back to 2,300 metres, so Yeosu runway one seven with 2,800\nmetres **is suitable** for us. Request Yeosu runway one seven. **We would still like the\nfire service standing by on the runway.**",
        "notes": [
          "코멘트 : **판단·근거·새 값 세 가지가 정확하다.** ① 첫 단어 **`Affirm`** ② 상태 업데이트",
          "지시문 미수행 : `say what you will need on the runway` — **마지막 토막이 비었다.** 제동이",
          "문법 : `we use alternate system and system backed up` → **`we are using the alternate"
        ]
      },
      "P2B-Q9": {
        "verdict": "✅",
        "model": "Turn right heading two two zero, descend to 2,500 feet until established, cleared\nfor the ILS runway one seven approach, contact Yeosu Tower 118.7. Hotel Lima one two three.",
        "notes": [
          "코멘트 : **5요소 전부 정확 — 기수 220 · 강하 2,500 · `until established` 조건절 ·",
          "표준교신용어 오류 : `cleared ILS` → **`cleared for the ILS`**. 전치사가 빠졌을 뿐 허가"
        ]
      },
      "P2C-Q1": {
        "verdict": "⚠",
        "model": "During **the descent** we **were flying** as we planned at first, but a few\nminutes after that we **got a BRAKE SYSTEM 1 FAULT with ANTI-SKID INOP** on the display.\nSo we **advised the controller** that the system **was inoperative** and that our required\nlanding distance **was now tree,100 metres instead of 1,900**. The ATC **offered us**\nanother airport, **Sacheon, with tree,200 metres, one eight minutes away, because Yeosu\nhad only 2,800** — so we **decided to divert**. We **were using** the alternate brake\nsystem, and **then the fault cleared** — the braking **came back** to normal **and our\nrequired distance went back to 2,300 metres**. There **was** no smoke, so we **continued\nto Yeosu** again and **landed on the ILS runway one seven** as we planned.",
        "notes": [
          "코멘트 : **전개 순서가 처음으로 정확하다.** 정상 강하 → 제동 계통 고장 → 보고 → 관제사가",
          "누락된 내용 : ① **사건명에 `anti-skid` 가 없다** — 제동 저하의 원인이다. P2B-Q3 에서는",
          "문법 : 시제가 현재·과거로 섞인다(`we have the braking system ...`, `the function is come"
        ]
      },
      "P2C-Q2": {
        "verdict": "⚠",
        "model": "I think the ATC handled it well. First, when we informed **him** of our\nsituation about the braking system, the ATC **gave** us some options and detailed\ninformation about the landing **distances available** and the fire services. We **were**\nreally **grateful** for **that**. Also, the ATC gave us the expected **flight time to\nSacheon, one eight minutes**, **which helped us run our checklists and decide**.\nFortunately, we **were using** the alternate system and the braking **came back**, so we",
        "notes": [
          "코멘트 : **구조는 완성형이다.** ① **평가 대상이 관제사 — 4세트 연속 유지** ② 근거 두 개",
          "내용 오류 : **\"소방대 준비를 묻지 말았어야 한다\"는 제안은 틀렸다.** 관제사가 제동 저하",
          "문법 : `we could have been handled` → **`it could have been handled`**(주어는 상황)"
        ]
      }
    }
  },
  "EPTA_11": {
    "set": "EPTA_11",
    "level": "Level 2",
    "summary": "",
    "gradedAt": "2026-11-03",
    "items": {
      "P1A-Q1": {
        "verdict": "✅",
        "model": "Cross runway two seven, report vacated, Hotel Lima one two three.",
        "notes": [
          "활주로 횡단 허가는 필수 복창 7항목 중 하나다 — 활주로 번호까지 정확.",
          "`report vacate` → `report vacated`. 발음 차이가 작아 감점하지 않는다."
        ]
      },
      "P1A-Q2": {
        "verdict": "✅",
        "model": "After passing ZORIN, descend to flight level one niner zero, reduce speed two five\nzero knots, Hotel Lima one two three.",
        "notes": [
          "조건절(`after passing ZORIN`) + 고도 + 속도 **3요소 전부 정확.** 조건절 유지는 5세트 연속.",
          "`reduced` → `reduce`. 복창은 지시받은 원형 그대로 되돌린다."
        ]
      },
      "P1A-Q3": {
        "verdict": "⚠",
        "model": "Climb to one five thousand feet, expedite until passing one two thousand, Hotel\nLima one two three.",
        "notes": [
          "고도 두 개(15,000 / 12,000) 모두 정확.",
          "**`until` 누락** — 두 모델 모두 없다. `expedite passing one two thousand` 은 \"통과를"
        ]
      },
      "P1A-Q4": {
        "verdict": "⚠",
        "model": "Cleared for the ILS runway one four approach, maintain one six zero knots to the\nmarker, Hotel Lima one two three.",
        "notes": [
          "접근 허가·활주로·속도·시점 전부 정확. 내용 누락 없음.",
          "**`clear` ← `cleared`, 6세트 연속.** `clear`(비었다/장애물 없다)와 `cleared`(허가받았다)는"
        ]
      },
      "P1B-Q1": {
        "verdict": "❌",
        "model": "Negative, Hotel Lima one two three. We have lost sight of the Airbus A340 —\nhe has entered cloud. Request radar separation.",
        "notes": [
          "**`Confirm ~?` 에 NEGATIVE 로 시작했다 — 정확.** SAMPLE_01 과 EPTA_10 에서 틀렸던 항목이다.",
          "**지시문의 `make a request` 미수행 — 10세트 연속 최우선 약점.** \"시계 분리를 유지할 수",
          "`our condition is not visual VMC` 는 사유를 잘못 짚었다. 문제는 내 기상이 아니라",
          "고친 것 : 문법(동사 없는 `we cannot`)과 **빠진 기능(요청)** 두 가지다. 문장 구조는 그대로 뒀다."
        ]
      },
      "P1B-Q2": {
        "verdict": "❌",
        "model": "Negative, Hotel Lima one two three. We are heavy today, and the slowest we\ncan hold with our present flaps is two one zero knots. We can maintain two one zero knots\nuntil four miles.",
        "notes": [
          "**판단이 거꾸로다.** 유지할 수 있는 **최저**속도가 210kt 인데 180kt 를 수락했다. `Affirm` 을",
          "한 답 안에서 `we can maintain one eight zero` 와 `our limit ~ is two one zero` 가",
          "`flap up speed limit` 은 \"플랩을 올릴 수 있는 최대속도\"로 읽혀 뜻이 반대가 된다. 지문은"
        ]
      },
      "P1B-Q3": {
        "verdict": "❌",
        "model": "Hartwell Control, Hotel Lima one two three, request descent to flight level\nthree one zero due to moderate turbulence — we have been in it for one zero minutes. Can\nyou tell me what the ride is like at three one zero?",
        "notes": [
          "기관명 + 콜사인은 정확하다.",
          "**요청의 목표값(FL310)이 없다.** `request descend` 만으로는 관제사가 어느 고도를 줄지",
          "**사유가 없다.** `moderate turbulence for one zero minutes` 가 지문에 있었다.",
          "**`inquire about the conditions` 미수행.** 클루의 `ride conditions` 가 그걸 가리켰다.",
          "`request descend` 는 **REQUEST + 동사**다. 표준은 **REQUEST + 명사(구)** → `request",
          "`we are on the right condition` 은 뜻을 읽을 수 없는 문장이다. 지시문 세 요구 중"
        ]
      },
      "P1B-Q4": {
        "verdict": "⚠",
        "model": "Taxi to holding point Charlie via Alpha and Delta, Hotel Lima one two three.\nBe advised, during pushback we saw a ground vehicle drive away leaving a spill of fuel on\nthe apron beside stand one two.",
        "notes": [
          "유도 지시 복창 완전 — 홀딩포인트와 유도로 두 개 모두 정확. **`be advised` 로 보고 방향을",
          "**보고의 내용물이 빠졌다 — 연료 유출.** \"차량이 떠났다\"만 들은 관제사는 아무 조치도 할 수",
          "고친 것 : 빠진 내용(연료 유출) 하나다. 문장 구조와 `be advised` 는 그대로 살렸다."
        ]
      },
      "P1B-Q5": {
        "verdict": "⚠",
        "model": "Hotel Lima one two three, confirm turn left heading two seven zero? We are\npresently established on heading two seven zero.",
        "notes": [
          "**확인 + 실제 상태 제시 2단 구조**가 들어갔다. \"그대로 복창하지 않고 되묻는다\"는 판단이",
          "`We already heading` 에 동사가 없다 → `We are presently on heading two seven zero`.",
          "콜사인은 되묻기 **앞**에 두는 것이 관례다(§10)."
        ]
      },
      "P1B-Q6": {
        "verdict": "❌",
        "model": "Ellesmere Departure, Hotel Lima one two three. We have levelled off at six\nthousand feet in error — we were cleared to eight thousand. Request climb to eight thousand\nfeet.",
        "notes": [
          "기관명 + 콜사인 ✓, `in error` 로 자기 실수를 밝힌 것 ✓, 요청까지 간 것 ✓ —",
          "**그 안의 숫자가 전부 다르다.** 지문은 `six thousand feet`, 허가는 `eight thousand feet`",
          "`request further climb` 에 **목표 고도가 없다.** 실수를 정정하는 교신은 \"원래 받은 값\"을"
        ]
      },
      "P2A-Q1": {
        "verdict": "❌",
        "model": "Thatcham Approach, Hotel Lima one two three, descending through flight level two\nzero zero for one one thousand, six zero miles from TREBO, inbound Thatcham, information\nDelta.",
        "notes": [
          "`descending through X for Y` **표준형 사용 — 3세트 연속.** 기관 호출도 정확하다.",
          "**값 두 개가 틀렸다** : FL200 → **FL220**, 60마일 → **6마일**. 둘 다 Initial Situation 의",
          "`request inbounds` — REQUEST 뒤에 동사/부사가 붙었다. 위치보고에는 요청이 아니라",
          "`information Delta` 누락."
        ]
      },
      "P2A-Q2": {
        "verdict": "✅",
        "model": "(동일 — 고칠 것이 없다)",
        "notes": [
          "**5요소 복창 완전 — 8세트 연속.** 고도·속도·절차명·활주로·고도계 전부 정확하고 순서도"
        ]
      },
      "P2A-Q3": {
        "verdict": "⚠",
        "model": "Descend to five thousand feet, Hotel Lima one two three. Request the landing\ndistance available on runway two seven — our required landing distance today is 1,750 metres.",
        "notes": [
          "복창 ✓, **묻기 수행 ✓** — `inquire` 지시 수행은 3세트 연속이다.",
          "**필요 착륙거리 1,750 → 1,700.** Initial Situation 에 있던 값이다. 50m 차이지만 이 값으로",
          "`the runway two seven full distance` → 묻는 대상의 정식 명칭은 **`landing distance"
        ]
      },
      "P2A-Q4": {
        "verdict": "❌",
        "model": "Hotel Lima one two three, we require 1,750 metres, so 1,900 metres on runway\ntwo seven is enough for us. We will take runway two seven — we do not want the one two\nminute delay behind the A340.",
        "notes": [
          "**이 세트 Part Ⅱ A 의 중심 문항이다.** 직전 Q3 에서 본인이 물어서 받은 1,900m 와 필요값",
          "그런데 Q8 에서는 `was 1,900 metres enough for you` 에 `it is enough to land` 라고 정확히"
        ]
      },
      "P2A-Q5": {
        "verdict": "❌",
        "model": "Turn left heading one eight zero, descend to four thousand feet, Hotel Lima one two\nthree. Request an estimate of how long the delay will be.",
        "notes": [
          "묻기 수행 ✓. 고도 4,000 정확.",
          "**선회 방향이 뒤집혔다 — `left` → `right`.** 기수는 필수 복창 7항목이고 **방향은 그 값의",
          "`for the ahead of aircraft` → `the aircraft ahead`, 또는 그냥 `how long the delay will be`."
        ]
      },
      "P2A-Q6": {
        "verdict": "⚠",
        "model": "Turn right heading two four zero, descend to three thousand feet until established,\ncleared for the ILS runway two seven approach, contact Thatcham Tower on one one eight\ndecimal three, Hotel Lima one two three.",
        "notes": [
          "기수·고도+조건절·접근 허가·주파수 **4요소 전부 정확.** 주파수 118.3 정확(이 세트 2/3),",
          "`clear` ← `cleared` (이 세트 2회째)."
        ]
      },
      "P2A-Q7": {
        "verdict": "✅",
        "model": "Runway two seven, cleared to land, Hotel Lima one two three.",
        "notes": [
          "착륙 허가 + 활주로 정확하고, **여기서는 `cleared` 를 바르게 썼다.** 바람은 복창 불필요 —",
          "`caution ~` 은 복창 의무가 없으나 붙여도 감점하지 않는다(§11). `Roger` 가 내용과 함께"
        ]
      },
      "P2A-Q8": {
        "verdict": "⚠",
        "model": "Hotel Lima one two three, affirm. We need 1,750 metres, and 1,900 metres was\nenough for us today.",
        "notes": [
          "**두 질문 모두 답했다** — 되묻기 장치 2세트 연속 성공(EPTA_09·10 에 이어). \"충분했다\"는",
          "값은 또 **1,700 (←1,750).** Q3 에서 틀린 값을 다섯 턴 뒤에도 그대로 들고 있었다 —",
          "`Yeah` / `yes` → **AFFIRM**. `if on we are enough to land on the runway` 는 문장이",
          "고친 것 : 문법(성립하지 않는 조건절)과 값, 그리고 `Yeah`→`affirm` 세 가지다."
        ]
      },
      "P2A-Q9": {
        "verdict": "⚠",
        "model": "Hotel Lima one two three, we will hold for stand one two — our ground handling\nand steps are arranged there, so we would rather wait than taxi eight minutes. Request an\nestimate of how long the A340 will be.",
        "notes": [
          "선택 ✓ + 소요시간 묻기 ✓ — 두 기능 모두 수행했다.",
          "**`with a reason` 미수행** (이 세트 두 번째). 8분 추가 유도와 대기를 **왜** 그렇게",
          "`hold short` 는 **활주로 앞에서 정지**를 뜻하는 고정 표현이므로 주기장 대기에 쓰면 뜻이",
          "콜사인 누락."
        ]
      },
      "P2A-Q10": {
        "verdict": "⚠",
        "model": "Hotel Lima one two three, we are stopped on taxiway Kilo, short of taxiway\nJuliet, behind the hangar.",
        "notes": [
          "유도로 Kilo 는 정확하다.",
          "**기준점이 없다.** `short of Juliet` 는 Situation Update 와 그림에 **두 번** 나왔다.",
          "30초에 **8단어.** EPTA_09 P2A-Q9(9단어)와 같은 양상으로, Fluency 와 Interactions 를"
        ]
      },
      "P2A-Q11": {
        "verdict": "⚠",
        "model": "In this situation I compared the landing distance available, 1,900 metres,\nwith our required landing distance of 1,750 metres, and because 1,900 was more than we\nneeded, I accepted it. As a pilot, in the briefing we prepare a checklist for a short\nlanding approach, and in flight we have more to do for a short approach — we use a higher\nflap setting, or reduce speed earlier, or something else. And we check the performance\ndisplay to decide whether we can land or not, so it depends on our aircraft performance.\nFor example, on one flight the runway was changed at short notice, and I had to re-check the\nrequired landing distance for a wet runway before I accepted it.",
        "notes": [
          "**② 부분(사전 브리핑 / 당일 조치)은 들어 있다.** 플랩·감속·성능 확인까지 구체적이고,",
          "**① 미수행** — \"무엇을 비교했는가\"에 **숫자가 하나도 없다.** 1,900 과 1,750 을 나란히",
          "**③ `Give an example.` 미수행 — 10세트 연속.** 경험이 없으면 가정 예시로 답해도 된다.",
          "고친 것 : 문법(`if briefing`→`in the briefing`, `we have to make many happening`→`we have"
        ]
      },
      "P2B-Q1": {
        "verdict": "✅",
        "model": "Stapleton Departure, Hotel Lima one two three, climbing through niner thousand feet\nfor flight level three one zero, two five miles south of Stapleton.",
        "notes": [
          "기관 호출 + 통과고도 + 목표고도 + 위치 **전부 정확.** 네 자리 피트와 FL 을 섞어 쓰면서",
          "`through 9,000 to FL310` → 표준은 **`for`** 다. 뜻은 통하지만 `through X for Y` 로"
        ]
      },
      "P2B-Q2": {
        "verdict": "❌",
        "model": "Climb to flight level three one zero, turn right heading one two zero, contact\nHartwell Control on one three two decimal four when passing one eight thousand, Hotel Lima\none two three.",
        "notes": [
          "고도·기수·조건절(`when passing one eight thousand`) 정확.",
          "**주파수 132.4 → 123.4.** 세 자리를 다 들었는데 **앞 두 자리가 뒤집혔다.** 주파수는 필수",
          "**기관명 `Hartwell Control` → `tower control`.** 18,000ft 로 상승 중인데 tower 로"
        ]
      },
      "P2B-Q3": {
        "verdict": "✅",
        "model": "Mayday, Mayday, Mayday, Stapleton Departure, Hotel Lima one two three. We have\nsmoke in the cabin from the aft galley. Galley power is isolated and there is no fire\nindication. Request immediate return to Stapleton.",
        "notes": [
          "**세 기능 전부 수행** — 선포 ✓ 사건명 ✓ 현재 조치 ✓ 요청 ✓. **이 세트에서 가장 잘 된",
          "MAYDAY×3 뒤에 **기관명**이 빠졌다(§11 비상선언 순서 : MAYDAY×3 → 기관명 → 콜사인 → 유형",
          "`and ~ and ~ so` 로 네 가지가 한 문장에 붙었다. 비상 교신은 짧게 끊는다."
        ]
      },
      "P2B-Q4": {
        "verdict": "❌",
        "model": "Hotel Lima one two three, fuel endurance one hour five zero minutes, one four seven\npersons on board.",
        "notes": [
          "두 항목 모두 답한 것 ✓ (EPTA_04·05 에서 고친 항목이 유지됐다).",
          "**두 값 모두 틀렸다.** 1시간 **50**분 → 1시간 **15**분, **147**명 → **170**명. 둘 다",
          "**50 ↔ 15 는 EPTA_09 의 55분→15분과 같은 오류**다. `one hour five zero minutes` 를 듣고",
          "147 → 170 도 자릿수를 뒤로 미룬 형태다(`one four seven` → `one seven zero`)."
        ]
      },
      "P2B-Q5": {
        "verdict": "❌",
        "model": "Hotel Lima one two three, our required landing distance is 2,200 metres, so\nboth runways are long enough. We have smoke in the cabin, so we want the quicker one —\nrequest Brindle, niner minutes, 3,000 metres.",
        "notes": [
          "**필요 착륙거리 2,200m 정확.** Initial Situation 의 값을 네 턴 뒤에 그대로 꺼냈다 —",
          "**어느 공항인지 말하지 않았다.** `we can accept the runway` 로는 관제사가 벡터를 줄 수",
          "**판단의 기준을 잘못 잡았다.** 2,400m 와 3,000m 는 **둘 다** 2,200m 보다 길다 →",
          "`Our limit, our distance limit` / `the stable airport is, we will expect wait from` —"
        ]
      },
      "P2B-Q6": {
        "verdict": "⚠",
        "model": "Turn left heading two seven zero, descend to eight thousand feet, vectors for\nBrindle, Hotel Lima one two three. Our intention is to land at Brindle as soon as possible\nand stop on the runway for a cabin inspection. We request the fire service standing by.",
        "notes": [
          "복창 3요소 정확(기수·고도·벡터 목적지). **`our intention is to ~` 5세트 연속 사용** —",
          "**`intentions` 의 내용이 요청이다.** intentions 는 **내가 무엇을 할 것인지**(어디에 어떻게"
        ]
      },
      "P2B-Q7": {
        "verdict": "❌",
        "model": "Hotel Lima one two three, affirm, the smoke is still in the cabin. And affirm,\nwe request the fire service to meet us on the runway.",
        "notes": [
          "**소방대 질문에 `affirm`** — EPTA_09(연료 누출 중 거부)·EPTA_10(제동 저하 중 거부)의",
          "**첫 답이 사실과 반대다.** 이 턴에서 연기는 **아직 남아 있다.** 연기가 멈춘 것은 Q9 직전의",
          "`There's no nothing smoke` 는 이중부정이다. 부정 답은 **NEGATIVE** 로 시작한다.",
          "`the fire service following us in the runway` → 관제사가 쓴 말 그대로 **`to meet us on"
        ]
      },
      "P2B-Q8": {
        "verdict": "❌",
        "model": "Hotel Lima one two three, fuel endurance one hour five zero minutes, one four seven\npersons on board.",
        "notes": [
          "두 항목 모두 답함 ✓.",
          "**두 값 모두 틀렸고, 자기가 Q4 에서 말한 값과도 다르다** — Q4 는 1시간 **15**분, Q8 은",
          "인원도 170 유지(실제 147).",
          "**되묻기 턴의 목적이 바로 이것이다** — 처음 적은 값이 끝까지 같아야 한다. 연료와 SOB 는"
        ]
      },
      "P2B-Q9": {
        "verdict": "⚠",
        "model": "Hotel Lima one two three, the smoke has stopped and the cabin is clear — the\nsource was the galley oven and it is isolated. We will keep the emergency in, because we\nstill want the aircraft checked after landing. Request the fire service standing by on the\nrunway.",
        "notes": [
          "**판단이 맞다** — 연기가 멈췄어도 비상을 유지하는 쪽. 상황 업데이트 ✓, 결정 ✓, 활주로에서",
          "**`with a reason` 미수행** (이 세트 세 번째). `because the source has not been confirmed`",
          "콜사인 누락. `The smoke is stopped` → `the smoke has stopped`. 되돌아가는 말(`the smoke,"
        ]
      },
      "P2B-Q10": {
        "verdict": "⚠",
        "model": "Turn right heading three five zero, descend to two thousand five hundred feet until\nestablished, cleared for the ILS runway one four approach, contact Brindle Tower on one one\nniner decimal one, Hotel Lima one two three.",
        "notes": [
          "기수·고도·조건절·접근 허가·주파수 **5요소 전부 정확.** 주파수 119.1 정확(이 세트 2/3),",
          "`clear` ← `cleared` (이 세트 4회째)."
        ]
      },
      "P2C-Q1": {
        "verdict": "❌",
        "model": "We were climbing through one three thousand feet out of Stapleton for flight\nlevel three one zero when the cabin crew reported smoke coming from the rear galley. I\nisolated the galley power, but the smoke did not clear, and there was no fire indication on\nthe flight deck, so I declared a MAYDAY and requested an immediate return. The controller\nasked for my fuel endurance and persons on board — one hour five zero minutes and one four\nseven persons — and then offered me Stapleton with 2,400 metres but one five minutes to\ntouchdown, or Brindle with 3,000 metres and niner minutes away. Both were longer than the\n2,200 metres I needed, so I chose Brindle because it was quicker. He gave me vectors, and I\nasked for the fire service to meet us. Later the smoke stopped and the cabin crew found the\ngalley oven was the source, but I kept the emergency in, and landed on the ILS runway one\nfour at Brindle.",
        "notes": [
          "Part Ⅱ Task C **두 문항 모두 녹음이 없다.** Task B Q10 까지 풀고 중단한 것으로 보인다.",
          "이 두 문항은 **90초 × 2 = 전체 응답시간의 약 1/3** 이다. 여기가 비면 Fluency·Interactions"
        ]
      },
      "P2C-Q2": {
        "verdict": "❌",
        "model": "I think the controller handled it well. He accepted my MAYDAY immediately,\ngave me radar contact, and asked for my fuel endurance and persons on board straight away,\nwhich is what the airport needs for the emergency brief. He also gave me both options with\nthe figures — the runway length and the time to touchdown — so I could make the decision\nmyself instead of just being told where to go. One thing that could have been handled\ndifferently is that he asked for my fuel and souls on board twice. I understand Brindle\nneeded it for their own brief, but in a cabin smoke situation the crew is busy, so it would\nhave been better if he had passed the figures on himself. Other than that, I have no comment.",
        "notes": [
          "`one thing that could have been handled differently` 는 EPTA_08 에서 처음 정확한 문구로"
        ]
      }
    }
  },
  "SAMPLE_01": {
    "set": "SAMPLE_01",
    "level": "Level 3",
    "summary": "",
    "gradedAt": "2026-10-28",
    "items": {
      "P1A-Q1": {
        "verdict": "✅",
        "model": "Clear direct ATLAS, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음 (`at loss` 는 ATLAS 의 ASR 오인으로 보고 감점하지 않았습니다)",
          "코멘트 : 짧은 지시를 그대로 받았습니다. 웨이포인트명은 **음절을 끊어서** 읽으면(`AT-LAS`) 관제사도 ASR 도 놓치지 않습니다."
        ]
      },
      "P1A-Q2": {
        "verdict": "⚠",
        "model": "Stop climb at flight level 260, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음. 고도 FL260 정확",
          "표준교신용어 오류 : **`step climb` 인지 `stop climb` 인지 구분되지 않습니다.** 두 표현은 전혀 다른 지시입니다 — `stop climb` 은 \"상승을 거기서 멈춰라\", `step climb` 은 \"단계적으로 더 올라가라\"입니다. 반대 방향이라 오탈자 예외로 넘길 수 없습니다",
          "코멘트 : `due to traffic` 은 복창 불필요한 부가정보지만 넣어도 감점되지 않습니다. 실제로 `stop` 이라고 말했다면 이 문항은 ✅ 입니다 — 다만 **ASR 이 `step` 으로 들었다는 것 자체가 /p/ 가 /t/ 로 들릴 만큼 흐렸다는 신호**이므로 ⚠️ 로 두었습니다. 관제사가 이걸 거꾸로 들으면 상승 금지 지시가 상승 허가로 뒤집힙니다."
        ]
      },
      "P1A-Q3": {
        "verdict": "✅",
        "model": "Runway 32 cleared for takeoff, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음. `Roger` 뒤에 내용이 다 있으므로 단독 오용이 아닙니다 — 다만 불필요합니다",
          "코멘트 : **`caution wake turbulence` 를 복창에서 제외한 판단이 정확합니다.** 이것이 이 세트의 \"복창 필수요소만 받고 부가정보는 빼는\" 문항이었고, 창작 세트 네 번에 걸쳐 안정적이던 판단이 여기서도 유지됐습니다."
        ]
      },
      "P1A-Q4": {
        "verdict": "✅",
        "model": "Start up and pushback approved, long pushback, tail east until abeam gate 34, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **네 요소(승인·long pushback·tail east·abeam gate 34) 전부**",
          "표준교신용어 오류 : 없음 (`starter` 는 `start-up` 의 ASR 오인)",
          "코멘트 : 지상 지시 중 가장 요소가 많은 문항인데 **푸시백 방향(tail east)과 기준점(abeam gate 34)을 둘 다** 받았습니다. EPTA_06 P2A-Q2 에서 `face south` 를 빠뜨렸던 바로 그 항목입니다 — 여기서는 됐습니다."
        ]
      },
      "P1B-Q1": {
        "verdict": "✅",
        "model": "HL123, be advised — during our takeoff roll we saw bird activity at the end of the runway.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **스스로 `Correction` 을 쓰고 정정했습니다.** \"활주로에 조류\"에서 \"활주로 **끝**에 조류\"로 바로잡은 것인데, 위치가 달라지면 관제사의 조치(활주로 폐쇄 vs 끝단 경고)가 달라지므로 의미 있는 정정입니다. 실제 교신에서 가장 권장되는 습관이고, 이 시험에서 가점 요소입니다. 더 붙일 것이 있다면 **언제 봤는지**(`during our takeoff roll`) — 지금 보인다는 뜻으로 오해될 수 있습니다."
        ]
      },
      "P1B-Q2": {
        "verdict": "❌",
        "model": "Descend and maintain flight level 220, contact Tokyo Control on 121.65, speed Mach decimal 81, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **지시 고도를 FL220 이 아니라 FL290 으로** 복창했습니다. **고도는 필수 복창 7항목**입니다",
          "코멘트 : 주파수 121.65 와 속도 Mach 0.81 은 정확합니다 — 세 요소 중 둘은 받았습니다. 그런데 **틀린 하나가 고도**입니다. FL290 으로 복창하면 관제사가 정정해 주지 않는 한 7,000 피트 차이로 내려가고, 다른 항공기와의 수직 분리가 깨집니다. 이 세트에서 유일한 ❌ 이고, 이유는 **값 하나**입니다. 220 과 290 은 음성으로도 비슷하지 않으니, **받아 적을 때 숫자를 먼저 쓰고 복창 직전에 그것만 한 번 더 보는** 습관이 필요합니다."
        ]
      },
      "P1B-Q3": {
        "verdict": "⚠",
        "model": "HL123, we have had moderate turbulence for 3 minutes at flight level 210, with an altitude gain of about 200 feet.",
        "notes": [
          "누락된 필수 readback 요소 : **고도 변화 약 200피트** — 지문이 준 세 값(난류 등급·지속 3분·고도 변화 200피트) 중 하나가 빠졌습니다",
          "표준교신용어 오류 : 없음 (`modern stumplers` 는 `moderate turbulence` 의 ASR 오인)",
          "코멘트 : 난류 등급과 지속 시간, 고도는 담았습니다. 빠진 **200피트가 이 보고에서 가장 쓸모 있는 값**입니다 — 관제사는 고도 변화량으로 난류의 실제 세기를 판단하고 다른 항공기에 전달합니다. 그리고 동사가 없어 문장이 명사 나열로 끝났습니다 : `we have had moderate turbulence for 3 minutes` 처럼 **경험을 서술하는 동사**를 앞에 세우세요."
        ]
      },
      "P1B-Q4": {
        "verdict": "⚠",
        "model": "HL123, climbing to flight level 210. Unable to cross Johnson VOR at or above flight level 150 due to aircraft performance — we will maintain flight level 130 until Johnson VOR.",
        "notes": [
          "누락된 필수 readback 요소 : **상승 지시 FL210 자체의 복창**",
          "표준교신용어 오류 : **못 하는 대상을 잘못 지목했습니다.** 할 수 없는 것은 **FL210 상승**이 아니라 **Johnson VOR 을 FL150 이상으로 통과하는 것**입니다. FL210 까지는 올라갈 수 있고, 다만 VOR 전에 FL150 에 도달하지 못하는 것입니다. 그리고 ATC 가 이미 `if unable, maintain FL130 until Johnson VOR` 로 **대안을 줬으므로** 그것은 요청(`request`)이 아니라 **수락**해야 합니다",
          "코멘트 : `unable` + 사유(`due to aircraft performance`)를 쓴 것과 FL130·Johnson VOR 을 짚은 것은 정확합니다 — **골격은 맞습니다.** 이 문항은 `exam-spec.md` §2-3 에 나오는 **\"ATC 가 먼저 contingency 를 주는 유형\"**이고, 조종사가 스스로 대안을 요청하는 \"unable + request\" 유형과 다릅니다. ATC 가 `if unable, (대안)` 을 말해 주면 **그 대안을 그대로 복창하는 것이 답**입니다. 지금처럼 `request` 를 붙이면 관제사는 \"방금 내가 준 걸 왜 다시 요청하지?\"가 됩니다."
        ]
      },
      "P1B-Q5": {
        "verdict": "⚠",
        "model": "Negative, HL123 — we turned 10 degrees left by mistake. Now turning right 10 degrees.",
        "notes": [
          "누락된 필수 readback 요소 : **`NEGATIVE`**",
          "표준교신용어 오류 : **`confirm ~?` 질문에는 AFFIRM 또는 NEGATIVE 가 첫 단어로 와야 합니다** (`atc-terminology.md` §11). 지금은 설명부터 시작합니다",
          "코멘트 : **정정 3단 구조(틀린 값 → 실수 인정 → 지금 하는 조치)가 완전합니다.** 창작 세트 다섯 번에 걸쳐 완성해 온 구조가 여기서도 나왔습니다. 빠진 것은 **첫 단어 하나**입니다. 관제사는 분리를 계산하는 중이라 `NEGATIVE` 를 먼저 들어야 \"지금 오른쪽이 아니구나\"를 즉시 알 수 있습니다. 설명부터 들으면 끝까지 듣고 나서야 판단이 섭니다. 이 문항은 `Negative` 네 글자만 앞에 붙이면 ✅ 입니다."
        ]
      },
      "P1B-Q6": {
        "verdict": "⚠",
        "model": "Unable to cross FRISO at 0100 Zulu, HL123 — even at maximum speed our estimate is 0103 Zulu. Request a later time or direct routing.",
        "notes": [
          "누락된 필수 readback 요소 : **① 실제 예상 시각 0103 ② 대안 요청**",
          "표준교신용어 오류 : 없음",
          "코멘트 : **`unable` + 사유 구조가 정확하고 `even if we speed up the max speed` 로 최대 속도까지 썼다는 것까지 전달했습니다.** 그런데 **마지막 숫자가 0103 이 아니라 0100 으로 나왔습니다.** 그러면 문장이 \"0100 에 못 간다, 최대로 가도 0100 에 도착한다\"가 되어 **스스로 모순**이 됩니다 — 관제사는 \"그럼 되는 거 아닌가?\"로 듣습니다. 이 문항의 전부가 **0103 이라는 세 글자**입니다. 그리고 못 하겠다고만 하면 관제사가 다음 수를 못 내므로 `request a later time` 같은 대안이 한 토막 붙어야 완성됩니다."
        ]
      },
      "P2A-Q1": {
        "verdict": "⚠",
        "model": "Smith Clearance, HL123 at gate Alpha 89, request clearance to Smith Airport.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **기관 호출이 `Smith Ground` 입니다** — 지시문은 `Contact Clearance Control` 입니다. 클리어런스를 받는 곳(Clearance Delivery)과 지상 유도를 주는 곳(Ground)은 다른 주파수입니다",
          "코멘트 : 요청 자체(`request clearance to Smith Airport`)는 **REQUEST + 명사구**로 정확합니다 — 창작 세트에서 네 번 반복 지적한 항목인데 여기서는 맞았습니다. 틀린 것은 **누구를 부르는가**입니다. 지시문이 기관명을 직접 알려줬으니, **지시문의 기관명을 그대로 첫 단어로 쓰는 것**을 규칙으로 잡으세요. 콜사인을 두 번 말한 것도 정리하면 좋습니다."
        ]
      },
      "P2A-Q2": {
        "verdict": "✅",
        "model": "Ready to copy, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **`Ready to copy` 는 이 상황의 정확한 표준 표현입니다.** 짧고 정확합니다 — 20~30초 문항에서 길게 말하는 것이 항상 나은 게 아니라는 좋은 예입니다."
        ]
      },
      "P2A-Q3": {
        "verdict": "✅",
        "model": "Cleared to Smith Airport, HAPIE 3 departure, fly runway heading until the Smith 1.5 DME, then right turn heading 100 to HAPIE, then as filed, maintain 5,000, expect flight level 350 10 minutes after departure, squawk 1766, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **아홉 요소 전부 받았습니다**",
          "표준교신용어 오류 : `Clear` → `Cleared`. `as fly` → `as filed`(ASR 오인으로 보고 감점하지 않았습니다). `Smith 1.5 DME` 에서 `Smith` 가 빠졌습니다(경미)",
          "코멘트 : **이 세트에서, 그리고 지금까지 푼 일곱 세트 전체에서 가장 잘한 문항입니다.** 목적지·SID·초기 기수·DME 전환점·우선회 기수 100·HAPIE·as filed·5,000·FL350·10분 후·squawk 1766 — **열한 개 토막을 순서대로** 받아냈습니다. 창작 세트에서 다룬 가장 긴 클리어런스가 5요소였는데, 실제 샘플세트의 9요소를 이렇게 받을 수 있다는 것은 **받아적기 능력 자체는 Level 4 이상**이라는 뜻입니다. 고칠 것은 `Cleared` 한 단어입니다."
        ]
      },
      "P2A-Q4": {
        "verdict": "✅",
        "model": "Holding for release, HL123. How long will that take?",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **복창 + 문의 두 기능 모두**",
          "표준교신용어 오류 : 없음. 문법 : `how long it will take` → **`how long will it take?`**(의문문 어순)",
          "코멘트 : **`inquire` 지시를 수행했습니다.** EPTA_05 에서 세 번 다 못 했고 EPTA_06 에서 겨우 해낸 항목인데, 여기서는 자연스럽게 나왔습니다. 고칠 것은 어순 하나입니다 — 의문문에서는 **조동사가 주어 앞으로** 옵니다. 지금 형태는 간접의문문(`I wonder how long it will take`)의 어순이라, 단독으로 쓰면 질문으로 들리지 않을 수 있습니다."
        ]
      },
      "P2A-Q5": {
        "verdict": "⚠",
        "model": "Apron, HL123 at gate Alpha 89, request pushback and startup.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : **① 기관 호출이 `Ground` 입니다** — 지시문은 `Contact Apron` 입니다(Q1 과 같은 유형의 반복). **② 게이트가 Alpha 89 인데 `alpha 890`** 으로 말했습니다",
          "코멘트 : 요청 내용은 정확합니다. 두 가지가 어긋났고 **둘 다 지문에 적혀 있던 값**입니다. 게이트 번호는 지상 조업·견인이 어디로 가야 하는지를 정하므로 자릿수가 중요합니다 — `89` 와 `890` 은 다른 주기장입니다. **지시문의 기관명과 지문의 숫자, 이 두 개만 복창 직전에 확인**하면 이 문항은 ✅ 였습니다."
        ]
      },
      "P2A-Q6": {
        "verdict": "⚠",
        "model": "Cleared pushback and startup, HL123. And once we are established on lane Alpha we will have the tug pull us forward so you can push the aircraft at gate 87.",
        "notes": [
          "누락된 필수 readback 요소 : **관제사가 부탁한 내용에 대한 동의** — lane Alpha 에 정렬된 뒤 **앞으로 더 끌어달라**는 요청입니다",
          "표준교신용어 오류 : `clear` → `cleared`",
          "코멘트 : 푸시백·시동 허가는 받았습니다. 그런데 이 턴의 핵심은 뒤쪽 30단어, **비표준 구어체로 들어온 부탁**입니다 — `if they can just pull you forward so I can push behind you at gate 87, I'd appreciate it`. 답안의 `start up route at gate 87` 은 그 내용을 전달하지 못합니다. 관제사는 **gate 87 항공기를 밀어낼 공간이 생기는지**를 알아야 다음 푸시백을 승인할 수 있습니다. `exam-spec.md` §4-5 에 정리한 대로 **실제 출제 ATC 는 이렇게 말하고, 그것을 알아듣는지가 Comprehension 평가 지점**입니다. `we will pull forward on lane Alpha` 한 토막만 있으면 됩니다."
        ]
      },
      "P2A-Q7": {
        "verdict": "✅",
        "model": "Apron, HL123 — we have too much fuel on board. Request a holding spot to burn some off, or defueling if that is available.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **문제 보고 + 요청 + 대안 두 가지 전부**",
          "표준교신용어 오류 : 기관 호출 `Ground`(→ Apron). `burn some up` → `burn some off`",
          "코멘트 : **세 기능을 다 수행했고, 대안을 두 개 제시한 것이 특히 좋습니다**(`holding spot to burn off` 또는 `defuel if able`). 관제사가 바로 선택할 수 있는 형태입니다 — 창작 세트에서 \"unable + 사유 + 대안\" 3단을 연습한 것이 여기서 응용됐습니다. `request a holding spot` 도 REQUEST + 명사구로 정확합니다. 콜사인을 두 번 말한 것만 정리하면 됩니다."
        ]
      },
      "P2A-Q8": {
        "verdict": "✅",
        "model": "HL123, if we defuel it will take about 30 minutes.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : 없음",
          "코멘트 : **조건을 붙여 답한 것이 적절합니다** — 소모냐 디퓨얼링이냐에 따라 시간이 달라지는데, `if defueling` 으로 전제를 밝히고 숫자를 줬습니다. 관제사가 그 전제를 보고 판단할 수 있습니다. (이 문항의 ATC 대사는 자막이 손상돼 복원한 것이므로, 원문과 조금 다를 수 있습니다.)"
        ]
      },
      "P2A-Q9": {
        "verdict": "⚠",
        "model": "Roger, HL123 — we will take the 30-minute hold and burn the fuel off. We will advise our company of the delay.",
        "notes": [
          "누락된 필수 readback 요소 : **콜사인**",
          "표준교신용어 오류 : `request hold due to 30 minutes hold` — **문장이 자기를 가리킵니다.** 관제사가 이미 30분 홀드를 통보했으므로 요청할 것이 아니라 **수락**해야 합니다(P1B-Q4 와 같은 유형의 반복)",
          "코멘트 : `unexpected delay` 로 상황을 한 단어로 짚은 것은 괜찮습니다. 문제는 **관제사가 준 것을 다시 요청하는 형태**가 이 세트에서 두 번(P1B-Q4, 여기) 나왔다는 것입니다. 구분 기준은 간단합니다 — **관제사가 이미 말한 것이면 복창/수락, 관제사가 모르는 것이면 요청**입니다. 그리고 콜사인은 모든 송신에 들어가야 합니다."
        ]
      },
      "P2A-Q10": {
        "verdict": "✅",
        "model": "Ground, HL123, holding short of Golf with information Alpha, request taxi.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **기관·위치·정보문자·요청 네 요소 전부**",
          "표준교신용어 오류 : `Hold short` → `holding short`(현재 상태 보고이므로 진행형). `request taxi to runway` — 아직 활주로를 모르므로 `request taxi` 로 끝내는 편이 정확합니다",
          "코멘트 : **ATIS 정보문자를 함께 준 것이 정확합니다.** 지상 교신에서 위치 + 정보문자는 관제사가 중복 설명을 생략할 수 있게 해 주는 요소이고, 이번 세트 P2B-Q1 에서도 같은 판단이 나왔습니다. 이 문항은 기관 호출도 맞았습니다(지시문이 `Contact Ground` 였습니다)."
        ]
      },
      "P2A-Q11": {
        "verdict": "✅",
        "model": "Runway 13 left, taxi left on Golf, cross runway 22 right, follow the Gulfstream passing left to right, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **사용활주로·유도로·활주로 횡단·추종 대상 전부**",
          "표준교신용어 오류 : `Turn left on golf` → `taxi left on Golf`(경미). `Pass to right` 는 `passing left to right` 의 일부만 받았습니다",
          "코멘트 : **활주로 횡단 허가(`cross runway 22 right`)를 정확히 복창했습니다** — 활주로 관련 지시는 필수 복창 7항목 중 가장 무거운 항목입니다. 추종 대상(Gulfstream)도 받았습니다. EPTA_06 P1A-Q1 에서 `the Dash 8` 을 빠뜨렸던 항목이 여기서는 됐습니다. 활주로를 두 번 말한 것은 확인 습관으로 보이는데, 실제 교신에서는 한 번으로 충분합니다."
        ]
      },
      "P2A-Q12": {
        "verdict": "⚠",
        "model": "Negative, HL123 — we are not sure of our wingtip clearance on Golf 2. Request a marshaller or a wing walker to guide us past the Gulfstream.",
        "notes": [
          "누락된 필수 readback 요소 : **① `NEGATIVE` ② 지시문이 요구한 `assistance` 요청**",
          "표준교신용어 오류 : **`are you able ~?` 에는 AFFIRM/NEGATIVE** 가 첫 단어로 와야 합니다. `I'm not sure` 는 표준 응답이 아닙니다(P1B-Q5 와 같은 유형의 반복)",
          "코멘트 : **걱정한 내용이 정확합니다** — Golf 2 에서 **윙팁 간격**(wingtip clearance)이 확보되는지가 실제로 이 상황의 쟁점입니다. 상황 파악은 됐습니다. 두 가지가 어긋났습니다. ① 첫 단어 — `confirm`/`are you able` 질문에 AFFIRM/NEGATIVE 를 빼먹은 것이 이 세트에서 두 번입니다. ② **지시문이 `request assistance` 라고 명시했는데 `request hold` 를 했습니다.** 홀드는 멈추는 것이고, assistance 는 **마셜러·윙워커 같은 사람을 보내 달라**는 것입니다. 멈춰 있어도 윙팁 간격은 확인되지 않습니다 — 누군가 봐 줘야 지나갈 수 있습니다."
        ]
      },
      "P2A-Q13": {
        "verdict": "⚠",
        "model": "First, we had too much fuel on board, so we had to defuel on the ramp — or burn it off, because defueling was not available there. Our company plans the fuel for the destination, so carrying extra put us over our limit for departure. Second, on taxiway Golf there was a risk of an accident because we could not be sure of our wingtip clearance past the Gulfstream that had blown a tire. So at that point I asked the controller to re-route us onto another taxiway. That costs some fuel and some time, but all we have to do is keep our passengers and the aircraft safe.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **두 문제를 `First` / `Second` 로 나눠 구조를 잡은 것이 좋습니다** — 90초 자유응답에서 가장 쓸모 있는 틀이고, EPTA_06 Follow-up 의 나열식 답변보다 분명히 낫습니다. 그리고 **스스로 `Sorry. Correction.` 하고 고쳤습니다** — 구술시험에서 감점 요소가 아니라 오히려 정상적인 화법입니다."
        ]
      },
      "P2B-Q1": {
        "verdict": "✅",
        "model": "Public Approach, HL123, descending through flight level 180 for 11,000, information Oscar.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **기관·통과고도·목표고도·ATIS 네 요소 전부**",
          "표준교신용어 오류 : `to 11000` → `for 11,000`(경미)",
          "코멘트 : **최초 컨택의 표준형을 완전히 갖췄습니다.** FL180(FL 단위)과 11,000(피트 단위)을 섞지 않은 것, ATIS 정보문자를 붙인 것 모두 정확합니다. 창작 세트 네 번 연속 안정적이던 항목이 실제 세트에서도 그대로 나왔습니다."
        ]
      },
      "P2B-Q2": {
        "verdict": "✅",
        "model": "Descend and maintain 6,000, reduce speed to 210, expect Dixie 1 arrival runway 23 transition, followed by ILS 23, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **다섯 요소 전부**",
          "표준교신용어 오류 : `Descent`(명사) → `Descend`(동사). `roommate`·`IRS` 는 ASR 오인으로 보고 감점하지 않았습니다",
          "코멘트 : **고도·속도·도착절차·활주로·접근방식 다섯 요소를 전부 받았습니다.** 창작 세트 세 번 연속 성공한 유형이 실제 세트에서도 유지됩니다. 다만 **`ILS` 가 `IRS` 로 인식된 것은 눈여겨보세요** — ILS(계기착륙장치)와 IRS(관성항법장치)는 둘 다 실재하는 장비이고, 관제사가 거꾸로 들으면 접근 방식이 달라집니다. 이 세트에서 네 번 반복됐습니다."
        ]
      },
      "P2B-Q3": {
        "verdict": "⚠",
        "model": "Turn right heading 190, descend and maintain 4,000 to intercept the runway 23 localizer, HL123. We are levelling off at 4,000 — we have lost a lot of our instrument displays. Request vectors for holding.",
        "notes": [
          "누락된 필수 readback 요소 : **① `levelling off at 4,000` 상태 보고 ② `vectors`**",
          "표준교신용어 오류 : `Descent` → `Descend`. 콜사인 누락. `recast` 는 `request` 의 ASR 오인으로 보고 감점하지 않았습니다",
          "코멘트 : **세 기능 중 둘을 수행했습니다** — 복창은 완전하고, 상황(계기 표시 상실)과 홀딩 요청도 담았습니다. 빠진 둘은 지시문이 **글자로 지정한 표현**입니다. ① `stating you're levelling off at 4,000` — 답안의 `After maintain 4000` 은 이 상태 보고가 되지 못합니다. `maintain` 은 지시를 복창하는 동사이고, 지금 필요한 것은 **현재 하고 있는 일을 보고하는 동사**(`levelling off at 4,000`)입니다. 창작 세트에서 반복 지적한 바로 그 구분입니다. ② `vectors` — 홀딩만 요청하면 관제사는 어디서 돌지 정해 줘야 하는지 모릅니다. `request vectors for holding` 이 한 덩어리입니다."
        ]
      },
      "P2B-Q4": {
        "verdict": "⚠",
        "model": "Heading 270, maintain 4,000, HL123. Our intention is to hold while we work the checklist, and then make an approach in VMC. Request the weather for Sovereign and Independent — we would prefer VMC conditions.",
        "notes": [
          "누락된 필수 readback 요소 : **intentions** — 관제사가 `say intentions` 라고 명시했습니다",
          "표준교신용어 오류 : `Now we are VMC condition` — 지문은 **\"VMC 를 선호한다\"**(`You prefer VMC conditions`)인데, 답안은 \"지금 우리가 VMC 다\"가 됐습니다. 사실이 아니고 요청의 근거도 되지 못합니다",
          "코멘트 : **기상 요청은 정확하게 했습니다** — 두 공항 이름을 모두 짚었고, 이것이 지시문의 주 요구였습니다. 두 가지가 남습니다. ① **`say intentions` 에 intentions 가 없습니다.** 창작 세트에서 다섯 세트 연속 실패하다 EPTA_06 에서 겨우 구문을 쓴 항목인데, 실제 세트에서 다시 빠졌습니다 — **관제사가 `say intentions` 라고 말하면 `our intention is to ~` 를 반드시 한 토막 넣으세요.** ② `prefer` 와 `are` 의 차이 — 선호를 말해야 관제사가 그에 맞는 공항을 골라 줍니다."
        ]
      },
      "P2B-Q5": {
        "verdict": "✅",
        "model": "Request vectors to Independent Airport for a visual approach, HL123.",
        "notes": [
          "누락된 필수 readback 요소 : 없음",
          "표준교신용어 오류 : `inbound` → **`vectors`**. 지시문이 `request vectors` 라고 지정했고, vectors 는 \"기수를 유도해 달라\"는 구체적 요청입니다",
          "코멘트 : **공항 선택과 접근 방식을 정확히 전달했습니다.** 그리고 **판단이 맞았습니다** — Independent 는 시정 10마일·운고 2,200 broken 이라 시각접근이 가능하고, Sovereign 은 시정 1마일·운고 3,000 overcast 로 불가입니다. 관제사가 준 기상 두 벌을 비교해서 고른 것이고, **창작 세트 EPTA_06 에서 두 번 실패한 \"받은 정보를 결정에 쓰기\"가 여기서는 됐습니다.** 요청 대상을 `vectors` 로 바꾸면 완전합니다."
        ]
      },
      "P2B-Q6": {
        "verdict": "✅",
        "model": "Approach, HL123 — we have got some of our instruments back, and that allows us to fly the ILS approach at Public Airport. Request the ILS runway 23 at Public.",
        "notes": [
          "누락된 필수 readback 요소 : 없음 — **기관 호출 + 상황 갱신 + 요청 세 기능 전부**",
          "표준교신용어 오류 : 없음 (`interrupt`·`IRS` 는 ASR 오인). 문법 : `We get some interrupt back` → `we have got some of our instruments back`(현재완료), `That allows to ~` → `that allows us to ~`",
          "코멘트 : **세 기능을 순서대로 다 했습니다.** 특히 **갱신 → 그래서 무엇이 가능해졌는지 → 요청** 이라는 인과 순서가 잡혀 있습니다. 관제사는 \"왜 갑자기 Public 으로 돌아가겠다는지\"를 바로 이해할 수 있습니다 — EPTA_05·06 에서 갱신을 빠뜨려 지적한 항목인데 여기서는 됐습니다."
        ]
      },
      "P2B-Q7": {
        "verdict": "⚠",
        "model": "Cleared to Public Airport, turn right heading 140, maintain 4,000, HL123. Stand by for further information — we will let you know if anything changes.",
        "notes": [
          "누락된 필수 readback 요소 : **`stand by for further information`** — 지시문의 뒷부분입니다",
          "표준교신용어 오류 : `Clear` → `Cleared`(이 세트에서 세 번째)",
          "코멘트 : **복창은 완전합니다** — 목적지·선회방향·기수 140·고도 4,000 네 요소 전부. 빠진 것은 지시문이 지정한 마지막 한 토막입니다. 관제사도 `let me know if anything changes` 로 후속 연락을 요청했으므로, `stand by for further information` 은 **그 요청에 대한 답**입니다. 이것이 없으면 관제사는 계기 상태가 또 바뀔 수 있다는 것을 모른 채 접근을 진행시킵니다. **복합 지시의 마지막 토막이 빠지는 것이 이 세트에서 세 번**(P2A-Q12, P2B-Q3, 여기)입니다."
        ]
      },
      "P2C-Q1": {
        "verdict": "⚠",
        "model": "In the approach phase we lost a lot of our instrument displays, so we could not fly the ILS approach or the RNAV approach. All we could do was a visual approach. So we asked about the weather at the two airports. Sovereign was not suitable for a visual approach — one mile visibility with a 3,000 foot overcast — but Independent was better, with 10 miles visibility and 2,200 broken, so we chose Independent. We also requested holding so we could work the checklist. After the checklist we got some of the displays back, so we requested Public Airport again, and then we could land using the ILS as we had planned before.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **사건의 원인이 정확하고**(계기 표시 다수 상실) **전개를 거의 다 담았습니다** — 접근 불가 → 시각접근으로 전환 → 두 공항 기상 조회 → 더 나은 공항 선택 → 홀딩·체크리스트 → 계기 회복 → Public 복귀. **비행 단계도 `approach phase` 로 맞게 짚었습니다.** 그리고 자유응답 중에 `Correction` 으로 스스로 고쳤습니다."
        ]
      },
      "P2C-Q2": {
        "verdict": "⚠",
        "model": "I think the controller handled it well. As soon as we noticed the displays were out, we informed him of our situation and asked to hold at 4,000. Right after that he gave us priority, the holding at 4,000 and a deviation onto another heading. Also, when we asked about the other airports, he gave us the weather for both, so we could choose the right airport as soon as he had told us. One thing that could have been handled differently is that the controller could have simply given us the better airport instead of asking — Independent was clearly the only one with weather good enough for a visual approach, and that would have saved us time while we were still flying with most of our displays out.",
        "notes": [
          "누락된 필수 readback 요소 : 해당 없음 (자유응답)",
          "표준교신용어 오류 : 해당 없음",
          "코멘트 : **이번 세트에서 가장 좋은 자유응답이고, 두 가지가 처음으로 동시에 됐습니다.** ① **평가 대상이 관제사입니다** — `the controller gave us two options`, `the controller gave us the information about the weather` 처럼 관제사의 행동을 중심으로 서술했습니다. 창작 세트 네 번 연속 조종사부터 평가해 지적한 항목입니다. ② **`One thing that ... handled differently is ~` 로 후반부에 답했고, 제안이 구체적입니다** — \"관제사가 묻지 말고 바로 맞는 공항을 줬어야 한다\". 계기를 잃은 상태에서 선택지를 받아 판단하는 것 자체가 부담이라는 점을 짚은 것이고, 조종사 관점으로 타당합니다."
        ]
      }
    }
  },
  "WEAK_01": {
    "set": "WEAK_01",
    "level": "",
    "summary": "",
    "gradedAt": "2026-11-04",
    "items": {
      "P1A-Q1": {
        "verdict": "",
        "model": "HL123, descend to 7,000 feet, expect one zero minutes of holding at VARDO. Request our revised estimated time of arrival at Rothbury — our slot closes at 1150Z and it is now 1131Z.",
        "notes": [
          "필수 복창은 고도(7,000) 하나다. holding 예고는 복창해도 되고 빼도 된다.",
          "α 는 \"도착시각이 어떻게 되는지\" → `request our revised estimated time of arrival`. REQUEST 뒤는 명사구다. `request to know when we arrive` 처럼 동사구를 붙이면 안 된다.",
          "이유(슬롯 1150Z)를 반드시 붙인다. 이유 없는 요청은 관제사가 우선순위를 못 매긴다."
        ]
      },
      "P1A-Q2": {
        "verdict": "",
        "model": "HL123, cross VARDO at or above one one thousand. Unable one one thousand at VARDO — our present rate of climb gives us one zero thousand two hundred. Request cross VARDO at or above one zero thousand.",
        "notes": [
          "복창을 먼저 하고 그다음에 UNABLE 이다. 복창을 건너뛰고 바로 거절하면 고도 제한 복창 누락이다.",
          "`UNABLE + 이유 + 내가 할 수 있는 값`. 세 번째 칸(10,000)을 빼면 이 문항의 α 를 안 한 것이다.",
          "질문형이 아니므로 `NEGATIVE` 로 시작하지 않는다. NEGATIVE 는 `confirm ~?` 에 쓴다."
        ]
      },
      "P1A-Q3": {
        "verdict": "",
        "model": "HL123, climb to flight level three five zero, increase speed to Mach decimal eight two. Unable Mach decimal eight two due to our present weight. Request Mach decimal seven eight — that is the best speed we can maintain.",
        "notes": [
          "필수 복창 2개 : 고도(FL350)·속도(M.82). `for sequence` 는 이유라서 복창 대상이 아니다.",
          "`with a reason` 이 지시문에 있으면 **이유를 문장으로** 말해야 한다. `unable` 만 말하고 끝내는 것이 누적 최다 실점이다."
        ]
      },
      "P1A-Q4": {
        "verdict": "",
        "model": "HL123, line up and wait runway two four. Be advised, on the taxi out we saw a large flock of birds on the grass beside the runway two four threshold.",
        "notes": [
          "활주로 관련 지시이므로 활주로 번호까지 전부 복창한다. `Lining up runway two four` 도 가능하다.",
          "시차형 보고다 — **본 것 전체**를 말한다. \"새를 봤다\"만 말하고 **어디서**(two four threshold 옆 풀밭) 를 빼면 관제사가 쓸 수 없는 정보가 된다.",
          "조종사가 자기 쪽에서 정보를 줄 때는 `Be advised` 로 연다."
        ]
      },
      "P1A-Q5": {
        "verdict": "",
        "model": "HL123, taxi to holding point Kilo two via Golf, hold short of runway one six. Request the status of the de-icing bay on taxiway Golf — we need de-icing before departure.",
        "notes": [
          "`hold short of runway one six` 는 활주로 관련 지시라 **반드시** 복창한다. 여기를 빼는 것이 가장 흔한 누락이다.",
          "`request the status of ~` / `request information on ~` — 명사구로 끝낸다."
        ]
      },
      "P1A-Q6": {
        "verdict": "",
        "model": "HL123, turn left heading zero niner zero, descend to 5,000 feet. Our intentions — we request an ambulance to meet us at the stand for the passenger with chest pain in row one four, and the shortest taxi route in after landing.",
        "notes": [
          "필수 복창 2개 : 기수(090)·고도(5,000). `vectors for Rothbury` 는 복창 대상이 아니다.",
          "**상황은 이미 보고했다.** 그러니 증상을 처음부터 다시 설명하지 않고 **원하는 것**(구급차·최단 유도로)으로 바로 간다. 관제사의 `roger` 가 그 신호다.",
          "`say your intentions` 는 **내가 할 것 + 내가 필요한 것**이다. 요청을 빼면 절반만 한 것이다.",
          "`Our intentions are to ~` 또는 `Our intentions —` 로 명시해서 연다."
        ]
      },
      "P1A-Q7": {
        "verdict": "",
        "model": "HL123, holding position, wilco, we will report when we are ready to taxi. Understood you have two inbounds for the stand next to us. We need one five minutes — the cabin crew are still re-seating passengers away from the overwing exits.",
        "notes": [
          "지시문이 세 가지를 요구한다 : 복창 / 그의 사정 인지 / 소요시간. 세 번째(one five minutes)를 빼는 것이 이 유형의 전형적 실점이다.",
          "`Report when ~` 에 대한 응답은 `WILCO` 다. `ROGER` 단독으로 대신할 수 없다.",
          "시간은 **숫자로** 준다. `a few minutes` 는 관제사가 두 대의 inbound 를 배치할 근거가 못 된다."
        ]
      },
      "P1A-Q8": {
        "verdict": "",
        "model": "HL123, descend to 4,000 feet. Negative icing at present — we are in light rain at zero degrees, anti-ice has been on for two zero minutes and the airframe is clear. Negative, we do not require a higher approach speed, normal approach speed.",
        "notes": [
          "질문이 두 개면 **두 개 다** 답한다. 하나만 답하고 넘어간 것이 누적 실패의 핵심이다.",
          "관제사는 **갱신**을 묻고 있다(10분 전 보고의 후속). 그래서 `negative icing at present` 처럼 **지금 상태**로 답한다 — 10분 전 보고를 되풀이하는 것이 아니다.",
          "두 번째 질문은 가부 질문이므로 `NEGATIVE` 로 답한다. `no` 로 답하면 표준교신용어 오류다.",
          "복창(4,000)을 맨 앞에 둔다."
        ]
      },
      "P1B-Q1": {
        "verdict": "",
        "model": "HL123, we would like Caldon. Our required landing distance is 2,300 metres, so both runways are sufficient, but we have a passenger with chest pain on board and Caldon is one one minutes sooner. Request routing to Caldon and an ambulance to meet us on arrival.",
        "notes": [
          "거리는 **양쪽 다 충족**한다(2,600 · 3,400 ≥ 2,300). 따라서 거리가 아니라 **시간**이 판단 근거다. \"거리가 충분하다\"까지 말하고 시간을 근거로 못 대면 이유가 빈다.",
          "차이를 숫자로 말한다 — `one one minutes sooner`(18 − 7).",
          "의료 상황이면 구급차 요청을 같이 붙인다."
        ]
      },
      "P1B-Q2": {
        "verdict": "",
        "model": "HL123, we will take runway one six. Our required landing distance is 2,450 metres and the 2,700 metres available from the displaced threshold is sufficient, so we do not need the delay for runway three four. Request the ILS runway one six.",
        "notes": [
          "함정은 \"3,100 이 더 길다\"에 끌려 긴 쪽을 고르는 것이다. **필요값을 넘으면 충분하다** — 여유가 더 있다고 10분을 쓸 이유가 없다.",
          "판단의 근거는 `2,700 ≥ 2,450` 이라는 **두 숫자의 비교**다. 둘 다 말해야 이유가 성립한다."
        ]
      },
      "P1B-Q3": {
        "verdict": "",
        "model": "HL123, unable Penhale — we require 3,100 metres and runway two seven has only 2,800 metres available. Request Minsterly: 3,600 metres is sufficient and we accept the two two minutes.",
        "notes": [
          "여기는 **가까운 쪽이 못 쓰는** 경우다. 2,800 < 3,100 이므로 5분이 짧다는 것은 고려 대상이 아니다.",
          "거부는 `unable + 공항/활주로` 로 명시한다. 어느 쪽을 거부하는지 말하지 않으면 관제사가 되묻는다.",
          "늘어나는 시간을 **수락한다고** 말한다(`we accept the two two minutes`)."
        ]
      },
      "P1B-Q4": {
        "verdict": "",
        "model": "Negative, HL123. Unable one niner zero knots — at our present weight and flap setting the slowest speed we can maintain is two two zero knots. We can maintain two two zero knots until six miles.",
        "notes": [
          "`Can you do that?` 는 가부 질문이다 → **첫 단어가 NEGATIVE** 다.",
          "함정은 **최저속도**다. 220 이 \"하한\"이므로 190 은 불가다. 이것을 \"최대 220 까지 가능\"으로 읽어 `affirm` 하는 것이 누적 최다 오답이다.",
          "내가 줄 수 있는 값(220)을 숫자로 준다."
        ]
      },
      "P1B-Q5": {
        "verdict": "",
        "model": "HL123, unable runway two four. The runway is wet and our maximum crosswind on a wet runway is two five knots — with the wind one eight zero at three zero gusting three five the crosswind component is above our limit. Our intentions are runway one six: it is dry and the crosswind is within limits. Request taxi back for runway one six, we accept the eight minutes.",
        "notes": [
          "여기는 **최대**다 — 25 가 상한이므로 30 gusting 35 는 초과다. Q4 와 방향이 반대라는 점이 이 세트의 핵심이다.",
          "활주로 24 는 기수 240, 풍향 180 이므로 60° 측풍이다. 성분이 한계를 넘는다는 것만 말하면 되고 삼각함수를 말할 필요는 없다.",
          "`Say your intentions` 이므로 **거부 + 내가 할 것** 둘 다 필요하다. 거부만 하면 절반이다.",
          "출발 전이므로 `taxi back` 을 요청한다. 착륙 상황으로 읽어 `go around` 를 말하면 상황을 반대로 읽은 것이다."
        ]
      },
      "P1B-Q6": {
        "verdict": "",
        "model": "HL123, we would like to come down. We have had moderate turbulence at flight level three three zero for the last one five minutes and the aircraft ahead reported it smooth at flight level two niner zero. Request descent to flight level two niner zero.",
        "notes": [
          "**선택 질문에는 AFFIRM/NEGATIVE 를 쓰지 않는다.** 둘 중 어느 쪽인지 말해야 한다. `Negative` 로 답하면 관제사는 어느 쪽을 거부했는지 모른다.",
          "선택만 말하고 **목표 고도를 안 주는** 것이 흔한 실점이다. `request descent to FL two niner zero` 까지 간다.",
          "이유에 선행기 보고를 넣는다 — 관제사가 다른 항공기에 쓸 수 있는 정보다."
        ]
      },
      "P2A-Q1": {
        "verdict": "",
        "model": "Rothbury Approach, HL123, descending through flight level one niner zero for one three thousand, 45 miles from KELSO, inbound Rothbury.",
        "notes": [
          "위치보고의 동사는 **현재 상태**다 — `descending through X for Y`. `maintain` 이나 `descend` 로 말하면 지시 복창처럼 들린다.",
          "기관명 → 콜사인 → 고도 → 위치 순서. 기관을 부르지 않고 바로 시작하면 발신 문항의 첫 감점이다.",
          "Initial Situation 의 네 숫자(연료·인원·필요거리·최저속도)를 **지금 적어 둔다.** 네 개 다 뒤에서 다시 쓰인다."
        ]
      },
      "P2A-Q2": {
        "verdict": "",
        "model": "HL123, descend to one one thousand, expect the KELSO TWO arrival, ILS runway two four. Request the braking action on runway two four.",
        "notes": [
          "필수 복창 3개 : 고도(11,000)·arrival(KELSO TWO)·활주로(two four). `runway is wet` 은 정보라서 복창 의무가 없다.",
          "`request the braking action` — 명사구다. `request to know the braking action` 은 틀린 형태다."
        ]
      },
      "P2A-Q3": {
        "verdict": "",
        "model": "HL123, reduce speed to one eight zero knots until one zero miles. Unable one eight zero knots at today's weight — the slowest speed we can hold is two one zero knots. We can maintain two one zero knots until one zero miles.",
        "notes": [
          "복창을 먼저 하고 그다음에 UNABLE 이다. 속도는 필수 복창 항목이므로 건너뛰면 누락이다.",
          "최저속도는 **210 이 하한**이다. 180 은 그보다 느리므로 불가 — P1B-Q4 와 같은 방향이다.",
          "내가 줄 수 있는 값(210)을 숫자로 준다. `unable` 만 말하고 끝내는 것이 누적 최다 실점이다.",
          "이 턴이 뒤의 P2C-Q2(Follow-up)가 가리키는 자리다."
        ]
      },
      "P2A-Q4": {
        "verdict": "",
        "model": "HL123, we have a TIRE PRESSURE LOW caption on the left main gear. Our brakes and anti-skid are normal, but with one wheel unserviceable our required landing distance is now 3,100 metres instead of 2,450. Request the landing distance available on runway two four.",
        "notes": [
          "지시문이 세 가지를 요구한다 : 문제 / **무엇이 바뀌었는지** / 요청. 두 번째가 이 세트 전체의 축이다 — `2,450 → 3,100` 두 숫자를 같이 말하면 관제사도 바뀐 것을 안다.",
          "정상인 것(브레이크·안티스키드)을 같이 말해야 관제사가 비상으로 오판하지 않는다.",
          "적어 둔 2,450 을 **지우지 말고 옆에 3,100 을 쓴다.** 뒤에서 두 번 더 쓴다."
        ]
      },
      "P2A-Q5": {
        "verdict": "",
        "model": "HL123, unable Rothbury — we now require 3,100 metres and runway two four gives us only 2,600 metres. Request diversion to Caldon: 3,400 metres is sufficient and we accept the one four minutes.",
        "notes": [
          "**갱신된 값 3,100 으로 비교**해야 한다. 처음 적어 둔 2,450 으로 비교하면 2,600 이 충분해 보이고 판단이 뒤집힌다 — 이 세트가 노리는 바로 그 지점이다.",
          "거부 대상(Rothbury)과 필요값(3,100)을 둘 다 말한다."
        ]
      },
      "P2A-Q6": {
        "verdict": "",
        "model": "HL123, fuel endurance two hours zero five minutes, one eight four persons on board.",
        "notes": [
          "다섯 턴 전 Initial Situation 의 값이다. 짐작해서 바꿔 말하면 안 된다 — 2시간 05분 · 184명.",
          "묻지 않은 것을 덧붙이지 않는다. 두 값만 짧게 준다."
        ]
      },
      "P2A-Q7": {
        "verdict": "",
        "model": "HL123, turn right heading three two zero, descend to 8,000 feet, contact Caldon Approach on 126.35. Our intentions are to divert to Caldon and make a normal ILS approach to the longer runway. We request the fire service standing by for the left main gear, and a full-length landing.",
        "notes": [
          "필수 복창 3개 : 기수(320)·고도(8,000)·**주파수(126.35)**. 주파수를 빼면 필수 복창 누락이다.",
          "intentions 는 **내가 할 것**(Caldon 으로 divert, ILS) + **필요한 지원**(소방대, full length) 이다. 요청만 말하면 intentions 진술이 아니다."
        ]
      },
      "P2A-Q8": {
        "verdict": "",
        "model": "HL123, the landing distance we require is 3,100 metres, and our fuel endurance is two hours zero five minutes.",
        "notes": [
          "**되묻기 함정.** 필요 착륙거리는 중간에 2,450 → 3,100 으로 바뀌었다. 여기서 2,450 을 말하면 Caldon 의 브리핑이 틀어진다.",
          "연료는 **바뀌지 않았다** — Initial 값 그대로 2시간 05분. 바뀐 값은 바꿔 말하고, 안 바뀐 값은 그대로 말하는 것을 구분하는 문항이다.",
          "새 관제사는 앞의 교신을 못 들었다. 그래서 되묻는 것이 당연하다 — \"방금 말했는데요\" 가 아니라 **그냥 다시 준다.**",
          "두 값을 한 문장에 묶어 짧게 준다."
        ]
      },
      "P2A-Q9": {
        "verdict": "",
        "model": "HL123, turn left heading two six zero, descend to 2,500 feet until established, cleared for the ILS runway one eight approach, contact Caldon Tower on 120.9. We will need the fire service standing by at the runway, and we will stop on the runway for a brake and tire inspection — request a tow to the stand.",
        "notes": [
          "필수 복창 4개 : 기수·고도·`until established`·접근 허가·주파수. `until established` 를 빼면 조건을 지운 복창이다.",
          "활주로에서 필요한 것 : 소방대 대기 / 활주로 정지 / 견인. \"소방대\"만 말하고 **활주로에서 멈춘다는 의도**를 빼면 관제사가 다음 착륙기를 그대로 들여보낸다."
        ]
      },
      "P2B-Q1": {
        "verdict": "",
        "model": "Caldon Control, HL123, flight level three one zero. Request direct OBREN due to a stronger headwind than planned.",
        "notes": [
          "20초 문항이다. 기관 → 콜사인 → 현재 고도 → REQUEST + 명사구 + 이유로 끝낸다.",
          "`request direct OBREN` 이 명사구 형태다. `request to go direct` 는 틀린 형태다."
        ]
      },
      "P2B-Q2": {
        "verdict": "",
        "model": "Rothbury Delivery, HL123. Our flight plan level is flight level three seven zero, but at today's weight we cannot reach it until one hour after departure. Request flight level three three zero initially, with a step climb to three seven zero later.",
        "notes": [
          "지시문이 둘이다 : 상황 보고 + 요청. 상황(무게 때문에 1시간)을 빼고 요청만 하면 관제사가 왜인지 모른다.",
          "`initially` 와 `step climb` 을 붙여야 \"처음만 330\" 이라는 뜻이 전달된다."
        ]
      },
      "P2B-Q3": {
        "verdict": "",
        "model": "Minsterly Departure, HL123, correction — we are level at nine thousand feet in error. We were cleared to one one thousand and we set nine thousand by mistake. Request climb to one one thousand.",
        "notes": [
          "정정은 **3단**이다 : 현재 상태(level nine thousand) → 받은 허가(one one thousand) → 요청(climb). 하나라도 빠지면 관제사가 지금 내 고도를 모른다.",
          "현재 상태의 동사는 `level at` / `levelling off at` 이다. `maintain nine thousand` 으로 말하면 지시를 복창한 것처럼 들린다.",
          "`correction` 또는 `we are level ... in error` 로 실수임을 먼저 밝힌다."
        ]
      },
      "P2B-Q4": {
        "verdict": "",
        "model": "Caldon Control, HL123, one two miles from TAMLYN. Request a one five mile offset left of track due to thunderstorms on our track, rejoining at TAMLYN.",
        "notes": [
          "offset 요청은 **거리 + 좌/우 + 복귀 지점** 세 가지가 다 있어야 한다. `request left turn` 만으로는 관제사가 분리를 잡을 수 없다.",
          "이유는 `due to thunderstorms` 로 짧게."
        ]
      },
      "P2B-Q5": {
        "verdict": "",
        "model": "Caldon Control, HL123, holding at OBREN with one hour one zero minutes of fuel remaining. Our diversion to Penhale requires three five minutes. Request our expected approach time.",
        "notes": [
          "`request our expected approach time` — EAT 는 정해진 명사다. `request when we can leave the hold` 로 바꾸지 않는다.",
          "연료와 교체공항 소요시간을 **둘 다** 주는 것이 핵심이다. 그 차이(1시간 10분 − 35분 = 35분 여유)가 관제사의 판단 근거다.",
          "체공 지시는 Caldon Control 이 줬으므로 **같은 기관을 부른다.** 기관명 없이 시작하면 발신 문항의 첫 감점이다.",
          "아직 비상이 아니므로 MAYDAY·PAN-PAN 을 쓰지 않는다. `MINIMUM FUEL` 도 여기서는 이르다."
        ]
      },
      "P2B-Q6": {
        "verdict": "",
        "model": "Rothbury Ground, HL123. Be advised, one zero minutes ago on the taxi out we saw fuel leaking from a parked Airbus A321 at stand two eight. We did not report it at the time.",
        "notes": [
          "시차형 보고다. **본 것 · 어디서 · 언제** 세 가지가 다 있어야 한다. 기종(A321)과 스탠드(two eight) 중 하나라도 빠지면 지상관제사가 찾아갈 수 없다.",
          "`Be advised` 로 열고, 요청이 아니라 보고로 닫는다. 내가 할 일을 묻지 않는다."
        ]
      },
      "P2C-Q1": {
        "verdict": "",
        "model": "In that situation I compared two figures. The first was the landing distance I required, which had changed from 2,450 metres to 3,100 metres after the tire pressure caption, because with one wheel unserviceable my stopping performance was degraded. The second was the landing distance available on the runway the controller offered me, which was 2,600 metres at Rothbury. Because the distance available was five hundred metres less than the distance I required, I could not accept that runway, so I asked for Caldon, where 3,400 metres was available and the extra time was only one four minutes.\nIn my role as a pilot, I keep the numbers on one sheet of paper in a fixed order, so that every figure always has the same place and I never have to search for it. I write the clearance items in the CRAFT order — clearance limit, route, altitude, frequency and transponder — and I keep the performance figures in a separate box on the right of the page: fuel endurance, persons on board, and required landing distance. When a figure changes I do not erase the old one. I cross it out and write the new one beside it, so that I can see both that it changed and what it changed from.\nAn example is the landing distance in this flight. The controller asked me for it a second time when he handed us over to Caldon for their brief. The figure I had written first was 2,450 metres and the live figure was 3,100 metres, and because the old one was crossed out rather than rubbed out I could give him the correct figure immediately instead of working it out again.",
        "notes": [
          "3부 구조를 지킨다 : ① 비교한 두 숫자 ② 일반적인 숫자 관리법 ③ 예시. 셋 중 하나를 빼면 질문의 일부를 답하지 않은 것이다.",
          "① 에서는 **두 숫자와 그 차이**를 말한다. \"거리가 부족했다\"로 뭉개지 않는다.",
          "③ 은 `Give an example.` 에 대한 답이므로 반드시 구체적인 한 사례로 닫는다.",
          "90초를 다 쓰려 하지 않는다. 60~75초 분량으로 끝내고 세 부분을 다 채우는 쪽이 낫다."
        ]
      },
      "P2C-Q2": {
        "verdict": "",
        "model": "In that situation the controller asked me to reduce to one eight zero knots until one zero miles. At today's weight the slowest speed I could hold was two one zero knots, so I read the instruction back first, then said unable one eight zero knots with the reason, and then gave him two one zero knots as the speed I could maintain.\nIt matters that I gave him a figure because the word unable on its own leaves him with nothing to work with. He is sequencing other traffic behind me, and if he knows my number is two one zero knots he can adjust the spacing or turn me out himself, instead of asking me a second time while I am busy on the approach.\nFrom my own experience, the way I keep a minimum and a maximum from getting mixed up is to write the word next to the number and never the number alone — min two one zero, max crosswind two five — and to write the limits down during the approach briefing, before the controller asks for anything. I also turn the controller's request into a question to myself before I answer: is he asking me to go lower, or higher, than my limit? That is the part that gets reversed under pressure, not the number itself.\nAn example of a limit I have had to refuse is a crosswind. The tower offered me a wet runway with the wind thirty knots, gusting thirty-five, about sixty degrees off the runway heading, and my maximum crosswind on a wet runway is two five knots. I was unable that runway, so I told the tower my limit, requested the dry runway instead, and accepted the eight minutes of taxi back.",
        "notes": [
          "질문이 네 부분이다 : 어떻게 말했는지 / 숫자를 준 것이 왜 중요한지 / 최저·최대를 섞지 않는 방법 / 거부한 예. 두 번째를 빼기 쉽다.",
          "`In this situation` 은 **C 파트 롤플레이의 P2A-Q3**(180 요구 / 210 한계)를 가리킨다. P1B-Q4(190/220)와 숫자를 섞지 않는다.",
          "\"왜 중요한가\"는 **관제사 입장**에서 답한다(분리·순서 배치). 내 입장만 말하면 답이 절반이다.",
          "세 번째는 자기 방법을 구체적으로 말한다. `I am careful` 류는 답이 아니다."
        ]
      },
      "P2C-Q3": {
        "verdict": "",
        "model": "We were HL123, descending through flight level one niner zero for one three thousand, 45 miles from KELSO and inbound to Rothbury. Our fuel endurance was two hours zero five minutes, we had one eight four persons on board, and our required landing distance was 2,450 metres.\nOn the way in the controller asked us to reduce to one eight zero knots, and we were unable that speed at our weight, so we gave him two one zero knots, which was the slowest we could hold. That was a limitation, not a failure.\nThen, passing one two thousand feet, we got a TIRE PRESSURE LOW caption on the left main gear. The brakes and the anti-skid system were both normal, so this was not a loss of braking in flight and the aircraft was fully controllable. The nature of the incident was a performance problem rather than a system failure: with one wheel unserviceable the landing distance we required went up from 2,450 metres to 3,100 metres.\nThe consequence was that our destination was no longer usable. Runway two four at Rothbury gave us only 2,600 metres, which was five hundred metres less than we needed, so we were unable Rothbury and requested a diversion to Caldon, which had 3,400 metres available and was one four minutes away.\nFrom there it was handled as a normal diversion. We were turned right heading three two zero, descended to 8,000 feet for vectors to Caldon and changed to Caldon Approach, who asked us again for the landing distance we required and our fuel endurance for his brief. We were then vectored onto the ILS for runway one eight and landed with the fire service standing by. We did not declare an emergency, because the aircraft was controllable and we had enough fuel to reach a suitable runway.",
        "notes": [
          "Task C Q1 은 **시간 순서**로 말한다 : 초기 상태 → 속도 제한 → 사건 → 영향 → 조치 → 결말.",
          "`the nature of the incident` 을 한 문장으로 못 박는다 — \"시스템 고장이 아니라 착륙성능 문제\".",
          "비상을 선포하지 않았다면 **왜 안 했는지**까지 말한다. 이것이 pilot's judgement 로 평가되는 부분이다.",
          "숫자를 빼고 서술만 하면 Task B 를 들은 증거가 없다. 2,450 · 3,100 · 2,600 · 3,400 을 넣는다."
        ]
      },
      "P2C-Q4": {
        "verdict": "",
        "model": "Overall I think the controller handled it well. As soon as I reported the caption and the new landing distance, he gave me the figures that mattered — the distance available at Rothbury, the distance available at Caldon, and the time to Caldon — instead of telling me which airport to use. That is the right way round, because the landing performance calculation is mine and only I know what the aircraft needs.\nHe also did not argue about the speed. When I told him I was unable one eight zero knots and gave him two one zero, he accepted it and worked around it, which is what a pilot needs when a figure is a hard limit rather than a preference.\nThere is one thing I would have done differently, and it is at the handover. When Caldon Approach took me, he had none of my figures, so I had to say the landing distance and the fuel endurance a second time while I was being vectored and descending, which is our highest workload. Those two numbers had already been passed to Rothbury Approach once. If they had gone across in the coordination, or if Caldon had asked while I was still steady in the descent, the request would have cost us much less.\nFrom a pilot's point of view, what helped most was that he never pressed me for a decision. He gave information and waited, which gave me the time to run the landing performance again before I committed to a runway. What I would ask for next time is the runway condition at Caldon, not only the distance available — on a wet runway the distance alone does not tell me whether I can stop with one wheel unserviceable.",
        "notes": [
          "Q2 는 **칭찬 → 개선점 → 조종사 관점** 세 부분이다. \"잘했다\"로만 끝내면 질문의 두 번째·세 번째를 버린 것이다.",
          "개선점은 **구체적 행동**으로 말한다. 여기서는 **핸드오프 때 수치가 넘어가지 않은 것** — 그래서 바쁜 구간에서 두 번 말해야 했다는 점이 가장 할 말이 많은 지점이다.",
          "관제사를 비난하지 않는다. 역할 분담(정보는 관제사, 판단은 조종사)의 언어로 말한다."
        ]
      }
    }
  },
  "WEAK_02": {
    "set": "WEAK_02",
    "level": "Level 2",
    "summary": "",
    "gradedAt": "2026-11-05",
    "items": {
      "P1A-Q1": {
        "verdict": "✅",
        "model": "HL123, cleared direct LIDRO, descend to 9,000 feet, expect one five minutes of delay.",
        "notes": [
          "세 요소 전부 복창했다. 이 문항은 흠이 없다.",
          "오탈자(`celared`·`descendt`)는 소리 내면 같으므로 감점하지 않았다(§6-1-1)."
        ]
      },
      "P1A-Q2": {
        "verdict": "❌",
        "model": "HL123, descend to 7,000 feet. Earlier we were told to expect one five minutes of delay — request our revised delay now.",
        "notes": [
          "**누락된 기능 : \"tell him what you were told earlier\".** Q1 에서 들은 **one five minutes** 를 말해야 했다. 이 세트가 Q1 → Q2 로 이은 이유가 바로 그것인데, 적어 둔 값을 한 문항 뒤에서 쓰지 못했다.",
          "표준교신용어 오류 : `how long will it to wait` 는 문장이 아니다. 정보를 원할 때는 **REQUEST + 명사구** — `request our revised delay` / `request the expected delay now`.",
          "복창(7,000)은 맞다."
        ]
      },
      "P1A-Q3": {
        "verdict": "⚠",
        "model": "HL123, descend to flight level two four zero. Unable two five hundred feet per minute or greater — for the next three minutes our maximum rate is 1,500 feet per minute. Request 1,500 feet per minute.",
        "notes": [
          "세 기능(복창·불가·대안)을 다 했다. 이 섹션에서 드문 완주다.",
          "표준교신용어 오류 : `unable to increase 2500ft` — 강하율이므로 `increase` 가 아니다. **`Unable (값)`** 으로 값을 바로 붙인다.",
          "누락 : **`for the next three minutes`**. 3분 뒤에는 2,500 도 가능하므로, 시한을 말하면 관제사가 다시 쓸 수 있다.",
          "코멘트 : **콜사인이 없다.** 복창에는 반드시 콜사인을 붙인다."
        ]
      },
      "P1A-Q4": {
        "verdict": "⚠",
        "model": "HL123, taxi to holding point Mike three via Tango, hold short of runway zero niner. Request holding point Mike one — our performance today requires the full length of runway zero niner.",
        "notes": [
          "복창은 완벽하다. **`hold short of runway zero nine` 을 빠뜨리지 않았다** — 활주로 관련 지시라 필수인데 매번 빠지던 자리다.",
          "문법 오류 : `our take off runway limit is require to take off at m1` 은 뜻이 서지 않는다. 이유는 **\"오늘 성능 자료가 09 전장 기준이다\"** 다. 요청의 이유는 **요청 내용을 되풀이하는 것이 아니라 그 바깥의 사실**이어야 한다."
        ]
      },
      "P1A-Q5": {
        "verdict": "✅",
        "model": "HL123, taxi to stand two two via Kilo, give way to the Airbus A380 on our left. Be advised, during our landing roll we saw a large dog on the grass beside taxiway Delta.",
        "notes": [
          "복창 세 요소 + 시차형 보고를 **언제·어디서까지** 담았다. 이 유형의 모범이다.",
          "사소한 것 : `be advise` → `be advised`."
        ]
      },
      "P1A-Q6": {
        "verdict": "⚠",
        "model": "Wexcombe Approach, HL123, level at flight level one six zero, 40 miles from Wexcombe. Be advised, we have a cabin crew member with a serious burn to one hand from the galley oven.",
        "notes": [
          "기관·고도·위치를 순서대로 깔았다. 틀이 맞다.",
          "누락된 정보 : **누가 다쳤는지.** `serious burn on 1 hand on aircraft` 로는 승객인지 승무원인지 알 수 없다. **승무원**이면 객실 서비스·탈출 지원 인원이 줄어드는 문제라 관제사·공항의 대응이 달라진다. 사람을 먼저 말한다 — `a cabin crew member with ~`.",
          "코멘트 : `request priority landing` 은 **다음 문항(Q7)의 몫**이다. 여기 지시문은 `Report your status` 하나였다. 틀린 말은 아니나 Q7 에서 할 말을 미리 써 버렸다.",
          "기관명이 `wexco` 로 잘렸다 — 위 세트 결함 ①."
        ]
      },
      "P1A-Q7": {
        "verdict": "❌",
        "model": "HL123, turn left heading one three zero, descend to 6,000 feet. Our intentions are to land at Wexcombe on the next available runway, and we request a medical team at the stand.",
        "notes": [
          "**누락된 기능 : 가장 중요한 의도.** 원한 것은 두 가지(**다음 가능한 활주로에 착륙** + 스탠드에 의료진)인데 두 번째만 말했다. 어디에 어떻게 내릴지가 intentions 의 본체다.",
          "문법 오류 : `our intention is medical team standing by` — 명사구를 그냥 이어 붙였다. **의도는 `Our intentions are to + 동사`**, **지원 요청은 `we request + 명사구`** 로 나눠 말한다.",
          "복창(기수·고도)은 맞다. `vectors for Wexcombe` 는 복창 의무가 없다."
        ]
      },
      "P1A-Q8": {
        "verdict": "✅",
        "model": "Alderton Ground, HL123, at stand one eight, request pushback and start-up.",
        "notes": [
          "20초 발신 문항의 정답 형태다. 기관 → 콜사인 → 위치 → REQUEST + 명사구. 더 넣을 것도 뺄 것도 없다.",
          "기관명이 `adulton` 으로 흐려졌다 — 세트 결함 ①."
        ]
      },
      "P1A-Q9": {
        "verdict": "❌",
        "model": "HL123, holding position, wilco, we will report when we are ready. Understood you have an inbound for our stand in one zero minutes. We need one two minutes — a passenger has not boarded and his bags must be offloaded.",
        "notes": [
          "**누락된 기능 둘 중 하나 : 그의 사정 인지.** 그는 **10분 뒤 들어오는 항공기**가 있다고 말했다. 그걸 못 들었다는 듯이 \"12분 필요하다\"만 하면, 관제사는 내가 10분을 넘긴다는 사실을 아는지 모르는지 알 수 없다. **내 12분이 그의 10분보다 길다는 것을 내가 알고 있음**을 보여야 한다.",
          "표준교신용어 오류 : `Report when you are ready` 에 대한 응답은 **WILCO** 다. 아무 말도 안 하면 \"보고하겠다\"는 약속이 빠진다.",
          "이유가 절반이다 : 수하물 하기(offload)가 12분의 실제 이유다. `not borded passenger to wait` 는 문장이 서지 않는다."
        ]
      },
      "P1A-Q10": {
        "verdict": "❌",
        "model": "Pembury Approach, HL123, going around from the ILS runway one eight, now passing 2,000 feet. We lost one five knots of airspeed in windshear at 800 feet.",
        "notes": [
          "**누락된 정보 : 복행(go-around)했다는 사실.** 상태 보고의 핵심이다. `passing 2000ft on ils runway 18` 은 **아직 접근 중**이라는 뜻으로 읽힌다 — 관제사는 복행기를 분리해야 하므로 이 한마디가 없으면 보고가 성립하지 않는다.",
          "숫자 오류 : `we lost 800feet and 15knots` — 잃은 것은 **속도 15노트**이고, 800피트는 **그 일이 일어난 고도**다. 두 숫자의 역할을 섞었다. `lost one five knots at 800 feet`.",
          "기관명 `tenbury` — 세트 결함 ①."
        ]
      },
      "P1A-Q11": {
        "verdict": "❌",
        "model": "HL123, climb to 4,000 feet, turn right heading three six zero. We lost one five knots. We would like to hold — request two zero minutes in the hold until the weather has passed.",
        "notes": [
          "**숫자 오류 : `about 10min` → 지문은 `two zero minutes` 다.** 지문에 적힌 값을 지어내 바꿨다. 이 세트가 겨냥한 \"값 유지\"의 실패다.",
          "복창 두 요소는 맞고, 두 질문에 다 답한 것도 맞다. 선택 질문에 `AFFIRM/NEGATIVE` 를 쓰지 않은 것도 맞다.",
          "사소한 것 : `we loose` → `we lost`(과거). `about` 은 쓰지 않는다 — 관제사는 숫자로 체공을 배분한다."
        ]
      },
      "P1B-Q1": {
        "verdict": "⚠",
        "model": "Affirm, HL123. Our maximum tailwind for landing is one five knots and runway zero niner has one zero knots, so we can accept it. Request runway zero niner — it saves us one two minutes.",
        "notes": [
          "판단·근거·두 숫자가 다 있다. 이 섹션에서 가장 잘 쓴 답이다. `AFFIRM` 으로 연 것도 맞다(가부 질문).",
          "오독 : **`12min delay` 가 아니다.** 관제사는 \"**1 2 분을 절약한다**(saves you)\"고 했다. 지연이 아니라 단축이다. 반대로 읽었다."
        ]
      },
      "P1B-Q2": {
        "verdict": "⚠",
        "model": "Affirm, HL123, reduce speed to two one zero knots until one two miles. Our slowest speed today is one eight zero knots, so two one zero knots is acceptable.",
        "notes": [
          "판단이 맞다 — 210 은 하한 180 보다 빠르므로 수락. **Q3 와 짝으로 낸 문항인데 이쪽은 맞혔다.**",
          "단위 오류 : **`until 12mins` → `until one two miles`.** 거리를 시간으로 바꿔 들었다. 복창에서 단위가 바뀌면 다른 지시가 된다.",
          "코멘트 : 마지막 절이 앞을 되풀이한다. `so two one zero knots is acceptable` 로 한 번만 닫는다."
        ]
      },
      "P1B-Q3": {
        "verdict": "❌",
        "model": "Negative, HL123. Unable two six zero knots or greater — a dispatch restriction in our technical log limits us to two three zero knots or less. We can give you two three zero knots until MAVIK.",
        "notes": [
          "**치명적 오류 : `AFFIRM` 이 아니라 `NEGATIVE` 다.** 오늘의 제한은 **최대 230**이고 관제사는 **260 이상**을 요구했다. 수락할 수 없다.",
          "**최저 ↔ 최대를 뒤집었다.** 게다가 `our lowest speed is 180knots` 는 **Q2 의 값**을 그대로 끌어왔다. 이 문항의 제한은 하한이 아니라 **상한 230**이다. 두 문항을 나란히 낸 이유가 이 구분이다.",
          "누락 : 줄 수 있는 값(**230**)을 주지 않았다. 거부만 하면 관제사는 분리를 다시 짜야 한다.",
          "**이 유형이 누적 최다 실점이다.** `max` 인지 `min` 인지를 숫자 옆에 적어 두는 것으로만 막을 수 있다."
        ]
      },
      "P1B-Q4": {
        "verdict": "❌",
        "model": "HL123, our intentions are to land at Dunmere. Our minimum RVR for this approach is 550 metres and Pembury runway one eight is 450 metres, which is below our minimum. Dunmere at 800 metres is above it, and we accept the one six minutes.",
        "notes": [
          "결론(Dunmere)은 맞다. 그러나 **이유가 거꾸로다.**",
          "**어휘 오류 : `over our limit` → 반대말이다.** RVR 450 은 최저 550 **미만**이다. `below our minimum` 이라고 해야 한다. `over the limit` 은 \"한계를 초과했다\"는 뜻이어서, 측풍·무게처럼 **상한**이 있는 값에 쓴다. RVR·활주로 거리는 **하한**이므로 `below minimum` 이다. 이 구분이 Q3 의 실수와 같은 뿌리다.",
          "누락 : **두 숫자(450 · 550).** 섹션 Directions 가 `give the controller both figures` 라고 했다."
        ]
      },
      "P1B-Q5": {
        "verdict": "❌",
        "model": "HL123, hold at ZENTA, left turns, maintain 8,000 feet, expect approach clearance at 1125Z.",
        "notes": [
          "**숫자 오류 : `1145z` → `1125Z`.** 네 요소 중 셋은 정확한데 시각 하나가 20분 틀렸다.",
          "이 값이 **다음 문항의 계산 근거**다. Q6 에서 \"1105Z 현재\"와 비교해 지연이 20분인지 40분인지가 갈린다. 복창의 숫자 하나가 다음 판단을 무너뜨린 전형적인 사례다.",
          "체공 복창 네 요소(픽스·선회 방향·고도·EAT)는 전부 필수다. 구조는 맞게 잡았다."
        ]
      },
      "P1B-Q6": {
        "verdict": "❌",
        "model": "HL123, we are able to accept the delay. It is now 1105Z and our approach clearance is expected at 1125Z, so that is two zero minutes. Our fuel endurance is one hour one zero minutes and our diversion to Dunmere needs three five minutes, so we can hold and still divert if we have to.",
        "notes": [
          "**판단이 지문과 반대다.** 지문은 `You would rather stay if your fuel allows it` 이고, 연료는 **허용한다** — 지연 20분 + 교체 35분 = 55분 < 1시간 10분. 그러므로 **체공 수락**이다.",
          "**숫자를 지어냈다 : `it takes only 5min`.** 5분은 어디에도 없다. 지연은 20분(1125Z − 1105Z), 교체는 35분이다. 값이 없을 때 지어내지 말고 **지문에 있는 두 숫자를 계산**한다.",
          "선택 질문이므로 `AFFIRM/NEGATIVE` 대신 **어느 쪽인지**를 말해야 한다 — 그건 맞게 했다.",
          "Q5 의 1145Z 오류가 여기까지 번졌다. 다만 1145Z 로 계산해도(40분 + 35분 = 75분 > 70분) **거부**가 되므로 결론은 달라졌겠지만, 답안의 `5min` 은 두 계산 어느 쪽과도 맞지 않는다."
        ]
      },
      "P1B-Q7": {
        "verdict": "❌",
        "model": "Negative, HL123. We are still in heavy rain and moderate turbulence at 9,000 feet. Request to maintain heading one four zero for five more miles to get clear of it.",
        "notes": [
          "**누락 : `NEGATIVE`.** 관제사는 \"날씨를 벗어났겠지요?\"라고 **확인을 요구**했고 사실은 아니다. 첫 단어가 NEGATIVE 여야 그가 자기 그림이 틀렸음을 안다.",
          "**지어낸 요청 : `request divert`.** 지문에 교체공항은 한 마디도 없다. 원한 것은 **현 기수로 5마일 더**다. 요청을 지어내면 관제사는 전혀 다른 조정을 시작한다.",
          "누락 : **`for five more miles`** — 목표값. 기수만 요청하면 언제까지인지 모른다.",
          "잘한 것 : 관제사의 추정을 실제 기상으로 정정한 것."
        ]
      },
      "P2A-Q1": {
        "verdict": "❌",
        "model": "Alderton Approach, HL123, level at flight level two one zero, 60 miles from PERNO, inbound Alderton. Request descent.",
        "notes": [
          "**누락된 기능 : `request descent`.** 지시문이 세 가지(기관 호출·위치와 고도·강하 요청)를 명시했는데 세 번째를 `request inbound alderton airport` 로 바꿨다. 그건 요청이 아니라 목적지 통보다.",
          "고도·위치는 맞다. `level at` 으로 현재 상태를 말한 것도 맞다.",
          "`pernoum` — PERNO. 이 문항에는 클루가 없었다."
        ]
      },
      "P2A-Q2": {
        "verdict": "✅",
        "model": "HL123, descend to one one thousand, expect the PERNO ONE arrival, ILS runway two seven. Request the freezing level.",
        "notes": [
          "필수 복창 세 요소(고도·arrival·활주로)를 다 담고, `icing reported` 는 정보라서 복창하지 않았다 — 판단이 정확하다.",
          "`request frezzing level` 이 **REQUEST + 명사구**로 맞다.",
          "`110000` 은 0 을 하나 더 친 오타로 보고 넘겼다. 다만 숫자는 **값이 틀리면 그대로 감점**이므로, 11,000 은 `one one thousand` 으로 적는 습관을 들이는 편이 안전하다."
        ]
      },
      "P2A-Q3": {
        "verdict": "❌",
        "model": "HL123, freezing level 7,000 feet. Unable one six zero knots — at today's weight the slowest speed we can hold is one eight zero knots. We can maintain one eight zero knots until one zero miles.",
        "notes": [
          "**누락된 기능 전체 : \"tell him what you can do instead\".** Initial Situation 이 **최저속도 180**을 줬고 관제사는 **160**을 요구했다. 받을 수 없는 지시인데 `roger` 로 수락했다.",
          "표준교신용어 오류 : **불가한 지시에 `ROGER` 를 쓸 수 없다.** 내용 없이 단독으로 쓰면 \"알아들었고 하겠다\"로 읽힌다.",
          "**P1B-Q3 와 똑같은 실패**다. 한 세트 안에서 최저속도 함정을 세 번(Q2 수락·Q3 거부·여기) 냈는데, 거부해야 하는 두 곳을 다 놓쳤다."
        ]
      },
      "P2A-Q4": {
        "verdict": "⚠",
        "model": "Approach, HL123, we have a WING ANTI-ICE FAULT caption for the left wing and ice is building on that wing. Two things have changed — our slowest speed is now two zero zero knots and our required landing distance is now 2,700 metres. Request descent to 6,000 feet to get below the freezing level.",
        "notes": [
          "**세 기능을 다 했고, 바뀐 값 두 개를 다 말했다.** 이 세트가 겨냥한 핵심을 이 문항에서는 해냈다. 가장 잘한 답이다.",
          "누락된 정보 : **고장 이름.** `left wing icing` 은 증상이고, 실제는 **WING ANTI-ICE FAULT** 다. 착빙은 결과이고 원인은 방빙 계통 고장이다 — 관제사·공항이 대비할 내용이 달라진다.",
          "어휘 오류 : `we require 2700meters landing distance available` — `required landing distance` 와 `landing distance available` 은 **다른 두 값**이다. 내 쪽 값은 **required** 다. (Q5 에서 이 혼동이 그대로 드러난다.)",
          "코멘트 : 요청을 가운데 끼워 넣어 \"바뀐 값\"이 뒤로 밀렸다. **문제 → 바뀐 값 → 요청** 순서로 끊는 편이 듣기 쉽다."
        ]
      },
      "P2A-Q5": {
        "verdict": "⚠",
        "model": "HL123, descend to 6,000 feet. We now require 2,700 metres and Alderton runway two seven gives us only 2,500, so request Wexcombe — 3,000 metres is sufficient and we accept the one two minutes.",
        "notes": [
          "판단이 맞다 — 2,500 < 2,700 이므로 Alderton 은 못 쓴다. **갱신된 값 2,700 으로 비교**한 것이 이 세트의 목표였고 그걸 했다.",
          "어휘 오류 : **`our available distance is 2700m`** — 2,700 은 내가 **필요한(required)** 거리다. `available` 은 활주로가 **주는** 거리(2,500 · 3,000)다. 두 낱말을 바꿔 쓰면 뜻이 정반대가 되어, 관제사는 \"2,700 이 있으니 괜찮다\"로 들을 수 있다.",
          "누락 : **거부하는 쪽의 숫자(2,500).** 두 숫자를 나란히 말해야 이유가 성립한다."
        ]
      },
      "P2A-Q6": {
        "verdict": "❌",
        "model": "Negative, HL123. We are level at 6,000 feet below the freezing level, but there is still ice on the left wing. And affirm, we would like the fire service standing by as a precaution.",
        "notes": [
          "**표준교신용어 오류 : 첫 단어가 `AFFIRM` 이 아니라 `NEGATIVE` 다.** 그가 물은 것은 \"얼음이 없어졌지요, 맞습니까?\"이고 **사실이 아니다**. 바로 뒤에 `but the icing is still on the left wing` 으로 내용을 정정한 것은 맞지만, **첫 단어가 뜻을 반대로 못 박아 버린다.** 무선에서는 첫 단어가 판단의 기준이다.",
          "질문이 두 개(얼음 상태 / 소방대)인데 둘 다 답한 것은 맞다. 두 번째에는 `affirm` 을 붙여 구분한다.",
          "이 세트에서 **AFFIRM/NEGATIVE 를 뒤집은 것이 세 번**(P1B-Q3 · P1B-Q7 · 여기)이다."
        ]
      },
      "P2A-Q7": {
        "verdict": "❌",
        "model": "HL123, our fuel endurance is two hours three five minutes and one six three persons on board.",
        "notes": [
          "**숫자 오류 : `136` → `163`.** Initial Situation 의 값은 **one six three** 다. 세 자리를 뒤집어 말했다.",
          "연료(2시간 35분)는 여섯 턴을 건너 정확히 가져왔다. **같은 지문의 두 숫자 중 하나만 살아남았다** — 적어 두는 것은 됐고, **적어 둔 것을 읽는 단계**에서 틀렸다는 뜻이다.",
          "숫자를 `163` 처럼 붙여 적지 말고 **`1-6-3`** 으로 끊어 적어 두면 읽을 때 뒤집히지 않는다."
        ]
      },
      "P2A-Q8": {
        "verdict": "✅",
        "model": "Affirm, HL123, turn right heading three zero zero, descend to 4,000 feet, reduce speed to two two zero knots — our slowest acceptable speed is two zero zero knots, so we can do that. Contact Wexcombe Approach on 126.85.",
        "notes": [
          "**이 세트의 최고 답안이다.** 필수 복창 네 요소(기수·고도·속도·**주파수**)를 다 담고, 가부 질문에 `AFFIRM` 으로 열고, 이유로 **갱신된 최저속도 200**을 댔다.",
          "220 ≥ 200 이므로 수락이 맞다. Q3 에서 놓친 판단을 여기서는 정확히 했다.",
          "다른 문항도 이 형태로 쓰면 된다 : **판정어 → 복창 → 이유(숫자) → 주파수.**"
        ]
      },
      "P2A-Q9": {
        "verdict": "❌",
        "model": "Wexcombe Approach, HL123, our slowest speed is two zero zero knots and we have one six three persons on board.",
        "notes": [
          "최저속도를 **갱신값 200**으로 말했다 — 180(초기값)이 아니라 200 을 고른 것이 정확하다. 바뀐 값을 바꿔 말하는 것은 됐다.",
          "**숫자 오류 : `136` → `163`.** Q7 의 오류를 **그대로 두 번째로 반복**했다. 처음 틀린 값이 메모에 그대로 남아 두 번 나갔다는 뜻이다 — 새 관제사는 이제 틀린 인원으로 브리핑한다.",
          "되묻기 자체에 짜증을 내지 않고 그냥 다시 준 것은 맞다."
        ]
      },
      "P2A-Q10": {
        "verdict": "❌",
        "model": "HL123, turn left heading zero niner zero, descend to 3,000 feet until established, cleared for the ILS runway one two approach, contact Wexcombe Tower on 118.75. The ice has now gone from the left wing, but the anti-ice fault remains, so our figures are unchanged.",
        "notes": [
          "**복창이 완벽하다.** 기수·고도·**`until established`**·접근 허가·주파수 다섯 요소를 하나도 빠뜨리지 않았다. 조건절을 지운 적이 없다.",
          "**누락된 기능 : \"and the fault\".** 지시문이 **얼음과 고장 둘 다**를 요구했다. 얼음만 말하면 관제사는 \"정상으로 돌아왔다\"로 듣는다. **고장은 남아 있고 그래서 숫자(최저속도 200·필요거리 2,700)가 그대로**라는 것이 Tower 가 알아야 할 내용이다.",
          "코멘트 : **콜사인이 없다.** 그리고 `the ice is gone` 을 주파수 변경 사이에 끼워 넣어, 복창과 보고의 경계가 사라졌다. 복창을 끝까지 하고 그 뒤에 보고를 붙인다."
        ]
      },
      "P2B-Q1": {
        "verdict": "❌",
        "model": "Stanmore Control, HL123, level at flight level three three zero. Request flight level three seven zero — we are burning more fuel than planned at this level.",
        "notes": [
          "**문항을 완전히 다르게 읽었다.** 지문은 순항 중 **고도 변경 요청**이고, 답안은 **도착 공항 최초 호출**이다. 요청(FL370)도 이유(연료)도 없다.",
          "지어낸 정보 : `60 miles from stanmore`, `information d`. Stanmore 는 공항이 아니라 **관제기관(Control)** 이다. `Control` 은 항로, `Approach` 는 공항 접근, `Ground/Tower` 는 공항 지상·관제탑이다 — 기관 이름의 꼬리말이 내가 어디에 있는지를 말해 준다.",
          "숫자 오류 : `fl300` → **FL330**.",
          "20초 문항이다. **기관 → 콜사인 → 현재 고도 → REQUEST + 명사구 + 이유** 한 문장으로 끝낸다."
        ]
      },
      "P2B-Q2": {
        "verdict": "❌",
        "model": "Alderton Delivery, HL123. At today's weight we cannot meet the climb gradient on the GOSMA TWO departure. Request the LIDRO ONE departure instead.",
        "notes": [
          "**클루를 그대로 읽었다.** 화면의 세 칸은 **철자를 알려주는 것**이고, 그중 무엇을 원하는지는 지문이 정한다 — 원하는 것은 **LIDRO ONE 하나**다. 둘을 같이 말하면 관제사는 무엇을 줘야 할지 모른다.",
          "어휘 오류 : **`arrival` → `departure`.** GOSMA TWO·LIDRO ONE 은 출발 절차다. 출발·도착을 바꿔 말하면 다른 절차를 받는다.",
          "**누락된 기능 : `Report your situation`.** 상승구배를 못 맞춘다는 이유가 없으면 관제사는 왜 바꾸려는지 모른다."
        ]
      },
      "P2B-Q3": {
        "verdict": "✅",
        "model": "HL123, reduce speed to two five zero knots until ROLDA.",
        "notes": [
          "정확하다. 속도와 조건(until ROLDA)을 다 담았다.",
          "이 문항은 **다음 문항의 전제**로 넣은 것이다. 여기서 들은 **250** 을 Q4 에서 써야 했다."
        ]
      },
      "P2B-Q4": {
        "verdict": "❌",
        "model": "Stanmore Control, HL123, correction — we set two eight zero knots in error. We were cleared two five zero knots until ROLDA and we are reducing to two five zero now.",
        "notes": [
          "**숫자 오류 : `260` → `250`.** 바로 앞 문항에서 정확히 복창한 값을 두 문항 뒤에 바꿔 말했다. **적어 두고 쓰라고 이어 놓은 두 문항인데, 그 사이에서 값이 변했다.**",
          "표준교신용어 오류 : **이미 받은 허가를 `request` 하지 않는다.** 250 은 이미 허가받은 값이므로 `we are reducing to two five zero now` — **지금 하고 있는 조치**를 보고한다.",
          "정정은 **3단**이다 : 현재 상태(280) → 받은 허가(250) → 조치(지금 줄이는 중). 가운데가 빠졌다.",
          "기관명을 `approach` 로 바꿔 불렀다 — 다만 이 문항은 **세트 쪽 결함**(Center ↔ Stanmore Control)이 겹쳐 있으므로 기관명은 감점하지 않았다."
        ]
      },
      "P2B-Q5": {
        "verdict": "❌",
        "model": "Stanmore Control, HL123. Request the latest Dunmere weather — fog is forecast at our destination and we would like it before we start our descent.",
        "notes": [
          "**다른 것을 요청했다.** 원한 것은 **기상**이고, `request direct dunmere` 는 **직항 경로**다. 클루의 `Dunmere` 는 철자를 준 것이고, 무엇을 요청할지는 지문에 적혀 있었다.",
          "누락 : 기관 호출, 이유(안개 예보), 시점(강하 시작 전). 전체가 다섯 낱말이라 20초 중 3초밖에 쓰지 않았다.",
          "`request the latest Dunmere weather` — REQUEST + 명사구. 정보를 원할 때의 정해진 형태다."
        ]
      },
      "P2B-Q6": {
        "verdict": "⚠",
        "model": "Pembury Approach, HL123. Be advised, one minute ago, passing 5,000 feet about five miles south of the field, a green laser from the ground lit up our cockpit.",
        "notes": [
          "**내용은 다 담았다** — 언제(1분 전)·고도(5,000)·위치(남쪽 5마일)·무슨 일(레이저). 시차형 보고의 네 요소를 갖췄다.",
          "문법 오류 : `we had have raizer` — 시제가 겹쳤다. `a green laser lit up our cockpit` 처럼 **과거 단문**으로 쓴다.",
          "누락 : **`green`.** 레이저 보고에서 색은 경찰이 발사 지점을 찾는 단서라 실제로 필수 항목이다.",
          "기관명 `tenbury` — 세트 결함 ①(클루 없음). 감점하지 않았다."
        ]
      },
      "P2B-Q7": {
        "verdict": "⚠",
        "model": "Alderton Tower, HL123, holding short of runway zero niner. The oil quantity on engine number two is dropping. Request taxi back to the stand.",
        "notes": [
          "두 기능(상태 보고·요청)을 다 했고 순서도 맞다.",
          "문법 오류 : `our no2 oil is drop` → `the oil quantity on engine number two is dropping`. **무엇이** 떨어지는지(quantity)와 **진행 중**임(-ing)을 살린다.",
          "기관 : 지문은 Tower 를 지정했지만 **스탠드 복귀는 Ground 의 일**이라 `ground` 도 변호 가능하다 — 세트 결함 ③으로 보고 감점하지 않았다. 다만 공항명(`Alderton`)은 붙여야 한다."
        ]
      },
      "P2C-Q1": {
        "verdict": "❌",
        "model": "In that situation two figures changed when we got the WING ANTI-ICE FAULT caption. The slowest speed we could hold went up from one eight zero knots to two zero zero knots, and the landing distance we required went up from 2,200 metres to 2,700 metres. He needed both of them because they were the two numbers he was working with. He had already asked us for one six zero knots, which we could no longer accept, and he was about to offer us a runway with 2,500 metres, which was now too short. If I had not given him the new figures he would have planned the approach around numbers that no longer existed.\nIn my role as a pilot, the way I make sure I use the latest figure is that I never erase the old one. I cross it out and write the new one beside it, with the time next to it, so the page shows me that the figure moved and which way. I keep the performance figures in one box on the right of the page — fuel endurance, persons on board, required landing distance, minimum speed — so there is only one place to look, and when the controller asks I read from that box instead of from memory.\nAn example is the landing distance on this flight. I had 2,200 metres written down from the start, and it became 2,700 metres passing twelve thousand feet. Because the old figure was crossed out and not rubbed out, when the controller offered me Alderton with 2,500 metres I could see at once that it was five hundred short, and I asked for Wexcombe instead.",
        "notes": [
          "무응답이므로 Level 1 이다. 90초 문항은 **11세트 연속 가장 큰 실점 구간**이고, 이번에도 네 문항을 전부 비웠다.",
          "3부 구조를 지킨다 : ① 바뀐 값과 그가 그것을 왜 필요했는지 ② 최신 값을 쓰는 내 방법 ③ 예시 하나.",
          "① 에서 **두 값과 그 전후**(180→200, 2,200→2,700)를 숫자로 말한다. \"값이 바뀌었다\"로 뭉개면 답이 아니다."
        ]
      },
      "P2C-Q2": {
        "verdict": "❌",
        "model": "It was important to correct him straight away because he was about to stop treating us as an aircraft with a problem. He said he took it that the ice had gone, and if I had answered affirm he would have cancelled the fire service, given us a normal approach and put traffic behind us. The ice was still on the left wing, so our minimum speed and our landing distance were still the degraded ones. One word from me would have left him with the wrong picture at the point where he was making those decisions, and a wrong picture is worse than no picture.\nFrom my own experience, the way I report a problem that is still going on is to say three things in the same transmission: what the condition is now, what has not changed, and what I still need. I begin with negative or with the present tense so he hears straight away that it is not over — \"negative, we still have ice on the left wing\" — and then I repeat the figures that are still degraded, because he may have written down the old ones. I avoid saying it is under control or we are managing it, because that sounds like the problem has finished when it has not.\nAn example is this flight. We were below the freezing level and he assumed the ice had gone. I answered negative, told him the ice was still on the left wing, repeated that our minimum speed was two zero zero knots and our required landing distance 2,700 metres, and asked for the fire service to stand by as a precaution. He kept us on the longer runway at Wexcombe, which he would not have done if I had agreed with him.",
        "notes": [
          "질문이 세 부분이다 : 왜 즉시 정정해야 하는가 / 진행 중인 문제를 보고하는 내 방법 / 예시.",
          "첫 부분은 **관제사가 그 믿음으로 무엇을 할 뻔했는지**로 답한다(소방대 취소·정상 접근·후속기 투입). 그게 \"왜 중요한가\"의 답이다.",
          "이 문항은 **P2A-Q6 에서 `AFFIRM` 으로 답한 것**을 되묻는 자리다. 롤플레이에서 틀린 것을 Follow-up 에서 한 번 더 묻는 구조이므로, 두 곳이 같이 틀리면 실점이 두 배가 된다."
        ]
      },
      "P2C-Q3": {
        "verdict": "❌",
        "model": "We were HL123, level at flight level two one zero, 60 miles from PERNO and inbound to Alderton. Our fuel endurance was two hours three five minutes, we had one six three persons on board, our required landing distance was 2,200 metres and the slowest speed we could hold was one eight zero knots.\nOn the descent the controller told us the freezing level was 7,000 feet and asked us to reduce to one six zero knots, which was below our minimum, so we gave him one eight zero knots instead. Then, passing twelve thousand feet, we got a WING ANTI-ICE FAULT caption for the left wing and ice began to build on that wing. The nature of the incident was a loss of ice protection on one wing, and the consequence was a performance problem rather than a handling problem: our slowest speed went up to two zero zero knots and the landing distance we required went up to 2,700 metres.\nThat made our destination unusable. Alderton runway two seven gave us 2,500 metres, two hundred less than we needed, so we asked for Wexcombe, which had 3,000 metres and was one two minutes away. We also asked for descent to 6,000 feet to get below the freezing level, and the controller gave it.\nBelow the freezing level the controller assumed the ice had gone. It had not, so we corrected him and asked for the fire service to stand by. We passed our fuel and persons on board for Wexcombe, were handed to Wexcombe Approach, who had none of our figures and asked for our minimum speed and persons on board again, and were then vectored onto the ILS for runway one two. By that point the ice had cleared, but the fault remained, so our figures did not change. We did not declare an emergency, because the aircraft was controllable and we had the fuel and a long enough runway.",
        "notes": [
          "시간 순서로 말한다 : 초기 상태 → 속도 거절 → 고장 → 바뀐 값 → 공항 변경 → 얼음 정정 → 핸드오프 → 착륙 → 비상 선포를 안 한 이유.",
          "**숫자를 넣어야 들은 증거가 된다** : 180 · 160 · 200 · 2,200 · 2,700 · 2,500 · 3,000 · 163.",
          "`the nature of the incident` 을 한 문장으로 못 박는다 — \"한쪽 날개의 방빙 상실, 조종 문제가 아니라 성능 문제\"."
        ]
      },
      "P2C-Q4": {
        "verdict": "❌",
        "model": "On the whole I think he handled it well. When I told him about the fault and the two figures that had changed, he gave me descent to 6,000 feet at once, and then he gave me the landing distance available at both airports and the time to the second one, instead of telling me where to go. That is the right division of work, because the landing performance is mine to calculate and only I know what the aircraft needs. He also accepted the speed I offered him without arguing, which matters when a figure is a hard limit and not a preference.\nThere are two things I would have done differently. The first is the assumption about the ice. He told me the ice had gone rather than asking me what the ice was doing, and if I had been slow or busy I might have agreed with him. A question is safer than an assumption when the answer changes what he does next. The second is the handover. Wexcombe Approach had none of my figures, so I had to say my minimum speed and the number of persons on board a second time while I was being vectored and descending, which is our highest workload. Those numbers had already been passed once and should have gone across in the coordination.\nFrom a pilot's point of view, what helped most was that he never pressed me for a decision, and what I would ask for next time is the runway condition and braking action at Wexcombe, not only the distance available. With ice on a wing and a longer landing distance required, the distance alone does not tell me whether I can stop.",
        "notes": [
          "**칭찬 → 개선점 → 조종사 관점** 세 부분이다. \"잘했다\"로만 끝내면 둘째·셋째를 버린 것이다.",
          "개선점은 **구체적 행동**으로 말한다. 이 세트에서는 **얼음을 단정한 것**과 **핸드오프 때 수치가 넘어가지 않은 것** 두 곳이 할 말이 가장 많다.",
          "관제사를 비난하지 않는다. 역할 분담(정보는 관제사, 판단은 조종사)의 언어로 말한다."
        ]
      }
    }
  },
  "WEAK_03": {
    "set": "WEAK_03",
    "level": "",
    "summary": "",
    "gradedAt": "2026-11-06",
    "items": {
      "P1A-Q1": {
        "verdict": "",
        "model": "HL123, cleared to Ravenglass via the HOLNE TWO departure, flight level three one zero, squawk four six two one.",
        "notes": [
          "필수 복창 네 요소 : 목적지·SID·고도·squawk. 하나라도 빼면 비행로 허가 복창이 성립하지 않는다.",
          "**적어 두는 문항이다.** 고도(FL310)와 squawk(4621)를 Q2 에서 다시 말해야 한다. squawk 는 `4-6-2-1` 로 끊어 적는다."
        ]
      },
      "P1A-Q2": {
        "verdict": "",
        "model": "HL123, cleared level flight level three one zero, squawk four six two one. Be advised, at today's weight we cannot reach flight level three one zero until one hour after departure. Request flight level two seven zero initially.",
        "notes": [
          "기능 세 개다 : 두 질문에 답 / 못 하는 것 보고 / 대안 요청. 질문만 답하고 멈추는 것이 이 유형의 전형적 실점이다.",
          "두 값은 **Q1 에서 들은 것**이다. 지어내면 안 된다.",
          "`initially` 를 붙여야 \"처음만 270\" 이라는 뜻이 전달된다. 빼면 전 구간 270 으로 들린다."
        ]
      },
      "P1A-Q3": {
        "verdict": "",
        "model": "HL123, increase speed to three one zero knots. Unable three one zero knots — we are in moderate turbulence and our turbulence penetration speed is two seven zero knots, which is our maximum. We can maintain two seven zero knots.",
        "notes": [
          "복창을 먼저 하고 그다음 UNABLE 이다. 속도는 필수 복창 항목이라 건너뛰면 누락이다.",
          "**상한**이므로 `our maximum is ~` / `above our limit` 이 맞는 낱말이다. `below our minimum` 은 반대말이다.",
          "줄 수 있는 값(270)을 반드시 붙인다. `unable` 만 말하면 관제사는 분리를 다시 짜야 한다.",
          "`for spacing` 은 이유라서 복창 대상이 아니다."
        ]
      },
      "P1A-Q4": {
        "verdict": "",
        "model": "HL123, behind the departing Airbus A330, line up and wait runway two seven, behind.",
        "notes": [
          "조건부 허가는 **조건을 앞과 뒤에 두 번** 말하는 것이 규정이다(`behind ... behind`). 뒤의 `behind` 를 빼면 조건부 허가 복창이 아니다.",
          "조건(어느 항공기 뒤인지)을 빼고 `lining up runway two seven` 만 하면, 관제사는 내가 조건을 못 들었다고 보고 다시 지시해야 한다.",
          "활주로 번호는 활주로 관련 지시라 필수다."
        ]
      },
      "P1A-Q5": {
        "verdict": "",
        "model": "HL123, holding position — unable takeoff at this time. The brake temperature on our left main gear is still above the limit for takeoff. Request two minutes to let it cool, and we will call you when we are ready.",
        "notes": [
          "**이륙허가를 그대로 복창하지 않는다.** `cleared for takeoff runway two seven` 을 복창하면 활주를 시작한다는 뜻이 된다. 받을 수 없는 허가의 \"복창\"은 **내가 무엇을 하고 있는지**(holding position)를 분명히 하는 것이다.",
          "바람(240/8)은 부가정보라 복창 대상이 아니다. 필수요소만 복창하고 부가정보는 빼는 유형이다.",
          "기능 세 개 : 현 상태 / 못 하는 것 + 이유 / 소요시간. 2분을 빼면 관제사가 뒤 항공기를 배치할 근거가 없다.",
          "`cleared` ↔ `clear` : 들은 말은 `cleared` 다. 6세트 연속 `clear` 로 적고 있다 — 과거분사다."
        ]
      },
      "P1A-Q6": {
        "verdict": "",
        "model": "Kinloch Approach, HL123, level at flight level two niner zero, 50 miles from BRAXO, inbound Kinloch. Be advised, we have an unruly passenger who is being restrained in his seat by two other passengers. There is no fire and no damage. Request the police to meet the aircraft at the stand.",
        "notes": [
          "발신 문항의 순서 : 기관 → 콜사인 → 고도 → 위치 → 보고 → 요청. 기관을 부르지 않고 시작하는 것이 발신 문항의 첫 감점이다.",
          "`unruly passenger` 가 표준 표현이다.",
          "**피해가 없다는 것을 말해야 한다.** 그 말이 없으면 관제사는 비상으로 취급하고 소방대를 부른다.",
          "기능 두 개 : 보고 + 요청. 상황만 말하고 요청을 빼면 절반이다."
        ]
      },
      "P1A-Q7": {
        "verdict": "",
        "model": "HL123, descend to one one thousand, turn right heading zero two zero. Three people are involved — the passenger and the two holding him. Negative, we do not need to be kept away from the terminal; a normal stand is acceptable with the police meeting us.",
        "notes": [
          "필수 복창 두 요소 : 고도·기수. `vectors for Kinloch` 는 복창 의무가 없다.",
          "질문이 두 개면 **두 개 다** 답한다. 숫자 질문에는 숫자로, 가부 질문에는 **NEGATIVE** 로.",
          "두 번째 질문에 `no` 를 쓰면 표준교신용어 오류다.",
          "상황은 이미 Q6 에서 보고했으므로 증상을 다시 설명하지 않는다. 관제사의 `roger` 가 그 신호다."
        ]
      },
      "P1A-Q8": {
        "verdict": "",
        "model": "HL123, cross BRAXO at or below flight level one five zero, reduce speed to two five zero knots.",
        "notes": [
          "**`at or below` 를 빼면 다른 제한이 된다.** 고도 제한은 값만이 아니라 **방향**까지 복창한다. `at or above` 와 한 글자 차이로 뜻이 반대다.",
          "속도도 필수 복창 항목이다.",
          "Q9 에서 이 제한을 그대로 꺼내 말해야 한다."
        ]
      },
      "P1A-Q9": {
        "verdict": "",
        "model": "HL123, passing flight level one niner zero. We were told to cross BRAXO at or below flight level one five zero, and on our present profile we will be at flight level one seven zero at BRAXO. Request descent now to make the restriction.",
        "notes": [
          "기능 세 개 : 현재고도 / 받은 제한 / 필요한 것.",
          "현재고도의 동사는 **현재 상태**다 — `passing`. `maintain one niner zero` 로 말하면 지시 복창처럼 들린다.",
          "받은 제한(`at or below FL150`)은 **Q8 에서 적어 둔 것**이다. 이것을 말하지 않으면 관제사는 내가 무엇을 못 맞추는지 모른다.",
          "두 숫자(150 필요 ↔ 170 예상)를 나란히 말하면 이유가 성립한다."
        ]
      },
      "P1A-Q10": {
        "verdict": "",
        "model": "HL123, the RVR is 500 metres and our company minimum for this approach is 600 metres, so it is below our minimum. Our intentions are to hold — request one five minutes in the hold. The fog is forecast to lift within two zero minutes.",
        "notes": [
          "**RVR 은 하한이다.** 500 은 600 **미만**이므로 `below our minimum` 이다. `over our limit`(초과)은 반대말이고, 그것은 측풍·무게·속도처럼 **상한**이 있는 값에 쓴다.",
          "두 숫자(500 · 600)를 다 말해야 이유가 선다.",
          "목표값(15분)을 준다. `we will wait and see` 는 관제사가 쓸 수 없는 답이다.",
          "이미 Tower 가 나를 호출했으므로 기관명을 다시 부를 필요는 없다. 클루는 철자 참고용이다."
        ]
      },
      "P1B-Q1": {
        "verdict": "",
        "model": "Negative, HL123. Unable one eight zero knots — our maximum approach speed at today's landing weight is one six zero knots. We can maintain one six zero knots to four miles.",
        "notes": [
          "`Can you do that?` 는 가부 질문이다 → **첫 단어가 NEGATIVE** 다.",
          "**상한 초과**다. 180 은 최대 160 보다 빠르므로 불가.",
          "두 숫자 + 줄 수 있는 값. 세 가지가 다 있어야 완성이다."
        ]
      },
      "P1B-Q2": {
        "verdict": "",
        "model": "Affirm, HL123. Our maximum tailwind for takeoff is one zero knots and the wind two seven zero at eight gives us eight knots of tailwind, so runway zero niner is acceptable.",
        "notes": [
          "**상한이어도 이내면 수락이다.** 8 ≤ 10. \"최대\"라는 말만 보고 거부하지 않는다 — 이 세트가 거부 문항과 수락 문항을 섞어 낸 이유다.",
          "활주로 09 는 기수 090 이고 바람은 270 에서 오므로 정배풍 8노트다.",
          "수락할 때도 **두 숫자**를 말한다. `Affirm` 하나로 끝내면 관제사는 내 한계를 모른다."
        ]
      },
      "P1B-Q3": {
        "verdict": "",
        "model": "Negative, HL123. Unable runway three two — 2,300 metres available is below the 2,600 metres we need at today's landing weight. Request a runway with at least 2,600 metres available.",
        "notes": [
          "**하한 미만**이므로 `below` 다.",
          "`available`(활주로가 주는 값) ↔ `we need` / `required`(내 값)를 구분해 말한다. 두 낱말을 섞으면 뜻이 정반대가 된다.",
          "거부만 하지 말고 **필요값**을 준다."
        ]
      },
      "P1B-Q4": {
        "verdict": "",
        "model": "Affirm, HL123. Our required landing distance is 2,100 metres and 2,300 metres available is sufficient, so we will take runway two seven. It saves us one one minutes.",
        "notes": [
          "2,300 ≥ 2,100 이므로 수락이다. **여유가 적다고 거부하지 않는다** — 필요값을 넘으면 충분하다.",
          "**`saves you` 는 단축이다 — 지연이 아니다.** `we can accept the one one minute delay` 로 답하면 관제사가 말한 것과 반대로 읽은 것이다."
        ]
      },
      "P1B-Q5": {
        "verdict": "",
        "model": "HL123, maintain Mach decimal seven eight or greater until HOLNE.",
        "notes": [
          "**`or greater` 를 빼면 하한이 사라진다.** 숫자만 복창하면 \"그 값으로 유지\"로 들린다.",
          "조건(`until HOLNE`)도 복창한다.",
          "Q6 에서 이 값을 꺼내야 비교가 성립한다. 메모에 `min M.78` 로 적는다 — 숫자만 적지 말고 **낱말을 같이** 적는다."
        ]
      },
      "P1B-Q6": {
        "verdict": "",
        "model": "Negative, HL123. Unable Mach decimal seven eight or greater — at our present weight and temperature our maximum cruise Mach number is Mach decimal seven six. We can maintain Mach decimal seven six until HOLNE.",
        "notes": [
          "**이 세트에서 가장 어려운 문항이다.** 관제사는 **하한**(.78 이상)을 요구하고 나는 **상한**(.76)을 갖고 있다. 두 제한의 방향이 반대이고, .76 < .78 이므로 불가다.",
          "`confirm ~?` 이므로 첫 단어는 **NEGATIVE** 다. `AFFIRM` 으로 답하면 내가 할 수 없는 것을 하겠다고 약속한 것이 된다.",
          "비교 대상(.78 or greater)은 **Q5 에서 적어 둔 것**이다. 그것 없이는 왜 불가인지 설명할 수 없다.",
          "줄 수 있는 값(.76)을 준다."
        ]
      },
      "P1B-Q7": {
        "verdict": "",
        "model": "HL123, unable runway one four. The runway is contaminated with slush and our maximum crosswind on a contaminated runway is one five knots — the wind zero eight zero at two zero gives us about one seven knots of crosswind, which is above our limit. Our intentions are runway zero eight: it is clear of slush and into wind. Request taxi back for runway zero eight, we accept the eight minutes.",
        "notes": [
          "여기는 **상한**이므로 `above our limit` 이 맞는 낱말이다 — Q3·Q6 의 `below our minimum` 과 짝으로 외운다. **어느 쪽 낱말을 쓰는지가 이 섹션의 핵심이다.**",
          "활주로 14 는 기수 140, 풍향 080 이라 60° 측풍이다. 성분이 한계를 넘는다는 것만 말하면 되고 계산을 읊을 필요는 없다.",
          "`Say your intentions` 이므로 **거부 + 내가 할 것** 둘 다 필요하다. 거부만 하면 절반이다.",
          "늘어나는 시간을 수락한다고 말한다."
        ]
      },
      "P1B-Q8": {
        "verdict": "",
        "model": "HL123, we would like Haverly. Our required landing distance is 2,000 metres, so both runways are sufficient, but we have a passenger with a suspected stroke and Haverly is one three minutes sooner. Request routing to Haverly and an ambulance to meet us on arrival.",
        "notes": [
          "거리는 **양쪽 다 충족**한다(2,400 · 3,000 ≥ 2,000). 그러므로 거리가 아니라 **시간**이 판단 근거다. \"둘 다 충분하다\"까지 말하고 시간을 근거로 대야 이유가 완성된다.",
          "차이를 숫자로 말한다 — 22 − 9 = 13분.",
          "의료 상황이면 구급차 요청을 같이 붙인다.",
          "선택 질문이므로 `AFFIRM/NEGATIVE` 를 쓰지 않는다. 어느 쪽인지 말한다."
        ]
      },
      "P2A-Q1": {
        "verdict": "",
        "model": "Kinloch Approach, HL123, level at flight level two three zero, 55 miles from TURLO, inbound Kinloch. Request descent.",
        "notes": [
          "기능 세 개 : 기관 호출 / 위치와 고도 / 강하 요청. 세 번째를 `request inbound` 같은 말로 바꾸면 요청이 아니라 통보가 된다.",
          "현재 상태 동사 `level at`. 픽스가 주어졌으므로 거리와 픽스로 위치를 말한다.",
          "**Initial Situation 의 네 숫자를 지금 적어 둔다** — 연료 2시간 20분 · 인원 **1-5-7** · 필요거리 2,000 · 최대속도 250. 네 개가 모두 뒤에서 쓰인다. 인원은 세 자리를 끊어 적어야 뒤집히지 않는다."
        ]
      },
      "P2A-Q2": {
        "verdict": "",
        "model": "HL123, descend to one one thousand, expect the BRAXO ONE arrival, ILS runway two seven. Request the landing distance available on runway two seven with the work in progress.",
        "notes": [
          "필수 복창 세 요소 : 고도·arrival·활주로. `work in progress` 는 정보라 복창 의무가 없다.",
          "`request the landing distance available` — **REQUEST + 명사구**이고, 여기서는 **available** 이 맞는 낱말이다(내 쪽 값은 required).",
          "공사가 있다고 들었을 때 **가용 거리를 먼저 묻는 것**이 올바른 순서다. 묻지 않으면 Q4 에서 비교할 숫자가 없다."
        ]
      },
      "P2A-Q3": {
        "verdict": "",
        "model": "HL123, we have a STABILIZER TRIM JAM caption — the trim is stuck and our flaps are limited to one five. Two things have changed: our required landing distance is now 2,900 metres instead of 2,000, and our maximum speed is now one niner zero knots instead of two five zero. Request to level off at one one thousand and a long final, so that we can slow down and configure early.",
        "notes": [
          "기능 세 개 : 문제 / **바뀐 값 두 개** / 요청 + 이유. 두 번째가 이 세트의 축이다.",
          "**`A 에서 B 로` 로 말한다.** `2,900 instead of 2,000` 처럼 전후를 같이 말하면 관제사도 값이 움직인 것을 안다. 새 값만 말하면 그가 받아 적은 옛 값이 남는다.",
          "사건명을 그대로 말한다 — `STABILIZER TRIM JAM`. 증상(`flaps limited`)만 말하면 원인을 알 수 없다.",
          "적어 둔 2,000 과 250 을 **지우지 말고 옆에 2,900 · 190 을 쓴다.** 뒤에서 두 번 더 쓴다."
        ]
      },
      "P2A-Q4": {
        "verdict": "",
        "model": "HL123, unable Kinloch — we now require 2,900 metres and runway two seven gives us only 2,700. Request diversion to Ravenglass: 3,200 metres is sufficient and we accept the one three minutes.",
        "notes": [
          "**갱신된 2,900 으로 비교해야 한다.** 처음 적어 둔 2,000 으로 비교하면 2,700 이 충분해 보이고 판단이 뒤집힌다 — 이 세트가 노리는 바로 그 지점이다.",
          "거부 대상(Kinloch)과 필요값(2,900)을 둘 다 말한다. 어느 쪽을 거부하는지 말하지 않으면 관제사가 되묻는다.",
          "늘어나는 시간을 수락한다고 말한다."
        ]
      },
      "P2A-Q5": {
        "verdict": "",
        "model": "HL123, fuel endurance two hours two zero minutes, one five seven persons on board.",
        "notes": [
          "네 턴 전 Initial Situation 의 값이다. 짐작해서 바꿔 말하면 안 된다.",
          "인원 **157** 은 세 자리라 뒤집히기 쉽다. `1-5-7` 로 끊어 적고 끊어 읽는다.",
          "묻지 않은 것을 덧붙이지 않는다. 두 값만 짧게."
        ]
      },
      "P2A-Q6": {
        "verdict": "",
        "model": "HL123, turn left heading two eight zero, descend to 9,000 feet, contact Ravenglass Approach on 125.25. Our intentions are to divert to Ravenglass and fly a fully configured ILS to the longer runway, slowly. We request a long final because of our speed limit, and the fire service standing by as a precaution.",
        "notes": [
          "필수 복창 세 요소 : 기수·고도·**주파수**. 주파수를 빼면 필수 복창 누락이다.",
          "intentions 는 **내가 할 것**(Ravenglass 로 divert, ILS) + **필요한 지원**(긴 파이널, 소방대)이다. 요청만 말하면 intentions 진술이 아니다.",
          "`Our intentions are to ~` 로 명시해 연다."
        ]
      },
      "P2A-Q7": {
        "verdict": "",
        "model": "Ravenglass Approach, HL123, the landing distance we require is 2,900 metres and we have one five seven persons on board.",
        "notes": [
          "**되묻기 함정.** 필요거리는 중간에 2,000 → 2,900 으로 바뀌었다. 여기서 2,000 을 말하면 새 관제사의 브리핑이 틀어진다.",
          "인원은 **바뀌지 않았다** — 157 그대로. **바뀐 값은 바꿔 말하고, 안 바뀐 값은 그대로 말하는 것**을 구분하는 문항이다.",
          "새 관제사는 앞의 교신을 못 들었다. 되묻는 것이 당연하므로 \"방금 말했는데요\"가 아니라 그냥 다시 준다."
        ]
      },
      "P2A-Q8": {
        "verdict": "",
        "model": "HL123, turn right heading three four zero, descend to 5,000 feet. Negative on the speed — unable two one zero knots. With the trim jammed our maximum is one niner zero knots. We can maintain one niner zero knots until eight miles.",
        "notes": [
          "복창(기수·고도)을 먼저 하고, 받을 수 없는 속도만 따로 거부한다. 전부 복창해 버리면 210 을 하겠다는 뜻이 된다.",
          "가부 질문이므로 **NEGATIVE** 다.",
          "**210 은 190 보다 빠르다.** 느린 쪽이 한계라는 것을 뒤집지 않는다 — 이 세트의 Q3 에서 적어 둔 상한이다.",
          "줄 수 있는 값(190)을 조건(`until eight miles`)과 함께 준다."
        ]
      },
      "P2A-Q9": {
        "verdict": "",
        "model": "Negative, HL123. The trim is still jammed and the flaps are still limited to one five, so nothing has changed. And affirm, we still need the full length — our required landing distance is still 2,900 metres.",
        "notes": [
          "**첫 단어가 NEGATIVE 다.** 그의 추정(\"풀렸겠지요\")이 사실이 아니다. 내용을 뒤에서 정정해도 첫 단어가 `Affirm` 이면 그가 자기 그림을 지우지 않는다.",
          "**두 질문의 답이 서로 반대 방향**이라는 것이 이 문항의 함정이다 — 첫 질문은 NEGATIVE, 두 번째는 AFFIRM. 하나의 판정어로 둘을 덮으려 하면 틀린다.",
          "두 번째 답에 숫자(2,900)를 붙여야 Tower 가 활주로를 비워 둔다."
        ]
      },
      "P2A-Q10": {
        "verdict": "",
        "model": "HL123, turn left heading zero one zero, descend to 2,500 feet until established, cleared for the ILS runway two two approach, contact Ravenglass Tower on 118.30. We will need the full length of the runway and the fire service standing by. Our landing roll will be long, so request a late turn-off.",
        "notes": [
          "필수 복창 다섯 요소 : 기수·고도·**`until established`**·접근 허가·주파수. `until established` 를 빼면 조건을 지운 복창이다.",
          "`cleared` 다 — `clear` 로 쓰면 6세트째 같은 오류다.",
          "활주로에서 필요한 것 : 전장 사용 / 소방대 / 늦은 이탈. **활주 거리가 길어진다는 의도**를 빼면 관제사가 다음 착륙기를 그대로 들여보낸다."
        ]
      },
      "P2B-Q1": {
        "verdict": "",
        "model": "Marlow Control, HL123, level at flight level three five zero. Our number two tank is feeding more slowly than planned and we will land at Kinloch one zero minutes short of our planned reserve. Request direct TURLO to recover the fuel.",
        "notes": [
          "기능 두 개 : 상황 보고 + 요청. 상황을 빼면 관제사가 왜 직항이 필요한지 모른다.",
          "`request direct TURLO` — 명사구다. `request to go direct` 는 틀린 형태다.",
          "20초다. 기관 → 콜사인 → 고도 → 상황 한 문장 → 요청 한 문장으로 끝낸다."
        ]
      },
      "P2B-Q2": {
        "verdict": "",
        "model": "Kinloch Delivery, HL123. There is a line of thunderstorms on the CASTO THREE departure track. Request the HOLNE TWO departure instead — we accept the four extra minutes.",
        "notes": [
          "**클루에 두 절차가 떠 있어도 원하는 하나만 말한다.** 화면의 칸은 철자를 주는 것이고, 무엇을 원하는지는 지문이 정한다. 둘을 같이 말하면 관제사는 무엇을 줘야 할지 모른다.",
          "`departure` 다 — 출발 절차를 `arrival` 이라고 말하면 다른 절차를 받는다.",
          "늘어나는 4분을 수락한다고 말한다."
        ]
      },
      "P2B-Q3": {
        "verdict": "",
        "model": "HL123, taxi to holding point Quebec two via Mike and Papa, give way to the Boeing 787 crossing ahead of us.",
        "notes": [
          "유도 지시의 세 요소를 다 복창한다 : 홀딩포인트·경로·양보 대상.",
          "`ahead of you` → 내가 말할 때는 **`ahead of us`** 로 바꾼다. 복창은 앵무새처럼 되풀이하는 것이 아니라 내 입장으로 바꿔 말하는 것이다.",
          "Q4 에서 \"Papa 접근 중\"이라고 말하려면 이 경로를 적어 둬야 한다."
        ]
      },
      "P2B-Q4": {
        "verdict": "",
        "model": "Ground, HL123, approaching Papa. The ground crew have just told us that a panel on the left engine cowl was left unlatched. Request taxi back to the stand.",
        "notes": [
          "**이미 교신 중이므로 기관을 새로 호출하지 않는다.** `Contact Ground` 가 아니라 바로 상태를 보고한다.",
          "현재 위치(Papa)는 **Q3 의 경로에서 나온다.** 위치를 말하지 않으면 지상관제사가 경로를 다시 짤 수 없다.",
          "기능 두 개 : 상태 + 요청. 사유(미잠금 패널)를 빼면 왜 돌아가는지 모른다."
        ]
      },
      "P2B-Q5": {
        "verdict": "",
        "model": "Ravenglass Approach, HL123. Our weather radar has failed and we can no longer see the build-ups on the final approach track. Request headings to avoid the worst of the weather.",
        "notes": [
          "기능 세 개 : 상태 / 요청 / 이유. **레이더 고장을 말하지 않으면** 왜 관제사가 날씨를 피해 줘야 하는지 알 수 없다 — 보통은 조종사가 자기 레이더로 피한다.",
          "`request headings to avoid ~` — 명사구다."
        ]
      },
      "P2B-Q6": {
        "verdict": "",
        "model": "Barnsdale Tower, HL123, clear of runway one four. During the landing roll we had a heavy vibration through the rudder pedals and we suspect a flat tyre on the left main gear. Request an inspection where we are, before we taxi any further.",
        "notes": [
          "상태 먼저 : **활주로를 벗어났다**는 것을 말해야 관제사가 다음 항공기를 들여보낸다.",
          "`suspect` 를 쓴다 — 확인되지 않은 것을 단정하지 않는다.",
          "**움직이지 않겠다는 의도**를 분명히 한다. 그 말이 없으면 관제사는 계속 유도 지시를 준다."
        ]
      },
      "P2B-Q7": {
        "verdict": "",
        "model": "Marlow Control, HL123, one five miles from TURLO at flight level three one zero. Be advised, we can see a column of smoke rising from a hillside about five miles left of our track, and there is no airfield there. For the rescue services — we require nothing ourselves.",
        "notes": [
          "**순수 보고다.** 지문이 `You need nothing for yourself` 라고 못 박았으므로 **요청을 덧붙이지 않는다.** 보고 뒤에 습관적으로 `request ~` 를 붙이는 것이 흔한 실수다.",
          "보고에는 **내 위치·고도·무엇을 봤는지·어디서** 가 다 있어야 한다. \"연기를 봤다\"만으로는 구조대가 갈 곳을 모른다.",
          "`Be advised` 로 열고, 공항이 아니라는 것까지 말한다 — 그래야 관제사가 항공기 사고로 오판하지 않는다."
        ]
      },
      "P2C-Q1": {
        "verdict": "",
        "model": "Two of my figures changed when I got the stabilizer trim jam. The landing distance I required went up from 2,000 metres to 2,900 metres, because with the flaps limited to one five my approach speed was higher, and my maximum speed came down from two five zero knots to one niner zero knots. I had to compare the first one with the landing distance available on the runway the controller offered me, which was 2,700 metres at Kinloch with the work in progress and 3,200 metres at Ravenglass. I had to compare the second one with the speed he asked me to maintain, which was two one zero knots.\nIn my role as a pilot, when a figure is replaced I do not erase the old one. I cross it out with one line and write the new one next to it, with the time beside it, so the page shows me that the figure moved and which way it moved. I keep all the performance figures in one box on the right of my pad — fuel endurance, persons on board, required landing distance, speed limits — so there is only one place to look when a controller asks, and I read from the box rather than from memory. The reason I keep the old figure visible instead of rubbing it out is that it tells me a change happened; if the page is clean I cannot tell whether the number was always 2,900.\nAn example from this flight is the landing distance. The controller at Ravenglass took me over and had none of my figures, and he asked for the landing distance I needed. The first number on my page was 2,000 metres and the live number was 2,900 metres. Because the old one was crossed out and the new one was next to it with the time, I gave him 2,900 straight away. If I had given him 2,000 he would have offered me Kinloch again, and 2,700 metres would have looked acceptable when it was two hundred metres short.",
        "notes": [
          "3부 구조를 지킨다 : ① 바뀐 두 값과 **비교 대상** ② 값이 바뀔 때 적는 방법 ③ 예시 하나. 셋 중 하나를 빼면 질문의 일부를 답하지 않은 것이다.",
          "① 은 **전후 숫자와 비교 대상**까지 말한다. \"값이 바뀌었다\"로 뭉개면 답이 아니다.",
          "③ 은 `Give an example.` 에 대한 답이므로 반드시 구체적인 한 사례로 닫는다. **10세트 연속 이 부분을 하지 않았다.**",
          "90초를 다 쓰려 하지 않는다. 60~75초 분량으로 세 부분을 다 채우는 쪽이 낫다."
        ]
      },
      "P2C-Q2": {
        "verdict": "",
        "model": "It is dangerous because the controller stops planning for the problem the moment he believes it has gone. He told me he took it that the trim had freed up, and if I had said affirm he would have taken the full length of the runway away from me, cancelled the fire service and put another aircraft behind me on a short final. None of those decisions are easy to undo once he has made them. Even one transmission matters, because in that one transmission he may hand me over to the tower, and the tower will then be working from a picture I have never corrected.\nFrom my own experience, the way I tell a controller that nothing has changed is to give him the state and the figure in one short sentence instead of repeating the whole story. I start with negative so he knows immediately that his assumption is wrong, then I say what the condition still is, and then I give him the one number he needs — for example, negative, the trim is still jammed, we still require 2,900 metres. That is three pieces of information and it takes about five seconds. It does not sound like repetition because I am not telling him what happened again; I am telling him what is true now, and the figure is the part he has to write down.\nAn example is this flight. He asked me two things in one transmission — whether the trim had freed up, and whether I still needed the full length. The answers went in opposite directions: negative to the first and affirm to the second. If I had answered with one word I would have been wrong on one of them. I answered each one separately and put the figure on the second, and he kept the long runway and the fire service for me.",
        "notes": [
          "질문이 세 부분이다 : 왜 위험한가 / 바뀌지 않았음을 말하는 방법 / 예시.",
          "첫 부분은 **관제사가 그 믿음으로 무엇을 할 뻔했는지**로 답한다(전장 회수·소방대 취소·후속기 투입). 그것이 \"왜 위험한가\"의 답이다.",
          "두 번째는 자기 방법을 구체적으로 말한다. `I am careful` 류는 답이 아니다.",
          "③ 에서 **두 질문의 답이 반대 방향이었다**는 점을 쓰면 가장 좋은 예시가 된다."
        ]
      },
      "P2C-Q3": {
        "verdict": "",
        "model": "We were HL123, level at flight level two three zero, 55 miles from TURLO and inbound to Kinloch. Our fuel endurance was two hours two zero minutes, we had one five seven persons on board, our required landing distance was 2,000 metres and our maximum speed with the flap setting we had was two five zero knots.\nOn the descent, passing one three thousand feet, we got a STABILIZER TRIM JAM caption. The trim was stuck and that limited our flaps to one five. The nature of the incident was a flight control restriction rather than a failure: the aircraft was controllable and nothing was unserviceable in the engines or the systems, but it changed our numbers. With the flaps limited our approach speed was higher, so the landing distance we required went up from 2,000 metres to 2,900 metres, and we could no longer exceed one niner zero knots.\nThat made our destination unusable. There was work in progress at the far end of Kinloch runway two seven, which left 2,700 metres available, two hundred metres less than we needed, so we were unable Kinloch and asked for Ravenglass, which had 3,200 metres and was one three minutes away. We asked to level off at one one thousand and for a long final so that we could slow down and configure early.\nFrom there it was handled as a normal diversion. We were turned onto headings for Ravenglass, changed to Ravenglass Approach, who had none of our figures and asked again for the landing distance we required and the persons on board. He then offered us two one zero knots, which we were unable, and we gave him one niner zero. Later he assumed the trim had freed up; it had not, so we corrected him and confirmed we still needed the full length. We were vectored onto the ILS for runway two two and landed with the fire service standing by. We did not declare an emergency, because the aircraft was controllable and we had the fuel and a long enough runway.",
        "notes": [
          "시간 순서로 말한다 : 초기 상태 → 사건 → 바뀐 값 → 공항 변경 → 핸드오프와 되묻기 → 속도 거절 → 정정 → 착륙 → 비상 선포를 안 한 이유.",
          "`the nature of the incident` 을 한 문장으로 못 박는다 — \"고장이 아니라 조종 제한, 그 결과는 착륙성능 문제\".",
          "**숫자를 넣어야 들은 증거가 된다** : 2,000 · 2,900 · 2,700 · 3,200 · 250 · 190 · 157.",
          "비상을 선포하지 않았다면 **왜 안 했는지**까지 말한다. 이것이 pilot's judgement 로 평가되는 부분이다."
        ]
      },
      "P2C-Q4": {
        "verdict": "",
        "model": "On the whole I think he handled it well. When I reported the caption and the two figures that had changed, he did not tell me which airport to use. He gave me the landing distance available at Kinloch with the work in progress, the distance at Ravenglass and the time to get there, and he left the decision with me. That is the right division of work, because the landing performance calculation is mine and only I know what the aircraft needs. He also accepted my speed without arguing when I told him one niner zero knots was our maximum.\nThere are two things I would have done differently. The first is the assumption about the trim. He told me he took it that the trim had freed up, rather than asking me what the trim was doing. If I had been busy configuring at that moment I might have agreed with him, and a question is safer than an assumption when the answer changes what he does next. The second is the handover to Ravenglass. The new controller had none of my figures, so I had to give the landing distance and the persons on board a second time while I was being vectored and descending, which is our highest workload. Those two numbers had already been passed once and should have gone across in the coordination.\nFrom a pilot's point of view, what helped most was that he gave me the gradient of the problem early — the work in progress was mentioned before I needed it, so when my required distance went up I already knew that Kinloch was marginal. What I would ask for next time is the braking action at Ravenglass, not only the distance available. With a high approach speed and a long landing roll, the distance alone does not tell me whether I can stop.",
        "notes": [
          "**칭찬 → 개선점 → 조종사 관점** 세 부분이다. \"잘했다\"로만 끝내면 질문의 둘째·셋째를 버린 것이다.",
          "개선점은 **구체적 행동**으로 말한다 — 여기서는 **트림이 풀렸다고 단정한 것**과 **핸드오프 때 수치가 넘어가지 않은 것** 두 곳이 할 말이 가장 많다.",
          "관제사를 비난하지 않는다. 역할 분담(정보는 관제사, 판단은 조종사)의 언어로 말한다."
        ]
      }
    }
  },
  "WEAK_04": {
    "set": "WEAK_04",
    "level": "",
    "summary": "",
    "gradedAt": "2026-11-06",
    "items": {
      "P1A-Q1": {
        "verdict": "",
        "model": "HL123, cleared to Jeju via the NASIK TWO departure, flight level tree tree zero, squawk two tree seven one.",
        "notes": [
          "필수 복창 네 요소 : 목적지·SID·고도·squawk.",
          "**`tree` 가 섞이면 받아적기가 흔들린다.** `tree tree zero` 는 330, `two tree seven one` 은 2371 이다. 숫자를 들을 때 머릿속에서 three 로 바꾸지 말고 **자릿수 개수**를 먼저 센다 — 세 자리면 고도, 네 자리면 squawk 다.",
          "**적어 두는 문항이다.** 고도와 squawk 를 Q2 에서 다시 말한다."
        ]
      },
      "P1A-Q2": {
        "verdict": "",
        "model": "HL123, cleared level flight level tree tree zero, squawk two tree seven one. Wilco, we will report when we are ready to taxi — we need eight minutes, the loading is still being finalised.",
        "notes": [
          "기능 네 개다 : 두 질문에 답 / 보고 약속 / 소요시간 / 이유. 이 세트에서 기능이 가장 많은 문항이다.",
          "`Report when you are ready` 에 대한 응답은 **WILCO** 다. `ROGER` 단독으로 대신할 수 없다.",
          "두 값은 **Q1 에서 들은 것**이다.",
          "시간은 **숫자로** 준다. `a few minutes` 는 관제사가 출발 순서를 짤 근거가 못 된다."
        ]
      },
      "P1A-Q3": {
        "verdict": "",
        "model": "HL123, maintain two niner zero knots. Unable two niner zero knots — we are passing 9,000 feet and the aircraft has a placard today limiting us to two five zero knots below one zero thousand feet. We can maintain two five zero knots until one five miles.",
        "notes": [
          "복창을 먼저 하고 그다음 UNABLE 이다. 속도는 필수 복창 항목이다.",
          "**상한**이다 — 250 이 최대이므로 290 은 불가. `our maximum` / `above our limit` 이 맞는 낱말이다.",
          "이유에 **왜 지금 걸리는지**를 넣는다 — 이미 1만피트 아래다. 고도를 말하지 않으면 관제사는 상승하면 되는 줄로 안다.",
          "줄 수 있는 값(250)을 조건(`until one five miles`)과 함께 준다."
        ]
      },
      "P1A-Q4": {
        "verdict": "",
        "model": "HL123, after the landing Boeing 737-800, line up and wait runway tree four.",
        "notes": [
          "조건부 허가다. **조건(`after the landing Boeing 737-800`)을 빼면** 조건부 허가 복창이 아니고, 관제사는 내가 조건을 못 들었다고 보고 다시 지시해야 한다.",
          "활주로 번호는 활주로 관련 지시라 필수다. `runway tree four` = 34."
        ]
      },
      "P1A-Q5": {
        "verdict": "",
        "model": "HL123, holding position — unable takeoff at this time. A passenger is out of his seat and the cabin is not secure. Request one minute, and we will call you when we are ready.",
        "notes": [
          "**이륙허가를 그대로 복창하지 않는다.** 복창하면 활주를 시작한다는 뜻이 된다. 받을 수 없는 허가에 대한 \"복창\"은 **내가 무엇을 하고 있는지**(holding position)를 분명히 하는 것이다.",
          "바람(tree two zero at seven)은 부가정보라 복창 대상이 아니다.",
          "기능 세 개 : 현 상태 / 못 하는 것 + 이유 / 소요시간. 1분을 빼면 관제사가 뒤 항공기를 배치할 수 없다.",
          "들은 말은 `cleared` 다 — `clear` 로 적으면 6세트째 같은 오류다."
        ]
      },
      "P1A-Q6": {
        "verdict": "",
        "model": "Ulsan Approach, HL123, level at flight level two four zero, tree five miles from YUDAM, inbound Ulsan. Be advised, the inner pane of a cabin window has cracked. The outer pane is intact and the cabin is holding pressure. Request descent to one zero thousand feet and priority landing at Ulsan, as a precaution against further failure.",
        "notes": [
          "발신 순서 : 기관 → 콜사인 → 고도 → 위치 → 보고 → 요청 + 이유.",
          "**외측 유리가 멀쩡하고 여압이 유지된다는 것을 말해야 한다.** 그 말이 없으면 관제사는 여압 상실로 듣고 긴급강하를 전제한 조치를 한다 — 상황이 **얼마나 나쁘지 않은지**를 말하는 것도 보고다.",
          "요청이 두 개(강하 + 우선착륙)다. 하나만 말하면 절반이다."
        ]
      },
      "P1A-Q7": {
        "verdict": "",
        "model": "HL123, descend to flight level one tree zero, turn left heading tree five zero. Negative, we do not wish to declare an emergency at this time — the cabin is holding pressure. One eight two persons on board.",
        "notes": [
          "필수 복창 두 요소 : 고도·기수. `vectors for Ulsan` 은 복창 의무가 없다.",
          "두 질문에 다 답한다. 가부 질문에는 **NEGATIVE**, 숫자 질문에는 숫자로.",
          "**`at this time` 을 붙이는 것이 좋다** — 지금은 선포하지 않지만 나빠지면 하겠다는 뜻이 되고, 관제사도 그렇게 준비한다.",
          "인원 **182** 는 세 자리다. `1-8-2` 로 끊어 적는다 — WEAK_02 에서 163 을 136 으로 두 번 말했다."
        ]
      },
      "P1A-Q8": {
        "verdict": "",
        "model": "HL123, cross YUDAM at or above flight level one five zero, speed two tree zero knots or less.",
        "notes": [
          "**한 지시에 하한과 상한이 같이 들어 있다.** 고도는 `at or above`(하한), 속도는 `or less`(상한)다.",
          "**방향 낱말을 빼면 둘 다 다른 제한이 된다.** `cross YUDAM one five zero, speed two tree zero` 로 복창하면 두 제한이 사라진다.",
          "메모에 `min FL150 / max 230` 으로 **낱말을 같이** 적는다. Q9 에서 두 값을 다시 쓴다."
        ]
      },
      "P1A-Q9": {
        "verdict": "",
        "model": "Negative, HL123. On our present profile we will be at flight level one four zero at YUDAM, which is below the at or above flight level one five zero restriction, and we are doing two five zero knots, which is above the two tree zero knots or less. We can level off now to make the level, and we can reduce now to make the speed. Request your priority — which one you want first.",
        "notes": [
          "**이 세트에서 가장 어려운 문항이다.** 두 제한을 **둘 다** 못 맞추는데, 하나는 **하한 미달**(140 < 150)이고 하나는 **상한 초과**(250 > 230)다. 방향이 서로 반대다.",
          "`confirm ~?` 이므로 첫 단어는 **NEGATIVE** 다.",
          "두 제한을 **각각** 짚는다. 하나로 뭉개면 관제사는 무엇을 풀어 줘야 하는지 모른다.",
          "비교 대상(`at or above FL150` · `two tree zero or less`)은 **Q8 에서 적어 둔 것**이다.",
          "`REPORT` · `SAY` 는 관제사가 쓰는 말이다. 조종사가 물을 때는 **REQUEST** 를 쓴다 — `request your priority`."
        ]
      },
      "P1B-Q1": {
        "verdict": "",
        "model": "Negative, HL123. Unable Pohang runway tree two — 2,400 metres available is below the 2,600 metres we need at today's landing weight. Request a runway with at least 2,600 metres available.",
        "notes": [
          "**하한 미만**이므로 `below` 다. `over our limit`(초과)은 반대말이다.",
          "`available`(활주로가 주는 값) ↔ `we need`(내 값)를 구분한다.",
          "거부만 하지 말고 필요값을 준다."
        ]
      },
      "P1B-Q2": {
        "verdict": "",
        "model": "Negative, HL123. Unable runway tree four — the wind one five zero at one five gives us about one five knots of tailwind and our maximum tailwind for landing is one zero knots, which is above our limit. Request another runway or a change of direction.",
        "notes": [
          "**상한 초과**이므로 `above our limit` 이 맞는 낱말이다 — Q1 의 `below` 와 짝으로 외운다.",
          "활주로 34 는 기수 340 이고 바람은 150 에서 오므로 거의 정배풍이다.",
          "대안을 요청한다. 거부만 하면 관제사가 다시 물어야 한다."
        ]
      },
      "P1B-Q3": {
        "verdict": "",
        "model": "HL123, our required landing distance is 2,200 metres. Request the landing distance available.",
        "notes": [
          "**두 낱말을 한 문항에서 쓰는 연습이다.** 내가 필요한 것은 `required landing distance`, 활주로가 주는 것은 `landing distance available` 이다. 바꿔 쓰면 뜻이 정반대가 되고, 관제사는 \"2,200 이 있으니 괜찮다\"로 듣는다.",
          "기능 두 개 : 답 + 요청. 숫자만 말하고 끝내면 가용 거리를 받지 못한다.",
          "20초가 아니라 30초 문항이지만 두 문장으로 끝난다. 짧은 것이 흠이 아니다."
        ]
      },
      "P1B-Q4": {
        "verdict": "",
        "model": "Affirm, HL123, we can take the short approach to runway one tree. We can be below two tree zero knots at five miles, so the high profile is acceptable. It saves us one four minutes.",
        "notes": [
          "**수락 문항이다.** 조건(5마일에서 230 이하)을 충족하므로 받는다.",
          "**`saves you` 는 단축이다 — 지연이 아니다.** `we can accept the one four minute delay` 로 답하면 관제사가 말한 것과 반대로 읽은 것이다.",
          "수락할 때도 **조건과 숫자**를 말한다. `Affirm` 하나로 끝내면 관제사는 내가 무엇을 근거로 받았는지 모른다."
        ]
      },
      "P1B-Q5": {
        "verdict": "",
        "model": "HL123, hold at GWANO, right turns, maintain flight level one tree zero, expect further clearance at zero tree four five.",
        "notes": [
          "체공 복창의 네 요소를 다 말한다 : 픽스·선회 방향·고도·EFC 시각. 하나라도 빼면 체공 복창이 아니다.",
          "**EFC 시각이 다음 문항의 계산 근거**다. `zero tree four five` = 0345. 한 자리라도 틀리면 Q6 의 판단이 뒤집힌다 — WEAK_02 에서 1125Z 를 1145Z 로 적어 그 일이 일어났다."
        ]
      },
      "P1B-Q6": {
        "verdict": "",
        "model": "Affirm, HL123, we are able to accept that delay. It is now zero tree two five and our further clearance is expected at zero tree four five, so that is two zero minutes. Our fuel endurance is one hour two zero minutes and our diversion to Wonju needs four zero minutes, so we can hold and still divert if we have to.",
        "notes": [
          "계산을 지문의 숫자로 한다 : 지연 **20분**(0345 − 0325), 교체 40분, 합 60분 ≤ 연료 80분. **20분이 남는다.**",
          "**지어내지 않는다.** 숫자가 떠오르지 않으면 Say again 을 쓴다 — 문항당 한 번 쓸 수 있다.",
          "선택 질문이므로 어느 쪽인지 말한다. 다만 `are you able ~?` 형태라 `Affirm` 으로 열어도 맞다.",
          "세 숫자(20 · 40 · 80)를 다 말하면 관제사가 내 여유를 알고 체공을 배분한다."
        ]
      },
      "P1B-Q7": {
        "verdict": "",
        "model": "HL123, we would like Wonju. Our required landing distance is 1,900 metres, so both runways are sufficient, but our crew duty time expires in five five minutes and Wonju is two tree minutes sooner. Request routing to Wonju.",
        "notes": [
          "거리는 **양쪽 다 충족**한다(2,800 · 2,100 ≥ 1,900). 그러므로 거리가 아니라 **시간**이 판단 근거다 — 짧은 활주로라고 거부하지 않는다.",
          "차이를 숫자로 : 35 − 12 = **23분**.",
          "근무시간이라는 제한을 말해야 이유가 선다. 그냥 \"빠른 쪽이 좋다\"는 근거가 아니다.",
          "선택 질문이므로 `AFFIRM/NEGATIVE` 를 쓰지 않는다."
        ]
      },
      "P2A-Q1": {
        "verdict": "",
        "model": "Pohang Approach, HL123, descending through flight level one niner zero for one four thousand, 50 miles from TOBRA, inbound Pohang. Request descent.",
        "notes": [
          "기능 세 개 : 기관 호출 / 위치와 고도 / 강하 요청.",
          "강하 중이므로 **`descending through X for Y`** 다. 픽스가 없을 때의 위치보고 형태이고, 픽스가 주어지면 `over [픽스] at [고도]` 를 쓴다.",
          "**Initial 의 네 숫자를 지금 적어 둔다** — 연료 1시간 55분 · 인원 **1-tree-2(132)** · 필요거리 2,000 · 오토랜드 정상. 연료와 인원은 **세 번** 쓰인다."
        ]
      },
      "P2A-Q2": {
        "verdict": "",
        "model": "HL123, descend to one tree thousand, expect the TOBRA ONE arrival, ILS runway tree two. Request the present visibility.",
        "notes": [
          "필수 복창 세 요소 : 고도(13,000)·arrival·활주로. `visibility is reducing` 은 정보라 복창 의무가 없다.",
          "`request the present visibility` — REQUEST + 명사구.",
          "시정이 떨어진다고 들었으면 **지금 값을 먼저 묻는다.** 묻지 않으면 Q4 에서 비교할 숫자가 없다."
        ]
      },
      "P2A-Q3": {
        "verdict": "",
        "model": "HL123, we have a GEN 1 FAULT caption and our APU is unavailable, so we are on a single generator. Two things have changed: our autoland is no longer available, so our minimum visibility is now 1,200 metres instead of our normal figure, and if the second generator fails we have only tree zero minutes on batteries, so we need to be on the ground inside tree zero minutes. Request priority and the shortest routing to an airfield with 1,200 metres or better.",
        "notes": [
          "기능 세 개 : 문제 / **바뀐 값 두 개** / 요청 + 이유.",
          "**바뀐 것이 숫자 하나가 아니라 \"시정 한계\"와 \"시간 한계\" 두 종류**다. 하나만 말하면 관제사는 왜 서두르는지 모르거나, 왜 공항을 고르는지 모른다.",
          "사건명을 그대로 말한다 — `GEN 1 FAULT`. `electrical problem` 으로 뭉개면 관제사가 심각도를 판단할 수 없다.",
          "**APU 를 쓸 수 없다는 것까지** 말해야 \"단일 발전기\"가 성립한다.",
          "남은 발전기가 정상이라는 것도 말한다 — 지금 비상이 아닌 이유다."
        ]
      },
      "P2A-Q4": {
        "verdict": "",
        "model": "HL123, unable Pohang — we now need 1,200 metres and the visibility there is 900 metres, which is below our minimum. Request diversion to Ulsan: 4,000 metres is well above what we need, and one five minutes is inside our tree zero minute limit.",
        "notes": [
          "**갱신된 1,200 으로 비교해야 한다.** 오토랜드가 있던 때의 최저값으로 비교하면 900 도 될 것처럼 보인다.",
          "시정은 **하한**이므로 `below our minimum` 이다.",
          "**시간 한계도 같이 확인해 말한다** — 15분 ≤ 30분. 두 제한을 모두 통과한다는 것을 보여야 관제사가 재촉하지 않는다."
        ]
      },
      "P2A-Q5": {
        "verdict": "",
        "model": "HL123, fuel endurance one hour five five minutes, one tree two persons on board.",
        "notes": [
          "Initial Situation 의 값이다. 짐작해 바꾸지 않는다.",
          "인원 **132** 는 `1-tree-2` 로 끊어 적고 끊어 읽는다. 이 값을 **세 번**(Q5 · Q7 · Q10) 말해야 하고, 세 번 모두 같아야 한다.",
          "묻지 않은 것을 덧붙이지 않는다."
        ]
      },
      "P2A-Q6": {
        "verdict": "",
        "model": "HL123, turn right heading tree one zero, descend to 8,000 feet, contact Ulsan Approach on one two one decimal tree five. Our intentions are to divert to Ulsan and fly a manual ILS — we have no autoland on a single generator. We request the fire service standing by as a precaution, and the shortest taxi in after landing.",
        "notes": [
          "필수 복창 세 요소 : 기수·고도·**주파수**. 주파수를 빼면 필수 복창 누락이다.",
          "intentions 는 **내가 할 것**(Ulsan 으로 divert, 수동 ILS) + **필요한 지원**(소방대, 최단 유도)이다.",
          "지문이 **비상 선포는 하지 않는다**고 못 박았다. 그러므로 MAYDAY·PAN-PAN 을 쓰지 않는다."
        ]
      },
      "P2A-Q7": {
        "verdict": "",
        "model": "Ulsan Approach, HL123, the visibility we need is 1,200 metres and we have one tree two persons on board.",
        "notes": [
          "**되묻기 함정.** 시정 한계는 사건 중에 생긴 **바뀐 값(1,200)** 이고, 인원은 **안 바뀐 값(132)** 이다. 한 문장 안에서 둘을 구분해야 한다.",
          "새 관제사는 앞 교신을 못 들었다. 되묻는 것이 당연하므로 그냥 다시 준다.",
          "인원을 Q5 와 **다르게** 말하면 소방대·공항이 틀린 인원으로 준비한다."
        ]
      },
      "P2A-Q8": {
        "verdict": "",
        "model": "Negative, HL123. Unable a tree zero mile downwind — on a single generator we have only tree zero minutes on batteries if the second one fails, and we will not accept more than one zero minutes of extra track. Request the shortest routing to the ILS, or a straight-in if you can give us one.",
        "notes": [
          "가부 질문이므로 **첫 단어가 NEGATIVE** 다.",
          "**이 문항의 한계는 거리가 아니라 시간**이다. `tree zero mile downwind` 가 몇 분인지를 관제사가 알아야 하므로, **내 시간 한계(30분 배터리 · 체공 10분 이내)** 를 숫자로 준다.",
          "거부만 하지 말고 **원하는 것**(최단 경로 / straight-in)을 말한다 — 지시문이 `tell him what you want instead` 라고 했다.",
          "선행 출발기 때문이라는 그의 사정을 알아들었다는 표시를 해도 좋다. 다만 내 한계가 먼저다."
        ]
      },
      "P2A-Q9": {
        "verdict": "",
        "model": "Negative, HL123, our autoland is not back — we are still on a single generator and we will fly a manual approach. And negative, we do not wish to declare an emergency at this time; the remaining generator is working normally. We would still like the fire service standing by.",
        "notes": [
          "**첫 단어가 NEGATIVE 다.** 그의 추정(\"오토랜드가 돌아왔겠지요\")이 사실이 아니다. 내용을 뒤에서 정정해도 첫 단어가 `Affirm` 이면 그가 자기 그림을 지우지 않는다.",
          "**두 질문의 답이 둘 다 NEGATIVE** 다. 하지만 **이유가 서로 다르다** — 하나는 고장이 안 고쳐졌기 때문, 하나는 지금 위험하지 않기 때문이다. 하나의 `negative` 로 덮지 말고 각각 이유를 붙인다.",
          "비상은 선포하지 않지만 **소방대는 계속 필요하다** — 이 둘이 다르다는 것을 말해야 관제사가 소방대를 취소하지 않는다."
        ]
      },
      "P2A-Q10": {
        "verdict": "",
        "model": "HL123, fuel endurance one hour five five minutes, one tree two persons on board.",
        "notes": [
          "**같은 두 값을 세 번째로 묻는다**(Q5 · Q7 · 여기). 세 번 모두 같아야 한다 — WEAK_02 에서 같은 인원을 두 번 다르게 말했다.",
          "지문이 연료를 줄여 주지 않았으므로 **Initial 값을 그대로** 말한다. 경과 시간을 짐작해 깎지 않는다.",
          "묻지 않은 것을 덧붙이지 않는다. 소방대가 쓸 두 값만."
        ]
      },
      "P2A-Q11": {
        "verdict": "",
        "model": "HL123, turn left heading tree six zero, descend to 2,500 feet until established, cleared for the ILS runway tree six approach, contact Ulsan Tower on one one eight decimal tree. After landing we will need the fire service standing by and the shortest taxi in — we are on a single generator, so request a tug standing by in case we lose the second one.",
        "notes": [
          "필수 복창 다섯 요소 : 기수·고도·**`until established`**·접근 허가·주파수.",
          "`cleared` 다 — `clear` 로 적으면 6세트째 같은 오류다.",
          "지시문은 **착륙 후**에 필요한 것을 물었다. 소방대 / 최단 유도로 / 견인 대기. 지문에 적힌 두 개(소방대·최단 유도)는 반드시 들어가야 한다."
        ]
      },
      "P2B-Q1": {
        "verdict": "",
        "model": "Daejeon Control, HL123, level at flight level tree seven zero. The temperature is five degrees warmer than planned and we cannot hold our planned Mach number at this level without using our reserve. Request descent to flight level tree tree zero.",
        "notes": [
          "기능 세 개 : 상황 / 요청 / 이유. 상황을 빼면 관제사가 왜 내려가려는지 모른다.",
          "**올라가는 것이 아니라 내려가는 요청**이다. 더운 날에는 높은 고도에서 성능이 나빠진다 — 지문을 끝까지 읽어야 방향이 맞는다.",
          "`request descent to flight level tree tree zero` — 명사구다."
        ]
      },
      "P2B-Q2": {
        "verdict": "",
        "model": "Ulsan Delivery, HL123. Our flight plan has us on the NASIK TWO departure, but it routes us through embedded thunderstorms. Request a straight-out departure from runway tree four and then direct SEORA.",
        "notes": [
          "**클루에 세 칸이 떠 있어도 원하는 것만 말한다.** 화면은 철자를 주는 것이고, 무엇을 원하는지는 지문이 정한다.",
          "요청이 **두 부분**(straight-out + direct SEORA)이다. 하나만 말하면 SID 를 안 받고 어디로 갈지가 빈다.",
          "`departure` 다 — `arrival` 로 말하면 다른 절차가 된다."
        ]
      },
      "P2B-Q3": {
        "verdict": "",
        "model": "HL123, taxi to holding point Alpha tree via Golf and Hotel, hold short of runway tree four.",
        "notes": [
          "**`hold short of runway tree four` 는 활주로 관련 지시라 반드시 복창한다.** 여기가 가장 자주 빠지는 자리다.",
          "홀딩포인트와 경로도 전부 복창한다.",
          "Q4 에서 \"활주로 tree four 앞에 대기 중\"이라고 말하려면 이 지시를 적어 둬야 한다."
        ]
      },
      "P2B-Q4": {
        "verdict": "",
        "model": "Ground, HL123, holding short of runway tree four. The forward left door slide is showing a fault on the cabin panel and maintenance must look at it before we depart. Request taxi back to the stand.",
        "notes": [
          "**이미 교신 중이므로 기관을 새로 호출하지 않는다.** 바로 상태를 보고한다.",
          "현재 위치는 **Q3 의 지시에서 나온다.** 위치를 말하지 않으면 지상관제사가 뒤 항공기를 돌릴 수 없다.",
          "기능 두 개 : 상태 + 요청. 사유를 빼면 왜 돌아가는지 모른다."
        ]
      },
      "P2B-Q5": {
        "verdict": "",
        "model": "Pohang Approach, HL123, request confirmation of the altimeter setting. We were given one zero zero tree, but our ATIS says one zero one tree. Confirm the correct setting before we descend any further.",
        "notes": [
          "**고도계는 필수 복창 7항목 중 하나**다. 두 값이 다르면 반드시 확인한다 — 10 헥토파스칼은 약 300피트 차이다.",
          "**두 값을 나란히 말한다.** \"고도계가 이상하다\"로는 관제사가 무엇을 확인할지 모른다.",
          "`request confirmation of ~` — REQUEST + 명사구. 조종사가 확인을 요구할 때는 `CONFIRM` 을 쓴다.",
          "이유(강하 전에 필요하다)를 붙여 긴급함을 전한다."
        ]
      },
      "P2B-Q6": {
        "verdict": "",
        "model": "Ulsan Tower, HL123, clear of runway tree six. We have a loud noise from a nose gear tyre and the aircraft is pulling to the left. We are stopping where we are — request towing assistance to the stand.",
        "notes": [
          "상태 먼저 : **활주로를 벗어났다**는 것을 말해야 관제사가 다음 항공기를 들여보낸다.",
          "**멈춘다는 것을 먼저 알린다.** 그 말이 없으면 관제사는 계속 유도 지시를 준다.",
          "`request towing assistance` 가 정해진 표현이다."
        ]
      },
      "P2B-Q7": {
        "verdict": "",
        "model": "Daejeon Control, HL123. Be advised, two zero miles east of GWANO at flight level tree one zero, a small unmanned aircraft passed about 500 feet below us. Nothing was on our TCAS and we took no avoiding action. For information — we require nothing ourselves.",
        "notes": [
          "**순수 보고다.** 지문이 `You need nothing for yourself` 라고 못 박았으므로 **요청을 덧붙이지 않는다.** 보고 뒤에 습관적으로 `request ~` 를 붙이는 것이 흔한 실수다.",
          "보고의 네 요소 : **어디서**(GWANO 동쪽 20마일) · **몇 피트에서**(FL310) · **무엇이**(소형 무인기) · **얼마나 가까이**(500피트 아래).",
          "**TCAS 에 안 떴다는 것과 회피하지 않았다는 것까지** 말한다 — 관제사가 다른 항공기에 경고할 때 필요한 정보이고, 내가 항로를 벗어나지 않았다는 뜻도 된다.",
          "`Be advised` 로 열고 `for information` 으로 닫으면 요청이 아님이 분명해진다."
        ]
      },
      "P2C-Q1": {
        "verdict": "",
        "model": "The figure that had changed was the visibility I needed. At the start I had an autoland, so I could have accepted a much lower figure, but when I lost the second generator the autoland went with it and my minimum became 1,200 metres. The figures that had not changed were my fuel endurance, which was one hour five five minutes, and the number of persons on board, which was one tree two. The controller asked me for those two at the handover to Ulsan, then the new controller asked me for the visibility and the persons on board, and then the fire service asked for the fuel and the persons on board again. So the same two numbers went out three times and had to be identical every time.\nIn my role as a pilot, I lay the page out so that each figure has one fixed place and I never write it twice. On the right hand side I keep a box with four lines in it — fuel endurance, persons on board, required landing distance, and my limits. The clearance goes on the left in the order the controller gives it. When a figure is replaced I draw one line through the old one and write the new one beside it with the time, so I can see that it moved. Three digit numbers I write with dashes, one tree two rather than 132, because that is how I have to say it and because a dash stops me reading the digits in the wrong order.\nAn example from this flight is the number of persons on board. One tree two is easy to turn into one two tree under pressure, and I was asked for it three times, twice while I was being vectored. Because it was written once, with dashes, in the same box every time, I read the same three digits out on all three occasions. If I had written it in the margin next to whichever transmission I happened to be on, I would have been reading a different copy each time.",
        "notes": [
          "3부 구조를 지킨다 : ① 바뀐 값과 안 바뀐 값 ② 메모를 어떻게 배치하는가 ③ 예시 하나.",
          "① 에서 **바뀐 것과 안 바뀐 것을 갈라서** 말하는 것이 이 질문의 핵심이다. 둘을 섞어 말하면 질문을 못 읽은 것이 된다.",
          "③ 은 `Give an example.` 에 대한 답이므로 반드시 구체적인 한 사례로 닫는다. **10세트 연속 이 부분을 하지 않았다.**",
          "60~75초 분량으로 세 부분을 다 채우는 쪽이 90초를 꽉 채우고 ③ 을 빼는 것보다 낫다."
        ]
      },
      "P2C-Q2": {
        "verdict": "",
        "model": "A limit that is a clock has to be given to the controller as a number of minutes, not as a description of the fault. If I tell him I am on a single generator he does not know what that costs him; if I tell him I have tree zero minutes on batteries if the second generator fails, and that I will not accept more than one zero minutes of extra track, he has two numbers he can plan with. He can then tell me whether he can do it, and if he cannot he can tell me what he can do. I also say what I want instead in the same transmission, because a refusal on its own leaves him to guess — in this case the shortest routing to the ILS, or a straight-in if he had one.\nFrom my own experience, what happens when a pilot accepts something he has no margin for is that the margin disappears quietly and then everything arrives at once. He accepts the long track, then the approach takes longer than he thought, then he is asked to go around, and now the decision he should have made calmly thirty miles out has to be made in ten seconds with no options left. The problem is not the first acceptance; it is that the second event has nowhere to go. Saying negative early is cheap, and it keeps the decision in the part of the flight where I still have choices.\nAn example is the downwind in this flight. He offered me a tree zero mile downwind because he had a departure ahead of me. If I had accepted it to be helpful, I would have used most of my tree zero minutes on the approach, and a single go around would have put me outside the figure I had given myself. I said negative, gave him my two numbers, and asked for the shortest routing, and the cost of that was one transmission.",
        "notes": [
          "질문이 세 부분이다 : 시간 한계를 어떻게 설명하는가 / 여유 없이 수락하면 어떻게 되는가 / 예시.",
          "첫 부분은 **\"고장 이름이 아니라 분 단위 숫자로 준다\"** 가 답의 핵심이다. 관제사는 계통을 모르고 시간은 안다.",
          "두 번째는 일반론으로 답한다 — 여유가 사라지는 과정을 순서대로.",
          "③ 은 롤플레이의 그 턴(P2A-Q8)을 그대로 쓰면 된다."
        ]
      },
      "P2C-Q3": {
        "verdict": "",
        "model": "We were HL123, descending through flight level one niner zero for one four thousand, 50 miles from TOBRA and inbound to Pohang. Our fuel endurance was one hour five five minutes, we had one tree two persons on board, our required landing distance was 2,000 metres and our autoland was serviceable.\nOn the arrival the controller told us the visibility at Pohang was reducing in mist. Then, passing one two thousand feet, we got a GEN 1 FAULT caption, and because our APU was unavailable we were left on a single generator. The nature of the incident was a loss of electrical redundancy rather than a loss of control: the aircraft flew normally and the remaining generator was working, but it took two things away from us. The autoland went, so we had to fly it by hand and our minimum visibility became 1,200 metres, and we were left with only tree zero minutes on batteries if the second generator failed, so we needed to be on the ground inside tree zero minutes.\nThat made Pohang unusable. The visibility there was 900 metres, which was tree hundred metres below what we now needed, so we were unable Pohang and asked for Ulsan, which had 4,000 metres and was one five minutes away, inside our time limit. We asked for priority and the shortest routing.\nWe were turned onto headings for Ulsan and changed to Ulsan Approach, who had none of our figures and asked for the visibility we needed and the persons on board. He then offered us a tree zero mile downwind because of a departure ahead of us, which we were unable because of the time on batteries, and we asked for the shortest routing instead. He later assumed our autoland was back; it was not, so we corrected him. We did not declare an emergency, because the remaining generator was working normally and we had the fuel and a usable airfield, but we asked for the fire service to stand by and for the shortest taxi in, and we landed from the ILS runway tree six.",
        "notes": [
          "시간 순서로 말한다 : 초기 상태 → 시정 예고 → 사건 → 빼앗긴 두 가지 → 공항 변경 → 핸드오프와 되묻기 → 다운윈드 거절 → 정정 → 착륙 → 비상 선포를 안 한 이유.",
          "`the nature of the incident` 을 한 문장으로 못 박는다 — **\"조종 상실이 아니라 전원 이중화 상실\"**.",
          "**숫자를 넣어야 들은 증거가 된다** : 1,200 · 900 · 4,000 · 15 · 30 · 1시간 55분 · 132.",
          "비상을 선포하지 않았다면 **왜 안 했는지**까지 말한다."
        ]
      },
      "P2C-Q4": {
        "verdict": "",
        "model": "On the whole I think he handled it well. He had already told me the visibility was reducing before anything went wrong, so when my minimum went up to 1,200 metres I already knew Pohang was marginal, and that saved me a question. When I reported the fault he gave me the visibility at both airfields and the time to the second one, and he left the choice to me rather than telling me where to go. That is the right division of work, because only I know what the aircraft needs.\nThere are two things I would have done differently. The first is the tree zero mile downwind. He offered it because he had a departure ahead of me, which is reasonable, but I had already told him I needed to be on the ground inside tree zero minutes, and the offer did not fit the figure I had given him. If a pilot has given you a clock, the next offer should be measured against it. The second is the assumption about the autoland. He told me he took it that it was back, rather than asking me. If I had been busy flying a manual approach in reducing visibility I might have agreed with him, and he would then have stopped planning for a hand flown approach.\nFrom a pilot's point of view, the handover cost us the most. The new controller had none of my figures, so I gave the visibility and the persons on board again while being vectored, and then the fire service asked for the fuel and the persons on board a third time. Those numbers had been passed twice already. If they had travelled with the coordination, I would have had those two transmissions free at the point where I needed them most. What I would also ask for next time is the runway condition at Ulsan, not only the visibility — flying it by hand with no autoland, I want to know what the surface is like as well as whether I can see it.",
        "notes": [
          "**칭찬 → 개선점 → 조종사 관점** 세 부분이다.",
          "개선점은 **구체적 행동**으로 말한다 — 여기서는 **내가 준 시간 한계를 무시한 제안**과 **오토랜드가 복구됐다고 단정한 것** 두 곳이 할 말이 가장 많다.",
          "관제사를 비난하지 않는다. 역할 분담(정보는 관제사, 판단은 조종사)의 언어로 말한다.",
          "되묻기가 세 번이었던 것을 **핸드오프 조정의 문제**로 짚으면 조종사 관점이 선다."
        ]
      }
    }
  }
};
