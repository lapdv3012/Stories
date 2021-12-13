import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface OnSpace {
    height: number
}

const Space = (props: OnSpace) => {
    return (
        <View style={{ height: props.height }} />
    )
}

export default Space
