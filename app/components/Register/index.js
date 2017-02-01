import Register from './Register';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authentication_actions';

const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(registerUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Register);
