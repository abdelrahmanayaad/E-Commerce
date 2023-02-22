import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './AuthReducer';
import Reactotron from '../../ReactotronConfig';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({auth: authReducer});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk), Reactotron.createEnhancer()),
);

export default store;
