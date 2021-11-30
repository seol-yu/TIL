### 목차

[Redux 개요](#Redux_개요)

[Action - 액션](#Action)

[Reducers - 리듀서](#Reducers)

[createStore](#createStore)

[combineReducers](#combineReducers)

[Redux를 React에 연결](#Redux_React_연결)

<br />

---

<br />

### Redux_개요

<br />

전달만하는 중간 컴포넌트 문제

해결위해 Context API 사용

전역 데이터 잘 활용하는 것이 중요

Redux <- 라이브러리

<br />

STORE 안에 있는 상태 변경되면 자동으로 렌더 다시됨

상태 변경, 상태 받아서 렌더

<br />

1. `단일 스토어` 만드는 법

   * [만들기] 단일 스토어 사용 준비
     * import redux
     * 액션을 정의
     * 액션을 사용하는 리듀서 만들고
     * 리듀서들을 합친다
     * 최종 합쳐진 리듀서를 인자로, 단일 스토어를 만든다

2. 리액트에서 스토어 사용하는 법

   [사용하기] 준비한 스토어를 리액트 컴포넌트에서 사용

   * import react-redux
   * connect 함수를 이용해서 컴포넌트에 연결

<br />

`npx create-react-app redux-start`

`cd redux-start`

`npm i redux`  <- 스토어를 만들 수 있는 리덕스 라이브러리 설치

`npm start`

<br />

[목차로](./목차)

<br />

---

<br />

### Action

<br />

액션은 스토어에 전달되면 스토어에 있는 상태 변경

* 액션은 그냥 객체(object)
* 두 가지 형태의 액션
  * { type: 'TEST' }  // payload 없는 액션
  * { type: 'TEST', params: 'hello' }  // payload 있는 액션
* type 만이 필수 프로퍼티이며, type은 문자열

<br />

리덕스의 액션 생성자

`function 액션생성자(...args) { return 액션; }`

* 액션을 생성하는 함수를 "액션 생성자(Action Creator)" 라고 함
* 함수를 통해 액션을 생성해서, 액션 객체를 리턴
* createTest('hello');  // { type: 'TEST', params: 'hello' } 리턴

<br />

리덕스의 액션이 하는 일

* 액션 생성자를 통해 액션을 만들어 냄
* 만들어낸 액션 객체를 리덕스 스토어에 보냄
* 리덕스 스토어가 액션 객체를 받으면 스토어의 상태 값이 변경됨
* 변경된 상태 값에 의해 상태를 이용하고 있는 컴포넌트가 변경됨
* 액션은 스토어에 보내는 일종의 인풋이라 생각할 수 있다

<br />

액션을 준비하기 위해서는?

* 액션의 타입을 정의하여 변수로 빼는 단계
  * 강제는 아님(안해도 됨)
  * 그냥 타입을 문자열로 넣기에는 실수 유발 가능성이 큼
  * 미리 정의한 변수를 사용하면 스펠링에 주의를 덜 기울여도 됨
* 액션 객체를 만들어 내는 함수를 만드는 단계
  * 하나의 액션 객체를 만들기 위해 하나의 함수를 만들어냄
  * 액션의 타입은 미리 정의한 타입 변수로 부터 가져와서 사용

<br />

[목차로](./목차)

<br />

---

<br />

### Reducers

<br />



<br />

[목차로](./목차)

<br />

---

<br />

### createStore

<br />



<br />

[목차로](./목차)

<br />

---

<br />

### combineReducers

<br />



<br />

[목차로](./목차)

<br />

---

<br />

### Redux_React_연결

<br />



<br />

[목차로](./목차)

<br />