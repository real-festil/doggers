import React from 'react';

import { Center, Container } from 'native-base';
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

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({
  children,
  isLoading,
  style,
  withHorizontalPadding = true,
  withInsets = true,
}) => {
  const { ready } = useTranslation();
  const insets = useSafeAreaInsets();

  const isReady = ready && !isLoading;
  const additionalStyles: StyleProp<ViewStyle> = [
    withHorizontalPadding ? { paddingHorizontal: 16 } : {},
    withInsets ? { paddingTop: insets.top, paddingBottom: insets.bottom } : {},
  ];

  return (
    <Center>
      <Container style={[...additionalStyles, style]}>
        {isReady ? children : <ActivityIndicator style={{ alignSelf: 'center', flex: 1 }} size="large" />}
      </Container>
    </Center>
  );
};

export default DefaultLayout;
