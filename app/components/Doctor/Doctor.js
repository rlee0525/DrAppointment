import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Doctor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doctor: {}
    };
  }

  render() {
    debugger;
    return (
      <Image source={require('../../images/temp.jpg')} style={styles.container}>
        <View style={styles.container}>
        <View style={styles.header}>
          <Text>
            {this.props.doctor && this.props.doctor.name}
          </Text>
        </View>
        <TouchableHighlight style={styles.button}
                            onPress={() => Actions.appointment()}>
          <Text style={styles.buttonText} >
            make an appointment!
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    width: null,
    height: null,
    backgroundColor: 'rgba(0, 0, 0, 0.55)'
  },
  header: {
    flex: 0.3,
    backgroundColor: 'white',
  }
});

export default Doctor;
