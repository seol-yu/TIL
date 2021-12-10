<br />

### :thinking: Lifecycle?

탄생: 화면에 나타나는 것 `Mount` <- 초기화 작업

변화: 업데이트 (리렌더) Update <- 예외 처리 작업

죽음: 화면에서 사라짐 UnMount <- 메모리 정리 작업

<br />

---

<br />

아래 메서드들은 클래스형 컴포넌트에서만 사용 가능

ComponentDidMount

ComponentDidUpdate

ComponentWillUnmount

<br />

---

<br />

### React Hooks

`useState`

`useEffect`

`useRef`

<br />

---

<br />

React Hooks (2019.06 정식 출시)

Class형 컴포넌트의 길어지는 코드 길이 문제

중복 코드, 가독성 문제 등등을 해결하기 위해 등장

<br />

---

<br />

```react
import React, { useEffect } from "react";

useEffect(() => {
    // todo... <- Callback 함수
}, []);  // [] 는 Dependency Array (의존성 배열) - 이 배열 내에 들어있는 값이 변화하면 콜백 함수가 수행됨
```

<br />

---

<br />

https://jsonplaceholder.typicode.com/

<br />
