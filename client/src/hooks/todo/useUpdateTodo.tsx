import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { TodoReqType } from './../../types/todo';
import todoApi from './../../api/todo';

const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, todo }: { id: string; todo: TodoReqType }) =>
      todoApi.updateTodo(id, todo),
    {
      onSuccess: (_, { id }) => {
        queryClient.invalidateQueries({ queryKey: ['todos'] });
        queryClient.invalidateQueries({ queryKey: ['todos', id] });
      },
    }
  );
};

export default useUpdateTodo;
