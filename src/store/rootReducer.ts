import { combineReducers } from 'redux';
import { PersistConfig, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { CityState } from './city/types';
import { PlaceState } from './place/types';
import cityReducer from './city/reducer';
import placeReducer from './place/reducer';

type AppType = {
	city: CityState;
	place: PlaceState;
};

const cityConfig: PersistConfig<any> = {
	key: 'city',
	storage: AsyncStorage,
};

const placeConfig: PersistConfig<any> = {
	key: 'place',
	storage: AsyncStorage,
};

const appReducer = combineReducers<AppType>({
	city: persistReducer(cityConfig, cityReducer),
	place: persistReducer(placeConfig, placeReducer),
} as any);

export type RootState = ReturnType<typeof appReducer>;

export default appReducer;
