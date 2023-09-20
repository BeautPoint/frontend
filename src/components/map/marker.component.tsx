import MapView, {Marker} from 'react-native-maps';

function MapMarker() {
  return (
    <MapView region={this.state.region} onRegionChange={this.onRegionChange}>
      {this.state.markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
  );
}

export default MapMarker;
