import React from 'react';
import View from 'react-native';

export default class Dog extends React.Component {

    constructor() {
        super();
        this.state = {
            dogs: []
        }
    }


    fetchDogs() {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then(data => {
            this.setState({ dogs: data })
            console.log(data)
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render() {
       return (
          <View>
              hello
          </View>
       );
    }
}
