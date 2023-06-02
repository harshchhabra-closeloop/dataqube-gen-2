import { Button } from '@ui-components';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

import { useSignIn } from './login.services';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm();
  const { signInMutation, isLoading, error, data } = useSignIn();

  const onSubmit = (values: { email: string; password: string }) => {
    const { email, password } = values;
    if (email && password) {
      signInMutation(values);
    }
  };

  useEffect(() => {
    if (data && data?.id) {
      login(data);
      navigate('/dashboard');
    }
  }, [data]);

  return (
    <div className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
              DataQube
            </div>
          </div>
        </div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
            Log in
          </h2>
          <div className="mt-12">
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email Address
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  {...register('email')}
                  type=""
                  placeholder="mike@gmail.com"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  {...register('password')}
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-10">
                <Button
                  disabled={!isDirty || !isValid}
                  isLoading={isLoading}
                  text="Log in"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer"></div>
      </div>
    </div>
  );
}
