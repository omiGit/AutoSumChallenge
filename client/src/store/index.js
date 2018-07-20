import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from './reducers/expense';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(expenseReducer,composeEnhancers(applyMiddleware(thunk)));