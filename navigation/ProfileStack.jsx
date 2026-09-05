import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profilee" component={ProfileScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default ProfileStack;

const styles = StyleSheet.create({})