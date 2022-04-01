// let 재할당 가능
let a = 1;
a = 2;

// const 재할당 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {}; 이런거 불가능
console.log(apple);
apple.name = 'orange';
apple.display = '🍏';
console.log(apple);
// const 면 apple 이 가리키는 메모리 셀에 재할당이 불가능
// but,
// apple 이 가리키는 메모리 주소를 따라가서 그 안 오브젝트 안 데이터 바꿈
