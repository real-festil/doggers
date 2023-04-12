import React from 'react';

import {
  createStackNavigator,
} from '@react-navigation/stack';

import SignIn from 'src/pages/auth/sign-in/ui';
import SignUp from 'src/pages/auth/sign-up/ui';
import { AuthNavigationList, AuthNavigationRoutes } from 'src/pages/auth/types/stack-list';

const Stack = createStackNavigator<AuthNavigationList>();

const AuthStackContainer = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={AuthNavigationRoutes.SignIn} component={SignIn} />
        <Stack.Screen name={AuthNavigationRoutes.SignUp} component={SignUp} />
      </Stack.Navigator>
  );
};

export default AuthStackContainer;