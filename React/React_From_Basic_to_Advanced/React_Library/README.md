<br />

[라이브러리 기초](#라이브러리_기초)

[스타일링 라이브러리](#스타일링_라이브러리)

<br />

---

<br />

### 라이브러리_기초

<br />

라이브러리 <- 공구. 개발 편의를 위한 도구 모음

<br />

리액트는 도구 모음

JSX / 컴포넌트의 상태 관리 / 렌더링 최적화 / 성능 확인 ..

필요 -> 검색 -> 사용법 파악 -> 적용

[필요]

- 특정 기능이 필요해짐(직접 구현하기에는 조금 벅참)
- 더 나은 도구가 필요해짐
- 트렌드에 대한 새로운 기술에 대한 호기심

[검색]

* 필요 그대로 검색
* github / npm trends / 프론트엔드 커뮤니티 / 기술 블로그
* 유사한 라이브러리들 후보로 비교 (기능 / 성능 / 사이즈 / 인기 / 최신 ...)

[사용법 파악]

* 공식 문서
* github 코드 검색 (실제 용례)
* 기술 블로그의 적용하기 예제

[적용]

* POC (Proof of concept)
* 프로젝트 일부에 적용
* 프로젝트 전체에 적용

<br />

Date 관련 (날짜 표기 / 계산 도구)

스타일링 관련 (스타일링을 조금 더 편하게 도와주는 도구)

디자인 UI 관련 (미리 해둔 스타일링을 제공하는 도구)

애니메이션 관련 (애니메이션 기능을 미리 구현해두고 제공하는 도구)

모킹 관련 (데이터 페칭을 대체해주는 도구)

상태 관리 관련 (컴포넌트의 상태 관리를 도와주는 도구)

데이터 페칭 관련 (네트워크 통신을 도와주는 도구)

GraphQL (REST api 대체하는 도구)

Next.js (SSR 등 최신 프론트엔드 기술을 제공해주는 도구)

<br />

라이브러리 `찾고 적용`하는 과정

<br />

---

<br />

Time / Date 라이브러리

[Moment]

https://momentjs.com/

<br />

code

Ctrl + Shift + P

code 검색 - Shell Command: Install 'code' command in PATH

<br />

`npm install moment`

`npm install moment-timezone`

<br />

Mutability

Daylight saving time / Leap years

Time zone / Format / Strict mode forgiving mode

<br />

vscode 익스텐션 `Import Cost`

<br />

Moment 라이브러리 사용할 필요X (사이즈가 크고 tree shaking 알고리즘이 제대로 동작X, mutable 한 구조)

Luxon, Day.js, date-fns, js-Joda 등 라이브러리 추천

<br />

---

<br />

dayjs

day.js.org

`npm install dayjs`

가볍고 간단한 기능 적용 시 좋음

<br />

타임존 -> plugin/timezone plugin/utc

Format / 비교 -> 원하는 스타일로 표기 가능

가벼움 -> Tree shaking X

<br />

---

<br />

date-fns

커버리지가 제일 높은 라이브러리

`npm install date-fns date-fns-tz`

<br />

https://date-fns.org/

Most comprehensive(가장 포괄적인)

Modular support tree-shaking

Immutable & Pure & FP & |18n

<br />

타임존 -> date-fns-tz

Format / 비교 -> 원하는 스타일로 표기 가능

포괄적임 -> Immutable / Tree shaking 까지

함수별 import -> 가능 ex. addWeeks

<br />

---

<br />

기능 / 성능 / 번들 사이즈 / tree shaking(안쓰는 기능은 빌드하지 않기)

문서 가독성 / 인기 / 관리 상태(최근 관리) / 관리 주체

<br />

Time / Date 라이브러리

가벼운게 최우선 -> Day.js

FP 패러다임을 따르거나 tree-shaking이 필요 -> date-fns

<br />

라이브러리 선택에 도움 주는 도구들

사이즈: https://bundlephobia.com/

인기: https://www.npmtrends.com/date-fns-vs-dayjs-vs-luxon-vs-moment

기능 / 성능: https://github.com/you-dont-need/You-Dont-Need-Momentjs/blob/master/README.md

대체제 찾을 때 alternatives 구글링

<br />

---

<br />

### 스타일링_라이브러리

<br />

styled-components

<br />

CSS in JS

(https://speakerdeck.com/vjeux/react-css-in-js)

<br />

CSS의 문제점

Global Namespace / Dependencies / Dead Code Elimination

Minification / Sharing Constants

Non-deterministic Resolution / Isolation

<br />

CSS의 문제점 (React를 쓰면서...)

* Global Namespace: 글로벌 변수를 지양해야하는 JS와 대치
* Dependencies: css 간의 의존 관리
* Dead Code Elimination: 안쓰는 css 인지 어려움
* Minification: 클래스 이름 최소화
* Sharing Constants: JS의 코드와 값을 공유하고 싶음
* Non-deterministic Resolution: css 파일 로드 타이밍 이슈
* Isolation: 격리

<br />

스타일드 컴포넌트 (styled-components)

https://styled-components.com/

https://styled-components.com/docs/basics

<br />

`npm install --save styled-components`

<br />

Automatic critical CSS: 자동 style injects & 코드 스플릿

No class name bugs: unique / overlap x / misspellings

Easier deletion of CSS: tied to a specific component

Simple dynamic styling: props / global theme

Painless maintenance: styling affecting your component

Automatic vendor prefixing: current standard only

<br />

CSS in JS -> CSS 문제점 해소

해결책 -> 스타일을 style 태그로 분리

사용법(Template literals) -> styled.{element}``

styled(스타일드컴포넌트) -> 상속

<br />

& -> 가상 엘리먼트 / 가상 선택자

Global Style -> 전역 스타일

attrs -> props addition

keyframes / ThemeProvider -> Animation / Theme

<br />

---

<br />
