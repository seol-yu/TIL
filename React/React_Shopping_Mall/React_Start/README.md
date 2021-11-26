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

* Node.js <- LTS 다운
  * Installer
  * nvm <- `nvm install 버전` `nvm use 버전` `nvm alias default 버전`
* Browser (Chrome)
* Git
* VSCode

<br />

[목차로](#목차)

<br />

---

<br />

### React_Library

<br />

리액트의 핵심 모듈 2개

```jsx
// 1. 리액트 컴포넌트 => HTMLElement 연결하기
import ReactDOM from 'react-dom';

// 2. 리액트 컴포넌트 만들기
import React from 'react';
```

<br />

{ React 컴포넌트 } - JS, JSX => < HTMLElement >

"만들어진 리액트 컴포넌트"를 실제 HTMLElement에 연결할 때 ReactDOM 라이브러리 이용

https://reactjs.org/docs/react-dom.html

https://ko.reactjs.org/docs/react-dom.html

<br />

{ React Component } 만들기

리액트 컴포넌트 만들 때 사용하는 API 모음

https://reactjs.org/docs/react-api.html

https://ko.reactjs.org/docs/react-api.html

<br />

Use React, ReactDOM Library with CDN

CDN을 통한 리액트 라이브러리 사용

https://reactjs.org/docs/cdn-links.html

https://ko.reactjs.org/docs/cdn-links.html

<br />

폴더 만들고 `npm init -y`

`npx serve` <- 이 폴더를 마치 파일 서버처럼 운영할 수 있게 해주는 명령어

[코드 참고](./what-is-react/index.html)

<br />

고전 프론트엔드

HTML로 문서 구조를 잡고 CSS로 스타일을 입히고 JavaScript로 DOM 조작

<br />

컴포넌트를 활용한 프론트엔드

컴포넌트를 정의하고 실제 DOM에 컴포넌트를 그려준다

<br />

브라우저 지원 - React는 Internet Explorer 9과 상위 버전을 포함한 모든 주요 브라우저를 지원하지만 IE 9과 IE 10과 같은 구형 브라우저는 폴리필(polyfill)이 필요

주의) ES5 메서드를 지원하지 않는 구형 브라우저를 지원하지 않지만, 페이지에 es5-shim과 es5-sham과 같은 폴리필 포함한다면 앱이 구형 브라우저에서도 동작 가능..

<br />

[목차로](#목차)

<br />

