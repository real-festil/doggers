import React from 'react';

import { NativeBaseProvider } from 'native-base';
import { colorModeManager, theme } from 'src/shared';

const withUI = (component: () => React.ReactNode) => () => {
  return (
    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
      {component()}
    </NativeBaseProvider>
  );
};

export default withUI;
