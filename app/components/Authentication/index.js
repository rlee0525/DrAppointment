import Authentication from './Authentication';
import { connect } from 'react-redux';
import * as actions from '../../actions/authentication_actions';
// import {} from '../../reducers/rootReducer';

const mapStateToProps = ({ phone_number }) => ({
  // phone_number
});

const mapDispatchToProps = () => ({

});

export default connect(
  // mapStateToProps,
  null,
  null
)(Authentication);
