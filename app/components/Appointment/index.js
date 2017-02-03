import Appointment from './Appointment';
import { connect } from 'react-redux';
import { fetchPatients } from '../../actions/patient_actions';

const mapStateToProps = (state) => ({
  patients: state.patients
});

const mapDispatchToProps = dispatch => ({
  fetchPatients: patients => dispatch(fetchPatients(patients))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointment);
