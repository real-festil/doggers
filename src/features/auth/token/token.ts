import AsyncStorage from '@react-native-async-storage/async-storage';

import { AsyncStorageEnum } from 'src/shared/types/asyncStorage';

const setAuthDataStorage = async (token: string) => {
  try {
    if (token) {
      await AsyncStorage.setItem(AsyncStorageEnum.AccessToken, token);
    }
  } catch (err) {
    console.log('err', err);
  }
};

export default setAuthDataStorage;
