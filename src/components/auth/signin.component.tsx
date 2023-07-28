import {Platform} from 'react-native';
import AppleOauthButton from '@/components/auth/social/appleOauth.component';
import GoogleOauthButton from '@/components/auth/social/googleOauth.component';
import KakaoOauthButton from '@/components/auth/social/kakaoOauth.component';
import NaverOauthButton from '@/components/auth/social/naverOauth.component';
import * as S from '@/styles/auth/signin.style';

function SignIn() {
  return (
    <S.SignInLayOut>
      <KakaoOauthButton />
      <NaverOauthButton />
      {Platform.OS === 'android' ? <GoogleOauthButton /> : <AppleOauthButton />}
    </S.SignInLayOut>
  );
}

export default SignIn;
