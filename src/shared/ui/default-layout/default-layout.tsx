import React, { FunctionComponent } from 'react';

import { Center } from 'native-base';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IDefaultLayoutProps {
  children: React.ReactNode;
  isLoading?: boolean;
  withHorizontalPadding?: boolean;
  withInsets?: boolean;
  style?: StyleProp<ViewStyle>;
}

const DefaultLayout: FunctionComponent<IDefaultLayoutProps> = ({
  children,
  isLoading,
  style,
  withHorizontalPadding = false,
  withInsets = false,
}) => {
  const { ready } = useTranslation();
  const insets = useSafeAreaInsets();

  const isReady = ready && !isLoading;
  const additionalStyles: StyleProp<ViewStyle> = [
    withHorizontalPadding ? { paddingHorizontal: 16 } : {},
    withInsets ? { paddingTop: insets.top || 20, paddingBottom: insets.bottom || 20 } : {},
  ];

  return (
    <Center style={[...additionalStyles, style]}>
      {isReady ? children : <ActivityIndicator style={{ alignSelf: 'center', flex: 1 }} size="large" />}
    </Center>
  );
};

export default DefaultLayout;
