import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer';
import homeReducer from './home_reducer';
import doctorReducer from './doctor_reducer';
import appointmentReducer from './appointment_reducer';

const rootReducer = combineReducers({
  currentUser: authenticationReducer,
  doctor: homeReducer,
  favDoctors2: doctorReducer,
  favDoctors3: appointmentReducer
});

export default rootReducer;
