/*
  색상 컬러 클릭시 body 태그의 배경 색상을 
  선택한 컬러로 변경해주세요.
*/

// const inputEls = document.querySelectorAll("input");

// inputEls.forEach((e) => {
//   // document.body.style.backgroundColor.e.value;
// });

// 디버깅
// const inputEl1 = document.querySelector("#hat-color-red");

// inputEl1.addEventListener("click", function () {
//   console.log("click");
//   document.body.style.backgroundColor = this.value;
// });

const inputEls = document.querySelectorAll("input");
console.log(inputEls);
inputEls.forEach((e) =>
  e.addEventListener("click", () => {
    document.body.style.backgroundColor = e.value;
  })
);
