import {useEffect, useState} from 'react';
import {PostAPI} from '@/config/api.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery} from '@tanstack/react-query';
import {Alert} from 'react-native';

export const useCommunityQuery = () => {
  const [postData, setPostData] = useState<any>();

  const getPost = async () => {
    try {
      const {data} = await PostAPI.get('', {
        headers: {
          Accept: 'application/json',
          'content-Type': 'application/json',
        },
      });
      const sortByDate = data?.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );

      setPostData(sortByDate);
    } catch (err) {
      return err;
    }
  };

  return {postData, getPost};
};

export const createPost = async (postData: any) => {
  const acccess_token = await AsyncStorage.getItem('access_token');
  try {
    const response = await PostAPI.post('', postData, {
      headers: {
        Authorization: `Bearer ${acccess_token}`,
      },
    });
    console.log('createPost : ', response.data);
    return response.data;
  } catch (err: any) {
    console.log(err.response.data);
  }
};

export const updatePost = async postData => {
  const acccess_token = await AsyncStorage.getItem('access_token');
  try {
    const params = postData.post_id;
    const response = await PostAPI.patch(`/${params}`, postData, {
      headers: {
        Authorization: `Bearer ${acccess_token}`,
      },
    });
    console.log('createPost : ', response.data);
    return response.data;
  } catch (err: any) {
    console.log(err.response.data);
  }
};

export const getPostById = async () => {
  const acccess_token = await AsyncStorage.getItem('access_token');
  try {
    const response = await PostAPI.get('/my', {
      headers: {
        Authorization: `Bearer ${acccess_token}`,
      },
    });
    // useQuery({queryKey: ['userPosts']});
    return response.data;
  } catch (err: any) {
    console.log(err.response.data);
  }
};

export const deletePost = async (postId: string) => {
  const acccess_token = await AsyncStorage.getItem('access_token');
  try {
    const response = await PostAPI.delete(`/${postId}`, {
      headers: {
        Authorization: `Bearer ${acccess_token}`,
      },
    });

    return response.data;
  } catch (err: any) {
    console.log(err.response.data);

    return Alert.alert('요청을 실패하였습니다. 다시 시도해주세요.');
  }
};
