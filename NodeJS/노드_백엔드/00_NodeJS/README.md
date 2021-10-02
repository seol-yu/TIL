<br />
<a href="https://github.com/seol-yu/TIL/tree/master/NodeJS/노드_백엔드">
  <img src="https://github.com/seol-yu/TIL/raw/master/images/nodejs-badge-logo.png?raw=true" height="30" style="max-width: 100%;">
</a>
<br />

### 목차

[Node.js란 무엇인가](#NodeJS란)

[노드 장점](#노드_장점)

[노드 매력 4가지](#노드_매력)

[노드 내부](#노드_내부)

[노드 서버의 특징과 장단점](#노드_서버_특징과_장단점)

<br />

---

<br />

### NodeJS란

<br />

브라우저들이 자바스크립트 엔진 탑재(JavaScriptCore, Chakara, SpiderMonkey, V8(<- JIT Just-in-time compilation 지원) ..)

=> 자바스크립트로 모든걸 다하고 싶었던 Ryan Dahl이 노드 개발

<br />

오픈소스, 크로스 플랫폼, 브라우저 밖에서도 자바스크립트 코드로 모든걸 할 수 있게 해주는 런타임 환경

<br />

브라우저에서는 동적인 웹 사이트, 웹 어플리케이션 만들고

노드 설치된 컴퓨터에서 백엔드와 서버, 서버사이드 렌더링, 프론트엔드, Scripting과 Automation...

<br />

브라우저에서 제공하는 WebAPIs 종류, 활용법 등등 공부하고

프론트엔드 전반적으로 지식 넓히기(=> Vue, React 등등)

:heavy_plus_sign:

노드 환경에서 제공하는 Node.js API 활용하는 방법 공부하고

백엔드 지식 쌓기

(플랫폼 - 런타임환경에서 제공하는 API 잘 사용하기)(=> Express, Nest..)

<br />

[목차로](#목차)

<br />

---

<br />

### 노드_장점

<br />

자바스크립트로 모든 것을 할 수 있어서

동시에 프론트엔드, 백엔드(클라이언트, 서버) => 생산성 높아짐

ex) Netflix <- 서버 성능 좋아짐

<br />

많이 쓰임

<br />

큰 기업들이 사용

ex) 링크드인, 넷플릭스, 카카오톡, 쿠팡, 네이버, 레딧, 페이팔, 이베이, 우버, aws, 나사......

=> 강력한 커뮤니티(npm으로 많은 라이브러리들 다운로드, 재사용가능한 템플릿 다운 가능), 좋은 서버 만드는 것이 가능한 것이 증명됨, 필요한 툴 이미 라이브러리로 존재

<br />

쉽고 심플, 파워풀하고 유연한 등등(기업부터 개인 플젝까지)

<br />

[목차로](#목차)

<br />

---

<br />

### 노드_매력

<br />

1. 자바스크립트 런타임 환경

   V8에서 사용하는 자바스크립트 엔진은 C++로 작성된 성능 좋은 오픈소스 프로젝트

2. Single Thread

   프로세스 vs 쓰레드

   프로그램마다 프로세스가 할당됨(프로그램 = 프로세스)

   OS 상에서 병렬적으로 처리되는 효과

   각각의 프로세스에는 Code, Stack, Heap, Data

   프로세스 안에는 여러 쓰레드가 존재하고(파일 주고 받는 쓰레드, 스트리밍하는 쓰레드 등등) 이들은 순차적으로 시간 할당받아서 동시 실행되는 것처럼

   Multithreading(cf) Java - cuncurrency API)

   자바스크립트는 Single Thread라 하나 다 끝나야 다음 동작으로 넘어가는 동기적인 언어

   but, 자바스크립트 런타임 환경에서 제공하는 Non-Blocking I/O(Non-Blocking은 asynchronous 비동기적이란 것)와 Event-Driven(이벤트를 통해서 등록한 콜백 호출하게) 특징 덕분에 여러 일을 동시다발적, 효율적으로 할 수 있다

3. Non-Blocking I/O

4. Event-Driven

<br />

[목차로](#목차)

<br />

---

<br />

### 노드_내부

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 노드_서버_특징과_장단점

<br />



<br />

[목차로](#목차)

<br />