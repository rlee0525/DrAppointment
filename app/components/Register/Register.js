import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Authentication from '../Authentication';
import { Actions } from 'react-native-router-flux';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      country_code: "1",
      phone_number: "",
    };
  }

  onRegisterPressed() {
    fetch('https://www.drappointment.io/api/users', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        user: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          country_code: this.state.country_code,
          phone_number: this.state.phone_number
        }
      })
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          "POST Response",
          "Response Body -> " + JSON.stringify(responseData)
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => Actions.authentication({ text: "Hi!" }));
  }

  render() {
    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <Image source={require('../../images/logo.png')} style={styles.logo}/>

        <Text style={styles.welcome}>
          WELCOME
        </Text>

        <TextInput
          onChangeText={(first_name) => this.setState({ first_name })}
          style={styles.input} placeholder="First Name"
          />

        <TextInput
          onChangeText={(last_name) => this.setState({ last_name })}
          style={styles.input} placeholder="Last Name"
          />

        <TextInput
          onChangeText={(phone_number) => this.setState({ phone_number })}
          style={styles.input} placeholder="Phone Number"
          />

        <TouchableHighlight style={styles.button}
                            onPress={this.onRegisterPressed.bind(this)}
                            phoneNumber={this.state.phone_number}>
          <Text style={styles.buttonText}>
            SUBMIT
          </Text>
        </TouchableHighlight>

        <Text>
          {this.state.first_name}
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
    backgroundColor: '#00C853',
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

export default Register;
