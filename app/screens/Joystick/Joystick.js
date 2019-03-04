import React, { Component } from 'react';
import { Text, SafeAreaView, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import { COMMANDS } from '../../routes/routeNames';
import * as strings from '../../constants/strings';
import { getData } from '../../utils/api';

export default class Joystick extends Component {
  state = {
    status: ''
  };
  sendCode = code => async () => {
    const status = await getData(code + 128);
    this.setState({
      status
    });
  };

  buttonLeftTop = this.sendCode(10);

  buttonConterTop = this.sendCode(2);

  buttonRightTop = this.sendCode(18);

  buttonLeftMiddle = this.sendCode(8);

  buttonRightMiddle = this.sendCode(16);

  buttonLeftBottom = this.sendCode(12);

  buttonCenterBottom = this.sendCode(4);

  buttonRightBottom = this.sendCode(20);

  start = this.sendCode(32);

  openSecondScreen = () => {
    const { navigate } = this.props.navigation;
    navigate(COMMANDS);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
          <View style={{ height: 50, justifyContent: 'center' }}>
            <Text>
              {strings.DUMMY_STATUS}: {this.state.status}
            </Text>
          </View>
          <TouchableOpacity onPress={this.openSecondScreen} style={[styles.startButton, { width: 80 }]}>
            <Text style={styles.startButtonText}>2 экран</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.buttonsWrapper}>
            <Button onPress={this.buttonLeftTop} style={styles.buttonLeftTop} />
            <Button onPress={this.buttonConterTop} />
            <Button onPress={this.buttonRightTop} style={styles.buttonRightTop} />
            <View style={styles.middleButtonsWrapper}>
              <Button onPress={this.buttonLeftMiddle} style={styles.buttonLeftMiddle} />
              <Button onPress={this.buttonRightMiddle} style={styles.buttonRightMiddle} />
            </View>
            <Button onPress={this.buttonLeftBottom} style={styles.buttonLeftBottom} />
            <Button onPress={this.buttonCenterBottom} style={styles.buttonCenterBottom} />
            <Button onPress={this.buttonRightBottom} style={styles.buttonRightBottom} />
          </View>
          <TouchableOpacity onPress={this.start} style={styles.startButton}>
            <Text style={styles.startButtonText}>{strings.START}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    justifyContent: 'space-between'
  },
  contentWrapper: { justifyContent: 'space-between', flexDirection: 'row', padding: 20, alignItems: 'center' },
  buttonsWrapper: { width: 150, height: 150, flexWrap: 'wrap', flexDirection: 'row' },
  startButton: { borderWidth: 1, alignItems: 'center', borderRadius: 5 },
  startButtonText: { padding: 10 },
  middleButtonsWrapper: { flexDirection: 'row', justifyContent: 'space-between', width: 150 },
  buttonLeftTop: {
    transform: [
      {
        rotate: '315deg'
      }
    ]
  },
  buttonRightTop: {
    transform: [
      {
        rotate: '45deg'
      }
    ]
  },
  buttonLeftMiddle: {
    transform: [
      {
        rotate: '270deg'
      }
    ]
  },
  buttonRightMiddle: {
    transform: [
      {
        rotate: '90deg'
      }
    ]
  },
  buttonLeftBottom: {
    transform: [
      {
        rotate: '225 deg'
      }
    ]
  },
  buttonCenterBottom: {
    transform: [
      {
        rotate: '180deg'
      }
    ]
  },
  buttonRightBottom: {
    transform: [
      {
        rotate: '135deg'
      }
    ]
  }
});
