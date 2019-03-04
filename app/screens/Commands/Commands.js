import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import Status from '../../components/Status';
import { getData } from '../../utils/api';
import Button from '../../components/Button';
import * as strings from '../../constants/strings';
import { TextButton } from '../../components/TextButton';

export default class Commands extends Component {
  state = {
    status: ''
  };

  sendCode = code => async () => {
    const status = await getData(code + 128);
    this.setState({
      status
    });
  };

  forward = this.sendCode(10);

  allForward = this.sendCode(11);

  backward = this.sendCode(12);

  allBackward = this.sendCode(13);

  stop = this.sendCode(14);

  start = this.sendCode(15);

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Status navigation={this.props.navigation} status={this.state.status} />
        <View style={styles.contentWrapper}>
          <View style={styles.buttonsWrapper}>
            <TextButton onPress={this.forward} text={'Вперед'} />
            <TextButton onPress={this.allForward} text={'Все вперед'} />
            <TextButton onPress={this.backward} text={'Назад'} />
            <TextButton onPress={this.allBackward} text={'Все назад'} />
          </View>
          <View>
            <TextButton onPress={this.start} text={'Стоп'} />
            <TextButton onPress={this.start} text={'Старт'} />
          </View>
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
  startButton: { borderWidth: 1, alignItems: 'center', borderRadius: 5, marginTop: 10 },
  startButtonText: { padding: 10 }
});
