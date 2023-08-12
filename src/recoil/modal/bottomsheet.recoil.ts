import {atom} from 'recoil';

const bottomSheetState = atom({
  key: 'bottomSheetState',
  default: {
    modalOpen: false,
    agreeBody: [
      {id: 0, text: '(필수) 만 14세 이상입니다.', isChecked: false},
      {id: 1, text: '(필수) 서비스 이용약관 동의', isChecked: false},
      {id: 2, text: '(필수) 개인정보 처리방침 동의!', isChecked: false},
      {id: 3, text: '(선택) 광고 정보성 동의', isChecked: false},
    ],
    checkBoxStyle: {
      fillColor: 'gray',
      size: 15,
      innerIconStyle: {borderWidth: 2, borderRadius: 0},
      iconStyle: {
        borderRadius: 0,
      },
    },
  },
});

export default bottomSheetState;
