import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ButtonPrimary, TextInput } from '../../components';
import { HomeStackParamList } from '../../types/stackTypes';
import styles from './Styles';

type PopulationScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Population'>;

interface PopulationScreenProps {
    navigation: PopulationScreenNavigationProp;
}

const Population: FC<PopulationScreenProps> = ({ navigation }) => {
    const [population, setPopulation] = useState<string>('');

    const goBack = () => navigation.goBack();
    const navigateToSummary = () => navigation.navigate('Summary');

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>Population</Text>
            <TextInput
                label='Population'
                value={population}
                onChangeText={setPopulation}
            />

            <View style={styles.bottomButtonsParent}>
                <ButtonPrimary title='Back' onPress={goBack} style={styles.groupedButton} />
                <ButtonPrimary title='Next' onPress={navigateToSummary} style={styles.groupedButton} />
            </View>
        </View>
    );
};

export default Population;