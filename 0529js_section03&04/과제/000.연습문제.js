/*
Q.1
두 개의 정수(a, b)를 취하는 함수를 완성하고 입력 매개변수를 포함하여
입력 매개 변수 사의의 모든 정수 배열을 반환하게 하세요. 이때 매개변수 b는 a보다 크다고 가정합니다.

For example:
a = 1
b = 4
--> [1, 2, 3, 4]

a = 5
b = 10
--> [5, 6, 7, 8, 9, 10]
*/

// 풀이 1
// Array.from
// 첫번째 인수 - 유사배열객체＊ 또는 이터러블객체＊를 변환하여 배열 생성
// 두번째 인수(optional) - 콜백함수(첫번째 인수에 의해 생성된 배열의 요소값, 인덱스를 순차적으로 전달하면서 호출)의 반환값으로 구성된 배열 반환
// 예) Array.from({length:3}, (_,i)=>i); // [0,1,2]
const solution = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => i + a);

// 풀이 2
// for문
const solution = (a, b) => {
  let answer = [];
  for (let i = a; i <= b; i++) {
    answer.push(i);
    // console.log(i);
  }
  return answer;
};

console.log(solution(1, 4));
console.log(solution(5, 10));

/* 
Q2. 
전화 번호 형식으로 해당 숫자의 문자열을 반환하는 10 개의 정수 배열 (0과 9 사이)을 허용하는 함수를 작성하십시오.

예:
createPhoneNumber ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
// =>는 "(123) 456-7890"을 반환합니다.

반환되는 형식(포맷)을 위에서 제시한 형태처럼 정확하게 일치시켜주세요. 
*/

// 풀이 1
// 배열의 해당하는 인덱스에 각각 "(", ")", " ", "-"를
// splice로 밀어 넣은 뒤
// join
const format = { 0: "(", 4: ")", 5: " ", 9: "-" };
const createPhoneNumber = (arr) => {
  for (let k in format) {
    arr.splice(k, 0, format[k]);
  }
  return arr.join("");
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/* 
Q3
전달하는 문자열의 역순을 취하는 함수 reverseMessage를 구현해주세요.

"Good Bye" -> "eyB dooG"
"Hello" -> "olleH" 
*/

// 풀이 1
const reverseMessage = (str) => [...str].reverse().join("");

console.log(reverseMessage("Good Bye"));
console.log(reverseMessage("Hello"));

/* 
Q4
함수에 배열로 숫자를 전달해서 가장 작은 2개의 숫자의 합을 반환하는 함수를 만들어보세요

  const sum = sumTwoSmallestNumbers([10, 50, 20, 30, 40]); // 30 (가장 작은 수 10 + 20)
  const sum2 =sumTwoSmallestNumbers([10, 50, 0, 30, 40]); // 10 (가장 작은 수 10 + 0)  
*/

// 풀이 1
// 오름차순으로 정렬 후
// 0, 1 인덱스 값의 합 반환
const sumTwoSmallestNumbers = (arr) => {
  arr.sort((a, b) => a - b);
  return arr[0] + arr[1];
};

console.log(sumTwoSmallestNumbers([10, 50, 20, 30, 40]));

/* 
Q5
어떤 숫자 n을 전달받아 n이 양의 정수 x의 제곱근인지 판별하고 제곱근이라면  
양의 정수 x + 1 의 제곱근을 반환하는 함수를 만들려고합니다. 
만약 전달된 임의의 수 n이 어떠한 수의 제곱근이 아니라면 -1을 반환하게 하세요.
이때 임의의 정수는 1 이상 50000000 이하라고 가정합니다. 

> n 121 -> return 144 
> n 9 -> return 16
> n 10 -> return -1

만약 121을 전달하면 121은 11의 제곱근이므로(11 * 11 = 121) 양의 정수 x는 11이고, (11 + 1)의 제곱이므로 144를 반환합니다.(12 * 12 = 144)
만약 함수에 9를 전달하면 9는 3의 제곱근이므로(3 * 3 = 9) 양의 정수 x는 3입니다. 따라서 3 + 1의 제곱근을 반환하면 되므로 16(4 * 4)을 반환하면 됩니다.
만약 함수에 10을 전달하면 10은 그 어떠한 수의 제곱근도 아니므로 -1을 반환합니다.

const result = isPow(121); // 144
const result2 = isPow(10); // -1
const result3 = isPow(9); // 16
*/

// 풀이 1
const isPow = (n) => (Number.isInteger(n ** 0.5) ? (n ** 0.5 + 1) ** 2 : -1);

console.log(isPow(121));
console.log(isPow(10));
console.log(isPow(9));
