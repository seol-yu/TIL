// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);

a++; // a = a + 1;
console.log(a);

a--; // a = a - 1;
console.log(a);

console.clear();
// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함
a = 0;
let b = a++; // 할당 연산을 하고 a 값을 증가시킴
console.log(b); // b 는 0이 할당됨
console.log(a); // a 는 1이 됨

let c = ++b;
console.log(c);
console.log(c++);
console.log(c);
