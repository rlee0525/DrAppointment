import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      that.props.fetchDoctorSearchResults(
        {
          lat: that.state.lat,
          lng: that.state.lng
        }
      );
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

  onDoctorClick(doctor) {
    let currentUser = this.props.currentUser;
    this.props.requestDoctor(doctor.id)
      .then(() => Actions.doctor({
        doctor: this.props.doctor,
        currentUser,
        distance: doctor.distance
      }));
  }

  render() {
    let docs;
    if (this.props.search.searchResults.length === 0) {
      docs = null;
    } else {
      docs = this.props.search.searchResults.map(doctor => {
        let favorited, space;
        if (doctor.favorited) {
          favorited = <Icon style={styles.icon} name="star" size={13} color="rgba(255, 255, 255, 0.8)" />;
          space = " ";
        }
        return (
          <View key={doctor.id} style={styles.doctorListing}>
            <TouchableHighlight onPress={() => this.onDoctorClick(doctor)}>
              <View style={styles.left}>
                <Text style={styles.text}>
                  {favorited}{space}{doctor.name}
                </Text>
                <Text style={styles.text}>
                  Phone: {doctor.phone}
                </Text>
                <Text style={styles.text}>
                  Distance: {doctor.distance} miles
                </Text>
              </View>
            </TouchableHighlight>
            <View style={styles.callButtonView}>
              <TouchableHighlight style={styles.touchCallButton}>
                <Text style={styles.callButton} onPress={() => console.log()}>
                  <Icon style={styles.icon} name="phone" size={35} color="rgba(255, 255, 255, 0.8)" />
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        );
      });
    }

    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchBox}
              placeholder="Search by doctor's first or last name..."
              placeholderTextColor='gray'
              onChangeText={(input) => this.handleChange(input)}
            />
          </View>
          <ScrollView style={styles.listingsContainer}>
            {docs}
          </ScrollView>
        </View>
        <View style={styles.viewProfileButton}>
          <TouchableHighlight style={styles.profileButton} onPress={() => Actions.profile() } >
            <Text style={styles.textProfileButton}>
              My Appointments
            </Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: null,
    height: null,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  searchBarContainer: {
    padding: 20,
    paddingTop: 40,
    height: 40,
    width: 375,
    marginBottom: 10
  },
  searchBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontFamily: 'Arial',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
  left: {
    paddingRight: 15
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
    color: "white",
    fontFamily: 'Arial'
  },
  viewProfileButton: {
    position: 'absolute',
    bottom: 90,
    width: 170,
  },
  textProfileButton: {
    paddingRight: 0,
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'Arial',
    color: 'white',
  },
  profileButton: {
    height: 30,
    borderRadius: 10,
    position: 'absolute',
    right: 25,
    top: 22,
    backgroundColor: 'red',
    paddingRight: 15,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  doctorListing: {
    flexDirection: "row",
    padding: 10,
    paddingLeft: 15,
    borderColor: 'white',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  callButton: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'Arial',
    alignSelf: 'center',
    padding: 5,
  },
  callButtonView: {
    position: 'absolute',
    right: 9,
    bottom: 12,
    height: 65,
    width: 65,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 145, 234, 0.6)',
    borderRadius: 90,
  },
  touchCallButton: {
  },
  left: {
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 145, 234, 0.6)',
    borderRadius: 10,
    padding: 10,
    width: 275,
  }
});

export default Home;
