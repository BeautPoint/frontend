import CommunityHeader from '@/components/community/header.component';
import CommunityPost from '@/components/community/post.component';
import * as S from '@/styles/screens/community.style';
import WriteIcon from '@/assets/icons/writeIcon.svg';
import CommunityPostDetail from '@/components/community/detail/postdetail.component';
import {NavigationProps} from '@/types/stackprops';
import DropDown from '@/components/common/dropdown.component';
import {useRecoilValue} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';

function CommunityScreen({navigation}: NavigationProps['community']) {
  const {showReportDropdown} = useRecoilValue(communityState);
  const {dropdownBackgroundHandle} = useCommunityPosts();
  return (
    <S.CommunityLayOut>
      <CommunityHeader />
      <S.ScrollViewBox>
        <CommunityPost navigation={navigation} />
      </S.ScrollViewBox>
      <S.NewPostButton>
        <WriteIcon color="#ffffff" />
      </S.NewPostButton>
      {showReportDropdown ? (
        <S.ReportDropdownBackground
          onPress={() => dropdownBackgroundHandle()}
        />
      ) : null}
    </S.CommunityLayOut>
  );
}

export default CommunityScreen;
