import Profile from './Profile';
import { connect } from 'react-redux';
import { fetchAppointments, deleteAppointment } from '../../actions/appointment_actions';

const mapStateToProps = (state) => ({
  appointments: state.profile,
});

const mapDispatchToProps = dispatch => ({
  fetchAppointments: () => dispatch(fetchAppointments()),
  deleteAppointment: (id) => dispatch(deleteAppointment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
