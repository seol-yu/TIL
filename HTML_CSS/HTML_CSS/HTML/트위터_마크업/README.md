<p align="center">
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/HTML">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/html-badge-logo.png?raw=true" height=30 /></a>
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/HTML">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/css-badge-logo.png?raw=true" height=30 /></a>
</p>

### 목차

[구조적인 웹 문서 설계](#구조적인_웹_문서_설계)

[올바른 Sectioning Elements 사용 방법](#올바른_Sectioning_Elements_사용법)

[페이지 구조 설계](#페이지_구조_설계)

[Header](#Header)

[Global Navigation](#Global_Navigation)

[Main](#Main)

[Tweet Form](#Tweet_Form)

[Timeline](#Timeline)

[Tweet](#Tweet)

[Aside](#Aside)

[Footer](#Footer)

<br />

---

<br />

### 구조적인_웹_문서_설계

<br />

구조적으로 문서를 설계: 글의 `구조`를 쉽게 파악되도록 HTML 태그를 작성

ex) 개요 <- 몇 단원으로 구성이 되었는지, 각 단원의 제목, 소단원과 소단원의 주제 

글의 전개 `흐름`을 파악

정보의 `위계질서` 파악

마찬가지로, 브라우저도 `개요`가 필요 -> 검색 최적화에도 도움

`Sectioning Elements` 사용해서

섹셔닝 요소: section, article, nav, aside

섹셔닝 요소는 아니지만: header, main, footer

상황에 맞는 `적절한` Sectioning 요소를 `올바르게` 사용

구조적으로 `아름답게` 웹 문서 설계하자


<br />

[목차로](#목차)

<br />

----

<br />

### 올바른_Sectioning_Elements_사용법

<br />

section, article, nav, aside

<br />

공통적으로 지켜야 할 룰

Sectioning elements = 단원

단원의 주제, 제목이 언급되어야하듯

:warning:Sectioning element 내에는 반드시 `heading 태그를 작성`해야 한다

```html
<section>
    <h1>
        섹션의 제목
    </h1>
    <p>
        ...
    </p>
</section>
```

```html
<nav>
    <h1>
        메뉴
    </h1>
    <ul>
        <li>
            <a href="#">링크</a>
        </li>
    </ul>
</nav>
```

<br />

[목차로](#목차)

<br />

---

<br />

### 페이지_구조_설계

<br />

트위터 마크업 챌린지

<br />

최소한의 기능/의미를 갖는 가장 작은 단위로 쪼개기

이렇게 하되,

일단 먼저 `구획` 나누기

논리적으로 긴밀하게 관련된 집합체 단위로

<br />

문서를 작성하는 사람 관점에 따라 좀 다름

<br />

구획 나눴으면

적절한 Sectioning elements 정해주기

<br />

[목차로](#목차)

<br />

---

<br />

### Header

<br />

`header` 태그는 요소 도입부에 언제든 쓸 수 있다

<br />

[코드 참고](./실습/01-header.html)


<br />

[목차로](#목차)

<br />

---

<br />

### Global_Navigation

<br />

`nav` 태그(<- 문서간 이동할 수 있는 요소 포함하는 곳에) 쓰면 안에 `heading` 태그 써야함

:warning:Sectioning element 내에는 반드시 `heading 태그를 작성`해야 한다

<br />

[코드 참고](./실습/02-global-navigation.html)

<br />

[목차로](#목차)

<br />

---

<br />

### Main

<br />

하나의 HTML 문서에는 단 하나의 `main` 태그만

본문 가장 핵심적인 부분(본격적인 컨텐츠) 묶어주는 역할

<br />

`main` 안에 도입부이자 제목같은거는 `header` 태그 씀

<br />

`main` 태그는 Sectioning element 아니라서 반드시 `heading` 태그(h 태그) 쓸 필요는 없다

<br />

[코드 참고](./실습/03-main.html)


<br />

[목차로](#목차)

<br />

---

<br />

### Tweet_Form

<br />

`section` 태그는 논리적으로 완결된 집합체

:warning:Sectioning element 내에는 반드시 `heading 태그를 작성`해야 한다

<br />

input 태그 안에, 여러 가지 파일 동시에 올릴 수 있게 하려면 multiple 속성 써준다

```html
<input type="file" multiple accept="image/*, video/*" />
```

cf) input 태그는 스타일 작업 어려워서 button 태그 위에 따로 만들어야 함

<br />

[코드 참고](./실습/04-tweet-form.html)

<br />

[목차로](#목차)

<br />

---

<br />

### Timeline

<br />

[코드 참고](./실습/05-timeline.html)

<br />

[목차로](#목차)

<br />

---

<br />

### Tweet

<br />

`독립적인 정보`로 `완결성`있고 의미가 있으면 `article` 태그 (섹션보다 뉘앙스 살리기 위해 씀)

:warning:Sectioning element 내에는 반드시 `heading 태그를 작성`해야 한다

<br />

[코드 참고](./실습/06-tweet.html)

<br />

[목차로](#목차)

<br />

---

<br />

### Aside

<br />

본문 내용과 직접적 연관없는 내용 `aside` 태그 추천

ex) sidebar, 작은 위젯, 배너 등

<br />

[코드 참고](./실습/07-worldwide-trends.html)

<br />

[목차로](#목차)

<br />

---

<br />

### Footer

<br />

[코드 참고](./실습/08-footer.html)


<br />

[목차로](#목차)

<br />

