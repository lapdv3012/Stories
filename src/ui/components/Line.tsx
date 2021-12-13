import React from 'react'
import { View } from 'react-native'
import Colors from '../../assets/resources/Colors'
import Dimens from '../../assets/resources/Dimens'

interface OnLine {
    height?: number,
    background?: string
}

const Line = (props: OnLine) => {
    const { height, background } = { ...props }
    return (
        <View style={{
            height: height ? height : Dimens.px_1,
            backgroundColor: background ? background : Colors.colorNeutralGray
        }} />
    )
}

export default Line
