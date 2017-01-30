import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';

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
  // instructions: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   marginTop: 80,
  //   fontWeight: "bold",
  //   color: "white",
  //   backgroundColor: 'rgba(0,0,0,0)',
  // },
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

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth_token: ""
    };
  }

  render() {
    console.log(this.props.text);

    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <Image source={require('../../images/logo.png')} style={styles.logo}/>

        <Text style={styles.welcome}>
          Enter your code
        </Text>


        <TextInput
          onChangeText={(auth_token) => this.setState({ auth_token })}
          style={styles.input} placeholder="Verification Code"
          />

        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            Authenticate
          </Text>
        </TouchableHighlight>
      </Image>
    );
  }
}

export default Authentication;

// <Text style={styles.instructions}>
//   Enter your phone number
// </Text>

// <Text style={styles.welcome}>
//   Welcome to Dr. Appointment!
// </Text>
