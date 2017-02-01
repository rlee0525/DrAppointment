import * as APIUtil from '../util/api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = currentUser => ({
  type: RECEIVE_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const registerUser = user => dispatch => (
  APIUtil.registerUser(user)
    .then(userInfo => dispatch(receiveUser(userInfo)))
    .catch(err => dispatch(receiveErrors(err.responseJSON)))
);

export const authenticateUser = user => dispatch => (
  APIUtil.authenticateUser(user)
    .then(userInfo => dispatch(receiveUser(userInfo)))
    .catch(err => dispatch(receiveErrors(err.responseJSON)))
);
