import { createContext, useCallback, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoContextType = {
  todos: Todo[];
};

export type TodoContextDispatchType = {
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

const defaultValues = {
  todos: [],
};

const defaultDispatchValues = {
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
};

export const TodoContext = createContext<TodoContextType>(defaultValues);
export const TodoDispathContext = createContext<TodoContextDispatchType>(
  defaultDispatchValues
);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: uuidv4(), text, completed: false }]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const memoValue = useMemo(() => ({ todos }), [todos]);
  const memeDispatchValue = useMemo(
    () => ({ addTodo, removeTodo, toggleTodo }),
    []
  );

  return (
    <TodoContext.Provider value={memoValue}>
      <TodoDispathContext.Provider value={memeDispatchValue}>
        {children}
      </TodoDispathContext.Provider>
    </TodoContext.Provider>
  );
};
