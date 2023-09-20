import * as S from '@/styles/community/detail/comments.style';
import {AppText} from '@/styles/global.style';
import ThumbsupIcon from '@/assets/icons/thumbsupIcon.svg';

function PostComments() {
  return (
    <S.CommentsLayout>
      <S.Header>
        <S.Label>
          <AppText>댓글</AppText>
        </S.Label>
        <S.Count>
          <AppText>2개</AppText>
        </S.Count>
      </S.Header>
      <S.CommentsDetailBox>
        <S.UserProfile>
          <S.ProfileImg />
          <AppText size="12px">대머리 공주</AppText>
        </S.UserProfile>
        <S.CommentBody>
          <AppText size="12px">
            양악수술 부작용 많으니 평생 아픔 죽을각오하시고하시구 되도록 비추
          </AppText>
        </S.CommentBody>
        <S.ActionButtonBox>
          <S.LikeButton>
            <S.ButtonIcon>
              <ThumbsupIcon color="black" />
            </S.ButtonIcon>
            <AppText size="9px">좋아요</AppText>
          </S.LikeButton>
          <S.ReplyButton>
            <AppText size="9px">댓글쓰기</AppText>
          </S.ReplyButton>
        </S.ActionButtonBox>
      </S.CommentsDetailBox>
      <S.WriteCommentBox>
        <S.CommentInput placeholder="댓글 작성하기" />
      </S.WriteCommentBox>
    </S.CommentsLayout>
  );
}

export default PostComments;
