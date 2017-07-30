/**
 * Created by sha on 12/5/17.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Animated,
    Easing,
} from 'react-native';

class AnimatedButton extends Component {
    static defaultProps = {
        // If the user of the component does not pass in a prop called 'onSwipeRight' then use this
        // default prop so that we can call it and there won't be any errors
        onPressAction: () => {},
        hollowBtn: false,
        onPressImmediately: false,
    };

    constructor(props) {
        super(props);
        this.triggerAnimation = this.triggerAnimation.bind(this);
    }

    componentWillMount(){
        this.animation = new Animated.Value(0);
    }

    triggerAnimation(){
        this.animation.setValue(0);

        // send the call back straight away
        if (this.props.onPressImmediately) {
            this.onAnimComplete()
        }

        Animated.timing(this.animation, {
            duration: 400,
            toValue: 3,
            ease: Easing.bounce,
        }).start( () => {
            if (!this.props.onPressImmediately) {
                this.onAnimComplete()
            }
        });
    }

    onAnimComplete() {
        this.props.onPressAction();
    }

    render() {
        const interpolated = this.animation.interpolate({
            inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
            outputRange: [0, -15, 0, 15, 0, -15, 0]
        });

        const shakeStyle = {
            // transform is an array
            transform: [
                { translateX: interpolated }
            ]
        };

        const btnStyle = this.props.hollowBtn === true ? styles.buttonHollow : styles.buttonSolid;
        const textStyle = this.props.hollowBtn === true ? styles.buttonHollowText : styles.buttonSolidText;

        const {
            button,
        } = styles;

        return (

            <View>
                <TouchableWithoutFeedback
                  onPress={
                    this.triggerAnimation
                  }
                >
                    <Animated.View style={[button, btnStyle, shakeStyle]}>
                        <Text style={textStyle}>
                          {this.props.title}
                        </Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = {
    button: {
        flex: 1,
        height: 60,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 20,
        borderWidth: 2,
        padding: 10,
    },
    buttonSolid: {
        backgroundColor: 'rgba(4, 125, 177, 1)',
        borderColor: 'rgba(4, 125, 177, 1)',
    },
    buttonSolidText: {
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 20,
        color: 'rgba(255,255,255,1)'
    },
    buttonHollow: {
        backgroundColor: 'transparent',
        borderColor: 'rgba(4, 125, 177, 1)',
    },
    buttonHollowText: {
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 20,
        color: 'rgba(4, 125, 177, 1)'
    },
};

export default AnimatedButton;
