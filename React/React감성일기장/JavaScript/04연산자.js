let a = 1; // 대입 연산자
let b = 2;

// 산술 연산자
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b); // 몫
console.log(a % b); // 나머지

// 연결 연산자
let c = "1";
let d = "2";
let e = 3;

console.log(c + d); // 12
console.log(c + e); // 13 묵시적 형변환

// 복합 연산자
let f = 5;
f += 10;
console.log(f);

// 증감 연산자
let g = 10;
g++;
console.log(g);
console.log(g++); // 후위 연산. 라인 끝나고 값 올라감
console.log(g);
console.log(--g); // 전위 연산.

// 논리 연산자
// ! Not
console.log(!true); // false
// && and
console.log(true && true); // 피연산자 두개가 모두 참일 때만 참
// || or
console.log(true || false); // 하나만 참이여도 참

// 비교 연산자 === !== 쓰자
let compareA = 1 == "1";
console.log(compareA); // 자바스크립트에선 == 값만 비교
// 타입도 비교하려면 ===
let compareB = 1 != "1";
console.log(compareB); // false
// 타입까지 비교하려면 !==
let compareC = 1 <= 2;
console.log(compareC);
// 동적 타입 언어
let compareD = 1;
compareD = "1";
console.log(typeof compareD); // string

// null 변환 연산자
let h;
h = h ?? 10; // ?? 은 양쪽의 피연산자 중에 null이나 undefined가 아닌 값을 선택
console.log(h);
