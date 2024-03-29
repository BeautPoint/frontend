import {randomString} from '@/utils/randomString.util';
import {atom} from 'recoil';

const loginState = atom({
  key: `signupState/${randomString()}`,
  default: {
    loginScreenWelcomeTexts: [
      {id: 0, text: '내 주변 반영구 시술샵,'},
      {id: 1, text: '이젠 정확하고 빠르게!'},
      {id: 2, text: '뷰포인트에 오신걸 환영합니다.'},
    ],
    loginModalOpen: false,
  },
});

export default loginState;
