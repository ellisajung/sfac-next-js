import { ReducerAction } from "../App";

type ExampleTwoProps = {
  count: number;
  dispatch: React.Dispatch<ReducerAction>;
};
const ExampleTwo = (props: ExampleTwoProps) => {
  const { count, dispatch } = props;
  return (
    <>
      <h1>ExampleTwo Component: {count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "+", payload: 1 });
        }}
      >
        증가
      </button>
    </>
  );
};
export default ExampleTwo;
