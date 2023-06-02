import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface Login {
  email: string;
  password: string;
}

const signIn = async (email: string, password: string) => {
  const response = await axios('https://dev.datacube.ai/api/auth/login', {
    method: 'POST',
    data: { email, password },
  });
  if (!response) {
    throw false;
  }
  return await response.data.data;
};

export function useSignIn<T extends string>() {
  const {
    mutate: signInMutation,
    isLoading,
    error,
    data,
  } = useMutation<any, any, any, T>(({ email, password }: Login) =>
    signIn(email, password),
  );
  return {
    signInMutation,
    isLoading,
    error: (error && error?.response?.data?.message) || '',
    data,
  };
}
