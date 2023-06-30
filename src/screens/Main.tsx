import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import Map from '../assets/icons/Map';
import Settings from '../assets/icons/Settings';
import Header from '../components/Header';
import RootView from '../containers/RootView';
import VehicleCard from '../components/VehicleCard';
import Filter, { ExtendedVehicleCategory } from '../components/Filter';
import { Vehicle } from '../types';
import { useTranslation } from 'react-i18next';

const vehiclesResource: Vehicle[] = require('../source/vehicles.json');

const Main = () => {
  const { t } = useTranslation();

  const [category, setCategory] = useState<ExtendedVehicleCategory>('all');
  const [gridView, setGridView] = useState<boolean>(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>(vehiclesResource);

  const changeCategory = (category: ExtendedVehicleCategory) => {
    setCategory(category);
  };

  const onGridView = (isGrid: boolean) => {
    setGridView(isGrid);
  };

  useEffect(() => {
    setVehicles(
      vehiclesResource.filter((vehicle) =>
        category === 'all' ? true : vehicle.category === category,
      ),
    );
  }, [category]);

  return (
    <RootView>
      <Header title={t('mainHeader')}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20 }}
        >
          <Map />
          <Settings />
        </View>
      </Header>
      <Filter
        currentCategory={category}
        changeCategory={changeCategory}
        onGridView={onGridView}
        gridView={gridView}
      />
      {!gridView ? (
        <FlatList
          key="list"
          data={vehicles}
          renderItem={({ item }: { item: Vehicle }) => <VehicleCard vehicle={item} />}
        />
      ) : (
        <FlatList
          key="grid"
          data={vehicles}
          numColumns={2}
          renderItem={({ item }: { item: Vehicle }) => <VehicleCard gridView vehicle={item} />}
        />
      )}
    </RootView>
  );
};

export default Main;
