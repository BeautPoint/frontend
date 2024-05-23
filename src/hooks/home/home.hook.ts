import {useEffect} from 'react';
import navigationState from '@/recoil/navigation/navigation.recoil';
import HomeState from '@/recoil/home/home.recoil';
import {useRecoilState} from 'recoil';

export const useHomeScreenHooks = () => {
  const [homeState, setHomeState] = useRecoilState(HomeState);
  const [navState, setNavState] = useRecoilState(navigationState);

  const shopLikeHandle = (shop: any) => {
    setHomeState(prev => {
      const isTagIncluded = prev.likeShops.some(item => item.id === shop.id);
      const updatedSelectedTags = isTagIncluded
        ? prev.likeShops.filter(item => item.id !== shop.id)
        : [...prev.likeShops, shop];

      /** tag 상태 값이 없는경우 버튼 비활성화 */
      return {
        ...prev,
        likeShops: updatedSelectedTags,
      };
    });

    // setState(prev => ({
    //   ...prev,
    //   likeButton: state.likeShops.id === id ? '' : id,
    // }));
  };

  const handleHomeScreenNavReset = (value: boolean) => {
    useEffect(() => {
      setNavState(prevState => ({
        ...prevState,
        resetToHomeScreen: value,
      }));
    }, []);
  };

  const testHandle = () => {
    setNavState(prevState => ({
      ...prevState,
      resetToHomeScreen: true,
    }));
  };

  return {shopLikeHandle, handleHomeScreenNavReset, testHandle};
};
