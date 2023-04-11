import React from 'react';

import { NativeBaseProvider } from 'native-base';
import { colorModeManager, theme } from 'shared/theme';

const withUI = (component: () => React.ReactNode) => () => {
  return (
    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
      {component()}
    </NativeBaseProvider>
  );
};

export default withUI;
