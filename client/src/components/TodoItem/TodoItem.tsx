import { FC, memo } from 'react';
import styled from 'styled-components';
import type { TodoResType } from '../../types/todo';
import { Link } from 'react-router-dom';
import { Button as ButtonStyle } from '../../styles/form';

interface TodoItemProps {
  todo: TodoResType;
  index: number;
  getInitialDataForEdit: (todo: TodoResType) => void;
  onDeleteTodo: (id: string) => Promise<void>;
}

const TodoItem: FC<TodoItemProps> = memo(
  ({ todo, index, getInitialDataForEdit, onDeleteTodo }) => {
    return (
      <Li>
        <Link to={todo.id} state={todo}>
          <Index>{index}</Index>
          <Title>{todo.title}</Title>
        </Link>
        <div>
          <Button onClick={() => getInitialDataForEdit(todo)}>수정</Button>
          <Button onClick={() => onDeleteTodo(todo.id)} color='red'>
            삭제
          </Button>
        </div>
      </Li>
    );
  }
);

export default TodoItem;

const Li = styled.li`
  font-size: 1.4rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #eeeeee;
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
