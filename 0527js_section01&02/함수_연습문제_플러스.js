// 연습문제 +

// 내 풀이
// 순회하며 이전 문자와 같은지 확인
// 같으면 count++
// 다르면 count 초기화
const i = "aaabbbccc";
const o = "a3b3c3";

const i2 = "aabbaa";
const o2 = "a2b2a2";

const i3 = "abbbffd";
const o3 = "a1b3f2d1";

const solution = (input) => {
  let output = input[0];
  let count = 1;
  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] === input[i]) count++;
    else {
      output += count + input[i];
      count = 1;
    }
    console.log(output, count);
  }
  output += count;
  return output;
};

console.log(solution(i));
console.log(solution(i2));
console.log(solution(i3));

// 강사님 풀이
// **문자열 압축 알고리즘**
// 1.문자열 반복해서 접근
// 2.현재 문자열과 다음 문자열을 비교한다
// 3.같으면 count 증가
// 4.다르면 count 문자열에 추가, count 1로 초기화
// 5.마지막은 그냥 count 추가
const solution = (input) => {
  let output = "";
  let count = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) count++;
    else {
      output += input[i] + count;
      count = 1;
    }
    console.log(output, count);
  }
  return output;
};
