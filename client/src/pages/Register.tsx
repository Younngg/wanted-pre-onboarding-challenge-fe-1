import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { PageTitle } from '../styles/page';

const Register = () => {
  return (
    <Container>
      <PageTitle>회원가입</PageTitle>
      <RegisterForm />
    </Container>
  );
};

export default Register;

const Container = styled.div`
  margin: auto;
`;
