const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
    console.log('setTimeout');
}, 0);

// nextTick은 태스크큐에 이미 다른 콜백 함수가 있어도 우선순위 높게
process.nextTick(() => {
    console.log('nextTick');
});

for (let i = 0; i < 100; i++) {
    console.log('for loop');
}