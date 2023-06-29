import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Text from './AppText';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppStack';
import { Vehicle } from '../types';

const StyledCard = styled.View`
  flex-direction: row;
  gap: 20px;
  min-width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(255, 255, 255, 0.05);
  margin-top: 20px;
`;

const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Vehicle', vehicle)}>
      <StyledCard>
        <Image
          style={{ width: 130, height: 75 }}
          resizeMode="contain"
          source={require('../assets/mazda.png')}
        />
        <View>
          <Text bold size={20}>
            {vehicle.name}
          </Text>
          <Text style={{ color: 'grey' }}>{vehicle.driverName}</Text>
          <Text size={14} bold>
            {vehicle.category}
          </Text>
        </View>
      </StyledCard>
    </TouchableOpacity>
  );
};

export default VehicleCard;
