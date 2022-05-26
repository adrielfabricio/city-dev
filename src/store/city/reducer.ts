import { Types, CityState, CityActionTypes, initialState } from './types';

const cityReducer = (
	state = initialState,
	action: CityActionTypes,
): CityState | Array<CityState> => {
	switch (action.type) {
		case Types.GET_CITY:
			return { ...state, ...action.payload };
		case Types.SET_CITY:
			return { ...state, ...action.payload };
		case Types.DELETE_CITY:
			return { ...state, ...action.payload };
		case Types.UPDATE_CITY:
			return { ...state, ...action.payload };
		case Types.CLEAR_CITY:
			return initialState;
		default:
			return state;
	}
};

export default cityReducer;
