import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import { PageTitle } from '../styles/page';

const Login = () => {
  return (
    <div>
      <PageTitle>로그인</PageTitle>
      <LoginForm />
    </div>
  );
};

export default Login;
