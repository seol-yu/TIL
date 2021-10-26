<p align="center">
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/html-badge-logo.png?raw=true" height=30 /></a>
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/CSS">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/css-badge-logo.png?raw=true" height=30 /></a>
</p>


### 목차
[Float](#Float)

[실습](#실습)

<br />

---

<br />

## Float

<br />

블록 요소(->길막)들을 가로 배치하기 위해 Float 배운다

<br />

### What_happens

float 사용하면 무슨 일이 일어날까?

붕 뜨게 됨 => 레이아웃 망가짐

1. 어떤 요소가 붕 떠서 float 된다면 얘를 가지고 있던 부모는 붕 뜬 자식을 못 찾음

   앞서 배웠듯, block이 따로 height을 선언하지 않은 경우 자식 요소의 height의 합 = 부모의 height임

   자식이 float 되어버리면 부모는 그 공간 빈공간으로 인식

   뒤에 따르던 자식들 또한 float된 자식이 있던? 공간을 빈공간으로 인식해서 앞으로 이동하고 부모의 height 줄어든다

2. 블록으로 신분 상승

   float 먹인 요소가 Block이 됨

   Inline, Inline Block, Block => float 먹이면 => Block

   width, height 값 등등 줄 수 있다

3. 근데 블록인데 길막을 못한다

   약간 하자가 있는 블록

   float이 되면 따로 width 선언 안했을 때 width값이 부모의 content-box의 100%라든가 따로 width 선언했을 때 남은 공간 margin으로 자동으로 채우는 그런거 없음. 마진을 줄 수 없다는게 아니라 원래 블록은 자동으로 마진 auto 생겼는데 그런게 없다

   자식 요소들 float 줘서 가로배치 효과 주는 등 하다보면 부모가 height 0이 되어버려서 레이아웃 붕괴

4. 인라인 요소는 플로트 된 요소들 볼 수 있어서 피해서 흘러감

   블록요소들은 플로트 된 요소들 못봐도 그 안에 컨텐츠들은 영향 받곤 해서 레아이웃 망가짐

<br />

### How_to_fix_it

그럼 박살난 레이아웃 어떻게 고쳐야할까?

* Honeyful Trick

  부모에게 `overflow: hidden;`을 주면 float된 자식 찾는다

* FM

  Clearfix 라는 방법

  clear 속성 이용해서 고치기

  clear는 float으로 망가진 레이아웃 고치기 위한 애

  clear는 총 세가지 값 가질 수 있다

  * left <- float: left; 된 애들 앞에 있으면 위치 파악해서 영향 받지 않겠다
  * right <- float: right; 으로부터 영향 받지 않겠다
  * both <- 둘 다 알아차려서 영향 받지 않겠다

* Pseudo-Element 이용해서 해결

  CSS에서 fake 요소 만드는 것 = `가상 요소` 만드는 것

  2개씩 만들 수 있다 `::before`, `::after` <- 마진, 폰트 사이즈/스타일 다 먹일 수 있음

  HTML에는 존재하지 않는 가상 요소 만들어서 clear: left;

  clear는 display: block; 인 애한테만 쓸 수 있다

  그래서

  ```css
  .parent::after {
      content: "";  /* 꼭 써야함 */
      display: block;
      clear: both;
      /* left | right | both */
  }
  ```

<br />

[코드 참고](./실습/03Float_01Float1/style.css)

[코드 참고](./실습/03Float_02Float2/style.css)

<br />

[목차로](#목차)

<br />

---

<br />

### 실습

<br />

리스트 스타일 없애기

```css
ul {
    list-style-type: none;  /* 땡땡이 없애기 */
    padding-left: 0;
}
```

<br />

```html
<ul class="tab-menu">
    <li class="tab-menu-item">
        <a href="#">Summary</a>
    </li>
    <li class="tab-menu-item selected">
        <a href="#">Emails</a>
    </li>
    <li class="tab-menu-item">
        <a href="#">Files</a>
    </li>
    <li class="tab-menu-item">
        <a href="#">Mentions</a>
    </li>
</ul>
```

list 가로 배치를 하려면

```css
.tab-menu-item {
    float: left;
}
```

일단 이렇게 하면 display 속성값이 list-item(<-block)이 됨

자식들이 다 float 되어서 ul은 높이가 0이 됨

```css
.tab-menu {
    over-flow:hidden;
}
```

이렇게 하든가

```css
.tab-menu::after {
    content: '';
    display: block;
    clear: left;
}
```

가상 요소 만드는 방법으로

<br />

margin-bottom 등 값 안 먹을 때 display 값 확인해보기 (Inline 인가?)

<br />

```css
.clearfix::after {
    content: '';
    display: block;
    clear: both;
}
```

<br />

[코드 참고](./실습/03Float_03Float/style.css)

[코드 참고](./실습/03Float_04Float/style.css)

<br />

[목차로](#목차)

<br />