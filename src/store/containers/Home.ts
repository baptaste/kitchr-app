import { connect } from 'react-redux';
import Home from '../../pages/index'

const mapStateToProps = (state: any) => ({
  isLoading: state.settings.isLoading
});

const mapDispatchToProps = (dispatch: any) => ({
  // setIsLoading: () => {
  //   console.log('coucou');

  //   dispatch({ type: 'HANDLE_IS_LOADING' })
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);