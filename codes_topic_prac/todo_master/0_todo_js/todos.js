/*
어떻게 시작해야할까?

1. HTML 구조 구상
    - 기능을 구현하며 구상할 수도 있지만, 만들 기능에 대한 개략적인 HTML은 머릿속에 있어야 함
    - 따라서 기본적인 HTML 요소들의 쓰임에 맞는 계층 구조는 익혀둬야
    - 예를 들어,
        - <form><input/><button></button></form>
        - <ul><li><span></span><button></button></li></ul>
2. 유저 시나리오 기반 순서대로 기능 구현
3. 디테일 잡아나가기

리액트는 참고
https://legacy.reactjs.org/docs/thinking-in-react.html
*/

const ElTodoForm = document.querySelector("#todo-form");
const ElTodoInput = ElTodoForm.querySelector("input");

const ElTodoList = document.querySelector("#todo-list");

console.log(ElTodoForm);
console.log(ElTodoInput);
console.log(ElTodoList);

// 유저 시나리오 기반 순서대로 기능 구현
// 디테일은 나중에 잡아나가기

// 기능 1 - todo 생성하기
// todo 입력 후 제출 핸들
function handleTodoAdd(e) {
  e.preventDefault();
  console.log(ElTodoInput.value);
  const newTodo = ElTodoInput.value; // 해당 값을 할당
  ElTodoInput.value = ""; // 따라서 newTodo가 초기화되는 것은 아님
  console.log(newTodo, ElTodoInput.value);
  // 제출한 todo 리스트에 추가
  paintTodo(newTodo);
}
// 렌더링할 요소 생성 후
function paintTodo(newTodo) {
  const ElLi = document.createElement("li");
  const ElSpan = document.createElement("span");
  ElSpan.innerText = newTodo;
  const ElButton = document.createElement("button"); // 삭제 버튼 추가
  ElButton.innerText = "❌"; // 삭제 버튼 추가

  ElLi.appendChild(ElSpan);
  ElLi.appendChild(ElButton); // 삭제 버튼 추가
  console.log(ElLi);
  // html에 추가
  ElTodoList.appendChild(ElLi); // 맨 마지막에 순서대로 추가
}

ElTodoForm.addEventListener("submit", handleTodoAdd);

// 기능 2 - todo 삭제하기
// 삭제 버튼 todo 생성 함수에 추가
// 삭제 버튼 클릭 핸들

// 디테일 - todo 리스트 저장하기
// 새로고침하면 사라지는 문제 해결
