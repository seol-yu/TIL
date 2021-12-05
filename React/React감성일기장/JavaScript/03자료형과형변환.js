// Primitive Type (원시타입)
// 한번에 하나의 값 만 가질 수 있음
// 하나의 고정된 저장 공간 이용
let number = 12;

// Non-Primitive Type (비 원시 타입)
// 한번에 여러 개의 값을 가질 수 있음
// 여러 개의 고정되지 않은 동적 공간 사용
let array = [1, 2, 3, 4];

// 원시타입
// 숫자형
let age = 25; // 정수
let tall = 150.1; // 실수
let inf = Infinity; // 무한대
let minusInf = -Infinity; // 음의 무한대
let nan = NaN; // 수학적 연산 실패의 결과값

console.log(age * tall);

// 문자열
let name = "Lee";
let name2 = `Seolyu ${name}`; // 템플릿 리터럴
console.log(name2);

// Boolean 참 거짓
let isSwitchOff = false;

// null
let a;
console.log(a); //  undefined;
let b = null; // 실제로 의도적으로 null 대입해줘야
console.log(b); // null

// undefined
let variable;
console.log(variable); //  undefined;

// 형변한
let numberA = 12;
let numberB = "4";
console.log(numberA * numberB); // 48 문자열과 숫자 곱했는데 숫자. 묵시적 형변환
console.log(numberA + numberB); // 124 문자열 붙임
console.log(numberA + parseInt(numberB)); // 16. 명시적 형변환. 의도적으로 형변환
