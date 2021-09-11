<br />
<a href="https://github.com/seol-yu/TIL/tree/master/JavaScript/101" target="_blank"><img src="https://github.com/seol-yu/TIL/blob/master/images/javascript-badge-logo.png?raw=true" height=30 /></a>
<br />

### 목차

[이벤트 이해하기 및 종류](#Events?)

[Bubbling & capturing](#Bubbling_capturing)

[preventDefault](#preventDefault)

[이벤트 위임 Event Delegation](#이벤트_위임)

[Keyup 과 keydown](#Keyup_keydown)

[Web Form](#Web_Form)

<br />

---

<br />

### Events?

<br />

**Events 개념**

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

**Events 종류**

https://developer.mozilla.org/en-US/docs/Web/Events

<br />

종류

- mouse click
- keyboard
- resizing window
- close window
- page loading
- form submission
- video is being played
- error

<br />

특정한 요소에 Event Handler 등록 -> 브라우저에서 다양한 정보가 들어있는 이벤트라는 오브젝트 만들어서 콜백 함수에 전달해줌

EventTarget을 상속하는 모든 요소에 이벤트 핸들러 등록 가능

<br />

이벤트타겟에는 3개의 API가 있다

- EventTarget.addEventListener()
- EventTarget.removeEventListener()
- EventTarget.dispatchEvent()

<br />

`$0.addEventListener('click', () => {console.log('clicked!')});`

`$0.dispatchEvent(new Event('click'));`

```
const listener = () => {console.log('clicked!')};  // 콜백 함수 등록
$0.addEventListener('click', listener);
$0.removeEventListener('click', listener);
```

<br />

[목차로](#목차)

<br />

---

<br />

### Bubbling_capturing

<br />

**Bubbling and Capturing** 

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture

<br />

capturing 부모 컨테이너에서 부터 시작해서 캡처링을 통해서 내려옴 이벤트 핸들러 호출

이벤트는 버블링 업 해서 상위에 있는 부모에게 이벤트 발생했다고 해서 부모에게 등록된 이벤트 핸들러 호출, 그 상위에 또 등록된 부모의 이벤트 핸들러 호출

capturing 단계에서 할 일은 딱히 없고

버블링은 신경써서 하자

<br />

```javascript
button.addEventListener('click', event => {
    console.log(`button1 ${event.currentTarget}, ${event.target}`);
    event.stopPropagation();  // 전달하는거 그만. 버튼에서만 핸들링이 되고 버블링 일어나지 않음
});
button.addEventListener('click', event => {
    console.log(`button2 ${event.currentTarget}, ${event.target}`);
});
```

<br />

```javascript
button.addEventListener('click', event => {
    console.log(`button1 ${event.currentTarget}, ${event.target}`);
    // event.stopPropagation();
    event.stopImmediatePropagation();  // button1만 핸들링.
});
button.addEventListener('click', event => {
    console.log(`button2 ${event.currentTarget}, ${event.target}`);
});
```

```javascript
button.addEventListener('click', event => {
    console.log(`button1 ${event.currentTarget}, ${event.target}`);
    // event.stopPropagation();
});
button.addEventListener('click', event => {
    console.log(`button2 ${event.currentTarget}, ${event.target}`);
    event.stopImmediatePropagation();  // button1이 먼저라서 button1, button2 둘 다
});
```

<br />

event.stopPropagation();

event.stopImmediatePropagation();

위험하고 나쁨. 사용하지 않는 것이 좋다

<br />

부모에다가 아래 코드 쓰기

```javascript
if (event.target !== event.currentTarget) {
    return;
}
```

<br />

[목차로](#목차)

<br />

---

<br />

### preventDefault

`event.preventDefault()`

<br />

```javascript
document.addEventListener('wheel', event => {
    console.log('scrolling');
    event.preventDefault();
}, { passive: false });
```

but,

scrolling(<- 빠르게 뭔가가 동작해야되는 이벤트)과 같이 passive가 true로 설정된 애들은 웬만해서는 passive를 false로 설정하지 않는 것이 좋다

<br />

[목차로](#목차)

<br />

---

<br />

### 이벤트_위임

<br />

Event Delegation

<br />

아래와 같이 모든 요소들을 찾아서 일일이 이벤트를 등록하는 것은 예쁘지 않다

```javascript
// Bad
const lis = document.querySelectorAll('li');
lis.forEach(li => {
    li.addEventListener('click', () => {
        li.classList.add('selected');
    });
});
```

<br />

부모 컨테이너는 어떤 자식 요소에서 이벤트가 발생하든 모든 이벤트를 다 들을 수가 있다

부모 안에 있는 자식들에게 공통적으로 무언가 처리를 해야할 때 일일이 이벤트 리스너를 자식 노드에 추가하는 것 보단 부모에 등록하는 것이 좋다

<br />

li가 들어있는 ul태그를 받아 와서 ul에 이벤트 리스너 한번만 등록하면 됨

이벤트에는 

currentTarget(이벤트 핸들러가 부착된 것)과 

target(부모로부터 이벤트가 위임되어 발생하는 자식 요소)이라는 정보가 있으므로

원하는 target에만 집중적으로 처리 가능

```javascript
const ul = document.querySelector('ul');
ul.addEventListener('click', event => {
    if (event.target.tagName == 'LI') {
        event.target.classList.add('selected');
    }
});
```

<br />

[목차로](#목차)

<br />

---

<br />

### Keyup_keydown

<br />

https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event

<br />

keypress 더이상 지원 안됨

Deprecated 됨

<br />

대체할 수 있는 것: beforeinput(IE 지원 안함), keydown

<br />

keydown <- 사용자가 키보드 누르면

keyup <- 사용자가 키보드 누르고 있다가 손 떼면

확인해보려면

```javascript
input.addEventListener('keyup', (event) => {
    if (event.key === 'a') {
        event.preventDefault();
    }
})
// keyup이면 a 쓸 수 있고
// keydown이면 a 안써짐
```

<br />

```javascript
input.addEventListener("keydown", (event) => {
    // 한글처럼 여러번 눌러서 한글자 만드는 경우
    // 글자가 만들어지고 있는 중간에 발생하는 엔터키라면 무시하라는 코드도 추가
    // 아니면 keyup 사용
    if (event.isComposing) {
        return;
    }
    if (event.key === "Enter") {
        onAdd();
    }
});
```

<br />

[목차로](#목차)

<br />

---

<br />

### Web_Form

<br />

튜토리얼: https://developer.mozilla.org/en-US/docs/Learn/Forms

form 태그: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form

<br />

form 태그 이용해서 리팩토링

form 태그 안에 button은 type="submit" 이 디폴트(명시적으로 써주는 것이 좋긴함)

<br />

[목차로](#목차)

<br />
