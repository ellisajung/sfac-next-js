import { useState } from "react";
import Count from "./components/Count";

const App = () => {
  const [count, setCount] = useState(0);
  const handleOnClick = () => {
    setCount(count + 1);
  };
  return <Count count={count} handleOnClick={handleOnClick} />;
};

export default App;
