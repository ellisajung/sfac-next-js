import { TTodo } from "./Todo";
import TodoListItem from "./TodoListItem";
const TodoList = ({ todos }: { todos: TTodo[] }) => {
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        {todos &&
          todos.map((todo) => {
            return <TodoListItem key={todo.id} todo={todo} />;
          })}
      </ul>
    </>
  );
};
export default TodoList;
