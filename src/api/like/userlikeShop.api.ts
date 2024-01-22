import {UserAPI} from '@/config/api.config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserLikedShops = async () => {
  const acccess_token = await AsyncStorage.getItem('access_token');

  const reponse = await UserAPI.get('/likes', {
    headers: {
      Authorization: `Bearer ${acccess_token}`,
    },
  });

  return reponse.data;
};

export {getUserLikedShops};
