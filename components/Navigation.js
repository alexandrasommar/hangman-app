import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './Home';
import PlayScreen from './Play';



 const Navigation = StackNavigator({
  Home: { screen: HomeScreen },
  Play: { screen: PlayScreen }
});

export default Navigation;
