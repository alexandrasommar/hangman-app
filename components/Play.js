import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Font } from 'expo';

import { StackNavigator } from 'react-navigation';

export default class PlayScreen extends React.Component {
    state = {
      words: [],
    }
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  componentDidMount () {
      fetch('http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=10&api_key=4ef59e275d175ab05800f28e09600811f390a4afcbcc9df7b')
      .then(response => response.json())
      .then(data => {
          this.setState({ words: data })
          console.log(data);
      })
      .catch((error) => {
          console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Chat with Lucy</Text>
        {
            this.state.words.map((name, index) => {
                return (<Text key={index}>{name.word}</Text>);
            })
        }
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
