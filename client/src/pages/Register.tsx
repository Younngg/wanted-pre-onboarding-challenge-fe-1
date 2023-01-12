import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { Button } from '../styles/form';
import { PageTitle } from '../styles/page';
import { Navigate, useNavigate } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';

const Register = () => {
  const navigate = useNavigate();

  if (isLogin()) {
    return <Navigate to='/' />;
  }

  return (
    <Container>
      <PageTitle>
        회원가입{' '}
        <LoginButton type='button' onClick={() => navigate('/auth')}>
          로그인
        </LoginButton>
      </PageTitle>
      <RegisterForm />
    </Container>
  );
};

export default Register;

const Container = styled.div`
  margin: auto;
`;

const LoginButton = styled(Button)`
  font-size: 1.3rem;
  padding: 0 1rem;
  height: 3rem;
  margin-left: 2rem;
`;
