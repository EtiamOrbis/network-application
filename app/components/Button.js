import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ARROW_ICON } from '../constants/strings';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPressIn={this.props.onPress} onPressOut={this.props.onPress} style={styles.button}>
        <Image
          source={{ uri: ARROW_ICON }}
          style={[
            {
              width: 20,
              height: 11
            },
            this.props.style
          ]}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5
  }
});
