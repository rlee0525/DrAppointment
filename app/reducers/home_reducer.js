import { RECEIVE_FAV_DOCTORS } from '../actions/home_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/doctor_actions';
// import merge from 'lodash/merge';

const homeReducer = (state = { searchResults: [] }, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FAV_DOCTORS:
      return action.favDoctors;
    case RECEIVE_SEARCH_RESULTS:
      return { searchResults: action.results };
    default:
      return state;
  }
};

export default homeReducer;
