import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomMarker from '../components/CustomMarker';
import { RootStackParamList } from '../navigation/AppStack';
import { Vehicle } from '../types';
const vehicles: Vehicle[] = require('../source/vehicles.json');

const Map = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {vehicles.map((vehicle, index) => (
          <Marker
            coordinate={{
              latitude: vehicle.latitude,
              longitude: vehicle.longitude,
            }}
            title={vehicle.name}
            description={vehicle.category}
            onPress={() => navigation.navigate('Vehicle', vehicle)}
          >
            <CustomMarker name={vehicle.name} category={vehicle.category} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Map;
