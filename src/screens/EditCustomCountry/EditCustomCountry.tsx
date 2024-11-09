import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { editCountry } from '../../redux/slices/customCountrySlice';
import { ButtonPrimary, TextInput } from '../../components';
import { HomeStackParamList } from '../../types/stackTypes';
import { CustomCountryItem } from '../../types';
import styles from './Styles';

type EditCountryProps = NativeStackScreenProps<HomeStackParamList, 'EditCustomCountry'>;

const EditCustomCountry: FC<EditCountryProps> = ({ route, navigation }) => {
    const { id, name, latitude, longitude, population } = route.params;
    const [countryName, setCountryName] = useState(name);
    const [countryLatitude, setCountryLatitude] = useState(latitude);
    const [countryLongitude, setCountryLongitude] = useState(longitude);
    const [countryPopulation, setCountryPopulation] = useState(population);

    const dispatch = useDispatch();

    const editCustomCountry = () => {
        const country: CustomCountryItem = {
            id,
            name: countryName,
            latitude: countryLatitude,
            longitude: countryLongitude,
            population: countryPopulation
        };
        dispatch(editCountry(country));
        navigation.goBack();
    }

    const goBack = () => navigation.goBack();

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>Edit your custom country</Text>
            <TextInput
                label='Country Name'
                value={countryName}
                onChangeText={setCountryName}
                style={styles.input}
            />
            <TextInput
                label='Latitude'
                value={countryLatitude.toString()}
                onChangeText={(text) => setCountryLatitude(Number(text))}
                style={styles.input}
            />
            <TextInput
                label='Longitude'
                value={countryLongitude.toString()}
                onChangeText={(text) => setCountryLongitude(Number(text))}
                style={styles.input}
            />
            <TextInput
                label='Population'
                value={countryPopulation.toString()}
                onChangeText={(text) => setCountryPopulation(Number(text))}
                style={styles.input}
            />
            <ButtonPrimary title='Edit' onPress={editCustomCountry} style={styles.saveButton} />
            <ButtonPrimary title='Cancel' onPress={goBack} style={styles.backButton} />
        </View>
    );
};

export default EditCustomCountry;