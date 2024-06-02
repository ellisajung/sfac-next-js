const x = 10;
const y = 20;
const sum = x + y;
console.log(sum);

let name = "Alice";
name = "Bob";
console.log(name);

const PI = 3.14;
console.log(PI);

let a = 5;
let b = 10;

// 1)
a = b;
b = a;
console.log(a, b);

// 2)
a = 10;
b = 5;
console.log(a, b);

// 3)
let c = a;
a = b;
b = c;
console.log(a, b);

const num = 100;
const isEven = num % 2 === 0 ? "짝수" : "홀수";
console.log(isEven);
