import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TodoResType } from '../../types/todo';

const TodoList = () => {
  const [todos, setTodos] = useState<TodoResType[]>();

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get('todos', {
        headers: { Authorization: localStorage.getItem('token') },
      });
      console.log(res);
    };

    getTodos();
  }, []);

  return <div></div>;
};

export default TodoList;
