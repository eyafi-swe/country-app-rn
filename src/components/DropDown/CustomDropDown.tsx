import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomDropDownProps {
    label?: string;
    options: string[];
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
}

const CustomDropDown: FC<CustomDropDownProps> = ({
    label,
    options,
    selected,
    setSelected,
}) => {
    const [visibility, setVisibility] = useState(false);

    const toggleDropdown = () => {
        setVisibility(!visibility);
    };

    const handleSelectOption = (option: string) => {
        setSelected(option);
        setVisibility(false);
    };

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
                <Text style={styles.selectedText}>{selected}</Text>
                <Text style={styles.icon}>{visibility ? '▲' : '▼'}</Text>
            </TouchableOpacity>

            {visibility && (
                <View style={styles.dropdownList}>
                    {options.map((option) => (
                        <TouchableOpacity
                            key={option}
                            style={styles.option}
                            onPress={() => handleSelectOption(option)}
                        >
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    selectedText: {
        fontSize: 16,
        width: '90%',
        color: '#333',
    },
    icon: {
        fontSize: 16,
        color: '#333',
    },
    dropdownList: {
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 4,
        marginTop: 4,
        backgroundColor: '#fff',
        elevation: 2,
    },
    option: {
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
});

export default CustomDropDown;
