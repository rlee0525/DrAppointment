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

class Appointment extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPatients();
  }

  render() {
    let patients;
    patients = this.props.patients.map( patient => {
      return (
        <View key={patient.id} style={styles.patientsSelectedView}>
          <Text style={styles.patientsSelected}>
            -
          </Text>
          <Text style={styles.patientsSelected}>
            {patient.first_name} {patient.last_name}
          </Text>
          <Text style={styles.patientsSelected}>
            +
          </Text>
        </View>
      );
    });
    console.log(this);
    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.bar}/>

          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              Appointment Detail
            </Text>
            <Text style={styles.headerDetail}>
              You are making an appointment
            </Text>
          </View>

          <View style={styles.body}>
            <ScrollView style={styles.patientData}>
              {patients}
              <View style={styles.notes}>
                <TextInput style={styles.notesInput}
                           placeholder="Notes (Optional)"
                           placeholderTextColor="rgba(255, 255, 255, 0.7)" />
              </View>
            </ScrollView>
            <View style={styles.appointmentButton}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}>
                  Make an appointment
                </Text>
              </TouchableHighlight>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  bar: {
    flex: 0.05
  },
  header: {
    flex: 0.2,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
  headerTitle: {
    flex: 0.2,
    color: 'white',
    fontSize: 14,
    paddingLeft: 15,
    paddingTop: 15,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  headerDetail: {
    flex: 0.7,
    color: 'white',
    fontSize: 12,
    paddingTop: 5,
    paddingLeft: 15,
    fontFamily: 'Arial',
  },
  body: {
    flex: 0.75,
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
  patientsSelectedView: {
    backgroundColor: 'green',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
  patientsSelected: {
    fontSize: 18,
    color: 'white',
  },
  patientsView: {
    backgroundColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
  notesInput: {
    color: 'white',
    alignSelf: 'stretch',
    height: 120,
    backgroundColor: 'red',
  },
  patients: {
    fontSize: 18,
    color: 'white',
  },
  patientData: {
    flex: 0.7,
  },
  appointmentButton: {
    flex: 0.3,
  },
  button: {
    height: 50,
    backgroundColor: '#0091EA',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Arial'
  },
});

export default Appointment;
