import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Text from '../components/AppText';
import RootView from '../containers/RootView';
import Wrapper from '../containers/Wrapper';
import Header from '../components/Header';
import BackArrow from '../assets/icons/BackArrow';
import { RootStackParamList } from '../navigation/AppStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Badge from '../components/Badge';

const Vehicle = ({
  route,
  navigation,
}: {
  route: RouteProp<RootStackParamList>;
  navigation: NativeStackNavigationProp<RootStackParamList>;
}) => {
  return (
    <RootView style={styles.root}>
      <Header title={'Транспортное средство'} />
      <Wrapper>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text weight={'light'} size={20}>
          № {route.params?.id}
        </Text>
        <Text weight={'bold'} size={15}>
          Near Rental Map
        </Text>
        <View
          style={{
            width: '100%',
            justifyContent: 'flex-start',
          }}
        >
          <Text>Rented Vehicle</Text>
          <Text weight={'bold'} size={16}>
            {route.params?.name}
          </Text>
        </View>
        <Image
          style={{ width: 300, height: 200 }}
          resizeMode="contain"
          source={require('../assets/mazda.png')}
        />
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ width: '50%' }}>
            <Text weight="light" size={12} color="#FFF">
              Driver
            </Text>
            <Text weight="bold" size={16} color="#FFF">
              {route.params?.driverName}
            </Text>
          </View>
          <View>
            <Text weight="light" size={12}>
              Phone:
            </Text>
            <Text weight="bold" size={16}>
              {route.params?.driverPhone}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Badge bgColor="#FFF">
            <Text weight="light" size={17} color="#000">
              Написать
            </Text>
          </Badge>
          <Badge>
            <Text weight="light" size={16} color="#FFF">
              Позвонить
            </Text>
          </Badge>
        </View>
      </Wrapper>
    </RootView>
  );
};

var styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  back: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
});

export default Vehicle;
