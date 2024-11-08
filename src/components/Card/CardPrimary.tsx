import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

interface CardPrimaryProps {
    text: string;
    style?: StyleProp<ViewStyle>
}

const CardPrimary: FC<CardPrimaryProps> = ({
    text,
    style
}) => {
    return (
        <View style={[styles.parent, style]}>
            <Text style={styles.text}>{text}</Text>
        </View>
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