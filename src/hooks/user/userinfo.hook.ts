import {useProcessError} from './../../middleware/errorHandler';
import {useSetRecoilState} from 'recoil';
import {useState} from 'react';
import {
  editUserProfile,
  getUserProfile,
  updateProfilePhoto,
} from '@/api/user/userInfo.api';
import userInfoState from '@/recoil/user/user.recoil';

import {checkTokenValidity, useAuthQuery} from '@/api/auth/auth.api';

export const useUserInfoHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const setUserProfile = useSetRecoilState(userInfoState);
  const {reissueToken} = useAuthQuery();
  const {handleError} = useProcessError();

  const fetchUserProfile = async (): Promise<void | Error> => {
    setLoading(true);
    try {
      const profile = await getUserProfile();
      console.log('profile :::', profile);
      const {nickName, profile_image, socialType} = profile;
      setUserProfile(prevState => ({
        ...prevState,
        userProfile: {
          nickName,
          profile_image,
          socialType,
        },
      }));
    } catch (err: any) {
      // const fallback = {reissueToken: () => reissueToken()};
      // const error = {...err.response.data, fallback};
      // const token = await handleError(error);
      // console.log('token : :', token);
      // if (token) {
      //   return await getUserProfile();
      // }
      const response = err?.response || {};
      const message =
        response?.data?.message || err.message || 'Unknown error occurred';

      console.log('유저 에러 :', message);
      // const message = err.response.data.message;
      if (message === 'Invalid token.') {
        const isTokenReissued = await reissueToken();
        if (isTokenReissued) {
          // 토큰 재발급 성공 시 다시 프로필 요청
          return fetchUserProfile();
        }
      }

      return err;
    } finally {
      setLoading(false);
    }
  };

  const updatedUserProfile = (data: any) => {
    try {
    } catch {}
  };

  const changeDefaultprofilePhoto = async () => {
    setUserProfile(prevState => ({
      ...prevState,
      userProfile: {...prevState.userProfile, profile_image: ''},
    }));
    const imageData = {profile_image: null};
    try {
      const result = await editUserProfile(imageData);
      console.log(result);
    } catch (err: any) {
      console.log('유저 에러 :', err.response.data);
    }
  };

  const changeProfilePhoto = async (imageData: any) => {
    const formData = new FormData();
    setUserProfile(prevState => ({
      ...prevState,
      userProfile: {...prevState.userProfile, profile_image: imageData.uri},
    }));
    formData.append('imageFile', imageData);
    console.log('imageData hook : ', formData);
    try {
      const result = await updateProfilePhoto(formData);
      console.log(result);
    } catch (err: any) {
      console.log('유저 에러 :', err.response.data);
    }
  };

  const handleActiveTab = (id: number) => {
    setUserProfile(prevState => ({
      ...prevState,
      activeTab: id,
    }));
  };

  return {
    fetchUserProfile,
    changeProfilePhoto,
    changeDefaultprofilePhoto,
    updatedUserProfile,
    handleActiveTab,
  };
};
