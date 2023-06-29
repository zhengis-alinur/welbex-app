import React from 'react';
import { View } from 'react-native';
import Grid from '../assets/icons/Grid';
import List from '../assets/icons/List';
import Text from '../components/AppText';
import { VehicleCategory } from '../types';

const categoriesMap = {
  all: 'Все',
  car: 'Легковая',
  truck: 'Грузовая',
  moto: 'Мотоцикл',
};

export type ExtendedVehicleCategory = VehicleCategory | 'all';

type Props = {
  currentCategory: ExtendedVehicleCategory;
  changeCategory: (category: ExtendedVehicleCategory) => void;
};

const FilterText = ({
  currentCategory,
  category,
  changeCategory,
}: Props & { category: ExtendedVehicleCategory }) => {
  return (
    <Text
      weight={currentCategory === category ? 'bold' : 'light'}
      size={12}
      onPress={() => changeCategory(category)}
    >
      {categoriesMap[category]}
    </Text>
  );
};

const Filter = ({ currentCategory, changeCategory }: Props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 2 }}>
        {Object.keys(categoriesMap).map((category) => (
          <FilterText
            category={category as ExtendedVehicleCategory}
            currentCategory={currentCategory}
            changeCategory={changeCategory}
          />
        ))}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <List />
        <Grid />
      </View>
    </View>
  );
};

export default Filter;
