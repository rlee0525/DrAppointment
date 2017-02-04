import * as APIUtil from '../util/api_util';

export const RECEIVE_APPOINTMENT = 'RECEIVE_APPOINTMENT';
export const APPOINTMENT_ERROR = 'APPOINTMENT_ERROR';
export const RECEIVE_APPOINTMENTS = 'RECEIVE_APPOINTMENTS';

export const receiveAppointment = appointment => ({
  type: RECEIVE_APPOINTMENT,
  appointment
});

export const receiveAppointments = appointments => ({
  type: RECEIVE_APPOINTMENTS,
  appointments
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

export const makeAppointment = appointment => dispatch => (
  APIUtil.makeAppointment(appointment)
    .catch(err => dispatch(appointmentError(err.responseJSON)))
);

export const fetchAppointments = () => dispatch => (
  APIUtil.fetchAppointments()
    .then(response => response.json())
    .then(appointments => dispatch(receiveAppointments(appointments)))
);

export const deleteAppointment = (id) => dispatch => (
  APIUtil.deleteAppointment(id)
    .catch(err => dispatch(appointmentError(err.responseJSON)))
);
