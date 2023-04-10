import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorMode, StorageManager } from 'native-base';

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

export default colorModeManager;