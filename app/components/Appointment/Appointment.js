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
import Swipeout from 'react-native-swipeout';

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
    this.deletePatient = this.deletePatient.bind(this);
  }

  componentWillMount() {
    this.props.fetchPatients()
      .then(() => {
        this.props.patients.map(patient => {
          if (patient.id !== this.props.currentUser.id) {
            this.state.patientsUnselected.push(patient);
            let patientsUnselected = this.state.patientsUnselected;
            this.setState({ patientsUnselected });
          } else {
            this.state.patientsSelected.push(patient);
            let patientsSelected = this.state.patientsSelected;
            this.setState({ patientsSelected });
          }
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

  deletePatient(patient) {
    this.props.deletePatient(patient.id)
      .then(() => {
        let patientsSelected = this.state.patientsSelected.filter(
          res => res.id !== patient.id
        );
        let patientsUnselected = this.state.patientsUnselected.filter(
          res => res.id !== patient.id
        );
        this.setState({ patientsSelected, patientsUnselected });
      });
  }

  createPatient() {
    let name = this.state.name.split(" ");

    this.props.createPatient({
      firstName: name[0],
      lastName: name[1]
    })
      .then(response => {
        if (response.status === 200) {
          this.props.fetchPatients()
            .then(() => {
              let index = 0;
              let newPatient = this.props.patients[index];
              this.state.patientsUnselected.push(newPatient);
              let patientsUnselected = this.state.patientsUnselected;
              this.setState({ patientsUnselected });
            });
          this.setState({ name: "" });
          return response;
        }
        console.log(response);
      });
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
    .then(response => {
      if (response.status === 200)
      {
        Actions.profile({ currentUser: this.props.currentUser });
      }
    });
  }

  render() {
    let patientsSelected;
    let patientsUnselected;

    patientsSelected = this.state.patientsSelected.map(patient => {
      return (
        <Swipeout right={[{
            text: 'Delete',
            backgroundColor: 'red',
            color: 'white',
            onPress: () => this.deletePatient(patient),
          }]} backgroundColor='rgba(255, 255, 255, 0)' key={patient.id}
          style={styles.test} >
          <TouchableHighlight onPress={() => this.removePatient(patient)}>
            <View style={styles.patientsSelectedView}>
              <View>
                <Text style={styles.patientsSelected}>
                  {patient.first_name} {patient.last_name}
                </Text>
              </View>
              <View>
                <Icon style={styles.icon} name="check-circle" size={26}
                      color="rgba(255, 255, 255, 0.8)" />
              </View>
            </View>
          </TouchableHighlight>
        </Swipeout>
      );
    });

    if (patientsSelected.length === 0) patientsSelected = (
      <View style={styles.noPatientsSelectedView}>
        <Text style={styles.noPatientsSelected}>
          Please select a patient.
        </Text>
      </View>
    );

    patientsUnselected = this.state.patientsUnselected.map(patient => {
      return (
        <Swipeout right={[{
            text: 'Delete',
            backgroundColor: 'red',
            color: 'white',
            onPress: () => this.deletePatient(patient),
          }]} backgroundColor='rgba(255, 255, 255, 0)' key={patient.id}
          style={styles.test} >
          <TouchableHighlight onPress={() => this.addPatient(patient)}>
            <View style={styles.patientsUnselectedView}>
              <Text style={styles.patientsUnselected}>
                {patient.first_name} {patient.last_name}
              </Text>
            </View>
          </TouchableHighlight>
        </Swipeout>
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
              You are making an appointment with {`${this.props.doctor.name} on ${this.props.time_slot.date} at ${this.props.time_slot.time}`} for the following patients (Max 2):
            </Text>
          </View>

          <ScrollView style={styles.body}>
            <View style={styles.appointmentPatients}>
              <View style={styles.selected}>
                {patientsSelected}
              </View>
              <View style={styles.unselected}>
                {patientsUnselected}
              </View>
              <View style={styles.newPatientView}>
                <TouchableHighlight style={styles.newPatientTouch}>
                  <View style={styles.newPatientContainer}>
                    <View style={styles.newPatientTextbox}>
                      <TextInput
                        onChangeText={(name) => this.setState({ name })}
                        style={styles.input} placeholder="Create a new patient"
                        placeholderTextColor="rgba(255, 255, 255, 0.8)"
                        autoFocus={false} autoCapitalize="words"
                        value={this.state.name} />
                    </View>
                    <View style={styles.newPatientAdd}>
                      <TouchableHighlight style={styles.addPatient}
                        onPress={() => this.createPatient()}>
                        <Text style={styles.addPatientText}>
                          Create
                        </Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </TouchableHighlight>
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
                <TouchableHighlight style={styles.button2}
                  onPress={() => Actions.home({
                    currentUser: this.props.currentUser
                  })} >
                  <Text style={styles.buttonText}>
                    Cancel
                  </Text>
                </TouchableHighlight>
              </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
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
    flex: 0.5,
    alignSelf: 'stretch',
  },
  addPatients: {
    flex: 0.5,
    alignSelf: 'stretch',
  },
  selected: {
  },
  patientsSelectedView: {
    backgroundColor: 'green',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
  noPatientsSelectedView: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
    padding: 15,
    marginBottom: 15,
  },
  noPatientsSelected: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    paddingTop: 5,
    paddingLeft: 15,
    fontFamily: 'Arial',
  },
  newPatientView: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
  },
  newPatientContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newPatientTextbox: {
    flex: 0.8,
    flexDirection: 'row',
  },
  newPatientAdd: {
    flex: 0.2
  },
  icon3: {
    flex: 0.15,
    paddingTop: 4,
    paddingLeft: 3,
  },
  icon: {
    flex: 0.15,
    paddingLeft: 15,
  },
  patientsSelected: {
    fontSize: 20,
    color: 'white',
    paddingTop: 2,
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
    marginBottom: 12,
  },
  button2: {
    height: 50,
    backgroundColor: 'red',
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
  },
  patientsUnselected: {
    fontSize: 20,
    color: 'white',
    paddingTop: 2,
    paddingLeft: 15,
    fontFamily: 'Arial',
    textAlign: 'center',
  },
  textBox: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 50,
  },
  icon2: {
    flex: 0.15,
    marginTop: 5,
    textAlign: 'center',
  },
  input: {
    flex: 0.85,
    height: 40,
    fontSize: 18,
    fontFamily: 'Arial',
    color: 'white',
    paddingLeft: 20,
  },
  test: {
    marginBottom: 15,
  },
  addPatient: {
    backgroundColor: "rgba(0, 255, 0, 0.8)",
    padding: 10,
    borderRadius: 10,
  },
  addPatientText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Arial',
  }
});

export default Appointment;
