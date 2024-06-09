import Todo from "./components/Todo";
import { TodoProvider } from "./context/todoContext";

const App = () => {
  return (
    <>
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </>
  );
};
export default App;
