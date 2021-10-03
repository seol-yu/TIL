function hello() {
    console.log(this);
    console.log(this === global);  // true
}

hello();

class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('----- class -----');
        console.log(this);
        console.log(this === global);
    }
}

const a = new A(1);
a.memberFunction(); 
// A { num: 1 }
// false
// class 안에 있는 함수의 this는 클래스 자체를 가리키고 있고 global이 아니다

console.log('--- global scope ---');
console.log(this);  // {}
console.log(this === module.exports);  // true