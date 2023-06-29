import React from 'react';
import RootView from '../containers/RootView';
import VehicleCard from '../components/VehicleCard';
import { FlatList } from 'react-native';
import Header from '../components/Header';
import Filter from '../components/Filter';
import { Vehicle } from '../types';
import Map from '../assets/icons/Map';

const vehicles = require('../source/vehicles.json');

const Main = () => {
  return (
    <RootView>
      <Header title={'Транспортные средства'}>
        <Map />
      </Header>
      <Filter />
      <FlatList
        data={vehicles}
        renderItem={({ item }: { item: Vehicle }) => <VehicleCard vehicle={item} />}
      />
    </RootView>
  );
};

export default Main;
