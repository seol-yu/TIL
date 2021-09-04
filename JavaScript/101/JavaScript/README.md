### 목차

[변수 let const 최종 정리](#let_const)

[함수 최종 정리 - 함수 포인터](#함수_포인터)

[헷갈리는 boolean과 오퍼레이터&&](#boolean_오퍼레이터&&)

<br />

---

<br />

### let_const

```javascript
// number, string, boolean, null, undefined
let number = 2;  // 숫자도 되고
let num = '2';  // 문자도 됨
```

변서 선언하면 메모리에 변수를 위한 공간이 생긴다

공간에 데이터가 적재된다

<br />

데이터 타입에는 이런 애들(number, string, boolean, null, undefined) 제외한 것들 다 object(최소 한 두 가지의 다양한 데이터를 한군데 묶어 놓은 아이. 배열, 리스트, 함수)

object에 있는 key도 각각 key마다 메모리가 할당이 된다

object는 변수 한 공간 안에 들어가기에 너무 커서, 각각 key마다 공간 할당 따로 되어져 있고 

모두 묶어서 가리키는 주소가 있는데 그 주소가 변수에 할당됨

```javascript
// object
const obj = {
    name: 'seolyu',
    age: 5,
};
console.log(obj.name);  // seolyu

let obj2 = obj;  // obj가 가지고 있는 주소 복사해서 가지고 옴
console.log(obj2.name);  // 주소 이용. 순수 primitive 타입처럼

obj.name = 'yeasul';
console.log('------');
console.log(obj.name);  // yeasul
console.log(obj2.name);  // yeasul
// obj나 obj2나 가리키고 있는 object가 동일하므로 둘 다 변경된 것 확인
```

<br/>

결론

변수 선언하면 데이터를 담을 수 있는 공간이 할당되고

숫자, string, boolean, null, undefined과 같은 경우는 데이터가 작은 단위라 메모리에 그대로 들어오지만

object는 따로 할당이 어딘가 되어있고 이걸 가리키는 주소(reference)가 들어감

<br />

const라서 reference는 다른 object로 변경 불가능하지만

reference가 가리키는 object 안 내용은 변경 가능

<br />

[목차로](#목차)

<br />

---

<br />

### 함수_포인터

<br />

함수 이름은 짧지만 간결하고 의미 있는 이름

인자는 외부에서 받아오는 값. 함수 내에서 접근(함수 만드는 시점에는 데이터 들어있지 않음)

```javascript
function add (a, b) {
    return a + b;
}
```

```javascript
function add (num1, num2) {
    return num1 + num2;
}
```

<br />

함수도 object 중 하나

add에 함수가 정의된 곳 가리키는 reference 들어있다

```javascript
const doSomething = add; // reference 복사되어서 doSomething 변수에 들어옴. 즉 doSomething이나 add나 똑같은 함수 가리킴

const result3 = doSomething(2, 3);
console.log(result3);

const result4 = add(2, 3);
console.log(result4);
```

<br />

```javascript
function print() {
    console.log('print');
}

print();  // 어떤 인자, 몇개를 전달하든, 아무런 인자를 받지 않는 함수는 input을 받지 않는다
```

<br />

인자는 함수를 호출하는 사람으로부터 필요한 데이터를 받아오기 위해, 

필요한 데이터를 받아올 때 함수 내부에서 좀 더 이해하기 쉬운 의미있는 이름을 부여해 놓는 것

<br />

```javascript
function surprise(operator) {
  const result = operator(2, 3);
  console.log(result);
}

surprise();  // operator is not a function 에러 뜸. 아무런 값을 전달하지 않아서 operator는 undefined으로 되어 있음
```

```javascript
surprise(add);  // add가 가리키는 함수 주소값 reference가 복사되어져 operator로 전달. operator()는 add()를 수행하는 것과 동일
```

<br />

함수를 전달하는 것은 함수를 가리키고 있는 reference가 복사되어서 전달되는 것이다

<br />

[목차로](#목차)

<br />

---

<br />

### boolean_오퍼레이터&&

<br />

```javascript
// false: 0, -0, '', null, undefined
// true: -1, 'hello'
if (null) {
    console.log('true!');
} else {
    console.log('false!');
}
```

데이터가 없고 비어있는 것들은 false(0, -0, null, false, NaN, undefined, '')

빈 배열([]), "false" 는 true

빈 array는 object 자체이므로

<br />

```javascript
// false: 0, -0, '', null, undefined
// true: -1, 'hello', 'false'
let num;  // undefined
if (num) {
    console.log('true!');
}

num && console.log(num);  // num이 true라면(num에 데이터가 있다면) 출력
```

```javascript
let obj = {
    name: 'seolyu',
};
if (obj) {
    console.log(obj.name);
}

// console.log(obj.name);  // 없는 데이터에 접근하면 프로그램 자체가 죽으므로
obj && console.log(obj.name);
```

<br />

[목차로](#목차)

<br />

---

<br />
