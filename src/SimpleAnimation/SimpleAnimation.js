/**
 * Created by Shanaka Senevirathne (@hdsenevi) on 29/7/17.
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    Animated,
    Easing,
} from 'react-native';

class SimpleAnimation extends Component {
    componentWillMount() {
        this.animatedValue = new Animated.Value(100);
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 150,
            duration: 1000,
            easing: Easing.bounce,
        }).start();
    }

    render() {
        const animatedStyle = { height: this.animatedValue };

        return (
            <View style={styles.containerStyle}>
                <Text>
                    This is a button animation test
                </Text>
                <TouchableWithoutFeedback>
                    <View style={styles.container}>
                        <Animated.View style={[styles.box, animatedStyle]} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        paddingTop: 25,
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    box: {
        backgroundColor: '#333',
        width: 100,
        height: 100,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default SimpleAnimation;
