import React from 'react';
import styled from 'styled-components';
import type { TodoResType } from '../../types/todo';
import { Link } from 'react-router-dom';
import { Button as ButtonStyle } from '../../styles/form';

interface TodoItemProps {
  todo: TodoResType;
  index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index }) => {
  return (
    <Li>
      <Link to={todo.id}>
        <Index>{index}</Index>
        <Title>{todo.title}</Title>
      </Link>
      <div>
        <Button>수정</Button>
        <Button>삭제</Button>
      </div>
    </Li>
  );
};

export default TodoItem;

const Li = styled.li`
  font-size: 1.5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: lightgrey;
  }

  a {
    display: flex;
    align-items: center;
  }
`;

const Index = styled.div`
  width: 5rem;
  text-align: center;
`;

const Title = styled.h3`
  font-weight: 400;
`;

const Button = styled(ButtonStyle)`
  font-size: 1.4rem;
  height: 3rem;
  padding: 0 1rem;
`;
