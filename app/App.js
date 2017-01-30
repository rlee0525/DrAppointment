import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore';
import Register from './components/Register';
import Authentication from './components/Authentication';

// const RouterWithRedux = connect()(Router);
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key="register" component={Register} hideNavBar={true}/>
        <Scene key="authentication" component={Authentication} hideNavBar={true} />
      </Scene>
    </Router>
  </Provider>
);

export default App;

//
// <RouterWithRedux>
//   <Scene key='Authphone'
//          component={Authentication}
//          title="Authenticate"/>
// </RouterWithRedux>
