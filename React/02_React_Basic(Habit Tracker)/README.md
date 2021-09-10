### 목차

[리액트 전반적인 개념 정리 클래스와 함수 컴포넌트](#클래스_vs_함수_컴포넌트)

[템플릿 프로젝트 만들기](#템플릿_프로젝트_만들기)

[프로젝트 만들기 react-dom](#react-dom)

[App 컴포넌트 시작 디버깅 툴 소개](#디버깅_툴)

[JSX 정리 HTML과 차이점](#JSX)

[Habit 컴포넌트 만들기](#Habit_컴포넌트)

[State 이해하기](#State)

[Props](#Props)

[Habits 컴포넌트 만들기 State up, list key](#Habits_컴포넌트)

[이벤트 처리](#이벤트_처리)

[App 컴포넌트 만들어보기](#App_컴포넌트_만들어보기)

[Navbar 컴포넌트 만들기](#Navbar_컴포넌트)

[Add Form 만들기 Refs 이용](#Add_Form)

[Reset 처리](#Reset_처리)

[PureComponent 정리와 차이점 이해(성능 분석)](#PureComponent_성능_분석)

[PureComponent 활용](#PureComponent_활용)

[Lifecycle 함수들 이해](#Lifecycle_함수들)

[function 컴포넌트](#function_컴포넌트)

[React Hook](#React_Hook)

[자바스크립트 오브젝트 가변성](#Spread_Operator)

[리액트 컴포넌트 종류와 훅](#리액트_컴포넌트_훅)

[왜 State 오브젝트를 수정하면 안되나](#State_오브젝트)

<br />

---

<br />

### 클래스_vs_함수_컴포넌트

<br />

리액트는 컴포넌트들

<br />

* 클래스 컴포넌트

  ```react
  import React from 'react';
  
  class LikeButton extends Component {
      state = {
          numberOfLikes: 0,
      };
  	render() {
          return <button>
              {this.state.numberOfLikes}
          </button>
      }
  }
  
  export default LikeButton;
  ```

  리액트에서 제공하는 컴포넌트라는 클래스를 extends 상속해서 만들 수 있다

  컴포넌트가 스테이트가 있고 그 상태에 따라 컴포넌트가 주기적으로 업데이트 되어야하면 클래스 컴포넌트 씀

  <br />

  클래스(<- 관련 데이터 함수들이 묶여져 있는 것)에는 컴포넌트에서 가지고 있는 상태, 데이터를 담을 수 있는 스테이트라는 오브젝트가 들어 있다

  그래서 스테이트가 변경되면 렌더 함수가 호출 되면서 업데이트된 내용이 사용자에게 보여짐

  <br />

  lifecycle methods 라이프 사이클 메소드(컴포넌트가 사용자에게 보여질 때, 돔트리에 올라갔을/나왔을 때, 컴포넌트가 업데이트 되었을 때 등등 다양한 컴포넌트 상태에 따라 구현해 놓은 함수 알아서 불러주는)

<br />

* 함수(function) 컴포넌트

  ```react
  function App() {
      return <h1>Hello</h1>
  }
  ```

  간단하게 함수로 만들 수 있다

  컴포넌트에 상태가 없고 항상 정적으로 데이터가 표기될 경우 함수 컴포넌트 씀

  <br />

  스테이트, 라이프사이클 메소드 없음

  함수(<- 한 가지 기능을 수행하는 단위)

  <br />

  리액트 16.8 버전부터는 함수에서도 클래스에서 했던 것처럼(스테이트, 라이프사이클 메소드) 할 수 있는 리액트 훅 도입  <- 클래스가 어려우니까. 클래스는 멤버 변수 접근할 때 항상 this 붙임. 클래스에서 함수 이용하면 바인딩 이슈 있음.  functional programming

  <br />

  클래스 컴포넌트에는 라이프 사이클 메소드가 있다

  컴포넌트가 마운트/언마운트/업데이트 되었을 때 세부적으로 함수가 나뉘어져있어서 중복된 코드 작성해야 하는 경우가 있었지만 리액트 훅 이용하면 중복 줄일 수 있다

<br />

- React.Component
  - React.PureComponent
- function
  - memo(function) <- 함수형 컴포넌트. Higher Order Component(고차 컴포넌트)라고 부르기도 함.
  - React Hook

cf) JSK, State, Props, SyntheticEvents, refs, Lifecycle methods, Lists and keys, developer tools, techniques

<br />

[목차로](#목차)

<br />

---

<br />

### 템플릿_프로젝트_만들기

<br />

create react-app 툴 이용하면 필요 없는 것들도 기본적으로 많이 생기므로

필요한 템플릿 프로젝트를 만들어보자

<br />

`yarn create react-app template`

터미널 윈도우 두가지 준비

한쪽은 yarn 커맨드 / 다른 곳은 다른 커맨드

<br />

`cd template`

`yarn start`

다른 터미널에서는

`cd template`

`code .`

<br />

프로젝트 구조 보면

* public

  정적인 애들. 사용자가 한번에 받아서 컨텐츠가 변하지 않는 HTML, 이미지, 리소스 등

* src

  컨텐츠가 다이나믹하게 동적으로 변화되는 소스코드들

<br />

public과 src의 차이점은 웹팩에서 특히 중요한데

웹팩에서는 빌드할 때마다 자바스크립트의 유니크한 고유 버전(날짜, 시간..)이 할당됨

사용자가 웹 어플리케이션을 다운로드 받았고 자바스크립트가 변경되지 않았으면 

예전 그 고유 번호가 할당되어서 걔들은 캐쉬가 되어있어서 새로 다운로드 받지 않아도 됨

<br />

public에는 static(정적)한 애들

소스(src)에는 다이나믹한 애들이 들어감

<br />

public - index.html

apple-touch-icon 이거는 PWA(Progressive Web App)에 필요한 것으로 지워줌

manifest.json도 지움

코멘트들 지움

<br />

noscript는 사용자가 브라우저에서 자바스크립트를 enable(활성화)하지 않았을 때 보여주는 메세지

리액트는 자바스크립트만으 이용해서 동적으로 만드는 애라서 사용자가 자바스크립트 쓰지 않으면 어플리케이션이 돌아가지 않으므로 이렇게 경고문을 보여주는 것이다

놔둔다

<br />

manifest.json 파일 지우고

웹 크롤러가 쓰는 robots.txt 지우고 로고들도 지우자

<br />

src에서는 serviceWorker.js(백그라운드에서 프로세스 쓸 때, 오프라인 제공할 때, PWA 프로그레시브 웹앱에서 쓰임) 지움.. 난 reportWebVitals.js 를 지웠다

setupTests.js 도 지움

logo.svg랑 App.test.js 지움

App.js에서 logo.svg import하는 부분 지우고

index.js에서는 serviceWorker(난 reportWebVitals) import하는 부분 지운다

<br />

App.js에서 return 안에 다 지우고

`<h1>Hello :)</h1>`

<br />

소스(src) 안에 공통적으로 사용하는 컴포넌트를 폴더(components)를 만들어 따로 넣는다

파일 이름 소문자로 시작하도록 변경(app.css / app.jsx)

순수 자바스크립트 클래스, 파일과 구분하고 예쁜 아이콘 갖기 위해 App.js -> app.jsx 쓰기

<br />

index는 엄밀히 말하면 자바스크립트. 컴포넌트가 아님. 단순히 연결해주는 역할이니까 index.js 그대로

import 부분 변경

<br />

[목차로](#목차)

<br />

---

<br />

### react-dom

<br />

윈도우에서는 폴더에 공백없게 유의

<br />

Ctrl + C 프로세스 중지

폴더 밖에 나가서

`cp -R template habit-tracker`

그냥 복붙함(config gensync-utils parser transform node_modules core tools transformation ....대상 폴더에 대한 파일 이름이 너무 길다는 메세지가 뜸)

<br />

리액트 <- 순수 자바스크립트. 이 자바스크립트 이용해서 컴포넌트들을 만들어 나감

브라우저는 HTML, CSS, 순수 자바스크립트만을 이해 가능

바벨(Babel)을 이용해 순수 JS로 변환됨

변환된 컴포넌트를 HTML과 연결하는 작업을 하게 해주는 것이 react-dom

<br />

사용자에게 궁극적으로 배포되어지는 것 => index.html

index.html에 body에 div 아이디가 root

root 이용해서 자바스크립트와 연결

index.js 보면

react-dom 이라는 라이브러리에서 ReactDOM 클래스를 import

가져온 ReactDOM 이라는 클래스에 있는 render 함수 이용해서 document 페이지에 id가 root 라는 요소(index에 있는 아이디가 root인 div) 가지고와서 그 요소에 root 컴포넌트 연결

=> root 라는 아이디를 가진 요소에 제일 상위에 있는 App 이라는 컴포넌트를 연결하는 것이다(개발툴로 확인 가능)

<br />

App 이라는 것은

**app.jsx**에 function App() {} 여기에 정의된 컴포넌트

<br />

index.js에 <React.StrictMode></React.StrictMode>

StrictMode는 자바스크립트 쓸 때 'use strict' 이용해 엄격한 모드로 코딩하고

조금 잘못하면 콘솔에서 에러 메세지 발생했듯

React.StrictMode 모드 이용

개발할 때 이용하고 배포할 땐 이 상태로 배포해도 배포 버전에선 StrictMode 활성화 안되어서 사용자가 콘솔에서 에러메세지 볼 수 없다

<br />

플젝 복사 후, 나중에 프로젝트 하다가 컴파일 문제 생기는 등 뭔가 이상하면

`yarn && yarn start`

프로젝트에 필요한 모듈을 다시 재설치하고나서 플젝 시작

<br />

[목차로](#목차)

<br />

---

<br />

### 디버깅_툴

<br />

크롬 익스텐션 React developer tool - Components에서 

컴포넌트 구조

State(컴포넌트에서 가지고 있는 데이터)

Props(내 컴포넌트에서 가지고 있는 State가 아닌 부모로부터 받아온 데이터. properties(속성))

확인 가능

<br />

[목차로](#목차)

<br />

---

<br />

### JSX

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Habit_컴포넌트

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### State

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Props

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Habits_컴포넌트

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 이벤트_처리

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### App_컴포넌트_만들어보기

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Navbar_컴포넌트

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Add_Form

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Reset_처리

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### PureComponent_성능_분석

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### PureComponent_활용

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Lifecycle_함수들

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### function_컴포넌트

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### React_Hook

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Spread_Operator

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 리액트_컴포넌트_훅

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### State_오브젝트

<br />



<br />

[목차로](#목차)

<br />