import {handleApiError} from './../error/apiErrorHandler';
import {reissueToken} from './../auth/auth.api';
import {UserAPI} from '@/config/api.config';
import WishListState from '@/recoil/wishlist/wishlist.recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {getTodayOpeningHours} from '@/utils/openingHours.util';
import {extractAddress} from '@/utils/validateShop.util';

// Likes 데이터를 서버로부터 받아오는 API 호출 함수

const fetchLikes = async (): Promise<any[]> => {
  const access_token = await AsyncStorage.getItem('access_token');
  try {
    const response = await UserAPI.get('/likes', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response && response.data) {
      console.log('fetchLikes : ', response.data);
      const likesData = response.data.map((item: any) => {
        const todayOpeningHours = getTodayOpeningHours(item.opening_hours);
        const address = extractAddress(item.address);
        return {
          place_id: item.place_id,
          name: item.name,
          images: item.images,
          cateogory: item.category,
          todayOpeningHours,
          open_now: item.open_now,
          address,
        };
      });
      return likesData;
    }
    return [];
  } catch (err: any) {
    return handleApiError(err, fetchLikes);
  }
};

// Like 추가하는 API 호출 함수
const addLikeAPI = async (placeInfo: {
  place_id: string;
  category: string;
}): Promise<any> => {
  try {
    console.log('addLikeAPI 호출됨');
    const access_token = await AsyncStorage.getItem('access_token');
    const body = {
      place_id: `bp_${placeInfo.place_id}`,
      category: placeInfo.category,
    };
    console.log('addLikeAPI : ', body);
    const response = await UserAPI.post('/likes', body, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    if (response && response.data) {
      console.log('데이터 검증 : ', response.data);
      return response.data;
    } else {
      console.log('Response is undefined or data is missing.');
      return {success: false, message: 'No data received from the server'}; // 적절한 에러 메시지 반환
    }
  } catch (err: any) {
    return handleApiError(err, () => addLikeAPI(placeInfo));
  }
};

// Like 삭제하는 API 호출 함수
const removeLikeAPI = async (place_id: string): Promise<any> => {
  try {
    const access_token = await AsyncStorage.getItem('access_token');
    const placeId = `bp_${place_id}`;

    console.log('찜하기 해제 : ', placeId);
    const result = await UserAPI.delete(`/likes/${placeId}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return result?.data;
  } catch (err: any) {
    return handleApiError(err, () => removeLikeAPI(place_id));
  }
};

// React Query를 사용한 좋아요 관련 커스텀 Hook
export const useFetchLikes = () => {
  const queryClient = useQueryClient();
  // 좋아요 리스트를 가져오는 useQuery
  const {
    data: likeData,
    isLoading,
    refetch,
    error,
  } = useQuery<any[], Error>({
    queryKey: ['likes'], // query key
    queryFn: fetchLikes, // 데이터를 패칭하는 함수
    staleTime: 1000 * 60 * 60 * 24 * 7, // 1주일 동안 데이터를 fresh 상태로 유지
    gcTime: 1000 * 60 * 60 * 24 * 7, // 캐시도 1주일 동안 유지
  });

  // 좋아요 추가하는 useMutation
  const {mutate: addLike} = useMutation({
    mutationFn: addLikeAPI,
    onMutate: async (placeInfo: {place_id: string; category: string}) => {
      await queryClient.cancelQueries({queryKey: ['likes']});

      const previousLikes = queryClient.getQueryData(['likes'] || []);
      queryClient.setQueryData(['likes'], (old: any) => [
        ...old,
        {
          place_id: placeInfo.place_id,
          name: 'New Place',
          images: [],
          category: placeInfo.category,
        }, // Optimistic update
      ]);

      return {previousLikes};
    },
    onError: (err, place_id, context) => {
      console.log('에러 발생: ', err.message);
      // queryClient.setQueryData(['likes'], context?.previousLikes || []);
    },
    onSettled: () => {
      // 데이터가 성공/실패 관계없이 서버에서 다시 패칭하여 캐시 갱신
      queryClient.invalidateQueries({queryKey: ['likes']});
    },
  });

  // 좋아요 해제하는 useMutation
  const {mutate: removeLike} = useMutation({
    mutationFn: removeLikeAPI,
    onMutate: async (place_id: string) => {
      await queryClient.cancelQueries({queryKey: ['likes']});

      const previousLikes = queryClient.getQueryData(['likes'] || []);
      queryClient.setQueryData(['likes'], (old: any) =>
        old.filter((item: any) => item.place_id !== place_id),
      );

      return {previousLikes};
    },
    onError: (err, place_id, context) => {
      console.log('에러 발생: ', err.message);
      queryClient.setQueryData(['likes'], context?.previousLikes || []);
    },
    onSettled: () => {
      // 데이터가 성공/실패 관계없이 서버에서 다시 패칭하여 캐시 갱신
      queryClient.invalidateQueries({queryKey: ['likes']});
    },
  });

  return {
    likeData,
    isLoading,
    error,
    addLike,
    refetch,
    removeLike,
  };
};
