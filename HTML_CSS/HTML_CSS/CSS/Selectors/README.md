<p align="center">
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/html-badge-logo.png?raw=true" height=30 /></a>
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/css-badge-logo.png?raw=true" height=30 /></a>
</p>

### 목차
[요소, 클래스, ID 선택자](#Type_Class_ID_Selectors)

[자식, 자손, 형제 선택자](#자식_자손_형제_선택자)

[구조적 가상 클래스 선택자](#구조적_가상_클래스_선택자)

[동적 가상 클래스 선택자](#동적_가상_클래스_선택자)

[CSS 선택자 올림픽](#CSS_선택자_올림픽)

<br />

---

<br />

## Type_Class_ID_Selectors

<br />

```css
selector {
    property: value;
}
```

<br />

* `Type`

  HTML 태그 Selector

  ```css
  h1 {
      color: #0066ff;
  }
  
  strong {
      color: #ffc82c;
  }
  ```

* `Class`

  ```html
  <div class="box">
      <!-- ... -->
  </div>
  
  <div class="box">
      <!-- ... -->
  </div>
  
  <div class="box">
      <!-- ... -->
  </div>
  
  <div class="box-0 box-1 box-2">
      <!-- ... -->
  </div>
  ```

  ```css
  .box {
      color: #ff4949;
  }
  
  .box-0.box-1.box-2 {
      /* box-0이자 box-1이자 box-2 */
  }
  ```

* `ID Selectors` <- 단 한개만 존재

  ```html
  <h1 id="seolyu">
      Seolyu
  </h1>
  ```

  ```css
  #seolyu {
      font-style: italic;
  }
  ```

<br />

[목차로](#목차)

<br />

---

<br />

## 자식_자손_형제_선택자

<br />

`Child`, `Descendant` & `Sibling Combinators`

자식 선택자, 자손 선택자, 형제 선택자

<br />

자신이 직접적으로 감싸는 요소는 자식

```html
<section>
	<h1>
        Heading
    </h1>
    <ul>
        <li>
            <h1>
                Seolyu
            </h1>
            <p>
                Hi :)
            </p>
        </li>
    </ul>
</section>
```

section의 자식은 h1, ul 2개

ul은 li를 낳았다 

li는 section의 자손이다. 자식아님

<br />

자식 선택자 Child Combinator

`parent > child`

parent 직접적으로 감싸는 요소 선택하는 것

<br />

자손 선택자 descendant Combinator

`parent descendants`

<br />

```css
/* 자식 선택자 */
section > h1 {
    color: #ffc82c;
}

/* 자손 선택자 */
section h1 {
    color: #0066ff;
}
```

<br />

 형제 선택자s Sibling Combinators

`parent + sibling`

`parent ~ sibling`

```html
<section>
	<h1>
        Sibling combinators
    </h1>
    <ol>
        <li>Do something</li>
        <li class="active">Do something else</li>
    </ol>
</section>
```

```css
.active {
    font-weight: 700;
}

/* active 클래스 가진 애 다음 오는 모든 li (같은 부모 가지는) */
.active ~ li {
    color: #0066ff;
}

/* active 클래스 가진 애 다음 오는 li 하나 (같은 부모 가지는) */
.active + li {
    color: #ffc82c;
}
```

<br />

[목차로](#목차)

<br />

---

<br />

## 구조적_가상_클래스_선택자

<br />

`Structural Pseudo-classes`

가상 클래스 <- 어떤 상태, 조건 만족할 때 사용할 수 있는 클래스

<br />

`element:first-child`  <- 첫번째 아이에게 사용

`element:last-child`  <- 마지막 아이에게 사용

`element:nth-child(n)`  <- n번째 아이에게 사용

<br />

```css
li:first-child {
    color: #0066ff;
}

li:last-child {
    color: #ffc82c;
}

/* 3번째 애에게 사용 */
li:nth-child(3) {
    color: #ff4949;
}

/* 짝수 */
li:nth-child(2n) {
    color: pink;
}

/* 홀수 */
li:nth-child(2n-1) {
    color: hotpink;
}
```

<br />

[목차로](#목차)

<br />

---

<br />

## 동적_가상_클래스_선택자

<br />

`User Action Pseudo-classes`

가상 클래스 <- 어떤 상태, 조건 만족할 때 사용할 수 있는 클래스

`사용자의 action에 따라` 변화가 있는데 거기에 따라

<br />

`element:hover`

`element:focus`

`element:active`

```css
a:hover {
    background-color: #7e5bef;
}

/* 누르는 찰나의 순간에 */
a:active {
    background-color: pink;
}

/* focus(클릭해서 작성할 수 있는..) 상태에 */
input:focus {
	border-color: #1fb6ff;    
}

/* 누르는 찰나에 */
input:active {
    border-color: #85d7ff;
}
```

```css
/* input 기본 스타일 제거 (누를 때) */
input {
    outline: none;
    box-shadow: none;
}
```

<br />

[목차로](#목차)

<br />

---

<br />

## CSS_선택자_올림픽

<br />

CSS (Cascading Style Sheet) 선택자 우선순위

```css
p {
    color: blue;
}

p {
    color: hotpink;  /* 나중에 선언된 것이 덮어쓴다 */
}
```

<br />

선택자마다 점수가 있어서 합산으로 우선순위

:1st_place_medal: `ID`

:2nd_place_medal: `Class`, `Pseudo-class`

:3rd_place_medal: `Type`

```css
.box p {
    color: blue;  /* 점수합산해서 얘로 적용 */
}

p {
    color: hotpink;
}
```

<br />

점수 합산 방식

#gnb.tab-nav <- :1st_place_medal::2nd_place_medal:

header.main-header <- :2nd_place_medal::3rd_place_medal:

#gnb.tab-nav ul <- :1st_place_medal::2nd_place_medal::3rd_place_medal:

#gnb.tab-nav ul:last-child <- :1st_place_medal::2nd_place_medal::2nd_place_medal::3rd_place_medal:

<br />

Rule Breakers

Inline Style <- 가급적 지양

!important <- :smiling_imp: 가급적 자제

```css
* {
    color: hotpink !important;
}

p {
    color: #ff4949 !important;
}
```

<br />

[목차로](#목차)

<br />