import { useContext, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { registerUser } from 'src/shared/api/auth/auth-api';
import { GlobalContext } from 'src/shared/context/GlobalContext';
import { AsyncStorageEnum } from 'src/shared/types/asyncStorage';

import { setAuthDataStorage } from '../../token';

type SignUpDto = {
  name: string;
  email: string;
  password: string;
};

const useSignUp = () => {
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const signUp = async (values: SignUpDto, userType: string) => {
    setIsLoading(true);
    try {
      const res = await registerUser(values, userType);
      if (res.token) {
        setAuthDataStorage(res.token);

        await AsyncStorage.setItem(AsyncStorageEnum.UserData, JSON.stringify({ email: res.email, role: res.role }));
        setGlobalData({
          // ...globalData,
          accessToken: res.token,
          userData: {
            email: res.email,
            role: res.role,
          },
        });
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log('_Error_', err);
        setError(err.message);
      } else {
        setError('');
      }
    }

    setIsLoading(false);
  };

  return { error, show, isLoading, setShow, signUp };
};

export default useSignUp;
