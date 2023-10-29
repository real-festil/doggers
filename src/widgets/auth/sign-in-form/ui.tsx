import { Box } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { SignInByEmailForm } from 'src/features/auth/sign-in-by-email';
import { SignToggle } from 'src/features/auth/toggle-sign';
import DefaultLayout from 'src/shared/ui/default-layout';

export const SignInForm = () => {
  return (
    <View>
      <SignInByEmailForm />
      {/* <SignToggle /> */}
    </View>
  );
};

export default SignInForm;
