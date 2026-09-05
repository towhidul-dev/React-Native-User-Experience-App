import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStack from './HomeStack';
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            {/* Define your screens here */}

            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    headerShown: false,
                }}
            />

        </Tab.Navigator>
    );
};

export default AppNavigator;