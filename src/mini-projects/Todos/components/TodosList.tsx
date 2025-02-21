import { useCallback } from 'react';
import useTodoStore from '../zustand/todosStore';
import TodoListItem from './TodoListItem';

const TodosList = () => {
  const todos = useTodoStore((state) => state.todos);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const onClickTodo = useCallback(
    (id: number) => {
      updateTodo(id);
    },
    [updateTodo]
  );

  if (!todos.length) {
    return (
      <div className="w-full h-full bg-white border gap-2 rounded-md">
        <div className="text-black py-3">You don't have tasks</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white border gap-2 rounded-md">
      {todos.map((item) => {
        return (
          <TodoListItem todo={item} onClickTodo={onClickTodo} key={item.id} />
        );
      })}
    </div>
  );
};

export default TodosList;
