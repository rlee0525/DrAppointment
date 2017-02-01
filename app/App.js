import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import configureStore from './store/store';
import Loader from './components/Loader';
import Register from './components/Register';
import Authentication from './components/Authentication';
import Home from './components/Home';
import Doctor from './components/Doctor';
import Appointment from './components/Appointment';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key="loader" component={Loader} title="Loader"
               hideNavBar={true} initial={true} />
        <Scene key="register" component={Register} title="Register"
               hideNavBar={true} initial={false} />
        <Scene key="authentication" component={Authentication}
               title="Authenticate" hideNavBar={true} />
        <Scene key="home" component={Home} title="Home"
               hideNavBar={true} />
        <Scene key="doctor" component={Doctor} title="Doctor"
               hideNavBar={true} />
        <Scene key="appointment" component={Appointment} title="Appointment"
               hideNavBar={true} />
      </Scene>
    </Router>
  </Provider>
);

export default App;
