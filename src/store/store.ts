import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
// import testMiddleware from './middlewares';

// const middlewares = [];
// const enhancers = applyMiddleware(...middlewares);

const store = configureStore({
	reducer: rootReducer,
	enhancers: [],
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
