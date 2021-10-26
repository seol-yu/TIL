<p align="center">
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/html-badge-logo.png?raw=true" height=30 /></a>
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/css-badge-logo.png?raw=true" height=30 /></a>
</p>


### 목차

[Media Query](#Media_Query)

<br />

---

<br />

## Media_Query

<br />

`Responsive Web` 반응형 웹 만들기 위해 반드시 알아야 함

<br />

디바이스 사이즈에 맞게 딱 맞게 화면 보여주기 위해 CSS 스타일 적용한 것이 반응형 웹

<br />

이 두 조건이 충족되어야 한다

* HTML <- viewport meta 태그가 HTML head 태그 안에 선언

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
          <meta name="viewport" content="width=device-width" />
          ...
      </head>    
  </html>
  ```

* CSS <- media query

  ```css
  @media screen and (min-width: 768px) {
      /* Where all the magic happens... */
  }
  ```

<br />

`min-width` 는 `이상`

`max-width` 는 `이하`

<br />

```css
.box {
    width: 100%;
    height: 100vh;
}
```

`vh`는 viewport height인데 1vh는 보고있는 뷰포트의 1%

`vw`는 가로

<br />

**a(anchor) 태그는 display가 inline이므로 width, height 값 먹이기 위해 `display: flex;` 등 해주기**

<br />

```css
@media screen and (min-width: 768px) {
    .banner {
        top: 0;
        bottom: auto;  /* bottom 값 제거 */
    }
}
```

<br />

작은 사이즈인 모바일부터

<br />

[코드 참고](./실습/06MediaQuery/1.css)

[코드 참고](./실습/06MediaQuery/style.css)

<br />

[목차로](#목차)

<br />

