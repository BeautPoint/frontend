import navigationState from '@/recoil/navigation/navigation.recoil';
import {useRecoilState} from 'recoil';

export const useNavigationStateHook = () => {
  const [state, setState] = useRecoilState(navigationState);

  const changeHeaderTitle = (title: string) => {
    return setState(prevState => ({
      ...prevState,
      headerTitle: title,
    }));
  };

  const getTabBarHeight = (deviceHeight: number) => {
    let updateTabBarHeight = 0;

    if (deviceHeight > 800) updateTabBarHeight = deviceHeight * 0.09;
    else if (deviceHeight > 700) updateTabBarHeight = deviceHeight * 0.1;
    else updateTabBarHeight = deviceHeight * 0.11;

    return setState(prevState => ({
      ...prevState,
      tabBarHeight: Math.floor(updateTabBarHeight),
    }));
  };

  return {changeHeaderTitle, getTabBarHeight};
};
