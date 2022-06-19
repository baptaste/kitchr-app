import { combineReducers } from 'redux';
import settingsReducer from './settings';
import authReducer from './auth';
import userReducer from './user';

const rootReducer = combineReducers({
	settings: settingsReducer,
	auth: authReducer,
	user: userReducer,
});

export default rootReducer;
