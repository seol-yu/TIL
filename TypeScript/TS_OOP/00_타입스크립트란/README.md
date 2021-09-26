<br />

<a href="https://github.com/seol-yu/TIL/tree/master/TypeScript/TS_OOP" target="_blank"><img src="https://github.com/seol-yu/TIL/blob/master/images/typescript-badge-logo.png?raw=true" height=30 /></a>
<br />

---

<br />

### 목차

[타입스크립트란](#타입스크립트란)

[타입스크립트가 뜨는 이유](#타입스크립트_뜨는_이유)

[타입스크립트_공부법](#타입스크립트_공부법)

[준비물_설치](#준비물_설치)

[북마크](#북마크)

[공식 사이트에서 타입스크립트 포인트 정리](#타입스크립트_공식사이트)

[사용해보기](#사용해보기)

[타입스크립트 컴파일러 툴](#타입스크립트_컴파일러_툴)

<br />

---

<br />

### 타입스크립트란

<br />

타입스크립트는

마이크로소프트사에서 만든 프로그래밍 언어(2년 개발. 2012/10 v0.8 ~)

<br />

 오픈소스 프로젝트라 코드 확인 가능

어느 브라우저, OS.. 자바스크립트 동작하는 어디든 JS 대체 가능

왜냐면

 JS 베이스로 한 superset of JavaScript라서.

TS를 transcompiles(컴파일러 툴은 TS 자체제공 컴파일러 툴 or BABEL 이용 가능) 해서 JS 코드로 변환

<br />

JS의 특징인 dynamically typed <- 프로그램이 동작할 때 실시간으로 타입이 결정되어서  runtime errors 발생할 수 있는 문제

but, JS에 타입이 더해진 TS는 Statically Typed <- 컴파일할 때 타입 관련 에러 잡을 수 있다

<br />

JS도 객체지향 프로그래밍 언어이지만 Prototype 베이스로 구현 가능하고

Constructor Functions 이용하면 클래스 이용해서 오브젝트 만드는 것처럼 간편히 오브젝트 제작 가능하지만 이 자체만으로 강력한 객체지향 프로그래밍하기 어렵다

ES6에서 클래스 도입되었지만(프로토타입 베이스) 그래도 할 수 있는게 거의 없다

<br />

TS에선 class, interface, generics, types 활용 가능해서 객체지향 프로그래밍 가능

<br />

[목차로](#목차)

<br />

---

<br />

### 타입스크립트_뜨는_이유

<br />

JS는 프로그램이 동작할 때 타입이 결정되지만(위험)

TS는 타입이 정적으로 결정(Statically Typed), 즉 코딩할 때 타입 결정됨(즉각적 타입 에러 볼 수 있다)

<br />

프로그래밍 언어 타입 결정 언제 되냐에 따라

1. dynamically typed - 런타임 환경 때 타입이 결정

   파이썬, 루비, 자바스크립트 등등

   ```python
   let age = 10;
   age = 'hi';  # no type at programming time and compile time
   ```

   가독성(readability) 떨어짐, 사용자가 사용할 때야 에러남 bugs

2. statically typed - 컴파일 시간에 타입이 결정

   TS, 자바, 고 등등

   ```javascript
   let age:number = 10;  // type of variable is known at compile time
   age = 'hi';  // 다른 타입 할당하면 컴파일 시간(코딩할 때)에 에러남
   ```

   실시간 에러 검사

   안정적, 확장성있는 소프트웨어 만들 수 있다

cf) 코드 -> 컴파일러가 컴파일 -> 런타임

<br />

강력한 객체지향 프로그래밍(Object-Oriented Programming) 가능

modern programming paradigm으로 알려진 객체지향 프로그래밍 OOP

객체 위주로 modularity(모듈성), reusability(재사용성), extensible(확장성), maintainability(유지보수성) 높다

Productivity 생산성

higher-quality

Faster

<br />

[목차로](#목차)

<br />

---

<br />

### 타입스크립트_공부법

<br />

1. JS 기본 지식 익히기 - 기본 문법 ~ 최신 문법

2. 브라우져 환경에서 쓰이는 웹 APIs

3. 타입에 대한 정확한 이해 - TS는 유연하고 강력한 타입 제공(언제 어떻게 쓸지)

   class, interface, generics 있어서 OOP 가능

   OOP 원칙 알기

<br />

[목차로](#목차)

<br />

---

<br />

### 준비물_설치

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 북마크

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 타입스크립트_공식사이트

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 사용해보기

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 타입스크립트_컴파일러_툴

<br />



<br />

[목차로](#목차)

<br />
