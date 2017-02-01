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
    const user = {
      phone_number: this.props.phone_number,
      authy_id: this.state.authyId
    };

    this.props.authenticateUser(user)
      .then(response => {
        if (response.currentUser.ok) {
          AsyncStorage.setItem('phone_number', (user.phone_number))
            .then(() => AsyncStorage.setItem('authy_id', (user.authy_id)))
            .then(() => Actions.home());
        } else {
          this.setState({
            errors: ["Please enter a valid code"]
          });
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
        <Text style={styles.errors}>
          {this.state.errors}
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
  },
  errors: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 20
  }
});

export default Authentication;
