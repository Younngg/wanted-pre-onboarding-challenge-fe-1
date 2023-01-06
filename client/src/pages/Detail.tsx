import React from 'react';
import { useLocation } from 'react-router-dom';
import { TodoResType } from '../types/todo';
import styled from 'styled-components';
import { PageTitle } from './../styles/page';
import { dateFormat } from '../utils/dateFormat';

const Detail = () => {
  const todo: TodoResType = useLocation().state;

  return (
    <div>
      <PageTitle>상세보기</PageTitle>
      <TitleBox>
        <Title>{todo.title}</Title>
        <Date>{dateFormat(todo.createdAt)}</Date>
      </TitleBox>
      <Content>{todo.content}</Content>
    </div>
  );
};

export default Detail;

const TitleBox = styled.div`
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
