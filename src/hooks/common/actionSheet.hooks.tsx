import actionSheetState from '@/recoil/modal/actionSheet.recoil';
import {leanchSelectImage} from '@/utils/launchImage.util';
import {useSetRecoilState} from 'recoil';
import {useCommunityPosts} from '../community/communityPosts.hook';
import {useUserInfoHook} from '../user/userinfo.hook';

export const useActionSheetHook = () => {
  const setActionSheet = useSetRecoilState(actionSheetState);
  const {changeProfilePhoto, changeDefaultprofilePhoto} = useUserInfoHook();
  const {handleIsEditMode} = useCommunityPosts();
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

    if (menuType === 'report') {
      menuItems = [
        {
          id: 9,
          title: '신고하기',
          pressEvent: () => console.log('삭제'),
        },
        {id: 0, title: '취소', pressEvent: null},
      ];
    }

    if (menuType === 'post') {
      menuItems = [
        {
          id: 1,
          title: '게시물 수정하기',
          pressEvent: () => handleIsEditMode(true),
        },
        {
          id: 2,
          title: '게시물 삭제하기',
          pressEvent: () => console.log('삭제'),
        },
        {id: 0, title: '취소', pressEvent: null},
      ];
    }

    return setActionSheet(prevState => ({
      ...prevState,
      menuList: menuItems,
    }));
  };

  return {updateMenuList, handleMenuSelection, openActionSheet};
};
