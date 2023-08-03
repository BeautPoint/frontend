import SingIn from '@/components/auth/signin.component';
import BottomUpModal from '@/components/modals/bottomup.component';
import confirmModalState from '@/recoil/modal/confirm.recoil';
import * as S from '@/styles/screens/auth.style';
import {useState} from 'react';
import {Pressable, Text} from 'react-native';
import {useSetRecoilState} from 'recoil';

function LoginScreen() {
  const [isPress, setIsPress] = useState(false);
  const setConfirmModal = useSetRecoilState(confirmModalState);
  const modalHandle = () => {
    setConfirmModal(prev => ({
      ...prev,
      modalOpen: true,
    }));
  };
  return (
    <S.AuthLayOut>
      <S.DescriptionBox>
        <S.Description>내 주변 반영구 시술샵,</S.Description>
        <S.Description>이젠 정확하고 빠르게!</S.Description>
        <S.Description>OO에 오신걸 환영합니다.</S.Description>
        <Pressable onPress={() => modalHandle()}>
          <Text>테스트 중</Text>
        </Pressable>
      </S.DescriptionBox>
      <S.ButtonBox>
        <SingIn />
      </S.ButtonBox>
    </S.AuthLayOut>
  );
}

export default LoginScreen;
