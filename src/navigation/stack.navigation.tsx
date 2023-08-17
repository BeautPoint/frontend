import LoginScreen from '@/screens/auth/login.screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '@/navigation/tab.navigation';
import SignupScreen from '@/screens/auth/signup.screen';
import SearchView from '@/screens/search/searchview.screen';
import ShopDetailScreen from '@/screens/shop/shopinfo.screen';

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
        name="Search"
        component={SearchView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShopDetails"
        component={ShopDetailScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="Confirm" component={ConfirmModal} /> */}
    </Stack.Navigator>
  );
}

export default StackNavigation;
