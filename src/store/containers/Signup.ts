import { connect } from 'react-redux';
import Signup from '../../components/OldSignup';

const mapStateToProps = (state: any) => ({
	email: state.auth.email,
	password: state.auth.password,
	userName: state.auth.userName,
	emailError: state.auth.emailError,
	passwordError: state.auth.passwordError,
	emailErrorMessage: state.auth.emailErrorMessage,
	passwordErrorMessage: state.auth.passwordErrorMessage,
	submitted: state.auth.submitted,
});

const mapDispatchToProps = (dispatch: any) => ({
	setAuthStateInputValue: (key: string, value: string): void => {
		dispatch({ type: 'SET_AUTH_INPUT_VALUE', key, payload: value });
	},
	setAuthStateSubmitted: (value: boolean): void => {
		dispatch({ type: 'SET_AUTH_SUBMIT', key: 'submitted', payload: value });
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
