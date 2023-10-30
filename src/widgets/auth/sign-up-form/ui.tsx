import React, { FunctionComponent, useState } from 'react';

import { View } from 'react-native';

import { SignUpByEmailForm } from 'src/features/auth/sign-up-by-email';
import { SignToggle } from 'src/features/auth/toggle-sign';

type SignUpFormProps = {
  userType: string;
  toggleRegister: () => void;
};

const SignUpForm: FunctionComponent<SignUpFormProps> = ({ userType, toggleRegister }) => {
  return (
    <View>
      <SignUpByEmailForm userType={userType} />
      <SignToggle label={'signIn'} onPress={toggleRegister} />
    </View>
  );
};

export default SignUpForm;
