## 리액트 프로젝트 제작

<br />

### 목차

[Create React App](#Create_React_App)

[ESLint](#ESLint)

[Prettier](#Prettier)

[husky](#husky)

[lint-staged](#lint-staged)

[Create React App 시작 코드 이해](#Create_React_App_시작_코드_이해)

[리액트 컴포넌트 디버깅](#리액트_컴포넌트_디버깅)

<br />

---

<br />

### Create_React_App

<br />

https://create-react-app.dev

CRA - 페이스북 오픈소스

<br />

`npx create-react-app tic-tac-toe`

npx는 npm 5.2.0 이상부터 함께 설치된 커맨드라인 명령어

<br />

`cd tic-tac-toe`

<br />

package.json의 dependencies 보면 react, react-dom 있고

react-scripts(create-react-app의 라이브러리. create-react-app의 버전과 같다) 있다

<br />

`npm start` 개발모드로 로컬에 띄우기(소스코드 수정 -> 브라우저 자동 새로고침 변경사항 반영)

`npm run build` 최종적으로 빌드(코드 작고 못생기게 최적화)

`npx serve -s build` 빌드 실행

`npm test` jest 기반 테스트 코드 수행

`npm run eject` create-react-app 관리 받지 않겠다. create-react-app 제공하지 않는 범위의 변경사항 설정 추가할 때 씀. 돌이킬 수 없으므로 가급적 사용X. config 폴더 생기고 package.json에 dependencies에 각종 패키지가 나타남. Jest, Babel, ESLint 설정 추가, react-scripts 사라짐

<br />

`npm install serve -g`

`serve -s build`

serve라는 패키지를 전역으로 설치하고 serve 명령어를 -s 옵션으로 build 폴더를 지정하여 실행

-s 옵션은 어떤 라우팅으로 요청해도 index.html을 응답하도록 함

* `_tests_` 폴더 안의 .js 파일
* `.test.js` 로 끝나는 파일
* `.spec.js` 로 끝나는 파일

자동으로 추적해서 테스트 코드로 사용

<br />

webpack <- 파일 확장자에 맞는 loader에게 위임

ex) js, jsx -> babel-loader(babel config 안에서 어떤 문법을 번역할지 설정), css -> css-loader

<br />

[목차로](#목차)

<br />

---

<br />

### ESLint

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Prettier

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### husky

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### lint-staged

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Create_React_App_시작_코드_이해

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 리액트_컴포넌트_디버깅

<br />



<br />

[목차로](#목차)

<br />
