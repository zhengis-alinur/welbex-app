import type {RootStackParamList} from '../navigation/AppStack'

export const	MAIN_SCREEN = 'Main';
export const	MAP_SCREEN = 'Map';
export const	SETTINGS_SCREEN = 'Settings';
export const	VEHICLE_SCREEN = 'Vehicle';

export const MAP_DELTA = 0.005;

export const INITIAL_REGION={
	latitude: 37.78825,
	longitude: -122.4324,
	latitudeDelta: 0.0922,
	longitudeDelta: 0.0421,
}

export const CATEGORIES_MAP = {
  all: 'Все',
  car: 'Легковая',
  truck: 'Грузовая',
  moto: 'Мотоцикл',
};

export const COLORS = {
	WHITE: '#FFF',
	BLACK: '#000',
	ACCENT: '#7EC9DA',
	BG_PRIMARY: '#212121',
	GREY: '#747474'
}