import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { TodoReqType } from './../../types/todo';
import todoApi from './../../api/todo';

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((todo: TodoReqType) => todoApi.createTodo(todo), {
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });
};

export default useCreateTodo;
