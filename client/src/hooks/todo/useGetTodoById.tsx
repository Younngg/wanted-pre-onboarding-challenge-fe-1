import { useQuery } from '@tanstack/react-query';
import todoApi from './../../api/todo';

const useGetTodoById = (id: string | undefined) => {
  return useQuery({
    queryKey: ['todos', id],
    queryFn: () => todoApi.getTodoById(id!),
  });
};

export default useGetTodoById;
