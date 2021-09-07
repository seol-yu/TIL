// number, string, boolean, null, undefined
let number = 2;  // 숫자도 되고
let num = '2';  // 문자도 됨
let number2 = number;  // number에 들어있는 데이터를 복사해서 할당

console.log(number);  // 2
console.log(number2);  // 2

number2 = 3;

console.log(number);  // 2
console.log(number2);  // 3

// object
const obj = {
    name: 'seolyu',
    age: 5,
};
console.log(obj.name);  // seolyu

let obj2 = obj;  // obj가 가지고 있는 주소 복사해서 가지고 옴
console.log(obj2.name);  // seolyu. 순수 primitive 타입처럼

obj.name = 'yeasul';
console.log('------');
console.log(obj.name);  // yeasul
console.log(obj2.name);  // yeasul
// obj나 obj2나 가리키고 있는 object가 동일하므로 둘 다 변경된 것 확인

let a = 2;
a = 5;

const num2 = 2;
num2 = 4;  // const라 변경 안됨.
// object는 const라 했는데 왜 변경이 된거였지?
// const라서 reference는 다른 object로 변경 불가능하지만
// reference가 가리키는 object 안 내용은 변경 가능