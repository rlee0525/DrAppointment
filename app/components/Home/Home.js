import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Linking
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeout from 'react-native-swipeout';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.favoriteToggle = this.favoriteToggle.bind(this);
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

  favoriteToggle(doctorId) {
    let that = this;
    this.props.favoriteToggle(doctorId)
      .then(() => { that.props.fetchDoctorSearchResults({ lat: that.state.lat, lng: that.state.lng }); }
    );
  }

  render() {
    let docs;
    if (this.props.search.searchResults.length === 0) {
      docs = null;
    } else {
      docs = this.props.search.searchResults.map(doctor => {
        let favorited, space;
        let favToggle = "Favorite";
        if (doctor.favorited) {
          favorited = <Icon style={styles.star} name="star" size={13} color="rgba(255, 255, 255, 0.8)" />;
          space = " ";
          favToggle = "Unfavorite";
        }
        return (
          <View style={styles.doctorListing} key={doctor.id}>
            <View style={styles.flex}>
            <Swipeout autoClose={true} right={[{
                text: favToggle,
                backgroundColor: 'orange',
                color: 'white',
                onPress: () => this.favoriteToggle(doctor.id),
              },
              {
                text: 'Call',
                backgroundColor: '#0091EA',
                color: 'white',
                onPress: () => Linking.openURL(`tel: ${doctor.phone}`),
              }
            ]} backgroundColor='rgba(255, 255, 255, 0)'>
              <TouchableHighlight style={styles.touchHighlightRow} onPress={() => this.onDoctorClick(doctor)}>
                <View style={styles.listingView}>
                  <View style={styles.left}>
                    <Text style={styles.textBold}>
                      {favorited}{space}{doctor.name}
                    </Text>
                    <Text style={styles.text}>
                      {doctor.address}
                    </Text>
                    <Text style={styles.text}>
                      {doctor.address2}
                    </Text>
                    <Text style={styles.text}>
                      Distance: {doctor.distance} miles
                    </Text>
                  </View>
                  <View style={styles.right}>
                    <Text style={styles.right}>
                      <Icon style={styles.angle} name="angle-double-left" size={50} color="rgba(255, 255, 255, 0.8)" />
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </Swipeout>
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
        <View style={styles.footer}>
          <TouchableHighlight style={styles.profileButton} onPress={
              () => Actions.profile({ currentUser: this.props.currentUser })
            } >
            <Text style={styles.profileButtonText}>
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  searchBarContainer: {
    padding: 20,
    paddingTop: 40,
    height: 40,
    width: 375,
    marginBottom: 40
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
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  listingsContainer: {
    marginBottom: 15,
  },
  text: {
    color: "white",
    fontFamily: 'Arial'
  },
  textBold: {
    color: "white",
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  doctorListing: {
    // padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    borderColor:'rgba(255, 255, 255, 0.2)',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  callButton: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'Arial',
    alignSelf: 'center',
    padding: 5,
  },
  touchCallButton: {
  },
  listingView: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
  },
  left: {
    flex: 0.9,
  },
  right: {
    flexDirection: 'row',
    flex: 0.1,
    alignSelf: 'center',
  },
  star: {
    color: 'orange',
  },
  angle: {
    color: 'rgba(255, 255, 255, 0.2)',
  },
  touchHighlightRow: {
    flex: 0.7,
    marginRight: 10,
  },
  flex: {
    flex: 1,
  },
  footer: {
    // flex: 0.1,
    alignSelf: 'stretch',
  },
  profileButton: {
    height: 50,
    backgroundColor: '#0091EA',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
  },
  profileButtonText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Arial'
  },
});

export default Home;
