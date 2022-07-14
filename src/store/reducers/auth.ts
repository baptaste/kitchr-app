import { createReducer } from '../utils/store.utils';
import authActions from '../actions/auth.actions';
import { AuthSession, AuthUser } from '@supabase/supabase-js';

interface IAuthState {
	session: AuthSession | null;
	user: AuthUser | null;
	loggedIn: boolean;
}

const initialState: IAuthState = {
	session: null,
	user: null,
	loggedIn: false,
};

const handlers: any = { ...authActions };
const authReducer = createReducer(initialState, handlers);

export default authReducer;
