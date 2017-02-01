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

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      favDoctors: {}
    };
  }

  componentDidMount() {
    this.fetchFavDoctors();
  }

  fetchFavDoctors() {
    fetch('https://www.drappointment.io/api/favorite_doctors', {
      method: 'GET',
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          favDoctors: responseData
        });
      });
  }


  render() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <Text style={styles.welcome}>
          Hello! This is Home Page!
        </Text>

        <Text style={styles.welcome}>
          {this.state.favDoctors.name}
        </Text>

        <Image source={{uri: "https://pngimg.com/upload/doctor_PNG15959.png"}}
               style={styles.doctorImage}/>
        <TouchableHighlight style={styles.button}
                            onPress={() => Actions.doctor()}>
          <Text style={styles.buttonText}>
            Doctor
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
  },
  doctorImage: {
    height: 100,
    width: 100,
  }
});

export default Home;
