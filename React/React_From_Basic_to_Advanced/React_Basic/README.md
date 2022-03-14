<br />

라이브러리: 개발 편의를 위한 도구의 모음(공구)

프레임워크: 기반 구조까지 잡혀있음(공장)

<br />

리액트 <- 생태계가 풍부(관련 라이브러리가 많고, 문제 해결 방법 찾기 쉽고, 실무에서 사용할 확률 높다)

<br />

Wappalyzer <- 어떤 라이브러리, 웹 기술 사용하는지 확인

<br />

Virtual DOM / JSX / Flux / Functional Programming...

좋은 라이브러리들(like. swr, framer motion...)

<br />

프로그래밍의 흥미, 탄탄한 기초, 새로운 것을 익힘, 혼자 할 수 있는 힘

<br />

공식문서 토대로, 그 안의 패턴을 찾고, 새로운 기술 익히는 요령 습득

<br />

---

<br />

DOM (Document Object Model) <- 브라우저가 이해하는 Element의 원형

문서를 논리 트리로 표현한다

<br />

https://codesandbox.io/

테스트해보기

<br />

CDN (Content Delivery Network)

웹에서 사용되는 다양한 컨텐츠(리소스)를 저장하여 제공하는 시스템

react document cdn

<br />

React <- 바닐라 자바스크립트에서 createElement에 해당하는 createElement

React-dom <- appendChild에 해당하는 render

<br />

---

<br />

JSX와 Babel, JSX 다루기

<br />

JSX <- 문자도 HTML도 아닌 JavaScript의 확장 문법

```jsx
const element = <h1>Hello, world!</h1>;
```

<br />

Babel

JavaScript Compiler(컴파일러: 언어 해석기, 특정 언어를 다른 프로그래밍 언어로 옮기는 프로그램)

<br />

babel unpkg cdn link 구글링

<br />

JSX -> React.createElement 표현식

Babel -> JavaScript Compiler

JSX 다루기 -> spread 연산자

<br />

---

<br />

React.Fragment

<></>

<br />

---

<br />

Element 찍어내기

<br />

function -> 재사용 가능한 Element

Custom Element -> Upper case

Children 제한 -> 없음

<br />

---

<br />

JS 와 JSX 섞어쓰기

<br />

Interpolation -> 이미 HTML에서 쓰고 있었다

<br />

---

<br />

바닐라 JS -> 변경으로 인해 Element를 다시 그림

React -> 변경된 부분만 다시 그림

<br />

---

<br />

React 앨리먼트는 불변객체(immutable)이다

<br />

불변객체란 `변하지 않는 객체`

ReactDOM.render(element, rootElement); 로 전달하면

변경 판단 및 반영은 리액트가 알아서 한다

<br />

앨리먼트 타입이 바뀌면?

이전 앨리먼트는 버리고 새로 그린다

앨리먼트 타입이 같다면?

(key를 먼저 비교하고,) props를 비교해서 변경사항 반영

<br />

리액트의 앨리먼트 -> 불변 객체

변견 사항 반영 -> 리액트에게 일임

리액트의 비교 -> Reconciliation

Virtual Dom -> 비교시 활용

<br />

---

<br />

바닐라JS에서는

addEventListener

on{event} onclick onmouseout onfocus onblur ...

<br />

React JS에서는 카멜 케이스

on{Event} onClick onMouseCut onFocus onBlur ...

<br />

기본 문장 on click

카멜 케이스 onClick

파스칼 케이스 OnClick

케밥 케이스 on-click

스네이크 케이스 on_click

<br />

이벤트 핸들러

Object.assign -> 객체 내용 복사

전역 변수 변경 -> ReactDOM.render

<br />

---

<br />

컴포넌트 상태 다루기

<br />

useState

<br />

DOM: 논리 트리

컴포넌트: 앨리먼트의 집합

앨리먼트: 요소

<br />

---

<br />

컴포넌트 사이드 이펙트 다루기

사이드 이펙트 = 부작용

의도하지 않은 효과 vs 부수 효과

`useEffect`

<br />

useState -> lazy initialize

useEffect -> dependency array

<br />

---

<br />

커스텀 훅 만들기

use{Name}

<br />

---

<br />

반복되는 기능

찍어내기 / 반복 => 함수화

useState / useEffect 반복 => 커스텀 훅

<br />

---

<br />



<br />

---

---

<br />

공식문서

라이브러리 <- 만든 사람이 있고, 만든 목적과 도구의 상용법 정리해둠

<br />

리액트 공식문서 <- 친절, 한국어 번역, Tutorial 있음

<br />

MDN / React Document

<br />

바로 사용 vs 이해 해보기

연습 / 반복

<br />

공식 문서 -> 라이브러리 설명서

공식 문서 읽기 -> 리액트로 시작 후 반복 숙달

<br />

---

<br />

Visual Studio Code (vscode)

https://github.com/microsoft/vscode

자바스크립트로 만들어진 IDE(통합 개발 환경)

<br />

Extensions 필요한거 설치

<br />

Create React App 리액트 앱 만들어보기

https://ko.reactjs.org/docs/create-a-new-react-app.html

<br />

`npx create-react-app my-app`

`cd my-app`

`npm start`

<br />

Node 설치 <- 로컬(컴퓨터)에서 리액트 앱 돌아갈 수 있도록 해주는 환경

npm(node package manager)도 자동 설치됨

npm이 설치되면 npx(node package runner)도 자동으로 설치됨

<br />

`node -v`

`npm -v`

`npx -v`

<br />

---

<br />

JSX 없이 사용하는 React

https://ko.reactjs.org/docs/react-without-jsx.html

<br />

JSX <- React.createElement 간편 표현식

https://ko.reactjs.org/docs/introducing-jsx.html

<br />

---

<br />

Props

https://ko.reactjs.org/docs/components-and-props.html

<br />

ES7+ React/Redux/React-Native snippets 익스텐션 설치

rfc 엔터

<br />

Props -> 컴포넌트에 전달되는 단일 객체

순수함수처럼 동작 -> Props 자체를 수정해서는 안됨

컴포넌트 합성 -> 여러 컴포넌트를 모아서

컴포넌트 추출 -> 여러곳에서 사용되거나 복잡한 경우

<br />

---

<br />

State and Lifecycle

https://ko.reactjs.org/docs/state-and-lifecycle.html

<br />

익스텐션

ESLint

indent-rainbow

npm

Prettier

Rainbow Brackets

vscode-icons

<br />

컴포넌트 내의 상태 -> 자신의 출력값을 변경

Class component -> State LifeCycle

Functional component -> 훅으로 관리

유의사항 -> 직접 수정X / 비동기적일 수 있음

<br />

---

<br />
