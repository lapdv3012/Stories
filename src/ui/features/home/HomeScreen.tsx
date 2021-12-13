import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const HomeScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate("ProfileScreen")
            }}>
                <Text>Click Profile</Text>
            </TouchableOpacity>
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({})
