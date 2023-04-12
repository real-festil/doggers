import React from 'react';

import 'i18n';

import Navigator from 'src/pages';

import withProviders from './providers';

function App(): JSX.Element {
  return <Navigator />;
}

export default withProviders(App);
