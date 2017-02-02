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

class Doctor extends React.Component {

  onAppointmentClick(timeslot) {
    if (timeslot.status === "Open") {
      const data = {
        doctor: this.props.doctor,
        user: this.props.currentUser,
        time_slot: timeslot
      };

      this.props.createAppointment(data)
      .then(() => Actions.appointment({
        appointment: this.props.appointment
      }));
    }
  }

  render() {
    console.log(this.props);
    let appointment = this.props.appointent;
    let doctor = appointment.doctor;
    let currentUser = appointment.currentUser;

    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.bar}/>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                Appointment Detail
              </Text>
              <Text style={styles.headerDetail}>
                You are making an appointment with {`${doctor.name}`} on
              </Text>



          
            <View style={styles.detail}>
              <Text style={styles.detailText}>
                {doctor && doctor.name}
              </Text>
              <Text style={styles.detailText}>
                {doctor && doctor.address}
              </Text>
              <Text style={styles.detailText}>
                {doctor && doctor.address2}
              </Text>
              <Text style={styles.detailText}>
                {doctor && doctor.distance}
              </Text>
              <TouchableHighlight style={styles.backButton}
                                  onPress={() => Actions.home()}>
                <Text style={styles.backButtonText}>
                  Search again
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.firstDay}>
              <Text style={styles.date}>
                {doctor && doctor.first_day[0].date}
              </Text>
              <ScrollView>
                {firstDay}
              </ScrollView>
            </View>
            <View style={styles.secondDay}>
              <Text style={styles.date}>
                {doctor && doctor.second_day[0].date}
              </Text>
              <ScrollView>
                {secondDay}
              </ScrollView>
            </View>
            <View style={styles.thirdDay}>
              <Text style={styles.date}>
                {doctor && doctor.third_day[0].date}
              </Text>
              <ScrollView>
                {thirdDay}
              </ScrollView>
            </View>
          </View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    width: null,
    height: null,
    backgroundColor: 'rgba(0, 0, 0, 0.55)'
  },
  bar: {
    flex: 0.05
  },
  header: {
    flex: 0.2,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  picture: {
    flex: 0.35,
    alignSelf: 'center',
    paddingLeft: 20
  },
  doctorImg: {
    width: 100,
    height: 100,
  },
  detail: {
    flex: 0.65,
    padding: 15
  },
  detailText: {
    color: 'white',
    fontFamily: 'Arial',
  },
  backButton: {
    backgroundColor: '#FF3366',
    marginTop: 10,
    width: 120,
    padding: 5
  },
  backButtonText: {
    fontSize: 12,
    fontFamily: 'Arial',
    color: 'white',
    textAlign: 'center',
  },
  body: {
    flex: 0.75,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
});

export default Doctor;
