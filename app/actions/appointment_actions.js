import * as APIUtil from '../util/api_util';

export const RECEIVE_APPOINTMENT = 'RECEIVE_APPOINTMENT';
export const APPOINTMENT_ERROR = 'APPOINTMENT_ERROR';

export const receiveAppointment = appointment => ({
  type: RECEIVE_APPOINTMENT,
  appointment
});

export const appointmentError = errors => ({
  type: APPOINTMENT_ERROR,
  errors
});

export const createAppointment = data => dispatch => (
  APIUtil.fetchDoctor(data)
    .then(response => response.json())
    .then(appointment => dispatch(receiveAppointment(appointment)))
    .catch(err => dispatch(appointmentError(err.responseJSON)))
);
