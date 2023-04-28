import { StackNavigationProp } from '@react-navigation/stack';

export enum AuthNavigationRoutes {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  Initial = 'Initial',
}

export type AuthNavigationList = {
  SignIn: undefined;
  SignUp: undefined;
  Initial: undefined;
};

export type AuthNavigationProps = StackNavigationProp<AuthNavigationList>;