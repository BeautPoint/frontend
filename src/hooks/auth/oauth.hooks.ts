import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {login, getProfile} from '@react-native-seoul/kakao-login';
import NaverLogin from '@react-native-seoul/naver-login';
import Config from 'react-native-config';

{
  /* 예외처리 메세지 조금 더 구체화 할 것 */
}

export const useGoogleOauth = () => {
  const [userInfo, setUserInfo] = useState<{}>({});
  const onPressGoogleBtn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {user} = await GoogleSignin.signIn();
      const {email, name, photo} = user;
      setUserInfo({email, name, photo});
    } catch (err: any) {
      Alert.alert('로그인에 실패 하였습니다.');
    }
  };

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  return {onPressGoogleBtn, userInfo};
};

export const useKakaoOauth = () => {
  const [userInfo, setUserInfo] = useState<{}>({});
  const onPressKakaoBtn = async () => {
    try {
      await login();
      const {email, nickname, profileImageUrl} = await getProfile();
      setUserInfo({email, nickname, profileImageUrl});
    } catch (err: any) {
      Alert.alert('로그인에 실패 하였습니다.');
    }
  };

  return {onPressKakaoBtn, userInfo};
};

export const useNaverOauth = () => {
  const [userInfo, setUserInfo] = useState<{}>({});

  const consumerKey = Config.NAVER_APP_KEY!;
  const consumerSecret = Config.NAVER_SECRET!;
  const appName = Config.APP_NAME!;
  const serviceUrlScheme = Config.URL_SCHEME!;

  const logout = async () => {
    try {
      await NaverLogin.logout();
      await NaverLogin.deleteToken();
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  const naverLogin = async () => {
    try {
      const {successResponse} = await NaverLogin.login({
        appName,
        consumerKey,
        consumerSecret,
        serviceUrlScheme,
      });
      const {response} = await NaverLogin.getProfile(
        successResponse!.accessToken,
      );

      const {email, id, nickname, profile_image} = response;
      setUserInfo({email, id, nickname, profile_image});
    } catch (err) {
      Alert.alert('로그인에 실패했습니다.');
    }
  };

  const onPressNaverBtn = async () => {
    try {
      await naverLogin();
      const {email, nickname, profileImageUrl} = await getProfile();
      setUserInfo({email, nickname, profileImageUrl});
    } catch (err: any) {
      console.log(err);
      Alert.alert('로그인에 실패 하였습니다.');
    }
  };

  return {onPressNaverBtn, userInfo, logout};
};
