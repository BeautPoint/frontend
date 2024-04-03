import ConfirmForm from '@/components/auth/confirmform.component';
import SingIn from '@/components/auth/signin.component';
import BottomUpModal from '@/components/modals/bottomup.component';
import confirmModalState from '@/recoil/modal/confirm.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/screens/login.style';
import {NavigationProps} from '@/types/stackprops';
import {useState} from 'react';
import {Pressable, Text} from 'react-native';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import AppLogo from '@/assets/images/logo.png';
import loginState from '@/recoil/auth/loginInfo.recoil';

function LoginScreen({navigation}: NavigationProps['signup']) {
  const {loginScreenWelcomeTexts} = useRecoilValue(loginState);
  const handleGuestAccess = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  const showScreen = false;
  return (
    <S.LoginScreenLayout>
      {/* {showScreen ? <ConfirmForm navigation={navigation} /> : null} */}
      <S.DescriptionBox>
        {loginScreenWelcomeTexts.map(item => {
          return (
            <S.Description key={item.id}>
              <AppText size="21px">{item.text}</AppText>
            </S.Description>
          );
        })}
        {/* <Pressable onPress={() => modalHandle()}>
          <Text>테스트 중</Text>
        </Pressable> */}
      </S.DescriptionBox>
      <S.ImageBox>
        <S.Image source={AppLogo} resizeMode="contain" />
      </S.ImageBox>
      <S.ButtonBox>
        <SingIn navigation={navigation} />
        <S.GuestAccessButton onPress={() => handleGuestAccess()}>
          <AppText color="#787878">비회원으로 둘러보기</AppText>
        </S.GuestAccessButton>
      </S.ButtonBox>
    </S.LoginScreenLayout>
  );
}

export default LoginScreen;
