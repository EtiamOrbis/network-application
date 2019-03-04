import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import Button from '../../components/Button';
import * as strings from '../../constants/strings';
import { getData } from '../../utils/api';
import Status from '../../components/Status';
import { TextButton } from '../../components/TextButton';

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

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Status navigation={this.props.navigation} status={this.state.status} />
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
            <TextButton onPress={this.start} text={strings.START} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF'
  },
  contentContainer: { justifyContent: 'space-between', flexGrow: 1 },
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
