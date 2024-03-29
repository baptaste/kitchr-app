import { connect } from 'react-redux';
import Layout from '../../layout';
import actions from '../actions/settings.actions';

const mapStateToProps = (state: any) => ({
	isLoading: state.settings.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
	setIsLoading: (value: boolean) => {
		dispatch({ type: actions.HANDLE_IS_LOADING, key: 'isLoading', payload: value });
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
