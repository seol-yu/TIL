function add(num1, num2) {
  return num1 + num2;
}
const result = add(1, 2);
console.log(result);

// let lastName = '이';
// let firstName = '설유';
// let fullName = `${lastName} ${firstName}`;
// console.log(fullName);

function fullName(firstName, lastName) {
  return `${firstName} ${lastName} 🌸`;
}

let lastName = '이';
let firstName = '설유';
console.log(fullName(firstName, lastName));
