import Home from './Home';
import { connect } from 'react-redux';
import { fetchDoctorSearchResults } from '../../actions/doctor_actions';

const mapStateToProps = (state) => ({
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  fetchDoctorSearchResults: doctors => dispatch(fetchDoctorSearchResults(doctors)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
