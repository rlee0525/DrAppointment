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

class Register extends React.Component {
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

  onRegisterPressed() {
    let user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone_number: this.state.phone_number
    };

    this.props.registerUser(user)
      .then(response => {
        if (response.responseData.session_token) {
          let phone_number = response.responseData.phone_number;
          let currentUser = response.responseData;
          return Actions.authentication({ currentUser, phone_number });
        } else {
          this.setState({
            errors: response.responseData
          });
        }
      });
  }

  render() {
    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <View style={styles.container}>
        <Image source={require('../../images/logo.png')} style={styles.logo}/>

        <TextInput
          onChangeText={(first_name) => this.setState({ first_name })}
          style={styles.input} placeholder="First name"
          placeholderTextColor="gray"
          />

        <TextInput
          onChangeText={(last_name) => this.setState({ last_name })}
          style={styles.input} placeholder="Last name"
          placeholderTextColor="gray"
          />

        <TextInput
          onChangeText={(phone_number) => this.setState({ phone_number })}
          style={styles.input} placeholder="Phone number"
          placeholderTextColor="gray"
          />

        <TouchableHighlight style={styles.button}
                            onPress={this.onRegisterPressed.bind(this)}>
          <Text style={styles.buttonText}>
            Submit
          </Text>
        </TouchableHighlight>
        <Text style={styles.errors}>
          {this.state.errors ? this.state.errors.join("\n") : ""}
        </Text>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: null,
    height: null,
    backgroundColor: 'rgba(0, 0, 0, 0.55)'
  },
  logo: {
    left: 12,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 120,
    marginBottom: 100
  },
  input: {
    marginTop: 10,
    alignSelf: 'stretch',
    height: 50,
    fontSize: 14,
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  button: {
    marginTop: 100,
    height: 50,
    backgroundColor: '#FF3366',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Arial'
  },
  errors: {
    fontSize: 10,
    color: '#FFF',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 15,
    fontFamily: 'Arial'
  }
});

export default Register;
