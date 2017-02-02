import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableHighlight, Linking
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "black",
    borderStyle: 'solid',
  },
  text: {
    marginLeft: 0,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: 'solid',
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  left: {
    paddingRight: 10,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: 'solid',
  },
  right: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: 'solid'
  }
});

const DoctorListing = (props) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Image source={{ uri: props.doctor.image_url}} style={styles.photo} />
    </View>
    <View style={styles.right}>
      <TouchableHighlight style={styles.button}
                          onPress={() => Linking.openURL(`http://localhost:3000/api/doctors/${props.doctor.id}`)}>
        <Text style={styles.text}>
          {props.doctor.name}
        </Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.button}
                          onPress={() => Linking.openURL(`${props.doctor.phone}`)}>
        <Text style={styles.text}>
          Call: {props.doctor.phone}
        </Text>
      </TouchableHighlight>
    </View>
  </View>
);

export default DoctorListing;
