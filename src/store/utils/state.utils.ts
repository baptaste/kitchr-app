export function setState(state: any, action: any): object {
	return Object.assign({}, state, {
		[action.key]: action.payload,
	});
}
