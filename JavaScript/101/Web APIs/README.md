Web APIs 이해

[Web APIs란?](#WEB APIs)

[Browser 구조 분석](#Browser 구조 분석)

<br/>

---

<br/>

### WEB APIs

APIs : Application Programming Interfaces

브라우저에 대해 완벽히 이해
브라우저 자체 제공 API가 많다<br />
ex) DOM APIs, Network APIs, Graphics APIs, Audio/Video APIs, Device APIs, File APIs, Storage APIs ..

<br />

Web APIs Security

사용자의 권한 요청이나, HTTPs 를 요구할 수 있음

<br />

:sparkles: HTTP(Hypertext Transfer Protocol) <- 웹 클라이언트와 서버가 어떻게 통신하는지 통신 규약을 정해 놓은 것

클라이언트가 서버에게 정보를 요청하고 다시 서버에서 정보를 받아오는, request/response 방식으로 이루어짐

:sparkles: HTTPs(Hypertext Transfer Protocol Secure) <- 정보를 주고 받는 것들이 잘 감싸져서 보안 처리 잘 된 애

HTTP에서 패스워드 입력해서 서버에 보내면 아무런 encryption(보안처리)이 일어나지 않는데

HTTPs는 secure하게 encrypt 되어 '암호키' 이용해서 보안 처리 됨

<br />

**MDN Web API:**

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction

**Web API collection:**

https://developer.mozilla.org/en-US/docs/Web/API

**Security:**

https://www.thoughtco.com/what-javascript-cannot-do-2037666

<br />

---

<br />

### Browser 구조 분석

Window(전체적인 오브젝트) <- 브라우저 전체 창

Document <- 윈도우 안에 페이지가 표기되는 부분

Navigator <- 사용자 눈엔 안보이는 브라우저 관련 정보 담겨있는 오브젝트

<br />

window

* DOM <- document ...
* BOM <- navigator, location, fetch, storage ...
* JavaScript <- Array, Map, Date ...

<br />

`console.log(window)`  <- 윈도우 관련 다양한 함수, 오브젝트 확인

`console.log(this)`

Window는 글로벌 오브젝트라서

`console.log(innerWidth)` 는 `console.log(window.innerWidth)`와 동일

size, scroll, load 확인 때 많이 쓰임

<br />

Window 안에 navigator 오브젝트 <- 브라우저에 포함되어 있는 유용한 정보들 포함

<br />

**Document**

https://developer.mozilla.org/en-US/docs/Web/API/Document

**Window**

https://developer.mozilla.org/en-US/docs/Web/API/Window

**Viewport**

https://developer.mozilla.org/en-US/docs/Glossary/layout_viewport

**Navigator**

https://developer.mozilla.org/en-US/docs/Web/API/Navigator

<br />

---

