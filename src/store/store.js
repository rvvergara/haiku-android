import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let configureStore = createStore(() => {},
composeEnhancers(applyMiddleware(...middleware)));

export default configureStore;
