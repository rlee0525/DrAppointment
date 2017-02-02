import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import configureStore from './store/store';
import Loading from './components/Loading';
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
        <Scene key="home" component={Home} title="Home"
               hideNavBar={true} initial={true} />
      </Scene>
    </Router>
  </Provider>
);

export default App;
