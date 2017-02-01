import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authyId: ""
    };
  }

  onAuthPressed() {
    fetch('https://www.drappointment.io/api/session', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        user: {
          phone_number: this.props.phone_number,
          authy_id: this.state.authyId
        }
      })
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.session_token) {
          return AsyncStorage.setItem('phone_number', (responseData.phone_number))
          .then(() => AsyncStorage.setItem('authy_id', (responseData.authy_id)))
          .then(() => Actions.home());
        } else {
          return Actions.authentication();
        }
      });
  }

  render() {
    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <Image source={require('../../images/logo.png')} style={styles.logo}/>

        <Text style={styles.welcome}>
          Enter your code
        </Text>


        <TextInput
          onChangeText={(authyId) => this.setState({ authyId })}
          style={styles.input} placeholder="Verification Code"
          />

        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText} onPress={this.onAuthPressed.bind(this)}>
            Authenticate
          </Text>
        </TouchableHighlight>
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
  welcome: {
    marginTop: 80,
    fontSize: 36,
    marginBottom: 40,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  input: {
    margin: 5,
    width: 320,
    height: 50,
    padding: 5,
    fontSize: 18,
    borderColor: 'white',
    borderRadius: 5,
    backgroundColor: 'white',
    textAlign: 'center',
    alignSelf: 'center'
  },
  button: {
    marginTop: 15,
    height: 50,
    backgroundColor: '#E91E63',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'center'
  }
});

export default Authentication;
