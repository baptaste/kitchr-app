import { logAny } from '../../utils/logs.utils';

export const initialState: any = {
	userName: '',
	email: '',
	password: '',
	preferences: {
		isVeggie: false,
		isVegan: false,
		rememberMe: false,
	},
	bookmarks: {
		recipes: [],
		inventory: {},
	},
	createdAt: '',
};

function setState(state: any, action: any) {
	return {
		...state,
		[action.key]: action.payload,
	};
}

export default function userReducer(state = initialState, action: any = {}) {
	if (action.type === 'SET_USER') {
		return setState(state, action);
	}
	return state;
}
