import * as S from '@/styles/community/detail/comments.style';
import {AppText} from '@/styles/global.style';
import ThumbsupIcon from '@/assets/icons/thumbsupIcon.svg';
import SendIcon from '@/assets/icons/sendIcon.svg';
import {usePostComments} from '@/hooks/community/comments.hook';
import {useRecoilValue} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import {usePostCommentQuery} from '@/api/community/comments.api';
import userInfoState from '@/recoil/user/user.recoil';
import DotsIcon from '@/assets/icons/columndotsIcon.svg';
import {dateCalculator} from '@/utils/dateCalculator.util';
import {useActionSheetHook} from '@/hooks/common/actionSheet.hooks';
import {useState} from 'react';
import DefaultProfile from '@/assets/images/defaultProfile.png';

function PostComments() {
  const {handleChangeText, handleSubmit, handleSelectComment} =
    usePostComments();
  const {updateMenuList, openActionSheet} = useActionSheetHook();
  const {detailPostData, userComments, postCommentsData} =
    useRecoilValue(communityState);
  const {userProfile} = useRecoilValue(userInfoState);

  const {getComments} = usePostCommentQuery();
  const onChangeText = (text: string) => {
    handleChangeText(detailPostData.post_id, text);
  };

  const handlePress = (comment_id: string) => {
    updateMenuList('comment');
    handleSelectComment(comment_id);
    openActionSheet(true);
  };
  console.log('userComments', userComments);

  return (
    <S.CommentsLayout>
      <S.Header>
        <S.Label>
          <AppText>댓글</AppText>
        </S.Label>
        <S.Count>
          <AppText>
            {postCommentsData[0] && postCommentsData.length + '개'}
          </AppText>
        </S.Count>
      </S.Header>
      <S.CommentsDetailBox paddingBottom={postCommentsData.length}>
        {postCommentsData[0]?.post_id ? (
          postCommentsData.map(item => {
            const date = new Date(item.createdAt);
            const formattedDate = dateCalculator(date);
            return (
              <S.CommentItem key={item?.comment_id}>
                <S.UserProfile>
                  <S.ProfileImg
                    source={
                      item.profile_image
                        ? {uri: item.profile_image}
                        : DefaultProfile
                    }
                  />
                  <AppText weight="SemiBold" size="12px">
                    {item?.nickName}
                  </AppText>
                </S.UserProfile>
                <S.CreatedAt>
                  <AppText size="12px" color="#c7c7c7">
                    {formattedDate}
                  </AppText>
                </S.CreatedAt>
                <S.CommentBody>
                  <AppText size="13px">{item?.content}</AppText>
                </S.CommentBody>
                {/* <S.ActionButtonBox>
                  <S.LikeButton>
                    <S.ButtonIcon>
                      <ThumbsupIcon color="black" />
                    </S.ButtonIcon>
                    <AppText size="9px">좋아요</AppText>
                  </S.LikeButton>
                  <S.ReplyButton>
                    <AppText size="9px">댓글쓰기</AppText>
                  </S.ReplyButton>
                </S.ActionButtonBox> */}
                {userComments.map(userPost => {
                  if (userPost.comment_id === item.comment_id) {
                    return (
                      <S.DeleteButton
                        key={userPost.comment_id}
                        onPress={() => handlePress(item.comment_id)}>
                        <DotsIcon />
                      </S.DeleteButton>
                    );
                  }
                  return null;
                })}
              </S.CommentItem>
            );
          })
        ) : (
          <S.defaultComment>
            <AppText color="#a5a5a5">등록된 댓글이 없습니다.</AppText>
            <AppText color="#a5a5a5">가장 먼저 댓글을 입력해보세요!</AppText>
          </S.defaultComment>
        )}
      </S.CommentsDetailBox>
    </S.CommentsLayout>
  );
}

export default PostComments;
