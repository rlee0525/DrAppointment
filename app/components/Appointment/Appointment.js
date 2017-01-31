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

class Appointment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchFavDoctors();
  }

  fetchFavDoctors() {
    fetch('https://www.drappointment.io/api/users', {
      method: 'GET',
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
      // body: JSON.stringify({
      //   first_name: this.state.first_name,
      //   last_name: this.state.last_name,
      //   country_code: this.state.country_code,
      //   phone_number: this.state.phone_number
      // })
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
      });
  }


  render() {
    console.log(this.props.text);

    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <Text style={styles.welcome}>
          and appointment page....!
        </Text>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            Book
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

export default Appointment;

// <Text style={styles.instructions}>
//   Enter your phone number
// </Text>

// <Text style={styles.welcome}>
//   Welcome to Dr. Appointment!
// </Text>
