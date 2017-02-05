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
import Swiper from 'react-native-swiper';

class Doctor extends React.Component {

  onAppointmentClick(timeslot) {
    if (timeslot.status === "Open") {

      Actions.appointment({
        doctor: this.props.doctor,
        currentUser: this.props.currentUser,
        time_slot: timeslot
      });
    }
  }

  findDay(i) {
    let doctorSchedule = this.props.doctor.doctor_schedule;

    return (
      (doctorSchedule[i].map(timeslot => {
      let timeStyle;

      if (timeslot.status === "N/A") {
        timeStyle = styles.blocked;
      } else if (timeslot.status === "Full") {
        timeStyle = styles.full;
      } else {
        timeStyle = styles.open;
      }

      return (
        <TouchableHighlight key={timeslot.id} style={timeStyle}
                            onPress={() => this.onAppointmentClick(timeslot)}>
          <Text style={styles.timeslotText}>
            {timeslot.time}
          </Text>
        </TouchableHighlight>
      );
      }))
    );
  }

  swiperView() {
    let doctor = this.props.doctor;
    let doctorSchedule = this.props.doctor.doctor_schedule;
    let days = [];

    for (var j = 0; j < 30; j++) {
      days.push(this.findDay(j));
    }

    let swiperView = [];

    for (var i = 0; i < 10; i++) {
      swiperView.push(
        <View key={i} style={styles[`slide${i + 1}`], styles.slide}>
          <View style={styles.day1}>
            <Text style={styles.date}>
              {doctor && doctorSchedule[`${i * 3}`][0].date}
            </Text>
            <ScrollView style={styles.scroll}>
              {days[`${i * 3}`]}
            </ScrollView>
          </View>
          <View style={styles.day2}>
            <Text style={styles.date}>
              {doctor && doctorSchedule[`${i * 3 + 1}`][0].date}
            </Text>
            <ScrollView style={styles.scroll}>
              {days[`${i * 3 + 1}`]}
            </ScrollView>
          </View>
          <View style={styles.day3}>
            <Text style={styles.date}>
              {doctor && doctorSchedule[`${i * 3 + 2}`][0].date}
            </Text>
            <ScrollView style={styles.scroll}>
              {days[`${i * 3 + 2}`]}
            </ScrollView>
          </View>
        </View>
      );
    }

    return swiperView;
  }

  render() {
    let doctor = this.props.doctor;
    let doctorSchedule = this.props.doctor.doctor_schedule;
    let uri = doctor.image_url;

    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.bar}/>
          <View style={styles.header}>
            <View style={styles.picture}>
              <Image source={{uri}}
                     style={styles.doctorImg}/>
            </View>
            <View style={styles.detail}>
              <Text style={styles.doctorName}>
                {doctor && doctor.name}
              </Text>
              <Text style={styles.detailText}>
                {doctor && doctor.address}
              </Text>
              <Text style={styles.detailText}>
                {doctor && doctor.address2}
              </Text>
              <Text style={styles.detailText}>
                Distance: {doctor && this.props.distance} miles
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <Swiper style={styles.wrapper} showsButtons={false}>
              {this.swiperView()}
            </Swiper>
          </View>
          <View style={styles.footer}>
            <TouchableHighlight style={styles.backButton}
                                onPress={() => Actions.home({
                                  currentUser: this.props.currentUser
                                })}>
              <Text style={styles.backButtonText}>
                Search another doctor
              </Text>
            </TouchableHighlight>
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  bar: {
    margin: 10,
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
    borderRadius: 10,
  },
  detail: {
    flex: 0.65,
    padding: 12,
    paddingTop: 30,
  },
  doctorName: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginBottom: 15,
    fontSize: 15,
  },
  detailText: {
    color: 'white',
    fontFamily: 'Arial',
  },
  body: {
    flex: 0.65,
    flexDirection: 'row',
  },
  wrapper: {
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 230,
  },
  day1: {
    flex: 0.33,
  },
  day2: {
    flex: 0.33,
  },
  day3: {
    flex: 0.33,
  },
  date: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop: 15,
    paddingBottom: 15,
  },
  blocked: {
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  full: {
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  open: {
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  timeslotText: {
    alignSelf: 'center',
    fontFamily: 'Arial',
    color: 'white',
  },
  scroll: {
  },
  footer: {
    // flex: 0.1,
    alignSelf: 'stretch',
  },
  backButton: {
    height: 50,
    backgroundColor: '#0091EA',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Arial'
  },
});

export default Doctor;
