import { create } from 'zustand';

interface ITodosState {
  todos: ITodo[];
  addTodo: (_todoName: string) => void;
  updateTodo: (_todoId: number) => void;
}

const useTodoStore = create<ITodosState>((set, get) => ({
  todos: [],
  addTodo: (_todoName) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: Math.floor(Math.random() * 100000), name: _todoName },
      ],
    })),
  updateTodo: (_todoId) => {
    const _todos = get().todos;
    const updateTodos = _todos?.map((todo) => {
      if (todo.id === _todoId) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });

    set({ todos: updateTodos });
  },
}));

export default useTodoStore;
