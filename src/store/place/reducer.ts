import { Types, PlaceState, PlaceActionTypes, initialState } from './types';

const placeReducer = (
	state = initialState,
	action: PlaceActionTypes,
): PlaceState | Array<PlaceState> => {
	switch (action.type) {
		case Types.SET_PLACE:
			return { ...state, ...action.payload };
		case Types.DELETE_PLACE:
			return { ...state, ...action.payload };
		case Types.UPDATE_PLACE:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default placeReducer;
