import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { addCountry, clearAddableCountryStates } from '../../redux/slices/customCountrySlice';
import { RootState } from '../../redux/store';
import { ButtonPrimary } from '../../components';
import { HomeStackParamList } from '../../types/stackTypes';
import { CustomCountryItem } from '../../types';
import styles from './Styles';

type SummaryScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Summary'>;

interface SummaryScreenProps {
    navigation: SummaryScreenNavigationProp;
}

const Summary: FC<SummaryScreenProps> = ({ navigation }) => {
    const { addableCountryName, addableCountryLat, addableCountryLng, addableCountryPopulation } = useSelector((state: RootState) => state.customCountry);
    const dispatch = useDispatch();

    const addCustomCountry = () => {
        const country: CustomCountryItem = {
            id: Date.now().toString(),
            name: addableCountryName,
            latitude: addableCountryLat,
            longitude: addableCountryLng,
            population: addableCountryPopulation,
        };
        dispatch(addCountry(country));
        navigation.navigate('CustomCountryList');
        dispatch(clearAddableCountryStates());
    }

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>Summary</Text>

            <View style={styles.summaryContainer}>
                <Text style={styles.summaryText}>Country Name: {addableCountryName}</Text>
                <Text style={styles.summaryText}>Latitude: {addableCountryLat}</Text>
                <Text style={styles.summaryText}>Longitude: {addableCountryLng}</Text>
                <Text style={styles.summaryText}>Population: {addableCountryPopulation}</Text>
            </View>

            <ButtonPrimary title='Add' onPress={addCustomCountry} />
        </View>
    );
};

export default Summary;