import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Text from '../components/AppText';
import RootView from '../containers/RootView';
import Wrapper from '../containers/Wrapper';
import Header from '../components/Header';
import BackArrow from '../assets/icons/BackArrow';
import { RootStackParamList } from '../navigation/AppStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Vehicle as VehicleType } from '../types';
import VehicleMap from '../components/VehicleMap';
import VehicleDetails from '../components/VehicleDetails';

type VehicleHeaderProps = {
  vehicle: VehicleType;
};

const VehicleHeader = ({ vehicle }: VehicleHeaderProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <BackArrow />
      </TouchableOpacity>
      <Text weight={'light'} size={20}>
        № {vehicle?.id}
      </Text>
    </>
  );
};

const Vehicle = ({
  route,
}: {
  route: RouteProp<RootStackParamList>;
  navigation: NativeStackNavigationProp<RootStackParamList>;
}) => {
  const vehicle = route.params as VehicleType;

  return (
    <RootView style={styles.root}>
      <Header title={'Транспортное средство'} />
      <Wrapper>
        <VehicleHeader vehicle={vehicle} />
        <VehicleMap vehicle={vehicle} />
        <VehicleDetails vehicle={vehicle} />
      </Wrapper>
    </RootView>
  );
};

var styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  back: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
});

export default Vehicle;
