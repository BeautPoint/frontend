import {AppText} from '@/styles/global.style';
import * as S from '@/styles/profile/profileOverview';
import SettingIcon from '@/assets/icons/settingIcon.svg';
import NoticeIcon from '@/assets/icons/bellIcon.svg';
import {useRecoilValue} from 'recoil';
import userInfoState from '@/recoil/user/user.recoil';
import DefaultProfile from '@/assets/images/defaultProfile.png';
import {NavigationProps} from '@/types/stackprops';
import {useNavigationStateHook} from '@/hooks/navigation/useNavigation.hook';
import {SafeAreaView, View} from 'react-native';

interface ProfileOverViewProps {
  navigation: NavigationProps['profile']['navigation'];
  profileData?: {nickName: string; profile_image: string; socialType: string};
}

function ProfileOverView({navigation, profileData}: ProfileOverViewProps) {
  const {userProfile} = useRecoilValue(userInfoState);
  const {nickName, profile_image} = userProfile;
  const {changeHeaderTitle} = useNavigationStateHook();

  const handleProfileEdit = () => {
    navigation.navigate('EditProfile');
    changeHeaderTitle('프로필 수정');
  };

  return (
    <S.UserProfileLayout>
      <SafeAreaView>
        <S.ProfileHeader>
          <S.PageTitle>
            <AppText weight="Medium" size="16px">
              마이페이지
            </AppText>
          </S.PageTitle>
          {/* <S.NotificationsButton>
          <NoticeIcon />
        </S.NotificationsButton> */}
          <S.SettingsButton onPress={() => navigation.navigate('SettingView')}>
            <SettingIcon />
          </S.SettingsButton>
        </S.ProfileHeader>
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          height: '100%',
          justifyContent: 'space-between',
        }}>
        <S.ProfileBox>
          <S.UserPhoto>
            <S.Image
              source={
                !profileData?.profile_image
                  ? DefaultProfile
                  : {uri: profileData?.profile_image}
              }
            />
          </S.UserPhoto>
          <S.UserName>
            <AppText size="15px">{profileData?.nickName}</AppText>
          </S.UserName>
        </S.ProfileBox>
        <S.EditButtonBox>
          <S.EditButton onPress={() => handleProfileEdit()}>
            <AppText>프로필 수정</AppText>
          </S.EditButton>
        </S.EditButtonBox>
      </View>
    </S.UserProfileLayout>
  );
}

export default ProfileOverView;
