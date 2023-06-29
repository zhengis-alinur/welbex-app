import React from 'react';
import { View } from 'react-native';
import Grid from '../assets/icons/Grid';
import List from '../assets/icons/List';
import Text from '../components/AppText';

const Filter = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 2 }}>
        <Text bold>Все</Text>
        <Text>Грузовые</Text>
        <Text>Легковые</Text>
        <Text>Мото</Text>
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
