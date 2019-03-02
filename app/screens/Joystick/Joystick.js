import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

export default class Joystick extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#FFF' }}>
        <Text> Joystick </Text>
      </SafeAreaView>
    );
  }
}
