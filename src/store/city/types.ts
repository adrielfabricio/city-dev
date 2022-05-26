import { cities } from '../../services/api';

export const Types = {
	GET_CITY: 'GET_CITY',
	SET_CITY: 'SET_CITY',
	DELETE_CITY: 'DELETE_CITY',
	UPDATE_CITY: 'UPDATE_CITY',
	CLEAR_CITY: 'CLEAR_CITY',
};

export interface CityState {
	_id: string;
	name: string;
	country_name: string;
}

export const initialState = {
	...cities,
} as Array<CityState>;

interface GetCityAction {
	type: typeof Types.GET_CITY;
	payload: Array<CityState>;
}

interface SetCityAction {
	type: typeof Types.SET_CITY;
	payload: CityState;
}

interface DeleteCityAction {
	type: typeof Types.DELETE_CITY;
	payload: CityState;
}

interface UpdateCityAction {
	type: typeof Types.UPDATE_CITY;
	payload: CityState;
}

interface ClearCityAction {
	type: typeof Types.CLEAR_CITY;
	payload: {};
}

export type CityActionTypes =
	| GetCityAction
	| SetCityAction
	| DeleteCityAction
	| UpdateCityAction
	| ClearCityAction;
