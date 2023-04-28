import React, { FunctionComponent } from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import DefaultLayout from 'src/shared/ui/default-layout/default-layout';
import { InitialForm } from 'src/widgets/auth/initial-form';

import { AuthNavigationList, AuthNavigationRoutes } from '../types';

const InitialPage: FunctionComponent<NativeStackScreenProps<AuthNavigationList, AuthNavigationRoutes.Initial>> = ({
  navigation,
}) => {
  return (
    <DefaultLayout withInsets>
      <InitialForm navigation={navigation} />
    </DefaultLayout>
  );
};

export default InitialPage;
