<p align="center">
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/html-badge-logo.png?raw=true" height=30 /></a>
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/css-badge-logo.png?raw=true" height=30 /></a>
</p>


### 목차

[font-size](#font-size)

[line-height](#line-height)

[letter-spacing](#letter-spacing)

[font-family](#font-family)

[font-weight](#font-weight)

[color](#color)

[text-align](#text-align)

[text-indent](#text-indent)

[text-transform](#text-transform)

[text-decoration](#text-decoration)

[font-style](#font-style)

[Webfont](#Webfont)

[Typography Library 제작](#Typography_Library_제작)

<br />

---

<br />

## typography

텍스트를 예쁘게 디자인

가독성, 사용자 경험 증가

<br />

[목차로](#목차)

<br />

---

<br />

### font-size

```css
.text {
    font-size: 16px;
}
```

<br />

### px <- 절대 단위 Absolute unit

### em <- 상대 단위 Relative unit

### rem <- 상대 단위 Relative unit

<br />

em = equal to capital M 실제로 적용된 폰트 사이즈가 1em

`rem` = `root` em  <- root는 html이다. 즉, html에 적용된 폰트 사이즈

```css
html {
    font-size: 20px;
}

p {
    font-size: 3rem;  /* HTML에 적용된 폰트 사이즈인 20px * 3 해서 60px */
}
```

<br />

[목차로](#목차)

<br />

---

<br />

### line-height

`px` `em` `rem` 쓸 수 있는데 `em` 많이 씀 (폰트 사이즈 비례해서 하는게 편해서)

```css
.text {
    font-size: 16px;
    line-height: 1.5;  /* px, rem은 단위 표시해야하지만 em은 생략이 관례 */
}
```

<br />

**line-height 사용했을 때 글자는 가운데 배치**

<br />

[목차로](#목차)

<br />

---

<br />

### letter-spacing

글자와 글자 사이 자간

```css
.text {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -.03em
}
```

`px`

`em` <- 해당 폰트 사이트 비례해서 적용하는게 편해서 em 많이 씀. 단위 생략하면 안됨

<br />

[목차로](#목차)

<br />

---

<br />

### font-family

```css
.text {
    font-family: "Poppins";
    font-family: "Poppins", sans-serif;  /* 없는 경우 대비해서 여러개 */
    font-family: "Poppins", "Roboto", sans-serif;
}
```

`serif` 삐침 있는 명조체같은거

`sans-serif` 삐침 없는 돋움, 고딕같은 애

`font-family: "Poppins", sans-serif;`  fallback font (대체 글꼴)

<br />

[목차로](#목차)

<br />

---

<br />

### font-weight

폰트의 굵기

400 Regular

700 Bold

```css
.text {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -.03em
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    /* 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 */
}
```

<br />

[목차로](#목차)

<br />

---

<br />

### color

폰트 색상

```css
.text {
    color: #0061ff;
}
```

`hex`  #0066ff

`rgb`  rgb(0, 102, 255)

`rgba` rgba(0, 102, 255, 1) <- 투명도 더해짐

<br />

[목차로](#목차)

<br />

---

<br />

### text-align

align <- 정렬하다

##### left

##### right

##### center

<br />

[목차로](#목차)

<br />

---

<br />

### text-indent

들여쓰기

마이너스값도 됨

<br />

[목차로](#목차)

<br />

---

<br />

### text-transform

`none` <- 기본

`capitalize` <-앞자리 대문자

`uppercase` <- 모든 문자 대문자

`lowercase` <- 모든 문자 소문자

<br />

[목차로](#목차)

<br />

---

<br />

### text-decoration

`none`

`underline`

`line-through`

`overline`

<br />

a(anchor 태그)에 많이 씀

a 태그는 기본이 `underline` 이라서

```css
a {
    color: #0066ff;
    text-decoration: none;
}
```

<br />

[목차로](#목차)

<br />

---

<br />

### font-style

`normal`

`italic` <- 글자 기울이기

`oblique`

<br />

em 태그 쓰면 강조. 기본이 italic

```css
em {
    font-style: normal;  /* italic 해제 */
    font-weight: 700;
}
```

<br />

[목차로](#목차)

<br />

---

<br />

## Webfont

<br />

* 갖다 쓴다

  https://fonts.google.com/

  HTML head 태그 안에 link 태그 집어넣기

  ```html
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@562&display=swap" rel="stylesheet">
  ```

  <br />body에 font-family 주면 모든 요소에 적용됨

  ```css
  body {
      font-family: 'Dancing Script', cursive;
  }
  ```

  <br />

* 직접 제공한다

  https://github.com/moonspam/NanumSquare

  다운로드 zip

  플젝 파일 assets 폴더 만들고 fonts 폴더 만들어서 넣기

  https://css-tricks.com/snippets/css/using-font-face/

  fonts.css

  ```css
  @font-face {
      font-family: 'Seolyu';  /* 사용할 때 쓸 이름 */
      font-style: normal;
      font-weight: 400;
      src: url('webfont.eot'); /* IE9 Compat Modes */
      src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('webfont.woff2') format('woff2'), /* Super Modern Browsers */
           url('webfont.woff') format('woff'), /* Pretty Modern Browsers */
           url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
           url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS 실습에서 이건 없어서 지워줌*/
  }
  ```

  webfont 경로를 바꿔주어야 함

  ```css
  @font-face {
      font-family: 'Seolyu';
      font-style: normal;
      font-weight: 400;
      src: url('./assets/fonts/NanumSquareR.eot');
      src: url('./assets/fonts/NanumSquareR.eot?#iefix') format('embedded-opentype'),
           url('./assets/fonts/NanumSquareR.woff2') format('woff2'),
           url('./assets/fonts/NanumSquareR.woff') format('woff'),
           url('./assets/fonts/NanumSquareR.ttf')  format('truetype');
  }
  ```

  ```css
  @font-face {
      font-family: 'Seolyu';
      font-style: normal;
      font-weight: 300;
      src: url('./assets/fonts/NanumSquareL.eot');
      src: url('./assets/fonts/NanumSquareL.eot?#iefix') format('embedded-opentype'),
           url('./assets/fonts/NanumSquareL.woff2') format('woff2'),
           url('./assets/fonts/NanumSquareL.woff') format('woff'),
           url('./assets/fonts/NanumSquareL.ttf')  format('truetype');
  }
  
  @font-face {
      font-family: 'Seolyu';
      font-style: normal;
      font-weight: 400;
      src: url('./assets/fonts/NanumSquareR.eot');
      src: url('./assets/fonts/NanumSquareR.eot?#iefix') format('embedded-opentype'),
           url('./assets/fonts/NanumSquareR.woff2') format('woff2'),
           url('./assets/fonts/NanumSquareR.woff') format('woff'),
           url('./assets/fonts/NanumSquareR.ttf')  format('truetype');
  }
  
  @font-face {
      font-family: 'Seolyu';
      font-style: normal;
      font-weight: 700;
      src: url('./assets/fonts/NanumSquareB.eot');
      src: url('./assets/fonts/NanumSquareB.eot?#iefix') format('embedded-opentype'),
           url('./assets/fonts/NanumSquareB.woff2') format('woff2'),
           url('./assets/fonts/NanumSquareB.woff') format('woff'), 
           url('./assets/fonts/NanumSquareB.ttf')  format('truetype');
  }
  
  @font-face {
      font-family: 'Seolyu';
      font-style: normal;
      font-weight: 800;
      src: url('./assets/fonts/NanumSquareEB.eot'); 
      src: url('./assets/fonts/NanumSquareEB.eot?#iefix') format('embedded-opentype'),
           url('./assets/fonts/NanumSquareEB.woff2') format('woff2'), 
           url('./assets/fonts/NanumSquareEB.woff') format('woff'),
           url('./assets/fonts/NanumSquareEB.ttf')  format('truetype');
  }
  ```

  이렇게 하고

  HTML에서는 늘 사용하던대로

  ```html
  <link rel="stylesheet" href="./fonts.css">
  ```

  이렇게 써도 되고

  link한 style.css 에다가

  ```css
  @import url("./fonts.css");
  
  body {
      font-family: "Seolyu", sans-serif;
  }
  ```

<br />

[목차로](#목차)

<br />

---

<br />

### Typography_Library_제작

<br />

라이브러리 <- 자주 사용하는 것들 하나로 모아놓은 키트

<br />

개발자 도구

임의의 문자 클릭해서 Rendered Fonts 확인해서 잘 적용된 것 확인

Network 탭에서 reload 했을 때 Font 탭 클릭해서 잘 오는지 확인

<br />

화면 크기 줄였을 때 전체였다가 화면 사이즈 736px보다 커지면 더이상 자라지 않음

```css
.container {
    width: 100%;
    max-width: 736px;
}
```

<br />

[코드 참고](./실습/07Typography/typography.css)

<br />

[목차로](#목차)

<br />
