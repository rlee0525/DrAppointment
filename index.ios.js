import { AppRegistry } from 'react-native';
import App from './app/App';

import store from './app/store/store';

AppRegistry.registerComponent('DrAppointment', () => {
  window.store = store;
  return App;
});
