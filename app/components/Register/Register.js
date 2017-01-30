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
import Authentication from '../Authentication';

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

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      phone_number: ""
    };
  }

  // async onRegisterPressed() {
  //   try {
  //     let response = await fetch('https://www.drappointment.io/api/users', {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         user: {
  //           first_name: this.state.first_name,
  //           last_name: this.state.last_name,
  //           phone_number: this.state.phone_number
  //         }
  //       })
  //     });
  //
  //     let res = await response.text();
  //
  //     if (response.status >= 200 && response.state < 300) {
  //       console.log("success");
  //     } else {
  //       let errors = res;
  //       throw errors;
  //     }
  //
  //   } catch(errors) {
  //       console.log("errors");
  //   }
  // }

  onClick() {
    
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
                            onPress={this.onClick.bind(this)}>
          <Text style={styles.buttonText}>
            SUBMIT
          </Text>
        </TouchableHighlight>
      </Image>
    );
  }
}

export default Register;

// <Text style={styles.instructions}>
//   Enter your phone number
// </Text>

// <Text style={styles.welcome}>
//   Welcome to Dr. Appointment!
// </Text>
