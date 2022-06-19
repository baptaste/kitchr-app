import { logAny } from '../../utils/logs.utils';
import { IAuthState } from '../interfaces/auth';

export const initialState: IAuthState = {
	email: '',
	password: '',
	userName: '',
	emailError: false,
	passwordError: false,
	emailErrorMessage: '',
	passwordErrorMessage: '',
	submitted: false,
};

function setState(state: any, action: any) {
	return Object.assign({}, state, {
		[action.key]: action.payload,
	});
}

export default function authReducer(state = initialState, action: any = {}) {
	if (action.type === 'SET_AUTH_INPUT_VALUE') {
		return setState(state, action);
	}
	if (action.type === 'SET_AUTH_SUBMIT') {
		return setState(state, action);
	}
	return state;
}
