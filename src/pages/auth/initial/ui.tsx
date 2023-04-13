import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import DefaultLayout from 'src/shared/ui/DefaultLayout';

import { InitialForm } from 'src/widgets/auth/initial-form';

import { AuthNavigationList, AuthNavigationRoutes } from '../types';

const InitialPage: React.FC<NativeStackScreenProps<AuthNavigationList, AuthNavigationRoutes.Initial>> = ({
  navigation,
}) => {
  return (
    <DefaultLayout>
      <InitialForm navigation={navigation} />
    </DefaultLayout>
  );
};

export default InitialPage;
