import actionSheetState from '@/recoil/modal/actionSheet.recoil';
import {leanchSelectImage} from '@/utils/launchImage.util';
import {useSetRecoilState} from 'recoil';
import {useUserInfoHook} from '../user/userinfo.hook';

export const useActionSheetHook = () => {
  const setActionSheet = useSetRecoilState(actionSheetState);
  const {changeProfilePhoto, changeDefaultprofilePhoto} = useUserInfoHook();
  const updateMenuList = (menuType: string) => {
    let menuItems: any;
    if (menuType === 'image') {
      menuItems = [
        {
          id: 1,
          title: '앨범에서 선택하기',
          pressEvent: () => leanchSelectImage(changeProfilePhoto),
        },
        {
          id: 2,
          title: '프로필 사진 삭제',
          pressEvent: () => changeDefaultprofilePhoto(),
        },
        {id: 0, title: '취소', pressEvent: null},
      ];
    }

    setActionSheet(prevState => ({
      ...prevState,
      menuList: menuItems,
    }));
  };

  const handleMenuSelection = (id: number | null) => {
    return setActionSheet(prevState => ({
      ...prevState,
      isPressedMenu: id,
    }));
  };

  const openActionSheet = (isOpen: boolean) => {
    setActionSheet(prevState => ({
      ...prevState,
      isOpen,
    }));
  };

  return {updateMenuList, handleMenuSelection, openActionSheet};
};
