import NavHeader from '@/components/common/navHeader.component';
import settingsState from '@/recoil/settings/settings.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/profile/settingsDetails.style';
import {NavigationProps} from '@/types/stackprops';
import {useRecoilValue} from 'recoil';
import VersionView from './versionView.component';

function SettingsDetails({navigation}: NavigationProps['profile']) {
  const {selectedMenu} = useRecoilValue(settingsState);

  return (
    <S.SettingsDetailsLayout>
      <NavHeader navigation={navigation} />
      {selectedMenu.id === 0 && null}
      {selectedMenu.id === 1 && null}
      {selectedMenu.id === 2 && <VersionView />}
    </S.SettingsDetailsLayout>
  );
}

export default SettingsDetails;
