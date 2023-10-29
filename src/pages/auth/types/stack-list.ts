import { StackNavigationProp } from '@react-navigation/stack';

export enum AuthNavigationRoutes {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  Initial = 'Initial',
  SelectUserType = 'SelectUserType',
}

export type AuthNavigationList = {
  SignIn: undefined;
  SignUp: { userType: string };
  Initial: undefined;
  SelectUserType: undefined;
};

export type AuthNavigationProps = StackNavigationProp<AuthNavigationList>;
