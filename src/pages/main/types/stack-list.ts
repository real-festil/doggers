import { StackNavigationProp } from '@react-navigation/stack';

export enum MainNavigationRoutes {
  Home = 'Home',
}

export type MainNavigationList = {
  Home: undefined;
};

export type MainNavigationProps = StackNavigationProp<MainNavigationList>;
