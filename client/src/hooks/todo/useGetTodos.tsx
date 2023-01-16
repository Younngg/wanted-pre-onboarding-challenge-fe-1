import { useQuery } from '@tanstack/react-query';
import todoApi from './../../api/todo';

const useGetTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: todoApi.getTodos,
  });
};

export default useGetTodos;
