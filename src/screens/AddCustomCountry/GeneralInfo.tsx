import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ButtonPrimary, TextInput } from '../../components';
import { HomeStackParamList } from '../../types/stackTypes';
import styles from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAddableCountryName } from '../../redux/slices/customCountrySlice';

type GeneralInfoScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'CustomCountryList'>;

interface GeneralInfoScreenProps {
    navigation: GeneralInfoScreenNavigationProp;
}

const GeneralInfo: FC<GeneralInfoScreenProps> = ({ navigation }) => {
    const { addableCountryName } = useSelector((state: RootState) => state.customCountry);
    const dispatch = useDispatch();

    const navigateToCoordinates = () => navigation.navigate('Coordinates');

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>General Info</Text>
            <TextInput
                label='Country Name'
                value={addableCountryName}
                onChangeText={text => dispatch(setAddableCountryName(text))}
            />
            <ButtonPrimary title='Next' onPress={navigateToCoordinates} />
        </View>
    );
};

export default GeneralInfo;