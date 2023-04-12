import React from 'react';

import { View } from 'react-native';

import { SignInByPhoneForm } from 'src/features/auth/sign-in-by-phone';
import { SignToggle } from 'src/features/auth/toggle-sign';

const SignInForm = () => {
  return (
    <View>
      <SignInByPhoneForm />
      <SignToggle />
    </View>
  );
};

export default SignInForm;