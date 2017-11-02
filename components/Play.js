import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';
import Button from 'react-native-button';


import { StackNavigator } from 'react-navigation';

export default class PlayScreen extends React.Component {
    constructor(props) {
        super(props);
        this.keys = [];
        this.state = {
          words: [],
          pressed: false,
          guess: [],
        }
        this.checkWord = this.checkWord.bind(this);
    }

    checkWord (letter, key) {
        this.keys.push(key);
        this.setState({ pressed: true, guess: this.state.guess.concat([letter])});
    }

    repeat (str, count) {
      var array = [];
      for(var i = 0; i < count;)
          array[i++] = str;
      return array.join('');
    }

    static navigationOptions = {
        title: 'Hangman',
    };
    componentDidMount () {
      fetch('http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=4ef59e275d175ab05800f28e09600811f390a4afcbcc9df7b')

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
          const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
                  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

          const buttonItems = alphabet.map((letter, key) =>

            <Button
              containerStyle={{padding:7, height:35, overflow:'hidden', borderRadius:4, marginTop: 10, backgroundColor: 'white'}}
              style={this.keys.includes(key) ? styles.disbutton : styles.singleButton}
              key={key}
              onPress={() => this.checkWord(letter, key)}
              disabled = {this.keys.includes(key) ? true : null} >
              {letter}
            </Button>

          );

         var displayWord = this.state.words.map((letter, key) => {
             var currentLetter = letter.word.toUpperCase();

             var displayLetter = '';
             for (var i = 0; i < currentLetter.length; i++) {
                 displayLetter += this.state.guess.find(x => x == currentLetter[i]) ? currentLetter[i] : '-';
             }
             return (<Text key={key} style={styles.dashes}>{displayLetter}</Text>)
         })

        return (
          <View style={styles.container}>
            <View style={styles.buttons}>
                {buttonItems}

            </View>
            {displayWord}

          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     flexDirection: 'column',

    backgroundColor: '#FFE6A4',

  },
  baseText: {
      color: '#fff',
  },
  buttons: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  singleButton: {
      color: 'green',
  },
  disButton: {
      color: 'white',
  },


  dashes: {
      flex: 1,
      fontSize: 44,
      textAlign: 'center',
      letterSpacing: 10,
  }
});
