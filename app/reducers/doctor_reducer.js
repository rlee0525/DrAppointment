import { RECEIVE_DOCTOR } from '../actions/doctor_actions';
import merge from 'lodash/merge';

const doctorReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_DOCTOR:
      return action.doctor;
    default:
      return state;
  }
};

export default doctorReducer;
