import {NavigationProps} from './../../types/stackprops';
import {useRecoilState, useSetRecoilState} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';
import loginState from '@/recoil/auth/loginInfo.recoil';
import {useHomeScreenHooks} from '../home/home.hook';
import {useNavigation} from '@react-navigation/native';
import signupState from '@/recoil/auth/signupInfoForm.recoil';

export const useAuthHook = () => {
  const navigation = useNavigation();
  const [accessToken, setAccessToken] = useState<string | null>();
  const [state, setState] = useRecoilState(loginState);
  const {handleHomeScreenNavReset} = useHomeScreenHooks();
  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const token = await AsyncStorage.getItem('access_token');
        setAccessToken(token);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAccessToken();
  }, []);

  const removeToken = async () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login' as never}], // 원하는 초기 화면으로 설정
    });
    return await AsyncStorage.clear();
  };

  const handleLoginModal = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      loginModalOpen: value,
    }));
  };

  return {accessToken, setAccessToken, removeToken, handleLoginModal};
};
