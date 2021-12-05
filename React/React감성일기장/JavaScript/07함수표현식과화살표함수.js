// 자바스크립트의 자료형 (Data Types)
// Primitive Data Type - Number, String, Boolean, Undefined, Null
// Non-Primitive Data Type - Object, Array, Function

console.log(helloB()); // 호이스팅 - 함수선언식 코드 최상단으로
// console.log(helloA()); // 함수 표현식은 이렇게 쓰면 에러남

let helloA = function () {
  return "안녕하세요";
}; // 함수 표현식

function helloB() {
  return "안녕하세요:)";
} // 함수 선언식

console.log(helloA); // 변수가 함수 담을 수 있다

const helloText = helloA();
console.log(helloText);

// 함수 표현식을 화살표 함수로
let helloC = () => {
  return "안녕하세요!";
};

let helloD = () => "안녕";

console.log(helloC());
console.log(helloD());
