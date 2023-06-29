import React from 'react';
import { Text, View } from 'react-native';
import Car from '../assets/icons/Car';
import Moto from '../assets/icons/Moto';
import Truck from '../assets/icons/Truck';
import { Vehicle } from '../types';

type Props = Pick<Vehicle, 'name' | 'category'>;

const CustomMarker = ({ category, name }: Props) => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold' }}>{name}</Text>
      {category === 'car' && <Car />}
      {category === 'moto' && <Moto />}
      {category === 'truck' && <Truck />}
    </View>
  );
};

export default CustomMarker;
