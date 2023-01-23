import {
	GETTINGMALTID,
	GOTMALTID,
	gettingMaltidAction,
	gotMaltidAction,
} from "../Actions/maltid";
import { initialMaltidState } from "../state";

type MaltidActions =
	| ReturnType<typeof gettingMaltidAction>
	| ReturnType<typeof gotMaltidAction>;

export const maltidReducer = (
	state = initialMaltidState,
	action: MaltidActions
) => {
	switch (action.type) {
		case GETTINGMALTID: {
			return {
				...state,
				loading: true,
			};
		}
		case GOTMALTID: {
			return {
				...state,
				maltid: action.maltid,
				loading: false,
			};
		}
	}

	return state;
};
