import {useRecoilState} from 'recoil';
import {PostAPI} from '@/config/api.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import communityState from '@/recoil/community/community.recoil';

export const usePostCommentQuery = () => {
  const [state, setState] = useRecoilState(communityState);
  const createComments = async (commentData: any) => {
    const acccess_token = await AsyncStorage.getItem('access_token');
    try {
      const response = await PostAPI.post('/comment', commentData, {
        headers: {
          Authorization: `Bearer ${acccess_token}`,
        },
      });

      return response.data;
    } catch (err: any) {
      console.log(err.response.data);
    }
  };

  const getComments = async (post_id: string) => {
    try {
      //   const post_id = state.detailPostData.post_id;

      const response = await PostAPI.get(`${post_id}/comments`);

      setState(prevState => ({
        ...prevState,
        postCommentsData: [...response.data],
      }));

      return response.data;
    } catch (err: any) {
      console.log(err.response.data);
    }
  };

  const getUserComments = async () => {
    const acccess_token = await AsyncStorage.getItem('access_token');
    try {
      const response = await PostAPI.get(`/comments/user`, {
        headers: {
          Authorization: `Bearer ${acccess_token}`,
        },
      });
      const sortByDate = response.data?.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );

      setState(prevState => ({
        ...prevState,
        userComments: [...sortByDate],
      }));

      return response.data;
    } catch (err: any) {}
  };

  const deleteComment = async (commentId: string) => {
    const acccess_token = await AsyncStorage.getItem('access_token');
    try {
      const response = await PostAPI.delete(`comment/${commentId}`, {
        headers: {
          Authorization: `Bearer ${acccess_token}`,
        },
      });

      return response.data;
    } catch (err: any) {}
  };

  return {createComments, getComments, getUserComments, deleteComment};
};
