//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './WorkPage.styles';

// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#fff'
        }}
      >
        work
      </Text>
    </View>
  );
};

//make this component available to the app
export default MyComponent;
