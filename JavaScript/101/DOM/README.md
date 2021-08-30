DOM

[DOM 큰 그림](#DOM)

[Target Event](#Target_Event)

[웹 페이지 요소 분석](#WebPage_Elements)

[CSSOM](#CSSOM)

[성능 보장 렌더링 순서](#Critical_rendering_path)

[브라우저가 어떻게 layers를 만들었는지 확인](#More_tools_Layers)

<br />

---

<br />

### DOM

<br />

**DOM**

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

**DOM API**

https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API

<br />

DOM (Document Object Model)

HTML파일을 브라우저에서 읽으면서

HTML Tag -> JavaScript Node

브라우저가 이해할 수 있는 자신들만의 오브젝트로 변환한다

<br />

Node라는 오브젝트는 EventTarget이라는 오브젝트를 상속한다

(Node 오브젝트는 EventTarget의 오브젝트)

즉 모든 Node는 이벤트가 발생할 수 있다

<br />

document도 Node를 상속하므로(document도 Node이기 때문에)

또 Node는 EventTarget이기 때문에 document에서도 이벤트가 발생할 수 있다

<br />

이미지나 HTML 요소들은 Element로 변환이 된다

그래서 Element도 Node이고 Node는 EventTarget이기 때문에 모든 요소에서 이벤트가 발생할 수 있다

<br />

텍스트도 마찬가지

Node의 종류는 굉장히 다양하다

<br />

Element 안에서도 굉장히 다양한 Element가 있는데 

HTML 요소라면 HTMLElement(<- HTMLInputElement, HTMLDivElement..)가 되고 

SVG 요소라면 SVGElement

이런 각각의 타입별로 Element가 존재하게 된다

<br />

브라우저가 웹 페이지 즉 HTML 파일을 읽어서 DOM 트리로 변환

Document Object Model의 트리로 변환해서

브라우저가 이해할 수 있도록 자신들만의 오브젝트 나무로 만들어나감

<br />

html(HTMLHtmlElement) <- head(HTMLHeadElement) <- meta(HTMLMetaElement), meta(HTMLMetaElement), title(HTMLTitleElement), link(HTMLLinkElement)

이런 식으로 HTML 태그에는 그에 상응하는 DOM 트리 요소가 있다

<br />

글로벌 오브젝트에는 window가 들어있고

window에는 document라는 것이 들어있다

Document Object Model 안에는 페이지별로 각각 정의한 요소들로 구성

![window](../imgs/window.png)

<br />

---

<br />

### Target_Event

<br />

**Node**

https://developer.mozilla.org/en-US/docs/Web/API/Node

**Event Target**

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget

<br />

Dom Node라는 인터페이스는 우리가 DOM API를 쓰는데 필수적인 인터페이스다

<br />

모든 Node는 EventTarget이라고도 말할 수 있는데

EventTarget에는 총 세 가지 Methods가 있다

`EventTarget.addEventListener()`

`EventTarget.removeEventListener()`

`EventTarget.dispatchEvent()`

<br />

---

<br />

### WebPage_Elements

<br />

Elements 검사 해보면

$0

이런게 나오는데

console에서 $0 해보면 'Use $0 in the console' 콘솔에서 사용해라

![0](../imgs/0.png)

<br />

`$0`

`$0.childNodes`

`$0.nextSibling`

`$0.parentNode`

<br />

---

<br />

### CSSOM

<br />

**CSSOM**

https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model

<br />

CSSOM (CSS Object Model의 약자)

<br />

CSS Style은 브라우저가 어떻게 이해할까?

브라우저에서 Document Object Model을 만들게 되면 

우리가 정의한 CSS를 병합해서 CSSOM이라는 것을 만든다

<br />

브라우저가 html 파일을 Document Object Model로 만들었다면

html 파일 안에 들어있는 스타일 즉 임베디드된 스타일 또는 CSS 파일에 정의한 CSS나 html 태그에 정의한 스타일 요소들이나 이런 스타일이 따로 지정이 되어 있지 않아도 브라우저상에서 기본적으로 가지고 있는 스타일이 있는데 이런 모든 스타일에 관련된 정보들을 합해서, 즉 DOM과 CSS의 요소를 병합해서 CSSOM이라는 트리를 다시 만든다

<br />

CSSOM <- 브라우저에서 기본적으로 설정된 모든 속성값들도 포함. 즉 cascading 룰에 따라서 합해진 이런 모든 CSS 값들이 정의되어 있다. 이것을 computed styles라고 부르는데 모든 것들이 다 이미 계산된 스타일을 말함

DOM + CSSOM = Render Tree

<br />

ex) span에 opacity가 0, visibility가 hidden으로 설정이 되어 있다면

사용자 눈에는 보이지 않지만, 사실 요소는 거기에 있고 Render 트리에 포함이 된다

하지만

display: none으로 되어 있다면

Render 트리에 포함이 되지 않는다

<br />

---

<br />

### Critical_rendering_path

<br />

### Critical rendering path 성능 보장 렌더링 순서

브라우저에 url을 입력하면

HTML request/response -> loading -> scripting(DOM, CSSOM으로 변환) -> rendering(렌더링 트리 만들기) -> layout -> painting

<br />

Construction : DOM + CSSOM + RenderTree

Operation : layout, paint, composition

<br />

RenderTree(DOM 요소뿐만 아니라 최종적으로 계산된 CSS 스타일 포함) 정보를 기반으로 layout 구상

이후 paint 과정 일어나는데 다양한 속성값에 따라 브라우저 엔진마다 성능 개선을 위해 레이어를 만든다(포토샵 레이어 기능 생각)

<br />

CSS will-change 속성값(불필요하게 너무 많이 쓰지X): 브라우저에게 이 요소는 변화될지도 모른다고 말함으로 브라우저가 새로운 레이어에다가 추가해놓음

<br />

rendering tree를 만들 때 어떻게 하면 빠르게 만들 수 있을까?

DOM 요소가 작으면 작을수록, 

CSS 규칙이 작으면 작을수록 tree가 작아지기 때문에 빠르게 만들 수 있음

불필요한 태그 사용X, div 태그 남용X, wrapping 클래스나 wrapping 요소 쓸데없이 만들기X

최대한 요소들을 작게 만들기

<br />

Operation time에는 

performant user interactions 

avoid jank 

ensure reflows & repaints at 60 f/s

paint가 자주 일어나지 않도록 만들기

<br />

자바스크립트나 CSS로 DOM 요소를 조작할 때 

composition만 다시 일어나면 best, 

layout 다시 일어나게 하면 최악

<br />

---

<br />

### More_tools_Layers

<br />

개발 툴 열어보면 ... 옵션 More tools - Layers

<br />

그냥

```css
img {
    z-index: 100;
}
```

하면 레이어에 아무 변화 없지만

```css
img {
    z-index: 100;
    will-change: opacity;
}
```

이렇게 will-change 속성값을 주면(opacity가 변경될 수 있다)

이미지를 다른 레이어에 표기

![Layers](../imgs/Layers.png)

<br />

---

<br />

http://csstriggers.com/

내가 쓰는 CSS 속성값이 좋은지 안좋은지 확인

애니메이션 transition 이용할 때 어떤 속성값, CSS쓰냐에 따라

layout이 발생할 수 있고 또는 paint만 발생할 수도 있고

더 좋게 composition만 발생할 수도 있다

<br />

Blink <- 크롬 브라우저에서 쓰임

<br />

ex) 애니메이션은 top, left(layout, paint, composite까지 발생) 말고 translate 이용하는 것이 좋다

<br />

---

<br />
