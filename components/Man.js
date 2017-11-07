import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Man extends React.Component {

    render () {
        let visible = {
            hill: this.props.hill,
            firstgallows: this.props.firstgallows,
            secondgallows: this.props.secondgallows,
            thirdgallows: this.props.thirdgallows,
            fourthgallows: this.props.fourthgallows,
            head: this.props.head,
            eyeone: this.props.eyeone,
            eyetwo: this.props.eyetwo,
            body: this.props.body,
            leftArm: this.props.leftArm,
            rightArm: this.props.rightArm,
            leftLeg: this.props.leftLeg,
            rightLeg: this.props.rightLeg,
        }

        return (
            <View style={styles.wrapper}>
                <View style={visible.hill}>
                    <Image
                        source={require('../assets/img/hill.png')}
                    />
                </View>
                <View style={visible.firstgallows}>
                    <Image
                        source={require('../assets/img/firstgallows.png')}
                    />
                </View>
                <View style={visible.secondgallows}>
                    <Image
                        source={require('../assets/img/secondgallows.png')}
                    />
                </View>
                <View style={visible.thirdgallows}>
                    <Image
                        source={require('../assets/img/thirdgallows.png')}
                    />
                </View>
                <View style={visible.fourthgallows}>
                    <Image
                        source={require('../assets/img/fourthgallows.png')}
                    />
                </View>
                <View style={visible.head}>
                    <Image
                        source={require('../assets/img/head.png')}
                    />
                </View>
                <View style={visible.eyeone}>
                    <Image
                        source={require('../assets/img/eye.png')}
                    />
                </View>
                <View style={visible.eyetwo}>
                    <Image
                        source={require('../assets/img/eye.png')}
                    />
                </View>
                <View style={visible.body}>
                    <Image
                        source={require('../assets/img/body.png')}
                    />
                </View>
                <View style={visible.leftArm}>
                    <Image
                        source={require('../assets/img/leftarm.png')}
                    />
                </View>
                <View style={visible.rightArm}>
                    <Image
                        source={require('../assets/img/rightarm.png')}
                    />
                </View>
                <View style={visible.leftLeg}>
                    <Image
                        source={require('../assets/img/leftleg.png')}
                    />
                </View>
                <View style={visible.rightLeg}>
                    <Image
                        source={require('../assets/img/rightleg.png')}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
