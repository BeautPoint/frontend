import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Login: undefined;
  Signup: undefined;
  Confirm: undefined;
  Search: undefined;
  ShopDetails: undefined;
  SignUp: undefined;
  Location: undefined;
};

type LoginScreenProps = StackNavigationProp<RootStackParamList, 'Login'>;
type SignUpScreenProps = StackNavigationProp<RootStackParamList, 'SignUp'>;
type ConfirmModalProps = StackNavigationProp<RootStackParamList, 'Confirm'>;
type LocationScreenProps = StackNavigationProp<
  RootStackParamList,
  'Search' | 'ShopDetails'
>;

export interface NavigationProps {
  login: {navigation: LoginScreenProps};
  confirm: {navigation: ConfirmModalProps};
  signup: {navigation: SignUpScreenProps};
  location: {navigation: LocationScreenProps};
}
