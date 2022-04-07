console.log(globalThis);
console.log(this); // 현재 모듈에 있는 정보 출력
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)');
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseInt('11'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다
const URL = 'https://github.com/설유';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URI이 아니라 부분적인 것은 Component 이용
const part = '설유.com';
console.log(encodeURIComponent(part));
