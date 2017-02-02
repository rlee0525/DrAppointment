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

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchDoctorSearchResults();
    this.getLocation();
  }

  getLocation() {
    let that = this;
    function success(pos) {
      var crd = pos.coords;
      that.setState({
        lat: crd.latitude,
        lng: crd.longitude
      });
    }

    function error(err) {
    }

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  handleChange(input) {
    this.props.fetchDoctorSearchResults(
      {
        name: input,
        lat: this.state.lat,
        lng: this.state.lng
      }
    );
  }

// <Image source={{ uri: doctor.image_url}} style={styles.photo} />
  render() {
    console.log(this.props.search.searchResults);
    console.log(this.props.search);
    console.log(this.props);
    let favDocs;
    if (this.props.search.searchResults.length === 0) {
      favDocs = null;
    } else {
      favDocs = this.props.search.searchResults.map(doctor => {
        return (
          <View key={doctor.id} style={styles.doctorListing}>
            <View style={styles.left}>

            </View>
            <View style={styles.right}>
              <TouchableHighlight style={styles.button}
                                  onPress={() => console.log(this.state)}>
                <Text style={styles.text}>
                  {doctor.name} {doctor.favorited ? " Favorited!" : ""}
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

export default Home;
