import * as APIUtil from '../util/api_util';

export const RECEIVE_DOCTOR = "RECEIVE_DOCTOR";
export const DOCTOR_ERROR = "DOCTOR_ERROR";

export const receiveDoctor = doctor => ({
  type: RECEIVE_DOCTOR,
  doctor
});

export const doctorError = errors => ({
  type: DOCTOR_ERROR,
  errors
});

export const requestDoctor = id => dispatch => (
  APIUtil.fetchDoctor(id)
    .then(response => response.json())
    .then(doctor => dispatch(receiveDoctor(doctor)))
    .catch(err => dispatch(doctorError(err.responseJSON)))
);
