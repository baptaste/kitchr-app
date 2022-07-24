import { connect } from 'react-redux';
import SignIn from '../../components/OldSignIn';
import actions from '../actions/settings.actions';

const mapStateToProps = (state: any) => ({
	isLoading: state.settings.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
	setIsLoading: () => {
		dispatch({ type: actions.HANDLE_IS_LOADING });
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
