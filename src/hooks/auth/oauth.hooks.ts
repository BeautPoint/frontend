import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useState, useEffect} from 'react';
import {Alert} from 'react-native';

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
