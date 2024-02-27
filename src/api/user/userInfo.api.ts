import {UserAPI} from '@/config/api.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const getUserProfile = async () => {
  const acccess_token = await AsyncStorage.getItem('access_token');
  const response = await UserAPI.get('/profile', {
    headers: {
      Authorization: `Bearer ${acccess_token}`,
    },
  });

  console.log('getUserProfile : ', response.data);

  if (!response.data.nickName) {
    throw new Error('회원 불러오기를 실패했습니다.');
  }

  return response.data;
  AsyncStorage.clear();
};

export {getUserProfile};
