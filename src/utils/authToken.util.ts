import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkToken = async () => {
  return await AsyncStorage.getItem('access_token');
};
