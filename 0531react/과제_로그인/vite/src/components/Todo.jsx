const Todo = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" />
      <div>{todo}</div>
      <div>❎</div>
    </div>
  );
};

export default Todo;
