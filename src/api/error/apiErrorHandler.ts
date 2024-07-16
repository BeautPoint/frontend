import {reissueToken} from '@/api/auth/auth.api';

export const handleApiError = async (
  err: any,
  retryCallback: () => Promise<any>,
): Promise<any> => {
  const response = err?.response || {};
  const message =
    response?.data?.message || err.message || 'Unknown error occurred';

  console.log('유저 handleApiError :', message);
  console.log('유저 handleApiError :', err?.response.status);

  if (err.response?.status === 401) {
    console.log('401 에러,');
    const isTokenReissued = await reissueToken();
    if (isTokenReissued) {
      // 토큰 재발급 성공 시 다시 요청
      return retryCallback(); // 다시 시도할 콜백 함수 호출
    }
  }

  // 다른 에러는 그대로 반환
  return Promise.reject(err);
};
