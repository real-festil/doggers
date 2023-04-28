import React, { FunctionComponent } from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Box } from 'native-base';

import { AuthNavigationList, AuthNavigationRoutes } from 'src/pages/auth/types';
import Button from 'src/shared/ui/button';

type InitialFormProps = {
  navigation: NativeStackNavigationProp<AuthNavigationList, AuthNavigationRoutes.Initial>;
};

const InitialForm: FunctionComponent<InitialFormProps> = ({ navigation }) => {
  return (
    <Box>
      <Button label="Sign in" mb={4} onPress={() => navigation.navigate('SignIn')} />
      <Button label="Sign up" onPress={() => navigation.navigate('SignUp')} />
    </Box>
  );
};

export default InitialForm;
