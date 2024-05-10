import NavHeader from '@/components/common/navHeader.component';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/profile/editProfile.style';
import {NavigationProps} from '@/types/stackprops';
import DatePicker from 'react-native-date-picker';
import DownIcon from '@/assets/icons/downIcon.svg';
import {useState} from 'react';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import DefaultProfile from '@/assets/images/defaultProfile.png';
import userInfoState from '@/recoil/user/user.recoil';
import {useRecoilValue} from 'recoil';
import EditIcon from '@/assets/icons/pencelIcon.svg';
import {useUserInfoHook} from '@/hooks/user/userinfo.hook';
import ActionSheet from '@/components/common/actionSheet.component';
import {useActionSheetHook} from '@/hooks/common/actionSheet.hooks';

function EditProfile({navigation}: NavigationProps['profile']) {
  const {updateMenuList, openActionSheet} = useActionSheetHook();
  const handleSelectImage = () => {
    updateMenuList('image');
    openActionSheet(true);
  };
  const defaultBirth = new Date(2001, 1, 1);
  const mokdata = [
    {id: 0, value: '2000'},
    {id: 1, value: '12'},
    {id: 2, value: '04'},
  ];
  const mokdata2 = [
    {id: 0, value: '여자'},
    {id: 1, value: '남자'},
  ];

  const select = '여자';
  const {userProfile} = useRecoilValue(userInfoState);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <S.EditProfileLayout>
      <S.Header>
        <NavHeader navigation={navigation} />
      </S.Header>
      <S.MainContent>
        <S.ImageSection>
          <S.SelectImageButton onPress={() => handleSelectImage()}>
            <S.ProfilePhoto
              source={
                !userProfile?.profile_image
                  ? DefaultProfile
                  : {uri: userProfile?.profile_image}
              }
            />
            <S.Icon>
              <S.BoxShadow />
              <EditIcon />
            </S.Icon>
          </S.SelectImageButton>
        </S.ImageSection>
        <S.EditItem>
          <S.Label>
            <AppText>닉네임</AppText>
          </S.Label>
          <S.TextInput defaultValue="닉네임입니다" />
        </S.EditItem>
        <S.EditItem>
          <S.Label>
            <AppText>생년월일</AppText>
          </S.Label>
          <S.DateBox>
            {mokdata.map(item => {
              return (
                <S.birthDateButton
                  key={item.id}
                  onPress={() => setIsOpen(true)}>
                  <AppText color={'#5a6068'}>{item.value}</AppText>
                  <DownIcon />
                </S.birthDateButton>
              );
            })}
          </S.DateBox>
        </S.EditItem>
        <S.EditItem>
          <S.Label>
            <AppText>성별</AppText>
          </S.Label>
          <S.GenderBox>
            {mokdata2.map(item => {
              const color = select === item.value ? '#619BFF' : 'none';
              const weight = select === item.value ? 'SemiBold' : '';
              return (
                <S.GenderButton key={item.id} border={color}>
                  <AppText color={color} weight={weight}>
                    {item.value}
                  </AppText>
                </S.GenderButton>
              );
            })}
          </S.GenderBox>
        </S.EditItem>
      </S.MainContent>
      <DatePicker
        modal
        mode={'date'}
        date={defaultBirth}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
      />
    </S.EditProfileLayout>
  );
}

export default EditProfile;
