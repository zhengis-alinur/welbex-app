import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableHighlight } from 'react-native';
import { Touchable, View } from 'react-native';
import Grid from '../assets/icons/Grid';
import List from '../assets/icons/List';
import Text from '../components/AppText';
import { CATEGORIES_MAP } from '../constants';
import { VehicleCategory } from '../types';

// Компонент фильтрации транпортов

export type ExtendedVehicleCategory = VehicleCategory | 'all';

// Компонент текста фильтра
const FilterText = ({
  currentCategory,
  category,
  changeCategory,
}: Omit<Props, 'onGridView' | 'gridView'> & { category: ExtendedVehicleCategory }) => {
  const { t } = useTranslation();

  return (
    <Text
      weight={currentCategory === category ? 'bold' : 'light'}
      size={currentCategory === category ? 13 : 12}
      onPress={() => changeCategory(category)}
    >
      {t(CATEGORIES_MAP[category])}
    </Text>
  );
};

type Props = {
  currentCategory: ExtendedVehicleCategory;
  changeCategory: (category: ExtendedVehicleCategory) => void;
  onGridView: (gridView: boolean) => void;
  gridView: boolean;
};

const Filter = ({ currentCategory, changeCategory, onGridView, gridView }: Props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 2 }}>
        {Object.keys(CATEGORIES_MAP).map((category, index) => (
          <FilterText
            key={index}
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
        <TouchableHighlight onPress={() => onGridView(false)}>
          <List active={!gridView} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => onGridView(true)}>
          <Grid active={gridView} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Filter;
