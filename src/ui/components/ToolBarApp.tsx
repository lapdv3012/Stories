import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../assets/resources/Colors'
import Dimens from '../../assets/resources/Dimens'
import Fonts from '../../assets/resources/Fonts'
import ImageAssets from '../../assets/resources/Icons'

interface OnToolBarApp {
    navigation: any,
    title: String
}

const ToolBarApp = (props: OnToolBarApp) => {
    const { title, navigation } = { ...props }
    return (
        <View style={styles.toolbar}>
            <TouchableOpacity onPress={navigation.goBack}  >
                <Image
                    style={{ width: Dimens.px_32, height: Dimens.px_32 }}
                    source={ImageAssets.ic_back}
                />
            </TouchableOpacity>
            <View style={{ marginStart: Dimens.px_12 }}>
                <Text style={[{
                    fontFamily: Fonts.fontRegular,
                    fontWeight: 'bold',
                    color: Colors.colorTextBlack
                }]}>{title}</Text>
            </View>
        </View>
    )
}

export default ToolBarApp

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12
    },
})
