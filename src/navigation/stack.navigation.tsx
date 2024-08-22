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
import ReviewScreen from '@/components/service/reviewForm.component';
import SettingScreen from '@/components/profile/setting/settingsScreen.component';
import SettingsDetails from '@/components/profile/setting/settingsDetail.component';
import EditProfile from '@/components/profile/edit/editProfile.component';
import CommunityScreen from '@/screens/main/community.screen';
import SearchScreen from '@/screens/search/search.screen';
import SearchResultsScreen from '@/screens/community/searchResults.screen';
import CommunitySearchScreen from '@/screens/community/communitySearch.screen';
import ServiceDetailScreen from '@/components/service/serviceDetails.component';
import ServiceSearchResults from '@/screens/home/serviceSearchResults.screen';
import CategorySearchResults from '@/screens/home/categoryResults.screen';

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
        name="Signup"
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
        name="PostDetails"
        component={CommunityPostDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Community"
        component={CommunityScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchResultPosts"
        component={ServiceSearchResults}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryResults"
        component={CategorySearchResults}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeSearch"
        component={HomeSearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchResults"
        component={SearchResultsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CommunitySearch"
        component={CommunitySearchScreen}
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
        component={ReviewScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingView"
        component={SettingScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ServiceReview"
        component={ReviewScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingsDetail"
        component={SettingsDetails}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ServiceDetails"
        component={ServiceDetailScreen}
        options={{headerShown: false}}
      />

      {/* <Stack.Screen name="Confirm" component={ConfirmModal} /> */}
    </Stack.Navigator>
  );
}

export default StackNavigation;
