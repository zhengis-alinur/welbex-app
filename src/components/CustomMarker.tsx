import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import Car from '../assets/icons/Car';
import Moto from '../assets/icons/Moto';
import Truck from '../assets/icons/Truck';
import { Vehicle } from '../types';
import { RootStackParamList } from '../navigation/AppStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { VEHICLE_SCREEN } from '../constants';

type Props = {
  vehicle: Vehicle;
};

const CustomMarker = ({ vehicle }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Marker
      coordinate={{
        latitude: vehicle.latitude,
        longitude: vehicle.longitude,
      }}
      title={vehicle.name}
      description={vehicle.category}
      onPress={() => navigation.navigate(VEHICLE_SCREEN, vehicle)}
    >
      <View>
        <Text style={{ fontWeight: 'bold' }}>{vehicle.name}</Text>
        {vehicle.category === 'car' && <Car />}
        {vehicle.category === 'moto' && <Moto />}
        {vehicle.category === 'truck' && <Truck />}
      </View>
    </Marker>
  );
};

export default CustomMarker;
