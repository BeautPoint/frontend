import {AppText} from '@/styles/global.style';
import * as S from '@/styles/profile/settingsDetails.style';

function VersionView() {
  return (
    <S.VerisionViewLayout>
      <S.VersionContent>
        <S.VersionInfo>
          <AppText size="18px">Version</AppText>
        </S.VersionInfo>
        <S.VersionInfo>
          <AppText size="16px">1.2.0</AppText>
        </S.VersionInfo>
      </S.VersionContent>
    </S.VerisionViewLayout>
  );
}

export default VersionView;
