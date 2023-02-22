import {createStore, combineReducers} from 'redux';
import authReducer from './AuthReducer';
import Reactotron from '../../ReactotronConfig';

const rootReducer = combineReducers({auth: authReducer});

const store = createStore(rootReducer, Reactotron.createEnhancer());

export default store;
