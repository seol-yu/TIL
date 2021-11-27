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



<br />

[목차로](#목차)

<br />

---

<br />

### Event_Handling

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Component_Lifecycle

<br />



<br />

[목차로](#목차)

<br />

