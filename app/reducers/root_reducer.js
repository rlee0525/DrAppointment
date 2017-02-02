import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer';
import homeReducer from './home_reducer';
import doctorReducer from './doctor_reducer';
import appointmentReducer from './appointment_reducer';

const rootReducer = combineReducers({
  currentUser: authenticationReducer,
  search: homeReducer,
  doctor: doctorReducer,
  appointment: appointmentReducer
});

export default rootReducer;
