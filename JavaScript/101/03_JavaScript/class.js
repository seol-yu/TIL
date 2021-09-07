class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}

function printSomething(num) {
  console.log(`5️⃣ ${num}`);
}
function alertNum(num) {
  alert(`❗ ${num}`);
}

// 생성자에 원하는 콜백함수 전달
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
