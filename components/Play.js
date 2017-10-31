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
          key: -1,
        }
        this.checkWord = this.checkWord.bind(this);
    }
    checkWord (letter, key) {
        var word = this.state.words;
        this.keys.push(key);
        this.setState({ pressed: true, key: key})
        console.log(this.keys);

        if (word.includes(letter)) {
            console.log(true);
            return(<Text>Correct</Text>);
        } else {
            console.log(false);
            return(<Text>Wrong</Text>);
        }

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
          var newKeys = this.keys;
          const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
                  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
          const buttonItems = alphabet.map((letter, key) =>

            <Button
              containerStyle={{padding:7, height:35, overflow:'hidden', borderRadius:4, marginTop: 10, backgroundColor: 'white'}}
              style={{color: 'green'}}
              key={key}
              onPress={() => this.checkWord(letter, key)}
              disabled = {this.keys.includes(key) ? true : null} >
              {letter}
            </Button>

          );


          var repeat = function(str, count) {
            var array = [];
            for(var i = 0; i < count;)
                array[i++] = str;
            return array.join('');
        }

        const display = this.state.words.map((name, key) =>  {
          return (<Text key={key} style={styles.dashes}>{repeat('-',name.word.length)}</Text>)
        })


        return (
          <View style={styles.container}>
            <View style={styles.buttons}>
                {buttonItems}

            </View>

                {display}

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

  dashes: {
      flex: 1,
      fontSize: 44,
      textAlign: 'center',
      letterSpacing: 10,
  }
});
