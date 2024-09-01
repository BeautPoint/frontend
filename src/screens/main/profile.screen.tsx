import * as S from '@/styles/screens/profile.style';
import {NavigationProps} from '@/types/stackprops';
import ContentOverView from '@/components/profile/contentOverview.component';
import ProfileOverView from '@/components/profile/profileOverview.component';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import SettingsDetails from '@/components/profile/setting/settingsDetail.component';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';
import {usePostCommentQuery} from '@/api/community/comments.api';
import {useFetchUserProfile} from '@/api/user/userInfo.api';

function ProfileScreen({navigation}: NavigationProps['profile']) {
  const {fetchUserPosts} = useCommunityPosts();
  const {getUserComments} = usePostCommentQuery();
  const {profileData} = useFetchUserProfile();

  useFocusEffect(
    useCallback(() => {
      fetchUserPosts();
      getUserComments();
    }, []),
  );
  const showScreen = false;

  return (
    <S.ProfileLayOut>
      <ProfileOverView navigation={navigation} profileData={profileData} />
      <ContentOverView navigation={navigation} />
      {showScreen && <SettingsDetails navigation={navigation} />}
    </S.ProfileLayOut>
  );
}

export default ProfileScreen;
