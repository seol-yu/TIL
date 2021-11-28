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

ESLint <- The pluggable linting utility for JavaScript and JSX

코딩 스타일 맞추기

<br />

`mkdir eslint-test`

`cd eslint-test`

`npm init -y`

`npm i eslint -D`

`npx eslint --init`

```js
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 13
    },
    "rules": {
        "semi": [
            "error",
            "always",
        ]
    }
};
```

`npx eslint index.js`

ESLint 플러그인 설치

`npx eslint index.js --fix` 고쳐줌

<br />

이전에 만든 프로젝트 보면

package.json에

```json
"eslintConfig": {
    "extends": [
        "react-app",
        "react-app/jest"
    ]
},
```

이 부분에

"rules" 추가해서 쓸 수 있다

```json
"eslintConfig": {
    "extends": [
        "react-app",
        "react-app/jest"
    ],
    "rules": {
        "semi": [
            "error",
            "always",
        ]
    }
},
```

<br />

[목차로](#목차)

<br />

---

<br />

### Prettier

<br />

An opinionated code formatter

<br />

https://prettier.io/

<br />

`mkdir prettier-test`

`cd prettier-test`

`npm init -y`

`npm i prettier -D`

<br />

`npx prettier index.js`

`npx prettier index.js --write` <- 바로 바꿔줌

<br />

플러그인 설치하고 설정 format에 검색해서 Prettier 설정하고 Format On Save 체크

<br />

.prettierrc.json 파일 만들고

```json
{
    "singleQuote": true
}
```

옵션 찾아서 설정하기

<br />

Command + Shift + P 해서 > Format Document

`"editor.formatOnSave": true,`

<br />

`eslint-config-prettier`

Prettier 에서 불필요하거나 Prettier 와 충돌할 수 있는 모든 규칙 끈다

이 구성은 규칙을 끄기만 하기 때문에 다른 설정과 함께 사용하는 것이 좋다

```js
{
    ...
    "eslintConfig": {
        "extends": [
            "react-app",
            "prettier"
        ]
    },
    ...
}
```

<br />

[목차로](#목차)

<br />

---

<br />

### husky

<br />

Git hooks made easy

<br />

`mkdir husky-test`

`cd husky-test`

`npm init -y`

`git init`

`npm i husky -D`

`npx husky install`

<br />

package.json의 scripts에

`"prepare": "husky install",` 추가

`npx husky add .husky/pre-commit "npm test"`

<br />

`git add -A`

`git commit -m 'husky test'`

<br />

[목차로](#목차)

<br />

---

<br />

### lint-staged

<br />

Run linters on git staged files

<br />

틱택토 프로젝트가서

`git init` <-

`npm i husky -D`

`npx husky install`

package.json의 scripts에

`"prepare": "husky install",` 추가

`npx husky add .husky/pre-commit "lint-staged"`

`npm i lint-staged -D`

<br />

package.json에

```json
"lint-staged": {
    "**/*.js": [
        "eslint --fix",
        "prettier --write",
        "git add"
    ]
},
```

`npm i prettier -D`

<br />

자동포맷저장 언체크하고 테스트해보기

.husky > pre-commit 에

npx lint-staged 로 npx 앞에 붙이기

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
