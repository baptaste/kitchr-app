import { createReducer } from '../utils/store.utils';
import settingsActions from '../actions/settings.actions';
import { logAny } from '../../utils/logs.utils';

interface ISettingsState {
	isLoading: boolean;
}

const initialState: ISettingsState = {
	isLoading: false,
};

const handlers: any = { ...settingsActions };
const settingsReducer = createReducer(initialState, handlers);

export default settingsReducer;
