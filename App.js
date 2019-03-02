import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ width: '100%', height: '100%', flex: 1, backgroundColor: '#FFF' }}>
        <Text>text</Text>
      </SafeAreaView>
    );
  }
}
