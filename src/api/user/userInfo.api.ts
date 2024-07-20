import {handleApiError} from './../error/apiErrorHandler';
import {UserAPI} from '@/config/api.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {Alert} from 'react-native';
import {reissueToken} from '../auth/auth.api';

type UserProfile = {
  nickName: string;
  profile_image: string;
  socialType: string;
};

const getUserProfile = async (): Promise<UserProfile | undefined> => {
  try {
    const acccess_token = await AsyncStorage.getItem('access_token');
    const response = await UserAPI.get('/profile', {
      headers: {
        Authorization: `Bearer ${acccess_token}`,
      },
    });
    if (!response.data.nickName) {
      throw new Error('회원 불러오기를 실패했습니다.');
    }
    console.log('유저 프로필 : ', response.data);
    return response.data;
  } catch (err: any) {
    return handleApiError(err, getUserProfile);
  }
};

const editUserProfile = async (imageData: any) => {
  const acccess_token = await AsyncStorage.getItem('access_token');

  const result = await UserAPI.patch('/profile', imageData, {
    headers: {
      Authorization: `Bearer ${acccess_token}`,
    },
  });
  return result.data;
};

const updateProfilePhoto = async (imageData: any) => {
  const acccess_token = await AsyncStorage.getItem('access_token');

  const result = await UserAPI.patch('/profile/photo', imageData, {
    headers: {
      Authorization: `Bearer ${acccess_token}`,
    },
  });
  return result.data;
};

export {getUserProfile, editUserProfile, updateProfilePhoto};

export const useFetchUserProfile = () => {
  const queryClient = useQueryClient();

  // 프로필 데이터를 가져오는 useQuery
  const {
    data: profileData,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['userProfile'], // query key
    queryFn: getUserProfile, // API 호출 함수
    staleTime: 1000 * 60 * 60 * 24 * 7, // 7일 동안 캐시 유지
    gcTime: 1000 * 60 * 60 * 24 * 7,
    retry: false, // 실패 시 자동 재시도 비활성화
    // refetchOnMount: false, // 마운트 시 재요청 방지
    // refetchOnWindowFocus: false,
  });

  // 프로필 업데이트를 위한 useMutation
  const editProfileMutation = useMutation({
    mutationFn: editUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['userProfile']}); // 성공 시 프로필 데이터를 다시 가져옴
    },
    onError: (err: any) => {
      console.error('프로필 수정에 실패했습니다.', err);
    },
  });

  // 프로필 사진 업데이트를 위한 useMutation
  const updateProfilePhotoMutation = useMutation({
    mutationFn: updateProfilePhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['userProfile']}); // 성공 시 프로필 데이터를 다시 가져옴
    },
    onError: (err: any) => {
      console.error('프로필 사진 수정에 실패했습니다.', err);
    },
  });

  return {
    profileData,
    error,
    isLoading,
    refetchProfile: refetch, // 수동으로 다시 데이터를 가져오고 싶을 때 사용
    editProfile: editProfileMutation.mutate, // 프로필 수정 요청
    updateProfilePhoto: updateProfilePhotoMutation.mutate, // 프로필 사진 수정 요청
  };
};
