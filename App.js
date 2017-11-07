import React from 'react';
import { StyleSheet, View } from 'react-native';

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
     backgroundColor: '#FFE6A4',
     flex: 1,
     justifyContent: 'center',
  }
});
