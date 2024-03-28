import {reissueToken} from '@/api/auth/auth.api';
import {getUserProfile} from '@/api/user/userInfo.api';

export const processErrorHandler = async (error: any) => {
  const status = error.statusCode;
  if (status === 401) {
    return await reissueToken();
  }
};
