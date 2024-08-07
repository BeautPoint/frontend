import * as S from '@/styles/community/detail/detailHeader.style';
import BackIcon from '@/assets/icons/backIcon.svg';
import {AppText} from '@/styles/global.style';
import {NavigationProps} from '@/types/stackprops';
import HeaderActionButtons from '@/components/community/actionButtons.component';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';

function DetailHeader({navigation}: NavigationProps['community']) {
  const {handleIsDetailScreen, handleIsEditMode, setPostDetails} =
    useCommunityPosts();
  const resetDetailPost = {
    post_id: '',
    content: '',
    nickName: '',
    title: '',
    viewCount: 0,
    createdAt: '',
    profile_image: '',
  };
  const handlePressedGoback = () => {
    navigation.goBack();
    handleIsDetailScreen(false);
    handleIsEditMode(false);
    return setPostDetails(resetDetailPost);
  };
  return (
    <S.DetailHeaderLayout>
      <S.ActionButton onPress={handlePressedGoback}>
        <BackIcon />
      </S.ActionButton>
      <S.HeaderTitle>
        <AppText weight="Bold">게시물</AppText>
      </S.HeaderTitle>
    </S.DetailHeaderLayout>
  );
}

export default DetailHeader;
