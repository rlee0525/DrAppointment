import * as APIUtil from '../util/api_util';

export const RECEIVE_PATIENTS = "RECEIVE_PATIENTS";

export const receivePatients = patients => ({
  type: RECEIVE_PATIENTS,
  patients
});

export const fetchPatients = () => dispatch => (
  APIUtil.fetchPatients()
    .then(response => response.json())
    .then(patients => dispatch(receivePatients(patients)))
);

export const createPatient = (patient) => dispatch => (
  APIUtil.createPatient(patient)
);
