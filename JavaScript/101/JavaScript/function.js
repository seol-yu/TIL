const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;

function add(num1, num2) {
  return num1 + num2;
}

function print() {
  console.log("print");
}

function print1(a, b) {
  console.log(`${a} ${b}`);
}

print(); // 어떤 인자, 몇개를 전달하든, 아무런 인자를 받지 않는 함수는 input을 받지 않는다

const sum = add(3, 4); // 7이 sum이라는 변수에 할당
console.log(sum);

const doSomething = add; // reference 복사되어서 doSomething 변수에 들어옴. 즉 doSomething이나 add나 똑같은 함수 가리킴

const result3 = doSomething(2, 3);
console.log(result3);

const result4 = add(2, 3);
console.log(result4);

function divide(num1, num2) {
  return num1 / num2;
}

function surprise(operator) {
  const result = operator(2, 3);
  console.log(result);
}

// surprise();  // operator is not a function 에러 뜸. 아무런 값을 전달하지 않아서 operator는 undefined으로 되어 있음
surprise(add); // add가 가리키는 함수 주소값 reference가 복사되어져 operator로 전달. operator()는 add()를 수행하는 것과 동일
surprise(divide);
