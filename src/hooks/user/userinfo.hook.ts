import {useRecoilState, useSetRecoilState} from 'recoil';
import {useState, useEffect} from 'react';
import {getUserProfile} from '@/api/user/userInfo.api';
import userInfoState from '@/recoil/user/user.recoil';
import {processErrorHandler} from '@/middleware/errorHandler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserLikedShops} from '@/api/like/userlikeShop.api';

export const useUserInfoHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const setUserProfile = useSetRecoilState(userInfoState);

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
      const token = await processErrorHandler(err.response.data);

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
      await processErrorHandler(err.response.data);
    }
  };

  return {fetchUserProfile};
};
