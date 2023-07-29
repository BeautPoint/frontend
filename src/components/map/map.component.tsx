import {View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

function MapComponent() {
  const GangNamgu = {
    latitude: 37.5212304114637,
    longitude: 127.022686095616,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <MapView
        style={{width: '100%', height: '100%'}}
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
        <Marker coordinate={GangNamgu} />
      </MapView>
    </View>
  );
}

export default MapComponent;
