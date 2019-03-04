import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import Status from '../../components/Status';
import { getData } from '../../utils/api';
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
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Status navigation={this.props.navigation} status={this.state.status} />
          <View style={styles.contentWrapper}>
            <View style={styles.buttonsWrapper}>
              <TextButton onPress={this.forward} text={strings.FORWARD} />
              <TextButton onPress={this.allForward} text={strings.ALL_FORWARD} />
              <TextButton onPress={this.backward} text={strings.BACKWARD} />
              <TextButton onPress={this.allBackward} text={strings.ALL_BACKWARD} />
            </View>
            <View>
              <TextButton onPress={this.start} text={strings.STOP} />
              <TextButton onPress={this.start} text={strings.START} />
            </View>
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
  startButton: { borderWidth: 1, alignItems: 'center', borderRadius: 5, marginTop: 10 },
  startButtonText: { padding: 10 }
});
