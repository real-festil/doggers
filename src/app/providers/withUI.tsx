import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorMode, NativeBaseProvider, StorageManager, extendTheme } from 'native-base';

const withUI = (component: () => React.ReactNode) => () => {
  const theme = extendTheme({});

  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem('@my-app-color-mode');
        return val === 'dark' ? 'dark' : 'light';
      } catch (e) {
        return 'light';
      }
    },
    set: async (value: ColorMode) => {
      try {
        if (value) await AsyncStorage.setItem('@my-app-color-mode', value);
      } catch (e) {}
    },
  };
  return (
    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
      {component()}
    </NativeBaseProvider>
  );
};

export default withUI;
