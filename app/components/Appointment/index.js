import Appointment from './Appointment';
import { connect } from 'react-redux';
import {
  fetchPatients, createPatient, deletePatient
} from '../../actions/patient_actions';
import { makeAppointment } from '../../actions/appointment_actions';

const mapStateToProps = (state) => ({
  patients: state.patients
});

const mapDispatchToProps = dispatch => ({
  fetchPatients: () => dispatch(fetchPatients()),
  createPatient: patient => dispatch(createPatient(patient)),
  makeAppointment: patient => dispatch(makeAppointment(patient)),
  deletePatient: id => dispatch(deletePatient(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointment);
