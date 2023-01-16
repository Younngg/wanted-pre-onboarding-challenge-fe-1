import { useLocation, useNavigate, useParams } from 'react-router-dom';
import type { TodoResType } from '../types/todo';
import styled from 'styled-components';
import { dateFormat } from '../utils/dateFormat';
import { Button } from '../styles/form';
import useGetTodoById from './../hooks/todo/useGetTodoById';

const Detail = () => {
  //const todo: TodoResType = useLocation().state;

  const { id } = useParams();

  const navigate = useNavigate();

  const { data: todo, isError, isLoading } = useGetTodoById(id);

  return (
    todo && (
      <div>
        <TitleContainer>
          <Title>{todo.title}</Title>
          <Date>{dateFormat(todo.createdAt)}</Date>
        </TitleContainer>
        <Content>{todo.content}</Content>
        <ButtonContainer>
          <Button onClick={() => navigate('/')}>나가기</Button>
        </ButtonContainer>
      </div>
    )
  );
};

export default Detail;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding: 0 2rem;
`;

const Title = styled.h4`
  font-size: 1.8rem;
`;

const Date = styled.p`
  font-size: 1.3rem;
`;

const Content = styled.article`
  font-size: 1.6rem;
  padding: 2rem 2.5rem;
  border: 1px solid lightgray;
  border-radius: 10px;
  min-height: 50rem;
`;

const ButtonContainer = styled.div`
  text-align: right;
  margin-top: 1.5rem;
`;
