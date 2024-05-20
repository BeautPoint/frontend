import {getUserProfile} from '@/api/user/userInfo.api';
import {useAuthHook} from '@/hooks/auth/auth.hook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProps} from '@/types/stackprops';

export const useProcessError = () => {
  const handleError = async (err: any) => {
    const status = err.statusCode;
    const message = err.message;
    const fallback = err.fallback;

    if (status === 401) {
      const reissueSuccess = await fallback.reissueToken();
      console.log('reissueSuccess : ', reissueSuccess);
      console.log('fallback : ', fallback);
      return reissueSuccess;
    }

    if (message === 'refreshToken is not found') {
      console.log('fallback : ', fallback);
      const removeSuccess = fallback.removeToken();
      console.log('removeSuccess : ', removeSuccess);
      return removeSuccess;
    }

    return;
  };

  return {handleError};
};
