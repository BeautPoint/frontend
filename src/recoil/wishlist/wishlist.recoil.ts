import {randomString} from '@/utils/randomString.util';
import {atom} from 'recoil';

const WishListState = atom({
  key: `wishListState/${randomString()}`,
  default: {
    tabList: [
      {id: 0, name: '찜한 병원'},
      {id: 1, name: '좋아요한 글'},
    ],
    seletedTab: '찜한 병원',
  },
});

export default WishListState;
