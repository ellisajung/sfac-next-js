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
  };

  const toggleTodos = async (id: string) => {
    // id 값을 활용하여 PATCH API 호출
  };

  const deleteTodo = async (id: string) => {
    // id 값을 활용하여 DELETE API 호출
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
        <TodoEditor />
        {/* 리스트 */}
        <TodoList todos={todos} />
      </div>
    </>
  );
};
export default Todo;
