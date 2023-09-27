import {randomString} from '@/utils/randomString.util';
import {atom} from 'recoil';

const communityState = atom({
  key: `communityState//${randomString()}`,
  default: {
    tabSelector: [
      {id: 0, name: '전체보기'},
      {id: 1, name: '톡톡'},
      {id: 2, name: '정보'},
      {id: 3, name: '입소문'},
    ],
    selectedTab: '전체보기',
    likeButton: '' as string | number,
  },
});

export default communityState;
