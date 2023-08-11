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
};

type LoginScreenProps = StackNavigationProp<RootStackParamList, 'Login'>;
type SignUpScreenProps = StackNavigationProp<RootStackParamList, 'SignUp'>;
type ConfirmModalProps = StackNavigationProp<RootStackParamList, 'Confirm'>;
type SearchScreenProps = StackNavigationProp<RootStackParamList, 'Search'>;
type ShopDetailScreenProps = StackNavigationProp<
  RootStackParamList,
  'ShopDetails'
>;

export interface NavigationProps {
  login: {navigation: LoginScreenProps};
  confirm: {navigation: ConfirmModalProps};
  search: {navigation: SearchScreenProps};
  shopDetails: {navigation: ShopDetailScreenProps};
  signup: {navigation: SignUpScreenProps};
}
