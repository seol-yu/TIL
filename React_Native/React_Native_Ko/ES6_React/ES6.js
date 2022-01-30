let hello = "world";
// let hello = "korea";

if (true) {
  let hello = "korea"; // let 은 변수를 선언한 블록에서 유효
  console.log(hello);
}

// test();

console.log(hello);

// object
const drinks = {};
drinks.caffe = "latte";
drinks.lemon = "ade";

console.log(drinks);

// array
const arr = [1, 2, 3, 4, 5];
arr[0] = 100;
arr[4] = 500;
console.log(arr);

// String Literal
// 예전엔
const val01 = "Hello";
const val02 = "World";
const val03 = val01 + " " + val02 + "!!!!";
console.log(val03);

// `${variable}`
const litVal = `${val01} ${val02}!!!!`;
console.log(litVal);

// for ... of ..
let array = [10, 20, 30, 40];

for (let val in array) {
  console.log(val); // 키값이 출력됨
  console.log(array[val]);
}

for (let val of array) {
  console.log(val); // 10 20 30 40
}

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (let val in obj) {
  console.log(val); // for of 인 경우엔 에러남
}

// Rest Operator
// function f (a, b, ...c) {
//     //
// }

function printNums(num1, ...num2) {
  console.log(num1, num2); // 1 [ 2, 3, 4, 5 ]
  console.log(arguments);
}

printNums(1, 2, 3, 4, 5);

// Spread Operator

function sum(x, y, z) {
  return x + y + z;
}

console.log(sum(1, 2, 3));

let arr2 = [10, 20, 30];
console.log(sum(...arr2));
// console.log(sum.apply(null, arr2));

function sum2(a, b, c, d, e) {
  return a + b + c + d + e;
}

let arr3 = [20, 30];
console.log(sum2(10, ...arr3, 40, 50));

let face = ["eyes", "nose", "mouth"];
let head = ["hair", ...face, "ear"];

console.log(head);

let arr4 = [1, 2, 3];
let arr4Cpy = [...arr4]; // original array 영향 안받게
let arr5Cpy = arr4;

arr5Cpy.push(4);
console.log(arr4);
console.log(arr4Cpy);
console.log(arr5Cpy);

let drinks2 = {
  caffe: "latte",
  coca: "cola",
};

let newDrinks = {
  lemon: "tea",
  orange: "juice",
  ...drinks2,
};

console.log(newDrinks);

// Arrow Function
let arr5 = [10, 20, 30, 40, 50];
let twice = arr5.map((v) => v * 2);
let twice2 = arr5.map(function (val) {
  return val * 2;
});
console.log(twice);
console.log(twice2);

let twice3 = arr5.map((v) => {
  if (v % 2 === 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
});
console.log(twice3);

// map 이라는 배열 객체 내장함수는 파라미터로 전달되는 함수를 인자로 받는데
// 함수의 두번째 인자가 배열의 인덱스값
let twice4 = arr5.map((v, i) => {
  console.log(`i: ${i}, v: ${v}`);
});
console.log(twice4);

// Class
class Person {
  constructor(region_, gender_) {
    this.region = region_;
    this.gender = gender_;
  }

  greetings(val = "안녕") {
    console.log(val);
  }
}

let korean = new Person("Korea", "female");
console.log(korean);

korean.gender = "male";
console.log(korean);

korean.greetings();

class American extends Person {
  constructor(region_, gender_, language_) {
    super(region_, gender_); // super <- 부모 클래스에 있는 초기화 룰 따름
    this.language = language_;
  }

  greetings(val = "hello") {
    console.log(val);
  }
}

let american = new American("USA", "female", "English");
console.log(american);

american.greetings(); // 함수 오버라이드됨
