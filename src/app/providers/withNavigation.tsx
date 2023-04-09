import { NavigationContainer } from "@react-navigation/native";
import React from "react";

const withNavigation = (component: () => React.ReactNode) => () => {
  return <NavigationContainer>{component()}</NavigationContainer>;
};

export default withNavigation;
