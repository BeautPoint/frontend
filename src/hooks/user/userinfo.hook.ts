import {useProcessError} from './../../middleware/errorHandler';
import {useSetRecoilState} from 'recoil';
import {useState} from 'react';
import {
  editUserProfile,
  getUserProfile,
  updateProfilePhoto,
} from '@/api/user/userInfo.api';
import userInfoState from '@/recoil/user/user.recoil';
import {getUserLikedShops} from '@/api/like/userlikeShop.api';
import {useAuthQuery} from '@/api/auth/auth.api';

export const useUserInfoHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const setUserProfile = useSetRecoilState(userInfoState);
  const {reissueToken} = useAuthQuery();
  const {handleError} = useProcessError();

  const fetchUserProfile = async () => {
    setLoading(true);
    try {
      const profile = await getUserProfile();
      const {nickName, profile_image, socialType} = profile;
      setUserProfile(prevState => ({
        ...prevState,
        userProfile: {
          nickName,
          profile_image,
          socialType,
        },
      }));

      console.log('profile : ', nickName, profile_image);
    } catch (err: any) {
      const fallback = {reissueToken: () => reissueToken()};
      const error = {...err.response.data, fallback};
      const token = await handleError(error);
      console.log('token : :', token);
      if (token) {
        return await getUserProfile();
      }

      console.log('유저 에러 :', err.response.data);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserLikedShops = async () => {
    try {
      const likedShops = await getUserLikedShops;
    } catch (err: any) {
      await handleError(err.response.data);
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

  return {
    fetchUserProfile,
    changeProfilePhoto,
    changeDefaultprofilePhoto,
    updatedUserProfile,
  };
};
