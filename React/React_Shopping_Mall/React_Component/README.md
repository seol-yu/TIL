## 리액트 컴포넌트

<br />

### 목차

[리액트 컴포넌트 만드는 법](#React_Component)

[React createElement로 컴포넌트 만들기](#React_createElement)

[JSX](#JSX)

[Props와 State](#Props_State)

[Event Handling](#Event_Handling)

[Component Lifecycle](#Component_Lifecycle)

<br />

---

<br />

### React_Component

<br />

Hooks 이전에는

* 컴포넌트 내부에 상태가 있다면?
  * class
* 컴포넌트 내부에 상태가 없다면?
  * 라이프사이클을 사용해야 한다면?
    * class
  * 라이프사이클에 관계 없다면?
    * function

<br />

Hooks 이후

* class
* function <- 상태, 라이프사이클 기능 이용 가능

<br />

Class 컴포넌트

```react
import React from 'react';

// 정의
class ClassComponent extends React.Component {
    render() {
        return (<div>Hello</div>);
    }
}

// 사용
<ClassComponent />
```

<br />

[코드 참고](./what-is-react/index.html)

<br />

Function 컴포넌트

```React
import React from 'react';

// 정의 1
function FunctionComponent() {
    return <div>Hello</div>;
}

// 정의 2
const FunctionComponent = () => <div>Hello</div>;

// 사용
<FunctionComponent />
```

<br />

[코드 참고](./what-is-react/index.html)

<br />

[목차로](#목차)

<br />

---

<br />

### React_createElement

<br />

```react
React.createElement(
	type, // 태그 이름 문자열 | 리액트 컴포넌트 | React.Fragment
    [props],  // 리액트 컴포넌트에 넣어주는 데이터 객체
    [...children]  // 자식으로 넣어주는 요소들
);
```

[코드 참고](./react-createElement/index.html)

<br />

[목차로](#목차)

<br />

---

<br />

### JSX

<br />

우리가 작성한 어떤 코드 => 순수하게 실행할 수 있는 자바스크립트 <- babel

<br />

JSX 문법으로 작성된 코드는 순수한 자바스크립트로 컴파일하여 사용 <- babel이 해줌

<br />

https://babeljs.io/

<br />

[코드 참고](./JSX/index.html)

<br />

왜 JSX 쓸까?

* React.createElement vs JSX - 가독성이 JSX가 훨씬 낫다
* babel과 같은 컴파일 과정에서 문법적 오류 인지하기 쉽다

<br />

JSX 문법

* `최상위 요소가 하나여야 한다`

* 최상위 요소 리턴하는 경우 () 로 감싸야 한다

* 자식들을 바로 렌더링하고 싶으면 <>자식들</> 을 사용 => `Fragment`

* 자바스크립트 표현식을 사용하려면 `{표현식}` 이용

* if 문은 사용 불가

  * `삼항 연산자 혹은 &&` 을 사용

* `style` 을 이용해 인라인 스타일링 가능

* class 대신 `className` 을 사용해 class 적용

* 자식요소가 있으면 꼭 닫아야하고 자식요소가 없으면 열면서 닫아야함

  ```jsx
  <p> ^_^ </p>
  <br />
  ```

<br />

[목차로](#목차)

<br />

---

<br />

### Props_State

<br />

`Props`는 컴포넌트 외부에서 컴포넌트에게 주는 데이터

`State`는 컴포넌트 내부에서 변경할 수 있는 데이터

둘 다 변경이 발생하면 렌더가 다시 일어날 수 있다

<br />

Render 함수

Props와 State를 바탕으로 컴포넌트 그린다

Props와 State가 변경되면 컴포넌트 다시 그린다

컴포넌트를 그리는 방법을 기술하는 함수가 렌더 함수

<br />

[코드 참고](./Props_State/index.html)

<br />

[목차로](#목차)

<br />

---

<br />

### Event_Handling

<br />

HTML DOM에 클릭하면 이벤트 발생하면 그에 맞는 변경이 일어나도록 해야함

JSX에 이벤트 설정 가능

```jsx
class Comp extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    console.log('clicked');
                }}>클릭</button>
            </div>
        );
    }
}
```

<br />

* 이벤트명은 camelCase 로만 사용 가능
  * onClick, onMouseEnter
* 이벤트에 연결된 자바스크립트 코드는 함수
  * 이벤트={함수} 와 같이 씀
* 실제 DOM 요소들에만 사용 가능
  * 리액트 컴포넌트에 사용하면 그냥 props 로 전달

<br />

[코드 참고](./Event_Handling/index.html)

<br />

[목차로](#목차)

<br />

---

<br />

### Component_Lifecycle

<br />

[코드 참고](./Component_Lifecycle/index.html)

<br />

리액트 컴포넌트는 탄생부터 죽음까지(그려지고 사라지는) 여러지점에서 개발자가 작업이 가능하도록 메서드를 오버라이딩할 수 있게 해줌

<br />

Declarative 디클레러티브

* Initialization
  * setup props and state
* Mounting
  * componentWillMount -> render -> componentDidMount
* Updation
  * props
    * componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
  * states
    * shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
* Unmounting
  * componentWillUnmount

<br />

위에는 Component 생성 및 마운트 v16.3 이전

constructor

componentWillMount

`render (최초 렌더)` <- 마운트

componentDidMount

<br />

Component props, state 변경 (< v16.3)

componentWillReceiveProps

shouldComponentUpdate

componentWillUpdate

render

componentDidUpdate

<br />

componentWillReceiveProps

* props를 새로 지정했을 때 바로 호출됨
* 여기는 state의 변경에 반응하지 않음
  * 여기서 props의 값에 따라 state를 변경해야 한다면
    * setState를 이용해 state를 변경
    * 그러면 다음 이벤트로 각각 가는 것이 아니라 한번에 변경됨

<br />

shouldComponentUpdate

* props만 변경되어도
* state만 변경되어도
* props & state 둘 다 변경되어도
* newProps와 newState를 인자로 해서 호출
* return type이 boolean
  * true 면 render
  * false면 render가 호출되지 않음
  * 이 함수를 구현하지 않으면 디폴트는 true

<br />

componentWillUpdate

* 컴포넌트가 재 렌더링되기 직전에 불림
* 여기선 setState 같은 것을 쓰면 안됨

<br />

componentDidUpdate

* 컴포넌트가 재 렌더링 마치면 불림

<br />

Component 언마운트 (< v16.3)

* componentWillUnmount

<br />

v16.3 이후

Component 라이프사이클 변경

constructor

componentWillMount => getDerivedStateFromProps

render

componentDidMount

componentWillReceiveProps => getDerivedStateFromProps

shouldComponentUpdate

render

componentWillUpdate => getSnapshotBeforeUpdate

(dom에 적용)

componentDidUpdate

componentWillUnmount

<br />

Component 에러 캐치

componentDidCatch

<br />

Error Boundaries

<br />

[목차로](#목차)

<br />

