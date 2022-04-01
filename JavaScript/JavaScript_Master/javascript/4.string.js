// 문자열 타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는 법
string = '"안녕!"';
console.log(string);

// 이스케이프 표현
string = '안녕!\n하세요!\t\t내 이름은\\\u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal) ``
let id = '설유';
let greetings = "'안녕!, " + id + "하이\n즐거운 하루 보내요'";
console.log(greetings);

greetings = `'안녕, ${id}Hi
즐거운 하루 보내요'`;
console.log(greetings);
