<p align="center">
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/html-badge-logo.png?raw=true" height=30 /></a>
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/css-badge-logo.png?raw=true" height=30 /></a>
</p>


### 목차
[BoxShadow](#BoxShadow)

[Opacity](#Opacity)

[Overflow](#Overflow)

[Transform](#Transform)

[Visibility](#Visibility)

<br />

---

<br />

## BoxShadow

요소에게 `그림자` 줄 때

<br />

neomorphism 유행

https://neumorphism.io/#e0e0e0

<br />

`box-shadow` <- 5개. 순서 바뀌면 안됨

<br />

* `h-offset` <- x축으로 얼마나 이동
* `v-offset` <- y축으로 얼마나 이동 - (minus) 는 올라감 위쪽으로 그림자 생김
* `blur` <- 흐린 정도
* `spread` <- 그림자 사이즈
* `color` <- 색상

<br />

```css
.cancel-button {
    background-color: #ff4949;
    box-shadow: 0 10px 16px 0 rgba(255, 73, 73, 0.35);
}
```

<br />

버튼 마우스 올렸을 때만 그림자 생기게 하려면

```css
.cancel-button {
    background-color: #ff4949;
    transition: box-shadow 250ms ease-in;
}

.cancel-button:hover {
    box-shadow: 0 10px 16px 0 rgba(255, 73, 73, 0.35);
}
```

<br />

box-shadow 여러개 쓸 수 있다

```css
border-radius: 50px;
background: #e0e0e0;
box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
```

5개 다 안 적고 4개만 있는데 축약형이라 그러하다

그림자 사이즈가 생략된 것

세개만 있다면 흐린정도까지 생략된 것

<br />

[목차로](#목차)

<br />

---

<br />

## Opacity

투명도

<br />

0 투명 ~ 1 불투명

```css
.box {
    opacity: 0.8;
}
```

<br />

[목차로](#목차)

<br />

---

<br />

## Overflow

<br />

넘쳐흘렀을 때 어떻게 할지

`visible` | `auto` | `scroll` | `hidden`

<br />

* `visible` <- 기본값. 보여줘라

  ```css
  p {
      width: 500px;
      height: 400px;  /* block 요소는 기본적으로 height값 주어지지 않으면 자식들 세로 길이의 합을 height값으로 */
      background-color: #0066ff;
      overflow: visible;  /* 그냥 그대로 보여준다 */
  }
  ```

  ```css
  blockquote {
      background-color: #ffc82c;
  }
  ```

* `auto`

* `scroll`

  auto랑 scroll은 비슷하게 동작

  넘쳐흘렀을 때 알아서 해라

  넘쳐흘렀을 때 알아서 scroll로 표시해라

  ```css
  p {
      overflow: auto;
  }
  ```

  ```css
  p {
      overflow: scroll;
  }
  ```

* `hidden`

  넘쳐흘렀을 때 숨겨라

  ```css
  p {
      overflow: hidden;
  }
  ```

<br />

```css
/* 부모 */
.box {
    width: 200px;
    height: 300px;
    overflow-x: scroll;  /* 가로로는 스크롤 할 수 있게 */
    overflow-y: hidden;  /* y축으로는 움직일 수 없게 */
}

/* 자식 */
p {
    width: 500px;
    height: 400px;
    overflow: hidden;
}
```

<br />

[목차로](#목차)

<br />

---

<br />

## Transform

<br />

transform에서 사용할 수 있는 css에서 제공하는 함수써서 선언하면 됨

유용한 함수는 아래 3개

* `translate()`

  translate(x, y) 옮길 때. 어디른 가든 원래 위치 모두가 기억해서 다른 요소들에 영향 주지 않는다

  translateX() <- x축에 대해서만

  translateY() <- y축에 대해서만

  안에 % 줄 수 있는데 그 %는 자기 자신의 사이즈 기준

  translate(100%, 100%) <- x축은 본인의 width 기준, y축은 height 기준

* `scale()`

  사이즈 키우고 줄일 때

  원래 사이즈 모두가 기억해서 다른 요소들에 영향 주지 않는다

  scale(x, y) <- x는 자신의 width값 기준, y는 자신의 height값 기준

* `rotate()`

  rotate(Ndeg) <- 어떤 요소 각도 돌려줄 때

  45도 돌리기 위해 rotate(45deg)

  다른 요소에 영향X

<br />

[목차로](#목차)

<br />

---

<br />

## Visibility

<br />

`visible` | `hidden`

보여줄 것인지 안보여줄 것인지

<br />

* `visible` <- 기본값. 보임

* `hidden` <- 안보이게

  ```css
  .box {
      visibility: hidden;  /* opacity: 0; 과 비슷한 상황. 원래 자리 유지. 보이지만않게*/
  }
  ```

  `display: none;` 과 구분해야함. <- 없는 존재처럼 취급

<br />

[목차로](#목차)

<br />