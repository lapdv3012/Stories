import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

interface StatusBarStyle {
    backgroundColor?: string,
    isLightContent?: boolean
}

const StatusBarApp = (props: StatusBarStyle) => {
    return (
        <View style={[styles.statusBar]}>
            <SafeAreaView>
                <StatusBar translucent backgroundColor={props.backgroundColor}
                    barStyle={props.isLightContent ? 'light-content' : 'dark-content'}>
                </StatusBar>
            </SafeAreaView>
        </View>
    )
}

export default StatusBarApp

const STATUBAR_HEIGHT = StatusBar.currentHeight
const APPBAR_HEIGHT = Platform.OS === 'android' ? 56 : 44

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    statusBar: {
        height: STATUBAR_HEIGHT
    },

})
