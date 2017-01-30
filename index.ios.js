import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class DrAppointment extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Image source={require('./app/images/logo.png')} style={styles.logo}/>
        <Text style={styles.welcome}>
          Welcome to Dr. Appointment!
        </Text>
        <Text style={styles.instructions}>
          Please enter your phone number to get started
        </Text>
        <Text style={styles.instructions}>
          1 (123) 456 - 7890
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    bottom: 150,
    left: 12
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DrAppointment', () => DrAppointment);
