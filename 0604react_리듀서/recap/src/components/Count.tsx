type TCountProps = { count: string | number; handleOnClick: () => void };

const Count = (props: TCountProps) => {
  const { count, handleOnClick } = props;
  // console.log(props);
  // console.log(typeof count);
  return (
    <>
      <div>Count component: {count}</div>
      <button>click</button>
    </>
  );
};

export default Count;
