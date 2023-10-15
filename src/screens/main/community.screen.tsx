import CommunityHeader from '@/components/community/header.component';
import CommunityPost from '@/components/community/post.component';
import * as S from '@/styles/screens/community.style';
import WriteIcon from '@/assets/icons/writeIcon.svg';
import {NavigationProps} from '@/types/stackprops';
import {useRecoilValue} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';
import CreatePostScreen from '../community/createPost.scree';

function CommunityScreen({navigation}: NavigationProps['community']) {
  const {showReportDropdown} = useRecoilValue(communityState);
  const {dropdownBackgroundHandle} = useCommunityPosts();
  const showShopDetail = false;
  return (
    <S.CommunityLayOut>
      <CommunityHeader />
      <S.ScrollViewBox>
        <CommunityPost navigation={navigation} />
      </S.ScrollViewBox>
      <S.NewPostButton onPress={() => navigation.navigate('CreatePost')}>
        <WriteIcon color="#ffffff" />
      </S.NewPostButton>
      {showReportDropdown ? (
        <S.ReportDropdownBackground
          onPress={() => dropdownBackgroundHandle()}
        />
      ) : null}
      {showShopDetail && <CreatePostScreen navigation={navigation} />}
    </S.CommunityLayOut>
  );
}

export default CommunityScreen;
