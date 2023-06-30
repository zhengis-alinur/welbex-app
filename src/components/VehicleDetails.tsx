import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Image, Linking } from 'react-native';
import Text from '../components/AppText';
import { COLORS, MESSAGE } from '../constants';
import { Vehicle } from '../types';
import Badge from './Badge';

type Props = {
  vehicle: Vehicle;
};

const VehicleDetails = ({ vehicle }: Props) => {
  const { t } = useTranslation();
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
        <Text>{t('rentedVehicle')}</Text>
        <Text>Category: {t(vehicle.category)}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 10 }}>
          <Text weight="bold" size={16}>
            {vehicle?.name}
          </Text>
          <Text>{}</Text>
        </View>
      </View>
      <Image
        style={{ width: 300, height: 200 }}
        resizeMode="contain"
        source={{ uri: vehicle?.image }}
      />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <View style={{ width: '50%' }}>
          <Text weight="light" size={12}>
            {t('driver')}:
          </Text>
          <Text weight="bold" size={16}>
            {vehicle?.driverName}
          </Text>
        </View>
        <View>
          <Text weight="light" size={12}>
            {t('phone')}:
          </Text>
          <Text weight="bold" size={16}>
            {vehicle?.driverPhone}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Badge
          bgColor={COLORS.WHITE}
          onPress={() =>
            Linking.openURL(
              `http://api.whatsapp.com/send?text=${MESSAGE}&phone=${vehicle.driverPhone}`,
            )
          }
        >
          <Text weight="light" size={17} color={COLORS.BLACK}>
            {t('chat')}
          </Text>
        </Badge>
        <Badge onPress={handleCall}>
          <Text weight="light" size={16}>
            {t('call')}
          </Text>
        </Badge>
      </View>
    </>
  );
};

export default VehicleDetails;
