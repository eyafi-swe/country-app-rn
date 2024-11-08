import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'
import PlusIcon from '../IconComponents/PlusIcon'

interface FloatingPlusIconProps {
    onPress: () => void
    style?: StyleProp<ViewStyle>
}

const FloatingPlusIcon: FC<FloatingPlusIconProps> = ({ onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.plusButton, style]} onPress={onPress}>
            <PlusIcon />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    plusButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
})

export default FloatingPlusIcon