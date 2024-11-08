import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ButtonPrimary, TextInput } from '../../components';
import { HomeStackParamList } from '../../types/stackTypes';
import styles from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAddableCountryLat, setAddableCountryLng } from '../../redux/slices/customCountrySlice';

type CoordinatesScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Coordinates'>;

interface CoordinatesScreenProps {
    navigation: CoordinatesScreenNavigationProp;
}

const Coordinates: FC<CoordinatesScreenProps> = ({ navigation }) => {
    const [longitude, setLongitude] = useState<string>('');
    const [latitude, setLatitude] = useState<string>('');
    const { addableCountryLat, addableCountryLng } = useSelector((state: RootState) => state.customCountry);
    const dispatch = useDispatch();

    const goBack = () => navigation.goBack();
    const navigateToPopulation = () => navigation.navigate('Population');

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>Coordinates</Text>
            <View>
                <TextInput
                    label='Longitude'
                    value={addableCountryLng.toString()}
                    type='nummeric'
                    onChangeText={text => dispatch(setAddableCountryLng(Number(text)))}
                />
                <TextInput
                    label='Latitude'
                    value={addableCountryLat.toString()}
                    type='nummeric'
                    onChangeText={text => dispatch(setAddableCountryLat(Number(text)))}
                    style={{ marginTop: 20 }}
                />
            </View>
            <View style={styles.bottomButtonsParent}>
                <ButtonPrimary title='Back' onPress={goBack} style={styles.groupedButton} />
                <ButtonPrimary title='Next' onPress={navigateToPopulation} style={styles.groupedButton} />
            </View>
        </View>
    );
};

export default Coordinates;