import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Loading extends React.Component {

  componentWillMount() {
    // AsyncStorage.removeItem('phone_number');
    // AsyncStorage.removeItem('authy_id');
    AsyncStorage.getItem('phone_number', (err, result) => {
      console.log(result);
      const phoneNumber = result;
      if (result) {
        AsyncStorage.getItem('authy_id', (err2, result2) => {
          console.log(result2);
          fetch('https://www.drappointment.io/api/session', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                phone_number: phoneNumber,
                authy_id: result2
              }
            })
          })
          .then((response) => response.json())
          .then(() => Actions.home());
        });
      } else {
        return Actions.register();
      }
    });
  }

  render() {
    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <Image source={require('../../images/logo.png')} style={styles.logo}/>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: null,
    height: null
  },
  logo: {
    left: 12,
    borderRadius: 5,
    marginTop: 300
  }
});

export default Loading;
