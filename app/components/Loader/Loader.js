import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Loader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      country_code: "1",
      phone_number: "",
      errors: []
    };
  }

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
    }});
  }

  onRegisterPressed() {
    let user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone_number: this.state.phone_number
    };

    fetch('https://www.drappointment.io/api/users', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        user
      })
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          "POST Response",
          "Response Body -> " + JSON.stringify(responseData)
        );
      if (responseData.session_token) {
        return Actions.authentication();
      } else {
        this.setState({ errors: responseData });
        return Actions.register();
        // return Actions.authentication();
      }
    });
  }

  render() {
    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <Image source={require('../../images/logo.png')} style={styles.logo}/>

        <Text style={styles.welcome}>
          WELCOME
        </Text>
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
    marginTop: 50
  },
  errors: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  }
});

export default Loader;
