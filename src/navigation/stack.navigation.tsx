import LoginScreen from '@/screens/auth/login.screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '@/navigation/tab.navigation';
import SignupScreen from '@/screens/auth/signup.screen';
import ShopDetailScreen from '@/screens/shop/detail.screen';
import CommunityPostDetail from '@/components/community/detail/postdetail.component';
import LocationSearchScreen from '@/screens/search/searchview.screen';
import HomeSearchScreen from '@/screens/home/homeSerach.screen';
import CreatePostScreen from '@/screens/community/createPost.screen';
import BriefReviewScreen from '@/components/shop/review/briefReview.component';
import DetailReviewScreen from '@/components/shop/review/detailReview.component';
import SettingScreen from '@/components/profile/setting/settingsScreen.component';
import SettingsDetails from '@/components/profile/setting/settingsDetail.component';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LocationSearch"
        component={LocationSearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShopDetails"
        component={ShopDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Community"
        component={CommunityPostDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeSearch"
        component={HomeSearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BriefReiview"
        component={BriefReviewScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailReiview"
        component={DetailReviewScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingView"
        component={SettingScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SettingsDetail"
        component={SettingsDetails}
        options={{headerShown: false}}
      />

      {/* <Stack.Screen name="Confirm" component={ConfirmModal} /> */}
    </Stack.Navigator>
  );
}

export default StackNavigation;
