import {useRecoilValue} from 'recoil';
import {useEffect, useState} from 'react';
import {PostAPI, ServerApi} from '@/config/api.config';
import shopState from '@/recoil/shop/shop.recoil';

export const useShopReviewQuery = () => {
  const [responseData, setResponseData] = useState<any>();
  const {detailReviewData, briefReviewData} = useRecoilValue(shopState);
  const createShopReview = async (url: 'brief' | 'detail') => {
    const requestData = url === 'brief' ? briefReviewData : detailReviewData;
    console.log(briefReviewData);
    try {
      const {data} = await ServerApi.post(`/shop/${url}`, {requestData});
      console.log(data);
      setResponseData(data);
    } catch (err) {
      return err;
    }
  };

  return {createShopReview, responseData};
};
