import React from 'react';
import TodoForm from '../components/TodoForm/TodoForm';
import TodoList from '../components/TodoList/TodoList';
import { PageTitle } from '../styles/page';

const Home = () => {
  return (
    <div>
      <PageTitle>오늘의 할 일</PageTitle>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
