import {randomString} from '@/utils/randomString.util';
import {atom} from 'recoil';

const actionSheetState = atom({
  key: `actionSheetState/${randomString()}`,

  default: {
    /**
     * actionSheet의 Menu default 값 지정
     * - id가 0인 Menu는 취소 pressble
     * - id가 2인 Menu는 삭제 pressble - 폰트 빨강
     */
    menuList: [{id: 0, title: '취소', pressEvent: () => console.log('실행')}],
    isOpen: false,
    isPressedMenu: null as number | null,
    imageMenu: [
      {id: 1, title: '앨범에서 선택하기'},
      {id: 2, title: '프로필 사진 삭제'},
      {id: 0, title: '취소'},
    ],
    postMenu: [
      {id: 1, title: '게시물 수정'},
      {id: 2, title: '게시물 삭제'},
      {id: 0, title: '취소'},
    ],
  },
});

export default actionSheetState;
