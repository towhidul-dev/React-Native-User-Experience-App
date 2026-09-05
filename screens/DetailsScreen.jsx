import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const DetailsScreen = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>DetailsScreen</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({})