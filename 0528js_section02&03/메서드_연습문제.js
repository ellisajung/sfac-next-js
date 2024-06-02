/*
Notes

문제 1)
1. 숫자를 문자열로 변환하는 방법
  - Number.prototype.toString()
  - String()
  - + ""

2. 문자열을 숫자로 변환하는 방법
  - Number.parseInt(string [, radix]) 또는 parseInt([string [, radix]])
  - Number()

문제 2)
1. sort()의 비교합수

*/

/*
문제 1
매개변수로 숫자를 전달하면 그 숫자의 역순을 되돌려주는
함수를 만들어주세요.

ex) 32125 -> 52123
    15231 -> 13251
*/

// 내풀이 1
// 문자열로 변환
// 배열로 변환
// 배열 reverse
// join 후 숫자로 변환
const solution = (num) => Number([...(num + "")].reverse().join(""));
// 메서드 체이닝 때문에 가능

console.log(solution(32125));

// 강사님 풀이
function reverse_to_number(number) {
  // parseInt(number.toString().split("").reverse().join(""))
  // 숫자를 문자열로 변환
  const strNum = number.toString();
  // 문자열을 배열로 변환
  const arr = strNum.split("");
  // 배열을 뒤집기
  const reverseArr = arr.reverse();
  // 배열을 문자열로 변환
  const reverseStr = reverseArr.join("");
  // 문자열을 숫자로 변환
  const stringToNumber = parseInt(reverseStr);
  // 숫자를 반환
  return stringToNumber;
}

/* 문제 2 */

// 내풀이 1
// 문자열 공백으로 split
// 배열 순회하며 length 가장 긴 요소로 초기화
const solution = (str) => {
  const arr = str.split(" ");
  let maxStr = arr[0];
  for (let s of arr) {
    if (s.length > maxStr.length) maxStr = s;
    // console.log(maxStr);
  }
  return maxStr;
};

console.log(solution("we are the champion"));

// 강사님 풀이 1
const solution = (str) => {
  str.split(" ").sort((a, b) => b.length - a.length);
  return str[0];
};
// 강사님 풀이 2
const solution = (str) => str.split(" ").sort((a, b) => b.length - a.length)[0];
// 강사님 풀이 3
const solution = (str) =>
  str
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .shift();
