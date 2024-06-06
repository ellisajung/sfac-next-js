import { create } from "zustand";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoStoreType = {};

export const useTodoStore = create<TodoStoreType>((set) => ({
  addTodo: (text) => {
    set((state) => ({ todos: [] }));
  },
}));
