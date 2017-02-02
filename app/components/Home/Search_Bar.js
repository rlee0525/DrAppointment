import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    flex: 1
  },
  input: {
    height: 30,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  }
});

const SearchBar = (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Search doctor by first or last name..."
      onChangeText={(text) => console.log('searching for ', text)}
    />
  </View>
);

export default SearchBar;
