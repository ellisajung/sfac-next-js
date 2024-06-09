import { Action, Todo } from "../reducer/todoReducer";
import TodoListItem from "./TodoListItem";
type TodoListProps = {
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
};
const TodoList = (props: TodoListProps) => {
  const { todos, dispatch } = props;
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        {todos &&
          todos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
      </ul>
    </>
  );
};
export default TodoList;
