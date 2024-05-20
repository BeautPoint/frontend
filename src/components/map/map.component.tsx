import {useBottomSheetHook} from '@/hooks/shop/bottomsheet.hook';
import {useShopService} from '@/hooks/shop/shopService.hook';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as S from '@/styles/map/map.style';

function MapComponent({placesInfo}) {
  const GangNamgu = {
    latitude: 37.5212304114637,
    longitude: 127.022686095616,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  console.log('지도 : ', placesInfo);

  const {handleShopDetails} = useShopService();
  const {openBottomSheet} = useBottomSheetHook();

  const handlePressMarker = data => {
    handleShopDetails(data);
    openBottomSheet(true);
  };

  const handleMapPress = event => {
    const {action} = event.nativeEvent;
    if (action === 'marker-press') {
      return;
    }
    return openBottomSheet(false);
  };
  return (
    <S.Layout>
      <MapView
        style={{flex: 1, width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        customMapStyle={[
          {
            featureType: 'poi.business',
            stylers: [{visibility: 'off'}],
          },
        ]}
        initialRegion={{
          ...GangNamgu,
        }}
        onPress={handleMapPress}>
        {placesInfo?.map((item, i) => {
          console.log(item);
          return (
            <Marker
              style={{zIndex: 5}}
              key={i}
              coordinate={item?.location}
              onPress={() => handlePressMarker(item)}
            />
          );
        })}
        {/* <Marker coordinate={GangNamgu} onPress={() => cons} /> */}
      </MapView>
    </S.Layout>
  );
}

export default MapComponent;
