import * as S from '@/styles/community/userinfo.style';
import {AppText} from '@/styles/global.style';
import DotsIcon from '@/assets/icons/columndotsIcon.svg';
import DropDown from '@/components/common/dropdown.component';
import {useRecoilValue} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';

function CommunityUserInfo({postId, nickname, viewCount}) {
  const {showReportDropdown} = useRecoilValue(communityState);
  const {reportButtonHandle} = useCommunityPosts();
  return (
    <S.UserInfoLayout>
      <S.ProfileImage />
      <S.InfoBox>
        <S.UserName>
          <AppText>{nickname}</AppText>
        </S.UserName>
        <S.PostStats>
          <S.CreatedAt>
            <AppText size="12px">3분 전</AppText>
          </S.CreatedAt>
          <S.Views>
            <AppText size="12px">조회수 {viewCount}</AppText>
          </S.Views>
        </S.PostStats>
      </S.InfoBox>
      <S.ReportButton onPress={() => reportButtonHandle(postId)}>
        <DotsIcon />
      </S.ReportButton>
      {showReportDropdown === postId ? (
        <S.ReportDropdown>
          <DropDown dropDownHeight={'60px'} />
        </S.ReportDropdown>
      ) : null}
    </S.UserInfoLayout>
  );
}

export default CommunityUserInfo;
