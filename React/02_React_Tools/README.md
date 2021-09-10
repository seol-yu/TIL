### 목차

[필요한 툴 설치](#툴_설치)

[중요한 툴들 설명](#툴_설명)

[리액트 툴](#리액트_툴)

[프로젝트 구조 설명](#프로젝트_구조)

[숨겨진 툴](#숨겨진_툴)

[유용한 개발툴과 익스텐션](#유용한_툴)

<br/>

---

<br />

### 툴_설치

<br />

필요한 것들: 터미널, 노드JS, git, yarn

<br />

* 터미널(커맨드로 필요한 기능 수행) <- iterm(맥), cmder(깃도 따라옴)

  기본 터미널 설치하거나 추가로 설치. 어떤 터미널 써도 무방

  https://cmder.net/

* 깃(소스 코드 버전 관리, 깃허브 업로드)

  `git --version` 으로 깃 설치 여부 확인

  git-scm.com/downloads 에서 운영체제에 맞게 설치

* 노드와 npm(노드를 설치하면 npm도 함께 설치됨)

  `node -v`

  `npm -v`

  버전이 안나오면 nodejs.org/en/ 가서 다운로드(안정적인 LTS버전)

  npm보다 성능 좋은 yarn 설치

  `npm install yarn --global`

  `yarn -v`

  <br />

  cf) 맥은 `brew install yarn`

  brew 설치 안되어있다면

  https://brew.sh/

  ```
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
  ```

  위 명령어를 터미널에 복붙해서 실행하면 설치됨

  <br />

  윈도우는

  https://classic.yarnpkg.com/en/docs/install/#windows-stable

  설치 파일 다운로드

  <br />

  https://gist.github.com/kevin-smets/8568070

<br />

[목차로](#목차)

<br />

---

<br />

### 툴_설명

<br />

노드JS <- 자바스크립트를 실행할 수 있는 환경

노드JS 덕분에 웹 브라우저 밖에서도, 즉 운영체제 위 or 노드JS 환경이 있다면 JS 코드 작성, 실행 가능

어느 곳에서나 자바스크립트로 프로그래밍이 가능하게 하는 프레임워크

백엔드 서버, 서버사이드 렌더링, 커맨드라인 툴, 스크립트 제작 등에 이용

<br />

npm <- 노드JS 설치시 함께 오는 패키지 매니저. 간단하게 명령어 하나로 라이브러리 ''설치'', 버전 ''업데이트'', 삭제 가능

npm 이용시 프로젝트에 package.json 이라는 파일이 생긴다

package.json <- 사용하는 외부 라이브러리들과 그들의 버전 정보들 들어있다

<br />

npx <- npm과 달리 설치하는게 아니라 원하는 라이브러리 ''실행''할 수 있게 도와줌

<br />

yarn <- 페이스북에서 만들어진 패키지 매니저. npm 위에서 동작해서 package.json 파일 그대로 유지, npm과 호환 가능. npm 보다 성능 좋고 보안 안전.

<br />

[목차로](#목차)

<br />

---

<br />

### 리액트_툴

<br />

create-react-app <- 공통적으로 사용하는 유용한 툴들 한번에 자동 설치

현업에선 이렇게 자동으로 하기 보단 필요한 것들 직접 컨피규레이션(Configuration)해서 사용하는 경우가 많다

<br />

`npx create-react-app 원하는프로젝트명`

`cd 플젝명`

`npm start`

create-react-app에는 VSCode에서 라이브서버 이용할 수 있듯 hot module reloading <- 작성하는 코드가 바로 브라우저에 업데이트되는 것까지 포함

<br />

우리는 yarn 이용

프로젝트 폴더 안에서 만들자

`yarn create react-app 플젝명`

`cd 플젝명`

`yarn start`

프로세스 중지할 땐 Ctrl + D

<br />

`code .` <- VSCode 에서 커맨드 팔레트 툴 열어서 Shell command 검색하면 Shell Comment: Install 'code' command in PATH 클릭 https://code.visualstudio.com/docs/editor/command-line

<br />

[목차로](#목차)

<br />

---

<br />

### 프로젝트_구조

<br />

* .gitignore

  깃 이그노어 파일에 명시된 폴더나 파일들은 깃에 정보가 유지되지 않음

  깃허브/깃에 추가하고 싶지 않은 것들. 깃이 더이상 트래킹X

* package.json

  npm에서 버전 관리 시 플젝 외부적으로 쓰이고 있는 라이브러리와 그 버전들 명시

  `yarn start` <- 리액트 스크립트의 스타트 실행하는 것과 동일

* README

  플젝 설명

* node_modules

  외부 라이브러리들 추가하면 여기에 자동적으로 추가됨

  package.json 안에 있던 애들 다 여기 들어와있음

* public

  사용자에게 배포할 때 외부적으로 보여지는 대표적인 애들이 들어있음

  favicon, index.html, 로고 이미지들..

* manifest.json

  PWA 프로그래시브 웹 어플리케이션 만들 때 필요

* robots.txt

  웹 크롤링 위해 이용

* src

  소스코드

  최상위에 있는 루트는 index.js에 있음

<br />

[목차로](#목차)

<br />

---

<br />

### 숨겨진_툴

<br />

create-react-app 툴 이용하면 깃도 초기화(.git <- 버전 관리할 때 작성되는 로그 파일)

<br />

`yarn eject` <- 숨겨져있는 유용한 툴들 열어볼 수 있는 명령어. 세부적 설정할 때만 열어봐야 함. 다시 포장 불가

config 폴더보이고 package.json에 많은 것이 더 보여짐.. 

<br />

create-react-app 이라는 툴 이용하면 바벨, 타입스크립트, eslint에 다양한 것들, 테스팅 관련된 것들, 제스쳐, postCSS, polyfill, 다양한 웹팩 기본적으로 설정된다는 것 확인

<br />

웹팩 <- 코드 모듈화해서 번들링해서 배포할 수 있게 도와줌

<br />

결론: 리액트 개발할 때는 바벨, 테스팅에 관련된 것들, 타입스크립트, eslint, 제스트, postCSS, 웹팩 등이 많이 사용되는구나

<br />

[목차로](#목차)

<br />

---

<br />

### 유용한_툴

<br />



<br />

[목차로](#목차)

<br />