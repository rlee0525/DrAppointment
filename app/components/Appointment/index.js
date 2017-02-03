import Appointment from './Appointment';
import { connect } from 'react-redux';
import { fetchPatients, createPatient } from '../../actions/patient_actions';

const mapStateToProps = (state) => ({
  patients: state.patients
});

const mapDispatchToProps = dispatch => ({
  fetchPatients: () => dispatch(fetchPatients()),
  createPatient: patient => dispatch(createPatient(patient))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointment);
