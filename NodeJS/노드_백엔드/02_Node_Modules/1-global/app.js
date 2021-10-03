const fs = require('fs');  // VSCode가 노드모듈이구나 알게해주기

console.log(global);

global.hello = () => {
    global.console.log('hello');
}

global.hello();
hello();  // global 생략 가능