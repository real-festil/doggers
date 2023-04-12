import React from 'react';

import { Box } from 'native-base';

import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import Navigator from 'src/pages';

import withProviders from './providers';

function App(): JSX.Element {
  const { t, ready } = useTranslation();

  return <Navigator />;
}

export default withProviders(App);
