import React, { FunctionComponent } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import { SignUpForm } from 'src/widgets/auth/sign-up-form';

import { AuthNavigationList, AuthNavigationRoutes } from '../types';

const SignUp: FunctionComponent<NativeStackScreenProps<AuthNavigationList, AuthNavigationRoutes.SignUp>> = () => {
  return (
    <View>
      <SignUpForm />
      <Text>Kek</Text>
    </View>
  );
};

export default SignUp;
