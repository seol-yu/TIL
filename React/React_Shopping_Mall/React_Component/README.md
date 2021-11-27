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

