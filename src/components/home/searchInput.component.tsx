import * as S from '@/styles/common/searchinput.style';
import SearchIcon from '@/assets/icons/searchIcon.svg';
import {useState} from 'react';
import {NavigationProps} from '@/types/stackprops';
import {AppText} from '@/styles/global.style';
import {useSearchHook} from '@/hooks/search/useSearch.hook';

function HomeSearchInput({navigation}: NavigationProps['home' | 'location']) {
  const [isHovered, setIsHovered] = useState(false);
  const {setNavLocation} = useSearchHook();

  const handleHoverIn = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const searchHandle = () => {
    setNavLocation('home');
    navigation.navigate('HomeSearch');
  };

  return (
    <S.SearchButton
      onPressIn={handleHoverIn}
      onPressOut={handleHoverOut}
      onPress={searchHandle}>
      <S.IconBox>
        <SearchIcon color={isHovered ? '#cacaca' : '#337EFF'} />
      </S.IconBox>
      <AppText color={isHovered ? '#cacaca' : '#8C939C'}>
        관심있는 시술 부위, 병원을 검색해보세요!
      </AppText>
    </S.SearchButton>
  );
}

export default HomeSearchInput;
