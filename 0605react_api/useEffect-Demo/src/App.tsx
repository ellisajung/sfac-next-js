import { useEffect, useState } from "react";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchDataAsync = async () => {
    try {
      const data = await (await fetch("http://localhost:4000/todos")).json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect Hook
  useEffect(() => {
    console.log("useEffect");
    fetchDataAsync();
  }, []);

  return (
    <>
      <h1>app component</h1>
      <button onClick={fetchDataAsync}>fetch data</button>
      {JSON.stringify(todos)}
    </>
  );
};

export default App;
