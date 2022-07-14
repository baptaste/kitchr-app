import { createReducer } from '../utils/store.utils';
import settingsActions from '../actions/settings.actions';

interface ISettingsState {
	isLoading: boolean;
}

const initialState: ISettingsState = {
	isLoading: false,
};

const handlers: any = { ...settingsActions };
const settingsReducer = createReducer(initialState, handlers);

export default settingsReducer;
