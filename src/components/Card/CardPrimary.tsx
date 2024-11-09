import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

interface CardPrimaryProps {
    name: string;
    code: string;
    onPress: (name: string, code: string) => void;
    style?: StyleProp<ViewStyle>
}

const CardPrimary: FC<CardPrimaryProps> = ({
    name,
    code,
    onPress,
    style
}) => {
    return (
        <TouchableOpacity style={[styles.parent, style]} onPress={() => onPress(name, code)}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
};

export default CardPrimary;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        width: '80%',
        height: 100,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: Colors.END_BG,
        borderRadius: 5,
        marginBottom: 10,
    },
    text: {
        color: Colors.BLACK,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    }
});