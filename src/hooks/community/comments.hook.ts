import {usePostCommentQuery} from '@/api/community/comments.api';
import communityState from '@/recoil/community/community.recoil';
import userInfoState from '@/recoil/user/user.recoil';
import {useCallback} from 'react';
import {useRecoilState} from 'recoil';

export const usePostComments = () => {
  const [state, setState] = useRecoilState(communityState);
  const [userState, userSetState] = useRecoilState(userInfoState);
  const {createComments, getComments, deleteComment} = usePostCommentQuery();

  const handleChangeText = useCallback(
    (post_id: string, text: string) => {
      setState(prevState => ({
        ...prevState,
        commentsValue: {
          post_id,
          content: text,
        },
      }));
    },
    [setState],
  );

  const fetchComments = async () => {
    const commentData = await getComments(state.detailPostData.post_id);
    return setState(prevState => ({
      ...prevState,
      postCommentsData: [...commentData],
    }));
  };

  const handleSubmit = () => {
    const {nickName, profile_image} = userState.userProfile;
    setState(prevState => ({
      ...prevState,
      postCommentsData: [
        ...prevState.postCommentsData,
        {
          ...state.commentsValue,
          comment_id: '',
          parent_id: '',
          createdAt: new Date().toISOString(),
          nickName,
          profile_image,
        },
      ],
    }));
    createComments(state.commentsValue);
    handleChangeText('', '');
  };

  const handleSelectComment = (comment_id: string) => {
    setState(prevState => ({
      ...prevState,
      selectedComment: {comment_id},
    }));
  };

  const handleDeleteComment = () => {
    const {comment_id} = state.selectedComment;
    deleteComment(comment_id);
    const updatedData = state.postCommentsData.filter(
      item => item.comment_id !== comment_id,
    );

    setState(prevState => ({
      ...prevState,
      postCommentsData: [...updatedData],
    }));
  };

  return {
    handleChangeText,
    handleSubmit,
    fetchComments,
    handleDeleteComment,
    handleSelectComment,
  };
};
