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

png to ico

favicon.ico를 public 폴더에

<br />

postman에서 Search할 때 채널 제외하고 비디오만 검색결과로 나오게 하기 위해

&type=video& 추가

![search](./imgs/search.png)

<br />

리액트 <- 뷰 담당

MVC 어플리케이션 만들 때 쓸 수 있는 디자인 패턴이 있다

모델, 뷰, 컨트롤러

<br />

디자인 패턴 <- 어플리케이션에서 조금 더 역할에 맡게 세부적으로 레이어를 나누어서 한 가지의 것이 한 가지의 responsility(역할)를 가질 수 있도록 세분화, 구조적으로 나눠서 테스트, 유지보수, 개발 쉽게

<br />

리액트는 뷰 레이어 담담이므로

사용자에게 데이터를 보여주고 이벤트 처리하는 뷰 관련 일만 함

(네트워크 통신, 비즈니스 로직 처리 등 똑똑한 일 하게 하면 안됨)

<br />

app 컴포넌트 현재 문제

1. 중요한 키가 코드 안에 들어있는 부분

2. 컴포넌트 안에서 네트워크 통신하는 부분(<- 유닛테스트 돌릴 때마다 네트워크 통신 발생)

   이런 네트워크 통신하는거는 따로 클래스 만들고

   컴포넌트 안에다가 주입

   dependency injection 해주고

   나중에 유닛테스트할 때는 실제 네트워크 통신하는 클래스 아닌 네트워크 통신하는 척만 하는 더미 mock 클래스 전달해주기

<br />

https://create-react-app.dev/docs/adding-custom-environment-variables/

최상위에 .env 만들고 변수 할당

```
REACT_APP_YOUTUBE_API_KEY=AIzaSyDMQli6ZSdy2-m0driz8Cv0HAYaQpYamRw
```

<br />

.gitignore 에는

```
# API KEYs
.env
```

<br />

새로운 라이브러리 추가하거나 새로운 파일 추가해서 뭔가 잘 안되면

실행 중인 프로세스 취소해주고

다시 `yarn start`

<br />

[목차로](#목차)

<br />

---

<br />

### 비디오_상세

<br />

https://developers.google.com/youtube/youtube_player_demo?hl=ko

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