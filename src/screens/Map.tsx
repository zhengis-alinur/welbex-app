import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import CustomMarker from '../components/CustomMarker';
import { INITIAL_REGION } from '../constants';
import { Vehicle } from '../types';
const vehicles: Vehicle[] = require('../source/vehicles.json');

const Map = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView style={StyleSheet.absoluteFill} initialRegion={INITIAL_REGION}>
        {vehicles.map((vehicle) => (
          <CustomMarker vehicle={vehicle} key={vehicle.id} />
        ))}
      </MapView>
    </View>
  );
};

export default Map;
