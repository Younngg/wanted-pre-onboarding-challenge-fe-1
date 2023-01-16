import authAxios from './axios';
import { TodoReqType } from './../types/todo';

const todoApi = {
  getTodos: async () => {
    const { data } = await authAxios.get('todos');
    return data.data;
  },
  getTodoById: async (id: string) => {
    const { data } = await authAxios.get(`todos/${id}`);
    return data.data;
  },
  createTodo: (todo: TodoReqType) => {
    return authAxios.post('todos', todo);
  },
  updateTodo: (id: string, todo: TodoReqType) => {
    return authAxios.put(`todos/${id}`, todo);
  },
  deleteTodo: (id: string) => {
    return authAxios.delete(`todos/${id}`);
  },
};

export default todoApi;
