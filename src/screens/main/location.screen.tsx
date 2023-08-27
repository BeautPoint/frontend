import BottomSheet from '@/components/common/bottomsheet.component';
import MapComponent from '@/components/map/map.component';
import * as S from '@/styles/screens/location.style';
import {NavigationProps} from '@/types/stackprops';
import SearchView from '@/screens/search/searchview.screen';
import {useState} from 'react';
import {AppText} from '@/styles/global.style';
import SearchIcon from '@/assets/icons/searchIcon.svg';
import {Dimensions} from 'react-native';
import {useDragAnimation} from '@/hooks/common/draganimation.hook';
import MyLocationIcon from '@/assets/icons/gpsIcon.svg';

const {height} = Dimensions.get('screen');

function LocationScreen({navigation}: NavigationProps['location']) {
  const [isClick, setIsClick] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverIn = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const focushandle = () => {
    navigation.navigate('Search');
  };

  const heights = height * 0.25;

  return (
    <S.LocationLayOut>
      <S.SearchInputBox>
        <S.BoxShadow>
          <S.SearchButton
            onPressIn={handleHoverIn}
            onPressOut={handleHoverOut}
            onPress={focushandle}>
            <S.IconBox>
              <SearchIcon color={isHovered ? '#cacaca' : '#337EFF'} />
            </S.IconBox>
            <AppText color={isHovered ? '#cacaca' : '#8C939C'}>
              관심있는 시술 부위, 병원을 검색해보세요!
            </AppText>
          </S.SearchButton>
        </S.BoxShadow>
        <S.MyLocation>
          <MyLocationIcon />
        </S.MyLocation>
      </S.SearchInputBox>

      {/* <SearchInput navigation={navigation} /> */}
      {isClick && <SearchView navigation={navigation} />}
      <MapComponent />
      <BottomSheet navigation={navigation} />
    </S.LocationLayOut>
  );
}

export default LocationScreen;
