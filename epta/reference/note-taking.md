# 노트필기 — 받아적고 그대로 읽는 법

EPTA 는 안내문에 **메모 가능**이라고 명시돼 있다. 실제 조종사도 클리어런스를 머리로 외우지
않는다 — 받아적고 그 종이를 읽는다. 문제는 "무엇을 어떻게 적는가"다.

`EPTA_01` 에서 FL260 을 170 으로, squawk 4512 를 3512 로, runway 09 를 19 로, 118.75 를
118.5 로 복창한 것은 듣기 문제가 아니라 **적는 방식이 없어서** 생긴 일이다.

---

## 1. 원칙 세 가지

**① 번역하지 말고 숫자부터 찍는다.**
`descend and maintain five thousand` 를 듣고 "강하해서 5000 유지"라고 생각하는 순간 다음
항목을 놓친다. 손은 `↓=5000` 만 쓴다. 뜻은 읽을 때 붙인다.

**② 못 들은 칸은 비워 둔다. 절대 지어내지 않는다.**
빈칸은 `Say again the squawk` 한 마디로 메꿔진다. 틀린 값은 그대로 실행된다.
`TOPAZ ONE arrival` 을 못 알아들었다고 `cross TOPAZ` 로 바꿔 쓰면, 관제사는 내가
절차를 수락한 줄 안다.

**③ 적은 순서 = 읽는 순서.**
ICAO 복창은 "들은 순서대로"가 기본이다. 그래서 들린 순서대로 왼쪽→오른쪽으로 적으면
복창은 그 줄을 **읽기만** 하면 된다. 머리로 재조립하지 않는다.

---

## 2. 기호

손으로 쓰는 양을 반으로 줄이는 것이 목적이다. 외울 건 15개뿐이다.

| 기호 | 뜻 | 예 |
|---|---|---|
| `↓` | descend | `↓240` = descend to FL240 |
| `↑` | climb | `↑350` |
| `=` | maintain | `↓=5000` = descend and maintain 5,000 |
| `←` `→` | left / right turn | `←H090` = turn left heading 090 |
| `H` | heading | `H270` |
| `S` | speed | `S220` = reduce speed to 220 knots |
| `□` | runway (네모를 그린다) | `□27` = runway 27 |
| `○` | squawk (동그라미를 그린다) | `○4512` |
| `A` | altimeter | `A30.06` |
| `X` | cross (통과) | `X MARLO` |
| `≤` `≥` | at or below / at or above | `X MARLO ≤260` |
| `/` | until | `↓=3000 /est` = 3,000 until established |
| `>` | then | `K > M` = Kilo then Mike |
| `HS` | hold short | `HS□27` |
| `C` | cleared | `C□27 T/O` · `C ILS□09` · `C/L` |

**숫자 규칙 하나** — 활주로·squawk·주파수는 반드시 기호를 먼저 그리고 숫자를 붙인다.
`□`·`○`·`.` 를 먼저 그려 두면, 숫자가 어느 칸의 것인지 섞이지 않는다.
`altimeter 29.94` 를 `contact .4` 로 바꿔 쓴 것은 숫자를 먼저 쓰고 나중에 이름을 붙이려다
생긴 사고다.

---

## 3. 서식 두 가지

### (가) 클리어런스는 세로 — CRAFT

출발 클리어런스처럼 요소가 5~6개인 긴 지시는 **듣기 전에** 왼쪽에 C R A F T 를 세로로
적어두고 옆칸을 채운다. 관제사가 말하는 순서와 거의 일치한다.
(자세한 내용은 `atc-terminology.md` §4-1-1)

`EPTA_01 P1A-Q4` 실제 문항으로:

> ATC : cleared to Lakeside Airport via the ORCHID TWO departure, maintain 6,000,
> departure frequency 124.35, squawk 4512.

```
C   LAKESIDE
R   ORCHID 2
A   =6000
F   .124.35
T   ○4512
```

복창은 위에서 아래로 읽고 끝에 콜사인만 붙인다 —
*"Cleared to Lakeside Airport via the ORCHID TWO departure, maintain 6,000,
departure frequency 124.35, squawk 4512, HL123."*

**이 서식의 효용은 "빈칸이 보인다"는 것이다.** R 칸이 비어 있으면 SID 를 놓쳤다는 뜻이고,
그러면 `Say again the departure` 한 마디로 끝난다. EPTA_01 에서는 SID 와 주파수 두 칸이
비었는데 비었다는 사실 자체를 몰랐다.

### (나) 그 밖의 지시는 가로 한 줄

Task A 의 대부분과 Part Ⅱ 복창 턴은 요소가 2~4개다. 세로로 그릴 시간이 없으니
**한 줄에 덩어리로 끊어** 적는다. 덩어리 사이는 공백 두 칸.

`EPTA_01 P2A-Q5`:

> ATC : descend and maintain 5,000, reduce speed to 220 knots, expect the TOPAZ ONE
> arrival, ILS runway 09, Lakeside altimeter 30.06.

```
↓=5000   S220   exp TOPAZ1 arr   C ILS□09   A30.06
```

다섯 덩어리. 읽을 때는 왼쪽부터 다섯 번 끊어 말하면 된다.

`EPTA_01 P1A-Q3`:

> ATC : descend to flight level 240, cross MARLO at or below flight level 260.

```
↓240   X MARLO ≤260
```

두 숫자가 각자 제 덩어리에 들어가 있으면 240 과 260 이 섞이지 않는다. 이 문항에서 260 을
170 으로 쓴 것은 숫자만 따로 적다가 어느 칸 것인지 잃어버린 경우로 보인다.

`EPTA_01 P2B-Q8`:

> ATC : turn left heading 090, descend and maintain 3,000 until established, cleared for
> the ILS runway 09 approach, the equipment will be standing by, and let me know if
> anything changes.

```
←H090   ↓=3000 /est   C ILS□09
```

뒤의 `equipment standing by`·`let me know if anything changes` 는 **적지 않는다** —
복창 불필요다. 적을 것과 안 적을 것을 가르는 기준은 다음 항.

---

## 4. 적어야 하는 것 — 필수 복창 6칸

들으면서 이 여섯 개만 쫓는다. 나머지는 흘려도 된다.

```
□ 활주로    고도    기수    속도    주파수    ○squawk
```

여기에 **경로·절차**(SID / arrival / approach / 유도로)와 **조건**(`until`, `cross`,
`at or above`)을 더하면 복창 요소는 끝난다.

**적지 않는 것** — 바람, 트래픽 정보, 사유(`due to ~`, `because of ~`), 인사,
관제사의 사정 설명. EPTA_01 에서 바람·트래픽·disabled aircraft 를 복창에서 제외한 판단은
정확했다. 그 감각은 이미 있다.

송신 직전에 **여섯 칸을 눈으로 한 번 훑는다.** 지시에 있었는데 내 종이에 없는 칸이 보이면
그게 누락이다. EPTA_01 에서 고도계를 세 번(P1B-Q1, P2A-Q5, P2B-Q2), 속도 제약을
한 번(P2A-Q8) 빠뜨렸는데, 이 한 번의 훑기로 다 잡힌다.

---

## 5. Part Ⅰ B · Part Ⅱ 는 숫자보다 "개수"를 먼저 적는다

이 파트에서 점수를 잃은 이유는 값을 틀려서가 아니라 **요구된 행위를 안 해서**다.
지시문을 들으면 숫자보다 먼저 **할 일의 개수**를 적는다.

> ☞ Listen to the controller's message, respond accordingly **and** request the
> information you still need.

```
2개 : 복창 + 요청(ATIS)
```

> ☞ Listen to the tower and give a full readback. **Then** inquire about the aircraft
> ahead on the runway.

```
2개 : 복창 + 질문(선행기)
```

> ☞ Inform the controller of your situation, state that you are levelling off at 7,000,
> **and** request time to work the checklist.

```
3개 : 상황 + 레벨오프 7000 + 체크리스트 시간 요청
```

**지시문에 `and` 나 `then` 이 보이면 할 일이 둘 이상이다.** 말하기 전에 그 숫자를 세고,
말한 뒤 하나씩 지운다. 다 지워지지 않았으면 아직 안 끝난 것이다.

비정상 상황(Part Ⅱ B)에서 무슨 말을 할지 막히면 세 칸만 채운다.

```
상태 → 의도 → 요청
```

`hydraulic system B low pressure` → `continue for ILS 09, need the long runway`
→ `request emergency services standing by`

---

## 6. 연습 방법

1. **받아적기만 따로 연습한다.** 세트를 틀어놓고 복창은 하지 말고 노트만 적는다.
   끝나고 문제지와 대조해 **빈칸과 틀린 값을 센다.** 숫자가 0 이 될 때까지 반복한다.
2. **노트만 보고 말한다.** 적은 뒤에는 기억을 쓰지 않는다. 종이에 없으면 말하지 않고,
   종이에 있으면 반드시 말한다. 이 규칙만 지켜도 "지어내기"가 사라진다.
3. **기호를 손에 붙인다.** 처음에는 기호를 생각하다 더 늦어진다. `↓ ↑ = □ ○ H S X /`
   아홉 개만 먼저 몸에 익히고 나머지는 글자로 쓴다.
4. **`Say again` 을 쓰는 연습을 한다.** 문항당 1회 쓸 수 있다. 빈칸을 안고 틀리게
   복창하는 것보다 항목을 지정해 다시 묻는 것이 실제 시험에서도 높은 점수다 —
   `Say again the squawk` 처럼 **무엇을** 다시 말해달라는지 지정하면 교신 능력으로 평가된다.

---

## 7. 한 장 요약 (연습할 때 옆에 두기)

```
듣기 전   : 클리어런스면 C R A F T 세로.  그 밖엔 빈 줄 하나.
            Part Ⅰ B · Part Ⅱ 면 지시문의 "할 일 개수" 먼저.

들으면서  : 숫자부터.  번역 금지.
            □활주로  고도  기수  속도  .주파수  ○squawk  + 경로 + 조건
            바람·트래픽·사유는 적지 않는다.
            못 들으면 빈칸.  지어내지 않는다.

말하기 전 : 여섯 칸 훑기.  빈칸 있으면 Say again (항목 지정).
            할 일 개수 확인.

말할 때   : 적은 순서대로 왼쪽→오른쪽.  마지막에 콜사인.
            종이에 없으면 말하지 않는다.
```
