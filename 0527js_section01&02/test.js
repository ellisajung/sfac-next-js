// // 조건문

// const fruit = "apple";

// if (fruit === "apple") {
//   console.log("fff");
// } else if (fruit === "apple") {
//   console.log("fff");
// } else if (fruit === "apple") {
//   console.log("fff");
// }
// // fff

// if (fruit === "apple") {
//   console.log("fff");
// }
// if (fruit === "apple") {
//   console.log("fff");
// }
// if (fruit === "apple") {
//   console.log("fff");
// }
// // fff
// // fff
// // fff

// // const area = "";

// // switch (area) {
// //   case "서울": // 값이 10일 때
// //     alert("서울입니다");
// //     break;
// //   case "경기": // 값이 9일 때
// //     alert("경기입니다");
// //     break;
// //   case "제주": // 값이 8일 때
// //     alert("제주입니다");
// //     break;
// //   default: // 위의 경우에 해당하지 않을 때
// //     alert("서울, 경기, 제주 중에 선택해주세요");
// // }

// // if (area === "서울") {
// //   alert("서울입니다");
// // } else if (area === "경기") {
// //   alert("경기입니다");
// // } else if (area === "제주") {
// //   alert("제주입니다");
// // } else {
// //   alert("서울, 경기, 제주 중에 선택해주세요");
// // }

// // const area = "";
// // let cost = 0;

// // switch (area) {
// //   case "서울": // 값이 10일 때
// //     cost = 3000;
// //   // break;
// //   case "경기": // 값이 9일 때
// //     cost = 3000;
// //     break;
// //   case "제주": // 값이 8일 때
// //     cost = 10000;
// //     break;
// //   default: // 위의 경우에 해당하지 않을 때
// //     cost = 5000;
// // }
// // console.log(`배송비는 ${cost} 입니다`);

// // if (area === "서울" || area === "경기") {
// //   cost = 3000;
// // } else if (area === "제주") {
// //   cost = 10000;
// // } else {
// //   cost = 5000;
// // }

// // let score = 0;
// // if (score >= 90) console.log("A");
// // else if (score >= 80) console.log("B");
// // else if (score >= 70) console.log("C");
// // else if (score >= 60) console.log("D");
// // else if (score < 60) console.log("F");

// // const isSunny = true;
// // const isWarm = true;
// // const isDry = true;

// // const weather = `오늘은 날씨가 ${isSunny ? "화창하며" : "화창하지 않으며"} ${
// //   isWarm ? "따뜻하며" : "따뜻하지 않으며"
// // } ${isDry ? "건조하며" : "건조하지 않으며"}`;

// // 반복문

// const fruits = ["apple", "banana", "orange"];
// let i = 0;

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

// do {
//   console.log(fruits[i]);
//   i++;
// } while (i < fruits.length);

// // 연습문제 1
// for (let num = 1; num < 10; num++) {
//   console.log(num);
// }

// // 연습문제 2
// let numArr = [10, -10, 20, -30, 40];
// let sum = 0;
// for (num of numArr) {
//   if (num > 0) sum += num;
// }
// console.log(sum);

// // 연습문제 3
// for (let num = 0; num < 16; num++) {
//   console.log(num, num % 2 === 0 ? "짝수" : "홀수");
// }

// 연습문제 4

// 풀이 1
let count = 0;
for (let num = 100; num < 1000; num++) {
  const arr = (num + "").split("");
  let sum = 0;
  for (n of arr) sum += n ** 3;
  if (sum === num) {
    console.log(num);
    count++;
  }
}
console.log(count);

// 풀이 2
for (let i = 1; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      //   console.log(i, j, k);
      const sum = i ** 3 + j ** 3 + k ** 3;
      const origin = i * 100 + j * 10 + k;
      if (sum === origin) {
        console.log(origin);
      }
    }
  }
}
