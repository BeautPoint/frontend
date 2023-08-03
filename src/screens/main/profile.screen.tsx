import * as S from '@/styles/screens/profile.style';
import {Pressable, Text} from 'react-native';
import {NavigationProps} from '@/types/stackprops';

function ProfileScreen({navigation}: NavigationProps['login']) {
  return (
    <S.ProfileLayOut>
      <S.TitleText>My Page</S.TitleText>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text>로그인</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text>가입하기</Text>
      </Pressable>
    </S.ProfileLayOut>
  );
}

export default ProfileScreen;
