import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

interface TextInputProps {
    label?: string;
    value: string;
    type?: 'nummeric' | 'default';
    placeholder?: string;
    onChangeText: (text: string) => void;
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<ViewStyle>;
}

const TextInputComponent: FC<TextInputProps> = ({
    label,
    value,
    type,
    placeholder,
    onChangeText,
    style,
    inputStyle,
}) => {
    return (
        <View style={[style]}>
            {label && <Text>{label}</Text>}
            <TextInput
                value={value}
                keyboardType={type == 'nummeric' ? 'numeric' : 'default'}
                onChangeText={text => onChangeText(text)}
                placeholder={placeholder}
                style={[inputStyle, styles.input]}
            />
        </View>
    );
};

export default TextInputComponent;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.LIGHT_GRAY,
        padding: 10,
        marginVertical: 10,
    }
});