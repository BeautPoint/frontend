import {Platform, Pressable, View} from 'react-native';
import AppleOauthButton from '@/components/auth/social/appleOauth.component';
import GoogleOauthButton from '@/components/auth/social/googleOauth.component';
import KakaoOauthButton from '@/components/auth/social/kakaoOauth.component';
import NaverOauthButton from '@/components/auth/social/naverOauth.component';
import * as S from '@/styles/auth/signin.style';
import {AppText} from '@/styles/global.style';
import {useNaverOauth} from '@/hooks/auth/oauth.hooks';
import {NavigationProps} from '@/types/stackprops';
import {useRecoilValue} from 'recoil';
import navigationState from '@/recoil/navigation/navigation.recoil';

function SignIn({navigation}: NavigationProps['signup']) {
  const {logout} = useNaverOauth();
  const {singupScreen, resetToHomeScreen} = useRecoilValue(navigationState);
  console.log(singupScreen);
  singupScreen ? navigation.navigate('SignUp') : null;
  resetToHomeScreen ? navigation.reset({routes: [{name: 'Home'}]}) : null;
  return (
    <S.SignInLayOut>
      <KakaoOauthButton navigation={navigation} />
      <NaverOauthButton navigation={navigation} />
      {/* <Pressable onPress={() => logout()}>
        <AppText>로그아웃</AppText>
      </Pressable> */}
      {Platform.OS === 'android' ? (
        <GoogleOauthButton navigation={navigation} />
      ) : (
        <AppleOauthButton />
      )}
    </S.SignInLayOut>
  );
}

export default SignIn;
