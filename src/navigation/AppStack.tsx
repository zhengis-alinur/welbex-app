import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';
import Vehicle from '../screens/Vehicle';
import Settings from '../screens/Settings';
import Map from '../screens/Map';
import type { Vehicle as VehicleType } from '../types';
import { MAIN_SCREEN, MAP_SCREEN, SETTINGS_SCREEN, VEHICLE_SCREEN } from '../constants';

export type RootStackParamList = {
  Main: VehicleType;
  Vehicle: VehicleType;
  Settings: undefined;
  Map: undefined;
};

const AppStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={MAIN_SCREEN} component={Main} />
      <Stack.Screen name={VEHICLE_SCREEN} component={Vehicle} />
      <Stack.Screen name={SETTINGS_SCREEN} component={Settings} />
      <Stack.Screen name={MAP_SCREEN} component={Map} />
    </Stack.Navigator>
  );
};

export default AppStack;
