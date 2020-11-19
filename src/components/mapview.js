import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import MapView, {
  MAP_TYPES,
  ProviderPropType,
  PROVIDER_GOOGLE,
} from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 200,
      width: 200,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

  class Mapview extends React.Component {
    render() {
      return (
        <MapView
        style = {{flex:1}}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
            latitude: 10.805903799999999,
            longitude: 106.606811399999998,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        }}
        >
        </MapView>
  );
}
}

export default Mapview;