import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';

const rootReducer = combineReducers({
  user: authenticationReducer
});

export default rootReducer;
