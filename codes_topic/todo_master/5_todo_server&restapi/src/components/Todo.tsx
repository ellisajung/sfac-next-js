import { useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import axios from "axios";
export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const getDatas = async () => {
    const res = await axios("http://localhost:4000/todos");
    setTodos(res.data);
  };

  const addTodos = async (text: string) => {
    // text를 활용하여 POST API 호출
    await axios.post("http://localhost:4000/todos", {
      text,
    });
    getDatas();
  };

  const toggleTodos = async (id: string) => {
    // id 값을 활용하여 PATCH API 호출
    const response = await axios.patch(`http://localhost:4000/todos/${id}`);

    if (response.statusText === "OK") {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  };

  const deleteTodo = async (id: string) => {
    // id 값을 활용하여 DELETE API 호출
    const response = await axios.delete(`http://localhost:4000/todos/${id}`);
    console.log(response);
    if (response.statusText === "OK") {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  useEffect(() => {
    getDatas();
  }, []);
  return (
    <>
      <div className="w-[375px] bg-white py-10 px-6 text-[#4b4b4b]">
        <h1 className="text-xl font-bold mb-[10px]"> Todo Into App</h1>
        <p className="text-sm mb-5">Please enter your details to continue.</p>
        {/* 등록 */}
        <TodoEditor addTodos={addTodos} />
        {/* 리스트 */}
        <TodoList
          todos={todos}
          toggleTodos={toggleTodos}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
};
export default Todo;
