import { RECEIVE_APPOINTMENT } from '../actions/appointment_actions';
// import merge from 'lodash/merge';

const appointmentReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_APPOINTMENT:
      return action.appointment;
    default:
      return state;
  }
};

export default appointmentReducer;
