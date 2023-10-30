import React, { FunctionComponent } from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthNavigationList, AuthNavigationRoutes } from 'src/pages/auth/types';
import Button from 'src/shared/ui/button';

type InitialFormProps = {
  navigation: NativeStackNavigationProp<AuthNavigationList, AuthNavigationRoutes.SelectUserType>;
};

const SelectUserTypeBlock: FunctionComponent<InitialFormProps> = ({ navigation }) => {
  return (
    <>
      <Button
        label="Customer"
        onPress={() => navigation.navigate(AuthNavigationRoutes.SignUp, { userType: 'customer' })}
      />
      <Button
        label="Contractor"
        onPress={() => navigation.navigate(AuthNavigationRoutes.SignUp, { userType: 'contractor' })}
      />
    </>
  );
};

export default SelectUserTypeBlock;
