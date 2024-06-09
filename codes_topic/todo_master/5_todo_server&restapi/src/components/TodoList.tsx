import { TTodo } from "./Todo";
import TodoListItem from "./TodoListItem";
const TodoList = ({
  todos,
  toggleTodos,
  deleteTodo,
}: {
  todos: TTodo[];
  toggleTodos: (id: string) => void;
  deleteTodo: (id: string) => void;
}) => {
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        {todos &&
          todos.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                toggleTodos={toggleTodos}
                deleteTodo={deleteTodo}
              />
            );
          })}
      </ul>
    </>
  );
};
export default TodoList;
