import { useReducer } from "react";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";

export type ReducerAction = {
  type: string;
  payload: number;
};

const reducer = (state: number, action: ReducerAction) => {
  switch (action.type) {
    case "+":
      return state + action.payload;
    case "-":
      return state - action.payload;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <ExampleOne count={count} dispatch={dispatch} />
      <ExampleTwo count={count} dispatch={dispatch} />
    </>
  );
};
export default App;
