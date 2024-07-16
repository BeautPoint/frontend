import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProps} from '@/types/stackprops';
import {useEffect, useState} from 'react';
import {AuthAPI} from '@/config/api.config';
import {useRecoilState, useSetRecoilState} from 'recoil';
import navigationState from '@/recoil/navigation/navigation.recoil';
import confirmModalState from '@/recoil/modal/confirm.recoil';
import {useProcessError} from '@/middleware/errorHandler';
import {useAuthHook} from '@/hooks/auth/auth.hook';

export const useAuthQuery = () => {
  const [postData, setPostData] = useState<any>();
  const [state, setState] = useRecoilState(confirmModalState);
  const [navState, setNavState] = useRecoilState(navigationState);
  const {removeToken} = useAuthHook();
  const {handleError} = useProcessError();

  const loginApi = async (loginData: any) => {
    try {
      const data = await AuthAPI.post('/login', loginData);
      setPostData(data.data);
      const {access_token, refresh_token} = data.data;
      console.log('서버 로그인 응답 : ', data.data);

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
      const response = await AuthAPI.post('/signup', signupUserData);
      const {access_token, refresh_token} = response.data;
      await AsyncStorage.setItem('access_token', access_token);
      await AsyncStorage.setItem('refresh_token', refresh_token);
    } catch (err) {
      return err;
    }
  };

  const reissueToken = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem('refresh_token');
      console.log('refreshToken : ', refreshToken);
      const response = await AuthAPI.post('/reissuetoken', {refreshToken});

      const {access_token, refresh_token} = response.data;
      await AsyncStorage.setItem('access_token', access_token);
      await AsyncStorage.setItem('refresh_token', refresh_token);
      return true;
    } catch (err: any) {
      const fallback = {removeToken: () => removeToken()};
      const error = {...err.response.data, fallback};
      await handleError(error);
      console.log('reissue : ', err.response.data);
      return err;
    }
  };

  // const adminLogin = async () => {
  //   const data = await AuthAPI.post('/login', loginData);
  // };

  return {loginApi, postData, signupApi, reissueToken};
};

export const reissueToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('refresh_token');
    console.log('refreshToken : ', refreshToken);
    const response = await AuthAPI.post('/reissuetoken', {refreshToken});

    const {access_token, refresh_token} = response.data;
    await AsyncStorage.setItem('access_token', access_token);
    await AsyncStorage.setItem('refresh_token', refresh_token);
    return true;
  } catch (err: any) {
    console.log('reissue : ', err.response.data);
    return err;
  }
};

export const checkTokenValidity = async () => {
  const acccess_token = await AsyncStorage.getItem('access_token');
  try {
    const token = await AsyncStorage.getItem('access_token');
    const response = await AuthAPI.post(
      '/decodetoken',
      {},
      {
        headers: {
          Authorization: `Bearer ${acccess_token}`,
        },
      },
    );
    return response.data; // 유효하면 true 반환
  } catch (err) {
    console.log('토큰 유효성 검사 실패:', err);
    return false; // 실패하면 false 반환
  }
};
