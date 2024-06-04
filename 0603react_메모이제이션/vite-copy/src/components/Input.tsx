import { useState } from "react";

const Input = () => {
  console.log("input rendered");
  const [inputValue, setInputValue] = useState("");
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default Input;
