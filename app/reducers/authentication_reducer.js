import { RECEIVE_USER,
         RECEIVE_ERRORS } from '../actions/authentication_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

const authenticationReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER:
      return action.responseData;
    case RECEIVE_ERRORS:
      return merge({}, _defaultState, {
        errors: action.errors
      });
    default:
      return state;
  }
};

export default authenticationReducer;
