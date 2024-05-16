import {atom} from 'recoil';
import {randomString} from '@/utils/randomString.util';
const userInfoState = atom({
  key: `userInfoState/${randomString()}`,
  default: {
    userProfile: {nickName: '', profile_image: '', socialType: ''},
  },
});

export default userInfoState;
