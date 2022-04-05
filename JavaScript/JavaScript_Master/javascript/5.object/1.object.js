// Object literal { key: value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let tree = {
  name: 'tree',
  'hello-bye': '🌴',
  0: 1,
  ['hello-bye']: '🌴',
};

// 속성, 데이터에 접근하기 위해서는
console.log(tree.name); // 마침표 표기법 dot notation
console.log(tree['hello-bye']); // 대괄호 표기법 bracket notation
console.log(tree['name']);

// 속성 추가
tree.emoji = '🎄'; // 동적으로 추가
console.log(tree);
console.log(tree.emoji);
console.log(tree['emoji']);

// 속성 삭제
delete tree.emoji;
console.log(tree);
