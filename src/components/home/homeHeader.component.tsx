import {AppText} from '@/styles/global.style';
import * as S from '@/styles/home/homeHeader.style';
import Notification from '@/assets/icons/bellIcon.svg';
import SearchInput from '@/components/common/searchinput.component';
import {NavigationProps} from '@/types/stackprops';

function HomeHeader({navigation}: NavigationProps['home']) {
  const searchHandle = () => {
    navigation.navigate('HomeSearch');
  };

  return (
    <S.HeaderLayout>
      <S.TopBox>
        <S.LogoIcon>
          <AppText size="22px">Logo</AppText>
        </S.LogoIcon>
        <S.NotificationButton>
          <Notification color="black" width="17px" />
        </S.NotificationButton>
      </S.TopBox>
      <S.BottomBox>
        <S.SearchBox onPress={() => searchHandle()}>
          <SearchInput navigation={navigation} />
        </S.SearchBox>
      </S.BottomBox>
    </S.HeaderLayout>
  );
}

export default HomeHeader;
