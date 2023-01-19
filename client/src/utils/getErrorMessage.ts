import { AxiosError } from 'axios';

export const getErrorMessage = (error: unknown) => {
  if (error instanceof AxiosError) {
    const message: { details: string } = error.response?.data;
    return message.details;
  }
};
