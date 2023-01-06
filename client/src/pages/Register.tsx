import React from 'react';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { PageTitle } from '../styles/page';

const Register = () => {
  return (
    <>
      <PageTitle>회원가입</PageTitle>
      <RegisterForm />
    </>
  );
};

export default Register;
