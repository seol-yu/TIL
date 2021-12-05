### 목차

[React가 필요한 이유](#React_필요성)

[Create React App](#Create_React_App)

[JSX](#JSX)

<br />

---

<br />

### React_필요성

<br />

문제 발생 Shotgun Surgery (사유: 중복 코드 작성)

<br />

중복될 요소들을 별도의 모듈로 - 컴포넌트화 방식

<br />

React는 Component 기반의 UI 라이브러리

<br />

명령형 프로그래밍 - 절차를 하나하나 다 나열해야함(ex. jQuery)

선언형 프로그래밍 - 그냥 목적을 바로 말함(Plus 누르면 result 값에 +1을 하고 Minus를 눌렀다면 반대로 한다 ex. React)

<br />

Virtual Dom - 가상돔

State Change -> Compute Diff -> Re-render

<br />

[목차로](#목차)

<br />

---

<br />

### Create_React_App

<br />

React.js <- Node 기반의 Javascript UI 라이브러리

추가적인 라이브러리

* Webpack <- 다수의 자바스크립트 파일을 하나의 파일로 합쳐주는 모듈 번들 라이브러리
* Babel <- JSX 등의 쉽고 직관적인 자바스크립트 문법을 사용할 수 있도록 해주는 라이브러리

<br />

`Create React App`

이미 세팅 완료된 패키지 Boiler Plate

<br />

`npx -v`

`node -v`

`npm -v`

`npm install -g npx` <- 설치

<br />

`npx create-react-app reactpjt1`

`cd reactpjt1`

`npm start`

<br />

src에 index.js가 실행되면서

public에 index.html에 있는 id가 root인 div 아래로

App.js안에 있는 App 함수가 리턴하는 값들이 들어감

<br />

[목차로](#목차)

<br />

---

<br />

### JSX

<br />

index.js에서 최상위 컴포넌트 정의할 수 있다

보통 App으로

<br />

[목차로](#목차)

<br />

---

