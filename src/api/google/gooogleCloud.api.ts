import axios from 'axios';
import {GOOGLE_PLACE_KEY, GOOGLE_PLACE_URL} from '@env';
import {useState} from 'react';
import {useQuery} from '@tanstack/react-query';

export const getPlace = async () => {
  //   const [places, setPlaces] = useState<[]>();
  const placeUrl = GOOGLE_PLACE_URL;
  const apiKey = GOOGLE_PLACE_KEY;

  const response = await axios.get(placeUrl, {
    params: {
      query: '눈썹문신',
      key: apiKey,
      language: 'ko',
    },
  });

  // response.data.results?.map((item: any) => {
  //   console.log(item.name);
  // });

  return response.data.results;
};

export const usePlaces = () => {
  const {data} = useQuery({
    queryKey: ['places'],
    queryFn: getPlace,
    // gcTime: 7 * 24 * 60 * 60 * 1000, // 7일
    refetchOnWindowFocus: false, // 창 포커스 시 데이터를 다시 가져오지 않음
  });
  const location = data?.map((item: any) => {
    const {lat, lng} = item.geometry.location;
    return {longitude: lng, latitude: lat};
  });

  const placesInfo = data?.map((item: any) => {
    const {formatted_address, name, photos} = item;
    const {lat, lng} = item.geometry.location;
    const photo = photos?.[0].photo_reference;
    return {
      formatted_address,
      name,
      photo,
      location: {longitude: lng, latitude: lat},
    };
  });
  // console.log('위치 : ', location);
  return {placesInfo};
};

// place_id, formatted_address
