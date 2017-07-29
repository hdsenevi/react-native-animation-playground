/**
 * Created by Shanaka Senevirathne (@hdsenevi) on 29/7/17.
 */

import React from 'react';

import {
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import SimpleStack from './SimpleStack';
import SampleText from './SampleText';

const ExampleRoutes = {
    SimpleStack: {
        name: 'Animated opacity/height',
        description: 'animated-timing-and-easing-to-animate-styles-of-a-react-native-view',
        screen: SimpleStack,
    },
};

const MainScreen = ({ navigation }) => (
    <ScrollView>
        {Object.keys(ExampleRoutes).map((routeName: string) =>
            <TouchableOpacity
                key={routeName}
                onPress={() => {
                    const { path, params, screen } = ExampleRoutes[routeName];
                    const { router } = screen;
                    const action = path && router.getActionForPathAndParams(path, params);
                    navigation.navigate(routeName, {}, action);
                }}
            >
                <View style={styles.item}>
                    <Text style={styles.title}>{ExampleRoutes[routeName].name}</Text>
                    <Text style={styles.description}>{ExampleRoutes[routeName].description}</Text>
                </View>
            </TouchableOpacity>
        )}
    </ScrollView>
);

const AppNavigator = StackNavigator({
    ...ExampleRoutes,
    Index: {
        screen: MainScreen,
    },
}, {
    initialRouteName: 'Index',
    headerMode: 'float',
    mode: 'card',
});

export default () => <AppNavigator />;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ddd',
    },
    image: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 20,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444',
    },
    description: {
        fontSize: 13,
        color: '#999',
    },
});