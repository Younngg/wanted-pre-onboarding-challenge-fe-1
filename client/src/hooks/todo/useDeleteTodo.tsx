import { useMutation, useQueryClient } from '@tanstack/react-query';
import todoApi from './../../api/todo';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((id: string) => todoApi.deleteTodo(id), {
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });
};

export default useDeleteTodo;
