let age = 25; // 변수 선언

console.log(age); // 25

age = 30;

console.log(age); // 30

// 변수명에는
// ^ + 이런 기호X
// _ 언더스코어랑 $ 는 사용 가능
// 숫자아닌 문자로 시작
// 예약어 피하기

let ag_$e = 25;
console.log(ag_$e);

// let 아닌 var 도 있음
// var는 변수 중복 선언이 되어서
// let 을 쓰자

// const 상수는 읽기 전용 read-only
// 선언 이후 값 못 바꿈
const name = "이설유";
console.log(name);
