import React, { FunctionComponent } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import DefaultLayout from 'src/shared/ui/default-layout/default-layout';
import { SignInForm } from 'src/widgets/auth/sign-in-form';

import { AuthNavigationList, AuthNavigationRoutes } from '../types';

const SignIn: FunctionComponent<NativeStackScreenProps<AuthNavigationList, AuthNavigationRoutes.SignIn>> = ({}) => {
  return (
    <DefaultLayout>
      <SignInForm />
    </DefaultLayout>
  );
};

export default SignIn;
