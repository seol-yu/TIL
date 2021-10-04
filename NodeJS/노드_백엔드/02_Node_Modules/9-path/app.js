const path = require('path');

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

// 운영체제별로 경로 표기법이 달라도 잘 동작할 수 있게

console.log(path.sep);  // 경로 구분자
console.log(path.delimiter);  // 환경변수 구분자

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root
parsed.name

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('../'));

// normalize
console.log(path.normalize('./folder///////sub'));

// join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));