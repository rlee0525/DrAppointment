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
        user: this.props.currentUser,
        time_slot: timeslot
      });

      // this.props.createAppointment(data)
      // .then(() => Actions.appointment({
      //   appointment: this.props.appointment
      // }));
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

  render() {
    let doctor = this.props.doctor;
    let doctorSchedule = this.props.doctor.doctor_schedule;
    let uri = doctor.image_url;
    let firstDay = this.findDay(0);
    let secondDay = this.findDay(1);
    let thirdDay = this.findDay(2);
    let fourthDay = this.findDay(3);
    let fifthDay = this.findDay(4);
    let sixthDay = this.findDay(5);
    let seventhDay = this.findDay(6);
    let eighthDay = this.findDay(7);
    let ninethDay = this.findDay(8);

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
                Distance: {doctor && this.props.distance} miles
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
            <Swiper style={styles.wrapper} showsButtons={false}>
              <View style={styles.slide1}>
                <View style={styles.firstDay}>
                  <Text style={styles.date}>
                    {doctor && doctorSchedule[0][0].date}
                  </Text>
                  <ScrollView>
                    {firstDay}
                  </ScrollView>
                </View>
                <View style={styles.secondDay}>
                  <Text style={styles.date}>
                    {doctor && doctorSchedule[1][0].date}
                  </Text>
                  <ScrollView>
                    {secondDay}
                  </ScrollView>
                </View>
                <View style={styles.thirdDay}>
                  <Text style={styles.date}>
                    {doctor && doctorSchedule[2][0].date}
                  </Text>
                  <ScrollView>
                    {thirdDay}
                  </ScrollView>
                </View>
              </View>
              <View style={styles.slide2}>
                <View style={styles.firstDay}>
                  <Text style={styles.date}>
                    {doctor && doctorSchedule[3][0].date}
                  </Text>
                  <ScrollView>
                    {fourthDay}
                  </ScrollView>
                </View>
                <View style={styles.secondDay}>
                  <Text style={styles.date}>
                    {doctor && doctorSchedule[4][0].date}
                  </Text>
                  <ScrollView>
                    {fifthDay}
                  </ScrollView>
                </View>
                <View style={styles.thirdDay}>
                  <Text style={styles.date}>
                    {doctor && doctorSchedule[5][0].date}
                  </Text>
                  <ScrollView>
                    {sixthDay}
                  </ScrollView>
                </View>
              </View>
              <View style={styles.slide3}>
                <View style={styles.firstDay}>
                  <Text style={styles.date}>
                    {doctor && doctorSchedule[6][0].date}
                  </Text>
                  <ScrollView>
                    {seventhDay}
                  </ScrollView>
                </View>
                <View style={styles.secondDay}>
                  <Text style={styles.date}>
                    {doctor && doctorSchedule[7][0].date}
                  </Text>
                  <ScrollView>
                    {eighthDay}
                  </ScrollView>
                </View>
                <View style={styles.thirdDay}>
                  <Text style={styles.date}>
                    {doctor && doctorSchedule[8][0].date}
                  </Text>
                  <ScrollView>
                    {ninethDay}
                  </ScrollView>
                </View>
              </View>
            </Swiper>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
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
    backgroundColor: '#0091EA',
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
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  firstDay: {
    flex: 0.33,
  },
  secondDay: {
    flex: 0.33,
  },
  thirdDay: {
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
  }
});

export default Doctor;
