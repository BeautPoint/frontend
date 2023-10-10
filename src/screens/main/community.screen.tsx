import CommunityHeader from '@/components/community/header.component';
import CommunityPost from '@/components/community/post.component';
import * as S from '@/styles/screens/community.style';
import WriteIcon from '@/assets/icons/writeIcon.svg';
import CommunityPostDetail from '@/components/community/detail/postdetail.component';
import {NavigationProps} from '@/types/stackprops';

function CommunityScreen({navigation}: NavigationProps['community']) {
  return (
    <S.CommunityLayOut>
      <CommunityHeader />
      <S.ScrollViewBox>
        <CommunityPost navigation={navigation} />
      </S.ScrollViewBox>
      <S.NewPostButton>
        <WriteIcon color="#ffffff" />
      </S.NewPostButton>
    </S.CommunityLayOut>
  );
}

export default CommunityScreen;
