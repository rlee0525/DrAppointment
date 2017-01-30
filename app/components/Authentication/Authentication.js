import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

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

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressCount: 0
    };
  }

  incrementPressCount() {
    this.setState({
      pressCount: this.state.pressCount + 1
    });
  }

  render() {
    // console.log("Hello, World!");
    return (
      <View style={styles.container}>
        <Image source={require('../../images/logo.png')} style={styles.logo}/>
        <Text style={styles.welcome}>
          Welcome to Dr. Appointment!
        </Text>
        <Text style={styles.instructions}>
          Please enter your phone number to get started
        </Text>
        <Text style={styles.instructions}>
          1 (123) 456 - 7890
          Press Count: {this.state.pressCount}
        </Text>

        <TouchableHighlight onPress={() => { this.incrementPressCount(); }}>
          <Text>Hello</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Authentication;
