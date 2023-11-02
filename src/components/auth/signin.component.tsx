import {Platform, Pressable, View} from 'react-native';
import AppleOauthButton from '@/components/auth/social/appleOauth.component';
import GoogleOauthButton from '@/components/auth/social/googleOauth.component';
import KakaoOauthButton from '@/components/auth/social/kakaoOauth.component';
import NaverOauthButton from '@/components/auth/social/naverOauth.component';
import * as S from '@/styles/auth/signin.style';
import {AppText} from '@/styles/global.style';
import {useNaverOauth} from '@/hooks/auth/oauth.hooks';

function SignIn() {
  const {logout} = useNaverOauth();
  return (
    <S.SignInLayOut>
      <KakaoOauthButton />
      <NaverOauthButton />
      <Pressable onPress={() => logout()}>
        <AppText>로그아웃</AppText>
      </Pressable>
      {Platform.OS === 'android' ? <GoogleOauthButton /> : <AppleOauthButton />}
    </S.SignInLayOut>
  );
}

export default SignIn;
