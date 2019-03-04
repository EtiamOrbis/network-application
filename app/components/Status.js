import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as routeNames from '../routes/routeNames';
import * as strings from '../constants/strings';
import { TextButton } from './TextButton';

export default class Status extends Component {
  openScreen = () => {
    const { navigate, state } = this.props.navigation;
    navigate(state.routeName === routeNames.JOYSTICK ? routeNames.COMMANDS : routeNames.JOYSTICK);
  };

  render() {
    const { routeName } = this.props.navigation.state;
    return (
      <View style={{ flexDirection: 'column', marginLeft: 20 }}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.paramsText}>X: {this.props.status}</Text>
          <Text style={styles.paramsText}>Y: {this.props.status}</Text>
          <Text style={styles.paramsText}>Z: {this.props.status}</Text>
          <Text style={styles.paramsText}>
            {strings.DUMMY_STATUS}: {this.props.status}
          </Text>
        </View>
        <TextButton
          style={styles.startButton}
          onPress={this.openScreen}
          text={routeName === routeNames.JOYSTICK ? '2 экран' : '1 экран'}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  startButton: { borderWidth: 1, alignItems: 'center', borderRadius: 5, marginTop: 10, width: 80 },
  startButtonText: { padding: 10 },
  paramsText: { marginTop: 10 }
});
