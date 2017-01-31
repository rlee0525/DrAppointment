import * as APIUtil from '../util/api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const register = user => dispatch => (
  APIUtil.registerUser(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);
