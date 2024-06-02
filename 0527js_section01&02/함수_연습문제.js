// Q1
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.

function sum(...args) {
  let result = 0;
  for (let arg of args) result += arg;
  return result;
}

console.log(sum(10, 20, 30));

// Q2
//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.
//구현 방법은 자율입니다.

// 내풀이
function add(...args) {
  let result = 0;
  for (let arg of args) result += arg;
  return result;
}
function sub(...args) {
  let result = 0;
  for (let arg of args) result -= arg;
  return result;
}
function mul(...args) {
  let result = 1;
  for (let arg of args) result *= arg;
  return result;
}
function div(...args) {
  if (args.length === 0) return NaN;
  let result = args[0];
  for (let i = 1; i < args.length; i++) {
    if (!!args[i]) result /= args[i];
  }
  return result;
}

console.log(add(10, 20, 30));
console.log(sub(10, 20, 30));
console.log(mul(10, 20, 30));
console.log(div(100, 20));

// 강사님 풀이
function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "연산자를 잘못 입력하셨습니다.";
  }
}

// Q3
const grades = {
  "A+": 4.5,
  A: 4,
  "B+": 3.5,
  B: 3,
  "C+": 2.5,
  C: 2,
  F: 1,
};

const studentA = {
  math: "A+",
  korean: "B",
  english: "C+",
  science: "F",
};

// 학생 객체 점수를 순회
// 각 값 grades에서 찾아서 점수로 변환
const avr = (student) => {
  let sum = 0;
  let count = 0;
  for (let sub in student) {
    let grade = student[sub];
    sum += grades[grade];
    count++;
    // console.log(grade, grades[grade], count);
  }
  return sum / count;
};

console.log(avr(studentA));
