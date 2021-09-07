// false: 0, -0, '', null, undefined
// true: -1, 'hello', 'false'
let num; // undefined
if (num) {
  console.log("true!");
}

num && console.log(num); // num이 true라면(num에 데이터가 있다면) 출력

let obj = {
    name: 'seolyu',
};
if (obj) {
    console.log(obj.name);
}

// console.log(obj.name);  // 없는 데이터에 접근하면 프로그램 자체가 죽으므로
obj && console.log(obj.name);