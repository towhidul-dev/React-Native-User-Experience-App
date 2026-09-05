import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const SubHomeScreen = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>SubHomeScreen</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default SubHomeScreen;

const styles = StyleSheet.create({});