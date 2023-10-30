import React, { FunctionComponent } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import DefaultLayout from 'src/shared/ui/default-layout';
import { SignUpForm } from 'src/widgets/auth/sign-up-form';

import { AuthNavigationList, AuthNavigationRoutes } from '../types';

const SignUp: FunctionComponent<NativeStackScreenProps<AuthNavigationList, AuthNavigationRoutes.SignUp>> = ({
  navigation,
  route: {
    params: { userType },
  },
}) => {
  const toggleRegister = () => {
    navigation.navigate(AuthNavigationRoutes.SignIn);
  };
  return (
    <DefaultLayout withInsets>
      <SignUpForm userType={userType} toggleRegister={toggleRegister} />
    </DefaultLayout>
  );
};

export default SignUp;
