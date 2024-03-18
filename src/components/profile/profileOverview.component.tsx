import {AppText} from '@/styles/global.style';
import * as S from '@/styles/profile/profileOverview';
import SettingIcon from '@/assets/icons/settingIcon.svg';
import NoticeIcon from '@/assets/icons/bellIcon.svg';
import {useRecoilValue} from 'recoil';
import userInfoState from '@/recoil/user/user.recoil';
import Logo from '@/assets/images/logo.png';
import DefaultProfile from '@/assets/images/defaultProfile.png';
import {NavigationProps} from '@/types/stackprops';

function ProfileOverView({navigation}: NavigationProps['profile']) {
  const {userProfile} = useRecoilValue(userInfoState);
  const {nickName, profile_image} = userProfile;

  return (
    <S.UserProfileLayout>
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
      <S.ProfileBox>
        <S.UserPhoto>
          <S.Image
            source={!profile_image ? DefaultProfile : {uri: profile_image}}
          />
        </S.UserPhoto>
        <S.UserName>
          <AppText size="15px">{userProfile.nickName}</AppText>
        </S.UserName>
      </S.ProfileBox>
      <S.EditButtonBox>
        <S.EditButton>
          <AppText>프로필 수정</AppText>
        </S.EditButton>
      </S.EditButtonBox>
    </S.UserProfileLayout>
  );
}

export default ProfileOverView;
