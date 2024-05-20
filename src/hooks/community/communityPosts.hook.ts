import {getPostById, updatePost} from './../../api/community/post.api';
import {createPost} from '@/api/community/post.api';
import communityState from '@/recoil/community/community.recoil';
import {useRecoilState, useRecoilValue} from 'recoil';

export const useCommunityPosts = () => {
  const [state, setState] = useRecoilState(communityState);
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

  const fetchUserPosts = async () => {
    const data = await getPostById();
    setState(prevState => ({
      ...prevState,
      userPosts: [...data],
    }));

    return;
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

  const detailPostData = post => {
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
      detailPostApi: {
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
  ) => {
    console.log('받아옴 : ' + category, key);
    setState(prev => {
      const isTagIncluded = prev.selectedPostCategory[key].some(
        item => item === category,
      );
      const updatedSelectedTags = isTagIncluded
        ? prev.selectedPostCategory[key].filter(item => item !== category)
        : {
            ...prev.selectedPostCategory[key],
            [key]: [...prev.selectedPostCategory[key], category],
          };
      console.log(updatedSelectedTags);
      /** tag 상태 값이 없는경우 버튼 비활성화 */
      return {
        ...prev,
        selectedPostCategory: updatedSelectedTags,
      };
    });
  };

  const postInputHandle = (
    data: string,
    key: 'title' | 'content' | 'postCategory' | 'serviceCategory',
  ) => {
    console.log(state.selectedPostCategory);
    setState(prev => ({
      ...prev,
      createPostData: {
        ...prev.createPostData,
        [key]: data,
      },
    }));
  };

  const editTextInput = (
    post_id: string,
    data: string,
    key: 'title' | 'content',
  ) => {
    console.log(state.editPostData);
    setState(prevState => ({
      ...prevState,
      editPostData: {...prevState.editPostData, [key]: data},
    }));
  };

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
    console.log('submitPost : ', postData);
    return type === 'create' ? createPost(postData) : updatePost(postData);
  };

  const handleIsEditMode = (value: boolean) => {
    return setState(prevState => ({
      ...prevState,
      isEditMode: value,
    }));
  };

  const handleIsDetailScreen = (value: boolean) => {
    console.log('handleIsDetailScreen : ', value);
    setState(prevState => ({
      ...prevState,
      isDetailScreen: value,
    }));
  };

  return {
    likeButtonHandle,
    reportButtonHandle,
    dropdownBackgroundHandle,
    detailPostData,
    postCategoryHandle,
    postInputHandle,
    editTextInput,
    setEditPostData,
    handleIsEditMode,
    submitPost,
    fetchUserPosts,
    handleIsDetailScreen,
  };
};
