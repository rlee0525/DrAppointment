import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Loading extends React.Component {

  componentWillMount() {
    // AsyncStorage.removeItem('phone_number');
    // AsyncStorage.removeItem('authy_id');
    AsyncStorage.getItem('phone_number', (err, result) => {
      const phoneNumber = result;
      if (result) {
        AsyncStorage.getItem('authy_id', (err2, result2) => {
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
          .then((response) => Actions.home({ currentUser: response }));
        });
      } else {
        return Actions.register();
      }
    });
  }

  render() {
    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <View style={styles.container}>
        <Image source={require('../../images/logo.png')} style={styles.logo}/>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: null,
    height: null,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  logo: {
    left: 12,
    alignSelf: 'center',
  }
});

export default Loading;
