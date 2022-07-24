import { connect } from 'react-redux';
import TabBar from '../../Layout/TabBar';

const mapStateToProps = (state: any) => ({
	loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, null)(TabBar);
