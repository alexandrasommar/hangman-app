import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';
import Button from 'react-native-button';
import Man from '../components/Man';


import { StackNavigator } from 'react-navigation';

export default class PlayScreen extends React.Component {
    constructor(props) {
        super(props);
        this.keys = [];
        this.state = {
          words: [],
          pressed: false,
          guess: [],
          wrong: [],
          gameOver: false,
          gameWon: false,
          hill: {height: 0, width: 0},
          firstgallows: {height: 0, width: 0},
          secondgallows: {height: 0, width: 0},
          thirdgallows: {height: 0, width: 0},
          fourthgallows: {height: 0, width: 0},
          head: {height: 0, width: 0},
          eyeone: {height: 0, width: 0},
          eyetwo: {height: 0, width: 0},
          body: {height: 0, width: 0},
          leftArm: {height: 0, width: 0},
          rightArm: {height: 0, width: 0},
          leftLeg: {height: 0, width: 0},
          rightLeg: {height: 0, width: 0},
        }

    }


    checkWord (letter, key) {
        this.keys.push(key);
        this.setState({ pressed: true});
        const currentKey = this.state.words.map((name, key) => {
            let currWord = name.word.toUpperCase();
            if (currWord.includes(letter)) {
                this.setState({guess: this.state.guess.concat([letter])});
            } else {
                this.setState({wrong: this.state.wrong.concat([letter])},
                this.countWrong
            );

            }
        })

    }

    countWrong () {
        switch (this.state.wrong.length) {
            case 1:
                return this.setState({
                    hill: {height: 100, width: 100, position: 'absolute', bottom: -10, left: 100}
                });
            case 2:
                return this.setState({
                    firstgallows: {height: 100, width: 100, position: 'absolute', bottom: 130, left: 158}
                });
            case 3:
                return this.setState({
                    secondgallows: {height: 100, width: 20, position: 'absolute', top: -215, left: 140}
                });
            case 4:
                return this.setState({
                    thirdgallows: {height: 20, width: 20, position: 'absolute', top: -217, left: 154}
                });
            case 5:
                return this.setState({
                    fourthgallows: {height: 20, width: 20, position: 'absolute', top: -220, left: 210}
                });
            case 6:
                return this.setState({
                    head: {height: 20, width: 20, position: 'absolute', top: -196, left: 200}
                });
            case 7:
                return this.setState({
                    eyeone: {height: 200, width: 200, position: 'absolute', top: -189, left: 204}
                });
            case 8:
                return this.setState({
                    eyetwo: {height: 200, width: 200, position: 'absolute', top: -189, left: 212}
                });
            case 9:
                return this.setState({
                    body: {height: 200, width: 200, position: 'absolute', top: -178, left: 200}
                });
            case 10:
                return this.setState({
                    leftArm: {height: 200, width: 200, position: 'absolute', top: -175, left: 184}
                });
            case 11:
                return this.setState({
                    rightArm: {height: 200, width: 200, position: 'absolute', top: -175, left: 221}
                });
            case 12:
                return this.setState({
                    leftLeg: {height: 200, width: 200, position: 'absolute', top: -134, left: 195}
                });
            case 13:
                return this.setState({
                    rightLeg: {height: 200, width: 200, position: 'absolute', top: -134, left: 216}, gameOver: true
                });

        }
    }

    winorLose () {
        const countWords = this.state.words.map((name, key) => {
            let curr = name.word.length;

            if (name.word.length == this.state.wrong.length) {
                console.log('Game over!');
            }
            if (name.word.length == this.state.guess.length) {
                this.setState({gameWon: true});
            }
        })
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
          const { navigate } = this.props.navigation;
          const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
                  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

          const buttonItems = alphabet.map((letter, key) =>

            <Button
              containerStyle={{padding:7, height:35, overflow:'hidden', borderRadius:4, margin: 5, backgroundColor: 'white'}}
              style={this.keys.includes(key) ? styles.disbutton : styles.singleButton}
              key={key}
              onPress={() => this.checkWord(letter, key)}
              disabled = {this.keys.includes(key) ? true : null} >
              {letter}
            </Button>

          );

         const displayWord = this.state.words.map((letter, key) => {
             var currentLetter = letter.word.toUpperCase();

             var displayLetter = '';
             for (var i = 0; i < currentLetter.length; i++) {
                 displayLetter += this.state.guess.find(x => x == currentLetter[i]) ? currentLetter[i] : '-';
             }
             return (<Text key={key} style={styles.dashes}>{displayLetter}</Text>);
         })

         const gameover = (<View style={styles.wrap}><Text style={styles.gameover}>GAME OVER!</Text><Text style={styles.newstart} onPress={() => navigate('Home')}>Play again</Text></View>);

         const gamewon =(<View style={styles.wrap}><Text style={styles.gameover}>YOU WON!</Text><Text style={styles.newstart} onPress={() => navigate('Home')}>Play again</Text></View>)


        return (
          <View style={styles.container}>
            <View style={styles.buttons}>
                {buttonItems}

            </View>

            {this.winorLose()}

            {this.state.gameOver ?
                gameover
                : this.state.gameWon ?
                gamewon
                : displayWord
            }
            {this.state.wrong.length==0 ? null : (
            <Man
                hill={this.state.hill}
                firstgallows={this.state.firstgallows}
                secondgallows={this.state.secondgallows}
                thirdgallows={this.state.thirdgallows}
                fourthgallows={this.state.fourthgallows}
                head={this.state.head}
                eyeone={this.state.eyeone}
                eyetwo={this.state.eyetwo}
                body={this.state.body}
                leftArm={this.state.leftArm}
                rightArm={this.state.rightArm}
                leftLeg={this.state.leftLeg}
                rightLeg={this.state.rightLeg}
            />
        )}


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
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: 330,
      marginLeft: 20,
      marginTop: 10,

  },
  singleButton: {
      color: 'green',

  },
  disButton: {
      color: 'white',

  },


  dashes: {
      flex: 1,
      fontSize: 28,
      textAlign: 'center',
      letterSpacing: 10,
      marginTop: 20,
  },
  wrap: {
      flex: 1,
      justifyContent: 'center',
      marginTop: -300,
      alignItems: 'center',
  },
  gameover: {
      fontSize: 20,
      textAlign: 'center',
      letterSpacing: 10,
  },
  newstart: {
      fontSize: 19,
      textAlign: 'center',
      backgroundColor: 'white',
      marginTop: 10,
      width: 100,
      padding: 5,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'white',
      overflow: 'hidden'

  }



});
