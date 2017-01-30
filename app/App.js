import React from 'react';
// import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore';
import Register from './components/Register';

// const RouterWithRedux = connect()(Router);
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Register />
  </Provider>
);

export default App;

//
// <RouterWithRedux>
//   <Scene key='Authphone'
//          component={Authentication}
//          title="Authenticate"/>
// </RouterWithRedux>
