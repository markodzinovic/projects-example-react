import { ChangeEvent, KeyboardEvent, useState } from 'react';
import useTodoStore from '../zustand/todosStore';
import { delay } from '../helpers/timeoutHelper';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const addTodo = useTodoStore((state) => state.addTodo);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(value);
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        onAddTodoHandler();
        break;
      default:
        break;
    }
  };

  const onAddTodoHandler = async () => {
    try {
      setIsLoading(true);
      if (!todo) throw new Error("You can't add empty todo");
      await delay(2 * 1000);
      addTodo(todo);
      setTodo('');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center gap-5 w-[500px] h-[100px] bg-white rounded-md ">
      <input
        className="border h-[40px] text-black text-lg px-2 rounded-sm border-slate-500 disabled:bg-slate-50"
        placeholder="Input task"
        value={todo}
        disabled={isLoading}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        type="text"
      />
      <button
        className="border h-[50px] rounded-b-sm"
        disabled={isLoading}
        onClick={onAddTodoHandler}
      >
        {isLoading ? 'Please wait...' : 'Add'}
      </button>
    </div>
  );
};

export default AddTodo;
