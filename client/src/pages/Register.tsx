import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { Button } from '../styles/form';
import { PageTitle } from '../styles/page';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <PageTitle>
        회원가입
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
  border: 2px solid ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.blue};

  &:hover {
    background-color: ${({ theme }) => theme.color.blue};
    color: white;
    transition: all 0.2s;
  }
`;
