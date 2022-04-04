// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함 ✨
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리 주소) <- 이런 경우 문제 발생
function display(num) {
  num = 5; // 함수 지역변수.. 💩
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = 'Yeasul'; // 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 💩
  console.log(obj);
}
const seolyu = { name: 'Seolyu' };
console.log(seolyu);
displayObj(seolyu);
console.log(seolyu);

function changeName(obj) {
  // 함수 이름부터 변경하는 느낌
  return { ...obj, name: 'Bob' }; // 반환할 때는 새로운 오브젝트 만들기
}
