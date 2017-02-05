import Home from './Home';
import { connect } from 'react-redux';
import { fetchDoctorSearchResults,
         requestDoctor,
         favoriteToggle } from '../../actions/doctor_actions';

const mapStateToProps = (state) => ({
  search: state.search,
  doctor: state.doctor,
});

const mapDispatchToProps = dispatch => ({
  fetchDoctorSearchResults: doctors => dispatch(fetchDoctorSearchResults(doctors)),
  requestDoctor: id => dispatch(requestDoctor(id)),
  favoriteToggle: doctorId => dispatch(favoriteToggle(doctorId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
