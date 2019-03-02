import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AppNavigator from './app/routes';

AppRegistry.registerComponent(appName, () => AppNavigator);
