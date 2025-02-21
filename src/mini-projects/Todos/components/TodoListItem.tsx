import { memo } from 'react';

const TodoListItem = ({
  todo,
  onClickTodo,
}: {
  todo: ITodo;
  onClickTodo: (id: number) => void;
}) => {
  return (
    <div
      onClick={() => {
        onClickTodo(todo.id);
      }}
      className={`w-full h-[30px] border-b-[1px] hover:bg-slate-400 cursor-pointer
         border-b-gray-500 text-black text-center ${todo.isDone ? 'line-through' : 'no-underline'}`}
    >
      {todo.name}
    </div>
  );
};

export default memo(TodoListItem);
