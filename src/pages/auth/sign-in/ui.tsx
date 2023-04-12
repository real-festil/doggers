import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { SignInForm } from 'src/widgets/auth/sign-in-form';

const SignIn = () => {
  return (
    <SafeAreaView>
      <SignInForm />
    </SafeAreaView>
  );
};

export default SignIn;