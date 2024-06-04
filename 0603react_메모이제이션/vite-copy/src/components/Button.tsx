const Button = ({ onClickHandler }: { onClickHandler: () => void }) => {
  console.log("button rendered");
  return <button onClick={onClickHandler}>click</button>;
};

export default Button;
