import React from 'react';

import { View } from 'react-native';

import { SignUpByPhoneForm } from 'src/features/auth/sign-up-by-phone';
import { SignToggle } from 'src/features/auth/toggle-sign';

const SignUpForm = () => {
  return (
    <View>
      <SignUpByPhoneForm />
      <SignToggle />
    </View>
  );
};

export default SignUpForm;
