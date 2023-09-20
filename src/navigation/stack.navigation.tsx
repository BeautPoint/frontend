import LoginScreen from '@/screens/auth/login.screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '@/navigation/tab.navigation';
import SignupScreen from '@/screens/auth/signup.screen';
import ShopDetailScreen from '@/screens/shop/shopinfo.screen';
import CommunityPostDetail from '@/components/community/detail/postdetail.component';
import locationSearchScreen from '@/screens/search/searchview.screen';
import HomeSearchScreen from '@/screens/home/homeSerach.screen';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LocationSearch"
        component={locationSearchScreen}
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
      {/* <Stack.Screen name="Confirm" component={ConfirmModal} /> */}
    </Stack.Navigator>
  );
}

export default StackNavigation;
