console.log('logging...');
console.clear();  // 이전 로그 다 지워짐

// log level - 로그 심각성 따라 레벨별로 콘솔 로그 활용 배포했을 때 서버의 심각성 알기 쉽고 수정
console.log('log');  // 개발
console.info('info');  // 정보
console.warn('warn');  // 경보
console.error('error');  // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, 'not same!');  // 참이 아닌 경우에만 출력
console.assert(2 === 2, 'same!');

// print object
const student = { name: 'seolyu', age: 20, company: { name: 'HI '} };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop');

// counting
function a() {
    console.count('a function');
}
a();
console.countReset('a function');
a();

// trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace();
}
f1();