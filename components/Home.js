import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Font } from 'expo';


export default class HomeScreen extends React.Component {
    state = {
      fontLoaded: false,
    };
    async componentDidMount() {
        await Font.loadAsync({
          'kg': require('../assets/fonts/kg.ttf'),
        });
        this.setState({ fontLoaded: true });
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
          <View style={styles.container}>
              {
                  this.state.fontLoaded ? (
                  <Text style={{ fontFamily: 'kg', fontSize: 56, textAlign: 'center' }}>
                   HANGMAN
                  </Text>
                  ) : null
              }
            <Button
              onPress={() => navigate('Play')}
              title="Play"
              color='green'
            />
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
