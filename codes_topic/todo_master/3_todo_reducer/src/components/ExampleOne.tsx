import { ReducerAction } from "../App";

type ExampleOneProps = {
  count: number;
  dispatch: React.Dispatch<ReducerAction>;
};
const ExampleOne = (props: ExampleOneProps) => {
  const { count, dispatch } = props;
  return (
    <>
      <h1>ExampleOne Component: {count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "-", payload: 1 });
        }}
      >
        감소
      </button>
    </>
  );
};
export default ExampleOne;
