import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ButtonPrimary, TextInput } from '../../components';
import { HomeStackParamList } from '../../types/stackTypes';
import styles from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAddableCountryPopulation } from '../../redux/slices/customCountrySlice';

type PopulationScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Population'>;

interface PopulationScreenProps {
    navigation: PopulationScreenNavigationProp;
}

const Population: FC<PopulationScreenProps> = ({ navigation }) => {
    const [population, setPopulation] = useState<string>('');
    const { addableCountryPopulation } = useSelector((state: RootState) => state.customCountry);
    const dispatch = useDispatch();

    const goBack = () => navigation.goBack();
    const navigateToSummary = () => navigation.navigate('Summary');

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>Population</Text>
            <TextInput
                label='Population'
                value={addableCountryPopulation.toString()}
                type='nummeric'
                onChangeText={text => dispatch(setAddableCountryPopulation(Number(text)))}
            />

            <View style={styles.bottomButtonsParent}>
                <ButtonPrimary title='Back' onPress={goBack} style={styles.groupedButton} />
                <ButtonPrimary title='Next' onPress={navigateToSummary} style={styles.groupedButton} />
            </View>
        </View>
    );
};

export default Population;