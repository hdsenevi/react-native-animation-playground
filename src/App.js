/**
 * Created by Shanaka Senevirathne (@hdsenevi) on 29/7/17.
 */

import React from 'react';

import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SimpleAnimation from './SimpleAnimation/SimpleAnimation';
import AnimatedButtonScreen from './AnimatedButton/AnimatedButtonScreen';

const ExampleRoutes = {
    SimpleAnimation: {
        name: 'Animated opacity/height',
        description: 'opacity/height animated view',
        screen: SimpleAnimation,
    },
    AnimatedButton: {
        name: 'Animated Button',
        description: 'animated button with shake',
        screen: AnimatedButtonScreen,
    },
};

function HomeScreen({ navigation }) {
    return (
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
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="SimpleAnimation" component={SimpleAnimation} />
                <Stack.Screen name="AnimatedButton" component={AnimatedButtonScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator();

export default App;

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