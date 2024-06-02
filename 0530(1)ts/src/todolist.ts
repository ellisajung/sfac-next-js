type TAddTodo = (text: string) => void;
type TRemoveTodo = (id: number) => void;
type TToggleTodo = (id: number) => void;

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

const todos: ITodo[] = [];

const addTodo: TAddTodo = (text) => {
  const todo = {
    id: todos.length + 1,
    text,
    completed: false,
  };
  todos.push(todo);
};

const removeTodo: TRemoveTodo = (id) => {
  const findIndex = todos.findIndex((todo) => todo.id === id);
  todos.splice(findIndex, 1);
};

const toggleTodo: TToggleTodo = (id) => {
  const find = todos.find((todo) => todo.id === id);
  if (find) {
    find.completed = !find.completed;
  }
};
