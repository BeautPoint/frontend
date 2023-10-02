import {AppText} from '@/styles/global.style';
import * as S from '@/styles/home/homeHeader.style';
import Notification from '@/assets/icons/bellIcon.svg';
import SearchInput from '@/components/common/searchinput.component';

function HomeHeader() {
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
        <SearchInput />
      </S.BottomBox>
    </S.HeaderLayout>
  );
}

export default HomeHeader;
