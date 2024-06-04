import Login from "./components/Login";
import Todolist from "./components/Todolist";

const App = () => {
  return (
    <div className="flex content-center justify-center">
      <Login />
      <Todolist />
    </div>
  );
};

export default App;
