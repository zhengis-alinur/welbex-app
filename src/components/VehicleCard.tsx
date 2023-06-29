import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import Text from './AppText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppStack';
import { Vehicle } from '../types';
import { CATEGORIES_MAP, VEHICLE_SCREEN } from '../constants';

const IMAGE_DIMENSIONS = { width: 130, height: 75 };
const GRID_IMAGE_DIMENSIONS = { width: 170, height: 100 };

type Props = { vehicle: Vehicle; gridView?: boolean };

const VehicleCard = ({ vehicle, gridView }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  console.log(gridView);
  return (
    <TouchableOpacity onPress={() => navigation.navigate(VEHICLE_SCREEN, vehicle)}>
      <View style={gridView ? styles.grid : styles.wrapper}>
        <Image
          style={gridView ? GRID_IMAGE_DIMENSIONS : IMAGE_DIMENSIONS}
          resizeMode="contain"
          source={{ uri: vehicle.image }}
        />
        <View>
          <Text weight="bold" size={20}>
            {vehicle.name}
          </Text>
          <Text style={{ color: 'grey' }}>{vehicle.driverName}</Text>
          <Text size={14} weight="bold">
            {CATEGORIES_MAP[vehicle.category]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: 20,
    minWidth: '100%',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
    marginTop: 20,
  },
  grid: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    minWidth: '40%',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
});

export default VehicleCard;
