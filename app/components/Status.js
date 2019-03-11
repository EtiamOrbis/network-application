import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
      <View style={styles.container}>
        <Text style={styles.paramsText}>
          {strings.STATUS}: {this.props.status}
        </Text>
        <TextButton
          style={styles.startButton}
          onPress={this.openScreen}
          text={routeName === routeNames.JOYSTICK ? strings.SECOND_SCREEN : strings.FIRST_SCREEN}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flexDirection: 'column', marginLeft: 20 },
  startButton: { borderWidth: 1, alignItems: 'center', borderRadius: 5, marginTop: 10, width: 80 },
  startButtonText: { padding: 10 },
  paramsText: { marginTop: 10 }
});
