<br />
<a href="https://github.com/seol-yu/TIL/tree/master/NodeJS/노드_백엔드">
  <img src="https://github.com/seol-yu/TIL/raw/master/images/nodejs-badge-logo.png?raw=true" height="30" style="max-width: 100%;">
</a>
<br />

### 목차

[필요한 툴들 설치](#필요한_툴들)

[REPL이란](#REPL)

[노드 파일로 실행](#노드_파일로_실행)

<br />

---

<br />

### 필요한_툴들

<br />

Terminal (iTerm2, cmder <- 윈도우 분할이 됨)

Editor (Visual Studio Code)

Node (nodejs.org/en/ 에서 LTS 버전 설치. `node -v`)

Git (git-scm.com `git --version`)

Postman (Rest API 만들 때 API 테스트, 자동화툴로 여러 테스트)

<br />

[목차로](#목차)

<br />

---

<br />

### REPL

<br />

Read Eval Print Loop

사용자에게 인풋을 받아서 계산을 한 후 계산된 결과를 프린트하고 이걸 무한 반복

<br />

`node`

`console.log('hello')`

`const x = 0;`

`x`

```javascript
function add (x, y) {
	return x + y;
}
add(3, 4)
```

<br />

종료는 `Ctrl + C` or `Ctrl + D` or `.exit` 

<br />

[목차로](#목차)

<br />

---

<br />

### 노드_파일로_실행

<br />

node 폴더 만들고

VSCode로 열기

main.js 파일 만들어서 `console.log('Hello World!');`

코드 쓰고

`node main`

<br />

[목차로](#목차)

<br />