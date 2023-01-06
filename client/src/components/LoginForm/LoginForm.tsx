import React, { ChangeEvent, FormEvent, useState } from 'react';
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

const LoginForm = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

  const navigate = useNavigate();

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

  const onSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidEmail && isValidPassword) {
      try {
        const res = await axios.post('users/login', {
          email: emailInput,
          password: passwordInput,
        });
        localStorage.setItem('token', res.data.token);
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <SignUpForm onSubmit={onSubmitLogin}>
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
        <Button type='button' onClick={() => navigate('/auth/register')}>
          회원가입
        </Button>
        <Button disabled={!isValidEmail || !isValidPassword}>sign in</Button>
      </ButtonContainer>
    </SignUpForm>
  );
};

export default LoginForm;

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
