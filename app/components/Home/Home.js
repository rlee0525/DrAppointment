import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Linking
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  searchBarContainer: {
    padding: 20,
    paddingTop: 40,
    height: 40,
    width: 375
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
  doctorListing: {
    flexDirection: "row",
    padding: 10,
    paddingLeft: 30
  },
  left: {
    paddingRight: 15
  },
  right: {

  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  listingsContainer: {
    paddingTop: 30
  },
  text: {
    color: "white"
  }
});

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      favDoctors: [],
      searchResults: [],
      lat: null,
      lng: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.fetchFavDoctors = this.fetchFavDoctors.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchDoctorSearchResults();
    this.getLocation();
  }

  getLocation() {
    let that = this;
    function success(pos) {
      var crd = pos.coords;

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      that.setState({
        lat: crd.latitude,
        lng: crd.longitude
      });
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  fetchFavDoctors() {
    fetch('http://localhost:3000/api/favorite_doctors', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        favDoctors: responseData
      });
    });
  }

  fetchDoctorSearchResults() {
    fetch('http://localhost:3000/api/doctor_search', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        input: {
          name: this.state.name,
          lat: this.state.lat,
          lng: this.state.lng
        }
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        searchResults: responseData
      });
    });
  }

  handleChange(input) {
    console.log(input);
    console.log(this);
    this.setState({ name: input });
    this.fetchDoctorSearchResults();
  }

// <Image source={{ uri: doctor.image_url}} style={styles.photo} />
  render() {
    let favDocs;
    console.log(this.state);
    if (this.state.searchResults.length === 0) {
      favDocs = null;
    } else {
      favDocs = this.state.searchResults.map(doctor => {
        return (
          <View key={doctor.id} style={styles.doctorListing}>
            <View style={styles.left}>

            </View>
            <View style={styles.right}>
              <TouchableHighlight style={styles.button}
                                  onPress={() => console.log(this.state)}>
                <Text style={styles.text}>
                  {doctor.name}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight style={styles.button}
                                  onPress={() => console.log(this.state)}>
                <Text style={styles.text}>
                  Call: {doctor.phone}
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        );
      });
    }

    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="Search by doctor's first or last name..."
            onChangeText={(input) => this.handleChange(input)}
            value={this.state.name}
          />
        </View>
        <View style={styles.listingsContainer}>
          {favDocs}
        </View>
      </Image>
    );
  }
}

export default Home;
