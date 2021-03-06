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

[목차로](#목차)

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

[목차로](#목차)

<br />

---

<br />

### Reducers

<br />

리듀서는 액션을 주면 그 액션이 적용되어 달라진(안달라질수도) 결과를 만들어주는 함수

* Pure Function
* Immutable <- original 객체와 새로 만들어진 객체 별도로
  * 리듀서를 통해 스테이트가 달라졌음을 리덕스가 인지하는 방식

```javascript
function 리듀서(previousState, action) {
    return newState;
}
```

* 액션을 받아서 스테이트를 리턴하는 구조
* 인자로 들어오는 previousState와 리턴되는 newState는 다른 참조를 가지도록 해야함

<br />

[목차로](#목차)

<br />

---

<br />

### createStore

<br />

redux로 부터 import

<br />

스토어를 만드는 함수

const store = createStore(리듀서);

* ```
  createStore<S>(
  	reducer: Reducer<S>,
  	preloadedState: S,
  	enhancer?: StoreEnhancer<S>
  ): Store<S>;
  ```

* `store.getState();`  // 현재 스토어의 state 를 가져오는 함수
* `store.dispatch(액션);`, `store.dispatch(액션생성자());`
* `const unsubscribe = store.subscribe(() => {});`
  * 리턴이 unsubscribe 라는 점
  * unsubscribe(); 하면 제거
* `store.replaceReducer(다른리듀서);`

<br />

[목차로](#목차)

<br />

---

<br />

### combineReducers

<br />

redux 로 부터 import

<br />

[목차로](#목차)

<br />

---

<br />

### Redux_React_연결

<br />

react-redux 안쓰고 연결하기

<br />

단일 store를 만들고,

subscribe와 getState를 이용하여 변경되는 state 데이터를 얻어 props로 계속 아래로 전달

* componentDidMount - subscribe
* componentWillUnmount - unsubscribe

<br />

react-redux 쓰고 연결하기

* Provider 컴포넌트를 제공해준다
* connect 함수를 통해 '컨테이너'를 만들어준다
  * 컨테이너는 스토어의 state와 dispatch(액션)를 연결한 컴포넌트에 props로 넣어주는 역할을 한다
  * 필요한 것은
    * 어떤 state를 어떤 props에 연결할 것인지에 대한 정의
    * 어떤 dispatch(액션)을 어떤 props에 연결할 것인지에 대한 정의
    * 그 props를 보낼 컴포넌트를 정의

`npm i react-redux`

<br />

[목차로](#목차)

<br />