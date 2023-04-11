import React from 'react';

import { Box } from 'native-base';
import 'i18n';

import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import withProviders from './providers';

function App(): JSX.Element {
  const { t, ready } = useTranslation();

  if (!ready)
    return (
      <View>
        <Text>{t('common.notifications.loading')}</Text>
      </View>
    );
  return <Box flex={1}>{t('sup')}</Box>;
}

export default withProviders(App);
