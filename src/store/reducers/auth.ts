import { createReducer } from '../utils/store.utils';
import authActions from '../actions/auth.actions';
import { AuthSession, AuthUser } from '@supabase/supabase-js';

interface IAuthState {
	auth_session: AuthSession | null;
	auth_user: AuthUser | null;
	loggedIn: boolean;
}

const initialState: IAuthState = {
	auth_session: null,
	auth_user: null,
	loggedIn: false,
};

const handlers: any = { ...authActions };
const authReducer = createReducer(initialState, handlers);

export default authReducer;
