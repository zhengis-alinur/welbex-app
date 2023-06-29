import React from 'react';
import { View } from 'react-native';
import Text from '../components/AppText';
import Header from '../components/Header';
import Toggle from '../components/Toggle';
import RootView from '../containers/RootView';

const Settings = () => {
  return (
    <RootView>
      <Header title={'Настройки'} />
      <View>
        <Text weight={'bold'} size={24}>
          Сменить язык
        </Text>
        <View
          style={{ flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>Русский</Text>
          <Toggle />
          <Text>English</Text>
        </View>
      </View>
    </RootView>
  );
};

export default Settings;
