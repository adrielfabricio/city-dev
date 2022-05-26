import { Types, CityState, CityActionTypes } from './types';

export const getCity = (city: CityState): CityActionTypes => {
	return {
		type: Types.GET_CITY,
		payload: city,
	};
};

export const setCity = (
	cities: Array<CityState>,
	city: CityState,
): CityActionTypes => {
	return {
		type: Types.SET_CITY,
		payload: cities.concat(city),
	};
};

export const deleteCity = (city: CityState): CityActionTypes => {
	return {
		type: Types.DELETE_CITY,
		payload: city,
	};
};

export const updateCity = (city: CityState): CityActionTypes => {
	return {
		type: Types.UPDATE_CITY,
		payload: city,
	};
};

export const clearCity = (): CityActionTypes => {
	return {
		type: Types.DELETE_CITY,
		payload: {},
	};
};
