import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Button,
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

const LoginForm = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isValid, setIsValid] = useState({ email: false, password: false });

  const { mutate: loginMutate, isError: isErrorLogin } = useLogin();

  useEffect(() => {
    setIsValid((cur) => {
      const updated = {
        ...cur,
        email: validateEmail(emailInput) ? true : false,
      };
      return updated;
    });
  }, [emailInput]);

  useEffect(() => {
    setIsValid((cur) => {
      const updated = {
        ...cur,
        password: validatePassword(passwordInput) ? true : false,
      };
      return updated;
    });
  }, [passwordInput]);

  useEffect(() => {
    if (isErrorLogin) {
      alert('로그인에 실패했습니다.');
    }
  }, [isErrorLogin]);

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
    if (validateEmailAndPassword(isValid)) {
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
          isValid={isValid.email}
        />
      </InputContainer>
      {!isValid.email && (
        <ValidationMessage>이메일 형식을 갖춰주세요.</ValidationMessage>
      )}
      <InputContainer>
        <Label htmlFor='password'>비밀번호</Label>
        <ValidationInput
          type='password'
          id='password'
          value={passwordInput}
          onChange={onChangePasswordInput}
          isValid={isValid.password}
        />
      </InputContainer>
      {!isValid.password && (
        <ValidationMessage>8자 이상 입력해주세요.</ValidationMessage>
      )}
      <ButtonContainer>
        <Button disabled={!validateEmailAndPassword(isValid)}>sign in</Button>
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
