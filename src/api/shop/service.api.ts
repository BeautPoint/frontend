import {useEffect, useState} from 'react';
import {ServerApi} from '@/config/api.config';

export const useFetchService = () => {
  const [serviceInfo, setServiceInfo] = useState<any>([]);
  useEffect(() => {
    const getServiceInfo = async () => {
      try {
        const response = await ServerApi.get('/shop/places', {
          params: {query: '눈썹문신'},
        });
        console.log('샵 목록 :', response.data.data);
        setServiceInfo(response.data.data);
        return response;
      } catch (err) {
        console.log(err);
      }
    };
    getServiceInfo();
  }, []);

  const searchServiceInfo = (searchQuery: string) => {
    ServerApi.get('/shop/places', {
      params: {query: searchQuery},
    });
  };

  return {serviceInfo, searchServiceInfo};
};
