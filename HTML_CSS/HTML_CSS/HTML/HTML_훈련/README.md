<p align="center">
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/HTML">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/html-badge-logo.png?raw=true" height=30 /></a>
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/HTML">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/css-badge-logo.png?raw=true" height=30 /></a>
</p>

### 목차
[Ad Banner](#Ad_Banner)

[Google Search Result Item](#Google_Search_Result_Item)

[Feature Box](#Feature_Box)

[Logo in Header](#Logo_in_Header)

[Breadcrumb & Pagination](#Breadcrumb_Pagination)

[Product Card](#Product_Card)

[Instagram User Profile](#Instagram_User_Profile)

[Receipt](#Receipt)

[Github Dropdown Menu](#Github_Dropdown_Menu)

[Input Group](#Input_Group)

[Feed](#Feed)

[Gmail Inbox](#Gmail_Inbox)

[Music Player](#Music_Player)

[Video Player](#Video_Player)

<br />

---

<br />

### Ad_Banner

<br />

Emmet

! 탭 누르면 HTML 기본 구조 나옴

<br />

meta:vp 탭키 자동완성하면 아래 viewport 메타 태그 나옴

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

<br />

HTML 작성시 스타일 신경 쓰지 말고 HTML 의미있게 마크업하는 것에 집중

<br />

[코드 참고](./실습/01Ad_Banner.html)

<br />

[목차로](#목차)

<br />

----

<br />

### Google_Search_Result_Item

<br />

메타 뷰 포트에서

user-scalable=no 하면 유저가 화면 확대를 못하므로 지우고

maximum-scale=1.0 은 스케일 최대 1.0 이니까 지우고

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

<br />

제목이면서 anchor tag

```html
<h1>
    <a href="https://www.w3schools.com/html/html5_semantic_elements.asp">
        HTML5 Semantic Elements - W3Schools
    </a>
</h1>
```

<br />

html escape code 구글링

https://www.freeformatter.com/html-entities.html

<br />

& 는 브라우저가 렌더할 때 헷갈리니까 `&amp;` 이렇게 쓴다

꺽쇠도 태그로 오해하지 않고 텍스트라는 것을 알려주기 위해 `&lt;` lt는 less than

달러도 `&dollar;`

copyright은 `&copy;`

```html
< &lt;
> &gt;
```

```html
<p>
    &amp;
    &dollar;
    &copy;
    Oct 27, 2019 - Examples of non-<strong>semantic elements</strong>: &lt;div&gt; and &lt;span&gt; - Tells nothing about its content. ... HTML5 <strong>semantic elements</strong> are supported in all modern browsers. ... So, on the Internet, you will find HTML pages with &lt;section&gt; elements containing ...
</p>
```

<br />

[코드 참고](./실습/02GoogleSearchResultItem.html)


<br />

[목차로](#목차)

<br />

---

<br />

### Feature_Box

<br />

디자인 bitbucket.org 참고

<br />

```html
<img src="https://wac-cdn.atlassian.com/dam/jcr:bc1f15f9-3b2e-4c30-9313-0ebd6175f18c/File%20Cabinet@2x.png?cdnVersion=676" alt="" />
<h1>Free unlimited private repositories</h1>
<p>
    Free for small teams under 5 and priced to scale with Standard ($3/user/mo) or Premium ($6/user/mo) plans.
</p>
```

img 태그에서 alt 값 애매할 땐 생략말고 :sparkles:비워두기

<br />

하나의 덩어리 div 태그로 감싸주기

img가 중요하지 않다고 생각되면 주석처리

어쨌든 이미지를 넣어야하므로 `css로 이미지 별도 처리` (div에 class 주고)

```html
<div class="feature-box no-image">
    <!-- <img src="https://wac-cdn.atlassian.com/dam/jcr:bc1f15f9-3b2e-4c30-9313-0ebd6175f18c/File%20Cabinet@2x.png?cdnVersion=676"
alt="" /> -->
    <h1>Free unlimited private repositories</h1>
    <p>
        Free for small teams under 5 and priced to scale with Standard ($3/user/mo) or Premium ($6/user/mo) plans.
    </p>
</div>
```

```css
.feature-box.no-image {
    padding-top: 196px;
    background-image: url("https://wac-cdn.atlassian.com/dam/jcr:bc1f15f9-3b2e-4c30-9313-0ebd6175f18c/File%20Cabinet@2x.png?cdnVersion=676");
    background-repeat: no-repeat;
    background-position: center 40px;
    background-size: auto 140px;
}
```

<br />

[코드 참고](./실습/03FeatureBox.html)

<br />

[목차로](#목차)

<br />

---

<br />

### Logo_in_Header

<br />

로고는 브랜드 아이덴티티라 의미있는 정보라 생각들어서 img 태그로 처리

<br />

a(anchor)태그는 href 속성 무조건 있어야 한다

<br />

[코드 참고](./실습/04LogoInHeader.html)

<br />

[목차로](#목차)

<br />

---

<br />

### Breadcrumb_Pagination

<br />

순서 중요한 list 는 ol 이용해서 마크업

ol의 자식요소로는 li만 올 수 있다

<br />

button 에 disabled 넣으면 누를 수 없는 버튼

<br />

`WAI-ARIA` <- 인터넷 접근성 도와주는 API

스크린리더로 웹 이용하는 경우 고려해서 마크업

a 태그 안에 `aria-label` 이라는 글로벌 속성 추가

<br />

[코드 참고](./실습/05BreadcrumbAndPagination.html)

<br />

[목차로](#목차)

<br />

---

<br />

### Product_Card

<br />

`<html lang="ko">` <- 한글이라서 HTML lang값을 ko로

<br />

fontawesome.com 사용해서 별점

script 태그 추가하고 ..

<br />

스크린리더가 안읽게 하려면

`aria-hidden="true"`

<br />

[코드 참고](./실습/06ProductCard.html)

<br />

[목차로](#목차)

<br />

---

<br />

### Instagram_User_Profile

<br />

마크업할 땐 의미에 맞게 마크업하는 것에 신경쓰기

자잘한 것은 css로 처리

스크린리더로 들으면서 사용하는 입장, 어떻게 정보 전달해야할까 생각 

<br />

[코드 참고](./실습/07InstagramUserProfile.html)

<br />

[목차로](#목차)

<br />

---

<br />

### Receipt

<br />

[코드 참고](./실습/08Receipt.html)


<br />

[목차로](#목차)

<br />

---

<br />

### Github_Dropdown_Menu

<br />

[코드 참고](./실습/Github_Dropdown/index.html)

<br />

[목차로](#목차)

<br />

---

<br />

### Input_Group

<br />

[코드 참고](./실습/10InputGroup.html)


<br />

[목차로](#목차)

<br />

---

<br />

### Feed

<br />

[코드 참고](./실습/11Feed.html)


<br />

[목차로](#목차)

<br />

---

<br />

### Gmail_Inbox

<br />

구조 반복

table 활용

<br />

[코드 참고](./실습/12GmailInbox.html)


<br />

[목차로](#목차)

<br />

---

<br />

### Music_Player

<br />

html은 lang="en" 이지만

img태그에서 alt 값은 한국어라서 lang="ko" 줌

<br />

[코드 참고](./실습/13MusicPlayer.html)


<br />

[목차로](#목차)

<br />

---

<br />

### Video_Player

<br />

[코드 참고](./실습/14VideoPlayer.html)


<br />

[목차로](#목차)

<br />

