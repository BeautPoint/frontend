import {Platform} from 'react-native';
import AppleOauthButton from '@/components/auth/appleOauth.component';
import GoogleOauthButton from '@/components/auth/googleOauth.component';
import KakaoOauthButton from '@/components/auth/kakaoOauth.component';
import NaverOauthButton from '@/components/auth/naverOauth.component';
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
