import React, { useEffect, useRef, useState } from 'react';
import TodoForm from '../components/TodoForm/TodoForm';
import { Outlet } from 'react-router-dom';
import { PageContainer, PageTitle } from '../styles/page';
import { TodoResType } from '../types/todo';
import axios from 'axios';
import TodoItem from '../components/TodoItem/TodoItem';
import styled from 'styled-components';

const Home = () => {
  const [todos, setTodos] = useState<TodoResType[]>([]);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get('todos', {
        headers: { Authorization: localStorage.getItem('token') },
      });

      setTodos(res.data.data);
    };

    getTodos();
  }, []);

  return (
    <>
      <PageContainer>
        <PageTitle>오늘의 할 일</PageTitle>
        <TodoForm
          setTodos={setTodos}
          titleRef={titleRef}
          contentRef={contentRef}
        />
        <List>
          {todos.map((todo, index) => (
            <TodoItem key={todo.id} todo={todo} index={index + 1} />
          ))}
        </List>
      </PageContainer>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  );
};

export default Home;

const List = styled.ul`
  margin-top: 5rem;
  width: 100%;
  border: 1px solid red;
  min-height: 50rem;
  border-radius: 10px;
`;
