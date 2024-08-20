import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {
  deletePost,
  getPostById,
  getPostsByKeyword,
  getUserPost,
  updatePost,
} from '@/api/community/post.api';
import {createPost} from '@/api/community/post.api';
import communityState from '@/recoil/community/community.recoil';
import {useRecoilState} from 'recoil';
import {useCallback} from 'react';
import {useAuthQuery} from '@/api/auth/auth.api';

interface Community {
  detailPostData: {
    post_id?: string;
    content?: string;
    nickName?: string;
    title?: string;
    viewCount?: number;
    createdAt?: DateConstructor | string;
    profile_image?: string;
  };
}

export const useCommunityPosts = () => {
  const [state, setState] = useRecoilState(communityState);
  const navigation = useNavigation();
  const {reissueToken} = useAuthQuery();
  /**
   * 좋아요 버튼을 관리하는 로직
   * @param id
   * 인자로 받은 id 값을 recoil로 보내어 상태관리 함
   */
  const likeButtonHandle = (post_id: string) => {
    setState(prevState => ({
      ...prevState,
      likeButton: prevState.likeButton === post_id ? '' : post_id,
    }));
  };

  const fetchUserPosts = async (): Promise<void> => {
    try {
      const userPosts = await getUserPost();
      const sortByDate = userPosts.data?.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );

      setState(prevState => ({
        ...prevState,
        userPosts: [...sortByDate],
      }));
    } catch (err: any) {
      if (err.response?.status === 401) {
        // 토큰이 만료된 경우
        const isTokenReissued = await reissueToken();
        if (isTokenReissued) {
          // 토큰 재발급 성공 시 다시 유저 포스트 요청
          return fetchUserPosts(); // 여기가 수정된 부분입니다.
        }
      } else {
        // 토큰 만료가 아닌 다른 오류 처리
        console.log(err);
      }
    }
  };

  const fetchPostById = async (post_id: string) => {
    const response = await getPostById(post_id);
    return response[0];
  };

  const fetchPostsByKeyword = async (keyword: string) => {
    const data = await getPostsByKeyword(keyword);
    setState(prevState => ({
      ...prevState,
      resultPosts: [...data],
    }));
  };

  const reportButtonHandle = (postId: number) => {
    setState(prev => ({
      ...prev,
      showReportDropdown: postId,
    }));
  };

  const dropdownBackgroundHandle = () => {
    setState(prev => ({
      ...prev,
      showReportDropdown: null,
    }));
  };

  const setPostDetails = (post: Community['detailPostData']) => {
    const {
      post_id,
      content,
      nickName,
      title,
      viewCount,
      createdAt,
      profile_image,
    } = post;
    setState((prev: any) => ({
      ...prev,
      detailPostData: {
        post_id,
        content,
        nickName,
        title,
        viewCount,
        createdAt,
        profile_image,
      },
    }));
  };

  const postCategoryHandle = (
    category: string,
    key: 'postCategory' | 'serviceCategory',
  ) => {};

  const setEditPostData = (postData: any) => {
    return setState(prevState => ({
      ...prevState,
      editPostData: {
        ...prevState.editPostData,
        ...postData,
      },
    }));
  };

  const submitPost = (postData: any, type: 'create' | 'edit') => {
    return type === 'create' ? createPost(postData) : updatePost(postData);
  };

  const handleIsEditMode = (value: boolean) => {
    return setState(prevState => ({
      ...prevState,
      isEditMode: value,
    }));
  };

  const handleIsDetailScreen = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      isDetailScreen: value,
    }));
  };

  const resetScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'community' as never}],
    });
  };

  const handleDeletePost = async () => {
    const {post_id} = state.detailPostData;
    Alert.alert(
      '삭제하기',
      '이 게시물을 정말 삭제 하시겠습니까?',
      [
        {
          text: '삭제',
          onPress: async () => {
            await deletePost(post_id);
            navigation.goBack();
            handleIsDetailScreen(false);
          },
          style: 'destructive',
        },
        {text: '취소', onPress: () => {}, style: 'cancel'},
      ],
      {cancelable: false},
    );
    // const data = await deletePost(post_id);
    // return data;
  };

  const setRefreshing = (value: boolean) => {
    return setState(prevState => ({
      ...prevState,
      refreshing: value,
    }));
  };

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return {
    likeButtonHandle,
    reportButtonHandle,
    dropdownBackgroundHandle,
    setPostDetails,
    postCategoryHandle,
    setEditPostData,
    handleIsEditMode,
    fetchPostsByKeyword,
    submitPost,
    fetchUserPosts,
    fetchPostById,
    handleIsDetailScreen,
    handleDeletePost,
    handleRefresh,
  };
};

