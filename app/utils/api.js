import { AsyncStorage, Alert } from 'react-native';
import { ERROR } from '../constants/strings';

export const getData = async code => {
  const url = await AsyncStorage.getItem('@url:key');
  let status = '';
  if (url) {
    try {
      let method = {
        method: 'post',
        body: JSON.stringify(code),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      };
      const response = await fetch(url, method);
      status = response.status;
    } catch (error) {
      status = error.message;
      Alert.alert(
        ERROR,
        error.message,
        [
          {
            text: 'OK',
            onPress: () => null
          }
        ],
        { cancelable: true }
      );
    }
  }
  return status;
};
