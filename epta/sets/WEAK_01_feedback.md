# WEAK_01 모범답안 — 2026-11-03

**채점이 아니다.** 사용자가 "답이랑 같이 외우겠다"고 해서 **모범답안만** 붙인 파일이다.
판정(✅⚠️❌)과 최종 등급은 넣지 않았다 — 녹음을 로컬 whisper 로 재전사하지 않은 상태에서
판정을 내리면 CLAUDE.md §6-0 위반이다. 채점을 원하면 `pull.py` → `transcribe.py --all` 을
돌린 뒤 따로 채점한다.

`python practice/push.py WEAK_01` 로 서버에 올라가며, **내 답안 보기**
(`/r/?set=WEAK_01`) 화면에서 문항별로 "문제 → 내 답안 → 정답"이 나란히 보인다.

응시 기록 : 20261103-184816 세션에 11문항(P1A-Q1~Q8, P1B-Q1~Q3). 나머지는 미응시.

**2026-11-04 수정.** "답하려면 앞선 교신이 필요한데 그게 세트에 없다"는 지적을 받아
세트를 고쳤다 — P1A-Q6·Q7·Q8 과 P1B-Q5 · P2B-Q5 는 지문에 앞선 교신을 적어 넣었고,
C 파트는 속도 지시 턴과 Caldon 핸드오프를 넣어 8턴 → **9턴**이 되었다(P2A-Q3 신규,
옛 Q3~Q8 이 Q4~Q9 로 밀림, P2A-Q8 신규). 세트는 33문항이다. P1A-Q6·Q7·Q8 은
응시하신 판본과 지문이 조금 다르다.

---

## 약점 A. 복창 + α — 8문항

**P1A-Q1**
문제 : Your slot at Rothbury closes at 1150Z and it is now 1131Z. You want to know what the holding will cost you. / Approach : HL123, descend to 7,000 feet, expect one zero minutes of holding at VARDO. / Give a full readback, and inquire what the holding will do to your arrival time.
** 정답 : HL123, descend to 7,000 feet, expect one zero minutes of holding at VARDO. Request our revised estimated time of arrival at Rothbury — our slot closes at 1150Z and it is now 1131Z.
- 필수 복창은 고도(7,000) 하나다. holding 예고는 복창해도 되고 빼도 된다.
- α 는 "도착시각이 어떻게 되는지" → `request our revised estimated time of arrival`. REQUEST 뒤는 명사구다. `request to know when we arrive` 처럼 동사구를 붙이면 안 된다.
- 이유(슬롯 1150Z)를 반드시 붙인다. 이유 없는 요청은 관제사가 우선순위를 못 매긴다.

---

**P1A-Q2**
문제 : 🖥 [ VARDO ] / Your present rate of climb will put you at 10,200 feet at VARDO. You want the restriction changed to something you can make. / Center : HL123, cross VARDO at or above one one thousand. / Give a full readback, and tell him what you can do instead.
** 정답 : HL123, cross VARDO at or above one one thousand. Unable one one thousand at VARDO — our present rate of climb gives us one zero thousand two hundred. Request cross VARDO at or above one zero thousand.
- 복창을 먼저 하고 그다음에 UNABLE 이다. 복창을 건너뛰고 바로 거절하면 고도 제한 복창 누락이다.
- `UNABLE + 이유 + 내가 할 수 있는 값`. 세 번째 칸(10,000)을 빼면 이 문항의 α 를 안 한 것이다.
- 질문형이 아니므로 `NEGATIVE` 로 시작하지 않는다. NEGATIVE 는 `confirm ~?` 에 쓴다.

---

**P1A-Q3**
문제 : You cannot hold Mach decimal eight two at your present weight. The best you can do is Mach decimal seven eight. / Center : HL123, climb to flight level three five zero, increase speed to Mach decimal eight two for sequence. / Give a full readback, and make a request with a reason.
** 정답 : HL123, climb to flight level three five zero, increase speed to Mach decimal eight two. Unable Mach decimal eight two due to our present weight. Request Mach decimal seven eight — that is the best speed we can maintain.
- 필수 복창 2개 : 고도(FL350)·속도(M.82). `for sequence` 는 이유라서 복창 대상이 아니다.
- `with a reason` 이 지시문에 있으면 **이유를 문장으로** 말해야 한다. `unable` 만 말하고 끝내는 것이 누적 최다 실점이다.

---

**P1A-Q4**
문제 : On the taxi out you saw a large flock of birds sitting on the grass beside the runway two four threshold. You were busy with the checklist and have not reported it. / Tower : HL123, line up and wait runway two four. / Give a full readback, and report what you saw.
** 정답 : HL123, line up and wait runway two four. Be advised, on the taxi out we saw a large flock of birds on the grass beside the runway two four threshold.
- 활주로 관련 지시이므로 활주로 번호까지 전부 복창한다. `Lining up runway two four` 도 가능하다.
- 시차형 보고다 — **본 것 전체**를 말한다. "새를 봤다"만 말하고 **어디서**(two four threshold 옆 풀밭) 를 빼면 관제사가 쓸 수 없는 정보가 된다.
- 조종사가 자기 쪽에서 정보를 줄 때는 `Be advised` 로 연다.

---

**P1A-Q5**
문제 : You need de-icing before departure and you do not know whether the de-icing bay on taxiway Golf is in use today. You want to be told before you get there. / Ground : HL123, taxi to holding point Kilo two via Golf, hold short of runway one six. / Give a full readback, and make a request with a reason.
** 정답 : HL123, taxi to holding point Kilo two via Golf, hold short of runway one six. Request the status of the de-icing bay on taxiway Golf — we need de-icing before departure.
- `hold short of runway one six` 는 활주로 관련 지시라 **반드시** 복창한다. 여기를 빼는 것이 가장 흔한 누락이다.
- `request the status of ~` / `request information on ~` — 명사구로 끝낸다.

---

**P1A-Q6**
문제 : You have a passenger with chest pain in row 14. You want an ambulance to meet you at the stand and you want the shortest taxi in. You have already reported the medical case to Approach — that is what his "roger" answers — but he does not yet know what you want. / Approach : HL123, roger, turn left heading zero niner zero, descend to 5,000 feet, vectors for Rothbury. / Give a full readback, and say your intentions.
** 정답 : HL123, turn left heading zero niner zero, descend to 5,000 feet. Our intentions — we request an ambulance to meet us at the stand for the passenger with chest pain in row one four, and the shortest taxi route in after landing.
- 필수 복창 2개 : 기수(090)·고도(5,000). `vectors for Rothbury` 는 복창 대상이 아니다.
- **상황은 이미 보고했다.** 그러니 증상을 처음부터 다시 설명하지 않고 **원하는 것**(구급차·최단 유도로)으로 바로 간다. 관제사의 `roger` 가 그 신호다.
- `say your intentions` 는 **내가 할 것 + 내가 필요한 것**이다. 요청을 빼면 절반만 한 것이다.
- `Our intentions are to ~` 또는 `Our intentions —` 로 명시해서 연다.

---

**P1A-Q7**
문제 : You called Ground for taxi a minute ago. You will not be ready for one five minutes — the cabin crew are still re-seating passengers away from the overwing exits. / Ground : HL123, hold position. Report when you are ready to taxi, I have two inbounds for the stand next to you. / Give a full readback, acknowledge his situation, and tell him how long you need.
** 정답 : HL123, holding position, wilco, we will report when we are ready to taxi. Understood you have two inbounds for the stand next to us. We need one five minutes — the cabin crew are still re-seating passengers away from the overwing exits.
- 지시문이 세 가지를 요구한다 : 복창 / 그의 사정 인지 / 소요시간. 세 번째(one five minutes)를 빼는 것이 이 유형의 전형적 실점이다.
- `Report when ~` 에 대한 응답은 `WILCO` 다. `ROGER` 단독으로 대신할 수 없다.
- 시간은 **숫자로** 준다. `a few minutes` 는 관제사가 두 대의 inbound 를 배치할 근거가 못 된다.

---

**P1A-Q8**
문제 : Your anti-ice has been on for two zero minutes and the airframe is clear. You are presently in light rain at zero degrees. You reported light icing to the previous sector one zero minutes ago and Approach has been told — he is asking you for an update. / Approach : HL123, descend to 4,000 feet. Two things — say your icing condition, and say whether you need a higher speed on the approach. / Give a full readback, and answer both of his questions.
** 정답 : HL123, descend to 4,000 feet. Negative icing at present — we are in light rain at zero degrees, anti-ice has been on for two zero minutes and the airframe is clear. Negative, we do not require a higher approach speed, normal approach speed.
- 질문이 두 개면 **두 개 다** 답한다. 하나만 답하고 넘어간 것이 누적 실패의 핵심이다.
- 관제사는 **갱신**을 묻고 있다(10분 전 보고의 후속). 그래서 `negative icing at present` 처럼 **지금 상태**로 답한다 — 10분 전 보고를 되풀이하는 것이 아니다.
- 두 번째 질문은 가부 질문이므로 `NEGATIVE` 로 답한다. `no` 로 답하면 표준교신용어 오류다.
- 복창(4,000)을 맨 앞에 둔다.

---

## 약점 B. 판단 + 이유 — 6문항

**P1B-Q1**
문제 : 🖥 [ Rothbury / Caldon ] / Your required landing distance today is 2,300 metres. You have a passenger with chest pain on board, so you want to be on the ground as soon as you can. / Approach : HL123, Rothbury runway two four has 2,600 metres but you'd be one eight minutes to touchdown. Caldon is seven minutes away with 3,400 metres. What would you like?
** 정답 : HL123, we would like Caldon. Our required landing distance is 2,300 metres, so both runways are sufficient, but we have a passenger with chest pain on board and Caldon is one one minutes sooner. Request routing to Caldon and an ambulance to meet us on arrival.
- 거리는 **양쪽 다 충족**한다(2,600 · 3,400 ≥ 2,300). 따라서 거리가 아니라 **시간**이 판단 근거다. "거리가 충분하다"까지 말하고 시간을 근거로 못 대면 이유가 빈다.
- 차이를 숫자로 말한다 — `one one minutes sooner`(18 − 7).
- 의료 상황이면 구급차 요청을 같이 붙인다.

---

**P1B-Q2**
문제 : Your required landing distance today is 2,450 metres. You have no reason to be in a hurry. / Approach : HL123, runway one six has work in progress — 2,700 metres from the displaced threshold. Runway three four has the full 3,100, but you'd be number four, about one zero minutes.
** 정답 : HL123, we will take runway one six. Our required landing distance is 2,450 metres and the 2,700 metres available from the displaced threshold is sufficient, so we do not need the delay for runway three four. Request the ILS runway one six.
- 함정은 "3,100 이 더 길다"에 끌려 긴 쪽을 고르는 것이다. **필요값을 넘으면 충분하다** — 여유가 더 있다고 10분을 쓸 이유가 없다.
- 판단의 근거는 `2,700 ≥ 2,450` 이라는 **두 숫자의 비교**다. 둘 다 말해야 이유가 성립한다.

---

**P1B-Q3**
문제 : Your required landing distance today is 3,100 metres. / Approach : HL123, Penhale runway two seven has 2,800 metres and it's five minutes away. Minsterly has 3,600 metres but it's two two minutes. Which one do you want?
** 정답 : HL123, unable Penhale — we require 3,100 metres and runway two seven has only 2,800 metres available. Request Minsterly: 3,600 metres is sufficient and we accept the two two minutes.
- 여기는 **가까운 쪽이 못 쓰는** 경우다. 2,800 < 3,100 이므로 5분이 짧다는 것은 고려 대상이 아니다.
- 거부는 `unable + 공항/활주로` 로 명시한다. 어느 쪽을 거부하는지 말하지 않으면 관제사가 되묻는다.
- 늘어나는 시간을 **수락한다고** 말한다(`we accept the two two minutes`).

---

**P1B-Q4**
문제 : You are heavy today. With the flaps you have out, the slowest speed you can hold is two two zero knots. / Approach : HL123, reduce speed to one niner zero knots until six miles. Can you do that?
** 정답 : Negative, HL123. Unable one niner zero knots — at our present weight and flap setting the slowest speed we can maintain is two two zero knots. We can maintain two two zero knots until six miles.
- `Can you do that?` 는 가부 질문이다 → **첫 단어가 NEGATIVE** 다.
- 함정은 **최저속도**다. 220 이 "하한"이므로 190 은 불가다. 이것을 "최대 220 까지 가능"으로 읽어 `affirm` 하는 것이 누적 최다 오답이다.
- 내가 줄 수 있는 값(220)을 숫자로 준다.

---

**P1B-Q5**
문제 : Your maximum crosswind on a wet runway is two five knots. The runway is wet. You are holding short of runway two four, ready for departure. / Tower : HL123, runway two four, wind one eight zero at three zero, gusting three five. Runway one six is dry with wind one eight zero at one two, but it's eight minutes of taxi back. Say your intentions.
** 정답 : HL123, unable runway two four. The runway is wet and our maximum crosswind on a wet runway is two five knots — with the wind one eight zero at three zero gusting three five the crosswind component is above our limit. Our intentions are runway one six: it is dry and the crosswind is within limits. Request taxi back for runway one six, we accept the eight minutes.
- 여기는 **최대**다 — 25 가 상한이므로 30 gusting 35 는 초과다. Q4 와 방향이 반대라는 점이 이 세트의 핵심이다.
- 활주로 24 는 기수 240, 풍향 180 이므로 60° 측풍이다. 성분이 한계를 넘는다는 것만 말하면 되고 삼각함수를 말할 필요는 없다.
- `Say your intentions` 이므로 **거부 + 내가 할 것** 둘 다 필요하다. 거부만 하면 절반이다.
- 출발 전이므로 `taxi back` 을 요청한다. 착륙 상황으로 읽어 `go around` 를 말하면 상황을 반대로 읽은 것이다.

---

**P1B-Q6**
문제 : You have been in moderate turbulence at flight level three three zero for the last one five minutes. The aircraft ahead reported it smooth at flight level two niner zero. You want to descend to flight level two niner zero. / Center : HL123, do you want to stay at three three zero, or do you want to come down?
** 정답 : HL123, we would like to come down. We have had moderate turbulence at flight level three three zero for the last one five minutes and the aircraft ahead reported it smooth at flight level two niner zero. Request descent to flight level two niner zero.
- **선택 질문에는 AFFIRM/NEGATIVE 를 쓰지 않는다.** 둘 중 어느 쪽인지 말해야 한다. `Negative` 로 답하면 관제사는 어느 쪽을 거부했는지 모른다.
- 선택만 말하고 **목표 고도를 안 주는** 것이 흔한 실점이다. `request descent to FL two niner zero` 까지 간다.
- 이유에 선행기 보고를 넣는다 — 관제사가 다른 항공기에 쓸 수 있는 정보다.

---

## 약점 C. 값 유지 — 9턴

**P2A-Q1**
문제 : [Initial Situation] descending through flight level one niner zero for one three thousand, 45 miles from KELSO, inbound to Rothbury. Fuel endurance two hours zero five minutes, one eight four persons on board, required landing distance 2,450 metres, slowest speed you can hold two one zero knots. / ☞ Contact Rothbury Approach and report your position and level.
** 정답 : Rothbury Approach, HL123, descending through flight level one niner zero for one three thousand, 45 miles from KELSO, inbound Rothbury.
- 위치보고의 동사는 **현재 상태**다 — `descending through X for Y`. `maintain` 이나 `descend` 로 말하면 지시 복창처럼 들린다.
- 기관명 → 콜사인 → 고도 → 위치 순서. 기관을 부르지 않고 바로 시작하면 발신 문항의 첫 감점이다.
- Initial Situation 의 네 숫자(연료·인원·필요거리·최저속도)를 **지금 적어 둔다.** 네 개 다 뒤에서 다시 쓰인다.

---

**P2A-Q2**
문제 : 🖥 [ KELSO TWO arrival ] / ☞ Listen to the controller, give a full readback, and inquire about the braking action. / Approach : HL123, Rothbury Approach, descend to one one thousand, expect the KELSO TWO arrival, ILS runway two four. Be advised the runway is wet after heavy rain.
** 정답 : HL123, descend to one one thousand, expect the KELSO TWO arrival, ILS runway two four. Request the braking action on runway two four.
- 필수 복창 3개 : 고도(11,000)·arrival(KELSO TWO)·활주로(two four). `runway is wet` 은 정보라서 복창 의무가 없다.
- `request the braking action` — 명사구다. `request to know the braking action` 은 틀린 형태다.

---

**P2A-Q3**
문제 : ☞ Listen to the controller, give a full readback, and tell him what you can do instead. / Approach : HL123, reduce speed to one eight zero knots until one zero miles.
** 정답 : HL123, reduce speed to one eight zero knots until one zero miles. Unable one eight zero knots at today's weight — the slowest speed we can hold is two one zero knots. We can maintain two one zero knots until one zero miles.
- 복창을 먼저 하고 그다음에 UNABLE 이다. 속도는 필수 복창 항목이므로 건너뛰면 누락이다.
- 최저속도는 **210 이 하한**이다. 180 은 그보다 느리므로 불가 — P1B-Q4 와 같은 방향이다.
- 내가 줄 수 있는 값(210)을 숫자로 준다. `unable` 만 말하고 끝내는 것이 누적 최다 실점이다.
- 이 턴이 뒤의 P2C-Q2(Follow-up)가 가리키는 자리다.

---

**P2A-Q4**
문제 : [Situation Update] Passing one two thousand feet you get a TIRE PRESSURE LOW caption on the left main gear. Brakes and anti-skid normal, but your required landing distance is now 3,100 metres. / ☞ Report your problem to the controller, tell him what has changed, and make a request.
** 정답 : HL123, we have a TIRE PRESSURE LOW caption on the left main gear. Our brakes and anti-skid are normal, but with one wheel unserviceable our required landing distance is now 3,100 metres instead of 2,450. Request the landing distance available on runway two four.
- 지시문이 세 가지를 요구한다 : 문제 / **무엇이 바뀌었는지** / 요청. 두 번째가 이 세트 전체의 축이다 — `2,450 → 3,100` 두 숫자를 같이 말하면 관제사도 바뀐 것을 안다.
- 정상인 것(브레이크·안티스키드)을 같이 말해야 관제사가 비상으로 오판하지 않는다.
- 적어 둔 2,450 을 **지우지 말고 옆에 3,100 을 쓴다.** 뒤에서 두 번 더 쓴다.

---

**P2A-Q5**
문제 : 🖥 [ Rothbury / Caldon / landing distance available ] / ☞ Listen to the controller, state your decision with a reason, and tell him the figure you need. / Approach : HL123, Rothbury runway two four gives you 2,600 metres. Caldon has 3,400 metres and it's one four minutes away. What would you like?
** 정답 : HL123, unable Rothbury — we now require 3,100 metres and runway two four gives us only 2,600 metres. Request diversion to Caldon: 3,400 metres is sufficient and we accept the one four minutes.
- **갱신된 값 3,100 으로 비교**해야 한다. 처음 적어 둔 2,450 으로 비교하면 2,600 이 충분해 보이고 판단이 뒤집힌다 — 이 세트가 노리는 바로 그 지점이다.
- 거부 대상(Rothbury)과 필요값(3,100)을 둘 다 말한다.

---

**P2A-Q6**
문제 : ☞ Listen to the controller and provide the requested information. / Approach : HL123, roger, I'm passing it to Caldon. Say your fuel endurance and the number of persons on board.
** 정답 : HL123, fuel endurance two hours zero five minutes, one eight four persons on board.
- 다섯 턴 전 Initial Situation 의 값이다. 짐작해서 바꿔 말하면 안 된다 — 2시간 05분 · 184명.
- 묻지 않은 것을 덧붙이지 않는다. 두 값만 짧게 준다.

---

**P2A-Q7**
문제 : ☞ Listen to the controller, give a full readback and say your intentions. / Approach : HL123, turn right heading three two zero, descend to 8,000 feet, vectors for Caldon, contact Caldon Approach on 126.35. Say your intentions.
** 정답 : HL123, turn right heading three two zero, descend to 8,000 feet, contact Caldon Approach on 126.35. Our intentions are to divert to Caldon and make a normal ILS approach to the longer runway. We request the fire service standing by for the left main gear, and a full-length landing.
- 필수 복창 3개 : 기수(320)·고도(8,000)·**주파수(126.35)**. 주파수를 빼면 필수 복창 누락이다.
- intentions 는 **내가 할 것**(Caldon 으로 divert, ILS) + **필요한 지원**(소방대, full length) 이다. 요청만 말하면 intentions 진술이 아니다.

---

**P2A-Q8**
문제 : ☞ You are now with a new controller who has none of your figures. Listen to him and answer both of his questions. / Approach : HL123, Caldon Approach, radar contact. For our brief — say the landing distance you need, and say your fuel endurance.
** 정답 : HL123, the landing distance we require is 3,100 metres, and our fuel endurance is two hours zero five minutes.
- **되묻기 함정.** 필요 착륙거리는 중간에 2,450 → 3,100 으로 바뀌었다. 여기서 2,450 을 말하면 Caldon 의 브리핑이 틀어진다.
- 연료는 **바뀌지 않았다** — Initial 값 그대로 2시간 05분. 바뀐 값은 바꿔 말하고, 안 바뀐 값은 그대로 말하는 것을 구분하는 문항이다.
- 새 관제사는 앞의 교신을 못 들었다. 그래서 되묻는 것이 당연하다 — "방금 말했는데요" 가 아니라 **그냥 다시 준다.**
- 두 값을 한 문장에 묶어 짧게 준다.

---

**P2A-Q9**
문제 : ☞ Listen to the controller, give a full readback, and say what you will need on the runway. / Approach : HL123, turn left heading two six zero, descend to 2,500 feet until established, cleared for the ILS runway one eight approach, contact Caldon Tower on 120.9.
** 정답 : HL123, turn left heading two six zero, descend to 2,500 feet until established, cleared for the ILS runway one eight approach, contact Caldon Tower on 120.9. We will need the fire service standing by at the runway, and we will stop on the runway for a brake and tire inspection — request a tow to the stand.
- 필수 복창 4개 : 기수·고도·`until established`·접근 허가·주파수. `until established` 를 빼면 조건을 지운 복창이다.
- 활주로에서 필요한 것 : 소방대 대기 / 활주로 정지 / 견인. "소방대"만 말하고 **활주로에서 멈춘다는 의도**를 빼면 관제사가 다음 착륙기를 그대로 들여보낸다.

---

## 약점 D. 발신 — 6문항

**P2B-Q1**
문제 : 🖥 [ Caldon Control ] / You are at flight level three one zero and the headwind is stronger than planned. You want to go direct to OBREN to save fuel. Contact Caldon Control. / Make a request with a reason.
** 정답 : Caldon Control, HL123, flight level three one zero. Request direct OBREN due to a stronger headwind than planned.
- 20초 문항이다. 기관 → 콜사인 → 현재 고도 → REQUEST + 명사구 + 이유로 끝낸다.
- `request direct OBREN` 이 명사구 형태다. `request to go direct` 는 틀린 형태다.

---

**P2B-Q2**
문제 : 🖥 [ Rothbury Delivery ] / Your flight plan has you at flight level three seven zero, but at today's weight you cannot reach it until one hour after departure. You want flight level three three zero first. Contact Rothbury Delivery. / Report your situation and make a request.
** 정답 : Rothbury Delivery, HL123. Our flight plan level is flight level three seven zero, but at today's weight we cannot reach it until one hour after departure. Request flight level three three zero initially, with a step climb to three seven zero later.
- 지시문이 둘이다 : 상황 보고 + 요청. 상황(무게 때문에 1시간)을 빼고 요청만 하면 관제사가 왜인지 모른다.
- `initially` 와 `step climb` 을 붙여야 "처음만 330" 이라는 뜻이 전달된다.

---

**P2B-Q3**
문제 : You were cleared to climb to one one thousand feet. By mistake you set nine thousand and you are now levelling off at nine thousand. No one has said anything to you. You want your climb back. Contact Minsterly Departure. / Report your status and make a request.
** 정답 : Minsterly Departure, HL123, correction — we are level at nine thousand feet in error. We were cleared to one one thousand and we set nine thousand by mistake. Request climb to one one thousand.
- 정정은 **3단**이다 : 현재 상태(level nine thousand) → 받은 허가(one one thousand) → 요청(climb). 하나라도 빠지면 관제사가 지금 내 고도를 모른다.
- 현재 상태의 동사는 `level at` / `levelling off at` 이다. `maintain nine thousand` 으로 말하면 지시를 복창한 것처럼 들린다.
- `correction` 또는 `we are level ... in error` 로 실수임을 먼저 밝힌다.

---

**P2B-Q4**
문제 : 🖥 [ TAMLYN ] / You are twelve miles from TAMLYN and a line of thunderstorms sits on your track. You want to go one five miles left of track to get round it and rejoin at TAMLYN. Contact Caldon Control. / Make a request with a reason.
** 정답 : Caldon Control, HL123, one two miles from TAMLYN. Request a one five mile offset left of track due to thunderstorms on our track, rejoining at TAMLYN.
- offset 요청은 **거리 + 좌/우 + 복귀 지점** 세 가지가 다 있어야 한다. `request left turn` 만으로는 관제사가 분리를 잡을 수 없다.
- 이유는 `due to thunderstorms` 로 짧게.

---

**P2B-Q5**
문제 : Caldon Control has just cleared you to hold at OBREN as published, with no expected approach time, and you read it back. You have one hour one zero minutes of fuel and your diversion to Penhale needs three five minutes. You want to know when you can expect to leave the hold. Contact Caldon Control. / Report your status and make a request.
** 정답 : Caldon Control, HL123, holding at OBREN with one hour one zero minutes of fuel remaining. Our diversion to Penhale requires three five minutes. Request our expected approach time.
- `request our expected approach time` — EAT 는 정해진 명사다. `request when we can leave the hold` 로 바꾸지 않는다.
- 연료와 교체공항 소요시간을 **둘 다** 주는 것이 핵심이다. 그 차이(1시간 10분 − 35분 = 35분 여유)가 관제사의 판단 근거다.
- 체공 지시는 Caldon Control 이 줬으므로 **같은 기관을 부른다.** 기관명 없이 시작하면 발신 문항의 첫 감점이다.
- 아직 비상이 아니므로 MAYDAY·PAN-PAN 을 쓰지 않는다. `MINIMUM FUEL` 도 여기서는 이르다.

---

**P2B-Q6**
문제 : Ten minutes ago, on the taxi out, you saw fuel leaking from a parked Airbus A321 at stand two eight. You did not report it at the time. You want the ground controller to know now. Contact Rothbury Ground. / Make a report.
** 정답 : Rothbury Ground, HL123. Be advised, one zero minutes ago on the taxi out we saw fuel leaking from a parked Airbus A321 at stand two eight. We did not report it at the time.
- 시차형 보고다. **본 것 · 어디서 · 언제** 세 가지가 다 있어야 한다. 기종(A321)과 스탠드(two eight) 중 하나라도 빠지면 지상관제사가 찾아갈 수 없다.
- `Be advised` 로 열고, 요청이 아니라 보고로 닫는다. 내가 할 일을 묻지 않는다.

---

## 약점 E. 90초 자유응답 — 4문항

**P2C-Q1**
문제 : Follow up question. In this situation, you were given a runway that was shorter than the one you needed. What figures did you compare before you answered, and why? In your role as a pilot, how do you keep track of the numbers a controller gives you over a long approach — what do you write down, and how do you write it? Give an example of a figure you were asked for a second time and had to find again.
** 정답 : In that situation I compared two figures. The first was the landing distance I required, which had changed from 2,450 metres to 3,100 metres after the tire pressure caption, because with one wheel unserviceable my stopping performance was degraded. The second was the landing distance available on the runway the controller offered me, which was 2,600 metres at Rothbury. Because the distance available was five hundred metres less than the distance I required, I could not accept that runway, so I asked for Caldon, where 3,400 metres was available and the extra time was only one four minutes.
In my role as a pilot, I keep the numbers on one sheet of paper in a fixed order, so that every figure always has the same place and I never have to search for it. I write the clearance items in the CRAFT order — clearance limit, route, altitude, frequency and transponder — and I keep the performance figures in a separate box on the right of the page: fuel endurance, persons on board, and required landing distance. When a figure changes I do not erase the old one. I cross it out and write the new one beside it, so that I can see both that it changed and what it changed from.
An example is the landing distance in this flight. The controller asked me for it a second time when he handed us over to Caldon for their brief. The figure I had written first was 2,450 metres and the live figure was 3,100 metres, and because the old one was crossed out rather than rubbed out I could give him the correct figure immediately instead of working it out again.
- 3부 구조를 지킨다 : ① 비교한 두 숫자 ② 일반적인 숫자 관리법 ③ 예시. 셋 중 하나를 빼면 질문의 일부를 답하지 않은 것이다.
- ① 에서는 **두 숫자와 그 차이**를 말한다. "거리가 부족했다"로 뭉개지 않는다.
- ③ 은 `Give an example.` 에 대한 답이므로 반드시 구체적인 한 사례로 닫는다.
- 90초를 다 쓰려 하지 않는다. 60~75초 분량으로 끝내고 세 부분을 다 채우는 쪽이 낫다.

---

**P2C-Q2**
문제 : Follow up question. In this situation, you were asked to hold a speed your aircraft could not hold. How did you tell the controller what you could do instead, and why does it matter that you gave him a figure? From your own experiences, how do you keep a minimum and a maximum from getting mixed up when both are in the same clearance? Give an example of a limit you have had to refuse.
** 정답 : In that situation the controller asked me to reduce to one eight zero knots until one zero miles. At today's weight the slowest speed I could hold was two one zero knots, so I read the instruction back first, then said unable one eight zero knots with the reason, and then gave him two one zero knots as the speed I could maintain.
It matters that I gave him a figure because the word unable on its own leaves him with nothing to work with. He is sequencing other traffic behind me, and if he knows my number is two one zero knots he can adjust the spacing or turn me out himself, instead of asking me a second time while I am busy on the approach.
From my own experience, the way I keep a minimum and a maximum from getting mixed up is to write the word next to the number and never the number alone — min two one zero, max crosswind two five — and to write the limits down during the approach briefing, before the controller asks for anything. I also turn the controller's request into a question to myself before I answer: is he asking me to go lower, or higher, than my limit? That is the part that gets reversed under pressure, not the number itself.
An example of a limit I have had to refuse is a crosswind. The tower offered me a wet runway with the wind thirty knots, gusting thirty-five, about sixty degrees off the runway heading, and my maximum crosswind on a wet runway is two five knots. I was unable that runway, so I told the tower my limit, requested the dry runway instead, and accepted the eight minutes of taxi back.
- 질문이 네 부분이다 : 어떻게 말했는지 / 숫자를 준 것이 왜 중요한지 / 최저·최대를 섞지 않는 방법 / 거부한 예. 두 번째를 빼기 쉽다.
- `In this situation` 은 **C 파트 롤플레이의 P2A-Q3**(180 요구 / 210 한계)를 가리킨다. P1B-Q4(190/220)와 숫자를 섞지 않는다.
- "왜 중요한가"는 **관제사 입장**에서 답한다(분리·순서 배치). 내 입장만 말하면 답이 절반이다.
- 세 번째는 자기 방법을 구체적으로 말한다. `I am careful` 류는 답이 아니다.

---

**P2C-Q3**
문제 : What happened to your aircraft (HL123)? Explain the nature of the incident.
** 정답 : We were HL123, descending through flight level one niner zero for one three thousand, 45 miles from KELSO and inbound to Rothbury. Our fuel endurance was two hours zero five minutes, we had one eight four persons on board, and our required landing distance was 2,450 metres.
On the way in the controller asked us to reduce to one eight zero knots, and we were unable that speed at our weight, so we gave him two one zero knots, which was the slowest we could hold. That was a limitation, not a failure.
Then, passing one two thousand feet, we got a TIRE PRESSURE LOW caption on the left main gear. The brakes and the anti-skid system were both normal, so this was not a loss of braking in flight and the aircraft was fully controllable. The nature of the incident was a performance problem rather than a system failure: with one wheel unserviceable the landing distance we required went up from 2,450 metres to 3,100 metres.
The consequence was that our destination was no longer usable. Runway two four at Rothbury gave us only 2,600 metres, which was five hundred metres less than we needed, so we were unable Rothbury and requested a diversion to Caldon, which had 3,400 metres available and was one four minutes away.
From there it was handled as a normal diversion. We were turned right heading three two zero, descended to 8,000 feet for vectors to Caldon and changed to Caldon Approach, who asked us again for the landing distance we required and our fuel endurance for his brief. We were then vectored onto the ILS for runway one eight and landed with the fire service standing by. We did not declare an emergency, because the aircraft was controllable and we had enough fuel to reach a suitable runway.
- Task C Q1 은 **시간 순서**로 말한다 : 초기 상태 → 속도 제한 → 사건 → 영향 → 조치 → 결말.
- `the nature of the incident` 을 한 문장으로 못 박는다 — "시스템 고장이 아니라 착륙성능 문제".
- 비상을 선포하지 않았다면 **왜 안 했는지**까지 말한다. 이것이 pilot's judgement 로 평가되는 부분이다.
- 숫자를 빼고 서술만 하면 Task B 를 들은 증거가 없다. 2,450 · 3,100 · 2,600 · 3,400 을 넣는다.

---

**P2C-Q4**
문제 : How do you think the incident was handled by the air traffic controller? Do you feel the situation could have been handled differently? Make a comment from a pilot's point of view.
** 정답 : Overall I think the controller handled it well. As soon as I reported the caption and the new landing distance, he gave me the figures that mattered — the distance available at Rothbury, the distance available at Caldon, and the time to Caldon — instead of telling me which airport to use. That is the right way round, because the landing performance calculation is mine and only I know what the aircraft needs.
He also did not argue about the speed. When I told him I was unable one eight zero knots and gave him two one zero, he accepted it and worked around it, which is what a pilot needs when a figure is a hard limit rather than a preference.
There is one thing I would have done differently, and it is at the handover. When Caldon Approach took me, he had none of my figures, so I had to say the landing distance and the fuel endurance a second time while I was being vectored and descending, which is our highest workload. Those two numbers had already been passed to Rothbury Approach once. If they had gone across in the coordination, or if Caldon had asked while I was still steady in the descent, the request would have cost us much less.
From a pilot's point of view, what helped most was that he never pressed me for a decision. He gave information and waited, which gave me the time to run the landing performance again before I committed to a runway. What I would ask for next time is the runway condition at Caldon, not only the distance available — on a wet runway the distance alone does not tell me whether I can stop with one wheel unserviceable.
- Q2 는 **칭찬 → 개선점 → 조종사 관점** 세 부분이다. "잘했다"로만 끝내면 질문의 두 번째·세 번째를 버린 것이다.
- 개선점은 **구체적 행동**으로 말한다. 여기서는 **핸드오프 때 수치가 넘어가지 않은 것** — 그래서 바쁜 구간에서 두 번 말해야 했다는 점이 가장 할 말이 많은 지점이다.
- 관제사를 비난하지 않는다. 역할 분담(정보는 관제사, 판단은 조종사)의 언어로 말한다.

---
