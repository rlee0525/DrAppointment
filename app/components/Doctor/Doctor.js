import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Doctor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <Text style={styles.welcome}>
          doctorrrrrr pageeee
        </Text>
        <TouchableHighlight style={styles.button}
                            onPress={() => Actions.appointment()}>
          <Text style={styles.buttonText} >
            make an appointment!
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

export default Doctor;
