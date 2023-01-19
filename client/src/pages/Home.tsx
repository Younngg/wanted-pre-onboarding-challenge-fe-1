import { FormEvent, useRef, useState } from 'react';
import TodoForm from '../components/TodoForm/TodoForm';
import { Outlet, useNavigate } from 'react-router-dom';
import { PageContainer, PageTitle } from '../styles/page';
import type { TodoResType } from '../types/todo';
import TodoItem from '../components/TodoItem/TodoItem';
import styled from 'styled-components';
import { Button } from '../styles/form';
import useGetTodos from './../hooks/todo/useGetTodos';
import useUpdateTodo from './../hooks/todo/useUpdateTodo';
import useCreateTodo from './../hooks/todo/useCreateTodo';

const Home = () => {
  const { data: todos } = useGetTodos();
  const { mutate: updateTodoMutate } = useUpdateTodo();
  const { mutate: createTodoMutate } = useCreateTodo();

  const [updatingTodoId, setUpdatingTodoId] = useState('');

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const navigate = useNavigate();

  const getInitialDataForEdit = (todo: TodoResType) => {
    if (titleRef.current && contentRef.current) {
      titleRef.current.value = todo.title;
      contentRef.current.value = todo.content;
    }
    setUpdatingTodoId(todo.id);
  };

  const onCancleUpdate = () => {
    if (titleRef.current && contentRef.current) {
      titleRef.current.value = '';
      contentRef.current.value = '';
    }
    setUpdatingTodoId('');
  };

  const onSubmitTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current && contentRef.current) {
      const todo = {
        title: titleRef.current.value,
        content: contentRef.current.value,
      };
      // 수정
      if (updatingTodoId) {
        updateTodoMutate({
          id: updatingTodoId,
          todo,
        });
        setUpdatingTodoId('');
      } else {
        // 추가
        createTodoMutate(todo);
      }

      titleRef.current.value = '';
      contentRef.current.value = '';
    }
  };

  return (
    <>
      <PageContainer>
        <PageTitle>오늘의 할 일</PageTitle>
        <TodoForm
          titleRef={titleRef}
          contentRef={contentRef}
          isUpdating={updatingTodoId ? true : false}
          onCancleUpdate={onCancleUpdate}
          onSubmitTodo={onSubmitTodo}
        />
        <List>
          {todos.length < 1 && <Message>일정을 추가해보세요!</Message>}
          {todos &&
            todos.map((todo: TodoResType, index: number) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                index={index + 1}
                getInitialDataForEdit={getInitialDataForEdit}
              />
            ))}
        </List>
      </PageContainer>
      <PageContainer>
        <PageTitle>상세보기</PageTitle>
        <Outlet />
        <LogoutButton
          color='red'
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/auth');
          }}
        >
          로그아웃
        </LogoutButton>
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

const Message = styled.p`
  text-align: center;
  font-size: 1.7rem;
  line-height: 40rem;
`;

const LogoutButton = styled(Button)`
  font-size: 1.3rem;
  height: 3rem;
  padding: 0 1rem;
  position: absolute;
  bottom: 3rem;
  right: 3rem;
`;
