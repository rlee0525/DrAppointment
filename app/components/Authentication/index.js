import Authentication from './Authentication';
import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/authentication_actions';

const mapDispatchToProps = dispatch => ({
  authenticateUser: user => dispatch(authenticateUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Authentication);
