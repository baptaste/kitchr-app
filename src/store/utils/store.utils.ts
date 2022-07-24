import { setState } from './state.utils';

export function createReducer(initialState: any, handlers: any): any {
	return function (state = initialState, action: any = {}) {
		const handler = handlers[action.type];
		if (handler) {
			return setState(state, action);
		}
		return state;
	};
}
