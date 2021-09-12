<br />
<a href="https://github.com/seol-yu/TIL/tree/master/React">
  <img src="https://github.com/seol-yu/TIL/raw/master/images/react-badge-logo.png?raw=true" height="30" style="max-width: 100%;">
</a>
<br />

### 목차

[popular 목록 API 이용해서 받아와서 보여주기](#popular_API)

[리스트 아이템 만들기](#리스트_아이템)

[검색 기능 구현](#검색_기능)

[비디오 선택 & 상세화면](#비디오_상세)

[다시 목록으로](#다시_목록)

[마무리](#마무리)

[fetch web APIs와 Axios 라이브러리 차이점](#fetch_web_APIs_Axios)

[반응형 추가](#반응형)

<br />

---

<br />

### popular_API

<br />

특히 리액트 프로젝트할 때 접근 방식

1. 전반적인 컴포넌트를 미리 정의한 후 작은 단위부터 시작

   컴포넌트 단위로 만들어 나가기

   스토리북

2. 스켈레톤

   프로젝트 전반적인 구조를 화면 단위로 나누고, 커다란 골격을 나눈 후 정의하기

위 2가지 방식은 시간이 오래 걸리고 팀플로 하기에 적합

개인 플젝할 땐

:sparkles:

3. 사용자에게 조금이라도 도움이 되는 기능, 대표적인 기능이 뭘까

   작은 단위의 대표적인 기능을 정의해서 먼저 만든 후 완성이 되면 확장하기

   한 단계 한 단계마다 완성된 프로젝트가 있도록

<br />

가장 유행하는 비디오 목록 가져오기부터

<br />

![fetch](./imgs/fetch.png)

var 말고 const 써야함

text 말고 json 으로 변환해야 작업 편함

![fetch2](./imgs/fetch2.png)

<br />

콘솔창 보면,

우리가 관심 있는 것은 items이므로

console.log 부분을

setVideos를 받아온 result에 있는 items로 업데이트

=> 컴포넌트가 마운트 되면 유행하는 videos를 받아와서 비동기적으로 setVideos라는 API를 이용해서 컴포넌트 데이터를 업데이트

![fetch3](./imgs/fetch3.png)

<br />

[목차로](#목차)

<br />

---

<br />

### 리스트_아이템

<br />

props deconstructing 하기

<br />

index.css에는 

```css
* {
  box-sizing: border-box;
}
```

<br />

box shadow generator

webkit 이런건 PostCSS 쓰기에 필요없음

<br />

[목차로](#목차)

<br />

---

<br />

### 검색_기능

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 비디오_상세

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 다시_목록

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 마무리

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### fetch_web_APIs_Axios

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 반응형

<br />



<br />

[목차로](#목차)

<br />