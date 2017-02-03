import { RECEIVE_PATIENTS } from '../actions/patient_actions';

const patientReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PATIENTS:
      return action.patients;
    default:
      return state;
  }
};

export default patientReducer;
