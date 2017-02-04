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

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      patientsUnselected: [],
      patientsSelected: []
    };

    this.createPatient = this.createPatient.bind(this);
    this.enterNotes = this.enterNotes.bind(this);
    this.makeAppointment = this.makeAppointment.bind(this);
  }

  componentDidMount() {
    this.props.fetchPatients()
      .then(() => {
        this.props.patients.map(patient => {
          this.state.patientsUnselected.push(patient);
          let patientsUnselected = this.state.patientsUnselected;
          this.setState({ patientsUnselected });
        });
      });
  }

  addPatient(patient) {
    let add = true;

    if (this.state.patientsSelected.length >= 2) {
      add = false;
    }

    if (add) {
      let index = this.state.patientsUnselected.indexOf(patient);
      this.state.patientsUnselected.splice(index, 1);
      this.state.patientsSelected.push(patient);
      let patientsUnselected = this.state.patientsUnselected;
      let patientsSelected = this.state.patientsSelected;
      this.setState({ patientsSelected, patientsUnselected });
    }
  }

  removePatient(patient) {
    let index = this.state.patientsSelected.indexOf(patient);
    this.state.patientsSelected.splice(index, 1);
    this.state.patientsUnselected.push(patient);
    let patientsSelected = this.state.patientsSelected;
    let patientsUnselected = this.state.patientsUnselected;
    this.setState({ patientsSelected, patientsUnselected });
  }

  // TODO:
  deletePatient() {

  }

  createPatient() {
    let name = this.state.name.split(" ");

    this.props.createPatient({
      firstName: name[0],
      lastName: name[1]
    })
    .then(() => this.props.fetchPatients())
    .then(() => {
      let patients = this.props.patients;
      this.state.patientsUnselected.push(patients[patients.length - 1]);
      let patientsUnselected = this.state.patientsUnselected;
      this.setState({ patientsUnselected });
    })
    .then(() => this.setState({ name: "" }));
  }

  enterNotes(input) {
    this.setState({ notes: input });
  }

  makeAppointment() {
    this.props.makeAppointment({
      patients: this.state.patientsSelected,
      doctorId: this.props.doctor.id,
      timeSlot: this.props.time_slot.id,
      notes: this.state.notes
    })
    .then(() => Actions.profile());
  }

  render() {
    let patientsSelected;
    let patientsUnselected;

    patientsSelected = this.state.patientsSelected.map(patient => {
      return (
        <View key={patient.id} style={styles.patientsSelectedView}>
          <TouchableHighlight>
            <Icon style={styles.icon} name="check-circle" size={30}
                  color="rgba(255, 255, 255, 0.8)" />
          </TouchableHighlight>

          <Text style={styles.patientsSelected}>
            {patient.first_name} {patient.last_name}
          </Text>

          <TouchableHighlight onPress={() => this.removePatient(patient)}>
            <Icon style={styles.icon} name="minus-circle" size={30}
                  color="rgba(255, 0, 0, 0.8)" />
          </TouchableHighlight>
        </View>
      );
    });

    patientsUnselected = this.state.patientsUnselected.map(patient => {
      return (
        <View key={patient.id} style={styles.patientsUnselectedView}>
          <TouchableHighlight>
            <Icon style={styles.icon} name="minus-circle" size={30}
                  color="rgba(255, 0, 0, 0.8)" />
          </TouchableHighlight>

          <Text style={styles.patientsUnselected}>
            {patient.first_name} {patient.last_name}
          </Text>

          <TouchableHighlight onPress={() => this.addPatient(patient)}>
            <Icon style={styles.icon} name="plus-circle" size={30}
                  color="rgba(0, 255, 0, 0.8)" />
          </TouchableHighlight>
        </View>
      );
    });

    return(
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.bar}/>

          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              Appointment Detail
            </Text>
            <Text style={styles.headerDetail}>
              You are making an appointment with {`${this.props.doctor.name} on ${this.props.time_slot.date} at ${this.props.time_slot.time}`} for the following patients:
            </Text>
          </View>

          <ScrollView style={styles.body}>
            <View style={styles.appointmentPatients}>
              <View style={styles.selected}>
                {patientsSelected}
              </View>

              <View style={styles.notes}>
                <TextInput style={styles.notesInput}
                  placeholder="Notes (Optional)"
                  placeholderTextColor="rgba(0, 0, 0, 0.7)"
                  onChangeText={(input) => this.enterNotes(input)}
                  value={this.state.notes}/>
              </View>

              <View style={styles.appointmentButton}>
                <TouchableHighlight style={styles.button}
                  onPress={() => this.makeAppointment()} >
                  <Text style={styles.buttonText}>
                    Make an appointment
                  </Text>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.addPatients}>
              <View style={styles.unselected}>
                {patientsUnselected}
              </View>

              <View style={styles.textBox}>
                <Icon style={styles.icon2} name="user" size={25}
                      color="rgba(255, 255, 255, 0.8)" />
                <TextInput
                  onChangeText={(name) => this.setState({ name })}
                  style={styles.input} placeholder="Enter a full name"
                  placeholderTextColor="rgba(255, 255, 255, 0.8)"
                  autoFocus={false} autoCapitalize="words" />

              </View>

              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}
                      onPress={() => this.createPatient()} >
                  Create a new patient
                </Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
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
    marginBottom: 15,
  },
  body: {
    flex: 0.75,
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
  headerTitle: {
    flex: 0.3,
    color: 'white',
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  headerDetail: {
    flex: 0.7,
    color: 'white',
    fontSize: 12,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: 'Arial',
  },
  appointmentPatients: {
    flex: 0.6,
    alignSelf: 'stretch',
  },
  addPatients: {
    flex: 0.4,
    alignSelf: 'stretch',
  },
  selected: {

  },
  patientsSelectedView: {
    backgroundColor: 'green',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
  },
  icon: {
    flex: 0.15,
    paddingLeft: 15,
  },
  patientsSelected: {
    fontSize: 16,
    color: 'white',
    paddingTop: 5,
    paddingLeft: 15,
    fontFamily: 'Arial',
  },
  notes: {
    marginBottom: 15,
  },
  notesInput: {
    alignSelf: 'stretch',
    height: 100,
    fontSize: 14,
    paddingLeft: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  appointmentButton: {
    marginBottom: 50,
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
  unselected: {

  },
  patientsUnselectedView: {
    backgroundColor: 'gray',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
  },
  patientsUnselected: {
    fontSize: 16,
    color: 'white',
    paddingTop: 5,
    paddingLeft: 15,
    fontFamily: 'Arial',
  },
  textBox: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 50,
  },

  // TODO: center it
  icon2: {
    flex: 0.15,
    marginTop: 5,
    paddingLeft: 95,
    textAlign: 'center',
  },
  input: {
    flex: 0.85,
    height: 40,
    fontSize: 15,
    fontFamily: 'Arial',
    color: 'white',
  },
});

export default Appointment;
