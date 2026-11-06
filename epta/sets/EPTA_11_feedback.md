# EPTA_11 채점 결과 — 2026-11-03 (음성 응시)

**최종 등급 : Level 2 (불합격, 6세트 연속)**
✅ 6 · ⚠️ 13 · ❌ 11 · 무응답 3 (P2A-Q4, P2C-Q1, P2C-Q2)

## 채점 근거에 대한 고지

- 채점은 `CLAUDE.md` §6-0 에 따라 **로컬 `large-v3-turbo` 전수 재전사**를 근거로 했다.
  숫자로 판정이 갈리는 10문항은 `large-v3` 로 교차 확인했다
  (`practice/results/EPTA_11_cross.md`).
- **두 모델이 어긋난 2문항은 응시자에게 유리하게 인정했다.**
  - P1B-Q1 : turbo 가 떨어뜨린 첫 단어를 large-v3 가 `Negeri` 로 잡았다 → **`Negative` 를
    말한 것으로 인정.**
  - P1B-Q6 : large-v3 만 `ILS Mir departure, Hotel Lima one two three` 를 잡았다 →
    **기관 호출 + 콜사인을 한 것으로 인정.**
- **P1B-Q6 은 응시 후에 문항을 교체했다.** 응시 시각은 17:02~17:34, 수정 시각은 17:41 이다.
  따라서 **실제로 들으신 발신형 버전** 기준으로 채점했다.
- 전사본은 발화를 그대로 받아쓴 것이므로 고유명사가 엉뚱하게 적힌 곳이 있다
  (`Dachim`/`Hatchman` = Thatcham, `NIDAL` = niner, `Lindo`/`Grindel` = Brindle,
  `fill` = fuel). 이런 인식 오류는 감점하지 않았다.

---

## Part Ⅰ TASK A. Readback and Hearback

**P1A-Q1** ✅
문제 : Ground : HL123, cross runway two seven, report vacated.
내 답안 : Cross runway two seven, report vacate, Hotel Lima one two three.
** 정답 : Cross runway two seven, report vacated, Hotel Lima one two three.
- 활주로 횡단 허가는 필수 복창 7항목 중 하나다 — 활주로 번호까지 정확.
- `report vacate` → `report vacated`. 발음 차이가 작아 감점하지 않는다.

---

**P1A-Q2** ✅
문제 : 🖥 [ ZORIN ]
Center : HL123, after passing ZORIN, descend to flight level one niner zero, reduce speed
two five zero knots.
내 답안 : After passing Zorin, descend flight level one nine zero, reduced speed two five
zero knots, Hotel Lima one two three.
** 정답 : After passing ZORIN, descend to flight level one niner zero, reduce speed two five
zero knots, Hotel Lima one two three.
- 조건절(`after passing ZORIN`) + 고도 + 속도 **3요소 전부 정확.** 조건절 유지는 5세트 연속.
- `reduced` → `reduce`. 복창은 지시받은 원형 그대로 되돌린다.

---

**P1A-Q3** ⚠️
문제 : Center : HL123, climb to one five thousand feet, expedite until passing one two
thousand.
내 답안 : Climb one five thousand feet, expert passing one two thousand, Hotel Lima one two
three.
** 정답 : Climb to one five thousand feet, expedite until passing one two thousand, Hotel
Lima one two three.
- 고도 두 개(15,000 / 12,000) 모두 정확.
- **`until` 누락** — 두 모델 모두 없다. `expedite passing one two thousand` 은 "통과를
  서두른다"로 읽혀 **어디까지 서두르는지**가 사라진다. 조건부 지시는 그 경계어가 핵심이다.

---

**P1A-Q4** ⚠️
문제 : Approach : HL123, cleared for the ILS runway one four approach, maintain one six zero
knots to the marker.
내 답안 : Clear ILS runway one four approach, maintain one six zero knot to the marker,
Hotel Lima one two three.
** 정답 : Cleared for the ILS runway one four approach, maintain one six zero knots to the
marker, Hotel Lima one two three.
- 접근 허가·활주로·속도·시점 전부 정확. 내용 누락 없음.
- **`clear` ← `cleared`, 6세트 연속.** `clear`(비었다/장애물 없다)와 `cleared`(허가받았다)는
  **다른 단어**이므로 오탈자 예외(§6-1-1)에 해당하지 않는다. 이 세트에서 네 번 반복됐다
  (P1A-Q4, P2A-Q6, P2B-Q10 — 반대로 P2A-Q7 에서는 `cleared` 를 바르게 썼다).

---

## Part Ⅰ TASK B. Checking, Clarifying, Confirming, Informing

**P1B-Q1** ❌
문제 : Approach cleared you to descend maintaining your own visual separation from an Airbus
A340 ahead. The A340 has just entered cloud and you no longer have it in sight. Listen to
the controller, respond accordingly with a reason, and make a request.
Approach : HL123, confirm maintaining visual separation with the Airbus A340?
내 답안 : (Negative,) Hotel Lima one two three. Now, we cannot, now, our condition is not
visual VMC.
** 교정 답안 : Negative, Hotel Lima one two three. We have lost sight of the Airbus A340 —
he has entered cloud. Request radar separation.
- **`Confirm ~?` 에 NEGATIVE 로 시작했다 — 정확.** SAMPLE_01 과 EPTA_10 에서 틀렸던 항목이다.
- **지시문의 `make a request` 미수행 — 10세트 연속 최우선 약점.** "시계 분리를 유지할 수
  없다"고 말했으면 **대신 무엇을 달라고 할지**(radar separation / vectors / a level to
  maintain)가 반드시 붙어야 한다. 그 말이 없으면 관제사는 아무 조치도 취할 수 없다.
- `our condition is not visual VMC` 는 사유를 잘못 짚었다. 문제는 내 기상이 아니라
  **선행기를 못 보고 있다**는 것이다 → `we have lost sight of the A340`. 또 VMC 자체가
  "시계비행 기상상태"이므로 `visual VMC` 는 뜻이 겹쳐 틀린 말이 된다.
- 고친 것 : 문법(동사 없는 `we cannot`)과 **빠진 기능(요청)** 두 가지다. 문장 구조는 그대로 뒀다.

---

**P1B-Q2** ❌
문제 : You are heavy today. The slowest speed you can hold with the flaps you have out is
two one zero knots. Listen to the controller, respond with a reason, and tell him what you
can do.
Approach : HL123, maintain one eight zero knots until four miles. Can you do that?
내 답안 : affirm, Hotel Lima one two three, we can maintain one eight zero knots until four
mile, and our limit, our flap up speed limit is two one zero, so we can accept the speed.
** 교정 답안 : Negative, Hotel Lima one two three. We are heavy today, and the slowest we
can hold with our present flaps is two one zero knots. We can maintain two one zero knots
until four miles.
- **판단이 거꾸로다.** 유지할 수 있는 **최저**속도가 210kt 인데 180kt 를 수락했다. `Affirm` 을
  들은 관제사는 180kt 로 간격을 계산하고, 실제로는 210kt 로 들어가 뒤쪽 간격이 깨진다.
- 한 답 안에서 `we can maintain one eight zero` 와 `our limit ~ is two one zero` 가
  **서로 모순**이다. 210 을 정확히 들고 있었으므로 숫자를 못 들은 게 아니라 **부등호 방향**의
  문제다 — EPTA_07 P2A-Q4, EPTA_08 P2B-Q4 와 똑같은 구조다.
- `flap up speed limit` 은 "플랩을 올릴 수 있는 최대속도"로 읽혀 뜻이 반대가 된다. 지문은
  **플랩을 내린 상태에서의 최저속도**다 → `the slowest speed we can hold with our present
  flaps`.

---

**P1B-Q3** ❌
문제 : 🖥 [ Hartwell Control / descent / ride conditions ]
You have been in moderate turbulence at flight level three three zero for the last one zero
minutes. The aircraft ahead of you reported it smooth at flight level three one zero. You
want to descend to flight level three one zero, and you want to know what the ride is like
there. Contact Hartwell Control. Make a request with a reason, and inquire about the
conditions at that level.
내 답안 : Hot well control, Hotel Lima one two three, request, descend, we are on the right
condition.
** 교정 답안 : Hartwell Control, Hotel Lima one two three, request descent to flight level
three one zero due to moderate turbulence — we have been in it for one zero minutes. Can
you tell me what the ride is like at three one zero?
- 기관명 + 콜사인은 정확하다.
- **요청의 목표값(FL310)이 없다.** `request descend` 만으로는 관제사가 어느 고도를 줄지
  모른다. 지문이 FL310 을 명시해 줬다.
- **사유가 없다.** `moderate turbulence for one zero minutes` 가 지문에 있었다.
- **`inquire about the conditions` 미수행.** 클루의 `ride conditions` 가 그걸 가리켰다.
- `request descend` 는 **REQUEST + 동사**다. 표준은 **REQUEST + 명사(구)** → `request
  descent`. 사유는 `due to ~` 로 뒤에 붙인다.
- `we are on the right condition` 은 뜻을 읽을 수 없는 문장이다. 지시문 세 요구 중
  **하나도 수행되지 않았다.**

---

**P1B-Q4** ⚠️
문제 : During pushback you saw a ground vehicle drive away leaving a spill of fuel on the
apron beside stand one two. You were busy with the checklist and did not report it. Ground
now calls you. Listen to the ground, give a full readback, and report what you saw.
Ground : HL123, taxi to holding point Charlie via Alpha and Delta.
내 답안 : Taxi to holding point Charlie via Alpha and Delta, Hotel Lima one two three, and
be advised, during pushback, we saw a vehicle drive away at stand one two.
** 교정 답안 : Taxi to holding point Charlie via Alpha and Delta, Hotel Lima one two three.
Be advised, during pushback we saw a ground vehicle drive away leaving a spill of fuel on
the apron beside stand one two.
- 유도 지시 복창 완전 — 홀딩포인트와 유도로 두 개 모두 정확. **`be advised` 로 보고 방향을
  바로 잡은 것**도 정확하다(EPTA_09 에서 교정한 항목이 유지됐다).
- **보고의 내용물이 빠졌다 — 연료 유출.** "차량이 떠났다"만 들은 관제사는 아무 조치도 할 수
  없다. 시차형 Informing 문항은 **무엇이 지금 어디에 있는지**가 핵심이다.
- 고친 것 : 빠진 내용(연료 유출) 하나다. 문장 구조와 `be advised` 는 그대로 살렸다.

---

**P1B-Q5** ⚠️
문제 : You are presently established on a heading of two seven zero. The controller's
instruction would mean a full turn through three six zero degrees, so you think he may have
meant a different heading. Listen to the controller and make a confirmation.
Approach : HL123, turn left heading two seven zero.
내 답안 : Confirm heading two seven zero. We already heading two seven zero. Hotel Lima one
two three.
** 교정 답안 : Hotel Lima one two three, confirm turn left heading two seven zero? We are
presently established on heading two seven zero.
- **확인 + 실제 상태 제시 2단 구조**가 들어갔다. "그대로 복창하지 않고 되묻는다"는 판단이
  정확하다 — 함정형을 통과했다.
- `We already heading` 에 동사가 없다 → `We are presently on heading two seven zero`.
- 콜사인은 되묻기 **앞**에 두는 것이 관례다(§10).

---

**P1B-Q6** ❌
문제 : 🖥 [ Ellesmere Departure / levelled off in error / further climb ]
You were cleared to climb to eight thousand feet. By mistake you set six thousand in the
altitude window and you are now levelling off at six thousand. No one has said anything to
you. You want to tell the controller what has happened and get your climb back. Contact
Ellesmere Departure. Report your status and make a request.
※ 응시 후 응답형으로 교체한 문항이다. 위는 **실제로 들으신 발신형 버전**이다.
내 답안 : (Ellesmere Departure, Hotel Lima one two three.) We are leveling off at flight
level one five zero in error, request further climb.
** 교정 답안 : Ellesmere Departure, Hotel Lima one two three. We have levelled off at six
thousand feet in error — we were cleared to eight thousand. Request climb to eight thousand
feet.
- 기관명 + 콜사인 ✓, `in error` 로 자기 실수를 밝힌 것 ✓, 요청까지 간 것 ✓ —
  **구조는 완성형이다.** EPTA_10 에서 정돈한 정정 3단이 유지됐다.
- **그 안의 숫자가 전부 다르다.** 지문은 `six thousand feet`, 허가는 `eight thousand feet`
  인데 `flight level one five zero` 라고 했다 — **값도 틀리고 단위(피트 ↔ FL)도 틀렸다.**
  두 모델이 일치하므로 전사 오류가 아니다.
- `request further climb` 에 **목표 고도가 없다.** 실수를 정정하는 교신은 "원래 받은 값"을
  다시 말해 주는 것이 핵심이다.

---

## Part Ⅱ TASK A. Role-play & Follow-up

**P2A-Q1** ❌
문제 : [Initial Situation] You are the pilot of HL123, descending through flight level two
zero zero for one one thousand, 60 miles from TREBO, inbound to Thatcham Airport. You have
information Delta. Your required landing distance today is 1,750 metres.
☞ Contact Thatcham Approach and report your position and level.
내 답안 : Dachim approach, Hotel Lima one two three. Descending through flight level two two
zero to one one thousand. Six miles from TREBO, request inbounds, Hatchman airport.
** 정답 : Thatcham Approach, Hotel Lima one two three, descending through flight level two
zero zero for one one thousand, six zero miles from TREBO, inbound Thatcham, information
Delta.
- `descending through X for Y` **표준형 사용 — 3세트 연속.** 기관 호출도 정확하다.
- **값 두 개가 틀렸다** : FL200 → **FL220**, 60마일 → **6마일**. 둘 다 Initial Situation 의
  한 문장 안에 있던 값이다. 게다가 6마일 지점에서 FL220 이면 11,000ft 로 내려올 수 없어
  **두 값이 서로 모순**이다 — 스스로 걸러낼 수 있었다.
- `request inbounds` — REQUEST 뒤에 동사/부사가 붙었다. 위치보고에는 요청이 아니라
  `inbound Thatcham` 이 들어간다.
- `information Delta` 누락.

---

**P2A-Q2** ✅
문제 : 🖥 [ TREBO ONE arrival ]
☞ Listen to the controller and give a full readback.
Approach : HL123, Thatcham Approach, descend to 9,000 feet, reduce speed to two five zero
knots, expect the TREBO ONE arrival, ILS runway two seven, Thatcham altimeter two niner
eight six.
내 답안 : Descend niner thousand, reduce speed two five zero knot, expect TREBO ONE arrival,
ILS runway two seven, altimeter two niner eight six, Hotel Lima one two three.
** 정답 : (동일 — 고칠 것이 없다)
- **5요소 복창 완전 — 8세트 연속.** 고도·속도·절차명·활주로·고도계 전부 정확하고 순서도
  지시 그대로다. **이 세트의 최고점.**

---

**P2A-Q3** ⚠️
문제 : ☞ Listen to the controller, give a full readback, and inquire about the landing
distance available.
Approach : HL123, descend to 5,000 feet. Be advised there's work in progress on runway two
seven — they've displaced the threshold, so you won't have the full length today.
내 답안 : Decent 5000, Hotel Lima one two three, and request the runway two seven full
distance. Now, today our distance limit is 1700 meter.
** 교정 답안 : Descend to five thousand feet, Hotel Lima one two three. Request the landing
distance available on runway two seven — our required landing distance today is 1,750 metres.
- 복창 ✓, **묻기 수행 ✓** — `inquire` 지시 수행은 3세트 연속이다.
- **필요 착륙거리 1,750 → 1,700.** Initial Situation 에 있던 값이다. 50m 차이지만 이 값으로
  Q4 의 수락/거부가 갈리고, 다섯 턴 뒤 Q8 에서 관제사가 되물을 때도 같은 틀린 값이 나왔다.
- `the runway two seven full distance` → 묻는 대상의 정식 명칭은 **`landing distance
  available`** 이고, 클루에도 그 말이 떠 있었다.

---

**P2A-Q4** ❌ (무응답 — Level 1)
문제 : 🖥 [ runway two seven / runway two one / landing distance available ]
☞ Listen to the controller, state your decision with a reason, and tell him the figure you
need.
Approach : HL123, two seven gives you 1,900 metres from the displaced threshold. Two one has
the full 2,600, but you'd be number three behind an Airbus A340 — about one two minutes.
Your call.
내 답안 : (무응답 — 녹음은 있으나 전체 무음, 두 모델 모두 빈 결과)
** 교정 답안 : Hotel Lima one two three, we require 1,750 metres, so 1,900 metres on runway
two seven is enough for us. We will take runway two seven — we do not want the one two
minute delay behind the A340.
- **이 세트 Part Ⅱ A 의 중심 문항이다.** 직전 Q3 에서 본인이 물어서 받은 1,900m 와 필요값
  1,750m 를 나란히 놓으면 바로 수락이 나온다. **무응답 → Level 1.**
- 그런데 Q8 에서는 `was 1,900 metres enough for you` 에 `it is enough to land` 라고 정확히
  답했다. **판단은 할 수 있었고 이 턴에서 말을 못 한 것이다.** 30초 안에 결론부터 던지는
  연습이 필요하다 — `We will take runway two seven.` 한 문장만 말해도 Level 1 은 면한다.

---

**P2A-Q5** ❌
문제 : [Situation Update] You are now established on the TREBO ONE arrival, descending
through 7,000 feet.
☞ Listen to the controller, give a full readback, and inquire how long it will take.
Approach : HL123, the Embraer 175 ahead of you has gone around. Turn left heading one eight
zero, descend to 4,000 feet, I'll have to slot you back in behind him.
내 답안 : Turn right heading one eight zero, descend four thousand, Hotel Lima one two three,
and request estimate of how long it will take for the ahead of aircraft.
** 정답 : Turn left heading one eight zero, descend to four thousand feet, Hotel Lima one two
three. Request an estimate of how long the delay will be.
- 묻기 수행 ✓. 고도 4,000 정확.
- **선회 방향이 뒤집혔다 — `left` → `right`.** 기수는 필수 복창 7항목이고 **방향은 그 값의
  일부**다. 180 을 맞추고 방향을 틀린 것은 EPTA_06(RWY06→26)·EPTA_09(ORVIL→Warby)와 같은
  "하나 맞추고 하나 틀리기"다.
- `for the ahead of aircraft` → `the aircraft ahead`, 또는 그냥 `how long the delay will be`.

---

**P2A-Q6** ⚠️
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, turn right heading two four zero, descend to 3,000 feet until established,
cleared for the ILS runway two seven approach, contact Thatcham Tower on 118.3.
내 답안 : Right turn, heading two four zero, descend three thousand until established, clear
ILS runway two seven approach, contact Daechong Tower one one eight point three, Hotel Lima
one two three.
** 정답 : Turn right heading two four zero, descend to three thousand feet until established,
cleared for the ILS runway two seven approach, contact Thatcham Tower on one one eight
decimal three, Hotel Lima one two three.
- 기수·고도+조건절·접근 허가·주파수 **4요소 전부 정확.** 주파수 118.3 정확(이 세트 2/3),
  `until established` 조건절 유지.
- `clear` ← `cleared` (이 세트 2회째).

---

**P2A-Q7** ✅
문제 : ☞ Listen to the tower and give a full readback.
Tower : HL123, Thatcham Tower, runway two seven, cleared to land, wind two five zero at
eight, caution work in progress right of the threshold.
내 답안 : Roger, caution on working press of right of treasure, cleared to land, runway two
seven, Hotel Lima one two three.
** 정답 : Runway two seven, cleared to land, Hotel Lima one two three.
- 착륙 허가 + 활주로 정확하고, **여기서는 `cleared` 를 바르게 썼다.** 바람은 복창 불필요 —
  걸러낸 판단이 정확하다.
- `caution ~` 은 복창 의무가 없으나 붙여도 감점하지 않는다(§11). `Roger` 가 내용과 함께
  쓰였으므로 문제없다. (`caution on working press of right of treasure` 는 `caution work in
  progress right of the threshold` 를 전사기가 잘못 받아쓴 것으로 본다)

---

**P2A-Q8** ⚠️
문제 : ☞ Listen to the tower and provide both pieces of information.
Tower : HL123, I'm filing a report on the work in progress — say again the landing distance
you need, and tell me whether 1,900 metres was enough for you.
내 답안 : Yeah, we noticed that the work in progress of right of threshold and yes, if on we
are enough to land on the runway, we need 1700 meter and it is enough to land Hotel Lima one
two three.
** 교정 답안 : Hotel Lima one two three, affirm. We need 1,750 metres, and 1,900 metres was
enough for us today.
- **두 질문 모두 답했다** — 되묻기 장치 2세트 연속 성공(EPTA_09·10 에 이어). "충분했다"는
  결론도 정확하다.
- 값은 또 **1,700 (←1,750).** Q3 에서 틀린 값을 다섯 턴 뒤에도 그대로 들고 있었다 —
  **메모는 유지되는데 애초에 적은 값이 틀렸다.**
- `Yeah` / `yes` → **AFFIRM**. `if on we are enough to land on the runway` 는 문장이
  성립하지 않는다. 되묻기 답은 **값부터 던지고 판정을 붙인다.**
- 고친 것 : 문법(성립하지 않는 조건절)과 값, 그리고 `Yeah`→`affirm` 세 가지다.

---

**P2A-Q9** ⚠️
문제 : 🖥 [ Stand one two / Stand two zero ]
☞ Listen to the ground controller, state your decision with a reason, and inquire how long
it will take.
Ground : HL123, Thatcham Ground, stand one two is still occupied by the Airbus A340 with a
technical. I can give you stand two zero, but it's eight minutes of taxi. Or you hold for
one two. What would you prefer?
내 답안 : Hold short, hold stand one two, and how long, request estimate of how long we will
hold for the A340.
** 교정 답안 : Hotel Lima one two three, we will hold for stand one two — our ground handling
and steps are arranged there, so we would rather wait than taxi eight minutes. Request an
estimate of how long the A340 will be.
- 선택 ✓ + 소요시간 묻기 ✓ — 두 기능 모두 수행했다.
- **`with a reason` 미수행** (이 세트 두 번째). 8분 추가 유도와 대기를 **왜** 그렇게
  비교했는지가 없다.
- `hold short` 는 **활주로 앞에서 정지**를 뜻하는 고정 표현이므로 주기장 대기에 쓰면 뜻이
  달라진다 → `we will hold for stand one two`.
- 콜사인 누락.

---

**P2A-Q10** ⚠️
문제 : (Q10) 지상도 이미지
[Situation Update] You have landed and vacated runway two seven. You are now stopped on
taxiway Kilo, short of taxiway Juliet.
☞ Listen to the ground controller, respond accordingly, and report your position.
Ground : HL123, I've lost sight of you behind the hangar — whereabouts are you now?
내 답안 : On taxiway, Kilo, Hotel Lima one two three.
** 교정 답안 : Hotel Lima one two three, we are stopped on taxiway Kilo, short of taxiway
Juliet, behind the hangar.
- 유도로 Kilo 는 정확하다.
- **기준점이 없다.** `short of Juliet` 는 Situation Update 와 그림에 **두 번** 나왔다.
  관제사가 "안 보인다"고 물었으니 **어느 지점 앞에 멈춰 있는지**가 답의 핵심이다. 유도로
  이름만으로는 1km 구간 어디든 될 수 있다.
- 30초에 **8단어.** EPTA_09 P2A-Q9(9단어)와 같은 양상으로, Fluency 와 Interactions 를
  함께 깎는다.

---

**P2A-Q11** ⚠️ (Follow-up, 102단어)
문제 : Follow up question.
In this situation, the runway you were offered had less landing distance than usual because
of work in progress. What did you compare before you accepted it, and why? In your role as
a pilot, how do you prepare for a runway that turns out shorter than you planned for — on
the day, and in your briefing beforehand? Give an example of a figure you have had to
re-check because something changed at short notice.
내 답안 : As a pilot, unfortunately, if we accept the short landing distance, if briefing, we
will make the checklist for land short approach, but on hand, in flight, we have to make many
happening for the short approach, so we have to use flaps, or reduce speed, or something
else. And we have to check the display to whether we can land or not, so if we land, we can
accept, but we cannot land, we cannot accept, so it depends on our aircraft, performance, but
it is longer than we expected, but short, we have to caution more than as we planned.
** 교정 답안 : In this situation I compared the landing distance available, 1,900 metres,
with our required landing distance of 1,750 metres, and because 1,900 was more than we
needed, I accepted it. As a pilot, in the briefing we prepare a checklist for a short
landing approach, and in flight we have more to do for a short approach — we use a higher
flap setting, or reduce speed earlier, or something else. And we check the performance
display to decide whether we can land or not, so it depends on our aircraft performance.
For example, on one flight the runway was changed at short notice, and I had to re-check the
required landing distance for a wet runway before I accepted it.
- **② 부분(사전 브리핑 / 당일 조치)은 들어 있다.** 플랩·감속·성능 확인까지 구체적이고,
  90초 분량(102단어)도 충족했다.
- **① 미수행** — "무엇을 비교했는가"에 **숫자가 하나도 없다.** 1,900 과 1,750 을 나란히
  놓는 것이 질문의 1부다. Q4 에서 무응답이었던 것과 같은 자리에서 또 비었다.
- **③ `Give an example.` 미수행 — 10세트 연속.** 경험이 없으면 가정 예시로 답해도 된다.
- 고친 것 : 문법(`if briefing`→`in the briefing`, `we have to make many happening`→`we have
  more to do`, `check the display to whether`→`check the display to decide whether`)과
  **빠진 ①③** 이다. 원문의 어휘와 순서는 그대로 살렸다. 끝의 `it is longer than we expected,
  but short` 는 두 말이 서로 부딪쳐 뜻이 서지 않으므로 뺐다.

---

## Part Ⅱ TASK B. Extended Role-play

**P2B-Q1** ✅
문제 : [Initial Situation] You are the pilot of HL123, climbing through 9,000 feet for flight
level three one zero, 25 miles south of Stapleton Airport. Your fuel endurance is one hour
five zero minutes and there are one four seven persons on board. Your required landing
distance is 2,200 metres.
☞ Contact Stapleton Departure and report your passing altitude.
내 답안 : Step on departure, Hotel Lima one two three, climbing through 9000 to flight level
three one zero, two five miles from South Staple.
** 정답 : Stapleton Departure, Hotel Lima one two three, climbing through niner thousand feet
for flight level three one zero, two five miles south of Stapleton.
- 기관 호출 + 통과고도 + 목표고도 + 위치 **전부 정확.** 네 자리 피트와 FL 을 섞어 쓰면서
  자릿수를 틀리지 않았다 — EPTA_08·09 의 최우선 약점이 여기서는 해결됐다.
  (`Step on departure` / `South Staple` 은 Stapleton 을 전사기가 잘못 받아쓴 것으로 본다)
- `through 9,000 to FL310` → 표준은 **`for`** 다. 뜻은 통하지만 `through X for Y` 로
  굳히는 것이 좋다.

---

**P2B-Q2** ❌
문제 : ☞ Listen to the controller and give a full readback.
Departure : HL123, Stapleton Departure, climb to flight level three one zero, turn right
heading one two zero, contact Hartwell Control on 132.4 when passing one eight thousand.
내 답안 : Climb flight level three one zero, right on heading one two zero, contact tower
control one two three point four, when passing one eight thousand, Hotel Lima one two three.
** 정답 : Climb to flight level three one zero, turn right heading one two zero, contact
Hartwell Control on one three two decimal four when passing one eight thousand, Hotel Lima
one two three.
- 고도·기수·조건절(`when passing one eight thousand`) 정확.
- **주파수 132.4 → 123.4.** 세 자리를 다 들었는데 **앞 두 자리가 뒤집혔다.** 주파수는 필수
  복창 항목이고, 123.4 로 맞추면 다음 관제사와 연결이 끊긴다.
- **기관명 `Hartwell Control` → `tower control`.** 18,000ft 로 상승 중인데 tower 로
  간다는 복창이 된다. 기관명은 클루 없이도 받아적어야 하는 고유명사다.

---

**P2B-Q3** ✅
문제 : [Situation Update] Passing one three thousand feet, the cabin crew report smoke coming
from the rear galley. You have isolated the galley power but the smoke has not cleared. There
is no fire indication on the flight deck.
(Q3) 객실 평면 이미지
🖥 [ MAYDAY / smoke in the cabin / immediate return ]
☞ Declare an emergency, report the nature of your problem, and request an immediate return.
내 답안 : Mayday, Mayday, Mayday, Hotel Lima one two three. We have smoke in the cabin and
after gallery power is isolated and no fire so request immediate return.
** 정답 : Mayday, Mayday, Mayday, Stapleton Departure, Hotel Lima one two three. We have
smoke in the cabin from the aft galley. Galley power is isolated and there is no fire
indication. Request immediate return to Stapleton.
- **세 기능 전부 수행** — 선포 ✓ 사건명 ✓ 현재 조치 ✓ 요청 ✓. **이 세트에서 가장 잘 된
  문항이고**, EPTA_08 에서 처음 완수한 패턴이 3세트 연속 유지됐다.
- MAYDAY×3 뒤에 **기관명**이 빠졌다(§11 비상선언 순서 : MAYDAY×3 → 기관명 → 콜사인 → 유형
  → 의도 → 위치/고도 → 인원/연료).
- `and ~ and ~ so` 로 네 가지가 한 문장에 붙었다. 비상 교신은 짧게 끊는다.

---

**P2B-Q4** ❌
문제 : ☞ Listen to the controller and provide the requested information.
Approach : HL123, Stapleton Approach, roger your MAYDAY, radar contact. Say your fuel
endurance and the number of persons on board.
내 답안 : 1 hour 15 minute fuel and 170 souls on board, Hotel Lima one two three.
** 정답 : Hotel Lima one two three, fuel endurance one hour five zero minutes, one four seven
persons on board.
- 두 항목 모두 답한 것 ✓ (EPTA_04·05 에서 고친 항목이 유지됐다).
- **두 값 모두 틀렸다.** 1시간 **50**분 → 1시간 **15**분, **147**명 → **170**명. 둘 다
  Initial Situation 의 한 문장 안에 있었다.
- **50 ↔ 15 는 EPTA_09 의 55분→15분과 같은 오류**다. `one hour five zero minutes` 를 듣고
  `one five` 로 적는 습관이 보인다. 메모에서 **`5-0` 과 `1-5` 를 모양이 다르게 적는** 훈련이
  필요하다.
- 147 → 170 도 자릿수를 뒤로 미룬 형태다(`one four seven` → `one seven zero`).

---

**P2B-Q5** ❌
문제 : 🖥 [ Stapleton / Brindle / landing distance available ]
☞ Listen to the controller, state your decision with a reason, and tell him the figure you
need.
Approach : HL123, Stapleton runway zero niner has 2,400 metres, but with the departure
sequence you'd be one five minutes to touchdown. Brindle is niner minutes away with 3,000
metres. What would you like?
내 답안 : Our limit, our distance limit is 2200 meter and the stable airport is, we will
expect wait from five minutes, but it, we can accept the runway.
** 교정 답안 : Hotel Lima one two three, our required landing distance is 2,200 metres, so
both runways are long enough. We have smoke in the cabin, so we want the quicker one —
request Brindle, niner minutes, 3,000 metres.
- **필요 착륙거리 2,200m 정확.** Initial Situation 의 값을 네 턴 뒤에 그대로 꺼냈다 —
  `tell him the figure you need` 수행 ✓. (Part Ⅱ A 에서 1,750 을 두 번 틀린 것과 대비된다)
- **어느 공항인지 말하지 않았다.** `we can accept the runway` 로는 관제사가 벡터를 줄 수
  없다. 클루에 두 지명이 떠 있었다.
- **판단의 기준을 잘못 잡았다.** 2,400m 와 3,000m 는 **둘 다** 2,200m 보다 길다 →
  활주로 길이로는 갈리지 않고 **"시간"으로 갈린다.** 객실에 연기가 있는 상태라면 15분보다
  **9분(Brindle)** 이다. 15분을 `five minutes` 로 잘못 들은 것이 판단을 흐렸다.
- `Our limit, our distance limit` / `the stable airport is, we will expect wait from` —
  되돌아가는 말이 많다. **숫자 두 개를 먼저 나란히 던지고 결론을 말한다.**

---

**P2B-Q6** ⚠️
문제 : ☞ Listen to the controller, give a full readback and say your intentions.
Approach : HL123, roger, turn left heading two seven zero, descend to 8,000 feet, vectors for
Brindle. Say your intentions.
내 답안 : Left turn, heading two seven zero, descend eight thousand vectors to Lindo, Hotel
Lima one two three, and our intention is to request fire service standing by.
** 교정 답안 : Turn left heading two seven zero, descend to eight thousand feet, vectors for
Brindle, Hotel Lima one two three. Our intention is to land at Brindle as soon as possible
and stop on the runway for a cabin inspection. We request the fire service standing by.
- 복창 3요소 정확(기수·고도·벡터 목적지). **`our intention is to ~` 5세트 연속 사용** —
  구문 자체는 몸에 붙었다.
- **`intentions` 의 내용이 요청이다.** intentions 는 **내가 무엇을 할 것인지**(어디에 어떻게
  착륙하고 그 다음 무엇을 할 것인지)다. 소방대 요청은 그 **뒤에 따로** 붙인다.

---

**P2B-Q7** ❌
문제 : ☞ Listen to the controller and answer both of his questions.
Approach : HL123, two things for Brindle — is the smoke still in the cabin, and do you want
the fire service to meet you on the runway?
내 답안 : There's no nothing smoke in cabin, and affirm, we want the fire service following
us in the runway, Hotel Lima one two three.
** 교정 답안 : Hotel Lima one two three, affirm, the smoke is still in the cabin. And affirm,
we request the fire service to meet us on the runway.
- **소방대 질문에 `affirm`** — EPTA_09(연료 누출 중 거부)·EPTA_10(제동 저하 중 거부)의
  **2세트 연속 중대 오류가 해결됐다.** 두 질문에 모두 답한 것도 ✓.
- **첫 답이 사실과 반대다.** 이 턴에서 연기는 **아직 남아 있다.** 연기가 멈춘 것은 Q9 직전의
  Situation Update 다. "연기 없음"으로 보고하면 관제사는 비상 등급을 낮추고 소방대 배치를
  바꾼다 — 누락보다 위험한 유형이다.
- `There's no nothing smoke` 는 이중부정이다. 부정 답은 **NEGATIVE** 로 시작한다.
- `the fire service following us in the runway` → 관제사가 쓴 말 그대로 **`to meet us on
  the runway`**.

---

**P2B-Q8** ❌
문제 : ☞ Listen to the controller and provide both pieces of information.
Approach : HL123, Brindle wants it for the emergency brief — say again your fuel endurance,
and say again how many persons on board.
내 답안 : Now we have one hour 30 minutes fuel on board and we have 170 souls on board, Hotel
Lima one two three.
** 정답 : Hotel Lima one two three, fuel endurance one hour five zero minutes, one four seven
persons on board.
- 두 항목 모두 답함 ✓.
- **두 값 모두 틀렸고, 자기가 Q4 에서 말한 값과도 다르다** — Q4 는 1시간 **15**분, Q8 은
  1시간 **30**분. 메모에 남아 있지 않아 **매번 다시 지어내고 있다**는 뜻이다. 비상 브리핑용으로
  되물은 값이므로 소방대 준비와 착륙중량 계산이 어긋난다.
- 인원도 170 유지(실제 147).
- **되묻기 턴의 목적이 바로 이것이다** — 처음 적은 값이 끝까지 같아야 한다. 연료와 SOB 는
  메모 왼쪽 상단에 고정 칸을 만들어 적는다.

---

**P2B-Q9** ⚠️
문제 : [Situation Update] The smoke has stopped and the cabin is clear. The cabin crew report
the galley oven as the source and it is now isolated.
☞ Listen to the controller, give him an update, state your decision with a reason, and say
what you will need on the runway.
Approach : HL123, if the cabin's clear now, do you want to cancel the emergency, or keep it
in?
내 답안 : The smoke, the smoke is stopped and it, it was isolated but we have to keep the
emergency and request the fire service on the runway.
** 교정 답안 : Hotel Lima one two three, the smoke has stopped and the cabin is clear — the
source was the galley oven and it is isolated. We will keep the emergency in, because we
still want the aircraft checked after landing. Request the fire service standing by on the
runway.
- **판단이 맞다** — 연기가 멈췄어도 비상을 유지하는 쪽. 상황 업데이트 ✓, 결정 ✓, 활주로에서
  필요한 것 ✓ — **세 기능 모두 수행했다.** 이 세트에서 두 번째로 잘 된 문항이다.
- **`with a reason` 미수행** (이 세트 세 번째). `because the source has not been confirmed`
  / `we want the aircraft inspected` 한 구절이면 된다.
- 콜사인 누락. `The smoke is stopped` → `the smoke has stopped`. 되돌아가는 말(`the smoke,
  the smoke` / `it, it`)이 많다.

---

**P2B-Q10** ⚠️
문제 : ☞ Listen to the controller and give a full readback.
Approach : HL123, turn right heading three five zero, descend to 2,500 feet until established,
cleared for the ILS runway one four approach, contact Brindle Tower on 119.1.
내 답안 : Turn right heading 350, descend 2500 feet until established, clear ILS runway one
four approach, contact Grindel Tower 119L1, Hotel Lima one two three.
** 정답 : Turn right heading three five zero, descend to two thousand five hundred feet until
established, cleared for the ILS runway one four approach, contact Brindle Tower on one one
niner decimal one, Hotel Lima one two three.
- 기수·고도·조건절·접근 허가·주파수 **5요소 전부 정확.** 주파수 119.1 정확(이 세트 2/3),
  네 자리 피트 2,500 정확.
- `clear` ← `cleared` (이 세트 4회째).

---

## Part Ⅱ TASK C. Reporting about Task B

**P2C-Q1** ❌ (무응답 — Level 1)
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
내 답안 : (무응답 — 녹음 자체가 없다)
** 교정 답안 : We were climbing through one three thousand feet out of Stapleton for flight
level three one zero when the cabin crew reported smoke coming from the rear galley. I
isolated the galley power, but the smoke did not clear, and there was no fire indication on
the flight deck, so I declared a MAYDAY and requested an immediate return. The controller
asked for my fuel endurance and persons on board — one hour five zero minutes and one four
seven persons — and then offered me Stapleton with 2,400 metres but one five minutes to
touchdown, or Brindle with 3,000 metres and niner minutes away. Both were longer than the
2,200 metres I needed, so I chose Brindle because it was quicker. He gave me vectors, and I
asked for the fire service to meet us. Later the smoke stopped and the cabin crew found the
galley oven was the source, but I kept the emergency in, and landed on the ILS runway one
four at Brindle.
- Part Ⅱ Task C **두 문항 모두 녹음이 없다.** Task B Q10 까지 풀고 중단한 것으로 보인다.
  **무응답은 Level 1 이고 넘어가지 않는다**(§6).
- 이 두 문항은 **90초 × 2 = 전체 응답시간의 약 1/3** 이다. 여기가 비면 Fluency·Interactions
  를 혼자서 한 단계씩 끌어내린다. EPTA_09 의 Follow-up 무응답 때와 같은 구조다.

---

**P2C-Q2** ❌ (무응답 — Level 1)
문제 : How do you think the incident was handled by the air traffic controller? Do you feel
the situation could have been handled differently? Make a comment from a pilot's point of
view.
내 답안 : (무응답 — 녹음 자체가 없다)
** 교정 답안 : I think the controller handled it well. He accepted my MAYDAY immediately,
gave me radar contact, and asked for my fuel endurance and persons on board straight away,
which is what the airport needs for the emergency brief. He also gave me both options with
the figures — the runway length and the time to touchdown — so I could make the decision
myself instead of just being told where to go. One thing that could have been handled
differently is that he asked for my fuel and souls on board twice. I understand Brindle
needed it for their own brief, but in a cabin smoke situation the crew is busy, so it would
have been better if he had passed the figures on himself. Other than that, I have no comment.
- `one thing that could have been handled differently` 는 EPTA_08 에서 처음 정확한 문구로
  나왔고 이후 유지됐던 항목이다. 이번에는 응답이 없어 그 흐름이 끊겼다.

---

## ICAO 6개 항목 등급

| 항목 | 등급 | 근거 |
|---|---|---|
| Pronunciation | **평가 보류** (등급 계산 제외) | 텍스트로 판단할 근거가 없다(§6-2). 아래 ASR 간접 소견만 참고 |
| Structure | **Level 3** | 복창 패턴은 안정적이고 `be advised` · `our intention is to` 같은 구문을 쓸 수 있다. 그러나 자유응답에서 문장이 자주 무너진다 — `we are on the right condition`, `if on we are enough to land on the runway`, `we have to make many happening`, `There's no nothing smoke`, `We already heading`. 뜻이 전달되지 않는 문장이 세 곳 있어 Level 4 에 못 미친다 |
| Vocabulary | **Level 3** | `clear`←`cleared` 4회(6세트 연속), `hold short` 를 주기장 대기에 사용, `flap up speed limit` 로 뜻 반대, `request descend`·`request inbounds` 로 REQUEST 뒤 동사, `landing distance available` 대신 `full distance`. 일상적 주제는 전달되지만 **표준 용어의 뜻을 바꿔 쓰는 일이 반복**되어 Level 4 미달 |
| Fluency | **Level 2** | 무응답 3문항 — P2A-Q4(30초, 이 파트의 중심 문항)와 **Task C 두 문항(90초 × 2) 전체.** 응답시간의 약 1/3 이 비었다. 답한 문항에서도 P2A-Q10 은 30초에 8단어이고, `Our limit, our distance limit` · `the smoke, the smoke` · `it, it` 처럼 되돌아가는 말이 잦다. **무응답 구간이 있는 한 Level 4 는 불가능하다** |
| Comprehension | **Level 2** | ① 상황을 반대로 읽은 것 3건 — P1B-Q2(최저 210kt 인데 180kt 수락), P2B-Q7(연기가 남아 있는데 "없음"), P2B-Q5(길이로 갈리지 않는 비교를 길이로 판단) ② 들은 값이 틀린 것 8건 — FL200→220, 60마일→6마일, 1,750→1,700(2회), 1시간50분→1시간15분·1시간30분, 147→170(2회), 132.4→123.4, left→right, 15분→5분. **구체적 수치와 조건을 다시 확인해야 하는 수준**이라 Level 4 미달 |
| Interactions | **Level 2** | 지시문 마지막 토막 미수행 5건 — P1B-Q1 `make a request`, P1B-Q3 `with a reason`+`inquire` 둘 다, P2A-Q9 `with a reason`, P2B-Q9 `with a reason`, P2A-Q11 ①③. **10세트 연속 같은 항목.** 여기에 Task C 전체 무응답이 겹쳐, 관제사가 명시적으로 요구한 것을 돌려주지 못한 자리가 많다 |

**최종 등급 = 6개 항목 중 최저값 = Level 2** (EPTA_07 이후 6세트 연속)

### 발음 간접 소견 (판정에 쓰지 않음)

로컬 영어 ASR 두 모델이 같은 단어를 반복해 다르게 받아쓴 지점이다. 마이크·모델 성능도 원인일
수 있으므로 관찰 항목으로만 둔다.

| 의도한 단어 | ASR 인식 | 메모 |
|---|---|---|
| **Negative** | `Negeri` / (turbo 는 통째로 누락) | **첫 단어가 약하다.** AFFIRM/NEGATIVE 는 판정이 걸린 단어다 |
| **expedite** | `expert` (두 모델 일치) | 3음절이 2음절로 줄었다 |
| **threshold** | `treasure` / `of right of threshold` | `-shold` 가 뭉친다 |
| Thatcham | `Dachim` · `Dachshund` · `Hatchman` · `Taj Mahal` | 지명 첫음절 |
| Brindle | `Lindo` · `Grindel` | |
| Stapleton | `Step on` · `South Staple` | |
| Hartwell | `Hot well` | |
| fuel | `fill` · `to be` | 단음절 모음 |
| niner | `NIDAL` · `NITR` | 숫자는 또박또박 나오는 편인데 `niner` 만 뭉친다 |

---

## 태스크별 총평

**Part Ⅰ Task A (✅2 ⚠️2)** — 이 세트에서 가장 안정적인 구역이다. 네 문항 모두 숫자 값이
정확했고, 조건절(`after passing ZORIN`)도 유지했다. 남은 것은 **단어 수준의 두 가지**다 —
`until` 을 떨어뜨린 것과 `clear`←`cleared`. 둘 다 내용이 아니라 고정 표현의 문제이므로
암기로 해결된다.

**Part Ⅰ Task B (⚠️2 ❌4)** — **최대 실점 구역이고, EPTA_10 과 똑같다.** 6문항 중 4문항
실패다. 공통점이 분명하다 — **지시문이 요구한 기능의 절반만 수행한다.** Q1 은 NEGATIVE 는
맞췄으나 요청이 없고, Q3 는 기관 호출만 하고 목표값·사유·문의 세 개가 전부 비었고, Q4 는
복창은 완전한데 보고의 내용물이 없고, Q6 은 구조는 완성했는데 숫자가 전부 다르다. Q2 는
그보다 심각한데, **들은 숫자를 정확히 말하면서 판단을 반대로 했다.** Ⅰ-B 는 20초 안에
"첫 단어(AFFIRM/NEGATIVE) → 사유 → 내가 할 수 있는 것/원하는 것" 세 토막을 다 채우는
훈련이 필요하다.

**Part Ⅱ Task A (✅2 ⚠️6 ❌2 무응답1)** — 복창은 강하다. Q2 의 5요소와 Q6 의 4요소, Q10 의
주파수까지 정확했고 5요소 복창은 8세트 연속이다. 묻기 지시도 세 문항 전부 수행했다. 무너진
곳은 **받아서 쓰는 단계**다 — Q3 에서 필요 거리를 1,700 으로 잘못 적었고, 그 값으로 판단해야
하는 Q4 에서 무응답이었고, Q8 에서 되물었을 때도 같은 틀린 값이 나왔다. Q5 는 방향을
뒤집었고 Q10 은 기준점 없이 8단어로 끝냈다. Follow-up 은 분량은 채웠지만 3부 중 ②만 답했다.

**Part Ⅱ Task B (✅2 ⚠️3 ❌4)** — **MAYDAY 선포(Q3)는 이 세트의 최고 수행이다.** 선포·사건명·
조치·요청 네 가지가 한 번에 나왔고, 소방대 질문(Q7)에 `affirm` 으로 답해 **2세트 연속
중대 오류를 해결했다.** 비상 유지 판단(Q9)도 정확했다. 반면 **연료와 인원 두 값이 두 턴에서
모두 틀렸고 서로도 달랐다**(1시간15분 / 1시간30분, 둘 다 실제 1시간50분). Q5 는 공항을
말하지 않았고 비교 기준을 길이로 잘못 잡았다. Q7 의 "연기 없음"은 사실과 반대여서 관제사의
대응을 바꿀 수 있는 오보다.

**Part Ⅱ Task C (무응답 2)** — **두 문항 모두 녹음이 없다.** Task C 는 Task B 의 ATC 대사를
다시 들려주고 전개를 되짚는 파트이고, EPTA_10 에서 **Q1 전개 순서를 처음으로 정확히** 말했던
구역이다. 그 성과가 이번에 기록으로 남지 않았다. 90초 두 문항이 비면 Fluency 와 Interactions
를 동시에 끌어내리므로, **끝까지 녹음하는 것만으로 등급이 올라갈 여지가 있다.**

---

## 다음 학습 과제

### 반복되는 약점 3개

**1. 적어 둔 숫자가 턴을 넘기면 달라진다 (신규 최우선)**
EPTA_09·10 은 "값을 끝까지 들고 가지 못한다"였는데, 이번엔 한 단계 더 나빠졌다 —
**같은 값을 두 번 물었을 때 두 번 다른 답**이 나왔다(연료 1시간15분 → 1시간30분, 실제
1시간50분). 인원도 두 턴 모두 170(실제 147). 필요 착륙거리도 1,700 으로 두 번(실제 1,750).
반면 Part Ⅱ B 의 2,200m 는 네 턴 뒤에도 정확했다 — **할 수 있다는 뜻이다.**
→ **대책** : 메모 왼쪽 상단에 `FUEL ___ / SOB ___ / LDR ___` 고정 칸을 먼저 그리고,
Initial Situation 을 들을 때 거기에만 적는다. 되물으면 그 칸을 읽는다.
→ `one hour five zero minutes` 는 `1h50` 으로, `one five` 는 `15` 로 **모양을 다르게** 적는다.
`one four seven` 은 `147`, `one seven zero` 는 `170` — 세 자리를 **끊어 적지 말고 붙여 적는다.**

**2. 상황을 반대로 읽는다 (3건, 중대)**
`최저 210kt` 를 `180kt 수락 가능`으로(P1B-Q2), `연기 지속`을 `연기 없음`으로(P2B-Q7),
`turn left` 를 `turn right` 로(P2A-Q5). 세 건 모두 **값은 맞고 방향·부호만 반대**다.
EPTA_09·10 에서 수락/거부 판단이 전부 정확했던 것과 대비되는 후퇴다.
→ **대책** : 지문에 `slowest` · `minimum` · `maximum` · `not cleared` · `left` 가 나오면
메모에 **화살표나 부등호로 표시**한다(`최저 210 ↑`, `smoke 계속 ✗`). 답하기 직전 그 기호를
한 번 본다.

**3. 복합 지시의 마지막 토막 — 10세트 연속**
이번엔 `with a reason` 3건(P1B-Q3, P2A-Q9, P2B-Q9)과 `make a request` 1건(P1B-Q1),
Follow-up ①③ 이다. **`with a reason` 이 가장 많이 빠진다.**
→ **대책** : 지시문을 들을 때 `and` / `with` 뒤를 메모에 **숫자로 적는다**(`①복창 ②이유
③문의`). 답을 마치기 전에 번호를 센다.

### 외워야 할 표현 5개

| 영어 | 한국어 |
|---|---|
| `the slowest speed we can hold with our present flaps is two one zero knots` | 현재 플랩 상태에서 유지할 수 있는 **최저**속도는 210노트입니다 |
| `request descent to flight level three one zero due to moderate turbulence` | 중등도 난류 때문에 FL310으로 **강하를 요청**합니다 (REQUEST + 명사) |
| `we are stopped on taxiway Kilo, short of taxiway Juliet` | 유도로 Juliet **직전**, 유도로 Kilo 상에 정지해 있습니다 |
| `fuel endurance one hour five zero minutes, one four seven persons on board` | 잔여 연료 1시간 50분, 탑승 인원 147명 |
| `we will keep the emergency in, because we want the aircraft inspected after landing` | 착륙 후 기체 점검을 원하므로 **비상을 유지**하겠습니다 |

추가로 두 개 — `request the fire service to meet us on the runway`(활주로에서 소방대가
대기해 주기를 요청합니다), `request the landing distance available on runway two seven`
(활주로 27의 **가용 착륙거리**를 알려 주십시오).
