/*

[랜덤 색상 제너레이터]

# 학습 목표

- DOM 조작과 이벤트를 이용해서 랜덤 색상 제너레이터를 만들어봅시다.
- 랜덤 색상을 뽑아내는 공식 : '#'+(Math.random()*0xFFFFFF<<0).toString(16);

*/

const btnEl = document.querySelector("#changeBtn");
const handleClick = () => {
  document.body.style.backgroundColor = "#" + Math.floor(Math.random() * Oxffffff).toString(16);
  console.log("#" + Math.floor(Math.random() * Oxffffff).toString(16));
};

btnEl.addEventListener("click", handleClick);
