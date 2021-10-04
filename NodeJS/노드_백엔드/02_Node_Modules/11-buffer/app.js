// Fixed-size chuck of memory
// array of integers, byte of data

const fs = require('fs');
const buf = Buffer.from('Hi');
console.log(buf);  // <Buffer 48 69> <- H는 48, i는 69 유니코드 형태
console.log(buf.length);  // 2
console.log(buf[0]);  // 72  <- 배열에 있는 것을 접근하면 아스키코드 형태로 출력
console.log(buf[1]);  // 105
console.log(buf.toString());  // 기본은 'utf-8'

// create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2);  // fast <- 초기화 안함 데이터 들어있을 수 있음
console.log(buf2);  // <Buffer 00 00>
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2);  // <Buffer 48 69>
console.log(buf2.toString());  // Hi
console.log(buf3);  // 메모리 많이 사용되고 있으면 다른값 출력
buf2.copy(buf3);
console.log(buf3.toString());  // Hi

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());  // HiHiHi