import confirmModalState from '@/recoil/modal/confirm.recoil';
import * as S from '@/styles/screens/home.style';
import {Pressable, Text} from 'react-native';
import {useSetRecoilState} from 'recoil';
import SearchView from '../search/searchview.screen';

function HomeScreen() {
  const setConfirmModal = useSetRecoilState(confirmModalState);
  const modalHandle = () => {
    setConfirmModal(prev => ({
      ...prev,
      modalOpen: true,
    }));
  };
  return (
    <S.HomeLayOut>
      {/* <DropDown /> */}
      {/* <Pressable onPress={() => modalHandle()}>
        <Text>버튼</Text>
      </Pressable> */}
    </S.HomeLayOut>
  );
}

export default HomeScreen;
