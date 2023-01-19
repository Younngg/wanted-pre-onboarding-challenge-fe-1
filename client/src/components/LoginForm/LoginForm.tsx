import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  ErrorMessage,
  Form,
  Label,
  ValidationInput,
  ValidationMessage,
} from '../../styles/form';
import {
  validateEmail,
  validateEmailAndPassword,
  validatePassword,
} from '../../utils/validate';
import useLogin from '../../hooks/auth/useLogin';
import { getErrorMessage } from '../../utils/getErrorMessage';

const LoginForm = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const {
    mutate: loginMutate,
    isError: isErrorLogin,
    error: loginError,
  } = useLogin();

  const onChangeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmailInput(email);
  };

  const onChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPasswordInput(password);
  };

  const onSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmailAndPassword(emailInput, passwordInput)) {
      loginMutate({ email: emailInput, password: passwordInput });
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
          isValid={validateEmail(emailInput)}
        />
      </InputContainer>
      {!validateEmail(emailInput) && (
        <ValidationMessage>이메일 형식을 갖춰주세요.</ValidationMessage>
      )}
      <InputContainer>
        <Label htmlFor='password'>비밀번호</Label>
        <ValidationInput
          type='password'
          id='password'
          value={passwordInput}
          onChange={onChangePasswordInput}
          isValid={validatePassword(passwordInput)}
        />
      </InputContainer>
      {!validatePassword(passwordInput) && (
        <ValidationMessage>8자 이상 입력해주세요.</ValidationMessage>
      )}
      {isErrorLogin && (
        <ErrorMessage>{getErrorMessage(loginError)}</ErrorMessage>
      )}
      <ButtonContainer>
        <Button disabled={!validateEmailAndPassword(emailInput, passwordInput)}>
          sign in
        </Button>
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
