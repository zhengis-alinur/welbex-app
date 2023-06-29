import React, { useState } from 'react';
import RootView from '../containers/RootView';
import VehicleCard from '../components/VehicleCard';
import { FlatList, View } from 'react-native';
import Header from '../components/Header';
import Filter, { ExtendedVehicleCategory } from '../components/Filter';
import { Vehicle } from '../types';
import Map from '../assets/icons/Map';
import Settings from '../assets/icons/Settings';

const vehicles: Vehicle[] = require('../source/vehicles.json');

const Main = () => {
  const [category, setCategory] = useState<ExtendedVehicleCategory>('moto');

  const changeCategory = (category: ExtendedVehicleCategory) => {
    setCategory(category);
  };

  return (
    <RootView>
      <Header title={'Транспортные средства'}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20 }}
        >
          <Map />
          <Settings />
        </View>
      </Header>
      <Filter currentCategory={category} changeCategory={changeCategory} />
      <FlatList
        data={Array.from(vehicles).filter((vehicle) =>
          category === 'all' ? true : vehicle.category === category,
        )}
        renderItem={({ item }: { item: Vehicle }) => <VehicleCard vehicle={item} />}
      />
    </RootView>
  );
};

export default Main;
