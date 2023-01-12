import styled from 'styled-components';
import LoginForm from '../components/LoginForm/LoginForm';
import { Button } from '../styles/form';
import { PageTitle } from '../styles/page';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <PageTitle>
        로그인
        <SignUpButton type='button' onClick={() => navigate('/auth/register')}>
          회원가입
        </SignUpButton>
      </PageTitle>
      <LoginForm />
    </Container>
  );
};

export default Login;

const Container = styled.div`
  margin: auto;
`;

const SignUpButton = styled(Button)`
  font-size: 1.3rem;
  padding: 0 1rem;
  height: 3rem;
  margin-left: 2rem;
`;
