import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Font } from 'expo';

import { StackNavigator } from 'react-navigation';

import Navigation from './components/Navigation';


export default class App extends React.Component {

    render() {
        return (
          <View style={styles.container}>
            <Navigation />
          </View>

        );

    }
}



const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
    backgroundColor: '#FFE6A4',

  },
  baseText: {
      color: '#fff',
  },
});
