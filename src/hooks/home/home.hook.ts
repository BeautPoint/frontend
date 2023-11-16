import HomeState from '@/recoil/home/home.recoil';
import {useRecoilState} from 'recoil';

export const useHomeScreenHooks = () => {
  const [state, setState] = useRecoilState(HomeState);

  const shopLikeHandle = (shop: any) => {
    setState(prev => {
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
  return {shopLikeHandle};
};
