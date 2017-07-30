import React from 'react';
import { View } from 'react-native';

import AnimatedButton from './AnimatedButton';
import SampleText from '../utils/SampleText';

const styles = {
    containerStyle: {
        height: 70,
        padding: 5,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
    },
};

const AnimatedButtonScreen = () => (
    <View>
        <SampleText>Tap on the button to shake it</SampleText>

        <View style={styles.containerStyle}>
            <AnimatedButton
                title="Shake button"
            />
        </View>
    </View>
);

export default AnimatedButtonScreen;
