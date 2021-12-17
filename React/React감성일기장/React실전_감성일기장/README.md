<br />

Page Routing

라우팅? 어떤 네트워크 내에서 통신 데이터를 보낼 경로를 선택하는 일련의 과정

라우터? 데이터의 경로를 실시간으로 지정해주는 역할을 하는 무언가

### `라우팅` 경로를 정해주는 행위 자체와 그런 과정들을 다 포함하여 일컫는 말

<br />

페이지 라우팅은

브라우저 -> /home -> 웹서버

웹 서버 -> Home.html -> 브라우저

Request에 따라서 어떤 페이지를 돌려줄지

<br />

Multipage Application `MPA`

페이지 이동시 화면 깜빡임

<br />

리액트는 `SPA` Single Page Application 단일 페이지 어플리케이션

리액트앱이 알아서 페이지 업데이트 `CSR` Client Side Rendering

화면 깜빡임 없음(페이지 이동 빠르고 쾌적)

<br />

리액트 라우터 라이브러리 이용

react router 구글링

<br />

`npm install react-router-dom@6`

`npm start`

<br />

---

<br />

React Router Dom의 유용한 기능

리액트 라우터 v6

React에서 CSR 기반의 페이지 라우팅을 할 수 있게 해주는 라이브러리

1. Path Variable  - useParams
2. Query String - useSearchParams
3. Page Moving - useNavigate

<br />

Query <- 웹 페이지에 데이터를 전달하는 가장 간단한 방법

/edit?id=10&mode=dark

=> Query String

<br />

---

<br />

프로젝트 기초 공사

1. 폰트 세팅

   Google Web Fonts를 이용한 프로젝트에 사용되는 폰트 세팅

2. 레이아웃 세팅

   모든 페이지에 반영되는 레이아웃 세팅

3. 이미지 에셋 세팅

   감정 이미지들을 프로젝트에서 불러와 사용할 수 있는 환경 세팅

4. 공통 컴포넌트 세팅

   모든 페이지에 공통으로 사용되는 버튼, 헤더 컴포넌트 세팅

<br />