import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { InitialPage } from 'src/pages/auth/initial';
import { SignInPage } from 'src/pages/auth/sign-in';
import { SignUpPage } from 'src/pages/auth/sign-up';
import { AuthNavigationList, AuthNavigationRoutes } from 'src/pages/auth/types/stack-list';
import { DEFAULT_SCREEN_OPTIONS } from 'src/shared/navigator';

const Stack = createStackNavigator<AuthNavigationList>();

const AuthStackContainer = () => {
  return (
    <Stack.Navigator initialRouteName={AuthNavigationRoutes.Initial} screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <Stack.Screen name={AuthNavigationRoutes.Initial} component={InitialPage} />
      <Stack.Screen name={AuthNavigationRoutes.SignIn} component={SignInPage} />
      <Stack.Screen name={AuthNavigationRoutes.SignUp} component={SignUpPage} />
    </Stack.Navigator>
  );
};

export default AuthStackContainer;
