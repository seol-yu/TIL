<br />
<a href="https://github.com/seol-yu/TIL/tree/master/NodeJS/노드_백엔드">
  <img src="https://github.com/seol-yu/TIL/raw/master/images/nodejs-badge-logo.png?raw=true" height="30" style="max-width: 100%;">
</a>
<br />

### 목차

[노드 필수 사이트 북마크](#노드_북마크)

[글로벌 오브젝트 - 소스 공부법](#글로벌_오브젝트)

[콘솔 로그](#콘솔_로그)

[this란 - 브라우저와의 차이점](#this)

[모듈 - export, require](#모듈)

[2015 최신 모듈 - export, import](#최신_모듈)

[os운영체제 정보](#os_정보)

[process프로세스 정보](#process_정보)

[타이머와 콜스택의 연관](#타이머_콜스택)

[path 유의할 점](#path)

[file 동기와 비동기 그리고 프로미스](#file_동기_비동기_프로미스)

[file 다양한 사용법](#file_다양한_사용법)

[버퍼와 스트림](#버퍼_스트림)

[버퍼](#버퍼)

[스트림](#스트림)

[파이프](#파이프)

[노드의 중요 포인트 - 이벤트](#이벤트)

[재사용성 높은 이벤트 클래스 만들기](#이벤트_클래스)

<br />

---

<br />

### 노드_북마크

<br />

노드 버전별 공식문서 있음

**노드 입문자를 위한 심플한 사이트:** https://nodejs.dev/learn

**노드 공식 사이트:** https://nodejs.org/en/docs/

<br />

[목차로](#목차)

<br />

---

<br />

### 글로벌_오브젝트

<br />

![1](./imgs/1.png)

<br />

브라우저에서는 window 가 글로벌 객체

node.js에서는 global 이 글로벌 객체

<br />

[코드 참고](https://github.com/seol-yu/TIL/blob/master/NodeJS/%EB%85%B8%EB%93%9C_%EB%B0%B1%EC%97%94%EB%93%9C/02_Node_Modules/1-global/app.js)

<br />

[목차로](#목차)

<br />

---

<br />

### 콘솔_로그

<br />

[코드 참고](https://github.com/seol-yu/TIL/blob/master/NodeJS/%EB%85%B8%EB%93%9C_%EB%B0%B1%EC%97%94%EB%93%9C/02_Node_Modules/2-console/app.js)

<br />

[목차로](#목차)

<br />

---

<br />

### this

<br />

[코드 참고](https://github.com/seol-yu/TIL/blob/master/NodeJS/%EB%85%B8%EB%93%9C_%EB%B0%B1%EC%97%94%EB%93%9C/02_Node_Modules/3-this/app.js)

<br />

[목차로](#목차)

<br />

---

<br />

### 모듈

<br />

[코드 참고](https://github.com/seol-yu/TIL/blob/master/NodeJS/%EB%85%B8%EB%93%9C_%EB%B0%B1%EC%97%94%EB%93%9C/02_Node_Modules/4-module/app.js)

<br />

[목차로](#목차)

<br />

---

<br />

### 최신_모듈

<br />

`npm init --yes`

![2](./imgs/2.png)

<br />

[코드 참고](https://github.com/seol-yu/TIL/blob/master/NodeJS/%EB%85%B8%EB%93%9C_%EB%B0%B1%EC%97%94%EB%93%9C/02_Node_Modules/5-module/app.js)

<br />

[목차로](#목차)

<br />

---

<br />

### os_정보

<br />

운영체제마다 줄바꿈 문자열 달라지는 경우가 있다

<br />

[코드 참고](https://github.com/seol-yu/TIL/blob/master/NodeJS/%EB%85%B8%EB%93%9C_%EB%B0%B1%EC%97%94%EB%93%9C/02_Node_Modules/6-os/app.js)

<br />

[목차로](#목차)

<br />

---

<br />

### process_정보

<br />

[코드 참고](https://github.com/seol-yu/TIL/blob/master/NodeJS/%EB%85%B8%EB%93%9C_%EB%B0%B1%EC%97%94%EB%93%9C/02_Node_Modules/7-process/app.js)

<br />

[목차로](#목차)

<br />

---

<br />

### 타이머_콜스택

<br />

[코드 참고](https://github.com/seol-yu/TIL/blob/master/NodeJS/%EB%85%B8%EB%93%9C_%EB%B0%B1%EC%97%94%EB%93%9C/02_Node_Modules/8-timer/app.js)

<br />

[목차로](#목차)

<br />

---

<br />

### path

<br />

운영체제별로 경로 표기하는 방법이 다르므로 운영체제별로 잘 동작하게 하려면

[코드 참고](https://github.com/seol-yu/TIL/blob/master/NodeJS/%EB%85%B8%EB%93%9C_%EB%B0%B1%EC%97%94%EB%93%9C/02_Node_Modules/9-path/app.js)

<br />

[목차로](#목차)

<br />

---

<br />

### file_동기_비동기_프로미스

<br />

[코드 참고](https://github.com/seol-yu/TIL/blob/master/NodeJS/%EB%85%B8%EB%93%9C_%EB%B0%B1%EC%97%94%EB%93%9C/02_Node_Modules/10-file/app.js)

<br />

[목차로](#목차)

<br />

---

<br />

### file_다양한_사용법

<br />

[코드 참고](https://github.com/seol-yu/TIL/blob/master/NodeJS/%EB%85%B8%EB%93%9C_%EB%B0%B1%EC%97%94%EB%93%9C/02_Node_Modules/10-file/app2.js)

<br />

[목차로](#목차)

<br />

---

<br />

### 버퍼_스트림

<br />

streaming: 서버에서 동영상 전체가 아닌 잘게 나눈 데이터를 조금씩 보내주는 것

Progressive Download

<br />

사용자가 동영상을 보는 속도 < 다운 받는 속도 - Buffering 이용해서 버퍼 채울 수 있다

<br />

사용자가 동영상을 보는 속도 > 다운 받는 속도 - 쌓여있는 버퍼가 없음

<br />

ex) Twitch - 실시간 게임 생중계 서비스

게임 장면 실시간 녹화해서 조금씩 데이터를 스트리밍

서버에서는 스트리밍된 데이터를 버퍼링을 했다가

작은 단위 mp4 파일을 시청자에게 보내줌

(HLS player 기술 이용하는 애들만 작은 단위 동영상 파일 볼 수 있다)

<br />

컴퓨터에서도 큰 파일 읽을 때

작은 단위 데이터 buffer를 streaming해서 조금씩 메모리로 가져고 옴

<br />

Buffer와 Stream은 Memory efficiency, Time efficiency

<br />

[목차로](#목차)

<br />

---

<br />

### 버퍼

<br />

파일을 읽을 때 따로 인코딩을 지정하지 않으면 파일에 있는 데이터가 버퍼에 있는 내용 그대로 읽혀짐

<br />

buffer는 문자열, 숫자 .. 데이터를 raw 형태로 메모리에 있는 데이터 형태로,  byte 단위로 처리할 수 있게 해준다

<br />

[코드 참고](https://github.com/seol-yu/TIL/blob/master/NodeJS/%EB%85%B8%EB%93%9C_%EB%B0%B1%EC%97%94%EB%93%9C/02_Node_Modules/11-buffer/app.js)

<br />

[목차로](#목차)

<br />

---

<br />

### 스트림

<br />

[코드 참고](https://github.com/seol-yu/TIL/blob/master/NodeJS/%EB%85%B8%EB%93%9C_%EB%B0%B1%EC%97%94%EB%93%9C/02_Node_Modules/12-stream/app-stream.js)

<br />

[목차로](#목차)

<br />

---

<br />

### 파이프

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 이벤트

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 이벤트_클래스

<br />



<br />

[목차로](#목차)

<br />