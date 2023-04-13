import React from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Box, Button, Text } from 'native-base';

import { AuthNavigationList, AuthNavigationRoutes } from 'src/pages/auth/types';

interface InitialFormProps {
  navigation: NativeStackNavigationProp<AuthNavigationList, AuthNavigationRoutes.Initial>;
}

const InitialForm: React.FC<InitialFormProps> = ({ navigation }) => {
  return (
    <Box>
      <Text>InitialForm</Text>
      <Button mb={4} onPress={() => navigation.navigate('SignIn')}>
        Sign in
      </Button>
      <Button onPress={() => navigation.navigate('SignUp')}>Sign up</Button>
    </Box>
  );
};

export default InitialForm;
