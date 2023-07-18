import SearchInput from '@/components/common/input.component';
import MapComponent from '@/components/map/map.component';
import * as S from '@/styles/screens/location.style';

function LocationScreen() {
  return (
    <S.LocationLayOut>
      <SearchInput />
      <MapComponent />
    </S.LocationLayOut>
  );
}

export default LocationScreen;
