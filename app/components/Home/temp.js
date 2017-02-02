import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ListView,
  Linking
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      name: "",
      favDoctors: [],
      searchResults: []
    };
  }

  componentDidMount() {
    this.fetchFavDoctors();
    this.fetchDoctorSearchResults();
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
          name: this.state.name
        }
      })
    })
    .then((responseData) => {
      this.setState({
        searchResults: responseData
      });
    });
  }


  render() {
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

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

    let favDocs;
    console.log(this.state);
    if (this.state.favDoctors.length === 0) {
      favDocs = null;
    } else {
      favDocs = this.state.favDoctors.map(doctor => {
        return (
          <View key={doctor.id} style={styles.doctorListing}>
            <View style={styles.left}>
              <Image source={{ uri: doctor.image_url}} style={styles.photo} />
            </View>
            <View style={styles.right}>
              <TouchableHighlight style={styles.button}
                                  onPress={() => console.log("hello")}>
                <Text style={styles.text}>
                  {doctor.name}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight style={styles.button}
                                  onPress={() => console.log("hello")}>
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
            style={styles.input}
            placeholder="Search by doctor's first or last name..."
            value={this.state.name}
            onChangeText={console.log(this.state.name)}
          />
        </View>
        <View style={styles.listingsContainer}>
          {favDocs}
        </View>
      </Image>
    );
  }
}

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
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5
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

export default Home;
