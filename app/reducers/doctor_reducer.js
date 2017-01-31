import { RECEIVE_FAV_DOCTORS } from '../actions/doctor_actions';
// import merge from 'lodash/merge';

const doctorReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FAV_DOCTORS:
      return action.favDoctors;
    default:
      return state;
  }
};

export default doctorReducer;
