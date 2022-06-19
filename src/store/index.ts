import { applyMiddleware, compose, StoreEnhancer } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// declare global {
// 	interface Window {
// 		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
// 	}
// }

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const enhancers: StoreEnhancer<{}, {}> = composeEnhancers(applyMiddleware());

const store = configureStore({ reducer: rootReducer, devTools: process.env.NODE_ENV !== 'production' });
export default store;
