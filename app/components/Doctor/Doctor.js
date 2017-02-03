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

  render() {
    let doctor = this.props.doctor;
    let uri = doctor.image_url;
    let firstDay;
    let secondDay;
    let thirdDay;
    let fourthDay;
    let fifthDay;
    let sixthDay;
    let seventhDay;
    let eighthDay;
    let ninethDay;

    if (doctor) {
      firstDay = (doctor.first_day.map(timeslot => {
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
      }));
      secondDay = (doctor.second_day.map(timeslot => {
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
      }));
      thirdDay = (doctor.third_day.map(timeslot => {
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
      }));
      fourthDay = (doctor.fourth_day.map(timeslot => {
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
      }));
      fifthDay = (doctor.fifth_day.map(timeslot => {
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
      }));
      sixthDay = (doctor.sixth_day.map(timeslot => {
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
      }));
      seventhDay = (doctor.seventh_day.map(timeslot => {
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
      }));
      eighthDay = (doctor.eighth_day.map(timeslot => {
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
      }));
      ninethDay = (doctor.nineth_day.map(timeslot => {
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
      }));
    }

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
              <View style={styles.slide2}>
                <View style={styles.firstDay}>
                  <Text style={styles.date}>
                    {doctor && doctor.fourth_day[0].date}
                  </Text>
                  <ScrollView>
                    {fourthDay}
                  </ScrollView>
                </View>
                <View style={styles.secondDay}>
                  <Text style={styles.date}>
                    {doctor && doctor.fifth_day[0].date}
                  </Text>
                  <ScrollView>
                    {fifthDay}
                  </ScrollView>
                </View>
                <View style={styles.thirdDay}>
                  <Text style={styles.date}>
                    {doctor && doctor.sixth_day[0].date}
                  </Text>
                  <ScrollView>
                    {sixthDay}
                  </ScrollView>
                </View>
              </View>
              <View style={styles.slide3}>
                <View style={styles.firstDay}>
                  <Text style={styles.date}>
                    {doctor && doctor.seventh_day[0].date}
                  </Text>
                  <ScrollView>
                    {seventhDay}
                  </ScrollView>
                </View>
                <View style={styles.secondDay}>
                  <Text style={styles.date}>
                    {doctor && doctor.eighth_day[0].date}
                  </Text>
                  <ScrollView>
                    {eighthDay}
                  </ScrollView>
                </View>
                <View style={styles.thirdDay}>
                  <Text style={styles.date}>
                    {doctor && doctor.nineth_day[0].date}
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
