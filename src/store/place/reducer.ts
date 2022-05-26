import { Types, PlaceState, PlaceActionTypes, initialState } from './types';

function findIdx({
	indexedState,
	actionObject,
}: {
	indexedState: any;
	actionObject: any;
}) {
	const _idx: unknown = Object.keys(indexedState).filter(
		(index: number | string) => {
			const placeStateIndex = indexedState[index];
			return placeStateIndex._id === actionObject._id;
		},
	);
	return _idx;
}

const placeReducer = (
	state = initialState,
	action: PlaceActionTypes,
): PlaceState | Array<PlaceState> => {
	switch (action.type) {
		case Types.SET_PLACE:
			return { ...state, ...action.payload };
		case Types.DELETE_PLACE:
			const _dIdx = findIdx({
				indexedState: state,
				actionObject: action.payload,
			});
			delete state[_dIdx];
			return { ...state, ...action.payload };
		case Types.UPDATE_PLACE:
			const _uIdx = findIdx({
				indexedState: state,
				actionObject: action.payload,
			});
			state[_uIdx] = action.payload;
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default placeReducer;
