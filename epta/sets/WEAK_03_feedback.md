# WEAK_03 모범답안 — 2026-11-06

**채점이 아니다.** 아직 응시 기록이 없고, 요청에 따라 **모범답안만** 붙인 파일이다.
판정(✅⚠️❌)과 등급은 넣지 않았다 — 푼 답이 없으므로 판정할 것이 없다.

`python practice/push.py WEAK_03 --static` 으로 올라가며, **내 답안 보기**
(`/r/?set=WEAK_03`) 화면에서 문항마다 "문제 → 정답"이 보인다. 풀고 난 뒤에는 같은 화면에
내 답안이 왼쪽에 붙는다.

**먼저 풀고 나서 보는 것을 권한다.** 정답을 먼저 보면 이 세트가 겨냥한 세 가지(상한↔하한,
기능 세기, 값 유지)를 측정할 수 없다.

---

## 약점 A. 복창 + α — 10문항

**P1A-Q1**
문제 : 🖥 [ Ravenglass / HOLNE TWO departure ] / Delivery : HL123, cleared to Ravenglass via the HOLNE TWO departure, flight level three one zero, squawk four six two one. / Record your full readback.
** 정답 : HL123, cleared to Ravenglass via the HOLNE TWO departure, flight level three one zero, squawk four six two one.
- 필수 복창 네 요소 : 목적지·SID·고도·squawk. 하나라도 빼면 비행로 허가 복창이 성립하지 않는다.
- **적어 두는 문항이다.** 고도(FL310)와 squawk(4621)를 Q2 에서 다시 말해야 한다. squawk 는 `4-6-2-1` 로 끊어 적는다.

---

**P1A-Q2**
문제 : Dispatch has just told you that at today's weight you cannot reach flight level three one zero until one hour after departure. You want flight level two seven zero first. / Ground : HL123, say again your cleared level and your squawk. / Answer both of his questions, and report what you cannot do with a reason.
** 정답 : HL123, cleared level flight level three one zero, squawk four six two one. Be advised, at today's weight we cannot reach flight level three one zero until one hour after departure. Request flight level two seven zero initially.
- 기능 세 개다 : 두 질문에 답 / 못 하는 것 보고 / 대안 요청. 질문만 답하고 멈추는 것이 이 유형의 전형적 실점이다.
- 두 값은 **Q1 에서 들은 것**이다. 지어내면 안 된다.
- `initially` 를 붙여야 "처음만 270" 이라는 뜻이 전달된다. 빼면 전 구간 270 으로 들린다.

---

**P1A-Q3**
문제 : You are in moderate turbulence. Your turbulence penetration speed is two seven zero knots and you must not go faster than that. / Center : HL123, increase speed to three one zero knots for spacing. / Give a full readback, and tell him what you can do instead.
** 정답 : HL123, increase speed to three one zero knots. Unable three one zero knots — we are in moderate turbulence and our turbulence penetration speed is two seven zero knots, which is our maximum. We can maintain two seven zero knots.
- 복창을 먼저 하고 그다음 UNABLE 이다. 속도는 필수 복창 항목이라 건너뛰면 누락이다.
- **상한**이므로 `our maximum is ~` / `above our limit` 이 맞는 낱말이다. `below our minimum` 은 반대말이다.
- 줄 수 있는 값(270)을 반드시 붙인다. `unable` 만 말하면 관제사는 분리를 다시 짜야 한다.
- `for spacing` 은 이유라서 복창 대상이 아니다.

---

**P1A-Q4**
문제 : Tower : HL123, behind the departing Airbus A330, line up and wait runway two seven, behind. / Record your full readback.
** 정답 : HL123, behind the departing Airbus A330, line up and wait runway two seven, behind.
- 조건부 허가는 **조건을 앞과 뒤에 두 번** 말하는 것이 규정이다(`behind ... behind`). 뒤의 `behind` 를 빼면 조건부 허가 복창이 아니다.
- 조건(어느 항공기 뒤인지)을 빼고 `lining up runway two seven` 만 하면, 관제사는 내가 조건을 못 들었다고 보고 다시 지시해야 한다.
- 활주로 번호는 활주로 관련 지시라 필수다.

---

**P1A-Q5**
문제 : The A330 has departed and you are lined up. The first officer tells you the brake temperature on the left main gear is still above the limit for takeoff and needs two more minutes to cool. / Tower : HL123, wind two four zero at eight, cleared for takeoff runway two seven. / Give a full readback, tell him what you cannot do with a reason, and tell him how long you need.
** 정답 : HL123, holding position — unable takeoff at this time. The brake temperature on our left main gear is still above the limit for takeoff. Request two minutes to let it cool, and we will call you when we are ready.
- **이륙허가를 그대로 복창하지 않는다.** `cleared for takeoff runway two seven` 을 복창하면 활주를 시작한다는 뜻이 된다. 받을 수 없는 허가의 "복창"은 **내가 무엇을 하고 있는지**(holding position)를 분명히 하는 것이다.
- 바람(240/8)은 부가정보라 복창 대상이 아니다. 필수요소만 복창하고 부가정보는 빼는 유형이다.
- 기능 세 개 : 현 상태 / 못 하는 것 + 이유 / 소요시간. 2분을 빼면 관제사가 뒤 항공기를 배치할 근거가 없다.
- `cleared` ↔ `clear` : 들은 말은 `cleared` 다. 6세트 연속 `clear` 로 적고 있다 — 과거분사다.

---

**P1A-Q6**
문제 : 🖥 [ Kinloch Approach / BRAXO ] / You are level at flight level two niner zero, 50 miles from BRAXO, inbound to Kinloch. The senior cabin crew member reports that a passenger has become aggressive and is being held in his seat by two other passengers. There is no fire and no damage. You want the police to meet the aircraft at the stand. Contact Kinloch Approach. / Report your status and make a request.
** 정답 : Kinloch Approach, HL123, level at flight level two niner zero, 50 miles from BRAXO, inbound Kinloch. Be advised, we have an unruly passenger who is being restrained in his seat by two other passengers. There is no fire and no damage. Request the police to meet the aircraft at the stand.
- 발신 문항의 순서 : 기관 → 콜사인 → 고도 → 위치 → 보고 → 요청. 기관을 부르지 않고 시작하는 것이 발신 문항의 첫 감점이다.
- `unruly passenger` 가 표준 표현이다.
- **피해가 없다는 것을 말해야 한다.** 그 말이 없으면 관제사는 비상으로 취급하고 소방대를 부른다.
- 기능 두 개 : 보고 + 요청. 상황만 말하고 요청을 빼면 절반이다.

---

**P1A-Q7**
문제 : The passenger is still restrained and the crew are managing him, so you are willing to go to a normal stand. You have three people involved — the passenger and the two holding him. / Approach : HL123, roger, descend to one one thousand, turn right heading zero two zero, vectors for Kinloch. How many people are involved, and do you need us to keep you away from the terminal? / Give a full readback, and answer both of his questions.
** 정답 : HL123, descend to one one thousand, turn right heading zero two zero. Three people are involved — the passenger and the two holding him. Negative, we do not need to be kept away from the terminal; a normal stand is acceptable with the police meeting us.
- 필수 복창 두 요소 : 고도·기수. `vectors for Kinloch` 는 복창 의무가 없다.
- 질문이 두 개면 **두 개 다** 답한다. 숫자 질문에는 숫자로, 가부 질문에는 **NEGATIVE** 로.
- 두 번째 질문에 `no` 를 쓰면 표준교신용어 오류다.
- 상황은 이미 Q6 에서 보고했으므로 증상을 다시 설명하지 않는다. 관제사의 `roger` 가 그 신호다.

---

**P1A-Q8**
문제 : Approach : HL123, cross BRAXO at or below flight level one five zero, reduce speed to two five zero knots. / Record your full readback.
** 정답 : HL123, cross BRAXO at or below flight level one five zero, reduce speed to two five zero knots.
- **`at or below` 를 빼면 다른 제한이 된다.** 고도 제한은 값만이 아니라 **방향**까지 복창한다. `at or above` 와 한 글자 차이로 뜻이 반대다.
- 속도도 필수 복창 항목이다.
- Q9 에서 이 제한을 그대로 꺼내 말해야 한다.

---

**P1A-Q9**
문제 : You are passing flight level one niner zero and your present descent profile will put you at flight level one seven zero at BRAXO. You need descent now to make the restriction. / Approach : HL123, say again your present level. / Answer his question, tell him what you were told to do at BRAXO, and tell him what you need.
** 정답 : HL123, passing flight level one niner zero. We were told to cross BRAXO at or below flight level one five zero, and on our present profile we will be at flight level one seven zero at BRAXO. Request descent now to make the restriction.
- 기능 세 개 : 현재고도 / 받은 제한 / 필요한 것.
- 현재고도의 동사는 **현재 상태**다 — `passing`. `maintain one niner zero` 로 말하면 지시 복창처럼 들린다.
- 받은 제한(`at or below FL150`)은 **Q8 에서 적어 둔 것**이다. 이것을 말하지 않으면 관제사는 내가 무엇을 못 맞추는지 모른다.
- 두 숫자(150 필요 ↔ 170 예상)를 나란히 말하면 이유가 성립한다.

---

**P1A-Q10**
문제 : 🖥 [ Barnsdale Tower ] / Your company minimum for this approach is an RVR of 600 metres. The fog is forecast to lift within the next two zero minutes and you want to hold for one five minutes rather than divert. / Tower : HL123, Barnsdale RVR runway two seven is 500 metres. Say your intentions. / Respond with a reason, and say what you want.
** 정답 : HL123, the RVR is 500 metres and our company minimum for this approach is 600 metres, so it is below our minimum. Our intentions are to hold — request one five minutes in the hold. The fog is forecast to lift within two zero minutes.
- **RVR 은 하한이다.** 500 은 600 **미만**이므로 `below our minimum` 이다. `over our limit`(초과)은 반대말이고, 그것은 측풍·무게·속도처럼 **상한**이 있는 값에 쓴다.
- 두 숫자(500 · 600)를 다 말해야 이유가 선다.
- 목표값(15분)을 준다. `we will wait and see` 는 관제사가 쓸 수 없는 답이다.
- 이미 Tower 가 나를 호출했으므로 기관명을 다시 부를 필요는 없다. 클루는 철자 참고용이다.

---

## 약점 B. 상한·하한 — 8문항

**P1B-Q1**
문제 : Your maximum approach speed at today's landing weight is one six zero knots. / Approach : HL123, maintain one eight zero knots to four miles. Can you do that?
** 정답 : Negative, HL123. Unable one eight zero knots — our maximum approach speed at today's landing weight is one six zero knots. We can maintain one six zero knots to four miles.
- `Can you do that?` 는 가부 질문이다 → **첫 단어가 NEGATIVE** 다.
- **상한 초과**다. 180 은 최대 160 보다 빠르므로 불가.
- 두 숫자 + 줄 수 있는 값. 세 가지가 다 있어야 완성이다.

---

**P1B-Q2**
문제 : Your maximum tailwind for takeoff is one zero knots. / Tower : HL123, runway zero niner, wind two seven zero at eight. Can you accept?
** 정답 : Affirm, HL123. Our maximum tailwind for takeoff is one zero knots and the wind two seven zero at eight gives us eight knots of tailwind, so runway zero niner is acceptable.
- **상한이어도 이내면 수락이다.** 8 ≤ 10. "최대"라는 말만 보고 거부하지 않는다 — 이 세트가 거부 문항과 수락 문항을 섞어 낸 이유다.
- 활주로 09 는 기수 090 이고 바람은 270 에서 오므로 정배풍 8노트다.
- 수락할 때도 **두 숫자**를 말한다. `Affirm` 하나로 끝내면 관제사는 내 한계를 모른다.

---

**P1B-Q3**
문제 : The shortest runway you can use at today's landing weight is 2,600 metres. / Approach : HL123, runway three two has 2,300 metres available. Can you take it?
** 정답 : Negative, HL123. Unable runway three two — 2,300 metres available is below the 2,600 metres we need at today's landing weight. Request a runway with at least 2,600 metres available.
- **하한 미만**이므로 `below` 다.
- `available`(활주로가 주는 값) ↔ `we need` / `required`(내 값)를 구분해 말한다. 두 낱말을 섞으면 뜻이 정반대가 된다.
- 거부만 하지 말고 **필요값**을 준다.

---

**P1B-Q4**
문제 : Your required landing distance today is 2,100 metres. You have no reason to stay airborne. / Approach : HL123, runway two seven has 2,300 metres available, and it saves you one one minutes. Can you take it?
** 정답 : Affirm, HL123. Our required landing distance is 2,100 metres and 2,300 metres available is sufficient, so we will take runway two seven. It saves us one one minutes.
- 2,300 ≥ 2,100 이므로 수락이다. **여유가 적다고 거부하지 않는다** — 필요값을 넘으면 충분하다.
- **`saves you` 는 단축이다 — 지연이 아니다.** `we can accept the one one minute delay` 로 답하면 관제사가 말한 것과 반대로 읽은 것이다.

---

**P1B-Q5**
문제 : 🖥 [ HOLNE ] / Center : HL123, maintain Mach decimal seven eight or greater until HOLNE. / Record your full readback.
** 정답 : HL123, maintain Mach decimal seven eight or greater until HOLNE.
- **`or greater` 를 빼면 하한이 사라진다.** 숫자만 복창하면 "그 값으로 유지"로 들린다.
- 조건(`until HOLNE`)도 복창한다.
- Q6 에서 이 값을 꺼내야 비교가 성립한다. 메모에 `min M.78` 로 적는다 — 숫자만 적지 말고 **낱말을 같이** 적는다.

---

**P1B-Q6**
문제 : At your present weight and temperature your maximum cruise Mach number is Mach decimal seven six. / Center : HL123, confirm you can maintain that Mach number until HOLNE?
** 정답 : Negative, HL123. Unable Mach decimal seven eight or greater — at our present weight and temperature our maximum cruise Mach number is Mach decimal seven six. We can maintain Mach decimal seven six until HOLNE.
- **이 세트에서 가장 어려운 문항이다.** 관제사는 **하한**(.78 이상)을 요구하고 나는 **상한**(.76)을 갖고 있다. 두 제한의 방향이 반대이고, .76 < .78 이므로 불가다.
- `confirm ~?` 이므로 첫 단어는 **NEGATIVE** 다. `AFFIRM` 으로 답하면 내가 할 수 없는 것을 하겠다고 약속한 것이 된다.
- 비교 대상(.78 or greater)은 **Q5 에서 적어 둔 것**이다. 그것 없이는 왜 불가인지 설명할 수 없다.
- 줄 수 있는 값(.76)을 준다.

---

**P1B-Q7**
문제 : Your maximum crosswind on a contaminated runway is one five knots. The runway is contaminated with slush. Runway zero eight is clear of slush and into wind, but it is eight minutes of taxi back. / Tower : HL123, runway one four, wind zero eight zero at two zero. Say your intentions. / Respond accordingly with a reason, and say what you want.
** 정답 : HL123, unable runway one four. The runway is contaminated with slush and our maximum crosswind on a contaminated runway is one five knots — the wind zero eight zero at two zero gives us about one seven knots of crosswind, which is above our limit. Our intentions are runway zero eight: it is clear of slush and into wind. Request taxi back for runway zero eight, we accept the eight minutes.
- 여기는 **상한**이므로 `above our limit` 이 맞는 낱말이다 — Q3·Q6 의 `below our minimum` 과 짝으로 외운다. **어느 쪽 낱말을 쓰는지가 이 섹션의 핵심이다.**
- 활주로 14 는 기수 140, 풍향 080 이라 60° 측풍이다. 성분이 한계를 넘는다는 것만 말하면 되고 계산을 읊을 필요는 없다.
- `Say your intentions` 이므로 **거부 + 내가 할 것** 둘 다 필요하다. 거부만 하면 절반이다.
- 늘어나는 시간을 수락한다고 말한다.

---

**P1B-Q8**
문제 : 🖥 [ Barnsdale / Haverly ] / Your required landing distance is 2,000 metres. You have a passenger with a suspected stroke and you want to be on the ground as soon as you can. / Approach : HL123, Barnsdale runway two two has 2,400 metres but you'd be two two minutes. Haverly has 3,000 metres, nine minutes. What would you like? / Respond accordingly with a reason, and say what you want.
** 정답 : HL123, we would like Haverly. Our required landing distance is 2,000 metres, so both runways are sufficient, but we have a passenger with a suspected stroke and Haverly is one three minutes sooner. Request routing to Haverly and an ambulance to meet us on arrival.
- 거리는 **양쪽 다 충족**한다(2,400 · 3,000 ≥ 2,000). 그러므로 거리가 아니라 **시간**이 판단 근거다. "둘 다 충분하다"까지 말하고 시간을 근거로 대야 이유가 완성된다.
- 차이를 숫자로 말한다 — 22 − 9 = 13분.
- 의료 상황이면 구급차 요청을 같이 붙인다.
- 선택 질문이므로 `AFFIRM/NEGATIVE` 를 쓰지 않는다. 어느 쪽인지 말한다.

---

## 약점 C. 값 유지 — 10턴

**P2A-Q1**
문제 : [Initial Situation] level at flight level two three zero, 55 miles from TURLO, inbound Kinloch. Fuel endurance two hours two zero minutes, one five seven persons on board, required landing distance 2,000 metres, maximum speed with present flap setting two five zero knots. / 🖥 [ Kinloch Approach / TURLO ] / ☞ Contact Kinloch Approach, report your position and level, and request descent.
** 정답 : Kinloch Approach, HL123, level at flight level two three zero, 55 miles from TURLO, inbound Kinloch. Request descent.
- 기능 세 개 : 기관 호출 / 위치와 고도 / 강하 요청. 세 번째를 `request inbound` 같은 말로 바꾸면 요청이 아니라 통보가 된다.
- 현재 상태 동사 `level at`. 픽스가 주어졌으므로 거리와 픽스로 위치를 말한다.
- **Initial Situation 의 네 숫자를 지금 적어 둔다** — 연료 2시간 20분 · 인원 **1-5-7** · 필요거리 2,000 · 최대속도 250. 네 개가 모두 뒤에서 쓰인다. 인원은 세 자리를 끊어 적어야 뒤집히지 않는다.

---

**P2A-Q2**
문제 : 🖥 [ BRAXO ONE arrival ] / ☞ Listen to the controller, give a full readback, and inquire about the landing distance available. / Approach : HL123, Kinloch Approach, descend to one one thousand, expect the BRAXO ONE arrival, ILS runway two seven. Be advised, there is work in progress at the far end of the runway.
** 정답 : HL123, descend to one one thousand, expect the BRAXO ONE arrival, ILS runway two seven. Request the landing distance available on runway two seven with the work in progress.
- 필수 복창 세 요소 : 고도·arrival·활주로. `work in progress` 는 정보라 복창 의무가 없다.
- `request the landing distance available` — **REQUEST + 명사구**이고, 여기서는 **available** 이 맞는 낱말이다(내 쪽 값은 required).
- 공사가 있다고 들었을 때 **가용 거리를 먼저 묻는 것**이 올바른 순서다. 묻지 않으면 Q4 에서 비교할 숫자가 없다.

---

**P2A-Q3**
문제 : [Situation Update] Passing one three thousand feet you get a STABILIZER TRIM JAM caption. The trim is stuck and your flaps are now limited to one five. Your required landing distance is now 2,900 metres, and you must not exceed one niner zero knots from now on. You want to level off at one one thousand and you want a long final so that you can fly it slowly. / ☞ Report your problem to the controller, tell him both things that have changed, and make a request with a reason.
** 정답 : HL123, we have a STABILIZER TRIM JAM caption — the trim is stuck and our flaps are limited to one five. Two things have changed: our required landing distance is now 2,900 metres instead of 2,000, and our maximum speed is now one niner zero knots instead of two five zero. Request to level off at one one thousand and a long final, so that we can slow down and configure early.
- 기능 세 개 : 문제 / **바뀐 값 두 개** / 요청 + 이유. 두 번째가 이 세트의 축이다.
- **`A 에서 B 로` 로 말한다.** `2,900 instead of 2,000` 처럼 전후를 같이 말하면 관제사도 값이 움직인 것을 안다. 새 값만 말하면 그가 받아 적은 옛 값이 남는다.
- 사건명을 그대로 말한다 — `STABILIZER TRIM JAM`. 증상(`flaps limited`)만 말하면 원인을 알 수 없다.
- 적어 둔 2,000 과 250 을 **지우지 말고 옆에 2,900 · 190 을 쓴다.** 뒤에서 두 번 더 쓴다.

---

**P2A-Q4**
문제 : 🖥 [ Kinloch / Ravenglass / landing distance available ] / ☞ Listen to the controller, state your decision with a reason, and tell him the figure you need. / Approach : HL123, with the work in progress Kinloch runway two seven gives you 2,700 metres. Ravenglass has 3,200 metres and it's one three minutes away. What would you like?
** 정답 : HL123, unable Kinloch — we now require 2,900 metres and runway two seven gives us only 2,700. Request diversion to Ravenglass: 3,200 metres is sufficient and we accept the one three minutes.
- **갱신된 2,900 으로 비교해야 한다.** 처음 적어 둔 2,000 으로 비교하면 2,700 이 충분해 보이고 판단이 뒤집힌다 — 이 세트가 노리는 바로 그 지점이다.
- 거부 대상(Kinloch)과 필요값(2,900)을 둘 다 말한다. 어느 쪽을 거부하는지 말하지 않으면 관제사가 되묻는다.
- 늘어나는 시간을 수락한다고 말한다.

---

**P2A-Q5**
문제 : ☞ Listen to the controller and provide the requested information. / Approach : HL123, roger, I'm coordinating with Ravenglass. Say your fuel endurance and the number of persons on board.
** 정답 : HL123, fuel endurance two hours two zero minutes, one five seven persons on board.
- 네 턴 전 Initial Situation 의 값이다. 짐작해서 바꿔 말하면 안 된다.
- 인원 **157** 은 세 자리라 뒤집히기 쉽다. `1-5-7` 로 끊어 적고 끊어 읽는다.
- 묻지 않은 것을 덧붙이지 않는다. 두 값만 짧게.

---

**P2A-Q6**
문제 : 🖥 [ Ravenglass Approach ] / ☞ Listen to the controller, give a full readback and say your intentions. / Approach : HL123, turn left heading two eight zero, descend to 9,000 feet, vectors for Ravenglass, contact Ravenglass Approach on 125.25. Say your intentions.
** 정답 : HL123, turn left heading two eight zero, descend to 9,000 feet, contact Ravenglass Approach on 125.25. Our intentions are to divert to Ravenglass and fly a fully configured ILS to the longer runway, slowly. We request a long final because of our speed limit, and the fire service standing by as a precaution.
- 필수 복창 세 요소 : 기수·고도·**주파수**. 주파수를 빼면 필수 복창 누락이다.
- intentions 는 **내가 할 것**(Ravenglass 로 divert, ILS) + **필요한 지원**(긴 파이널, 소방대)이다. 요청만 말하면 intentions 진술이 아니다.
- `Our intentions are to ~` 로 명시해 연다.

---

**P2A-Q7**
문제 : ☞ You are now with a new controller who has none of your figures. Listen to him and answer both of his questions. / Approach : HL123, Ravenglass Approach, radar contact. I've got nothing on you — say the landing distance you need and the number of persons on board.
** 정답 : Ravenglass Approach, HL123, the landing distance we require is 2,900 metres and we have one five seven persons on board.
- **되묻기 함정.** 필요거리는 중간에 2,000 → 2,900 으로 바뀌었다. 여기서 2,000 을 말하면 새 관제사의 브리핑이 틀어진다.
- 인원은 **바뀌지 않았다** — 157 그대로. **바뀐 값은 바꿔 말하고, 안 바뀐 값은 그대로 말하는 것**을 구분하는 문항이다.
- 새 관제사는 앞의 교신을 못 들었다. 되묻는 것이 당연하므로 "방금 말했는데요"가 아니라 그냥 다시 준다.

---

**P2A-Q8**
문제 : ☞ Listen to the controller, give a full readback, and tell him whether you can do that with a reason. / Approach : HL123, turn right heading three four zero, descend to 5,000 feet, reduce speed to two one zero knots until eight miles. Can you do that speed?
** 정답 : HL123, turn right heading three four zero, descend to 5,000 feet. Negative on the speed — unable two one zero knots. With the trim jammed our maximum is one niner zero knots. We can maintain one niner zero knots until eight miles.
- 복창(기수·고도)을 먼저 하고, 받을 수 없는 속도만 따로 거부한다. 전부 복창해 버리면 210 을 하겠다는 뜻이 된다.
- 가부 질문이므로 **NEGATIVE** 다.
- **210 은 190 보다 빠르다.** 느린 쪽이 한계라는 것을 뒤집지 않는다 — 이 세트의 Q3 에서 적어 둔 상한이다.
- 줄 수 있는 값(190)을 조건(`until eight miles`)과 함께 준다.

---

**P2A-Q9**
문제 : [Situation Update] The trim is still jammed and the flaps are still limited to one five. Nothing has changed. / ☞ Listen to the controller and answer both of his questions. / Approach : HL123, you've been working on it for a while now, so I take it the trim has freed up. Is that right, and do you still need the full length?
** 정답 : Negative, HL123. The trim is still jammed and the flaps are still limited to one five, so nothing has changed. And affirm, we still need the full length — our required landing distance is still 2,900 metres.
- **첫 단어가 NEGATIVE 다.** 그의 추정("풀렸겠지요")이 사실이 아니다. 내용을 뒤에서 정정해도 첫 단어가 `Affirm` 이면 그가 자기 그림을 지우지 않는다.
- **두 질문의 답이 서로 반대 방향**이라는 것이 이 문항의 함정이다 — 첫 질문은 NEGATIVE, 두 번째는 AFFIRM. 하나의 판정어로 둘을 덮으려 하면 틀린다.
- 두 번째 답에 숫자(2,900)를 붙여야 Tower 가 활주로를 비워 둔다.

---

**P2A-Q10**
문제 : 🖥 [ Ravenglass Tower ] / ☞ Listen to the controller, give a full readback, and say what you will need on the runway. / Approach : HL123, turn left heading zero one zero, descend to 2,500 feet until established, cleared for the ILS runway two two approach, contact Ravenglass Tower on 118.30.
** 정답 : HL123, turn left heading zero one zero, descend to 2,500 feet until established, cleared for the ILS runway two two approach, contact Ravenglass Tower on 118.30. We will need the full length of the runway and the fire service standing by. Our landing roll will be long, so request a late turn-off.
- 필수 복창 다섯 요소 : 기수·고도·**`until established`**·접근 허가·주파수. `until established` 를 빼면 조건을 지운 복창이다.
- `cleared` 다 — `clear` 로 쓰면 6세트째 같은 오류다.
- 활주로에서 필요한 것 : 전장 사용 / 소방대 / 늦은 이탈. **활주 거리가 길어진다는 의도**를 빼면 관제사가 다음 착륙기를 그대로 들여보낸다.

---

## 약점 D. 발신 — 7문항

**P2B-Q1**
문제 : 🖥 [ Marlow Control / TURLO ] / You are level at flight level three five zero. Your number two tank is feeding more slowly than planned and you will land at Kinloch one zero minutes short of your planned reserve. You want a direct routing to TURLO to get the fuel back. Contact Marlow Control. / Report your situation and make a request.
** 정답 : Marlow Control, HL123, level at flight level three five zero. Our number two tank is feeding more slowly than planned and we will land at Kinloch one zero minutes short of our planned reserve. Request direct TURLO to recover the fuel.
- 기능 두 개 : 상황 보고 + 요청. 상황을 빼면 관제사가 왜 직항이 필요한지 모른다.
- `request direct TURLO` — 명사구다. `request to go direct` 는 틀린 형태다.
- 20초다. 기관 → 콜사인 → 고도 → 상황 한 문장 → 요청 한 문장으로 끝낸다.

---

**P2B-Q2**
문제 : 🖥 [ Kinloch Delivery / CASTO THREE departure / HOLNE TWO departure ] / Your flight plan has you on the CASTO THREE departure, but there is a line of thunderstorms sitting on the CASTO THREE track. The HOLNE TWO departure is four minutes longer and stays clear of it. You want the HOLNE TWO. Contact Kinloch Delivery. / Report your situation and make a request.
** 정답 : Kinloch Delivery, HL123. There is a line of thunderstorms on the CASTO THREE departure track. Request the HOLNE TWO departure instead — we accept the four extra minutes.
- **클루에 두 절차가 떠 있어도 원하는 하나만 말한다.** 화면의 칸은 철자를 주는 것이고, 무엇을 원하는지는 지문이 정한다. 둘을 같이 말하면 관제사는 무엇을 줘야 할지 모른다.
- `departure` 다 — 출발 절차를 `arrival` 이라고 말하면 다른 절차를 받는다.
- 늘어나는 4분을 수락한다고 말한다.

---

**P2B-Q3**
문제 : Ground : HL123, taxi to holding point Quebec two via Mike and Papa, give way to the Boeing 787 crossing ahead of you. / Record your full readback.
** 정답 : HL123, taxi to holding point Quebec two via Mike and Papa, give way to the Boeing 787 crossing ahead of us.
- 유도 지시의 세 요소를 다 복창한다 : 홀딩포인트·경로·양보 대상.
- `ahead of you` → 내가 말할 때는 **`ahead of us`** 로 바꾼다. 복창은 앵무새처럼 되풀이하는 것이 아니라 내 입장으로 바꿔 말하는 것이다.
- Q4 에서 "Papa 접근 중"이라고 말하려면 이 경로를 적어 둬야 한다.

---

**P2B-Q4**
문제 : You have given way to the 787 and you are approaching Papa. The ground crew call you on the interphone — a panel on the left engine cowl was left unlatched and they have only just seen it. You must go back to the stand. You are already with Ground. / Report your status and make a request.
** 정답 : Ground, HL123, approaching Papa. The ground crew have just told us that a panel on the left engine cowl was left unlatched. Request taxi back to the stand.
- **이미 교신 중이므로 기관을 새로 호출하지 않는다.** `Contact Ground` 가 아니라 바로 상태를 보고한다.
- 현재 위치(Papa)는 **Q3 의 경로에서 나온다.** 위치를 말하지 않으면 지상관제사가 경로를 다시 짤 수 없다.
- 기능 두 개 : 상태 + 요청. 사유(미잠금 패널)를 빼면 왜 돌아가는지 모른다.

---

**P2B-Q5**
문제 : 🖥 [ Ravenglass Approach ] / You are being vectored for the ILS runway two two at Ravenglass. Your weather radar has just failed, and there are build-ups on the final approach track that you can no longer see. You want the controller to give you headings around the worst of them. Contact Ravenglass Approach. / Report your status and make a request with a reason.
** 정답 : Ravenglass Approach, HL123. Our weather radar has failed and we can no longer see the build-ups on the final approach track. Request headings to avoid the worst of the weather.
- 기능 세 개 : 상태 / 요청 / 이유. **레이더 고장을 말하지 않으면** 왜 관제사가 날씨를 피해 줘야 하는지 알 수 없다 — 보통은 조종사가 자기 레이더로 피한다.
- `request headings to avoid ~` — 명사구다.

---

**P2B-Q6**
문제 : 🖥 [ Barnsdale Tower ] / You landed two minutes ago and you are clear of runway one four. During the landing roll you felt a heavy vibration through the rudder pedals and you think you have a flat tyre on the left main. You do not want to taxi any further until it has been looked at. Contact Barnsdale Tower. / Report your status and make a request.
** 정답 : Barnsdale Tower, HL123, clear of runway one four. During the landing roll we had a heavy vibration through the rudder pedals and we suspect a flat tyre on the left main gear. Request an inspection where we are, before we taxi any further.
- 상태 먼저 : **활주로를 벗어났다**는 것을 말해야 관제사가 다음 항공기를 들여보낸다.
- `suspect` 를 쓴다 — 확인되지 않은 것을 단정하지 않는다.
- **움직이지 않겠다는 의도**를 분명히 한다. 그 말이 없으면 관제사는 계속 유도 지시를 준다.

---

**P2B-Q7**
문제 : 🖥 [ Marlow Control / TURLO ] / You are one five miles from TURLO at flight level three one zero. You can see a column of smoke rising from a hillside about five miles left of your track, and there is no airfield there. You want the controller to pass it to the rescue services. You need nothing for yourself. Contact Marlow Control. / Make a report.
** 정답 : Marlow Control, HL123, one five miles from TURLO at flight level three one zero. Be advised, we can see a column of smoke rising from a hillside about five miles left of our track, and there is no airfield there. For the rescue services — we require nothing ourselves.
- **순수 보고다.** 지문이 `You need nothing for yourself` 라고 못 박았으므로 **요청을 덧붙이지 않는다.** 보고 뒤에 습관적으로 `request ~` 를 붙이는 것이 흔한 실수다.
- 보고에는 **내 위치·고도·무엇을 봤는지·어디서** 가 다 있어야 한다. "연기를 봤다"만으로는 구조대가 갈 곳을 모른다.
- `Be advised` 로 열고, 공항이 아니라는 것까지 말한다 — 그래야 관제사가 항공기 사고로 오판하지 않는다.

---

## 약점 E. 90초 자유응답 — 4문항

**P2C-Q1**
문제 : Follow up question. In this situation, two of your figures changed and one of them came back a second time. Which figures changed, and what did you have to compare them with? In your role as a pilot, what do you write down when a figure is replaced, so that the old one cannot come out of your mouth later? Give an example.
** 참고 답안 : Two of my figures changed when I got the stabilizer trim jam. The landing distance I required went up from 2,000 metres to 2,900 metres, because with the flaps limited to one five my approach speed was higher, and my maximum speed came down from two five zero knots to one niner zero knots. I had to compare the first one with the landing distance available on the runway the controller offered me, which was 2,700 metres at Kinloch with the work in progress and 3,200 metres at Ravenglass. I had to compare the second one with the speed he asked me to maintain, which was two one zero knots.
In my role as a pilot, when a figure is replaced I do not erase the old one. I cross it out with one line and write the new one next to it, with the time beside it, so the page shows me that the figure moved and which way it moved. I keep all the performance figures in one box on the right of my pad — fuel endurance, persons on board, required landing distance, speed limits — so there is only one place to look when a controller asks, and I read from the box rather than from memory. The reason I keep the old figure visible instead of rubbing it out is that it tells me a change happened; if the page is clean I cannot tell whether the number was always 2,900.
An example from this flight is the landing distance. The controller at Ravenglass took me over and had none of my figures, and he asked for the landing distance I needed. The first number on my page was 2,000 metres and the live number was 2,900 metres. Because the old one was crossed out and the new one was next to it with the time, I gave him 2,900 straight away. If I had given him 2,000 he would have offered me Kinloch again, and 2,700 metres would have looked acceptable when it was two hundred metres short.
- 3부 구조를 지킨다 : ① 바뀐 두 값과 **비교 대상** ② 값이 바뀔 때 적는 방법 ③ 예시 하나. 셋 중 하나를 빼면 질문의 일부를 답하지 않은 것이다.
- ① 은 **전후 숫자와 비교 대상**까지 말한다. "값이 바뀌었다"로 뭉개면 답이 아니다.
- ③ 은 `Give an example.` 에 대한 답이므로 반드시 구체적인 한 사례로 닫는다. **10세트 연속 이 부분을 하지 않았다.**
- 90초를 다 쓰려 하지 않는다. 60~75초 분량으로 세 부분을 다 채우는 쪽이 낫다.

---

**P2C-Q2**
문제 : Follow up question. In this situation, the controller assumed your problem had been fixed when it had not. Why is it dangerous to let an assumption like that stand, even for one transmission? From your own experiences, how do you tell a controller that nothing has changed without sounding as though you are repeating yourself? Give an example.
** 참고 답안 : It is dangerous because the controller stops planning for the problem the moment he believes it has gone. He told me he took it that the trim had freed up, and if I had said affirm he would have taken the full length of the runway away from me, cancelled the fire service and put another aircraft behind me on a short final. None of those decisions are easy to undo once he has made them. Even one transmission matters, because in that one transmission he may hand me over to the tower, and the tower will then be working from a picture I have never corrected.
From my own experience, the way I tell a controller that nothing has changed is to give him the state and the figure in one short sentence instead of repeating the whole story. I start with negative so he knows immediately that his assumption is wrong, then I say what the condition still is, and then I give him the one number he needs — for example, negative, the trim is still jammed, we still require 2,900 metres. That is three pieces of information and it takes about five seconds. It does not sound like repetition because I am not telling him what happened again; I am telling him what is true now, and the figure is the part he has to write down.
An example is this flight. He asked me two things in one transmission — whether the trim had freed up, and whether I still needed the full length. The answers went in opposite directions: negative to the first and affirm to the second. If I had answered with one word I would have been wrong on one of them. I answered each one separately and put the figure on the second, and he kept the long runway and the fire service for me.
- 질문이 세 부분이다 : 왜 위험한가 / 바뀌지 않았음을 말하는 방법 / 예시.
- 첫 부분은 **관제사가 그 믿음으로 무엇을 할 뻔했는지**로 답한다(전장 회수·소방대 취소·후속기 투입). 그것이 "왜 위험한가"의 답이다.
- 두 번째는 자기 방법을 구체적으로 말한다. `I am careful` 류는 답이 아니다.
- ③ 에서 **두 질문의 답이 반대 방향이었다**는 점을 쓰면 가장 좋은 예시가 된다.

---

**P2C-Q3**
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
** 참고 답안 : We were HL123, level at flight level two three zero, 55 miles from TURLO and inbound to Kinloch. Our fuel endurance was two hours two zero minutes, we had one five seven persons on board, our required landing distance was 2,000 metres and our maximum speed with the flap setting we had was two five zero knots.
On the descent, passing one three thousand feet, we got a STABILIZER TRIM JAM caption. The trim was stuck and that limited our flaps to one five. The nature of the incident was a flight control restriction rather than a failure: the aircraft was controllable and nothing was unserviceable in the engines or the systems, but it changed our numbers. With the flaps limited our approach speed was higher, so the landing distance we required went up from 2,000 metres to 2,900 metres, and we could no longer exceed one niner zero knots.
That made our destination unusable. There was work in progress at the far end of Kinloch runway two seven, which left 2,700 metres available, two hundred metres less than we needed, so we were unable Kinloch and asked for Ravenglass, which had 3,200 metres and was one three minutes away. We asked to level off at one one thousand and for a long final so that we could slow down and configure early.
From there it was handled as a normal diversion. We were turned onto headings for Ravenglass, changed to Ravenglass Approach, who had none of our figures and asked again for the landing distance we required and the persons on board. He then offered us two one zero knots, which we were unable, and we gave him one niner zero. Later he assumed the trim had freed up; it had not, so we corrected him and confirmed we still needed the full length. We were vectored onto the ILS for runway two two and landed with the fire service standing by. We did not declare an emergency, because the aircraft was controllable and we had the fuel and a long enough runway.
- 시간 순서로 말한다 : 초기 상태 → 사건 → 바뀐 값 → 공항 변경 → 핸드오프와 되묻기 → 속도 거절 → 정정 → 착륙 → 비상 선포를 안 한 이유.
- `the nature of the incident` 을 한 문장으로 못 박는다 — "고장이 아니라 조종 제한, 그 결과는 착륙성능 문제".
- **숫자를 넣어야 들은 증거가 된다** : 2,000 · 2,900 · 2,700 · 3,200 · 250 · 190 · 157.
- 비상을 선포하지 않았다면 **왜 안 했는지**까지 말한다. 이것이 pilot's judgement 로 평가되는 부분이다.

---

**P2C-Q4**
문제 : How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
** 참고 답안 : On the whole I think he handled it well. When I reported the caption and the two figures that had changed, he did not tell me which airport to use. He gave me the landing distance available at Kinloch with the work in progress, the distance at Ravenglass and the time to get there, and he left the decision with me. That is the right division of work, because the landing performance calculation is mine and only I know what the aircraft needs. He also accepted my speed without arguing when I told him one niner zero knots was our maximum.
There are two things I would have done differently. The first is the assumption about the trim. He told me he took it that the trim had freed up, rather than asking me what the trim was doing. If I had been busy configuring at that moment I might have agreed with him, and a question is safer than an assumption when the answer changes what he does next. The second is the handover to Ravenglass. The new controller had none of my figures, so I had to give the landing distance and the persons on board a second time while I was being vectored and descending, which is our highest workload. Those two numbers had already been passed once and should have gone across in the coordination.
From a pilot's point of view, what helped most was that he gave me the gradient of the problem early — the work in progress was mentioned before I needed it, so when my required distance went up I already knew that Kinloch was marginal. What I would ask for next time is the braking action at Ravenglass, not only the distance available. With a high approach speed and a long landing roll, the distance alone does not tell me whether I can stop.
- **칭찬 → 개선점 → 조종사 관점** 세 부분이다. "잘했다"로만 끝내면 질문의 둘째·셋째를 버린 것이다.
- 개선점은 **구체적 행동**으로 말한다 — 여기서는 **트림이 풀렸다고 단정한 것**과 **핸드오프 때 수치가 넘어가지 않은 것** 두 곳이 할 말이 가장 많다.
- 관제사를 비난하지 않는다. 역할 분담(정보는 관제사, 판단은 조종사)의 언어로 말한다.
