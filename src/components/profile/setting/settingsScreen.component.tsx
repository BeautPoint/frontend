import {AppText} from '@/styles/global.style';
import * as S from '@/styles/profile/settingsScreen.style';
import BackIcon from '@/assets/icons/backIcon.svg';
import {NavigationProps} from '@/types/stackprops';
import {useNavigationStateHook} from '@/hooks/navigation/useNavigation.hook';
import {useRecoilValue} from 'recoil';
import settingsState from '@/recoil/settings/settings.recoil';
import {useSettingsHook} from '@/hooks/settings/settings.hook';
import {useAuthHook} from '@/hooks/auth/auth.hook';

function SettingScreen({navigation}: NavigationProps['profile']) {
  const {menuList} = useRecoilValue(settingsState);
  const {changeHeaderTitle} = useNavigationStateHook();
  const {handleSelectMenu} = useSettingsHook();
  const {removeToken} = useAuthHook();

  const handleSettingsItems = (title: string, id: number) => {
    if (title === '로그아웃') {
      removeToken();
      return navigation.reset({routes: [{name: 'Home'}]});
    }

    navigation.navigate('SettingsDetail');
    changeHeaderTitle(title);
    handleSelectMenu(id);
  };

  return (
    <S.SettingsLayout>
      <S.MainContent>
        <S.Header>
          <S.ScreenTitle>
            <AppText size="15px" weight="">
              설정
            </AppText>
          </S.ScreenTitle>
          <S.BackButton onPress={() => navigation.goBack()}>
            <BackIcon />
          </S.BackButton>
        </S.Header>
        <S.SettingsItems>
          <S.Label>
            <AppText color="#42474D" size="12px">
              공지사항
            </AppText>
          </S.Label>
          {menuList.map(item => {
            return (
              <S.ItemButton
                onPress={() => handleSettingsItems(item.name, item.id)}
                key={item.id}>
                <AppText>{item.name}</AppText>
              </S.ItemButton>
            );
          })}
        </S.SettingsItems>
      </S.MainContent>
    </S.SettingsLayout>
  );
}

export default SettingScreen;
