<p align="center">
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/html-badge-logo.png?raw=true" height=30 /></a>
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/css-badge-logo.png?raw=true" height=30 /></a>
</p>


### 목차

[강의 소개](#강의_소개)

[CSS 소개 & 기본 형태](#CSS_기본_형태)

[CSS 사용 방법](#CSS_사용법)

[환경 셋팅](#환경_셋팅)

<br />

---

<br />

### 강의_소개

<br />

HTML(문서 컨텐츠 마크업) + CSS(꾸미기) + JavaScript(동적으로 기능)

<br />

CSS 원리(공리) + 재미

제대로 배우는 것이 중요

<br />

* 탄탄한 원리 이해

  특히 레이아웃 잡는 부분

  Box BoxModel Float Position Flexbox

* 재밌고 지루하지 않게

* 실무 노하우

<br />

[목차로](#목차)

<br />

---

<br />

### CSS_기본_형태

<br />

Cascading Style Sheet

HTML 마크업한거 예쁘게 꾸미기

<br />

Document + `Style`

왜 분리해서 관리??

웹으로 정보 컨텐츠 공유 목적인 HTML에다가 스타일까지 적용하면

스타일 변경, 유지보수 어려워지고 ..

W3C(웹 표준 지정)에서 만든 스타일시트 전용언어인 CSS가 모든 스타일 관리

<br />

Syntax

```css
selector {
    property: value;
}
```

한 요소에 다양한 속성들 선언하니까 ; 써야함

<br />

[목차로](#목차)

<br />

---

<br />

### CSS_사용법

<br />How to use CSS

1. 따로 CSS 파일 만들어서 link 태그로 임포트 :+1:

   ```html
   <html>
       <title>How to use CSS</title>
       <link rel="stylesheet" href="./style.css" />
       ...
   </html>
   ```

2. html 태그 안에 head 태그 안에 style 태그 안에 :neutral_face:

   ```html
   <html>
       <head>
           <title>How to use CSS</title>
           <style>
               /* 스타일을 작성한다 */
               p {
                   font-size: 32px;
               }
           </style>
       </head>
   </html>
   ```

3. 요소에 ​직접적으로 ​스타일 ​주기 :imp:

   아래와 같이 쓰면 유지보수 힘들다 아주 특별한 경우에만 사용

   ```html
   <p style="font-size: 32px;">
       <!-- 내용 -->
   </p>
   ```

<br />

[목차로](#목차)

<br />

---

<br />

### 환경_셋팅

<br />

Dev Environment

`크롬 브라우저`와 `Editor`

<br />

코드 에디터 `VSCode`

framer 테마 등 익스텐션에서 다운로드

Ctrl + Shift + P - color Theme 바꿀 수 있음

<br />

디자인 시안 - Figma

<br />

CSS 꿀팁

* 노트 준비
* 현재 상태와 만들어야 할 디자인 시안 비교
* 현 상태와 디자인 시안의 차이점을 찾아 체크 리스트로 작성
* 작성한 체크 리스트를 하나 하나 해결

<br />

[목차로](#목차)

<br />

