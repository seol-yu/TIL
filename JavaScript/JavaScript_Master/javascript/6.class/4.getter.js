// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = `${this.lastName} ${this.firstName}`; // 생성자 호출 후 업데이트 안됨
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('예슬', '이');
student.firstName = '설유';
console.log(student.firstName);
// console.log(student.fullName); // 생성자 호출 후 업데이트 안됨
// console.log(student.fullName());
// 접근자 프로퍼티 <- 일반 속성 접근하듯이 하기 위해
// 함수 앞에 get 붙이고
console.log(student.fullName); // . 하면 get이 호출되고
student.fullName = '김철수'; // 할당하면 set이 호출
