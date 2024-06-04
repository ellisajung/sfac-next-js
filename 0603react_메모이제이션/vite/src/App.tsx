import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";

const App = () => {
  console.log("app rendered");
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const onClickHandler = () => {
    // 2씩 증가시키기
    // 방법 1
    // 변경하고 싶은 값을 set함수에 바로 넣는 방법
    // 이전 값을 참조하지 않아도 되는 경우 사용
    setCount(count + 1);
    // setCount(count + 1);
    // // 방법 2 - 콜백함수
    // // 이전 state 값을 참고하여 값을 넣는 방법
    // // 이전 값을 참조해야 하는 경우 사용
    // setCount((prevCount) => {
    //   console.log(prevCount);
    //   return prevCount + 1;
    // });
  };

  return (
    <>
      <Display count={count} />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClickHandler={onClickHandler} />
    </>
  );
};

export default App;
