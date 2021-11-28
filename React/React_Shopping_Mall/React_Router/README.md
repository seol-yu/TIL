## 리액트 라우터

<br />

### 목차

[React의 라우팅 이해](#React_라우팅_이해)

[Dynamic 라우팅](#Dynamic_라우팅)

[Switch와 NotFound](#Switch_NotFound)

[JSX 링크로 라우팅 이동](#JSX_링크로_라우팅_이동)

[JS로 라우팅 이동](#JS로_라우팅_이동)

[Redirect](#Redirect)

<br />

---

<br />

### React_라우팅_이해

<br />

`Single Page Application`

서버로부터 해당 url 데이터 받아오는 것이 아니고

하나의 큰 앱 전체 묶음 받아와서 Client (Browser)에서 url에 따라서 어떤 것을 보여줄지 결정

<br />

SPA 라우팅 과정

1. 브라우저에서 최초에 '/' 경로(루트 경로)로 요청을 하면
2. 서버는 React Web App을 내려준다
3. 내려받은 React App에서 '/' 경로에 맞는 컴포넌트를 보여준다
4. React App에서 다른 페이지로 이동하는 동작을 수행하면
5. 새로운 경로에 맞는 컴포넌트 보여준다

<br />

https://reactrouter.com/

`npm i react-router-dom`

* cra에 기본 내장된 패키지가 아님
* react-router-dom은 페이스북의 공식 패키지는 아니다
* 가장 대표적인 라우팅 패키지

<br />

`npx create-react-app react-router-example`

`cd react-router-example`

`npm i react-router-dom`

`npm start`

<br />

특정 경로에서 보여줄 컴포넌트 준비

* '/' => Home 컴포넌트
* '/profile' => Profile 컴포넌트
* '/about' => About 컴포넌트

<br />

https://reactrouter.com/docs/en/v6/getting-started/tutorial

<br />

[목차로](#목차)

<br />

---

<br />

### Dynamic_라우팅

<br />

버전 v6로 바뀌면서 코드 바뀜

<br />

`npm i query-string`

<br />

강의 진행이 어려워서

새로 플젝 만들고

`npm i react-router-dom@5`

<br />

url 동적으로 처리(동적 라우팅 처리)

<br />

?name=seolyu

쿼리 스트링

<br />

브라우저 내장 객체

URLSearchParams <- 브라우저 지원 안하는 경우도 있어서 `npm i query-string`

<br />

[목차로](#목차)

<br />

---

<br />

### Switch_NotFound

<br />

Switch

* 여러 Route 중 순서대로 먼저 맞는 하나만 보여줌
* exact 를 뺄 수 있는 로직을 만들 수 있음
* 가장 마지막에 어디 path 에도 맞지 않으면 보여지는 컴포넌트를 설정해서 "Not Found" 페이지를 만들 수 있음

<br />

[목차로](#목차)

<br />

---

<br />

### JSX_링크로_라우팅_이동

<br />

코드 참고

<br />

* import { NavLink } from 'react-router-dom';
* activeClassName, activeStyle 처럼 active 상태에 대한 스타일 지정이 가능
* Route 의 path 처럼 동작하기 때문에 exact 가 있음

<br />

[목차로](#목차)

<br />

---

<br />

### JS로_라우팅_이동

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Redirect

<br />



<br />

[목차로](#목차)

<br />

