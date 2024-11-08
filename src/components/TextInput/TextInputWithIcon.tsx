import React, { FC, ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

interface TextInputProps {
    label?: string;
    value: string;
    type?: 'nummeric' | 'default';
    placeholder: string;
    icon: ReactNode;
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<ViewStyle>;
    onChangeText: (text: string) => void;
}

const TextInputWithIconComponent: FC<TextInputProps> = ({
    label,
    value,
    type,
    placeholder,
    icon,
    style,
    inputStyle,
    onChangeText,
}) => {
    return (
        <View style={[style]}>
            {label && <Text>{label}</Text>}
            <View style={styles.inputParent}>
                <TextInput
                    value={value}
                    keyboardType={type == 'nummeric' ? 'numeric' : 'default'}
                    onChangeText={text => onChangeText(text)}
                    placeholder={placeholder}
                    style={[inputStyle, styles.input]}
                />
                {icon}
            </View>
        </View>
    );
};

export default TextInputWithIconComponent;

const styles = StyleSheet.create({
    inputParent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.LIGHT_GRAY,
        padding: 0,
        marginVertical: 10,
    },
    input: {
        padding: 10,
    }
});