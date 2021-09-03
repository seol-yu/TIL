### 목차

[변수 let const 최종 정리](#let_const)

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

