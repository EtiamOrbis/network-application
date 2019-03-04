import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as routeNames from './routeNames';
import * as strings from '../constants/strings';
import Joystick from '../screens/Joystick/Joystick';
import Commands from '../screens/Commands/Commands';
import Settings from '../screens/Settings/Settings';
import SettingsButton from '../components/SettingsButton';

const AppNavigator = createStackNavigator(
  {
    [routeNames.JOYSTICK]: {
      screen: Joystick,
      navigationOptions: props => {
        return {
          title: strings.JOYSTICK,
          headerRight: <SettingsButton {...props} />
        };
      }
    },
    [routeNames.COMMANDS]: {
      screen: Commands,
      navigationOptions: props => {
        return {
          title: strings.COMMANDS,
          headerRight: <SettingsButton {...props} />
        };
      }
    },
    [routeNames.SETTINGS]: {
      screen: Settings,
      navigationOptions: () => {
        return {
          title: strings.SETTINGS
        };
      }
    }
  },
  {
    cardStyle: { backgroundColor: 'white', shadowColor: 'transparent' },
    initialRouteName: routeNames.JOYSTICK
  }
);

export default createAppContainer(AppNavigator);
