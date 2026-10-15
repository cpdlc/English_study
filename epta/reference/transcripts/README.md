# 실제 출제 음성 자막 (최우선 기준)

여기에 `test01.txt` ~ `test04.txt` 를 넣는다. 실제 EPTA 출제 음성을 녹음해 자동 음성인식으로
받아쓴 자막(SRT 형식)이다.

| 파일 | 정체 |
|---|---|
| test01.txt | 공식 샘플세트 Ⅰ 의 실제 음성 (Smith / Public Airport) |
| test02.txt | 공식 샘플세트 Ⅱ 의 실제 음성 (Paramount / TCAS) |
| test03.txt | 공식 샘플세트 Ⅲ 의 실제 음성 (DVETO·ASALT / yaw) |
| test04.txt | `세트샘플.pdf` 에 없는 신규 세트 (Incheon·Seoul Radio / 낙뢰) |

**이 자막을 전수 분석한 결과는 `reference/exam-spec.md` 에 들어 있다.** 세트를 만들 때는
exam-spec 을 보면 되고, 자막 원본은 다음 경우에만 다시 본다.

- exam-spec 에 없는 세부 문구가 필요할 때
- ASR 오류 가능성을 직접 확인해야 할 때 (고유명사 철자, 숫자)
- 새 패턴을 추가로 발굴할 때

**주의** — 자막의 타임코드로 응답 허용시간을 판단하지 말 것. 무음 구간이 일정하지 않다
(`exam-spec.md` §10). 응답시간은 `세트샘플.pdf` 의 공식 표기를 따른다.
