import { useState } from 'react';
import { User } from 'src/pages/auth/auth.interface';

import { useLocalStorage } from './useLocalStorage';

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const { setItem, clear } = useLocalStorage();

  const addUser = (user: User) => {
    setUser(user);
    setItem('user', JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    clear();
  };

  return { user, addUser, removeUser };
};
