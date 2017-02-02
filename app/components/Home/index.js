import Home from './Home';
import { connect } from 'react-redux';
import { fetchDoctorSearchResults,
         requestDoctor } from '../../actions/doctor_actions';

const mapStateToProps = (state) => ({
  search: state.search,
  doctor: state.doctor
});

const mapDispatchToProps = dispatch => ({
  fetchDoctorSearchResults: doctors => dispatch(fetchDoctorSearchResults(doctors)),
  requestDoctor: id => dispatch(requestDoctor(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
