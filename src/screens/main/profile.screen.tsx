import * as S from '@/styles/screens/profile.style';
import {NavigationProps} from '@/types/stackprops';
import ContentOverView from '@/components/profile/contentOverview.component';
import ProfileOverView from '@/components/profile/profileOverview.component';
import {useUserInfoHook} from '@/hooks/user/userinfo.hook';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import SettingsDetails from '@/components/profile/setting/settingsDetail.component';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';

function ProfileScreen({navigation}: NavigationProps['profile']) {
  const {fetchUserProfile} = useUserInfoHook();
  const {fetchUserPosts} = useCommunityPosts();
  useFocusEffect(
    useCallback(() => {
      fetchUserProfile();
      fetchUserPosts();
      return;
    }, []),
  );

  const showScreen = false;

  return (
    <S.ProfileLayOut>
      <ProfileOverView navigation={navigation} />
      <ContentOverView navigation={navigation} />
      {showScreen && <SettingsDetails navigation={navigation} />}
    </S.ProfileLayOut>
  );
}

export default ProfileScreen;
