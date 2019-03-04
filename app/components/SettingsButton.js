import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import { SETTINGS } from '../routes/routeNames';
import * as strings from '../constants/strings';

export default class SettingsButton extends Component {
  openSettings = () => {
    const { navigate } = this.props.navigation;
    navigate(SETTINGS);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.openSettings} style={{ marginRight: 10 }}>
        <Image source={{ uri: strings.SETTINGS_ICON }} style={styles.settingsButton} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  settingsButton: {
    width: 30,
    height: 30
  }
});
