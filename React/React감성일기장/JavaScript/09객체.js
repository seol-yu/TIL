// 자바스크립트의 자료형
// Primitive Type(원시 타입) - 한번에 하나의 값만 가질 수 있음. 하나의 고정된 저장 공간 이용.
// let number = 12;

// Non-Primitive Type(비 원시 타입) - 한번에 여러 개의 값을 가질 수 있음. 여러개의 고정되지 않은 동적 공간 사용
// let array = [1, 2, 3, 4];

let person = new Object(); // 생성자 방식
let animal = {
  // let 아닌 const 여도 객체 프로퍼티 수정, 추가할 때 에러가 안남
  // animal = {
  //    age: 20,
  // };
  // 이렇게 하지 않는 이상
  name: "설유",
  age: 1, // 함수 아닌 프로퍼티는 '멤버'라고 부름
  key: "value", // 객체 프로퍼티
  key1: 120,
  key2: true,
  key3: undefined,
  key4: [1, 2],
  say: function () {
    console.log(`안녕 나는 ${this.name}`);
  }, // 메서드 -> 방법
  say2: function () {
    console.log(`안녕 나는 ${this["name"]}`);
  },
  say3: function () {
    console.log(`안녕 나는 ${animal["name"]}`);
  },
}; // 객체 리터럴 방식 - 중괄호

console.log(animal);
console.log(animal.key1); // 점 표기법
console.log(animal.key6); // 없는 키 접근하면 undefined
console.log(animal["key1"]); // 괄호 표기법. 키를 문자열 형태로 넣어줘야함
const name = "name";
console.log(animal[name]);

console.log(getPropertyValue("age"));

function getPropertyValue(key) {
  return animal[key];
}

animal.location = "한국";
animal["gender"] = "여성";
animal.name = "Seolyu";
animal["age"] = 100;
console.log(animal);

delete animal.age;
delete animal["key1"];
console.log(animal);
// delete 쓰면 실제 메모리에선 지워지지 않음

animal.key2 = null; // 메모리에서 날리기
console.log(animal);

animal.say();
animal["say"]();
animal.say2();
animal.say3();

console.log(`name : ${"name" in animal}`); // true. 객체 안에 해당 프로퍼티 있는지 확인
console.log(`school : ${"school" in animal}`); // false
