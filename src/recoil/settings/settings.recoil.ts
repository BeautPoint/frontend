import {atom} from 'recoil';
import {randomString} from '@/utils/randomString.util';
import VersionView from '@/components/profile/setting/versionView.component';
const settingsState = atom({
  key: `settingsState/${randomString()}`,
  default: {
    userProfile: {nickName: '', profile_image: '', socialType: ''},
    menuList: [
      {id: 0, name: '공지사항', Component: ''},
      {id: 1, name: '고객센터'},
      {id: 2, name: '버전정보'},
      {id: 3, name: '로그아웃'},
    ],
    selectedMenu: {id: 0},
  },
});

export default settingsState;
