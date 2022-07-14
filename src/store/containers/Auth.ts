import { AuthSession, AuthUser } from '@supabase/supabase-js';
import { connect } from 'react-redux';
import Auth from '../../components/Auth';
import actions from '../actions/auth.actions';

const mapStateToProps = (state: any) => ({
	session: state.auth.session,
	user: state.auth.user,
	loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = (dispatch: any) => ({
	setStoreAuthSession: (session: AuthSession) => {
		dispatch({ type: actions.SET_AUTH_SESSION, key: 'session', payload: session });
	},
	setStoreAuthUser: (user: AuthUser) => {
		dispatch({ type: actions.SET_AUTH_USER, key: 'user', payload: user });
	},
	setStoreAuthLoggedIn: (value: boolean) => {
		dispatch({ type: actions.SET_AUTH_LOGGED_IN, key: 'loggedIn', payload: value });
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
