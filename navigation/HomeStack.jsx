import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SubHomeScreen from '../screens/SubHomeScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Homee" component={HomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="SubHome" component={SubHomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})