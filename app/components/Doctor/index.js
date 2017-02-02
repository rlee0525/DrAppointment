import Doctor from './Doctor';
import { connect } from 'react-redux';
import { requestDoctor } from '../../actions/doctor_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  requestDoctor: id => dispatch(requestDoctor(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Doctor);
