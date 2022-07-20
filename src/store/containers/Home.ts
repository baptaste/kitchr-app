export const mapStateToProps = (state: any) => ({
	isLoading: state.settings.isLoading,
});

export const mapDispatchToProps = (dispatch: any) => ({
	// setIsLoading: () => {
	//   console.log('coucou');
	//   dispatch({ type: 'HANDLE_IS_LOADING' })
	// }
});
