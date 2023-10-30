import React, { useState } from 'react';

import 'i18n';

import Navigator from 'src/pages';
import { GlobalContext, GlobalContextType } from 'src/shared/context/GlobalContext';

import withProviders from './providers';

function App(): JSX.Element {
  const [globalData, setGlobalData] = useState({
    accessToken: '',
    userData: { email: '', role: '' },
  } as GlobalContextType);

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      <Navigator />
    </GlobalContext.Provider>
  );
}

export default withProviders(App);
