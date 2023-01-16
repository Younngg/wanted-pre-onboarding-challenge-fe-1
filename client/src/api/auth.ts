import type { UserType } from './../types/user';
import authAxios from './axios';

const authApi = {
  login: (data: UserType) => {
    return authAxios.post('users/login', data);
  },
  signUp: (data: UserType) => {
    return authAxios.post('users/create', data);
  },
};

export default authApi;
