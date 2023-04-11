import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

const withGesture = (component: () => React.ReactNode) => () => {
  return <GestureHandlerRootView style={{ flex: 1 }}>{component()}</GestureHandlerRootView>;
};

export default withGesture;
