import * as S from '@/styles/community/post.style';
import {AppText} from '@/styles/global.style';
import DotsIcon from '@/assets/icons/dotsIcon.svg';

function CommunityPost() {
  return (
    <S.PostLayout>
      <S.TopBox>
        <S.ProfileImage />
        <S.UserInfo>
          <S.UserName>
            <AppText>닮은살걀</AppText>
          </S.UserName>
          <S.PostStats>
            <S.CreatedAt>
              <AppText size="12px">3분 전</AppText>
            </S.CreatedAt>
            <S.Views>
              <AppText size="12px">조회수 123</AppText>
            </S.Views>
          </S.PostStats>
        </S.UserInfo>
        <S.PostSetButton>
          <DotsIcon color="#B6B9BF" />
        </S.PostSetButton>
      </S.TopBox>
      <S.MainBox>
        <S.PostTitle>
          <AppText size="16px" weight="SemiBold">
            두피문신 질문
          </AppText>
        </S.PostTitle>
        <S.PostBody>
          <AppText color="#484B56A6">
            두피 딱지 생기거나 부작용으로 고생하신 분 있으신가요? 딱지때매ㅜ 넘
            고생이네요,,
          </AppText>
        </S.PostBody>
        <S.TagBox>
          <S.PostTag>
            <AppText color="#BABFC4" size="12px">
              궁금증
            </AppText>
          </S.PostTag>
          <S.PostTag>
            <AppText color="#BABFC4" size="12px">
              SMP 두피
            </AppText>
          </S.PostTag>
        </S.TagBox>
      </S.MainBox>
      <S.BottomBox>
        <S.ActionButton>
          <AppText>좋아요</AppText>
        </S.ActionButton>
        <S.DividerLine />
        <S.ActionButton>
          <AppText>댓글</AppText>
        </S.ActionButton>
      </S.BottomBox>
    </S.PostLayout>
  );
}

export default CommunityPost;
