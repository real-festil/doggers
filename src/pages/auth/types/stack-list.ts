import { StackNavigationProp } from '@react-navigation/stack';

export enum AuthNavigationRoutes {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
}

export type AuthNavigationList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AuthNavigationProps = StackNavigationProp<AuthNavigationList>;