import { RECEIVE_SEARCH_RESULTS } from '../actions/doctor_actions';

const homeReducer = (state = { searchResults: [] }, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return { searchResults: action.results };
    default:
      return state;
  }
};

export default homeReducer;
