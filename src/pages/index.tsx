import React, { useContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import AuthStackContainer from 'src/pages/auth';
import { GlobalContext } from 'src/shared/context/GlobalContext';
import { AsyncStorageEnum } from 'src/shared/types/asyncStorage';

import MainStackContainer from './main';

const Navigator = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const getToken = async () => {
    const res = await AsyncStorage.getItem(AsyncStorageEnum.AccessToken);
    if (res) {
      return res;
    }
  };

  const getUserData = async () => {
    const userDataString = await AsyncStorage.getItem(AsyncStorageEnum.UserData);
    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);
      return userData;
    } else {
      return null;
    }
  };

  const setBearer = async (accessToken?: string) => {
    if (accessToken) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
      setIsAuthorized(true);
    } else {
      axios.defaults.headers.common.Authorization = false;
      setIsAuthorized(false);
    }
  };

  const getUser = async () => {
    const accessToken = await getToken();
    const userData = await getUserData();

    setGlobalData({
      accessToken,
      userData: {
        ...userData,
      },
    });
  };

  useEffect(() => {
    setBearer(globalData.accessToken);
    getUser();
  }, [globalData.accessToken]);
  //Here we can add other stacks and logic to switch between them
  return <>{isAuthorized ? <MainStackContainer /> : <AuthStackContainer />}</>;
};

export default Navigator;
