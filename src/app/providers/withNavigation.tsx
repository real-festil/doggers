import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

const withNavigation = (component: () => React.ReactNode) => () => {
  return <NavigationContainer>{component()}</NavigationContainer>;
};

export default withNavigation;
