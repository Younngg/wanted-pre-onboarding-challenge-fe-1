import type { AuthResType, UserType } from '../../types/user';
import type { AxiosResponse } from 'axios';
import authApi from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation((user: UserType) => authApi.login(user), {
    onSuccess: (data: AxiosResponse<AuthResType>) => {
      const token = data.data.token;
      localStorage.setItem('token', token);
      navigate('/');
    },
  });
};

export default useLogin;
