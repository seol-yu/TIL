### 자바스크립트

기본문법, 사용법, 내부 구현 사항(원리 + 활용)

<br />

## 목차

[자바스크립트](#자바스크립트)

[변수](#변수)

[연산자](#연산자)

<br />

---

<br />

## 자바스크립트

<br />

자바스크립트 JavaScript

브라우저

HTML - Structure

CSS - Presentation

JavaScript - Behavior

<br />

node.js - 자바스크립트 활용 범위 넓어짐(브라우저 -> 컴퓨터)

<br />

---

<br />

`자바스크립트 엔진` 동작할 때(런타임 시) 코드 한줄한줄 번역해서 실행(인터프리터)

인터프리터는 바로 실행(실행 속도가 비교적 느릴 수 있다)

<br />

컴파일러 Compiler는 코드(ex. JAVA) -> 컴파일러 -> 실행파일(컴파일링) -> 컴퓨터에서 실행

컴파일러는 실행 전 모든 코드를 컴파일링함

<br />

---

<br />

브라우저마다 Chakra, V8, JavaScript Core, SpiderMonkey

Edge 브라우저는 크롬과 같이 V8

node.js도 V8

Just In Time Compilation

<br />

ECMAScript - 문법의 규격사항, 표준사항

<br />

ES6(ECMAScript 2015)

<br />

---

<br />

lightweight 가벼운 스크립트 언어

interpreted 한줄한줄 인터프리터로 번역

just-in-time compiled 미리 컴파일하지 않고 필요할 때 런타임 시

first-class functions

자바스크립트 엔진이 있는 어떤 곳에서든 사용 가능

prototyped-based

multi-paradigm

object-oriented

imperative

declarative

single-threaded

dynamic language

<br />

---

<br />

프로그래밍 언어인 자바스크립트

개발자가 정해진 문법으로 특정한 로직을 수행하도록 프로그래밍

<br />

자바스크립트 언어는 문법. 출력 통신 등을 하기 위해선 외부 환경(라이브러리) 필요

프론트엔드 지식 + 코딩 + 브라우저에서 제공하는 WebAPIs

React Vue .. (front)

Express Nest .. (back)

<br />

---

<br />

자바스크립트 JavaScript

최신 문법

Basic - let, const / if, for, switch, while / function / object (기본 문법, 사용법)

Advanced - prototype / Hoisting / Scope / Closure (내부 구현사항)

<br />

---

<br />

크롬 브라우저 F12 Console에서

```javascript
console.log('Hello World!');
```

<br />

---

<br />

Visual Studio Code

익스텐션

1. prettier
2. material icon Theme
3. Material Theme
4. Live Server

<br />

Settings - quote 검색

single 사용

<br />

---

<br />

node 설치

터미널에서

`node -v`

`node`

console.log('Hello World');

Ctrl + C 종료

<br />

---

<br />

index.js

```javascript
console.log('seolyu');
```

`node index.js`

`npm install nodemon -g` <- nodemon 설치

`nodemon index.js`

수정한거 반영됨

Ctrl + C 종료

<br />

[목차로](#목차)

<br />

---

<br />

## 변수

<br />

컴퓨터 - 하드디스크 Hard Drive, CPU 연산 Compute, 메모리 Memory

<br />

어플리케이션이 메모리 상에 올라왔을 때

Code, Data(변수), Stack(실행순서), Heap(복잡한 데이터 타입인 객체들 할당)

<br />

---

<br />

변수 Variable

입력 input -> `처리 process` -> 출력 output (-> 저장 storage / 데이터 보내기)

<br />

변수 Variables: 값을 저장하는 공간. 자료를 저장할 수 있는 이름이 주어진 기억장소

let  a = 0;  // 변수 선언 Variable declaration과 값의 할당 assignment

// 메모리 셀(메모리 주소 들어있음) 어딘가에 0 할당. a 변수 이름은 메모리 주소 가리킴.

// a는 변수 이름 Variable name. 식별자 identifier

// 메모리 주소 자체를 변수로 쓰면 어떤 변수인지 유추 어려움

a = 1;  // 값의 재할당 value reassigning

const

처리 process -> 데이터 data

<br />

---

<br />

변수 이름 짓기 Naming Variables

저장된 값을 잘 나타낼 수 있는 의미 있는 이름

구체적일수록 좋다

<br />

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

<br />

---

<br />

데이터 타입 Data Type

* 원시 Primitive(->Data, Stack) - 단일 데이터 number(2^53 - 1 BigInt), string, boolean, null, undefined, Symbol

  값 자체가 메모리 셀에 들어있다

* 객체 object(->Heap 메모리 공간에 할당. 사이즈 동적으로) - 복합 데이터 object(array), function

  참조값(메모리 주소)가 메모리 셀에 들어있다

  복합 데이터 {key: value}

  ```javascript
  {
      id: 1234,
      key: 'secret-key',
  }
  ```

  ```javascript
  let a = 123;
  
  let apple = {
      name: 'apple',
      color: 'red',
      display: '🍎',
  }
  
  apple.name
  ```

<br />

---

<br />

원시 Primitive

```javascript
// Copy by Value
let a = 1;
let b = a;  // b에 1이 들어감

b= 2;  // b에 2이 들어감
```

<br />

객체 Object

```javascript
// Copy by Reference
let apple = {
    name: 'apple',
}
let orange = apple;  // orange 변수에 apple이 가리키는 메모리 주소값이 할당됨
apple.name = 'orange';
```

<br />

---

<br />

let <- 재할당 가능

const <- 재할당 불가능

<br />

|       | 재할당 Reassignable | 변경 Mutable |
| ----- | ------------------- | ------------ |
| let   | Yes                 | Yes          |
| const | No                  | Yes          |

<br />

JavaScript 자바스크립트 <- 동적인 언어

컴파일러로 실행파일로 변환하는 언어는 정적 타입 Static Type 인데

자바스크립트는 자바스크립트 엔진(인터프리터)이 런타임 시 코드를 한줄씩 번역해서 실행. 동적 타입(동적으로 타입 결정. weakly typed)

<br />

[목차로](#목차)

<br />

---

<br />

## 연산자

<br />

Operators

<br />

표현식 Expressions <- 값으로  평가될 수 있는 문

값 Value

<br />

리터럴 Literal: 코드에서 값을 나타내는 표기법

\`템플릿 리터럴(Template Literal)\`

<br />

문 Statement

최소 실행 단위

<br />

```javascript
1;  // 숫자 리터럴 표현식
1 + 1;  // 연산자 표현식
call();  // 함수 호출 표현식
let b;  // 선언문
b = 2;  // 할당문, 할당 표현식인 문
```

<br />

연산자 우선순위

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

<br />

[목차로](#목차)

<br />

---

<br />

## 제어문

<br />

Control flow statement

한줄씩 순차적으로

코드의 흐름을 제어

<br />

조건문 Conditional statement

if, switch 특정할 조건일 때만

<br />

반복문 Loop statement

for, while, do-while

반복적으로 수행

<br />

[목차로](#목차)

<br />

---

<br />
