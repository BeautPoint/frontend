import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Login: undefined;
  Confirm: undefined;
  Search: undefined;
  ShopDetails: undefined;
  SignUp: undefined;
  Location: undefined;
  Community: undefined;
  HomeSearch: undefined;
  LocaitSearch: undefined;
  CreatePost: undefined;
  BriefReiview: undefined;
  DetailReiview: undefined;
  ShopReview: undefined;
  SettingView: undefined;
  SettingsDetail: undefined;
  EditProfile: undefined;
};

type LoginScreenProps = StackNavigationProp<RootStackParamList, 'Login'>;
type HomeScreenProps = StackNavigationProp<RootStackParamList, 'HomeSearch'>;
type SignUpScreenProps = StackNavigationProp<RootStackParamList, 'SignUp'>;
type ConfirmModalProps = StackNavigationProp<RootStackParamList, 'Confirm'>;
type LocationScreenProps = StackNavigationProp<
  RootStackParamList,
  'LocaitSearch'
>;
type CommunityScreenProps = StackNavigationProp<
  RootStackParamList,
  'Community'
>;
export type ShopDetailScreenProps = StackNavigationProp<
  RootStackParamList,
  'ShopDetails'
>;
type CreatePostScreenProps = StackNavigationProp<
  RootStackParamList,
  'CreatePost'
>;
export type ShopReviewScreenProps = StackNavigationProp<
  RootStackParamList,
  'ShopReview'
>;

export type SettingsScreenProps = StackNavigationProp<
  RootStackParamList,
  'SettingView'
>;

export type SettingsDetailProps = StackNavigationProp<
  RootStackParamList,
  'SettingsDetail'
>;

export type EditProfileProps = StackNavigationProp<
  RootStackParamList,
  'EditProfile'
>;

type CommonNavigationProp = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;

export interface NavigationProps {
  login: {navigation: LoginScreenProps};
  home: {navigation: HomeScreenProps};
  confirm: {navigation: ConfirmModalProps};
  signup: {navigation: SignUpScreenProps};
  location: {navigation: LocationScreenProps};
  community: {navigation: CommunityScreenProps};
  shopDetails: {navigation: ShopDetailScreenProps};
  shopReview: {navigation: ShopReviewScreenProps};
  profile: {navigation: SettingsScreenProps};
  navigation: {navigation: CommonNavigationProp};
}
