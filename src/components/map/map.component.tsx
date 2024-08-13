import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as S from '@/styles/map/map.style';
import MarkerIcon from '@/assets/icons/marker.svg';
import MapMarkerPNG from '@/assets/icons/marker.png';
import {Image, PermissionsAndroid, Platform, Pressable} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import MyLocationIcon from '@/assets/icons/gpsIcon.svg';
import {useServiceHook} from '@/hooks/service/service.hook';

interface MapComponentProps {
  isSheetOpen: boolean;
  serviceInfo: [
    {
      place_id: string;
      name: string;
      phone: string;
      address: string;
      location: {longitude: number; latitude: number};
      opening_hours: string[];
      open_now: boolean;
      photo?: string;
      rating: number;
      website?: string;
      description?: string;
    },
  ];
  setShowSheet: (value: boolean) => void;
}

function MapComponent({
  isSheetOpen,
  serviceInfo,
  setShowSheet,
}: MapComponentProps) {
  const GangNamgu = {
    latitude: 37.5212304114637,
    longitude: 127.022686095616,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null>(null);
  const {handleShopDetails} = useServiceHook();
  const mapRef = useRef<MapView | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  const handlePressMarker = data => {
    handleShopDetails(data);
    setSelectedMarker(data.place_id);
    setShowSheet(true);
  };

  const handleMapPress = event => {
    const {action} = event.nativeEvent;
    if (action === 'marker-press') {
      return;
    }
    setSelectedMarker(null);
    return setShowSheet(false);
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission denied');
          return;
        }
      }

      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLocation({
            latitude,
            longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
        },
        error => {
          console.error(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    requestLocationPermission();
  }, []);

  const handleMoveToLocation = () => {
    console.log('현재위치 버튼 클릭, 위치: ', location); // 디버깅 로그 추가
    if (location && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          ...location,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
        1000,
      ); // 1초 동안 애니메이션
    } else {
      console.log('location 또는 mapRef가 유효하지 않습니다.');
    }
  };

  return (
    <S.Layout>
      <MapView
        ref={mapRef}
        style={{flex: 1, width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        // customMapStyle={[
        //   {
        //     featureType: 'all',
        //     elementType: 'labels',
        //     stylers: [{visibility: 'off'}],
        //   },
        // ]}
        initialRegion={{
          ...GangNamgu,
        }}
        onPress={handleMapPress}>
        {serviceInfo?.map((item, i) => {
          if (!item?.location) return null;
          return (
            <Marker
              style={{zIndex: 5}}
              key={item?.place_id}
              coordinate={item?.location}
              onPress={() => handlePressMarker(item)}>
              <Image
                source={
                  selectedMarker === item.place_id
                    ? require('@/assets/images/marker2.png')
                    : require('@/assets/images/marker.png')
                }
                style={{
                  height: 30,
                  width: 30,
                }}
              />
              {/* <MarkerIcon width={'25px'} /> */}
            </Marker>
          );
        })}
        {/* <Marker coordinate={GangNamgu} /> */}
      </MapView>
      <Pressable
        style={{
          position: 'absolute',
          backgroundColor: '#ffffff',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          width: 30,
          height: 30,
          top: Platform.OS === 'android' ? 65 : 115,
          right: 20,
          zIndex: 1,
        }}
        onPress={handleMoveToLocation}>
        <MyLocationIcon />
      </Pressable>
    </S.Layout>
  );
}

export default MapComponent;
