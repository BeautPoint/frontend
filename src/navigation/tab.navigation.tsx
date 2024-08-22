import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, Platform, SafeAreaView, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import navigationState from '@/recoil/navigation/navigation.recoil';
import {AppText} from '@/styles/global.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuthHook} from '@/hooks/auth/auth.hook';
import {useNavigationStateHook} from '@/hooks/navigation/useNavigation.hook';

import CommunityScreen from '@/screens/main/community.screen';
import HomeScreen from '@/screens/main/home.screen';
import LocationScreen from '@/screens/main/location.screen';
import ProfileScreen from '@/screens/main/profile.screen';
import WishlistScreen from '@/screens/main/wishlist.screen';
import {SvgProps} from 'react-native-svg';
import {getTabBarHeight} from '@/utils/getTabBarHeight.util';

const componentMap: {[key: string]: React.ComponentType<any>} = {
  HomeScreen,
  LocationScreen,
  CommunityScreen,
  WishlistScreen,
  ProfileScreen,
};

const Tab = createBottomTabNavigator();
const device = Dimensions.get('window');

function TabNavigation() {
  const {tabNavigationState} = useRecoilValue(navigationState);
  const {accessToken, setAccessToken} = useAuthHook();
  // const {getTabBarHeight} = useNavigationStateHook();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('access_token');
      if (token) {
        setAccessToken(token);
      }
    };

    checkToken();
  }, [setAccessToken]);

  const handleTabPress = (location: string, navigation: any) => (e: any) => {
    if (location === '마이' && !accessToken) {
      e.preventDefault();
      navigation.navigate('Login');
    }
  };

  const tabBarHeight = getTabBarHeight(device.height);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#4D84E3',
        tabBarInactiveTintColor: '#8C939C',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: tabBarHeight,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
        },
        headerShown: false,
      }}>
      {tabNavigationState.map(li => {
        const Component = componentMap[li.component];
        return (
          <Tab.Screen
            key={li.id}
            name={li.name}
            component={Component}
            listeners={({navigation}) => ({
              tabPress: handleTabPress(li.name, navigation),
            })}
            options={{
              tabBarIcon: ({focused}) =>
                tabBarIconStyle(focused, li.name, li.icon),
              tabBarLabel: ({focused, color}) =>
                tabLabelStyle(focused, color, li.name),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const tabBarIconStyle = (
  focused: boolean,
  name: string,
  Icon: React.FC<SvgProps>,
) => {
  const iconName = ['홈', '커뮤니티'];
  return (
    <View
      style={{
        marginTop: 0,
        // height: 30,
      }}>
      <Icon
        color={
          focused && iconName.includes(name)
            ? '#ffffff'
            : focused
            ? '#4D84E3'
            : '#777777'
        }
        width={20}
        height={20}
        fill={focused ? '#4D84E3' : 'none'}
        strokeWidth={1}
      />
    </View>
  );
};

const tabLabelStyle = (focused: boolean, color: string, name: string) => {
  return (
    <View
      style={{
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        marginBottom: Platform.OS === 'android' ? 15 : 5,
      }}>
      <AppText
        style={{
          // height: 20,
          // marginTop: Platform.OS === 'android' && focused ? -1 : 0,
          color,
          fontFamily: focused ? 'Pretendard-SemiBold' : 'Pretendard-Regular',
          fontSize: 11,
        }}>
        {name}
      </AppText>
    </View>
  );
};

export default TabNavigation;
