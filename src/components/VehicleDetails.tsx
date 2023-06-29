import React from 'react';
import { View, Image, Linking } from 'react-native';
import Text from '../components/AppText';
import { COLORS } from '../constants';
import { Vehicle } from '../types';
import Badge from './Badge';

type Props = {
  vehicle: Vehicle;
};

const VehicleDetails = ({ vehicle }: Props) => {
  const handleCall = () => {
    Linking.openURL(`tel:${vehicle.driverPhone}`);
  };
  return (
    <>
      <View
        style={{
          width: '100%',
          justifyContent: 'flex-start',
        }}
      >
        <Text>Rented Vehicle</Text>
        <Text weight="bold" size={16}>
          {vehicle?.name}
        </Text>
      </View>
      <Image
        style={{ width: 300, height: 200 }}
        resizeMode="contain"
        source={{ uri: vehicle?.image }}
      />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <View style={{ width: '50%' }}>
          <Text weight="light" size={12}>
            Driver
          </Text>
          <Text weight="bold" size={16}>
            {vehicle?.driverName}
          </Text>
        </View>
        <View>
          <Text weight="light" size={12}>
            Phone:
          </Text>
          <Text weight="bold" size={16}>
            {vehicle?.driverPhone}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Badge bgColor={COLORS.WHITE}>
          <Text weight="light" size={17} color={COLORS.BLACK}>
            Написать
          </Text>
        </Badge>
        <Badge onPress={handleCall}>
          <Text weight="light" size={16}>
            Позвонить
          </Text>
        </Badge>
      </View>
    </>
  );
};

export default VehicleDetails;
