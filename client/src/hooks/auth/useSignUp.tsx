import { useMutation } from '@tanstack/react-query';
import type { UserType } from '../../types/user';
import authApi from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const useSignUp = () => {
  const navigate = useNavigate();

  return useMutation((user: UserType) => authApi.signUp(user), {
    onSuccess: () => navigate('/auth'),
  });
};

export default useSignUp;
