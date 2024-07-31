import * as S from '@/styles/common/navHeader.style';
import BackIcon from '@/assets/icons/backIcon.svg';
import {NavigationProps} from '@/types/stackprops';
import {useRecoilValue} from 'recoil';
import navigationState from '@/recoil/navigation/navigation.recoil';
import {AppText} from '@/styles/global.style';

interface NavHeaderProps {
  navigation: NavigationProps['navigation']['navigation'];
  borderBottom?: string | number;
}

function NavHeader({navigation, borderBottom}: NavHeaderProps) {
  const {headerTitle} = useRecoilValue(navigationState);
  return (
    <S.HeaderLayout borderBottom={borderBottom}>
      <S.MainContent>
        <S.BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </S.BackButton>
        <S.Title>
          <AppText size="15px">{headerTitle}</AppText>
        </S.Title>
      </S.MainContent>
    </S.HeaderLayout>
  );
}

export default NavHeader;
