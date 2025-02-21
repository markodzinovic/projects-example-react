import { AddTodo, TodosList } from './components';

const Todos = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-[100%] h-[100%]">
      <AddTodo />
      <TodosList />
    </div>
  );
};

export default Todos;
