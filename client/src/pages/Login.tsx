import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm/LoginForm';
import { PageTitle } from '../styles/page';

const Login = () => {
  return (
    <Container>
      <PageTitle>로그인</PageTitle>
      <LoginForm />
    </Container>
  );
};

export default Login;

const Container = styled.div`
  margin: auto;
`;
