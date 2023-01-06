import React, { FormEvent, useEffect, useRef, useState } from 'react';
import TodoForm from '../components/TodoForm/TodoForm';
import { Outlet } from 'react-router-dom';
import { PageContainer, PageTitle } from '../styles/page';
import { TodoResType } from '../types/todo';
import axios from 'axios';
import TodoItem from '../components/TodoItem/TodoItem';
import styled from 'styled-components';

const Home = () => {
  const [todos, setTodos] = useState<TodoResType[]>([]);
  const [isClickUpdate, setIsClickUpdate] = useState(false);
  const [updatingTodoId, setUpdatingTodoId] = useState('');

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

  const onClickUpdate = (todo: TodoResType) => {
    if (titleRef.current && contentRef.current) {
      titleRef.current.value = todo.title;
      contentRef.current.value = todo.content;
    }
    setIsClickUpdate(true);
    setUpdatingTodoId(todo.id);
  };

  const onCancleUpdate = () => {
    setIsClickUpdate(false);
    setUpdatingTodoId('');
    if (titleRef.current && contentRef.current) {
      titleRef.current.value = '';
      contentRef.current.value = '';
    }
  };

  const onSubmitTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    if (titleRef.current && contentRef.current) {
      try {
        if (isClickUpdate && updatingTodoId) {
          const res = await axios.put(
            `todos/${updatingTodoId}`,
            {
              title: titleRef.current.value,
              content: contentRef.current.value,
            },
            { headers: { Authorization: token } }
          );

          setTodos((current) => {
            const updated = [...current];
            const index = updated.findIndex(
              (todo) => todo.id === updatingTodoId
            );
            updated[index] = res.data.data;
            return updated;
          });

          setUpdatingTodoId('');
          setIsClickUpdate(false);
        } else {
          const res = await axios.post(
            'todos',
            {
              title: titleRef.current.value,
              content: contentRef.current.value,
            },
            { headers: { Authorization: token } }
          );

          setTodos((current) => [...current, res.data.data]);
        }

        titleRef.current.value = '';
        contentRef.current.value = '';
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <PageContainer>
        <PageTitle>오늘의 할 일</PageTitle>
        <TodoForm
          titleRef={titleRef}
          contentRef={contentRef}
          isUpdating={isClickUpdate}
          onCancleUpdate={onCancleUpdate}
          onSubmitTodo={onSubmitTodo}
        />
        <List>
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index + 1}
              onClickUpdate={onClickUpdate}
            />
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
  margin: 4rem 0;
  width: 100%;
  border: 1px solid lightgray;
  height: 45rem;
  border-radius: 10px;
  overflow-y: auto;
`;
