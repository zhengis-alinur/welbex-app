import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import Text from '../components/AppText';
import { MAP_DELTA } from '../constants';
import { Vehicle } from '../types';
import CustomMarker from './CustomMarker';

const VehicleMapWrapper = styled.View`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 30px;
`;

type Props = {
  vehicle: Vehicle;
};

const VehicleMap = ({ vehicle }: Props) => {
  return (
    <>
      <Text weight={'bold'} size={15}>
        Near Rental Map
      </Text>
      <VehicleMapWrapper>
        <MapView
          style={StyleSheet.absoluteFill}
          initialRegion={{
            latitude: vehicle.latitude,
            longitude: vehicle.longitude,
            latitudeDelta: MAP_DELTA,
            longitudeDelta: MAP_DELTA,
          }}
        >
          <CustomMarker vehicle={vehicle} />
        </MapView>
      </VehicleMapWrapper>
    </>
  );
};

export default VehicleMap;
