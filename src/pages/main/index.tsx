import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { HomePage } from 'src/pages/main/home';
import { DEFAULT_SCREEN_OPTIONS } from 'src/shared/navigator';

import { MainNavigationList, MainNavigationRoutes } from './types';

const Stack = createStackNavigator<MainNavigationList>();

const MainStackContainer = () => {
  return (
    <Stack.Navigator initialRouteName={MainNavigationRoutes.Home} screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <Stack.Screen name={MainNavigationRoutes.Home} component={HomePage} />
    </Stack.Navigator>
  );
};

export default MainStackContainer;
