import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Form,
  Label,
  ValidationInput,
  ValidationMessage,
} from '../../styles/form';
import axios from 'axios';

const RegisterForm = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);

  const onChangeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmailInput(email);
    setIsValidEmail(email.includes('@') && email.includes('.'));
  };

  const onChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPasswordInput(password);
    setIsValidPassword(password.length >= 8);
  };

  const onSubmitRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidEmail && isValidPassword) {
      try {
        await axios.post('users/create', {
          email: emailInput,
          password: passwordInput,
        });
        navigate('/auth');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <SignUpForm onSubmit={onSubmitRegister}>
      <InputContainer>
        <Label htmlFor='email'>이메일</Label>
        <ValidationInput
          type='text'
          id='email'
          value={emailInput}
          onChange={onChangeEmailInput}
          isValid={isValidEmail}
        />
      </InputContainer>
      {!isValidEmail && (
        <ValidationMessage>이메일 형식을 갖춰주세요.</ValidationMessage>
      )}
      <InputContainer>
        <Label htmlFor='password'>비밀번호</Label>
        <ValidationInput
          type='password'
          id='password'
          value={passwordInput}
          onChange={onChangePasswordInput}
          isValid={isValidPassword}
        />
      </InputContainer>
      {!isValidPassword && (
        <ValidationMessage>8자 이상 입력해주세요.</ValidationMessage>
      )}
      <ButtonContainer>
        <Button disabled={!isValidEmail || !isValidPassword}>sign up</Button>
      </ButtonContainer>
    </SignUpForm>
  );
};

export default RegisterForm;

const SignUpForm = styled(Form)`
  width: fit-content;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  padding: 1rem 0;
`;

const ButtonContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
