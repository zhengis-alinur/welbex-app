import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';
import Vehicle from '../screens/Vehicle';
import Settings from '../screens/Settings';
import type { Vehicle as VehicleType } from '../types';

export type RootStackParamList = {
  Main: VehicleType;
  Vehicle: VehicleType;
  Settings: undefined;
};

const AppStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Vehicle" component={Vehicle} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default AppStack;
