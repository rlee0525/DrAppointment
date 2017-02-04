import Doctor from './Doctor';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  appointment: state.appointment
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Doctor);
