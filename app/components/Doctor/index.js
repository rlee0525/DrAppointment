import Doctor from './Doctor';
import { connect } from 'react-redux';
import { createAppointment } from '../../actions/appointment_actions';

const mapStateToProps = (state) => ({
  appointment: state.appointment
});

const mapDispatchToProps = dispatch => ({
  createAppointment: data => dispatch(createAppointment(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Doctor);
