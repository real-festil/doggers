import { useContext, useState } from 'react';

import { login } from 'src/shared/api/auth/auth-api';
import { LoginDto } from 'src/shared/api/auth/dtos';
import { GlobalContext } from 'src/shared/context/GlobalContext';

import { setAuthDataStorage } from '../../token';

const useSignIn = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const loginUser = async (data: LoginDto) => {
    setIsLoading(true);
    try {
      const res: any = await login(data);

      if (res.token) {
        setAuthDataStorage(res.token);

        setGlobalData({
          accessToken: res.token,
          userData: {
            email: res.email,
            role: res.role,
          },
        });
      }

      if (res instanceof Error) {
        setError(res.message);
      } else {
        setError('');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('');
      }
    }
    setIsLoading(false);
  };

  return { loginUser, isLoading, show, setShow, error };
};

export default useSignIn;
