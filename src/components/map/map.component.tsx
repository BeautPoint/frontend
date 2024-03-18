import {useShopService} from '@/hooks/shop/shopService.hook';
import {View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

function MapComponent({placesInfo}) {
  const GangNamgu = {
    latitude: 37.5212304114637,
    longitude: 127.022686095616,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  console.log('지도 : ', placesInfo);

  const {handleShopDetails} = useShopService();

  return (
    <View
      style={{
        flex: 1,
      }}>
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
        }}>
        {/* <MapMarker /> */}
        {placesInfo?.map((item, i) => {
          console.log(item);
          return (
            <Marker
              key={i}
              coordinate={item?.location}
              onPress={() => handleShopDetails(item)}
            />
          );
        })}
        {/* <Marker coordinate={GangNamgu} onPress={() => cons} /> */}
      </MapView>
    </View>
  );
}

export default MapComponent;
