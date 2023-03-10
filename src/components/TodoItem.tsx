import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../hook';
import { toggleComplete, removeTodo } from '../store/todoSlice';

interface TodoProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: FC<TodoProps> = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;
