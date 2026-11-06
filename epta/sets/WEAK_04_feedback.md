# WEAK_04 모범답안 — 2026-11-06

**채점이 아니다.** 아직 응시 기록이 없고, 요청에 따라 **모범답안만** 붙인 파일이다.
판정(✅⚠️❌)과 등급은 넣지 않았다.

이 세트는 **test04 계열**이므로 숫자를 `tree` = 3 으로 적었다. **`tree` 와 `three` 는 둘 다
정답**이다(CLAUDE.md §1-4). 아래 정답도 `tree` 로 적어 두었으니, 소리 내 읽을 때 어느 쪽으로
발음해도 된다.

`python practice/push.py WEAK_04 --static` 으로 올라가며, **내 답안 보기**
(`/r/?set=WEAK_04`) 화면에서 문항마다 "문제 → 정답"이 보인다.

**먼저 풀고 나서 보는 것을 권한다.**

---

## 약점 A. 복창 + α — 9문항

**P1A-Q1**
문제 : 🖥 [ Jeju / NASIK TWO departure ] / Delivery : HL123, cleared to Jeju via the NASIK TWO departure, flight level tree tree zero, squawk two tree seven one. / Record your full readback.
** 정답 : HL123, cleared to Jeju via the NASIK TWO departure, flight level tree tree zero, squawk two tree seven one.
- 필수 복창 네 요소 : 목적지·SID·고도·squawk.
- **`tree` 가 섞이면 받아적기가 흔들린다.** `tree tree zero` 는 330, `two tree seven one` 은 2371 이다. 숫자를 들을 때 머릿속에서 three 로 바꾸지 말고 **자릿수 개수**를 먼저 센다 — 세 자리면 고도, 네 자리면 squawk 다.
- **적어 두는 문항이다.** 고도와 squawk 를 Q2 에서 다시 말한다.

---

**P1A-Q2**
문제 : The loading is still being finalised and you will not be ready to taxi for eight minutes. / Ground : HL123, say again your cleared level and your squawk, and report when you are ready to taxi. / Answer both of his questions, acknowledge his request, and tell him how long you need.
** 정답 : HL123, cleared level flight level tree tree zero, squawk two tree seven one. Wilco, we will report when we are ready to taxi — we need eight minutes, the loading is still being finalised.
- 기능 네 개다 : 두 질문에 답 / 보고 약속 / 소요시간 / 이유. 이 세트에서 기능이 가장 많은 문항이다.
- `Report when you are ready` 에 대한 응답은 **WILCO** 다. `ROGER` 단독으로 대신할 수 없다.
- 두 값은 **Q1 에서 들은 것**이다.
- 시간은 **숫자로** 준다. `a few minutes` 는 관제사가 출발 순서를 짤 근거가 못 된다.

---

**P1A-Q3**
문제 : You are descending through 9,000 feet. The aircraft has a placard today limiting you to two five zero knots below one zero thousand feet. / Approach : HL123, maintain two niner zero knots until one five miles. / Give a full readback, and tell him what you can do instead, with a reason.
** 정답 : HL123, maintain two niner zero knots. Unable two niner zero knots — we are passing 9,000 feet and the aircraft has a placard today limiting us to two five zero knots below one zero thousand feet. We can maintain two five zero knots until one five miles.
- 복창을 먼저 하고 그다음 UNABLE 이다. 속도는 필수 복창 항목이다.
- **상한**이다 — 250 이 최대이므로 290 은 불가. `our maximum` / `above our limit` 이 맞는 낱말이다.
- 이유에 **왜 지금 걸리는지**를 넣는다 — 이미 1만피트 아래다. 고도를 말하지 않으면 관제사는 상승하면 되는 줄로 안다.
- 줄 수 있는 값(250)을 조건(`until one five miles`)과 함께 준다.

---

**P1A-Q4**
문제 : Tower : HL123, after the landing Boeing 737-800, line up and wait runway tree four. / Record your full readback.
** 정답 : HL123, after the landing Boeing 737-800, line up and wait runway tree four.
- 조건부 허가다. **조건(`after the landing Boeing 737-800`)을 빼면** 조건부 허가 복창이 아니고, 관제사는 내가 조건을 못 들었다고 보고 다시 지시해야 한다.
- 활주로 번호는 활주로 관련 지시라 필수다. `runway tree four` = 34.

---

**P1A-Q5**
문제 : The 737 has landed and vacated, and you are lined up. The cabin crew call — a passenger has stood up and opened an overhead bin. They need one minute to get him seated and the cabin secure. / Tower : HL123, wind tree two zero at seven, cleared for takeoff runway tree four. / Give a full readback, tell him what you cannot do with a reason, and tell him how long you need.
** 정답 : HL123, holding position — unable takeoff at this time. A passenger is out of his seat and the cabin is not secure. Request one minute, and we will call you when we are ready.
- **이륙허가를 그대로 복창하지 않는다.** 복창하면 활주를 시작한다는 뜻이 된다. 받을 수 없는 허가에 대한 "복창"은 **내가 무엇을 하고 있는지**(holding position)를 분명히 하는 것이다.
- 바람(tree two zero at seven)은 부가정보라 복창 대상이 아니다.
- 기능 세 개 : 현 상태 / 못 하는 것 + 이유 / 소요시간. 1분을 빼면 관제사가 뒤 항공기를 배치할 수 없다.
- 들은 말은 `cleared` 다 — `clear` 로 적으면 6세트째 같은 오류다.

---

**P1A-Q6**
문제 : 🖥 [ Ulsan Approach / YUDAM ] / You are level at flight level two four zero, tree five miles from YUDAM, inbound to Ulsan. The inner pane of a cabin window has cracked. The outer pane is intact and the cabin is holding pressure, but you want to descend to one zero thousand feet and land as soon as you can. Contact Ulsan Approach. / Report your status and make a request with a reason.
** 정답 : Ulsan Approach, HL123, level at flight level two four zero, tree five miles from YUDAM, inbound Ulsan. Be advised, the inner pane of a cabin window has cracked. The outer pane is intact and the cabin is holding pressure. Request descent to one zero thousand feet and priority landing at Ulsan, as a precaution against further failure.
- 발신 순서 : 기관 → 콜사인 → 고도 → 위치 → 보고 → 요청 + 이유.
- **외측 유리가 멀쩡하고 여압이 유지된다는 것을 말해야 한다.** 그 말이 없으면 관제사는 여압 상실로 듣고 긴급강하를 전제한 조치를 한다 — 상황이 **얼마나 나쁘지 않은지**를 말하는 것도 보고다.
- 요청이 두 개(강하 + 우선착륙)다. 하나만 말하면 절반이다.

---

**P1A-Q7**
문제 : You have one eight two persons on board. The cabin is holding pressure and the crew are not worried, so you do not want to declare an emergency. / Approach : HL123, roger, descend to flight level one tree zero, turn left heading tree five zero, vectors for Ulsan. Do you want to declare an emergency, and how many persons on board? / Give a full readback, and answer both of his questions.
** 정답 : HL123, descend to flight level one tree zero, turn left heading tree five zero. Negative, we do not wish to declare an emergency at this time — the cabin is holding pressure. One eight two persons on board.
- 필수 복창 두 요소 : 고도·기수. `vectors for Ulsan` 은 복창 의무가 없다.
- 두 질문에 다 답한다. 가부 질문에는 **NEGATIVE**, 숫자 질문에는 숫자로.
- **`at this time` 을 붙이는 것이 좋다** — 지금은 선포하지 않지만 나빠지면 하겠다는 뜻이 되고, 관제사도 그렇게 준비한다.
- 인원 **182** 는 세 자리다. `1-8-2` 로 끊어 적는다 — WEAK_02 에서 163 을 136 으로 두 번 말했다.

---

**P1A-Q8**
문제 : Approach : HL123, cross YUDAM at or above flight level one five zero, speed two tree zero knots or less. / Record your full readback.
** 정답 : HL123, cross YUDAM at or above flight level one five zero, speed two tree zero knots or less.
- **한 지시에 하한과 상한이 같이 들어 있다.** 고도는 `at or above`(하한), 속도는 `or less`(상한)다.
- **방향 낱말을 빼면 둘 다 다른 제한이 된다.** `cross YUDAM one five zero, speed two tree zero` 로 복창하면 두 제한이 사라진다.
- 메모에 `min FL150 / max 230` 으로 **낱말을 같이** 적는다. Q9 에서 두 값을 다시 쓴다.

---

**P1A-Q9**
문제 : Your present profile will put you at flight level one four zero at YUDAM, and you are doing two five zero knots. You can level off now, and you can reduce, but you need to be told which he wants first. / Approach : HL123, confirm you can make both of the YUDAM restrictions? / Respond accordingly, and tell him what you need for each one.
** 정답 : Negative, HL123. On our present profile we will be at flight level one four zero at YUDAM, which is below the at or above flight level one five zero restriction, and we are doing two five zero knots, which is above the two tree zero knots or less. We can level off now to make the level, and we can reduce now to make the speed. Request your priority — which one you want first.
- **이 세트에서 가장 어려운 문항이다.** 두 제한을 **둘 다** 못 맞추는데, 하나는 **하한 미달**(140 < 150)이고 하나는 **상한 초과**(250 > 230)다. 방향이 서로 반대다.
- `confirm ~?` 이므로 첫 단어는 **NEGATIVE** 다.
- 두 제한을 **각각** 짚는다. 하나로 뭉개면 관제사는 무엇을 풀어 줘야 하는지 모른다.
- 비교 대상(`at or above FL150` · `two tree zero or less`)은 **Q8 에서 적어 둔 것**이다.
- `REPORT` · `SAY` 는 관제사가 쓰는 말이다. 조종사가 물을 때는 **REQUEST** 를 쓴다 — `request your priority`.

---

## 약점 B. 상한·하한 + 어휘 — 7문항

**P1B-Q1**
문제 : The shortest runway you can use at today's landing weight is 2,600 metres. / Approach : HL123, Pohang runway tree two has 2,400 metres available. Can you take it?
** 정답 : Negative, HL123. Unable Pohang runway tree two — 2,400 metres available is below the 2,600 metres we need at today's landing weight. Request a runway with at least 2,600 metres available.
- **하한 미만**이므로 `below` 다. `over our limit`(초과)은 반대말이다.
- `available`(활주로가 주는 값) ↔ `we need`(내 값)를 구분한다.
- 거부만 하지 말고 필요값을 준다.

---

**P1B-Q2**
문제 : Your maximum tailwind for landing is one zero knots. / Tower : HL123, runway tree four, wind one five zero at one five. Can you accept?
** 정답 : Negative, HL123. Unable runway tree four — the wind one five zero at one five gives us about one five knots of tailwind and our maximum tailwind for landing is one zero knots, which is above our limit. Request another runway or a change of direction.
- **상한 초과**이므로 `above our limit` 이 맞는 낱말이다 — Q1 의 `below` 와 짝으로 외운다.
- 활주로 34 는 기수 340 이고 바람은 150 에서 오므로 거의 정배풍이다.
- 대안을 요청한다. 거부만 하면 관제사가 다시 물어야 한다.

---

**P1B-Q3**
문제 : Your required landing distance today is 2,200 metres. You do not yet know what the runway gives you, and you want to be told. / Approach : HL123, say the landing distance you need, and I'll tell you what we have. / Answer his question, and make a request.
** 정답 : HL123, our required landing distance is 2,200 metres. Request the landing distance available.
- **두 낱말을 한 문항에서 쓰는 연습이다.** 내가 필요한 것은 `required landing distance`, 활주로가 주는 것은 `landing distance available` 이다. 바꿔 쓰면 뜻이 정반대가 되고, 관제사는 "2,200 이 있으니 괜찮다"로 듣는다.
- 기능 두 개 : 답 + 요청. 숫자만 말하고 끝내면 가용 거리를 받지 못한다.
- 20초가 아니라 30초 문항이지만 두 문장으로 끝난다. 짧은 것이 흠이 아니다.

---

**P1B-Q4**
문제 : You can accept a short approach as long as you are below two tree zero knots at five miles, and today you can do that. / Approach : HL123, I can give you a short approach to runway one tree — it saves you one four minutes, but you'd be high on the profile. Can you take it? / Respond accordingly with a reason.
** 정답 : Affirm, HL123, we can take the short approach to runway one tree. We can be below two tree zero knots at five miles, so the high profile is acceptable. It saves us one four minutes.
- **수락 문항이다.** 조건(5마일에서 230 이하)을 충족하므로 받는다.
- **`saves you` 는 단축이다 — 지연이 아니다.** `we can accept the one four minute delay` 로 답하면 관제사가 말한 것과 반대로 읽은 것이다.
- 수락할 때도 **조건과 숫자**를 말한다. `Affirm` 하나로 끝내면 관제사는 내가 무엇을 근거로 받았는지 모른다.

---

**P1B-Q5**
문제 : 🖥 [ GWANO ] / Approach : HL123, hold at GWANO, right turns, maintain flight level one tree zero, expect further clearance at zero tree four five. / Record your full readback.
** 정답 : HL123, hold at GWANO, right turns, maintain flight level one tree zero, expect further clearance at zero tree four five.
- 체공 복창의 네 요소를 다 말한다 : 픽스·선회 방향·고도·EFC 시각. 하나라도 빼면 체공 복창이 아니다.
- **EFC 시각이 다음 문항의 계산 근거**다. `zero tree four five` = 0345. 한 자리라도 틀리면 Q6 의 판단이 뒤집힌다 — WEAK_02 에서 1125Z 를 1145Z 로 적어 그 일이 일어났다.

---

**P1B-Q6**
문제 : It is now zero tree two five. Your fuel endurance is one hour two zero minutes and your diversion to Wonju needs four zero minutes. You would rather stay if your fuel allows it. / Approach : HL123, are you able to accept that, or do you want to divert now? / Respond accordingly with a reason, and give him your figures.
** 정답 : Affirm, HL123, we are able to accept that delay. It is now zero tree two five and our further clearance is expected at zero tree four five, so that is two zero minutes. Our fuel endurance is one hour two zero minutes and our diversion to Wonju needs four zero minutes, so we can hold and still divert if we have to.
- 계산을 지문의 숫자로 한다 : 지연 **20분**(0345 − 0325), 교체 40분, 합 60분 ≤ 연료 80분. **20분이 남는다.**
- **지어내지 않는다.** 숫자가 떠오르지 않으면 Say again 을 쓴다 — 문항당 한 번 쓸 수 있다.
- 선택 질문이므로 어느 쪽인지 말한다. 다만 `are you able ~?` 형태라 `Affirm` 으로 열어도 맞다.
- 세 숫자(20 · 40 · 80)를 다 말하면 관제사가 내 여유를 알고 체공을 배분한다.

---

**P1B-Q7**
문제 : 🖥 [ Ulsan / Wonju ] / Your required landing distance is 1,900 metres and your crew duty time expires in five five minutes. / Approach : HL123, Ulsan runway tree four has 2,800 metres but you'd be tree five minutes. Wonju has 2,100 metres, one two minutes. What would you like? / Respond accordingly with a reason, and say what you want.
** 정답 : HL123, we would like Wonju. Our required landing distance is 1,900 metres, so both runways are sufficient, but our crew duty time expires in five five minutes and Wonju is two tree minutes sooner. Request routing to Wonju.
- 거리는 **양쪽 다 충족**한다(2,800 · 2,100 ≥ 1,900). 그러므로 거리가 아니라 **시간**이 판단 근거다 — 짧은 활주로라고 거부하지 않는다.
- 차이를 숫자로 : 35 − 12 = **23분**.
- 근무시간이라는 제한을 말해야 이유가 선다. 그냥 "빠른 쪽이 좋다"는 근거가 아니다.
- 선택 질문이므로 `AFFIRM/NEGATIVE` 를 쓰지 않는다.

---

## 약점 C. 값 유지 — 11턴

**P2A-Q1**
문제 : [Initial Situation] descending through flight level one niner zero for one four thousand, 50 miles from TOBRA, inbound Pohang. Fuel endurance one hour five five minutes, one tree two persons on board, required landing distance 2,000 metres, autoland serviceable. / 🖥 [ Pohang Approach / TOBRA ] / ☞ Contact Pohang Approach, report your position and level, and request descent.
** 정답 : Pohang Approach, HL123, descending through flight level one niner zero for one four thousand, 50 miles from TOBRA, inbound Pohang. Request descent.
- 기능 세 개 : 기관 호출 / 위치와 고도 / 강하 요청.
- 강하 중이므로 **`descending through X for Y`** 다. 픽스가 없을 때의 위치보고 형태이고, 픽스가 주어지면 `over [픽스] at [고도]` 를 쓴다.
- **Initial 의 네 숫자를 지금 적어 둔다** — 연료 1시간 55분 · 인원 **1-tree-2(132)** · 필요거리 2,000 · 오토랜드 정상. 연료와 인원은 **세 번** 쓰인다.

---

**P2A-Q2**
문제 : 🖥 [ TOBRA ONE arrival ] / ☞ Listen to the controller, give a full readback, and inquire about the present visibility. / Approach : HL123, Pohang Approach, descend to one tree thousand, expect the TOBRA ONE arrival, ILS runway tree two. Be advised, visibility is reducing in mist.
** 정답 : HL123, descend to one tree thousand, expect the TOBRA ONE arrival, ILS runway tree two. Request the present visibility.
- 필수 복창 세 요소 : 고도(13,000)·arrival·활주로. `visibility is reducing` 은 정보라 복창 의무가 없다.
- `request the present visibility` — REQUEST + 명사구.
- 시정이 떨어진다고 들었으면 **지금 값을 먼저 묻는다.** 묻지 않으면 Q4 에서 비교할 숫자가 없다.

---

**P2A-Q3**
문제 : [Situation Update] Passing one two thousand feet you get a GEN 1 FAULT caption, and your APU is unavailable, so you are on a single generator. Your autoland is no longer available, so you need to fly it by hand and your minimum visibility is now 1,200 metres. If the second generator fails you have tree zero minutes on batteries, so you want to be on the ground inside tree zero minutes, and you have decided you will not hold for more than one zero minutes. The remaining generator is working normally, so you do not want to declare an emergency — but you do want the fire service standing by, and the shortest taxi in after landing. / ☞ Report your problem to the controller, tell him both things that have changed, and make a request with a reason.
** 정답 : HL123, we have a GEN 1 FAULT caption and our APU is unavailable, so we are on a single generator. Two things have changed: our autoland is no longer available, so our minimum visibility is now 1,200 metres instead of our normal figure, and if the second generator fails we have only tree zero minutes on batteries, so we need to be on the ground inside tree zero minutes. Request priority and the shortest routing to an airfield with 1,200 metres or better.
- 기능 세 개 : 문제 / **바뀐 값 두 개** / 요청 + 이유.
- **바뀐 것이 숫자 하나가 아니라 "시정 한계"와 "시간 한계" 두 종류**다. 하나만 말하면 관제사는 왜 서두르는지 모르거나, 왜 공항을 고르는지 모른다.
- 사건명을 그대로 말한다 — `GEN 1 FAULT`. `electrical problem` 으로 뭉개면 관제사가 심각도를 판단할 수 없다.
- **APU 를 쓸 수 없다는 것까지** 말해야 "단일 발전기"가 성립한다.
- 남은 발전기가 정상이라는 것도 말한다 — 지금 비상이 아닌 이유다.

---

**P2A-Q4**
문제 : 🖥 [ Pohang / Ulsan / visibility ] / ☞ Listen to the controller, state your decision with a reason, and tell him the figure you need. / Approach : HL123, Pohang visibility is now 900 metres. Ulsan has 4,000 metres and it's one five minutes away. What would you like?
** 정답 : HL123, unable Pohang — we now need 1,200 metres and the visibility there is 900 metres, which is below our minimum. Request diversion to Ulsan: 4,000 metres is well above what we need, and one five minutes is inside our tree zero minute limit.
- **갱신된 1,200 으로 비교해야 한다.** 오토랜드가 있던 때의 최저값으로 비교하면 900 도 될 것처럼 보인다.
- 시정은 **하한**이므로 `below our minimum` 이다.
- **시간 한계도 같이 확인해 말한다** — 15분 ≤ 30분. 두 제한을 모두 통과한다는 것을 보여야 관제사가 재촉하지 않는다.

---

**P2A-Q5**
문제 : ☞ Listen to the controller and provide the requested information. / Approach : HL123, roger, I'm passing you to Ulsan. Say your fuel endurance and the number of persons on board.
** 정답 : HL123, fuel endurance one hour five five minutes, one tree two persons on board.
- Initial Situation 의 값이다. 짐작해 바꾸지 않는다.
- 인원 **132** 는 `1-tree-2` 로 끊어 적고 끊어 읽는다. 이 값을 **세 번**(Q5 · Q7 · Q10) 말해야 하고, 세 번 모두 같아야 한다.
- 묻지 않은 것을 덧붙이지 않는다.

---

**P2A-Q6**
문제 : 🖥 [ Ulsan Approach ] / ☞ Listen to the controller, give a full readback and say your intentions. / Approach : HL123, turn right heading tree one zero, descend to 8,000 feet, vectors for Ulsan, contact Ulsan Approach on one two one decimal tree five. Say your intentions.
** 정답 : HL123, turn right heading tree one zero, descend to 8,000 feet, contact Ulsan Approach on one two one decimal tree five. Our intentions are to divert to Ulsan and fly a manual ILS — we have no autoland on a single generator. We request the fire service standing by as a precaution, and the shortest taxi in after landing.
- 필수 복창 세 요소 : 기수·고도·**주파수**. 주파수를 빼면 필수 복창 누락이다.
- intentions 는 **내가 할 것**(Ulsan 으로 divert, 수동 ILS) + **필요한 지원**(소방대, 최단 유도)이다.
- 지문이 **비상 선포는 하지 않는다**고 못 박았다. 그러므로 MAYDAY·PAN-PAN 을 쓰지 않는다.

---

**P2A-Q7**
문제 : ☞ You are now with a new controller who has none of your figures. Listen to him and answer both of his questions. / Approach : HL123, Ulsan Approach, radar contact. I've got nothing on you — say the visibility you need and the number of persons on board.
** 정답 : Ulsan Approach, HL123, the visibility we need is 1,200 metres and we have one tree two persons on board.
- **되묻기 함정.** 시정 한계는 사건 중에 생긴 **바뀐 값(1,200)** 이고, 인원은 **안 바뀐 값(132)** 이다. 한 문장 안에서 둘을 구분해야 한다.
- 새 관제사는 앞 교신을 못 들었다. 되묻는 것이 당연하므로 그냥 다시 준다.
- 인원을 Q5 와 **다르게** 말하면 소방대·공항이 틀린 인원으로 준비한다.

---

**P2A-Q8**
문제 : ☞ Listen to the controller, tell him whether you can accept that with a reason, and tell him what you want instead. / Approach : HL123, I've got a departure ahead of you, so I can give you a tree zero mile downwind for the ILS. Can you accept that?
** 정답 : Negative, HL123. Unable a tree zero mile downwind — on a single generator we have only tree zero minutes on batteries if the second one fails, and we will not accept more than one zero minutes of extra track. Request the shortest routing to the ILS, or a straight-in if you can give us one.
- 가부 질문이므로 **첫 단어가 NEGATIVE** 다.
- **이 문항의 한계는 거리가 아니라 시간**이다. `tree zero mile downwind` 가 몇 분인지를 관제사가 알아야 하므로, **내 시간 한계(30분 배터리 · 체공 10분 이내)** 를 숫자로 준다.
- 거부만 하지 말고 **원하는 것**(최단 경로 / straight-in)을 말한다 — 지시문이 `tell him what you want instead` 라고 했다.
- 선행 출발기 때문이라는 그의 사정을 알아들었다는 표시를 해도 좋다. 다만 내 한계가 먼저다.

---

**P2A-Q9**
문제 : ☞ Listen to the controller and answer both of his questions. / Approach : HL123, you've had a while to work on it, so I take it your autoland is back. Is that right, and do you want to declare an emergency?
** 정답 : Negative, HL123, our autoland is not back — we are still on a single generator and we will fly a manual approach. And negative, we do not wish to declare an emergency at this time; the remaining generator is working normally. We would still like the fire service standing by.
- **첫 단어가 NEGATIVE 다.** 그의 추정("오토랜드가 돌아왔겠지요")이 사실이 아니다. 내용을 뒤에서 정정해도 첫 단어가 `Affirm` 이면 그가 자기 그림을 지우지 않는다.
- **두 질문의 답이 둘 다 NEGATIVE** 다. 하지만 **이유가 서로 다르다** — 하나는 고장이 안 고쳐졌기 때문, 하나는 지금 위험하지 않기 때문이다. 하나의 `negative` 로 덮지 말고 각각 이유를 붙인다.
- 비상은 선포하지 않지만 **소방대는 계속 필요하다** — 이 둘이 다르다는 것을 말해야 관제사가 소방대를 취소하지 않는다.

---

**P2A-Q10**
문제 : ☞ Listen to the controller and provide the requested information. / Approach : HL123, the fire service want two figures before you land — say again your fuel endurance and the number of persons on board.
** 정답 : HL123, fuel endurance one hour five five minutes, one tree two persons on board.
- **같은 두 값을 세 번째로 묻는다**(Q5 · Q7 · 여기). 세 번 모두 같아야 한다 — WEAK_02 에서 같은 인원을 두 번 다르게 말했다.
- 지문이 연료를 줄여 주지 않았으므로 **Initial 값을 그대로** 말한다. 경과 시간을 짐작해 깎지 않는다.
- 묻지 않은 것을 덧붙이지 않는다. 소방대가 쓸 두 값만.

---

**P2A-Q11**
문제 : 🖥 [ Ulsan Tower ] / ☞ Listen to the controller, give a full readback, and say what you will need after landing. / Approach : HL123, turn left heading tree six zero, descend to 2,500 feet until established, cleared for the ILS runway tree six approach, contact Ulsan Tower on one one eight decimal tree.
** 정답 : HL123, turn left heading tree six zero, descend to 2,500 feet until established, cleared for the ILS runway tree six approach, contact Ulsan Tower on one one eight decimal tree. After landing we will need the fire service standing by and the shortest taxi in — we are on a single generator, so request a tug standing by in case we lose the second one.
- 필수 복창 다섯 요소 : 기수·고도·**`until established`**·접근 허가·주파수.
- `cleared` 다 — `clear` 로 적으면 6세트째 같은 오류다.
- 지시문은 **착륙 후**에 필요한 것을 물었다. 소방대 / 최단 유도로 / 견인 대기. 지문에 적힌 두 개(소방대·최단 유도)는 반드시 들어가야 한다.

---

## 약점 D. 발신 — 7문항

**P2B-Q1**
문제 : 🖥 [ Daejeon Control / SEORA ] / You are level at flight level tree seven zero. The temperature is five degrees warmer than planned and you cannot hold your planned Mach number without eating into your reserve. At flight level tree tree zero you can. You want flight level tree tree zero. Contact Daejeon Control. / Report your situation and make a request with a reason.
** 정답 : Daejeon Control, HL123, level at flight level tree seven zero. The temperature is five degrees warmer than planned and we cannot hold our planned Mach number at this level without using our reserve. Request descent to flight level tree tree zero.
- 기능 세 개 : 상황 / 요청 / 이유. 상황을 빼면 관제사가 왜 내려가려는지 모른다.
- **올라가는 것이 아니라 내려가는 요청**이다. 더운 날에는 높은 고도에서 성능이 나빠진다 — 지문을 끝까지 읽어야 방향이 맞는다.
- `request descent to flight level tree tree zero` — 명사구다.

---

**P2B-Q2**
문제 : 🖥 [ Ulsan Delivery / NASIK TWO departure / SEORA ] / Your flight plan has you on the NASIK TWO departure, but it routes you through embedded thunderstorms. You want a straight-out departure from runway tree four and then direct SEORA. Contact Ulsan Delivery. / Report your situation and make a request.
** 정답 : Ulsan Delivery, HL123. Our flight plan has us on the NASIK TWO departure, but it routes us through embedded thunderstorms. Request a straight-out departure from runway tree four and then direct SEORA.
- **클루에 세 칸이 떠 있어도 원하는 것만 말한다.** 화면은 철자를 주는 것이고, 무엇을 원하는지는 지문이 정한다.
- 요청이 **두 부분**(straight-out + direct SEORA)이다. 하나만 말하면 SID 를 안 받고 어디로 갈지가 빈다.
- `departure` 다 — `arrival` 로 말하면 다른 절차가 된다.

---

**P2B-Q3**
문제 : Ground : HL123, taxi to holding point Alpha tree via Golf and Hotel, hold short of runway tree four. / Record your full readback.
** 정답 : HL123, taxi to holding point Alpha tree via Golf and Hotel, hold short of runway tree four.
- **`hold short of runway tree four` 는 활주로 관련 지시라 반드시 복창한다.** 여기가 가장 자주 빠지는 자리다.
- 홀딩포인트와 경로도 전부 복창한다.
- Q4 에서 "활주로 tree four 앞에 대기 중"이라고 말하려면 이 지시를 적어 둬야 한다.

---

**P2B-Q4**
문제 : You are holding short of runway tree four as instructed. The cabin crew call — the forward left door slide is showing a fault on the cabin panel, and maintenance must look at it before you depart. You are already with Ground. / Report your status and make a request.
** 정답 : Ground, HL123, holding short of runway tree four. The forward left door slide is showing a fault on the cabin panel and maintenance must look at it before we depart. Request taxi back to the stand.
- **이미 교신 중이므로 기관을 새로 호출하지 않는다.** 바로 상태를 보고한다.
- 현재 위치는 **Q3 의 지시에서 나온다.** 위치를 말하지 않으면 지상관제사가 뒤 항공기를 돌릴 수 없다.
- 기능 두 개 : 상태 + 요청. 사유를 빼면 왜 돌아가는지 모른다.

---

**P2B-Q5**
문제 : 🖥 [ Pohang Approach ] / You are being vectored for the ILS runway tree two. The first officer has just noticed that the altimeter setting you were given does not agree with your ATIS printout — the ATIS says one zero one tree and you were given one zero zero tree. You want it checked before you descend any further. Contact Pohang Approach. / Make a confirmation request with a reason.
** 정답 : Pohang Approach, HL123, request confirmation of the altimeter setting. We were given one zero zero tree, but our ATIS says one zero one tree. Confirm the correct setting before we descend any further.
- **고도계는 필수 복창 7항목 중 하나**다. 두 값이 다르면 반드시 확인한다 — 10 헥토파스칼은 약 300피트 차이다.
- **두 값을 나란히 말한다.** "고도계가 이상하다"로는 관제사가 무엇을 확인할지 모른다.
- `request confirmation of ~` — REQUEST + 명사구. 조종사가 확인을 요구할 때는 `CONFIRM` 을 쓴다.
- 이유(강하 전에 필요하다)를 붙여 긴급함을 전한다.

---

**P2B-Q6**
문제 : 🖥 [ Ulsan Tower ] / You landed one minute ago on runway tree six and you are clear of the runway. A tyre on the nose gear is making a loud noise and the aircraft is pulling to the left. You want to stop where you are and be towed in. Contact Ulsan Tower. / Report your status and make a request.
** 정답 : Ulsan Tower, HL123, clear of runway tree six. We have a loud noise from a nose gear tyre and the aircraft is pulling to the left. We are stopping where we are — request towing assistance to the stand.
- 상태 먼저 : **활주로를 벗어났다**는 것을 말해야 관제사가 다음 항공기를 들여보낸다.
- **멈춘다는 것을 먼저 알린다.** 그 말이 없으면 관제사는 계속 유도 지시를 준다.
- `request towing assistance` 가 정해진 표현이다.

---

**P2B-Q7**
문제 : 🖥 [ Daejeon Control / GWANO ] / Two zero miles east of GWANO at flight level tree one zero, a small unmanned aircraft passed about 500 feet below you. There was nothing on your TCAS and you took no avoiding action. You want the controller to know. You need nothing for yourself. Contact Daejeon Control. / Make a report.
** 정답 : Daejeon Control, HL123. Be advised, two zero miles east of GWANO at flight level tree one zero, a small unmanned aircraft passed about 500 feet below us. Nothing was on our TCAS and we took no avoiding action. For information — we require nothing ourselves.
- **순수 보고다.** 지문이 `You need nothing for yourself` 라고 못 박았으므로 **요청을 덧붙이지 않는다.** 보고 뒤에 습관적으로 `request ~` 를 붙이는 것이 흔한 실수다.
- 보고의 네 요소 : **어디서**(GWANO 동쪽 20마일) · **몇 피트에서**(FL310) · **무엇이**(소형 무인기) · **얼마나 가까이**(500피트 아래).
- **TCAS 에 안 떴다는 것과 회피하지 않았다는 것까지** 말한다 — 관제사가 다른 항공기에 경고할 때 필요한 정보이고, 내가 항로를 벗어나지 않았다는 뜻도 된다.
- `Be advised` 로 열고 `for information` 으로 닫으면 요청이 아님이 분명해진다.

---

## 약점 E. 90초 자유응답 — 4문항

**P2C-Q1**
문제 : Follow up question. In this situation the controller asked you for the same two figures twice, and in between them he asked you for a figure that had changed. Which figure had changed, and which had not? In your role as a pilot, how do you lay your notes out so that a figure you have already given can be read back without hunting for it? Give an example.
** 참고 답안 : The figure that had changed was the visibility I needed. At the start I had an autoland, so I could have accepted a much lower figure, but when I lost the second generator the autoland went with it and my minimum became 1,200 metres. The figures that had not changed were my fuel endurance, which was one hour five five minutes, and the number of persons on board, which was one tree two. The controller asked me for those two at the handover to Ulsan, then the new controller asked me for the visibility and the persons on board, and then the fire service asked for the fuel and the persons on board again. So the same two numbers went out three times and had to be identical every time.
In my role as a pilot, I lay the page out so that each figure has one fixed place and I never write it twice. On the right hand side I keep a box with four lines in it — fuel endurance, persons on board, required landing distance, and my limits. The clearance goes on the left in the order the controller gives it. When a figure is replaced I draw one line through the old one and write the new one beside it with the time, so I can see that it moved. Three digit numbers I write with dashes, one tree two rather than 132, because that is how I have to say it and because a dash stops me reading the digits in the wrong order.
An example from this flight is the number of persons on board. One tree two is easy to turn into one two tree under pressure, and I was asked for it three times, twice while I was being vectored. Because it was written once, with dashes, in the same box every time, I read the same three digits out on all three occasions. If I had written it in the margin next to whichever transmission I happened to be on, I would have been reading a different copy each time.
- 3부 구조를 지킨다 : ① 바뀐 값과 안 바뀐 값 ② 메모를 어떻게 배치하는가 ③ 예시 하나.
- ① 에서 **바뀐 것과 안 바뀐 것을 갈라서** 말하는 것이 이 질문의 핵심이다. 둘을 섞어 말하면 질문을 못 읽은 것이 된다.
- ③ 은 `Give an example.` 에 대한 답이므로 반드시 구체적인 한 사례로 닫는다. **10세트 연속 이 부분을 하지 않았다.**
- 60~75초 분량으로 세 부분을 다 채우는 쪽이 90초를 꽉 채우고 ③ 을 빼는 것보다 낫다.

---

**P2C-Q2**
문제 : Follow up question. In this situation you had a limit that was a clock — tree zero minutes on batteries — and you had to turn it down when the controller offered you a long track. How do you explain a limit like that to a controller so that he can work with it? From your own experiences, what happens when a pilot accepts something he has no margin for? Give an example.
** 참고 답안 : A limit that is a clock has to be given to the controller as a number of minutes, not as a description of the fault. If I tell him I am on a single generator he does not know what that costs him; if I tell him I have tree zero minutes on batteries if the second generator fails, and that I will not accept more than one zero minutes of extra track, he has two numbers he can plan with. He can then tell me whether he can do it, and if he cannot he can tell me what he can do. I also say what I want instead in the same transmission, because a refusal on its own leaves him to guess — in this case the shortest routing to the ILS, or a straight-in if he had one.
From my own experience, what happens when a pilot accepts something he has no margin for is that the margin disappears quietly and then everything arrives at once. He accepts the long track, then the approach takes longer than he thought, then he is asked to go around, and now the decision he should have made calmly thirty miles out has to be made in ten seconds with no options left. The problem is not the first acceptance; it is that the second event has nowhere to go. Saying negative early is cheap, and it keeps the decision in the part of the flight where I still have choices.
An example is the downwind in this flight. He offered me a tree zero mile downwind because he had a departure ahead of me. If I had accepted it to be helpful, I would have used most of my tree zero minutes on the approach, and a single go around would have put me outside the figure I had given myself. I said negative, gave him my two numbers, and asked for the shortest routing, and the cost of that was one transmission.
- 질문이 세 부분이다 : 시간 한계를 어떻게 설명하는가 / 여유 없이 수락하면 어떻게 되는가 / 예시.
- 첫 부분은 **"고장 이름이 아니라 분 단위 숫자로 준다"** 가 답의 핵심이다. 관제사는 계통을 모르고 시간은 안다.
- 두 번째는 일반론으로 답한다 — 여유가 사라지는 과정을 순서대로.
- ③ 은 롤플레이의 그 턴(P2A-Q8)을 그대로 쓰면 된다.

---

**P2C-Q3**
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
** 참고 답안 : We were HL123, descending through flight level one niner zero for one four thousand, 50 miles from TOBRA and inbound to Pohang. Our fuel endurance was one hour five five minutes, we had one tree two persons on board, our required landing distance was 2,000 metres and our autoland was serviceable.
On the arrival the controller told us the visibility at Pohang was reducing in mist. Then, passing one two thousand feet, we got a GEN 1 FAULT caption, and because our APU was unavailable we were left on a single generator. The nature of the incident was a loss of electrical redundancy rather than a loss of control: the aircraft flew normally and the remaining generator was working, but it took two things away from us. The autoland went, so we had to fly it by hand and our minimum visibility became 1,200 metres, and we were left with only tree zero minutes on batteries if the second generator failed, so we needed to be on the ground inside tree zero minutes.
That made Pohang unusable. The visibility there was 900 metres, which was tree hundred metres below what we now needed, so we were unable Pohang and asked for Ulsan, which had 4,000 metres and was one five minutes away, inside our time limit. We asked for priority and the shortest routing.
We were turned onto headings for Ulsan and changed to Ulsan Approach, who had none of our figures and asked for the visibility we needed and the persons on board. He then offered us a tree zero mile downwind because of a departure ahead of us, which we were unable because of the time on batteries, and we asked for the shortest routing instead. He later assumed our autoland was back; it was not, so we corrected him. We did not declare an emergency, because the remaining generator was working normally and we had the fuel and a usable airfield, but we asked for the fire service to stand by and for the shortest taxi in, and we landed from the ILS runway tree six.
- 시간 순서로 말한다 : 초기 상태 → 시정 예고 → 사건 → 빼앗긴 두 가지 → 공항 변경 → 핸드오프와 되묻기 → 다운윈드 거절 → 정정 → 착륙 → 비상 선포를 안 한 이유.
- `the nature of the incident` 을 한 문장으로 못 박는다 — **"조종 상실이 아니라 전원 이중화 상실"**.
- **숫자를 넣어야 들은 증거가 된다** : 1,200 · 900 · 4,000 · 15 · 30 · 1시간 55분 · 132.
- 비상을 선포하지 않았다면 **왜 안 했는지**까지 말한다.

---

**P2C-Q4**
문제 : How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
** 참고 답안 : On the whole I think he handled it well. He had already told me the visibility was reducing before anything went wrong, so when my minimum went up to 1,200 metres I already knew Pohang was marginal, and that saved me a question. When I reported the fault he gave me the visibility at both airfields and the time to the second one, and he left the choice to me rather than telling me where to go. That is the right division of work, because only I know what the aircraft needs.
There are two things I would have done differently. The first is the tree zero mile downwind. He offered it because he had a departure ahead of me, which is reasonable, but I had already told him I needed to be on the ground inside tree zero minutes, and the offer did not fit the figure I had given him. If a pilot has given you a clock, the next offer should be measured against it. The second is the assumption about the autoland. He told me he took it that it was back, rather than asking me. If I had been busy flying a manual approach in reducing visibility I might have agreed with him, and he would then have stopped planning for a hand flown approach.
From a pilot's point of view, the handover cost us the most. The new controller had none of my figures, so I gave the visibility and the persons on board again while being vectored, and then the fire service asked for the fuel and the persons on board a third time. Those numbers had been passed twice already. If they had travelled with the coordination, I would have had those two transmissions free at the point where I needed them most. What I would also ask for next time is the runway condition at Ulsan, not only the visibility — flying it by hand with no autoland, I want to know what the surface is like as well as whether I can see it.
- **칭찬 → 개선점 → 조종사 관점** 세 부분이다.
- 개선점은 **구체적 행동**으로 말한다 — 여기서는 **내가 준 시간 한계를 무시한 제안**과 **오토랜드가 복구됐다고 단정한 것** 두 곳이 할 말이 가장 많다.
- 관제사를 비난하지 않는다. 역할 분담(정보는 관제사, 판단은 조종사)의 언어로 말한다.
- 되묻기가 세 번이었던 것을 **핸드오프 조정의 문제**로 짚으면 조종사 관점이 선다.
