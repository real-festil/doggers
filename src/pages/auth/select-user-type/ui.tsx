import React, { FunctionComponent } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import DefaultLayout from 'src/shared/ui/default-layout';
import { SelectUserTypeBlock } from 'src/widgets/auth/select-user-type-block';

import { AuthNavigationList, AuthNavigationRoutes } from '../types';

const SelectUserTypePage: FunctionComponent<
  NativeStackScreenProps<AuthNavigationList, AuthNavigationRoutes.SelectUserType>
> = ({ navigation }) => {
  return (
    <DefaultLayout>
      <Text>Select type</Text>
      <SelectUserTypeBlock navigation={navigation} />
    </DefaultLayout>
  );
};

export default SelectUserTypePage;
