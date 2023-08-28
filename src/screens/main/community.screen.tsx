import CommunityHeader from '@/components/community/header.component';
import CommunityPost from '@/components/community/post.component';
import * as S from '@/styles/screens/community.style';
import WriteIcon from '@/assets/icons/writeIcon.svg';

function CommunityScreen() {
  return (
    <S.CommunityLayOut>
      <CommunityHeader />
      <S.ScrollViewBox>
        <CommunityPost />
        <CommunityPost />
        <CommunityPost />
      </S.ScrollViewBox>
      <S.NewPostButton>
        <WriteIcon color="#ffffff" />
      </S.NewPostButton>
    </S.CommunityLayOut>
  );
}

export default CommunityScreen;
