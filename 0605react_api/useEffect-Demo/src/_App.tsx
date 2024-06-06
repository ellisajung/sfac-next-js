import axios from "axios";
import { useState } from "react";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};
const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fetch API
  // Axios is a popular library for making HTTP requests.

  const fetchDataAsync = async () => {
    try {
      // const response = await fetch("http://localhost:4000/todos");
      // console.log(response.json());
      // const data = await response.json();
      const data = await (await fetch("http://localhost:4000/todos")).json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchData = () => {
    fetch("http://localhost:4000/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  const fetchAdd = async () => {
    const response = await fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: "Learn React" }),
    });

    if (response.ok) {
      // 성공 로직...
      alert("데이터가 추가되었습니다!!");
    }
    // 데이터가 추가되었습니다!!
  };

  const fetchToggle = async () => {
    const response = await fetch("http://localhost:4000/todos/1", {
      method: "PATCH",
    });

    if (response.ok) {
      alert("데이터가 수정되었습니다!!");
    }
  };

  const fetchDelete = async () => {
    await fetch(
      "http://localhost:4000/todos/1365de32-8a39-4929-a39e-daf0104e08e6",
      {
        method: "DELETE",
      }
    );
  };

  const axiosGet = () => {
    axios
      .get("http://localhost:4000/todos")
      .then(function (response) {
        // handle success
        console.log(response);
        setTodos(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const axiosAsyncGet = async () => {
    try {
      const response = await axios.get("http://localhost:4000/todos");
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const axiosPost = async () => {
    await axios.post(
      "http://localhost:4000/todos",
      {
        text: "Learn React!!!",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const axiosPatch = async () => {
    await axios.patch(
      "http://localhost:4000/todos/91b5a18a-f3c7-4e11-b8d1-91d62d10cebe"
    );
  };

  const axiosDelete = async () => {
    await axios.delete(
      "http://localhost:4000/todos/91b5a18a-f3c7-4e11-b8d1-91d62d10cebe"
    );
  };

  return (
    <>
      <h1>App Component</h1>
      <button onClick={fetchData}>Fetch API</button>
      <button onClick={fetchDataAsync}>Fetch Async API</button>
      <button onClick={fetchAdd}>Fetch Add</button>
      <button onClick={fetchToggle}>Fetch Toggle</button>
      <button onClick={fetchDelete}>Fetch DELETE</button>
      <br />
      <br />
      <br />
      <button onClick={axiosGet}>Axios GET</button>
      <button onClick={axiosAsyncGet}>Axios Async GET</button>
      <button onClick={axiosPost}>Axios POST</button>
      <button onClick={axiosPatch}>Axios Patch</button>
      <button onClick={axiosDelete}>Axios Delete</button>
      <br />
      <br />
      {JSON.stringify(todos)}
    </>
  );
};
export default App;
