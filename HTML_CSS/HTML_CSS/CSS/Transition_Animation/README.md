<p align="center">
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/html-badge-logo.png?raw=true" height=30 /></a>
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/css-badge-logo.png?raw=true" height=30 /></a>
</p>


### 목차

[transition](#transition)

[animation](#animation)

<br />

---

<br />

## transition

All about `스르륵`

* `property` <- transition 먹일 속성

* `duration` <- 지속 시간 ms s (1,000ms === 1s)

* `[timing-function]` <- 생략 가능. 변화의 속도에 대해 지정

  `ease-in` | `ease-out` | `ease-in-out` | `cubic-bezier()`

  cubic-bezier 같은 경우는 구글링해서 cubic-bezier.com 가서 만들기

* `[delay]` <- 지연시키기

```css
.box {
    transition: font-size 2500ms;
}

.box.active {
    font-size: 30px;
    background-color: #ff4949;
}
```

active 클래스 추가되었을 때 font-size 스르륵 바뀜

둘다 스르륵 하려면

```css
.box {
    transition: all 2500ms;
}

.box.active {
    font-size: 30px;
    background-color: #ff4949;
}
```

<br >

```css
.box {
    transition: all 2500ms ease-in 1000ms;
}
```

<br >

각각의 property 마다 transition 조절하려면 all 사용하지않고 `,` 사용해서 개별적으로 적기

```css
.box {
    transition: font-size 2500ms ease-in, background-color 2000ms cubic-bezier(.08,.57,.97,-0.78) 1000ms;
}
```

<br />

[목차로](#목차)

<br />

---

<br />

## animation

<br />

```css
.animation {
    animation: animation-name 1000ms ease-in-out 500ms infinite;
}
```

<br />

애니메이션 속성:

* `animation-name`
* `animation-duration` <- 지속 시간. ms s 사용
* `animation-timing-function` <- `ease-in` | `ease-out` | `ease-in-out` | `cubic-bezier()`
* `animation-delay` <- ms s 사용
* `animation-iteration-count` <- 되풀이 몇번. 정수 적기. infinite 무한대
* `animation-direction` <- 어떤 방향으로 애니메이션 진행. alternate 번갈아

<br />

```css
@keyframes name {
    from {
        /* Rules */
    }
    
    to {
        /* Rules */
    }
}
```

<br />

```css
@keyframes name {
    0% {
        /* Rules */
    }
    
    50% {
        /* Rules */
    }
    
    100% {
        /* Rules */
    }
}
```

<br />

```css
.box {
    position: relative;
    width: 300px;
    height: 300px;
    background-color: #0066ff;  /* 디폴트 컬러 */
    /* 애니메이션 적용 */
    animation-name: move-box;
    /* duration(지속시간) 적용. 끝나면 원래대로 */
    animation-duration: 2000ms;
    animation-delay: 1000ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 3;
    animation-direction: alternate;
}

/* 애니메이션 로직 선언 */
@keyframes move-box {
    from {
        top: 0;
        background-color: #0066ff;
    }
    
    to {
        top: 200px;
        background-color: #ff4949;
    }
}
```

<br />

https://developer.mozilla.org/ko/docs/Web/CSS 참고

<br />

구글 폰트 설정해도

font-family 검색해보면

system-ui <- 사용하는 컴퓨터 환경에서 시스템적으로 제공하는 기본 ui 폰트

button, input, textarea 등 form 관련 요소들은 body에 font-family 적용해도 안먹음

그래서

```css
button,
input,
textarea {
    font-family: "Lato", sans-serif;
}
```

<br />

```css
button {
    border: none;
    background-color: #FFF;
}
```

<br />

가상요소로 처리

```css
.line-button {
    position: relative;
    cursor: pointer;
}

.line-button::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;  /* 0일 땐 0px 이렇게 적지않기 */
    height: 2px;
    background-color: #0066FF;
    transition: width 250ms ease-in, background-color 250ms ease-in;
}

.line-button:hover::after {
    width: 100%;
    background-color: hotpink;
}
```

<br />

[목차로](#목차)

<br />