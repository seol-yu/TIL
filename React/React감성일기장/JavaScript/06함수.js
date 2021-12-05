// let width1 = 10;
// let height1 = 20;
// let area1 = width1 * height1;
// console.log(area1);

// let width2 = 30;
// let height2 = 10;
// let area2 = width2 * height2;
// console.log(area2);

function getArea() {
  let width = 10;
  let height = 20;

  let area = width * height;
  console.log(area);
} // 함수 선언식, 함수 선언 방식의 함수 생성

getArea(); // 함수 호출
console.log("함수 실행 완료");

function getArea2(width, height) {
  let area = width * height;
  return area;
}

let area1 = getArea2(10, 30);
let area2 = getArea2(130, 30);

console.log("area1 :", area1);
console.log("area2 :", area2);

// 전역/글로벌 변수 - 함수 외부(함수 내에서 접근 가능)
// 지역 변수 - 함수 내부(함수 외부에서 접근 불가능)
