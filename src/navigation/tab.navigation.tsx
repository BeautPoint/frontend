import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import navigationState from '@/recoil/navigation/navigation.recoil';
import {AppText} from '@/styles/global.style';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const {tabNavigationState} = useRecoilValue(navigationState);
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#4D84E3', // 활성화된 탭의 라벨 색상
          tabBarInactiveTintColor: '#8C939C',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            height: Platform.OS === 'ios' ? 70 : 80,
            paddingLeft: 10,
            paddingRight: 10,
          },
          headerShown: false,
        }}>
        {tabNavigationState.map(li => {
          return (
            <Tab.Screen
              key={li.id}
              name={li.name}
              component={li.component}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <View
                      style={{
                        marginTop: 20,
                        height: 30,
                      }}>
                      <li.icon
                        color={focused ? '#4D84E3' : '#777777'}
                        width={20}
                        height={20}
                        fill={focused ? '#4D84E3' : 'none'}
                        strokeWidth={1}
                      />
                    </View>
                  );
                },
                tabBarLabel: ({focused, color}) => (
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: Platform.OS === 'android' ? 15 : 5,
                    }}>
                    <AppText
                      style={{
                        height: 20,
                        marginTop:
                          Platform.OS === 'android' && focused ? -1 : 0,
                        color,
                        fontFamily: focused
                          ? 'Pretendard-ExtraBold'
                          : 'Pretendard',
                        fontSize: 12,
                      }}>
                      {li.name}
                    </AppText>
                  </View>
                ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
}

export default TabNavigation;
