import communityState from '@/recoil/community/community.recoil';
import {useRecoilState, useRecoilValue} from 'recoil';

export const useCommunityPosts = () => {
  const [state, setState] = useRecoilState(communityState);
  /**
   * 좋아요 버튼을 관리하는 로직
   * @param id
   * 인자로 받은 id 값을 recoil로 보내어 상태관리 함
   */
  const likeButtonHandle = (id: number) => {
    setState(prev => ({
      ...prev,
      likeButton: state.likeButton === id ? '' : id,
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

  const detailPostData = (
    id: number,
    description: string,
    nickname: string,
    title: string,
    viewCount: number,
  ) => {
    setState(prev => ({
      ...prev,
      detailPostApi: {
        id,
        description,
        nickname,
        title,
        viewCount,
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
    key: 'title' | 'description' | 'postCategory' | 'serviceCategory',
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

  return {
    likeButtonHandle,
    reportButtonHandle,
    dropdownBackgroundHandle,
    detailPostData,
    postCategoryHandle,
    postInputHandle,
  };
};
