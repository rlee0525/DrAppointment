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
    this.state = {
      patients: []
    };
    this.enterFirstName = this.enterFirstName.bind(this);
    this.enterLastName = this.enterLastName.bind(this);
    this.createPatient = this.createPatient.bind(this);
    this.enterNotes = this.enterNotes.bind(this);
    this.makeAppointment = this.makeAppointment.bind(this);
  }

  componentDidMount() {
    this.props.fetchPatients();
  }

  addPatient(patient) {
    let add = true;
    if (this.state.patients.length >= 2) {
      add = false;
    }
    for (var i = 0; i < this.state.patients.length; i++) {
      if (this.state.patients[i].id === patient.id) {
        add = false;
      }
    }
    if (add) {
      this.state.patients.push(patient);
      let patients = this.state.patients;
      this.setState({ patients });
    }
  }

  removePatient(patient) {
    let patients = this.state.patients.filter(el => {
        return el.id !== patient.id;
      });
    this.setState({ patients });
  }

  enterFirstName(input) {
    this.setState({ firstName: input });
  }

  enterLastName(input) {
    this.setState({ lastName: input });
  }

  enterNotes(input) {
    this.setState({ notes: input });
  }

  createPatient() {
    this.props.createPatient({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
    .then(() => this.props.fetchPatients())
    .then(() => this.setState({ firstName: "", lastName: "" }));
  }

  makeAppointment() {
    this.props.makeAppointment({
      patients: this.state.patients,
      doctorId: this.props.doctor.id,
      timeSlot: this.props.time_slot.id,
      notes: this.state.notes
    })
    .then(() => Actions.profile());
  }

  render() {
    let patients;
    patients = this.props.patients.map( patient => {
      return (
        <View key={patient.id} style={styles.patientsSelectedView}>
          <TouchableHighlight onPress={() => this.removePatient(patient) }>
            <Text style={styles.patientsSelected}>
              -
            </Text>
          </TouchableHighlight>
          <Text style={styles.patientsSelected}>
            {patient.first_name} {patient.last_name}
          </Text>
          <TouchableHighlight onPress={() => this.addPatient(patient)}>
            <Text style={styles.patientsSelected}>
              +
            </Text>
          </TouchableHighlight>
        </View>
      );
    });

    let appointmentPatients;
     appointmentPatients = this.state.patients.map( patient => {
       return (
         <View key={patient.id} style={styles.patientsSelectedView}>
           <Text style={styles.patientsSelected}>
             Appointed Patient: {patient.first_name} {patient.last_name}
           </Text>
         </View>
       );
     });

    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.bar}/>

          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              Appointment Detail
            </Text>
            <Text style={styles.headerDetail}>
              You are making an appointment for the following patients:
            </Text>
            { appointmentPatients }
          </View>

          <View style={styles.header}>
            <TextInput style={styles.patientName}
              placeholder="New patient first name"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              onChangeText={(input) => this.enterFirstName(input)}
              value={this.state.firstName}/>
          </View>
          <View style={styles.header}>
            <TextInput style={styles.patientName}
              placeholder="New patient last name"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              onChangeText={(input) => this.enterLastName(input)}
              value={this.state.lastName}/>
          </View>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.createPatient()} >
              Add new patient
            </Text>
          </TouchableHighlight>

          <View style={styles.body}>
            <ScrollView style={styles.patientData}>
              {patients}
              <View style={styles.notes}>
                <TextInput style={styles.notesInput}
                           placeholder="Notes (Optional)"
                           placeholderTextColor="rgba(255, 255, 255, 0.7)"
                           onChangeText={(input) => this.enterNotes(input)}
                           value={this.state.notes}/>
              </View>
            </ScrollView>
            <View style={styles.appointmentButton}>
              <TouchableHighlight style={styles.button} onPress={() => this.makeAppointment()} >
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
  patientName: {
    flex: 0.2,
    color: 'white',
    fontSize: 12,
    paddingTop: 5,
    paddingLeft: 15,
    fontFamily: 'Arial',
  },
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
