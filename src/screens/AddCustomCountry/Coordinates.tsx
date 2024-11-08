import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ButtonPrimary, TextInput } from '../../components';
import { HomeStackParamList } from '../../types/stackTypes';
import styles from './Styles';

type CoordinatesScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Coordinates'>;

interface CoordinatesScreenProps {
    navigation: CoordinatesScreenNavigationProp;
}

const Coordinates: FC<CoordinatesScreenProps> = ({ navigation }) => {
    const [longitude, setLongitude] = useState<string>('');
    const [latitude, setLatitude] = useState<string>('');

    const goBack = () => navigation.goBack();
    const navigateToPopulation = () => navigation.navigate('Population');

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>Coordinates</Text>
            <View>
                <TextInput
                    label='Longitude'
                    value={longitude}
                    onChangeText={setLongitude}
                />
                <TextInput
                    label='Latitude'
                    value={latitude}
                    onChangeText={setLatitude}
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