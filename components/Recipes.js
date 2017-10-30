import React from 'react';
import View from 'react-native';
import CatButton from './Button';

export default class Recipes extends React.Component {

    render() {
        return (
            <View>
                <CatButton click={this.props.showInfo} text='Asia'>Asia</CatButton>

            </View>
        )
    }


}
