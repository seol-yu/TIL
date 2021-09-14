<br />
<a href="https://github.com/seol-yu/TIL/tree/master/React/React_Concepts">
  <img src="https://github.com/seol-yu/TIL/raw/master/images/react-badge-logo.png?raw=true" height="30" style="max-width: 100%;">
</a>
<br />

### 목차

[리액트 왜 배워야하나](#리액트_왜_배워야하나)

[리액트 컨셉과 구현 사항](#리액트_컨셉_구현_사항)

[공식 사이트](#공식_사이트)

<br />

---

<br />

### 리액트_왜_배워야하나

<br />

React <- 페이스북 사에서 만든 자바스크립트 라이브러리 중 하나

A library for creating user interfaces (사용자에게 보여지는 유저 인터페이스를 만들 수 있게 도와주는 라이브러리)

Renders UI and responds to events (UI 보여주고 이벤트 처리)

ex) 페북, 에어비앤비, 우버, 넷플릭스, 인스타 등

<br />

MVC 패턴(디자인 패턴 중 하나)

어플리케이션을 모델, 뷰, 컨트롤러 각각의 레이어로 나누어서 코딩해나가기

Model

View <- 리액트가 담당

Controller

<br />

프레임워크와 라이브러리의 차이

* 프레임워크

  정해진 골격 안에서 원하는 기능 구현해야 함

  이미 집 구조 or 철제 완성된 상태의 완성품

  우리가 하는 것은 벽돌색 바꿔서 붙이기, 가구 재배치

  ex) 앵귤러. UI뿐 아니라 라우팅, 스테이트 관리할 수 있는 방식, HTTP Clients 등 다양한 기능들이 한번에 제공

* 라이브러리

  부품들

  원하는 재료 골라서 입맛에 맞게 원하는 구조로 집 짓기

  UI 관리 라이브러리, 라우팅 관련 라이브러리, 스테이트 관리 라이브러리

  작은 단위, 작은 도메인 안에서 원하는 작은 부분 구현한 것

  ex) 리액트(UI 담당 라이브러리)

뷰는 프레임워크에 해당하지만 스테이트 관리, Http clients가 포함 안되어있어서 프레임워크와 라이브러리 중간 상태

<br />

리액트는 앵귤러와 달리 기존 버전과 호환(Breaking Changes가 없도록), 안정성있게 업데이트 됨

강력한 커뮤니티, 문서화 잘 되어있다

리액트 이용해서 웹 어플리케이션 만들고 

리액트 네이티브 이용해서 모바일 어플리케이션,

일렉트론 이용해서 데스크탑 어플리케이션 만들 수 있다

<br />

[목차로](#목차)

<br />

---

<br />

### 리액트_컨셉_구현_사항

<br />

user interface를 만들 수 있는 라이브러리

즉, 웹 UI를 만드는 라이브러리

컴포넌트들

컴포넌트(한가지 기능을 수행하는 UI 단위. 서로 독립적 independent, 고립 isolated, 재사용 가능 reusable)로 이루어진 UI 라이브러리

<br />

각각의 리액트 어플리케이션은 하나 이상의 컴포넌트로 이루어져 있음

리액트 어플리케이션 <- 각각의 독립적인 컴포넌트를 서로 조립해서 만듦

<br />

제일 상위 컴포넌트: Root

cf) 작성한 웹페이지(HTML 태그들) -> DOM(Document Object Model) Tree -> 브라우저가 이해

리액트도 돔트리처럼 컴포넌트 트리 형식으로 만들어져 있다

(ex. Root 컴포넌트 안에 Navbar와 Content 있고, Navbar 안에는 Logo, Button들이 Content 안에는 Article들이)

<br />

컴포넌트는 다른 컴포넌트와 독립적으로 해당 로직, state(상태)가 들어있기에 cohesive(응집적)하다

<br />

```react
import React from 'react';

// Component
class LikeButton extends Component {
    // State
    state = {
        numberOfLikes: 0,
    };
	// render
    render() {
        return <button>
            {this.state.numberOfLikes}
        </button>;
	}
}

export default LikeButton;
```

리액트 컴포넌트는 리액트에서 제공하는 컴포넌트라는 클래스(스테이트 부분, 렌더링하는 부분)를 상속해야 함

위 코드에서 LikeButton 이라는 클래스는 리액트에서 제공하는 컴포넌트라는 클래스를 상속(extends)한다

<br />

컴포넌트 클래스 안에는 state 부분과 rendering 하는 부분이 있다

* state 스테이트 <- 이 컴포넌트에 들어 있는 데이터를 나타내는 오브젝트
* render 함수 <- 어떻게 사용자에게 표기될건지. jsx. 사용자에게 표기할 수 있는 render 함수

<br />

리액트는 이 스테이트라는 오브젝트에 데이터가 변경되면 렌더함수가 자동적으로 다시 호출

변경된 스테이트의 값이 화면에 나타날 수 있도록(업데이트) 렌더 함수가 계속 반복적으로 호출

렌더 함수 안에 자식요소 컴포넌트가 들어있다면 그들의 렌더 함수도 다시 호출

<br />

리액트 Virtual DOM Tree(가상 돔 트리) <- 리액트 컴포넌트들이 메모리상에 보관되어져 있다

리액트 모든 구조들이 돔트리에 업데이트 되는 것이 아니고

컴포넌트 변동 사항 생겨서 자식 컴포넌트에 랜더함수가 호출이 되면

리액트는 이전 버츄얼 돔트리와 비교해서 정말 실질적으로 업데이트 되어야 하는 부분 계산 후 

필요한 부분만 돔트리에 업데이트(한번에 다 같이)

렌더 함수 호출 많이 되어도 실질적으로 보여지는 데이터가 변동 안되면 돔트리에는 영향X

즉, 리액트 내부에서 가상 돔트리를 메모리에 보관. 성능 걱정X

<br />

Re-render the whole app on every update

리액트는 데이터가 변경 될 때마다 어플리케이션 전체를 다시 렌더링

개발자는 데이터가 변경이 되면 해당 부분 업데이트 해야되는 것 걱정 없이 

스테이트에 맞게 렌더 함수에 어떻게 표기될건지 한번만 정리해두면 

모든 것은 알아서 리액트가 상태 변경되면 렌더함수 다시 호출

사용자가 부드럽게 웹 어플리케이션 이용하기 위해 60 frames per seconds (60fps) 유지

즉, 1초에 60개의 프레임이 업데이트 될 수 있도록 성능 신경써야하는데

리액트는 기본적으로 이것을 보장

<br />

테스팅(유닛 테스트)하기 좋다 = 테스트 어빌리티가 좋다

Components <- 데이터를 가지고 있는 state가 있고 사용자에게 어떻게 보여줄지 정의하는 render 함수가 있다

Re-render(state, render()) <- 상태가 변할 때마다 렌더 함수가 계속 호출

V(virtual)DOM <- 성능이 괜찮은 이유. 리액트 내부에 가상의 VDOM이 있기 때문

<br />

[목차로](#목차)

<br />

---

<br />

### 공식_사이트

<br />

**React**: https://reactjs.org/docs/getting-started.html

**Create React App**: https://create-react-app.dev/docs/getting-started

<br />

React는 Declarative(선언적) 하다

스테이트와 랜덤함수를 통해서 명료하게 코드를 봤을 때 바로 이해 가능

<br />

컴포넌트 베이스로 만들어져 있고 스테이트가 안에 들어있다

데이터의 상태가 컴포넌트 안에 포함 되어 있다

props와 스테이트 이용해서 쉽게 어플리케이션 제작

등등 ..

<br />

https://jsbin.com/

https://codepen.io/pen?&editors=0010

https://codesandbox.io/s/new

https://stackblitz.com/edit/react-xrl9nn

<br />

리액트도 라이브러리이기 때문에 HTML 파일에서 바로 연결 가능하지만

규모있는 프로젝트 / 다양한 라이브러리 묶어서 프로젝트 관리 가능하고 확장성있는 환경을 설정해야한다

추천: Toolchains

- Create React App <- 간편하게 싱글페이지 어플리케이션 제작
- Next.js <- Server Side 렌더링
- Gatsby <- 정적인 사이트

Create React App <- 간단한 스트립트. 많은 리액트 개발자들이 공통적으로 사용, 설정해서 쓰는 프로젝트 환경 한번에 바로 설치해서 쓸 수 있도록

https://github.com/facebook/create-react-app

https://create-react-app.dev/

https://create-react-app.dev/docs/getting-started

<br />

[목차로](#목차)

<br />