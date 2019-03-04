import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export class TextButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPressIn={this.props.onPress}
        onPressOut={this.props.onPress}
        style={[styles.button, this.props.style]}
      >
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default TextButton;

const styles = StyleSheet.create({
  button: { borderWidth: 1, alignItems: 'center', borderRadius: 5, marginTop: 10 },
  buttonText: { padding: 10 }
});
