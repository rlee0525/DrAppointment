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
        if (response.responseData.session_token) {
          let phone_number = response.responseData.phone_number;
          let authy_id = response.responseData.authy_id;
          AsyncStorage.setItem('phone_number', (phone_number))
            .then(() => AsyncStorage.setItem('authy_id', (authy_id)))
            .then(() => Actions.home({ currentUser: response.responseData }));
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

          <View style={styles.textBox}>
            <TextInput
              onChangeText={(authyId) => this.setState({ authyId })}
              style={styles.input} placeholder="Verification Code"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              autoFocus={false}
              />
          </View>

          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText} onPress={this.onAuthPressed.bind(this)}>
              Authenticate
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  logo: {
    left: 12,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 120,
    marginBottom: 140
  },
  textBox: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.7)',
  },
  input: {
    marginTop: 10,
    alignSelf: 'stretch',
    height: 50,
    fontSize: 15,
    fontFamily: 'Arial',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    marginTop: 45,
    height: 50,
    backgroundColor: '#0091EA',
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
    fontSize: 11,
    color: '#FFF',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 15,
    fontFamily: 'Arial'
  }
});

export default Authentication;
