import {useRecoilState} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';
import loginState from '@/recoil/auth/loginInfo.recoil';

export const useAuthHook = () => {
  const [accessToken, setAccessToken] = useState<string | null>();
  const [state, setState] = useRecoilState(loginState);

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
    AsyncStorage.clear();
  };

  const handleLoginModal = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      loginModalOpen: value,
    }));
  };

  return {accessToken, removeToken, handleLoginModal};
};
