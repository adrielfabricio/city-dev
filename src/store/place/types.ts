import { places } from '../../services/api';

export const Types = {
	GET_PLACE: 'GET_PLACE',
	SET_PLACE: 'SET_PLACE',
	DELETE_PLACE: 'DELETE_PLACE',
	UPDATE_PLACE: 'UPDATE_PLACE',
};

export interface PlaceState {
	_id: string;
	name: string;
	type: 'restaurant' | 'residencial' | 'other';
	address: string;
	notes: string;
	city_id: string;
}

export const initialState = {
	...places,
} as Array<PlaceState>;

interface GetPlaceAction {
	type: typeof Types.GET_PLACE;
	payload: Array<PlaceState>;
}

interface SetPlaceAction {
	type: typeof Types.SET_PLACE;
	payload: PlaceState;
}

interface DeletePlaceAction {
	type: typeof Types.DELETE_PLACE;
	payload: number | string;
}

interface UpdatePlaceAction {
	type: typeof Types.UPDATE_PLACE;
	payload: PlaceState;
}

export type PlaceActionTypes =
	| GetPlaceAction
	| SetPlaceAction
	| DeletePlaceAction
	| UpdatePlaceAction;
