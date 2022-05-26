import { Types, PlaceState, PlaceActionTypes } from './types';

export const setPlace = (
	places: Array<PlaceState>,
	place: PlaceState,
): PlaceActionTypes => {
	return {
		type: Types.SET_PLACE,
		payload: places.concat(place),
	};
};

export const deletePlace = (index: string): PlaceActionTypes => {
	return {
		type: Types.DELETE_PLACE,
		payload: index,
	};
};

export const updatePlace = (place: PlaceState): PlaceActionTypes => {
	return {
		type: Types.UPDATE_PLACE,
		payload: place,
	};
};
