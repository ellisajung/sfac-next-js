const showEl = document.querySelector("#show");
const myNameEl = document.querySelector("#myname");

console.log(showEl);

// // 방법 1
// const handleClick = (e1, e2) => {
//   e1.style.display = "none";
//   e2.style.display = "block";
// };

// showEl.addEventListener("click", () => handleClick(showEl, myNameEl));
// myNameEl.addEventListener("click", () => handleClick(myNameEl, showEl));

// 방법 2
// 클래스명 추가/삭제
const toggleClick = (e) => {
  e.classList.toggle("hidden");
};

showEl.addEventListener("click", () => toggleClick(showEl));
myNameEl.addEventListener("click", () => toggleClick(myNameEl));
