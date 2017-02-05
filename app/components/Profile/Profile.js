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

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  componentDidMount() {
    this.props.fetchAppointments();
  }

  deleteAppointment(id) {
    this.props.deleteAppointment(id)
      .then(() => this.props.fetchAppointments());
  }

  render() {
    let appointments;
    appointments = this.props.appointments.map(appointment => {
      return (
        <View key={appointment.id} style={styles.appointmentListing}>
          <View>
            <Text style={styles.listingText}>
              { appointment.doctor }
            </Text>
            <Text style={styles.listingText}>
              { appointment.day } @ { appointment.time }
            </Text>
            <Text style={styles.listingText}>
              For { appointment.patients }
            </Text>
          </View>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.deleteAppointment(appointment.id)}>
              Cancel
            </Text>
          </TouchableHighlight>
        </View>
      );
    });

    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <ScrollView style={styles.listingContainer}>
          { appointments }
        </ScrollView>
        <View style={styles.backHomeButton}>
          <TouchableHighlight style={styles.button} onPress={() => Actions.home({ currentUser: this.props.currentUser }) } >
            <Text style={styles.homeButton}>
              Back
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
  appointmentListing: {
    flexDirection: "row",
    padding: 10,
    paddingLeft: 30,
    borderColor: 'white',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  listingContainer: {
    paddingTop: 40,
    flex: 0.7
  },
  listingText: {
    color: "white",
  },
  button: {
    height: 30,
    borderRadius: 10,
    position: 'absolute',
    right: 20,
    top: 22,
    backgroundColor: 'red',
    paddingRight: 15,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Arial'
  },
  backHomeButton: {
    position: 'absolute',
    bottom: 90,
    width: 80,
  },
  homeButton: {
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'Arial',
    color: 'white',
  },
});

export default Profile;
