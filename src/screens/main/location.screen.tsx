import BottomSheet from '@/components/common/bottomsheet.component';
import MapComponent from '@/components/map/map.component';
import * as S from '@/styles/screens/location.style';
import {NavigationProps} from '@/types/stackprops';
import SearchView from '@/screens/search/searchview.screen';
import {useState} from 'react';
import {Dimensions} from 'react-native';
import MyLocationIcon from '@/assets/icons/gpsIcon.svg';
import SearchInput from '@/components/common/searchinput.component';
import {getPlace, usePlaces} from '@/api/google/gooogleCloud.api';

const {height, width} = Dimensions.get('screen');

function LocationScreen({navigation}: NavigationProps['location']) {
  const [isClick, setIsClick] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const {placesInfo} = usePlaces();
  console.log(placesInfo);

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
        <S.BoxShadow width={width * 0.9}>
          <SearchInput navigation={navigation} screenType={'location'} />
        </S.BoxShadow>
        <S.MyLocation>
          <MyLocationIcon />
        </S.MyLocation>
      </S.SearchInputBox>

      {/* <SearchInput navigation={navigation} /> */}
      {isClick && <SearchView navigation={navigation} />}
      <MapComponent placesInfo={placesInfo} />
      <BottomSheet navigation={navigation} />
      {/* <DraggableBottomSheet /> */}
    </S.LocationLayOut>
  );
}

export default LocationScreen;
