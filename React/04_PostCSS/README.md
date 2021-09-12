<br />
<a href="https://github.com/seol-yu/TIL/tree/master/React">
  <img src="https://github.com/seol-yu/TIL/raw/master/images/react-badge-logo.png?raw=true" height="30" style="max-width: 100%;">
</a>
<br />

### 목차

[PostCSS의 장점들](#PostCSS_장점)

[PostCSS로 모듈화 이용하기](#PostCSS_모듈화)

<br />

---

<br />

### PostCSS_장점

<br />

CSS 전처리기

기본적인 CSS만으로는 중복 작성, 다른 브라우저 호환 위해 반복적으로 해줘야하는 것들이 많은데

반복, 중복 최소화하고자 코딩 간편하게 하고자 전처리기가 나옴

대표적으로 LESS, SASS, 스타일러스

얘네들이 제공하는 문법, 프레임워크에 맞춰서 CSS 작성하면 최종적으로 사용자에게 배포할 땐 브라우저가 이해할 수 있는 CSS로 변환해줌

<br />

create react app을 eject 했을 때 기본적으로 PostCSS가 설치되어진 것 확인 <- 개발자들이 공통적으로 사용하는 라이브러리 모아서 간편하게 쓸 수 있도록 도와주는 툴인데 거기 안에 PostCSS가 있다

별도로 따로 설정하지 않아도 autoprefixer라는 것을 쓸 수 있음 <- cf) webkit

PostCSS는 모듈화가 되어서 복잡한 이름명 쓸 필요 없음

다양한 플러그인도 쓸 수 있다 :smile_cat: 확장성

<br />

**PostCSS**: https://postcss.org/

**PostCSS Plugins**: https://www.postcss.parts/

**Plugins Github 페이지**: https://github.com/postcss/postcss/blob/master/docs/plugins.md

<br />

[목차로](#목차)

<br />

---

<br />

### PostCSS_모듈화

<br />

create react app 에서는 button1.module.css 이런식으로 작성하면 모듈화

```jsx
import styles from './button1.module.css';
// 위와 같이 임포트하고

<div className={styles.button}>
	<span className={styles.text}></span>
</div>
// {styles.무엇무엇} 이런 식으로 씀
```

다른 컴포넌트에서 다른 이름을 썼는지 안썼는지 확인하지 않아도

혹은 BEM 규칙을 따르지 않아도

간편하게 작성 가능

<br />

컴포넌트에서 클래스 이름을 문자열로 쓰는 것이 아니라

styles 임포트하고 {styles.~~} 이렇게 해야

배포할 때 자동적으로 이름이 변환되어짐

<br />

[목차로](#목차)

<br />
