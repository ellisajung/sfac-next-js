import Button from "./Button";
import Input from "./Input";
import Title from "./Title";
import Todo from "./Todo";

const Todolist = () => {
  const todo = "your task here";
  return (
    <div className="w-375 h-434.03 bg-white px-25 py-40 rounded-lg">
      <Title
        title="Todo List App"
        subtitle="Please enter your details to continue"
      />
      <Input type="text" placeholder="Enter Todo list" />
      <Button text="Add" />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
    </div>
  );
};

export default Todolist;
