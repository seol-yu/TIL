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



<br />

[목차로](#목차)

<br />

---

<br />

### react-dom

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 디버깅_툴

<br />



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