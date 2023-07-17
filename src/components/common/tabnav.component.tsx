import CommunityScreen from '@/screens/community.screen';
import HomeScreen from '@/screens/home.screen';
import LocationScreen from '@/screens/location.screen';
import ProfileScreen from '@/screens/profile.screen';
import WishlistScreen from '@/screens/wishlist.screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato', // 활성화된 탭의 라벨 색상
        tabBarInactiveTintColor: '#c9c9c9',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 100,
        },
        headerShown: false,
        tabBarItemStyle: {},
        tabBarLabelStyle: {
          marginBottom: 20,
          fontSize: 13,
        },
        tabBarIcon: ({color, size}) => {
          return (
            <View
              style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: color,
              }}
            />
          );
        },
      }}>
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="위치" component={LocationScreen} />
      <Tab.Screen name="커뮤니티" component={CommunityScreen} />
      <Tab.Screen name="위시리스트" component={WishlistScreen} />
      <Tab.Screen name="내 프로필" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
