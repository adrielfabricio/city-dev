import { combineReducers } from 'redux';
import { PersistConfig, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { CityState } from './city/types';
import cityReducer from './city/reducer';

type AppType = {
	city: CityState;
};

const cityConfig: PersistConfig<any> = {
	key: 'city',
	storage: AsyncStorage,
};

const appReducer = combineReducers<AppType>({
	city: persistReducer(cityConfig, cityReducer),
} as any);

export type RootState = ReturnType<typeof appReducer>;

export default appReducer;
