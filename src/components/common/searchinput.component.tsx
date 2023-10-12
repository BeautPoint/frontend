import * as S from '@/styles/common/searchinput.style';
import SearchIcon from '@/assets/icons/searchIcon.svg';
import {useState} from 'react';
import {NavigationProps} from '@/types/stackprops';
import MyLocationIcon from '@/assets/icons/gpsIcon.svg';
import {AppText} from '@/styles/global.style';

function SearchInput() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverIn = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  return (
    <S.SearchButton onPressIn={handleHoverIn} onPressOut={handleHoverOut}>
      <S.IconBox>
        <SearchIcon color={isHovered ? '#cacaca' : '#337EFF'} />
      </S.IconBox>
      <AppText color={isHovered ? '#cacaca' : '#8C939C'}>
        관심있는 시술 부위, 병원을 검색해보세요!
      </AppText>
    </S.SearchButton>
  );
}

{
  /* <S.MyLocation>
        <MyLocationIcon />
      </S.MyLocation>
    </S.InputLayout> */
}

export default SearchInput;
