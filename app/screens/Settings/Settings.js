import React, { Component } from 'react';
import { SafeAreaView, TextInput, AsyncStorage, Alert } from 'react-native';
import { ENTER_URL } from '../../constants/strings';
import { GRAY_COLOR } from '../../constants/colors';
import { isValidUrl } from '../../utils/validator';

export default class Settings extends Component {
  state = {
    url: '',
    isValidUrl: true
  };

  componentDidMount = async () => {
    const url = await AsyncStorage.getItem('@url:key');
    if (url) {
      this.setState({
        url
      });
    }
  };

  changeUrl = url => {
    this.setState({
      url
    });
    if (url && isValidUrl(url)) {
      this.setState({
        isValidUrl: true
      });
    } else {
      this.setState({
        isValidUrl: false
      });
    }
  };

  saveUrl = async () => {
    if (this.state.isValidUrl) {
      await AsyncStorage.setItem('@url:key', this.state.url);
    } else {
      Alert.alert('Невалидный URL');
    }
  };
  render() {
    return (
      <SafeAreaView>
        <TextInput
          autoCapitalize='none'
          numberOfLines={1}
          onChangeText={this.changeUrl}
          onEndEditing={this.saveUrl}
          placeholder={ENTER_URL}
          style={{
            height: 50,
            fontSize: 16,
            paddingLeft: 10,
            borderBottomWidth: 1,
            borderBottomColor: this.state.isValidUrl ? GRAY_COLOR : '#FF0000'
          }}
          value={this.state.url}
        />
      </SafeAreaView>
    );
  }
}
