import { logAny } from '../../utils/logs.utils';
import actions from '../constants/actions/settings.actions';

export const initialState: any = {
	isLoading: false,
	isDarkTheme: false,
};

function setState(state: any, action: any) {
	return Object.assign({}, state, {
		[action.key]: action.payload,
	});
}

export default function settingsReducer(state = initialState, action: any = {}) {
	if (action.type === actions.HANDLE_IS_LOADING) {
		return setState(state, action);
	}
	return state;
}
