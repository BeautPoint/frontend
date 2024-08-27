import {atom} from 'recoil';
import {randomString} from '@/utils/randomString.util';
const userInfoState = atom({
  key: `userInfoState/${randomString()}`,
  default: {
    userProfile: {nickName: '', profile_image: '', socialType: ''},
    profiletabInfo: [
      {id: 0, text: '나의 글'},
      {id: 1, text: '나의 댓글'},
    ],
    activeTab: 0,
  },
});

export default userInfoState;
