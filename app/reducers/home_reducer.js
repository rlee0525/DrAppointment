import { RECEIVE_FAV_DOCTORS } from '../actions/home_actions';
// import merge from 'lodash/merge';

const homeReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FAV_DOCTORS:
      return action.favDoctors;
    default:
      return state;
  }
};

export default homeReducer;
