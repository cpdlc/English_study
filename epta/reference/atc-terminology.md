# 관제용어 정리 (ATC Terminology Reference)

## 0. 이 문서의 용도와 출처

**이 문서는 세트 생성과 채점 모두에서 "표준교신용어가 맞는가"를 판단하는 1차 근거 자료다.**
`reference/exam-spec.md`가 시험의 형식·구조·템플릿을 다룬다면, 이 문서는 실제로 쓰이는
관제 용어·표현 자체를 다룬다. 문제를 만들 때도, 채점할 때도 여기 있는 표현을 우선 참고한다.

**출처**
1. `관제용어정리.pdf` — 서울지방항공청 관제통신국 관제과, "조종사가 혼동할 수 있는 관제용어
   정리"(ALL CLEAR? The path to clear communications). 국내 관제 현장 기준 자료이며, EPTA가
   한국교통안전공단 주관 시험이라는 점에서 가장 직접적인 근거 자료다. (전체 32페이지 분석 완료)
2. `세트샘플.pdf` — 한국교통안전공단 EPTA 공식 샘플세트 Ⅰ·Ⅱ·Ⅲ (전 37페이지 분석 완료,
   `reference/exam-spec.md`에 구조/템플릿 정리)
3. 웹 조사로 교차검증한 ICAO/FAA 자료 — Doc 9432(Manual of Radiotelephony), Doc 4444
   (PANS-ATM), Annex 10, FAA Order 7110.65, FAA AIM. 각주에 출처 표기.

`관제용어정리.pdf` 자체가 인용하는 참고자료: ANNEX 10(Aeronautical Telecommunications),
ICAO Doc 9432, ICAO Doc 4444, 국토교통부 고시 항공교통관제절차, 국토교통부 고시
무선통신매뉴얼, FAA Order 7110.65.

---

## 1. 무선통신 송신 원칙

`관제용어정리.pdf` pp.2-3 기준:

- 송신 전 주파수 혼선 여부 확인, 정상적인 음성으로 분명하고 또렷하게 송신
- **말하기 속도는 분당 100단어를 초과하지 않는다** — 평소보다 느리게, 받아적어야 하는 내용은
  더 천천히
- 음량은 일정하게, **숫자 전후로 약간의 간격**을 두면 이해에 도움
- **"어(er)", "에" 같은 주저하는 발음(filler) 사용 금지**
- 송신스위치는 말하기 전에 충분히 눌러 끝까지 유지 (마이크 버튼이 눌린 채 고정되는
  Stuck Mike는 잠재적 위험요인)
- 이해를 방해하는 억양·장애물 제거, 메시지는 정확하고 명확하게
- **표준용어는 모든 의사소통에 사용. 일반영어(plain English)는 ICAO 표준용어로 완벽히
  표현하지 못할 경우에만 사용 가능하며, 이때도 의미는 정확해야 한다.**
- 항공기 식별부호(콜사인)는 명확하게
- **관제지시는 이해여부와 복창(Readback)을 받아야 하고, 필요시 확인(Confirm/Verify)해야 함**
- 축약된 용어는 적절히만 사용
- **일반영어는 비정상적인 상황에서 사용** — 정상 상황에서는 표준용어가 원칙

이 원칙은 채점 시 Fluency/Structure 평가의 근거가 된다: 문장이 "어…", "음…" 식으로
불필요하게 채워지거나(텍스트 답안에서는 판단 불가하지만, 자유응답의 산만함으로 유추 가능),
표준용어를 쓸 수 있는 상황에서 굳이 장황한 일반영어를 쓰면 감점 요인이다.

---

## 2. 필수 복창(Mandatory Readback) 항목 — 채점의 절대 기준

`관제용어정리.pdf` p.4, 항공법 시행규칙 210조 6항 근거. **아래 항목이 빠지면 무조건
"누락된 필수 readback 요소"로 감점한다.**

1. **항공교통관제(ATC) 비행로 허가** (route/clearance)
2. **활주로 관련 허가·지시**: 진입(enter), 착륙(land on), 이륙(take off on), 활주로 근접대기
   (hold short of), 횡단(cross), 역주행(backtrack)
3. **사용 활주로, 고도계 수정치(altimeter), 2차감시레이더코드(squawk), 고도 지시, 기수
   (heading) 및 속도 지시, 전이고도(transition altitude)** — ATC가 직접 발부했든 ATIS에
   포함됐든 관계없이 전부 필수 복창

※ CPDLC(데이터통신)로 전달된 경우는 음성 복창을 생략할 수 있다 — 단, EPTA는 항상 음성
교신을 가정하므로 이 예외는 세트에 적용하지 않는다.

관제사는 복창을 반드시 경청해서 틀린 부분이 있으면 즉시 시정해야 한다 — 즉, **복창은
형식적 절차가 아니라 안전에 직결되는 확인 절차**라는 점을 채점 코멘트에도 반영한다.

---

## 3. ICAO 표준단어 및 어구 전체표

`관제용어정리.pdf` pp.5-8 (한국어 공식 번역 포함) + 웹 교차검증.[^1][^2]

| 단어/어구 | 뜻 (영문) | 뜻 (국문) | 비고 |
|---|---|---|---|
| ACKNOWLEDGE | Let me know that you have received and understood this message. | 이 메시지를 수신하고 이해했는지 알려달라 | |
| AFFIRM | Yes. | 예 | **AFFIRMATIVE는 2007년 표준단어에서 삭제됨** — 반드시 AFFIRM만 사용. affirmative/negative가 무전 잡음 속에서 어미가 비슷해 혼동되는 문제 때문.[^1] |
| APPROVED | Permission for proposed action granted. | 요청사항에 대해 허가한다 | |
| BREAK | 메시지 내용이 분리된 것을 표시(문장 간 구분이 불명확할 때). | | |
| BREAK BREAK | 매우 바쁜 상황에서 서로 다른 항공기에게 보내는 메시지 사이의 분리를 표시. | | |
| CANCEL | Annul the previously transmitted clearance. | 이전에 허가했던 것을 취소한다 | |
| CHECK | Examine a system or procedure. (보통 대답 불필요) | 시스템·절차를 확인하라 | |
| CLEARED | Authorized to proceed under the conditions specified. | 특정조건 하에서 진행을 허가한다 | |
| CONFIRM | Have I correctly received the following…? / Did you correctly receive this message? | 내가 수신한 내용이 정확한가? / 메시지를 정확히 수신했는가? | **CONFIRM에 대한 표준 응답은 AFFIRM/NEGATIVE — "yes/no"는 비표준.** |
| CONTACT | Establish radio contact with… | …와 무선 교신하라 | |
| CORRECT | That is correct. | 틀림없다 | |
| CORRECTION | An error has been made in this transmission. The correct version is… | 통신 내용에 오류가 있었으며 수정된 내용은 …이다 | |
| DISREGARD | Consider that transmission as not sent. | 송신을 하지 않은 것으로 간주한다 | |
| GO AHEAD | Proceed with your message. | 전할 말을 하라 | ICAO 표준단어에서 삭제됨(혼동 우려), 지상이동통신엔 원래도 안 씀. 국내만 일부 사용. |
| HOW DO YOU READ | What is the readability of my transmission? | 내 송신을 얼마나 잘 듣고 있는가? | |
| I SAY AGAIN | I repeat for clarity or emphasis. | 명확성·강조를 위해 반복한다 | |
| MONITOR | Listen out on (frequency). | 주파수를 청취하라 | |
| NEGATIVE | No / Permission not granted / That is not correct. | 아니오 / 허가불허 / 정확하지 않다 | |
| OUT | 송신 종료, 응답 불필요. | | VHF 통신엔 보통 안 씀. |
| OVER | My transmission is ended and I expect a response from you. | 내 송신은 끝났으니 응답하라 | |
| READ BACK | Repeat all, or the specified part, of this message back to me exactly as received. | 메시지의 일부나 전부를 정확히 반복하라 | |
| RECLEARED | A change has been made to your last clearance and this new clearance supersedes the previous. | 이전 허가사항이 변경되었으니 새 허가사항으로 변경하라 | |
| REPORT | Pass me the following information. | 다음 정보를 나에게 전해달라 | **관제사가 조종사에게 정보를 요구할 때.** |
| REQUEST | I should like to know…, or I wish to obtain… | …을 알고싶다 / …을 얻고싶다 | **조종사가 원할 때. REQUEST 뒤에는 항상 명사(구)가 온다 — "request to know how long"(x)이 아니라 "request expected delay"(o).** |
| ROGER | I have received all of your last transmission. | 마지막 송신을 모두 수신했다 | **CONFIRM/READ BACK을 요구하는 질문이나 AFFIRM/NEGATIVE로 직접 답해야 하는 질문에는 절대 쓰면 안 됨.** 단, "Roger, (실제 지시 내용)"처럼 내용을 같이 말하면 정상 — §9 참고. |
| SAY AGAIN | Repeat all, or the following part, of your last transmission. | 마지막 송신의 전부/일부를 반복하라 | |
| SPEAK SLOWER | Reduce your rate of speech. | 말하는 속도를 늦춰라 | |
| STANDBY | Wait and I will call you. | 기다리면 내가 부르겠다 | |
| VERIFY | Check and confirm with originator. | 발신자에게 확인·점검하라 | |
| WILCO | (Will comply의 축약) I understand your message and will comply with it. | 메시지를 알아들었고 그대로 따르겠다 | |
| WORDS TWICE | 통신상태가 나쁠 때 모든 단어/구를 두 번씩 반복(요청 또는 예고). | | |

[^1]: AFFIRM/AFFIRMATIVE 변경 근거 — SKYbrary Non-Standard Phraseology, Aero-Coms Standard Words and Phrases 교차검증 (2026-08-19 웹조사).
[^2]: ROGER 사용 제한 근거 — `관제용어정리.pdf` p.7 원문 각주("Under no circumstances to be used in reply to a question requiring READ BACK or a direct answer in the affirmative or negative")와 동일.

---

## 4. Clearance and Taxi

### 4-1. IFR Clearance 7대 허가사항
`관제용어정리.pdf` p.9. 세트를 만들 때 5요소 이상 긴 클리어런스 문항에 참고.

1. 항공기 호출부호(비행계획서상)
2. 허가한계점(clearance limit)
3. 표준계기출발절차(SID)
4. 비행경로
5. 비행고도 / 고도 변경사항
6. 주파수 및 비컨코드(squawk) 정보
7. 기타정보 (IFR↔VFR 전환 등)

예시 스크립트:
```
Pilot – Gimpo Delivery, HL1101, Request clearance to Yangyang,
        Proposing altitude 9,000, Spot 41, Information B
ATC   – HL1101, Cleared to Yangyang Airport, SID Anyang 1Wiskey departure,
        G597 then as filed, Maintain 9,000, departure frequency will be
        125.15, Squawk 5101
Pilot – Cleared to Yangyang Airport, SID Anyang 1Wiskey departure, G597
        then as filed, Maintain 9,000, departure frequency will be 125.15,
        Squawk 5101, HL1101
ATC   – HL1101, Readback is Correct, Contact Ground 121.9
```

### 4-2. Squawk Code 관례 (한국 Incheon Control 기준)
- **12\*\* : 일반 VFR 비행 시 콜사인 마지막 두 자리** (예: HL1154 → Squawk 1254)
- 국내선 항공기: **50\*\*, 51\*\*, 72\*\*, 74\*\***
- 국제선 항공기: **41\*\*, 43\*\*, 44\*\*, 71\*\***
- 중국·일본과 상호 자국 코드를 인정(ICAO 중재 하 국가별 할당)

**비상 코드(Emergency code) — 세트 만들 때 필수로 알아둘 것**
- **7500** : 항공기 피랍 (hijacking)
- **7600** : 무선통신 두절 (communication failure)
- **7700** : 항공기 비상상황 (emergency)

### 4-3. Report Ready for Push-back(Start-up)
Delivery 관제사가 이걸 요구하는 이유는 항로상 고도분리가 필요해서 — push-back 준비 순서에
따라 클리어런스·고도가 발부됨. 김포공항처럼 B등급 공역 내 항공기 과다 체공 제한 목적으로도
쓰임.
```
Pilot – Gimpo DELIVERY, BBB123, Request clearance for JEJU, FL280, Gate 10,
        Information B
ATC   – BBB123, Report Ready for Push-back
Pilot – Roger, Report Ready for Push-back, BBB123
...
Pilot – Ground, HL1101, Request Start-up, Spot 41, Information C
ATC   – HL1101, Stand-by Expect 10 minute Delay
```

### 4-4. Taxi Instruction 표준 어휘
`관제용어정리.pdf` p.12. 지상활주 지시는 이동 경로를 포함해서 발부하며, 대기가 필요하면
대기지시를 포함해야 한다.

- **HOLD POSITION** — 현 위치에서 정지
- **HOLD FOR (이유)**
- **CROSS (runway/taxiway)**
- **TAXI / CONTINUE TAXIING / PROCEED / VIA (route)**
- **ON (활주로·유도로 번호) TO (위치)** 또는 **(방향)**
- **HOLD SHORT OF (위치)**
- **TAXI TO HOLDING POINT (번호)(활주로 번호)**
- **TAXI TO HOLDING POINT (활주로 번호) VIA (특정 경로)**
- **RUNWAY (번호), TAXI VIA (번호), HOLD SHORT OF (번호)**

```
ATC   – HL1101, Taxi to Holding point Runway 32R via Papa4, Papa
Pilot – Taxi to holding point Runway 32R via Papa4, Papa, HL1101

ATC   – HL1101, Runway 32 Left, Taxi via taxiway Papa, Bravo 2,
        Hold short of Runway 32 Right
Pilot – Runway 32 Left, Taxi via taxiway Papa, Bravo 2,
        Hold short of Runway 32 Right, HL1101
```
※ "Hold short of Runway"는 항공기가 지상활주 경로상 활주로 진입 전 대기가 필요할 때 주로 사용.

### 4-5. 지상이동 시 양보/추종 (Give way to, Follow, Hold position)
"You are No.2"와 함께 쓰이기도 함.
- **GIVE WAY TO (항공기)** — 양보하라
- **FOLLOW (항공기)** — 따라가라
- **HOLD POSITION** — 현위치에서 멈춰 대기
- **No.1 CONTINUE TAXI** — (순서가 먼저이니) 계속 진행

```
ATC   – HL1101, (You are No.2) Give way to (또는 Follow) Koreanair Boeing747
        on your rightside
Pilot – Roger, We'll give way to rightside Koreanair B747, HL1101

ATC   – HL1101, Hold position, Due to Traffic
Pilot – Hold position, HL1101

ATC   – HL1102, No.1 Continue Taxi
Pilot – Roger. No.1 Continue taxiing, HL1102
```

---

## 5. Take-off and Landing

### 5-1. Line Up and Wait
지체없는 출발을 위해 이륙위치로 이동 후 대기시키는 것. LUAW 허가 중엔 같은 활주로에 FULL
STOP/TOUCH AND GO/STOP AND GO/OPTION/UNRESTRICTED LOW APPROACH를 허가할 수 없음.
활주로 2개 이상 운영 시 LUAW 허가할 땐 활주로 번호를 먼저 발부.
```
ATC   – HL1101, Runway 32R Line up and Wait
Pilot – Lining up and wait Runway 32R, HL1101
```

### 5-2. Gust / Maximum wind
- **GUST** : 평균 풍속보다 **10kt 이상** 많을 때
- **Maximum** : 평균 풍속보다 **5~9kt** 많을 때
```
ATC   – BBB123, Wind 270 at 10 Maximum 18 kt, Runway 33R Cleared to Land
Pilot – Cleared to Land Runway 33R, BBB123
```
(바람 정보 자체는 필수 복창 항목이 아니므로 위 예시처럼 빼도 됨 — §2 참고)

### 5-3. Cancelling Take-off Clearance
관제사가 이미 낸 이륙허가를 취소할 땐 반드시 이유를 알려야 한다. **이륙활주(Take-off Roll)
시작 여부에 따라 표현이 다르다.**
- Roll **시작 전**: `Hold position, Cancel take-off, I say again cancel take-off, due to (이유)` → Pilot: `Holding, HL1101`
- Roll **시작 후**: `Stop Immediately` (필요시 반복) → Pilot: `Stopping, HL1101`

### 5-4. Continue Approach ≠ Cleared to Land — **혼동 주의**
ILS 정대 후 관제탑 첫 교신 시 조종사는 FINAL(또는 Established)을 사용한다. 관제탑이
착륙허가 대신 **CONTINUE APPROACH**를 지시하면, 이는 **착륙허가가 약간 지연된다는 뜻이지
"Cleared to Land"가 절대 아니다.** 세트 만들 때 이 차이를 이용한 문항(착륙허가로 착각하지
않고 계속 접근만 하는 것을 확인)을 낼 수 있다.
```
Pilot – GIMPO tower, HL1101, Approaching Final runway 14R
ATC   – HL1101, Continue Approach runway 14R (Traffic landing roll)
Pilot – Continue Approach, HL1101
```

### 5-5. Go-Around
관제사 지시로도, 조종사 스스로도 언제든 실행 가능. **"Go-Around"라는 용어 자체를 쓴다.**
```
(관제사 지시 시)
ATC   – HL1101, Go-Around (Traffic on the Runway)
Pilot – Going around, HL1101

(조종사 스스로 결정 시 — 허가를 구하는 게 아니라 통보!)
Pilot – HL1101, Going around
ATC   – Roger, HL1101, Fly runway heading, Climb to 5,000
```
※ 조종사가 스스로 go-around를 결정할 때도 "**Going around**"라고 **통보**하지, 허가를
요청("request go-around")하지 않는다.

### 5-6. 빛총 신호 (Light Gun Signal) — 무선통신 두절 시 사용
| 신호 | 지상 항공기 | 비행중 항공기 | 차량/장비/인원 |
|---|---|---|---|
| 연속 녹색 | 이륙 허가 | 착륙 허가 | 횡단·진행·전진 허가 |
| 점멸 녹색 | 지상활주 허가 | 착륙 위해 귀환하라 | 적용 안됨 |
| 연속 적색 | 정지하라 | 다른 항공기에 양보, 계속 선회 | 정지하라 |
| 점멸 적색 | 사용중 착륙지역·활주로 이탈 | 공항 불안정 — 착륙 금지 | 활주로·유도로 이탈 |
| 점멸 백색 | 출발지점으로 귀환 | 적용 없음 | 출발지점으로 귀환 |
| 교차 적/녹색 | 일반 경고신호 — 최대 주의 요함 | | |

---

## 6. Departure and Climb

### 6-1. Departure 첫 교신
IFR 이륙 후 Departure와 첫 교신 시 조종사는 **Callsign, SID, 현재고도, 허가받은 고도**를
말한다.
```
Pilot – Seoul Departure, HL1101, SEL2W Departure, Passing 1,200 to 5,000
ATC   – HL1101, Seoul Departure, Radar contact (또는 Identified) SEL2W
        Departure, Climb to 5,000
Pilot – SEL2W Departure, Climbing to 5,000, HL1101
```
※ **Radar Contact = Identified** (같은 뜻, ADS-B 등으로 Identified가 더 폭넓게 쓰임)

### 6-2. Departure 기타 표현
1. **SID상 고도제한이 더 이상 필요 없을 때**: `Cancel Altitude Restriction, Climb to 9,000` → `Climbing 9,000 Cancel altitude restriction, HL1101`
2. **특정 고도제한만 취소할 때**: `Cancel 7,000, Climb to 9,000` → `Cancel 7,000 Climbing to 9,000, HL1101`
3. **상승 중 특정고도에서 중단**: `Stop Climb AT 5,000 (Due to Traffic)` → `Roger. Stop Climbing AT 5,000, HL1101`
4. **빠른 상승 지시**: `Expedite Climb until Passing 7,000` → `(We will) Expedite Climbing until Passing 7,000, HL1101`
5. **IFR→VFR 전환(취소)**: `Request Cancel IFR to VFR` → `Cancel IFR at 0205(현재시간), Squawk to VFR (필요시 Frequency change approved)`
6. **교통정보 제공**: `Traffic 12 O'clock, 10 Miles, North Bound, Altitude 9,000, Boeing737` → `Looking Out, HL1101` (또는 `Traffic Insight, HL1101`) → `Traffic no Factor` (또는 `Clear of Traffic`)

---

## 7. Approach

### 7-1. Approach 첫 교신
다른 기관에서 Approach로 첫 교신 시: **호출부호, 위치, 현재고도, ATIS 수신코드, 기타
요구사항**.
```
Pilot – Seoul Approach HL1101, Approaching (또는 10Miles east of) KARBU,
        Maintain 9,000, Information (또는 With) PAPA. Request ILS Runway
        14R Approach
ATC   – HL1101, Roger, Fly heading 270, Descend to 8,000, Expect Vector To
        (Vectoring for) ILS Runway 14R Approach
Pilot – Fly Heading 270, Descending 8,000, Expect ILS 14R, HL1101
```

### 7-2. 속도 조절
```
ATC   – HL1101, Say Airspeed?
Pilot – Speed 100, HL1101
ATC   – HL1101, Increase speed to 110
Pilot – Seoul approach, HL1101, Request normal speed?
ATC   – HL1101, Resume normal speed
Pilot – Resume normal speed, HL1101
```

### 7-3. ILS 접근허가
```
ATC   – HL1101, (Position 4miles from final approach fix) Turn Right
        Heading 110, Descend to 1,800 Until Established on the Localizer,
        Cleared ILS Runway 14R Approach.
Pilot – Right Turn Heading 110, Descending 1,800 Until Established, Cleared
        ILS Runway 14R Approach, HL1101
Pilot – Seoul Approach, HL1101, Established on the Localizer 14R
ATC   – HL1101, (8Miles from Touchdown,) Contact GIMPO Tower 118.1
```

### 7-4. Vector across Final
선행기와 분리를 위해 Localizer 연장선을 Cross시킬 때:
```
ATC   – HL1101, Expect vector across final for spacing.
Pilot – Roger, HL1101.
```

### 7-5. 공중 Holding — 체공지시 순서
`관제용어정리.pdf` p.24. **체공지시는 항상 이 순서로 발부된다** — 세트의 holding 문항을
만들 때 이 순서를 그대로 따를 것.

> HL123, hold **(방향)** of **(체공 지점)**, ON **(특정 Radial/진로)**, **(선회방향) Turns**,
> **(n Minute leg)**, maintain **(고도)**, EFC **(시각)**

```
ATC   – HL1101, hold west of DOKDO as Published, maintain 4,000,
        EFC(expect further clearance) 0030
Pilot – Hold west of DOKDO as Published, maintain 4,000, EFC 0030, HL1101
```
- EFC = **Expect Further Clearance** — 홀딩 후 다음 클리어런스를 예상할 수 있는 시각. 필수
  복창 항목(§2)의 "허가한계점/고도 지시"에 해당하므로 반드시 복창.

---

## 8. 비상·비정상 상황 (Emergency/Abnormal) — 세트 설계 시 최우선 참고

### 8-1. 비상 선언 구조 (7단계) — **고정 순서**
1. **MAYDAY, MAYDAY, MAYDAY** (또는 PAN-PAN, PAN-PAN, PAN-PAN)
2. 관제 기관명
3. 호출부호
4. 비상 및 비정상의 유형·상태
5. 조종사 의도(요구사항)
6. (필요시) 항공기 위치, 고도, 속도
7. (필요시) 탑승객수, 탑재연료량(비행가능시간)

```
Pilot – MAYDAY MAYDAY MAYDAY, Seoul approach, HL1101, Fire on the left engine.
ATC   – HL1234, Seoul approach, Roger. Say your intention?
Pilot – Request radar vector to final for landing. Request fire fight and
        rescue service
```

**MAYDAY vs PAN-PAN 구분**
- **MAYDAY** (Distress) : 항공기가 **즉각적인 도움이 필요한** 상황
- **PAN-PAN** (Urgency) : 즉각적 도움은 필요 없지만 **언제든 Distress로 진행될 수 있는** 상황

비상선언은 가능하면 **사용 중인 주파수로**, 불가능하면 **Squawk 7700 또는 비상주파수
121.5MHz**를 이용한다.

### 8-2. 연료 부족 — Minimum Fuel ≠ Emergency Fuel (매우 중요한 구분)
연료부족 예상 시 관제사에게 상황을 설명할 땐 **남은 연료를 비행거리·시간 단위로** 설명해야
이해가 쉽다. (웹 조사로도 확인: 실제 비상시 연료는 **파운드/갤런이 아니라 "시간(분)"** 단위로
보고하는 것이 표준 — 우리 세트의 "3 hours fuel remaining" 같은 표현이 정확한 형태다.[^3])

> **Minimum fuel은 비상상황이 아니며 우선순위를 받는 것도 아니다.** 위험한 단계의 연료
> 상태라면 반드시 **Emergency Fuel**임을 명확히 해야 한다.

```
ATC   – HL1234, Seoul approach, Expect radar vector hold 30 minutes due to
        traffic.
Pilot – Seoul approach, HL1234, Unable to hold for 30 min, due to Minimum
        fuel. We have fuel for 20min remain. Request land without delay.
ATC   – HL1234, Seoul approach, Roger, Expect Hold 10min due to traffic
Pilot – Seoul approach, HL1234, We are Declare Emergency, and Unable to
        hold due to Emergency Fuel, Request land without delay
ATC   – HL1234, Seoul approach, Roger, Now radar vector for inbound.
```
※ Minimum fuel로 요청했는데도 관제사가 지연을 계속 요구하면, 그때 **Emergency Fuel로
격상**해서 비상선언을 해야 한다는 전개 — 세트 시나리오로 응용 가능.

### 8-3. 통신 두절 (Lost Communication)
```
<통신 감도 확인>
ATC   – HL1234, Seoul approach, RADIO CHECK. How do you read me?
Pilot – Seoul approach, HL1234, READABILITY 3 WITH A LOUD BACKGROUND
        WHISTLE. HOW DO YOU HEAR ME?
ATC   – HL1234, Seoul approach, Loud and Clear

<통신 불능 확인 — 응답이 없을 때>
ATC   – HL1234, Seoul approach, RADIO CHECK.
Pilot – (……SILENCE)
ATC   – HL1234, Seoul approach, IF YOU HEAR ME Squawk Ident.
Pilot – (IDENTING)
ATC   – HL1234, Seoul approach, Ident Observed, CLEARED TO "K", If you hear
        me Ident.
Pilot – (IDENTING)
```
시계비행 중 공항 근거리·저고도라면 휴대폰 통화 시도도 실무적으로 고려됨.

### 8-4. 착륙장치 이상 (Landing Gear Problem)
증상은 다양(착륙바퀴 미전개, 엔진 이상, 기체 화재 등). 관제기관에 정확한 정보를 알리고
필요사항을 요청한다.
- **Low pass**를 요청해서 착륙바퀴가 제대로 펼쳐졌는지 확인 가능
- 바로 착륙 가능하면 착륙 후 **소방대·의료지원·항공기 견인** 요청 가능
- 필요시 활주로에 **Form(소화폼)**을 요청해서 착륙 시 마찰 감소

```
ATC   – HL1234, Seoul approach, Expect to radar vector to final Runway 32R.
Pilot – Seoul approach, HL1234, We have Landing gear problem, Request low
        pass to check landing gear condition.
ATC   – HL1234, Seoul approach, Roger, Expect to vector for approach 32R
        and low pass. Tower is ready for check.
ATC   – HL1234, Gimpo tower, Your Landing Gear Appears Down, Say your
        intention?
Pilot – HL1234, We try to land now.
ATC   – HL1234, Do you need any other assist on the ground?
Pilot – Request Airport fire fighting and rescue. If able we want to
        forming on the Runway
```
**"Your landing gear appears down, say your intention?"**은 EPTA_01의 P2B-Q9 상황과
정확히 같은 표현 — 세트를 만들 때 이 정형 문구를 재사용할 수 있다.

### 8-5. 최저안전고도(MSAW) 경고
관제사가 항공기의 지상장애물 위험 근접을 판단하면 지체 없이 경보한다:
> `HL1101, LOW ALTITUDE ALERT, CHECK YOUR ALTITUDE IMMEDIATELY. THE
> MEA/MVA/MOCA/MIA IN YOUR AREA IS (고도)` (또는 최종접근픽스 상황이면
> `THE MDA/DH IS (고도)`)

### 8-6. 항적난기류(Wake Turbulence) 주의조언
대형 제트기(B757 등) 후행 시 위치·고도·비행방향을 다음 항공기에게 제공:
```
ATC – HL1101, CAUTION WAKE TURBULENCE (교통정보).
```
대상: ① 레이더유도 없이 대형기 뒤를 따르는 VFR기 ② 시각접근/시계분리 유지 IFR기 ③ 레이더
유도 종료 후 입항하는 VFR기.

### 8-7. 교통정보 및 회피지시 (Traffic Alert)
**"Immediately"를 반드시 포함**해서 즉각성을 강조한다.
```
(기수방향 변경)
ATC – TRAFFIC ALERT, HL1101, Turn left three zero degrees Immediately to
      avoid traffic at one o'clock six miles east, converging at same
      altitude.

(고도 변경)
ATC – TRAFFIC ALERT, HL1101, Climb and Maintain one three thousand
      Immediately to avoid traffic at one o'clock six miles, converging at
      one zero thousand three hundred feet climbing, type unknown.
```

### 8-8. TCAS RA/TA (웹 조사 보강 — 관제용어정리.pdf에는 없는 최신 ICAO Doc 4444/8168 내용)[^4]
- 조종사가 RA(Resolution Advisory)를 받으면 **"TCAS RA"**라고 신고하는 것이 ICAO 표준
  (예: "New York Center, United 321, **TCAS climb**.")
- 회피기동을 시작할 때, 또는 업무부하가 허락하는 즉시 ATC에 알려야 함
- RA가 해소되면 **"clear of conflict, returning to assigned altitude"**로 원래 클리어런스
  복귀를 통보
- RA 보고는 매우 중요함 — 이 순간 항공기가 원래 클리어런스를 이탈했다는 신호이므로, 관제사는
  RA가 해소됐다는 통보를 받기 전까지 추가 지시를 내리지 않는다.

---

## 9. 기타

### 9-1. VFR 비행 중 악기상 조우
VFR 항공기가 시계비행기상을 유지 못하면 관제사에게 통보하고 추가 레이더 서비스를 받을 수
있다.
1. 관제권 내 Special VFR 가능 기상이면 SVFR 허가 가능
2. 관제권 밖 + IFR 자격 있으면 IFR 전환 후 계기접근
3. 관제권 밖 + IFR 자격 없으면 VFR 기상이 유지되는 곳으로 유도 후 재진입 대기

```
Pilot – Seoul approach, HL1234, we are unable maintain VFR Due to cloud,
        Request IFR clearance for Gimpo and request radar vector to
        approach
ATC   – HL1234, Seoul approach, Roger. Squawk 0301 and Ident
Pilot – Squawk 0301 and ident, HL1234
```

### 9-2. Special VFR (특별시계비행) — 한국 특유 규정
- **관제권 내에서만** 허가 (접근관제구역에서는 불가 — IFR 전환 또는 회항)
- 기상조건: **시정 1,500m 이상 ~ 5km 미만**일 때 조종사 요구에 따라 관제탑이 허가

```
ATC   – HL1234, Seoul approach, Say flight visibility?
Pilot – Seoul approach, HL1234, Flight visibility is 2miles. We are unable
        to maintain VFR. Request Special VFR.
ATC   – Unable Special VFR out of control zone, Maintain VFR and request
        Special VFR after contact with Gimpo Tower, Say intention?
Pilot – HL1234, Request pick up IFR for ILS approach.
```

### 9-3. B등급 공역 출입 (한국 Bravo Airspace 예시)
```
(이탈 시)
Pilot – Seoul approach, HL1101, over KILO, maintain 2,000, Request
        Southbound
ATC   – HL1101, Squawk ident
Pilot – Squawk ident, HL1101
ATC   – HL1101, Seoul approach Radar contact, 5miles South of GIMPO,
        Cleared out of B airspace via SIERRA, Maintain 2,000
Pilot – Cleared out of B airspace via SIERRA, Maintain 2,000, HL1101

(진입 시)
Pilot – Seoul approach, HL1101, 20miles south of Gimpo, Request entering
        Bravo airspace for landing Gimpo
ATC   – HL1101, Seoul approach Radar contact, 20miles South of GIMPO,
        Cleared enter Bravo airspace via SIERRA then KILO, Maintain 3,000,
        Altimeter 2992
```

---

## 10. 콜사인(HL123) 위치 관례

(← `reference/exam-spec.md` §8과 동일 내용, 이 문서에도 요약 수록 — 원본은 exam-spec.md
§8 참고)

1. **Readback(복창) → 문장 끝에 콜사인.** ("Cleared direct ATLAS, HL123.")
2. **새 기관 첫 컨택 → 기관명+콜사인을 문장 맨 앞에.** ("Approach, HL123, descending…")
   이 문서 §6-1/§7-1의 모든 "첫 교신" 예시가 전부 이 패턴이다.
3. **그 외(Informing/Unable/Requesting/Correcting mistake) → 앞/뒤 둘 다 허용.**

---

## 11. 채점 즉시 적용 규칙 — Quick Reference

세트를 만들거나 채점할 때 아래 체크리스트를 우선 확인한다.

- [ ] §2의 **필수 복창 7항목**(비행로 허가/활주로 관련 지시/사용활주로·고도계·squawk·고도·기수·속도·전이고도)이 빠지지 않았는가?
- [ ] "confirm ~?"에 **AFFIRM/NEGATIVE**로 답했는가 (yes/no 금지)?
- [ ] **ROGER**가 내용 없이 단독으로 CONFIRM/READ BACK을 대체하지 않았는가? (내용과 함께면 OK)
- [ ] **REQUEST + 명사(구)** 패턴을 지켰는가?
- [ ] **REPORT**는 관제사가 조종사에게 정보를 요구할 때만 쓰였는가?
- [ ] Go-around는 **요청이 아니라 통보**("Going around")로 표현됐는가?
- [ ] "Continue Approach"를 "Cleared to Land"와 혼동하지 않았는가?
- [ ] Minimum fuel과 Emergency fuel을 혼동하지 않았는가?
- [ ] 비상선언 7단계 순서(MAYDAY×3→기관명→콜사인→유형→의도→위치/고도→인원/연료)를
      지켰는가?
- [ ] 연료는 **시간 단위**로, SOB는 **사람 수**로 정확히 표현됐는가?
- [ ] 숫자·ICAO 알파벳 표기 방식, 오탈자는 (CLAUDE.md §6-1-1에 따라) 감점하지 않았는가?
- [ ] 콜사인 위치는 §10 관례에 맞는가?

---

## 참고문헌

- 서울지방항공청 관제통신국 관제과, 『조종사가 혼동할 수 있는 관제용어 정리』(ALL CLEAR?)
- 한국교통안전공단, EPTA 항공영어구술능력시험 조종사용 샘플세트 Ⅰ·Ⅱ·Ⅲ
- ICAO Doc 9432, *Manual of Radiotelephony*
- ICAO Doc 4444, *PANS-ATM (Air Traffic Management)*
- ICAO Doc 8168, *PANS-OPS*
- ICAO Annex 10, *Aeronautical Telecommunications*
- FAA Order 7110.65, *Air Traffic Control*; FAA AIM Chapter 4
- 국토교통부 고시 「항공교통관제절차」, 「무선통신매뉴얼」
- [SKYbrary – Non-Standard Phraseology](https://skybrary.aero/articles/non-standard-phraseology)
- [SKYbrary – RTF Phraseology associated with TCAS RAs](https://skybrary.aero/articles/rtf-phraseology-associated-tcas-ras)
- [Aero-Coms – Standard Words and Phrases](https://www.aero-coms.com/demo-aviation-worksheets/standard-words-and-phrases)
- [PilotsCafe – Expect Further Clearance (EFC) Time](https://www.pilotscafe.com/glossary/expect-further-clearance-efc-time/)

[^3]: 연료를 시간 단위로 보고하는 관례 — 웹 조사(Pilots of America forum, ASRS CALLBACK) 및
`관제용어정리.pdf` p.26 원문("남은 연료량을 비행거리 및 비행 시간의 단위로 설명") 교차검증.
[^4]: TCAS RA 표준 문구 — SKYbrary "RTF Phraseology associated with TCAS RAs" (ICAO Doc
4444/8168 근거) 웹조사, 2026-08-19.
