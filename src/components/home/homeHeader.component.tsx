import * as S from '@/styles/home/homeHeader.style';

import {NavigationProps} from '@/types/stackprops';

import HomeSearchInput from './searchInput.component';


function HomeHeader({navigation}: NavigationProps['home']) {
  return (
    <S.HeaderLayout>
      <S.BottomBox>
        <HomeSearchInput navigation={navigation} />
      </S.BottomBox>
    </S.HeaderLayout>
  );
}

export default HomeHeader;
