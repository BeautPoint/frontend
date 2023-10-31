import {useEffect, useState} from 'react';
import {PostAPI} from '@/config/api.config';

export const useCommunityQuery = () => {
  const [postData, setPostData] = useState<any>();
  useEffect(() => {
    const getPost = async () => {
      try {
        const {data} = await PostAPI.get('', {
          headers: {
            Accept: 'application/json',
            'content-Type': 'application/json',
          },
        });
        setPostData(data.data);
      } catch (err) {
        return err;
      }
    };
    getPost();
  }, []);

  return {postData};
};
