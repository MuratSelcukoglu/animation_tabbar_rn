//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styles from './HomePage.styles';

// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#fff'
        }}
      >
        home page
      </Text>
    </View>
  );
};

//make this component available to the app
export default MyComponent;
