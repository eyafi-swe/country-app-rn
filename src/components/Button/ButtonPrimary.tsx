import React, { FC } from 'react';
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

interface ButtonPrimaryProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
    title,
    onPress,
    disabled,
    style
}) => {
    return (
        <Pressable onPress={onPress} style={[styles.buttonParent, style]} disabled={disabled}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
    buttonParent: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.BTN_BG,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: Colors.WHITE,
        fontSize: 16,
        fontWeight: '500',
    }
});