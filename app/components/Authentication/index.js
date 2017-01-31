import Authentication from './Authentication';
import { connect } from 'react-redux';
import * as actions from '../../actions/authentication_actions';
// import {} from '../../reducers/rootReducer';

const mapStateToProps = ({ currentUser }) => ({
  // currentUser
});

const mapDispatchToProps = () => ({

});

export default connect(
  // mapStateToProps,
  null,
  null
)(Authentication);
