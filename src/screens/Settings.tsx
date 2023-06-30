import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import Text from '../components/AppText';
import Header from '../components/Header';
import Toggle from '../components/Toggle';
import RootView from '../containers/RootView';

const Settings = () => {
  const { t } = useTranslation();
  return (
    <RootView>
      <Header title={t('settings')} />
      <View>
        <Text weight="bold" size={24}>
          {t('changeLanguage')}
        </Text>
        <View
          style={{ flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>English</Text>
          <Toggle />
          <Text>Русский</Text>
        </View>
      </View>
    </RootView>
  );
};

export default Settings;
