import {atom} from 'recoil';
import HomeIcon from '@/assets/icons/homeIcon.svg';
import LocationIcon from '@/assets/icons/locationIcon.svg';
import CommunityIcon from '@/assets/icons/communityIcon.svg';
import LikeIcon from '@/assets/icons/heartIcon.svg';
import ProfileIcon from '@/assets/icons/profileIcon.svg';
import {randomString} from '@/utils/randomString.util';

const navigationState = atom({
  key: `navigationState/${randomString()}`,
  default: {
    modalOpen: false,
    tabNavigationState: [
      {id: 0, name: '홈', component: 'HomeScreen', icon: HomeIcon},
      {id: 1, name: '내주변', component: 'LocationScreen', icon: LocationIcon},
      {
        id: 2,
        name: '커뮤니티',
        component: 'CommunityScreen',
        icon: CommunityIcon,
      },
      {id: 3, name: '찜', component: 'WishlistScreen', icon: LikeIcon},
      {id: 4, name: '마이', component: 'ProfileScreen', icon: ProfileIcon},
    ],
    navCurrentLocation: 'home',
    tabBarHeight: 0,
    confirmBottomSheet: false,
    singupScreen: false,
    resetToHomeScreen: false,
    headerTitle: '',
    searchKeyword: '',
    recentSearches: [] as string[],
    showResultsScreen: false,
  },
});

export default navigationState;
