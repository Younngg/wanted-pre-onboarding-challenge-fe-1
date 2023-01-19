import type { AuthResType, UserType } from '../../types/user';
import authApi from '../../api/auth';
import axios, { AxiosResponse } from 'axios';
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
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message: { details: string } = error.response?.data;
        console.log(message.details);
      }
    },
  });
};

export default useLogin;
