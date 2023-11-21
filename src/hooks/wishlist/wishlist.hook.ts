import WishListState from '@/recoil/wishlist/wishlist.recoil';
import {useRecoilState} from 'recoil';

export const useWishListHook = () => {
  const [state, setState] = useRecoilState(WishListState);

  const selectTabHandle = (tabName: string) => {
    setState(prev => ({
      ...prev,
      seletedTab: tabName,
    }));
  };

  return {selectTabHandle};
};
