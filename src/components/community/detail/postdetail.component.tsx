import * as S from '@/styles/community/postdetail.style';
import CommunityUserInfo from '@/components/community/userinfo.component';
import {AppText} from '@/styles/global.style';
import PostComments from './comments.component';
import DetailHeader from '@/components/community/detail/detailHeader.component';
import {NavigationProps} from '@/types/stackprops';

function CommunityPostDetail({navigation}: NavigationProps['community']) {
  return (
    <S.DetailLayout>
      <DetailHeader navigation={navigation} />
      <S.PostMainSection>
        <CommunityUserInfo />
        <S.MainBox>
          <S.PostTitle>
            <AppText weight="SemiBold" size="18px">
              제목이다.
            </AppText>
          </S.PostTitle>
          <S.PostBody>
            <AppText>
              자연스럽게 하는 곳 아시는 분 있나요? 아시는 분 있으면
              소개부탁드릴게요 서울/경기 지역 입니다:)
            </AppText>
          </S.PostBody>
        </S.MainBox>
      </S.PostMainSection>
      <PostComments />
    </S.DetailLayout>
  );
}

export default CommunityPostDetail;
