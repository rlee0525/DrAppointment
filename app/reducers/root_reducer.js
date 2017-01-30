import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer';

const rootReducer = combineReducers({
  user: authenticationReducer
});

export default rootReducer;
