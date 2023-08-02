import {atom} from 'recoil';

const signupState = atom({
  key: 'signupState',
  default: {
    userInfoForm: [
      {id: 0, name: '연도', dateValue: ''},
      {id: 1, name: '월', dateValue: ''},
      {id: 2, name: '일', dateValue: ''},
    ],
  },
});

export default signupState;
