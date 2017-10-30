import React from 'react';
import Button from 'react-native-button';


export default class CatButton extends React.Component {
    render () {
        <Button
           style={{fontSize: 20, color: 'green'}}
           styleDisabled={{color: 'red'}}
           onPress={() => {this.props.showInfo()}}>
            {this.props.text}
        </Button>
    }


}
