import { RECEIVE_APPOINTMENTS } from '../actions/appointment_actions.js';
// import merge from 'lodash/merge';

const profileReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_APPOINTMENTS:
      return action.appointments;
    default:
      return state;
  }
};

export default profileReducer;
