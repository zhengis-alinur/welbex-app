import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import Text from '../components/AppText';
import RootView from '../containers/RootView';
import { RootStackParamList } from '../navigation/AppStack';

const Vehicle = ({ route }: { route: RouteProp<RootStackParamList> }) => {
  return (
    <RootView>
      <Text>{route.params?.name}</Text>
    </RootView>
  );
};

export default Vehicle;
