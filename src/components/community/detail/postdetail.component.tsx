import * as S from '@/styles/community/postdetail.style';
import CommunityUserInfo from '@/components/community/userinfo.component';
import {AppText} from '@/styles/global.style';
import PostComments from './comments.component';
import DetailHeader from '@/components/community/detail/detailHeader.component';
import {NavigationProps} from '@/types/stackprops';
import {useRecoilValue} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import {ReportDropdownBackground} from '@/styles/screens/community.style';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';

function CommunityPostDetail({navigation}: NavigationProps['community']) {
  const {detailPostApi, showReportDropdown} = useRecoilValue(communityState);
  const {dropdownBackgroundHandle} = useCommunityPosts();
  return (
    <S.DetailLayout>
      <DetailHeader navigation={navigation} />
      <S.PostMainSection>
        <CommunityUserInfo
          postId={detailPostApi?.id}
          nickname={detailPostApi?.nickname}
          viewCount={detailPostApi?.viewCount}
        />
        <S.MainBox>
          <S.PostTitle>
            <AppText weight="SemiBold" size="18px">
              {detailPostApi?.title}
            </AppText>
          </S.PostTitle>
          <S.PostBody>
            <AppText>{detailPostApi?.description}</AppText>
          </S.PostBody>
        </S.MainBox>
      </S.PostMainSection>
      <PostComments />
      {showReportDropdown ? (
        <ReportDropdownBackground onPress={() => dropdownBackgroundHandle()} />
      ) : null}
    </S.DetailLayout>
  );
}

export default CommunityPostDetail;
