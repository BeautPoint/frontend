import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProps} from '@/types/stackprops';
import {useEffect, useState} from 'react';
import {AuthAPI} from '@/config/api.config';
import {useRecoilState, useSetRecoilState} from 'recoil';
import navigationState from '@/recoil/navigation/navigation.recoil';
import confirmModalState from '@/recoil/modal/confirm.recoil';

export const useAuthQuery = () => {
  const [postData, setPostData] = useState<any>();
  const [state, setState] = useRecoilState(confirmModalState);
  const [navState, setNavState] = useRecoilState(navigationState);
  const loginApi = async (loginData: any) => {
    try {
      const data = await AuthAPI.post('/login', loginData);
      setPostData(data.data);
      const {access_token, refresh_token} = data.data;
      console.log(data.data);

      await AsyncStorage.setItem('access_token', access_token);
      await AsyncStorage.setItem('refresh_token', refresh_token);

      setNavState(prevState => ({
        ...prevState,
        resetToHomeScreen: true,
      }));
      console.log('resetToHomeScreen : ', navState.resetToHomeScreen);
    } catch (err: any) {
      const statusCode = err.response.status;
      console.log('Unknown error:', statusCode);
      if (statusCode === 404) {
        return setState(prevState => ({
          ...prevState,
          modalOpen: true,
        }));
      }
      // return err;
    }
  };

  const signupApi = async (signupUserData: any) => {
    try {
      console.log('유저데이터2 : ', signupUserData);
      await AuthAPI.post('/signup', signupUserData);
    } catch (err) {
      return err;
    }
  };

  return {loginApi, postData, signupApi};
};

const reissueToken = async () => {
  const refreshToken = await AsyncStorage.getItem('refresh_token');
  const response = await AuthAPI.post('/reissuetoken', {refreshToken});
  const {access_token, refresh_token} = response.data;

  await AsyncStorage.setItem('access_token', access_token);
  //AsyncStorage.clear();
  return true;
};

export {reissueToken};
