import * as S from '@/styles/community/userinfo.style';
import {AppText} from '@/styles/global.style';
import DotsIcon from '@/assets/icons/columndotsIcon.svg';
import DropDown from '@/components/common/dropdown.component';
import {useRecoilValue} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';
import DefaultProfile from '@/assets/images/defaultProfile.png';
import {dateCalculator} from '@/utils/dateCalculator.util';
import {useActionSheetHook} from '@/hooks/common/actionSheet.hooks';

function CommunityUserInfo({
  postId,
  nickname,
  viewCount,
  profileImage,
  createdAt,
}) {
  const {userPosts, isDetailScreen} = useRecoilValue(communityState);
  const {updateMenuList, openActionSheet} = useActionSheetHook();
  const {reportButtonHandle} = useCommunityPosts();
  const formattedDate = dateCalculator(createdAt);

  const handleEditPost = (postId: string) => {
    const selectedPost = userPosts.filter(item => {
      return item.post_id === postId;
    });

    selectedPost[0] ? updateMenuList('post') : updateMenuList('report');
    openActionSheet(true);
  };
  return (
    <S.UserInfoLayout>
      <S.ProfilePhoto
        source={profileImage ? {uri: profileImage} : DefaultProfile}
      />
      <S.InfoBox>
        <S.UserName>
          <AppText>{nickname}</AppText>
        </S.UserName>
        <S.PostStats>
          <S.CreatedAt>
            <AppText size="12px">{formattedDate}</AppText>
          </S.CreatedAt>
          <S.Views>
            <AppText size="12px">조회수 {viewCount}</AppText>
          </S.Views>
        </S.PostStats>
      </S.InfoBox>
      {isDetailScreen && (
        <S.EditPostButton onPress={() => handleEditPost(postId)}>
          <DotsIcon />
        </S.EditPostButton>
      )}
    </S.UserInfoLayout>
  );
}

export default CommunityUserInfo;
