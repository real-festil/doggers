import React, { FunctionComponent, useContext } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import { AuthNavigationRoutes } from 'src/pages/auth/types';
import { GlobalContext } from 'src/shared/context/GlobalContext';
import { AsyncStorageEnum } from 'src/shared/types/asyncStorage';
import Button from 'src/shared/ui/button';
import DefaultLayout from 'src/shared/ui/default-layout';

import { MainNavigationList, MainNavigationRoutes } from '../types';

const HomePage: FunctionComponent<NativeStackScreenProps<MainNavigationList, MainNavigationRoutes.Home>> = ({
  navigation,
}) => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const logout = async () => {
    await AsyncStorage.removeItem(AsyncStorageEnum.AccessToken);
    setGlobalData({
      ...globalData,
      accessToken: '',
      userData: {
        email: '',
        role: '',
      },
    });
    // navigation.navigate(AuthNavigationRoutes.Initial);
  };

  console.log('__globalData__', globalData);

  return (
    <DefaultLayout withInsets>
      <Text>{globalData.userData.role}</Text>
      <Text>{globalData.userData.email}</Text>

      <Button label="logout" onPress={logout} />
    </DefaultLayout>
  );
};

export default HomePage;
