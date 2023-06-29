import React from 'react';
import RootView from '../containers/RootView';
import VehicleCard from '../components/VehicleCard';
import { FlatList } from 'react-native';
import Header from '../components/Header';
import Filter from '../components/Filter';
import { Vehicle } from '../types';

const vehicles = require('../source/vehicles.json');

const Main = () => {
  return (
    <RootView>
      <Header title={'Транспортные средства'} />
      <Filter />
      <FlatList
        data={vehicles}
        renderItem={({ item }: { item: Vehicle }) => <VehicleCard vehicle={item} />}
      />
    </RootView>
  );
};

export default Main;
