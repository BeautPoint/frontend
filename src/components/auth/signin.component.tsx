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
import {useEffect} from 'react';

function SignIn({navigation}: NavigationProps['signup']) {
  const {logout} = useNaverOauth();
  const {singupScreen, resetToHomeScreen} = useRecoilValue(navigationState);
  const developMode = __DEV__;
  console.log(singupScreen);
  useEffect(() => {
    if (singupScreen) {
      navigation.navigate('Signup');
    }
  }, [singupScreen, navigation]);

  useEffect(() => {
    if (resetToHomeScreen) {
      navigation.reset({routes: [{name: 'Home'}]});
    }
  }, [resetToHomeScreen, navigation]);
  return (
    <S.SignInLayOut>
      <View style={{marginBottom: 10}}>
        <KakaoOauthButton navigation={navigation} />
      </View>
      {/* 네이버 검수 문제로 잠시 보류. */}
      {developMode && (
        <View style={{marginBottom: 10}}>
          <NaverOauthButton navigation={navigation} />
        </View>
      )}
      {/* <Pressable onPress={() => logout()}>
        <AppText>로그아웃</AppText>
      </Pressable> */}
      <View style={{marginBottom: 10}}>
        {Platform.OS === 'android' ? (
          <GoogleOauthButton navigation={navigation} />
        ) : (
          <AppleOauthButton />
        )}
      </View>
    </S.SignInLayOut>
  );
}

export default SignIn;
