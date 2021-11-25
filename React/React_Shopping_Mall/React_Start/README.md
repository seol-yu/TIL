## 리액트 시작

<br />

### 목차

[React Concept](#React_Concept)

[개발 환경 체크](#개발_환경)

[React 라이브러리](#React_Library)

<br />

---

<br />

### React_Concept

<br />

키워드

* Angular vs React vs Vue
* View를 다루는 라이브러리
* Only Rendering & Update
  * NOT included another functionality (ex. httml client, ...)
* Component Based Development
  * 독립적인 코드 블럭 (HTML + CSS + JavaScript)
  * 작업의 단위
* Virtual DOM
  * DOM 직접 다루지 않음
* JSX
  * NOT Templates
  * transpile to JS (Babel, TypeScript)
* CSR & SSR

<br />

npm trends 보면 리액트 많이 쓰이는 것을 확인 가능

앵귤러 <- Full Development(테스팅, 애니메이션, 접근성), 앵귤러라는 웹 프레임워크에서 모든 것을 제공(http client, 인증 등). 풀 프레임워크 지향

리액트 <- View 업데이트에 초점. A JavaScript library for building user interfaces. 라이브러리 지향

뷰 <- The Progressive JavaScript Framework(:rabbit::rabbit:). 라이브러리처럼 or 프레임워크처럼

<br />

리액트는 컴포넌트 베이스드 디벨롭먼트

```jsx
<!-- HTMLElement -->
<img src="이미지 주소" />
<button class="클래스 이름">버튼</button>

<!-- 내가 만든 컴포넌트 -->
<내가지은이름1 name="Seolyu" />
<내가지은이름2 prop={false}>내용</내가지은이름2>

<!--
- src, class, name, props 밖에서 넣어주는 데이터
- 문서(HTML), 스타일(CSS), 동작(JS)를 합쳐서 내가 만든 일종의 태그
-->
```

<br />

Component Tree / DOM Tree

돔트리는 브라우저 내장된 표현 목록에서 가져와서 표현

컴포넌트는 내장된 태그들 조합 + 스타일 + 동작 => 문서 스타일, 표현, 동작 한번에 다루는 형태를 만들어서 재활용

<br />

Virtual DOM

* DOM을 직접 제어하는 경우
  * 바뀐 부분만 정확히 바꿔야 함
* DOM 직접 제어하지 않는 경우
  * 가상의 돔 트리 사용
  * 이전 상태와 이후 상태 비교
  * 바뀐 부분 찾아내서 자동으로 바꿈

<br />

Virtual DOM - diff 로 변경

State Change -> Compute Diff -> Re-render

<br />

React Client Side Rendering

`CSR`

Server Sending Response to Browser

Browser Downloads JS

Browser executes React

Page Now Viewable and Interactable

<br />

React Server Side Rendering

`SSR`

Server Sending Ready to be rendered HTML Response to Browser

Browser Renders the page, Now Viewable, and Browser Downloads JS

Browser executes React

Page Now Interactable

<br />

CSR vs SSR

* CSR
  * JS가 전부 다운로드되어 리액트 애플리케이션이 정상 실행되기 전까지는 화면 안보임
  * JS가 전부 다운로드되어 리액트 애플리케이션이 정상 실행된 후 화면이 보이면서 유저가 인터랙션 가능
* SSR
  * JS가 전부 다운로드되지 않아도 일단 화면은 보이지만 유저가 사용 못함
  * JS가 전부 다운로드되어 리액트 애플리케이션이 정상 실행된 후 유저가 사용 가능

<br />

[목차로](#목차)

<br />

---

<br />

### 개발_환경

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### React_Library

<br />



<br />

[목차로](#목차)

<br />

