import { AuthSession, AuthUser } from '@supabase/supabase-js';
import { connect } from 'react-redux';
import Auth from '../../auth';
import actions from '../actions/auth.actions';

const mapStateToProps = (state: any) => ({
	auth_session: state.auth.auth_session,
	auth_user: state.auth.auth_user,
	loggedIn: state.auth.loggedIn,
	isLoading: state.settings.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
	setStoreAuthSession: (session: AuthSession) => {
		dispatch({ type: actions.SET_AUTH_SESSION, key: 'auth_session', payload: session });
	},
	setStoreAuthUser: (user: AuthUser) => {
		dispatch({ type: actions.SET_AUTH_USER, key: 'auth_user', payload: user });
	},
	setStoreAuthLoggedIn: (value: boolean) => {
		dispatch({ type: actions.SET_AUTH_LOGGED_IN, key: 'loggedIn', payload: value });
	},
	setIsLoading: (value: boolean) => {
		dispatch({ type: 'HANDLE_IS_LOADING', key: 'isLoading', payload: value });
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
