import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

export default class InfoScreen extends React.Component {
    state = {
      fontLoaded: false,
    };
    async componentDidMount() {
        await Font.loadAsync({
          'kg': require('../assets/fonts/kg.ttf'),
        });
        this.setState({ fontLoaded: true });
    }
    render () {
        return (
            <View style={styles.container}>
                {
                    this.state.fontLoaded ? (
                    <Text style={{ fontFamily: 'kg', fontSize: 56, textAlign: 'center' }}>
                     HANGMAN
                    </Text>
                    ) : null
                }
                <Text style={styles.heading}>
                    Info about the game
                </Text>
                <Text>
                    Press button-letters to guess letter. If it is a correct guess,
                    the letter will be displayed among the dashes. If it is a wrong guess,
                    a part of hangman will be rendered on the screen. Good luck!
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     padding: 20,
  },
  heading: {
      fontSize: 20,
      lineHeight: 44,
  },
});
