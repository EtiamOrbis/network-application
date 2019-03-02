import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as routeNames from './routeNames';
import Joystick from '../screens/Joystick/Joystick';
import Commands from '../screens/Commands/Commands';
import Settings from '../screens/Settings/Settings';

const nullHeaderNavigationOptions = { header: null };

const AppNavigator = createStackNavigator(
  {
    [routeNames.JOYSTICK]: {
      screen: Joystick,
      navigationOptions: nullHeaderNavigationOptions
    },
    [routeNames.COMMANDS]: {
      screen: Commands,
      navigationOptions: nullHeaderNavigationOptions
    },
    [routeNames.SETTINGS]: {
      screen: Settings,
      navigationOptions: nullHeaderNavigationOptions
    }
  },
  {
    cardStyle: { backgroundColor: 'white', shadowColor: 'transparent' },
    initialRouteName: routeNames.JOYSTICK
  }
);

export default createAppContainer(AppNavigator);
